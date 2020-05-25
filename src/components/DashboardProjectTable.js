import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DashboardTitle from './DashboardTitle';

// Generate Order Data
function createData(id, name, date, location, commander, drones, personnel) {
  return { id, name, date, location, commander, drones, personnel };
}

const rows = [
  createData(0, 'Project A', '6/1/2020 - 6/4/2020', 'Tupelo, MS', 'Mr. Son', 'Aircraft#1, Aircraft#2, Aircraft#3', 'Mr. Viet, Mr.Khanh'),
  createData(1, 'Project B', '15/1/2020 - 7/4/2020', 'London, UK', 'Mr. Tam', 'Aircraft#19, Aircraft#52, Aircraft#63', 'Mr. Viet, Mr.Khanh'),
  createData(2, 'Project C', '23/1/2020 - 9/4/2020', 'Boston, MA', 'Mr. Hieu', 'Aircraft#66, Aircraft#44, Aircraft#30', 'Mr. Viet, Mr.Khanh'),
  createData(3, 'Project D', '5/2/2020 - 15/4/2020', 'Gary, IN', 'Mr.Trung', 'Aircraft#77, Aircraft#24, Aircraft#15', 'Mr. Viet, Mr.Khanh'),
  createData(4, 'Project E', '8/3/2020 - 2/5/2020', 'Long Branch, NJ', 'Miss. Diep', 'Aircraft#90, Aircraft#33, Aircraft#44', 'Mr. Viet, Mr.Khanh'),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function DashboardProjectTable() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <DashboardTitle>Projects</DashboardTitle>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Project</TableCell>
            <TableCell>Date Range</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Misson Commander</TableCell>
            <TableCell>Drones</TableCell>
            <TableCell align="right">Other Personnel</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.location}</TableCell>
              <TableCell>{row.commander}</TableCell>
              <TableCell>{row.drones}</TableCell>
              <TableCell align="right">{row.personnel}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more projects
        </Link>
      </div>
    </React.Fragment>
  );
}