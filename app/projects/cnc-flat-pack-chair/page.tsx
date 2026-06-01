'use client'

import { ProjectPageLayout } from '@/components/project-page'

export default function CNCFlatPackChairPage() {
  return (
    <ProjectPageLayout
      id="cnc-flat-pack-chair"
      tag="CNC ⋆ Furniture"
      title="CNC Flat Pack"
      titleEmphasis="Chair"
      heroImage={{
        src: '/photos/fullchair.jpg',
        alt: 'CNC Flat Pack Chair',
        aspect: '1/1',
        style: { transform: 'scale(1.55)' },
      }}
      heroCaption="Fig. 01 ⋆ Assembled chair"
      specs={[
        { label: 'Material', value: 'Sustainable plywood, single sheet.' },
        { label: 'Manufacturing', value: 'CNC routing.' },
        { label: 'Assembly time', value: 'Under 10 minutes — no tools required.' },
        { label: 'Weight capacity', value: '300 lbs.' },
      ]}
      prose={
        <>
          <p>
            The CNC Flat Pack Chair pairs modern manufacturing with sustainable materials and
            tool-free assembly. The chair was designed in Fusion 360 to fit my body — using
            personalized dimensions for ergonomic comfort.
          </p>
          <p>
            The final version was CNC machined from a single sheet of plywood, using friction-fit
            pocket joints reinforced with wood glue. The design eliminates additional hardware and
            enables easy assembly and disassembly without tools. The flat-pack nature reduces
            shipping volume; the simple assembly process makes it broadly accessible.
          </p>
        </>
      }
      gallery={[
        {
          type: 'image',
          src: '/photos/concepts.png',
          alt: 'Initial Design Concepts',
          description: 'Initial hand-drawn concepts for early idea generation.',
        },
        {
          type: 'image',
          src: '/photos/cardboard.jpg',
          alt: 'Cardboard Prototype',
          description: 'Handcut cardboard prototype based on the chosen design.',
          style: { objectPosition: '50% 35%', transform: 'scale(1.2)' },
        },
        {
          type: 'image',
          src: '/photos/chairfullcad.jpg',
          alt: 'Fusion 360 Model',
          description: 'Full chair modeled in Fusion 360 to my personal dimensions.',
        },
        {
          type: 'image',
          src: '/photos/lasercut.jpg',
          alt: 'Laser Cut Models',
          description:
            'Laser-cut cardboard models used to test scale, visual appeal, and structural integrity.',
          style: { objectPosition: '50% 20%' },
        },
        {
          type: 'image',
          src: '/photos/frame.jpg',
          alt: 'CNC Machined Frame',
          description: 'CNC-machined frame used to confirm pocket-joint fit.',
        },
        {
          type: 'image',
          src: '/photos/chairsit.JPG',
          alt: 'Final Chair in Use',
          description: 'Final chair in use.',
        },
      ]}
    />
  )
}
