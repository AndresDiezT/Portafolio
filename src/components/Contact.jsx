import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'

function Contact({ content }) {
  const { contact, personalInfo } = content

  return (
    <section id="contact" className="relative overflow-hidden px-5 py-20 sm:py-28">
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="eyebrow">{contact.eyebrow}</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-5xl">{contact.title}</h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">{contact.description}</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/30 backdrop-blur">
          <div className="space-y-3">
            <a href={`mailto:${personalInfo.email}`} className="contact-row group">
              <span className="contact-icon"><Mail size={18} /></span>
              <span className="min-w-0"><span className="block text-sm font-medium text-white">Email</span><span className="block truncate text-sm text-slate-400">{personalInfo.email}</span></span>
              <ArrowUpRight className="ml-auto text-slate-500 transition group-hover:text-emerald-300" size={18} />
            </a>
            <a href={`tel:${personalInfo.phone.replaceAll(' ', '')}`} className="contact-row">
              <span className="contact-icon"><Phone size={18} /></span>
              <span><span className="block text-sm font-medium text-white">{contact.phone}</span><span className="block text-sm text-slate-400">{personalInfo.phone}</span></span>
            </a>
            <div className="contact-row">
              <span className="contact-icon"><MapPin size={18} /></span>
              <span><span className="block text-sm font-medium text-white">{contact.location}</span><span className="block text-sm text-slate-400">{personalInfo.location}</span></span>
            </div>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="secondary-button"><Github size={18} />GitHub</a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="secondary-button"><Linkedin size={18} />LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
