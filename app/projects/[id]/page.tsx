import { Header } from "../../../components/header"
import { Footer } from "../../../components/footer"
import Image from "next/image"
import { notFound } from "next/navigation"

// This would typically come from a database or CMS
const projects = {
  'autonomous-robot': {
    title: 'Autonomous Robot',
    description: 'An autonomous robot designed for warehouse inventory management.',
    coverImage: '/placeholder.svg?height=800&width=1600',
    fullDescription: `
      This autonomous robot project represents a significant advancement in warehouse automation technology. 
      The robot is designed to navigate complex warehouse environments independently, performing inventory 
      management tasks with high precision and efficiency.

      Key Features:
      • Advanced navigation system using SLAM technology
      • Real-time inventory tracking and management
      • Obstacle avoidance and path optimization
      • Integration with existing warehouse management systems
      • Battery management and autonomous charging
    `,
    images: [
      { src: '/placeholder.svg?height=600&width=800', alt: 'Autonomous Robot Front View', description: 'Front view of the autonomous robot showcasing its sleek design and advanced sensors.' },
      { src: '/placeholder.svg?height=600&width=800', alt: 'Autonomous Robot in Action', description: 'The robot efficiently navigating through a warehouse, demonstrating its obstacle avoidance capabilities.' },
      { src: '/placeholder.svg?height=600&width=800', alt: 'Autonomous Robot Control Interface', description: 'User-friendly control interface for monitoring and managing the robot\'s operations.' }
    ],
    specs: [
      { label: 'Operating System', value: 'ROS2' },
      { label: 'Battery Life', value: '8 hours' },
      { label: 'Navigation', value: 'SLAM + LiDAR' },
      { label: 'Payload Capacity', value: '50kg' }
    ]
  },
  'smart-factory': {
    title: 'Smart Factory System',
    description: 'A comprehensive smart factory system integrating IoT and AI.',
    coverImage: '/placeholder.svg?height=800&width=1600',
    fullDescription: `
      The Smart Factory System is a cutting-edge solution that brings together IoT sensors, 
      artificial intelligence, and advanced analytics to create a fully connected and 
      intelligent manufacturing environment.

      Key Features:
      • Real-time production monitoring
      • Predictive maintenance
      • Quality control automation
      • Energy optimization
      • Supply chain integration
    `,
    images: [
      { src: '/placeholder.svg?height=600&width=800', alt: 'Smart Factory System Overview', description: 'An overview of the smart factory system, highlighting its key components and functionalities.' },
      { src: '/placeholder.svg?height=600&width=800', alt: 'Smart Factory Dashboard', description: 'Real-time dashboard displaying production metrics, energy consumption, and other key performance indicators.' },
      { src: '/placeholder.svg?height=600&width=800', alt: 'Smart Factory Integration', description: 'Integration of the smart factory system with existing enterprise resource planning (ERP) systems.' }
    ],
    specs: [
      { label: 'AI Framework', value: 'TensorFlow' },
      { label: 'Sensors', value: 'IoT Network' },
      { label: 'Analytics', value: 'Real-time' },
      { label: 'Integration', value: 'REST API' }
    ]
  },
  'drone-delivery': {
    title: 'Drone Delivery Mechanism',
    description: 'An innovative mechanism for secure and efficient drone deliveries.',
    coverImage: '/placeholder.svg?height=800&width=1600',
    fullDescription: `
      This drone delivery mechanism project focuses on creating a reliable and secure 
      system for autonomous package delivery in urban environments. The mechanism 
      includes advanced features for package security and precise delivery.

      Key Features:
      • Secure package locking system
      • Precision landing mechanism
      • Weather-resistant design
      • Smart release system
      • Real-time tracking
    `,
    images: [
      { src: '/placeholder.svg?height=600&width=800', alt: 'Drone Delivery in Action', description: 'A drone autonomously delivering a package to a designated location.' },
      { src: '/placeholder.svg?height=600&width=800', alt: 'Secure Package Locking System', description: 'Close-up view of the secure package locking system, ensuring package integrity during transit.' },
      { src: '/placeholder.svg?height=600&width=800', alt: 'Drone Landing Mechanism', description: 'Detailed view of the drone\'s precision landing mechanism, enabling safe and accurate package delivery.' }
    ],
    specs: [
      { label: 'Payload Capacity', value: '5kg' },
      { label: 'Range', value: '10km' },
      { label: 'Battery Life', value: '30 mins' },
      { label: 'Landing Precision', value: '±5cm' }
    ]
  },
  'sustainable-energy': {
    title: 'Sustainable Energy Device',
    description: 'A device harnessing renewable energy sources for everyday use.',
    coverImage: '/placeholder.svg?height=800&width=1600',
    fullDescription: `
      The Sustainable Energy Device project aims to make renewable energy accessible 
      for everyday applications. This innovative device combines multiple renewable 
      energy sources to provide reliable power for household use.

      Key Features:
      • Hybrid solar-wind energy capture
      • Efficient energy storage
      • Smart power management
      • Mobile app integration
      • Weather-adaptive operation
    `,
    images: [
      { src: '/placeholder.svg?height=600&width=800', alt: 'Sustainable Energy Device Overview', description: 'Overview of the sustainable energy device, showcasing its compact and efficient design.' },
      { src: '/placeholder.svg?height=600&width=800', alt: 'Solar Panel Integration', description: 'Close-up view of the solar panels integrated into the device, capturing solar energy efficiently.' },
      { src: '/placeholder.svg?height=600&width=800', alt: 'Wind Turbine Integration', description: 'Detailed view of the wind turbine component, harnessing wind energy to supplement solar power.' }
    ],
    specs: [
      { label: 'Power Output', value: '2kW' },
      { label: 'Storage', value: '5kWh' },
      { label: 'Efficiency', value: '92%' },
      { label: 'Lifespan', value: '20 years' }
    ]
  },
  'precision-control': {
    title: 'Precision Control System',
    description: 'A high-accuracy control system for industrial automation applications.',
    coverImage: '/placeholder.svg?height=800&width=1600',
    fullDescription: `
      The Precision Control System is an advanced solution designed for industrial 
      automation applications requiring extremely high accuracy and reliability. 
      This system integrates cutting-edge sensors, real-time processing, and 
      adaptive control algorithms to achieve unprecedented levels of precision 
      in various manufacturing processes.

      Key Features:
      • Sub-micron positioning accuracy
      • Real-time adaptive control
      • Multi-axis synchronization
      • Vibration compensation
      • Thermal drift correction
    `,
    images: [
      { src: '/placeholder.svg?height=600&width=800', alt: 'Precision Control System Architecture', description: 'Diagram illustrating the architecture of the precision control system, highlighting its key components and functionalities.' },
      { src: '/placeholder.svg?height=600&width=800', alt: 'System in Operation', description: 'The system in operation in an industrial setting, demonstrating its high accuracy and reliability.' },
      { src: '/placeholder.svg?height=600&width=800', alt: 'Control Interface', description: 'User-friendly control interface for monitoring and managing the system\'s operations.' }
    ],
    specs: [
      { label: 'Accuracy', value: '±0.1µm' },
      { label: 'Response Time', value: '<1ms' },
      { label: 'Axes', value: 'Up to 6' },
      { label: 'Interface', value: 'EtherCAT' }
    ]
  }
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects[params.id as keyof typeof projects]

  if (!project) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="relative h-[50vh] mb-8">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
            <div className="container mx-auto px-4 py-8">
              <h1 className="text-4xl font-light tracking-tight text-white mb-2">{project.title}</h1>
              <p className="text-xl text-gray-200 font-light">{project.description}</p>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h2 className="text-lg font-light tracking-tight mb-4">Technical Specifications</h2>
                <dl className="grid grid-cols-2 gap-2 text-sm">
                  {project.specs.map((spec) => (
                    <div key={spec.label} className="flex justify-between">
                      <dt className="font-light text-gray-600">{spec.label}:</dt>
                      <dd className="font-light">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="prose max-w-none">
                {project.fullDescription.split('\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="space-y-8">
                <h2 className="text-2xl font-light tracking-tight mb-6">Project Gallery</h2>
                {project.images.map((image, index) => (
                  <div key={index} className="space-y-4">
                    <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-sm text-gray-600 italic">{image.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

