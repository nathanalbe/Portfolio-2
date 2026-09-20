import { z } from 'zod'

export const socialLinkSchema = z.object({
  label: z.string(),
  href: z.string().url(),
})

export const profileSchema = z.object({
  name: z.string(),
  headline: z.string(),
  title: z.string(),
  location: z.string(),
  shortBio: z.string(),
  bio: z.string(),
  email: z.string().email(),
  headshot: z.string(),
  resumeUrl: z.string(),
  socials: z.array(socialLinkSchema),
})

export const experienceSchema = z.object({
  id: z.string(),
  title: z.string(),
  company: z.string(),
  location: z.string(),
  period: z.string(),
  startYear: z.number(),
  description: z.string(),
  highlights: z.array(z.string()).optional(),
  technologies: z.array(z.string()),
  link: z.string().url().optional(),
  logo: z.string().optional(),
  focus: z.array(z.string()).optional(),
})

export const projectSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  tagline: z.string(),
  description: z.string(),
  problem: z.string().optional(),
  solution: z.string().optional(),
  role: z.string().optional(),
  result: z.string().optional(),
  image: z.string().optional(),
  technologies: z.array(z.string()),
  github: z.string().url().optional(),
  demo: z.string().url().optional(),
  category: z.string(),
  featured: z.boolean().default(false),
  relatedSkillIds: z.array(z.string()).optional(),
})

export const skillSchema = z.object({
  id: z.string(),
  name: z.string(),
})

export const skillGroupSchema = z.object({
  id: z.string(),
  title: z.string(),
  skills: z.array(skillSchema),
})

export const leadershipSchema = z.object({
  id: z.string(),
  title: z.string(),
  organization: z.string(),
  role: z.string(),
  period: z.string(),
  mission: z.string(),
  stats: z
    .array(
      z.object({
        label: z.string(),
        value: z.string(),
      })
    )
    .optional(),
  partners: z.array(z.string()).optional(),
  highlights: z.array(z.string()).optional(),
})

export const educationSchema = z.object({
  id: z.string(),
  school: z.string(),
  degree: z.string(),
  minor: z.string().optional(),
  period: z.string(),
  location: z.string().optional(),
  certifications: z.array(z.string()).optional(),
  coursework: z.array(z.string()).optional(),
})

export const personalInterestSchema = z.object({
  id: z.string(),
  label: z.string(),
  description: z.string().optional(),
})

export type Profile = z.infer<typeof profileSchema>
export type Experience = z.infer<typeof experienceSchema>
export type Project = z.infer<typeof projectSchema>
export type Skill = z.infer<typeof skillSchema>
export type SkillGroup = z.infer<typeof skillGroupSchema>
export type Leadership = z.infer<typeof leadershipSchema>
export type Education = z.infer<typeof educationSchema>
export type PersonalInterest = z.infer<typeof personalInterestSchema>
