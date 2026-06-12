import type { Metadata, Viewport } from 'next'
import { Fraunces, Manrope, JetBrains_Mono } from 'next/font/google'
import { MotionProvider } from '@/components/motion-provider'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  style: ['normal', 'italic'],
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://razarabbani.com'),
  title: 'Raza Rabbani — Engineering Portfolio',
  description:
    'Portfolio of mechanical engineering, robotics, and controls work by Raza Rabbani.',
  openGraph: {
    title: 'Raza Rabbani — Engineering Portfolio',
    description:
      'Portfolio of mechanical engineering, robotics, and controls work by Raza Rabbani.',
    url: 'https://razarabbani.com',
    siteName: 'Raza Rabbani',
    type: 'website',
    images: [
      {
        url: '/photos/headshot.jpg',
        width: 1200,
        height: 630,
        alt: 'Raza Rabbani — Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raza Rabbani — Engineering Portfolio',
    description:
      'Portfolio of mechanical engineering, robotics, and controls work by Raza Rabbani.',
    images: ['/photos/headshot.jpg'],
  },
}

export const viewport: Viewport = {
  themeColor: '#FAF8F3',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable} ${jetbrains.variable}`}>
      <body className="font-sans antialiased bg-canvas text-ink">
        <div className="grain pointer-events-none fixed inset-0 z-[60] opacity-[0.04]" aria-hidden />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  )
}
