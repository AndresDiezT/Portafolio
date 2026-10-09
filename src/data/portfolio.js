const shared = {
  name: 'Andres Santiago Diez Tuberquia',
  shortName: 'Andres Diez',
  initials: 'AD',
  email: 'andresdieztuberquia@gmail.com',
  phone: '+57 311 5267920',
  linkedin: 'https://www.linkedin.com/in/andressantiagodiezfullstack',
  github: 'https://github.com/AndresDiezT',
  cv: '/CV-Andres_Diez-fullstack (1).pdf',
}

const screenshots = {
  altovivo: ['/projects/altovivo-1.png', '/projects/altovivo-2.png', '/projects/altovivo-3.png'],
  agrokaja: ['/projects/agrokaja-1.png', '/projects/agrokaja-2.png', '/projects/agrokaja-3.png'],
}

const es = {
  document: {
    title: 'Andres Diez | Full Stack Developer',
    description:
      'Full Stack Developer que convierte procesos de negocio en sistemas confiables: arquitectura documentada, APIs, interfaces e IA con reglas verificables.',
  },
  personalInfo: {
    ...shared,
    role: 'Full Stack Developer',
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
    badge: 'Disponible · Full Stack · Backend · IA aplicada',
    title: 'Convierto procesos de negocio complejos en',
    titleAccent: 'sistemas confiables.',
    summary:
      'Full Stack Developer con Python, FastAPI, .NET, React y Angular. Antes de escribir código entiendo el proceso, documento reglas y riesgos, decido la arquitectura con ADRs y defino contratos. Después construyo, pruebo y audito.',
    primary: 'Ver casos de estudio',
    cv: 'Descargar CV',
    evidenceTitle: 'Evidencia en mis dos proyectos principales',
    evidence: [
      { value: '62', label: 'Decisiones de arquitectura (ADRs)' },
      { value: '322', label: 'Historias de usuario con criterios de aceptación' },
      { value: '39', label: 'Épicas de producto' },
      { value: '153', label: 'Archivos de pruebas automatizadas' },
    ],
    docCard: {
      file: 'docs/ADR/0003-ia-con-tool-calling.md',
      status: 'Aceptada',
      title: 'La IA nunca genera precios desde memoria',
      context:
        'Un modelo puede "alucinar" un precio plausible pero falso. Inaceptable cuando hay dinero real de por medio.',
      decision:
        'Tool calling: el modelo decide la acción, pero cada precio, cupo o zona sale de una consulta a la base de datos del restaurante.',
      tradeoff:
        'Más complejidad que un prompt simple, a cambio de respuestas verificables y pruebas de regresión sobre conversaciones fijas.',
      labels: { context: 'Contexto', decision: 'Decisión', tradeoff: 'Trade-off' },
    },
  },
  sections: {
    process: {
      eyebrow: 'Cómo trabajo',
      title: 'La IA acelera el código. El criterio lo pongo yo.',
      description:
        'Hoy cualquiera puede generar pantallas. Lo difícil es saber qué construir, qué puede salir mal y cómo dejarlo mantenible. Cada paso de mi proceso deja un entregable revisable.',
    },
    cases: {
      eyebrow: 'Casos de estudio',
      title: 'Dos sistemas diseñados de punta a punta.',
      description:
        'No son demos. Son productos con reglas de negocio reales: dinero, inventario, permisos y concurrencia. Aquí está lo que decidí y por qué.',
    },
    experience: {
      eyebrow: 'Experiencia',
      title: 'Software en producción para empresas.',
    },
    stack: {
      eyebrow: 'Stack',
      title: 'Herramientas que uso con criterio.',
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
      artifact: 'Épicas · Historias · QA',
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
      description: 'Código por capas, pruebas automatizadas y auditorías que priorizan la deuda técnica.',
      artifact: 'Código · Tests · Auditoría',
    },
  ],
  caseLabels: {
    problem: 'El problema',
    role: 'Mi rol',
    decisions: 'Decisiones clave',
    why: 'Por qué',
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
      id: 'restaurante',
      name: 'Plataforma para operar restaurantes',
      tagline: 'Asistente de WhatsApp con IA + operación completa del restaurante',
      status: 'En construcción · Repositorio privado',
      problem:
        'Las apps de domicilio cobran comisión sobre la venta total, WhatsApp se responde a mano y tarde, y el dueño no ve dónde pierde dinero: caja que no cuadra, comprobantes falsos e insumos que suben de precio.',
      role:
        'Producto, documentación, arquitectura y desarrollo de punta a punta: visión y pricing, 17 épicas, ADRs, modelo de datos, integración con WhatsApp, backend en Python y frontend en Next.js.',
      stats: [
        { value: '29', label: 'ADRs' },
        { value: '126', label: 'Historias' },
        { value: '17', label: 'Épicas' },
        { value: '71', label: 'Archivos de test' },
      ],
      decisions: [
        {
          title: 'IA con tool calling, sin precios en el prompt',
          why: 'El modelo elige la acción; los datos verificables salen de la base de datos del tenant. Un set fijo de conversaciones se ejecuta antes de cualquier cambio de prompt.',
        },
        {
          title: 'Pagos con adaptador multipasarela',
          why: 'Una sola fuente de verdad para dinero y reembolsos, independiente del proveedor, con OCR y verificación de comprobantes contra fraude.',
        },
        {
          title: 'Abstracción del proveedor de IA',
          why: 'Las tools no quedan acopladas a un modelo. Esto mitiga el riesgo de costos, caídas o cambios del proveedor.',
        },
        {
          title: 'Efectos de transiciones con outbox',
          why: 'Los cambios de estado de un pedido disparan notificaciones de forma confiable, sin perder eventos si falla un servicio externo.',
        },
      ],
      stack: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'arq', 'Next.js', 'WhatsApp Cloud API', 'Docker'],
    },
    {
      id: 'altovivo',
      name: 'Alto Vivo',
      tagline: 'Sistema de gestión multi-negocio: inventario, ventas, finanzas y producción',
      status: 'En producción',
      url: 'https://altovivo.com',
      problem:
        'Cada negocio necesitaba controlar inventario, ventas, cartera, finanzas y producción con sus propias reglas y permisos, sin duplicar plataformas ni mezclar datos entre organizaciones.',
      role:
        'Proyecto independiente a partir de requerimientos del cliente. Diseñé la arquitectura multi-tenant, documenté 22 épicas y 20 contratos de API, construí los módulos y audité el sistema en 7 rondas.',
      stats: [
        { value: '33', label: 'ADRs' },
        { value: '196', label: 'Historias' },
        { value: '20', label: 'Contratos API' },
        { value: '82', label: 'Archivos de test' },
      ],
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
        'Soluciones empresariales de gestión GPS: APIs, servicios geográficos y funcionalidades con IA para operaciones.',
      highlights: [
        'Chats y análisis de datos con IA aplicados a la operación.',
        'Diseño y consumo de APIs REST entre servicios y sistemas internos.',
        'Integración de Google Maps y Mapbox.',
        'Procesos de web scraping e integración con servicios de terceros.',
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
    { title: 'IA e integraciones', items: ['Tool calling', 'WhatsApp Cloud API', 'Pasarelas de pago', 'Google Maps', 'Mapbox'] },
  ],
  contact: {
    eyebrow: 'Contacto',
    title: '¿Necesitas a alguien que entienda el negocio antes de programar?',
    description:
      'Busco oportunidades remotas o híbridas como Full Stack, Backend o desarrollador de software con IA. Te respondo en menos de 24 horas.',
    phone: 'Teléfono',
    location: 'Ubicación',
  },
  footer: 'Diseñado y desarrollado por mí.',
}

