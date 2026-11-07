type Props = {
  src: string
  alt: string
  eager?: boolean
  className?: string
}

export function BrowserFrame({ src, alt, eager = false, className = '' }: Props) {
  return (
    <div className={`overflow-hidden rounded-xl border border-white/10 bg-[#111116] shadow-2xl shadow-black/30 ${className}`}>
      <div className="flex h-8 items-center gap-1.5 border-b border-white/[0.07] bg-[#15151b] px-3" aria-hidden="true">
        <span className="size-1.5 rounded-full bg-white/20" />
        <span className="size-1.5 rounded-full bg-white/20" />
        <span className="size-1.5 rounded-full bg-white/20" />
        <span className="mx-auto h-3 w-1/3 rounded-full bg-white/[0.04]" />
      </div>
      <div className="aspect-[3/2] overflow-hidden bg-[#101014]">
        <img
          src={src}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          className="h-full w-full object-cover object-top"
          width="1536"
          height="1024"
        />
      </div>
    </div>
  )
}
