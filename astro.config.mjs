import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// NOTE: If the final production domain differs, update `site` here AND
// `SITE_URL` in src/lib/site.ts so canonical URLs, sitemap and OG tags match.
export default defineConfig({
  site: 'https://orkha.solutions',
  // applyBaseStyles:false — we ship our own global.css with the @tailwind
  // directives, so let it own the base layer (avoids duplicate injection).
  integrations: [tailwind({ applyBaseStyles: false }), sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
