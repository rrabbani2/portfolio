'use client'

import { Suspense, lazy, useEffect, useState } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  // Wait until the browser is idle before pulling in the Spline runtime,
  // so the 3D scene never competes with first paint and hydration.
  const [ready, setReady] = useState(false)
  useEffect(() => {
    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(() => setReady(true), { timeout: 2000 })
      return () => window.cancelIdleCallback(id)
    }
    const t = setTimeout(() => setReady(true), 350)
    return () => clearTimeout(t)
  }, [])

  const fallback = (
    <div className="w-full h-full flex items-center justify-center">
      <span className="loader"></span>
    </div>
  )

  if (!ready) return fallback

  return (
    <Suspense fallback={fallback}>
      <Spline scene={scene} className={className} />
    </Suspense>
  )
}
