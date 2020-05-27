import React, { Component } from 'react';
import DroneCard from '../components/DroneCard'
import { Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap'
import { Breadcrumbs, Link, Typography } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import axios from 'axios';

class Drones extends Component {
	state = {
		drones : []
	}
	componentDidMount() {
    axios.get(`https://5ecdcfb77c528e00167cd7e5.mockapi.io/api/drones`)
      .then(res => {
        const drones = res.data;
        this.setState({ drones });
      })
      .catch(error => console.log(error));
  }
	render() {
		return (
			<div className="container drones">
				<div className="row breadcrumbs">
					<HomeIcon />
					<Breadcrumbs aria-label="breadcrumb">
						<Link color="inherit" href="/">
							Home
					    </Link>
						<Link color="inherit" href="/hi08">
							HI_08
					    </Link>
						<Typography color="textPrimary">drones</Typography>
					</Breadcrumbs>
				</div>
				<div className="row">
					<div className="col-lg-12">
						<InputGroup>
							<InputGroupAddon addonType="prepend">
								<InputGroupText>Find</InputGroupText>
							</InputGroupAddon>
							<Input placeholder="Drone name" />
						</InputGroup>
					</div>
				</div>
				<h3 style={{ textAlign: "center", padding: "10px" }}> Drones List</h3>
				<div className="row">

					{this.state.drones.map((drone) => {
						return (
							<div className="col-lg-3 drone-card">
								<DroneCard drone={drone}/>
							</div>
						)
					})}
				</div>

			</div>
		);
	}
}

export default Drones;