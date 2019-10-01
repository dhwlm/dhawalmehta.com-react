import React from 'react'
import $ from 'jquery';

class Contact extends React.Component {
  constructor(){
    super();

    this.state = {
      name: "",
      email: "",
      message: "",
      sent:false,
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleInputChange(e){
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    // get our form data out of state
    const name = this.state.name;
    const email = this.state.email;
    const message = this.state.message;

    let _this = this;

    $.ajax({
      type: 'POST',
      url: '../mail/contact_me.php',
      data: {name, email, message},
      success: function (response) {
        console.dir(response);
        _this.setState({
          name: "",
          email: "",
          message: "",
          sent: true,
        });
      },
      fail: function (err) {
        console.dir(err);
      }
    });
  }

  render () {
    return <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm-8">
          <form netlify name="contact">
            <input type="hidden" value="prayer" />
            <fieldset>
              <legend>Contact me.</legend>

              <div className="control">
                <input type="text" name="name" id="name" value={this.state.name} placeholder="What should I call you?" onChange={this.handleInputChange} autoFocus required autoComplete="name"/>
                <label htmlFor="name">Name</label>
              </div>

              <div className="control">
                <input type="email" id="email" name="email" value={this.state.email} placeholder="Where can I reach you?" onChange={this.handleInputChange} required autoComplete="email"/>
                <label htmlFor="email">e-mail</label>
              </div>

              <div className="control">
                <textarea id="message" name="message" value={this.state.message} placeholder="What's on your mind?" onChange={this.handleInputChange} required>
                </textarea>
                <label htmlFor="message">Message</label>
              </div>

              <input type="submit" value="send" />

              {this.state.sent?(
                <span className="mx-3 text-success">
                  Your message has been sent successfully!
                </span>
              ):(
                ""
              )}

            </fieldset>

          </form>
        </div>
      </div>
    </div>
  }
}

export default Contact;
