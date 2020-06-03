import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DashboardTitle from './DashboardTitle';
import map_image from '../image/map.png';

const useStyles = makeStyles({
    depositContext: {
        flex: 1,
    },
});

export default function Deposits() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <DashboardTitle>Location</DashboardTitle>
            <img
                className="d-block w-100"
                src={map_image}
                alt="Second slide"
            />
        </React.Fragment >
    );
}