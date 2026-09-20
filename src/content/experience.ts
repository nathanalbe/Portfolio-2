import { experienceSchema, type Experience } from './schemas'

const raw = [
  {
    id: 'airtable',
    title: 'Software Engineer',
    company: 'Airtable',
    location: 'San Francisco Bay Area',
    period: '2026 — Present',
    startYear: 2026,
    description:
      'Building mobile and web product experiences at Airtable. Focused on iOS, cross-platform delivery, and shipping software people rely on every day.',
    highlights: [
      'Contributing to mobile and web surfaces used by teams to organize critical work.',
      'Collaborating across product and engineering to ship polished, accessible interfaces.',
    ],
    technologies: ['iOS', 'Swift', 'TypeScript', 'React', 'Web'],
    link: 'https://www.airtable.com/',
    focus: ['Mobile', 'iOS', 'Web'],
  },
  {
    id: 'pinterest',
    title: 'Software Engineer Intern',
    company: 'Pinterest',
    location: 'Remote',
    period: 'May 2025 — Aug 2025',
    startYear: 2025,
    description:
      'Developed features for the Pinterest iOS app serving 50+ million users. Redesigned metadata layouts boosting clickthrough rates by 13% and built dynamic color filters increasing engagement by 17%. Developed GraphQL APIs and iOS features in Objective-C and Python.',
    technologies: ['Objective-C', 'Python', 'GraphQL', 'iOS Development'],
    link: 'https://www.linkedin.com/posts/nathan-albe_pintern-pinterest-activity-7360671358873128963-obVd/',
    logo: '/assets/Pinterest_logo.png',
    focus: ['Mobile', 'iOS', 'GraphQL'],
  },
  {
    id: 'lockheed',
    title: 'Systems Engineering Co-op',
    company: 'Lockheed Martin',
    location: 'Owego, New York',
    period: 'Aug 2024 — Jan 2025',
    startYear: 2024,
    description:
      'Enhanced system reliability by automating Jenkins builds, containerizing internal tools with Docker, and developing Java UI components that streamlined workflows and reduced deployment time by 30%.',
    technologies: ['Java', 'Docker', 'Jenkins', 'Linux/Unix', 'JTheme'],
    link: 'https://www.lockheedmartin.com/en-us/who-we-are/business-areas/rotary-and-mission-systems.html',
    logo: '/assets/LMT_logo.png',
    focus: ['Infrastructure', 'DevOps', 'Java'],
  },
  {
    id: 'afc',
    title: 'Software Engineer Intern',
    company: 'Applied Fundamentals Consulting',
    location: 'Reston, Virginia',
    period: 'Jun 2024 — Aug 2024',
    startYear: 2024,
    description:
      'Developed a VueJS + Quasar feedback web app with a built-in bug tracking and reporting system, cutting issue resolution time by 40% and earning 90% positive client feedback. Designed a PostgreSQL backend and collaborated in Agile sprints to streamline QA and product iteration.',
    technologies: ['VueJS', 'Quasar', 'PostgreSQL', 'Agile/Scrum'],
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7228747069107163136/',
    logo: '/assets/AFC_logo.jpg',
    focus: ['Full-stack', 'Web'],
  },
  {
    id: 'gmu-research',
    title: 'iOS/Mobile Development Research Assistant',
    company: 'George Mason University',
    location: 'Fairfax, Virginia',
    period: 'Oct 2022 — May 2023',
    startYear: 2022,
    description:
      'Built an iOS + watchOS app as part of a $712K federally funded project supporting neurodiverse young adults. Integrated HealthKit and Firebase to track heart rate and deliver real-time interventions, achieving 86% positive feedback in a pilot with 20+ participants across the D.C. area.',
    technologies: ['SwiftUI', 'HealthKit', 'Firebase', 'iOS/watchOS', 'Research'],
    link: 'https://www.gmu.edu/news/2021-11/new-smartwatch-app-help-can-be-close-your-wrist',
    logo: '/assets/GMU_logo.jpg',
    focus: ['Mobile', 'Research'],
  },
]

export const experiences: Experience[] = raw.map((item) =>
  experienceSchema.parse(item)
)
