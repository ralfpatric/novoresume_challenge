import React, { useState } from 'react';
import { Link as RouterLink, Redirect } from 'react-router-dom';
import axios from 'axios';


// COMPONENTS
// MATERIAL-UI
import { makeStyles } from '@material-ui/core/styles';
import { Button, Modal, Backdrop, Fade, Typography, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	  },
	  paper: {
		backgroundColor: theme.palette.background.paper,
        borderRadius: 6,
        width: "60vw",
        padding: "32px 128px",
        '& label': {
            marginTop: 32,
        },
        '& input': {
            padding: 16,
        },
        '& button': {
            marginTop: 32,
        },
        '& #transition-modal-title': {
            fontWeight: "bold",
        }
	  },
	  form: {
		  display: 'flex',
		  flexDirection: 'column'
	  }
}));

export default function RegisterModal(props) {
    const classes = useStyles();
    const [registerSuccess, setRegister] = useState('');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        password: '',
        email:'',
    })

    async function register(){
        let url = 'http://localhost:9007/users/';
        console.log(formData);
        let response = await axios.post(url, formData);
        if (response.status === 200) {
            props.setOpenRegister(false);
            props.setLogin(true);
            setRegister(true);
        } else {
            setRegister(false);
        }
    }
	return (
        <Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				className={classes.modal}
				open={props.openRegister}
				onClose={() => props.setOpenRegister(false)}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
				timeout: 500,
				}}
			>
				<Fade in={props.openRegister}>
				<div className={classes.paper}>
					<Typography variant="h4" id="transition-modal-title">Register</Typography>
					<form className={classes.form} autoComplete='off'>
						<Typography variant='body1' component="label">First Name</Typography>
                        <TextField 
                            value={formData.firstName} 
                            onChange={(e) => setFormData({...formData, firstName: e.target.value})} 
                            variant="outlined"
                            required 
                        />
						
                        <Typography variant='body1' component="label">Last Name</Typography>
                        <TextField 
                            value={formData.lastName} 
                            onChange={(e) => setFormData({...formData, lastName: e.target.value})} 
                            variant="outlined" 
                            required
                        />

                        <Typography variant='body1' component="label">Email</Typography>
                        <TextField
                            value={formData.email} 
                            onChange={(e) => setFormData({...formData, email: e.target.value})} 
                            variant="outlined"
                            type='email'
                            required
                        />

                        <Typography variant='body1' component="label">Password</Typography>
                        <TextField 
                            value={formData.password} 
                            onChange={(e) => setFormData({...formData, password: e.target.value})} 
                            variant="outlined"
                            type='password'
                            required 
                        />

                        <Button 
                            fullWidth={true} 
                            color="primary" 
                            variant="contained"
                            onClick={() => register()}
                        >
                            Register
                        </Button>
                        <Typography 
                            variant="body1" 
                            color="primary" 
                            align="center" 
                            style={{cursor: "pointer", margin: 16}} 
                            onClick={() => {props.setOpenRegister(false); props.setOpenLogin(true)}}>Already have an acouunt? Sign In</Typography>
                        {props.isLoggedIn && <Redirect to='/offers' /> } 
					</form>
				</div>
				</Fade>
			</Modal>
	);
}
