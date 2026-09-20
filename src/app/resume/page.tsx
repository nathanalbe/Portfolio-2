import type { Metadata } from 'next'
import Link from 'next/link'
import FadeIn from '@/components/FadeIn'
import PageHeader from '@/components/PageHeader'
import { profile } from '@/content'

export const metadata: Metadata = {
  title: 'Resume',
  description: `Resume for ${profile.name}.`,
}

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <FadeIn>
        <PageHeader
          index="Resume"
          title="Resume"
          description="PDF hosting comes next. For now, reach out directly or grab the latest from LinkedIn."
        />
      </FadeIn>

      <FadeIn delay={0.08} className="glass-panel max-w-2xl space-y-6 rounded-2xl p-6 sm:p-8">
        <p className="prose-muted">
          A downloadable resume PDF will live at this route. Until then, use LinkedIn or email for the
          latest version.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://www.linkedin.com/in/nathan-albe"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            LinkedIn profile
          </a>
          <a href={`mailto:${profile.email}`} className="btn-ghost">
            Email me
          </a>
          <Link href="/experience" className="btn-ghost">
            View experience
          </Link>
        </div>
      </FadeIn>
    </div>
  )
}
