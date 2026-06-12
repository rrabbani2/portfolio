'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { SplineScene } from '@/components/ui/splite'
import { Card } from '@/components/ui/card'

const easeOut = [0.22, 1, 0.36, 1] as const

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Top metadata strip */}
      <div className="mx-auto flex max-w-[1400px] items-start justify-end px-6 pt-10 md:px-12 md:pt-14 font-mono text-[10px] uppercase tracking-[0.24em] text-ink-soft">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-right leading-relaxed"
        >
          San Francisco, CA
          <br />
          <span className="opacity-70">Updated {new Date().getFullYear()}</span>
        </motion.span>
      </div>

      {/* Display */}
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 pt-2 md:pt-2 lg:pt-3 pb-24 md:pb-32">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-12">
        <h1 className="font-display text-[clamp(3.5rem,12vw,12rem)] leading-[0.92] tracking-[-0.025em] text-ink lg:flex-1">
          <motion.span
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.3, ease: easeOut }}
            className="block"
          >
            Raza
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.45, ease: easeOut }}
            className="relative inline-block italic"
          >
            Rabbani<span className="not-italic text-signal">.</span>
            {/* Hand-drawn underline */}
            <motion.svg
              viewBox="0 0 700 36"
              preserveAspectRatio="none"
              className="pointer-events-none absolute -bottom-3 left-0 h-[14px] w-full text-signal"
              initial="hidden"
              animate="visible"
              aria-hidden
            >
              <motion.path
                d="M 6 26 C 140 4, 280 4, 420 18 C 520 28, 600 22, 694 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                variants={{
                  hidden: { pathLength: 0, opacity: 0 },
                  visible: {
                    pathLength: 1,
                    opacity: 1,
                    transition: {
                      pathLength: { duration: 1.6, delay: 1.0, ease: [0.43, 0.13, 0.23, 0.96] },
                      opacity: { duration: 0.3, delay: 1.0 },
                    },
                  },
                }}
              />
            </motion.svg>
          </motion.span>
        </h1>

          {/* Interactive 3D scene — sits to the right of the name */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.6, ease: easeOut }}
            className="w-full shrink-0 lg:w-[500px]"
          >
            <Card className="relative h-[360px] w-full overflow-hidden border-transparent bg-canvas shadow-none sm:h-[460px] lg:h-[500px]">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="h-full w-full"
              />
            </Card>
          </motion.div>
        </div>

        {/* Below display: intro paragraph + CTA in editorial grid */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.75, ease: easeOut }}
          className="mt-6"
        >
          <Link
            href="/about"
            className="group inline-flex items-baseline gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink transition-colors hover:text-signal"
          >
            <span className="border-b border-current pb-1">More about me</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="h-px w-full bg-hairline" />
      </div>
    </section>
  )
}
