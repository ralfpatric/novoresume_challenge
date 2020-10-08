import React from 'react';

// COMPONENTS

// MATERIAL-UI
import { Hidden, Container, Typography, Grid, Link, Card, CardMedia, CardContent } from '@material-ui/core';

// ASSETS
import img1 from '../assets/images/background/image-1.png';
import img2 from '../assets/images/background/image-2.png';
import img3 from '../assets/images/background/image-3.png';

function generateBlog(){
	let elements = [];
	let images = [img1, img3, img2];
	for (let i = 0; i < 3; i++) {
		let element = 
			<Grid item md={4}>
				<div style={{backgroundImage: `url(${images[i]})`, backgroundSize: 'cover', backgroundPosition: "center", width: "100%", height: 250, marginBottom: 16}} />
				<Typography variant="h5" gutterBottom style={{fontWeight: "bold"}}> Promotional items</Typography>
				<Typography variant="paragraph" component="p"> You are probably familiar with free merchendise offered by companies at no cost at all.
				This is because they know ... </Typography>
				<Link to='#blank' color="secondary" style={{cursor: "pointer"}}>Read more ...</Link>
		</Grid>;
		elements.push(element);
	}
	return elements
}

const Blog = () => {
	return (
		<Container>
        <Typography variant='h5' style={{padding: "32px 0"}}>Recent blog posts</Typography>
		<Grid container spacing={4} style={{paddingBottom: 132}}>
			{generateBlog()}
		</Grid>
		</Container>
	);
};

export default Blog;
