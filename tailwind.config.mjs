import { fontFamily } from 'tailwindcss/defaultTheme.js'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: [
				"Space Grotesk Variable",
				fontFamily.sans,
			],
		},

		extend: {
			colors: {
				sgl: '#ffa348'
			}
		}
	},
	plugins: [],
}
