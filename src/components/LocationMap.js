import React from 'react';
import DashboardTitle from './DashboardTitle';
import map_image from '../image/map2.png';
import LocationDrone from "./LocationDrone"

export default function Deposits(props) {
    return (
        <React.Fragment>
            <DashboardTitle>Location</DashboardTitle>
            <div style={{border:"1px solid black"}}>
                <img
                    className="d-block w-100"
                    src={map_image}
                    alt="Second slide"
                />
            </div>
            {props.drones.map((drone)=>{ 
                return <LocationDrone drone = {drone} _on_drone_click = {props._on_drone_click}/>
            })}
        </React.Fragment >
    );
}