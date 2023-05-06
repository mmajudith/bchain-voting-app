/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				green: '#1CB859',
				'black-opacity': 'hsl(7, 7%, 7%, 20%)',
				gray: 'rgba(96, 96, 96, 0.8)',

				'light-gray': 'hsl(228, 33%, 97%)',
				black: '#24292E',
			},

			fontFamily: {
				sans: ['Montserrat'],
			},
		},
	},
	plugins: [],
};
