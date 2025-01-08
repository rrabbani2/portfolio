import Link from 'next/link'

export function Footer() {
  return (
    <footer className="w-full py-6 px-4 bg-background border-t">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Raza Rabbani. All rights reserved.
        </p>
        <nav className="mt-4 md:mt-0">
          <ul className="flex space-x-4">
            <li>
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">
                Terms of Service
              </Link>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/raza-rabbani-74a13a192/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary">
                GitHub
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

