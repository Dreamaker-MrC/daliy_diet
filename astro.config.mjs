// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages: project site served at https://<owner>.github.io/<repo>/
  site: 'https://dreamaker-mrc.github.io',
  base: '/daliy_diet',
  integrations: [icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
