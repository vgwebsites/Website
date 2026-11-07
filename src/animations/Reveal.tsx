import { motion, useReducedMotion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'
import { elegantEase } from './motion'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  amount?: number
}

export function Reveal({ children, className, delay = 0, y = 28, amount = 0.18 }: RevealProps) {
  const reducedMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reducedMotion ? false : { opacity: 0, y }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.7, delay, ease: elegantEase }}
    >
      {children}
    </motion.div>
  )
}

type StaggerProps = {
  children: ReactNode
  className?: string
  delay?: number
}

export function Stagger({ children, className, delay = 0.04 }: StaggerProps) {
  const reducedMotion = useReducedMotion()
  const variants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: delay } },
  }

  return (
    <motion.div
      className={className}
      variants={variants}
      initial={reducedMotion ? false : 'hidden'}
      whileInView={reducedMotion ? undefined : 'show'}
      viewport={{ once: true, amount: 0.12 }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  const variants: Variants = {
    hidden: { opacity: 0, y: 26 },
    show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: elegantEase } },
  }
  return <motion.div variants={variants} className={className}>{children}</motion.div>
}

export function MaskReveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reducedMotion = useReducedMotion()
  return (
    <span className={`block overflow-hidden ${className ?? ''}`}>
      <motion.span
        className="block"
        initial={reducedMotion ? false : { y: '110%' }}
        animate={reducedMotion ? undefined : { y: '0%' }}
        transition={{ duration: 0.85, delay, ease: elegantEase }}
      >
        {children}
      </motion.span>
    </span>
  )
}
