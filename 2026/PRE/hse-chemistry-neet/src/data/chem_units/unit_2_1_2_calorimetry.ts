import { Unit } from '../../types';

export const UNIT_2_1_2: Unit = {
  id: "unit-2-1-2",
  title: "Calorimetry",
  description: "Measuring Energy Changes",
  color: "duo-red",
  lessons: [
    {
      id: "les-2-1-2-1",
      title: "Enthalpy (H)",
      description: "Heat at Constant Pressure",
      icon: "Flame",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Most lab reactions occur at:", options: [{id: "A", text: "Constant Pressure", isCorrect: true, explanation: "Open beakers (atm pressure)."}, {id: "B", text: "Constant Volume", isCorrect: false, explanation: "Bomb calorimeter."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Enthalpy ($H$)",
          content: "Defined as $H = U + pV$.\n- It is a **State Function**.\n- Change: $\\Delta H = q_p$ (Heat absorbed at constant pressure).\n- $\\Delta U = q_v$ (Heat absorbed at constant volume)."
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "Relation",
          content: "For solids and liquids, Delta H is approximately equal to Delta ___.",
          blankAnswer: "U"
        },
        {
          id: "ar-1",
          type: "quiz",
          title: "Assertion-Reason",
          content: "**Assertion:** $\\Delta H$ and $\\Delta U$ are not equal for gaseous reactions.\n**Reason:** Gases undergo significant volume changes ($p\\Delta V$ is not zero).",
          options: [
            { id: "A", text: "Both True, R explains A", isCorrect: true, explanation: "Correct." },
            { id: "B", text: "Both False", isCorrect: false, explanation: "Incorrect." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "w = ?", options: [{id: "A", text: "-Pext dV", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Pext dV", isCorrect: false, explanation: "Sign convention"}]}
      ]
    },
    {
      id: "les-2-1-2-2",
      title: "Relation: ΔH vs ΔU",
      description: "Gaseous Moles Effect",
      icon: "Link",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Mathematical Relation",
          content: "For gaseous reactions:\n$$ \\Delta H = \\Delta U + \\Delta n_g RT $$\n\nWhere $\\Delta n_g = n_{products}(g) - n_{reactants}(g)$."
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Calculation",
          content: "For reaction $N_2(g) + 3H_2(g) \\to 2NH_3(g)$, calculate $\\Delta n_g$.",
          numericAnswer: -2,
          numericTolerance: 0
        },
        {
          id: "sol-1",
          type: "solution",
          title: "Logic",
          content: "Products: 2 mol gas. Reactants: 1 + 3 = 4 mol gas.\n$\\Delta n_g = 2 - 4 = -2$.",
          interactiveSteps: []
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Application",
          content: "If $\\Delta n_g < 0$, which is larger?",
          options: [
            { id: "A", text: "Delta U", isCorrect: true, explanation: "H = U - term. So U > H." },
            { id: "B", text: "Delta H", isCorrect: false, explanation: "Incorrect." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Standard Enthalpy symbol?", options: [{id: "A", text: "H with minus", isCorrect: true, explanation: "Plimsoll mark"}, {id: "B", text: "H star", isCorrect: false, explanation: "No"}]}
      ]
    },
    {
      id: "les-2-1-2-3",
      title: "Heat Capacity",
      description: "Cp and Cv",
      icon: "Thermometer",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Heat Capacity (C)",
          content: "Heat required to raise temperature of substance by 1 degree.\n$q = C \\Delta T$.\n\n**Molar Heat Capacity:** For 1 mole.\n**Specific Heat:** For 1 gram.\n\nRelation for Ideal Gas:\n$$ C_p - C_v = R $$"
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Comparison",
          content: "Which is greater?",
          options: [
            { id: "A", text: "$C_p$", isCorrect: true, explanation: "Includes work of expansion." },
            { id: "B", text: "$C_v$", isCorrect: false, explanation: "Only internal energy increase." }
          ]
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Calculation",
          content: "If $C_v$ for a gas is 12.5 J/molK, find $C_p$. ($R=8.3$)",
          numericAnswer: 20.8,
          numericTolerance: 0.1
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Unit of R?", options: [{id: "A", text: "J/mol K", isCorrect: true, explanation: "Correct"}, {id: "B", text: "L atm", isCorrect: false, explanation: "Gas constant unit"}]}
      ]
    },
    {
      id: "les-2-1-2-4",
      title: "Bomb Calorimeter",
      description: "Measuring ΔU",
      icon: "Box",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Bomb Calorimeter",
          content: "Used to measure **Heat of Combustion** at constant **Volume**.\n\n- Steel vessel (Bomb) immersed in water.\n- Process is isochoric ($\Delta V = 0, w = 0$).\n- Measured heat $q_v = \Delta U$."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Apparatus",
          content: "Diagram of Bomb Calorimeter.",
          interactiveCanvasId: "thermo-calorimeter"
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "In a bomb calorimeter, the volume does not change, so no ___ is done.",
          blankAnswer: "work"
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "1st Law Eq?", options: [{id: "A", text: "dU = q + w", isCorrect: true, explanation: "Correct"}, {id: "B", text: "dH = U + PV", isCorrect: false, explanation: "Enthalpy definition"}]}
      ]
    },
    {
      id: "les-2-1-2-5",
      title: "Enthalpy of Reaction",
      description: "Exothermic vs Endothermic",
      icon: "Activity",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Reaction Enthalpy",
          content: "$\\Delta_r H = \\sum H_{products} - \\sum H_{reactants}$\n\n- **Exothermic:** $\\Delta H$ is negative (Heat released).\n- **Endothermic:** $\\Delta H$ is positive (Heat absorbed)."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Energy Profiles",
          content: "Compare Exothermic vs Endothermic graphs.",
          interactiveCanvasId: "thermo-enthalpy-plot"
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Sign Convention",
          content: "For combustion of methane, $\\Delta H$ is:",
          options: [
            { id: "A", text: "Negative", isCorrect: true, explanation: "Combustion releases heat." },
            { id: "B", text: "Positive", isCorrect: false, explanation: "Incorrect." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Extensive property?", options: [{id: "A", text: "Enthalpy", isCorrect: true, explanation: "Depends on mass"}, {id: "B", text: "Density", isCorrect: false, explanation: "Intensive"}]}
      ]
    },
    {
      id: "les-2-1-2-6",
      title: "Standard State",
      description: "Defining Reference",
      icon: "Disc",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Standard State",
          content: "The standard state of a substance is its pure form at **1 bar** pressure at a specified temperature (usually 298 K).\n\nExamples:\n- Ethanol: Liquid\n- Iron: Solid\n- Hydrogen: Gas"
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "The standard state pressure is ___ bar.",
          blankAnswer: "1"
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Reference States",
          content: "Standard enthalpy of formation for $O_2(g)$ is:",
          options: [
            { id: "A", text: "Zero", isCorrect: true, explanation: "Element in standard state." },
            { id: "B", text: "Non-zero", isCorrect: false, explanation: "Incorrect." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Cp - Cv = ?", options: [{id: "A", text: "R", isCorrect: true, explanation: "Correct"}, {id: "B", text: "0", isCorrect: false, explanation: "No"}]}
      ]
    },
    {
      id: "les-2-1-2-7",
      title: "Phase Changes",
      description: "Fusion & Vaporisation",
      icon: "Cloud",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Enthalpy of Phase Change",
          content: "Energy required for phase transition at constant T and P.\n\n1. **Fusion:** Solid $\\to$ Liquid ($\\Delta_{fus}H > 0$)\n2. **Vaporisation:** Liquid $\\to$ Gas ($\\Delta_{vap}H > 0$)\n3. **Sublimation:** Solid $\\to$ Gas ($\\Delta_{sub}H = \\Delta_{fus}H + \\Delta_{vap}H$)"
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Calculation",
          content: "If $\\Delta_{fus}H = 6$ kJ/mol and $\\Delta_{vap}H = 40$ kJ/mol, what is $\\Delta_{sub}H$?",
          numericAnswer: 46,
          numericTolerance: 0
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "q at constant volume is?", options: [{id: "A", text: "Delta U", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Delta H", isCorrect: false, explanation: "At constant P"}]}
      ]
    }
  ]
};