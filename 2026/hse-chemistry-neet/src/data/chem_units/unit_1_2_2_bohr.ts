import { Unit } from '../../types';

export const UNIT_1_2_2: Unit = {
  id: "unit-1-2-2",
  title: "Bohr's Foundations",
  description: "Developments Leading to Bohr & The Model",
  color: "duo-green",
  lessons: [
    {
      id: "les-1-2-2-1",
      title: "Electromagnetic Radiation",
      description: "Wave Nature of Light",
      icon: "Radio",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Do EM waves require a medium?", options: [{id: "A", text: "No", isCorrect: true, explanation: "Can travel in vacuum."}, {id: "B", text: "Yes", isCorrect: false, explanation: "Sound needs medium."}] },
        { id: "init-2", type: "quiz", title: "Concept", content: "Relation between frequency and wavelength?", options: [{id: "A", text: "Inverse", isCorrect: true, explanation: "c = v * lambda"}, {id: "B", text: "Direct", isCorrect: false, explanation: "Incorrect."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Wave Nature of EM Radiation",
          content: "James Maxwell (1870) showed charged particles accelerating produce alternating E and B fields.\n\n**Properties:**\n1. Oscillating Electric and Magnetic fields are **perpendicular** to each other and to direction of propagation.\n2. No medium required.\n3. Speed in vacuum $c = 3.0 \\times 10^8$ m/s.\n\nFormula: $c = \\nu \\lambda$ ($\\nu$: frequency, $\\lambda$: wavelength)"
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Calculation",
          content: "Calculate wavenumber ($\\bar{\\nu}$) in $cm^{-1}$ for light with wavelength 500 nm.",
          numericAnswer: 20000,
          numericTolerance: 100
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Definition",
          content: "Wavenumber is defined as the number of wavelengths per unit ___.",
          blankAnswer: "length"
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "A = Z + ?", options: [{id: "A", text: "n", isCorrect: true, explanation: "Neutrons"}, {id: "B", text: "e", isCorrect: false, explanation: "Electrons"}]}
      ]
    },
    {
      id: "les-1-2-2-2",
      title: "Planck's Quantum Theory",
      description: "Particle Nature of Light",
      icon: "Lightbulb",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Black body radiation could be explained by:", options: [{id: "A", text: "Wave Theory", isCorrect: false, explanation: "Failed to explain intensity dist."}, {id: "B", text: "Particle Theory", isCorrect: true, explanation: "Planck's Quantum theory."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Planck's Quantum Theory",
          content: "Explains Black Body Radiation and Photoelectric Effect.\n\n1. Energy is emitted/absorbed discontinuously in packets called **quanta**.\n2. Energy of quantum: $E = h\\nu$\n3. $h = 6.626 \\times 10^{-34}$ J s (Planck's constant)."
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Energy Calculation",
          content: "Calculate energy of one mole of photons of frequency $5 \\times 10^{14}$ Hz. (Give answer in kJ/mol, rounded to nearest integer).",
          numericAnswer: 199,
          numericTolerance: 1
        },
        {
          id: "sol-1",
          type: "solution",
          title: "Steps",
          content: "Solution for previous question",
          interactiveSteps: [
            { stepText: "Step 1: Energy of 1 photon $E = h\\nu$\n$6.626 \\times 10^{-34} \\times 5 \\times 10^{14} = 3.313 \\times 10^{-19}$ J" },
            { stepText: "Step 2: For 1 mole, multiply by $N_A$.\n$3.313 \\times 10^{-19} \\times 6.022 \\times 10^{23} = 199510$ J" },
            { stepText: "Step 3: Convert to kJ.\n199.51 kJ $\\approx$ 199 kJ." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Speed of light?", options: [{id: "A", text: "3x10^8 m/s", isCorrect: true, explanation: "Correct"}, {id: "B", text: "3x10^10 m/s", isCorrect: false, explanation: "That is cm/s"}]}
      ]
    },
    {
      id: "les-1-2-2-3",
      title: "Photoelectric Effect",
      description: "Einstein's Explanation",
      icon: "Sun",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Electrons are ejected only if frequency is:", options: [{id: "A", text: "Greater than Threshold", isCorrect: true, explanation: "v > v0"}, {id: "B", text: "Any frequency", isCorrect: false, explanation: "Depends on threshold."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Photoelectric Effect",
          content: "Ejection of electrons from metal surface when light strikes.\n\n**Observations:**\n1. No time lag.\n2. Existence of **Threshold Frequency** ($\\nu_0$). If $\\nu < \\nu_0$, no effect.\n3. Kinetic Energy of electron depends on frequency, not intensity.\n4. Number of electrons depends on **intensity**.\n\n**Einstein's Eq:** $h\\nu = h\\nu_0 + \\text{K.E.}_{max}$"
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Photoelectric Effect",
          content: "Visualizing the photon hitting surface and electron ejecting.",
          interactiveCanvasId: "chem-photoelectric"
        },
        {
          id: "ar-1",
          type: "quiz",
          title: "Assertion-Reason",
          content: "**Assertion:** Kinetic energy of photoelectrons increases with intensity of light.\n**Reason:** Energy of photon depends on frequency, not intensity.",
          options: [
            { id: "A", text: "Assertion False, Reason True", isCorrect: true, explanation: "KE depends on frequency. Intensity increases number of electrons." },
            { id: "B", text: "Both True", isCorrect: false, explanation: "Assertion is false." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Planck's constant unit?", options: [{id: "A", text: "J s", isCorrect: true, explanation: "Joule second"}, {id: "B", text: "J/s", isCorrect: false, explanation: "Watt"}]}
      ]
    },
    {
      id: "les-1-2-2-4",
      title: "Atomic Spectra",
      description: "Line Spectrum of Hydrogen",
      icon: "Activity",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Atomic spectrum of hydrogen is:", options: [{id: "A", text: "Continuous", isCorrect: false, explanation: "Like a rainbow."}, {id: "B", text: "Line Spectrum", isCorrect: true, explanation: "Discrete lines."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Line Spectrum",
          content: "Unlike continuous spectrum (rainbow), atoms emit light at specific wavelengths.\n**Hydrogen Spectrum Series:**\n1. **Lyman** ($n_1=1$, UV)\n2. **Balmer** ($n_1=2$, Visible)\n3. **Paschen** ($n_1=3$, IR)\n4. **Brackett** ($n_1=4$, IR)\n5. **Pfund** ($n_1=5$, IR)"
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Match",
          content: "Which series appears in the Visible region?",
          options: [
            { id: "A", text: "Lyman", isCorrect: false, explanation: "UV region." },
            { id: "B", text: "Balmer", isCorrect: true, explanation: "Only Balmer is visible." }
          ]
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Rydberg Formula",
          content: "Calculate wavenumber for the first line of Balmer series ($n_1=2, n_2=3$). $R_H = 109677 cm^{-1}$.",
          numericAnswer: 15233,
          numericTolerance: 10
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Threshold frequency is related to?", options: [{id: "A", text: "Work Function", isCorrect: true, explanation: "h * v0"}, {id: "B", text: "Intensity", isCorrect: false, explanation: "No relation"}]}
      ]
    },
    {
      id: "les-1-2-2-5",
      title: "Bohr's Model",
      description: "Postulates for Hydrogen",
      icon: "Circle",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Does Bohr's model apply to Helium atom?", options: [{id: "A", text: "Yes", isCorrect: false, explanation: "He has 2 electrons."}, {id: "B", text: "No", isCorrect: true, explanation: "Only one-electron species (H, He+, Li2+)."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Bohr's Postulates (1913)",
          content: "1. Electron moves in circular paths (**orbits**) with fixed energy.\n2. Energy does not change with time (Stationary States).\n3. Change in energy occurs only when moving between orbits: $\\Delta E = E_2 - E_1 = h\\nu$.\n4. **Quantization condition:** Angular momentum $mvr = n \\frac{h}{2\\pi}$."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Stationary States",
          content: "Visualizing discrete orbits.",
          interactiveCanvasId: "chem-bohr-orbit"
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "Quantization",
          content: "Angular momentum of an electron is an integral multiple of ___.",
          blankAnswer: "h/2pi"
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Lyman series lies in?", options: [{id: "A", text: "UV", isCorrect: true, explanation: "Correct"}, {id: "B", text: "IR", isCorrect: false, explanation: "Paschen/Brackett/Pfund"}]}
      ]
    },
    {
      id: "les-1-2-2-6",
      title: "Bohr's Math",
      description: "Radius and Energy Formulas",
      icon: "Calculator",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Formulas",
          content: "For Hydrogen-like species (Atomic number Z):\n\n**Radius:** $r_n = \\frac{52.9 \\cdot n^2}{Z} \\text{ pm}$\n\n**Energy:** $E_n = -2.18 \\times 10^{-18} \\left( \\frac{Z^2}{n^2} \\right) \\text{ J/atom}$"
        },
        {
          id: "core-2",
          type: "theory",
          title: "Significance of Negative Energy",
          content: "Negative sign means the electron is bound to the nucleus. Energy is lower than that of a free electron (at infinity, E=0). As n increases, E becomes less negative (increases)."
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Radius Calc",
          content: "Calculate radius of 2nd orbit of $Li^{2+}$ ($Z=3, n=2$) in pm.",
          numericAnswer: 70.5,
          numericTolerance: 0.2
        },
        {
          id: "sol-1",
          type: "solution",
          title: "Calculation Steps",
          content: "Steps for radius.",
          interactiveSteps: [
            { stepText: "Formula: $r = 52.9 \\frac{n^2}{Z}$" },
            { stepText: "Substitute: $n=2, Z=3$. $2^2 = 4$." },
            { stepText: "$52.9 \\times 4 / 3 = 70.53$ pm." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Angular momentum formula?", options: [{id: "A", text: "mvr", isCorrect: true, explanation: "Correct"}, {id: "B", text: "mv", isCorrect: false, explanation: "Linear momentum"}]}
      ]
    },
    {
      id: "les-1-2-2-7",
      title: "Hydrogen Spectrum Series",
      description: "Calculating Wavelengths",
      icon: "BarChart",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Rydberg Formula for Transitions",
          content: "Wavenumber $\\bar{\\nu} = 109677 \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right) Z^2 \\text{ cm}^{-1}$\n\nWhere $n_1$ is the lower level, $n_2$ is the higher level."
        },
        {
          id: "trap-1",
          type: "quiz",
          title: "Spot the Error",
          content: "For limiting line of Balmer series, what is $n_2$?",
          options: [
            { id: "A", text: "3", isCorrect: false, explanation: "That is the first line (H-alpha)." },
            { id: "B", text: "Infinity", isCorrect: true, explanation: "Limiting line corresponds to transition from infinity." }
          ]
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Shortest Wavelength",
          content: "Calculate the shortest wavelength (series limit) for Lyman series ($n_1=1$). Answer in nm. (Use $1/R \\approx 91.2$ nm).",
          numericAnswer: 91.2,
          numericTolerance: 1
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Energy of 1st Bohr orbit of H?", options: [{id: "A", text: "-13.6 eV", isCorrect: true, explanation: "Correct (-2.18 x 10^-18 J)."}, {id: "B", text: "-3.4 eV", isCorrect: false, explanation: "That's 2nd orbit."}]}
      ]
    }
  ]
};