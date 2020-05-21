import React, { Component } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Location from './pages/Location'
import HomePage from './pages/HomePage';
import DashBoard from './pages/DashBoard'
import Projects from './pages/Projects'
import Drones from './pages/Drones'
import Members from './pages/Members'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/hi08">
              <DashBoard />
            </Route>
            <Route path="/hi08/location">
              <Location />
            </Route>
            <Route path="/hi08/drones">
              <Drones />
            </Route>
            <Route path="/hi08/projects">
              <Projects />
            </Route>
            <Route path="/hi08/members">
              <Members />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;