import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { navigation } from '../data/site'
import { useActiveSection } from '../hooks/useActiveSection'
import { Container } from '../components/Container'
import { Logo } from '../components/Logo'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const reducedMotion = useReducedMotion()
  const sectionIds = useMemo(() => navigation.map((item) => item.href.slice(1)), [])
  const activeSection = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen])

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50"
      initial={reducedMotion ? false : { y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <Container className="pt-3 sm:pt-4">
        <nav
          aria-label="Primary navigation"
          className={`relative flex h-16 items-center justify-between rounded-2xl border px-4 transition-all duration-500 sm:px-5 ${
            scrolled || menuOpen
              ? 'border-white/10 bg-[#0b0b10]/85 shadow-[0_16px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl'
              : 'border-transparent bg-transparent'
          }`}
        >
          <a href="#home" aria-label="Veyra home" onClick={() => setMenuOpen(false)} className="relative z-10 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-400">
            <Logo />
          </a>

          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 lg:flex">
            {navigation.map((item) => {
              const active = activeSection === item.href.slice(1)
              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={active ? 'location' : undefined}
                  className={`relative rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors duration-300 ${active ? 'text-white' : 'text-zinc-400 hover:text-white'}`}
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="active-navigation"
                      className="absolute inset-0 -z-10 rounded-full border border-white/[0.07] bg-white/[0.055]"
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    />
                  )}
                </a>
              )
            })}
          </div>

          <a
            href="#contact"
            className="group hidden min-h-10 items-center gap-2 rounded-full border border-white/12 bg-white/[0.055] px-4 text-[13px] font-semibold text-white transition-colors hover:border-violet-300/35 hover:bg-violet-400/10 lg:inline-flex"
          >
            Let&apos;s Talk
            <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
          </a>

          <button
            type="button"
            className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-white lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                id="mobile-navigation"
                className="absolute inset-x-0 top-[calc(100%+0.65rem)] overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c12]/95 p-3 shadow-2xl shadow-black/50 backdrop-blur-2xl lg:hidden"
                initial={reducedMotion ? false : { opacity: 0, y: -12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -8, scale: 0.98 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex flex-col">
                  {navigation.map((item, index) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium ${activeSection === item.href.slice(1) ? 'bg-violet-400/10 text-violet-200' : 'text-zinc-300 hover:bg-white/5 hover:text-white'}`}
                      initial={reducedMotion ? false : { opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.035, duration: 0.3 }}
                    >
                      {item.label}
                      <span className="font-mono text-[10px] text-zinc-600">0{index + 1}</span>
                    </motion.a>
                  ))}
                  <a href="#contact" onClick={() => setMenuOpen(false)} className="mt-2 flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-5 text-sm font-semibold text-zinc-950">
                    Start a project <ArrowUpRight className="size-4" />
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </Container>
      <AnimatePresence>
        {menuOpen && (
          <motion.button
            type="button"
            aria-label="Close navigation menu"
            className="fixed inset-0 -z-10 h-screen w-screen cursor-default bg-black/55 backdrop-blur-sm lg:hidden"
            onClick={() => setMenuOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>
    </motion.header>
  )
}
