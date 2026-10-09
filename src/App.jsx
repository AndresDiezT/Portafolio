import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Download,
  FileText,
  Github,
  GitBranch,
  Linkedin,
  Lock,
  Menu,
  X,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import Contact from './components/Contact'
import { getPortfolio } from './data/portfolio'

function readStoredLocale() {
  try {
    return localStorage.getItem('portfolio-locale') === 'en' ? 'en' : 'es'
  } catch {
    return 'es'
  }
}

function LanguageSwitcher({ locale, setLocale, label }) {
  return (
    <div className="language-switcher" role="group" aria-label={label}>
      {['es', 'en'].map((option) => (
        <button
          key={option}
          type="button"
          className={locale === option ? 'language-button language-button-active' : 'language-button'}
          onClick={() => setLocale(option)}
          aria-pressed={locale === option}
        >
          {option.toUpperCase()}
        </button>
      ))}
    </div>
  )
}

function Header({ content, locale, setLocale }) {
  const [isOpen, setIsOpen] = useState(false)
  const { header, navItems, personalInfo } = content

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-5" aria-label={header.navigation}>
        <a href="#home" className="group flex min-w-0 items-center gap-3">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-emerald-300 font-mono text-sm font-bold text-slate-950 transition group-hover:scale-105">{personalInfo.initials}</span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate text-sm font-semibold text-white">{personalInfo.shortName}</span>
            <span className="block truncate text-xs text-slate-400">{personalInfo.role}</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => <a key={item.href} href={item.href} className="nav-link">{item.label}</a>)}
        </div>

        <div className="flex items-center gap-2">
          <LanguageSwitcher locale={locale} setLocale={setLocale} label={header.language} />
          <a href="#contact" className="hidden lg:inline-flex primary-button py-2.5">{header.contact}<ArrowRight size={16} /></a>
          <button type="button" className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-white lg:hidden" onClick={() => setIsOpen((value) => !value)} aria-label={isOpen ? header.closeMenu : header.openMenu} aria-expanded={isOpen}>
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="border-t border-white/10 bg-slate-950 px-4 py-4 lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1">
            {navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setIsOpen(false)} className="rounded-lg px-3 py-3 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white">{item.label}</a>)}
            <a href="#contact" onClick={() => setIsOpen(false)} className="mt-2 primary-button">{header.contact}<ArrowRight size={16} /></a>
          </div>
        </div>
      )}
    </header>
  )
}

