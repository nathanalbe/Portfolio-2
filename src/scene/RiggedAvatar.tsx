'use client'

import { useEffect, useLayoutEffect, useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { SkeletonUtils } from 'three/examples/jsm/utils/SkeletonUtils.js'
import { useSceneStore } from './store'

/** Draco-compressed Mixamo character — committed for Vercel previews. */
export const MODEL_URL = '/models/penalty-kick.min.glb'

/** Target standing height in stadium meters (Mixamo source is ~cm). */
const TARGET_HEIGHT = 1.8

type RiggedAvatarProps = {
  position?: [number, number, number]
  rotation?: [number, number, number]
  loop?: boolean
}

/**
 * Loads the rigged Mixamo character GLB and plays the penalty-kick clip
 * through a Three.js AnimationMixer.
 *
 * Important: skinned Mixamo meshes must be cloned with SkeletonUtils,
 * not Object3D.clone(), or the body collapses / disappears.
 */
export default function RiggedAvatar({
  position = [0, 0, 0],
  rotation = [0, Math.PI, 0],
  loop = true,
}: RiggedAvatarProps) {
  const group = useRef<THREE.Group>(null)
  const { scene, animations } = useGLTF(MODEL_URL, true)
  const kickPlaying = useSceneStore((state) => state.kickPlaying)
  const setKickPlaying = useSceneStore((state) => state.setKickPlaying)
  const setAvailableClips = useSceneStore((state) => state.setAvailableClips)
  const actionRef = useRef<THREE.AnimationAction | null>(null)

  const { root, fitScale } = useMemo(() => {
    // SkeletonUtils preserves bone ↔ SkinnedMesh binding.
    const cloned = SkeletonUtils.clone(scene) as THREE.Object3D

    cloned.traverse((obj) => {
      if (!(obj as THREE.Mesh).isMesh) return
      const mesh = obj as THREE.Mesh
      mesh.castShadow = true
      mesh.receiveShadow = true
      mesh.frustumCulled = false
      mesh.visible = true

      const materials = Array.isArray(mesh.material)
        ? mesh.material
        : [mesh.material]

      materials.forEach((material, index) => {
        if (!material) return
        material.side = THREE.DoubleSide
        material.visible = true
        material.needsUpdate = true

        if (
          material instanceof THREE.MeshStandardMaterial ||
          material instanceof THREE.MeshPhysicalMaterial
        ) {
          material.envMapIntensity = 1
          material.roughness = Math.min(material.roughness ?? 0.65, 0.85)
          material.metalness = Math.min(material.metalness ?? 0.05, 0.2)
          // Hair uses BLEND; keep it but ensure it isn't fully transparent.
          if (material.transparent && material.opacity < 0.15) {
            material.opacity = 1
            material.transparent = false
          }
          return
        }

        if (material instanceof THREE.MeshBasicMaterial) {
          const std = new THREE.MeshStandardMaterial({
            map: material.map,
            color: material.color.clone(),
            transparent: material.transparent,
            opacity: material.opacity,
            roughness: 0.65,
            metalness: 0.05,
            side: THREE.DoubleSide,
          })
          if (Array.isArray(mesh.material)) {
            mesh.material[index] = std
          } else {
            mesh.material = std
          }
        }
      })
    })

    // Measure source bounds (Mixamo ~cm) and scale into stadium meters.
    const box = new THREE.Box3().setFromObject(cloned)
    const size = new THREE.Vector3()
    box.getSize(size)
    const height = size.y || 1
    const nextScale = TARGET_HEIGHT / height

    return {
      root: cloned,
      fitScale: nextScale,
    }
  }, [scene])

  const groundOffset = useMemo(() => {
    const box = new THREE.Box3().setFromObject(root)
    return -(box.min.y * fitScale)
  }, [root, fitScale])

  const mixer = useMemo(() => new THREE.AnimationMixer(root), [root])

  useLayoutEffect(() => {
    // Rebind skeletons after mount (helps some Mixamo/Draco exports).
    root.traverse((obj) => {
      const skinned = obj as THREE.SkinnedMesh
      if (skinned.isSkinnedMesh && skinned.skeleton) {
        skinned.skeleton.update()
        skinned.normalizeSkinWeights?.()
      }
    })
  }, [root])

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

    const action = mixer.clipAction(clip, root)
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
  }, [animations, mixer, root, loop, setAvailableClips, setKickPlaying])

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
    <group ref={group} position={position} rotation={rotation}>
      <group position={[0, groundOffset, 0]} scale={fitScale}>
        <primitive object={root} />
      </group>
    </group>
  )
}

if (typeof window !== 'undefined') {
  useGLTF.preload(MODEL_URL, true)
}