const en = {
  document: {
    title: 'Andres Diez | Full Stack Developer',
    description:
      'Full Stack Developer who turns business processes into reliable systems: documented architecture, APIs, interfaces and AI with verifiable rules.',
  },
  personalInfo: {
    ...shared,
    role: 'Full Stack Developer',
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
    badge: 'Available · Full Stack · Backend · Applied AI',
    title: 'I turn complex business processes into',
    titleAccent: 'reliable systems.',
    summary:
      'Full Stack Developer working with Python, FastAPI, .NET, React and Angular. Before writing code I map the process, document rules and risks, record architecture decisions as ADRs and define contracts. Then I build, test and audit.',
    primary: 'View case studies',
    cv: 'Download CV',
    evidenceTitle: 'Evidence from my two main projects',
    evidence: [
      { value: '62', label: 'Architecture decisions (ADRs)' },
      { value: '322', label: 'User stories with acceptance criteria' },
      { value: '39', label: 'Product epics' },
      { value: '153', label: 'Automated test files' },
    ],
    docCard: {
      file: 'docs/ADR/0003-ai-tool-calling.md',
      status: 'Accepted',
      title: 'The AI never generates prices from memory',
      context:
        'A model can "hallucinate" a plausible but wrong price. Unacceptable when real money is involved.',
      decision:
        'Tool calling: the model picks the action, but every price, slot or delivery zone comes from a query against the restaurant’s database.',
      tradeoff:
        'More complexity than a plain prompt, in exchange for verifiable answers and regression tests over fixed conversations.',
      labels: { context: 'Context', decision: 'Decision', tradeoff: 'Trade-off' },
    },
  },
  sections: {
    process: {
      eyebrow: 'How I work',
      title: 'AI speeds up the code. The judgment is mine.',
      description:
        'Anyone can generate screens today. The hard part is knowing what to build, what can go wrong and how to keep it maintainable. Every step of my process leaves a reviewable deliverable.',
    },
    cases: {
      eyebrow: 'Case studies',
      title: 'Two systems designed end to end.',
      description:
        'Not demos. Products with real business rules: money, inventory, permissions and concurrency. Here is what I decided and why.',
    },
    experience: {
      eyebrow: 'Experience',
      title: 'Production software for companies.',
    },
    stack: {
      eyebrow: 'Stack',
      title: 'Tools I use with intent.',
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
      artifact: 'Epics · Stories · QA',
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
      description: 'Layered code, automated tests and audits that prioritize technical debt.',
      artifact: 'Code · Tests · Audit',
    },
  ],
  caseLabels: {
    problem: 'The problem',
    role: 'My role',
    decisions: 'Key decisions',
    why: 'Why',
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
      id: 'restaurante',
      name: 'Restaurant operations platform',
      tagline: 'AI WhatsApp assistant + full restaurant operations',
      status: 'In development · Private repository',
      problem:
        'Delivery apps charge commission on the full sale, WhatsApp gets answered slowly by hand, and owners can’t see where money leaks: cash that doesn’t reconcile, fake payment receipts and rising ingredient costs.',
      role:
        'Product, documentation, architecture and development end to end: vision and pricing, 17 epics, ADRs, data model, WhatsApp integration, Python backend and Next.js frontend.',
      stats: [
        { value: '29', label: 'ADRs' },
        { value: '126', label: 'Stories' },
        { value: '17', label: 'Epics' },
        { value: '71', label: 'Test files' },
      ],
      decisions: [
        {
          title: 'AI with tool calling, no prices in the prompt',
          why: 'The model chooses the action; verifiable data comes from the tenant’s database. A fixed set of conversations runs before any prompt change.',
        },
        {
          title: 'Multi-gateway payment adapter',
          why: 'A single source of truth for money and refunds, independent of the provider, with OCR and receipt verification against fraud.',
        },
        {
          title: 'AI provider abstraction',
          why: 'Tools aren’t coupled to one model, mitigating provider cost, outage and change risks.',
        },
        {
          title: 'Transition effects through an outbox',
          why: 'Order state changes trigger notifications reliably, without losing events when an external service fails.',
        },
      ],
      stack: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'arq', 'Next.js', 'WhatsApp Cloud API', 'Docker'],
    },
    {
      id: 'altovivo',
      name: 'Alto Vivo',
      tagline: 'Multi-business management system: inventory, sales, finance and production',
      status: 'In production',
      url: 'https://altovivo.com',
      problem:
        'Each business needed to manage inventory, sales, receivables, finance and production with its own rules and permissions, without duplicating platforms or mixing data across organizations.',
      role:
        'Independent project built from client requirements. I designed the multi-tenant architecture, documented 22 epics and 20 API contracts, built the modules and audited the system over 7 rounds.',
      stats: [
        { value: '33', label: 'ADRs' },
        { value: '196', label: 'Stories' },
        { value: '20', label: 'API contracts' },
        { value: '82', label: 'Test files' },
      ],
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
        'Enterprise GPS management solutions: APIs, geospatial services and AI features for operations.',
      highlights: [
        'AI-powered chat and data analysis applied to operations.',
        'Design and integration of REST APIs across internal services.',
        'Google Maps and Mapbox integration.',
        'Web scraping pipelines and third-party service integrations.',
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
    { title: 'AI & integrations', items: ['Tool calling', 'WhatsApp Cloud API', 'Payment gateways', 'Google Maps', 'Mapbox'] },
  ],
  contact: {
    eyebrow: 'Contact',
    title: 'Need someone who understands the business before writing code?',
    description:
      'I’m looking for remote or hybrid roles in Full Stack, Backend or AI-powered software development. I reply within 24 hours.',
    phone: 'Phone',
    location: 'Location',
  },
  footer: 'Designed and built by me.',
}

export function getPortfolio(locale) {
  return locale === 'en' ? en : es
}
