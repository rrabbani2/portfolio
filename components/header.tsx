'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

const navUnderline =
  'relative transition-colors hover:text-signal after:absolute after:-bottom-1 after:left-0 after:h-px after:bg-signal after:transition-[width] after:duration-300'

export function Header() {
  const pathname = usePathname()
  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  const linkClass = (href: string) =>
    `${navUnderline} ${
      isActive(href) ? 'text-ink after:w-full' : 'after:w-0 hover:after:w-full'
    }`

  return (
    <motion.header
      id="top"
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
            <Link href="/" className={linkClass('/')}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className={linkClass('/about')}>
              About
            </Link>
          </li>
          <li>
            <Link
              href="/#contact"
              className={`${navUnderline} after:w-0 hover:after:w-full`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </motion.header>
  )
}
