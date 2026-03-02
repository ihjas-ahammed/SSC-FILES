import { Unit } from '../../types';

export const UNIT_4_3_1: Unit = {
  id: "unit-4-3-1",
  title: "Conversion Methods",
  description: "Double Dabble",
  color: "duo-indigo",
  lessons: [
    {
      id: "les-4-3-1-1",
      title: "Double Dabble",
      description: "Integer Algorithm",
      icon: "GitPullRequest",
      slides: [
        {
          id: "dest",
          type: "theory",
          title: "The Method",
          content: "To convert a Decimal Integer to Binary, we use the **Double Dabble** method (Repeated Division-by-2).\n\nProcess: Divide the number by 2, record the remainder (0 or 1), then divide the quotient again. Repeat until quotient is 0."
        },
        {
          id: "step1",
          type: "proof",
          title: "Step-by-Step",
          content: "Let's convert 13.",
          proofSteps: [
            "1. $13 \\div 2 = 6$, Remainder **1**",
            "2. $6 \\div 2 = 3$, Remainder **0**",
            "3. $3 \\div 2 = 1$, Remainder **1**",
            "4. $1 \\div 2 = 0$, Remainder **1**"
          ]
        }
      ]
    },
    {
      id: "les-4-3-1-2",
      title: "Reading Order",
      description: "Bottom Up",
      icon: "ArrowUp",
      slides: [
        {
          id: "vis",
          type: "interactive_canvas",
          title: "Visualizing the Flow",
          content: "Note the direction of the arrow. The *first* remainder is the LSB. The *last* remainder is the MSB.",
          interactiveCanvasId: "double-dabble-vis"
        },
        {
          id: "rule",
          type: "theory",
          title: "The Golden Rule",
          content: "Write the remainders in **Reverse Order** (Bottom to Top).\n\nFor 13: Remainders were 1, 0, 1, 1.\nResult: **1101**."
        },
        {
          id: "check",
          type: "quiz",
          title: "Check",
          content: "The first remainder generated (from the first division) becomes the:",
          options: [
            { id: "A", text: "MSB (Most Significant Bit)", isCorrect: false, explanation: "Incorrect. The first division determines odd/even, which is the $2^0$ place." },
            { id: "B", text: "LSB (Least Significant Bit)", isCorrect: true, explanation: "Correct." }
          ]
        }
      ]
    }
  ]
};