import Image from 'next/image'
import Link from 'next/link'
import FadeIn from '@/components/FadeIn'
import { experiences, profile, projects } from '@/content'
import { getFeaturedArticles } from '@/lib/blog'
import { primaryNav } from '@/lib/nav'

export default function HomePage() {
  const currentRole = experiences[0]
  const featured = projects.find((project) => project.featured) ?? projects[0]
  const latestWriting = getFeaturedArticles().slice(0, 2)

  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="mx-auto grid min-h-[calc(100vh-4.5rem)] max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-20">
          <FadeIn className="space-y-8">
            <p className="section-kicker">{profile.title}</p>
            <h1 className="font-display text-6xl font-semibold uppercase leading-[0.92] tracking-wide text-night-50 sm:text-7xl lg:text-8xl">
              {profile.name}
            </h1>
            <p className="max-w-xl text-lg text-night-300 sm:text-xl">
              {profile.headline}
            </p>
            <p className="max-w-xl prose-muted">{profile.shortBio}</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/experience" className="btn-primary">
                Explore work
              </Link>
              <Link href="/resume" className="btn-ghost">
                Resume
              </Link>
            </div>
            <p className="text-sm text-night-400">
              Currently {currentRole.title} at{' '}
              <span className="text-flood-300">{currentRole.company}</span>
              {' · '}
              {profile.location}
            </p>
          </FadeIn>

          <FadeIn delay={0.12} className="relative">
            <div className="glass-panel relative overflow-hidden rounded-2xl p-4 sm:p-5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
                <Image
                  src={profile.headshot}
                  alt={`${profile.name} headshot`}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 420px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-display text-xs uppercase tracking-[0.22em] text-flood-300">
                    Player card
                  </p>
                  <p className="mt-1 font-display text-2xl uppercase tracking-wide text-night-50">
                    {profile.name}
                  </p>
                  <p className="text-sm text-night-300">
                    {currentRole.company} · {profile.title}
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="border-t border-night-400/10">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="section-kicker">Navigate</p>
              <h2 className="mt-2 font-display text-3xl uppercase tracking-wide text-night-50">
                Portfolio sections
              </h2>
            </div>
            <Link href="/blog" className="hidden text-sm text-night-400 transition hover:text-flood-300 sm:inline">
              Press Box ↑ Latest writing
            </Link>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="glass-panel flex min-h-[72px] items-center justify-between rounded-xl px-5 py-4 transition hover:border-flood-400/40"
                >
                  <span className="font-display text-sm uppercase tracking-[0.18em] text-night-100">
                    {item.label}
                  </span>
                  <span aria-hidden className="text-flood-400">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {featured ? (
        <section className="border-t border-night-400/10">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
            <div>
              <p className="section-kicker">Featured project</p>
              <h2 className="mt-2 font-display text-4xl uppercase tracking-wide text-night-50">
                {featured.title}
              </h2>
              <p className="mt-4 prose-muted max-w-2xl">{featured.tagline}</p>
              <p className="mt-3 max-w-2xl text-night-300">{featured.description}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href={`/projects/${featured.slug}`} className="btn-primary">
                  View project
                </Link>
                {featured.github ? (
                  <a
                    href={featured.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost"
                  >
                    GitHub
                  </a>
                ) : null}
                {featured.relatedArticleSlugs?.[0] ? (
                  <Link
                    href={`/blog/${featured.relatedArticleSlugs[0]}`}
                    className="btn-ghost"
                  >
                    Read case study
                  </Link>
                ) : null}
              </div>
            </div>
            {featured.image ? (
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-night-400/15">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 420px"
                />
              </div>
            ) : null}
          </div>
        </section>
      ) : null}

      {latestWriting.length > 0 ? (
        <section className="border-t border-night-400/10">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <p className="section-kicker">The Press Box</p>
                <h2 className="mt-2 font-display text-3xl uppercase tracking-wide text-night-50">
                  Latest writing
                </h2>
              </div>
              <Link href="/blog" className="text-sm text-night-400 transition hover:text-flood-300">
                All articles →
              </Link>
            </div>
            <ul className="grid gap-4 md:grid-cols-2">
              {latestWriting.map((article) => (
                <li key={article.slug}>
                  <Link
                    href={`/blog/${article.slug}`}
                    className="glass-panel block rounded-2xl p-5 transition hover:border-flood-400/40"
                  >
                    <p className="section-kicker">{article.category}</p>
                    <h3 className="mt-2 font-display text-xl uppercase tracking-wide text-night-50">
                      {article.title}
                    </h3>
                    <p className="mt-2 text-sm text-night-300">{article.description}</p>
                    <p className="mt-4 text-xs uppercase tracking-[0.14em] text-night-400">
                      {article.readingTimeMinutes} min read
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}
    </div>
  )
}
