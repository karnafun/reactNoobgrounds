import {
	Grid,
	Typography,
	AppBar,
	Toolbar,
	Button,
	IconButton,
} from "@material-ui/core";
import TestComponent from "../../Assets/General/TestComponent";
import React from "react";
import { useStyles } from "./style";

import MenuIcon from "@material-ui/icons/Menu";

const Homepage = () => {
	const classes = useStyles();
	return (
		<Grid container>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						edge="start"
						className={classes.menuButton}
						color="inherit"
						aria-label="menu"
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" className={classes.title}>
						News
					</Typography>
					<Button color="inherit">Login</Button>
				</Toolbar>
			</AppBar>
			<Grid container justify="center">
				<Typography> Hello World </Typography>
			</Grid>
		</Grid>
	);
};

export default Homepage;
