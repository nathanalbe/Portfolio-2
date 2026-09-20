import { create } from 'zustand'

export const LAB_SECTIONS = [
  'home',
  'about',
  'experience',
  'skills',
  'leadership',
  'projects',
  'education',
  'personal',
  'blog',
] as const

export type LabSection = (typeof LAB_SECTIONS)[number]

export const SECTION_LABELS: Record<LabSection, string> = {
  home: 'Home',
  about: 'About (Head)',
  experience: 'Experience (Chest)',
  skills: 'Skills (Right Arm)',
  leadership: 'Leadership (Left Arm)',
  projects: 'Projects (Right Leg)',
  education: 'Education (Left Leg)',
  personal: 'Off the Field (Ball)',
  blog: 'Press Box (Blog)',
}

export const SECTION_ROUTES: Partial<Record<LabSection, string>> = {
  about: '/about',
  experience: '/experience',
  skills: '/skills',
  leadership: '/leadership',
  projects: '/projects',
  education: '/education',
  personal: '/about',
  blog: '/blog',
}

type SceneState = {
  activeSection: LabSection
  hoveredHotspot: LabSection | null
  isTransitioning: boolean
  kickPlaying: boolean
  availableClips: string[]
  setActiveSection: (section: LabSection) => void
  setHoveredHotspot: (section: LabSection | null) => void
  setTransitioning: (value: boolean) => void
  setKickPlaying: (value: boolean) => void
  toggleKick: () => void
  setAvailableClips: (clips: string[]) => void
}

export const useSceneStore = create<SceneState>((set) => ({
  activeSection: 'home',
  hoveredHotspot: null,
  isTransitioning: false,
  kickPlaying: true,
  availableClips: [],
  setActiveSection: (section) => set({ activeSection: section }),
  setHoveredHotspot: (section) => set({ hoveredHotspot: section }),
  setTransitioning: (value) => set({ isTransitioning: value }),
  setKickPlaying: (value) => set({ kickPlaying: value }),
  toggleKick: () => set((state) => ({ kickPlaying: !state.kickPlaying })),
  setAvailableClips: (clips) => set({ availableClips: clips }),
}))
