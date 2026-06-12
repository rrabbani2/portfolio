'use client'

import { ProjectPageLayout, ProjectDemoSection } from '@/components/project-page'
import { LazyVideo } from '@/components/lazy-video'

export default function InvertedPendulumPage() {
  return (
    <ProjectPageLayout
      id="inverted-pendulum"
      tag="Controls ⋆ MATLAB"
      title="Inverted"
      titleEmphasis="Pendulum"
      heroImage={{
        src: '/photos/fulltitle.png',
        alt: 'Inverted Pendulum',
        aspect: '11/10',
        style: { objectPosition: '50% 0%' },
      }}
      heroCaption="Fig. 01 ⋆ Test rig"
      specs={[
        {
          label: 'Hardware',
          value: 'Geared rotary motor, incremental encoders, weighted pendulum arm.',
        },
        {
          label: 'Software',
          value: 'MATLAB and Simulink.',
        },
        {
          label: 'Control system',
          value: 'State selector, PID loops, Jacobian-based balance function.',
        },
      ]}
      prose={
        <>
          <p>
            For this project I developed a control system for an inverted pendulum that
            self-balances and recovers when disturbed. Using MATLAB and Simulink, I combined
            Lagrangian and Hamiltonian dynamics to model motion and calculate system parameters,
            and Jacobian transformations to track positions. A state selector and PID loops enable
            seamless transitions between swing-up and balancing, ensuring precise and adaptive
            control.
          </p>
          <p>
            This project showcases the practical application of control theory and serves as a
            foundation for more complex balancing systems in robotics — self-balancing rockets,
            drone stabilization, and beyond.
          </p>
        </>
      }
      extraSection={
        <ProjectDemoSection label="Demo" caption="Swing-up + balance">
          <div className="max-w-[360px]">
            <div className="relative aspect-[9/16] overflow-hidden rounded-sm bg-ink">
              <LazyVideo src="/photos/demo.mp4" className="h-full w-full" />
            </div>
          </div>
        </ProjectDemoSection>
      }
      gallery={[
        {
          type: 'image',
          src: '/photos/rotation.webp',
          alt: 'Inverted Pendulum Setup',
          description:
            'Matrix transformations and frame rotations let us track the pendulum tip relative to the base.',
        },
        {
          type: 'image',
          src: '/photos/lagrangian.webp',
          alt: 'Control System Interface',
          description:
            'Applying Lagrangian dynamics (L = T − V) to the Euler-Lagrange equations of motion to simulate response.',
        },
        {
          type: 'image',
          src: '/photos/envelope.png',
          alt: 'Work Envelope Visualization',
          description:
            'The work envelope of the 2-DOF system — plotted in MATLAB as a reachable surface.',
        },
        {
          type: 'image',
          src: '/photos/hamiltonian.webp',
          alt: 'Hamiltonian Approach Visualization',
          description:
            'Hamiltonian approach used to calculate physical parameters via input torque, mechanical power, and losses.',
        },
        {
          type: 'image',
          src: '/photos/statespace.webp',
          alt: 'State Selector Diagram',
          description:
            'A MATLAB logic function paired with a Simulink multiport switch transitions between swing-up and balancing.',
        },
        {
          type: 'image',
          src: '/photos/system.png',
          alt: 'Overall Control System in Simulink',
          description:
            'The full Simulink system — state selector, PID loop for swing-up, and error-driven balancing.',
        },
      ]}
    />
  )
}
