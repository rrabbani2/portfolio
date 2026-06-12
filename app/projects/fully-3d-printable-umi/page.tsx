'use client'

import { ProjectPageLayout, ProjectDemoSection } from '@/components/project-page'
import { LazyVideo } from '@/components/lazy-video'

export default function Fully3DPrintableUMIPage() {
  return (
    <ProjectPageLayout
      id="fully-3d-printable-umi"
      tag="Hardware ⋆ Robotics"
      title="Fully 3D Printable"
      titleEmphasis="UMI"
      heroImage={{
        src: '/photos/umimain.webp',
        alt: 'Fully 3D Printable UMI',
        aspect: '4/3',
      }}
      heroCaption="Fig. 01 ⋆ Assembled UMI device"
      specs={[
        {
          label: 'Manufacturing',
          value: 'Fully 3D printable. Assembled with press-fits and superglue — no fasteners.',
        },
        {
          label: 'Data capture',
          value:
            'Adjustable phone mount for hand-centric video data collection from any phone.',
        },
        {
          label: 'Developed for',
          value: (
            <a
              href="https://farhand.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-signal decoration-2 underline-offset-4 transition hover:text-signal"
            >
              farhand.ai
            </a>
          ),
        },
      ]}
      prose={
        <p>
          This project is based on Stanford's UMI project, modified to reduce part count and
          decrease production cost. My UMI is fully 3D printable (including the linear rail), and
          can be assembled entirely with press-fits and superglue. It also features two adjustable
          cold-shoe mount rails to hold a phone mount. The device is designed as a low-cost,
          accessible tool for hand-centric video data collection — enabling anyone with a 3D
          printer and a smartphone to produce robot-learning-ready demonstrations.
        </p>
      }
      gallery={[
        { type: 'image', src: '/photos/umi1.JPG', alt: 'Fully 3D Printable UMI' },
        { type: 'image', src: '/photos/umi2.JPG', alt: 'UMI Detail View' },
      ]}
      extraSection={
        <ProjectDemoSection label="Demo">
          <div className="max-w-[360px]">
            <LazyVideo src="/photos/manipulation.MP4" className="block w-full rounded-sm" />
          </div>
        </ProjectDemoSection>
      }
    />
  )
}
