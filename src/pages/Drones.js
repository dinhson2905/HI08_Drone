import React, { Component } from 'react';
import DroneCard from '../components/DroneCard'
import { Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap'
class Drones extends Component {
    render() {
        return (
            <div className="container drones">
                <div className="row">
                    <div className="col-lg-12">
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>Find</InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="Drone name"/>
                        </InputGroup>
                    </div>
                </div>
                <h3 style={{textAlign:"center", padding:"10px"}}> Drones List</h3>
                <div className="row">
                    
                    {[1, 2, 3, 4, 5 ,6, 7, 8, 9, 10].map(() => {
                        return (
                            <div className="col-lg-3 drone-card">
                                <DroneCard />
                            </div>
                        )
                    })}
                </div>

            </div>
        );
    }
}

export default Drones;