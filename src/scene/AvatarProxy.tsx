'use client'

import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import type { Group, Mesh } from 'three'
import { useSceneStore, type LabSection } from './store'

type HotspotProps = {
  section: LabSection
  position: [number, number, number]
  args?: [number, number, number]
  shape?: 'box' | 'sphere'
}

function Hotspot({
  section,
  position,
  args = [0.28, 0.28, 0.28],
  shape = 'box',
}: HotspotProps) {
  const meshRef = useRef<Mesh>(null)
  const activeSection = useSceneStore((state) => state.activeSection)
  const hoveredHotspot = useSceneStore((state) => state.hoveredHotspot)
  const setActiveSection = useSceneStore((state) => state.setActiveSection)
  const setHoveredHotspot = useSceneStore((state) => state.setHoveredHotspot)

  const active = activeSection === section || hoveredHotspot === section

  useFrame((_, delta) => {
    if (!meshRef.current) return
    const target = active ? 1.12 : 1
    const scale = meshRef.current.scale
    scale.x += (target - scale.x) * Math.min(1, delta * 8)
    scale.y += (target - scale.y) * Math.min(1, delta * 8)
    scale.z += (target - scale.z) * Math.min(1, delta * 8)
  })

  return (
    <mesh
      ref={meshRef}
      position={position}
      onClick={(event) => {
        event.stopPropagation()
        setActiveSection(section)
      }}
      onPointerOver={(event) => {
        event.stopPropagation()
        document.body.style.cursor = 'pointer'
        setHoveredHotspot(section)
      }}
      onPointerOut={() => {
        document.body.style.cursor = 'auto'
        setHoveredHotspot(null)
      }}
    >
      {shape === 'sphere' ? (
        <sphereGeometry args={[args[0], 24, 24]} />
      ) : (
        <boxGeometry args={args} />
      )}
      <meshStandardMaterial
        color={active ? '#f98c07' : '#4a7761'}
        emissive={active ? '#f98c07' : '#111c17'}
        emissiveIntensity={active ? 0.55 : 0.08}
        roughness={0.45}
        metalness={0.15}
        transparent
        opacity={active ? 0.95 : 0.72}
      />
    </mesh>
  )
}

export default function AvatarProxy() {
  const group = useRef<Group>(null)
  const activeSection = useSceneStore((state) => state.activeSection)

  const bodyColor = useMemo(
    () => (activeSection === 'home' ? '#e8eef3' : '#d7dee6'),
    [activeSection]
  )

  useFrame((state) => {
    if (!group.current) return
    group.current.position.y = Math.sin(state.clock.elapsedTime * 1.2) * 0.02
    group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.35) * 0.04
  })

  return (
    <group ref={group} position={[0, 0, 0]}>
      <mesh position={[-0.22, 0.45, 0]} castShadow>
        <boxGeometry args={[0.28, 0.9, 0.28]} />
        <meshStandardMaterial color="#1a222c" roughness={0.7} />
      </mesh>
      <mesh position={[0.22, 0.45, 0]} castShadow>
        <boxGeometry args={[0.28, 0.9, 0.28]} />
        <meshStandardMaterial color="#1a222c" roughness={0.7} />
      </mesh>

      <mesh position={[0, 1.25, 0]} castShadow>
        <boxGeometry args={[0.7, 0.85, 0.4]} />
        <meshStandardMaterial color="#f4f6f8" roughness={0.55} />
      </mesh>

      <mesh position={[-0.55, 1.3, 0]} castShadow>
        <boxGeometry args={[0.22, 0.75, 0.22]} />
        <meshStandardMaterial color={bodyColor} roughness={0.6} />
      </mesh>
      <mesh position={[0.55, 1.3, 0]} castShadow>
        <boxGeometry args={[0.22, 0.75, 0.22]} />
        <meshStandardMaterial color={bodyColor} roughness={0.6} />
      </mesh>

      <mesh position={[0, 1.9, 0]} castShadow>
        <boxGeometry args={[0.38, 0.42, 0.38]} />
        <meshStandardMaterial color="#c4a484" roughness={0.65} />
      </mesh>

      <Hotspot section="about" position={[0, 1.95, 0.28]} args={[0.22, 0.22, 0.12]} />
      <Hotspot section="experience" position={[0, 1.3, 0.28]} args={[0.34, 0.28, 0.12]} />
      <Hotspot section="skills" position={[0.58, 1.35, 0.18]} args={[0.2, 0.35, 0.12]} />
      <Hotspot section="leadership" position={[-0.58, 1.35, 0.18]} args={[0.2, 0.35, 0.12]} />
      <Hotspot section="projects" position={[0.24, 0.45, 0.2]} args={[0.2, 0.4, 0.12]} />
      <Hotspot section="education" position={[-0.24, 0.45, 0.2]} args={[0.2, 0.4, 0.12]} />
      <Hotspot
        section="personal"
        position={[0.55, 0.18, 0.55]}
        args={[0.16, 0.16, 0.16]}
        shape="sphere"
      />
    </group>
  )
}
