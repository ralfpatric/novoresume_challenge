

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../routes/Home';
import Offers from '../routes/Offer';


// MATERIAL-UI
import NoSsr from '@material-ui/core/NoSsr';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <NoSsr>
      <CssBaseline />
      <Router>
        <Navbar />
        <Switch>
 				  <Route path='/' exact component={Home} />
 				  <Route path='/offers' exact component={Offers} />
        </Switch>

      </Router>
      </NoSsr>
    </div>
  );
}

export default App;



// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


// import CausesRoute from './causes/routes/CausesRoute'; // all causes page
// import CauseRoute from './causes/routes/CauseRoute'; // individual cause page

// // COMPONENT IMPORTS
// import NavBar from './global-components/NavBar';
// import Footer from './global-components/Footer';

// // MATERIAL-UI
// import NoSsr from '@material-ui/core/NoSsr';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import withRoot from './global-assets/js/withRoot';
// import { makeStyles } from '@material-ui/core/styles';

// // TRANSLATION
// // import i18n from 'i18next';

// // CLOUDINARY
// import { CloudinaryContext } from 'cloudinary-react';

// function App() {
// 	// GLOBAL STATES

// 	const useStyles = makeStyles((theme) => ({
// 		navbar: {
// 			position: 'fixed',
// 			width: '100%',
// 			zIndex: 50,
// 		},
// 		footer: {
// 			position: 'absolute',

// 			width: '100%',
// 			zIndex: 50,
// 			backgroundColor: '#006285',
// 		},
// 		body: {
// 			[theme.breakpoints.down('sm')]: {
// 				minHeight: '100vh',
// 			},
// 		},

// 		// special buttons
// 	}));

// 	const classes = useStyles();

// 	return (
// 		<div className='App'>
// 			<NoSsr>
// 				<CssBaseline />
// 				<CloudinaryContext cloudName='worthmore'>
// 					<Router>
// 						{/* WILL BE REPLACED WITH NAVBAR COMPONENT */}
// 						<div>
// 							<div className={classes.navbar}>
// 								<NavBar />
// 							</div>
// 							<div className={classes.body}>
// 								<Switch>
// 									{/* LANDINGPAGE */}
// 									<Route path='/' exact component={Landing} />

// 									{/* CAUSES */}
// 									<Route exact path='/causes' component={CausesRoute} />
// 									<Route exact path='/causes/:name/:id' component={CauseRoute} />

// 									{/* SubmitAPhone */}
// 									<Route exact path='/donate' component={Donate} />
// 									<Route exact path='/donate/:causeId' component={Donate} />

// 									{/* TRACK YOUR DEVICE */}
// 									<Route exact path='/track-your-device' component={TrackYourDevice} />
// 									<Route exact path='/track-your-device/:orderNumber' component={DeviceTrackingSteps} />

// 									{/* CONFIRM DONATION */}
// 									<Route exact path='/confirm-donation' component={ConfirmDonation} />

// 									{/* STATIC PAGES */}
// 									<Route exact path='/contact' component={Contact} />
// 									<Route exact path='/about' component={About} />
// 									<Route exact path='/how' component={How} />
// 									<Route path='/blog' exact component={Blog} />
// 									<Route path='/terms-and-conditions' exact component={Terms} />
// 									<Route path='/cookie-policy' exact component={CookiePolicy} />
// 									<Route path='/privacy-policy' exact component={PrivacyPolicy} />
// 									<Route path='/right-to-be-forgotten' exact component={ForgetMe} />
// 									<Route path='/data-portability' exact component={DataPortability} />
// 								</Switch>
// 							</div>
// 							<div className={classes.footer}>
// 								<Footer />
// 							</div>
// 						</div>
// 					</Router>
// 				</CloudinaryContext>
// 			</NoSsr>
// 		</div>
// 	);
// }

// export default withRoot(App);

