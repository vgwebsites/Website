
import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import { BrowserFrame } from '../components/BrowserFrame'
import { Reveal } from '../animations/Reveal'
import { elegantEase } from '../animations/motion'
import { projectCategories, projects } from '../data/projects'

export function Projects() {
  const [filter, setFilter] =
    useState<(typeof projectCategories)[number]>('All')

  const reducedMotion = useReducedMotion()

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((project) => project.category === filter)

  return (
    <section
      id="projects"
      className="relative isolate overflow-hidden bg-white py-24 sm:py-32 lg:py-40"
    >
      <Container>

        {/* Section Heading */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Selected concepts"
            title={
              <>
                A glimpse of what
                <br />
                we love to build.
              </>
            }
            description="Explore our creative concepts, digital experiences, and innovative solutions. Each project reflects a unique approach to design and technology."
          />

          {/* <Reveal delay={0.1} className="shrink-0">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2.5 font-mono text-[9px] uppercase tracking-[0.16em] text-cyan-700">
              <span className="size-1.5 animate-pulse rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.6)]" />
              Demo portfolio
            </span>
          </Reveal> */}
        </div>

        {/* Category Filters */}
        <Reveal className="mt-12 flex flex-wrap gap-2" delay={0.08}>
          {projectCategories.map((category) => (
            <button
              key={category}
              type="button"
              aria-pressed={filter === category}
              onClick={() => setFilter(category)}
              className={`relative min-h-10 overflow-hidden rounded-full border px-5 text-xs font-medium transition-all duration-300 ${
                filter === category
                  ? 'border-cyan-400 bg-cyan-50 text-cyan-800 shadow-[0_0_15px_rgba(34,211,238,0.12)]'
                  : 'border-zinc-200 bg-white text-zinc-500 hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-800'
              }`}
            >
              {category}

              <span className="ml-2 font-mono text-[9px] text-cyan-600">
                {category === 'All'
                  ? projects.length
                  : projects.filter(
                      (project) => project.category === category
                    ).length}
              </span>
            </button>
          ))}
        </Reveal>

        {/* Unified Project Cards */}
        <motion.div
          layout
          className="mt-12 grid gap-7 sm:grid-cols-2"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                layout
                key={project.id}
                className="group relative"
                initial={
                  reducedMotion ? false : { opacity: 0, y: 30 }
                }
                animate={{ opacity: 1, y: 0 }}
                exit={
                  reducedMotion
                    ? { opacity: 0 }
                    : { opacity: 0, y: 16, scale: 0.98 }
                }
                transition={{
                  duration: 0.55,
                  delay: index * 0.06,
                  ease: elegantEase,
                }}
              >

                {/* Complete White Card */}
                <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white p-3 shadow-[0_8px_30px_rgba(0,0,0,0.045)] transition-all duration-500 group-hover:-translate-y-2 group-hover:border-cyan-300 group-hover:shadow-[0_15px_45px_rgba(6,182,212,0.13)] sm:p-4">

                  {/* Top Neon Line */}
                  <div className="absolute left-[15%] right-[15%] top-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Project Image */}
                  <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 transition-all duration-500 group-hover:border-cyan-300 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.12)]">

                    <div className="overflow-hidden [&_img]:transition-transform [&_img]:duration-700 group-hover:[&_img]:scale-[1.04]">
                      <BrowserFrame
                        src={project.image}
                        alt={`${project.title} website concept mockup`}
                      />
                    </div>

                    {/* Concept Badge */}
                    <span className="absolute right-3 top-3 rounded-full border border-cyan-200 bg-white/90 px-3 py-1.5 font-mono text-[8px] uppercase tracking-widest text-cyan-800 shadow-sm backdrop-blur-xl">
                      Concept
                    </span>
                  </div>

                  {/* Project Details */}
                  <div className="flex flex-1 flex-col px-2 pb-2 pt-6 sm:px-3">

                    {/* Category & Number */}
                    <div className="flex items-center justify-between">
                      <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-cyan-700">
                        {project.category}
                      </p>

                      <span className="font-mono text-[10px] text-zinc-400">
                        /{String(
                          projects.indexOf(project) + 1
                        ).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-zinc-900 transition-colors duration-300 group-hover:text-cyan-800 sm:text-[28px]">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 min-h-[72px] text-sm leading-7 text-zinc-500">
                      {project.description}
                    </p>

                    {/* Technology Tags */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-[10px] text-zinc-600 transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Live Demo Button */}
                    <div className="mt-auto border-t border-zinc-100 pt-5 mt-6">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-cyan-300/60 bg-cyan-50 px-5 py-3 text-xs font-semibold text-cyan-800 transition-all duration-300 hover:border-cyan-500 hover:bg-cyan-500 hover:text-white hover:shadow-[0_0_22px_rgba(6,182,212,0.22)]"
                        aria-label={`Visit ${project.title} website`}
                      >
                        View Live Project

                        <ExternalLink className="size-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                      </a>
                    </div>

                  </div>

                  {/* Bottom Neon Line */}
                  <div className="absolute bottom-0 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Footer */}
        

      </Container>
    </section>
  )
}
