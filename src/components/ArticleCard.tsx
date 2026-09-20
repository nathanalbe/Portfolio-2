import Link from 'next/link'
import type { Article } from '@/content/schemas'

type ArticleCardProps = {
  article: Article
  featured?: boolean
}

export default function ArticleCard({ article, featured = false }: ArticleCardProps) {
  return (
    <Link
      href={`/blog/${article.slug}`}
      className={`glass-panel group block rounded-2xl transition hover:border-flood-400/40 ${
        featured ? 'p-6 sm:p-8' : 'p-5 sm:p-6'
      }`}
    >
      <div className="flex flex-wrap items-center gap-3">
        <span className="section-kicker">{article.category}</span>
        {featured ? (
          <span className="rounded border border-flood-400/40 px-2 py-0.5 font-display text-[10px] uppercase tracking-[0.16em] text-flood-300">
            Featured
          </span>
        ) : null}
      </div>
      <h2
        className={`mt-3 font-display uppercase tracking-wide text-night-50 group-hover:text-flood-200 ${
          featured ? 'text-2xl sm:text-3xl' : 'text-xl'
        }`}
      >
        {article.title}
      </h2>
      <p className={`mt-3 text-night-300 ${featured ? 'max-w-3xl text-base sm:text-lg' : 'text-sm'}`}>
        {article.description}
      </p>
      <div className="mt-5 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.14em] text-night-400">
        <time dateTime={article.date}>
          {new Date(article.date).toLocaleDateString('en-US', {
            month: 'short',
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
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      ) : null}
      <p className="mt-5 font-display text-xs uppercase tracking-[0.16em] text-flood-300">
        Read →
      </p>
    </Link>
  )
}
