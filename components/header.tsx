'use client'
import Link from 'next/link'
import { useEffect } from 'react'

export function Header() {
  useEffect(() => {
    const handleScroll = (e: Event) => {
      e.preventDefault()
      const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href')
      if (href === '#contact') {
        const contactSection = document.getElementById('contact')
        contactSection?.scrollIntoView({ behavior: 'smooth' })
      }
    }

    const contactLink = document.querySelector('a[href="#contact"]')
    contactLink?.addEventListener('click', handleScroll)

    return () => {
      contactLink?.removeEventListener('click', handleScroll)
    }
  }, [])

  return (
    <header className="w-full py-4 px-2 bg-white shadow-sm">
      <nav className="max-w-[1400px] mx-auto flex justify-between items-center px-4">
        <Link href="/" className="text-[18px] tracking-wide font-light gradient-text">
          RAZA RABBANI
        </Link>
        <ul className="flex space-x-8">
          <li>
            <Link href="/" className="text-[16px] text-gray-700 hover:text-blue-500 transition-colors duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-[16px] text-gray-700 hover:text-blue-500 transition-colors duration-300">
              About
            </Link>
          </li>
          <li>
            <a href="#contact" className="text-[16px] text-gray-700 hover:text-blue-500 transition-colors duration-300 cursor-pointer">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

