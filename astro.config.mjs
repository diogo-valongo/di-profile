// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      // Configuração do Tailwind
      config: {
        applyBaseStyles: false,
      },
    }),
  ],
});
