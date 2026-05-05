import { Unit } from '../../types';

export const UNIT_4_2_3_HYDROGEN_LIKE_IONS: Unit = {
  id: "unit-4-2-3",
  title: "Hydrogen-Like Ions & Variations",
  description: "T: Bohr model for Z > 1 · T: Emission vs Absorption · Ex: He+ and Muonic Atoms",
  color: "duo-pink",
  lessons: [
    // ── LESSON 1: Priming ─────────────────────────────────────────────────────────
    {
      id: "les-4-2-3-act",
      title: "Warm-Up: More Protons",
      description: "Activate prior knowledge",
      icon: "Brain",
      slides: [
        {
          id: "ion-prime-1",
          type: "quiz",
          title: "Priming Question",
          content: "The Bohr model works perfectly for Hydrogen (1 proton, 1 electron). If we strip an electron from Helium to make He+ (2 protons, 1 electron), what happens to the electric force pulling the electron inward compared to Hydrogen?",
          options: [
            { id: "A", text: "The attractive force is twice as strong.", isCorrect: true, explanation: "Correct! The nucleus has a charge of +2e instead of +1e, so the Coulomb force pulling the electron is doubled." },
            { id: "B", text: "The attractive force stays the same.", isCorrect: false, explanation: "Coulomb force depends on the charges: $F \propto (q_1 q_2)/r^2$." }
          ]
        },
        {
          id: "ion-prime-2",
          type: "quiz",
          title: "Orbit Size",
          content: "Because the He+ nucleus pulls the electron twice as hard as Hydrogen, what do you expect to happen to the radius of the electron's orbit?",
          options: [
            { id: "A", text: "The orbit will be smaller (closer to the nucleus).", isCorrect: true, explanation: "Stronger pull means the electron orbits much closer and is bound much tighter." },
            { id: "B", text: "The orbit will be larger.", isCorrect: false, explanation: "A stronger pull reels it in tighter." }
          ]
        }
      ]
    },

    // ── LESSON 2: T: Bohr model for Z > 1 ─────────────────────────────────────────
    {
      id: "les-4-2-3-1",
      title: "Bohr Model for Ions (Z > 1)",
      description: "T: Adapting the formulas for Z protons",
      icon: "Atom",
      slides: [
        {
          id: "z-theory",
          type: "theory",
          title: "Hydrogen-Like Ions",
          content: "The Bohr model only works if there is exactly **one electron** (otherwise, the electrons repel each other and ruin the simple math). However, the nucleus can have any number of protons $Z$.\n\nExamples: He⁺ ($Z=2$), Li²⁺ ($Z=3$), Be³⁺ ($Z=4$).\n\nThe only change in the math is replacing the nuclear charge $e$ with $Ze$. The Coulomb force becomes:\n$$F = \\frac{1}{4\\pi\\epsilon_0} \\frac{Ze^2}{r^2}$$\n\nThis small change scales the Radius and Energy formulas drastically:\n\n**Radii:** $r_n = \\frac{n^2 a_0}{Z}$\n\n**Energy:** $E_n = -13.6 \\text{ eV} \\frac{Z^2}{n^2}$"
        },
        {
          id: "z-q1",
          type: "quiz",
          title: "Energy Scaling",
          content: "For a Li²⁺ ion ($Z=3$), how does the ground state energy compare to Hydrogen?",
          options: [
            { id: "A", text: "It is 3 times more negative.", isCorrect: false, explanation: "Look at the formula: it scales as $Z^2$." },
            { id: "B", text: "It is 9 times more negative.", isCorrect: true, explanation: "Yes! $-13.6 \\times 3^2 = -13.6 \\times 9 = -122.4$ eV. The electron is bound incredibly tightly." }
          ]
        }
      ]
    },

    // ── LESSON 3: T: Photon emission and absorption ───────────────────────────────
    {
      id: "les-4-2-3-2",
      title: "Emission vs. Absorption",
      description: "T: Why absorption spectra have fewer lines",
      icon: "ArrowUpDown",
      slides: [
        {
          id: "abs-theory",
          type: "theory",
          title: "Absorption Spectra",
          content: "We noticed earlier that gases only **absorb** a few specific lines, but **emit** many more. Why?\n\nIn a normal, cold gas, almost all atoms are sitting in their lowest possible energy state (the ground state, $n=1$).\n\nTherefore, the only photons the gas can absorb are those that match a jump starting from $n=1$ (i.e., $1 \\to 2$, $1 \\to 3$, $1 \\to 4$). For hydrogen, these are exclusively the Lyman series lines.\n\nA gas won't absorb a Balmer photon ($n=2 \\to 3$) because there are virtually no atoms sitting in the $n=2$ state waiting to absorb it! They only exist in $n=2$ for a fraction of a nanosecond after being excited before decaying."
        },
        {
          id: "abs-q1",
          type: "quiz",
          title: "Concept Check",
          content: "An emission spectrum contains lines from electrons dropping from $n=5 \\to 2$, $n=4 \\to 2$, etc. Will these specific wavelengths appear as dark bands in the absorption spectrum of room-temperature hydrogen gas?",
          options: [
            { id: "A", text: "Yes, emission and absorption always perfectly mirror each other.", isCorrect: false, explanation: "They only mirror if the starting state is populated." },
            { id: "B", text: "No, because the atoms are in the ground state ($n=1$) and cannot absorb a photon that corresponds to a jump starting from $n=2$.", isCorrect: true, explanation: "Exactly. The atom must already be in the $n=2$ state to absorb that specific photon. At room temperature, all atoms are at $n=1$." }
          ]
        },
        {
          id: "abs-fitb",
          type: "fill_in_blank",
          title: "Fill in the Blank",
          content: "At room temperature, almost all atoms are in the ___ state, which restricts the types of photons they can absorb.",
          blankAnswer: "ground"
        }
      ]
    },

    // ── LESSON 4: Ex 4: He+ Ion ───────────────────────────────────────────────────
    {
      id: "les-4-2-3-3",
      title: "Ex 4: He⁺ Ion",
      description: "Ex: Energy and wavelengths for ionized Helium",
      icon: "Calculator",
      slides: [
        {
          id: "exhe-q",
          type: "example_q",
          title: "Example 4 — Ionized Helium",
          content: "**Problem:**\nConsider singly ionized Helium (He⁺), which has $Z=2$.\n\n(a) What is the energy of its ground state?\n(b) What is the wavelength of the photon emitted when it transitions from $n=2$ to $n=1$?"
        },
        {
          id: "exhe-sol",
          type: "proof",
          title: "Interactive Solution",
          content: "Use the scaled Bohr formulas.",
          interactiveSteps: [
            {
              prompt: "Part (a): Use $E_n = -13.6 \\frac{Z^2}{n^2}$ with $Z=2, n=1$.",
              stepText: "$$E_1 = -13.6 \\frac{2^2}{1^2} = -13.6 \\times 4 = -54.4 \\text{ eV}$$",
              options: [
                { id: "A", text: "$-54.4$ eV", isCorrect: true, explanation: "" }
              ]
            },
            {
              prompt: "Part (b): Find the energy of the $n=2$ state.",
              stepText: "$$E_2 = -13.6 \\frac{2^2}{2^2} = -13.6 \\text{ eV}$$",
              options: [
                { id: "A", text: "Proceed", isCorrect: true, explanation: "" }
              ]
            },
            {
              prompt: "Calculate the energy difference $\\Delta E$ and find the wavelength $\\lambda = hc / \\Delta E$.",
              stepText: "$$\\Delta E = E_2 - E_1 = -13.6 - (-54.4) = 40.8 \\text{ eV}$$\n$$\\lambda = \\frac{1240}{40.8} \\approx 30.4 \\text{ nm}$$",
              options: [
                { id: "A", text: "$30.4$ nm", isCorrect: true, explanation: "This is deep in the extreme ultraviolet." }
              ]
            }
          ]
        }
      ]
    },

    // ── LESSON 5: Ex 5: Muonic Atom ───────────────────────────────────────────────
    {
      id: "les-4-2-3-4",
      title: "Ex 5: Muonic Atom",
      description: "Ex: What if the electron was much heavier?",
      icon: "Component",
      slides: [
        {
          id: "exmu-theory",
          type: "theory",
          title: "A Different Kind of Atom",
          content: "The Bohr model depends on the mass of the orbiting particle. \n\n$$r_n = \\frac{4\\pi\\epsilon_0 \\hbar^2}{m e^2} n^2 \\quad \\text{and} \\quad E_n = -\\frac{m e^4}{32\\pi^2\\epsilon_0^2 \\hbar^2} \\frac{1}{n^2}$$\n\nNotice that Radius $r_n \\propto 1/m$ and Energy $E_n \\propto m$.\n\nA **Muon** is a particle identical to an electron (charge $-e$), but it is $207$ times heavier! ($m_\\mu = 207 m_e$). If a muon gets captured by a proton, it forms a 'Muonic Atom'."
        },
        {
          id: "exmu-q1",
          type: "quiz",
          title: "Muonic Orbits",
          content: "How does the size of the muonic atom's ground state orbit compare to a regular hydrogen atom?",
          options: [
            { id: "A", text: "It is 207 times smaller.", isCorrect: true, explanation: "Because $r_n \\propto 1/m$, the much heavier muon orbits much closer to the nucleus! $a_0 \\approx 0.0529 / 207 \\approx 0.00025$ nm." },
            { id: "B", text: "It is 207 times larger.", isCorrect: false, explanation: "Heavier mass pulls the orbit inward." }
          ]
        },
        {
          id: "exmu-q2",
          type: "quiz",
          title: "Muonic Energy",
          content: "What is the ground state binding energy of the muonic atom?",
          options: [
            { id: "A", text: "$-13.6$ eV", isCorrect: false, explanation: "That's for a standard electron." },
            { id: "B", text: "$-13.6 \\times 207 \\approx -2815$ eV", isCorrect: true, explanation: "Because $E_n \\propto m$, the binding energy is 207 times stronger! Transitions in muonic atoms emit X-rays rather than visible light." }
          ]
        }
      ]
    }
  ]
};