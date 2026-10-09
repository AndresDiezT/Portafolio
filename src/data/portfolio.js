const shared = {
  name: 'Andres Santiago Diez Tuberquia',
  shortName: 'Andres Diez',
  initials: 'AD',
  email: 'andresdieztuberquia@gmail.com',
  phone: '+57 311 5267920',
  linkedin: 'https://www.linkedin.com/in/andressantiagodiezfullstack',
  github: 'https://github.com/AndresDiezT',
  cvs: { es: '/CV-Andres_Diez_ES.pdf', en: '/CV-Andres_Diez_EN.pdf' },
}

const screenshots = {
  altovivo: ['/projects/altovivo-1.png', '/projects/altovivo-2.png', '/projects/altovivo-3.png'],
  agrokaja: ['/projects/agrokaja-1.png', '/projects/agrokaja-2.png', '/projects/agrokaja-3.png'],
}

const es = {
  document: {
    title: 'Andres Diez | Full Stack Software Engineer',
    description:
      'Full Stack Software Engineer que convierte procesos de negocio en sistemas confiables: arquitectura documentada, APIs, interfaces e integraciones.',
  },
  personalInfo: {
    ...shared,
    role: 'Full Stack Software Engineer',
    location: 'Bogotá, Colombia · Remoto, híbrido o reubicación',
  },
  header: {
    navigation: 'Navegación principal',
    language: 'Idioma',
    contact: 'Contactar',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
  },
  navItems: [
    { label: 'Casos', href: '#cases' },
    { label: 'Cómo trabajo', href: '#process' },
    { label: 'Experiencia', href: '#experience' },
    { label: 'Contacto', href: '#contact' },
  ],
  hero: {
    badge: 'Disponible · Full Stack · Backend',
    title: 'Convierto procesos de negocio complejos en',
    titleAccent: 'sistemas confiables.',
    summary:
      'Full Stack Software Engineer con Python, FastAPI, .NET, React y Angular. Antes de escribir código entiendo el proceso, documento reglas y riesgos, decido la arquitectura con ADRs y defino criterios de aceptación y contratos. Después construyo con pruebas automatizadas y verifico antes de cada entrega.',
    primary: 'Ver casos de estudio',
    cv: 'Descargar CV',
    cvOptions: { es: 'Español', en: 'Inglés' },
    docCard: {
      file: 'altovivo/docs/ADR/0018-locking-concurrencia-stock.md',
      status: 'Aceptada',
      title: 'Locking pesimista para el inventario',
      context:
        'Dos cajeros vendiendo el mismo producto al mismo tiempo podían perder una actualización del stock.',
      decision:
        'Un INSERT … ON CONFLICT atómico centraliza el bloqueo de fila para los cinco módulos que mueven inventario, con un orden de adquisición determinista.',
      tradeoff:
        'Aparece riesgo de deadlock, que se controla con el orden fijo. Se descartó el locking optimista porque obligaba a reintentar en cada punto de llamada.',
      labels: { context: 'Contexto', decision: 'Decisión', tradeoff: 'Trade-off' },
    },
  },
  sections: {
    process: {
      eyebrow: 'Cómo trabajo',
      title: 'Entiendo el problema antes de escribir código.',
      description:
        'Lo difícil no es programar una pantalla, sino saber qué construir, qué puede salir mal y cómo dejarlo mantenible. Cada paso de mi proceso deja un entregable revisable.',
    },
    cases: {
      eyebrow: 'Casos de estudio',
      title: 'Dos sistemas diseñados de punta a punta.',
      description:
        'Productos con reglas de negocio reales: dinero, inventario, permisos y concurrencia. Aquí está lo que decidí y por qué.',
    },
    experience: {
      eyebrow: 'Experiencia',
      title: 'Software en producción para empresas.',
    },
    stack: {
      eyebrow: 'Stack',
      title: 'Herramientas que uso a diario.',
    },
  },
  processSteps: [
    {
      title: 'Entender el negocio',
      description: 'Problema, cliente objetivo, alcance y reglas no negociables.',
      artifact: 'Visión · Alcance · Riesgos',
    },
    {
      title: 'Modelar el producto',
      description: 'Épicas e historias de usuario con criterios de aceptación y tareas por capa.',
      artifact: 'Épicas · Historias · Criterios de aceptación',
    },
    {
      title: 'Decidir la arquitectura',
      description: 'Cada decisión importante registra contexto, alternativas y consecuencias.',
      artifact: 'ADRs',
    },
    {
      title: 'Definir contratos',
      description: 'Endpoints, errores, permisos y eventos acordados antes de implementar.',
      artifact: 'Contratos de API',
    },
    {
      title: 'Construir y verificar',
      description: 'Pruebas automatizadas de unidad e integración, regresión antes de cada cambio y auditorías que priorizan riesgos por severidad.',
      artifact: 'Tests · Regresión · Auditoría',
    },
  ],
  caseLabels: {
    problem: 'El problema',
    role: 'Mi rol',
    decisions: 'Decisiones clave',
    stack: 'Stack',
    visit: 'Ver plataforma',
    docs: 'Solicitar documentación',
    docsNote: 'Repositorio privado: comparto la documentación durante procesos de selección.',
    docsSubject: 'Solicitud de documentación técnica',
    gallery: 'Capturas reales',
    otherEyebrow: 'Otro proyecto',
  },
  cases: [
    {
      id: 'altovivo',
      name: 'Alto Vivo',
      tagline: 'Sistema de gestión multi-negocio: inventario, ventas, finanzas y producción',
      status: 'En producción',
      url: 'https://altovivo.com',
      problem:
        'Cada negocio necesitaba controlar inventario, ventas, cartera, finanzas y producción con sus propias reglas y permisos, sin duplicar plataformas ni mezclar datos entre organizaciones.',
      role:
        'Proyecto independiente a partir de requerimientos del cliente. Diseñé la arquitectura multi-tenant, documenté épicas, historias y contratos de API, construí los módulos con pruebas automatizadas de unidad e integración y audité el sistema para priorizar riesgos por severidad.',
      decisions: [
        {
          title: 'Locking pesimista sobre el stock',
          why: 'Dos cajeros vendiendo el mismo producto podían perder una actualización. Un INSERT … ON CONFLICT atómico y un orden de bloqueo determinista eliminan la carrera sin provocar deadlocks.',
        },
        {
          title: 'Idempotencia en mutaciones críticas',
          why: 'Las ventas y los cobros reintentados no se duplican. Una misma llave con otro cuerpo devuelve conflicto en lugar de un resultado ambiguo.',
        },
        {
          title: 'Cobros en estado incierto',
          why: 'La auditoría detectó que un pago "pending" o un timeout podía cobrar dos veces. Lo resolví modelando el estado incierto de forma explícita.',
        },
        {
          title: 'Aislamiento por negocio y permisos centralizados',
          why: 'Cada consulta se limita a su business_id y una sola política de permisos con tope de concesión evita escalar privilegios.',
        },
      ],
      stack: ['Python', 'FastAPI', 'SQLAlchemy', 'Alembic', 'PostgreSQL', 'Redis', 'React', 'Docker', 'Wompi'],
      screenshots: screenshots.altovivo,
    },
    {
      id: 'restaurante',
      name: 'Plataforma para operar restaurantes',
      tagline: 'Pedidos multicanal, cocina, caja y pagos en una sola plataforma',
      status: 'En construcción · Repositorio privado',
      problem:
        'Las apps de domicilio cobran comisión sobre la venta total, WhatsApp se responde a mano y tarde, y el dueño no ve dónde pierde dinero: caja que no cuadra, comprobantes falsos e insumos que suben de precio.',
      role:
        'Producto, documentación, arquitectura y desarrollo de punta a punta: visión, alcance y pricing, épicas, ADRs, modelo de datos, integración con WhatsApp, backend en Python y frontend en Next.js.',
      decisions: [
        {
          title: 'Multi-tenant sobre PostgreSQL',
          why: 'Cada restaurante opera aislado sobre la misma base, con un solo login para pedidos, caja y turnos.',
        },
        {
          title: 'Pagos con adaptador multipasarela',
          why: 'Una sola fuente de verdad para dinero y reembolsos, independiente del proveedor, con verificación de comprobantes contra fraude.',
        },
        {
          title: 'Efectos de transiciones con outbox',
          why: 'Los cambios de estado de un pedido disparan notificaciones de forma confiable, sin perder eventos si falla un servicio externo.',
        },
        {
          title: 'Asistente de WhatsApp con datos verificables',
          why: 'El asistente atiende pedidos y reservas, pero precios, disponibilidad y zonas siempre salen de la base de datos, nunca del texto generado. Un set fijo de conversaciones de prueba se ejecuta antes de cada cambio.',
        },
      ],
      stack: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'arq', 'Next.js', 'WhatsApp Cloud API', 'Docker'],
    },
  ],
  otherProject: {
    name: 'AgroKaja',
    tagline: 'Marketplace agrícola',
    description:
      'Conecta productores, fincas y compradores con catálogo, carrito, órdenes, pagos, envíos, mensajería y roles diferenciados para productores, compradores y administradores.',
    url: 'https://agrokaja.altovivo.com',
    stack: ['Next.js', 'FastAPI', 'RBAC', 'Pagos'],
    screenshots: screenshots.agrokaja,
  },
  experiences: [
    {
      company: 'GPS Control',
      role: 'Desarrollador Full Stack',
      period: 'May 2026 – Actualidad',
      context: 'Presencial',
      summary:
        'Soluciones empresariales de gestión GPS: APIs, servicios geográficos e integraciones con sistemas internos y de terceros.',
      highlights: [
        'Diseño y consumo de APIs REST entre servicios y sistemas internos.',
        'Integración de Google Maps y Mapbox.',
        'Procesos de web scraping e integración con servicios de terceros.',
        'Funcionalidades de chat y análisis de datos para la operación.',
      ],
    },
    {
      company: 'GroupCos',
      role: 'Desarrollador Full Stack',
      period: 'Oct 2025 – Abr 2026',
      context: 'Remoto · Producto privado',
      summary:
        'Plataforma empresarial privada de ventas, usuarios y operaciones comerciales.',
      highlights: [
        'Funcionalidades frontend y backend para sistemas empresariales.',
        'Construcción y consumo de APIs REST.',
        'Mantenimiento y resolución de incidencias en producción.',
        'Trabajo ágil con Git y Azure DevOps.',
      ],
    },
  ],
  technologyGroups: [
    { title: 'Backend', items: ['Python', 'FastAPI', 'Django', 'Node.js', 'C# / .NET', 'SQLAlchemy'] },
    { title: 'Frontend', items: ['React', 'Next.js', 'Angular', 'TypeScript', 'Tailwind CSS'] },
    { title: 'Datos y cloud', items: ['PostgreSQL', 'MySQL', 'SQL Server', 'Redis', 'Docker', 'Azure', 'CI/CD'] },
    { title: 'Integraciones', items: ['APIs REST', 'WhatsApp Cloud API', 'Pasarelas de pago', 'Google Maps', 'Mapbox'] },
    { title: 'Testing y calidad', items: ['pytest', 'Pruebas de unidad e integración', 'Pruebas de regresión', 'Criterios de aceptación', 'Planes de prueba'] },
  ],
  contact: {
    eyebrow: 'Contacto',
    title: '¿Necesitas a alguien que entienda el negocio antes de programar?',
    description:
      'Busco oportunidades remotas o híbridas como Full Stack o Backend Developer. Te respondo en menos de 24 horas.',
    phone: 'Teléfono',
    location: 'Ubicación',
  },
  footer: 'Diseñado y desarrollado por mí.',
}

