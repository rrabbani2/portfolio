export function Footer() {
  return (
    <footer className="border-t border-hairline py-10">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-4 px-6 md:flex-row md:items-center md:justify-between md:px-12 font-mono text-[10px] uppercase tracking-[0.24em] text-ink-soft">
        <p>© {new Date().getFullYear()}&nbsp;&nbsp;⋆&nbsp;&nbsp;Designed &amp; built by Raza Rabbani&nbsp;&nbsp;⋆&nbsp;&nbsp;San Francisco, CA</p>
        <nav>
          <ul className="flex gap-6">
            <li>
              <a
                href="https://www.linkedin.com/in/raza-rabbani-74a13a192/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-signal"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a href="mailto:raza.rabbani2@gmail.com" className="transition-colors hover:text-signal">
                Email
              </a>
            </li>
            <li>
              <a href="#top" className="group transition-colors hover:text-signal">
                Top <span className="inline-block transition-transform group-hover:-translate-y-0.5">↑</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
