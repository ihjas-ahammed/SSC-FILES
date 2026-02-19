
import { Course, Section } from '../../types';

const SECTIONS: Section[] = [
  {
    id: 'sect-3-1-matter-waves',
    title: 'Section 1: De Broglie\'s Hypothesis',
    description: 'The symmetry of nature: If waves act like particles, do particles act like waves?',
    color: 'duo-red',
    units: [
      {
        id: 'unit-3-1-hypothesis',
        title: 'The Hypothesis',
        description: 'Deriving the wavelength of matter.',
        color: 'duo-red',
        lessons: [
          {
            id: 'lesson-3-1-symmetry',
            title: 'Symmetry in Physics',
            description: 'Louis de Broglie\'s bold proposal (1924).',
            icon: 'GitMerge',
            slides: [
              {
                id: 's1-intro',
                type: 'theory',
                title: 'A Question of Symmetry',
                content: 'By 1924, experiments like the Compton Effect and Photoelectric Effect had established that light (classically a wave) behaves like a particle (photon) with momentum $p = h/\\lambda$.\n\nLouis de Broglie, a French doctoral student, asked the reciprocal question: **If light waves can behave like particles, can material particles (like electrons) behave like waves?**\n\nNature, he argued, loves symmetry.'
              },
              {
                id: 's2-formula',
                type: 'theory',
                title: 'The De Broglie Wavelength',
                content: 'De Broglie proposed that for any particle with momentum $p$, there is an associated wavelength $\\lambda$:\n\n$$ \\lambda = \\frac{h}{p} = \\frac{h}{mv} $$\n\nWhere:\n*   $h$ is Planck\'s constant ($6.626 \\times 10^{-34}$ J·s)\n*   $m$ is mass\n*   $v$ is velocity\n\nThis relates a wave property ($\\lambda$) to particle properties ($m, v$).'
              },
              {
                id: 's3-frequency',
                type: 'theory',
                title: 'Frequency of Matter Waves',
                content: 'Similarly, he proposed that the frequency $f$ of the matter wave is related to the total energy $E$ of the particle, just like for photons:\n\n$$ f = \\frac{E}{h} $$\n\nThus, a moving electron is not just a hard sphere moving through space, but a propagating wave packet.'
              },
              {
                id: 'q-macro-obj',
                type: 'quiz',
                title: 'Macroscopic Objects',
                content: 'Why don\'t we see baseballs diffracting around baseball bats? A 0.15 kg baseball moving at 40 m/s.',
                options: [
                  { id: '1', text: 'Baseballs are not charged.', isCorrect: false, explanation: 'Charge is not required for de Broglie waves, only momentum.' },
                  { id: '2', text: 'The wavelength is too small to detect.', isCorrect: true, explanation: '$\\lambda = h/mv \\approx 10^{-34}$ meters. This is physically undetectable compared to the size of the bat.' },
                  { id: '3', text: 'Macroscopic objects don\'t have waves.', isCorrect: false, explanation: 'They do, but the effects are negligible due to the small wavelength.' }
                ]
              }
            ]
          },
          {
            id: 'lesson-3-1-calculations',
            title: 'Calculating Wavelengths',
            description: 'Comparison of scales.',
            icon: 'Calculator',
            slides: [
              {
                id: 'ex-1-electron',
                type: 'question',
                title: 'Example: Electron',
                content: 'Calculate the de Broglie wavelength of an electron accelerated through a potential difference of 54 Volts.\n\n(Hint: $K = qV = p^2/2m$)'
              },
              {
                id: 'sol-1-electron',
                type: 'proof',
                title: 'Solution',
                content: 'First, find the momentum.',
                proofSteps: [
                  'Kinetic Energy $K = qV = (1.6 \\times 10^{-19} C)(54 V) = 8.64 \\times 10^{-18} J$.',
                  'Momentum $p = \\sqrt{2mK}$. Mass of electron $m = 9.11 \\times 10^{-31} kg$.',
                  '$p = \\sqrt{2(9.11 \\times 10^{-31})(8.64 \\times 10^{-18})} \\approx 3.97 \\times 10^{-24}$ kg·m/s.',
                  'Wavelength $\\lambda = h/p$.',
                  '$\\lambda = \\frac{6.626 \\times 10^{-34}}{3.97 \\times 10^{-24}} \\approx 1.67 \\times 10^{-10}$ m.',
                  '$\\lambda = 0.167$ nm.'
                ]
              },
              {
                id: 's2-comparison',
                type: 'theory',
                title: 'Significance of 0.167 nm',
                content: 'A wavelength of $0.167$ nm is comparable to the spacing between atoms in a crystal lattice.\n\nThis suggests that while we cannot see baseballs diffract, we **should** be able to see electrons diffract if we pass them through a crystal!'
              }
            ]
          }
        ]
      },
      {
        id: 'unit-3-2-evidence',
        title: 'Experimental Evidence',
        description: 'Proving that matter behaves like waves.',
        color: 'duo-red',
        lessons: [
          {
            id: 'lesson-3-2-davisson',
            title: 'Davisson-Germer Experiment',
            description: 'Electron diffraction by crystals.',
            icon: 'Target',
            slides: [
              {
                id: 's1-accident',
                type: 'theory',
                title: 'A Lucky Accident (1927)',
                content: 'Clinton Davisson and Lester Germer were studying electron scattering from nickel targets at Bell Labs. An accidental break in the vacuum system oxidized the nickel. To clean it, they heated it, which crystallized the nickel into large single crystals.\n\nWhen they resumed, the scattering pattern changed drastically. Instead of diffuse scattering, they saw sharp peaks at specific angles.'
              },
              {
                id: 's2-analysis',
                type: 'theory',
                title: 'Diffraction Analysis',
                content: 'The electrons were behaving exactly like X-rays satisfying **Bragg\'s Law** for diffraction:\n\n$$ n\\lambda = 2d \\sin \\theta $$\n\nWhere:\n*   $d$ is the atomic spacing (known from X-ray studies to be $0.091$ nm for Ni).\n*   $\\theta$ is the scattering angle.'
              },
              {
                id: 's3-calculation',
                type: 'proof',
                title: 'Checking de Broglie',
                content: 'Did the angle match de Broglie\'s prediction?',
                proofSteps: [
                  'Voltage $V = 54$ Volts. Observed peak at $\\phi = 50^\\circ$ (scattering angle).',
                  'The Bragg angle $\\theta$ (relative to surface planes) relates to $\\phi$ geometry.',
                  'Experimental wavelength derived from diffraction: $\\lambda_{exp} = 0.165$ nm.',
                  'Theoretical de Broglie wavelength (calculated previously): $\\lambda_{theo} = 0.167$ nm.',
                  'The agreement was perfect.'
                ]
              },
              {
                id: 'q-significance',
                type: 'quiz',
                title: 'Conclusion',
                content: 'What did the Davisson-Germer experiment prove?',
                options: [
                  { id: '1', text: 'Electrons have mass.', isCorrect: false, explanation: 'Known since J.J. Thomson.' },
                  { id: '2', text: 'Electrons behave as waves.', isCorrect: true, explanation: 'Diffraction is a wave phenomenon. Particles do not diffract.' },
                  { id: '3', text: 'Nickel is a crystal.', isCorrect: false, explanation: 'This was known, but used as a tool.' }
                ]
              }
            ]
          },
          {
            id: 'lesson-3-2-others',
            title: 'Other Confirmations',
            description: 'G.P. Thomson and Double Slits.',
            icon: 'Layers',
            slides: [
              {
                id: 's1-thomson',
                type: 'theory',
                title: 'G.P. Thomson',
                content: 'Separately, G.P. Thomson (son of J.J. Thomson) fired high-energy electrons through thin metal foils. He observed concentric diffraction rings, exactly like X-rays.\n\n**Irony:** J.J. Thomson won the Nobel Prize for proving the electron is a **particle**. G.P. Thomson won the Nobel Prize for proving the electron is a **wave**.'
              },
              {
                id: 's2-double-slit',
                type: 'theory',
                title: 'Electron Double Slit',
                content: 'In 1961, Claus Jönsson performed the double-slit experiment with electrons. \n\nEven when electrons are fired **one at a time**, they build up an interference pattern on the detector screen over time. \n\nThis implies each electron interferes with itself!'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'sect-3-2-uncertainty',
    title: 'Section 2: The Uncertainty Principle',
    description: 'Heisenberg\'s limits on precision.',
    color: 'duo-red',
    units: [
      {
        id: 'unit-3-3-classical-waves',
        title: 'Uncertainty in Classical Waves',
        description: 'Why we cannot define position and wavelength simultaneously.',
        color: 'duo-red',
        lessons: [
          {
            id: 'lesson-3-3-wave-limit',
            title: 'Localized Waves',
            description: 'The trade-off between $\Delta x$ and $\Delta k$.',
            icon: 'Activity',
            slides: [
              {
                id: 's1-infinite-wave',
                type: 'theory',
                title: 'Pure Sine Wave',
                content: 'Consider a pure wave $y = A \\sin(kx - \\omega t)$.\n\n*   **Wavelength:** Perfectly defined ($\\Delta \\lambda = 0$, so $\\Delta p = 0$).\n*   **Position:** The wave extends from $-\\infty$ to $+\\infty$. It has no specific location ($\\Delta x = \\infty$).'
              },
              {
                id: 's2-wave-pulse',
                type: 'theory',
                title: 'Wave Pulse',
                content: 'To localize a wave (make $\\Delta x$ small), we must add many sine waves of different wavelengths (superposition). This creates a "wave packet".\n\n*   **Position:** More defined ($\\Delta x$ is small).\n*   **Wavelength:** Ill-defined, because we used a mix of many wavelengths ($\\Delta \\lambda$ is large).'
              },
              {
                id: 's3-relation',
                type: 'theory',
                title: 'The Bandwidth Theorem',
                content: 'For any wave, the product of the spread in position ($\\Delta x$) and the spread in wave number ($\\Delta k$) is constant.\n\n$$ \\Delta x \\Delta k \\approx 1 $$\n\nSince $p = \\hbar k$, this implies $\\Delta x \\Delta p \\approx \\hbar$. This is a fundamental property of waves, not just quantum mechanics.'
              }
            ]
          }
        ]
      },
      {
        id: 'unit-3-4-heisenberg',
        title: 'Heisenberg\'s Relationships',
        description: 'Fundamental limits of nature.',
        color: 'duo-red',
        lessons: [
          {
            id: 'lesson-3-4-position-momentum',
            title: 'Position & Momentum',
            description: '$\Delta x \Delta p \ge \hbar/2$',
            icon: 'AlertTriangle',
            slides: [
              {
                id: 's1-statement',
                type: 'theory',
                title: 'The Principle',
                content: 'Werner Heisenberg (1927) showed that it is impossible to measure both the position and momentum of a particle with infinite precision simultaneously.\n\n$$ \\Delta x \\Delta p_x \\ge \\frac{\\hbar}{2} $$\n\nWhere $\\hbar = h/2\\pi$. This is not a measurement error; it is a fundamental property of nature.'
              },
              {
                id: 's2-thought-exp',
                type: 'theory',
                title: 'Gamma Ray Microscope',
                content: 'Heisenberg imagined observing an electron with a microscope. To see it, you must bounce a photon off it.\n\n*   **High Precision ($\Delta x$ small):** Requires short wavelength photon (Gamma ray).\n*   **Consequence:** Short $\\lambda$ means high momentum ($p=h/\\lambda$). The photon hits the electron hard, changing its momentum unpredictably ($\\Delta p$ large).'
              },
              {
                id: 'q-macro-uncert',
                type: 'quiz',
                title: 'Macroscopic Uncertainty',
                content: 'Why don\'t we notice this for a car?',
                options: [
                  { id: '1', text: 'Cars don\'t have waves.', isCorrect: false, explanation: 'Everything has a wave nature.' },
                  { id: '2', text: 'The value of $\\hbar$ is very small.', isCorrect: true, explanation: '$\\hbar \\approx 10^{-34}$. For a 1000kg car, the uncertainty is undetectable.' },
                  { id: '3', text: 'Cars are too slow.', isCorrect: false, explanation: 'Speed is not the primary factor.' }
                ]
              }
            ]
          },
          {
            id: 'lesson-3-4-energy-time',
            title: 'Energy & Time',
            description: '$\Delta E \Delta t \ge \hbar/2$',
            icon: 'Clock',
            slides: [
              {
                id: 's1-relation',
                type: 'theory',
                title: 'Energy-Time Uncertainty',
                content: 'Another form of the principle relates energy and time:\n\n$$ \\Delta E \\Delta t \\ge \\frac{\\hbar}{2} $$\n\nThis means energy conservation can be "violated" by an amount $\\Delta E$ for a short time $\\Delta t$.'
              },
              {
                id: 's2-implication',
                type: 'theory',
                title: 'Virtual Particles',
                content: 'This allows for "virtual particles" to appear and disappear in the vacuum, provided they vanish quickly enough that $\\Delta t < \hbar/2\\Delta E$. This explains the range of nuclear forces.'
              },
              {
                id: 's3-spectral-lines',
                type: 'theory',
                title: 'Spectral Line Width',
                content: 'Excited atomic states have a finite lifetime ($\\Delta t$). This means the energy of the state is not perfectly sharp ($\\Delta E$). \n\nConsequently, spectral lines have a "natural line width"; they are not infinitely thin frequencies.'
              }
            ]
          }
        ]
      },
      {
        id: 'unit-3-5-consequences',
        title: 'Consequences',
        description: 'Zero-point energy and Confinement.',
        color: 'duo-red',
        lessons: [
          {
            id: 'lesson-3-5-confinement',
            title: 'Confinement Energy',
            description: 'Why electrons don\'t spiral into the nucleus.',
            icon: 'Box',
            slides: [
              {
                id: 's1-collapse',
                type: 'theory',
                title: 'Preventing Collapse',
                content: 'Classically, an electron attracted to a positive nucleus should spiral in and sit right on top of it ($r=0$).\n\n**Uncertainty:** If $r=0$, then $\\Delta x \approx 0$. This would imply $\\Delta p \to \\infty$. Infinite momentum requires infinite energy. The electron refuses to be confined to a point; it settles into a "cloud" of size $a_0$ (Bohr radius).'
              },
              {
                id: 'ex-box',
                type: 'question',
                title: 'Particle in a Box',
                content: 'Estimate the minimum kinetic energy of a proton confined to a nucleus of width $10^{-14}$ m.'
              },
              {
                id: 'sol-box',
                type: 'solution',
                title: 'Solution',
                content: '1. $\\Delta x \approx 10^{-14}$ m.\n2. $\\Delta p \approx \\hbar / \\Delta x$.\n3. $K_{min} \approx (\Delta p)^2 / 2m \approx \\hbar^2 / (2m (\Delta x)^2)$.\n4. Substituting values gives $K \\approx 2$ MeV.'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'sect-3-3-wave-packets',
    title: 'Section 3: Wave Packets',
    description: 'Describing localized particles with waves.',
    color: 'duo-red',
    units: [
      {
        id: 'unit-3-6-construction',
        title: 'Constructing Packets',
        description: 'Superposition and Fourier series.',
        color: 'duo-red',
        lessons: [
          {
            id: 'lesson-3-6-superposition',
            title: 'Adding Waves',
            description: 'Creating beats and localization.',
            icon: 'BarChart2',
            slides: [
              {
                id: 's1-beats',
                type: 'theory',
                title: 'Beats',
                content: 'Adding two waves of slightly different frequencies:\n\n$$ y = A\\cos(k_1 x - \\omega_1 t) + A\\cos(k_2 x - \\omega_2 t) $$\n\nResults in a wave with an **envelope** (modulation).\n\n$$ y = 2A \\cos(\\frac{\\Delta k}{2}x - \\frac{\\Delta \\omega}{2}t) \\cos(k_{avg}x - \\omega_{avg}t) $$'
              },
              {
                id: 's2-packet',
                type: 'theory',
                title: 'The Wave Packet',
                content: 'By adding infinitely many waves with a distribution of wave numbers $A(k)$, we can create a single isolated pulse or "packet". This packet represents the particle.'
              }
            ]
          }
        ]
      },
      {
        id: 'unit-3-7-velocity',
        title: 'Phase vs Group Velocity',
        description: 'Which speed is the particle speed?',
        color: 'duo-red',
        lessons: [
          {
            id: 'lesson-3-7-velocities',
            title: 'Two Velocities',
            description: 'Ripples vs Envelope.',
            icon: 'ChevronsRight',
            slides: [
              {
                id: 's1-phase',
                type: 'theory',
                title: 'Phase Velocity ($v_p$)',
                content: 'The speed of the individual ripples (high frequency part) inside the packet.\n\n$$ v_p = \\frac{\\omega}{k} = f\\lambda $$\n\nFor a de Broglie wave, $v_p = E/p = c^2/v$. Since $v < c$, $v_p > c$! This carries no information, so it doesn\'t violate relativity.'
              },
              {
                id: 's2-group',
                type: 'theory',
                title: 'Group Velocity ($v_g$)',
                content: 'The speed of the envelope (the packet itself). This is where the energy and information travels.\n\n$$ v_g = \\frac{d\\omega}{dk} $$\n\nIt can be shown that for a matter wave, $v_g = v$ (the velocity of the particle).'
              },
              {
                id: 's3-proof-vg',
                type: 'proof',
                title: 'Proof: Group Velocity = Particle Velocity',
                content: 'Show that $d\\omega/dk = v$.',
                proofSteps: [
                  'Energy $E = \\hbar \\omega \\implies \\omega = E/\\hbar$.',
                  'Momentum $p = \\hbar k \\implies k = p/\\hbar$.',
                  '$v_g = \\frac{d\\omega}{dk} = \\frac{d(E/\\hbar)}{d(p/\\hbar)} = \\frac{dE}{dp}$.',
                  'For a particle, $E = \\sqrt{p^2c^2 + m^2c^4}$.',
                  '$\\frac{dE}{dp} = \\frac{1}{2E} (2pc^2) = \\frac{pc^2}{E}$.',
                  'Since $p = \\gamma mv$ and $E = \\gamma mc^2$.',
                  '$v_g = \\frac{(\\gamma mv)c^2}{\\gamma mc^2} = v$.',
                  'Thus, the wave packet moves at the speed of the particle.'
                ]
              },
              {
                id: 'q-dispersion',
                type: 'quiz',
                title: 'Dispersion',
                content: 'What happens if phase velocity depends on wavelength ($v_p(k)$)?',
                options: [
                  { id: '1', text: 'The wave packet maintains its shape.', isCorrect: false, explanation: 'This is non-dispersive media (like light in vacuum).' },
                  { id: '2', text: 'The wave packet spreads out over time.', isCorrect: true, explanation: 'This is dispersion. Different components move at different speeds, causing the packet to widen.' },
                  { id: '3', text: 'The wave packet stops.', isCorrect: false, explanation: '' }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'sect-3-4-exercises',
    title: 'Section 4: Module Exercises',
    description: 'Comprehensive problems for Module III.',
    color: 'duo-red',
    units: [
      {
        id: 'unit-3-8-problems',
        title: 'Textbook Problems',
        description: 'Selected problems based on Krane Chapter 4.',
        color: 'duo-red',
        lessons: [
          {
            id: 'lesson-3-8-ex1',
            title: 'Set A: De Broglie',
            description: 'Wavelength calculations.',
            icon: 'Edit3',
            slides: [
              {
                id: 'ex-1',
                type: 'question',
                title: 'Problem: Bullet Wavelength',
                content: 'Calculate the de Broglie wavelength of a 10g bullet traveling at 500 m/s.'
              },
              {
                id: 'sol-1',
                type: 'solution',
                title: 'Solution',
                content: '$p = mv = (0.01)(500) = 5$ kg·m/s.\n$\\lambda = h/p = 6.626 \\times 10^{-34} / 5 = 1.3 \\times 10^{-34}$ m.\nImpossible to detect.'
              },
              {
                id: 'ex-2',
                type: 'question',
                title: 'Problem: Thermal Neutron',
                content: 'Find the wavelength of a neutron ($m=1.67 \\times 10^{-27}$ kg) with thermal energy $K = 0.025$ eV.'
              },
              {
                id: 'sol-2',
                type: 'solution',
                title: 'Solution',
                content: '$p = \\sqrt{2mK}$. Convert K to Joules ($0.025 \\times 1.6 \\times 10^{-19}$). \n$\\lambda = h/p \\approx 0.18$ nm. (Comparable to atomic spacing, useful for diffraction!).'
              }
            ]
          },
          {
            id: 'lesson-3-8-ex2',
            title: 'Set B: Uncertainty',
            description: 'Applying Heisenberg.',
            icon: 'HelpCircle',
            slides: [
              {
                id: 'ex-3',
                type: 'question',
                title: 'Problem: Lifetime',
                content: 'An excited atomic state has a lifetime of $10^{-8}$ s. What is the uncertainty in the energy of the emitted photon?'
              },
              {
                id: 'sol-3',
                type: 'solution',
                title: 'Solution',
                content: '$\\Delta E \\ge \\hbar / 2\\Delta t$.\n$\\Delta E \\approx 3.3 \\times 10^{-26}$ J $\\approx 2 \\times 10^{-7}$ eV.\nThis leads to the natural line width of spectra.'
              },
              {
                id: 'ex-4',
                type: 'question',
                title: 'Problem: Microscopic Bullet',
                content: 'If we measure the position of a 10g bullet to $0.01$ mm precision, what is the uncertainty in its speed?'
              },
              {
                id: 'sol-4',
                type: 'solution',
                title: 'Solution',
                content: '$\\Delta x = 10^{-5}$ m.\n$\\Delta p \\ge \\hbar / 2\\Delta x \\approx 5 \\times 10^{-30}$ kg·m/s.\n$\\Delta v = \\Delta p / m \\approx 5 \\times 10^{-28}$ m/s.\nCompletely negligible.'
              }
            ]
          }
        ]
      }
    ]
  }
];

export const MODULE_3_COURSE: Course = {
  id: 'mod-3-waves',
  title: 'Module III: Wave Properties',
  description: 'The Wave-Like Properties of Particles.',
  sections: SECTIONS
};