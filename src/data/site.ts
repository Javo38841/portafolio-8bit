// Datos personales del sitio. Deja un link vacío ('') para ocultar su botón.
export const site = {
  name: 'Javier Choque Flores',
  handle: 'javier.choque',
  // El cargo (role) está traducido en src/i18n/ui.ts → 'site.role'.
  location: 'Tarapacá, Chile',
  email: 'jchoque0@gmail.com',
  github: 'https://github.com/Javo38841',
  linkedin: 'https://www.linkedin.com/in/javier-silvio-choque-flores-49904923b/',
  instagram: 'https://www.instagram.com/skiptrancing/',
  instagramHandle: '@skiptrancing',
  cvPdf: '', // TODO: p. ej. '/cv-javier-choque.pdf' (copiarlo a public/, sin teléfono)
  // Foto real del homelab: el notebook que hace de servidor.
  homelabPhoto: { src: '/img/servidor-gb.png', alt: 'Mi servidor en pixel-art: un notebook con la terminal abierta', isReference: false },
};

// Antepone el `base` de Astro (necesario si se despliega bajo un subpath en GitHub Pages).
export function withBase(path: string): string {
  return import.meta.env.BASE_URL.replace(/\/$/, '') + path;
}
