import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// Static output for Cloudflare Pages
export default defineConfig({
  site: 'https://stackpicklab.com',
  output: 'static',
  integrations: [tailwind(), sitemap()],
  redirects: {
    '/compare/is-surfer-seo-worth-it': '/blog/is-surfer-seo-worth-it-2026',
    '/compare/frase-vs-surfer': '/blog/frase-vs-surfer-2026',
    '/compare/surfer-seo-alternatives': '/blog/best-surfer-seo-alternatives-budget',
    '/compare/semrush-vs-surfer-seo': '/blog/semrush-vs-surfer-seo',
    '/compare/jasper-vs-copyai-vs-writesonic': '/blog/jasper-vs-copyai-vs-writesonic-2026',
    '/compare/ai-writing-tools-under-100': '/blog/best-ai-writing-tools-under-100',
    '/compare/jasper-alternatives-chatgpt-claude': '/blog/jasper-alternatives-chatgpt-claude',
    '/compare/ai-content-tools-for-agencies': '/blog/best-ai-content-tools-for-agencies',
    '/compare/semrush-vs-ahrefs-vs-free': '/blog/best-seo-tools-solo-bloggers-semrush-ahrefs-free',
    '/sitemap.xml': '/sitemap-index.xml',
  },
});
