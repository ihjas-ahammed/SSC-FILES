import { Unit } from '../../types';

export const UNIT_3_1_1_DE_BROGLIE: Unit = {
  id: "unit-3-1-1",
  title: "De Broglie's Hypothesis",
  description: "D: Matter Waves · T: Wavelength Relation · Ex: Micro vs Macro Wavelengths",
  color: "duo-pink",
  lessons: [
    // ── LESSON 1: Definition & Priming ─────────────────────────────────────────
    {
      id: "les-3-1-1-1",
      title: "Matter Waves",
      description: "D: The daring hypothesis of Louis de Broglie",
      icon: "Brain",
      slides: [
        {
          id: "deb-prime",
          type: "quiz",
          title: "Warm-Up Check",
          content: "In 1905, Einstein showed that light—traditionally considered a pure wave—also exhibits particle-like properties (photons). In 1924, Louis de Broglie proposed the inverse. What was his hypothesis?",
          options: [
            { id: "A", text: "That particles with mass, like electrons, also exhibit wave-like properties.", isCorrect: true, explanation: "Exactly. Nature loves symmetry. If waves can act like particles, perhaps particles can act like waves!" },
            { id: "B", text: "That photons actually possess a small amount of mass.", isCorrect: false, explanation: "Photons are massless. De Broglie focused on massive particles acting like waves." }
          ]
        },
        {
          id: "deb-def",
          type: "theory",
          title: "Definition: Matter Waves",
          content: "In classical physics, waves and particles are distinct.\n- **Particles** are localized objects with mass and momentum.\n- **Waves** are spread-out disturbances that undergo interference and diffraction.\n\n**De Broglie's Hypothesis:** Any material particle moving with momentum $p$ has an associated **matter wave**.\n\nJust as light behaves sometimes as a wave and sometimes as a particle, matter also possesses this dual nature. This wave is what guides the probabilistic behavior of the particle on the microscopic scale."
        },
        {
          id: "deb-q1",
          type: "quiz",
          title: "Conceptual Check",
          content: "If an electron behaves as a wave, what strictly wave-like phenomenon should we be able to observe if we perform the right experiment?",
          options: [
            { id: "A", text: "Collisions that conserve momentum.", isCorrect: false, explanation: "Particle collisions (like billiard balls) are a hallmark of particle behavior, not wave behavior." },
            { id: "B", text: "Interference and diffraction.", isCorrect: true, explanation: "Only waves can interfere (constructively and destructively) and diffract around obstacles. Observing this would prove the wave nature of matter." }
          ]
        },
        {
          id: "deb-canvas",
          type: "interactive_canvas",
          title: "The Wave-Particle",
          content: "A moving particle is bounded within a 'wave packet' that dictates its probable location.",
          interactiveCanvasId: "de-broglie-wave"
        }
      ]
    },

    // ── LESSON 2: Theory (Wavelength Relation) ────────────────────────────────
    {
      id: "les-3-1-1-2",
      title: "The de Broglie Wavelength",
      description: "T: Linking momentum to wavelength",
      icon: "Waves",
      slides: [
        {
          id: "deb-theory",
          type: "theory",
          title: "The de Broglie Wavelength",
          content: "De Broglie looked at the equations for the photon:\n$$E = hf$$ and $$p = \\frac{h}{\\lambda}$$\n\nHe boldly suggested that the second equation applies not just to massless photons, but to **all matter**.\n\nFor any particle with momentum $p$, its associated **de Broglie wavelength** $\\lambda$ is:\n$$\\boxed{\\lambda = \\frac{h}{p}}$$\n\nWhere:\n- $h$ is Planck's constant ($6.626 \\times 10^{-34}$ J·s)\n- $p$ is the particle's momentum ($p = mv$ classically, or $p = \\gamma mv$ relativistically)."
        },
        {
          id: "deb-q2",
          type: "quiz",
          title: "Momentum Dependency",
          content: "According to $\\lambda = h/p$, what happens to the wavelength of an electron if you accelerate it to a much higher velocity?",
          options: [
            { id: "A", text: "The wavelength decreases.", isCorrect: true, explanation: "Since $p = mv$, a higher velocity means a higher momentum. Momentum is in the denominator, so the wavelength shrinks." },
            { id: "B", text: "The wavelength increases.", isCorrect: false, explanation: "Wavelength is inversely proportional to momentum." },
            { id: "C", text: "The wavelength remains constant.", isCorrect: false, explanation: "The wavelength strictly depends on the particle's momentum." }
          ]
        },
        {
          id: "deb-der",
          type: "proof",
          title: "Interactive Derivation: Energy to Wavelength",
          content: "**Goal:** Express the non-relativistic de Broglie wavelength directly in terms of Kinetic Energy $K$.",
          interactiveSteps: [
            {
              stepText: "Start with the classical definition of kinetic energy: $K = \\frac{p^2}{2m}$."
            },
            {
              prompt: "Solve this equation for momentum $p$.",
              stepText: "$$p = \\sqrt{2mK}$$",
              options: [
                { id: "A", text: "Substitute $p = \\sqrt{2mK}$ into the de Broglie equation.", isCorrect: true, explanation: "Correct!" }
              ]
            },
            {
              prompt: "What is the final expression for the wavelength?",
              stepText: "Substituting $p$ into $\\lambda = h/p$ gives:\n$$\\lambda = \\frac{h}{\\sqrt{2mK}}$$ \n*(Often it is easier to multiply top and bottom by $c$, yielding $\\lambda = \\frac{hc}{\\sqrt{2mc^2 K}}$ to use eV and nm).*",
              options: [
                { id: "A", text: "$\\lambda = \\frac{h}{\\sqrt{2mK}}$", isCorrect: true, explanation: "This incredibly useful form lets you instantly find wavelength from the kinetic energy (accelerating voltage) of an electron!" }
              ]
            }
          ]
        }
      ]
    },

    // ── LESSON 3: Ex 4.1 (Electron Wavelength) ────────────────────────────────
    {
      id: "les-3-1-1-3",
      title: "Ex 4.1a: Wavelength of an Electron",
      description: "Ex: Calculating matter waves at low and high energies",
      icon: "Zap",
      slides: [
        {
          id: "ex41a-q",
          type: "example_q",
          title: "Example 4.1a — Electron Wavelength",
          content: "**Problem:** \nCompute the de Broglie wavelength of:\n(a) An electron with a kinetic energy of $1.0$ eV.\n(b) An electron with a kinetic energy of $100$ MeV.\n\n*Note:* The rest energy of an electron is $mc^2 = 511,000$ eV. For part (a), $K \\ll mc^2$, so we can use non-relativistic formulas. For part (b), $K \\gg mc^2$, so we must use relativistic formulas."
        },
        {
          id: "ex41a-sol",
          type: "proof",
          title: "Interactive Solution",
          content: "Let's use the $hc$ shortcut for part (a). $hc = 1240$ eV·nm.",
          interactiveSteps: [
            {
              prompt: "Part (a): Use the non-relativistic formula $\\lambda = \\frac{hc}{\\sqrt{2mc^2 K}}$.",
              stepText: "$$\\lambda = \\frac{1240 \\text{ eV}\\cdot\\text{nm}}{\\sqrt{2(5.11 \\times 10^5 \\text{ eV})(1.0 \\text{ eV})}}$$\n$$\\lambda = \\frac{1240}{\\sqrt{1.02 \\times 10^6}} = \\frac{1240}{1010} \\approx 1.2 \\text{ nm}$$",
              options: [
                { id: "A", text: "$1.2$ nm", isCorrect: true, explanation: "Correct! 1.2 nm is roughly the size of a few atoms, meaning 1 eV electrons will diffract noticeably off atomic lattices." }
              ]
            },
            {
              stepText: "Part (b): $K = 100$ MeV. This is highly relativistic ($K \\gg mc^2$). We must use the extreme relativistic approximation $E \\approx pc$, or find exact momentum via $E^2 = (pc)^2 + (mc^2)^2$."
            },
            {
              prompt: "The total energy is $E = K + mc^2 = 100 \\text{ MeV} + 0.511 \\text{ MeV} = 100.511 \\text{ MeV}$. Calculate $pc$ exactly.",
              stepText: "$$pc = \\sqrt{E^2 - (mc^2)^2} = \\sqrt{(100.511)^2 - (0.511)^2} \\approx 100.510 \\text{ MeV}$$",
              options: [
                { id: "A", text: "$pc \approx 100.5$ MeV", isCorrect: true, explanation: "At these energies, $pc$ is virtually identical to $K$." }
              ]
            },
            {
              prompt: "Now calculate the wavelength $\\lambda = \\frac{hc}{pc}$. Use $hc = 1240$ MeV·fm.",
              stepText: "$$\\lambda = \\frac{1240 \\text{ MeV}\\cdot\\text{fm}}{100.5 \\text{ MeV}} \\approx 12.3 \\text{ fm}$$",
              options: [
                { id: "A", text: "$12.3$ fm", isCorrect: true, explanation: "Correct! $12.3$ fm (femtometers) is roughly the size of an atomic nucleus, meaning 100 MeV electrons are perfect for probing the inside of the nucleus!" }
              ]
            }
          ]
        },
        {
          id: "ex41a-interp",
          type: "quiz",
          title: "Physical Interpretation",
          content: "Why do we need a 100 MeV electron (instead of a 1 eV electron) to study the atomic nucleus?",
          options: [
            { id: "A", text: "Because the 1 eV electron's wavelength (1.2 nm) is too large to resolve the nucleus (~10 fm).", isCorrect: true, explanation: "To probe small structures, your wavelength must be roughly the same size or smaller than the structure. A 1.2 nm wave simply washes over a 10 fm nucleus without revealing details." },
            { id: "B", text: "Because the 1 eV electron moves too slowly to reach the nucleus.", isCorrect: false, explanation: "It's entirely about the resolving power of the wavelength, not travel time." }
          ]
        }
      ]
    },

    // ── LESSON 4: Ex 4.2 (Macro Wavelength) ───────────────────────────────────
    {
      id: "les-3-1-1-4",
      title: "Ex 4.1b: Wavelength of a Car",
      description: "Ex: Why don't we see everyday objects diffracting?",
      icon: "Car",
      slides: [
        {
          id: "ex41b-q",
          type: "example_q",
          title: "Example 4.1b — Macroscopic Wavelength",
          content: "**Problem:** \nCompute the de Broglie wavelength of a $1000$ kg automobile traveling at $100$ m/s (about 220 mph).\n\nUse Planck's constant $h = 6.63 \\times 10^{-34}$ J·s."
        },
        {
          id: "ex41b-sol",
          type: "proof",
          title: "Interactive Solution",
          content: "We use the standard $\\lambda = h/p$.",
          interactiveSteps: [
            {
              prompt: "First, find the momentum $p$ of the car.",
              stepText: "$$p = mv = (1000 \\text{ kg})(100 \\text{ m/s}) = 1.0 \\times 10^5 \\text{ kg}\\cdot\\text{m/s}$$",
              options: [
                { id: "A", text: "$10^5$ kg·m/s", isCorrect: true, explanation: "Correct." }
              ]
            },
            {
              prompt: "Now calculate the wavelength.",
              stepText: "$$\\lambda = \\frac{h}{p} = \\frac{6.63 \\times 10^{-34} \\text{ J}\\cdot\\text{s}}{1.0 \\times 10^5 \\text{ kg}\\cdot\\text{m/s}} = 6.63 \\times 10^{-39} \\text{ m}$$",
              options: [
                { id: "A", text: "$6.63 \\times 10^{-39}$ m", isCorrect: true, explanation: "This wavelength is unimaginably small!" }
              ]
            }
          ]
        },
        {
          id: "ex41b-interp",
          type: "quiz",
          title: "Physical Interpretation",
          content: "The car has a wavelength of $\\sim 10^{-39}$ m. Why will we never observe the 'wave nature' (e.g., diffraction) of this car driving through a tunnel?",
          options: [
            { id: "A", text: "Because to diffract, the tunnel must be roughly the same size as the wavelength ($10^{-39}$ m), which is smaller than a single proton.", isCorrect: true, explanation: "Diffraction is only noticeable when the slit width $a \approx \\lambda$. No macroscopic object can pass through an opening of $10^{-39}$ m. Hence, macroscopic objects behave purely as classical particles." },
            { id: "B", text: "Because the car has zero probability of existing outside the tunnel.", isCorrect: false, explanation: "The lack of observable wave behavior is due to the extreme smallness of $\\lambda$ relative to any physical opening." }
          ]
        }
      ]
    }
  ]
};