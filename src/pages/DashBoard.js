import React, { Component } from 'react';
import { Breadcrumbs, Link, Typography, Grid, Paper } from '@material-ui/core';
// import { Table } from 'react-bootstrap';
import DashboardProjectTable from '../components/DashboardProjectTable';
import DashboardMemberTable from '../components/DashboardMemberTable';
import DashboardDroneStatistic from '../components/DashboardDroneStatistic';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import DashboardLocation from '../components/DashboardLocation';
import HomeIcon from '@material-ui/icons/Home';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	toolbar: {
		paddingRight: 24, // keep right padding when drawer closed
	},
	toolbarIcon: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: '0 8px',
		...theme.mixins.toolbar,
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		marginRight: 36,
	},
	menuButtonHidden: {
		display: 'none',
	},
	title: {
		flexGrow: 1,
	},
	drawerPaper: {
		position: 'relative',
		whiteSpace: 'nowrap',
		width: drawerWidth,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	drawerPaperClose: {
		overflowX: 'hidden',
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		width: theme.spacing(7),
		[theme.breakpoints.up('sm')]: {
			width: theme.spacing(9),
		},
	},
	appBarSpacer: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		height: '100vh',
		overflow: 'auto',
	},
	container: {
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(4),
	},
	paper: {
		padding: theme.spacing(2),
		display: 'flex',
		overflow: 'auto',
		flexDirection: 'column',
	},
	fixedHeight: {
		height: 450,
	},
}));

export default function DashBoard() {
	const classes = useStyles();
	const [open, setOpen] = React.useState(true);
	const handleDrawerOpen = () => {
		setOpen(true);
	};
	const handleDrawerClose = () => {
		setOpen(false);
	};
	const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);


	return (
		<div className="DashBoard container">
			<div className="row breadcrumbs">
				<HomeIcon />
				<Breadcrumbs aria-label="breadcrumb">
					<Link color="inherit" href="/">
						Home
					</Link>
					<Link color="inherit" href="/hi08">
						HI_08
					</Link>
					<Typography color="textPrimary">DashBoard</Typography>
				</Breadcrumbs>
			</div>
			<Box pt={3}>
			</Box>
			<div className="container">
				<Grid container spacing={3}>
					<Grid item xs={12} md={8} lg={8}>
						<Link href="./hi08/location">
							<Paper className={fixedHeightPaper}>
							{/* <Chart /> */}
								<DashboardLocation />
							</Paper>
						</Link>
					</Grid>
					<Grid item xs={12} md={4} lg={4}>
						<Paper className={fixedHeightPaper}>
							{/* <Deposits /> */}
							<DashboardDroneStatistic />
						</Paper>
					</Grid>
					<Grid item xs={12}>
						<Paper className={classes.paper}>
							<DashboardProjectTable />
						</Paper>
					</Grid>
					<Grid item xs={12}>
						<Paper className={classes.paper}>
							<DashboardMemberTable />
						</Paper>
					</Grid>
				</Grid>
				<Box pt={4}>
				</Box>
			</div>
		</div>
	);
}
