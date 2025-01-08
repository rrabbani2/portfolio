"use client"

import { Header } from "../../../components/header"
import { Footer } from "../../../components/footer"
import Image from "next/image"
import Link from "next/link"
import { getNextAndPreviousProjects } from "../../../lib/projectOrder"
import { useState } from "react"
import { ImageModal } from "../../../components/image-modal"

export default function ElectricSkateboardPage() {
  const { previousProject, nextProject } = getNextAndPreviousProjects('electric-skateboard');
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
            src="/photos/fullboard.jpg"
            alt="Electric Skateboard"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
            <div className="container mx-auto px-4 py-8">
              <h1 className="text-4xl font-light tracking-tight text-white mb-2">Electric Skateboard</h1>
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
                    <dt className="font-bold text-gray-700">Motor: <span className="font-normal text-gray-800">Single, Belt-driven</span></dt>
                  </div>
                  <div>
                    <dt className="font-bold text-gray-700">Batteries: <span className="font-normal text-gray-800">4x 5000mAh 5S 30C Lipo</span></dt>
                  </div>
                  <div>
                    <dt className="font-bold text-gray-700">Top speed: <span className="font-normal text-gray-800">20 mph</span></dt>
                  </div>
                  <div>
                    <dt className="font-bold text-gray-700">Range: <span className="font-normal text-gray-800">15 miles</span></dt>
                  </div>
                </dl>
              </div>

              <div className="prose max-w-none">
                <p>
                  This remote control electric skateboard was custom-built, featuring 4 batteries in series for more power. The project involved designing system architecture, hand-soldering batteries with XT90 connectors, flashing firmware onto the ESC for motor tuning, and conducting wireless test runs before integrating the electronics into the below-deck housing. The result was a powerful and fast electric skateboard that streamlined my commute to school, all for less than $300. 
                </p>
              </div>

              <div className="space-y-8">
                <h2 className="text-2xl font-light tracking-tight mb-6">Project Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    {
                      src: "/photos/fullsystem.png",
                      alt: "Electric Skateboard Component Layout",
                      description: "Rough component layout to assist in ordering and assembly"
                    },
                    {
                      src: "/photos/assembly.jpg",
                      alt: "Battery Assembly and ESC Configuration",
                      description: "Initial assembly of batteries soldered in series with XT90 connectors. Flashed desired firmware onto ESC to properly tune the motor"
                    },
                    {
                      src: "/photos/testing.png",
                      alt: "Wireless Test Run",
                      description: "First wireless test runs before installing electronics into below-deck housing"
                    },
                    {
                      src: "/photos/ride.jpg",
                      alt: "First Successful Ride",
                      description: "First successful ride at 20mph!"
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
        {selectedImage && (
          <ImageModal
            isOpen={!!selectedImage}
            onClose={closeModal}
            src={selectedImage.src}
            alt={selectedImage.alt}
          />
        )}
      </main>
      <Footer />
    </div>
  )
}

