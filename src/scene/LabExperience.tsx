'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import {
  LAB_SECTIONS,
  SECTION_LABELS,
  SECTION_ROUTES,
  useSceneStore,
  type LabSection,
} from '@/scene/store'

const LabCanvas = dynamic(() => import('@/scene/LabCanvas'), {
  ssr: false,
  loading: () => (
    <div className="flex h-full min-h-[420px] items-center justify-center bg-night-950 text-sm text-night-400">
      Loading stadium sandbox…
    </div>
  ),
})

export default function LabExperience() {
  const activeSection = useSceneStore((state) => state.activeSection)
  const hoveredHotspot = useSceneStore((state) => state.hoveredHotspot)
  const isTransitioning = useSceneStore((state) => state.isTransitioning)
  const kickPlaying = useSceneStore((state) => state.kickPlaying)
  const availableClips = useSceneStore((state) => state.availableClips)
  const setActiveSection = useSceneStore((state) => state.setActiveSection)
  const toggleKick = useSceneStore((state) => state.toggleKick)
  const [reduceMotion, setReduceMotion] = useState(false)
  const [webglOk, setWebglOk] = useState(true)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => {
      const prefersReduced = media.matches
      setReduceMotion(prefersReduced)
      if (prefersReduced) {
        useSceneStore.getState().setKickPlaying(false)
      }
    }
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas')
      const ok = !!(
        canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
      )
      setWebglOk(ok)
    } catch {
      setWebglOk(false)
    }
  }, [])

  const highlight = hoveredHotspot ?? activeSection
  const portfolioHref = SECTION_ROUTES[activeSection]

  return (
    <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
      <div className="glass-panel relative min-h-[480px] overflow-hidden rounded-2xl lg:min-h-[640px]">
        {webglOk ? (
          <LabCanvas reduceMotion={reduceMotion} />
        ) : (
          <div className="flex h-full min-h-[480px] flex-col items-center justify-center gap-4 px-6 text-center">
            <p className="font-display text-xl uppercase tracking-wide text-night-50">
              WebGL unavailable
            </p>
            <p className="max-w-md text-night-300">
              This sandbox needs WebGL. The HTML portfolio still works without it.
            </p>
            <Link href="/experience" className="btn-primary">
              Open Experience
            </Link>
          </div>
        )}
        <div className="pointer-events-none absolute left-4 top-4 rounded-md border border-night-400/20 bg-night-950/70 px-3 py-2 text-xs uppercase tracking-[0.16em] text-night-300 backdrop-blur">
          {isTransitioning ? 'Camera moving…' : 'Sandbox · not production cinematic'}
        </div>
      </div>

      <aside className="space-y-5">
        <div className="glass-panel rounded-2xl p-5 sm:p-6">
          <p className="section-kicker">Phase 4 lab</p>
          <h2 className="mt-2 font-display text-2xl uppercase tracking-wide text-night-50">
            Stadium sandbox
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-night-300">
            Loads the Mixamo-rigged character GLB with a Three.js{' '}
            <code className="text-flood-300">AnimationMixer</code> playing the
            penalty-kick clip. Shadows, textures, and stadium lighting are wired
            for the sandbox.
          </p>
        </div>

        <div className="glass-panel rounded-2xl p-5 sm:p-6">
          <p className="section-kicker">Kick animation</p>
          <p className="mt-2 text-sm text-night-300">
            Clip:{' '}
            <span className="text-flood-300">
              {availableClips[0] ?? 'loading…'}
            </span>
          </p>
          <button
            type="button"
            onClick={toggleKick}
            className="btn-primary mt-4"
            aria-pressed={kickPlaying}
          >
            {kickPlaying ? 'Pause kick' : 'Play kick'}
          </button>
        </div>
        <div className="glass-panel rounded-2xl p-5 sm:p-6">
          <p className="section-kicker">Active</p>
          <p className="mt-2 font-display text-xl uppercase tracking-wide text-flood-300">
            {SECTION_LABELS[highlight]}
          </p>
          {portfolioHref ? (
            <Link href={portfolioHref} className="btn-ghost mt-4 inline-flex">
              Open portfolio section
            </Link>
          ) : null}
        </div>

        <div className="glass-panel rounded-2xl p-5 sm:p-6">
          <p className="section-kicker mb-3">Camera presets</p>
          <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
            {LAB_SECTIONS.map((section) => {
              const selected = activeSection === section
              return (
                <li key={section}>
                  <button
                    type="button"
                    onClick={() => setActiveSection(section as LabSection)}
                    className={`flex min-h-[44px] w-full items-center justify-between rounded-md px-3 py-2 text-left font-display text-xs uppercase tracking-[0.14em] transition ${
                      selected
                        ? 'bg-flood-500/15 text-flood-300'
                        : 'border border-night-400/20 text-night-300 hover:text-night-50'
                    }`}
                    aria-pressed={selected}
                  >
                    <span>{SECTION_LABELS[section]}</span>
                    {hoveredHotspot === section ? <span aria-hidden>●</span> : null}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="glass-panel rounded-2xl p-5 text-sm text-night-400">
          <p className="section-kicker text-night-400">Learning checklist</p>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>GLB load via useGLTF</li>
            <li>AnimationMixer kick playback</li>
            <li>Shadows + textured materials</li>
            <li>GSAP camera transitions</li>
            <li>WebGL fallback path</li>
          </ul>
        </div>
      </aside>
    </div>
  )
}
