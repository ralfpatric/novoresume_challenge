import React from 'react';

// MATERIAL-UI
import { Container, Grid, Typography, Button } from '@material-ui/core';

// ASSETS
import OfferImg from '../assets/images/icons/offer.png'
import FastImg from '../assets/images/icons/fast.png'
import LogImg from '../assets/images/icons/log.png'

const HowItWorks = () => {

	return (
		<Container>
			<Typography variant='h5' style={{padding: "32px 0"}}>What do we do?</Typography>
		
			<Grid container style={{textAlign: "center"}}>
				<Grid item md={4} style={{padding: 32}}>
					<img style={{widht: 75, height:75}} src={OfferImg} alt="offer" />
					<Typography variant="h5" gutterBottom>
						Amazing looking quotes
					</Typography>
					<Typography variant="body1">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidicunt ut labore et dolore magna aliqua.
					</Typography>
				</Grid>
				
				<Grid item md={4} style={{padding: 32}}>
					<img style={{widht: 75, height:75}} src={FastImg} alt="time" />
					<Typography variant="h5" gutterBottom>
						Lightning fast quoting
					</Typography>
					<Typography variant="body1">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidicunt ut labore et dolore magna aliqua.
					</Typography>
				</Grid>
				
				<Grid item md={4} style={{padding: 32}}>
					<img style={{widht: 75, height:75}} src={LogImg} alt="log" />
					<Typography variant="h5" gutterBottom>
						Live changelog
					</Typography>
					<Typography variant="body1">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidicunt ut labore et dolore magna aliqua.
					</Typography>
				</Grid>
				

			</Grid>
			<div style={{display: "flex", justifyContent: "center", padding: 32}}>
				<Button variant="contained" color="secondary">Try It Out Today</Button>
			</div>
		</Container>
	);
};

export default HowItWorks;
