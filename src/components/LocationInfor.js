import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DashboardTitle from './DashboardTitle';
import {Typography } from "@material-ui/core"


const useStyles = makeStyles({
    depositContext: {
        flex: 1,
    },
});

export default function Deposits(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <DashboardTitle>{props.drone.name}</DashboardTitle>
            <Typography component="p" variant="h6">
                Wind: {props.drone.wind}km/h
            </Typography>
            <Typography component="p" variant="h6">
                Battery: {props.drone.battery}%
            </Typography>
            <Typography component="p" variant="h6">
                X : {props.drone.x}&deg;77'
            </Typography>
            <Typography component="p" variant="h6">
                Y : {props.drone.y}&deg;99'
            </Typography>
            <Typography color="textSecondary" >
                on 19 May, 2020
            </Typography>
        </React.Fragment>

    );
}