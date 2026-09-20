'use client'

import { useMemo } from 'react'
import { useSceneStore } from './store'

export default function StadiumShell() {
  const activeSection = useSceneStore((state) => state.activeSection)
  const hoveredHotspot = useSceneStore((state) => state.hoveredHotspot)
  const pressActive = activeSection === 'blog' || hoveredHotspot === 'blog'

  const floodIntensity = useMemo(
    () => (activeSection === 'home' ? 1.1 : activeSection === 'blog' ? 0.7 : 0.9),
    [activeSection]
  )

  return (
    <group>
      {/* Pitch */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[18, 28]} />
        <meshStandardMaterial color="#2e4c3e" roughness={0.95} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
        <ringGeometry args={[3.2, 3.35, 64]} />
        <meshBasicMaterial color="#e8eef3" transparent opacity={0.35} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.012, 0]}>
        <planeGeometry args={[0.08, 24]} />
        <meshBasicMaterial color="#e8eef3" transparent opacity={0.4} />
      </mesh>

      {/* Stands / bowl illusion */}
      <mesh position={[0, 1.2, -8]} castShadow receiveShadow>
        <boxGeometry args={[16, 2.4, 1.2]} />
        <meshStandardMaterial color="#1a222c" roughness={0.85} />
      </mesh>
      <mesh position={[-7.5, 1.4, -2]} rotation={[0, 0.2, 0]} castShadow>
        <boxGeometry args={[1.4, 2.8, 10]} />
        <meshStandardMaterial color="#121a22" roughness={0.9} />
      </mesh>
      <mesh position={[7.5, 1.4, -2]} rotation={[0, -0.2, 0]} castShadow>
        <boxGeometry args={[1.4, 2.8, 10]} />
        <meshStandardMaterial color="#121a22" roughness={0.9} />
      </mesh>

      {/* Press Box */}
      <mesh
        position={[0, 3.1, -7.2]}
        onClick={(event) => {
          event.stopPropagation()
          useSceneStore.getState().setActiveSection('blog')
        }}
        onPointerOver={(event) => {
          event.stopPropagation()
          document.body.style.cursor = 'pointer'
          useSceneStore.getState().setHoveredHotspot('blog')
        }}
        onPointerOut={() => {
          document.body.style.cursor = 'auto'
          useSceneStore.getState().setHoveredHotspot(null)
        }}
      >
        <boxGeometry args={[4.2, 1.2, 1.6]} />
        <meshStandardMaterial
          color={pressActive ? '#f98c07' : '#35414f'}
          emissive={pressActive ? '#f98c07' : '#000000'}
          emissiveIntensity={pressActive ? 0.4 : 0}
          roughness={0.5}
          metalness={0.2}
        />
      </mesh>
      <mesh position={[0, 3.1, -6.35]}>
        <planeGeometry args={[3.4, 0.7]} />
        <meshBasicMaterial color={pressActive ? '#ffefc6' : '#78a0b8'} transparent opacity={0.55} />
      </mesh>

      {/* Scoreboard hint */}
      <mesh position={[0, 4.2, -7.6]}>
        <boxGeometry args={[2.4, 0.7, 0.2]} />
        <meshStandardMaterial
          color="#0b1016"
          emissive={activeSection === 'experience' ? '#f98c07' : '#1a222c'}
          emissiveIntensity={activeSection === 'experience' ? 0.5 : 0.15}
        />
      </mesh>

      {/* Lights */}
      <ambientLight intensity={0.35} />
      <directionalLight
        castShadow
        position={[4, 8, 3]}
        intensity={floodIntensity}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <spotLight
        position={[-3, 6, 4]}
        angle={0.45}
        penumbra={0.5}
        intensity={0.55}
        color="#ffc44a"
      />
      <pointLight position={[0, 3.4, -6.5]} intensity={pressActive ? 1.4 : 0.35} color="#f98c07" />
    </group>
  )
}
