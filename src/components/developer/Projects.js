import React from 'react'
import Menu from './Menu'
import {revealeffect} from '../../Utils'
import codeImage from '../../images/code.jpg'
import project1 from '../../images/projects/darshita-gillies.jpg'
import project2 from '../../images/projects/gia.jpg'
import project3 from '../../images/projects/careers.jpg'
import project4 from '../../images/projects/shefi.jpg'
import project5 from '../../images/projects/blu-dot.jpg'
import project6 from '../../images/projects/delete-whitelines.jpg'

class Projects extends React.Component {
  componentDidMount(){
    revealeffect(150);
  }
  render () {
    return <main className="main imgloaded">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4">
            <Menu />
          </div>

          <div className="col-sm-8 scroll-reveal__sequence-container">

            <div className="row">
              <div className="col-sm-6 mb-4 scroll-reveal--sequenced">
                <figure className="effect">
      						<img src={project1} alt="img18" />
      						<figcaption>
      							<h2>Darshita <span>Gillies</span></h2>
      							<p>Portfolio Website</p>
      							<a href="http://darshitagillies.com/" target="_blank" rel="noopener noreferrer">View more</a>
      						</figcaption>
      					</figure>
              </div>

              <div className="col-sm-6 mb-4 scroll-reveal--sequenced">
                <figure className="effect">
      						<img src={project2} alt="img18" />
      						<figcaption>
      							<h2>GIA <span>India</span></h2>
      							<p>Organisation Website with Job postings</p>
      							<a href="http://www.giaindia.in/" target="_blank" rel="noopener noreferrer">View more</a>
      						</figcaption>
      					</figure>
              </div>

              <div className="col-sm-6 mb-4 scroll-reveal--sequenced">
                <figure className="effect">
      						<img src={project3} alt="img18" />
      						<figcaption>
      							<h2>Careers <span>Media.net</span></h2>
      							<p>Job Listings using Wordpress</p>
      							<a href="http://careers.media.net" target="_blank" rel="noopener noreferrer">View more</a>
      						</figcaption>
      					</figure>
              </div>

              <div className="col-sm-6 mb-4 scroll-reveal--sequenced">
                <figure className="effect">
      						<img src={project4} alt="img18" />
      						<figcaption>
      							<h2>Shefi <span>Diamonds</span></h2>
      							<p>B2B E-Commerce Website</p>
      							<a href="http://shefidiamonds.com/" target="_blank" rel="noopener noreferrer">View more</a>
      						</figcaption>
      					</figure>
              </div>

              <div className="col-sm-6 mb-4 scroll-reveal--sequenced">
                <figure className="effect">
      						<img src={project5} alt="img18" />
      						<figcaption>
      							<h2>Blu-dot <span>Organisation</span></h2>
      							<p>Organisation Branding Website</p>
      							<a href="http://www.blu-dot.org/" target="_blank" rel="noopener noreferrer">View more</a>
      						</figcaption>
      					</figure>
              </div>

              <div className="col-sm-6 mb-4 scroll-reveal--sequenced">
                <figure className="effect">
      						<img src={project6} alt="img18" />
      						<figcaption>
      							<h2>Delete <span>Whitelines</span></h2>
      							<p>Atom Text Editor Package</p>
      							<a href="https://atom.io/packages/delete-whitelines" target="_blank" rel="noopener noreferrer">View more</a>
      						</figcaption>
      					</figure>
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

export default Projects;
