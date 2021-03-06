import React, { Component } from 'react';
import Nav from './components/Nav';         // header
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SideBar from './components/SideBar'
import Location from './pages/Location'
import DashBoard from './pages/DashBoard'
import Drones from './pages/Drones'
import Members from './pages/Members'
import DroneDetail from './pages/DoneDetail'
import './App.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid" style={{ padding: 0 }}>
          <Nav />
          <Switch>
            <Route exact path="/">
              <HomePage />
              <Footer />
            </Route>
            <Route path="/hi08">
              <div className="container-fluid" >
                <div className="row">
                  <div className="col-md-2 " style={{padding:"0px"}}> <SideBar /> </div>
                  <div className="col-md-10 content" style={{padding:"0px"}}>
                    <Route exact path="/hi08">
                      <DashBoard />
                    </Route>
                    <Route path="/hi08/location">
                      <Location />
                    </Route>
                    <Route exact path="/hi08/drones">
                      <Drones />
                    </Route>
                    <Route path="/hi08/members">
                      <Members />
                    </Route>
                    <Route path="/hi08/drones/:droneID" render={(props) => <DroneDetail {...props}/>}>
                    </Route>
                    <Footer />
                  </div>
                </div>
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;