import { Unit } from '../../types';

export const UNIT_5_2_2: Unit = {
  id: "unit-5-2-2",
  title: "Conductance & Electrolysis",
  description: "Ions in Motion",
  color: "duo-blue",
  lessons: [
    {
      id: "les-5-2-2-1",
      title: "Conductance Terms",
      description: "R, G, Kappa",
      icon: "Activity",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Inverse of Resistance (R) is:", options: [{id: "A", text: "Conductance (G)", isCorrect: true, explanation: "Correct."}, {id: "B", text: "Resistivity", isCorrect: false, explanation: "That's rho."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Definitions",
          content: "**Resistance ($R$):** Obstruction to flow. $\\Omega$. $R = \\rho l/A$.\n**Resistivity ($\\rho$):** Resistance of 1m length, $1m^2$ area. $\\Omega m$.\n**Conductance ($G$):** $1/R$. Siemens ($S$).\n**Conductivity ($\\kappa$):** $1/\\rho$. $S m^{-1}$ or $S cm^{-1}$.\n$\\kappa = G \\times (l/A)$."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Conductivity Cell",
          content: "Visualizing electrodes and Cell Constant G*.",
          interactiveCanvasId: "electro-conductivity-cell"
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "The quantity l/A is called ___ constant denoted by G*.",
          blankAnswer: "cell"
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Cell Constant",
          content: "If $R=100 \\Omega$ and $\\kappa=1.29 S/m$, find cell constant $G^*$ ($m^{-1}$).",
          numericAnswer: 129,
          numericTolerance: 0.1
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "SI unit of length?", options: [{id: "A", text: "Metre", isCorrect: true, explanation: "Correct"}, {id: "B", text: "cm", isCorrect: false, explanation: "CGS"}]}
      ]
    },
    {
      id: "les-5-2-2-2",
      title: "Molar Conductivity",
      description: "Lambda_m",
      icon: "TrendingUp",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Conductivity of a solution depends on:", options: [{id: "A", text: "Number of ions", isCorrect: true, explanation: "Charge carriers."}, {id: "B", text: "Only solvent", isCorrect: false, explanation: "Solute matters."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Molar Conductivity ($\\Lambda_m$)",
          content: "Conducting power of all ions produced by **1 mole** of electrolyte.\n\n$$ \\Lambda_m = \\frac{\\kappa}{c} $$\n\nUnits: If $\\kappa$ in $S cm^{-1}$ and $c$ in $mol L^{-1}$:\n$$ \\Lambda_m (S cm^2 mol^{-1}) = \\frac{\\kappa \\times 1000}{Molarity} $$"
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Calc Lambda",
          content: "$\\kappa = 0.0248 S cm^{-1}$, $C = 0.20 M$. Calculate $\\Lambda_m$ in $S cm^2 mol^{-1}$.",
          numericAnswer: 124,
          numericTolerance: 1
        },
        {
          id: "sol-1",
          type: "solution",
          title: "Steps",
          content: "Calc",
          interactiveSteps: [
            { stepText: "$\\Lambda_m = (0.0248 \\times 1000) / 0.20$" },
            { stepText: "$= 24.8 / 0.2 = 124$." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Molarity unit?", options: [{id: "A", text: "mol/L", isCorrect: true, explanation: "Correct"}, {id: "B", text: "mol/kg", isCorrect: false, explanation: "Molality"}]}
      ]
    },
    {
      id: "les-5-2-2-3",
      title: "Variation with Concentration",
      description: "Strong vs Weak",
      icon: "GitBranch",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Variation of Conductance",
          content: "1. **Conductivity ($\\kappa$):** Decreases with dilution (Less ions per unit volume).\n2. **Molar Conductivity ($\\Lambda_m$):** Increases with dilution (Volume increases significantly, interionic attraction decreases).\n\n**Strong Electrolytes:** Linear increase (Debye-Huckel Onsager eq).\n**Weak Electrolytes:** Steep increase at infinite dilution (Ostwald dilution)."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Graphs",
          content: "Plot of Lambda vs Root C.",
          interactiveCanvasId: "electro-molar-conductivity-graph"
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Check",
          content: "Upon dilution, conductivity (kappa) will:",
          options: [
            { id: "A", text: "Decrease", isCorrect: true, explanation: "Number of ions per mL decreases." },
            { id: "B", text: "Increase", isCorrect: false, explanation: "Molar conductivity increases." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Weak electrolyte example?", options: [{id: "A", text: "Acetic Acid", isCorrect: true, explanation: "Partial dissociation"}, {id: "B", text: "NaCl", isCorrect: false, explanation: "Strong"}]}
      ]
    },
    {
      id: "les-5-2-2-4",
      title: "Kohlrausch Law",
      description: "Limiting Molar Conductivity",
      icon: "Plus",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Kohlrausch Law",
          content: "Limiting molar conductivity of an electrolyte ($\\Lambda_m^0$) is the sum of the individual contributions of the anion and cation.\n\n$$ \\Lambda_m^0 = \\nu_+ \\lambda_+^0 + \\nu_- \\lambda_-^0 $$\n\nAllows calculation of $\\Lambda_m^0$ for weak electrolytes (e.g., $CH_3COOH$) using strong ones ($CH_3COONa, HCl, NaCl$)."
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Calculation",
          content: "Given $\\lambda^0(Na^+) = 50, \\lambda^0(Cl^-) = 76$. Find $\\Lambda_m^0(NaCl)$.",
          numericAnswer: 126,
          numericTolerance: 0
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Degree of Dissociation",
          content: "For weak electrolyte, $\\alpha = $?",
          options: [
            { id: "A", text: "$\\Lambda_m / \\Lambda_m^0$", isCorrect: true, explanation: "Ratio of conductivity." },
            { id: "B", text: "$\\Lambda_m^0 / \\Lambda_m$", isCorrect: false, explanation: "Incorrect." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Ionic bond?", options: [{id: "A", text: "Transfer of e-", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Sharing", isCorrect: false, explanation: "Covalent"}]}
      ]
    },
    {
      id: "les-5-2-2-5",
      title: "Electrolysis",
      description: "Faraday's Laws",
      icon: "Zap",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Faraday's Laws",
          content: "**First Law:** Mass deposited ($w$) is proportional to charge passed ($Q$).\n$w = ZQ = ZIt$.\n\n**Second Law:** For same charge, mass proportional to Equivalent Weight ($E$).\n$w_1/w_2 = E_1/E_2$."
        },
        {
          id: "core-2",
          type: "theory",
          title: "Charge & Moles",
          content: "Charge on 1 mole electrons = 1 Faraday (F) $\\approx 96500$ C.\n\nReaction: $M^{n+} + ne^- \\to M$.\n$n$ moles of electrons (nF charge) deposit 1 mole of M."
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Calculation",
          content: "Charge required to reduce 1 mol $Al^{3+}$ to Al? (n=3). Answer in Coulombs. $3 \\times 96500$.",
          numericAnswer: 289500,
          numericTolerance: 100
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Charge of electron?", options: [{id: "A", text: "1.6e-19 C", isCorrect: true, explanation: "Correct"}, {id: "B", text: "9.1e-31 kg", isCorrect: false, explanation: "Mass"}]}
      ]
    },
    {
      id: "les-5-2-2-6",
      title: "Products of Electrolysis",
      description: "Preferential Discharge",
      icon: "Filter",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Rules for Discharge",
          content: "Depends on electrode potential and overpotential.\n\n**Molten NaCl:** Cathode: Na, Anode: $Cl_2$.\n**Aqueous NaCl:**\n- Cathode: $H_2$ (Preferred over Na due to lower reduction potential of water... wait, actually high reduction potential of water vs Na+? $E^0(H_2O) > E^0(Na^+)$).\n- Anode: $Cl_2$ (Preferred over $O_2$ due to **Overpotential** of oxygen)."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Predict Product",
          content: "Electrolysis of dilute H2SO4 with Pt electrodes. Anode product?",
          options: [
            { id: "A", text: "Oxygen", isCorrect: true, explanation: "Water oxidized." },
            { id: "B", text: "Hydrogen", isCorrect: false, explanation: "Cathode product." }
          ]
        },
        {
          id: "pyq-1",
          type: "quiz",
          title: "NEET PYQ",
          content: "During electrolysis of molten sodium hydride, hydrogen is liberated at:",
          options: [
            { id: "A", text: "Anode", isCorrect: true, explanation: "$H^-$ ions oxidized to $H_2$." },
            { id: "B", text: "Cathode", isCorrect: false, explanation: "Usually H+ goes to cathode, but here H- exists." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Chlorine gas color?", options: [{id: "A", text: "Greenish Yellow", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Red", isCorrect: false, explanation: "Bromine"}]}
      ]
    },
    {
      id: "les-5-2-2-7",
      title: "Numerical Practice",
      description: "Drill",
      icon: "Calculator",
      slides: [
        {
          id: "num-1",
          type: "numerical",
          title: "Mass Deposited",
          content: "Current 1.5A for 10 min. Mass of Cu ($M=63.5$) from $CuSO_4$ ($n=2$)?",
          numericAnswer: 0.296,
          numericTolerance: 0.01
        },
        {
          id: "sol-1",
          type: "solution",
          title: "Steps",
          content: "$w = ZIt$",
          interactiveSteps: [
            { stepText: "$Q = 1.5 \\times 600 = 900$ C." },
            { stepText: "Moles e- = $900/96500$." },
            { stepText: "Moles Cu = Moles e- / 2." },
            { stepText: "Mass = Moles Cu $\\times$ 63.5 = 0.296 g." }
          ]
        }
      ]
    }
  ]
};