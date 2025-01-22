import type { Config } from "tailwindcss";

export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			backgroundImage: {
				bast: "url(/bast.webp)",
				qabz: "url(/qabz.webp)",
			},
			fontFamily: {
				arabic: '"Scheherazade New", serif',
			},
		},
	},
	plugins: [],
} satisfies Config;