const en = {
  document: {
    title: 'Andres Diez | Full Stack Software Engineer',
    description:
      'Full Stack Software Engineer who turns business processes into reliable systems: documented architecture, APIs, interfaces and integrations.',
  },
  personalInfo: {
    ...shared,
    role: 'Full Stack Software Engineer',
    location: 'Bogotá, Colombia · Remote, hybrid or relocation',
  },
  header: {
    navigation: 'Main navigation',
    language: 'Language',
    contact: 'Contact',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  navItems: [
    { label: 'Cases', href: '#cases' },
    { label: 'How I work', href: '#process' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ],
  hero: {
    badge: 'Available · Full Stack · Backend',
    title: 'I turn complex business processes into',
    titleAccent: 'reliable systems.',
    summary:
      'Full Stack Software Engineer working with Python, FastAPI, .NET, React and Angular. Before writing code I map the process, document rules and risks, record architecture decisions as ADRs and define acceptance criteria and contracts. Then I build with automated tests and verify before every release.',
    primary: 'View case studies',
    cv: 'Download CV',
    cvOptions: { es: 'Spanish', en: 'English' },
    docCard: {
      file: 'altovivo/docs/ADR/0018-stock-concurrency-locking.md',
      status: 'Accepted',
      title: 'Pessimistic locking for inventory',
      context:
        'Two cashiers selling the same product at the same time could lose a stock update.',
      decision:
        'An atomic INSERT … ON CONFLICT centralizes row locking for the five modules that move inventory, with a deterministic acquisition order.',
      tradeoff:
        'It introduces deadlock risk, handled by the fixed order. Optimistic locking was rejected because every call site would need retry logic.',
      labels: { context: 'Context', decision: 'Decision', tradeoff: 'Trade-off' },
    },
  },
  sections: {
    process: {
      eyebrow: 'How I work',
      title: 'I understand the problem before writing code.',
      description:
        'The hard part isn’t coding a screen, it’s knowing what to build, what can go wrong and how to keep it maintainable. Every step of my process leaves a reviewable deliverable.',
    },
    cases: {
      eyebrow: 'Case studies',
      title: 'Two systems designed end to end.',
      description:
        'Products with real business rules: money, inventory, permissions and concurrency. Here is what I decided and why.',
    },
    experience: {
      eyebrow: 'Experience',
      title: 'Production software for companies.',
    },
    stack: {
      eyebrow: 'Stack',
      title: 'Tools I use every day.',
    },
  },
  processSteps: [
    {
      title: 'Understand the business',
      description: 'Problem, target customer, scope and non-negotiable rules.',
      artifact: 'Vision · Scope · Risks',
    },
    {
      title: 'Model the product',
      description: 'Epics and user stories with acceptance criteria and tasks per layer.',
      artifact: 'Epics · Stories · Acceptance criteria',
    },
    {
      title: 'Decide the architecture',
      description: 'Every significant decision records context, alternatives and consequences.',
      artifact: 'ADRs',
    },
    {
      title: 'Define contracts',
      description: 'Endpoints, errors, permissions and events agreed before implementation.',
      artifact: 'API contracts',
    },
    {
      title: 'Build and verify',
      description: 'Automated unit and integration tests, regression checks before every change and audits that rank risks by severity.',
      artifact: 'Tests · Regression · Audit',
    },
  ],
  caseLabels: {
    problem: 'The problem',
    role: 'My role',
    decisions: 'Key decisions',
    stack: 'Stack',
    visit: 'Visit platform',
    docs: 'Request documentation',
    docsNote: 'Private repository: I share the documentation during hiring processes.',
    docsSubject: 'Technical documentation request',
    gallery: 'Real screenshots',
    otherEyebrow: 'Another project',
  },
  cases: [
    {
      id: 'altovivo',
      name: 'Alto Vivo',
      tagline: 'Multi-business management system: inventory, sales, finance and production',
      status: 'In production',
      url: 'https://altovivo.com',
      problem:
        'Each business needed to manage inventory, sales, receivables, finance and production with its own rules and permissions, without duplicating platforms or mixing data across organizations.',
      role:
        'Independent project built from client requirements. I designed the multi-tenant architecture, documented epics, user stories and API contracts, built the modules with automated unit and integration tests and audited the system to rank risks by severity.',
      decisions: [
        {
          title: 'Pessimistic locking on stock',
          why: 'Two cashiers selling the same product could lose an update. An atomic INSERT … ON CONFLICT plus deterministic lock ordering removes the race without causing deadlocks.',
        },
        {
          title: 'Idempotency on critical mutations',
          why: 'Retried sales and charges are never duplicated. The same key with a different body returns a conflict instead of an ambiguous result.',
        },
        {
          title: 'Charges in an uncertain state',
          why: 'The audit found that a "pending" payment or a timeout could charge twice. I fixed it by modeling the uncertain state explicitly.',
        },
        {
          title: 'Tenant isolation and centralized permissions',
          why: 'Every query is scoped to its business_id, and one permission policy with a grant ceiling prevents privilege escalation.',
        },
      ],
      stack: ['Python', 'FastAPI', 'SQLAlchemy', 'Alembic', 'PostgreSQL', 'Redis', 'React', 'Docker', 'Wompi'],
      screenshots: screenshots.altovivo,
    },
    {
      id: 'restaurante',
      name: 'Restaurant operations platform',
      tagline: 'Multichannel orders, kitchen, cash register and payments in one platform',
      status: 'In development · Private repository',
      problem:
        'Delivery apps charge commission on the full sale, WhatsApp gets answered slowly by hand, and owners can’t see where money leaks: cash that doesn’t reconcile, fake payment receipts and rising ingredient costs.',
      role:
        'Product, documentation, architecture and development end to end: vision, scope and pricing, epics, ADRs, data model, WhatsApp integration, Python backend and Next.js frontend.',
      decisions: [
        {
          title: 'Multi-tenant on PostgreSQL',
          why: 'Each restaurant runs isolated on the same database, with a single login for orders, cash register and shifts.',
        },
        {
          title: 'Multi-gateway payment adapter',
          why: 'A single source of truth for money and refunds, independent of the provider, with receipt verification against fraud.',
        },
        {
          title: 'Transition effects through an outbox',
          why: 'Order state changes trigger notifications reliably, without losing events when an external service fails.',
        },
        {
          title: 'WhatsApp assistant with verifiable data',
          why: 'The assistant handles orders and bookings, but prices, availability and zones always come from the database, never from generated text. A fixed set of test conversations runs before every change.',
        },
      ],
      stack: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'arq', 'Next.js', 'WhatsApp Cloud API', 'Docker'],
    },
  ],
  otherProject: {
    name: 'AgroKaja',
    tagline: 'Agricultural marketplace',
    description:
      'Connects producers, farms and buyers with catalog, cart, orders, payments, shipping, messaging and distinct roles for producers, buyers and admins.',
    url: 'https://agrokaja.altovivo.com',
    stack: ['Next.js', 'FastAPI', 'RBAC', 'Payments'],
    screenshots: screenshots.agrokaja,
  },
  experiences: [
    {
      company: 'GPS Control',
      role: 'Full Stack Developer',
      period: 'May 2026 – Present',
      context: 'On-site',
      summary:
        'Enterprise GPS management solutions: APIs, geospatial services and integrations with internal and third-party systems.',
      highlights: [
        'Design and integration of REST APIs across internal services.',
        'Google Maps and Mapbox integration.',
        'Web scraping pipelines and third-party service integrations.',
        'Chat and data analysis features for operations.',
      ],
    },
    {
      company: 'GroupCos',
      role: 'Full Stack Developer',
      period: 'Oct 2025 – Apr 2026',
      context: 'Remote · Private product',
      summary: 'Private enterprise platform for sales, users and commercial operations.',
      highlights: [
        'Frontend and backend features for enterprise systems.',
        'Building and consuming REST APIs.',
        'Maintenance and incident resolution in production.',
        'Agile delivery with Git and Azure DevOps.',
      ],
    },
  ],
  technologyGroups: [
    { title: 'Backend', items: ['Python', 'FastAPI', 'Django', 'Node.js', 'C# / .NET', 'SQLAlchemy'] },
    { title: 'Frontend', items: ['React', 'Next.js', 'Angular', 'TypeScript', 'Tailwind CSS'] },
    { title: 'Data & cloud', items: ['PostgreSQL', 'MySQL', 'SQL Server', 'Redis', 'Docker', 'Azure', 'CI/CD'] },
    { title: 'Integrations', items: ['REST APIs', 'WhatsApp Cloud API', 'Payment gateways', 'Google Maps', 'Mapbox'] },
    { title: 'Testing & quality', items: ['pytest', 'Unit and integration tests', 'Regression testing', 'Acceptance criteria', 'Test plans'] },
  ],
  contact: {
    eyebrow: 'Contact',
    title: 'Need someone who understands the business before writing code?',
    description:
      'I’m looking for remote or hybrid roles as a Full Stack or Backend Developer. I reply within 24 hours.',
    phone: 'Phone',
    location: 'Location',
  },
  footer: 'Designed and built by me.',
}

export function getPortfolio(locale) {
  return locale === 'en' ? en : es
}
