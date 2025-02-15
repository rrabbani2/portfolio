"use client"

import { Header } from "../../../components/header"
import { Footer } from "../../../components/footer"
import Image from "next/image"
import Link from "next/link"
import { getNextAndPreviousProjects } from "../../../lib/projectOrder"
import { useState } from "react"
import { ImageModal } from "../../../components/image-modal"

export default function MiniGolfRobotPage() {
  const { previousProject, nextProject } = getNextAndPreviousProjects('mini-golf-robot');
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
                    src="/photos/exploded.png"
                    alt="Mini-Golf Robot"
                    fill
                    className="object-cover"
                    style={{ objectPosition: '40% 30%' }}
                  />
                </div>
              </div>

              {/* Right side - Title and Specs */}
              <div>
                <h1 className="text-4xl font-light tracking-tight text-gray-800 mb-6">Mini-Golf Robot</h1>
                <div className="blue-gradient-box">
                  <h2 className="text-xl font-light tracking-tight mb-4 text-gray-800">Technical Specifications</h2>
                  <dl className="space-y-2 text-sm">
                    <div>
                      <dt className="font-bold text-gray-700">CAD Tools: <span className="font-normal text-gray-800">SOLIDWORKS simulation, FEA impact analysis</span></dt>
                    </div>
                    <div>
                      <dt className="font-bold text-gray-700">Hardware: <span className="font-normal text-gray-800">Servo-driven chipping and putting mechanism, Brushless DC motor driven continuous track wheels </span></dt>
                    </div>
                    <div>
                      <dt className="font-bold text-gray-700">Materials: <span className="font-normal text-gray-800">Lightweight oakwood frame, 1060 Alumnimum alloy clubhead, Hexcel AS4C carbon fiber shaft </span></dt>
                    </div>
                  </dl>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="prose max-w-none">
                <p className="mb-6">
                  Following the ASME design challenge guidelines, this golf robot was designed to climb over obstacles and shoot golf balls. Using Solidworks, the robot was optimized for strength, stability, and low mass. Simulations were conducted within Solidworks to analyze chipping dynamics, including launch angles and velocity. Key design decisions were informed by a morphological chart and mechanical analyses.
                </p>
                <p>
                  This project showcases the potential of robotics in sports and entertainment, while serving as a platform for exploring navigation algorithms and real-time decision-making in autonomous systems.
                </p>
              </div>

              <div className="space-y-8">
                <h2 className="text-2xl font-light tracking-tight mb-6">Project Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    {
                      src: "/photos/morphchart.png",
                      alt: "Morphological Chart",
                      description: "Morphological chart used to generate concepts for different types of striking mechanisms",
                      style: { objectPosition: '0% 50%' }
                    },
                    {
                      src: "/photos/fullcad.png",
                      alt: "Overall Robot Model",
                      description: "Full overview of the robot, modeled using Solidworks and optimized for strength and stability at low mass",
                      style: { objectPosition: '50% 1%' }
                    },
                    {
                      src: "/photos/climbing.png",
                      alt: "Maximum Climb Angle Determination",
                      description: "Determination of the robot's maximum climb angle based on positioning its center of mass over the desired fulcrum",
                      style: { objectPosition: '50% 15%' }
                    },
                    {
                      src: "/photos/chipping.png",
                      alt: "Chipping Dynamics Simulation",
                      description: "Solidworks simulation of the chipping dynamics, enabling launch angle and velocity calculations"
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
                          style={image.style}
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

