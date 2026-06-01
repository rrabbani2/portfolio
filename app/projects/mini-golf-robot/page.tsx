'use client'

import { ProjectPageLayout } from '@/components/project-page'

export default function MiniGolfRobotPage() {
  return (
    <ProjectPageLayout
      id="mini-golf-robot"
      tag="CAD ⋆ Mechanism Design"
      title="Mini-Golf"
      titleEmphasis="Robot"
      heroImage={{
        src: '/photos/exploded.png',
        alt: 'Mini-Golf Robot',
        aspect: '4/5',
        style: { objectPosition: '40% 30%' },
      }}
      heroCaption="Fig. 01 ⋆ Exploded assembly"
      specs={[
        {
          label: 'CAD tools',
          value: 'SOLIDWORKS simulation, FEA impact analysis.',
        },
        {
          label: 'Hardware',
          value:
            'Servo-driven chipping and putting mechanism, brushless DC motor driven continuous-track wheels.',
        },
        {
          label: 'Materials',
          value:
            'Lightweight oakwood frame, 1060 aluminum alloy clubhead, Hexcel AS4C carbon-fiber shaft.',
        },
      ]}
      prose={
        <>
          <p>
            Following the ASME design challenge guidelines, this golf robot was designed to climb
            over obstacles and shoot golf balls. In SOLIDWORKS, the robot was optimized for
            strength, stability, and low mass. Simulations were run to analyze chipping dynamics —
            launch angles and velocity — and key design decisions were informed by a morphological
            chart and mechanical analyses.
          </p>
          <p>
            The project showcases the potential of robotics in sports and entertainment, and
            serves as a platform for exploring navigation algorithms and real-time decision-making
            in autonomous systems.
          </p>
        </>
      }
      gallery={[
        {
          type: 'image',
          src: '/photos/morphchart.png',
          alt: 'Morphological Chart',
          description:
            'Morphological chart used to generate concepts for different striking mechanisms.',
          style: { objectPosition: '0% 50%' },
        },
        {
          type: 'image',
          src: '/photos/fullcad.png',
          alt: 'Overall Robot Model',
          description:
            'Full overview of the robot in SOLIDWORKS — optimized for strength and stability at low mass.',
          style: { objectPosition: '50% 1%' },
        },
        {
          type: 'image',
          src: '/photos/climbing.png',
          alt: 'Maximum Climb Angle Determination',
          description:
            'Maximum climb angle derived from the center-of-mass position over the desired fulcrum.',
          style: { objectPosition: '50% 15%' },
        },
        {
          type: 'image',
          src: '/photos/chipping.png',
          alt: 'Chipping Dynamics Simulation',
          description:
            'SOLIDWORKS simulation of chipping dynamics — launch angle and velocity calculations.',
        },
      ]}
    />
  )
}
