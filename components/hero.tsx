import Image from 'next/image'
import Link from 'next/link'
import type { CSSProperties } from 'react'

export function Hero() {
  return (
    <div className="py-8 pb-6 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-100 opacity-50 z-0"></div>
      <div className="relative z-10 flex flex-col items-center space-y-6">
        <div
          className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg hero-avatar-container"
          style={
            {
              "--avatar-x": "50%",
              "--avatar-y": "30%",
              "--avatar-shift-x": "3%", 
              "--avatar-shift-y": "0%",
              "--avatar-scale": "1.2",
            } as CSSProperties
          }
        >
          <img
            src="/photos/headshot.png"
            alt="Raza Rabbani"
            className="hero-avatar-image absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <h1 className="text-[40px] font-light tracking-[0.02em] leading-none gradient-text">
          RAZA RABBANI
        </h1>
        <p className="max-w-[800px] mx-auto px-8 sm:px-16 md:px-24 lg:px-32 text-gray-700 text-[16px] leading-relaxed font-light">
        Welcome to my portfolio! From self-balancing systems to high-tech farms, my projects showcase the intersection of control theory, mechanical design, and practical problem-solving. This collection features both personal projects and class assignments that pushed me to blend technical expertise with creative engineering approaches. Thank you for taking the time to explore my work!
        </p>
        <Link 
          href="/about"
          className="inline-flex items-center text-[16px] text-white bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 px-6 py-2 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
        >
          More About Me →
        </Link>
      </div>
    </div>
  )
}

//final
