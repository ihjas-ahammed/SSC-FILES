import { Unit } from '../../types';

export const UNIT_3_2_4: Unit = {
  id: "unit-3-2-4",
  title: "Section 3.2 Exercises",
  description: "Calculations",
  color: "duo-violet",
  lessons: [
    {
      id: "les-3-2-4-1",
      title: "Alpha Beta Math",
      description: "Example 6.6",
      icon: "Calculator",
      slides: [
        {
          id: "prob",
          type: "numerical",
          title: "Calculate Base Current",
          content: "In a common base connection, $\\alpha = 0.9$. If $I_E = 1 mA$, determine $I_B$ in mA.\nHint: $I_C = \\alpha I_E$, then $I_B = I_E - I_C$.",
          numericAnswer: 0.1,
          numericTolerance: 0.01
        },
        {
          id: "solution",
          type: "solution",
          title: "Steps",
          content: "Check your logic.",
          interactiveSteps: [
            { stepText: "$I_C = 0.9 \\times 1 mA = 0.9 mA$" },
            { stepText: "$I_B = 1 mA - 0.9 mA = 0.1 mA$" }
          ]
        }
      ]
    },
    {
      id: "les-3-2-4-2",
      title: "Curve Interpretation",
      description: "Reading data",
      icon: "Eye",
      slides: [
        {
          id: "q1",
          type: "quiz",
          title: "Output Impedance",
          content: "Looking at the CE output characteristics, the curves are almost flat (horizontal). This implies the output resistance is:",
          options: [
            { id: "A", text: "Low", isCorrect: false, explanation: "Horizontal lines mean current doesn't change much with voltage." },
            { id: "B", text: "High", isCorrect: true, explanation: "$R = \\Delta V / \\Delta I$. Small $\\Delta I$ means large $R$." }
          ]
        }
      ]
    }
  ]
};