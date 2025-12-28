"use client"

import { useState } from "react"
import type { CSSProperties } from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "../../../components/header"
import { Footer } from "../../../components/footer"
import { getNextAndPreviousProjects } from "../../../lib/projectOrder"
import { ImageModal } from "../../../components/image-modal"

type GalleryItem =
  | {
      type: "image"
      src: string
      alt: string
      description: string
      style?: CSSProperties
    }
  | {
      type: "video"
      src: string
      embedUrl?: string
      title: string
      description: string
    }
  | {
      type: "pdf"
      src: string
      title: string
      description: string
    }

const galleryItems: GalleryItem[] = [
  {
    type: "video",
    src: "https://youtu.be/ywtiF0A0-AA",
    embedUrl: "https://www.youtube.com/embed/ywtiF0A0-AA",
    title: "Trash Collection Robot Demo",
    description: "Autonomous run demonstrating collection and navigation behavior."
  },
  {
    type: "image",
    src: "/photos/robotcollection.png",
    alt: "Trash Collection Robot collecting objects",
    description: "Collection sequence during the test run."
  },
  {
    type: "image",
    src: "/photos/robotdump.png",
    alt: "Trash Collection Robot dumping mechanism",
    description: "Dumping action at the designated drop-off zone."
  },
  {
    type: "pdf",
    src: "/photos/J2%20MEMS%204110%20Brochure%202025.pdf",
    title: "J2 MEMS 4110 Brochure 2025",
    description: "Project overview brochure with goals, constraints, and system layout."
  },
  {
    type: "pdf",
    src: "/photos/MEMS%20411%20Design%20Report.pdf",
    title: "MEMS 411 Design Report",
    description: "Design report covering architecture, integration, and testing results."
  }
]

export default function TrashCollectionRobotPage() {
  const { previousProject, nextProject } = getNextAndPreviousProjects("trash-collection-robot")
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(
    null
  )

  const openModal = (src: string, alt: string) => {
    setSelectedImage({ src, alt })
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-8 pt-12">
              <div>
                <div className="relative aspect-[4/4] rounded-xl overflow-hidden">
                  <Image
                    src="/photos/robotfull.JPG"
                    alt="Trash Collection Robot"
                    fill
                    className="object-cover"
                    style={{ 
                      objectPosition: "50% 40%", 
                      transform: 'scale(1.1)'
                    }}
                  />
                </div>
              </div>

              <div>
                <h1 className="text-4xl font-light tracking-tight text-gray-800 mb-6">
                  Trash Collection Robot
                </h1>
                <div className="blue-gradient-box">
                  <h2 className="text-xl font-light tracking-tight mb-4 text-gray-800">
                    Technical Specifications
                  </h2>
                  <dl className="space-y-2 text-sm">
                    <div>
                      <dt className="font-bold text-gray-700">
                        Platform:{" "}
                        <span className="font-normal text-gray-800">
                          Mobile chassis with custom mounting stack
                        </span>
                      </dt>
                    </div>
                    <div>
                      <dt className="font-bold text-gray-700">
                        Actuation:{" "}
                        <span className="font-normal text-gray-800">
                          Servo-driven arm and gripper
                        </span>
                      </dt>
                    </div>
                    <div>
                      <dt className="font-bold text-gray-700">
                        Control:{" "}
                        <span className="font-normal text-gray-800">
                          Embedded controller with autonomous task sequencing
                        </span>
                      </dt>
                    </div>
                    <div>
                      <dt className="font-bold text-gray-700">
                        Focus:{" "}
                        <span className="font-normal text-gray-800">
                          Collection, transport, and dump cycles in a mock arena
                        </span>
                      </dt>
                    </div>
                  </dl>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="prose max-w-none">
                <p className="mb-6">
                  The Trash Collection Robot was built to autonomously identify,
                  collect, and dump objects within a defined arena. The system pairs
                  a mobile base with a servo-actuated arm, enabling controlled pickup
                  and release actions while navigating to target locations.
                </p>
                <p>
                  This project highlights mechanical integration, motion planning,
                  and real-world testing under time and space constraints, with
                  iterative refinements driven by on-site trials.
                </p>
              </div>

              <div className="space-y-8">
                <h2 className="text-2xl font-light tracking-tight mb-6">Project Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {galleryItems.map((item, index) => (
                    <div key={index} className="space-y-4">
                      {item.type === "image" ? (
                        <div
                          className="relative aspect-[16/9] overflow-hidden rounded-xl cursor-pointer"
                          onClick={() => openModal(item.src, item.alt)}
                        >
                          <Image
                            src={item.src}
                            alt={item.alt}
                            fill
                            className="object-cover"
                            style={item.style}
                          />
                        </div>
                      ) : item.type === "video" ? (
                        <div className="relative aspect-video overflow-hidden rounded-xl bg-black">
                          <iframe
                            src={item.embedUrl || item.src}
                            title={item.title}
                            className="w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                          />
                        </div>
                      ) : (
                        <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-white">
                          <iframe
                            src={item.src}
                            title={item.title}
                            className="w-full h-full"
                          />
                        </div>
                      )}
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center">
          {previousProject && (
            <Link
              href={`/projects/${previousProject}`}
              className="text-[18px] text-gray-700 hover:text-blue-500 transition-colors duration-300"
            >
              ← Previous Project
            </Link>
          )}
          {nextProject && (
            <Link
              href={`/projects/${nextProject}`}
              className="text-[18px] text-gray-700 hover:text-blue-500 transition-colors duration-300 ml-auto"
            >
              Next Project →
            </Link>
          )}
        </div>
      </div>
      <Footer />
      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          onClose={closeModal}
          src={selectedImage.src}
          alt={selectedImage.alt}
        />
      )}
    </div>
  )
}
