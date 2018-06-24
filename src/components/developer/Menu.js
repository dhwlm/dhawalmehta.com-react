import React from 'react'
import {NavLink} from 'react-router-dom'

class Menu extends React.Component {
  render () {
    return <ul className="list-unstyled dev-menu menu">
      <li><NavLink to="/developer/experience" activeClassName="text-secondary">Experience</NavLink></li>
      <li><NavLink to="/developer/skills" activeClassName="text-secondary">Skills</NavLink></li>
      <li><NavLink to="/developer/interests" activeClassName="text-secondary">Interests</NavLink></li>
      <li><NavLink to="/developer/projects" activeClassName="text-secondary">Projects</NavLink></li>
      <li><a href="http://blog.dhawalmehta.com" target="_blank" rel="noopener noreferrer">Blog <span className="small">&#8599;</span> </a></li>
      <li><a href="https://github.com/dhwlm" target="_blank" rel="noopener noreferrer">Github <span className="small">&#8599;</span> </a></li>
      <li><a href="https://www.linkedin.com/in/dhwlm/" target="_blank" rel="noopener noreferrer">Linkedin <span className="small">&#8599;</span> </a></li>
    </ul>
  }
}

export default Menu;
