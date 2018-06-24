import React from 'react'
import normalImage from '../../images/normal.jpg'
import Tilt from 'react-tilt'
import Menu from './Menu'

class Guitar extends React.Component {
  render () {
    return <main className="main">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-5 text-right order-sm-1">
            <Menu />
          </div>
          <div className="col-sm-7">
            <h2 className="mt-5 intro--guitar">Hello, My name is <span className="text-color-2">Dhawal </span>Mehta. I’m a <span className="text-secondary">Guitarist</span> & a Guitar <span className="text-secondary">Tutor.</span></h2>
          </div>

        </div>
      </div>

      <div className="background-image">
        <Tilt className="Tilt" options={{ max : 15 , scale:1,}} >
          <img src={normalImage} alt="" className="Tilt-inner img-fluid home-img"/>
        </Tilt>
      </div>
    </main>
  }
}

export default Guitar;
