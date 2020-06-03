import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

export default function DashboardTitle(props) {
  return (
    <Typography component="h2" variant="h6" color="special-color-dark" gutterBottom>
      {props.children}
    </Typography>
  );
}

DashboardTitle.propTypes = {
  children: PropTypes.node,
};