import React from 'react';
import DashboardTitle from './DashboardTitle';
import map_image from '../image/map2.png';
import LocationDrone from "./LocationDrone";
import {Paper } from '@material-ui/core';

export default function Deposits(props) {
    return (
        <React.Fragment>
            <DashboardTitle>Location</DashboardTitle>
            <Paper >
                <img
                    className="d-block w-100"
                    src={map_image}
                    alt="Second slide"
                />
            
            {props.drones.map((drone)=>{ 
                return <LocationDrone drone = {drone} _on_drone_click = {props._on_drone_click}/>
            })}
            </Paper>
        </React.Fragment >
    );
}