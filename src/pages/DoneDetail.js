import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardTitle } from 'reactstrap'
import DashboardTitle from '../components/DashboardTitle'
import Typography from '@material-ui/core/Typography';
import { Breadcrumbs, Link } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import axios from 'axios';
// import Table from 'reactstrap'

class DroneDetail extends Component {
    state = {
        droneId: this.props.match.params.droneID,
        drone: 0
    }
    componentDidMount() {
        axios.get(`https://5ecdcfb77c528e00167cd7e5.mockapi.io/api/drones/` + this.state.droneId)
            .then(res => {
                const drone = res.data;
                this.setState({ drone });
            })
            .catch(error => console.log(error));
        console.log(this.state.drone)
    }
    render() {
        return (
            <div className="container">
                <div className="row breadcrumbs">
                    <HomeIcon />
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link color="inherit" href="/">
                            Home
					    </Link>
                        <Link color="inherit" href="/hi08">
                            HI_08
					    </Link>
                        <Link color='inherit' href="/hi08/drones">drones</Link>
                        <Typography color="textPrimary">drone detail</Typography>
                    </Breadcrumbs>
                </div>
                <div className="row" >
                    <div className="col-lg-5">
                        <Card style={{ margin: "0px 0px 50px 0px ", padding: "50px 0px 50px 0px" }}>
                            <CardImg top width="100%" src={this.state.drone.avatar} />
                            <CardBody>
                                <CardTitle style={{ textAlign: "center" }}>{this.state.drone.name}</CardTitle>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-lg-7 drone_infor_table">
                        <h4 >Technical Specifications</h4>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Type </td>
                                    <td>{this.state.drone.type}</td>
                                </tr>
                                <tr>
                                    <td>Size </td>
                                    <td>{this.state.drone.size}</td>
                                </tr><tr>
                                    <td>Engines </td>
                                    <td>{this.state.drone.engines}</td>
                                </tr>
                                <tr>
                                    <td>Number of rotors </td>
                                    <td>{this.state.drone.number_rotors}</td>
                                </tr><tr>
                                    <td>Payload weight </td>
                                    <td>{this.state.drone.payload_weight}</td>
                                </tr><tr>
                                    <td>Flight time </td>
                                    <td>{this.state.drone.flight_time}</td>
                                </tr><tr>
                                    <td>Max data link range </td>
                                    <td>{this.state.drone.max_data_link_range}</td>
                                </tr>
                                <tr>
                                    <td>Power supple </td>
                                    <td>{this.state.drone.power_supply}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default DroneDetail;