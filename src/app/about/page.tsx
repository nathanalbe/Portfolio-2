import type { Metadata } from 'next'
import Link from 'next/link'
import FadeIn from '@/components/FadeIn'
import PageHeader from '@/components/PageHeader'
import { personalInterests, profile } from '@/content'

export const metadata: Metadata = {
  title: 'About',
  description: profile.shortBio,
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <FadeIn>
        <PageHeader
          index="01 / About"
          title="Hey, I'm Nathan."
          description={profile.bio}
        />
      </FadeIn>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <FadeIn delay={0.08} className="glass-panel rounded-2xl p-6 sm:p-8">
          <p className="section-kicker">Currently</p>
          <h2 className="mt-3 font-display text-2xl uppercase tracking-wide text-night-50">
            {profile.title}
          </h2>
          <p className="mt-2 text-night-300">{profile.location}</p>
          <p className="mt-6 prose-muted">{profile.shortBio}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {profile.socials
              .filter((social) => ['LinkedIn', 'GitHub', 'Email'].includes(social.label))
              .map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={
                    social.href.startsWith('mailto:')
                      ? undefined
                      : 'noopener noreferrer'
                  }
                  className="btn-ghost"
                >
                  {social.label}
                </a>
              ))}
            <Link href="/resume" className="btn-primary">
              Resume
            </Link>
          </div>
        </FadeIn>

        <FadeIn delay={0.12} className="glass-panel rounded-2xl p-6 sm:p-8">
          <p className="section-kicker">Off the field</p>
          <h2 className="mt-3 font-display text-2xl uppercase tracking-wide text-night-50">
            When I&apos;m not coding
          </h2>
          <ul className="mt-6 space-y-4">
            {personalInterests.map((interest) => (
              <li key={interest.id} className="border-b border-night-400/10 pb-4 last:border-0">
                <p className="font-display text-sm uppercase tracking-[0.14em] text-flood-300">
                  {interest.label}
                </p>
                {interest.description ? (
                  <p className="mt-1 text-sm text-night-300">{interest.description}</p>
                ) : null}
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </div>
  )
}
