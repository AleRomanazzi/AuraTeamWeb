import logoBlancoUrl from '../assets/logo blanco png.png';

import marcaEnredados from '../assets/MarcasTrabajadas/Enredados.png';
import marcaNaranjaX from '../assets/MarcasTrabajadas/Naranja-X.png';
import marcaAmnesia from '../assets/MarcasTrabajadas/Amnesia.png';
import marcaAlToque from '../assets/MarcasTrabajadas/AlToque.png';
import marcaCC11 from '../assets/MarcasTrabajadas/CC11.png';
import marcaFarmaLaR from '../assets/MarcasTrabajadas/FarmaLaR.png';
import marcaCyclesFerreyra from '../assets/MarcasTrabajadas/Cycles-Ferreyra.png';
import marcaCEFN5 from '../assets/MarcasTrabajadas/CEFN5.png';
import marcaLennon from '../assets/MarcasTrabajadas/Lennon_logo.png';
import marcaUrbanFitness from '../assets/MarcasTrabajadas/urbanfitness.png';
import marcaHaut from '../assets/MarcasTrabajadas/Haut.png';
import marcaDraKarina from '../assets/MarcasTrabajadas/DraKarinaSantellan.png';

import vistasAltoque1 from '../assets/Vistas/vistas altoque 1.png';
import vistasAltoque2 from '../assets/Vistas/vistas altoque 2.png';
import vistasAltoque3 from '../assets/Vistas/vistas altoque 3.png';
import vistasAltoque4 from '../assets/Vistas/vistas altoque 4.png';
import vistasAltoque5 from '../assets/Vistas/vistas altoque 5.png';
import vistasAltoque6 from '../assets/Vistas/vistas altoque 6.png';
import vistasAltoque7 from '../assets/Vistas/vistas altoque 7.png';
import vistasCycles1 from '../assets/Vistas/vistas cycles 1.png';
import vistasCycles2 from '../assets/Vistas/vistas cycles 2.png';
import vistasCycles3 from '../assets/Vistas/vistas cycles 3.png';
import vistasCycles4 from '../assets/Vistas/vistas cycles 4.png';
import vistasCycles5 from '../assets/Vistas/vistas cycles 5.png';

import photoAnduFront from '../assets/EquipoAura/aurateam-35-andu.jpg';
import photoAnduAction from '../assets/EquipoAura/aurateam-59-andu3.jpg';
import photoAleFront from '../assets/EquipoAura/aurateam-4-ale.jpg';
import photoAleAction from '../assets/EquipoAura/aurateam-56-ale2.jpg';
import photoLautiFront from '../assets/EquipoAura/aurateam-52-lauti.jpg';
import photoLautiAction from '../assets/EquipoAura/aurateam-58-lauti2.jpg';
export { default as teamGroupPhoto } from '../assets/EquipoAura/aurateam-equipo.jpg';

// ─── Cloudinary ───────────────────────────────────────────────────────────────

const CLOUD = 'h8swbxzn';

export const cloudUrl = (publicId: string, width: number): string =>
  `https://res.cloudinary.com/${CLOUD}/image/upload/f_auto,q_auto,w_${width}/${publicId}`;

// ─── Portfolio types ──────────────────────────────────────────────────────────

export type FotoFilter =
  | 'retratos' | 'eventos' | 'deportes' | 'fotoproducto'
  | 'infantil' | 'institucional' | 'viajes';

export type DisenoFilter = 'flyers' | 'feed' | 'arte';

export interface FotoImage  { id: string; alt: string; filter: FotoFilter; }
export interface DisenoImage { id: string; alt: string; filter: DisenoFilter; }

export interface PortfolioVideo {
  id: string;
  title: string;
  description: string;
  client: string;
  year: number;
  badge: string;
  featured?: boolean;
}

// ─── Filter labels ────────────────────────────────────────────────────────────

export const FOTO_FILTERS: Array<{ value: FotoFilter | 'todos'; label: string }> = [
  { value: 'todos',         label: 'Todos' },
  { value: 'retratos',      label: 'Retratos' },
  { value: 'eventos',       label: 'Eventos' },
  { value: 'deportes',      label: 'Deportes' },
  { value: 'fotoproducto',  label: 'Fotoproducto' },
  { value: 'infantil',      label: 'Infantil' },
  { value: 'institucional', label: 'Institucional' },
  { value: 'viajes',        label: 'Viajes' },
];

