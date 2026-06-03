# Prompt: Clonar aurateam.com.ar en React + TypeScript

You are cloning the frontend of https://aurateam.com.ar (a WordPress/Elementor site) into a modern React + TypeScript stack. The goal is a pixel-faithful clone with full editability going forward.

---

## Stack

- Vite + React 18 + TypeScript
- Tailwind CSS (for styling)
- React Router v6 (client-side routing)
- No database needed — all content will be hardcoded as TypeScript data files for now

---

## Pages to build

1. `/` — Home (Inicio)
2. `/servicios` — Servicios
3. `/portafolio` — Portafolio (replicate the image grid shown on the homepage)
4. `/nuestro-equipo` — Nuestro equipo
5. `/contacto` — Contacto

---

## Site structure & content

### Navigation (all pages)

- Logo: https://aurateam.com.ar/wp-content/uploads/2025/08/logo-azul-aura-png_1.png
- Links: Inicio / Servicios / Portafolio / Nuestro equipo
- CTA button top-right: "Contáctanos" → /contacto
- Mobile: hamburger menu

---

### Home page sections (in order)

**1. Hero**
Headline: "Presencia online profesional"
Subheadline: "Acompañamos tu marca desde el diseño hasta la difusión"
CTA button: "Ver servicios" → /servicios

**2. Services intro**
Heading: "Nuestros servicios especializados"
Paragraph: "Conocé nuestras soluciones creativas pensadas para capturar, comunicar y potenciar tu proyecto. Desde la cobertura visual de eventos hasta estrategias de comunicación integrales, estamos para acompañarte en cada paso."

Three cards:
- Producción audiovisual — "Nos centramos en la produccion orientada al resultado, desde el diseño de marca, la fotografía profesional y creación de videos que retienen al público." — "Leer más" → /servicios
- Desarrollo de sistemas — "Desarrollamos soluciones digitales pensadas para optimizar procesos, mejorar la presencia online y acompañar el crecimiento de tu negocio." — "Leer más" → /servicios
- Gestión de redes sociales — "Damos vida a tu marca en redes con estrategia, creatividad y propósito. No solo gestionamos: analizamos, creamos y conectamos con tu audiencia desde una comunicación auténtica." — "Leer más" → /servicios

**3. Client logos**
Heading: "Marcas que eligieron trabajar con Aura"

| Name | URL |
|------|-----|
| Enredados | https://aurateam.com.ar/wp-content/uploads/2025/08/Enredados.png |
| Naranja X | https://aurateam.com.ar/wp-content/uploads/2025/08/Naranja-X.png |
| Amnesia | https://aurateam.com.ar/wp-content/uploads/2025/08/Amnesia.png |
| AlToque | https://aurateam.com.ar/wp-content/uploads/2025/08/AlToque.png |
| CC11 | https://aurateam.com.ar/wp-content/uploads/2025/08/CC11.png |
| FarmaLaR | https://aurateam.com.ar/wp-content/uploads/2025/08/FarmaLaR.png |
| Cycles Ferreyra | https://aurateam.com.ar/wp-content/uploads/2025/08/Cycles-Ferreyra.png |

**4. Portfolio preview**
Heading: "Algunos de nuestros resultados"
Paragraph: "Te invitamos a explorar nuestro portafolio de fotografía, videografía y contenido aéreo. Cada trabajo refleja nuestro compromiso con la calidad, la estética y la historia detrás de cada momento."

Image grid:
- https://aurateam.com.ar/wp-content/uploads/2025/05/TNX-083a.jpg
- https://aurateam.com.ar/wp-content/uploads/2025/05/TNX-079.jpg
- https://aurateam.com.ar/wp-content/uploads/2025/04/air-2.jpg
- https://aurateam.com.ar/wp-content/uploads/2025/04/DJI_20250106213919_0056_D-scaled.jpg
- https://aurateam.com.ar/wp-content/uploads/2025/04/DANS-FONDOazul-3.jpg
- https://aurateam.com.ar/wp-content/uploads/2025/04/ergon-57-scaled.jpg
- https://aurateam.com.ar/wp-content/uploads/2025/04/ergon-79-scaled.jpg
- https://aurateam.com.ar/wp-content/uploads/2025/04/boxin-78.jpg
- https://aurateam.com.ar/wp-content/uploads/2025/04/DJI_20250106195956_0054_D-scaled.jpg

**5. CTA section**
Heading: "¿Hablamos sobre tu próximo proyecto?"
Text: "Contáctenos para contarnos qué tenés en mente. Estamos listos para asesorarte, responder tus dudas y crear una propuesta a medida que se adapte a tus necesidades."
Button: "Contáctanos" → /contacto

**6. Footer**
- Logo blanco: https://aurateam.com.ar/wp-content/uploads/2025/08/logo-blanco-aura-png.png
- Email: aurateamcontacto@gmail.com
- Address: Villacorta 335, Barrio U.P.C.N, La Rioja, Argentina
- Copyright: "© 2025 AuraTeam. Todos los derechos reservados"

---

### Servicios page

Three service categories:

**Fotografía y Diseño Multimedia**
- Fotografía profesional: Eventos sociales, sesiones en estudio y exterior y fotoproducto profesional.
- Videografía y filmación: cobertura de eventos, videoclips y producciones audiovisuales en estudio.
- Diseño Gráfico: Creacion de marca, flyers y tarjetas personales/invitación.

