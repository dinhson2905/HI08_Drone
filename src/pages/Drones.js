import React, { Component } from 'react';
import DroneCard from '../components/DroneCard'
import { Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap'
import { Breadcrumbs, Link, Typography } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import { MDBInput, MDBCol, MDBIcon,MDBFormInline } from "mdbreact";
import PopUp from "../components/DronePopUp"

class Drones extends Component {
	state = {
		drones: [],
		keyword: ""
	}
	
	enterDroneName = event => {
		this.setState({
			keyword: event.target.value
		})
	}

	renderDrones = () => {
		const drone_list = this.state.drones.filter((data) => {
			if (this.state.keyword != "") {
				if (data.name.toLowerCase().includes(this.state.keyword.toLowerCase())) {
					return data;
				}
			}
			else {
				return data;
			}
		}).map((drone) => {
			return (
				<div className="col-lg-3 drone-card">
					<DroneCard drone={drone} />
				</div>
			)
		})

		return drone_list
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
					<div className="col-lg-9">
							<MDBFormInline className="md-form">
								<MDBIcon icon="search" />
      							{/* <MDBInput hint="Drone Name" type="text" containerClass="active-pink active-pink-2 mt-0  mb-3" onChange={this.enterDroneName} /> */}
								  <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Drone name" aria-label="Search" onChange={this.enterDroneName}/>
							</MDBFormInline>
					</div>
					<div className="col-lg-3">
							<PopUp />
					</div>
				</div>
				<h3 style={{ textAlign: "center", padding: "10px" }}> Drones List</h3>
				<div className="row">
					{this.renderDrones()}
					{/* {this.state.drones.map((drone) => {
						return (
							<div className="col-lg-3 drone-card">
								<DroneCard drone={drone}/>
							</div>
						)
					})} */}
				</div>

			</div>
		);
	}
}

export default Drones;