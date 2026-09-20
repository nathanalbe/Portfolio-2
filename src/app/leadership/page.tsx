import type { Metadata } from 'next'
import FadeIn from '@/components/FadeIn'
import PageHeader from '@/components/PageHeader'
import { leadership } from '@/content'

export const metadata: Metadata = {
  title: 'Leadership',
  description: 'Community leadership including ColorStack at George Mason.',
}

export default function LeadershipPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <FadeIn>
        <PageHeader
          index="05 / Leadership"
          title="Community & leadership"
          description="Building rooms where students can grow careers in technology."
        />
      </FadeIn>

      <div className="space-y-6">
        {leadership.map((item, index) => (
          <FadeIn key={item.id} delay={0.05 * index}>
            <article className="glass-panel rounded-2xl p-6 sm:p-8">
              <p className="section-kicker">{item.organization}</p>
              <h2 className="mt-2 font-display text-3xl uppercase tracking-wide text-night-50">
                {item.title}
              </h2>
              <p className="mt-2 text-flood-300">
                {item.role} · {item.period}
              </p>
              <p className="mt-6 prose-muted max-w-3xl">{item.mission}</p>

              {item.stats?.length ? (
                <dl className="mt-8 grid grid-cols-2 gap-4 sm:max-w-md">
                  {item.stats.map((stat) => (
                    <div key={stat.label} className="rounded-xl border border-night-400/15 bg-night-950/40 p-4">
                      <dt className="text-xs uppercase tracking-[0.16em] text-night-400">
                        {stat.label}
                      </dt>
                      <dd className="mt-1 font-display text-3xl text-flood-300">
                        {stat.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              ) : null}

              {item.partners?.length ? (
                <div className="mt-8">
                  <p className="section-kicker">Industry partners</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {item.partners.map((partner) => (
                      <li key={partner} className="tag">
                        {partner}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {item.highlights?.length ? (
                <ul className="mt-8 list-disc space-y-2 pl-5 text-night-300">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          </FadeIn>
        ))}
      </div>
    </div>
  )
}
