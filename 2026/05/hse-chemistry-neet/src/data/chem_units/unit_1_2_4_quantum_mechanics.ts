import { Unit } from '../../types';

export const UNIT_1_2_4: Unit = {
  id: "unit-1-2-4",
  title: "Quantum Mechanics",
  description: "Model of Atom & Config",
  color: "duo-green",
  lessons: [
    {
      id: "les-1-2-4-1",
      title: "Schrodinger & Orbitals",
      description: "Wave Function Psi",
      icon: "Wave",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "What is an Atomic Orbital?", options: [{id: "A", text: "Path of electron", isCorrect: false, explanation: "That is an orbit."}, {id: "B", text: "Wave function for electron", isCorrect: true, explanation: "Region of probability."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Quantum Mechanical Model",
          content: "Developed by Schrodinger (1926). Equation: $\\hat{H}\\psi = E\\psi$\n\n**Key Features:**\n1. Energy is quantized.\n2. **Orbital:** The region where probability of finding electron is max.\n3. $\\psi$ (Psi): Wave function (Amplitude).\n4. $|\\psi|^2$: Probability density."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Orbital Shapes",
          content: "Visualizing s and p orbitals.",
          interactiveCanvasId: "chem-orbital-shapes"
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "The probability of finding an electron at a point within an atom is proportional to the ___ of the orbital wave function.",
          blankAnswer: "square"
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Heisenberg principle relates?", options: [{id: "A", text: "Pos and Momentum", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Energy and Mass", isCorrect: false, explanation: "Einstein"}]}
      ]
    },
    {
      id: "les-1-2-4-2",
      title: "Principal Quantum Number",
      description: "Shells (n)",
      icon: "Hash",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Principal Quantum Number (n)",
          content: "Describes the **Main Shell**.\n\n- Values: $n = 1, 2, 3...$\n- Determines **Size** and **Energy** of orbital.\n- Max electrons in shell = $2n^2$.\n- As n increases, size increases, energy increases (less negative)."
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Capacity",
          content: "What is the maximum number of electrons in the N shell ($n=4$)?",
          numericAnswer: 32,
          numericTolerance: 0
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Psi squared represents?", options: [{id: "A", text: "Probability Density", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Amplitude", isCorrect: false, explanation: "Psi is amplitude"}]}
      ]
    },
    {
      id: "les-1-2-4-3",
      title: "Azimuthal & Magnetic QN",
      description: "Subshells and Orientation",
      icon: "Compass",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Azimuthal QN (l)",
          content: "Also called Orbital Angular Momentum QN. Defines **Shape** (Subshell).\n\n- Values: $0$ to $n-1$.\n- $l=0(s), 1(p), 2(d), 3(f)$."
        },
        {
          id: "core-2",
          type: "theory",
          title: "Magnetic QN (ml)",
          content: "Defines **Orientation** in space.\n\n- Values: $-l$ to $+l$ (including 0).\n- Total values = $2l + 1$.\n- Example: $p$ orbital ($l=1$) has $m_l = -1, 0, +1$ (3 orientations)."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Application",
          content: "For n=3, what are possible values of l?",
          options: [
            { id: "A", text: "0, 1, 2", isCorrect: true, explanation: "Up to n-1." },
            { id: "B", text: "1, 2, 3", isCorrect: false, explanation: "Starts at 0, ends n-1." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Max electrons in n=2?", options: [{id: "A", text: "8", isCorrect: true, explanation: "2(2)^2"}, {id: "B", text: "18", isCorrect: false, explanation: "That's n=3"}]}
      ]
    },
    {
      id: "les-1-2-4-4",
      title: "Spin Quantum Number",
      description: "Electron Spin",
      icon: "RotateCw",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Electron Spin (ms)",
          content: "Refers to orientation of spin axis.\n\n- Values: $+1/2$ (up) and $-1/2$ (down).\n- Two electrons in same orbital must have opposite spins.\n- Required to explain magnetic properties."
        },
        {
          id: "trap-1",
          type: "quiz",
          title: "Spot the Error",
          content: "Can ms be 0?",
          options: [
            { id: "A", text: "Yes", isCorrect: false, explanation: "Spin is intrinsic." },
            { id: "B", text: "No", isCorrect: true, explanation: "Only +1/2 or -1/2." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "l=2 corresponds to?", options: [{id: "A", text: "d orbital", isCorrect: true, explanation: "s=0, p=1, d=2"}, {id: "B", text: "p orbital", isCorrect: false, explanation: "l=1"}]}
      ]
    },
    {
      id: "les-1-2-4-5",
      title: "Shapes of Orbitals",
      description: "Nodes and Lobes",
      icon: "Circle",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Shapes & Nodes",
          content: "**s-orbital:** Spherical. Nodes = $n-1$.\n**p-orbital:** Dumbbell. Nodes = $n-2$.\n**d-orbital:** Double Dumbbell (except $dz^2$).\n\n**Nodes:** Region of zero probability.\n- Radial Nodes: $n-l-1$\n- Angular Nodes: $l$\n- Total Nodes: $n-1$"
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Visualizing Shapes",
          content: "s (Sphere), p (Dumbbell).",
          interactiveCanvasId: "chem-orbital-shapes"
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Node Calculation",
          content: "Calculate radial nodes for 3p orbital ($n=3, l=1$).",
          numericAnswer: 1,
          numericTolerance: 0
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Value of ms?", options: [{id: "A", text: "+- 1/2", isCorrect: true, explanation: "Correct"}, {id: "B", text: "0, 1", isCorrect: false, explanation: "Incorrect"}]}
      ]
    },
    {
      id: "les-1-2-4-6",
      title: "Energies of Orbitals",
      description: "Aufbau Rules",
      icon: "TrendingUp",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Energy Rules",
          content: "**Hydrogen:** Energy depends ONLY on **n**. ($1s < 2s = 2p < 3s...$)\n\n**Multi-electron:** Energy depends on **n + l**.\n- Lower $(n+l)$ = Lower energy.\n- If $(n+l)$ is same, lower $n$ = Lower energy.\n\nOrder: $1s < 2s < 2p < 3s < 3p < 4s < 3d...$"
        },
        {
          id: "trap-1",
          type: "quiz",
          title: "Common Trap",
          content: "Which has higher energy: 4s or 3d?",
          options: [
            { id: "A", text: "3d", isCorrect: true, explanation: "n+l: 4s(4+0=4), 3d(3+2=5). 5>4." },
            { id: "B", text: "4s", isCorrect: false, explanation: "4s fills before 3d." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Angular nodes equal to?", options: [{id: "A", text: "l", isCorrect: true, explanation: "Correct"}, {id: "B", text: "n-1", isCorrect: false, explanation: "Total nodes"}]}
      ]
    },
    {
      id: "les-1-2-4-7",
      title: "Filling Rules",
      description: "Aufbau, Pauli, Hund",
      icon: "List",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Principles",
          content: "**1. Aufbau:** Fill lowest energy orbitals first.\n**2. Pauli Exclusion:** No two electrons can have same 4 quantum numbers (Only 2 e- per orbital with opp spin).\n**3. Hund's Rule:** Pairing starts only after each degenerate orbital has 1 electron (Maximize spin)."
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Application",
          content: "Nitrogen (Z=7) configuration is $1s^2 2s^2 2p^3$. According to Hund, the 2p electrons are:",
          options: [
            { id: "A", text: "Unpaired (up, up, up)", isCorrect: true, explanation: "Maximize multiplicity." },
            { id: "B", text: "Paired (up-down, up)", isCorrect: false, explanation: "Violates Hund's rule." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "n+l for 3p?", options: [{id: "A", text: "4", isCorrect: true, explanation: "3+1"}, {id: "B", text: "3", isCorrect: false, explanation: "Incorrect"}]}
      ]
    },
    {
      id: "les-1-2-4-8",
      title: "Electronic Configuration",
      description: "Writing & Exceptions",
      icon: "Edit3",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Configuration",
          content: "Distribution of electrons into orbitals.\n\n**Exceptions:**\nStability of **Half-filled** and **Fully-filled** subshells.\n- **Chromium (Cr, 24):** Expect $[Ar]4s^2 3d^4$ $\\to$ Actual $[Ar]4s^1 3d^5$ (Half-filled d).\n- **Copper (Cu, 29):** Expect $[Ar]4s^2 3d^9$ $\\to$ Actual $[Ar]4s^1 3d^{10}$ (Full d)."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "NEET Favourite",
          content: "Correct configuration of Copper (Z=29)?",
          options: [
            { id: "A", text: "$[Ar] 3d^{10} 4s^1$", isCorrect: true, explanation: "Fully filled d is stable." },
            { id: "B", text: "$[Ar] 3d^9 4s^2$", isCorrect: false, explanation: "Incorrect." }
          ]
        },
        {
          id: "ar-1",
          type: "quiz",
          title: "Assertion-Reason",
          content: "**Assertion:** Cr has configuration $3d^5 4s^1$.\n**Reason:** Half-filled orbitals have extra stability due to symmetry and exchange energy.",
          options: [
            { id: "A", text: "Both True, R explains A", isCorrect: true, explanation: "Exchange energy is key." },
            { id: "B", text: "Both False", isCorrect: false, explanation: "Incorrect." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Who discovered Nucleus?", options: [{id: "A", text: "Rutherford", isCorrect: true, explanation: "Gold foil"}, {id: "B", text: "Bohr", isCorrect: false, explanation: "Orbits"}]}
      ]
    }
  ]
};