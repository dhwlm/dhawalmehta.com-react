import React from 'react'

class Contact extends React.Component {
  constructor(){
    super();

    this.state = {
      name: "name",
      email: "email",
      message: "message",
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e){
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  render () {
    return <div className="container">
      <div className="row justify-content-center">
        <div className="col-8">
          <form>
            <input type="hidden" value="prayer" />
            <fieldset>
              <legend>Contact me.</legend>

              <div className="control">
                <input type="text" name={this.state.name} id="name" placeholder="What should I call you?" onChange={this.handleInputChange} autoFocus required autoComplete="name"/>
                <label htmlFor="name">Name</label>
              </div>

              <div className="control">
                <input type="email" id="email" name={this.state.email} placeholder="Where can I reach you?" onChange={this.handleInputChange} required  autoComplete="email"/>
                <label htmlFor="email">e-mail</label>
              </div>

              <div className="control">
                <textarea id="message" name={this.state.message} placeholder="What's on your mind?" onChange={this.handleInputChange} required>
                </textarea>
                <label htmlFor="message">Message</label>
              </div>

              <input type="submit" value="send" />

            </fieldset>

          </form>
        </div>
      </div>
    </div>
  }
}

export default Contact;
