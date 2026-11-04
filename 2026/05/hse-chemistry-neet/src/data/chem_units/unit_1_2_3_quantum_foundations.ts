import { Unit } from '../../types';

export const UNIT_1_2_3: Unit = {
  id: "unit-1-2-3",
  title: "Quantum Foundations",
  description: "Dual Nature & Heisenberg",
  color: "duo-green",
  lessons: [
    {
      id: "les-1-2-3-1",
      title: "Limitations of Bohr",
      description: "Why we needed a new model",
      icon: "AlertCircle",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Could Bohr explain the Zeeman effect?", options: [{id: "A", text: "Yes", isCorrect: false, explanation: "No."}, {id: "B", text: "No", isCorrect: true, explanation: "Splitting in magnetic field."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Shortcomings of Bohr Model",
          content: "1. Failed for multi-electron atoms (e.g., Helium).\n2. Could not explain fine spectrum (doublets).\n3. Could not explain **Zeeman effect** (magnetic field splitting) and **Stark effect** (electric field splitting).\n4. Could not explain ability to form molecules (bonds).\n5. Ignored **Dual Nature** and **Heisenberg Principle**."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Terminology",
          content: "Splitting of spectral lines in an electric field is called:",
          options: [
            { id: "A", text: "Zeeman Effect", isCorrect: false, explanation: "That's magnetic." },
            { id: "B", text: "Stark Effect", isCorrect: true, explanation: "Correct." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Bohr radius formula proportional to?", options: [{id: "A", text: "n^2", isCorrect: true, explanation: "Correct"}, {id: "B", text: "1/n", isCorrect: false, explanation: "No"}]}
      ]
    },
    {
      id: "les-1-2-3-2",
      title: "Dual Nature of Matter",
      description: "de Broglie Hypothesis",
      icon: "GitMerge",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Does a moving cricket ball have a wavelength?", options: [{id: "A", text: "Yes", isCorrect: true, explanation: "But it is negligible."}, {id: "B", text: "No", isCorrect: false, explanation: "All matter has wave nature."}] },
        {
          id: "core-1",
          type: "theory",
          title: "de Broglie Equation (1924)",
          content: "Just as light has dual nature (particle/wave), matter also exhibits dual nature.\n\n$$\\lambda = \\frac{h}{mv} = \\frac{h}{p}$$\n\nWhere $p$ is momentum. \nSignificance: Only significant for microscopic particles (electrons). For macroscopic objects (balls, cars), $\\lambda$ is too small to measure."
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Calculate Wavelength",
          content: "Calculate wavelength of an electron ($m=9.1 \\times 10^{-31}$ kg) moving at $10^7$ m/s. ($h=6.63 \\times 10^{-34}$). Answer in Angstrom ($10^{-10}$ m), rounded to 1 decimal.",
          numericAnswer: 0.7,
          numericTolerance: 0.1
        },
        {
          id: "sol-1",
          type: "solution",
          title: "Calculation",
          content: "Solution steps.",
          interactiveSteps: [
            { stepText: "Formula: $\\lambda = h/mv$" },
            { stepText: "Sub: $6.63\\times 10^{-34} / (9.1\\times 10^{-31} \\times 10^7)$" },
            { stepText: "$= 0.728 \\times 10^{-10}$ m = 0.7 A." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Zeeman effect is splitting in?", options: [{id: "A", text: "Magnetic field", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Electric field", isCorrect: false, explanation: "Stark effect"}]}
      ]
    },
    {
      id: "les-1-2-3-3",
      title: "Heisenberg's Principle",
      description: "Uncertainty Defined",
      icon: "HelpCircle",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Can we know exact position and momentum of electron simultaneously?", options: [{id: "A", text: "Yes", isCorrect: false, explanation: "Classical physics says yes, Quantum says no."}, {id: "B", text: "No", isCorrect: true, explanation: "Fundamental limit."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Heisenberg Uncertainty Principle (1927)",
          content: "It is impossible to determine simultaneously, the exact position and exact momentum (or velocity) of an electron.\n\nMathematical: $$\\Delta x \\times \\Delta p \\ge \\frac{h}{4\\pi}$$\nOr: $$\\Delta x \\times (m \\Delta v) \\ge \\frac{h}{4\\pi}$$"
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "The product of uncertainty in position and momentum is always constant or ___ than h/4pi.",
          blankAnswer: "greater"
        },
        {
          id: "ar-1",
          type: "quiz",
          title: "Assertion-Reason",
          content: "**Assertion:** An electron cannot exist in the nucleus.\n**Reason:** If an electron were in the nucleus ($10^{-15}$m), the uncertainty in velocity would exceed speed of light.",
          options: [
            { id: "A", text: "Both True, R explains A", isCorrect: true, explanation: "Standard application of Heisenberg." },
            { id: "B", text: "Both False", isCorrect: false, explanation: "Incorrect." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "de Broglie relation?", options: [{id: "A", text: "lambda = h/p", isCorrect: true, explanation: "Correct"}, {id: "B", text: "lambda = p/h", isCorrect: false, explanation: "Inverse"}]}
      ]
    },
    {
      id: "les-1-2-3-4",
      title: "Significance of Uncertainty",
      description: "Why Bohr failed",
      icon: "XCircle",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Concept of Trajectory",
          content: "Bohr's model defined fixed paths (orbits). This implies we know position and velocity exactly at all times.\nHeisenberg's principle rules out definite trajectories.\n\nThus, we replace **definite orbits** with **probability** of finding electron."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Concept Check",
          content: "Which model contradicts Heisenberg's principle?",
          options: [
            { id: "A", text: "Bohr Model", isCorrect: true, explanation: "Defined fixed paths." },
            { id: "B", text: "Quantum Mechanical Model", isCorrect: false, explanation: "Based on probability." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "h/4pi value approx?", options: [{id: "A", text: "0.527 x 10^-34", isCorrect: true, explanation: "Correct"}, {id: "B", text: "6.63 x 10^-34", isCorrect: false, explanation: "That is h"}]}
      ]
    },
    {
      id: "les-1-2-3-5",
      title: "Probability & Determinism",
      description: "Shift to Quantum Mechanics",
      icon: "GitBranch",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Micro vs Macro",
          content: "For a milligram object, $\\Delta v \\cdot \\Delta x$ is extremely small ($10^{-28}$). The uncertainty is negligible.\nFor an electron, it is significant.\n\nQuantum Mechanics deals with probability density ($|\psi|^2$) rather than exact location."
        },
        { id: "ret-1", type: "fill_in_blank", title: "Check", content: "Quantum mechanics provides the ___ of finding an electron.", blankAnswer: "probability" },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Value of Planck Constant?", options: [{id: "A", text: "6.626 x 10^-34 J s", isCorrect: true, explanation: "Correct"}, {id: "B", text: "3 x 10^8", isCorrect: false, explanation: "Speed of light"}]}
      ]
    },
    {
      id: "les-1-2-3-6",
      title: "Numerical Practice",
      description: "Quantum Foundations",
      icon: "Calculator",
      slides: [
        {
          id: "q-1",
          type: "numerical",
          title: "Uncertainty Calculation",
          content: "Microscope locates electron within distance $0.1$ Angstrom. What is uncertainty in velocity? ($m=9.1 \\times 10^{-31}$). Answer in $10^6$ m/s coefficient (X). $\\Delta x = 10^{-11}$.",
          numericAnswer: 5.79,
          numericTolerance: 0.1
        },
        {
          id: "sol-1",
          type: "solution",
          title: "Solution",
          content: "Calculation for velocity uncertainty.",
          interactiveSteps: [
            { stepText: "$\\Delta x = 0.1 A = 10^{-11}$ m." },
            { stepText: "$\\Delta v = h / (4\\pi m \\Delta x)$" },
            { stepText: "$= 6.626 \\times 10^{-34} / (4 \\times 3.14 \\times 9.1 \\times 10^{-31} \\times 10^{-11})$" },
            { stepText: "$= 5.79 \\times 10^6$ m/s." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Isotopes have same?", options: [{id: "A", text: "Z", isCorrect: true, explanation: "Protons"}, {id: "B", text: "A", isCorrect: false, explanation: "Mass number"}]}
      ]
    }
  ]
};