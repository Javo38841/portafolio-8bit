// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
// Se publica en GitHub Pages con dominio propio, por eso no hace falta `base`.
export default defineConfig({
  site: 'https://8bit.gitflow.cl',
  // Español en la raíz (/), inglés en /en/ y portugués en /pt/.
  i18n: {
    locales: ['es', 'en', 'pt'],
    defaultLocale: 'es',
    routing: { prefixDefaultLocale: false },
  },
});
