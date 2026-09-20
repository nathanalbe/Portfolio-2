'use client'

import { useEffect, useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { useSceneStore } from './store'

const MODEL_URL = '/models/penalty-kick.glb'

type RiggedAvatarProps = {
  /** Mixamo exports are often in centimeters; 0.01 brings them into meter space. */
  scale?: number
  position?: [number, number, number]
  rotation?: [number, number, number]
  loop?: boolean
}

/**
 * Loads the rigged Mixamo character GLB and plays the penalty-kick clip
 * through a Three.js AnimationMixer. Shadows + texture materials are
 * prepared for the stadium lighting setup.
 */
export default function RiggedAvatar({
  scale = 0.01,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  loop = true,
}: RiggedAvatarProps) {
  const group = useRef<THREE.Group>(null)
  const { scene, animations } = useGLTF(MODEL_URL)
  const kickPlaying = useSceneStore((state) => state.kickPlaying)
  const setKickPlaying = useSceneStore((state) => state.setKickPlaying)
  const setAvailableClips = useSceneStore((state) => state.setAvailableClips)
  const actionRef = useRef<THREE.AnimationAction | null>(null)

  const clonedScene = useMemo(() => {
    const clone = scene.clone(true)
    clone.traverse((obj) => {
      if (!(obj as THREE.Mesh).isMesh) return
      const mesh = obj as THREE.Mesh
      mesh.castShadow = true
      mesh.receiveShadow = true
      mesh.frustumCulled = false

      const materials = Array.isArray(mesh.material)
        ? mesh.material
        : [mesh.material]

      materials.forEach((material, index) => {
        if (!material) return
        material.side = THREE.FrontSide
        material.needsUpdate = true

        if (
          material instanceof THREE.MeshStandardMaterial ||
          material instanceof THREE.MeshPhysicalMaterial
        ) {
          material.envMapIntensity = 0.85
          material.roughness = Math.min(material.roughness ?? 0.7, 0.85)
          material.metalness = Math.min(material.metalness ?? 0.1, 0.25)
          return
        }

        if (material instanceof THREE.MeshBasicMaterial) {
          const std = new THREE.MeshStandardMaterial({
            map: material.map,
            color: material.color.clone(),
            transparent: material.transparent,
            opacity: material.opacity,
            roughness: 0.7,
            metalness: 0.05,
          })
          if (Array.isArray(mesh.material)) {
            mesh.material[index] = std
          } else {
            mesh.material = std
          }
        }
      })
    })
    return clone
  }, [scene])

  const mixer = useMemo(
    () => new THREE.AnimationMixer(clonedScene),
    [clonedScene]
  )

  useEffect(() => {
    const names = animations
      .filter((animation) => animation.tracks.length > 0)
      .map((animation) => animation.name || 'unnamed')
    setAvailableClips(names)

    const clip =
      animations.find((animation) => animation.name === 'mixamo.com') ||
      animations.find((animation) => animation.tracks.length > 0) ||
      animations[0]

    if (!clip) return

    const action = mixer.clipAction(clip)
    action.clampWhenFinished = true
    action.setLoop(
      loop ? THREE.LoopRepeat : THREE.LoopOnce,
      loop ? Infinity : 1
    )
    actionRef.current = action
    action.reset().play()
    action.paused = !useSceneStore.getState().kickPlaying

    const onFinished = () => {
      if (!loop) setKickPlaying(false)
    }
    mixer.addEventListener('finished', onFinished)

    return () => {
      mixer.removeEventListener('finished', onFinished)
      action.stop()
      mixer.stopAllAction()
      actionRef.current = null
    }
  }, [animations, mixer, loop, setAvailableClips, setKickPlaying])

  useEffect(() => {
    const action = actionRef.current
    if (!action) return
    action.paused = !kickPlaying
    if (kickPlaying && !action.isRunning()) {
      action.play()
    }
  }, [kickPlaying])

  useFrame((_, delta) => {
    mixer.update(delta)
  })

  return (
    <group ref={group} position={position} rotation={rotation} scale={scale}>
      <primitive object={clonedScene} />
    </group>
  )
}

useGLTF.preload(MODEL_URL)
