'use client'

import { useEffect, useRef } from 'react'

type LazyVideoProps = {
  src: string
  className?: string
}

/**
 * Demo video that defers loading until scrolled near the viewport,
 * then autoplays muted (and pauses again when scrolled away).
 */
export function LazyVideo({ src, className }: LazyVideoProps) {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = ref.current
    if (!video) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { rootMargin: '160px' }
    )
    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  return (
    <video ref={ref} className={className} controls muted loop playsInline preload="metadata">
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}
