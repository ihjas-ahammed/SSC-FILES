import { Unit } from '../../types';

export const UNIT_1_1_8: Unit = {
  id: "unit-1-1-8",
  title: "Numerical Exercises",
  description: "NCERT Exe 1.16 - 1.36",
  color: "duo-red",
  lessons: [
    {
      id: "exe-1-1-8-1",
      title: "Contamination (PPM)",
      description: "Q 1.17",
      icon: "AlertTriangle",
      slides: [
        { id: "q-1", type: "numerical", title: "Exercise 1.17(i)", content: "Sample has 15 ppm Chloroform. Express as mass percent. (Enter coefficient X where answer is $X \\times 10^{-3}$)", numericAnswer: 1.5, numericTolerance: 0.1 },
        { id: "q-2", type: "solution", title: "Solution 1.17", content: "15 ppm means 15g in $10^6$g. % = $(15/10^6)*100 = 1.5 \\times 10^{-3} \\%$", interactiveSteps: [] }
      ]
    },
    {
      id: "exe-1-1-8-2",
      title: "Limiting Reagent",
      description: "Q 1.23, 1.24",
      icon: "ArrowRightLeft",
      slides: [
        { id: "q-1", type: "quiz", title: "Exercise 1.23", content: "Reaction $A + B_2 \\to AB_2$. 2 mol A + 3 mol B. Who is limiting?", options: [{id: "A", text: "A", isCorrect: true, explanation: "A is consumed first (2 < 3)."}, {id: "B", text: "B", isCorrect: false, explanation: "B is in excess."}] },
        { id: "q-2", type: "numerical", title: "Exercise 1.24", content: "$N_2(2000g) + H_2(1000g) \\to NH_3$. Calculate $NH_3$ produced (g). $N_2$ is limiting.", numericAnswer: 2428, numericTolerance: 10 }
      ]
    },
    {
      id: "exe-1-1-8-3",
      title: "Welding Gas",
      description: "Q 1.34",
      icon: "Flame",
      slides: [
        { id: "sol-1", type: "solution", title: "Exercise 1.34", content: "Welding gas (C, H only). Burning gives 3.38g CO2, 0.690g H2O. 10L at STP weighs 11.6g. Find Molecular Formula.", interactiveSteps: [
          {stepText: "Moles C = 3.38/44 = 0.0768. Moles H = (0.69/18)*2 = 0.0766."},
          {stepText: "Ratio C:H = 1:1. Empirical = CH."},
          {stepText: "Molar Mass = 11.6g / (10/22.7 mol) = 26 g/mol. (Using STP 22.7L)"},
          {stepText: "Empirical Mass = 13. n = 2. Molecular Formula = $C_2H_2$."}
        ]}
      ]
    }
  ]
};