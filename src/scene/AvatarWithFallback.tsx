'use client'

import { Component, type ReactNode } from 'react'
import AvatarProxy from './AvatarProxy'
import RiggedAvatar from './RiggedAvatar'

type Props = {
  children?: ReactNode
  reduceMotion?: boolean
}

type State = {
  failed: boolean
}

/**
 * If the GLB fails to load (404 on preview, network error, etc.),
 * fall back to the geometric avatar so /lab never white-screens.
 */
export class AvatarErrorBoundary extends Component<Props, State> {
  state: State = { failed: false }

  static getDerivedStateFromError(): State {
    return { failed: true }
  }

  componentDidCatch(error: Error) {
    console.warn('[lab] Rigged avatar failed, using proxy fallback:', error.message)
  }

  render() {
    if (this.state.failed) {
      return <AvatarProxy />
    }
    return (
      this.props.children ?? (
      <RiggedAvatar
        position={[0, 0, 0]}
        rotation={[0, Math.PI, 0]}
        loop={!this.props.reduceMotion}
      />
      )
    )
  }
}

export default function AvatarWithFallback({
  reduceMotion = false,
}: {
  reduceMotion?: boolean
}) {
  return (
    <AvatarErrorBoundary reduceMotion={reduceMotion}>
      <RiggedAvatar
        position={[0, 0, 0]}
        rotation={[0, Math.PI, 0]}
        loop={!reduceMotion}
      />
    </AvatarErrorBoundary>
  )
}
