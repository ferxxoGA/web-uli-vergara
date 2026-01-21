/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			// AQUI AGREGAMOS LA CONFIGURACIÓN DE FUENTES:
			fontFamily: {
				// Reemplazamos la sans por defecto con Montserrat
				sans: ['Montserrat', 'sans-serif'],
				// Reemplazamos la serif por defecto con Playfair Display
				serif: ['Playfair Display', 'serif'],
			},
		},
	},
	plugins: [],
}