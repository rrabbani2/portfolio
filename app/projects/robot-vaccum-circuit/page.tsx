"use client"

import { Header } from "../../../components/header"
import { Footer } from "../../../components/footer"
import Image from "next/image"
import Link from "next/link"
import { getNextAndPreviousProjects } from "../../../lib/projectOrder"
import { useState } from "react"
import { ImageModal } from "../../../components/image-modal"

export default function RobotVaccumCircuitPage() {
  const { previousProject, nextProject } = getNextAndPreviousProjects('robot-vaccum-circuit');
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
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  <Image
                    src="/photos/circuittop.JPG"
                    alt="Robot Vaccum Circuit"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Right side - Title and Specs */}
              <div>
                <h1 className="text-4xl font-light tracking-tight text-gray-800 mb-6">Robot Vaccum Circuit</h1>
                <div className="blue-gradient-box">
                  <h2 className="text-xl font-light tracking-tight mb-4 text-gray-800">Technical Specifications</h2>
                  <dl className="space-y-2 text-sm">
                    <div>
                      <dt className="font-bold text-gray-700">Microcontroller: <span className="font-normal text-gray-800">Arduino Uno R3</span></dt>
                    </div>
                    <div>
                      <dt className="font-bold text-gray-700">Sensors: <span className="font-normal text-gray-800">HC-SR04 Ultrasonic, Force-Sensitive Resistor (FSR), IR Obstacle Avoidance, PIR Motion Sensor</span></dt>
                    </div>
                    <div>
                      <dt className="font-bold text-gray-700">Actuators: <span className="font-normal text-gray-800">28BYJ-48 Stepper Motor, Piezoelectric Buzzer</span></dt>
                    </div>
                    <div>
                      <dt className="font-bold text-gray-700">Motor Driver: <span className="font-normal text-gray-800">ULN2003 IC</span></dt>
                    </div>
                    <div>
                      <dt className="font-bold text-gray-700">Power: <span className="font-normal text-gray-800">9V Battery, USB Power</span></dt>
                    </div>
                  </dl>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="prose max-w-none">
                <p className="mb-6">
                  This Arduino-based circuit integrates multiple sensors and actuators to create a comprehensive robot vacuum control system. The circuit combines ultrasonic distance sensing, force detection, obstacle avoidance, and motion detection to enable intelligent navigation and cleaning functionality.
                </p>
                <p>
                  The system uses a ULN2003 motor driver to control a stepper motor for precise movement, while various sensors provide real-time feedback about the environment. The piezoelectric buzzer provides audio feedback for different system states, making this a complete embedded system prototype for autonomous cleaning applications.
                </p>
              </div>

              <div className="space-y-8">
                <h2 className="text-2xl font-light tracking-tight mb-6">Demo Videos</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-lg font-light text-gray-700">Circuit Simulation</h3>
                    <div className="relative aspect-video overflow-hidden rounded-xl">
                      <video 
                        className="w-full h-full rounded-xl"
                        controls
                        autoPlay
                        muted
                        loop
                      >
                        <source src="/photos/circuitsimulation.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-light text-gray-700">Circuit Demonstration</h3>
                    <div className="relative aspect-video overflow-hidden rounded-xl">
                      <video 
                        className="w-full h-full rounded-xl"
                        controls
                        autoPlay
                        muted
                        loop
                      >
                        <source src="/photos/circuitvideo.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <h2 className="text-2xl font-light tracking-tight mb-6">Project Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    {
                      src: "/photos/circuitside.JPG",
                      alt: "Circuit Side View",
                      description: "Side view of the complete circuit showing the Arduino Uno, breadboard, and all interconnected components"
                    },
                    {
                      src: "/photos/circuittop.JPG",
                      alt: "Circuit Top View",
                      description: "Top-down view of the breadboard layout showing sensor placement and wiring connections"
                    },
                    {
                      src: "/photos/circuitdiagram.png",
                      alt: "Circuit Diagram",
                      description: "Fritzing-style circuit diagram showing the complete wiring schematic and component connections"
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

