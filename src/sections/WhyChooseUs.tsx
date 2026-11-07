import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import { Stagger, StaggerItem } from '../animations/Reveal'
import { reasons } from '../data/reasons'

export function WhyChooseUs() {
  return (
    <section id="why-us" className="relative overflow-hidden border-y border-white/[0.055] bg-[#0b0b10] py-24 sm:py-32 lg:py-36">
      <div className="pointer-events-none absolute right-0 top-0 size-96 rounded-full bg-blue-600/[0.04] blur-[100px]" />
      <Container>
        <SectionHeading
         
          title={<>Care you can see.<br />Quality you can feel.</>}
          description="Good work is more than a polished homepage. It is the accumulation of hundreds of thoughtful decisions across design, code, and communication."
          align="center"
        />
        <Stagger className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <StaggerItem key={reason.title} className="h-full">
              <article className="group relative h-full min-h-[220px] bg-[#0c0c11] p-7 transition-colors duration-300 hover:bg-[#111118] sm:p-8">
                <div className="flex items-center justify-between">
                  <reason.icon className="size-5 text-violet-400" strokeWidth={1.6} />
                  <span className="font-mono text-[10px] text-zinc-700">0{index + 1}</span>
                </div>
                <h3 className="mt-9 text-lg font-semibold tracking-[-0.025em] text-white">{reason.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-500">{reason.description}</p>
                <span className="absolute bottom-0 left-0 h-px w-0 bg-violet-400/50 transition-all duration-500 group-hover:w-full" />
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  )
}
