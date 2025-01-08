"use client"

import { Header } from "../../../components/header"
import { Footer } from "../../../components/footer"
import Image from "next/image"
import Link from "next/link"
import { getNextAndPreviousProjects } from "../../../lib/projectOrder"
import { useState } from "react"
import { ImageModal } from "../../../components/image-modal"

export default function InvertedPendulumPage() {
  const { previousProject, nextProject } = getNextAndPreviousProjects('inverted-pendulum');
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
            src="/photos/fulltitle.png"
            alt="Inverted Pendulum"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
            <div className="container mx-auto px-4 py-8">
              <h1 className="text-4xl font-light tracking-tight text-white mb-2">Inverted Pendulum</h1>
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
                    <dt className="font-bold text-gray-700">Hardware: <span className="font-normal text-gray-800">Geared rotary motor, Incremental encoders, Weighted pendulum arm</span></dt>
                  </div>
                  <div>
                    <dt className="font-bold text-gray-700">Software: <span className="font-normal text-gray-800">MATLAB, Simulink</span></dt>
                  </div>
                  <div>
                    <dt className="font-bold text-gray-700">Control System Elements: <span className="font-normal text-gray-800">State selector, PID loop, Jacobian balance function</span></dt>
                  </div>
                </dl>
              </div>

              <div className="prose max-w-none">
                <p>
                  For this project, I developed a control system for an inverted pendulum that self-balances and can recover when disturbed. Using MATLAB and Simulink, I combined Lagrangian and Hamiltonian dynamics to model motion and calculate system parameters, and Jacobian transformations to track positions. A state selector and PID loops enable seamless transitions between swing-up and balancing, ensuring precise and adaptive control.
                </p>
                <p>
                  This project not only showcases the practical application of control theory but also serves as a foundation for more complex balancing systems in robotics, such as self-balancing rockets and stabilization mechanisms in drones.
                </p>
              </div>

              <div className="space-y-8">
                <h2 className="text-2xl font-light tracking-tight mb-6">Project Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    {
                      src: "/photos/rotation.png",
                      alt: "Inverted Pendulum Setup",
                      description: "Using matrix transformations and frame rotations, we are able to track the pendulum's tip relative to the base"
                    },
                    {
                      src: "/photos/lagrangian.png",
                      alt: "Control System Interface",
                      description: "By applying Lagrangian dynamics (L = T - V), to the Euler-Lagrange equations of motion, we can simulate motion of the pendulum, and predict its response to specific inputs"
                    },
                    {
                      src: "/photos/envelope.png",
                      alt: "Work Envelope Visualization",
                      description: "The work envelope represents all possible points the system can reach. This was plotted in MATLAB using Plot 3. Because the system has only 2 degrees-of-freedom, the work envelope is a surface area"
                    },
                    {
                      src: "/photos/hamiltonian.png",
                      alt: "Hamiltonian Approach Visualization",
                      description: "The Hamiltonian approach is used to calculate the physical parameters of the system by analyzing the input torque, mechanical power, and energy losses"
                    },
                    {
                      src: "/photos/statespace.png",
                      alt: "State Selector Diagram",
                      description: "The state selector uses a MATLAB logic function combined with a Simulink multiport switch to transition the system between swing-up and balancing, based on its position"
                    },
                    {
                      src: "/photos/system.png",
                      alt: "Overall Control System in Simulink",
                      description: "Here is the overall control system, modeled using Simulink. It combines the state selector, a PID loop for automatic swing-up, and the balancing functionality which uses an error function to drive the system parameters to 0"
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

