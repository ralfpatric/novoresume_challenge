import React, { useState } from 'react';
import { Link as RouterLink, Redirect } from 'react-router-dom';
import axios from 'axios';
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
        padding: "32px 96px",
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

export default function LoginModal(props) {
    const classes = useStyles();
    const [error, setError] = useState('')
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    async function login(){
        let url = 'http://localhost:9007/users/login';
        axios.post(url, formData)
            .then((res) => {
               props.setOpenLogin(false);
               props.setLogin(true);
            })
            .catch((err) => {
                console.log(err);
                setError(err.response.data.error);
            })
    }

	return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={props.openLogin}
            onClose={() => props.setOpenLogin(false)}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={props.openLogin}>
            <div className={classes.paper}>
                <Typography variant="h4" id="transition-modal-title" align="center">Sign In</Typography>
                <form className={classes.form}>
                    <Typography variant='body1' component='label'>Email</Typography>
                    <TextField value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      variant="outlined"
                      type="email"
                      required 
                    />
                    
                    <Typography variant='body1' component='label'>Password</Typography>
                    <TextField
                        value={formData.password}
                        onChange={(e) => setFormData({...formData, password: e.target.value})}
                        type="password" 
                        variant="outlined" 
                    />
                    <Button 
                        fullWidth={true} 
                        color="primary" 
                        variant="contained"  
                        onClick={() => login()}
                    >
                        Sign in
                    </Button>
                    <Typography variant="body1" color="primary" style={{cursor: "pointer", margin: 16}} onClick={() => {props.setOpenLogin(false); props.setOpenRegister(true)}}>Don't have an account? Register Now</Typography> 
                    {props.isLoggedIn && <Redirect to='/offers' /> }
                    {error !== '' && <Typography align="center">{error}</Typography>}
                </form>
            </div>
            </Fade>
        </Modal>
	);
}
