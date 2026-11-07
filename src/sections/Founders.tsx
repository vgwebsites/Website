import { Github, Linkedin } from 'lucide-react'
import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import { Reveal, Stagger, StaggerItem } from '../animations/Reveal'
import { founders } from '../data/founders'

export function Founders() {
  return (
    <section id="team" className="relative border-y border-white/[0.055] bg-[#0b0b10] py-24 sm:py-32 lg:py-36">
      <Container>
        <SectionHeading
          eyebrow="Meet our founders"
          title={<>The people behind<br />every pixel and commit.</>}
          description="Direct access to the founders means fewer layers, faster answers, and a shared standard from start to finish."
          align="center"
        />

        <Stagger className="mt-14 grid gap-6 lg:grid-cols-2">
          {founders.map((founder, index) => (
            <StaggerItem key={founder.name}>
              <article className="group grid h-full overflow-hidden rounded-3xl border border-white/[0.09] bg-white/[0.02] sm:grid-cols-[0.78fr_1.22fr]">
                <div className="relative min-h-[320px] overflow-hidden sm:min-h-[390px]">
                  <img
                    src={founder.image}
                    alt={`${founder.name}, editable sample founder profile`}
                    loading="lazy"
                    decoding="async"
                    width="433"
                    height="650"
                    className="absolute inset-0 h-full w-full object-cover grayscale-[25%] transition duration-700 group-hover:scale-[1.025] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111117]/70 via-transparent to-transparent sm:bg-gradient-to-r sm:from-transparent sm:to-[#111117]/30" />
                  {/* <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/45 px-2.5 py-1 font-mono text-[8px] uppercase tracking-widest text-white/75 backdrop-blur-md">Demo profile 0{index + 1}</span> */}
                </div>
                <div className="flex flex-col p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">{founder.name}</h3>
                      <p className="mt-2 text-xs font-medium text-violet-300">{founder.role}</p>
                    </div>
                    <div className="flex gap-2">
                      <a href={founder.linkedin} target="_blank" rel="noreferrer" aria-label={`${founder.name} LinkedIn sample destination`} title="Editable sample LinkedIn destination" className="grid size-9 place-items-center rounded-full border border-white/[0.09] text-zinc-500 transition-colors hover:border-violet-300/25 hover:text-white"><Linkedin className="size-4" /></a>
                      <a href={founder.github} target="_blank" rel="noreferrer" aria-label={`${founder.name} GitHub sample destination`} title="Editable sample GitHub destination" className="grid size-9 place-items-center rounded-full border border-white/[0.09] text-zinc-500 transition-colors hover:border-violet-300/25 hover:text-white"><Github className="size-4" /></a>
                    </div>
                  </div>
                  <p className="mt-6 text-sm leading-6 text-zinc-400">{founder.bio}</p>
                  <div className="mt-auto pt-7">
                    <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-600">Core toolkit</p>
                    <div className="flex flex-wrap gap-2">{founder.skills.map((skill) => <span key={skill} className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-[10px] text-zinc-400">{skill}</span>)}</div>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-6 text-center">
           {/* <p className="text-xs text-zinc-600">Sample profiles and stock portraits for layout demonstration. Edit names, bios, photos, and links in <span className="font-mono text-zinc-500">src/data/founders.ts</span>.</p> */}
        </Reveal>
      </Container>
    </section>
  )
}
