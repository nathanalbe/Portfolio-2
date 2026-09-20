import type { Metadata } from 'next'
import Link from 'next/link'
import LabExperience from '@/scene/LabExperience'

export const metadata: Metadata = {
  title: '3D Lab',
  description:
    'React Three Fiber sandbox for stadium camera presets, avatar hotspots, and GSAP transitions.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function LabPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="section-kicker">Phase 4</p>
          <h1 className="mt-2 font-display text-4xl uppercase tracking-wide text-night-50 sm:text-5xl">
            3D Lab
          </h1>
          <p className="mt-3 max-w-2xl prose-muted">
            Isolated sandbox for React Three Fiber experiments. Production portfolio pages stay
            HTML-first until avatar and stadium assets are ready.
          </p>
        </div>
        <Link href="/" className="btn-ghost">
          Back to portfolio
        </Link>
      </div>
      <LabExperience />
    </div>
  )
}
