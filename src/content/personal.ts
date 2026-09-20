import { personalInterestSchema, type PersonalInterest } from './schemas'

const raw = [
  { id: 'soccer', label: 'Soccer', description: 'Playing and watching the beautiful game.' },
  { id: 'fitness', label: 'Working Out', description: 'Staying sharp on and off the field.' },
  { id: 'coffee', label: 'Exploring Coffee Shops', description: 'Hunting good espresso wherever I land.' },
  { id: 'travel', label: 'Traveling', description: 'New cities, new pitches, new perspectives.' },
  { id: 'food', label: 'Finding Good Food', description: 'Always chasing the next great meal.' },
]

export const personalInterests: PersonalInterest[] = raw.map((item) =>
  personalInterestSchema.parse(item)
)
