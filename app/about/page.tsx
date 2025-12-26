import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { Card, CardContent, CardTitle } from "../../components/ui/card"
import Image from "next/image"
import { Contact } from "../../components/contact"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-5xl font-light mb-8 gradient-text pb-2">About Me</h1>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="relative w-full aspect-square rounded-xl overflow-hidden">
              <Image
                src="/photos/headshot.png"
                alt="Raza Rabbani"
                fill
                className="object-cover"
                style={{ 
                  objectPosition: '50% 20%',
                  transform: 'scale(1.2)'
                }} 
              />
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-6 text-xl font-light pb-6">
              <p>
                Hi, my name is Raza. I am a senior at Washington University in St. Louis studying Mechanical Engineering with minors in Robotics and Mechatronics.
              </p>
              <p>
                In my free time, I enjoy reading sci-fi, cooking, and playing sports like golf, squash, ping pong and pickleball. I'm also an avid 3D printer, and am constantly looking to use my 3D printer to create simple solutions for improving my everyday life. 
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 -mx-4">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  )
}

