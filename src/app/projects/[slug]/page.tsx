import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import FadeIn from '@/components/FadeIn'
import PageHeader from '@/components/PageHeader'
import { getProjectBySlug, projects } from '@/content'
import { getArticlesForProject } from '@/lib/blog'

type ProjectPageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return { title: 'Project' }
  return {
    title: project.title,
    description: project.tagline,
  }
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  const relatedArticles = getArticlesForProject(project.slug)

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <FadeIn>
        <PageHeader
          backHref="/projects"
          backLabel="Projects"
          index="Project"
          title={project.title}
          description={project.tagline}
        />
      </FadeIn>

      {project.image ? (
        <FadeIn
          delay={0.05}
          className="relative mb-10 aspect-[16/9] overflow-hidden rounded-2xl border border-night-400/15"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 1200px) 100vw, 1100px"
            priority
          />
        </FadeIn>
      ) : null}

      <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
        <FadeIn delay={0.08} className="space-y-8">
          <section>
            <h2 className="section-kicker">Overview</h2>
            <p className="mt-3 prose-muted">{project.description}</p>
          </section>
          {project.problem ? (
            <section>
              <h2 className="section-kicker">Problem</h2>
              <p className="mt-3 prose-muted">{project.problem}</p>
            </section>
          ) : null}
          {project.solution ? (
            <section>
              <h2 className="section-kicker">Solution</h2>
              <p className="mt-3 prose-muted">{project.solution}</p>
            </section>
          ) : null}
          {relatedArticles.length > 0 ? (
            <section>
              <h2 className="section-kicker">How I built it</h2>
              <ul className="mt-4 space-y-3">
                {relatedArticles.map((article) => (
                  <li key={article.slug}>
                    <Link
                      href={`/blog/${article.slug}`}
                      className="glass-panel block rounded-xl px-4 py-3 transition hover:border-flood-400/40"
                    >
                      <p className="font-display text-sm uppercase tracking-wide text-night-50">
                        {article.title}
                      </p>
                      <p className="mt-1 text-sm text-night-400">
                        {article.readingTimeMinutes} min read · Read case study →
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </FadeIn>

        <FadeIn delay={0.12} className="glass-panel h-fit space-y-6 rounded-2xl p-6">
          {project.role ? (
            <div>
              <p className="section-kicker">My role</p>
              <p className="mt-2 text-night-100">{project.role}</p>
            </div>
          ) : null}
          {project.result ? (
            <div>
              <p className="section-kicker">Result</p>
              <p className="mt-2 font-display text-xl uppercase tracking-wide text-flood-300">
                {project.result}
              </p>
            </div>
          ) : null}
          <div>
            <p className="section-kicker">Tech</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-3 pt-2">
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                View GitHub
              </a>
            ) : null}
            {project.demo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                Live demo
              </a>
            ) : null}
            {relatedArticles[0] ? (
              <Link href={`/blog/${relatedArticles[0].slug}`} className="btn-ghost">
                Read case study
              </Link>
            ) : null}
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
