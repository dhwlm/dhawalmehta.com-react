import React from 'react'
import Menu from './Menu'
import {revealeffect} from '../../Utils'
import codeImage from '../../images/code.jpg'

class Interests extends React.Component {
  componentDidMount(){
    revealeffect(30);
  }

  render () {
    const interests = [
      "Power Web Surfing",
      "Trends in Web Developement",
      "CSS tricks",
      "Creative Web Design",
      "SEO",
      "Plugin Development",
      "Laravel",
      "Parallex Design",
      "Lucid Architecture",
      "Trends in Web Design",
      "VS Code",
      "Dashboard Design",
      "Analytics",
      "Web Optimiztions",
      "Rich UI",
      "Web Development Tools",
      "Animation Effects",
      "User Interaction and UX",
      "Atom",
      "Large Application Architecture",
      "Functional Programming",
      "Oops Concepts",
      "Big Data Reporting",
      "Application Scaling",
      "Firebase",
      "Socket Based Apps",
      "APIs",
      "Promises",
      "Portfolio Development",
      "E-commerce",
    ];
    return <main className="main imgloaded">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-5">
            <Menu />
          </div>
          <div className="col-sm-7">

            <div className="row mt-5">
              <div className="col scroll-reveal__sequence-container">
                {interests.map(function (value,i) {
                  return ([
                    <span key={i} className="badge badge-secondary custom-badge m-2 background-secondary p-3 box-shadow scroll-reveal--sequenced">
                      {value}
                    </span>
                  ]);
                })}
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

export default Interests;
