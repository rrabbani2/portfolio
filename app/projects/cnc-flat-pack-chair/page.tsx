"use client"

import { useState } from "react"
import { Header } from "../../../components/header"
import { Footer } from "../../../components/footer"
import Image from "next/image"
import Link from "next/link"
import { getNextAndPreviousProjects } from "../../../lib/projectOrder"
import { ImageModal } from "../../../components/image-modal"

export default function CNCFlatPackChairPage() {
  const { previousProject, nextProject } = getNextAndPreviousProjects('cnc-flat-pack-chair');
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const openModal = (src: string, alt: string) => {
    setSelectedImage({ src, alt });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="relative h-[50vh] mb-8">
          <Image
            src="/photos/fullchair.jpg"
            alt="CNC Flat Pack Chair"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
            <div className="container mx-auto px-4 py-8">
              <h1 className="text-4xl font-light tracking-tight text-white mb-2">CNC Flat Pack Chair</h1>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="blue-gradient-box mb-8">
                <h2 className="text-xl font-light tracking-tight mb-4 text-gray-800">Technical Specifications</h2>
                <dl className="space-y-2 text-sm">
                  <div>
                    <dt className="font-bold text-gray-700">Material: <span className="font-normal text-gray-800">Sustainable Plywood</span></dt>
                  </div>
                  <div>
                    <dt className="font-bold text-gray-700">Manufacturing: <span className="font-normal text-gray-800">CNC Routing</span></dt>
                  </div>
                  <div>
                    <dt className="font-bold text-gray-700">Assembly time: <span className="font-normal text-gray-800">&lt; 10 minutes</span></dt>
                  </div>
                  <div>
                    <dt className="font-bold text-gray-700">Weight capacity: <span className="font-normal text-gray-800">300 lbs</span></dt>
                  </div>
                </dl>
              </div>

              <div className="prose max-w-none">
                <p>
                  This CNC Flat Pack Chair is an innovative approach to furniture design that combines modern manufacturing techniques with sustainable materials and user-friendly assembly. The chair was designed in Fusion360 to fit my body, using personalized dimensions to provide ergonomic comfort. 
                </p>
                <p>
                  The final version was CNC machined from a single sheet of plywood, utilizing friction fit pocket joints reinforced with wood glue. The design eliminates the need for additional hardware, and enables easy assembly and disassembly without tools. The flat-pack nature of the chair significantly reduces shipping volume, while the simple assembly process makes it accessible to a wide range of users.
                </p>
              </div>

              <div className="space-y-8">
                <h2 className="text-2xl font-light tracking-tight mb-6">Project Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    {
                      src: "/photos/concepts.png",
                      alt: "Initial Design Concepts",
                      description: "Initial hand-drawn design concepts for idea generation"
                    },
                    {
                      src: "/photos/cardboard.jpg",
                      alt: "Cardboard Prototype",
                      description: "Handcut cardboard prototype based on my favorite design"
                    },
                    {
                      src: "/photos/chaircad.jpg",
                      alt: "Fusion360 Model",
                      description: "Full chair designed and modeled in Fusion360 based on my personal dimensions"
                    },
                    {
                      src: "/photos/lasercut.jpg",
                      alt: "Laser Cut Models",
                      description: "Laser cut cardboard models used to test scale, visual appeal, and structural integrity"
                    },
                    {
                      src: "/photos/frame.jpg",
                      alt: "CNC Machined Frame",
                      description: "CNC machined frame of the chair to confirm pocket joint fit"
                    },
                    {
                      src: "/photos/chairsit.JPG",
                      alt: "Final Chair in Use",
                      description: "Final chair in use!"
                    }
                  ].map((image, index) => (
                    <div key={index} className="space-y-4">
                      <div 
                        className="relative aspect-[16/9] overflow-hidden rounded-lg cursor-pointer"
                        onClick={() => openModal(image.src, image.alt)}
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <p className="text-sm text-gray-600">{image.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
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
      </main>
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

