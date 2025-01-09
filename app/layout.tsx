import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Raza Rabbani | Portfolio',
  description: "Raza Rabbani's Portfolio",
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
