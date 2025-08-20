// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'
import mdx from '@astrojs/mdx'



// https://astro.build/config
import icon from 'astro-icon';

export default defineConfig({
  integrations: [
    icon(),
    react(),
     mdx(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});