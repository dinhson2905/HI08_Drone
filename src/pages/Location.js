import React, { Component } from 'react';
import Location_map from '../components/DashboardLocation'
import ProjectTable from '../components/DashboardProjectTable'
import { Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap'
import Typography from '@material-ui/core/Typography';
import DashboardTitle from '../components/DashboardTitle';
import Link from '@material-ui/core/Link';
import { Breadcrumbs} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';

class Location extends Component {
    render() {
        return (
            <div className="container location">
                <div className="row breadcrumbs">
                    <HomeIcon /> 
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link color="inherit" href="/">
                            Home
					    </Link>
                        <Link color="inherit" href="/hi08">
                            HI_08
					    </Link>
                        <Typography color="textPrimary">location</Typography>
                    </Breadcrumbs>
                </div>
                <div className="row">
                    <div className="col-lg-9">
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>Find</InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="Drone name" />
                        </InputGroup>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-9">
                        <Location_map />
                    </div>
                    <div className="col-lg-3">
                        <div>
                            <DashboardTitle>Drone 1</DashboardTitle>
                            <Typography component="p" variant="h6">
                                Wind: 20km/h
                            </Typography>
                            <Typography component="p" variant="h6">
                                Battery: 40%
                            </Typography>
                            <Typography component="p" variant="h6">
                                X : 17&deg;77'
                            </Typography>
                            <Typography component="p" variant="h6">
                                Y : 150&deg;99'
                            </Typography>
                            <Typography color="textSecondary" >
                                on 19 May, 2020
                            </Typography>
                            <div>
                                <Link color="primary" href="./drones/1" >
                                    View detail
                                </Link>
                            </div>
                        </div>
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