function SectionIntro({ eyebrow, title, description }) {
  return (
    <div className="mb-10 max-w-3xl sm:mb-14">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">{title}</h2>
      {description && <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">{description}</p>}
    </div>
  )
}

function DecisionDocument({ doc }) {
  const rows = [[doc.labels.context, doc.context], [doc.labels.decision, doc.decision], [doc.labels.tradeoff, doc.tradeoff]]
  return (
    <figure className="doc-card">
      <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
        <span className="flex min-w-0 items-center gap-2 font-mono text-xs text-slate-400"><FileText size={14} className="shrink-0 text-emerald-300" /><span className="truncate">{doc.file}</span></span>
        <span className="shrink-0 rounded-full bg-emerald-300/10 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-emerald-300 ring-1 ring-emerald-300/30">{doc.status}</span>
      </div>
      <div className="p-5 sm:p-6">
        <p className="text-lg font-semibold leading-snug text-white">{doc.title}</p>
        <dl className="mt-5 space-y-4">
          {rows.map(([label, text]) => (
            <div key={label} className="border-l-2 border-white/10 pl-4">
              <dt className="font-mono text-[11px] font-semibold uppercase tracking-wider text-emerald-300">{label}</dt>
              <dd className="mt-1 text-sm leading-6 text-slate-300">{text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </figure>
  )
}

function Hero({ content }) {
  const { hero, personalInfo } = content
  return (
    <section id="home" className="hero-stage relative overflow-hidden px-4 pt-28 sm:px-5 sm:pt-36">
      <div className="hero-grid" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl pb-16 sm:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-emerald-300/25 bg-emerald-300/[0.07] px-3 py-1.5 text-xs font-medium text-emerald-200 sm:text-sm">
              <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-60" /><span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" /></span>
              {hero.badge}
            </p>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl">
              {hero.title} <span className="text-emerald-300">{hero.titleAccent}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">{hero.summary}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href="#cases" className="primary-button">{hero.primary}<ArrowRight size={18} /></a>
              <a href={personalInfo.cv} className="ghost-button" target="_blank" rel="noreferrer">{hero.cv}<Download size={18} /></a>
              <div className="flex gap-3">
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="social-link h-12 w-12" aria-label="LinkedIn"><Linkedin size={19} /></a>
                <a href={personalInfo.github} target="_blank" rel="noreferrer" className="social-link h-12 w-12" aria-label="GitHub"><Github size={19} /></a>
              </div>
            </div>
          </div>
          <DecisionDocument doc={hero.docCard} />
        </div>

        <div className="mt-16 sm:mt-20">
          <p className="font-mono text-xs uppercase tracking-wider text-slate-500">{hero.evidenceTitle}</p>
          <dl className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-4">
            {hero.evidence.map((item) => (
              <div key={item.label} className="bg-slate-950 p-5 sm:p-6">
                <dt className="sr-only">{item.label}</dt>
                <dd className="font-mono text-3xl font-semibold text-white sm:text-4xl">{item.value}</dd>
                <dd className="mt-2 text-xs leading-5 text-slate-400 sm:text-sm">{item.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

function Process({ content }) {
  return (
    <section id="process" className="border-y border-white/10 bg-slate-900/40 px-4 py-20 sm:px-5 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionIntro {...content.sections.process} />
        <ol className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-5">
          {content.processSteps.map((item, index) => (
            <li key={item.title} className="group relative bg-slate-950 p-6 transition hover:bg-slate-900">
              <span className="font-mono text-sm text-emerald-300">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="mt-4 text-base font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{item.description}</p>
              <p className="mt-5 inline-flex items-center gap-1.5 rounded-md bg-white/[0.05] px-2 py-1 font-mono text-[11px] text-slate-300"><FileText size={12} className="text-emerald-300" />{item.artifact}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Screenshots({ images, name, label }) {
  const [main, ...rest] = images
  return (
    <div className="mt-8">
      <p className="mb-3 font-mono text-xs uppercase tracking-wider text-slate-500">{label}</p>
      <div className="grid gap-3 sm:grid-cols-[2fr_1fr]">
        <img src={main} alt={`${name} — 1`} className="aspect-[16/10] w-full rounded-xl border border-white/10 object-cover object-top" loading="lazy" />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-1">
          {rest.map((src, index) => <img key={src} src={src} alt={`${name} — ${index + 2}`} className="aspect-[16/10] w-full rounded-xl border border-white/10 object-cover object-top" loading="lazy" />)}
        </div>
      </div>
    </div>
  )
}

function CaseStudy({ item, labels, personalInfo }) {
  const docsHref = `mailto:${personalInfo.email}?subject=${encodeURIComponent(`${labels.docsSubject}: ${item.name}`)}`
  return (
    <article className="case-card">
      <div className="flex flex-wrap items-center gap-3">
        <span className="status-pill">{item.url ? <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" /> : <Lock size={12} />}{item.status}</span>
      </div>
      <h3 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{item.name}</h3>
      <p className="mt-2 text-base text-slate-400 sm:text-lg">{item.tagline}</p>

      <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {item.stats.map((stat) => (
          <div key={stat.label} className="rounded-xl border border-white/10 bg-slate-950/60 p-4">
            <dd className="font-mono text-2xl font-semibold text-white">{stat.value}</dd>
            <dt className="mt-1 text-xs text-slate-400">{stat.label}</dt>
          </div>
        ))}
      </dl>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div>
          <p className="label">{labels.problem}</p>
          <p className="mt-2 text-sm leading-7 text-slate-300">{item.problem}</p>
        </div>
        <div>
          <p className="label">{labels.role}</p>
          <p className="mt-2 text-sm leading-7 text-slate-300">{item.role}</p>
        </div>
      </div>

      <div className="mt-10">
        <p className="label flex items-center gap-2"><GitBranch size={14} />{labels.decisions}</p>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {item.decisions.map((decision) => (
            <div key={decision.title} className="decision-card">
              <p className="flex items-start gap-2.5 font-semibold text-white"><Check size={18} className="mt-0.5 shrink-0 text-emerald-300" />{decision.title}</p>
              <p className="mt-2 pl-7 text-sm leading-6 text-slate-400">{decision.why}</p>
            </div>
          ))}
        </div>
      </div>

      {item.screenshots && <Screenshots images={item.screenshots} name={item.name} label={labels.gallery} />}

      <div className="mt-8 flex flex-col gap-6 border-t border-white/10 pt-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">{item.stack.map((tech) => <span key={tech} className="tech-pill">{tech}</span>)}</div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          {item.url && <a href={item.url} target="_blank" rel="noreferrer" className="primary-button">{labels.visit}<ArrowUpRight size={17} /></a>}
          <a href={docsHref} className="ghost-button">{labels.docs}<FileText size={17} /></a>
        </div>
      </div>
      <p className="mt-3 text-xs text-slate-500 lg:text-right">{labels.docsNote}</p>
    </article>
  )
}

function OtherProject({ project, labels }) {
  return (
    <article className="case-card grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
      <div>
        <p className="eyebrow">{labels.otherEyebrow}</p>
        <h3 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">{project.name}</h3>
        <p className="mt-1 text-slate-400">{project.tagline}</p>
        <p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">{project.stack.map((tech) => <span key={tech} className="tech-pill">{tech}</span>)}</div>
        <a href={project.url} target="_blank" rel="noreferrer" className="mt-6 ghost-button">{labels.visit}<ArrowUpRight size={17} /></a>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <img src={project.screenshots[0]} alt={`${project.name} — 1`} className="col-span-2 aspect-[16/9] w-full rounded-xl border border-white/10 object-cover object-top" loading="lazy" />
        {project.screenshots.slice(1).map((src, index) => <img key={src} src={src} alt={`${project.name} — ${index + 2}`} className="aspect-[16/10] w-full rounded-xl border border-white/10 object-cover object-top" loading="lazy" />)}
      </div>
    </article>
  )
}

function Cases({ content }) {
  return (
    <section id="cases" className="px-4 py-20 sm:px-5 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionIntro {...content.sections.cases} />
        <div className="space-y-8">
          {content.cases.map((item) => <CaseStudy key={item.id} item={item} labels={content.caseLabels} personalInfo={content.personalInfo} />)}
          <OtherProject project={content.otherProject} labels={content.caseLabels} />
        </div>
      </div>
    </section>
  )
}

function Experience({ content }) {
  return (
    <section id="experience" className="border-t border-white/10 px-4 py-20 sm:px-5 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionIntro {...content.sections.experience} />
        <div className="divide-y divide-white/10 border-y border-white/10">
          {content.experiences.map((experience) => (
            <article key={experience.company} className="grid gap-4 py-8 md:grid-cols-[0.8fr_1.2fr] md:gap-10">
              <div>
                <p className="font-mono text-sm text-emerald-300">{experience.period}</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">{experience.company}</h3>
                <p className="mt-1 text-sm text-slate-400">{experience.role} · {experience.context}</p>
              </div>
              <div>
                <p className="text-base leading-7 text-slate-300">{experience.summary}</p>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {experience.highlights.map((item) => <li key={item} className="flex items-start gap-2.5 text-sm leading-6 text-slate-400"><Check className="mt-1 shrink-0 text-emerald-300" size={14} />{item}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Stack({ content }) {
  return (
    <section className="px-4 pb-20 sm:px-5 sm:pb-28">
      <div className="mx-auto max-w-6xl">
        <SectionIntro {...content.sections.stack} />
        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {content.technologyGroups.map((group) => (
            <div key={group.title} className="bg-slate-950 p-6">
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-emerald-300">{group.title}</h3>
              <ul className="mt-4 space-y-2">{group.items.map((item) => <li key={item} className="text-sm text-slate-300">{item}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer({ content }) {
  return (
    <footer className="border-t border-white/10 px-4 py-8 sm:px-5">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-500">© {new Date().getFullYear()} {content.personalInfo.shortName}. {content.footer}</p>
        <div className="flex items-center gap-3">
          <a href={content.personalInfo.github} target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub"><Github size={18} /></a>
          <a href={content.personalInfo.linkedin} target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn"><Linkedin size={18} /></a>
        </div>
      </div>
    </footer>
  )
}

function App() {
  const [locale, setLocale] = useState(readStoredLocale)
  const content = getPortfolio(locale)

  useEffect(() => {
    document.documentElement.lang = locale
    document.title = content.document.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', content.document.description)
    try {
      localStorage.setItem('portfolio-locale', locale)
    } catch {
      // Storage can be unavailable (private mode); the language still switches.
    }
  }, [content.document.description, content.document.title, locale])

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950 text-white">
      <Header content={content} locale={locale} setLocale={setLocale} />
      <main>
        <Hero content={content} />
        <Process content={content} />
        <Cases content={content} />
        <Experience content={content} />
        <Stack content={content} />
        <Contact content={content} />
      </main>
      <Footer content={content} />
    </div>
  )
}

export default App
