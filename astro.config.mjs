import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';

export default defineConfig({
  site: 'https://ladki-bahin-ekyc.vercel.app/',
  integrations: [
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: 'mr',
        locales: {
          mr: 'mr-IN',
          en: 'en-US'
        }
      }
    }),
    partytown({
      config: {
        forward: ['dataLayer.push']
      }
    })
  ],
  i18n: {
    defaultLocale: 'mr',
    locales: ['mr', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  output: 'static',
  build: {
    inlineStylesheets: 'auto'
  },
  compressHTML: true,
  vite: {
    build: {
      cssMinify: true,
      minify: 'terser'
    }
  }
});
