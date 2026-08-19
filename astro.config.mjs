import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// Static output for Cloudflare Pages
export default defineConfig({
  site: 'https://stackpicklab.com',
  output: 'static',
  integrations: [tailwind(), sitemap({ filter: (page) => !new URL(page).pathname.startsWith('/compare/') })],
});
