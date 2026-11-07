import { ArrowUpRight } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

type Props = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
  onClick?: () => void
}

export function ButtonLink({ href, children, variant = 'primary', className = '', onClick }: Props) {
  const reducedMotion = useReducedMotion()
  const styles = variant === 'primary'
    ? 'border-white bg-white text-zinc-950 shadow-[0_8px_30px_rgba(255,255,255,0.08)] hover:bg-violet-100'
    : 'border-white/12 bg-white/[0.025] text-zinc-100 hover:border-white/25 hover:bg-white/[0.06]'

  return (
    <motion.a
      href={href}
      onClick={onClick}
      className={`group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full border px-6 text-sm font-semibold transition-colors duration-300 ${styles} ${className}`}
      whileHover={reducedMotion ? undefined : { y: -2 }}
      whileTap={reducedMotion ? undefined : { scale: 0.98 }}
    >
      {children}
      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
    </motion.a>
  )
}
