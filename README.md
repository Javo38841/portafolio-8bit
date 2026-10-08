# Página personal — Javier Choque · edición 8-bit

Sitio estático en [Astro](https://docs.astro.build): una página de presentación (`/`) y el caso de
estudio del LMS (`/proyectos/lms`), con visuales interactivas alimentadas por datos reales del repo.

## Comandos

| Comando           | Acción                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Instala dependencias                         |
| `npm run dev`     | Servidor de desarrollo en `localhost:4321`   |
| `npm run check`   | Type-check (`astro check`)                   |
| `npm run build`   | Build de producción en `./dist/`             |
| `npm run preview` | Sirve el build localmente                    |

## Estructura

```text
src/
├── data/
│   ├── site.ts          # nombre, email, links (vacío = se oculta el botón)
│   └── stats.json       # números del LMS: tests por módulo, PRs, jobs del CI, historial GitFlow
├── styles/global.css    # tokens de color (claro + oscuro), tipografía, botones
├── layouts/BaseLayout.astro
├── components/
│   ├── Nav.astro · Footer.astro · Icon.astro · SectionHeader.astro
│   ├── home/Hero.astro · home/ServerIllustration.astro
│   └── lms/
│       ├── Counters.astro     # contadores animados al hacer scroll
│       ├── Pipeline.astro     # CI/CD como cadena de ensamblaje (correr / simular fallo)
│       ├── TestPyramid.astro  # pirámide de tests con selector de módulo
│       ├── GitMetro.astro     # PRs reales dibujados como líneas de metro (SVG)
│       └── Roadmap.astro      # épicas desplegables con sus historias (desde stats.json)
└── pages/
    ├── index.astro            # quién soy
    └── proyectos/lms.astro    # caso de estudio
```

## Pendientes (buscar `TODO` en el código)

- [ ] Reescribir los textos con tu voz (son un borrador sacado de los CVs).
- [ ] `site.ts`: URL de LinkedIn y el CV en PDF (copiarlo a `public/`, **sin teléfono**).
- [ ] Foto del hero (opcional).
- [ ] Reemplazar `public/img/servidor-referencial.jpg` (imagen CC0 de Wikimedia Commons) por la foto de tu
      servidor y poner `homelabPhoto.isReference: false` en `site.ts`.
- [ ] Caso LMS: un segundo "problema real".
- [ ] Roadmap: actualizar `status` de épicas e historias en `stats.json` a medida que avancen.

## Datos vivos (`stats.json`)

Hoy `src/data/stats.json` se escribe a mano. La idea es que el CI del monorepo LMS lo regenere en cada
merge a partir de los reportes JSON de Jest/Playwright y `gh pr list`, y lo publique para que este
sitio lo lea al construirse. Así el repo del LMS puede seguir privado: solo se exponen los números.

## Despliegue

Es un sitio 100 % estático (`dist/`), así que sirve en GitHub Pages, Cloudflare Pages o un Nginx en el
homelab detrás de Cloudflare Tunnel. Si se publica bajo un subpath (p. ej. `usuario.github.io/repo`),
configurar `site` y `base` en `astro.config.mjs`; los links internos ya usan `withBase()`.
