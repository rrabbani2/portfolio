'use client'

import { ProjectPageLayout } from '@/components/project-page'

export default function AutomatedChickenCoopPage() {
  return (
    <ProjectPageLayout
      id="automated-chicken-coop"
      tag="Mechatronics ⋆ IoT"
      title="Automated Chicken"
      titleEmphasis="Coop"
      heroImage={{
        src: '/photos/fullcoop.jpg',
        alt: 'Automated Chicken Coop',
        aspect: '4/3',
      }}
      heroCaption="Fig. 01 ⋆ Completed coop"
      specs={[
        { label: 'Design', value: 'TinkerCAD model and physical foundation planning.' },
        { label: 'Hardware', value: 'Linear-actuated gate, live Wyze cameras.' },
        { label: 'Feeding', value: '20 kg gravity feeders with industrial-grade water nozzles.' },
        {
          label: 'Connectivity',
          value: 'Wi-Fi enabled with Google integration — app and voice control.',
        },
      ]}
      prose={
        <>
          <p>
            A smart agricultural solution that combines IoT technology with sustainable design to
            improve poultry management. The system automates everyday chicken care — feeding,
            watering, and coop access — to ensure optimal living conditions while reducing human
            labor and resource use.
          </p>
          <p>
            Key features include gravity feeders, industrial-grade water nozzles, and a Wi-Fi
            enabled, linearly-actuated gate controlled via Google integration. The project
            demonstrates the application of smart technology in agriculture, and addresses real
            concerns around sustainable farming and animal welfare.
          </p>
        </>
      }
      gallery={[
        {
          type: 'image',
          src: '/photos/cad.jpg',
          alt: 'TinkerCAD Model',
          description:
            'TinkerCAD model used to plan the frame and estimate material needed for the project.',
        },
        {
          type: 'image',
          src: '/photos/cutting.png',
          alt: 'Frame Construction',
          description:
            'Frame built from pressure-treated outdoor 2×4s, precisely measured and cut with a handheld circular saw.',
        },
        {
          type: 'image',
          src: '/photos/cadframe.jpg',
          alt: 'Finalized Frame',
          description:
            'Finalized frame compared to the CAD model — extremely accurate, with minimal waste.',
        },
        {
          type: 'image',
          src: '/photos/gravityfeeder.JPG',
          alt: 'Feeding Tube',
          description:
            'Gravity-driven feeding tube for automatic trough replenishment. Exterior access for easy refill.',
        },
        {
          type: 'image',
          src: '/photos/chickens.JPG',
          alt: 'Completed Chicken Coop',
          description:
            'A secure, spacious home for the chickens — room to roam, perch, and explore.',
        },
        {
          type: 'image',
          src: '/photos/eggs.jpg',
          alt: 'Fresh Eggs',
          description:
            'Nearly 12 eggs daily — sold to neighbors and gifted as fresh, organic eggs.',
        },
      ]}
    />
  )
}
