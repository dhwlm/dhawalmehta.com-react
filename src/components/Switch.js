import React from 'react'
import {NavLink} from 'react-router-dom'

class Switch extends React.Component {
  render () {
    return <div className="switch">
      <NavLink to="/guitar" className="switch__item" activeClassName="switch__item--current guitar-on">Guitarist</NavLink>
      <NavLink to="/developer" className="switch__item" activeClassName="switch__item--current dev-on">Developer</NavLink>
    </div>
  }
}

export default Switch;
