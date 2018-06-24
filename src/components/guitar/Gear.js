import React from 'react'
import normalImage from '../../images/normal.jpg'
import Menu from './Menu'
import guitarImage from '../../images/guitar/prs-se.png'
import helixImage from '../../images/guitar/helix.png'

class Gear extends React.Component {
  render () {
    return <main className="main">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4 text-right order-sm-1">
            <Menu />
          </div>
          <div className="col-sm-8">
            <h3 className="site-heading">My Gear.</h3>
            <div className="row">
              <div className="col-sm-4">
                <h4 className="text-center">PRS SE Custom 24</h4>
                <img src={guitarImage} alt="" className="img-fluid"/>
              </div>
              <div className="col-sm-8">
                <h4 className="text-center">Line 6 Helix LT</h4>
                <img src={helixImage} alt="" className="img-fluid"/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="background-image">
        <img src={normalImage} alt="" className="Tilt-inner img-fluid home-img opaque"/>
      </div>
    </main>
  }
}

export default Gear;
