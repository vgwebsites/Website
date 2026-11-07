import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'
import { ArrowDownRight } from 'lucide-react'
import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../animations/Reveal'
import { processSteps } from '../data/process'

export function Process() {
  const timelineRef = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: timelineRef, offset: ['start 75%', 'end 65%'] })
  const lineScale = useSpring(scrollYProgress, { stiffness: 90, damping: 25, restDelta: 0.001 })

  return (
    <section id="process" className="py-24 sm:py-32 lg:py-40">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              eyebrow="How we work"
              title={<>A clear path from<br />idea to impact.</>}
              description="A structured process keeps the work moving and the decisions visible. You will always know where we are and what comes next."
            />
            <Reveal delay={0.15} className="mt-8 hidden items-center gap-3 text-xs text-zinc-500 lg:flex">
              <span className="grid size-9 place-items-center rounded-full border border-white/[0.08]"><ArrowDownRight className="size-4 text-violet-400" /></span>
              Six steps. One collaborative team.
            </Reveal>
          </div>

          <div ref={timelineRef} className="relative pl-10 sm:pl-14">
            <div className="absolute bottom-8 left-[11px] top-5 w-px bg-white/[0.08] sm:left-[15px]">
              <motion.div className="h-full origin-top bg-gradient-to-b from-violet-400 via-violet-500 to-blue-400" style={reducedMotion ? { scaleY: 1 } : { scaleY: lineScale }} />
            </div>
            <div className="space-y-5">
              {processSteps.map((step, index) => (
                <Reveal key={step.title} delay={0.03} y={32} amount={0.25}>
                  <article className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition-colors duration-300 hover:border-violet-300/20 hover:bg-white/[0.035] sm:p-7">
                    <span className="absolute -left-10 top-7 grid size-6 place-items-center rounded-full border border-violet-300/25 bg-[#0d0d14] font-mono text-[8px] text-violet-300 shadow-[0_0_0_5px_#000] sm:-left-14 sm:size-8 sm:text-[9px]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                      <h3 className="text-xl font-semibold tracking-[-0.03em] text-white">{step.title}</h3>
                      <span className="w-fit shrink-0 rounded-full border border-white/[0.08] px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.12em] text-zinc-500">{step.output}</span>
                    </div>
                    <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-500">{step.description}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
