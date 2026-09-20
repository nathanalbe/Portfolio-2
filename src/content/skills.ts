import { skillGroupSchema, type SkillGroup } from './schemas'

const raw = [
  {
    id: 'languages',
    title: 'Languages',
    skills: [
      { id: 'python', name: 'Python' },
      { id: 'java', name: 'Java' },
      { id: 'typescript', name: 'TypeScript' },
      { id: 'javascript', name: 'JavaScript' },
      { id: 'swift', name: 'Swift' },
      { id: 'objective-c', name: 'Objective-C' },
      { id: 'sql', name: 'SQL' },
      { id: 'c', name: 'C' },
    ],
  },
  {
    id: 'mobile',
    title: 'Mobile',
    skills: [
      { id: 'ios', name: 'iOS' },
      { id: 'swiftui', name: 'SwiftUI' },
      { id: 'watchos', name: 'watchOS' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    skills: [
      { id: 'fastapi', name: 'FastAPI' },
      { id: 'django', name: 'Django' },
      { id: 'flask', name: 'Flask' },
      { id: 'graphql', name: 'GraphQL' },
      { id: 'rest', name: 'REST' },
      { id: 'postgresql', name: 'PostgreSQL' },
    ],
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure',
    skills: [
      { id: 'aws', name: 'AWS' },
      { id: 'gcp', name: 'GCP' },
      { id: 'docker', name: 'Docker' },
      { id: 'jenkins', name: 'Jenkins' },
      { id: 'github-actions', name: 'GitHub Actions' },
      { id: 'linux', name: 'Linux' },
    ],
  },
]

export const skillGroups: SkillGroup[] = raw.map((group) =>
  skillGroupSchema.parse(group)
)
