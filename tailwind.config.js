/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			backgroundImage: {
				bast: 'url(/bast.jpg)',
				qabz: 'url(/qabz.jpg)'
			},
			fontFamily: {
				arabic: '"Scheherazade New", serif'
			}
		}
	},
	plugins: []
};
