import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import DashboardTitle from './DashboardTitle';
import map_image from '../image/map.png';
import { AnimateKeyframes } from "react-simple-animate";

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
    backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQbM-ErbTL-g6-J1h2gP2O0H3VZrJ3xWCNSBhzmKvHnlF2UT10p&usqp=CAU)',
    backgroundSize: '30px 30px',

};

export default function Deposits() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <AnimateKeyframes
                play = {true}
                iterationCount="infinite"
                duration={10}
                delay={1}
                keyframes={[
                    "transform: translate(180px, 200px)",
                    "transform: translate(310px, 200px)",
                    "transform: translate(310px, 300px)",
                    "transform: translate(180px, 300px)",
                    "transform: translate(180px, 200px)"
                ]}
            // keyframes is an array of styles, and each style
            // will be distributed over 100% of the duration
            >
                <div style={divStyle} />
            </AnimateKeyframes>
            
            <DashboardTitle>Location</DashboardTitle>
            <img
                className="d-block w-100"
                src={map_image}
                alt="Second slide"
            />
        </React.Fragment>
    );
}