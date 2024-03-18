/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
        'spin-slow': 'spin 3s linear infinite',
        'spin-slow-2': 'spin 40s linear infinite',
      },
		},
	},
	plugins: [],
}
