import type { Metadata } from 'next'
import FadeIn from '@/components/FadeIn'
import PageHeader from '@/components/PageHeader'
import ArticleCard from '@/components/ArticleCard'
import CategoryFilter, { isArticleCategory } from '@/components/CategoryFilter'
import { getAllArticles, getFeaturedArticles } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'The Press Box',
  description: 'Writing, notes, and ideas from Nathan Albe — engineering, building, career, and leadership.',
}

type BlogPageProps = {
  searchParams: Promise<{ category?: string; tag?: string }>
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams
  const categoryParam = params.category
  const tagParam = params.tag

  const all = getAllArticles()
  const featured = getFeaturedArticles()

  const filtered = all.filter((article) => {
    if (categoryParam && isArticleCategory(categoryParam)) {
      if (article.category.toLowerCase() !== categoryParam.toLowerCase()) {
        return false
      }
    }
    if (tagParam) {
      const needle = tagParam.toLowerCase()
      if (!article.tags.some((tag) => tag.toLowerCase() === needle)) {
        return false
      }
    }
    return true
  })

  const showFeatured =
    !categoryParam && !tagParam && featured.length > 0

  const latest = showFeatured
    ? filtered.filter((article) => !article.featured)
    : filtered

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <FadeIn>
        <PageHeader
          index="The Press Box"
          title="Writing / notes / ideas"
          description="Stories, analysis, and engineering commentary — how I think, not only what I built."
        />
      </FadeIn>

      <FadeIn delay={0.05} className="mb-10">
        <CategoryFilter active={categoryParam} />
        {tagParam ? (
          <p className="mt-4 text-sm text-night-400">
            Filtered by tag:{' '}
            <span className="text-flood-300">{tagParam}</span>
          </p>
        ) : null}
      </FadeIn>

      {showFeatured ? (
        <section className="mb-12 space-y-4">
          <p className="section-kicker">Featured</p>
          <div className="grid gap-6">
            {featured.map((article, index) => (
              <FadeIn key={article.slug} delay={0.04 * index}>
                <ArticleCard article={article} featured />
              </FadeIn>
            ))}
          </div>
        </section>
      ) : null}

      <section>
        <p className="section-kicker mb-4">
          {showFeatured ? 'Latest' : categoryParam || tagParam ? 'Results' : 'All writing'}
        </p>
        {latest.length === 0 && !showFeatured ? (
          <p className="prose-muted">No articles in this filter yet.</p>
        ) : (
          <ul className="grid gap-4 md:grid-cols-2">
            {(showFeatured ? latest : filtered).map((article, index) => (
              <li key={article.slug}>
                <FadeIn delay={0.03 * index}>
                  <ArticleCard article={article} />
                </FadeIn>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  )
}
