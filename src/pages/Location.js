import React, { Component } from 'react';
import Location_map from '../components/DashboardLocation'
import DroneInfor from '../components/DashboardDroneStatistic'
import ProjectTable from '../components/DashboardProjectTable'
import { Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap'
class Location extends Component {
    render() {
        return (
            <div className="container location">
                <div className="row">
                    <div className="col-lg-9">
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>Find</InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="Drone name"/>
                        </InputGroup>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-9">
                        <Location_map />
                    </div>
                    <div className="col-lg-3">
                        <DroneInfor />
                    </div>
                </div>
                <div className="row">
                    <ProjectTable />
                </div>
            </div>
        );
    }
}

export default Location;