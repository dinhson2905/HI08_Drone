import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import DashboardTitle from './DashboardTitle';

function preventDefault(event) {
    event.preventDefault();
}

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
                src="https://geospatialmedia.s3.amazonaws.com/wp-content/uploads/2017/09/1212.jpg"
                alt="Second slide"
            />
        </React.Fragment>
    );
}