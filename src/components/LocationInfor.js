import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DashboardTitle from './DashboardTitle';
import map_image from '../image/map.png';
import { AnimateKeyframes } from "react-simple-animate";
import { Tooltip, Typography, withStyles } from "@material-ui/core"

function preventDefault(event) {
    event.preventDefault();
}

const useStyles = makeStyles({
    depositContext: {
        flex: 1,
    },
});

const divStyle = {
    display: "block",
    width: 30,
    height: 30,
    borderRadius: "10px",
    backgroundImage: 'url(https://www.freelogodesign.org/file/app/client/thumb/8c17d51d-6669-4095-be07-f1f9fcc26d66_200x200.png?1591024515687)',
    backgroundSize: '30px 30px',

};

const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
        backgroundColor: '#f5f5f9',
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 220,
        fontSize: theme.typography.pxToRem(12),
        border: '1px solid #dadde9',
    },
}))(Tooltip);

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