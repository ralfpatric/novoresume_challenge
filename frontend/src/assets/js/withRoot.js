import React from 'react';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

let theme = createMuiTheme({
	palette: {
		primary: { main: '#58A690', light: '#A9D9BE' },
		secondary: { main: '#697C8C', light: '#697c8c1a' },
		text: {
			primary: '#08050A',
			secondary: '#F4F9FC',
		},
		background: {
			default: '#F4F9FC',
		},
	},
	typography: {
		useNextVariants: true,

		h1: {
			fontSize: 48,
			fontFamily: "'Nunito', sans-serif",
			fontWeight: 600,
			letterSpacing: 1.5,
		},
		h2: {
			fontSize: 20,
			fontFamily: "'DM Mono', monospace",
			fontWeight: 500,
			opacity: 0.9,
			lineHeight: 1,
		},
		h3: {
			fontSize: 16,
			fontFamily: "'DM Mono', monospace",
			fontWeight: 500,
			letterSpacing: '0.3px',

			lineHeight: 1.35,
		},
		body1: {
			fontSize: 16,
			fontFamily: "'Nunito', sans-serif",
			fontWeight: 500,
			lineHeight: 1.4,
		},
		body2: {
			fontSize: 16,
			fontFamily: "'DM Mono', monospace",
			fontWeight: 400,
		},
		subtitle1: {
			fontSize: 18,
			fontWeight: 700,
			fontFamily: "'Nunito', sans-serif",
		},
		subtitle2: {
			fontSize: 11,
			lineHeight: 1.2,
			fontFamily: "'Nunito', sans-serif",
		},
		button: {
			fontFamily: "'Dm Mono', monospace",
			fontSize: '14px',
			letterSpacing: '0.25px',
		},
		caption: {
			fontFamily: 'Desyrel',
			fontSize: '40px',
			letterSpacing: '0.25px',
		},
	},
});

const { breakpoints } = theme;

// export let defaultTheme = responsiveFontSizes({
export let defaultTheme = {
	...theme,
	overrides: {
		MuiTypography: {
			gutterBottom: { marginBottom: '32px' },
			paragraph: { marginBottom: '16px' },
			h1: {
				[breakpoints.down('sm')]: {
					fontSize: '48px',
				},
			},
			h2: {
				[breakpoints.down('sm')]: {
					fontSize: '32px',
				},
			},
			body1: {
				opacity: '.7',
			},
			body2: {
				opacity: '.7',
			},
		},
		MuiButton: {
			root: {
				borderRadius: '8px',
				textTransform: 'none',
			},
			containedPrimary: {
				color: '#FFFAF3 !important',
				margin: 8,
				minWidth: 148,
			},
			containedSecondary: {
				color: theme.palette.primary.main,
				backgroundColor: theme.palette.text.secondary,
				minWidth: 148,
				'&:hover': {
					color: theme.palette.text.secondary,
				},
			},
		},
	},
};

const withRoot = (Component) => {
	const WithRoot = (props) => {
		return (
			<ThemeProvider theme={defaultTheme}>
				<CssBaseline />
				<Component {...props} />
			</ThemeProvider>
		);
	};
	return WithRoot;
};

export default withRoot;
