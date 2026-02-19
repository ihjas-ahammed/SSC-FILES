import { Course, Section } from '../../types';

const SECTIONS: Section[] = [
  {
    id: 'sect-2-1-review-waves',
    title: 'Section 1: Review of Electromagnetic Waves',
    description: 'Classical wave theory, Interference, Diffraction, and X-Rays.',
    color: 'duo-green',
    units: [
      {
        id: 'unit-2-1-classical-theory',
        title: 'Classical Wave Theory',
        description: 'Maxwell\'s equations and energy transport.',
        color: 'duo-green',
        lessons: [
          {
            id: 'lesson-2-1-maxwell',
            title: 'Electromagnetic Waves',
            description: 'Fields, Propagation, and Energy.',
            icon: 'Radio',
            slides: [
              {
                id: 's1-intro',
                type: 'theory',
                title: 'The Nature of Light',
                content: 'By the late 19th century, the wave nature of light was firmly established. James Clerk Maxwell showed that oscillating electric ($\\vec{E}$) and magnetic ($\\vec{B}$) fields propagate through space at the speed of light ($c$).\n\nA plane electromagnetic wave traveling in the $z$-direction is described by:\n\n$$ \\vec{E} = \\vec{E}_0 \\sin(kz - \\omega t) $$\n$$ \\vec{B} = \\vec{B}_0 \\sin(kz - \\omega t) $$\n\nWhere $k = 2\\pi/\\lambda$ is the wave number and $\\omega = 2\\pi f$ is the angular frequency.'
              },
              {
                id: 's2-energy-flux',
                type: 'theory',
                title: 'Energy Flux (Poynting Vector)',
                content: 'Electromagnetic waves transport energy. The rate of energy flow per unit area is given by the **Poynting Vector** $\\vec{S}$:\n\n$$ \\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B} $$\n\nThe intensity $I$ of the wave is the time average of the magnitude of $\\vec{S}$:\n\n$$ I = S_{avg} = \\frac{1}{2\\mu_0 c} E_0^2 $$\n\n**Crucial Classical Prediction:** The intensity (energy) depends only on the **amplitude** ($E_0$) of the wave, not its frequency.'
              },
              {
                id: 'q-classical-intensity',
                type: 'quiz',
                title: 'Classical Intensity',
                content: 'According to classical wave theory, how can you increase the energy delivered by a light beam to a surface?',
                options: [
                  { id: '1', text: 'Increase the frequency (color) of the light.', isCorrect: false, explanation: 'In classical theory, energy depends on amplitude, not frequency.' },
                  { id: '2', text: 'Increase the amplitude (brightness) of the light.', isCorrect: true, explanation: 'Intensity is proportional to the square of the amplitude ($E_0^2$).' },
                  { id: '3', text: 'Decrease the wavelength.', isCorrect: false, explanation: 'This changes frequency, which classically does not affect intensity.' }
                ]
              }
            ]
          },
          {
            id: 'lesson-2-1-interference',
            title: 'Interference & Diffraction',
            description: 'The definitive proof of wave nature.',
            icon: 'Activity',
            slides: [
              {
                id: 's1-superposition',
                type: 'theory',
                title: 'Superposition Principle',
                content: 'Waves exhibit **superposition**: when two waves meet, they add algebraically. This leads to:\n\n*   **Constructive Interference:** Peaks align with peaks (Intensity increases).\n*   **Destructive Interference:** Peaks align with troughs (Intensity cancels).\n\nParticles do not behave this way; two particles colliding do not annihilate to create zero mass/energy in classical mechanics.'
              },
              {
                id: 's2-young',
                type: 'theory',
                title: 'Young\'s Double Slit',
                content: 'Thomas Young (1801) demonstrated light interference. When light passes through two narrow slits, it forms a pattern of bright and dark fringes.\n\nCondition for Maxima (Bright):\n$$ d \\sin \\theta = n\\lambda $$\n\nCondition for Minima (Dark):\n$$ d \\sin \\theta = (n + \\frac{1}{2})\\lambda $$\n\nThis phenomenon is impossible to explain with a simple particle model.'
              },
              {
                id: 'q-diffraction',
                type: 'theory',
                title: 'Think About It',
                content: 'If light is a wave, why don\'t we see diffraction effects when light passes through a large open doorway?'
              },
              {
                id: 's-diffraction-sol',
                type: 'solution',
                title: 'Solution',
                content: 'Diffraction is most pronounced when the size of the opening ($a$) is comparable to the wavelength ($\\lambda$). For visible light, $\\lambda \\approx 500$ nm, while a doorway is $\\approx 1$ meter. Since $\\lambda \\ll a$, diffraction effects are negligible, and light appears to travel in straight lines (Ray Optics).'
              }
            ]
          },
          {
            id: 'lesson-2-1-xrays',
            title: 'X-Ray Diffraction',
            description: 'Waves or Particles?',
            icon: 'Grid',
            slides: [
              {
                id: 's1-discovery',
                type: 'theory',
                title: 'The Mystery of X-Rays',
                content: 'Discovered by Roentgen in 1895, X-rays were mysterious. Were they particles or waves? They couldn\'t be diffracted by ordinary gratings because their wavelength was too small ($\sim 0.1$ nm).\n\nMax von Laue suggested using **crystals** as natural diffraction gratings because the atomic spacing ($d$) is comparable to X-ray wavelengths.'
              },
              {
                id: 's2-bragg',
                type: 'proof',
                title: 'Bragg\'s Law',
                content: 'W.L. Bragg derived the condition for constructive interference from crystal planes.',
                proofSteps: [
                  'Consider X-rays reflecting off two parallel atomic planes separated by distance $d$.',
                  'The lower ray travels an extra distance equal to $2d \\sin \\theta$.',
                  'For constructive interference, this path difference must be an integer number of wavelengths.',
                  'Result: $2d \\sin \\theta = n\\lambda$'
                ]
              },
              {
                id: 's3-significance',
                type: 'theory',
                title: 'Significance',
                content: 'The observation of diffraction patterns proved that X-rays are electromagnetic waves of very short wavelength.\n\nHowever, shortly after this "proof" of wave nature, X-rays would provide the most compelling evidence for particle nature (Compton Effect).'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'sect-2-2-photoelectric',
    title: 'Section 2: The Photoelectric Effect',
    description: 'The experiment that challenged classical physics and Einstein\'s Nobel-winning explanation.',
    color: 'duo-green',
    units: [
      {
        id: 'unit-2-2-experiment',
        title: 'The Experiment & Classical Failure',
        description: 'What happens when light hits metal?',
        color: 'duo-green',
        lessons: [
          {
            id: 'lesson-2-2-setup',
            title: 'Experimental Setup',
            description: 'Measuring the emission of electrons.',
            icon: 'Settings',
            slides: [
              {
                id: 's1-basic',
                type: 'theory',
                title: 'The Phenomenon',
                content: 'When light shines on a clean metal surface, electrons are emitted. These are called **photoelectrons**.\n\nHeinrich Hertz discovered this in 1887 (accidentally) while generating radio waves.'
              },
              {
                id: 's2-apparatus',
                type: 'theory',
                title: 'The Apparatus',
                content: '1. **Emitter Plate**: Illuminated by light.\n2. **Collector Plate**: Collects emitted electrons.\n3. **Variable Voltage Source**: Can accelerate or retard electrons.\n4. **Ammeter**: Measures photocurrent.\n\nBy making the collector negative (retarding potential), we can measure the kinetic energy of the electrons.'
              },
              {
                id: 's3-stopping',
                type: 'theory',
                title: 'Stopping Potential',
                content: 'If we reverse the voltage ($V$), electrons are repelled. At a specific voltage $V_s$ (Stopping Potential), even the fastest electrons are turned back, and current drops to zero.\n\n$$ K_{max} = e V_s $$\n\nThis gives us a direct way to measure the maximum kinetic energy of the emitted electrons.'
              }
            ]
          },
          {
            id: 'lesson-2-2-failure',
            title: 'Failure of Wave Theory',
            description: 'Three major contradictions.',
            icon: 'XCircle',
            slides: [
              {
                id: 's1-pred-1',
                type: 'theory',
                title: 'Prediction 1: Intensity vs Energy',
                content: '**Classical Wave Theory:** Light energy is spread over the wavefront. Increasing intensity (brightness) increases the electric field amplitude ($E_0$). A stronger force ($F=qE$) should give electrons more kinetic energy.\n\n**Observation:** $K_{max}$ is **independent** of intensity. Brighter light produces *more* electrons, but not *faster* ones.'
              },
              {
                id: 's2-pred-2',
                type: 'theory',
                title: 'Prediction 2: Frequency Dependence',
                content: '**Classical Wave Theory:** Light of any frequency should eject electrons if intense enough. Energy is just energy.\n\n**Observation:** There is a **cutoff frequency** ($f_c$). Below this frequency, NO electrons are emitted, no matter how intense the light (even if it burns the metal!).'
              },
              {
                id: 's3-pred-3',
                type: 'theory',
                title: 'Prediction 3: Time Lag',
                content: '**Classical Wave Theory:** With weak light, energy is spread thin. It should take time for an electron to accumulate enough energy to escape (calculations suggest minutes for dim light).\n\n**Observation:** Emission is **instantaneous** ($< 10^{-9}$ s), even at extremely low intensities.'
              },
              {
                id: 'q-classical-fail',
                type: 'quiz',
                title: 'Identify the Failure',
                content: 'Which experimental observation contradicts the classical wave theory prediction that energy is distributed continuously?',
                options: [
                  { id: '1', text: 'Electrons are emitted.', isCorrect: false, explanation: 'Wave theory predicts emission, just with different properties.' },
                  { id: '2', text: 'Instantaneous emission at low intensity.', isCorrect: true, explanation: 'Continuous accumulation would require a time lag.' },
                  { id: '3', text: 'More intensity means more current.', isCorrect: false, explanation: 'Wave theory actually agrees with this (more energy = more electrons liberated).' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'unit-2-3-einstein',
        title: 'Einstein\'s Photon Theory',
        description: 'Quantization of light energy.',
        color: 'duo-green',
        lessons: [
          {
            id: 'lesson-2-3-hypothesis',
            title: 'The Photon Hypothesis',
            description: 'Light as a particle.',
            icon: 'Lightbulb',
            slides: [
              {
                id: 's1-quanta',
                type: 'theory',
                title: 'Einstein\'s Idea (1905)',
                content: 'Einstein proposed that light energy is not distributed continuously but travels in discrete bundles called **Photons** (or quanta).\n\nThe energy of a single photon is determined by its frequency:\n\n$$ E = hf $$\n\nWhere $h$ is Planck\'s constant ($6.626 \\times 10^{-34}$ J·s).'
              },
              {
                id: 's2-interaction',
                type: 'theory',
                title: 'The Interaction',
                content: 'Photoelectric emission is a one-to-one interaction. One photon hits one electron and transfers *all* its energy instantaneously.\n\n*   If $hf$ is enough to free the electron, it leaves immediately (No time lag).\n*   Increasing intensity means *more* photons, not more energetic photons.'
              },
              {
                id: 's3-equation',
                type: 'theory',
                title: 'The Photoelectric Equation',
                content: 'Conservation of Energy:\n\n$$ \\text{Energy In} = \\text{Energy to Escape} + \\text{Kinetic Energy} $$\n$$ hf = \\phi + K_{max} $$\n\nOr:\n$$ K_{max} = hf - \\phi $$\n\nWhere $\\phi$ is the **Work Function** (minimum energy required to escape the metal).'
              }
            ]
          },
          {
            id: 'lesson-2-3-analysis',
            title: 'Analyzing the Equation',
            description: 'Slope, Intercept, and Planck\'s Constant.',
            icon: 'TrendingUp',
            slides: [
              {
                id: 's1-graph',
                type: 'theory',
                title: 'Linear Relationship',
                content: 'Rearranging Einstein\'s equation:\n\n$$ V_s = \\left(\\frac{h}{e}\\right)f - \\left(\\frac{\\phi}{e}\\right) $$\n\nThis is a straight line equation ($y = mx + c$) if we plot Stopping Potential ($V_s$) vs Frequency ($f$).\n\n*   **Slope:** $h/e$ (Universal constant!)\n*   **y-intercept:** $-\\phi/e$ (Depends on metal)\n*   **x-intercept:** Cutoff frequency $f_c = \\phi/h$'
              },
              {
                id: 'q-slope',
                type: 'quiz',
                title: 'Graph Interpretation',
                content: 'If you plot $K_{max}$ vs frequency for two different metals (e.g., Sodium and Zinc), what will be similar about the lines?',
                options: [
                  { id: '1', text: 'They will have the same x-intercept.', isCorrect: false, explanation: 'The x-intercept is the cutoff frequency, which depends on the work function of the specific metal.' },
                  { id: '2', text: 'They will be parallel (same slope).', isCorrect: true, explanation: 'The slope is Planck\'s constant ($h$), which is universal.' },
                  { id: '3', text: 'They will have the same y-intercept.', isCorrect: false, explanation: 'y-intercept depends on work function.' }
                ]
              },
              {
                id: 's2-millikan',
                type: 'theory',
                title: 'Millikan\'s Verification',
                content: 'Robert Millikan (who famously measured electron charge) initially didn\'t believe Einstein\'s theory. He spent 10 years trying to disprove it.\n\nHowever, his precise measurements perfectly fitted the line $K_{max} = hf - \\phi$. He ended up proving Einstein right and calculating $h$ with high precision.'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'sect-2-3-thermal',
    title: 'Section 3: Thermal Radiation',
    description: 'Blackbody radiation and the birth of Quantum Mechanics.',
    color: 'duo-green',
    units: [
      {
        id: 'unit-2-3-classical-fail',
        title: 'The Blackbody Problem',
        description: 'Why classical physics predicted infinite energy.',
        color: 'duo-green',
        lessons: [
          {
            id: 'lesson-2-3-blackbody',
            title: 'Blackbody Radiation',
            description: 'What represents a perfect emitter?',
            icon: 'Flame',
            slides: [
              {
                id: 's1-def',
                type: 'theory',
                title: 'What is a Blackbody?',
                content: 'A **Blackbody** is an idealized object that absorbs all radiation incident upon it. Because it is a perfect absorber, it is also a perfect emitter.\n\nPractical model: A small hole in a hollow heated cavity. Any light entering is trapped; radiation emerging from the hole characterizes the temperature of the cavity.'
              },
              {
                id: 's2-spectrum',
                type: 'theory',
                title: 'The Spectrum',
                content: 'Experimental observation shows:\n\n1.  A continuous spectrum of wavelengths.\n2.  As Temperature ($T$) increases, total intensity increases ($I \\propto T^4$, **Stefan-Boltzmann Law**).\n3.  As $T$ increases, the peak wavelength shifts to lower values ($\\lambda_{max} T = \\text{const}$, **Wien\'s Displacement Law**).'
              }
            ]
          },
          {
            id: 'lesson-2-3-uv-catastrophe',
            title: 'The Ultraviolet Catastrophe',
            description: 'The failure of the Rayleigh-Jeans Law.',
            icon: 'AlertTriangle',
            slides: [
              {
                id: 's1-classical-approach',
                type: 'theory',
                title: 'Rayleigh-Jeans Law',
                content: 'Classical physics treated the cavity modes as standing waves. According to the Equipartition Theorem, each mode should have average energy $k_B T$.\n\nNumber of modes per volume $\\propto f^2$.\n\nSpectral radiancy prediction:\n$$ R(\\lambda) = \\frac{2\\pi c k_B T}{\\lambda^4} $$'
              },
              {
                id: 's2-catastrophe',
                type: 'theory',
                title: 'The Catastrophe',
                content: 'Look at the formula: $R(\\lambda) \\propto 1/\\lambda^4$.\n\nAs wavelength decreases ($\lambda \\to 0$, Ultraviolet), the predicted intensity goes to **infinity**.\n\nThis implies every oven should blast us with infinite X-rays and gamma rays instantly! This obviously doesn\'t happen.'
              }
            ]
          }
        ]
      },
      {
        id: 'unit-2-3-planck',
        title: 'Planck\'s Solution',
        description: 'The first step into Quantum Mechanics.',
        color: 'duo-green',
        lessons: [
          {
            id: 'lesson-2-3-quantization',
            title: 'Energy Quantization',
            description: 'Planck\'s desperate assumption.',
            icon: 'GitCommit',
            slides: [
              {
                id: 's1-assumption',
                type: 'theory',
                title: 'The Radical Assumption',
                content: 'In 1900, Max Planck proposed a solution. He assumed that the oscillators in the cavity walls could not have arbitrary energy. Instead, energy is quantized:\n\n$$ E_n = n h f $$\n\nWhere $n$ is an integer ($0, 1, 2...$).'
              },
              {
                id: 's2-consequence',
                type: 'theory',
                title: 'Why this works',
                content: 'At high frequencies ($f$), the energy gap $hf$ is large. The thermal energy $k_B T$ is not enough to excite these high-energy modes. \n\nProbability of occupation drops as $e^{-hf/k_B T}$.\n\nThis cuts off the high-frequency/short-wavelength end of the spectrum, solving the Ultraviolet Catastrophe.'
              },
              {
                id: 's3-formula',
                type: 'theory',
                title: 'Planck\'s Radiation Law',
                content: 'The resulting formula matches experimental data perfectly:\n\n$$ I(\\lambda) = \\frac{2\\pi h c^2}{\\lambda^5} \\frac{1}{e^{hc/\\lambda k_B T} - 1} $$\n\nThis was the birth of Quantum Mechanics.'
              },
              {
                id: 'q-planck',
                type: 'quiz',
                title: 'Concept Check',
                content: 'Why does Planck\'s law solve the UV catastrophe?',
                options: [
                  { id: '1', text: 'It ignores high frequency waves.', isCorrect: false, explanation: '' },
                  { id: '2', text: 'High frequency modes require large bundles of energy ($hf$) which are thermally unlikely to be excited.', isCorrect: true, explanation: 'The exponential term suppresses the high-frequency tail.' },
                  { id: '3', text: 'It changes the speed of light.', isCorrect: false, explanation: '' }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'sect-2-4-compton',
    title: 'Section 4: The Compton Effect',
    description: 'X-Ray scattering and the definitive proof of photon momentum.',
    color: 'duo-green',
    units: [
      {
        id: 'unit-2-4-evidence',
        title: 'Scattering X-Rays',
        description: 'Collisions between light and electrons.',
        color: 'duo-green',
        lessons: [
          {
            id: 'lesson-2-4-concept',
            title: 'The Observation',
            description: 'Why scattered X-rays change wavelength.',
            icon: 'Minimize2',
            slides: [
              {
                id: 's1-intro',
                type: 'theory',
                title: 'Compton Scattering (1923)',
                content: 'Arthur Compton observed X-rays scattering off electrons in a graphite target.\n\n**Classical Prediction:** Light is an oscillating field. It shakes the electron. The electron re-radiates at the *same* frequency. No wavelength change.\n\n**Observation:** The scattered X-rays have a **longer wavelength** (lower energy) than the incident rays. The shift depends on the scattering angle.'
              },
              {
                id: 's2-model',
                type: 'theory',
                title: 'The Photon Model',
                content: 'Compton treated the X-ray not as a wave, but as a particle (photon) making a billiard-ball collision with a free electron.\n\nConservation of Energy and Momentum applies.\n\n*   Photon loses energy -> Frequency drops -> Wavelength increases.'
              }
            ]
          },
          {
            id: 'lesson-2-4-derivation',
            title: 'Deriving the Shift',
            description: 'Using Relativistic Dynamics.',
            icon: 'FunctionSquare',
            slides: [
              {
                id: 's1-equations',
                type: 'proof',
                title: 'Conservation Laws',
                content: 'We equate initial and final states.',
                proofSteps: [
                  'Energy: $E_{photon} + m_ec^2 = E\'_{photon} + E_e$',
                  'Momentum (Vector): $\\vec{p}_{photon} = \\vec{p}\'_{photon} + \\vec{p}_e$',
                  'Photon relations: $E = hf = hc/\\lambda$, $p = E/c$.',
                  'Electron relations: Relativistic energy $E_e^2 = p_e^2c^2 + m_e^2c^4$.'
                ]
              },
              {
                id: 's2-math',
                type: 'proof',
                title: 'Solving the Equations',
                content: 'Using the Law of Cosines for the momentum triangle and substituting into the energy equation yields the famous result.',
                proofSteps: [
                  '$p_e^2 = p^2 + p\'^2 - 2pp\'\\cos\\theta$',
                  'Substitute into energy equation and simplify.',
                  'Result: $\\Delta \\lambda = \\lambda\' - \\lambda = \\frac{h}{m_e c} (1 - \\cos \\theta)$'
                ]
              },
              {
                id: 's3-formula',
                type: 'theory',
                title: 'Compton Shift Formula',
                content: '$$ \\Delta \\lambda = \\frac{h}{m_e c} (1 - \\cos \\theta) $$\n\nThe quantity $\\lambda_c = h/m_e c$ is called the **Compton Wavelength** of the electron.\n\n$\\lambda_c \\approx 0.00243$ nm.\n\nMaximum shift occurs at $\\theta = 180^\\circ$ (backscattering), where $\\Delta \\lambda = 2\\lambda_c$.'
              },
              {
                id: 'q-compton-calc',
                type: 'quiz',
                title: 'Calculating Shift',
                content: 'An X-ray photon scatters at $90^\\circ$ from an electron. By how much does its wavelength change?',
                options: [
                  { id: '1', text: '0', isCorrect: false, explanation: 'Classical prediction, but incorrect here.' },
                  { id: '2', text: '$\\lambda_c$ (0.00243 nm)', isCorrect: true, explanation: 'At 90 degrees, $\\cos(90) = 0$, so $\\Delta \\lambda = \\lambda_c(1-0) = \\lambda_c$.' },
                  { id: '3', text: '$2\\lambda_c$', isCorrect: false, explanation: 'This happens at 180 degrees.' }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'sect-2-5-duality',
    title: 'Section 5: Wave-Particle Duality',
    description: 'Reconciling the two natures of light.',
    color: 'duo-green',
    units: [
      {
        id: 'unit-2-5-concepts',
        title: 'Complementarity',
        description: 'Particles or Waves?',
        color: 'duo-green',
        lessons: [
          {
            id: 'lesson-2-5-nature',
            title: 'Particles vs Waves',
            description: 'When does light act like what?',
            icon: 'GitMerge',
            slides: [
              {
                id: 's1-summary',
                type: 'theory',
                title: 'The Dual Nature',
                content: 'Light exhibits a dual nature.\n\n*   **Wave-like:** Interference, Diffraction, Polarization. (Low energy, high intensity, propagation).\n*   **Particle-like:** Photoelectric effect, Compton scattering. (High energy, interaction with matter).'
              },
              {
                id: 's2-complementarity',
                type: 'theory',
                title: 'Bohr\'s Principle of Complementarity',
                content: 'The wave and particle models are complementary; if a measurement proves the wave character of radiation, it is impossible to prove the particle character in the same experiment, and vice versa.'
              },
              {
                id: 'q-choice',
                type: 'quiz',
                title: 'Which model to use?',
                content: 'If you are calculating the resolution of a telescope lens, which model should you use?',
                options: [
                  { id: '1', text: 'Particle Model', isCorrect: false, explanation: 'Photons don\'t explain diffraction limits easily.' },
                  { id: '2', text: 'Wave Model', isCorrect: true, explanation: 'Diffraction (Rayleigh criterion) is a wave phenomenon.' }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'sect-2-6-exercises',
    title: 'Section 6: Module Exercises',
    description: 'Problems to test your understanding.',
    color: 'duo-green',
    units: [
      {
        id: 'unit-2-6-problems',
        title: 'Textbook Problems',
        description: 'Selected problems based on Krane Chapter 3.',
        color: 'duo-green',
        lessons: [
          {
            id: 'lesson-2-6-ex1',
            title: 'Set A: Photoelectric Effect',
            description: 'Calculations involving Work Function and Stopping Potential.',
            icon: 'Edit3',
            slides: [
              {
                id: 'ex-1',
                type: 'question',
                title: 'Problem: Work Function',
                content: 'The work function of Potassium is 2.29 eV. Light of wavelength 400 nm falls on it. (a) Find the photon energy. (b) Will electrons be emitted? (c) If yes, find $K_{max}$.'
              },
              {
                id: 'sol-1',
                type: 'solution',
                title: 'Solution',
                content: '(a) $E = hc/\\lambda = 1240 / 400 = 3.1$ eV.\n(b) Since $3.1 > 2.29$, electrons **are** emitted.\n(c) $K_{max} = 3.1 - 2.29 = 0.81$ eV.'
              },
              {
                id: 'ex-2',
                type: 'question',
                title: 'Problem: Stopping Potential',
                content: 'Light of frequency $8 \\times 10^{14}$ Hz ejects electrons with $K_{max} = 1.5$ eV. What is the stopping potential?'
              },
              {
                id: 'sol-2',
                type: 'solution',
                title: 'Solution',
                content: '$K_{max} = e V_s$. \n$1.5 \\text{ eV} = e V_s$. \nDividing by $e$ gives $V_s = 1.5$ V.'
              }
            ]
          },
          {
            id: 'lesson-2-6-ex2',
            title: 'Set B: Compton & Thermal',
            description: 'Scattering and Radiation problems.',
            icon: 'Activity',
            slides: [
              {
                id: 'ex-3',
                type: 'question',
                title: 'Problem: Compton Shift',
                content: 'X-rays of wavelength 0.100 nm are scattered at $180^\\circ$. Find the wavelength of the scattered rays.'
              },
              {
                id: 'sol-3',
                type: 'solution',
                title: 'Solution',
                content: 'At $180^\\circ$, $\\Delta \\lambda = 2 \\lambda_c = 2(0.00243) = 0.00486$ nm.\n$\\lambda\' = 0.100 + 0.00486 = 0.10486$ nm.'
              },
              {
                id: 'ex-4',
                type: 'question',
                title: 'Problem: Wien\'s Law',
                content: 'The surface temperature of the Sun is approx 5800 K. At what wavelength does it radiate the most energy?'
              },
              {
                id: 'sol-4',
                type: 'solution',
                title: 'Solution',
                content: '$\\lambda_{max} T = 2.898 \\times 10^{-3}$ m·K.\n$\\lambda_{max} = 2.898 \\times 10^{-3} / 5800 \\approx 500$ nm (Green visible light).'
              }
            ]
          }
        ]
      }
    ]
  }
];

export const MODULE_2_COURSE: Course = {
  id: 'mod-2-particles',
  title: 'Module II: Particle Properties',
  description: 'The Particle-Like Properties of Electromagnetic Radiation.',
  sections: SECTIONS
};