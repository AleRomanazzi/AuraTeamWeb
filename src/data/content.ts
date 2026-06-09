import logoBlancoUrl from '../assets/logo blanco png.png';

import pAlerom130   from '../assets/Portafolio/alerom-130.jpg';
import pAlerom164   from '../assets/Portafolio/alerom-164.jpg';
import pAnionuevo12 from '../assets/Portafolio/anionuevo-12.jpg';
import pBmx24       from '../assets/Portafolio/bmx-24.jpg';
import pBmx49       from '../assets/Portafolio/bmx-49.jpg';
import pLennon29    from '../assets/Portafolio/lennon-29.jpg';
import pMart7       from '../assets/Portafolio/mart-7.jpg';
import pMateo010    from '../assets/Portafolio/mateo-010.jpg';
import pPollock32   from '../assets/Portafolio/pollock-32.jpg';
import pRam33       from '../assets/Portafolio/ram-33.jpg';
import pTNX083a     from '../assets/Portafolio/TNX-083a.jpg';
import pTNX100      from '../assets/Portafolio/TNX-100.jpg';
import pTNX106      from '../assets/Portafolio/TNX-106.jpg';
import pTNX107      from '../assets/Portafolio/TNX-107.jpg';

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

import photoAnduFront from '../assets/EquipoAura/aurateam-35-andu.jpg';
import photoAnduAction from '../assets/EquipoAura/aurateam-59-andu3.jpg';
import photoAleFront from '../assets/EquipoAura/aurateam-4-ale.jpg';
import photoAleAction from '../assets/EquipoAura/aurateam-56-ale2.jpg';
import photoLautiFront from '../assets/EquipoAura/aurateam-52-lauti.jpg';
import photoLautiAction from '../assets/EquipoAura/aurateam-58-lauti2.jpg';
export { default as teamGroupPhoto } from '../assets/EquipoAura/aurateam-equipo.jpg';

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

export const clientLogos: { name: string; url: string }[] = [
  { name: 'Enredados', url: marcaEnredados },
  { name: 'Naranja X', url: marcaNaranjaX },
  { name: 'Amnesia', url: marcaAmnesia },
  { name: 'AlToque', url: marcaAlToque },
  { name: 'CC11', url: marcaCC11 },
  { name: 'FarmaLaR', url: marcaFarmaLaR },
  { name: 'Cycles Ferreyra', url: marcaCyclesFerreyra },
  { name: 'CEFN5', url: marcaCEFN5 },
  { name: 'Lennon', url: marcaLennon },
  { name: 'Urban Fitness', url: marcaUrbanFitness },
  { name: 'Haut', url: marcaHaut },
  { name: 'Dra. Karina Santellan', url: marcaDraKarina },
];

export const portfolioVideos = {
  featured: { id: 'QEZB7AHm3Dc', title: 'Producción audiovisual' },
  shorts: [
    { id: 'Ox-eOGHe33E', title: 'Short 1' },
    { id: 'jL-90vBF0Q8', title: 'Short 2' },
    { id: 'Gz6UJzn6AuE', title: 'Short 3' },
    { id: '5N_lBNewBEM', title: 'Short 4' },
    { id: 'otulYAXQmJ4', title: 'Short 5' },
  ],
};

export const portfolioImages = [
  { src: pAlerom130,   alt: 'Producción fotográfica en exteriores, La Rioja' },
  { src: pAlerom164,   alt: 'Retrato en estudio con iluminación controlada' },
  { src: pAnionuevo12, alt: 'Cobertura de evento de Año Nuevo' },
  { src: pBmx24,       alt: 'Fotografía de competencia BMX en la vía pública' },
  { src: pLennon29,    alt: 'Retrato artístico para Lennon' },
  { src: pMateo010,    alt: 'Sesión fotográfica en exteriores' },
  { src: pTNX083a,     alt: 'Cobertura de evento TNX' },
  { src: pBmx49,       alt: 'Retrato de ciclista BMX en acción' },
  { src: pTNX107,      alt: 'Fotografía vertical de evento TNX' },
  { src: pTNX100,      alt: 'Producción audiovisual TNX' },
  { src: pMart7,       alt: 'Retrato artístico en estudio' },
  { src: pTNX106,      alt: 'Escena de cobertura TNX' },
  { src: pPollock32,   alt: 'Retrato artístico Pollock' },
  { src: pRam33,       alt: 'Sesión de retrato Ram' },
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
