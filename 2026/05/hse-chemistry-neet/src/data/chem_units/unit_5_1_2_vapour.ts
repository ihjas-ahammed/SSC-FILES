import { Unit } from '../../types';

export const UNIT_5_1_2: Unit = {
  id: "unit-5-1-2",
  title: "Vapour Pressure & Ideality",
  description: "Raoult's Law & Deviations",
  color: "duo-maroon",
  lessons: [
    {
      id: "les-5-1-2-1",
      title: "Liquid-Liquid Solutions",
      description: "Raoult's Law",
      icon: "Cloud",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Vapour pressure of a volatile component is proportional to:", options: [{id: "A", text: "Mole fraction in solution", isCorrect: true, explanation: "Raoult's Law."}, {id: "B", text: "Total mass", isCorrect: false, explanation: "Mole fraction."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Raoult's Law",
          content: "For a solution of volatile liquids, the partial vapour pressure of each component is directly proportional to its mole fraction present in the solution.\n\n$$ p_1 = p_1^0 x_1 $$\n$$ p_2 = p_2^0 x_2 $$\n\n$p_{total} = p_1 + p_2$"
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Raoult's Plot",
          content: "Linear relationship for ideal solution.",
          interactiveCanvasId: "sol-raoult-graph"
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "According to Dalton's law of partial pressures, the total pressure over the solution phase is the ___ of the partial pressures of the components.",
          blankAnswer: "sum"
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Graph Interpretation",
          content: "In the p vs x plot, the total pressure line connects:",
          options: [
            { id: "A", text: "$p_1^0$ and $p_2^0$", isCorrect: true, explanation: "Line III in NCERT Fig 1.3." },
            { id: "B", text: "Origin and $p_1^0$", isCorrect: false, explanation: "That's p1 line." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "KH unit?", options: [{id: "A", text: "Pressure (bar/atm)", isCorrect: true, explanation: "p = KH * x"}, {id: "B", text: "Concentration", isCorrect: false, explanation: "No"}]}
      ]
    },
    {
      id: "les-5-1-2-2",
      title: "Vapour Composition",
      description: "Dalton's Law Application",
      icon: "ArrowUp",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Mole fraction in vapour phase is denoted by:", options: [{id: "A", text: "y", isCorrect: true, explanation: "Standard notation."}, {id: "B", text: "x", isCorrect: false, explanation: "Solution phase."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Vapour Composition",
          content: "Using Dalton's Law:\n$$ p_i = y_i p_{total} $$\n$$ y_i = p_i / p_{total} $$\n\n**Key Insight:** The vapour phase is always richer in the component which is **more volatile**."
        },
        {
          id: "sol-1",
          type: "solution",
          title: "Calculation",
          content: "If $p_1 = 100$, $p_2 = 300$. Find $y_2$.",
          interactiveSteps: [
            { stepText: "$p_{total} = 100 + 300 = 400$." },
            { stepText: "$y_2 = 300 / 400 = 0.75$." }
          ]
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Check",
          content: "If Component A is more volatile than B, then in vapour:",
          options: [
            { id: "A", text: "$y_A > x_A$", isCorrect: true, explanation: "Enriched in volatile component." },
            { id: "B", text: "$y_A < x_A$", isCorrect: false, explanation: "Incorrect." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Is Henry's Law related to Raoult's?", options: [{id: "A", text: "Yes, special case", isCorrect: true, explanation: "Correct"}, {id: "B", text: "No relation", isCorrect: false, explanation: "Incorrect"}]}
      ]
    },
    {
      id: "les-5-1-2-3",
      title: "Solid in Liquid",
      description: "Vapour Pressure Lowering",
      icon: "ArrowDown",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Does a non-volatile solute exert vapour pressure?", options: [{id: "A", text: "No", isCorrect: true, explanation: "Only solvent contributes."}, {id: "B", text: "Yes", isCorrect: false, explanation: "It is non-volatile."}] },
        {
          id: "core-1",
          type: "theory",
          title: "VP Lowering",
          content: "Addition of non-volatile solute lowers the vapour pressure of the solvent.\n**Reason:** Surface area occupied by solute particles $\\rightarrow$ Less solvent molecules escape.\n\nFor non-volatile solute (2):\n$$ p_{total} = p_1 = p_1^0 x_1 $$\n$$ p_1 = p_1^0 (1 - x_2) $$"
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "Decrease in vapour pressure depends on the ___ of non-volatile solute present, irrespective of its nature.",
          blankAnswer: "quantity"
        },
        {
          id: "ar-1",
          type: "quiz",
          title: "Assertion-Reason",
          content: "**Assertion:** Vapor pressure of 1M sugar solution is higher than 1M urea solution.\n**Reason:** Lowering of VP depends only on number of particles.",
          options: [
            { id: "A", text: "Assertion False", isCorrect: true, explanation: "Both 1M non-electrolytes -> Same lowering -> Same VP." },
            { id: "B", text: "Both True", isCorrect: false, explanation: "Assertion is wrong." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Sum of mole fractions?", options: [{id: "A", text: "1", isCorrect: true, explanation: "Correct"}, {id: "B", text: "0", isCorrect: false, explanation: "No"}]}
      ]
    },
    {
      id: "les-5-1-2-4",
      title: "Ideal Solutions",
      description: "Characteristics",
      icon: "CheckCircle",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "In ideal solution, interactions A-B are:", options: [{id: "A", text: "Same as A-A and B-B", isCorrect: true, explanation: "Definition."}, {id: "B", text: "Different", isCorrect: false, explanation: "Non-ideal."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Ideal Solutions",
          content: "Obey Raoult's Law over entire range.\n**Conditions:**\n1. $\\Delta_{mix} H = 0$ (No heat change).\n2. $\\Delta_{mix} V = 0$ (Vol = Sum of vols).\n3. Interactions: A-A $\\approx$ B-B $\\approx$ A-B.\n\n**Examples:** n-Hexane + n-Heptane, Benzene + Toluene."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Ideal Graph",
          content: "Straight lines for Partial and Total pressure.",
          interactiveCanvasId: "sol-raoult-graph"
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Check",
          content: "Bromoethane and Chloroethane form:",
          options: [
            { id: "A", text: "Ideal Solution", isCorrect: true, explanation: "Similar structure/polarity." },
            { id: "B", text: "Non-ideal Solution", isCorrect: false, explanation: "Incorrect." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Raoult's Law becomes special case of Henry's Law when:", options: [{id: "A", text: "KH = p0", isCorrect: true, explanation: "Correct"}, {id: "B", text: "KH = 1", isCorrect: false, explanation: "No"}]}
      ]
    },
    {
      id: "les-5-1-2-5",
      title: "Non-Ideal: Positive Deviation",
      description: "Weak Interactions",
      icon: "TrendingUp",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Positive deviation means vapour pressure is:", options: [{id: "A", text: "Higher than expected", isCorrect: true, explanation: "Positive."}, {id: "B", text: "Lower than expected", isCorrect: false, explanation: "Negative."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Positive Deviation",
          content: "Raoult's Law: $p > p_{ideal}$.\n**Cause:** A-B interactions are **WEAKER** than A-A or B-B.\nMolecules escape easily.\n\n**Thermo:** $\\Delta H_{mix} > 0$ (Endo), $\\Delta V_{mix} > 0$ (Expansion).\n**Example:** Ethanol + Acetone (H-bonds broken), Ethanol + Water."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Positive Deviation",
          content: "Graph curves upwards. Maxima possible.",
          interactiveCanvasId: "sol-azeotrope-pos"
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "In pure ethanol, molecules are hydrogen bonded. On adding acetone, these bonds are ___.",
          blankAnswer: "broken"
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Azeotrope",
          content: "Positive deviation leads to:",
          options: [
            { id: "A", text: "Minimum Boiling Azeotrope", isCorrect: true, explanation: "High VP -> Low BP." },
            { id: "B", text: "Maximum Boiling Azeotrope", isCorrect: false, explanation: "That's negative deviation." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Benzene + Toluene?", options: [{id: "A", text: "Ideal", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Non-ideal", isCorrect: false, explanation: "No"}]}
      ]
    },
    {
      id: "les-5-1-2-6",
      title: "Non-Ideal: Negative Deviation",
      description: "Strong Interactions",
      icon: "TrendingDown",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Negative deviation implies interactions are:", options: [{id: "A", text: "Stronger than pure", isCorrect: true, explanation: "Harder to escape."}, {id: "B", text: "Weaker", isCorrect: false, explanation: "Positive deviation."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Negative Deviation",
          content: "Raoult's Law: $p < p_{ideal}$.\n**Cause:** A-B interactions are **STRONGER** than A-A or B-B.\n\n**Thermo:** $\\Delta H_{mix} < 0$ (Exo), $\\Delta V_{mix} < 0$ (Contraction).\n**Example:** Phenol + Aniline (H-bond between N and OH), Chloroform + Acetone (H-bond)."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Negative Deviation",
          content: "Graph curves downwards. Minima possible.",
          interactiveCanvasId: "sol-azeotrope-neg"
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Example",
          content: "Mixture of Nitric Acid and Water shows:",
          options: [
            { id: "A", text: "Negative Deviation", isCorrect: true, explanation: "Forms max boiling azeotrope." },
            { id: "B", text: "Positive Deviation", isCorrect: false, explanation: "Incorrect." }
          ]
        },
        {
          id: "pyq-1",
          type: "quiz",
          title: "NEET PYQ",
          content: "Which mixture shows negative deviation?",
          options: [
            { id: "A", text: "Chloroform + Acetone", isCorrect: true, explanation: "New H-bonds formed." },
            { id: "B", text: "Ethanol + Acetone", isCorrect: false, explanation: "Positive." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Delta H for ideal solution?", options: [{id: "A", text: "Zero", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Positive", isCorrect: false, explanation: "Non-ideal"}]}
      ]
    }
  ]
};