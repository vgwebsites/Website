import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, Compass, Eye, Handshake, Target } from 'lucide-react'
import { Container } from '../components/Container'
import { Reveal, Stagger, StaggerItem } from '../animations/Reveal'
import { SectionHeading } from '../components/SectionHeading'

const principles = [
  { title: 'Our mission', icon: Target, text: 'Make high-quality design and engineering accessible to ambitious teams, without the agency runaround.' },
  { title: 'Our vision', icon: Eye, text: 'A web where useful products and beautiful experiences are never treated as separate things.' },
  { title: 'Why work with us', icon: Handshake, text: 'You work directly with the people designing and building your product—from first call to final commit.' },
]

export function About() {
  const ref = useRef<HTMLElement>(null)
  const reducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const glowY = useTransform(scrollYProgress, [0, 1], [-60, 80])

  return (
    <section id="about" ref={ref} className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
      <motion.div style={reducedMotion ? undefined : { y: glowY }} className="pointer-events-none absolute -left-52 top-1/3 -z-10 size-[480px] rounded-full bg-violet-600/[0.055] blur-[110px]" />
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="About "
              title={<>Small team.<br /><span className="text-zinc-500">Singular focus.</span></>}
            />
            <Reveal delay={0.12} className="mt-8 space-y-5 text-base leading-7 text-zinc-400">
             
              <p>
                As two developers, we bring technical thinking into the earliest creative decisions and keep the user experience present in every line of code. No handoffs between departments. No lost context.
              </p>
            </Reveal>
            <Reveal delay={0.2} className="mt-8">
              <a href="#process" className="group inline-flex items-center gap-2 text-sm font-semibold text-white">
                See how we work <ArrowUpRight className="size-4 text-violet-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Reveal>
          </div>

          <Stagger className="grid gap-4 sm:grid-cols-2">
            <StaggerItem className="sm:col-span-2">
              <div className="relative overflow-hidden rounded-2xl border border-white/[0.09] bg-white/[0.025] p-6 sm:p-8">
                <div className="absolute right-0 top-0 size-40 bg-violet-500/[0.06] blur-3xl" />
                <div className="mb-8 flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-xl border border-violet-300/15 bg-violet-400/10 text-violet-300"><Compass className="size-5" /></span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-600">Our story / 001</span>
                </div>
                <h3 className="max-w-md text-2xl font-medium leading-tight tracking-[-0.035em] text-white">Built by two developers, not layers of management.</h3>
                <p className="mt-4 max-w-xl text-sm leading-6 text-zinc-400">Our story is still being written. What stays constant is our commitment to direct collaboration, honest advice, and work we are proud to put our names on.</p>
              </div>
            </StaggerItem>
            {principles.map((principle, index) => (
              <StaggerItem key={principle.title} className={index === 2 ? 'sm:col-span-2' : ''}>
                <div className="group h-full rounded-2xl border border-white/[0.08] bg-[#0d0d12] p-6 transition-colors duration-300 hover:border-white/[0.16] hover:bg-white/[0.035]">
                  <principle.icon className="size-5 text-violet-400 transition-transform duration-300 group-hover:-translate-y-1" />
                  <h3 className="mt-5 text-base font-semibold tracking-[-0.02em] text-white">{principle.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-500">{principle.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Container>
    </section>
  )
}
