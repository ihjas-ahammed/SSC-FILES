import { Unit } from '../../types';

export const UNIT_3_2_2_HEISENBERG_UNCERTAINTY: Unit = {
  id: "unit-3-2-2",
  title: "Heisenberg Uncertainty Relationships",
  description: "The limits of nature: Position-Momentum and Energy-Time uncertainty",
  color: "duo-violet",
  lessons: [
    // ── LESSON 1: Priming ─────────────────────────────────────────────────────────
    {
      id: "les-3-2-2-act",
      title: "Priming: Quantum Fuzziness",
      description: "Activate prior thinking about measurement limits",
      icon: "Brain",
      slides: [
        {
          id: "hu-prime-1",
          type: "quiz",
          title: "Priming Question 1",
          content: "In classical physics, if you have perfect measuring tools, can you theoretically know the exact position and exact velocity of a particle at the same time?",
          options: [
            { id: "A", text: "Yes, there is no theoretical limit in classical physics.", isCorrect: true, explanation: "Classical physics (Newtonian mechanics) assumes particles have perfectly defined trajectories with precise position and momentum simultaneously." },
            { id: "B", text: "No, measuring one always destroys the other.", isCorrect: false, explanation: "That is the quantum view, not the classical view!" }
          ]
        },
        {
          id: "hu-prime-2",
          type: "quiz",
          title: "Priming Question 2",
          content: "If an electron acts like a wave, and we just established that waves cannot have a perfectly defined position and wavelength simultaneously... what does this imply for the electron?",
          options: [
            { id: "A", text: "The electron cannot have a perfectly defined position and momentum simultaneously.", isCorrect: true, explanation: "Exactly! Because momentum is tied to wavelength ($p = h/\\lambda$), the wave uncertainty directly translates into a physical uncertainty for the particle's momentum and position." },
            { id: "B", text: "The electron must stop moving when we measure it.", isCorrect: false, explanation: "It doesn't stop; its properties are just inherently fuzzy." }
          ]
        }
      ]
    },

    // ── LESSON 2: Theory: Heisenberg Uncertainty Principle ────────────────────────
    {
      id: "les-3-2-2-1",
      title: "The Heisenberg Uncertainty Principle",
      description: "T: Formulation of the Heisenberg limits",
      icon: "Scale",
      slides: [
        {
          id: "hu-theory-1",
          type: "theory",
          title: "Heisenberg Uncertainty Relationships (1927)",
          content: "By applying the classical wave limits ($\\Delta x \\Delta \lambda \\sim \\lambda^2$ and $\\Delta t \\Delta f \\sim 1$) to de Broglie's matter waves ($p = h/\\lambda$ and $E = hf$), Werner Heisenberg discovered the fundamental limits of nature.\n\n**Position and Momentum:**\n$$\\boxed{\\Delta x \\Delta p_x \\ge \\frac{\\hbar}{2}} \\qquad (\\text{Eq. 4.10})$$\nIt is impossible to simultaneously know the exact position and exact momentum of a particle.\n\n**Energy and Time:**\n$$\\boxed{\\Delta E \\Delta t \\ge \\frac{\\hbar}{2}} \\qquad (\\text{Eq. 4.13})$$\nIt is impossible to simultaneously know the exact energy of a particle and the exact time it possesses that energy.\n\n*(Note: $\\hbar = h/2\\pi = 1.05 \\times 10^{-34}$ J·s, or $6.58 \\times 10^{-16}$ eV·s)*"
        },
        {
          id: "hu-q1",
          type: "quiz",
          title: "Physical Meaning: Ignorance or Reality?",
          content: "Is the uncertainty principle just a result of our measuring instruments being clumsy (e.g., bumping the electron with a photon), or is it a deeper feature of nature?",
          options: [
            { id: "A", text: "It is just measurement disturbance; better tech could beat it.", isCorrect: false, explanation: "Einstein initially thought this, but he was wrong. It is not just an experimental limit." },
            { id: "B", text: "It is a fundamental indeterminacy of nature; particles simply do not possess exact positions and momenta simultaneously.", isCorrect: true, explanation: "Correct! The 'fuzziness' is built into the fabric of the universe. A particle *is* a wave packet; it structurally cannot be a perfect point and have a perfect momentum at the same time." }
          ]
        },
        {
          id: "hu-q2",
          type: "quiz",
          title: "Minimum Uncertainty",
          content: "The equations use a $\\ge$ sign. What type of wave packet achieves the absolute minimum possible uncertainty ($\\Delta x \\Delta p_x = \\hbar/2$)?",
          options: [
            { id: "A", text: "A square wave packet.", isCorrect: false, explanation: "A square packet has sharp edges, creating high momentum uncertainty." },
            { id: "B", text: "A Gaussian (bell-shaped) wave packet.", isCorrect: true, explanation: "A Gaussian function minimizes the spread in both position and momentum space. This is the 'most compact' quantum state possible." }
          ]
        }
      ]
    },

    // ── LESSON 3: Example 4.6 (Slit Diffraction) ──────────────────────────
    {
      id: "les-3-2-2-2",
      title: "Ex 4.6: Uncertainty at a Slit",
      description: "Ex: How a slit introduces momentum uncertainty",
      icon: "Menu",
      slides: [
        {
          id: "ex46-theory",
          type: "theory",
          title: "Example 4.6 — Single Slit Diffraction",
          content: "Imagine a beam of electrons traveling entirely in the $y$-direction. They have exact momentum $p_y$, and $p_x = 0$.\n\nThey pass through a narrow slit of width $a$ aligned along the $x$-axis.\n\nBefore the slit: We know nothing about their $x$-position ($\\Delta x = \\infty$). Therefore, $p_x$ is perfectly known ($\\Delta p_x = 0$).\n\n**Passing the slit:** The slit forcibly localizes the electrons to a region $\\Delta x = a$. \nAccording to Heisenberg, this sudden restriction in position MUST cause a sudden uncertainty in momentum $\\Delta p_x$!"
        },
        {
          id: "ex46-canvas",
          type: "interactive_canvas",
          title: "Slit Diffraction = Uncertainty",
          content: "Squeezing the particle's position causes its momentum to spread out, resulting in a diffracted beam.",
          interactiveCanvasId: "single-slit-uncertainty"
        },
        {
          id: "ex46-walk",
          type: "proof",
          title: "Interactive Logic",
          content: "Let's calculate the acquired transverse momentum.",
          interactiveSteps: [
            {
              stepText: "We use the order-of-magnitude uncertainty relation: $\\Delta x \\Delta p_x \\sim h$."
            },
            {
              prompt: "If the position is squeezed to $\\Delta x = a$, what is the induced momentum uncertainty $\\Delta p_x$?",
              stepText: "$$\\Delta p_x \\sim \\frac{h}{a}$$",
              options: [
                { id: "A", text: "$\\Delta p_x \\sim h/a$", isCorrect: true, explanation: "Correct. By forcing the electron through the narrow slit, nature 'kicks' it transversely with momentum $\\sim h/a$." }
              ]
            },
            {
              prompt: "This transverse momentum causes the beam to spread at an angle $\\theta$. For small angles, $\\theta \\approx \\Delta p_x / p_y$. Substitute $p_y = h/\\lambda$.",
              stepText: "$$\\theta \\approx \\frac{h/a}{h/\\lambda} = \\frac{\\lambda}{a}$$",
              options: [
                { id: "A", text: "$\\theta \\approx \\lambda/a$", isCorrect: true, explanation: "This perfectly matches the classical single-slit diffraction formula $\\sin \\theta = \\lambda/a$! Quantum uncertainty and wave diffraction are two ways of describing the exact same physics." }
              ]
            }
          ]
        }
      ]
    },

    // ── LESSON 4: Example 4.7 (Electron Precision) ──────────────────────────
    {
      id: "les-3-2-2-3",
      title: "Ex 4.7: Tracking an Electron",
      description: "Ex: Uncertainty applied to an electron",
      icon: "Target",
      slides: [
        {
          id: "ex47-q",
          type: "example_q",
          title: "Example 4.7 — Tracking an Electron",
          content: "**Problem:**\nAn electron moves in the $x$ direction with a speed of $3.6 \\times 10^6$ m/s. We measure its speed to a precision of 1%.\n\nWith what precision can we simultaneously measure its $x$ coordinate?\n\n*(Use mass of electron $m = 9.11 \\times 10^{-31}$ kg, and $\\hbar = 1.05 \\times 10^{-34}$ J·s)*"
        },
        {
          id: "ex47-sol",
          type: "proof",
          title: "Interactive Solution",
          content: "Find the momentum, then the uncertainty.",
          interactiveSteps: [
            {
              prompt: "First, calculate the actual momentum $p_x = mv$.",
              stepText: "$$p_x = (9.11 \\times 10^{-31} \\text{ kg})(3.6 \\times 10^6 \\text{ m/s}) = 3.3 \\times 10^{-24} \\text{ kg}\\cdot\\text{m/s}$$",
              options: [
                { id: "A", text: "$3.3 \\times 10^{-24}$ kg·m/s", isCorrect: true, explanation: "" }
              ]
            },
            {
              prompt: "The speed is known to 1%. Therefore, the momentum is known to 1%. What is $\\Delta p_x$?",
              stepText: "$$\\Delta p_x = 0.01 \\times 3.3 \\times 10^{-24} = 3.3 \\times 10^{-26} \\text{ kg}\\cdot\\text{m/s}$$",
              options: [
                { id: "A", text: "$3.3 \\times 10^{-26}$ kg·m/s", isCorrect: true, explanation: "" }
              ]
            },
            {
              prompt: "Now use $\\Delta x \\sim \\hbar / \\Delta p_x$ to find the position uncertainty.",
              stepText: "$$\\Delta x \\sim \\frac{1.05 \\times 10^{-34} \\text{ J}\\cdot\\text{s}}{3.3 \\times 10^{-26} \\text{ kg}\\cdot\\text{m/s}} \\approx 3.2 \\times 10^{-9} \\text{ m} = 3.2 \\text{ nm}$$",
              options: [
                { id: "A", text: "$3.2$ nm", isCorrect: true, explanation: "This is about 10 atomic diameters. If you know its speed to 1%, you cannot know which specific atom the electron is at!" }
              ]
            }
          ]
        }
      ]
    },

    // ── LESSON 5: Example 4.8 (Pitched Baseball) ──────────────────────────
    {
      id: "les-3-2-2-4",
      title: "Ex 4.8: The Quantum Baseball",
      description: "Ex: Why we don't see uncertainty in daily life",
      icon: "Circle",
      slides: [
        {
          id: "ex48-q",
          type: "example_q",
          title: "Example 4.8 — A Pitched Baseball",
          content: "**Problem:**\nRepeat the calculation for a pitched baseball ($m = 0.145$ kg) moving at $42.5$ m/s (95 mph). Assume its speed is also measured to 1% precision.\n\nFind $\\Delta x$."
        },
        {
          id: "ex48-sol",
          type: "proof",
          title: "Interactive Solution",
          content: "Use the same steps as the electron.",
          interactiveSteps: [
            {
              stepText: "$$p_x = (0.145)(42.5) = 6.16 \\text{ kg}\\cdot\\text{m/s}$$\n$$\\Delta p_x = 0.01 \\times 6.16 = 6.16 \\times 10^{-2} \\text{ kg}\\cdot\\text{m/s}$$"
            },
            {
              prompt: "Calculate $\\Delta x \\sim \\hbar / \\Delta p_x$.",
              stepText: "$$\\Delta x \\sim \\frac{1.05 \\times 10^{-34}}{6.16 \\times 10^{-2}} \\approx 1.7 \\times 10^{-33} \\text{ m}$$",
              options: [
                { id: "A", text: "$1.7 \\times 10^{-33}$ m", isCorrect: true, explanation: "This is 19 orders of magnitude smaller than an atomic nucleus!" }
              ]
            }
          ]
        },
        {
          id: "ex48-interp",
          type: "quiz",
          title: "Physical Interpretation",
          content: "Based on $\\Delta x = 1.7 \\times 10^{-33}$ m, if a baseball player strikes out, can they blame the Heisenberg Uncertainty Principle for the ball jumping over the bat?",
          options: [
            { id: "A", text: "Yes, quantum effects dictate all probabilities.", isCorrect: false, explanation: "The probability of jumping the bat is practically zero." },
            { id: "B", text: "No, the uncertainty is vastly smaller than the size of an atom, let alone a bat.", isCorrect: true, explanation: "Because $h$ is so incredibly small, macroscopic objects have completely negligible quantum uncertainties. Classical physics works perfectly for baseballs." }
          ]
        }
      ]
    },

    // ── LESSON 6: Example 4.9 (Nuclear Confinement) ──────────────────────────
    {
      id: "les-3-2-2-5",
      title: "Ex 4.9: Confinement in the Nucleus",
      description: "Ex: Using uncertainty to prove electrons don't live in the nucleus",
      icon: "Minimize2",
      slides: [
        {
          id: "ex49-q",
          type: "example_q",
          title: "Example 4.9 — Electrons in the Nucleus?",
          content: "**Problem:**\nIn nuclear beta decay, electrons shoot out of the atomic nucleus. Let's assume an electron was 'trapped' inside the nucleus before it escaped.\n\nThe diameter of a typical nucleus is $\\Delta x \\approx 1.0 \\times 10^{-14}$ m.\n\nUse the uncertainty principle to estimate the minimum momentum and kinetic energy this trapped electron must have."
        },
        {
          id: "ex49-sol",
          type: "proof",
          title: "Interactive Solution",
          content: "Find $\\Delta p_x$ using $\\Delta x \\sim 10^{-14}$ m.",
          interactiveSteps: [
            {
              prompt: "Calculate $\\Delta p_x \\sim \\hbar / \\Delta x$. (Use $\\hbar c = 197$ MeV·fm to make it easier. $\\Delta x = 10$ fm).",
              stepText: "$$\\Delta p_x \\sim \\frac{\\hbar}{\\Delta x} = \\frac{\\hbar c}{c \\Delta x} = \\frac{197 \\text{ MeV}\\cdot\\text{fm}}{c(10 \\text{ fm})} \\approx 19.7 \\text{ MeV/c}$$",
              options: [
                { id: "A", text: "$19.7$ MeV/c", isCorrect: true, explanation: "Because the electron is trapped in such a tiny space, its momentum must be wildly uncertain, varying by nearly 20 MeV/c!" }
              ]
            },
            {
              prompt: "A momentum of $19.7$ MeV/c is highly relativistic for an electron ($mc^2 = 0.511$ MeV). Calculate the kinetic energy $K = \\sqrt{(pc)^2 + (mc^2)^2} - mc^2$.",
              stepText: "$$K = \\sqrt{(19.7)^2 + (0.511)^2} - 0.511 \\approx 19.7 - 0.511 \\approx 19 \\text{ MeV}$$",
              options: [
                { id: "A", text: "$K \\approx 19$ MeV", isCorrect: true, explanation: "To be confined to the nucleus, the electron MUST possess about 19 MeV of kinetic energy just bouncing around." }
              ]
            }
          ]
        },
        {
          id: "ex49-interp",
          type: "quiz",
          title: "Physical Interpretation",
          content: "Electrons emitted from the nucleus in beta decay are observed to have kinetic energies of only about $1$ MeV. What does this suggest about our assumption?",
          options: [
            { id: "A", text: "The electron cannot possibly exist permanently trapped inside the nucleus.", isCorrect: true, explanation: "If it lived in the nucleus, it would need 19 MeV of energy. Since it emerges with only 1 MeV, it couldn't have been in there! The electron is actually 'manufactured' at the exact instant of decay." },
            { id: "B", text: "The uncertainty principle fails for nuclear physics.", isCorrect: false, explanation: "It holds perfectly. It proves the classical 'trapped particle' model is wrong." }
          ]
        }
      ]
    },

    // ── LESSON 7: Example 4.10 (Energy-Time & Particle Lifetimes) ──────────────────────────
    {
      id: "les-3-2-2-6",
      title: "Ex 4.10: Energy-Time Uncertainty",
      description: "Ex: Particle lifetimes dictate mass precision",
      icon: "Hourglass",
      slides: [
        {
          id: "ex410-theory",
          type: "theory",
          title: "Energy-Time Uncertainty",
          content: "$$\\Delta E \\Delta t \\ge \\frac{\\hbar}{2}$$\n\nIf a particle only exists for a very short lifetime $\\Delta t$ between its creation and decay, nature does not have time to 'figure out' exactly what its rest energy (mass) is.\n\n- Stable particles (electron, proton): $\\Delta t = \\infty$, so $\\Delta E = 0$. They have perfectly sharp, exact masses.\n- Highly unstable particles (resonances): Very short $\\Delta t$, so $\\Delta E$ is large. Every time you create one, it has a slightly different mass!"
        },
        {
          id: "ex410-canvas",
          type: "interactive_canvas",
          title: "Particle Mass Width",
          content: "Adjust the lifetime of the particle. Shorter lifetime = broader 'width' (uncertainty) in its mass.",
          interactiveCanvasId: "energy-time-uncertainty"
        },
        {
          id: "ex410-q",
          type: "example_q",
          title: "Example 4.10 — The Rho Meson",
          content: "**Problem:**\nThe rho ($\\rho$) meson has a rest energy of $765$ MeV and an incredibly short lifetime of $\\Delta t = 4.4 \\times 10^{-24}$ s.\n\nFind the uncertainty in its rest energy $\\Delta E$ in MeV.\n\n*(Use $\\hbar = 6.58 \\times 10^{-16}$ eV·s)*"
        },
        {
          id: "ex410-sol",
          type: "proof",
          title: "Interactive Solution",
          content: "Use $\\Delta E \\sim \\hbar / \\Delta t$.",
          interactiveSteps: [
            {
              prompt: "Calculate $\\Delta E$.",
              stepText: "$$\\Delta E \\sim \\frac{6.58 \\times 10^{-16} \\text{ eV}\\cdot\\text{s}}{4.4 \\times 10^{-24} \\text{ s}} \\approx 1.5 \\times 10^8 \\text{ eV} = 150 \\text{ MeV}$$",
              options: [
                { id: "A", text: "$150$ MeV", isCorrect: true, explanation: "Correct! The mass of the rho meson is so incredibly uncertain ($765 \\pm 150$ MeV) that it's a massive 20% blur!" }
              ]
            }
          ]
        },
        {
          id: "ex410-interp",
          type: "quiz",
          title: "Experimental Application",
          content: "Because $\\Delta t = 4.4 \\times 10^{-24}$ s is far too fast for any electronic clock to measure, how do physicists determine the lifetime of the rho meson?",
          options: [
            { id: "A", text: "They measure the spread in its rest mass $\\Delta E$ across many collisions, and use the uncertainty principle to calculate $\\Delta t$ backwards.", isCorrect: true, explanation: "Exactly! By plotting the masses of many created rho mesons, they find a bell curve of width 150 MeV. They use $\\Delta t \\sim \\hbar / \\Delta E$ to discover the lifetime." },
            { id: "B", text: "They measure how far it travels before decaying.", isCorrect: false, explanation: "At near light speed, it travels less than the diameter of a proton before decaying. Way too short to measure." }
          ]
        }
      ]
    }
  ]
};