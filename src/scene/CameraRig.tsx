'use client'

import { useEffect, useRef } from 'react'
import { useThree } from '@react-three/fiber'
import gsap from 'gsap'
import { CAMERA_PRESETS } from './cameraPresets'
import { useSceneStore, type LabSection } from './store'

type CameraRigProps = {
  reduceMotion?: boolean
}

export default function CameraRig({ reduceMotion = false }: CameraRigProps) {
  const { camera } = useThree()
  const activeSection = useSceneStore((state) => state.activeSection)
  const setTransitioning = useSceneStore((state) => state.setTransitioning)
  const lookAtRef = useRef({ x: 0, y: 1.1, z: 0 })
  const tweenRef = useRef<gsap.core.Tween | null>(null)

  useEffect(() => {
    const preset = CAMERA_PRESETS[activeSection as LabSection]
    const duration = reduceMotion ? 0 : 1.15

    tweenRef.current?.kill()
    setTransitioning(true)

    if (reduceMotion) {
      camera.position.set(...preset.position)
      lookAtRef.current = {
        x: preset.lookAt[0],
        y: preset.lookAt[1],
        z: preset.lookAt[2],
      }
      camera.lookAt(preset.lookAt[0], preset.lookAt[1], preset.lookAt[2])
      if ('fov' in camera && preset.fov) {
        ;(camera as typeof camera & { fov: number }).fov = preset.fov
        camera.updateProjectionMatrix()
      }
      setTransitioning(false)
      return
    }

    const lookProxy = lookAtRef.current

    tweenRef.current = gsap.to(camera.position, {
      x: preset.position[0],
      y: preset.position[1],
      z: preset.position[2],
      duration,
      ease: 'power2.inOut',
      onUpdate: () => {
        camera.lookAt(lookProxy.x, lookProxy.y, lookProxy.z)
      },
      onComplete: () => setTransitioning(false),
    })

    gsap.to(lookProxy, {
      x: preset.lookAt[0],
      y: preset.lookAt[1],
      z: preset.lookAt[2],
      duration,
      ease: 'power2.inOut',
      onUpdate: () => {
        camera.lookAt(lookProxy.x, lookProxy.y, lookProxy.z)
      },
    })

    if ('fov' in camera && preset.fov) {
      gsap.to(camera, {
        fov: preset.fov,
        duration,
        ease: 'power2.inOut',
        onUpdate: () => camera.updateProjectionMatrix(),
      })
    }

    return () => {
      tweenRef.current?.kill()
    }
  }, [activeSection, camera, reduceMotion, setTransitioning])

  return null
}
