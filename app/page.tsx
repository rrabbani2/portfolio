import { Header } from "../components/header"
import { Hero } from "../components/hero"
import { FeaturedProjects } from "../components/featured-projects"
import { Contact } from "../components/contact"
import { Footer } from "../components/footer"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FeaturedProjects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

