import { Unit } from '../../types';

export const UNIT_5_3_2: Unit = {
  id: "unit-5-3-2",
  title: "Temp & Collisions",
  description: "Mechanism of Reaction",
  color: "duo-red",
  lessons: [
    {
      id: "les-5-3-2-1",
      title: "Temperature Dependence",
      description: "10 Degree Rule",
      icon: "Thermometer",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Rate of reaction generally ___ with temperature.", options: [{id: "A", text: "Increases", isCorrect: true, explanation: "More collisions."}, {id: "B", text: "Decreases", isCorrect: false, explanation: "Incorrect."}] },
        {
          id: "anc-1",
          type: "theory",
          title: "Effect of Temperature",
          content: "For a chemical reaction, rate constant nearly **doubles** for every $10^\\circ$ rise in temperature.\n\n**Temperature Coefficient:**\n$$ \\frac{k_{T+10}}{k_T} \\approx 2 \\text{ to } 3 $$"
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Energy Profile",
          content: "Visualizing Activation Energy barrier.",
          interactiveCanvasId: "kinetics-energy-profile"
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Factor Increase",
          content: "If rate doubles every 10K, how many times does rate increase from 300K to 330K? (Delta T = 30, so 3 steps).",
          numericAnswer: 8,
          numericTolerance: 0
        },
        {
          id: "sol-1",
          type: "solution",
          title: "Calculation",
          content: "$2^{(T_2-T_1)/10}$",
          interactiveSteps: [
            { stepText: "Step count = 30/10 = 3." },
            { stepText: "$2^3 = 8$ times." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Can zero order reaction have half life?", options: [{id: "A", text: "Yes", isCorrect: true, explanation: "R0/2k"}, {id: "B", text: "No", isCorrect: false, explanation: "All orders do"}]}
      ]
    },
    {
      id: "les-5-3-2-2",
      title: "Arrhenius Equation",
      description: "Rate Constant and T",
      icon: "Activity",
      slides: [
        {
          id: "anc-1",
          type: "theory",
          title: "Arrhenius Equation",
          content: "Accurate dependence of $k$ on $T$.\n\n$$ k = A e^{-E_a/RT} $$\n\n- $A$: Arrhenius Factor / Frequency Factor (Collisions).\n- $E_a$: Activation Energy (J/mol).\n- $R$: Gas Constant.\n- $e^{-E_a/RT}$: Fraction of molecules with energy $\\ge E_a$."
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "The energy required to form the intermediate, called activated complex, is known as ___ energy.",
          blankAnswer: "activation"
        },
        {
          id: "ar-1",
          type: "quiz",
          title: "Assertion-Reason",
          content: "**Assertion:** Reaction rate increases with temperature.\n**Reason:** The fraction of molecules having energy greater than $E_a$ increases.",
          options: [
            { id: "A", text: "Both True, R explains A", isCorrect: true, explanation: "Main reason for exponential increase." },
            { id: "B", text: "A True, R False", isCorrect: false, explanation: "Incorrect." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Unit of A?", options: [{id: "A", text: "Same as k", isCorrect: true, explanation: "Exponential is unitless"}, {id: "B", text: "J/mol", isCorrect: false, explanation: "Ea unit"}]}
      ]
    },
    {
      id: "les-5-3-2-3",
      title: "Boltzmann Distribution",
      description: "Energy Spread",
      icon: "BarChart",
      slides: [
        {
          id: "anc-1",
          type: "theory",
          title: "Maxwell-Boltzmann Distribution",
          content: "Plot of Fraction of molecules ($N_E/N_T$) vs Kinetic Energy.\n- Peak: Most Probable Kinetic Energy.\n- As T increases, curve shifts right and flattens.\n- Area under curve beyond $E_a$ increases significantly."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "T Effect on Distribution",
          content: "Curve shifting right with T, showing area > Ea doubling.",
          interactiveCanvasId: "kinetics-energy-profile" // Reusing placeholder
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Check",
          content: "With increase in temperature, the peak of the curve shifts to:",
          options: [
            { id: "A", text: "Higher energy", isCorrect: true, explanation: "Correct." },
            { id: "B", text: "Lower energy", isCorrect: false, explanation: "Incorrect." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Value of R in Joules?", options: [{id: "A", text: "8.314", isCorrect: true, explanation: "Correct"}, {id: "B", text: "0.0821", isCorrect: false, explanation: "L atm"}]}
      ]
    },
    {
      id: "les-5-3-2-4",
      title: "Calculating Activation Energy",
      description: "Logarithmic Form",
      icon: "Calculator",
      slides: [
        {
          id: "anc-1",
          type: "theory",
          title: "Logarithmic Equation",
          content: "Taking ln of Arrhenius Eq:\n$$ \\ln k = -\\frac{E_a}{RT} + \\ln A $$\n\nTwo Point Form:\n$$ \\log \\frac{k_2}{k_1} = \\frac{E_a}{2.303 R} \\left( \\frac{T_2 - T_1}{T_1 T_2} \\right) $$"
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Arrhenius Plot",
          content: "Graph of ln k vs 1/T. Slope = -Ea/R.",
          interactiveCanvasId: "kinetics-arrhenius-plot"
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Graph Check",
          content: "Slope of $\\log k$ vs $1/T$ plot is:",
          options: [
            { id: "A", text: "$-E_a / 2.303 R$", isCorrect: true, explanation: "For log base 10." },
            { id: "B", text: "$-E_a / R$", isCorrect: false, explanation: "For ln base e." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Is ln A the intercept?", options: [{id: "A", text: "Yes", isCorrect: true, explanation: "Correct"}, {id: "B", text: "No", isCorrect: false, explanation: "Incorrect"}]}
      ]
    },
    {
      id: "les-5-3-2-5",
      title: "Catalysis",
      description: "Lowering Ea",
      icon: "Zap",
      slides: [
        {
          id: "anc-1",
          type: "theory",
          title: "Effect of Catalyst",
          content: "Substance that increases rate without being consumed.\n- Provides alternate pathway with **Lower Activation Energy**.\n- Does NOT change $\\Delta G$ or Equilibrium Constant ($K$).\n- Helps attain equilibrium faster."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Catalyst Path",
          content: "Lower Ea hump for catalyzed reaction.",
          interactiveCanvasId: "kinetics-energy-profile"
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "A catalyst does not alter ___ energy of a reaction.",
          blankAnswer: "gibbs"
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Equilibrium",
          content: "Does a catalyst change the yield of products?",
          options: [
            { id: "A", text: "No", isCorrect: true, explanation: "K is constant. Only speed changes." },
            { id: "B", text: "Yes", isCorrect: false, explanation: "Incorrect." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Is Catalyst consumed?", options: [{id: "A", text: "No", isCorrect: true, explanation: "Regenerated"}, {id: "B", text: "Yes", isCorrect: false, explanation: "That's reactant"}]}
      ]
    },
    {
      id: "les-5-3-2-6",
      title: "Collision Theory",
      description: "Z and P Factors",
      icon: "GitMerge",
      slides: [
        {
          id: "anc-1",
          type: "theory",
          title: "Collision Theory",
          content: "Reaction occurs when molecules collide.\n$$ \\text{Rate} = P Z_{AB} e^{-E_a/RT} $$\n- $Z_{AB}$: Collision Frequency (collisions per second per unit volume).\n- $P$: Steric Factor (Probability factor). Accounts for **Proper Orientation**.\n\nCriteria for Effective Collision: Sufficient Energy ($E \\ge E_a$) AND Proper Orientation."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Orientation",
          content: "Effective vs Ineffective collision orientation.",
          interactiveCanvasId: "kinetics-collision-orientation"
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "To account for effective collisions, another factor P, called ___ factor is introduced.",
          blankAnswer: "steric"
        },
        {
          id: "pyq-1",
          type: "quiz",
          title: "NEET PYQ",
          content: "Threshold energy is equal to:",
          options: [
            { id: "A", text: "Activation Energy + Energy possessed by reactants", isCorrect: true, explanation: "Total energy required." },
            { id: "B", text: "Activation Energy", isCorrect: false, explanation: "Just the barrier height." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Order of reaction depends on?", options: [{id: "A", text: "Experiment", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Coefficients", isCorrect: false, explanation: "Elementary only"}]}
      ]
    }
  ]
};