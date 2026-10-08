// Datos personales del sitio. Deja un link vacío ('') para ocultar su botón.
export const site = {
  name: 'Javier Choque Flores',
  handle: 'javier.choque',
  role: 'Ingeniero en Informática',
  location: 'Tarapacá, Chile',
  email: 'jchoque0@gmail.com',
  github: 'https://github.com/Javo38841',
  linkedin: '', // TODO: URL de tu perfil de LinkedIn
  cvPdf: '', // TODO: p. ej. '/cv-javier-choque.pdf' (copiarlo a public/, sin teléfono)
  // Foto del homelab en "Sobre mí". Hoy es una imagen referencial CC0 de Wikimedia Commons
  // ("Legrand S.A. server rack"), pixelada a 4 colores con ImageMagick; TODO: reemplazar por la foto de tu servidor y poner `isReference: false`.
  homelabPhoto: { src: '/img/servidor-referencial-gb.png', alt: 'Rack de servidores en pixel-art', isReference: true },
};

// Antepone el `base` de Astro (necesario si se despliega bajo un subpath en GitHub Pages).
export function withBase(path: string): string {
  return import.meta.env.BASE_URL.replace(/\/$/, '') + path;
}
