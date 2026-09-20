import type { Metadata } from 'next'
import FadeIn from '@/components/FadeIn'
import PageHeader from '@/components/PageHeader'
import { skillGroups } from '@/content'

export const metadata: Metadata = {
  title: 'Skills',
  description: 'Languages, mobile, backend, and infrastructure tools.',
}

export default function SkillsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <FadeIn>
        <PageHeader
          index="04 / Skills"
          title="Tools I build with"
          description="Organized by craft — not arbitrary ratings. Evidence linking to projects and experience comes next."
        />
      </FadeIn>

      <div className="grid gap-6 md:grid-cols-2">
        {skillGroups.map((group, index) => (
          <FadeIn key={group.id} delay={0.05 * index}>
            <section className="glass-panel h-full rounded-2xl p-6 sm:p-7">
              <h2 className="font-display text-xl uppercase tracking-wide text-flood-300">
                {group.title}
              </h2>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li key={skill.id}>
                    <span className="tag">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </section>
          </FadeIn>
        ))}
      </div>
    </div>
  )
}
