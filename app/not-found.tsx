import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-grow items-center">
        <div className="mx-auto w-full max-w-[1400px] px-6 py-24 md:px-12">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink-soft">
            ◦ Error 404
          </p>
          <h1 className="mt-4 font-display text-[clamp(2.5rem,8vw,7rem)] leading-[0.95] tracking-[-0.025em] text-ink">
            Page not <span className="italic">found</span>
          </h1>
          <Link
            href="/"
            className="group mt-10 inline-flex items-baseline gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink transition-colors hover:text-signal"
          >
            <span className="border-b border-current pb-1">Back to home</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
