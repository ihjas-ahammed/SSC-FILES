import { Unit } from '../../types';

export const UNIT_2_2_1: Unit = {
  id: "unit-2-2-1",
  title: "Chemical Equilibrium",
  description: "Physical & Chemical Systems",
  color: "duo-blue",
  lessons: [
    {
      id: "les-2-2-1-1",
      title: "Physical Equilibrium",
      description: "Phase Transformations",
      icon: "RefreshCw",
      slides: [
        { id: "init-1", type: "quiz", title: "Conceptual Check", content: "In a closed vessel at constant temperature, liquid water is in equilibrium with its vapour. This means:", options: [{id: "A", text: "Evaporation stops", isCorrect: false, explanation: "Processes continue dynamically."}, {id: "B", text: "Rate of evaporation = Rate of condensation", isCorrect: true, explanation: "Dynamic equilibrium."}] },
        { id: "init-2", type: "quiz", title: "Conceptual Check", content: "The temperature at which solid and liquid phases are in equilibrium at 1 atm is called:", options: [{id: "A", text: "Normal Boiling Point", isCorrect: false, explanation: "Liquid-Gas."}, {id: "B", text: "Normal Melting Point", isCorrect: true, explanation: "Solid-Liquid."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Equilibrium in Physical Processes",
          content: "Equilibrium is a state where measurable properties (like pressure, concentration) of a system remain constant.\n\n**Characteristics:**\n1. Possible only in a **closed system**.\n2. It is **dynamic** (opposing processes occur at equal rates).\n3. **Examples:**\n- Solid $\\rightleftharpoons$ Liquid (Melting point)\n- Liquid $\\rightleftharpoons$ Vapour (Vapour pressure constant)\n- Solid $\\rightleftharpoons$ Vapour (Sublimation)"
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Dynamic Equilibrium",
          content: "Visualizing Rate(Evap) = Rate(Cond) in a closed container.",
          interactiveCanvasId: "eq-dynamic-water"
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "At equilibrium, the rate of the forward reaction is ___ to the rate of the backward reaction.",
          blankAnswer: "equal"
        },
        {
          id: "ar-1",
          type: "quiz",
          title: "Assertion-Reason",
          content: "**Assertion:** In a closed vessel, the amount of ice and water remains constant at 0°C.\n**Reason:** The equilibrium is static in nature.",
          options: [
            { id: "A", text: "Assertion True, Reason False", isCorrect: true, explanation: "Equilibrium is dynamic (exchange continues)." },
            { id: "B", text: "Both True", isCorrect: false, explanation: "Static is incorrect." }
          ]
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Henry's Law",
          content: "For gas dissolved in liquid ($CO_2$ in soda), mass of gas dissolved is proportional to:",
          options: [
            { id: "A", text: "Pressure of gas above solvent", isCorrect: true, explanation: "Henry's Law." },
            { id: "B", text: "Temperature of solvent", isCorrect: false, explanation: "Solubility decreases with Temp." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Is evaporation a surface phenomenon?", options: [{id: "A", text: "Yes", isCorrect: true, explanation: "Correct"}, {id: "B", text: "No", isCorrect: false, explanation: "Boiling is bulk"}]}
      ]
    },
    {
      id: "les-2-2-1-2",
      title: "Chemical Equilibrium",
      description: "Dynamic Nature & Law",
      icon: "Activity",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Chemical equilibrium can be attained from:", options: [{id: "A", text: "Reactants side only", isCorrect: false, explanation: "Either side."}, {id: "B", text: "Either Reactants or Products", isCorrect: true, explanation: "Equilibrium is unique."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Chemical Equilibrium",
          content: "Reversible reactions reach a state where concentrations of reactants and products become constant.\n\n**Example (Haber Process):**\n$N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g)$\n\nAt equilibrium, the mixture contains constant amounts of $N_2, H_2, NH_3$, but the reaction has not stopped (**Dynamic**)."
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "Chemical equilibrium is ___ in nature.",
          blankAnswer: "dynamic"
        },
        {
          id: "ar-1",
          type: "quiz",
          title: "Assertion-Reason",
          content: "**Assertion:** Use of isotope (Deuterium) in Haber process proves dynamic nature.\n**Reason:** Scrambling of H and D atoms occurs in the molecules.",
          options: [
            { id: "A", text: "Both True, R explains A", isCorrect: true, explanation: "Formation of ND3, NH2D etc. shows continuous reaction." },
            { id: "B", text: "Both False", isCorrect: false, explanation: "Incorrect." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Exothermic reaction means?", options: [{id: "A", text: "Heat released", isCorrect: true, explanation: "Negative H"}, {id: "B", text: "Heat absorbed", isCorrect: false, explanation: "Endothermic"}]}
      ]
    },
    {
      id: "les-2-2-1-3",
      title: "Equilibrium Constant (Kc)",
      description: "Law of Mass Action",
      icon: "Scale",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "The equilibrium constant expression depends on:", options: [{id: "A", text: "Stoichiometry of balanced equation", isCorrect: true, explanation: "Coefficients become powers."}, {id: "B", text: "Initial concentrations", isCorrect: false, explanation: "K is independent of initial conc."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Law of Chemical Equilibrium",
          content: "At constant T, the rate of chemical reaction is proportional to the product of active masses of reactants.\n\nFor $aA + bB \\rightleftharpoons cC + dD$:\n$$ K_c = \\frac{[C]^c [D]^d}{[A]^a [B]^b} $$\n\n$K_c$ is the Equilibrium Constant in terms of concentrations."
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Calculation",
          content: "For $PCl_5 \\rightleftharpoons PCl_3 + Cl_2$. At eq, $[PCl_5]=1.41, [PCl_3]=1.59, [Cl_2]=1.59$ M. Calculate $K_c$.",
          numericAnswer: 1.79,
          numericTolerance: 0.05
        },
        {
          id: "sol-1",
          type: "solution",
          title: "Steps",
          content: "Calculation",
          interactiveSteps: [
            {stepText: "$K_c = ([PCl_3][Cl_2]) / [PCl_5]$"},
            {stepText: "$K_c = (1.59 \\times 1.59) / 1.41$"},
            {stepText: "$K_c = 2.528 / 1.41 = 1.79$"}
          ]
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Relation",
          content: "If reaction is reversed, new $K'_c$ is:",
          options: [
            { id: "A", text: "$1/K_c$", isCorrect: true, explanation: "Reciprocal." },
            { id: "B", text: "$-K_c$", isCorrect: false, explanation: "No." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Does K change with concentration?", options: [{id: "A", text: "No", isCorrect: true, explanation: "Only with Temp"}, {id: "B", text: "Yes", isCorrect: false, explanation: "Incorrect"}]}
      ]
    }
  ]
};