export const DISENO_FILTERS: Array<{ value: DisenoFilter | 'todos'; label: string }> = [
  { value: 'todos',   label: 'Todos' },
  { value: 'flyers',  label: 'Flyers' },
  { value: 'feed',    label: 'Feed & Redes' },
  { value: 'arte',    label: 'Arte Digital' },
];

// ─── Image generators ─────────────────────────────────────────────────────────

function makeFoto(prefix: string, count: number, filter: FotoFilter, alt: string): FotoImage[] {
  return Array.from({ length: count }, (_, i) => ({
    id: `portafolio/${prefix}_${String(i + 1).padStart(2, '0')}`,
    alt,
    filter,
  }));
}

function makeDiseno(prefix: string, count: number, filter: DisenoFilter, alt: string): DisenoImage[] {
  return Array.from({ length: count }, (_, i) => ({
    id: `portafolio/${prefix}_${String(i + 1).padStart(2, '0')}`,
    alt,
    filter,
  }));
}

// ─── Fotografía ───────────────────────────────────────────────────────────────

export const fotografiaImages: FotoImage[] = [
  ...makeFoto('01_Sesiones', 12, 'retratos',
    'Sesión de retratos fotográficos — Andrés Reynoso / AuraTeam, La Rioja'),
  ...makeFoto('02_Evento_social', 44, 'eventos',
    'Cobertura fotográfica de evento social — Andrés Reynoso / AuraTeam, La Rioja'),
  ...makeFoto('03_Deportes', 12, 'deportes',
    'Fotografía deportiva — Andrés Reynoso / AuraTeam, La Rioja'),
  ...makeFoto('04_Fotoproducto', 10, 'fotoproducto',
    'Fotografía de producto — Andrés Reynoso / AuraTeam, La Rioja'),
  ...makeFoto('05_Infantil_Bautismo', 10, 'infantil',
    'Cobertura infantil y bautismo — Andrés Reynoso / AuraTeam, La Rioja'),
  ...makeFoto('06_Institucional', 15, 'institucional',
    'Fotografía institucional — Andrés Reynoso / AuraTeam, La Rioja'),
  ...makeFoto('07_Paisajes_Bariloche', 6, 'viajes',
    'Paisajes de Bariloche, Río Negro — Andrés Reynoso / AuraTeam'),
  ...makeFoto('08_Retratos_y_paisajes_Cataratas', 10, 'viajes',
    'Retratos y paisajes en Cataratas del Iguazú — Andrés Reynoso / AuraTeam'),
  ...makeFoto('09_Retratos_Bariloche', 6, 'viajes',
    'Retrato fotográfico en Bariloche, Río Negro — Andrés Reynoso / AuraTeam'),
  ...makeFoto('10_Retratos_y_paisaje_Salta-Jujuy', 5, 'viajes',
    'Retratos y paisajes en Salta y Jujuy — Andrés Reynoso / AuraTeam'),
];

// ─── Diseño Gráfico ───────────────────────────────────────────────────────────

export const disenoImages: DisenoImage[] = [
  ...makeDiseno('11_Diseno_flyer', 23, 'flyers',
    'Diseño de flyer para evento — AuraTeam, La Rioja'),
  ...makeDiseno('12_Disenos_feed', 34, 'feed',
    'Diseño de pieza para redes sociales — AuraTeam, La Rioja'),
  ...makeDiseno('13_Ilustracion', 4, 'arte',
    'Ilustración digital — Andrés Reynoso / AuraTeam'),
  ...makeDiseno('14_Textos_personalizados', 7, 'arte',
    'Lettering 3D personalizado — Andrés Reynoso / AuraTeam'),
];

// ─── Videos ───────────────────────────────────────────────────────────────────

