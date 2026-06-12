'use client'

import { MotionConfig } from 'framer-motion'
import type { ReactNode } from 'react'

/** Makes every framer-motion animation respect the user's reduced-motion preference. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
