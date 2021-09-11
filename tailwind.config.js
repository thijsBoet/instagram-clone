module.exports = {
	future: {
		removeDeprecatedGapUtilities: true,
	},
	purge: {
		content: ['./src/**/*.js', './src/**/**/*.js'],
	},
	theme: {
		fill: theme => ({
			red: theme('colors.red.primary'),
		}),
		colors: {
			white: '#ffffff',
			blue: {
				medium: '#005c98',
			},
			black: {
				light: '#262626',
				faded: '#00000059',
			},
			gray: {
				base: '#616161',
				background: '#fafafa',
				primary: '#dbdbdb',
			},
			red: {
				primary: '#ed4956',
			},
		},
	},
	variants: {
		extend: {
			display: ['group-hover'],
		},
	},
};

// bg-blue-medium
// text-red-primary
// text-blue-medium
// text-gray-base
// border-gray-primary