export const portfolioVideos: PortfolioVideo[] = [
  {
    id: 'QEZB7AHm3Dc',
    title: 'SerUrbano — Producción para cine',
    description: 'Corto institucional proyectado en pantalla de cine durante un evento. Muestra la tecnología e infraestructura de la clínica estética.',
    client: 'SerUrbano',
    year: 2025,
    badge: 'Institucional',
    featured: true,
  },
  {
    id: 'Ox-eOGHe33E',
    title: 'UrbanGames 2025 — UrbanFitness',
    description: 'Reel de la primera edición de UrbanGames: cómo y dónde se desarrollará la competencia de crossfit.',
    client: 'UrbanFitness',
    year: 2025,
    badge: 'Deportes',
  },
  {
    id: 'jL-90vBF0Q8',
    title: 'BMX en el Skatepark de La Rioja',
    description: 'Grabación con drone de trucos de BMX en el skatepark de La Rioja.',
    client: 'Contenido propio',
    year: 2025,
    badge: 'Deportes',
  },
  {
    id: 'Gz6UJzn6AuE',
    title: 'Lennon — Navidad 2025',
    description: 'Reel con tono cómico mostrando el movimiento del local durante la temporada navideña.',
    client: 'Lennon',
    year: 2025,
    badge: 'Contenido de marca',
  },
  {
    id: '5N_lBNewBEM',
    title: 'Cycles Ferreyra — Fibra de carbono',
    description: 'Reel mostrando el ingreso de partes de fibra de carbono para bicicletas.',
    client: 'Cycles Ferreyra',
    year: 2025,
    badge: 'Producto',
  },
  {
    id: 'otulYAXQmJ4',
    title: 'Las Grutas — Paisaje y playas',
    description: 'Video de paisaje de Las Grutas, en el sur de Argentina, mostrando playas y vistas del lugar.',
    client: 'AuraTeam',
    year: 2025,
    badge: 'Paisaje',
  },
];

// ─── Existing site content ────────────────────────────────────────────────────

export const nav = {
  logo: logoBlancoUrl,
  logoWhite: logoBlancoUrl,
  links: [
    { label: 'Inicio', href: '/' },
    { label: 'Servicios', href: '/servicios' },
    { label: 'Portafolio', href: '/portafolio' },
    { label: 'Nuestro equipo', href: '/nuestro-equipo' },
  ],
  cta: { label: 'Contáctanos', href: '/contacto' },
};

export const hero = {
  headline: 'Presencia online profesional',
  subheadline: 'Acompañamos tu marca desde el diseño hasta la difusión',
  cta: { label: 'Ver servicios', href: '/servicios' },
};

export const servicesIntro = {
  heading: 'Nuestros servicios especializados',
  paragraph:
    'Conocé nuestras soluciones creativas pensadas para capturar, comunicar y potenciar tu proyecto. Desde la cobertura visual de eventos hasta estrategias de comunicación integrales, estamos para acompañarte en cada paso.',
};

export const serviceCards = [
  {
    title: 'Producción audiovisual',
    description:
      'Nos centramos en la produccion orientada al resultado, desde el diseño de marca, la fotografía profesional y creación de videos que retienen al público.',
    cta: { label: 'Leer más', href: '/servicios' },
    icon: '🎬',
  },
  {
    title: 'Desarrollo de sistemas',
    description:
      'Desarrollamos soluciones digitales pensadas para optimizar procesos, mejorar la presencia online y acompañar el crecimiento de tu negocio.',
    cta: { label: 'Leer más', href: '/servicios' },
    icon: '💻',
  },
  {
    title: 'Gestión de redes sociales',
    description:
      'Damos vida a tu marca en redes con estrategia, creatividad y propósito. No solo gestionamos: analizamos, creamos y conectamos con tu audiencia desde una comunicación auténtica.',
    cta: { label: 'Leer más', href: '/servicios' },
    icon: '📱',
  },
];

export const reelHighlightsSection = {
  heading: 'Contenido que llegó a miles',
  paragraph: 'Reels que producimos para nuestros clientes y el alcance que consiguieron en redes.',
};

