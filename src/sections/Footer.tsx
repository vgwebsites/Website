import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react'
import { Container } from '../components/Container'
import { Logo } from '../components/Logo'
import { navigation, siteConfig } from '../data/site'
import { services } from '../data/services'

export function Footer() {
  return (
    <footer className="border-t border-white/[0.07] bg-[#f5f5f7]">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.65fr_0.85fr_0.65fr] lg:gap-10">
          <div>
            <a href="#home" aria-label="Veyra home" className="inline-flex"><Logo /></a>
            <p className="mt-5 max-w-sm text-sm leading-6 text-zinc-500">An independent web development studio founded by two developers. We design and build clear, considered digital experiences for ambitious ideas.</p>
            <div className="mt-6 flex gap-2">
              {/* <a href={siteConfig.github} target="_blank" rel="noreferrer" aria-label="GitHub sample destination" title="Editable sample GitHub destination" className="grid size-10 place-items-center rounded-full border border-white/[0.09] text-zinc-500 transition-colors hover:border-violet-300/25 hover:text-white"><Github className="size-4" /></a>
              <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn sample destination" title="Editable sample LinkedIn destination" className="grid size-10 place-items-center rounded-full border border-white/[0.09] text-zinc-500 transition-colors hover:border-violet-300/25 hover:text-white"><Linkedin className="size-4" /></a>
              <a href={siteConfig.emailCompose} target="_blank" rel="noreferrer" aria-label="Email Veyra" title={`Email ${siteConfig.email}`} className="grid size-10 place-items-center rounded-full border border-white/[0.09] text-zinc-500 transition-colors hover:border-violet-300/25 hover:text-white"><Mail className="size-4" /></a> */}
            </div>
          </div>
          <div>
            <h2 className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-zinc-300">Navigate</h2>
            <ul className="mt-5 space-y-3.5">{navigation.map((item) => <li key={item.href}><a href={item.href} className="text-sm text-zinc-500 transition-colors hover:text-white">{item.label}</a></li>)}</ul>
          </div>
          {/* <div>
            <h2 className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-zinc-300">Expertise</h2>
            <ul className="mt-5 space-y-3.5">{services.slice(0, 6).map((service) => <li key={service.title}><a href="#services" className="text-sm text-zinc-500 transition-colors hover:text-white">{service.title.replace(' Development', '')}</a></li>)}</ul>
          </div> */}
          <div>
            <h2 className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-zinc-300">Explore</h2>
            <ul className="mt-5 space-y-3.5">
              <li><a href="#technologies" className="text-sm text-zinc-500 transition-colors hover:text-white">Technologies</a></li>
              <li><a href="#why-us" className="text-sm text-zinc-500 transition-colors hover:text-white">Why Choose Us</a></li>
              <li><a href="#process" className="text-sm text-zinc-500 transition-colors hover:text-white">Our Process</a></li>
              <li><a href="#testimonials" className="text-sm text-zinc-500 transition-colors hover:text-white">Testimonials</a></li>
            </ul>
            <a href="#home" className="mt-7 inline-flex items-center gap-2 text-xs font-medium text-violet-300 transition-colors hover:text-violet-200">Back to top <ArrowUp className="size-3.5" /></a>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-white/[0.07] pt-6 text-[11px] text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} VG Websites. All rights reserved.</p>
          {/* <p>Designed with intent. Built with <span className="text-zinc-400">React + Vite</span>.</p> */}
        </div>
      </Container>
    </footer>
  )
}
