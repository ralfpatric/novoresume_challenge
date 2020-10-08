import React, { useState } from 'react';
import { Link as RouterLink, Redirect } from 'react-router-dom';

// COMPONENTS
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
// MATERIAL-UI
import { makeStyles } from '@material-ui/core/styles';
import { Button, Container, Modal, Backdrop, Fade, Typography, TextField } from '@material-ui/core';

// ASSETS
import LogoImg from '../assets/images/icons/logo.png'

const useStyles = makeStyles((theme) => ({
	navContainer: {
		width: '100%',
		display: 'flex',
		alignItems: 'end',
		padding: 16,
		background:
			'linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, .1) 70%, rgba(255, 255, 255, 0) 100%)' /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */,
		[theme.breakpoints.down('sm')]: {
			height: 48,
		},
	},
	navItems: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		[theme.breakpoints.down('sm')]: {
			justifyContent: 'space-between',
		},
	},
	navLogo: {
		width: 50,
		height: 50,
		[theme.breakpoints.down('sm')]: {
			marginTop: 4,
		},
	},
	navLinks: {
		minWidth: 80,
		fontFamily: 'DM Mono, monospace',
		[theme.breakpoints.down('sm')]: {
			width: 144,
			marginTop: 4,
		},
	},
	justifyContent: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	  }
}));

export default function Navbar() {
	const classes = useStyles();
	const [openLogin, setOpenLogin] = useState(false);
	const [openRegister, setOpenRegister] = useState(false);
	const [isLoggedIn, setLogin] = useState(false);

	return (
		<div className={classes.navContainer}>
			{!isLoggedIn && <Redirect to='/' /> }
			<Container maxWidth='lg' className={classes.navItems}>
				<div className={classes.navLogo}>
					<RouterLink to='/' >
						<img style={{width: "100%"}} src={LogoImg} alt="logo" />
					</RouterLink>
				</div>

				<div className={classes.justifyContent}>
					{isLoggedIn ? 
					<Button onClick={() => setLogin(false)}>Log out</Button> 
					: 
					<>
						<Button variant="contained" color="primary" disableElevation onClick={() => setOpenRegister(true)}>
							Register
						</Button>
						<Button onClick={() => setOpenLogin(true)}>
							Sign in
						</Button>
					</>
					}
				</div>
			</Container>

			<LoginModal 
				openLogin={openLogin} 
				setOpenLogin={setOpenLogin} 
				openRegister={openRegister} 
				setOpenRegister={setOpenRegister}
				isLoggedIn={isLoggedIn}
				setLogin={setLogin} 
			/>
			
			<RegisterModal 
				openLogin={openLogin} 
				setOpenLogin={setOpenLogin} 
				openRegister={openRegister} 
				setOpenRegister={setOpenRegister} 
				isLoggedIn={isLoggedIn}
				setLogin={setLogin}
			/> 

		</div>
	);
}
