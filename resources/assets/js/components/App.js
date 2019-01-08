import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Common/Navbar';
import Upload from './Upload';
import Modal from './Common/Modal';
// import Gallery from 
import 'bootstrap/dist/css/bootstrap.css';

export default class App extends Component {
  render () {
    return (
      <React.Fragment>
        <Navbar/>
        <div className="alert alert-primary" role="alert">
  This is a primary alert—check it out!
</div>
        <Switch>
          <Route path="/upload" exact   component={Upload}></Route>
        </Switch>
        <Modal/>
        <Upload/>
      </React.Fragment>
    )
  }
}
