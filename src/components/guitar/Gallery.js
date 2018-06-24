import React from 'react'
import normalImage from '../../images/normal.jpg'
import Menu from './Menu'
import OnImagesLoaded from 'react-on-images-loaded';

import img1 from '../../images/guitar/gallery/dhawal-mehta-1.jpg'
import img2 from '../../images/guitar/gallery/dhawal-mehta-2.jpg'
import img3 from '../../images/guitar/gallery/dhawal-mehta-3.jpg'
import img4 from '../../images/guitar/gallery/dhawal-mehta-4.jpg'
import img5 from '../../images/guitar/gallery/dhawal-mehta-5.jpg'
import img6 from '../../images/guitar/gallery/dhawal-mehta-6.jpg'
import img7 from '../../images/guitar/gallery/dhawal-mehta-7.jpg'
import img8 from '../../images/guitar/gallery/dhawal-mehta-8.jpg'
import img9 from '../../images/guitar/gallery/dhawal-mehta-9.jpg'
import img10 from '../../images/guitar/gallery/dhawal-mehta-10.jpg'
import img11 from '../../images/guitar/gallery/dhawal-mehta-11.jpg'
import img12 from '../../images/guitar/gallery/dhawal-mehta-12.jpg'
import img13 from '../../images/guitar/gallery/dhawal-mehta-1.jpg'
import img14 from '../../images/guitar/gallery/dhawal-mehta-14.jpg'
import img15 from '../../images/guitar/gallery/dhawal-mehta-15.jpg'
import img16 from '../../images/guitar/gallery/dhawal-mehta-16.jpg'
import img17 from '../../images/guitar/gallery/dhawal-mehta-17.jpg'
import img18 from '../../images/guitar/gallery/dhawal-mehta-18.jpg'
import img19 from '../../images/guitar/gallery/dhawal-mehta-19.jpg'
import img20 from '../../images/guitar/gallery/dhawal-mehta-20.jpg'
import img21 from '../../images/guitar/gallery/dhawal-mehta-21.jpg'
import img22 from '../../images/guitar/gallery/dhawal-mehta-22.jpg'
import img23 from '../../images/guitar/gallery/dhawal-mehta-23.jpg'
import img24 from '../../images/guitar/gallery/dhawal-mehta-24.jpg'
import img25 from '../../images/guitar/gallery/dhawal-mehta-25.jpg'
import img26 from '../../images/guitar/gallery/dhawal-mehta-26.jpg'
import img27 from '../../images/guitar/gallery/dhawal-mehta-27.jpg'
import img28 from '../../images/guitar/gallery/dhawal-mehta-28.jpg'
import img29 from '../../images/guitar/gallery/dhawal-mehta-29.jpg'

class Gallery extends React.Component {
  constructor(){
    super();

    this.state = {
      isLoading: true
    }
  }
  render () {
    return <main className="main">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4 text-right order-sm-1">
            <Menu />
          </div>
          <div className="col-sm-8">
            <h3 className="site-heading">Gallery.</h3>
            <OnImagesLoaded
              onLoaded={() => this.setState({isLoading: false})}
              onTimeout={() => this.setState({isLoading: false})}
              timeout={7000}
              >
              <div id="grid">
                <img src={img1} alt="" className="img-fluid"/>
                <img src={img2} alt="" className="img-fluid"/>
                <img src={img3} alt="" className="img-fluid"/>
                <img src={img4} alt="" className="img-fluid"/>
                <img src={img5} alt="" className="img-fluid"/>
                <img src={img6} alt="" className="img-fluid"/>
                <img src={img7} alt="" className="img-fluid"/>
                <img src={img8} alt="" className="img-fluid"/>
                <img src={img9} alt="" className="img-fluid"/>
                <img src={img10} alt="" className="img-fluid"/>
                <img src={img11} alt="" className="img-fluid"/>
                <img src={img12} alt="" className="img-fluid"/>
                <img src={img13} alt="" className="img-fluid"/>
                <img src={img14} alt="" className="img-fluid"/>
                <img src={img15} alt="" className="img-fluid"/>
                <img src={img16} alt="" className="img-fluid"/>
                <img src={img17} alt="" className="img-fluid"/>
                <img src={img18} alt="" className="img-fluid"/>
                <img src={img19} alt="" className="img-fluid"/>
                <img src={img20} alt="" className="img-fluid"/>
                <img src={img21} alt="" className="img-fluid"/>
                <img src={img22} alt="" className="img-fluid"/>
                <img src={img23} alt="" className="img-fluid"/>
                <img src={img24} alt="" className="img-fluid"/>
                <img src={img25} alt="" className="img-fluid"/>
                <img src={img26} alt="" className="img-fluid"/>
                <img src={img27} alt="" className="img-fluid"/>
                <img src={img28} alt="" className="img-fluid"/>
                <img src={img29} alt="" className="img-fluid"/>
              </div>
            </OnImagesLoaded>
          </div>
        </div>
      </div>
      <div className="background-image">
        <img src={normalImage} alt="" className="Tilt-inner img-fluid home-img opaque"/>
      </div>

      {
        this.state.isLoading?(
          <div className="loading"></div>
        ):(
          ''
        )
      }
    </main>
  }
}

export default Gallery;
