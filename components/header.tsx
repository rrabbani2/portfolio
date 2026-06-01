'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-40 w-full border-b border-hairline/70 bg-canvas/75 backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-12">
        <Link href="/" className="group flex items-baseline gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-soft transition-colors group-hover:text-signal">
            ◦ R.R.
          </span>
          <span className="font-display text-[15px] italic tracking-tight text-ink">
            Raza Rabbani
          </span>
        </Link>
        <ul className="flex items-center gap-8 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-soft">
          <li>
            <Link href="/" className="transition-colors hover:text-signal">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="transition-colors hover:text-signal">
              About
            </Link>
          </li>
          <li>
            <a href="#contact" className="transition-colors hover:text-signal">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </motion.header>
  )
}
