import type { Metadata } from 'next'
import Image from 'next/image'
import FadeIn from '@/components/FadeIn'
import PageHeader from '@/components/PageHeader'
import { experiences } from '@/content'

export const metadata: Metadata = {
  title: 'Experience',
  description: 'Professional experience across Airtable, Pinterest, Lockheed Martin, and more.',
}

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <FadeIn>
        <PageHeader
          index="02 / Experience"
          title="Career timeline"
          description="Roles, impact, and the stack behind the work."
        />
      </FadeIn>

      <ol className="space-y-6">
        {experiences.map((exp, index) => (
          <FadeIn key={exp.id} delay={0.05 * index}>
            <li className="glass-panel rounded-2xl p-5 sm:p-7">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-start">
                {exp.logo ? (
                  <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl border border-night-400/20 bg-night-900 p-2">
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      fill
                      className="object-contain p-1"
                      sizes="64px"
                    />
                  </div>
                ) : (
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl border border-flood-400/30 bg-flood-500/10 font-display text-xl text-flood-300">
                    {exp.company.slice(0, 1)}
                  </div>
                )}

                <div className="min-w-0 flex-1 space-y-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <div>
                      <p className="font-display text-xs uppercase tracking-[0.2em] text-flood-400">
                        {exp.startYear}
                      </p>
                      <h2 className="mt-1 font-display text-2xl uppercase tracking-wide text-night-50">
                        {exp.title}
                      </h2>
                      <p className="mt-1 text-night-300">
                        <span className="text-flood-300">{exp.company}</span>
                        {' · '}
                        {exp.location}
                      </p>
                    </div>
                    <p className="text-sm text-night-400">{exp.period}</p>
                  </div>

                  {exp.focus?.length ? (
                    <p className="text-sm uppercase tracking-[0.14em] text-night-400">
                      {exp.focus.join(' · ')}
                    </p>
                  ) : null}

                  <p className="leading-relaxed text-night-200">{exp.description}</p>

                  {exp.highlights?.length ? (
                    <ul className="list-disc space-y-2 pl-5 text-night-300">
                      {exp.highlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {exp.link ? (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] items-center text-sm text-flood-300 transition hover:text-flood-200"
                    >
                      View details →
                    </a>
                  ) : null}
                </div>
              </div>
            </li>
          </FadeIn>
        ))}
      </ol>
    </div>
  )
}
