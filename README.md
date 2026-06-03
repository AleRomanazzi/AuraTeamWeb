# AuraTeam Web

Clone de [aurateam.com.ar](https://aurateam.com.ar) construido con React + TypeScript + Vite + Tailwind CSS.

## Stack

- **Vite 8** + **React 18** + **TypeScript**
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **React Router v6** — routing client-side
- **yet-another-react-lightbox** — lightbox del portafolio
- Tipografías: **Syne** (headings) + **DM Sans** (body) vía Google Fonts
- Todo el contenido hardcodeado en `src/data/content.ts`

## Cómo correr el proyecto

```bash
npm install
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173).

## Build de producción

```bash
npm run build
npm run preview
```

## Páginas

| Ruta | Página |
|------|--------|
| `/` | Inicio |
| `/servicios` | Servicios |
| `/portafolio` | Portafolio (con lightbox) |
| `/nuestro-equipo` | Nuestro equipo |
| `/contacto` | Contacto |

## Cómo actualizar el contenido

Todo el texto, imágenes y datos están en **`src/data/content.ts`**. Cada sección tiene su propio objeto exportado con tipado TypeScript:

| Export | Qué controla |
|--------|-------------|
| `nav` | Logo, links de navegación, botón CTA |
| `hero` | Título, subtítulo y CTA del hero |
| `servicesIntro` | Heading y párrafo de la sección servicios |
| `serviceCards` | Las 3 tarjetas de servicios del home |
| `clientLogos` | Logos de clientes (nombre + URL) |
| `portfolioImages` | Las 9 imágenes del portafolio (src + alt) |
| `portfolioSection` | Heading y párrafo de la sección portafolio |
| `ctaSection` | Sección de llamado a la acción |
| `footer` | Logo, email, dirección, copyright |
| `serviciosPage` | Categorías y servicios de `/servicios` |
| `teamMembers` | Tarjetas del equipo (bio, redes sociales) |
| `workingMethod` | Sección "Nuestra forma de trabajar" |
| `contactPage` | Heading, datos y mapa de `/contacto` |

### Ejemplo: agregar un logo de cliente

```ts
// src/data/content.ts
export const clientLogos = [
  // ...logos existentes...
  { name: 'Nuevo Cliente', url: 'https://ruta/a/logo.png' },
];
```

### Ejemplo: agregar una imagen al portafolio

```ts
export const portfolioImages = [
  // ...imágenes existentes...
  { src: 'https://ruta/a/imagen.jpg', alt: 'Descripción' },
];
```
# AuraTeamWeb
# AuraTeamWeb
