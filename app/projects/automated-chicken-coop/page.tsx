"use client"

import { Header } from "../../../components/header"
import { Footer } from "../../../components/footer"
import Image from "next/image"
import Link from "next/link"
import { getNextAndPreviousProjects } from "../../../lib/projectOrder"
import { useState } from "react"
import { ImageModal } from "../../../components/image-modal"

export default function AutomatedChickenCoopPage() {
  const { previousProject, nextProject } = getNextAndPreviousProjects('automated-chicken-coop');
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
            src="/photos/fullcoop.jpg"
            alt="Automated Chicken Coop"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
            <div className="container mx-auto px-4 py-8">
              <h1 className="text-4xl font-light tracking-tight text-white mb-2">Automated Chicken Coop</h1>
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
                    <dt className="font-bold text-gray-700">Design: <span className="font-normal text-gray-800">TinkerCAD, Physical foundation planning</span></dt>
                  </div>
                  <div>
                    <dt className="font-bold text-gray-700">Hardware: <span className="font-normal text-gray-800">Linear actuated gate, Live Wyze cameras</span></dt>
                  </div>
                  <div>
                    <dt className="font-bold text-gray-700">Feeding: <span className="font-normal text-gray-800">20kg gravity-feeders, Industrial-grade water nozzles</span></dt>
                  </div>
                  <div>
                    <dt className="font-bold text-gray-700">Connectivity: <span className="font-normal text-gray-800">Wi-Fi enabled, Google integration, App and voice control</span></dt>
                  </div>
                </dl>
              </div>

              <div className="prose max-w-none">
                <p>
                  This chicken coop is a smart agricultural solution that combines IoT technology with sustainable design to improve poultry management. This system automates various aspects of chicken care, ensuring optimal living conditions while reducing human labor and resource consumption.
                </p>
                <p>
                  Key features include gravity feeders, industrial-grade water nozzles, and a WiFi-enabled, linearly actuated gate controlled via Google integration. This project not only demonstrates the application of smart technology in agriculture but also addresses important issues in sustainable farming and animal welfare.
                </p>
              </div>

              <div className="space-y-8">
                <h2 className="text-2xl font-light tracking-tight mb-6">Project Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    {
                      src: "/photos/cad.jpg",
                      alt: "TinkerCAD Model",
                      description: "TinkerCAD was used to model the frame and provide an estimate for the amount of material needed for the project"
                    },
                    {
                      src: "/photos/cutting.png",
                      alt: "Frame Construction",
                      description: "The frame of the coop was made out of pressure treated outdoor 2x4s, which were each precisely measured and cut using a handheld circular saw"
                    },
                    {
                      src: "/photos/cadframe.jpg",
                      alt: "Finalized Frame",
                      description: "Finalized frame compared to the CAD model, which served to be extremely accurate and allowed for minimal waste"
                    },
                    {
                      src: "/photos/gravityfeeder.JPG",
                      alt: "Feeding Tube",
                      description: "Feeding tube designed to use gravity for automatic trough replenishment. Exterior access allows for easy refilling without needing to enter the enclosure"
                    },
                    {
                      src: "/photos/chickens.JPG",
                      alt: "Completed Chicken Coop",
                      description: "A secure and spacious new home for the chickens with room to roam, perch, and explore!"
                    },
                    {
                      src: "/photos/eggs.jpg",
                      alt: "Fresh Eggs",
                      description: "Collecting nearly 12 eggs daily, we began selling to neighbors and sharing fresh, organic eggs as gifts"
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

