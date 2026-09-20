import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import {
  articleFrontmatterSchema,
  type Article,
  type ArticleCategory,
} from '@/content/schemas'

const BLOG_DIR = path.join(process.cwd(), 'content/blog')

function estimateReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.ceil(words / 220))
}

function readArticleFile(filename: string): Article {
  const slug = filename.replace(/\.mdx$/, '')
  const raw = fs.readFileSync(path.join(BLOG_DIR, filename), 'utf8')
  const { data, content } = matter(raw)
  const frontmatter = articleFrontmatterSchema.parse(data)

  return {
    ...frontmatter,
    slug,
    content,
    readingTimeMinutes: estimateReadingTime(content),
  }
}

export function getAllArticles(options?: {
  includeDrafts?: boolean
}): Article[] {
  if (!fs.existsSync(BLOG_DIR)) return []

  const includeDrafts = options?.includeDrafts ?? false

  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith('.mdx'))
    .map(readArticleFile)
    .filter((article) => includeDrafts || !article.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getArticleBySlug(
  slug: string,
  options?: { includeDrafts?: boolean }
): Article | undefined {
  return getAllArticles(options).find((article) => article.slug === slug)
}

export function getArticlesByCategory(category: ArticleCategory): Article[] {
  return getAllArticles().filter((article) => article.category === category)
}

export function getArticlesByTag(tag: string): Article[] {
  const normalized = tag.toLowerCase()
  return getAllArticles().filter((article) =>
    article.tags.some((item) => item.toLowerCase() === normalized)
  )
}

export function getFeaturedArticles(): Article[] {
  return getAllArticles().filter((article) => article.featured)
}

export function getArticlesForProject(projectSlug: string): Article[] {
  return getAllArticles().filter(
    (article) => article.relatedProject === projectSlug
  )
}

export function getAdjacentArticles(slug: string): {
  previous: Article | null
  next: Article | null
} {
  const articles = getAllArticles()
  const index = articles.findIndex((article) => article.slug === slug)
  if (index === -1) return { previous: null, next: null }

  return {
    previous: articles[index + 1] ?? null,
    next: articles[index - 1] ?? null,
  }
}

export const ARTICLE_CATEGORIES: ArticleCategory[] = [
  'Engineering',
  'Building',
  'Career',
  'Leadership',
  'Personal',
]
