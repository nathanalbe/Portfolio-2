import type { Metadata } from 'next'
import { Barlow_Condensed, Source_Sans_3 } from 'next/font/google'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import { profile } from '@/content'
import './globals.css'

const display = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
})

const body = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: `${profile.name} — ${profile.title}`,
    template: `%s — ${profile.name}`,
  },
  description: profile.shortBio,
  openGraph: {
    title: `${profile.name} — ${profile.title}`,
    description: profile.shortBio,
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-sans">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <div className="site-shell flex min-h-screen flex-col">
          <SiteNav />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  )
}
