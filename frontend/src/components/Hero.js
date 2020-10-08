import React, {useState} from 'react';
import HeroImage from '../assets/images/background/header.png'

// COMPONENTS
import RegisterModal from '../components/RegisterModal';
// MATERIAL-UI
import { Grid, Typography, Button } from '@material-ui/core';

const Hero = () => {
	const [variant, changeVariant] = useState('contained');
	const [openLogin, setOpenLogin] = useState(false);
	const [openRegister, setOpenRegister] = useState(false);

	return (
		<Grid container alignItems="center" justify="space-around" style={{backgroundColor: "#6a6ac4", padding: "32px 0"}}>
			<Grid item md={1} />
			<Grid container direction="column" justify="space-around" alignItems="flex-start" item md={5} style={{paddingRight: "10%"}}>
				<Typography variant="h3" component="h1" gutterBottom style={{color: "white", fontWeight: "bold"}}>A better, faster and smarter way of building your offers.</Typography>
				<Typography variant="h4" component="h2" gutterBottom style={{color: "white"}}>Increase revenue and outshine competition. All for the price of a coffee.</Typography>
				<Button 
					size="large" 
					onMouseEnter={() => changeVariant('outlined')} 
					onMouseLeave={() => changeVariant('contained')} 
					variant={variant} 
					color="primary" 
					disableElevation
					onClick={() => setOpenRegister(true)}
				>
					Register Today
				</Button>
			</Grid>
			<Grid item md={5}>
				<img style={{width: "100%"}} src={HeroImage} alt="header" />
			</Grid>
			<Grid item md={1} />
			<RegisterModal 
				openLogin={openLogin} 
				setOpenLogin={setOpenLogin} 
				openRegister={openRegister} 
				setOpenRegister={setOpenRegister} 
			/> 
		</Grid>
	);
};

export default Hero;
