/** @type {import('tailwindcss').Config} */

const { nextui } = require('@nextui-org/react');

export default {
	content: [
        './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
    ],  
	theme: {
		extend: {
            colors: {
                'pmr-violet': '#581a6d',
            }
        },
	},
    darkMode: 'class',
	plugins: [nextui()],
}
