import { projectSchema, type Project } from './schemas'

const raw = [
  {
    id: 'gridwatch',
    slug: 'gridwatch',
    title: 'GridWatch',
    tagline: 'Agentic AI civic intelligence platform',
    description:
      'Built with a team in a marathon hackathon sprint and placed 2nd overall at DevFest DC. GridWatch is a civic monitoring platform powered by AI agents that delivers real-time city updates — from power outages and road closures to public safety alerts — in one dashboard for residents and officials.',
    problem:
      'City residents and officials lack a unified, real-time view of civic disruptions spanning power, roads, and public safety.',
    solution:
      'An agentic orchestration layer over civic data sources that aggregates alerts into a single actionable dashboard.',
    role: 'Backend / Agent Orchestration',
    result: '2nd place · 34 teams · 194 participants',
    image: '/assets/Gridwatch Project.jpg',
    technologies: ['Python', 'FastAPI', 'Firestore', 'GCP', 'AI Agents', 'JavaScript'],
    github: 'https://github.com/nathanalbe/GridWatch',
    demo: 'https://gridwatch.dev/',
    category: 'Civic Tech',
    featured: true,
    relatedSkillIds: ['python', 'fastapi', 'gcp'],
    relatedArticleSlugs: ['building-gridwatch-in-24-hours'],
  },
]

export const projects: Project[] = raw.map((item) => projectSchema.parse(item))

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}
