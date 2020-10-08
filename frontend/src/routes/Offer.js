import React from 'react';

// COMPONENTS

// MATERIAL-UI
import { Container, Typography, Grid, Button, TextField } from '@material-ui/core';

// ASSETS
import img1 from '../assets/images/items/1.png';
import img2 from '../assets/images/items/2.png';
import img3 from '../assets/images/items/3.png';
import img4 from '../assets/images/items/4.png';
import img5 from '../assets/images/items/5.png';
import img6 from '../assets/images/items/6.png';
import img7 from '../assets/images/items/7.png';
import img8 from '../assets/images/items/8.png';

const products = [{
    image: img1,
    price: 4.99,
    quantity: 0,
    title: 'Dark Almond & Orange',
    subtitle: 'Dark, Crunchy & Sweet',
    description: 'Crunchy roasted pieces of Californian almonds and sweet orange peel, coated in 100% sustainably sourced cocoa. The perfect balance between dark and sweet chocoloate. Enjoy!',
},{
    image: img2,
    price: 3.99,
    quantity: 0,
    title: "Alpine Milk Chocolate",
    subtitle: "A true peak of taste",
    description: 'The name gives it away: this is a chocolate that reaches loy heights. A special conching process gives this mixture of Alpine milk and cocoa its characteristic caramel and honey flavour. No wonder that some people abseil off home with this bar.',
},{
    image: img3,
    price: 3.49,
    quantity: 0,
    title: 'Cocoa Mouse',
    subtitle: 'Famoussely Tasty',
    description: 'If you can’t believe your eyes when you see the extra large pieces of our Cocoa Mousse bar, you’ll just have to trust in your taste. The lightly whipped cocoa mousse blends harmoniously with the hints of honey and caramel in our Alpine milk chocolate.',
},{
    image: img4,
    price: 3.99,
    quantity: 0,
    title: "Cornflakes",
    subtitle: 'The chocolaty of cornflakes',
    description: 'RITTER SPORT Cornakes gives you breakfast around the clock with crispy cornakes in creamy chocolate. The akes are produced and selected according to strict quality standards: after all, breakfast is the most important meal of the day.',
},{
    image: img5,
    price: 4.99,
    quantity: 0,
    title: 'Hazelnuts',
    subtitle: 'The Votes are split',
    description: 'Are there more nuts or more chocolate in this bar? You’ll have to try the RITTER SPORT Hazelnuts with nely chopped, roasted hazelnuts in crunchy milk chocolate to nd out. If you can’t decide aer the rst bite, keep munching until you can.',
},{
    image: img6,
    price: 3.99,
    quantity: 0,
    title: "Strawberry Yogurt",
    subtitle: 'For the berry hungry',
    description: 'It’s summer all year round with the RITTER SPORT Strawberry Yogurt bar. Plenty of real fruit pieces, strawberry yogurt mousse and crunchy rice crisps give every piece a sunny outlook. Take it from us: this square strawberry eld will make you hot stuff.',
},{
    image: img7,
    price: 3.49,
    quantity: 0,
    title: 'White + Crisp',
    subtitle: 'Colossally Crunchy Chocolate',
    description: 'This bar is a declaration of love to fans of anything crispy. The roasted corn and rice flakes make it twice as crunchy, combining with the strong milk and vanilla avours of the white chocolate to create a harmonious taste. Enough to make anyone’s heart melt',
},{
    image: img8,
    price: 3.99,
    quantity: 0,
    title: 'Marzipan',
    subtitle: 'With great chocolate comes great responsibility',
    description: 'Marzipan comes in many dierent shapes, but our favourite is square. It’s simply the best way to bring out this great combination of sweet Californian almonds, a nuance of bier almonds and rm dark chocolate. Sorry about that, marzipan potatoes.',
},]

function generateProducts(){
    console.log("generate prod");
    let elements = [];
	for (let i = 0; i < products.length; i++) {
		let element = 
			<Grid item md={3} key={`${products[i].title}-${i}`}>
                <div style={{display: "flex", flexDirection: 'row'}}>
                    <div>
                        <img src={products[i].image} alt={products[i].title} style={{width: "100%"}} />
                    </div>

                    <div>
                        <Typography variant="h5">${products[i].price}</Typography>
                        <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                            <Button>+</Button>
                            <Typography>{products[i].quantity}</Typography>
                            <Button>+</Button>
                        </div>
                    </div>
                </div>

				<Typography>{products[i].title}</Typography>
                <Typography>{products[i].subtitle}</Typography>
                <Typography>{products[i].description}</Typography>
		    </Grid>;
		elements.push(element);
	}
	return elements
}

const Offer = () => {

	return (
		<Container>
            <Typography>Create New Offer</Typography>
            <section>
                <div>
                    <Typography>Step 1: Select Products</Typography>
                </div>
                <Grid container spacing={4}>
                    {generateProducts()}
                </Grid>
            </section>

            <section>
                <div>
                    <Typography>Step 2: Add Customer Billing Information</Typography>
                </div>
                <Grid>
                    <form>
                        <label>First Name<span>*</span></label>
						<TextField variant="outlined" />
                        <label>Last Name<span>*</span></label>
						<TextField variant="outlined" />
                        <label>Billing Address<span>*</span></label>
						<TextField variant="outlined" />
                        <label>Postal Code<span>*</span></label>
						<TextField variant="outlined" />
                        <label>Telephone Number<span>*</span></label>
						<TextField variant="outlined" />
                        <label>Email<span>*</span></label>
						<TextField variant="outlined" />
					</form>                  
                </Grid>
            </section>

            {/* Generate Offer  */}
            <section>
                <div style={{display: "flex"}}>
                    <Typography>Step 3: Generate Offer</Typography>
                    <Button variant="contained">Download PDF</Button>
                </div>
            </section>

		</Container>
	);
};

export default Offer;
