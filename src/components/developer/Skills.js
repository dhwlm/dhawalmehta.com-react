import React from 'react'
import Menu from './Menu'
import {revealeffect} from '../../Utils'
import codeImage from '../../images/code.jpg'

class Skills extends React.Component {

  componentDidMount(){
    revealeffect();
  }

  render () {
    return <main className="main dev-page">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-5">
            <Menu />
          </div>
          <div className="col-sm-7 ">

            <div className="row mt-5 scroll-reveal__sequence-container">
              <div className="col-12 mb-4 scroll-reveal--sequenced">
                <div className="border border-secondary p-2 skill-block">
                  <p>HTML/CSS &mdash; <span className="text-secondary">9/10</span></p>
                </div>
              </div>

              <div className="col-12 mb-4 scroll-reveal--sequenced">
                <div className="border border-secondary p-2 skill-block">
                  <p>JavaScript/JQuery &mdash; <span className="text-secondary">8/10</span></p>
                </div>
              </div>

              <div className="col-12 mb-4 scroll-reveal--sequenced">
                <div className="border border-secondary p-2 skill-block">
                  <p>React &mdash; <span className="text-secondary">7/10</span></p>
                </div>
              </div>

              <div className="col-12 mb-4 scroll-reveal--sequenced">
                <div className="border border-secondary p-2 skill-block">
                  <p>PHP/MySQL &mdash; <span className="text-secondary">7/10</span></p>
                </div>
              </div>

              <div className="col-12 mb-4 scroll-reveal--sequenced">
                <div className="border border-secondary p-2 skill-block">
                  <p>Laravel/OpenCart/Wordpress/CodeIgniter/Magento &mdash; <span className="text-secondary">8/10</span></p>
                </div>
              </div>

              <div className="col-12 mb-4 scroll-reveal--sequenced">
                <div className="border border-secondary p-2 skill-block">
                  <p>Bootstrap 3/4 &mdash; <span className="text-secondary">9/10</span></p>
                </div>
              </div>

              <div className="col-12 mb-4 scroll-reveal--sequenced">
                <div className="border border-secondary p-2 skill-block">
                  <p>GIT &mdash; <span className="text-secondary">9/10</span></p>
                </div>
              </div>

              <div className="col-12 mb-4 scroll-reveal--sequenced">
                <div className="border border-secondary p-2 skill-block">
                  <p>PHOTOSHOP &mdash; <span className="text-secondary">6/10</span></p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="background-image">
        <img src={codeImage} alt="" className="Tilt-inner img-fluid home-img opaque"/>
      </div>
    </main>
  }
}

export default Skills;
