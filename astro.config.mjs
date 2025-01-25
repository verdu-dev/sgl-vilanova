// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: "https://www.sgl-vilanova.com",
  i18n: {
    locales: ["es", "ca"],
    defaultLocale: "es"
  },
  vite: {
    plugins: [tailwindcss()]
  }
});