import { Course, Section } from '../../types';

const SECTIONS: Section[] = [
  {
    id: 'sect-1-1-classical',
    title: 'Section 1: Classical Relativity',
    description: 'Newtonian mechanics, Galilean transformations, and the Ether.',
    color: 'duo-blue',
    units: [
      {
        id: 'unit-1-1-frames',
        title: 'Frames of Reference',
        description: 'Inertial frames and the Galilean Transformation.',
        color: 'duo-blue',
        lessons: [
          {
            id: 'lesson-1-1-inertial',
            title: 'Inertial Frames',
            description: 'Defining where Newton\'s laws hold.',
            icon: 'Globe',
            slides: [
              {
                id: 's1-intro',
                type: 'theory',
                title: 'The Concept of Relativity',
                content: 'A "theory of relativity" is a way for observers in different **frames of reference** to compare the results of their observations.\n\nImagine an observer in a parked car watching a rock. To them, the rock is at rest. Another observer in a moving car sees the rock rush past. Relativity provides the mathematical tools to transform the statement "rock is at rest" in one frame to "rock is moving" in another.'
              },
              {
                id: 'q-intro-thought',
                type: 'theory',
                title: 'Think About It',
                content: 'If you are in a smooth-riding train with the shades pulled down, can you determine if you are moving at a constant velocity or standing still just by performing experiments inside the train (like dropping a ball)?'
              },
              {
                id: 's-intro-sol',
                type: 'theory',
                title: 'Solution',
                content: 'No. According to the principle of relativity, the laws of mechanics are the same in all inertial frames. A ball dropped in a constant-velocity train behaves exactly like a ball dropped in a stationary room.'
              },
              {
                id: 's2-inertial-def',
                type: 'theory',
                title: 'Inertial Reference Frames',
                content: 'An **Inertial Reference Frame** is a frame where Newton\'s First Law (Law of Inertia) holds true.\n\n*   An object at rest remains at rest.\n*   An object in motion remains in motion at a constant velocity unless acted upon by an external force.\n\nA rotating frame (like a merry-go-round) is *not* inertial because objects experience pseudo-forces (like centrifugal force) without a physical source.'
              },
              {
                id: 'quiz-inertial',
                type: 'quiz',
                title: 'Identify the Inertial Frame',
                content: 'Which of the following observers is in an **inertial** reference frame?',
                options: [
                  { id: '1', text: 'A child on a spinning merry-go-round.', isCorrect: false, explanation: 'This is a rotating frame, which involves acceleration.' },
                  { id: '2', text: 'A driver braking suddenly.', isCorrect: false, explanation: 'Braking is deceleration, which is a form of acceleration.' },
                  { id: '3', text: 'An astronaut floating in deep space with engines off.', isCorrect: true, explanation: 'There are no external forces or accelerations acting on the spaceship.' },
                  { id: '4', text: 'A person standing on Earth.', isCorrect: false, explanation: 'Strictly speaking, Earth rotates and orbits, so it is not perfectly inertial, though often approximated as one.' }
                ]
              }
            ]
          },
          {
            id: 'lesson-1-1-galilean',
            title: 'Galilean Transformations',
            description: 'The mathematics of classical relativity.',
            icon: 'Shuffle',
            slides: [
              {
                id: 's1-gal-setup',
                type: 'theory',
                title: 'The Setup',
                content: 'Consider two observers:\n\n1.  **O**: At rest.\n2.  **O\'**: Moving with constant velocity $\\vec{u}$ relative to O.\n\nThey observe the same event (e.g., a collision). O records coordinates $(x, y, z, t)$. O\' records $(x\', y\', z\', t\')$.\n\nWe assume $\\vec{u}$ is along the $x$-axis and time is universal ($t = t\'$).'
              },
              {
                id: 's2-gal-eq',
                type: 'theory',
                title: 'Coordinate Transformation',
                content: 'The **Galilean Coordinate Transformation** relates the observations:\n\n$$x\' = x - ut$$\n$$y\' = y$$\n$$z\' = z$$\n$$t\' = t$$\n\nThis assumes that time flows at the same rate for everyone, a postulate of classical physics.'
              },
              {
                id: 's3-gal-vel',
                type: 'proof',
                title: 'Velocity Transformation',
                content: 'How do velocities relate? We take the derivative with respect to time.',
                proofSteps: [
                  'Start with $x\' = x - ut$.',
                  'Differentiate with respect to $t$: $\\frac{dx\'}{dt} = \\frac{dx}{dt} - u$.',
                  'Define velocity measured by O as $v_x = dx/dt$.',
                  'Define velocity measured by O\' as $v\'_x = dx\'/dt$.',
                  'Result: $v\'_x = v_x - u$.'
                ]
              },
              {
                id: 'q-gal-calc',
                type: 'quiz',
                title: 'Velocity Calculation',
                content: 'A train moves at 60 km/h ($u$). A passenger walks forward at 5 km/h ($v\'_x$) relative to the train. What is the passenger\'s speed relative to the ground ($v_x$)?',
                options: [
                  { id: '1', text: '55 km/h', isCorrect: false, explanation: 'This would be if they walked backwards.' },
                  { id: '2', text: '60 km/h', isCorrect: false, explanation: 'The passenger is moving relative to the train.' },
                  { id: '3', text: '65 km/h', isCorrect: true, explanation: 'Using $v_x = v\'_x + u$, we get $5 + 60 = 65$.' }
                ]
              },
              {
                id: 's4-accel',
                type: 'theory',
                title: 'Acceleration Invariance',
                content: 'If we differentiate velocity with respect to time:\n\n$$a\'_x = \\frac{d v\'_x}{dt} = \\frac{d(v_x - u)}{dt}$$\n\nSince $u$ is constant, $du/dt = 0$.\n\n$$a\'_x = a_x$$\n\n**Conclusion:** Both observers measure the same acceleration. Newton\'s Second Law ($F=ma$) works in both frames.'
              }
            ]
          }
        ]
      },
      {
        id: 'unit-1-2-michelson',
        title: 'The Ether Hypothesis',
        description: 'The Michelson-Morley Experiment.',
        color: 'duo-blue',
        lessons: [
          {
            id: 'lesson-1-2-ether',
            title: 'The Luminiferous Ether',
            description: 'The proposed medium for light.',
            icon: 'Wind',
            slides: [
              {
                id: 's1-waves',
                type: 'theory',
                title: 'Waves need a Medium',
                content: 'In the 19th century, physicists knew sound travelled through air and water waves through water. They assumed light waves must travel through a medium called the **Luminiferous Ether**.\n\nThe Ether was thought to be:\n*   Massless\n*   Filling all space\n*   The frame where light travels at exactly $c$.'
              },
              {
                id: 'q-ether-wind',
                type: 'theory',
                title: 'Think About It',
                content: 'If the Earth orbits the Sun, it must be moving through this "ether". If you are driving a car through still air, you feel a wind. Should we detect an "ether wind" as Earth moves?'
              },
              {
                id: 's-ether-sol',
                type: 'theory',
                title: 'Solution',
                content: 'Yes. If the ether exists, the speed of light measured on Earth should depend on the direction of Earth\'s motion relative to the ether. Light moving "upstream" against the ether wind should appear slower.'
              }
            ]
          },
          {
            id: 'lesson-1-2-experiment',
            title: 'Michelson-Morley Experiment',
            description: 'The most famous null result in physics.',
            icon: 'Search',
            slides: [
              {
                id: 's1-setup',
                type: 'theory',
                title: 'The Interferometer',
                content: 'Albert Michelson designed an interferometer to detect the ether. \n\n1. A light beam is split into two perpendicular paths.\n2. Path A goes parallel to Earth\'s motion.\n3. Path B goes perpendicular to Earth\'s motion.\n4. The beams recombine to form interference fringes.'
              },
              {
                id: 's2-prediction',
                type: 'theory',
                title: 'The Prediction',
                content: 'According to Galilean relativity:\n\n*   **Upstream/Downstream speed:** $c - v$ and $c + v$.\n*   **Cross-stream speed:** $\\sqrt{c^2 - v^2}$.\n\nThe time taken for the light to travel the two paths should differ, creating a phase shift. Rotating the apparatus 90 degrees should shift the interference fringes.'
              },
              {
                id: 's3-result',
                type: 'theory',
                title: 'The Result',
                content: 'Michelson and Morley performed the experiment in 1887. They expected a shift of 0.4 fringes.\n\n**Result:** No observable shift was found (less than 0.01 fringes).\n\n**Conclusion:** The speed of the Earth through the ether could not be detected. The ether hypothesis was in crisis.'
              },
              {
                id: 'quiz-mm',
                type: 'quiz',
                title: 'Experiment Outcome',
                content: 'What was the direct implication of the Michelson-Morley null result?',
                options: [
                  { id: '1', text: 'The speed of light is infinite.', isCorrect: false, explanation: 'Maxwell\'s equations already predicted a finite speed c.' },
                  { id: '2', text: 'The ether drags the Earth along with it.', isCorrect: false, explanation: 'Ether drag was a proposed solution, but disproven by other experiments (aberration of starlight).' },
                  { id: '3', text: 'The speed of light is the same in all directions, regardless of Earth\'s motion.', isCorrect: true, explanation: 'This laid the groundwork for Einstein\'s second postulate.' }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'sect-1-2-kinematics',
    title: 'Section 2: Relativistic Kinematics',
    description: 'Einstein\'s Postulates, Lorentz Transformations, and Space-Time.',
    color: 'duo-blue',
    units: [
      {
        id: 'unit-1-3-postulates',
        title: 'Einstein\'s Theory',
        description: 'The two fundamental postulates.',
        color: 'duo-blue',
        lessons: [
          {
            id: 'lesson-1-3-postulates',
            title: 'The Two Postulates',
            description: 'Defining Special Relativity.',
            icon: 'Lightbulb',
            slides: [
              {
                id: 's1-postulate-1',
                type: 'theory',
                title: 'Postulate 1: Principle of Relativity',
                content: '**The laws of physics are the same in all inertial reference frames.**\n\nThere is no "absolute" rest frame. No experiment performed inside an inertial frame can tell you if you are moving or at rest. Maxwell\'s equations (electromagnetism) must work the same way for everyone.'
              },
              {
                id: 's2-postulate-2',
                type: 'theory',
                title: 'Postulate 2: Constancy of c',
                content: '**The speed of light in free space has the same value $c$ in all inertial reference frames.**\n\n$c \\approx 3 \\times 10^8$ m/s.\n\nThis violates common sense. If you run at $0.5c$ towards a flashlight beam, Galilean relativity says you measure the beam at $1.5c$. Einstein says you measure it at exactly $c$.'
              },
              {
                id: 'quiz-postulates',
                type: 'quiz',
                title: 'Applying Postulate 2',
                content: 'A spaceship moves at $0.5c$ relative to Earth. It fires a laser beam forward. What speed does an observer on Earth measure for the laser light?',
                options: [
                  { id: '1', text: '$1.5c$', isCorrect: false, explanation: 'Galilean addition does not apply to light.' },
                  { id: '2', text: '$c$', isCorrect: true, explanation: 'The speed of light is constant for ALL observers.' },
                  { id: '3', text: '$0.5c$', isCorrect: false, explanation: 'Velocities do not subtract for light.' }
                ]
              }
            ]
          },
          {
            id: 'lesson-1-3-simultaneity',
            title: 'Relativity of Simultaneity',
            description: 'Are events simultaneous for everyone?',
            icon: 'Clock',
            slides: [
              {
                id: 's1-thought-exp',
                type: 'theory',
                title: 'The Train Thought Experiment',
                content: 'Imagine a long train moving with velocity $v$. A flash of light is emitted from the center of the car.\n\n**Observer on Train:** The light hits the front and back walls simultaneously (distance is equal, speed is $c$).\n\n**Observer on Ground:** The back wall is moving *toward* the light. The front wall is moving *away*. Since light speed is constant ($c$), the light hits the back wall *before* the front wall.'
              },
              {
                id: 's2-conclusion',
                type: 'theory',
                title: 'Conclusion',
                content: 'Two events that are **simultaneous** in one frame are **NOT** simultaneous in a frame moving relative to the first.\n\nSimultaneity is relative, not absolute. This forces us to abandon the idea of universal time ($t = t\'$).'
              },
              {
                id: 'q-sync',
                type: 'theory',
                title: 'Think About It',
                content: 'If two clocks are synchronized in the stationary frame, do they appear synchronized to a moving observer?'
              },
              {
                id: 's-sync-sol',
                type: 'theory',
                title: 'Solution',
                content: 'No. The "leading" clock (the one in front in the direction of motion) will appear to lag behind the "trailing" clock. This is known as the relativity of synchronization.'
              }
            ]
          }
        ]
      },
      {
        id: 'unit-1-4-consequences',
        title: 'Consequences of Relativity',
        description: 'Time Dilation and Length Contraction.',
        color: 'duo-blue',
        lessons: [
          {
            id: 'lesson-1-4-dilation',
            title: 'Time Dilation',
            description: 'Moving clocks run slow.',
            icon: 'Watch',
            slides: [
              {
                id: 's1-light-clock',
                type: 'theory',
                title: 'The Light Clock',
                content: 'Consider a clock consisting of a photon bouncing between two mirrors separated by distance $L_0$.\n\n**Rest Frame:** Time for one tick is $\\Delta t_0 = 2L_0 / c$. This is called **Proper Time**.'
              },
              {
                id: 's2-moving-clock',
                type: 'proof',
                title: 'Moving Observer',
                content: 'If the clock moves at speed $u$ sideways:',
                proofSteps: [
                  'The light must travel a diagonal path to hit the moving mirror.',
                  'The total distance $D$ is longer than $2L_0$.',
                  'Since speed $c$ is constant, the time $\\Delta t$ must be longer.',
                  'Geometry: $(c \Delta t / 2)^2 = L_0^2 + (u \Delta t / 2)^2$.',
                  'Solve for $\\Delta t$: $\\Delta t = \\frac{2L_0}{c} \\frac{1}{\\sqrt{1-u^2/c^2}}$.',
                  'Substitute $\\Delta t_0$: $\\Delta t = \\frac{\\Delta t_0}{\\sqrt{1-u^2/c^2}}$.'
                ]
              },
              {
                id: 's3-formula',
                type: 'theory',
                title: 'The Formula',
                content: '$$ \\Delta t = \\gamma \\Delta t_0 $$\n\nWhere $\\gamma$ (gamma) is the Lorentz Factor:\n$$ \\gamma = \\frac{1}{\\sqrt{1 - u^2/c^2}} $$\n\nSince $u < c$, $\\gamma \ge 1$. Therefore $\\Delta t \ge \Delta t_0$. Moving clocks run slower.'
              },
              {
                id: 'ex-muons',
                type: 'theory',
                title: 'Example: Cosmic Ray Muons',
                content: 'Muons produced in the upper atmosphere should decay before hitting the ground given their short lifetime ($2.2 \\mu s$). However, they are detected on the ground.\n\n**Reason:** They travel near $c$, so their internal clock runs slow relative to Earth. They "live" longer in our frame.'
              }
            ]
          },
          {
            id: 'lesson-1-4-contraction',
            title: 'Length Contraction',
            description: 'Moving objects shorten.',
            icon: 'Minimize',
            slides: [
              {
                id: 's1-concept',
                type: 'theory',
                title: 'Measuring Length',
                content: 'To measure the length of a moving object, you must mark the position of both ends **simultaneously**. Because simultaneity is relative, length measurements depend on the frame.'
              },
              {
                id: 's2-formula',
                type: 'proof',
                title: 'Derivation',
                content: 'Using time dilation as a basis:',
                proofSteps: [
                  'Consider the Muon example again.',
                  'In Earth frame: Muon travels height $H$ in time $\\Delta t$.',
                  'In Muon frame: Muon is at rest, Earth rushes up. Trip takes proper time $\\Delta t_0$.',
                  'Speed is same ($u$). Distance = Speed $\\times$ Time.',
                  'Earth frame distance: $L_0 = u \Delta t$.',
                  'Muon frame distance: $L = u \Delta t_0$.',
                  'Since $\\Delta t_0 = \Delta t / \\gamma$, then $L = L_0 / \\gamma$.'
                ]
              },
              {
                id: 's3-result',
                type: 'theory',
                title: 'The Formula',
                content: '$$ L = \\frac{L_0}{\\gamma} = L_0 \\sqrt{1 - u^2/c^2} $$\n\n$L_0$ is the **Proper Length** (measured at rest).\n$L$ is the length measured by the moving observer.\n\nObjects appear contracted in the direction of motion.'
              },
              {
                id: 'q-contraction',
                type: 'quiz',
                title: 'Direction of Contraction',
                content: 'A meter stick flies past you at $0.9c$ oriented perpendicular to its velocity. How long does it look?',
                options: [
                  { id: '1', text: 'Less than 1 meter', isCorrect: false, explanation: 'Length contraction only happens PARALLEL to motion.' },
                  { id: '2', text: '1 meter', isCorrect: true, explanation: 'Transverse dimensions are not affected.' },
                  { id: '3', text: 'More than 1 meter', isCorrect: false, explanation: '' }
                ]
              }
            ]
          },
          {
            id: 'lesson-1-4-twin',
            title: 'The Twin Paradox',
            description: 'Resolving the aging puzzle.',
            icon: 'User',
            slides: [
              {
                id: 's1-paradox',
                type: 'theory',
                title: 'The Paradox',
                content: 'Twin A stays on Earth. Twin B flies to a star at $0.8c$ and returns.\n\n*   A sees B moving, so B\'s clock runs slow. B should be younger.\n*   B sees A moving (relative to ship), so A\'s clock runs slow. A should be younger.\n\nWhen they reunite, who is younger?'
              },
              {
                id: 's2-resolution',
                type: 'theory',
                title: 'The Resolution',
                content: 'The situation is **not symmetric**. \n\nTwin B must turn around to come back. This involves **acceleration** (changing frames). Twin B is not in a single inertial frame the whole time. Special Relativity applies simply only to inertial frames. Twin A (Earth) is inertial. Twin A\'s calculation is correct: **Twin B is younger.**'
              }
            ]
          }
        ]
      },
      {
        id: 'unit-1-5-lorentz',
        title: 'Lorentz Transformations',
        description: 'The mathematical engine of relativity.',
        color: 'duo-blue',
        lessons: [
          {
            id: 'lesson-1-5-equations',
            title: 'The Equations',
            description: 'Transforming coordinates correctly.',
            icon: 'Table',
            slides: [
              {
                id: 's1-deriv-goal',
                type: 'theory',
                title: 'Goal',
                content: 'We need equations that satisfy:\n1. Linear relationship between $(x,t)$ and $(x\',t\')$.\n2. Reduces to Galilean at low speeds.\n3. Speed of light is $c$ in both frames.'
              },
              {
                id: 's2-equations',
                type: 'theory',
                title: 'The Lorentz Transformation',
                content: 'For motion along x:\n\n$$x\' = \\gamma (x - ut)$$\n$$y\' = y$$\n$$z\' = z$$\n$$t\' = \\gamma (t - \\frac{ux}{c^2})$$\n\nNotice the time transformation depends on position $x$! This leads to the relativity of simultaneity.'
              },
              {
                id: 's3-inverse',
                type: 'theory',
                title: 'Inverse Transformations',
                content: 'To find $x, t$ from $x\', t\'$, just replace $u$ with $-u$:\n\n$$x = \\gamma (x\' + ut\')$$\n$$t = \\gamma (t\' + \\frac{ux\'}{c^2})$$'
              }
            ]
          },
          {
            id: 'lesson-1-5-velocity',
            title: 'Velocity Addition',
            description: 'Why $c+c \neq 2c$.',
            icon: 'TrendingUp',
            slides: [
              {
                id: 's1-problem',
                type: 'theory',
                title: 'The Problem',
                content: 'Galilean addition says $v_x = v\'_x + u$. If a ship moves at $0.8c$ and fires a missile at $0.8c$, Galilean physics says speed is $1.6c$. This violates Postulate 2.'
              },
              {
                id: 's2-deriv',
                type: 'proof',
                title: 'Derivation',
                content: 'Use differentials of Lorentz equations:',
                proofSteps: [
                  '$dx = \\gamma(dx\' + u dt\')$',
                  '$dt = \\gamma(dt\' + u dx\' / c^2)$',
                  'Divide $dx$ by $dt$:',
                  '$v_x = \\frac{dx}{dt} = \\frac{dx\' + u dt\'}{dt\' + u dx\' / c^2}$',
                  'Divide numerator and denominator by $dt\'$:',
                  '$v_x = \\frac{v\'_x + u}{1 + v\'_x u / c^2}$'
                ]
              },
              {
                id: 's3-formula',
                type: 'theory',
                title: 'Velocity Addition Formula',
                content: '$$ v_x = \\frac{v\'_x + u}{1 + \\frac{v\'_x u}{c^2}} $$\n\nIf $v\'_x = c$, then:\n$$ v_x = \\frac{c + u}{1 + cu/c^2} = \\frac{c(1 + u/c)}{1 + u/c} = c $$\n\nLight speed is invariant!'
              },
              {
                id: 'q-add',
                type: 'quiz',
                title: 'Calculation',
                content: 'Ship moves at $0.5c$. Fires missile at $0.5c$. What is missile speed relative to ground?',
                options: [
                  { id: '1', text: '$1.0c$', isCorrect: false, explanation: 'Classical addition fails.' },
                  { id: '2', text: '$0.8c$', isCorrect: true, explanation: '$(0.5+0.5)/(1 + 0.25) = 1/1.25 = 0.8$.' },
                  { id: '3', text: '$c$', isCorrect: false, explanation: 'Massive objects cannot reach c.' }
                ]
              }
            ]
          },
          {
            id: 'lesson-1-5-doppler',
            title: 'Relativistic Doppler Effect',
            description: 'Frequency shifts for light.',
            icon: 'Radio',
            slides: [
              {
                id: 's1-concept',
                type: 'theory',
                title: 'Doppler Effect',
                content: 'Unlike sound, light requires no medium. The Doppler shift depends only on the relative velocity between source and observer.'
              },
              {
                id: 's2-formula',
                type: 'theory',
                title: 'The Formula (Longitudinal)',
                content: 'For source and observer moving apart with speed $u$:\n\n$$ f\' = f \\sqrt{\\frac{1 - u/c}{1 + u/c}} $$\n\nFor approaching, flip signs. This accounts for both the classical wave compression AND time dilation.'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'sect-1-3-dynamics',
    title: 'Section 3: Relativistic Dynamics',
    description: 'Momentum, Energy, and Mass.',
    color: 'duo-blue',
    units: [
      {
        id: 'unit-1-6-momentum',
        title: 'Relativistic Momentum',
        description: 'Why Newton\'s p=mv fails.',
        color: 'duo-blue',
        lessons: [
          {
            id: 'lesson-1-6-momentum',
            title: 'Defining Momentum',
            description: 'Preserving conservation laws.',
            icon: 'Activity',
            slides: [
              {
                id: 's1-failure',
                type: 'theory',
                title: 'Failure of Classical Momentum',
                content: 'If we use $p=mv$ and the relativistic velocity addition formula, we find that momentum is NOT conserved in all inertial frames during collisions. We must redefine momentum.'
              },
              {
                id: 's2-def',
                type: 'theory',
                title: 'Relativistic Momentum',
                content: 'The correct definition is:\n\n$$ \\vec{p} = \\gamma m \\vec{v} = \\frac{m\\vec{v}}{\\sqrt{1-v^2/c^2}} $$\n\nAs $v \\to c$, momentum goes to infinity. This explains why it requires infinite impulse to accelerate a massive particle to $c$.'
              }
            ]
          }
        ]
      },
      {
        id: 'unit-1-7-energy',
        title: 'Relativistic Energy',
        description: 'Work, Kinetic Energy, and Rest Energy.',
        color: 'duo-blue',
        lessons: [
          {
            id: 'lesson-1-7-work',
            title: 'Kinetic Energy',
            description: 'Deriving the energy formula.',
            icon: 'Zap',
            slides: [
              {
                id: 's1-work',
                type: 'proof',
                title: 'Work-Energy Theorem',
                content: 'Work done = Change in Kinetic Energy.',
                proofSteps: [
                  '$W = \\int F dx = \\int \\frac{dp}{dt} dx$',
                  '$W = \\int \\frac{dp}{dt} v dt = \\int v dp$',
                  'Using $p = \\gamma m v$, integration yields:',
                  '$K = \\gamma m c^2 - m c^2$'
                ]
              },
              {
                id: 's2-interpretation',
                type: 'theory',
                title: 'Interpretation',
                content: '$$ K = (\\gamma - 1)mc^2 $$\n\nAt low speeds ($v \\ll c$), this approximates to $1/2 mv^2$. \n\nWe define **Total Energy** $E$ as:\n$$ E = K + mc^2 = \\gamma mc^2 $$'
              }
            ]
          },
          {
            id: 'lesson-1-7-rest',
            title: 'Rest Energy',
            description: 'The meaning of mc^2.',
            icon: 'Database',
            slides: [
              {
                id: 's1-rest',
                type: 'theory',
                title: 'Rest Energy',
                content: 'Even when at rest ($v=0, K=0$), an object has energy:\n\n$$ E_0 = mc^2 $$\n\nThis is the **Rest Energy**. Mass is a form of energy. Nuclear reactions convert small amounts of mass into huge amounts of energy.'
              },
              {
                id: 's2-triangle',
                type: 'theory',
                title: 'The Energy-Momentum Relation',
                content: 'By combining $E = \\gamma mc^2$ and $p = \\gamma mv$, we can eliminate $v$ to find a crucial relationship valid for all particles (even massless ones like photons):\n\n$$ E^2 = (pc)^2 + (mc^2)^2 $$'
              },
              {
                id: 'q-massless',
                type: 'quiz',
                title: 'Massless Particles',
                content: 'If a particle has no mass ($m=0$), what is its energy?',
                options: [
                  { id: '1', text: '0', isCorrect: false, explanation: 'Photons have energy!' },
                  { id: '2', text: '$E = pc$', isCorrect: true, explanation: 'From the triangle relation, if $m=0$, $E = pc$.' },
                  { id: '3', text: 'Infinite', isCorrect: false, explanation: '' }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'sect-1-4-exercises',
    title: 'Section 4: Module Exercises',
    description: 'Practice problems from the textbook.',
    color: 'duo-blue',
    units: [
      {
        id: 'unit-1-8-problems',
        title: 'Textbook Problems',
        description: 'Selected problems from Krane Chapter 2.',
        color: 'duo-blue',
        lessons: [
          {
            id: 'lesson-1-8-ex1',
            title: 'Set A: Kinematics',
            description: 'Time and Length calculations.',
            icon: 'Edit3',
            slides: [
              {
                id: 'ex-1',
                type: 'question',
                title: 'Problem 1: Plane Trip',
                content: 'You pilot a plane 750km due North. In steady wind, you point the nose 22 degrees West of North to maintain course. The trip takes 3.14h in still air, but 4.32h now. Calculate wind velocity. (Classical Relativity)'
              },
              {
                id: 'sol-1',
                type: 'solution',
                title: 'Solution',
                content: 'This is a classical vector addition problem. $\\vec{v}_{plane/ground} = \\vec{v}_{plane/air} + \\vec{v}_{air/ground}$. Use the law of cosines and times provided.'
              },
              {
                id: 'ex-2',
                type: 'question',
                title: 'Problem 4: Highway Relativity',
                content: 'Distance NY to LA is 4000km. A car drives at 100km/h. (a) How much shorter is the distance for the driver? (b) How much less do they age?'
              },
              {
                id: 'sol-2',
                type: 'solution',
                title: 'Solution',
                content: '(a) $u = 100 km/h = 27.8 m/s$. $\\gamma \\approx 1 + 0.5(u^2/c^2)$. Contraction is microscopic ($~10^{-13}$ m). \n(b) Time difference is also negligible, calculated via $\\Delta t - \Delta t_0$.'
              }
            ]
          },
          {
            id: 'lesson-1-8-ex2',
            title: 'Set B: Dynamics',
            description: 'Energy and Momentum.',
            icon: 'Zap',
            slides: [
              {
                id: 'ex-3',
                type: 'question',
                title: 'Problem 30: Proton Energy',
                content: 'Find the momentum, kinetic energy, and total energy of a proton moving at speed 0.835c.'
              },
              {
                id: 'sol-3',
                type: 'solution',
                title: 'Solution',
                content: '1. Calculate $\\gamma = 1/\\sqrt{1-0.835^2}$.\n2. $E = \\gamma m_p c^2$ ($m_p = 938$ MeV/c^2).\n3. $K = E - mc^2$.\n4. $p = \\sqrt{E^2 - m^2c^4}/c$.'
              },
              {
                id: 'ex-4',
                type: 'question',
                title: 'Problem 43: Neutron Capture',
                content: 'Find energy released when Deuterium captures a neutron to form Tritium.'
              },
              {
                id: 'sol-4',
                type: 'solution',
                title: 'Solution',
                content: 'Use $\\Delta E = \Delta m c^2$. Sum masses of reactants (D + n). Subtract mass of product (T). Convert mass difference (u) to energy (MeV).'
              }
            ]
          }
        ]
      }
    ]
  }
];

export const MODULE_1_COURSE: Course = {
  id: 'mod-1-relativity',
  title: 'Module I: Special Relativity',
  description: 'Foundations of relativity, kinematics, and dynamics.',
  sections: SECTIONS
};