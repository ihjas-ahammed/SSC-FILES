import { Unit } from '../../types';

export const UNIT_4_2_2_BOHR_MODEL: Unit = {
  id: "unit-4-2-2",
  title: "The Bohr Model",
  description: "T: Bohr's Postulates · Der: Bohr Radius · T: Energy Levels · Ex 5.3-5.5",
  color: "duo-orange",
  lessons: [
    // ── LESSON 1: Priming ─────────────────────────────────────────────────────────
    {
      id: "les-4-2-2-act",
      title: "Warm-Up: Classical Collapse",
      description: "Activate prior knowledge",
      icon: "Brain",
      slides: [
        {
          id: "bohr-prime-1",
          type: "quiz",
          title: "Priming Question",
          content: "In classical electromagnetism, what happens to an electric charge (like an electron) that is accelerating (like moving in a circle)?",
          options: [
            { id: "A", text: "It continually radiates electromagnetic energy (light).", isCorrect: true, explanation: "Yes! And because it radiates energy, an electron orbiting a nucleus should lose kinetic energy, spiral inward, and crash into the nucleus in a fraction of a second. Classical physics predicts atoms cannot exist!" },
            { id: "B", text: "It maintains a perfectly stable orbit indefinitely.", isCorrect: false, explanation: "That's what planets do, but planets aren't electrically charged. Accelerating charges radiate." }
          ]
        }
      ]
    },

    // ── LESSON 2: T: Bohr's Two Postulates ────────────────────────────────────────
    {
      id: "les-4-2-2-1",
      title: "Bohr's Postulates",
      description: "T: Stationary states and quantum jumps",
      icon: "Target",
      slides: [
        {
          id: "bohr-theory-1",
          type: "theory",
          title: "Bohr's Bold Hypothesis",
          content: "To rescue the atom from classical collapse and explain the Rydberg formula, Niels Bohr (1913) proposed a model based on two radical postulates:\n\n**1. Stationary States (Quantized Orbits):**\nThe electron can exist indefinitely in certain specific circular orbits without radiating energy. In these allowed orbits, the electron's orbital angular momentum $L$ is quantized in integer multiples of $\\hbar$ ($h/2\\pi$):\n$$L = mvr = n\\hbar \\qquad (n = 1, 2, 3, \\dots)$$\n\n**2. Quantum Jumps:**\nThe electron emits or absorbs a photon ONLY when it 'jumps' from one stationary state to another. The photon's energy equals the energy difference between the states:\n$$hf = E_{\\text{initial}} - E_{\\text{final}}$$"
        },
        {
          id: "bohr-canvas",
          type: "interactive_canvas",
          title: "Bohr's Planetary Model",
          content: "Electrons orbit the nucleus in fixed paths and emit photons when dropping to lower energy levels.",
          interactiveCanvasId: "bohr-model-orbits"
        },
        {
          id: "bohr-q1",
          type: "quiz",
          title: "Conceptual Check",
          content: "According to Bohr's model, what happens to an electron while it is happily orbiting in the $n=1$ ground state?",
          options: [
            { id: "A", text: "It continuously emits radiation.", isCorrect: false, explanation: "That's the classical failure. Bohr postulated it does not." },
            { id: "B", text: "It does not radiate energy at all, and is completely stable.", isCorrect: true, explanation: "Bohr simply declared by fiat that 'stationary states' don't radiate, bypassing classical electromagnetism." }
          ]
        },
        {
          id: "bohr-fitb",
          type: "fill_in_blank",
          title: "Fill in the Blank",
          content: "In the Bohr model, the electron's orbital angular ___ is quantized in integer multiples of $\\hbar$.",
          blankAnswer: "momentum"
        }
      ]
    },

    // ── LESSON 3: Der: Bohr Radius a₀ and orbital radii ───────────────────────────
    {
      id: "les-4-2-2-2",
      title: "Deriving the Bohr Orbits",
      description: "Der: Finding the radius of the atom",
      icon: "Circle",
      slides: [
        {
          id: "rad-der-start",
          type: "theory",
          title: "Goal: Radius of the Hydrogen Atom",
          content: "Classically, an electron can orbit at *any* radius if it has the right speed. In Bohr's model, only specific radii $r_n$ are allowed.\n\nWe start with the classical force balance: Coulomb force provides the centripetal acceleration.\n$$\\frac{1}{4\\pi\\epsilon_0} \\frac{e^2}{r^2} = \\frac{mv^2}{r}$$\n\n**Goal (Eq 6.28):** Show that $r_n = n^2 a_0$, where $a_0$ is the Bohr radius."
        },
        {
          id: "rad-der-steps",
          type: "proof",
          title: "Interactive Derivation",
          content: "Use Bohr's angular momentum postulate to eliminate velocity.",
          interactiveSteps: [
            {
              stepText: "From the force balance, we get kinetic energy:\n$$\\frac{1}{2}mv^2 = \\frac{1}{8\\pi\\epsilon_0} \\frac{e^2}{r}$$"
            },
            {
              prompt: "Bohr's angular momentum postulate is $mvr = n\\hbar$. Solve this for $v$.",
              stepText: "$$v = \\frac{n\\hbar}{mr}$$",
              options: [
                { id: "A", text: "Proceed", isCorrect: true, explanation: "" }
              ]
            },
            {
              prompt: "Substitute $v = n\\hbar/mr$ into the kinetic energy equation.",
              stepText: "$$\\frac{1}{2}m \\left( \\frac{n\\hbar}{mr} \\right)^2 = \\frac{1}{8\\pi\\epsilon_0} \\frac{e^2}{r}$$\n$$\\frac{n^2\\hbar^2}{2mr^2} = \\frac{e^2}{8\\pi\\epsilon_0 r}$$",
              options: [
                { id: "A", text: "Substitute and simplify", isCorrect: true, explanation: "" }
              ]
            },
            {
              prompt: "Cancel one $r$ and solve for the allowed radii $r_n$.",
              stepText: "$$r_n = \\left( \\frac{4\\pi\\epsilon_0 \\hbar^2}{me^2} \\right) n^2$$\nThe term in parentheses is a constant, called the **Bohr Radius**, $a_0 = 0.0529$ nm.\n$$\\boxed{r_n = n^2 a_0}$$",
              options: [
                { id: "A", text: "$r_n = n^2 a_0$", isCorrect: true, explanation: "The allowed orbits grow quickly. The second orbit ($n=2$) is 4 times larger than the first. The third ($n=3$) is 9 times larger!" }
              ]
            }
          ]
        },
        {
          id: "rad-q1",
          type: "quiz",
          title: "Concept Check",
          content: "According to $r_n = n^2 a_0$, can an electron orbit at a distance of exactly $2 a_0$ from the nucleus?",
          options: [
            { id: "A", text: "Yes", isCorrect: false, explanation: "Orbits are quantized as $n^2$: 1, 4, 9, 16..." },
            { id: "B", text: "No", isCorrect: true, explanation: "Since $n$ must be an integer, $n^2$ can only be 1, 4, 9, 16. An orbit at $2a_0$ is forbidden." }
          ]
        }
      ]
    },

    // ── LESSON 4: T: Energy levels of hydrogen ────────────────────────────────────
    {
      id: "les-4-2-2-3",
      title: "Energy Levels of Hydrogen",
      description: "T: E_n = -13.6 eV / n²",
      icon: "Layers",
      slides: [
        {
          id: "en-theory",
          type: "theory",
          title: "Quantized Energy Levels",
          content: "The total energy of the electron is the sum of Kinetic Energy ($K$) and Electric Potential Energy ($U$).\n$$E = K + U = \\left(\\frac{1}{8\\pi\\epsilon_0} \\frac{e^2}{r}\\right) + \\left(-\\frac{1}{4\\pi\\epsilon_0} \\frac{e^2}{r}\\right) = -\\frac{1}{8\\pi\\epsilon_0} \\frac{e^2}{r}$$\n\nSubstituting our quantized radii $r_n = n^2 a_0$, we get the quantized energy levels:\n$$E_n = -\\left( \\frac{me^4}{32\\pi^2\\epsilon_0^2 \\hbar^2} \\right) \\frac{1}{n^2}$$\n\nThe massive constant term evaluates exactly to $13.6$ eV.\n$$\\boxed{E_n = -\\frac{13.6 \\text{ eV}}{n^2}}$$"
        },
        {
          id: "en-canvas",
          type: "interactive_canvas",
          title: "Energy Level Diagram",
          content: "Notice how the energy levels get closer together as $n$ gets larger, approaching 0 eV (the ionization limit).",
          interactiveCanvasId: "energy-level-diagram"
        },
        {
          id: "en-q1",
          type: "quiz",
          title: "Binding Energy",
          content: "The energy of the ground state ($n=1$) is $-13.6$ eV. What does the negative sign mean?",
          options: [
            { id: "A", text: "The electron is repelled by the nucleus.", isCorrect: false, explanation: "If it were repelled, potential energy would be positive." },
            { id: "B", text: "The electron is bound to the nucleus. You must supply $+13.6$ eV of energy to free it.", isCorrect: true, explanation: "Correct. A negative total energy means it's a bound state. Reaching 0 eV means the electron is completely free." }
          ]
        }
      ]
    },

    // ── LESSON 5: D: Key Constants ────────────────────────────────────────────────
    {
      id: "les-4-2-2-4",
      title: "Key Constants of the Bohr Model",
      description: "D: a0, ground state, Rydberg constant",
      icon: "Hash",
      slides: [
        {
          id: "const-theory",
          type: "theory",
          title: "Important Bohr Constants",
          content: "Bohr's model brilliantly derived experimentally known constants purely from fundamental constants ($m, e, h, c, \\epsilon_0$).\n\n1. **Bohr Radius ($a_0$):** The radius of the $n=1$ ground state.\n   $a_0 = 0.0529$ nm\n\n2. **Ground-State Energy ($E_1$):** The lowest possible energy level.\n   $E_1 = -13.60$ eV\n\n3. **Rydberg Constant ($R_\\infty$):** Bohr proved the Rydberg formula and derived the constant analytically!\n   $R_\\infty = \\frac{me^4}{64\\pi^3 \\epsilon_0^2 \\hbar^3 c} = 1.097 \\times 10^7 \\text{ m}^{-1}$"
        },
        {
          id: "const-q1",
          type: "quiz",
          title: "The Triumph of Bohr",
          content: "Why was Bohr's theoretical derivation of the Rydberg constant such a massive triumph for his model?",
          options: [
            { id: "A", text: "It showed that the Rydberg constant was completely wrong.", isCorrect: false, explanation: "It matched exactly." },
            { id: "B", text: "He derived an empirical number (found purely by trial and error) from fundamental physics principles, matching it to 4 decimal places.", isCorrect: true, explanation: "When a wild, radical theory perfectly predicts an unexplained experimental number, physicists pay attention!" }
          ]
        }
      ]
    },

    // ── LESSON 6: Ex 5.3 (Transitions) ────────────────────────────────────────────
    {
      id: "les-4-2-2-5",
      title: "Ex 1: Transition Energy",
      description: "Ex: Energy of photon emitted in n=3 to 2 transition",
      icon: "Calculator",
      slides: [
        {
          id: "ex53-q",
          type: "example_q",
          title: "Example 1 — Transition Energy",
          content: "**Problem:**\nAn electron in a hydrogen atom jumps from the second excited state ($n=3$) down to the first excited state ($n=2$).\n\nWhat is the energy of the emitted photon?"
        },
        {
          id: "ex53-sol",
          type: "proof",
          title: "Interactive Solution",
          content: "Use the energy level formula $E_n = -13.6/n^2$ eV.",
          interactiveSteps: [
            {
              stepText: "Find the energy of the initial state ($n=3$):\n$$E_3 = -\\frac{13.6}{3^2} = -\\frac{13.6}{9} \\approx -1.51 \\text{ eV}$$"
            },
            {
              stepText: "Find the energy of the final state ($n=2$):\n$$E_2 = -\\frac{13.6}{2^2} = -\\frac{13.6}{4} = -3.40 \\text{ eV}$$"
            },
            {
              prompt: "The photon energy is the difference between the initial and final energy states: $hf = E_3 - E_2$. Calculate this.",
              stepText: "$$hf = -1.51 \\text{ eV} - (-3.40 \\text{ eV}) = 3.40 - 1.51 = 1.89 \\text{ eV}$$",
              options: [
                { id: "A", text: "$1.89$ eV", isCorrect: true, explanation: "This photon energy corresponds to the red Balmer line we calculated in the previous unit!" }
              ]
            }
          ]
        }
      ]
    },

    // ── LESSON 7: Ex 5.4 (Lyman Series) ───────────────────────────────────────────
    {
      id: "les-4-2-2-6",
      title: "Ex 2: Lyman Series Limit",
      description: "Ex: Wavelength of the Lyman series limit",
      icon: "Eye",
      slides: [
        {
          id: "ex54-q",
          type: "example_q",
          title: "Example 2 — Lyman Series Limit",
          content: "**Problem:**\nThe Lyman series corresponds to transitions ending at $n_f = 1$.\nFind the wavelength of the **series limit** (the shortest possible wavelength in the Lyman series).\n\n*Hint:* The shortest wavelength corresponds to the highest energy photon, which means the electron drops from $n_i = \\infty$."
        },
        {
          id: "ex54-sol",
          type: "proof",
          title: "Interactive Solution",
          content: "Calculate the energy difference from $n=\\infty$ to $n=1$.",
          interactiveSteps: [
            {
              stepText: "Energy at $n=\\infty$ is $0$ eV. Energy at $n=1$ is $-13.6$ eV."
            },
            {
              prompt: "What is the photon energy emitted?",
              stepText: "$$\\Delta E = 0 - (-13.6) = 13.6 \\text{ eV}$$",
              options: [
                { id: "A", text: "$13.6$ eV", isCorrect: true, explanation: "" }
              ]
            },
            {
              prompt: "Convert this energy into a wavelength using $\\lambda = \\frac{hc}{E}$ (Use $hc = 1240$ eV·nm).",
              stepText: "$$\\lambda = \\frac{1240 \\text{ eV}\\cdot\\text{nm}}{13.6 \\text{ eV}} \\approx 91.2 \\text{ nm}$$",
              options: [
                { id: "A", text: "$91.2$ nm", isCorrect: true, explanation: "This is deep in the ultraviolet spectrum." }
              ]
            }
          ]
        }
      ]
    },

    // ── LESSON 8: Ex 5.5 (Ionization from excited state) ──────────────────────────
    {
      id: "les-4-2-2-7",
      title: "Ex 3: Ionization Energy",
      description: "Ex: Energy required to free an excited electron",
      icon: "ArrowUpRight",
      slides: [
        {
          id: "ex55-q",
          type: "example_q",
          title: "Example 3 — Ionization",
          content: "**Problem:**\nAn electron in a hydrogen atom is currently in the first excited state ($n=2$).\nHow much energy must be supplied (absorbed) to completely ionize the atom from this state?"
        },
        {
          id: "ex55-sol",
          type: "proof",
          title: "Interactive Solution",
          content: "Ionization means kicking the electron from its current state to $n = \\infty$.",
          interactiveSteps: [
            {
              stepText: "Energy of the $n=2$ state is $E_2 = -\\frac{13.6}{2^2} = -3.40$ eV."
            },
            {
              prompt: "What is the energy of the final state, $n=\\infty$?",
              stepText: "$E_\\infty = 0$ eV",
              options: [
                { id: "A", text: "$0$ eV", isCorrect: true, explanation: "A completely free electron at rest has 0 total energy." }
              ]
            },
            {
              prompt: "Calculate the energy required to make the jump.",
              stepText: "$$\\Delta E = E_\\infty - E_2 = 0 - (-3.40) = 3.40 \\text{ eV}$$",
              options: [
                { id: "A", text: "$3.40$ eV", isCorrect: true, explanation: "You only need 3.40 eV to ionize a hydrogen atom if it's already in the $n=2$ state. (Compared to 13.6 eV from the ground state)." }
              ]
            }
          ]
        },
        {
          id: "ex55-fitb",
          type: "fill_in_blank",
          title: "Fill in the Blank",
          content: "The amount of energy needed to completely remove an electron from an atom is called the ___ energy.",
          blankAnswer: "ionization"
        }
      ]
    }
  ]
};