import React from 'react';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import OnImagesLoaded from 'react-on-images-loaded';

import ToggleSwitch from './components/Switch'

import Guitar from './components/guitar/Guitar'
import Gear from './components/guitar/Gear'
import Gallery from './components/guitar/Gallery'

import Developer from './components/developer/Developer'
import Experience from './components/developer/Experience'
import Skills from './components/developer/Skills'
import Interests from './components/developer/Interests'
import Projects from './components/developer/Projects'

import Contact from './components/Contact'

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      isLoading: true
    }
  }
  render () {
    return <div className="d-flex h-100 flex-column px-0 px-sm-5">
      <OnImagesLoaded
        onLoaded={() => this.setState({isLoading: false})}
        onTimeout={() => this.setState({isLoading: false})}
        timeout={7000}
        >

        <Switch>
          <Redirect exact from="/" to="/developer" />
          <Route exact path='/guitar' component={Guitar}/>
          <Route exact path='/guitar/gear' component={Gear}/>
          <Route exact path='/guitar/gallery' component={Gallery}/>

          <Route exact path='/developer' component={Developer}/>
          <Route path='/developer/experience' component={Experience}/>
          <Route path='/developer/skills' component={Skills}/>
          <Route path='/developer/interests' component={Interests}/>
          <Route path='/developer/projects' component={Projects}/>

          <Route path='/contact' component={Contact}/>
        </Switch>

        {
          this.state.isLoading?(
            <div className="loading"></div>
          ):(
            ''
          )
        }

        <ToggleSwitch />
        <Link to="/contact" className="work-with-me">Work with me</Link>
      </OnImagesLoaded>
    </div>
  }
}

export default App;
