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
function createData(id, name, date, level, address) {
  return { id, name, date, level, address };
}

const rows = [
  createData(0, 'Mr. Son', '29/5/1998', 'Commander', 'Tupelo, MS'),
  createData(1, 'Mr. Hieu', '14/4/1990', 'Commander', 'London, UK'),
  createData(2, 'Mr. Diep', '2/3/1991', 'Commander', 'Boston, MA'),
  createData(3, 'Mr. Viet', '20/2/1992', 'Worker', 'Gary, IN'),
  createData(4, 'Mr. Khanh', '30/1/1993', 'Worker', 'Long Branch, NJ'),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function DashboardMemberTable() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <DashboardTitle>Members</DashboardTitle>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Birthday</TableCell>
            <TableCell>Level</TableCell>
            <TableCell align="right">Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.level}</TableCell>
              <TableCell align="right">{row.address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more Members
        </Link>
      </div>
    </React.Fragment>
  );
}