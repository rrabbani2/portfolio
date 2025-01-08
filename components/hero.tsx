import Image from 'next/image'
import Link from 'next/link'

export function Hero() {
  return (
    <div className="py-20 pb-12 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-100 opacity-50 z-0"></div>
      <div className="relative z-10 flex flex-col items-center space-y-8">
        <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <Image
            src="/photos/headshot.png"
            alt="Raza Rabbani"
            fill
            className="object-cover"
          />
        </div>
        <h1 className="text-[48px] font-light tracking-[0.02em] leading-none gradient-text">
          RAZA RABBANI
        </h1>
        <p className="max-w-[800px] mx-auto px-8 sm:px-16 md:px-24 lg:px-32 text-gray-700 text-[18px] leading-relaxed font-light -mt-2">
          I am a dedicated mechanical engineer and robotics specialist, deeply committed
          to the principles of innovative design. With extensive hands-on experience
          in autonomous systems and smart.
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