export const reelHighlights: { brand: string; platform: 'instagram' | 'tiktok'; src: string; alt: string }[] = [
  { brand: 'Cycles Ferreyra', platform: 'instagram', src: vistasCycles1, alt: 'Reel de Instagram — Cycles Ferreyra, 11,4 mil visualizaciones' },
  { brand: 'Cycles Ferreyra', platform: 'instagram', src: vistasCycles2, alt: 'Reel de Instagram — Cycles Ferreyra, 15,4 mil visualizaciones' },
  { brand: 'Cycles Ferreyra', platform: 'instagram', src: vistasCycles3, alt: 'Reel de Instagram — Cycles Ferreyra, 24,2 mil visualizaciones' },
  { brand: 'Cycles Ferreyra', platform: 'instagram', src: vistasCycles4, alt: 'Reel de Instagram — Cycles Ferreyra, 25,3 mil visualizaciones' },
  { brand: 'Cycles Ferreyra', platform: 'instagram', src: vistasCycles5, alt: 'Reel de Instagram — Cycles Ferreyra, 10,1 mil visualizaciones' },
  { brand: 'AlToque', platform: 'instagram', src: vistasAltoque1, alt: 'Reel de Instagram — AlToque, 13.2K visualizaciones' },
  { brand: 'AlToque', platform: 'tiktok',    src: vistasAltoque2, alt: 'Video de TikTok — AlToque, 38.9K visualizaciones' },
  { brand: 'AlToque', platform: 'instagram', src: vistasAltoque3, alt: 'Reel de Instagram — AlToque, 11.4K visualizaciones' },
  { brand: 'AlToque', platform: 'instagram', src: vistasAltoque4, alt: 'Reel de Instagram — AlToque, 20.9K visualizaciones' },
  { brand: 'AlToque', platform: 'tiktok',    src: vistasAltoque5, alt: 'Video de TikTok — AlToque, 126.6K visualizaciones' },
  { brand: 'AlToque', platform: 'instagram', src: vistasAltoque6, alt: 'Reel de Instagram — AlToque, 13K visualizaciones' },
  { brand: 'AlToque', platform: 'instagram', src: vistasAltoque7, alt: 'Reel de Instagram — AlToque, 54K visualizaciones' },
];

export const clientLogos: { name: string; url: string }[] = [
  { name: 'Enredados',            url: marcaEnredados },
  { name: 'Naranja X',            url: marcaNaranjaX },
  { name: 'Amnesia',              url: marcaAmnesia },
  { name: 'AlToque',              url: marcaAlToque },
  { name: 'CC11',                 url: marcaCC11 },
  { name: 'FarmaLaR',             url: marcaFarmaLaR },
  { name: 'Cycles Ferreyra',      url: marcaCyclesFerreyra },
  { name: 'CEFN5',                url: marcaCEFN5 },
  { name: 'Lennon',               url: marcaLennon },
  { name: 'Urban Fitness',        url: marcaUrbanFitness },
  { name: 'Haut',                 url: marcaHaut },
  { name: 'Dra. Karina Santellan', url: marcaDraKarina },
];

export const portfolioSection = {
  heading: 'Algunos de nuestros resultados',
  paragraph:
    'Te invitamos a explorar nuestro portafolio de fotografía, videografía y contenido aéreo. Cada trabajo refleja nuestro compromiso con la calidad, la estética y la historia detrás de cada momento.',
};

export const ctaSection = {
  heading: '¿Hablamos sobre tu próximo proyecto?',
  text: 'Contanos qué tenés en mente y diseñamos una propuesta para tu proyecto.',
  cta: { label: 'Contáctanos', href: '/contacto' },
};

export const footer = {
  logo: logoBlancoUrl,
  email: 'aurateamcontacto@gmail.com',
  address: 'Villacorta 335, Barrio U.P.C.N, La Rioja, Argentina',
  copyright: '© 2025 AuraTeam. Todos los derechos reservados',
};

