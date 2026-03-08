// @ts-check

import tailwindcss from '@tailwindcss/vite';
import netlify from '@astrojs/netlify';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	output: 'static',
	adapter: netlify(),
	vite: {
		plugins: [tailwindcss()],
	},
});
