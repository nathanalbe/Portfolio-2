import type { Metadata } from 'next'
import FadeIn from '@/components/FadeIn'
import PageHeader from '@/components/PageHeader'
import { education } from '@/content'

export const metadata: Metadata = {
  title: 'Education',
  description: 'Academic foundation and certifications.',
}

export default function EducationPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <FadeIn>
        <PageHeader
          index="06 / Education"
          title="Academy & foundation"
          description="Where the craft started — coursework, credentials, and the path into engineering."
        />
      </FadeIn>

      <div className="space-y-6">
        {education.map((item, index) => (
          <FadeIn key={item.id} delay={0.05 * index}>
            <article className="glass-panel rounded-2xl p-6 sm:p-8">
              <p className="section-kicker">{item.period}</p>
              <h2 className="mt-2 font-display text-3xl uppercase tracking-wide text-night-50">
                {item.school}
              </h2>
              <p className="mt-2 text-lg text-flood-300">{item.degree}</p>
              {item.minor ? (
                <p className="mt-1 text-night-300">Minor · {item.minor}</p>
              ) : null}
              {item.location ? (
                <p className="mt-1 text-sm text-night-400">{item.location}</p>
              ) : null}

              {item.certifications?.length ? (
                <div className="mt-8">
                  <p className="section-kicker">Certifications</p>
                  <ul className="mt-3 space-y-2">
                    {item.certifications.map((cert) => (
                      <li key={cert} className="text-night-200">
                        {cert}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {item.coursework?.length ? (
                <div className="mt-8">
                  <p className="section-kicker">Coursework</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {item.coursework.map((course) => (
                      <li key={course} className="tag">
                        {course}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </article>
          </FadeIn>
        ))}
      </div>
    </div>
  )
}
