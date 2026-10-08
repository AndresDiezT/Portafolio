export const personalInfo = {
  name: 'Andres Santiago Diez Tuberquia',
  shortName: 'Andres Diez',
  initials: 'AD',
  role: 'Full-stack Developer',
  email: 'andresdieztuberquia@gmail.com',
  phone: '+57 311 5267920',
  location: 'Bogotá, Colombia / Posibilidad de reubicación inmediata',
  linkedin: 'https://www.linkedin.com/in/andressantiagodiezfullstack',
  github: 'https://github.com/AndresDiezT',
  cv: '/CV-Andres_Diez-fullstack (1).pdf',
  headline:
    'Construyo plataformas web reales para operar, vender y escalar negocios.',
  summary:
    'Desarrollador full-stack con experiencia construyendo aplicaciones web end-to-end para entornos empresariales. Desarrollo funcionalidades de frontend y backend, APIs e integraciones con React y Next.js, y servicios en Python, Node.js y .NET, con foco en soluciones mantenibles y listas para producción.',
}

export const navItems = [
  { label: 'Sistemas', href: '#build' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Experiencia', href: '#experience' },
  { label: 'Contacto', href: '#contact' },
]

export const buildPillars = [
  {
    title: 'Sistemas operativos',
    description:
      'Plataformas para inventario, ventas, órdenes, finanzas, usuarios y reportes donde el producto sostiene procesos reales.',
  },
  {
    title: 'Experiencias de compra',
    description:
      'Catálogos, carritos, pagos, envíos, mensajería y flujos pensados para usuarios finales y equipos internos.',
  },
  {
    title: 'Arquitectura escalable',
    description:
      'APIs, roles, permisos, multi-tenant, bases de datos y despliegues que pueden crecer sin perder claridad.',
  },
]

export const projects = [
  {
    name: 'AgroKaja',
    label: 'Marketplace agrícola',
    url: 'https://agrokaja.altovivo.com',
    previewLabel: 'Capturas reales de la plataforma',
    intro:
      'Plataforma web que conecta productores, fincas y compradores finales en un ecosistema digital para comercio agrícola.',
    role:
      'Proyecto desarrollado de forma independiente. Me encargué del frontend, backend, flujos comerciales, roles de usuario, paneles de gestión e integración de procesos operativos.',
    problem:
      'Productores y compradores necesitaban una forma más clara de publicar productos, coordinar órdenes y gestionar operaciones sin depender de procesos dispersos.',
    solution:
      'Construí una experiencia tipo marketplace con roles diferenciados, paneles de gestión y flujo comercial completo desde catálogo hasta orden.',
    result:
      'Base operativa sólida para centralizar oferta, demanda, comunicación y administración de la plataforma.',
    technical:
      'Modelado de entidades comerciales, consumo de APIs REST, control de acceso por rol y separación entre experiencia pública y panel administrativo.',
    features: [
      'Catálogo de productos y fincas',
      'Carrito, órdenes, pagos y envíos',
      'Mensajería entre usuarios',
      'Roles granulares para productores, compradores y administradores',
      'Panel administrativo para operaciones',
    ],
    stack: ['Next.js', 'FastAPI', 'APIs REST', 'RBAC', 'Pagos', 'Panel admin'],
    metrics: ['Marketplace', 'Multi-rol', 'Operación agrícola'],
    screenshots: [
      {
        src: '/projects/agrokaja-1.png',
        alt: 'Pantalla principal de AgroKaja',
      },
      {
        src: '/projects/agrokaja-2.png',
        alt: 'Flujo o panel operativo de AgroKaja',
      },
      {
        src: '/projects/agrokaja-3.png',
        alt: 'Vista secundaria de AgroKaja',
      },
    ],
    preview: {
      statA: '3 roles',
      statB: 'Órdenes',
      rows: ['Productores', 'Fincas', 'Catálogo', 'Pagos'],
    },
  },
  {
    name: 'Alto Vivo',
    label: 'Sistema multi-negocio',
    url: 'https://altovivo.com',
    previewLabel: 'Capturas reales de la plataforma',
    intro:
      'Sistema web multi-tenant orientado a gestión operativa, comercial y administrativa para diferentes negocios.',
    role:
      'Proyecto desarrollado de forma independiente, basado en requerimientos del cliente. Diseñé y construí la arquitectura multi-negocio, módulos operativos, control de acceso, configuración por negocio y funcionalidades administrativas.',
    problem:
      'Cada negocio necesitaba administrar inventario, ventas, finanzas y reportes con configuraciones propias, sin duplicar plataformas ni perder control.',
    solution:
      'Diseñé una arquitectura multi-negocio con módulos configurables, control de acceso por roles y administración de planes o niveles de uso.',
    result:
      'Plataforma escalable para operar múltiples organizaciones desde una misma base, manteniendo separación de datos y reglas por negocio.',
    technical:
      'Arquitectura multi-tenant, permisos por rol, módulos configurables, reportes operativos y estructura preparada para planes o niveles de acceso.',
    features: [
      'Inventario, ventas y finanzas',
      'Reportes operativos',
      'Roles, permisos y configuración por negocio',
      'Gestión por planes y niveles de acceso',
      'Base multi-tenant para múltiples organizaciones',
    ],
    stack: ['React', 'FastAPI', 'MySQL', 'Multi-tenant', 'Cloud'],
    metrics: ['Multi-tenant', 'Backoffice', 'Gestión operativa'],
    screenshots: [
      {
        src: '/projects/altovivo-1.png',
        alt: 'Pantalla principal de Alto Vivo',
      },
      {
        src: '/projects/altovivo-2.png',
        alt: 'Panel operativo de Alto Vivo',
      },
      {
        src: '/projects/altovivo-3.png',
        alt: 'Vista administrativa de Alto Vivo',
      },
    ],
    preview: {
      statA: 'Multi-negocio',
      statB: 'Reportes',
      rows: ['Inventario', 'Ventas', 'Finanzas', 'Permisos'],
    },
  },
]

export const experiences = [
  {
    company: 'GPS Control',
    role: 'Desarrollador Full Stack',
    period: 'Mayo 2026',
    product: 'Sistemas empresariales',
    context: 'Presencial',
    summary:
      'Desarrollo y mantenimiento de sistemas empresariales, con foco en integraciones, automatización y nuevas funcionalidades apoyadas en inteligencia artificial.',
    highlights: [
      'Implementación de chats y análisis de datos con IA.',
      'Diseño y consumo de APIs REST para integrar servicios y sistemas internos.',
      'Desarrollo de procesos de web scraping e integración con servicios de terceros.',
      'Integración de servicios geográficos como Google Maps y Mapbox.',
      'Colaboración con Git y GitHub en equipos ágiles.',
    ],
  },
  {
    company: 'GroupCos',
    role: 'Desarrollador Full Stack',
    period: 'Octubre 2025 - Abril 2026',
    product: 'Plataforma de Gestión Empresarial',
    context: 'Remoto · Producto privado',
    summary:
      'Participé en una plataforma empresarial privada orientada a ventas, usuarios y operaciones comerciales. Por confidencialidad no incluyo enlaces ni capturas internas.',
    highlights: [
      'Desarrollo de funcionalidades frontend y backend para sistemas empresariales.',
      'Construcción y consumo de APIs REST para integrar servicios.',
      'Implementación de mejoras de experiencia de usuario en aplicaciones internas.',
      'Mantenimiento de funcionalidades y resolución de incidencias en producción.',
      'Colaboración con Git y Azure DevOps bajo metodologías ágiles.',
    ],
  },
]

export const technologyGroups = [
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'Angular', 'JavaScript', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    items: ['Python', 'FastAPI', 'Django', 'Node.js', 'Express', 'C#/.NET', 'PHP', 'Laravel'],
  },
  {
    title: 'Datos y cloud',
    items: ['PostgreSQL', 'MySQL', 'SQL Server', 'Docker', 'Azure', 'DigitalOcean', 'CI/CD'],
  },
  {
    title: 'IA e integraciones',
    items: ['Chats y análisis con IA', 'Web scraping', 'Google Maps', 'Mapbox', 'APIs de terceros', 'Desarrollo asistido por IA'],
  },
]

export const processSteps = [
  {
    step: '01',
    title: 'Entender el sistema',
    description:
      'Mapeo usuarios, reglas de negocio, datos y flujos críticos antes de escribir componentes.',
  },
  {
    step: '02',
    title: 'Diseñar la base',
    description:
      'Defino estructura, módulos, permisos, APIs y estados para que la interfaz y el backend avancen juntos.',
  },
  {
    step: '03',
    title: 'Construir producto',
    description:
      'Desarrollo pantallas, servicios, integraciones y paneles con iteraciones visibles y feedback temprano.',
  },
  {
    step: '04',
    title: 'Estabilizar y desplegar',
    description:
      'Pruebo flujos clave, optimizo detalles, preparo variables y dejo el producto listo para producción.',
  },
]
