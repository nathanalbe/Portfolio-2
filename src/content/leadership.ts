import { leadershipSchema, type Leadership } from './schemas'

const raw = [
  {
    id: 'colorstack',
    title: 'ColorStack @ George Mason',
    organization: 'ColorStack',
    role: 'Founding President',
    period: '2024 — Present',
    mission:
      'Built a community supporting students pursuing careers in technology — workshops, industry partnerships, and peer mentorship from day one.',
    stats: [
      { label: 'Members', value: '150+' },
      { label: 'Founded', value: '2024' },
    ],
    partners: ['Visa', 'Deloitte', 'AWS', 'WillowTree', 'ETS'],
    highlights: [
      'Founded and scaled the chapter from zero to 150+ members.',
      'Partnered with industry teams for recruiting, mentorship, and technical workshops.',
    ],
  },
]

export const leadership: Leadership[] = raw.map((item) =>
  leadershipSchema.parse(item)
)
