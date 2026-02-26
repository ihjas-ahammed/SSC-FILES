import { Unit } from '../../types';

export const UNIT_1_1_7: Unit = {
  id: "unit-1-1-7",
  title: "Foundational Exercises",
  description: "NCERT Exe 1.1 - 1.15",
  color: "duo-blue",
  lessons: [
    {
      id: "exe-1-1-7-1",
      title: "Molar Mass Practice",
      description: "Q 1.1",
      icon: "Calculator",
      slides: [
        { id: "q-1", type: "numerical", title: "Exercise 1.1(i)", content: "Calculate molar mass of $H_2O$. (H=1.008, O=16.00)", numericAnswer: 18.02, numericTolerance: 0.05 },
        { id: "q-2", type: "numerical", title: "Exercise 1.1(ii)", content: "Calculate molar mass of $CO_2$. (C=12.01, O=16.00)", numericAnswer: 44.01, numericTolerance: 0.05 },
        { id: "q-3", type: "numerical", title: "Exercise 1.1(iii)", content: "Calculate molar mass of $CH_4$. (C=12.01, H=1.008)", numericAnswer: 16.04, numericTolerance: 0.05 },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Unit of Molar Mass?", options: [{id: "A", text: "g/mol", isCorrect: true, explanation: "Correct"}, {id: "B", text: "kg", isCorrect: false, explanation: "No"}]}
      ]
    },
    {
      id: "exe-1-1-7-2",
      title: "Empirical Formula",
      description: "Q 1.3, 1.8",
      icon: "FlaskConical",
      slides: [
        { id: "q-1", type: "solution", title: "Exercise 1.3", content: "Iron Oxide: 69.9% Fe, 30.1% O2. Determine Empirical Formula. (Fe=55.85, O=16.00)", interactiveSteps: [
          {stepText: "Moles: Fe = 69.9/55.85 = 1.25. O = 30.1/16 = 1.88."},
          {stepText: "Ratio: 1.25:1.88 -> 1:1.5 -> 2:3."},
          {stepText: "Formula: $Fe_2O_3$."}
        ]}
      ]
    },
    {
      id: "exe-1-1-7-3",
      title: "Basic Stoichiometry",
      description: "Q 1.4",
      icon: "Scale",
      slides: [
        { id: "q-1", type: "numerical", title: "Exercise 1.4(i)", content: "Amount of $CO_2$ produced when 1 mole of carbon is burnt in air (g).", numericAnswer: 44, numericTolerance: 0.1 },
        { id: "q-2", type: "numerical", title: "Exercise 1.4(ii)", content: "1 mole Carbon burnt in 16g Dioxygen. Calculate $CO_2$ produced (g). Hint: Oxygen is limiting.", numericAnswer: 22, numericTolerance: 0.1 }
      ]
    },
    {
      id: "exe-1-1-7-4",
      title: "Solution Preparation",
      description: "Q 1.5, 1.6",
      icon: "Beaker",
      slides: [
        { id: "q-1", type: "numerical", title: "Exercise 1.5", content: "Mass of Sodium Acetate (M=82.02) required for 500mL of 0.375M solution.", numericAnswer: 15.38, numericTolerance: 0.1 },
        { id: "q-2", type: "numerical", title: "Exercise 1.6", content: "Concentration of Nitric Acid (69% by mass, density 1.41 g/mL) in mol/L.", numericAnswer: 15.44, numericTolerance: 0.5 }
      ]
    }
  ]
};