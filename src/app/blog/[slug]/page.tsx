import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import FadeIn from '@/components/FadeIn'
import { mdxComponents } from '@/components/mdx-components'
import { getProjectBySlug } from '@/content'
import {
  getAdjacentArticles,
  getAllArticles,
  getArticleBySlug,
} from '@/lib/blog'
import { profile } from '@/content'

type ArticlePageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) return { title: 'Article' }

  const title = article.seoTitle ?? article.title
  const description = article.seoDescription ?? article.description

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: article.date,
      tags: article.tags,
    },
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) notFound()

  const relatedProject = article.relatedProject
    ? getProjectBySlug(article.relatedProject)
    : undefined
  const { previous, next } = getAdjacentArticles(slug)

  return (
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <FadeIn>
        <Link
          href="/blog"
          className="inline-flex text-sm text-night-400 transition hover:text-flood-300"
        >
          ← The Press Box
        </Link>
        <p className="section-kicker mt-6">{article.category}</p>
        <h1 className="mt-3 font-display text-4xl font-semibold uppercase tracking-wide text-night-50 sm:text-5xl">
          {article.title}
        </h1>
        <p className="mt-4 text-lg text-night-300">{article.description}</p>
        <div className="mt-6 flex flex-wrap items-center gap-3 border-b border-night-400/15 pb-6 text-sm text-night-400">
          <span>{profile.name}</span>
          <span aria-hidden>·</span>
          <time dateTime={article.date}>
            {new Date(article.date).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </time>
          <span aria-hidden>·</span>
          <span>{article.readingTimeMinutes} min read</span>
        </div>
        {article.tags.length > 0 ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog?tag=${encodeURIComponent(tag)}`}
                className="tag transition hover:border-flood-400/40 hover:text-flood-300"
              >
                {tag}
              </Link>
            ))}
          </div>
        ) : null}
      </FadeIn>

      <FadeIn delay={0.08} className="mt-10">
        <MDXRemote
          source={article.content}
          components={mdxComponents}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
            },
          }}
        />
      </FadeIn>

      {relatedProject ? (
        <FadeIn delay={0.1} className="mt-12">
          <aside className="glass-panel rounded-2xl p-6">
            <p className="section-kicker">Related project</p>
            <h2 className="mt-2 font-display text-2xl uppercase tracking-wide text-night-50">
              {relatedProject.title}
            </h2>
            <p className="mt-2 text-night-300">{relatedProject.tagline}</p>
            <Link
              href={`/projects/${relatedProject.slug}`}
              className="btn-primary mt-5 inline-flex"
            >
              Explore {relatedProject.title}
            </Link>
          </aside>
        </FadeIn>
      ) : null}

      <nav
        aria-label="Adjacent articles"
        className="mt-14 flex flex-col gap-4 border-t border-night-400/15 pt-8 sm:flex-row sm:justify-between"
      >
        {previous ? (
          <Link
            href={`/blog/${previous.slug}`}
            className="text-sm text-night-300 transition hover:text-flood-300"
          >
            ← {previous.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/blog/${next.slug}`}
            className="text-sm text-night-300 transition hover:text-flood-300 sm:text-right"
          >
            {next.title} →
          </Link>
        ) : null}
      </nav>
    </article>
  )
}
