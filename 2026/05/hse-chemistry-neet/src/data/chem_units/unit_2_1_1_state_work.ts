import { Unit } from '../../types';

export const UNIT_2_1_1: Unit = {
  id: "unit-2-1-1",
  title: "State & Work",
  description: "Basic Terms & First Law",
  color: "duo-red",
  lessons: [
    {
      id: "les-2-1-1-1",
      title: "System & Surroundings",
      description: "Defining the Universe",
      icon: "Box",
      slides: [
        { id: "init-1", type: "quiz", title: "Intro", content: "Thermodynamics deals with:", options: [{id: "A", text: "Macroscopic systems", isCorrect: true, explanation: "Bulk properties of matter."}, {id: "B", text: "Microscopic atoms", isCorrect: false, explanation: "That's Quantum Mechanics."}] },
        { id: "init-2", type: "quiz", title: "Intro", content: "Universe =", options: [{id: "A", text: "System + Surroundings", isCorrect: true, explanation: "The whole thing."}, {id: "B", text: "System - Surroundings", isCorrect: false, explanation: "Incorrect."}] },
        {
          id: "core-1",
          type: "theory",
          title: "System & Surroundings",
          content: "**System:** Part of universe under observation (e.g., reactants in a beaker).\n**Surroundings:** Everything else (e.g., the room).\n**Boundary:** Real or imaginary wall separating them.\n\nUniverse = System + Surroundings."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "The Universe",
          content: "Visualizing the separation between System and Surroundings.",
          interactiveCanvasId: "thermo-systems"
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "The wall that separates the system from the surroundings is called ___.",
          blankAnswer: "boundary"
        },
        {
          id: "ar-1",
          type: "quiz",
          title: "Assertion-Reason",
          content: "**Assertion:** The state of surroundings can never be completely specified.\n**Reason:** Surroundings constitute the rest of the universe which is infinite.",
          options: [
            { id: "A", text: "Both True, R explains A", isCorrect: true, explanation: "It is too vast to measure properties." },
            { id: "B", text: "Both False", isCorrect: false, explanation: "Incorrect." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Avogadro's constant?", options: [{id: "A", text: "6.022 x 10^23", isCorrect: true, explanation: "Correct"}, {id: "B", text: "1.66 x 10^-24", isCorrect: false, explanation: "amu"}]}
      ]
    },
    {
      id: "les-2-1-1-2",
      title: "Types of Systems",
      description: "Open, Closed, Isolated",
      icon: "Layers",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "A cup of hot tea in an open room is:", options: [{id: "A", text: "Open System", isCorrect: true, explanation: "Exchanges heat and vapour."}, {id: "B", text: "Closed System", isCorrect: false, explanation: "Vapour escapes."}] },
        {
          id: "core-1",
          type: "theory",
          title: "System Types",
          content: "1. **Open System:** Exchanges **Energy** AND **Matter** (e.g., Open beaker).\n2. **Closed System:** Exchanges **Energy** ONLY (e.g., Sealed copper vessel).\n3. **Isolated System:** Exchanges **Neither** (e.g., Thermos flask)."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Visualizing Systems",
          content: "Compare Open, Closed, and Isolated systems.",
          interactiveCanvasId: "thermo-systems"
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Check",
          content: "A thermos flask containing coffee is an example of:",
          options: [
            { id: "A", text: "Isolated System", isCorrect: true, explanation: "Insulated and sealed." },
            { id: "B", text: "Closed System", isCorrect: false, explanation: "No heat exchange allowed." }
          ]
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Application",
          content: "Our planet Earth is approximately a:",
          options: [
            { id: "A", text: "Open System", isCorrect: false, explanation: "Matter exchange is minimal (meteorites)." },
            { id: "B", text: "Closed System", isCorrect: true, explanation: "Exchanges energy (Solar radiation) but negligible matter." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "SI unit of Temperature?", options: [{id: "A", text: "Kelvin", isCorrect: true, explanation: "K"}, {id: "B", text: "Celsius", isCorrect: false, explanation: "Common unit"}]}
      ]
    },
    {
      id: "les-2-1-1-3",
      title: "State Functions",
      description: "Path Independence",
      icon: "Map",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Does the height of a mountain depend on the path climbed?", options: [{id: "A", text: "No", isCorrect: true, explanation: "Height is a state function."}, {id: "B", text: "Yes", isCorrect: false, explanation: "Distance walked depends on path."}] },
        {
          id: "core-1",
          type: "theory",
          title: "State Functions",
          content: "Properties whose values depend only on the **state** of the system, not on how it was reached.\n\nExamples: Pressure ($p$), Volume ($V$), Temperature ($T$), Internal Energy ($U$), Enthalpy ($H$).\n\n**Path Functions:** Depend on path (e.g., Work ($w$), Heat ($q$))."
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "Variables like p, V, T are called ___ functions because their values depend only on the state of the system.",
          blankAnswer: "state"
        },
        {
          id: "trap-1",
          type: "quiz",
          title: "Spot the Error",
          content: "Which is NOT a state function?",
          options: [
            { id: "A", text: "Work (w)", isCorrect: true, explanation: "Depends on path (reversible vs irreversible)." },
            { id: "B", text: "Internal Energy (U)", isCorrect: false, explanation: "State function." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Standard Pressure is?", options: [{id: "A", text: "1 bar", isCorrect: true, explanation: "Modern standard"}, {id: "B", text: "1 atm", isCorrect: false, explanation: "Old standard"}]}
      ]
    },
    {
      id: "les-2-1-1-4",
      title: "Internal Energy & Heat",
      description: "U, q and Sign Convention",
      icon: "BatteryCharging",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Can we measure absolute Internal Energy?", options: [{id: "A", text: "No", isCorrect: true, explanation: "Only change (Delta U)."}, {id: "B", text: "Yes", isCorrect: false, explanation: "Impossible to sum all microscopic energies."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Internal Energy (U)",
          content: "Sum of all forms of energy (chemical, electrical, mechanical) stored in the system.\n- It is a **State Function**.\n- Change: $\\Delta U = U_{final} - U_{initial}$.\n\n**Heat (q):** Energy transfer due to temperature difference.\n- Path function."
        },
        {
          id: "core-2",
          type: "theory",
          title: "Sign Convention (IUPAC)",
          content: "**Heat ($q$):**\n- Positive (+q): Heat **absorbed** by system.\n- Negative (-q): Heat **released** by system.\n\n**Work ($w$):**\n- Positive (+w): Work done **ON** the system (Compression).\n- Negative (-w): Work done **BY** the system (Expansion)."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Sign Check",
          content: "Work done by the system on surroundings is:",
          options: [
            { id: "A", text: "Negative", isCorrect: true, explanation: "System loses energy." },
            { id: "B", text: "Positive", isCorrect: false, explanation: "Old convention." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Which is an intensive property?", options: [{id: "A", text: "Temperature", isCorrect: true, explanation: "Independent of mass"}, {id: "B", text: "Mass", isCorrect: false, explanation: "Extensive"}]}
      ]
    },
    {
      id: "les-2-1-1-5",
      title: "Pressure-Volume Work",
      description: "w = -Pext ΔV",
      icon: "ArrowDown",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Work is done when:", options: [{id: "A", text: "Volume changes against pressure", isCorrect: true, explanation: "PV work."}, {id: "B", text: "Volume is constant", isCorrect: false, explanation: "w=0."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Mechanical Work",
          content: "Work done during expansion or compression of gas against external pressure ($p_{ex}$).\n\n$$w = - p_{ex} \\Delta V$$\n\n- Expansion: $\\Delta V > 0 \\to w < 0$ (Work done by system).\n- Compression: $\\Delta V < 0 \\to w > 0$ (Work done on system)."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "PV Work",
          content: "Visualizing compression of gas.",
          interactiveCanvasId: "thermo-expansion"
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Free Expansion",
          content: "Work done during expansion into vacuum ($p_{ex} = 0$) is:",
          options: [
            { id: "A", text: "Zero", isCorrect: true, explanation: "w = -0 * dV = 0." },
            { id: "B", text: "Maximum", isCorrect: false, explanation: "No resistance." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "STP temperature?", options: [{id: "A", text: "273.15 K", isCorrect: true, explanation: "0 deg C"}, {id: "B", text: "298 K", isCorrect: false, explanation: "SATP"}]}
      ]
    },
    {
      id: "les-2-1-1-6",
      title: "First Law of Thermodynamics",
      description: "Energy Conservation",
      icon: "Scale",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "First Law Statement",
          content: "Energy of an isolated system is constant. Energy can neither be created nor destroyed.\n\n**Mathematical Form:**\n$$ \\Delta U = q + w $$\n\nWhere $q$ is heat supplied to system and $w$ is work done on system."
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Calculation",
          content: "System absorbs 100 J heat ($q=+100$) and does 40 J work ($w=-40$). Find $\\Delta U$.",
          numericAnswer: 60,
          numericTolerance: 0
        },
        {
          id: "ar-1",
          type: "quiz",
          title: "Assertion-Reason",
          content: "**Assertion:** For an isolated system, $\\Delta U = 0$.\n**Reason:** In isolated system, $q=0$ and $w=0$.",
          options: [
            { id: "A", text: "Both True, R explains A", isCorrect: true, explanation: "From First Law." },
            { id: "B", text: "Assertion False", isCorrect: false, explanation: "U is constant." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Is Internal Energy path dependent?", options: [{id: "A", text: "No", isCorrect: true, explanation: "State function"}, {id: "B", text: "Yes", isCorrect: false, explanation: "Incorrect"}]}
      ]
    },
    {
      id: "les-2-1-1-7",
      title: "Reversible Process",
      description: "Infinite Steps",
      icon: "RefreshCw",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Reversible process happens:", options: [{id: "A", text: "Infinitely slowly", isCorrect: true, explanation: "Quasi-static."}, {id: "B", text: "Rapidly", isCorrect: false, explanation: "Irreversible."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Reversible Work",
          content: "Process where $p_{ex}$ is always infinitesimally different from $p_{in}$. Maximum work is obtained.\n\nFormula (Isothermal Reversible Expansion):\n$$ w_{rev} = -2.303 nRT \\log \\frac{V_f}{V_i} $$"
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Reversible Path",
          content: "Graph shows area under curve is maximum for reversible path.",
          interactiveCanvasId: "thermo-expansion"
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Work Calculation",
          content: "Calculate $w_{rev}$ for 1 mol ideal gas expanding from 1L to 10L at 300K. ($R \\approx 8.3$ J/molK, $\\log 10 = 1$). Answer in Joules magnitude (ignore sign).",
          numericAnswer: 5734,
          numericTolerance: 50
        },
        {
          id: "hint-1",
          type: "quiz",
          title: "Sign Check",
          content: "The work calculated above is:",
          options: [
            { id: "A", text: "Negative (Expansion)", isCorrect: true, explanation: "Work done BY gas." },
            { id: "B", text: "Positive (Compression)", isCorrect: false, explanation: "Volume increased." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Isothermal means?", options: [{id: "A", text: "Constant T", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Constant V", isCorrect: false, explanation: "Isochoric"}]}
      ]
    }
  ]
};