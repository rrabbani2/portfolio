'use client'
import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { Contact } from "../../components/contact"
import Image from "next/image"
import { motion } from "framer-motion"

const easeOut = [0.22, 1, 0.36, 1] as const

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        {/* Display */}
        <section className="mx-auto max-w-[1400px] px-6 md:px-12 pt-6 md:pt-10 pb-10 md:pb-14">
          <div className="grid gap-12 md:grid-cols-12 md:gap-16">
            <h1 className="md:col-span-5 font-display text-[clamp(2.25rem,5.5vw,5.5rem)] leading-[1] tracking-[-0.025em] text-ink whitespace-nowrap">
              <motion.span
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.95, delay: 0.1, ease: easeOut }}
              >
                About{' '}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.95, delay: 0.25, ease: easeOut }}
                className="italic"
              >
                Me<span className="not-italic text-signal">.</span>
              </motion.span>
            </h1>
          </div>
        </section>

        {/* Two-up: portrait + bio */}
        <section className="mx-auto max-w-[1400px] px-6 md:px-12 pb-28 md:pb-36">
          <div className="grid gap-12 md:grid-cols-12 md:gap-16 md:items-center">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.4, ease: easeOut }}
              className="md:col-span-5"
            >
              <div className="relative aspect-square overflow-hidden rounded-full bg-paper max-w-[380px] md:ml-auto">
                <Image
                  src="/photos/headshot.png"
                  alt="Raza Rabbani"
                  fill
                  className="object-cover"
                  style={{ objectPosition: '48% 40%', transform: 'scale(1)' }}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.55, ease: easeOut }}
              className="md:col-span-6 md:col-start-7"
            >
              <div className="space-y-7 text-[18px] leading-[1.65] text-ink-soft font-light">
                <p>
                  Hi, I'm <span className="font-display italic text-ink text-[1.06em]">Raza</span>.
                  I recently graduated from Washington University in St. Louis where I studied
                  Mechanical Engineering with minors in Robotics and Mechatronics.
                </p>
                <p>
                  Outside of engineering, I love reading science fiction, cooking, and playing
                  sports; namely, golf, squash, pickleball, and ping pong (or any racket sport).
                  I'm also an avid 3D printer, and am constantly looking for simple mechanical
                  solutions to everyday problems.
                </p>
              </div>

              <dl className="mt-14 grid grid-cols-2 gap-x-8 gap-y-7 border-t border-hairline pt-8 font-mono text-[10px] uppercase tracking-[0.22em]">
                <div>
                  <dt className="text-ink-soft mb-1.5">Based in</dt>
                  <dd className="text-ink tracking-[0.16em]">San Francisco, CA</dd>
                </div>
                <div>
                  <dt className="text-ink-soft mb-1.5">Background</dt>
                  <dd className="text-ink tracking-[0.16em]">M.E. + Robotics</dd>
                </div>
              </dl>
            </motion.div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  )
}
