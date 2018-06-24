import React from 'react'
import codeImage from '../../images/code.jpg'
import Tilt from 'react-tilt'
import Menu from './Menu'

class Developer extends React.Component {
  render () {
    return <main className="main imgloaded">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4">
            <Menu />
          </div>
          <div className="col-sm-8">

            <h2 className="text-sm-right mt-5 intro site-heading">Hello, My name is <span className="text-color">Dhawal </span>Mehta. I’m a <span className="text-secondary">Full Stack Developer</span> & a Web/Tech <span className="text-secondary">Enthusiast.</span></h2>

          </div>
        </div>
      </div>

      <div className="background-image">
        <Tilt className="Tilt" options={{ max : 15 , scale:1,}} >
          <img src={codeImage} alt="" className="Tilt-inner img-fluid home-img"/>
        </Tilt>
      </div>
    </main>
  }
}

export default Developer;
