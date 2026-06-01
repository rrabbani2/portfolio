'use client'

import { ProjectPageLayout } from '@/components/project-page'

export default function TrashCollectionRobotPage() {
  return (
    <ProjectPageLayout
      id="trash-collection-robot"
      tag="Robotics ⋆ Controls"
      title="Trash Collection"
      titleEmphasis="Robot"
      heroImage={{
        src: '/photos/robotfull.JPG',
        alt: 'Trash Collection Robot',
        aspect: '4/5',
        style: { objectPosition: '50% 40%', transform: 'scale(1.1)' },
      }}
      heroCaption="Fig. 01 ⋆ Robot — full assembly"
      specs={[
        {
          label: 'Movement & body',
          value:
            'Four TT-motor driven mecanum wheels on a rigid aluminum chassis with a custom mounting stack.',
        },
        {
          label: 'Actuation',
          value: '4-DOF servo-driven arm with a 2-finger gripper.',
        },
        {
          label: 'Control',
          value:
            'Wi-Fi enabled Arduino with a custom web-based, videogame-style control interface.',
        },
        {
          label: 'Power',
          value: 'Two 6V 800 mAh NiMH rechargeable battery packs.',
        },
      ]}
      prose={
        <>
          <p>
            The Trash Collection Robot was built to collect and dump objects within a defined
            arena. The system pairs a mobile base with a servo-actuated arm, enabling controlled
            pickup and release actions while navigating to target locations.
          </p>
          <p>
            This project highlights mechanical integration, motion planning, and real-world testing
            under time and space constraints, with iterative refinements driven by on-site trials.
          </p>
        </>
      }
      gallery={[
        {
          type: 'video',
          src: '/photos/robotvideo.mp4',
          description:
            'Remote operated run demonstrating collection and navigation behavior.',
        },
        {
          type: 'image',
          src: '/photos/robotcollection.png',
          alt: 'Trash Collection Robot collecting objects',
          description: 'Collection sequence during the test run.',
        },
        {
          type: 'image',
          src: '/photos/robotdump.png',
          alt: 'Trash Collection Robot dumping mechanism',
          description: 'Dumping action at the designated drop-off zone.',
        },
        {
          type: 'pdf',
          src: '/photos/J2%20MEMS%204110%20Brochure%202025.pdf',
          title: 'J2 MEMS 4110 Brochure 2025',
          description: 'Project overview brochure with goals, constraints, and system layout.',
        },
        {
          type: 'pdf',
          src: '/photos/MEMS%20411%20Design%20Report.pdf',
          title: 'MEMS 411 Design Report',
          description: 'Design report covering architecture, integration, and testing results.',
        },
      ]}
    />
  )
}
