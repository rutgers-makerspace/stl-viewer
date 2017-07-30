import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Viewer from './Viewer.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Redirect exact from='/' to='/view/ww.stl'/>
            <Route path='/view/:fileName' component={Viewer}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
