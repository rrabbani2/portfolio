'use client'

import { ProjectPageLayout, ProjectDemoSection } from '@/components/project-page'

export default function RobotVaccumCircuitPage() {
  return (
    <ProjectPageLayout
      id="robot-vaccum-circuit"
      tag="Electronics ⋆ Arduino"
      title="Robot Vacuum"
      titleEmphasis="Circuit"
      heroImage={{
        src: '/photos/circuittop.JPG',
        alt: 'Robot Vacuum Circuit',
        aspect: '4/3',
        matchHeight: true,
        style: { objectFit: 'contain', transform: 'rotate(270deg) scale(1.8)' },
      }}
      heroCaption="Fig. 01 ⋆ Breadboard layout"
      specs={[
        { label: 'Microcontroller', value: 'Arduino Uno R3.' },
        {
          label: 'Sensors',
          value:
            'HC-SR04 ultrasonic, FSR force-sensitive resistor, IR obstacle avoidance, PIR motion sensor.',
        },
        { label: 'Actuators', value: '28BYJ-48 stepper motor, piezoelectric buzzer.' },
        { label: 'Motor driver', value: 'ULN2003 IC.' },
        { label: 'Power', value: '9V battery, USB power.' },
      ]}
      prose={
        <>
          <p>
            This Arduino-based circuit integrates multiple sensors and actuators into a
            comprehensive robot vacuum control system. The circuit combines ultrasonic distance
            sensing, force detection, obstacle avoidance, and motion detection to enable
            intelligent navigation and cleaning behavior.
          </p>
          <p>
            A ULN2003 motor driver controls a stepper motor for precise movement, while the
            sensors provide real-time environmental feedback. A piezoelectric buzzer signals
            different system states — a complete embedded prototype for autonomous cleaning
            applications.
          </p>
        </>
      }
      extraSection={
        <ProjectDemoSection label="Demos" caption="Simulation + bench test">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            <div className="space-y-3">
              <div className="relative aspect-video overflow-hidden rounded-sm bg-ink">
                <video className="h-full w-full" controls autoPlay muted loop playsInline>
                  <source src="/photos/circuitsimulation.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-soft">
                Fig. 02 ⋆ Circuit simulation
              </p>
            </div>
            <div className="space-y-3">
              <div className="relative aspect-video overflow-hidden rounded-sm bg-ink">
                <video className="h-full w-full" controls autoPlay muted loop playsInline>
                  <source src="/photos/circuitvideo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-soft">
                Fig. 03 ⋆ Bench demonstration
              </p>
            </div>
          </div>
        </ProjectDemoSection>
      }
      gallery={[
        {
          type: 'image',
          src: '/photos/circuitside.JPG',
          alt: 'Circuit Side View',
          description:
            'Side view showing the Arduino Uno, breadboard, and all interconnected components.',
        },
        {
          type: 'image',
          src: '/photos/circuittop.JPG',
          alt: 'Circuit Top View',
          description: 'Top-down view of the breadboard layout — sensor placement and wiring.',
        },
        {
          type: 'image',
          src: '/photos/circuitdiagram.png',
          alt: 'Circuit Diagram',
          description:
            'Fritzing-style schematic showing the complete wiring and component connections.',
        },
      ]}
    />
  )
}
