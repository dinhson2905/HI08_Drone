import React, { Component } from 'react';
import Location_map from '../components/LocationMap'
import ProjectTable from '../components/DashboardProjectTable'
import { Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap'
import Typography from '@material-ui/core/Typography';
import DashboardTitle from '../components/DashboardTitle';
import Link from '@material-ui/core/Link';
import { Breadcrumbs } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';


class Location extends Component {
    state = {
        drone_list: [
            {
                id : "1",
                name: "drone 1",
                x: "117",
                y: "228",
                wind: 23,
                battery: 40,
                video_url: "https://www.youtube.com/embed/MWhox_M7WNk?autoplay=1",
                keyframes: [
                    "transform: translate(180px, -200px)",
                    "transform: translate(310px, -200px)",
                    "transform: translate(310px, -300px)",
                    "transform: translate(180px, -300px)",
                    "transform: translate(180px, -200px)"
                ],
            },
            {
                id : "2",
                name: "drone 2",
                x: "17",
                y: "2",
                wind: 17,
                Battery: 40,
                video_url: "https://www.youtube.com/embed/mFta0N3ghFU?autoplay=1",
                keyframes: [
                    "transform: translate(280px, -300px)",
                    "transform: translate(410px, -100px)",
                    "transform: translate(280px, -100px)",
                    "transform: translate(280px, -300px)"
                ],
            }
        ],
        drone_show: null,
    }

    _on_drone_click = data => {     
        console.log('data drone_show', data)
        this.setState({drone_show: data})
    }
    render_infor_drone() {
        if (this.state.drone_show != null) {
            if (this.state.drone_show === "1") {
                return (
                    <div>
                        <DashboardTitle>Drone 1</DashboardTitle>
                        <div>
                            <iframe width="250" height="200" src={this.state.drone_list[0].video_url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div>
                            <Typography component="p" variant="h6">
                                Wind: {this.state.drone_list[0].wind}km/h
                            </Typography>
                            <Typography component="p" variant="h6">
                                Battery: {this.state.drone_list[0].battery}%
                            </Typography>
                            <Typography component="p" variant="h6">
                                X : {this.state.drone_list[0].x}&deg;77'
                            </Typography>
                            <Typography component="p" variant="h6">
                                Y : {this.state.drone_list[0].y}&deg;99'
                            </Typography>
                            <Typography color="textSecondary" >
                                on 19 May, 2020
                            </Typography>
                            <div>
                                <Link color="primary" href="./drones/2" >
                                    View detail
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            }
            else{
                return (
                    <div>
                        <DashboardTitle>Drone 2</DashboardTitle>
                        <div>
                            <iframe width="250" height="200" src={this.state.drone_list[1].video_url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div>
                            <Typography component="p" variant="h6">
                                Wind: {this.state.drone_list[1].wind}km/h
                            </Typography>
                            <Typography component="p" variant="h6">
                                Battery: {this.state.drone_list[1].battery}%
                            </Typography>
                            <Typography component="p" variant="h6">
                                X : {this.state.drone_list[1].x}&deg;77'
                            </Typography>
                            <Typography component="p" variant="h6">
                                Y : {this.state.drone_list[1].y}&deg;99'
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
                )
            }
        }
    }
    componentWillMount

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
                        <Location_map drones={this.state.drone_list} _on_drone_click={this._on_drone_click} />
                    </div>
                    <div className="col-lg-3">
                        {this.render_infor_drone()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Location;