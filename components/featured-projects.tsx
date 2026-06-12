'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import type { CSSProperties } from 'react'

type Project = {
  id: string
  title: string
  discipline: string
  image: string
}

const projects: Project[] = [
  { id: 'fully-3d-printable-umi', title: 'Fully 3D Printable UMI', discipline: 'Gripper Design', image: '/photos/umi1.JPG' },
  { id: 'trash-collection-robot', title: 'Trash Collection Robot', discipline: 'Full Stack Robotics', image: '/photos/prof_photo.jpg' },
  { id: 'inverted-pendulum', title: 'Inverted Pendulum', discipline: 'Control Systems', image: '/photos/cover.jpeg' },
  { id: 'robot-vaccum-circuit', title: 'Robot Vacuum Circuit', discipline: 'Electronics', image: '/photos/circuittop.JPG' },
  { id: 'electric-skateboard', title: 'Electric Skateboard', discipline: 'Transportation', image: '/photos/fullboard.webp' },
  { id: 'automated-chicken-coop', title: 'Automated Chicken Coop', discipline: 'Farming!', image: '/photos/fullcoop.jpg' },
  { id: 'cnc-flat-pack-chair', title: 'CNC Flat Pack Chair', discipline: 'CNC Fabrication', image: '/photos/fullchair.webp' },
  { id: 'mini-golf-robot', title: 'Mini-Golf Robot', discipline: 'Mechanism Design', image: '/photos/fullcad.png' },
]

const previewStyle: Record<string, CSSProperties> = {
  'fully-3d-printable-umi': { objectPosition: '50% 32%' },
  'inverted-pendulum': { objectPosition: '50% 30%' },
  'mini-golf-robot': { objectPosition: '50% 30%' },
  'electric-skateboard': { objectFit: 'contain', transform: 'translateY(1%) scale(1.5) rotate(270deg)' },
  'robot-vaccum-circuit': { objectFit: 'contain', transform: 'rotate(270deg) scale(1.6)' },
}

const easeOut = [0.22, 1, 0.36, 1] as const

export function FeaturedProjects() {
  return (
    <section id="work" className="relative pt-10 md:pt-12 pb-16 md:pb-20">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        {/* Section heading */}
        <div className="mb-10 md:mb-12 flex items-end justify-between gap-6">
          <div>
            <h2 className="font-display text-[clamp(2.25rem,6vw,4.5rem)] leading-[0.95] tracking-tight text-ink">
              <span className="italic">Projects</span>
            </h2>
          </div>
        </div>

        {/* Editorial project list */}
        <ul className="border-t border-hairline">
          {projects.map((project, idx) => {
            const style = previewStyle[project.id] || {}
            return (
              <motion.li
                key={project.id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.65, delay: Math.min(idx * 0.04, 0.32), ease: easeOut }}
                className="group relative border-b border-hairline hover:z-10"
              >
                <Link
                  href={`/projects/${project.id}`}
                  className="block focus-visible:outline-none"
                >
                  <div className="relative grid grid-cols-12 items-center gap-4 px-1 py-6 md:py-9 lg:py-11">
                    {/* Number */}
                    <span className="col-span-2 md:col-span-1 font-mono text-[11px] tracking-[0.2em] text-ink-soft transition-colors group-hover:text-signal">
                      {(idx + 1).toString().padStart(2, '0')}
                    </span>

                    {/* Title */}
                    <div className="col-span-10 md:col-span-5">
                      <h3 className="font-display text-[1.65rem] md:text-[2.5rem] lg:text-[3.25rem] leading-[1.02] tracking-[-0.015em] text-ink transition-[color,transform] duration-500 ease-out group-hover:translate-x-2 group-hover:text-ink/60">
                        {project.title}
                      </h3>
                      <span className="mt-1.5 block font-mono text-[9px] uppercase tracking-[0.22em] text-ink-soft md:hidden">
                        {project.discipline}
                      </span>
                    </div>

                    {/* Inline thumbnail — fills row height, enlarges on hover */}
                    <div className="hidden md:flex md:col-span-2 justify-end translate-x-8 lg:translate-x-12">
                      <div className="relative h-24 w-36 lg:h-32 lg:w-48 origin-center overflow-hidden rounded-xl bg-paper ring-1 ring-hairline/60 shadow-[0_10px_28px_-14px_rgba(20,15,10,0.28)] transition-all duration-500 ease-out group-hover:scale-[1.18] group-hover:-rotate-2 group-hover:z-20 group-hover:shadow-[0_28px_60px_-20px_rgba(20,15,10,0.5)]">
                        <Image
                          src={project.image}
                          alt=""
                          fill
                          sizes="(min-width: 1024px) 192px, 144px"
                          className="object-cover"
                          style={style}
                        />
                      </div>
                    </div>

                    {/* Discipline tag */}
                    <span className="hidden md:block md:col-span-3 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-soft text-right">
                      {project.discipline}
                    </span>

                    {/* Arrow */}
                    <span className="hidden md:flex md:col-span-1 justify-end font-mono text-[18px] text-ink-soft transition-all group-hover:text-signal group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </Link>
              </motion.li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
