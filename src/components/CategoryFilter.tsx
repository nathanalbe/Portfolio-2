import Link from 'next/link'
import { ARTICLE_CATEGORIES } from '@/lib/blog'
import type { ArticleCategory } from '@/content/schemas'

type CategoryFilterProps = {
  active?: string
}

export default function CategoryFilter({ active }: CategoryFilterProps) {
  const normalized = active?.toLowerCase()

  return (
    <nav aria-label="Blog categories" className="flex flex-wrap gap-2">
      <Link
        href="/blog"
        className={`rounded-md px-3 py-2 font-display text-xs uppercase tracking-[0.14em] transition ${
          !normalized
            ? 'bg-flood-500/15 text-flood-300'
            : 'border border-night-400/20 text-night-300 hover:text-night-50'
        }`}
        aria-current={!normalized ? 'page' : undefined}
      >
        All
      </Link>
      {ARTICLE_CATEGORIES.map((category) => {
        const isActive = normalized === category.toLowerCase()
        return (
          <Link
            key={category}
            href={`/blog?category=${encodeURIComponent(category)}`}
            className={`rounded-md px-3 py-2 font-display text-xs uppercase tracking-[0.14em] transition ${
              isActive
                ? 'bg-flood-500/15 text-flood-300'
                : 'border border-night-400/20 text-night-300 hover:text-night-50'
            }`}
            aria-current={isActive ? 'page' : undefined}
          >
            {category}
          </Link>
        )
      })}
    </nav>
  )
}

export function isArticleCategory(value: string): value is ArticleCategory {
  return ARTICLE_CATEGORIES.some(
    (category) => category.toLowerCase() === value.toLowerCase()
  )
}
