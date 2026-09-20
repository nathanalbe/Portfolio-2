'use client'

import { Canvas } from '@react-three/fiber'
import { ContactShadows, Environment, OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'
import AvatarProxy from './AvatarProxy'
import CameraRig from './CameraRig'
import StadiumShell from './StadiumShell'
import { useSceneStore } from './store'

type LabCanvasProps = {
  reduceMotion?: boolean
}

export default function LabCanvas({ reduceMotion = false }: LabCanvasProps) {
  const isTransitioning = useSceneStore((state) => state.isTransitioning)

  return (
    <Canvas
      shadows
      dpr={[1, 1.75]}
      camera={{ position: [3.2, 1.8, 5.5], fov: 42, near: 0.1, far: 80 }}
      gl={{ antialias: true, alpha: true }}
      className="h-full w-full touch-none"
      aria-label="Interactive 3D stadium sandbox"
    >
      <color attach="background" args={['#0b1016']} />
      <fog attach="fog" args={['#0b1016', 12, 28]} />
      <Suspense fallback={null}>
        <StadiumShell />
        <AvatarProxy />
        <ContactShadows
          position={[0, 0.01, 0]}
          opacity={0.45}
          scale={12}
          blur={2.2}
          far={4}
        />
        <Environment preset="night" />
      </Suspense>
      <CameraRig reduceMotion={reduceMotion} />
      <OrbitControls
        enablePan={false}
        enableZoom={!isTransitioning}
        enableRotate={!isTransitioning}
        maxPolarAngle={Math.PI / 2.05}
        minDistance={2}
        maxDistance={10}
        target={[0, 1.1, 0]}
      />
    </Canvas>
  )
}
