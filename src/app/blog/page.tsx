import type { Metadata } from 'next'
import Link from 'next/link'
import FadeIn from '@/components/FadeIn'
import PageHeader from '@/components/PageHeader'

export const metadata: Metadata = {
  title: 'The Press Box',
  description: 'Writing, notes, and ideas — coming soon.',
}

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <FadeIn>
        <PageHeader
          index="The Press Box"
          title="Writing / notes / ideas"
          description="The Press Box is where stories, analysis, and engineering commentary will live. MDX articles ship in the next phase."
        />
      </FadeIn>

      <FadeIn delay={0.08} className="glass-panel max-w-3xl rounded-2xl p-6 sm:p-8">
        <p className="section-kicker">Coming soon</p>
        <h2 className="mt-3 font-display text-2xl uppercase tracking-wide text-night-50">
          Featured writing is on deck
        </h2>
        <p className="mt-4 prose-muted">
          Planned categories: Engineering, Building, Career, Leadership, and Personal — tied back to
          projects like GridWatch and the 3D portfolio build itself.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/projects/gridwatch" className="btn-primary">
            Explore GridWatch
          </Link>
          <Link href="/about" className="btn-ghost">
            About Nathan
          </Link>
        </div>
      </FadeIn>
    </div>
  )
}
