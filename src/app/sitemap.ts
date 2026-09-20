import type { MetadataRoute } from 'next'
import { projects } from '@/content'
import { getAllArticles } from '@/lib/blog'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://nathanalbe.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/about',
    '/experience',
    '/projects',
    '/skills',
    '/leadership',
    '/education',
    '/blog',
    '/contact',
    '/resume',
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: path === '' || path === '/blog' ? 1 : 0.7,
  }))

  const projectRoutes = projects.map((project) => ({
    url: `${siteUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const articleRoutes = getAllArticles().map((article) => ({
    url: `${siteUrl}/blog/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: 'monthly' as const,
    priority: article.featured ? 0.9 : 0.7,
  }))

  return [...staticRoutes, ...projectRoutes, ...articleRoutes]
}
