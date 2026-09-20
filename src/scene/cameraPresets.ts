import type { LabSection } from './store'

export type CameraPreset = {
  position: [number, number, number]
  lookAt: [number, number, number]
  fov?: number
}

/** Framing presets for the geometric avatar proxy in the lab stadium. */
export const CAMERA_PRESETS: Record<LabSection, CameraPreset> = {
  home: {
    position: [3.2, 1.8, 5.5],
    lookAt: [0, 1.1, 0],
    fov: 42,
  },
  about: {
    position: [0.9, 2.05, 2.4],
    lookAt: [0, 1.85, 0],
    fov: 38,
  },
  experience: {
    position: [1.1, 1.45, 2.6],
    lookAt: [0, 1.25, 0],
    fov: 40,
  },
  skills: {
    position: [1.8, 1.5, 2.2],
    lookAt: [0.45, 1.35, 0],
    fov: 40,
  },
  leadership: {
    position: [-1.6, 1.5, 2.2],
    lookAt: [-0.45, 1.35, 0],
    fov: 40,
  },
  projects: {
    position: [1.4, 0.7, 2.8],
    lookAt: [0.25, 0.45, 0],
    fov: 42,
  },
  education: {
    position: [-1.2, 0.7, 2.8],
    lookAt: [-0.25, 0.45, 0],
    fov: 42,
  },
  personal: {
    position: [0.4, 0.55, 2.4],
    lookAt: [0.55, 0.18, 0.55],
    fov: 40,
  },
  blog: {
    position: [0.2, 3.4, 1.2],
    lookAt: [0, 2.8, -4.5],
    fov: 48,
  },
}
