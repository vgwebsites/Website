import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'
import { Navbar } from './sections/Navbar'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Services } from './sections/Services'
import { Projects } from './sections/Projects'
import { Founders } from './sections/Founders'
import { Technologies } from './sections/Technologies'
import { WhyChooseUs } from './sections/WhyChooseUs'
import { Process } from './sections/Process'
import { Testimonials } from './sections/Testimonials'
import { Contact } from './sections/Contact'
import { Footer } from './sections/Footer'

function ScrollProgress() {
  const reducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 })
  return <motion.div aria-hidden="true" className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-violet-500 via-violet-400 to-blue-400" style={reducedMotion ? { scaleX: scrollYProgress } : { scaleX }} />
}

export default function App() {
  return (
    <div className="min-h-screen overflow-x-clip bg-[#f5f5f7]">
      <a href="#main-content" className="fixed left-4 top-3 z-[100] -translate-y-20 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black transition-transform focus:translate-y-0">Skip to content</a>
      <ScrollProgress />
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Founders />
        <Technologies />
        <WhyChooseUs />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
