import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    id: 'inverted-pendulum',
    title: 'Inverted Pendulum',
    description: 'Self balancing inverted pendulum equipped with automated swing-up, and self righting functionality. Controlled via MATLAB scripts and Simulink circuits.',
    image: '/photos/cover.jpeg'
  },
  {
    id: 'mini-golf-robot',
    title: 'Mini-Golf Robot',
    description: 'Mini-Golf robot concept designed in Solidworks with a servo driven chipping and putting mechanism and the ability to climb over walls.',
    image: '/photos/fullcad.png'
  },
  {
    id: 'automated-chicken-coop',
    title: 'Automated Chicken Coop',
    description: 'Home for 12 chickens fitted with automated gravity feeders, industrial-grade water nozzles and a linearly actuated wifi-enabled gate.',
    image: '/photos/fullcoop.jpg'
  },
  {
    id: 'cnc-flat-pack-chair',
    title: 'CNC Flat Pack Chair',
    description: 'CNC machined from a single sheet plywood, this chair was custom designed to fit my body and is held together by friction alone.',
    image: '/photos/fullfullchair.jpg'
  },
  {
    id: 'electric-skateboard',
    title: 'Electric Skateboard',
    description: 'Remote controlled with a top speed of 20mph, powered by 4 series batteries and equipped with an interchangeable gear mount.',
    image: '/photos/fullboard.jpg'
  }
];

export function FeaturedProjects() {
  return (
    <section className="py-12">
      <div className="max-w-[1400px] mx-auto px-12">
        <h2 className="text-[32px] font-light mb-12 gradient-text">
          Projects at a Glance
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link 
              key={project.id}
              href={`/projects/${project.id}`}
              className="group block transition-all duration-300 rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1"
            >
              <div className="h-full flex flex-col bg-white transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-[#eff6ff] group-hover:to-[#cffafe]">
                <div className="relative aspect-[3/2] bg-gray-100 flex items-center justify-center overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    style={{ 
                      objectPosition: project.id === 'inverted-pendulum' ? '50% 30%' : 
                                    project.id === 'mini-golf-robot' ? '50% 30%' :
                                    project.id === 'electric-skateboard' ? 'center center' :
                                    '50% 50%',
                      objectFit: project.id === 'electric-skateboard' ? 'contain' : 
                                project.id === 'cnc-flat-pack-chair' ? 'contain' :
                                'cover',
                      transform: project.id === 'electric-skateboard' ? 'scale(1.7) rotate(270deg)' : 
                                project.id === 'cnc-flat-pack-chair' ? 'scale(1.5)' :
                                'none'
                    }}
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-[22px] font-light mb-2 text-gray-800 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-light transition-colors duration-300">
                    {project.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

