
import { useState } from 'react'
import {
  ArrowUpRight,
  ChevronDown,
  ChartNoAxesCombined,
  BarChart3,
  FileSpreadsheet,
  Database,
  Server,
  Workflow,
} from 'lucide-react'

import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import { services as existingServices } from '../data/services'

const newServices = [
  {
    title: 'Data Analysis',
    description:
      'Transform raw data into meaningful insights through data cleaning, analysis, and business intelligence.',
    icon: ChartNoAxesCombined,
  },
  {
    title: 'Power BI Dashboards',
    description:
      'Create interactive Power BI dashboards with real-time insights, KPI tracking, and advanced business reporting.',
    icon: BarChart3,
  },
  {
    title: 'Excel Dashboards',
    description:
      'Build professional Excel dashboards using Pivot Tables, advanced formulas, charts, and automated reports.',
    icon: FileSpreadsheet,
  },
  {
    title: 'Database Management',
    description:
      'Design, manage, and optimize databases for secure, scalable, and efficient data storage and retrieval.',
    icon: Database,
  },
  {
    title: 'Node.js Development',
    description:
      'Develop scalable backend applications, REST APIs, and server-side solutions using Node.js.',
    icon: Server,
  },
  {
    title: 'MongoDB Solutions',
    description:
      'Build flexible and scalable NoSQL database solutions with MongoDB, data modeling, and query optimization.',
    icon: Database,
  },

]

const updatedServices = [
  ...existingServices.filter(
    (service) =>
      !/ui[\s/-]*ux|user interface|user experience/i.test(service.title)
  ),
  ...newServices,
]

export function Services() {
  const [showAll, setShowAll] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  const handleViewAll = () => {
    setShowAll(true)
  }

  const handleShowLess = () => {
    setIsClosing(true)
  }

  const handleAnimationEnd = (index: number) => {
    if (index === updatedServices.length - 1 && isClosing) {
      setShowAll(false)
      setIsClosing(false)
    }
  }

  return (
    <section
      id="services"
      className="relative border-y border-white/[0.055] bg-[#0b0b10] py-24 sm:py-32 lg:py-36"
    >
      <style>
        {`
          @keyframes serviceReveal {
            from {
              opacity: 0;
              transform: translateY(24px) scale(0.96);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          @keyframes serviceHide {
            from {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
            to {
              opacity: 0;
              transform: translateY(18px) scale(0.96);
            }
          }

          .service-reveal {
            animation: serviceReveal 0.45s ease both;
          }

          .service-hide {
            animation: serviceHide 0.3s ease both;
          }

          @media (prefers-reduced-motion: reduce) {
            .service-reveal,
            .service-hide {
              animation: none;
            }
          }
        `}
      </style>

      <Container>
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="What we do"
            title={
              <>
                Everything your digital
                <br className="hidden sm:block" />
                presence needs.
              </>
            }
            description="From data analytics and interactive dashboards to scalable backend development, we bring strategy, technology, and engineering together under one roof."
          />

          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600 lg:pb-2">
            01—{String(updatedServices.length).padStart(2, '0')} / Our capabilities
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {updatedServices.map((service, index) => {
            const isExtra = index >= 4

            if (isExtra && !showAll) return null

            return (
              <div
                key={service.title}
                onAnimationEnd={() => handleAnimationEnd(index)}
                style={{
                  animationDelay: isClosing
                    ? `${(updatedServices.length - 1 - index) * 0.045}s`
                    : isExtra
                      ? `${(index - 4) * 0.09}s`
                      : '0s',
                }}
                className={`h-full ${
                  isClosing && isExtra
                    ? 'service-hide'
                    : isExtra
                      ? 'service-reveal'
                      : ''
                }`}
              >
                <article className="service-card group relative flex h-full min-h-[260px] flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-violet-300/20 hover:bg-violet-400/[0.035]">

                  <div className="flex items-start justify-between">
                    <span className="grid size-11 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.035] text-zinc-300 transition-colors duration-300 group-hover:border-violet-300/20 group-hover:bg-violet-400/10 group-hover:text-violet-300">
                      <service.icon
                        className="size-5"
                        strokeWidth={1.7}
                      />
                    </span>

                    <span className="font-mono text-[10px] text-zinc-700">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="mt-8 text-lg font-semibold leading-snug tracking-[-0.025em] text-white">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-zinc-500">
                    {service.description}
                  </p>

                  {/* <a
                    href="#contact"
                    aria-label={`Discuss ${service.title}`}
                    className="mt-auto flex items-center gap-1.5 pt-5 text-xs font-medium text-zinc-500 transition-colors group-hover:text-violet-300"
                  >
                    Discuss your project

                    <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a> */}
                </article>
              </div>
            )
          })}
        </div>

        {/* View All / Show Less */}
        {updatedServices.length > 4 && (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              disabled={isClosing}
              onClick={showAll ? handleShowLess : handleViewAll}
              className="group inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-violet-400/[0.06] px-7 py-3 text-sm font-medium text-violet-300 transition-all duration-300 hover:border-violet-300/40 hover:bg-violet-400/10 disabled:opacity-60"
            >
              {showAll ? 'Show Less' : 'View All Services'}

              <ChevronDown
                className={`size-4 transition-transform duration-300 ${
                  showAll ? 'rotate-180' : 'group-hover:translate-y-0.5'
                }`}
              />
            </button>
          </div>
        )}
      </Container>
    </section>
  )
}
