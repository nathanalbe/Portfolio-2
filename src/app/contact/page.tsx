import type { Metadata } from 'next'
import Link from 'next/link'
import FadeIn from '@/components/FadeIn'
import PageHeader from '@/components/PageHeader'
import { profile } from '@/content'

export const metadata: Metadata = {
  title: 'Contact',
  description: `Get in touch with ${profile.name}.`,
}

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <FadeIn>
        <PageHeader
          index="Contact"
          title="Let's talk"
          description="Open to conversations about engineering roles, collaboration, and building products people use."
        />
      </FadeIn>

      <FadeIn delay={0.08} className="glass-panel max-w-2xl rounded-2xl p-6 sm:p-8">
        <a
          href={`mailto:${profile.email}`}
          className="font-display text-2xl uppercase tracking-wide text-night-50 transition hover:text-flood-300 sm:text-3xl"
        >
          {profile.email}
        </a>
        <p className="mt-4 text-night-300">{profile.location}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          {profile.socials
            .filter((social) => ['LinkedIn', 'GitHub'].includes(social.label))
            .map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
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
    </div>
  )
}
