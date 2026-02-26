import { Unit } from '../../types';

export const UNIT_1_1_6: Unit = {
  id: "unit-1-1-6",
  title: "Stoichiometry",
  description: "Calculations & Reactions",
  color: "duo-orange",
  lessons: [
    {
      id: "les-1-1-6-1",
      title: "Percentage Composition",
      description: "Mass percent of elements",
      icon: "PieChart",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Mass Percentage",
          content: "Mass % of an element in a compound:\n\n$$\\text{Mass \\%} = \\frac{\\text{Mass of element in 1 mol compound}}{\\text{Molar mass of compound}} \\times 100$$"
        },
        {
          id: "ex-1",
          type: "solution",
          title: "Interactive Solution",
          content: "Find Mass % of Hydrogen in Ethanol ($C_2H_5OH$).\nMolar Mass = 46.068 g.",
          interactiveSteps: [
            { stepText: "Step 1: Identify H atoms.\nFormula is $C_2H_6O$ (total 6 H)." },
            { stepText: "Step 2: Total Mass of H.\n$6 \\times 1.008 = 6.048$ g" },
            { stepText: "Step 3: Calculate %.\n$(6.048 / 46.068) \\times 100 = 13.13\\%$" }
          ]
        },
        { id: "ret-1", type: "fill_in_blank", title: "Check", content: "Mass % helps in checking the ___ of a given sample.", blankAnswer: "purity" },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Molar mass unit?", options: [{id: "A", text: "g/mol", isCorrect: true, explanation: "Correct"}, {id: "B", text: "amu", isCorrect: false, explanation: "That's atomic mass"}]}
      ]
    },
    {
      id: "les-1-1-6-2",
      title: "Empirical & Molecular Formula",
      description: "From Data to Formula",
      icon: "FlaskConical",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Definitions",
          content: "**Empirical Formula:** Simplest whole number ratio of atoms (e.g., $CH$).\n**Molecular Formula:** Exact number of atoms (e.g., $C_6H_6$).\n\nRelation: Molecular Formula = $n \\times$ Empirical Formula"
        },
        {
          id: "sol-1",
          type: "solution",
          title: "Determining Formula",
          content: "A compound has 4.07% H, 24.27% C, 71.65% Cl. Molar mass = 98.96 g. Find Empirical Formula.",
          interactiveSteps: [
            { stepText: "Step 1: Assume 100g sample.\nH=4.07g, C=24.27g, Cl=71.65g" },
            { stepText: "Step 2: Convert to Moles.\nH=4.04, C=2.02, Cl=2.02" },
            { stepText: "Step 3: Divide by smallest (2.02).\nH=2, C=1, Cl=1" },
            { stepText: "Step 4: Ratio C:H:Cl is 1:2:1.\nEmpirical Formula = $CH_2Cl$" }
          ]
        },
        {
          id: "pyq-1",
          type: "numerical",
          title: "Find n",
          content: "Empirical mass ($CH_2Cl$) = 49.48 g. Molar mass = 98.96 g. What is n?",
          numericAnswer: 2,
          numericTolerance: 0.1
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Mass % of H in water?", options: [{id: "A", text: "11.1%", isCorrect: true, explanation: "2/18 * 100"}, {id: "B", text: "50%", isCorrect: false, explanation: "Incorrect"}]}
      ]
    },
    {
      id: "les-1-1-6-3",
      title: "Stoichiometry & Balancing",
      description: "Mole Ratios",
      icon: "ArrowRightLeft",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Stoichiometry",
          content: "Derived from 'stoicheion' (element) and 'metron' (measure).\nBased on a **Balanced Chemical Equation**.\n\n$$CH_4(g) + 2O_2(g) \\to CO_2(g) + 2H_2O(g)$$\n\nCoefficients represent moles (or molecules, or volumes for gases)."
        },
        {
          id: "sol-1",
          type: "solution",
          title: "Mole Calculation",
          content: "Calculate water produced by combustion of 16g Methane ($CH_4$).",
          interactiveSteps: [
            { stepText: "Step 1: Moles of Methane.\n16g / 16g/mol = 1 mol" },
            { stepText: "Step 2: Mole Ratio.\n1 mol $CH_4$ gives 2 mol $H_2O$." },
            { stepText: "Step 3: Mass of Water.\n2 mol $\\times$ 18 g/mol = 36 g." }
          ]
        },
        { id: "ret-1", type: "quiz", title: "Concept", content: "Do stoichiometric coefficients represent mass ratio directly?", options: [{id: "A", text: "No", isCorrect: true, explanation: "They represent mole/particle ratio."}, {id: "B", text: "Yes", isCorrect: false, explanation: "Mass depends on molar mass."}]}
      ]
    },
    {
      id: "les-1-1-6-4",
      title: "Limiting Reagent",
      description: "What runs out first?",
      icon: "Hourglass",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Limiting Reagent",
          content: "The reactant that gets **consumed first** limits the amount of product formed.\n\nExample: 2 slices bread + 1 cheese = 1 sandwich.\nIf you have 10 slices but only 1 cheese, cheese is the **limiting reagent**."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Visualizing Reaction",
          content: "Reaction: $N_2 + 3H_2 \\to 2NH_3$. See what happens when $H_2$ is less than required.",
          interactiveCanvasId: "chem-limiting-reagent"
        },
        {
          id: "sol-1",
          type: "solution",
          title: "Problem Solving",
          content: "50kg $N_2$ mixed with 10kg $H_2$. Identify Limiting Reagent.",
          interactiveSteps: [
            { stepText: "Step 1: Calculate Moles.\n$N_2$: 1786 mol. $H_2$: 4960 mol." },
            { stepText: "Step 2: Check Ratio (1:3).\n1786 mol $N_2$ needs $1786 \\times 3 = 5358$ mol $H_2$." },
            { stepText: "Step 3: Compare.\nWe have 4960 mol $H_2$ (Less than 5358).\n$H_2$ is limiting." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Empirical formula of Benzene ($C_6H_6$)?", options: [{id: "A", text: "CH", isCorrect: true, explanation: "Ratio 1:1"}, {id: "B", text: "C6H6", isCorrect: false, explanation: "That's molecular"}]}
      ]
    },
    {
      id: "les-1-1-6-5",
      title: "Reactions in Solutions",
      description: "Molarity, Molality & More",
      icon: "Beaker",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Concentration Terms",
          content: "**1. Mass %:** (Mass solute / Mass solution) × 100\n**2. Mole Fraction ($X$):** Moles of component / Total moles\n**3. Molarity ($M$):** Moles solute / Volume solution (L)\n**4. Molality ($m$):** Moles solute / Mass solvent (kg)"
        },
        {
          id: "trap-1",
          type: "quiz",
          title: "Spot the Error",
          content: "Which unit changes with temperature?",
          options: [
            { id: "A", text: "Molarity", isCorrect: true, explanation: "Volume expands with temp." },
            { id: "B", text: "Molality", isCorrect: false, explanation: "Mass is temp independent." }
          ]
        },
        {
          id: "sol-1",
          type: "solution",
          title: "Molarity Calculation",
          content: "4g NaOH in 250 mL solution. Find Molarity. (Molar mass NaOH = 40g/mol).",
          interactiveSteps: [
            { stepText: "Step 1: Moles NaOH.\n4g / 40 = 0.1 mol." },
            { stepText: "Step 2: Volume in L.\n250 mL = 0.25 L." },
            { stepText: "Step 3: Formula.\n0.1 / 0.25 = 0.4 M." }
          ]
        }
      ]
    }
  ]
};