import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Static output for Cloudflare Pages
export default defineConfig({
  site: 'https://stackpicklab.com',
  output: 'static',
  integrations: [tailwind()],
});
