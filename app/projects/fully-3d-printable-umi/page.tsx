"use client"

import { Header } from "../../../components/header"
import { Footer } from "../../../components/footer"
import Image from "next/image"
import Link from "next/link"
import { getNextAndPreviousProjects } from "../../../lib/projectOrder"
import { useState } from "react"
import { ImageModal } from "../../../components/image-modal"

export default function Fully3DPrintableUMIPage() {
  const { previousProject, nextProject } = getNextAndPreviousProjects('fully-3d-printable-umi');
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
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-8 pt-12">
              {/* Left side - Image */}
              <div>
                <div className="relative aspect-[4/4] rounded-xl overflow-hidden">
                  <Image
                    src="/photos/umi1.JPG"
                    alt="Fully 3D Printable UMI"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Right side - Title and Specs */}
              <div>
                <h1 className="text-4xl font-light tracking-tight text-gray-800 mb-6">Fully 3D Printable UMI</h1>
                <div className="blue-gradient-box">
                  <h2 className="text-xl font-light tracking-tight mb-4 text-gray-800">Technical Specifications</h2>
                  <dl className="space-y-2 text-sm">
                    <div>
                      <dt className="font-bold text-gray-700">Manufacturing: <span className="font-normal text-gray-800">Fully 3D printable, and assembled entirely with press-fits and superglue (no fasteners required)</span></dt>
                    </div>
                    <div>
                      <dt className="font-bold text-gray-700">Data Capture: <span className="font-normal text-gray-800">Adjustable phone mount for hand-centric video data collection from any phone</span></dt>
                    </div>
                  </dl>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="prose max-w-none">
                <p>
                  This project is based on Stanford's UMI project, and was modified to reduce part count and decrease production cost. My UMI is fully 3D printable (including the linear rail), and can be assembled entirely with press-fits and superglue. It also features two adjustable cold-shoe mount rails to hold a phone mount. The device is designed to be a low-cost, accessible tool for hand-centric video data collection from any phone, enabling anyone with a 3D printer and a smartphone to produce robot-learning-ready demonstrations. Developed for <a href="https://farhand.ai/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">farhand.ai.</a>
                </p>
              </div>

              <div className="space-y-8">
                <h2 className="text-2xl font-light tracking-tight mb-6">Project Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    {
                      src: "/photos/umi1.JPG",
                      alt: "Fully 3D Printable UMI",
                    },
                    {
                      src: "/photos/umi2.JPG",
                      alt: "UMI Detail View",
                    }
                  ].map((image, index) => (
                    <div key={index} className="space-y-4">
                      <div
                        className="relative aspect-[16/9] overflow-hidden rounded-xl cursor-pointer"
                        onClick={() => openModal(image.src, image.alt)}
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-light tracking-tight mb-6">Manipulation Demo</h2>
                <div className="max-w-[300px]">
                  <div className="relative aspect-[9/16] overflow-hidden">
                    <video
                      className="w-full rounded-xl"
                      controls
                      autoPlay
                      muted
                      loop
                    >
                      <source src="/photos/manipulation.MP4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
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