export const serviciosPage = [
  {
    category: 'Fotografía y Diseño Multimedia',
    items: [
      { title: 'Fotografía profesional', description: 'Eventos sociales, sesiones en estudio y exterior y fotoproducto profesional.' },
      { title: 'Videografía y filmación', description: 'Cobertura de eventos, videoclips y producciones audiovisuales en estudio.' },
      { title: 'Diseño gráfico', description: 'Creacion de marca, flyers y tarjetas personales/invitación.' },
    ],
  },
  {
    category: 'Desarrollo web',
    items: [
      { title: 'Landing pages', description: 'Diseño de páginas web simples, efectivas y enfocadas en resultados.' },
      { title: 'Desarrollo de sistemas de gestión', description: 'Creamos sistemas personalizados para negocios medianos y grandes.' },
      { title: 'Cobertura de drone', description: 'Filmación y fotografía de eventos, terrenos a lo largo del país.' },
    ],
  },
  {
    category: 'Comunicación y gestión',
    items: [
      { title: 'Gestión de redes sociales', description: 'Planificación de contenido, gestion y lectura y uso de estadísticas.' },
      { title: 'Estrategias de contenido', description: 'Ideación, calendarización y ejecución para alcanzar objetivos reales.' },
      { title: 'Comunicación institucional', description: 'Redacción, revisión de documentos, gestión de correos, identidad verbal, comunicación interna y más.' },
    ],
  },
];

export const teamMembers = [
  {
    name: 'Andrés Reynoso',
    role: 'Fotógrafo y Diseñador Multimedial',
    bio: 'Desde chico desarrolle interés por el lenguaje visual y esto me llevo a instruirme en diseño grafico y operar cámaras profesionales. Soy estudiante avanzado de la carrera de Diseño Multimedia donde aprendí a crear proyectos audiovisuales utilizando herramientas digitales y analógicas en equipo. Hago fotografía de eventos sociales desde 2018. En Aura Team me especializo en crear contenido, desde la fotografía hasta el diseño y edición.',
    instagram: 'https://www.instagram.com/andurey.ph/',
    linkedin: null,
    photo: photoAnduFront,
    photoAction: photoAnduAction,
  },
  {
    name: 'Alejandro Romanazzi',
    role: 'Ingeniero en Sistemas de Información / Piloto de Drone',
    bio: 'Amante de la programación, tecnologías innovadoras, telecomunicaciones y ciberseguridad. Experiencia en auditorías y en el desarrollo de sistemas web y a medida. Proactivo, resolutivo, decidido y constante. En Aura Team me desempeño como desarrollador, piloto de drone, asistente en coberturas de eventos y participo en la toma de decisiones de las planificaciones.',
    instagram: 'https://www.instagram.com/ale_romanazzi1/',
    linkedin: 'https://www.linkedin.com/in/alejandro-romanazzi/',
    photo: photoAleFront,
    photoAction: photoAleAction,
  },
  {
    name: 'Lautaro Fuentes',
    role: 'Comunicador Institucional / Social Media Manager',
    bio: 'Apasionado por la comunicación estratégica y el poder de conectar marcas con personas reales. Me formé como comunicador institucional y complementé mi formación con certificaciones en Social Media Management y Community Management en el Instituto Mariano Moreno. En Aura Team me enfoco en diseñar estrategias de contenido, gestionar comunidades digitales y crear mensajes que reflejen la identidad de cada proyecto. Creo en una comunicación genuina, clara y creativa como base para construir vínculos duraderos entre marcas y audiencias.',
    instagram: 'https://www.instagram.com/lautyfuentes/',
    linkedin: 'https://www.linkedin.com/in/lautarofllanos/',
    photo: photoLautiFront,
    photoAction: photoLautiAction,
  },
];

export const workingMethod = {
  heading: 'Nuestra forma de trabajar',
  text: 'Creemos en el poder de la colaboración. Escuchamos a cada cliente, entendemos su visión y la convertimos en un proyecto priorizando los objetivos. No trabajamos con fórmulas ni plantillas, elegimos los recursos óptimos para cada proyecto segun las necesidades planteadas en una reunion previa. Para obtener tu cotización, contactáte con nosotros para programar una reunion y contarnos tus necesidades y objetivos.',
};

export const contactPage = {
  heading: '¿Hablamos sobre tu próximo proyecto?',
  email: 'aurateamcontacto@gmail.com',
  address: 'Villacorta 335, Barrio U.P.C.N, La Rioja, Argentina',
  mapSrc:
    'https://maps.google.com/maps?q=Villacorta%20335%2C%20La%20Rioja%2C%20Argentina&t=m&z=15&output=embed&iwloc=near',
};
