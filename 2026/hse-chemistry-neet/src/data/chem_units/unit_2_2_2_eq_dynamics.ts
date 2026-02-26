import { Unit } from '../../types';

export const UNIT_2_2_2: Unit = {
  id: "unit-2-2-2",
  title: "Equilibrium Dynamics",
  description: "Types & Applications",
  color: "duo-blue",
  lessons: [
    {
      id: "les-2-2-2-1",
      title: "Homogeneous Equilibria",
      description: "Kp vs Kc",
      icon: "Cloud",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Homogeneous means:", options: [{id: "A", text: "All reactants/products in same phase", isCorrect: true, explanation: "e.g., all gases."}, {id: "B", text: "Different phases", isCorrect: false, explanation: "Heterogeneous."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Relation between Kp and Kc",
          content: "For gaseous reactions, we use partial pressures.\n$$ K_p = K_c (RT)^{\\Delta n_g} $$\n\nWhere $\\Delta n_g = n_{gas}(products) - n_{gas}(reactants)$."
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Calculation",
          content: "For $N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g)$, calculate $\\Delta n_g$.",
          numericAnswer: -2,
          numericTolerance: 0
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Application",
          content: "If $\\Delta n_g = 0$ (e.g., $H_2 + I_2 \\to 2HI$), then:",
          options: [
            { id: "A", text: "$K_p = K_c$", isCorrect: true, explanation: "$(RT)^0 = 1$." },
            { id: "B", text: "$K_p > K_c$", isCorrect: false, explanation: "Incorrect." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "R value in J?", options: [{id: "A", text: "8.314", isCorrect: true, explanation: "Correct"}, {id: "B", text: "0.0821", isCorrect: false, explanation: "L atm"}]}
      ]
    },
    {
      id: "les-2-2-2-2",
      title: "Heterogeneous Equilibria",
      description: "Solids & Liquids",
      icon: "Layers",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Concentration of pure solid is:", options: [{id: "A", text: "Constant", isCorrect: true, explanation: "Density is constant."}, {id: "B", text: "Variable", isCorrect: false, explanation: "Incorrect."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Heterogeneous Rules",
          content: "For equilibria involving solids or pure liquids, their **concentrations are taken as unity (1)** because they remain constant.\n\nExample: $CaCO_3(s) \\rightleftharpoons CaO(s) + CO_2(g)$\n$K_c = [CO_2]$ (Solids ignored)."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Expression",
          content: "Correct $K_c$ for $3Fe(s) + 4H_2O(g) \\rightleftharpoons Fe_3O_4(s) + 4H_2(g)$?",
          options: [
            { id: "A", text: "$[H_2]^4 / [H_2O]^4$", isCorrect: true, explanation: "Solids Fe and Fe3O4 ignored." },
            { id: "B", text: "$[Fe_3O_4][H_2]^4 / [Fe]^3[H_2O]^4$", isCorrect: false, explanation: "Included solids incorrectly." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Can Kp be defined for liquids?", options: [{id: "A", text: "No", isCorrect: true, explanation: "Only gases have partial pressure"}, {id: "B", text: "Yes", isCorrect: false, explanation: "Incorrect"}]}
      ]
    },
    {
      id: "les-2-2-2-3",
      title: "Applications of Kc",
      description: "Extent & Direction",
      icon: "Compass",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Predicting Extent",
          content: "1. **$K_c > 10^3$:** Reaction nearly complete (Products dominate).\n2. **$K_c < 10^{-3}$:** Reaction hardly proceeds (Reactants dominate).\n3. **$10^{-3} < K_c < 10^3$:** Appreciable amounts of both."
        },
        {
          id: "core-2",
          type: "theory",
          title: "Predicting Direction (Reaction Quotient Q)",
          content: "$Q_c$ is calculated like $K_c$ but at **any time** $t$ (not necessarily equilibrium).\n\n- $Q_c < K_c$: Reactants $\\to$ Products (Forward).\n- $Q_c > K_c$: Products $\\to$ Reactants (Reverse).\n- $Q_c = K_c$: Equilibrium."
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Direction Check",
          content: "$K_c = 10$. At a moment, $Q_c = 2$. Which way does reaction go? (Enter 1 for Forward, -1 for Reverse).",
          numericAnswer: 1,
          numericTolerance: 0
        },
        {
          id: "sol-1",
          type: "solution",
          title: "Reasoning",
          content: "$Q_c (2) < K_c (10)$. To reach 10, numerator (Products) must increase.",
          interactiveSteps: []
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "K value depends on?", options: [{id: "A", text: "Temperature", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Pressure", isCorrect: false, explanation: "Does not change K, shifts eq."}]}
      ]
    }
  ]
};