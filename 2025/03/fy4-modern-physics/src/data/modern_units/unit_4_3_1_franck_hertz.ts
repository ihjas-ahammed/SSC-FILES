import { Unit } from '../../types';

export const UNIT_4_3_1_FRANCK_HERTZ: Unit = {
  id: "unit-4-3-1",
  title: "The Franck-Hertz Experiment",
  description: "Exp: Franck-Hertz apparatus · T: Energy quantization confirmed · Ex: Franck-Hertz levels",
  color: "duo-blue",
  lessons: [
    // ── LESSON 1: Priming ─────────────────────────────────────────────────────────
    {
      id: "les-4-3-1-act",
      title: "Warm-Up: Electron Collisions",
      description: "Activate prior knowledge",
      icon: "Brain",
      slides: [
        {
          id: "fh-prime-1",
          type: "quiz",
          title: "Priming Question",
          content: "In classical physics, an electron colliding with a gas atom can transfer any fraction of its kinetic energy to the atom. If Bohr's model of discrete energy levels is correct, what should happen when a slow electron (with very little kinetic energy) collides with an atom?",
          options: [
            { id: "A", text: "The electron will give a small continuous amount of energy to the atom.", isCorrect: false, explanation: "If energy levels are discrete, the atom cannot accept energy that is less than the gap to its first excited state." },
            { id: "B", text: "The collision must be perfectly elastic; the electron transfers no internal energy to the atom.", isCorrect: true, explanation: "Correct! If the electron doesn't have enough energy to boost the atom to its exact next energy level, the atom cannot absorb any internal energy. The electron just bounces off." }
          ]
        },
        {
          id: "fh-prime-2",
          type: "quiz",
          title: "Excitation Thresholds",
          content: "What happens the moment the colliding electron's kinetic energy perfectly matches or just exceeds the gap to the atom's first excited state?",
          options: [
            { id: "A", text: "The electron can undergo an inelastic collision, losing exactly that specific amount of energy to the atom.", isCorrect: true, explanation: "Yes! The atom absorbs the exact quantum of energy needed, leaving the scattered electron with whatever kinetic energy remains." },
            { id: "B", text: "The electron is completely absorbed by the nucleus.", isCorrect: false, explanation: "The electron is scattered, not absorbed." }
          ]
        }
      ]
    },

    // ── LESSON 2: Exp: Franck-Hertz Apparatus ─────────────────────────────────────
    {
      id: "les-4-3-1-1",
      title: "Exp: The Franck-Hertz Setup",
      description: "Exp: Direct evidence of discrete atomic states",
      icon: "Activity",
      slides: [
        {
          id: "fh-exp-theory",
          type: "theory",
          title: "The Franck-Hertz Experiment (1914)",
          content: "James Franck and Gustav Hertz designed an experiment to bombard atoms with electrons and measure the energy lost in the collisions.\n\n**The Setup:**\n1. A heated cathode emits electrons.\n2. An adjustable voltage $V$ accelerates these electrons toward a wire grid.\n3. Beyond the grid is a collector plate, kept at a slightly lower (retarding) voltage $V_0$.\n4. The tube is filled with a low-pressure gas (originally mercury vapor).\n\nIf electrons pass through the gas without losing energy, they easily overcome the small retarding voltage and reach the plate, creating a measurable current. But if they lose significant energy in a collision, they won't have enough kinetic energy left to reach the plate, and the current will drop!"
        },
        {
          id: "fh-exp-canvas",
          type: "interactive_canvas",
          title: "Franck-Hertz Graph",
          content: "Notice the periodic dips in current as the accelerating voltage increases.",
          interactiveCanvasId: "franck-hertz-graph"
        },
        {
          id: "fh-exp-q1",
          type: "quiz",
          title: "Observation",
          content: "When Franck and Hertz steadily increased the accelerating voltage $V$ in the mercury tube, what happened to the current reading?",
          options: [
            { id: "A", text: "It increased steadily without interruption.", isCorrect: false, explanation: "That would happen if the tube was a pure vacuum, but the gas atoms interfere." },
            { id: "B", text: "It rose, but dropped sharply whenever $V$ reached multiples of 4.9 Volts.", isCorrect: true, explanation: "Exactly. The current plummeted at 4.9 V, 9.8 V, 14.7 V, etc. This periodic dropping is the hallmark of the Franck-Hertz experiment." }
          ]
        },
        {
          id: "fh-exp-q2",
          type: "quiz",
          title: "Implication",
          content: "Why did the current drop sharply at $V = 4.9$ V?",
          options: [
            { id: "A", text: "Because 4.9 eV is exactly the energy gap between the ground state and the first excited state of mercury.", isCorrect: true, explanation: "When electrons reach 4.9 eV of kinetic energy, they finally have enough energy to excite a mercury atom. They lose all 4.9 eV in the collision, leaving them with ~0 eV, which isn't enough to reach the collector plate!" },
            { id: "B", text: "Because 4.9 V ionized the mercury gas.", isCorrect: false, explanation: "Ionization requires much more energy (10.4 eV for Hg). This was an excitation to a bound state." }
          ]
        },
        {
          id: "fh-num",
          type: "numerical",
          title: "Multiple Collisions",
          content: "If the current drops at 4.9 V, 9.8 V, and 14.7 V, what is happening at 14.7 V?",
          options: [
            { id: "A", text: "The electron excites three different mercury atoms in succession.", isCorrect: true, explanation: "Yes! At 14.7 eV, an electron can excite one atom (losing 4.9 eV), accelerate again, excite a second atom, accelerate, and excite a third, losing all its energy before the plate." }
          ]
        }
      ]
    },

    // ── LESSON 3: T: Energy Quantization Confirmed ────────────────────────────────
    {
      id: "les-4-3-1-2",
      title: "Energy Quantization Confirmed",
      description: "T: Linking the collisions to spectral emission",
      icon: "Target",
      slides: [
        {
          id: "fh-quant-theory",
          type: "theory",
          title: "Independent Confirmation of Bohr",
          content: "The Franck-Hertz experiment was incredible because it provided direct evidence for atomic energy levels entirely independent of analyzing light spectra.\n\nHowever, it perfectly aligned with spectroscopy!\nWhen a mercury atom is excited by a 4.9 eV electron, it enters its first excited state. Shortly after, the atom drops back to the ground state, emitting a photon of energy $E = 4.9$ eV.\n\nUsing $\\lambda = \\frac{hc}{E}$, an energy of 4.9 eV corresponds to a wavelength of $254$ nm, which is a strong ultraviolet line in the mercury emission spectrum!"
        },
        {
          id: "fh-quant-q1",
          type: "quiz",
          title: "Conceptual Check 1",
          content: "If the accelerating voltage is set to 4.0 V, what kind of collisions occur in the tube?",
          options: [
            { id: "A", text: "Perfectly elastic collisions.", isCorrect: true, explanation: "At 4.0 eV, the electron doesn't have enough energy to bridge the 4.9 eV gap. It bounces elastically off the massive mercury atoms, losing essentially no energy, and reaches the collector plate." },
            { id: "B", text: "Inelastic collisions.", isCorrect: false, explanation: "Inelastic collisions only begin when the electron hits 4.9 eV." }
          ]
        },
        {
          id: "fh-quant-q2",
          type: "quiz",
          title: "Visual Evidence",
          content: "In modern lab versions of this experiment using Neon gas, the excitation energy is 18.7 eV, and the atom emits a 2.1 eV photon (orange light) as it cascades down. If the voltage is cranked up high enough, what will you physically see in the tube?",
          options: [
            { id: "A", text: "A single glowing orange line at the collector.", isCorrect: false, explanation: "The emission happens right where the collision occurs, not just at the end." },
            { id: "B", text: "Distinct glowing bands of orange light between the cathode and grid.", isCorrect: true, explanation: "Yes! As the electrons accelerate, they hit 18.7 eV, collide, and excite the gas. The gas glows orange exactly at that physical location. If you double the voltage, you'll see TWO distinct glowing bands!" }
          ]
        },
        {
          id: "fh-quant-canvas",
          type: "interactive_canvas",
          title: "Franck-Hertz Graph",
          content: "The graph is a direct electrical map of the quantum energy states of the atom.",
          interactiveCanvasId: "franck-hertz-graph"
        },
        {
          id: "fh-fitb",
          type: "fill_in_blank",
          title: "Fill in the Blank",
          content: "The Franck-Hertz experiment confirmed the existence of discrete atomic energy levels using ___ collisions rather than by analyzing light.",
          blankAnswer: "electron"
        }
      ]
    },

    // ── LESSON 4: Ex: Franck-Hertz Energy Levels ──────────────────────────────────
    {
      id: "les-4-3-1-3",
      title: "Ex: Franck-Hertz Levels",
      description: "Ex: Extracting wavelengths from collision data",
      icon: "Calculator",
      slides: [
        {
          id: "ex-fh-q",
          type: "example_q",
          title: "Example — Analyzing Franck-Hertz Data",
          content: "**Problem:**\nYou perform the Franck-Hertz experiment using a mystery gas. You observe sharp drops in the measured current at accelerating voltages of $6.2$ V, $12.4$ V, and $18.6$ V.\n\n(a) What is the energy of the first excited state of this atom relative to its ground state?\n(b) When these excited atoms return to the ground state, what wavelength of light will they emit?"
        },
        {
          id: "ex-fh-sol",
          type: "proof",
          title: "Interactive Solution",
          content: "Use the voltage spacing to find $\\Delta E$, then find $\\lambda$.",
          interactiveSteps: [
            {
              stepText: "The drops occur at multiples of $6.2$ V. The kinetic energy lost in each inelastic collision is therefore exactly $6.2$ eV."
            },
            {
              prompt: "What is the energy of the first excited state?",
              stepText: "The energy difference between the ground state and the first excited state is $\\Delta E = 6.2$ eV.",
              options: [
                { id: "A", text: "$6.2$ eV", isCorrect: true, explanation: "Correct. The first dip gives the primary excitation energy." }
              ]
            },
            {
              prompt: "Calculate the wavelength emitted when the atom relaxes back to the ground state. Use $hc = 1240$ eV·nm.",
              stepText: "$$\\lambda = \\frac{hc}{\\Delta E} = \\frac{1240 \\text{ eV}\\cdot\\text{nm}}{6.2 \\text{ eV}}$$",
              options: [
                { id: "A", text: "Proceed", isCorrect: true, explanation: "" }
              ]
            },
            {
              prompt: "Evaluate the final wavelength.",
              stepText: "$$\\lambda = 200 \\text{ nm}$$",
              options: [
                { id: "A", text: "$200$ nm", isCorrect: true, explanation: "This wavelength is in the ultraviolet range." }
              ]
            }
          ]
        },
        {
          id: "ex-fh-method",
          type: "quiz",
          title: "Method Check",
          content: "Why are the drops in current not perfectly sharp vertical cliffs?",
          options: [
            { id: "A", text: "The electrons emitted from the heated cathode have a small, random thermal spread of initial kinetic energies.", isCorrect: true, explanation: "Because the electrons boil off the cathode with slightly different starting speeds, they don't all hit 6.2 eV at the exact same physical plane. This 'smears' the drop slightly." },
            { id: "B", text: "The energy levels of the atom are fuzzy and uncertain.", isCorrect: false, explanation: "While true (Heisenberg), the thermal spread of the incoming electrons is the dominant cause of the rounded peaks." }
          ]
        }
      ]
    }
  ]
};