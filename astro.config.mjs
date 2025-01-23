// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: "https://www.sgl-vilanova.com",
  i18n: {
    locales: ["es", "ca"],
    defaultLocale: "es",
  },
  integrations: [tailwind()]
});