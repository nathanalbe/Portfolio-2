import Link from 'next/link'
import { profile } from '@/content'

export default function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-night-400/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="font-display text-sm uppercase tracking-[0.2em] text-night-100">
            {profile.name}
          </p>
          <p className="mt-1 text-sm text-night-400">{profile.title}</p>
        </div>
        <ul className="flex flex-wrap gap-4">
          {profile.socials
            .filter((social) => social.label !== 'Instagram')
            .map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={
                    social.href.startsWith('mailto:')
                      ? undefined
                      : 'noopener noreferrer'
                  }
                  className="text-sm text-night-300 transition hover:text-flood-300"
                >
                  {social.label}
                </a>
              </li>
            ))}
          <li>
            <Link href="/resume" className="text-sm text-night-300 transition hover:text-flood-300">
              Resume
            </Link>
          </li>
          <li>
            <Link href="/lab" className="text-sm text-night-300 transition hover:text-flood-300">
              3D Lab
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}
