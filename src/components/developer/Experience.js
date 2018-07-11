import React from 'react'
import Menu from './Menu'
import {revealeffect} from '../../Utils'
import codeImage from '../../images/code.jpg'

class Experience extends React.Component {

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

          <div className="col-sm-7 scroll-reveal__sequence-container">

            <div className="row justify-content-start mt-5 mb-4 scroll-reveal--sequenced">
              <div className="col-sm-7">
                <div className="border border-secondary p-2 timeline-block right text-right">
                  <p>27th June, 1991</p>
                </div>
              </div>
            </div>

            <div className="row justify-content-end mb-4 scroll-reveal--sequenced">
              <div className="col-sm-7">
                <div className="border border-secondary p-2 timeline-block left">
                  <p>SSC, Maharashtra Board, <span className="text-secondary">85.38%</span></p>
                </div>
              </div>
            </div>

            <div className="row justify-content-start mb-4 scroll-reveal--sequenced">
              <div className="col-sm-7">
                <div className="border border-secondary p-2 timeline-block right text-right">
                  <p>HSC, Maharashtra Board, <span className="text-secondary">82.66%</span></p>
                </div>
              </div>
            </div>

            <div className="row justify-content-end mb-4 scroll-reveal--sequenced">
              <div className="col-sm-7">
                <div className="border border-secondary p-2 timeline-block left">
                  <p>B.E., Mumbai University, <span className="text-secondary">60%</span></p>
                </div>
              </div>
            </div>

            <div className="row justify-content-start mb-4 scroll-reveal--sequenced">
              <div className="col-sm-7">
                <div className="border border-secondary p-2 timeline-block right text-right">
                  <p>Tecogis,<span className="text-secondary"> Php Web Developer</span></p>
                </div>
              </div>
            </div>

            <div className="row justify-content-end mb-4 scroll-reveal--sequenced">
              <div className="col-sm-7">
                <div className="border border-secondary p-2 timeline-block left">
                  <p>Directi - Media.net, <span className="text-secondary">Sr. UI Developer</span></p>
                </div>
              </div>
            </div>

            <div className="row justify-content-start mb-4 scroll-reveal--sequenced">
              <div className="col-sm-7">
                <div className="border border-secondary p-2 timeline-block right text-right none">
                  <p>{`Somethin's Cookin'`}</p>
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

export default Experience;
