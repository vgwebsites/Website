import type { ReactNode } from 'react'
import { Reveal } from '../animations/Reveal'

type Props = {
  eyebrow: string
  title: ReactNode
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({ eyebrow, title, description, align = 'left', className = '' }: Props) {
  const centered = align === 'center'
  return (
    <Reveal className={`${centered ? 'mx-auto text-center' : ''} max-w-3xl ${className}`}>
      <div className={`mb-5 flex items-center gap-3 ${centered ? 'justify-center' : ''}`}>
        <span className="h-px w-7 bg-violet-400/70" />
        <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-violet-300">{eyebrow}</p>
      </div>
      <h2 className="text-balance text-[2.15rem] font-semibold leading-[1.08] tracking-[-0.045em] text-white sm:text-5xl lg:text-[3.4rem]">
        {title}
      </h2>
      {description && (
        <p className={`mt-6 text-pretty text-base leading-7 text-zinc-400 sm:text-lg ${centered ? 'mx-auto max-w-2xl' : 'max-w-2xl'}`}>
          {description}
        </p>
      )}
    </Reveal>
  )
}
