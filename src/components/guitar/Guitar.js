import React from 'react'
import normalImage from '../../images/normal.jpg'
import codeImage from '../../images/code.jpg'
import altImage from '../../images/alt.jpg'
import Tilt from 'react-tilt'
import Menu from './Menu'

class Guitar extends React.Component {
  render () {
    return <main className="main">
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">

          </div>
          <div className="col-6 text-right">
            <Menu />
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
