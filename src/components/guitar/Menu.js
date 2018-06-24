import React from 'react'
import {NavLink} from 'react-router-dom'

class Menu extends React.Component {
  render () {
    return <ul className="list-unstyled guitar-menu menu">
      <li><a href="http://facebook.com/acrossseconds" rel="noopener noreferrer">Across Seconds <span className="small">&#8599;</span></a></li>
      <li><a href="http://guitarclasses.co.in/" target="_blank" rel="noopener noreferrer">Guitar Classes <span className="small">&#8599;</span></a></li>
      <li><NavLink to="/guitar/gear">My Gear</NavLink></li>
      <li><a href="https://www.instagram.com/dhwl_m/" target="_blank" rel="noopener noreferrer">Instagram <span className="small">&#8599;</span></a></li>
      <li><NavLink to="/guitar/gallery">Gallery</NavLink></li>
    </ul>
  }
}

export default Menu;
