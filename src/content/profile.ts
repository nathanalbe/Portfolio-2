import { profileSchema, type Profile } from './schemas'

const raw = {
  name: 'Nathan Albe',
  headline: 'Building software people actually use.',
  title: 'Software Engineer',
  location: 'San Francisco Bay Area',
  shortBio:
    "I'm a software engineer interested in building products that combine thoughtful engineering with experiences people actually enjoy using.",
  bio: "I'm a software engineer at Airtable and a Computer Science graduate from George Mason University (minor in Computational Data Science). I build mobile and full-stack products with a focus on craft, clarity, and real-world impact — from iOS features at scale to agentic systems and community leadership.",
  email: 'nathan.albe@outlook.com',
  headshot: '/assets/Headshot.JPG',
  resumeUrl: '/resume',
  socials: [
    { label: 'GitHub', href: 'https://github.com/nathan-albe' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nathan-albe' },
    { label: 'Instagram', href: 'https://www.instagram.com/n8tes.lyfe/' },
    { label: 'Email', href: 'mailto:nathan.albe@outlook.com' },
  ],
}

export const profile: Profile = profileSchema.parse(raw)
