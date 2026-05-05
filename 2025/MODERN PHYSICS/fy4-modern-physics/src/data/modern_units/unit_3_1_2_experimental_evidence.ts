import { Unit } from '../../types';

export const UNIT_3_1_2_EXPERIMENTAL_EVIDENCE: Unit = {
  id: "unit-3-1-2",
  title: "Experimental Evidence",
  description: "Exp: Davisson-Germer · Double-slit · Neutrons · Ex: Calculations",
  color: "duo-blue",
  lessons: [
    // ── LESSON 1: Davisson-Germer Exp ──────────────────────────────────────────
    {
      id: "les-3-1-2-1",
      title: "The Davisson-Germer Experiment",
      description: "Exp: Firing electrons at a nickel crystal",
      icon: "Activity",
      slides: [
        {
          id: "dg-setup",
          type: "theory",
          title: "Experimental Setup (1927)",
          content: "If electrons are waves, they should diffract. But to see diffraction, we need a 'slit' comparable to their wavelength ($\\sim 0.1$ nm).\n\nClinton Davisson and Lester Germer (Bell Labs) accelerated electrons from a heated filament through a voltage $\\Delta V$, giving them a known kinetic energy.\n\nThey fired these electrons at a **single crystal of nickel**. The atoms in the crystal act as a natural 3D diffraction grating. A movable detector measured the intensity of scattered electrons at various angles $\\phi$."
        },
        {
          id: "dg-walk",
          type: "proof",
          title: "Interactive Logic: The Observation",
          content: "What did the detector see?",
          interactiveSteps: [
            {
              stepText: "Classically, particles bouncing off a rough crystal surface should scatter randomly in all directions with relatively uniform intensity."
            },
            {
              prompt: "However, when the accelerating voltage was set to $54$ V, Davisson and Germer observed a massive spike in electron intensity at exactly $\\phi = 50^\\circ$. What does a sharp intensity peak imply?",
              stepText: "A sharp peak at a specific angle is the unmistakable signature of **constructive interference**.",
              options: [
                { id: "A", text: "It implies the electrons are exhibiting constructive interference (acting as waves).", isCorrect: true, explanation: "Just like X-rays reflecting off crystal planes, the electron waves recombined constructively at $50^\\circ$." },
                { id: "B", text: "It implies the electrons are magnetically attracted to $50^\\circ$.", isCorrect: false, explanation: "No magnetic fields were steering them. It was purely an interference effect." }
              ]
            }
          ]
        },
        {
          id: "dg-canvas",
          type: "interactive_canvas",
          title: "Davisson-Germer Polar Plot",
          content: "The intense reflection at 50 degrees is proof of matter wave interference.",
          interactiveCanvasId: "davisson-germer-plot"
        },
        {
          id: "dg-q2",
          type: "quiz",
          title: "Significance",
          content: "Why was the Davisson-Germer experiment groundbreaking?",
          options: [
            { id: "A", text: "It proved that electrons have mass.", isCorrect: false, explanation: "J.J. Thomson had already proved the electron's particle nature and mass-to-charge ratio." },
            { id: "B", text: "It was the first direct experimental proof of de Broglie's matter waves.", isCorrect: true, explanation: "By demonstrating diffraction of a massive particle, they proved de Broglie was right. They won the Nobel Prize for this in 1937." }
          ]
        }
      ]
    },

    // ── LESSON 2: Diffraction Analysis (Theory) ───────────────────────────────
    {
      id: "les-3-1-2-2",
      title: "Diffraction Pattern Analysis",
      description: "T: Analyzing the crystal planes ($d \\sin \\phi = n\\lambda$)",
      icon: "Grid",
      slides: [
        {
          id: "dga-theory",
          type: "theory",
          title: "Analyzing the Scattering",
          content: "The nickel crystal acts like a reflection grating. The rows of atoms on the surface are separated by a distance $d = 0.215$ nm.\n\nThe condition for constructive interference (a maximum peak) from a surface grating is:\n$$\\boxed{d \\sin \\phi = n\\lambda}$$\n\nWhere:\n- $d$ is the atomic row spacing.\n- $\\phi$ is the scattering angle relative to the incident beam.\n- $n = 1, 2, 3 \\dots$ is the order of the maximum.\n- $\\lambda$ is the wavelength."
        },
        {
          id: "dga-q1",
          type: "quiz",
          title: "Concept Check",
          content: "If the first-order peak ($n=1$) appears at $\\phi = 50^\\circ$, and $d = 0.215$ nm, how do we find the experimental wavelength?",
          options: [
            { id: "A", text: "$\\lambda = d \\sin(50^\\circ)$", isCorrect: true, explanation: "Correct! We can use this to measure the actual wavelength of the electrons, and then check if it matches de Broglie's $h/p$ prediction." },
            { id: "B", text: "$\\lambda = d / \\sin(50^\\circ)$", isCorrect: false, explanation: "Rearrange $d \\sin \\phi = n \\lambda$." }
          ]
        }
      ]
    },

    // ── LESSON 3: Ex 4.3 (Davisson-Germer Angle) ───────────────────────────────
    {
      id: "les-3-1-2-3",
      title: "Ex 4.3: Validating de Broglie",
      description: "Ex: Calculating and comparing the predicted vs observed wavelength",
      icon: "Calculator",
      slides: [
        {
          id: "ex43-q",
          type: "example_q",
          title: "Example 4.3 — Davisson-Germer Calculation",
          content: "**Problem:**\nIn the Davisson-Germer experiment, an intensity peak for $n=1$ was observed at $\\phi = 50^\\circ$ for electrons accelerated through $V = 54$ V. The atomic spacing of the nickel crystal is $d = 0.215$ nm.\n\n(a) Calculate the **observed** wavelength using the diffraction equation.\n(b) Calculate the **predicted** de Broglie wavelength using $\\lambda = h/p$.\n\n*Do they match?*"
        },
        {
          id: "ex43-sol1",
          type: "proof",
          title: "Interactive Solution: Part (a)",
          content: "Let's find the observed wavelength from the crystal geometry.",
          interactiveSteps: [
            {
              stepText: "Use $d \\sin \\phi = n \\lambda$."
            },
            {
              prompt: "Plug in $d = 0.215$ nm, $\\phi = 50^\\circ$, and $n=1$. ($\\sin 50^\\circ \approx 0.766$)",
              stepText: "$$\\lambda = (0.215 \\text{ nm}) \\sin(50^\\circ) = 0.165 \\text{ nm}$$",
              options: [
                { id: "A", text: "$0.165$ nm", isCorrect: true, explanation: "The physical diffraction pattern indicates the wave has a length of 0.165 nm." }
              ]
            }
          ]
        },
        {
          id: "ex43-sol2",
          type: "proof",
          title: "Interactive Solution: Part (b)",
          content: "Now let's find the theoretical de Broglie wavelength.",
          interactiveSteps: [
            {
              stepText: "Kinetic energy $K = e \\Delta V = 54$ eV."
            },
            {
              prompt: "Use $\\lambda = \\frac{hc}{\\sqrt{2mc^2 K}}$. Plug in $hc = 1240$ eV·nm and $mc^2 = 511,000$ eV.",
              stepText: "$$\\lambda = \\frac{1240}{\\sqrt{2(511,000)(54)}} = \\frac{1240}{\\sqrt{55,188,000}} = \\frac{1240}{7428} \\approx 0.167 \\text{ nm}$$",
              options: [
                { id: "A", text: "$0.167$ nm", isCorrect: true, explanation: "The predicted wavelength is 0.167 nm. The observed was 0.165 nm. An incredible match confirming the theory!" }
              ]
            }
          ]
        },
        {
          id: "ex43-interp",
          type: "quiz",
          title: "Physical Interpretation",
          content: "The brilliant agreement ($0.165$ nm vs $0.167$ nm) proves that:",
          options: [
            { id: "A", text: "The momentum of an electron physically dictates its wavelength, exactly as de Broglie predicted.", isCorrect: true, explanation: "By linking accelerating voltage (momentum) to a physical diffraction angle (wavelength), they completely validated $\\lambda = h/p$." },
            { id: "B", text: "Electrons lose energy when hitting the crystal.", isCorrect: false, explanation: "The scattering is elastic; $K$ is conserved." }
          ]
        }
      ]
    },

    // ── LESSON 4: Double-slit with electrons ────────────────────────────────
    {
      id: "les-3-1-2-4",
      title: "Double-Slit with Electrons",
      description: "Exp: Firing electrons one by one",
      icon: "AlignHorizontalCenter",
      slides: [
        {
          id: "dse-setup",
          type: "theory",
          title: "Electron Double-Slit Experiment",
          content: "While Davisson-Germer used crystals, creating actual double-slits tiny enough for electrons was technologically impossible until 1961 (by Claus Jönsson).\n\nIf we fire a beam of electrons through two closely spaced slits, we see classic interference fringes on the screen, identical to light.\n\n**The Shocking Part:** What if we fire the electrons **ONE AT A TIME**?\nAn electron goes through the apparatus, hits the screen, and makes a single localized dot (particle behavior). There is no wave to cancel out. Yet, over time, as millions of individual dots accumulate..."
        },
        {
          id: "dse-canvas",
          type: "interactive_canvas",
          title: "Statistical Build-up",
          content: "Watch how individual, random particle impacts slowly build the deterministic wave interference pattern.",
          interactiveCanvasId: "electron-double-slit"
        },
        {
          id: "dse-q1",
          type: "quiz",
          title: "Observation",
          content: "When electrons are fired one at a time, what pattern emerges after many hits?",
          options: [
            { id: "A", text: "Two solid bands of hits directly behind the two slits.", isCorrect: false, explanation: "That is classical particle behavior. It does NOT happen." },
            { id: "B", text: "The exact same interference fringes (multiple bands) as if a continuous wave was passed through.", isCorrect: true, explanation: "The probability of where a single electron lands is dictated by the interference of its own probability wave passing through BOTH slits simultaneously." }
          ]
        },
        {
          id: "dse-comp",
          type: "quiz",
          title: "Complementarity",
          content: "If we place a detector at the slits to see *which* slit the single electron actually goes through, what happens?",
          options: [
            { id: "A", text: "We see which slit it goes through, and the interference pattern on the screen vanishes.", isCorrect: true, explanation: "This is Bohr's Principle of Complementarity. If you extract 'particle path' information, the 'wave interference' behavior is destroyed. You cannot observe both simultaneously." },
            { id: "B", text: "We see which slit it goes through, and the interference pattern remains.", isCorrect: false, explanation: "Nature forbids this. Measurement collapses the wave." }
          ]
        }
      ]
    },

    // ── LESSON 5: Ex 4.4 (Double-slit spacing) ──────────────────────────────
    {
      id: "les-3-1-2-5",
      title: "Ex 4.4: Fringe Spacing",
      description: "Ex: Calculating the width of electron fringes",
      icon: "Maximize",
      slides: [
        {
          id: "ex44-q",
          type: "example_q",
          title: "Example 4.4 — Electron Fringe Spacing",
          content: "**Problem:**\nIn an electron double-slit experiment, electrons are accelerated through $50$ kV, giving them a wavelength of $\\lambda = 5.4 \\times 10^{-12}$ m.\n\nThe double slits are separated by $d = 2.0 \\times 10^{-6}$ m, and the viewing screen is placed $D = 0.35$ m away.\n\nWhat is the distance $\\Delta y$ between adjacent bright fringes on the screen?"
        },
        {
          id: "ex44-sol",
          type: "proof",
          title: "Interactive Solution",
          content: "We use the classical wave interference formula: $\\Delta y = \\frac{\\lambda D}{d}$.",
          interactiveSteps: [
            {
              prompt: "Plug the values into the formula.",
              stepText: "$$\\Delta y = \\frac{(5.4 \\times 10^{-12} \\text{ m})(0.35 \\text{ m})}{2.0 \\times 10^{-6} \\text{ m}}$$",
              options: [
                { id: "A", text: "Proceed", isCorrect: true, explanation: "" }
              ]
            },
            {
              prompt: "Calculate the result.",
              stepText: "$$\\Delta y = \\frac{1.89 \\times 10^{-12}}{2.0 \\times 10^{-6}} = 9.45 \\times 10^{-7} \\text{ m}$$",
              options: [
                { id: "A", text: "$0.945 \\ \\mu\\text{m}$", isCorrect: true, explanation: "Correct! The fringes are just under 1 micrometer apart. Very tiny, requiring high magnification to photograph (as Jönsson did in 1961)." }
              ]
            }
          ]
        },
        {
          id: "ex44-q2",
          type: "quiz",
          title: "Concept Check",
          content: "If we decreased the accelerating voltage (lowering the electron's momentum), what would happen to the fringe spacing?",
          options: [
            { id: "A", text: "The fringes would spread further apart.", isCorrect: true, explanation: "Lower voltage = lower momentum = larger wavelength ($\\lambda = h/p$). Larger wavelength creates wider, more spread-out interference fringes." },
            { id: "B", text: "The fringes would get closer together.", isCorrect: false, explanation: "That requires a smaller wavelength (higher voltage)." }
          ]
        }
      ]
    },

    // ── LESSON 6: Neutron Diffraction ─────────────────────────────────────────
    {
      id: "les-3-1-2-6",
      title: "Neutron Diffraction",
      description: "Exp: Proving the wave nature of neutral particles",
      icon: "Component",
      slides: [
        {
          id: "neut-setup",
          type: "theory",
          title: "Neutron Diffraction",
          content: "Electrons aren't the only particles that act as waves. **Neutrons** are massive ($1836\\times$ the electron mass) and uncharged. Can they diffract?\n\nYes! Nuclear reactors produce 'thermal' neutrons, which have been slowed down by collisions until their kinetic energy matches room temperature (average $K \\approx 0.025$ eV).\n\nIf we direct a beam of these thermal neutrons at a crystal (like NaCl), we observe Bragg diffraction patterns identical to X-rays and electrons. Because neutrons are neutral, they penetrate deep into the material, making them an incredible tool for mapping the internal 3D structure of complex solids."
        },
        {
          id: "neut-q1",
          type: "quiz",
          title: "Why Thermal Neutrons?",
          content: "Why do we need 'thermal' (slow) neutrons for crystal diffraction instead of fast, high-energy neutrons straight out of a fission reaction?",
          options: [
            { id: "A", text: "Fast neutrons have too much momentum, making their wavelength too small to diffract off atomic planes.", isCorrect: true, explanation: "High momentum = tiny wavelength. To diffract off a crystal, $\\lambda$ must be near the atomic spacing ($\\sim 0.1$ nm). Only slow, thermal neutrons have this wavelength." },
            { id: "B", text: "Fast neutrons would melt the crystal.", isCorrect: false, explanation: "While they carry energy, the primary reason is the wave-matching condition $\\lambda \\approx d$." }
          ]
        }
      ]
    },

    // ── LESSON 7: Ex 4.5 (Neutron Wavelength) ──────────────────────────────────
    {
      id: "les-3-1-2-7",
      title: "Ex 4.5: Thermal Neutron Wavelength",
      description: "Ex: Calculating the properties of thermal neutrons",
      icon: "Thermometer",
      slides: [
        {
          id: "ex45-q",
          type: "example_q",
          title: "Example 4.5 — Thermal Neutrons",
          content: "**Problem:**\nCalculate the de Broglie wavelength of a thermal neutron with a kinetic energy of $K = 0.025$ eV.\n\nThe rest energy of a neutron is $mc^2 = 939.6$ MeV."
        },
        {
          id: "ex45-sol",
          type: "proof",
          title: "Interactive Solution",
          content: "Use the shortcut formula $\\lambda = \\frac{hc}{\\sqrt{2mc^2 K}}$.",
          interactiveSteps: [
            {
              stepText: "Plug in the values. $hc = 1240$ eV·nm. Be careful to match units! $mc^2 = 939.6 \\times 10^6$ eV."
            },
            {
              prompt: "Calculate the denominator: $\\sqrt{2(939.6 \\times 10^6)(0.025)}$.",
              stepText: "$$\\sqrt{2 \\times 939,600,000 \\times 0.025} = \\sqrt{46,980,000} \\approx 6854 \\text{ eV}$$",
              options: [
                { id: "A", text: "$6854$ eV", isCorrect: true, explanation: "" }
              ]
            },
            {
              prompt: "Calculate the wavelength: $\\lambda = 1240 / 6854$.",
              stepText: "$$\\lambda = \\frac{1240 \\text{ eV}\\cdot\\text{nm}}{6854 \\text{ eV}} \\approx 0.181 \\text{ nm}$$",
              options: [
                { id: "A", text: "$0.181$ nm", isCorrect: true, explanation: "Perfect! 0.181 nm is exactly in the range of atomic spacing in crystals. This mathematically proves why thermal neutrons are ideal for diffraction." }
              ]
            }
          ]
        },
        {
          id: "ex45-fitb",
          type: "fill_in_blank",
          title: "Fill in the Blank",
          content: "Because their wavelength is roughly 0.1 nm, thermal neutrons are perfectly suited to map the internal \\_\\_\\_ of solid crystals.",
          blankAnswer: "structure"
        }
      ]
    }
  ]
};