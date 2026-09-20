import { educationSchema, type Education } from './schemas'

const raw = [
  {
    id: 'gmu',
    school: 'George Mason University',
    degree: 'B.S. Computer Science',
    minor: 'Computational Data Science',
    period: '2022 — 2026',
    location: 'Fairfax, Virginia',
    certifications: ['AWS Certified Cloud Practitioner'],
    coursework: [
      'Data Structures & Algorithms',
      'Operating Systems',
      'Computer Systems',
      'Databases',
    ],
  },
]

export const education: Education[] = raw.map((item) =>
  educationSchema.parse(item)
)
