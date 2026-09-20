import { getAllArticles } from '@/lib/blog'
import { profile } from '@/content'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://nathanalbe.com'

function escapeXml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;')
}

export async function GET() {
  const articles = getAllArticles()

  const items = articles
    .map((article) => {
      const url = `${siteUrl}/blog/${article.slug}`
      return `
    <item>
      <title>${escapeXml(article.title)}</title>
      <link>${url}</link>
      <guid>${url}</guid>
      <pubDate>${new Date(article.date).toUTCString()}</pubDate>
      <description>${escapeXml(article.description)}</description>
      <category>${escapeXml(article.category)}</category>
    </item>`
    })
    .join('')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(`${profile.name} — The Press Box`)}</title>
    <link>${siteUrl}/blog</link>
    <description>${escapeXml('Writing, notes, and ideas from Nathan Albe.')}</description>
    <language>en-us</language>${items}
  </channel>
</rss>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  })
}
