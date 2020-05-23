import React, { Component } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Hi_08_Screen from './pages/Hi08_screen';
import HomePage from './pages/HomePage';
import './App.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

class App extends Component {
  state = {
    Link : ['Home']
  }
  _updateLink=(value)=>{
    this.state.Link.push(value)
  }   
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/hi08/">
              <Hi_08_Screen _updateLink = {this._updateLink} />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;