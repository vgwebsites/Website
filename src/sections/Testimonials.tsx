import { MessageSquareQuote } from 'lucide-react'
import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import { Reveal, Stagger, StaggerItem } from '../animations/Reveal'
import { testimonials } from '../data/testimonials'

export function Testimonials() {
  return (
    // <section id="testimonials" className="border-y border-white/[0.055] bg-[#0b0b10] py-24 sm:py-32 lg:py-36">
    //   <Container>
    //     <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
    //       <SectionHeading
    //         eyebrow="Kind words, someday"
    //         title={<>A place for your<br />experience to live.</>}
    //         description="We will not manufacture social proof. These clearly marked samples show the testimonial layout and are ready to be replaced with genuine client feedback."
    //       />
    //       <Reveal delay={0.1}>
    //         <span className="inline-flex rounded-full border border-amber-200/15 bg-amber-200/[0.045] px-3.5 py-2 font-mono text-[9px] uppercase tracking-[0.14em] text-amber-100/60">100% sample content</span>
    //       </Reveal>
    //     </div>

    //     <Stagger className="mt-14 grid gap-4 lg:grid-cols-3">
    //       {testimonials.map((testimonial, index) => (
    //         <StaggerItem key={index} className="h-full">
    //           <figure className="flex h-full min-h-[330px] flex-col rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7 transition-colors duration-300 hover:border-white/[0.15]">
    //             <div className="flex items-center justify-between">
    //               <MessageSquareQuote className="size-6 text-violet-400/80" strokeWidth={1.5} />
    //               <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-zinc-600">Demo quote / 0{index + 1}</span>
    //             </div>
    //             <blockquote className="mt-8 text-pretty text-lg font-medium leading-8 tracking-[-0.02em] text-zinc-200">{testimonial.quote}</blockquote>
    //             <figcaption className="mt-auto flex items-center gap-3 border-t border-white/[0.07] pt-6">
    //               <span className="grid size-10 place-items-center rounded-full border border-white/10 bg-gradient-to-br from-violet-400/20 to-blue-400/10 font-mono text-[10px] text-violet-200">CN</span>
    //               <span><span className="block text-xs font-semibold text-zinc-300">{testimonial.name}</span><span className="mt-1 block text-[10px] text-zinc-600">{testimonial.role}</span></span>
    //             </figcaption>
    //           </figure>
    //         </StaggerItem>
    //       ))}
    //     </Stagger>
    //   </Container>
    // </section>
    <></>
  )
}
