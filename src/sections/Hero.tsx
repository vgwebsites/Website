import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Check, Code2, Sparkles } from 'lucide-react'
import { Container } from '../components/Container'
import { ButtonLink } from '../components/ButtonLink'
import { MaskReveal } from '../animations/Reveal'

const codeLines = [
  <><span className="text-violet-300">const</span> <span className="text-blue-300">experience</span> = <span className="text-violet-300">await</span> craft(&#123;</>,
  <>&nbsp;&nbsp;idea: <span className="text-emerald-300">&apos;ambitious&apos;</span>,</>,
  <>&nbsp;&nbsp;design: <span className="text-emerald-300">&apos;intentional&apos;</span>,</>,
  <>&nbsp;&nbsp;code: <span className="text-emerald-300">&apos;maintainable&apos;</span>,</>,
  <>&#125;);</>,
  <>&nbsp;</>,
  <><span className="text-violet-300">export default</span> experience;</>,
]

function HeroCanvas() {
  const reducedMotion = useReducedMotion()
  return (
    <div className="relative mx-auto w-full max-w-[570px] lg:mx-0">
      <div className="absolute -inset-10 -z-10 rounded-full bg-violet-600/10 blur-3xl" aria-hidden="true" />
      <motion.div
        className="absolute -right-3 -top-8 z-20 flex items-center gap-2.5 rounded-xl border border-white/10 bg-[#14141b]/90 px-3.5 py-3 shadow-xl shadow-black/30 backdrop-blur-xl sm:-right-7 sm:px-4"
        animate={reducedMotion ? undefined : { y: [0, -7, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="grid size-8 place-items-center rounded-lg bg-violet-400/10 text-violet-300"><Code2 className="size-4" /></span>
        <span><span className="block text-xs font-semibold text-white">Clean by default</span><span className="mt-0.5 block font-mono text-[9px] text-zinc-500">DESIGN → CODE</span></span>
      </motion.div>

      <div className="overflow-hidden rounded-[22px] border border-white/10 bg-[#0e0e14]/95 p-2 shadow-[0_35px_100px_rgba(0,0,0,0.5)] backdrop-blur-xl">
        <div className="flex h-10 items-center justify-between px-2.5">
          <div className="flex gap-1.5" aria-hidden="true"><span className="size-2 rounded-full bg-[#ff6b63]/70" /><span className="size-2 rounded-full bg-[#eec75c]/70" /><span className="size-2 rounded-full bg-[#62c454]/70" /></div>
          <span className="font-mono text-[9px] tracking-wide text-zinc-500">studio / experience.tsx</span>
          <span className="rounded-md border border-white/[0.07] px-2 py-1 font-mono text-[8px] text-violet-300">REACT</span>
        </div>
        <div className="grid min-h-[360px] overflow-hidden rounded-2xl border border-white/[0.06] sm:min-h-[400px] sm:grid-cols-[1.12fr_0.88fr]">
          <div className="relative hidden flex-col bg-[#0b0b10] p-5 sm:flex">
            <div className="mb-6 flex gap-5 border-b border-white/[0.06] pb-3 font-mono text-[9px] text-zinc-600"><span className="text-zinc-300">experience.tsx</span><span>studio.ts</span></div>
            <div className="space-y-3 font-mono text-[10px] leading-5 text-zinc-400 xl:text-[11px]">
              {codeLines.map((line, index) => (
                <motion.div
                  key={index}
                  className="flex gap-3"
                  initial={reducedMotion ? false : { opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.85 + index * 0.07, duration: 0.4 }}
                >
                  <span className="w-3 select-none text-right text-zinc-700">{index + 1}</span>
                  <span className="whitespace-pre">{line}</span>
                </motion.div>
              ))}
            </div>
            <div className="mt-auto flex items-center gap-2 border-t border-white/[0.06] pt-4 font-mono text-[9px] text-emerald-300/80"><span className="size-1.5 rounded-full bg-emerald-400" /> No compromises. Just craft.</div>
          </div>
          <div className="relative isolate flex min-h-[360px] flex-col overflow-hidden bg-[#1d1d1f] p-6 sm:min-h-0 sm:p-5">
            <div className="absolute -right-20 -top-16 -z-10 size-56 rounded-full bg-violet-500/30 blur-3xl" />
            <div className="absolute inset-0 -z-20 opacity-25 hero-grid" />
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold tracking-[-0.04em] text-white">veyra<span className="text-violet-400">.</span></span>
              <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-white/45">Concept 001</span>
            </div>
            <div className="my-auto py-8">
              <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[8px] uppercase tracking-widest text-violet-200"><Sparkles className="size-2.5" /> Digital studio</span>
              <p className="text-[2rem] font-medium leading-[0.98] tracking-[-0.065em] text-white sm:text-[2.2rem]">Make it<br /><span className="text-violet-300">memorable.</span></p>
              <p className="mt-4 max-w-[180px] text-[10px] leading-4 text-zinc-400">Thoughtful digital experiences, built with purpose and precision.</p>
              <span className="mt-5 inline-flex rounded-full bg-white px-3.5 py-2 text-[9px] font-semibold text-zinc-950">Start a project <span className="ml-2">↗</span></span>
            </div>
            <div className="grid grid-cols-3 gap-1.5" aria-hidden="true">
              <div className="h-10 rounded-md border border-white/[0.08] bg-white/[0.04]" />
              <div className="h-10 rounded-md border border-violet-300/15 bg-violet-400/10" />
              <div className="h-10 rounded-md border border-white/[0.08] bg-white/[0.04]" />
            </div>
          </div>
        </div>
        <div className="flex h-9 items-center justify-between px-3 font-mono text-[8px] text-zinc-600"><span>main*</span><span className="flex items-center gap-1.5 text-emerald-300/70"><Check className="size-2.5" /> Ready to create</span><span>UTF-8 &nbsp; TypeScript</span></div>
      </div>

      <motion.div
        className="absolute -bottom-7 -left-3 z-20 flex items-center gap-3 rounded-xl border border-white/10 bg-[#14141b]/90 p-3.5 pr-5 shadow-xl shadow-black/30 backdrop-blur-xl sm:-left-8"
        animate={reducedMotion ? undefined : { y: [0, 7, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      >
        <div className="flex -space-x-2"><span className="grid size-8 place-items-center rounded-full border-2 border-[#14141b] bg-violet-300 text-[10px] font-bold text-violet-950">V</span><span className="grid size-8 place-items-center rounded-full border-2 border-[#14141b] bg-blue-300 text-[10px] font-bold text-blue-950">G</span></div>
        <span><span className="block text-xs font-semibold text-white">Design + development</span><span className="mt-0.5 block text-[10px] text-zinc-500">One integrated team</span></span>
      </motion.div>
    </div>
  )
}

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 110])
  const visualY = useTransform(scrollYProgress, [0, 1], [0, -70])
  const sceneScale = useTransform(scrollYProgress, [0, 1], [1, 0.94])
  const sceneOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.18])
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 160])

  return (
    <section id="home" ref={ref} className="relative isolate flex min-h-[100svh] items-center overflow-hidden pb-24 pt-32 sm:pt-36 lg:pb-28 lg:pt-32">
      <motion.div className="pointer-events-none absolute inset-0 -z-20" style={reducedMotion ? undefined : { y: backgroundY }}>
        <div className="absolute inset-0 hero-grid opacity-[0.22] [mask-image:linear-gradient(to_bottom,black_0%,transparent_90%)]" />
        <div className="absolute -left-[15%] top-[5%] size-[520px] rounded-full bg-violet-700/[0.09] blur-[100px]" />
        <div className="absolute right-[-8%] top-[20%] size-[460px] rounded-full bg-blue-600/[0.07] blur-[100px]" />
      </motion.div>
      <div className="absolute inset-x-0 bottom-0 -z-10 h-36 bg-gradient-to-t from-[#08080c] to-transparent" />

      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12 xl:gap-20">
          <motion.div style={reducedMotion ? undefined : { y: contentY, scale: sceneScale, opacity: sceneOpacity }} className="origin-left">
            {/* <motion.div
              className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.025] px-3.5 py-2"
              initial={reducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <span className="relative flex size-1.5"><span className="absolute inline-flex size-full animate-ping rounded-full bg-violet-400 opacity-50 motion-reduce:animate-none" /><span className="relative inline-flex size-1.5 rounded-full bg-violet-300" /></span>
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-400">Two developers. One focused studio.</span>
            </motion.div> */}

           <h1 className="max-w-[760px] text-[2.9rem] font-semibold leading-[1.12] tracking-[-0.06em] text-white sm:text-[4.25rem] lg:text-[4.4rem] xl:text-[5rem]">
  <MaskReveal delay={0.2}>We build digital</MaskReveal>
  <MaskReveal delay={0.29}>
    <span className="text-gradient">experiences</span> that
  </MaskReveal>
  <MaskReveal delay={0.38}>move you forward.</MaskReveal>
</h1>

            

            <motion.div
              className="mt-9 flex flex-col gap-3 sm:flex-row"
              initial={reducedMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.67, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* <ButtonLink href="#contact">Get Started</ButtonLink> */}
              <ButtonLink href="#projects" variant="secondary">Explore Projects</ButtonLink>
            </motion.div>

            <motion.div
              className="mt-11 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/[0.07] pt-6 text-xs text-zinc-500"
              initial={reducedMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {['Design-led thinking', 'Developer-built', 'Responsive by default'].map((item) => <span key={item} className="flex items-center gap-2"><Check className="size-3.5 text-violet-400" />{item}</span>)}
            </motion.div>
          </motion.div>

          <motion.div
            className="origin-center lg:pt-10"
            style={reducedMotion ? undefined : { y: visualY }}
            initial={reducedMotion ? false : { opacity: 0, x: 45, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <HeroCanvas />
          </motion.div>
        </div>
      </Container>

      <motion.a
        href="#about"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-600 transition-colors hover:text-zinc-300 lg:flex"
        initial={reducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        Scroll to explore <ArrowDown className="size-3" />
      </motion.a>
    </section>
  )
}
