// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.sglvilanova.com",

  i18n: {
    locales: ["es", "ca"],
    defaultLocale: "es"
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "es",
        locales: {
          es: "es-ES",
          ca: "ca-ES"
        }
      }
    })
  ]
});