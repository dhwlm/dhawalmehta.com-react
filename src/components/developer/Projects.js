import React from 'react'
import Menu from './Menu'

class Projects extends React.Component {
  render () {
    return <main className="main imgloaded">
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <Menu />
          </div>
        </div>
      </div>

    </main>
  }
}

export default Projects;
