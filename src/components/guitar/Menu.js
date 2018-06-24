import React from 'react'
import {NavLink} from 'react-router-dom'

class Menu extends React.Component {
  render () {
    return <ul className="list-unstyled guitar-menu menu">
      <li><NavLink to="/guitar/acrossseconds">Across Seconds</NavLink></li>
      <li><NavLink to="/guitar/guitarclasses">Guitar Classes</NavLink></li>
      <li><NavLink to="/guitar/gear">My Gear</NavLink></li>
    </ul>
  }
}

export default Menu;
