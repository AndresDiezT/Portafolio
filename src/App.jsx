import {
  ArrowRight,
  ArrowUpRight,
  Boxes,
  Building2,
  Check,
  ChevronRight,
  Download,
  Github,
  Layers3,
  Linkedin,
  Menu,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react'
import { useState } from 'react'
import Contact from './components/Contact'
import {
  buildPillars,
  experience,
  navItems,
  personalInfo,
  processSteps,
  projects,
  technologyGroups,
} from './data/portfolio'

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#home" className="group flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white text-sm font-bold text-slate-950 transition group-hover:scale-105">
            {personalInfo.initials}
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold text-white">
              {personalInfo.shortName}
            </span>
            <span className="block text-xs text-slate-400">{personalInfo.role}</span>
          </span>
        </a>

        <div className="hidden items-center rounded-full border border-white/10 bg-white/[0.03] p-1 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </div>

        <a href="#contact" className="hidden md:inline-flex primary-button">
          Hablemos
          <ArrowRight size={17} />
        </a>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-white md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Abrir navegacion"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-white/10 bg-slate-950 px-5 py-4 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-3 py-3 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  )
}

function ProductMockup({ project }) {
  const isAgro = project.name === 'AgroKaja'
  const accent = isAgro ? 'bg-emerald-400' : 'bg-cyan-400'
  const icon = isAgro ? <Boxes size={18} /> : <Building2 size={18} />
  const [mainScreenshot, ...secondaryScreenshots] = project.screenshots || []

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl shadow-black/30">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.18),transparent_38%)] opacity-80" />
      <div className="relative flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </div>
        <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400">
          {project.previewLabel}
        </span>
      </div>

      <div className="relative grid gap-4 p-4 sm:p-5">
        {mainScreenshot ? (
          <>
            <div className="overflow-hidden rounded-xl border border-white/10 bg-slate-950/70">
              <img
                src={mainScreenshot.src}
                alt={mainScreenshot.alt}
                className="aspect-[16/10] w-full object-fit object-top transition duration-700 group-hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {secondaryScreenshots.map((screenshot) => (
                <div
                  key={screenshot.src}
                  className="overflow-hidden rounded-xl border border-white/10 bg-slate-950/70"
                >
                  <img
                    src={screenshot.src}
                    alt={screenshot.alt}
                    className="aspect-[16/9] w-full object-cover object-top opacity-85 transition duration-500 group-hover:opacity-100"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] p-4">
              <div className="flex items-center gap-3">
                <span className={`grid h-10 w-10 place-items-center rounded-xl ${accent} text-slate-950`}>
                  {icon}
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{project.name}</p>
                  <p className="text-xs text-slate-400">{project.label}</p>
                </div>
              </div>
              <ChevronRight className="text-slate-500 transition group-hover:translate-x-1 group-hover:text-white" size={18} />
            </div>

            <div className="grid grid-cols-[0.75fr_1.25fr] gap-4">
              <div className="space-y-3">
                {project.metrics.map((metric, index) => (
                  <div key={metric} className="rounded-xl border border-white/10 bg-slate-950/60 p-3">
                    <div className={`mb-3 h-1.5 w-10 rounded-full ${accent}`} />
                    <p className="text-xs font-medium text-slate-300">{metric}</p>
                    <p className="mt-1 text-[11px] text-slate-500">
                      {index === 0 ? project.preview.statA : index === 1 ? project.preview.statB : 'Core flow'}
                    </p>
                  </div>
                ))}
              </div>
              <div className="rounded-xl border border-white/10 bg-slate-950/60 p-4">
                <div className="mb-4 flex items-center justify-between">
                  <div className="h-2 w-24 rounded-full bg-white/20" />
                  <div className="h-2 w-10 rounded-full bg-white/10" />
                </div>
                <div className="space-y-3">
                  {project.preview.rows.map((row, index) => (
                    <div key={row} className="flex items-center gap-3">
                      <span className="grid h-8 w-8 place-items-center rounded-lg bg-white/10 text-[11px] font-semibold text-slate-400">
                        {index + 1}
                      </span>
                      <span className="min-w-0 flex-1 text-xs font-medium text-slate-300">
                        {row}
                      </span>
                      <span className="h-2 w-12 rounded-full bg-white/15" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

function SectionIntro({ eyebrow, title, description }) {
  return (
    <div className="mb-10 max-w-3xl sm:mb-14">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}

function Hero() {
  return (
    <section id="home" className="hero-stage relative overflow-hidden px-5 pt-28 sm:pt-32">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-scanline" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />

      <div className="relative mx-auto flex min-h-[calc(100vh-72px)] max-w-6xl items-center justify-center pb-16">
        <div className="mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm font-medium text-slate-200 shadow-2xl shadow-black/20 backdrop-blur">
            <Sparkles size={15} className="text-emerald-300" />
            Full-stack para productos web en producción
          </div>
          <h1 className="mx-auto mt-7 max-w-5xl text-4xl font-semibold leading-[1.03] text-white sm:text-6xl lg:text-7xl">
            {personalInfo.headline}
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            {personalInfo.summary}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="#projects" className="primary-button">
              Ver case studies
              <ArrowRight size={18} />
            </a>
            <a href="#build" className="ghost-button">
              Qué construyo
              <Layers3 size={18} />
            </a>
            <a href={personalInfo.cv} className="ghost-button" target="_blank" rel="noreferrer">
              Descargar CV
              <Download size={18} />
            </a>
          </div>

          <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
            {['Sistemas multi-rol', 'APIs + UI', 'Producción cloud'].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-slate-950/45 px-4 py-3 text-sm font-medium text-slate-300 shadow-xl shadow-black/20 backdrop-blur"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function WhatIBuild() {
  return (
    <section id="build" className="px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionIntro
          eyebrow="Qué construyo"
          title="No hago páginas aisladas. Construyo sistemas web que resuelven operación."
          description="Mi trabajo vive entre producto, frontend y backend: entender el flujo, modelar la información y entregar software que un equipo pueda usar todos los días."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {buildPillars.map((pillar) => (
            <article key={pillar.title} className="surface-card group">
              <span className="mb-6 grid h-11 w-11 place-items-center rounded-xl bg-emerald-400/10 text-emerald-300 ring-1 ring-emerald-300/20 transition group-hover:bg-emerald-300 group-hover:text-slate-950">
                <ShieldCheck size={20} />
              </span>
              <h3 className="text-lg font-semibold text-white">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{pillar.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function CaseStudy({ project, index }) {
  return (
    <article className="case-study">
      <div className={index % 2 ? 'lg:order-2' : ''}>
        <ProductMockup project={project} />
      </div>
      <div>
        <p className="eyebrow">{project.label}</p>
        <h3 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
          {project.name}
        </h3>
        <p className="mt-4 text-base leading-8 text-slate-300">{project.intro}</p>

        <div className="mt-7 grid gap-4">
          {[
            ['Mi rol', project.role],
            ['Problema', project.problem],
            ['Solución', project.solution],
            ['Decisión técnica', project.technical],
            ['Resultado', project.result],
          ].map(([label, text]) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-sm font-semibold text-white">{label}</p>
              <p className="mt-2 text-sm leading-7 text-slate-400">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-7">
          <p className="text-sm font-semibold text-white">Funcionalidades clave</p>
          <div className="mt-3 grid gap-2">
            {project.features.map((feature) => (
              <div key={feature} className="flex items-start gap-3 text-sm text-slate-300">
                <Check className="mt-0.5 shrink-0 text-emerald-300" size={16} />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span key={tech} className="tech-pill">
              {tech}
            </span>
          ))}
        </div>

        <a href={project.url} target="_blank" rel="noreferrer" className="mt-8 inline-flex primary-button">
          Ver plataforma
          <ArrowUpRight size={18} />
        </a>
      </div>
    </article>
  )
}

function Projects() {
  return (
    <section id="projects" className="px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionIntro
          eyebrow="Proyectos principales"
          title="Case studies breves de plataformas construidas para operar negocios."
          description="Dos productos reales con foco en marketplace, administración, roles, permisos y arquitectura lista para crecer."
        />
        <div className="space-y-8">
          {projects.map((project, index) => (
            <CaseStudy key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionIntro
          eyebrow="Experiencia"
          title="Experiencia en sistemas empresariales en producción."
          description="Además de proyectos propios desarrollados de forma independiente, trabajé en una plataforma empresarial privada durante mis prácticas, donde estabilidad, incidencias y entregas importan."
        />

        <article className="case-study lg:grid-cols-[0.75fr_1.25fr]">
          <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
            <span className="inline-flex rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-semibold text-emerald-300">
              {experience.visibility}
            </span>
            <p className="text-sm text-emerald-300">{experience.period}</p>
            <h3 className="mt-4 text-2xl font-semibold text-white">
              {experience.product}
            </h3>
            <p className="mt-2 text-base text-slate-400">
              {experience.role} · {experience.company}
            </p>
          </div>
          <div>
            <p className="text-base leading-8 text-slate-300">{experience.summary}</p>
            <div className="mt-6 grid gap-3">
              {experience.highlights.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-slate-300">
                  <Check className="mt-0.5 shrink-0 text-emerald-300" size={16} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

function Technologies() {
  return (
    <section className="px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionIntro
          eyebrow="Tecnologías"
          title="Stack práctico para entregar producto completo."
          description="Uso herramientas modernas sin convertir el portafolio en una lista infinita. Lo importante es que frontend, backend y despliegue conversen bien."
        />

        <div className="grid gap-4 lg:grid-cols-3">
          {technologyGroups.map((group) => (
            <div key={group.title} className="surface-card">
              <h3 className="text-lg font-semibold text-white">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="tech-pill">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section id="process" className="px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionIntro
          eyebrow="Proceso"
          title="De problema operativo a plataforma usable."
          description="Un proceso simple para reducir incertidumbre, ordenar decisiones técnicas y avanzar con entregables visibles."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((item) => (
            <article key={item.step} className="surface-card">
              <p className="text-sm font-semibold text-emerald-300">{item.step}</p>
              <h3 className="mt-5 text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} {personalInfo.shortName}. Full-stack
          developer.
        </p>
        <div className="flex items-center gap-3">
          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <Header />
      <main>
        <Hero />
        <WhatIBuild />
        <Projects />
        <Experience />
        <Technologies />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
