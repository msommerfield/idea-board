import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import HomePage from './components/HomePage.js'
import LogInPage from './components/LogInPage.js'
import IdeaPage from './components/IdeaPage.js'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LogInPage} />
        <Route path="/user/:userId" component={IdeaPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
