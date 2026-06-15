'use client'
import { motion } from 'framer-motion'

const contactMethods = [
  { label: 'Phone', value: '917 — 656 — 9179', href: 'tel:9176569179' },
  { label: 'Email', value: 'raza.rabbani2@gmail.com', href: 'mailto:raza.rabbani2@gmail.com' },
  { label: 'LinkedIn', value: 'in/raza-rabbani', href: 'https://www.linkedin.com/in/raza-rabbani-74a13a192/' },
]

const easeOut = [0.22, 1, 0.36, 1] as const

export function Contact() {
  return (
    <section
      id="contact"
      className="relative border-t border-hairline py-28 md:py-36"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="mb-14 md:mb-20 flex items-end justify-between gap-6">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink-soft">
              ◦ Contact
            </p>
            <h2 className="mt-4 font-display text-[clamp(2.25rem,6vw,4.5rem)] leading-[0.95] tracking-tight text-ink">
              Let's <span className="italic">connect</span>
            </h2>
          </div>
        </div>

        <ul className="grid gap-px overflow-hidden border border-hairline bg-hairline md:grid-cols-3">
          {contactMethods.map((m, idx) => (
            <motion.li
              key={m.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: easeOut }}
              className="bg-canvas"
            >
              <a
                href={m.href}
                target={m.href.startsWith('http') ? '_blank' : undefined}
                rel={m.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex h-full min-h-[180px] flex-col justify-between gap-8 p-8 transition-colors hover:bg-paper md:p-10"
              >
                <span className="flex items-baseline justify-between font-mono text-[10px] uppercase tracking-[0.28em] text-ink-soft">
                  {m.label}
                  <span className="text-[13px] tracking-normal text-signal opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100">
                    ↗
                  </span>
                </span>
                <span className="font-display text-2xl md:text-[1.85rem] tracking-tight text-ink leading-tight transition-colors group-hover:text-signal">
                  {m.value}
                </span>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
