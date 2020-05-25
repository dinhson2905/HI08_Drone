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
      <DashboardTitle>Dones</DashboardTitle>
      <Typography component="p" variant="h6">
        Total: 100
      </Typography>
      <Typography component="p" variant="h6">
        Being used: 40
      </Typography>
      <Typography component="p" variant="h6">
        Being in bucket: 45
      </Typography>
      <Typography component="p" variant="h6">
        Maintance: 15
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 19 May, 2020
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View detail
        </Link>
      </div>
    </React.Fragment>
  );
}