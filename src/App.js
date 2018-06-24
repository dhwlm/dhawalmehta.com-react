import React from 'react';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import './App.css';

import ToggleSwitch from './components/Switch'

import Guitar from './components/guitar/Guitar'
import AcrossSeconds from './components/guitar/AcrossSeconds'
import Gear from './components/guitar/Gear'
import GuitarClasses from './components/guitar/GuitarClasses'

import Developer from './components/developer/Developer'
import Experience from './components/developer/Experience'
import Skills from './components/developer/Skills'
import Interests from './components/developer/Interests'
import Projects from './components/developer/Projects'

import Contact from './components/Contact'

class App extends React.Component {
  render () {
    return <div className="d-flex h-100 flex-column px-5">

      <Switch>
        <Redirect exact from="/" to="/guitar" />
        <Route exact path='/guitar' component={Guitar}/>
        <Route exact path='/guitar/acrossseconds' component={AcrossSeconds}/>
        <Route exact path='/guitar/guitarclasses' component={GuitarClasses}/>
        <Route exact path='/guitar/gear' component={Gear}/>

        <Route exact path='/developer' component={Developer}/>
        <Route path='/developer/experience' component={Experience}/>
        <Route path='/developer/skills' component={Skills}/>
        <Route path='/developer/interests' component={Interests}/>
        <Route path='/developer/projects' component={Projects}/>

        <Route path='/contact' component={Contact}/>
      </Switch>

      <div className=""></div>
      <ToggleSwitch />
      <Link to="/contact" className="work-with-me">Work with me</Link>

    </div>
  }
}

export default App;