**Desarrollo web**
- Landing Pages: diseño de páginas web simples, efectivas y enfocadas en resultados.
- Desarrollo de sistemas de gestión: creamos sistemas personalizados para negocios medianos y grandes.
- Cobertura de drone: Filmación y fotografía de eventos, terrenos a lo largo del país.

**Comunicación y gestión**
- Gestión de redes sociales: planificación de contenido, gestion y lectura y uso de estadísticas.
- Estrategias de contenido: ideación, calendarización y ejecución para alcanzar objetivos reales.
- Comunicación institucional: redacción, revisión de documentos, gestión de correos, identidad verbal, comunicación interna y más.

---

### Nuestro equipo page

Three team member cards:

**Andrés Reynoso** — Fotógrafo y Diseñador Multimedial
Bio: "Desde chico desarrolle interés por el lenguaje visual y esto me llevo a instruirme en diseño grafico y operar cámaras profesionales. Soy estudiante avanzado de la carrera de Diseño Multimedia donde aprendí a crear proyectos audiovisuales utilizando herramientas digitales y analógicas en equipo. Hago fotografía de eventos sociales desde 2018. En Aura Team me especializo en crear contenido, desde la fotografía hasta el diseño y edición."
Instagram: https://www.instagram.com/andurey.ph/

**Alejandro Romanazzi** — Ing. Sistemas de Información / Piloto de Drone
Bio: "Amante de la programación, tecnologías innovadoras, telecomunicaciones y ciberseguridad. Experiencia en auditorías y en el desarrollo de sistemas web y a medida. Proactivo, resolutivo, decidido y constante. En Aura Team me desempeño como desarrollador, piloto de drone, asistente en coberturas de eventos y participo en la toma de decisiones de las planificaciones."
Instagram: https://www.instagram.com/ale_romanazzi1/
LinkedIn: https://www.linkedin.com/in/alejandro-romanazzi/

**Lautaro Fuentes** — Comunicador Institucional / Social Media Manager
Bio: "Apasionado por la comunicación estratégica y el poder de conectar marcas con personas reales. Me formé como comunicador institucional y complementé mi formación con certificaciones en Social Media Management y Community Management en el Instituto Mariano Moreno. En Aura Team me enfoco en diseñar estrategias de contenido, gestionar comunidades digitales y crear mensajes que reflejen la identidad de cada proyecto. Creo en una comunicación genuina, clara y creativa como base para construir vínculos duraderos entre marcas y audiencias."
Instagram: https://www.instagram.com/lautyfuentes/
LinkedIn: https://www.linkedin.com/in/lautarofllanos/

After the team cards, include:
- The full services section (same content as /servicios)
- A "Nuestra forma de trabajar" section with this text: "Creemos en el poder de la colaboración. Escuchamos a cada cliente, entendemos su visión y la convertimos en un proyecto priorizando los objetivos. No trabajamos con fórmulas ni plantillas, elegimos los recursos óptimos para cada proyecto segun las necesidades planteadas en una reunion previa. Para obtener tu cotización, contactáte con nosotros para programar una reunion y contarnos tus necesidades y objetivos."

---

### Contacto page

- Heading: "¿Hablamos sobre tu próximo proyecto?"
- Contact form: fields for Nombre, Email, Mensaje, submit button "Enviar"
- The form does NOT need a backend. On submit, show a success message inline.
- Address info: aurateamcontacto@gmail.com / Villacorta 335, Barrio U.P.C.N, La Rioja, Argentina
- Embed Google Maps iframe: `https://maps.google.com/maps?q=Villacorta%20335%2C%20La%20Rioja%2C%20Argentina&t=m&z=15&output=embed&iwloc=near`

---

### Portafolio page

Image grid with the same 9 images from the home portfolio section. Add a lightbox on click — install and use `yet-another-react-lightbox`.

---

## Styling guidelines

- Primary blue: approximately `#1E40AF` (derive from logo if possible)
- Dark background footer
- Clean, modern feel matching the original site
- Responsive: mobile-first
- Font: Inter from Google Fonts

---

## Project setup steps

1. Run: `npm create vite@latest . -- --template react-ts`
2. Install dependencies:
   ```bash
   npm install react-router-dom tailwindcss @tailwindcss/vite yet-another-react-lightbox
   ```
3. Configure Tailwind inside `vite.config.ts` using the `@tailwindcss/vite` plugin (Tailwind v4 approach)
4. Create this folder structure:
   ```
   src/
     components/    # Navbar, Footer, ServiceCard, TeamCard, PortfolioGrid, etc.
     pages/         # Home, Servicios, Portafolio, Equipo, Contacto
     data/          # content.ts — all hardcoded text and image URLs
     App.tsx
     main.tsx
   ```
5. Set up React Router in `App.tsx` with all 5 routes
6. Build all components and pages using the content above
7. Run `npm run dev` and confirm no TypeScript or runtime errors

---

## Important notes

- Do NOT fetch any WordPress REST API. All content is hardcoded in `src/data/content.ts`.
- All images load directly from the original WordPress CDN URLs — no download needed.
- Keep all content in `src/data/content.ts` as typed TypeScript objects so it's easy to edit later.
- The site is in Spanish — keep all text exactly as provided above.
- Add a `README.md` explaining how to run the project and how to update content.
