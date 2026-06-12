'use client'

import { ProjectPageLayout } from '@/components/project-page'

export default function ElectricSkateboardPage() {
  return (
    <ProjectPageLayout
      id="electric-skateboard"
      tag="Powertrain ⋆ Mechanical"
      title="Electric"
      titleEmphasis="Skateboard"
      heroImage={{
        src: '/photos/fullboard.webp',
        alt: 'Electric Skateboard',
        aspect: '4/3',
        matchHeight: true,
        style: { objectFit: 'contain', transform: 'rotate(90deg) scale(2.2)' },
      }}
      heroCaption="Fig. 01 ⋆ Completed deck"
      specs={[
        { label: 'Motor', value: 'Single belt-driven brushless DC motor.' },
        { label: 'Batteries', value: 'Four 5000 mAh 5S 30C LiPo packs in series.' },
        { label: 'Top speed', value: '20 mph.' },
        { label: 'Range', value: '15 miles per charge.' },
      ]}
      prose={
        <p>
          This remote-controlled electric skateboard was custom-built, featuring four batteries in
          series for more power. The project involved designing the system architecture,
          hand-soldering batteries with XT90 connectors, flashing firmware onto the ESC for motor
          tuning, and conducting wireless test runs before integrating the electronics into the
          below-deck housing. The result is a powerful and fast electric skateboard that
          streamlined my commute to school — all for under $300.
        </p>
      }
      gallery={[
        {
          type: 'image',
          src: '/photos/fullsystem.png',
          alt: 'Electric Skateboard Component Layout',
          description: 'Rough component layout to assist with ordering and assembly.',
        },
        {
          type: 'image',
          src: '/photos/assembly.jpg',
          alt: 'Battery Assembly and ESC Configuration',
          description:
            'Batteries soldered in series with XT90 connectors. ESC firmware flashed to tune the motor.',
        },
        {
          type: 'image',
          src: '/photos/testing.webp',
          alt: 'Wireless Test Run',
          description: 'First wireless test runs before installing the electronics under the deck.',
        },
        {
          type: 'image',
          src: '/photos/ride.jpg',
          alt: 'First Successful Ride',
          description: 'First successful ride at 20 mph.',
        },
      ]}
    />
  )
}
