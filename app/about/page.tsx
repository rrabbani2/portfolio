import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { Card, CardContent, CardTitle } from "../../components/ui/card"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 gradient-text">About Me</h1>
        <Card className="border border-border/40">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Headshot%20from%20Razarabbani%20via%20Gmail-mfxmzWJyLwnZNWzWnmqHoVdpspIv2e.png"
                    alt="Raza Rabbani"
                    layout="fill"
                    objectFit="cover"
                    className="transition-all duration-300 hover:scale-105"
                  />
                </div>
                <p className="text-center text-muted-foreground">Raza Rabbani</p>
              </div>
              <div className="space-y-4">
                <CardTitle className="text-2xl font-light tracking-tight">Mechanical Engineer & Robotics Enthusiast</CardTitle>
                <div className="space-y-2">
                  <p>
                    Hello! I'm a passionate mechanical engineer with a focus on robotics and automation. With over 5 years of experience in the field, I've had the opportunity to work on a wide range of exciting projects that push the boundaries of what's possible in engineering.
                  </p>
                  <p>
                    My expertise lies in designing and developing innovative solutions for complex mechanical systems, particularly in the areas of:
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Autonomous robotics</li>
                    <li>Smart manufacturing systems</li>
                    <li>Sustainable energy devices</li>
                    <li>Precision control systems</li>
                  </ul>
                  <p>
                    I'm constantly driven by the challenge of turning cutting-edge concepts into practical, efficient, and sustainable solutions. When I'm not in the workshop or at my design station, you can find me mentoring young engineers, participating in robotics competitions, or exploring the latest advancements in AI and machine learning.
                  </p>
                  <p>
                    Feel free to explore my portfolio to see some of the projects I've worked on, and don't hesitate to reach out if you'd like to discuss potential collaborations or just geek out about the future of engineering!
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  )
}

