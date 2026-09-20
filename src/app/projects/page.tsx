import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import FadeIn from '@/components/FadeIn'
import PageHeader from '@/components/PageHeader'
import { projects } from '@/content'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Selected engineering projects and builds.',
}

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <FadeIn>
        <PageHeader
          index="03 / Projects"
          title="Things I&apos;ve built"
          description="Featured work with room to grow — starting with GridWatch."
        />
      </FadeIn>

      <ul className="grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <FadeIn key={project.id} delay={0.06 * index}>
            <li>
              <Link
                href={`/projects/${project.slug}`}
                className="glass-panel group block overflow-hidden rounded-2xl transition hover:border-flood-400/40"
              >
                {project.image ? (
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-night-400/10">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 1024px) 100vw, 480px"
                    />
                  </div>
                ) : null}
                <div className="space-y-3 p-6">
                  <p className="section-kicker">{project.category}</p>
                  <h2 className="font-display text-2xl uppercase tracking-wide text-night-50">
                    {project.title}
                  </h2>
                  <p className="text-night-300">{project.tagline}</p>
                  {project.result ? (
                    <p className="font-display text-xs uppercase tracking-[0.16em] text-flood-300">
                      {project.result}
                    </p>
                  ) : null}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </li>
          </FadeIn>
        ))}
      </ul>
    </div>
  )
}
