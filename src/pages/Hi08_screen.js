import React, { Component } from 'react';
import SideBar from '../components/SideBar'
import Location from './Location'
import DashBoard from './DashBoard'
import Projects from './Projects'
import Drones from './Drones'
import Members from './Members'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
class Hi08_screen extends Component {
    render() {
        return (
            <div className="container-fluid" style={{ paddingLeft: 0 }} >
                <div class="row">
                    <div class="col-md-2"> <SideBar /></div>
                    <div class="col-md-9">
                        <Router>
                            <Switch>
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
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}

export default Hi08_screen;