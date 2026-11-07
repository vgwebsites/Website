import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import { Stagger, StaggerItem } from '../animations/Reveal'
import { technologies } from '../data/technologies'

export function Technologies() {
  return (
    <section id="technologies" className="py-24 sm:py-32">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:items-end">
          <SectionHeading
            eyebrow="Our toolkit"
            title={<>Proven tools.<br /><span className="text-zinc-500">Thoughtfully used.</span></>}
          />
          <p className="max-w-xl text-sm leading-6 text-zinc-500 lg:justify-self-end lg:text-right">We choose technology for the needs of the project—not for novelty. Our core stack supports fast interfaces, reliable backends, and straightforward maintenance.</p>
        </div>
        <Stagger className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {technologies.map((technology) => (
            <StaggerItem key={technology.name}>
              <div className="group flex min-h-[142px] flex-col justify-between rounded-2xl border border-white/[0.075] bg-white/[0.02] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.16] hover:bg-white/[0.035]">
                <technology.icon className="size-6 text-zinc-500 transition-colors duration-300 group-hover:text-[var(--tech-color)]" style={{ '--tech-color': technology.color } as React.CSSProperties} strokeWidth={1.6} />
                <div className="mt-6">
                  <h3 className="text-sm font-semibold text-zinc-200">{technology.name}</h3>
                  <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.1em] text-zinc-600">{technology.type}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  )
}
