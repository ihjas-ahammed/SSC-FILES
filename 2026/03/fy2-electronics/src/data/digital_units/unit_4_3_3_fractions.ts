import { Unit } from '../../types';

export const UNIT_4_3_3: Unit = {
  id: "unit-4-3-3",
  title: "Fractional Conversion",
  description: "Handling decimals",
  color: "duo-indigo",
  lessons: [
    {
      id: "les-4-3-3-1",
      title: "Multiplication Method",
      description: "Opposite of Integers",
      icon: "X",
      slides: [
        {
          id: "theory",
          type: "theory",
          title: "Fraction Method",
          content: "To convert fractional decimal numbers (e.g., 0.625), we use **Repeated Multiplication by 2**.\n\n1. Multiply fraction by 2.\n2. Record the **Integer** part (0 or 1) as a bit.\n3. Keep multiplying the remaining fraction until it becomes 0."
        },
        {
          id: "vis",
          type: "interactive_canvas",
          title: "Visual Flow",
          content: "For fractions, we read the result from **Top to Bottom**.",
          interactiveCanvasId: "fractional-mult-vis"
        }
      ]
    },
    {
      id: "les-4-3-3-2",
      title: "Fraction Example",
      description: "Example 24.2",
      icon: "Calculator",
      slides: [
        {
          id: "chal",
          type: "example_q",
          title: "Convert 0.625",
          content: "Convert $(0.625)_{10}$ to binary."
        },
        {
          id: "sol",
          type: "solution",
          title: "Solution",
          content: "Follow the integers.",
          interactiveSteps: [
            { stepText: "$0.625 \\times 2 = 1.25 \\to$ Integer **1**, Remainder 0.25" },
            { stepText: "$0.25 \\times 2 = 0.50 \\to$ Integer **0**, Remainder 0.50" },
            { stepText: "$0.50 \\times 2 = 1.00 \\to$ Integer **1**, Remainder 0.00" },
            { stepText: "Stop (Remainder is 0)." },
            { stepText: "Read Down: **0.101**" }
          ]
        }
      ]
    },
    {
      id: "les-4-3-3-3",
      title: "Mixed Numbers",
      description: "Example 24.3",
      icon: "GitMerge",
      slides: [
        {
          id: "theory",
          type: "theory",
          title: "Two-Part Method",
          content: "For a mixed number like $100.625$:\n1. Convert Integer part (100) using Division.\n2. Convert Fraction part (0.625) using Multiplication.\n3. Combine with a binary point."
        },
        {
          id: "step1",
          type: "quiz",
          title: "Integer Part",
          content: "100 in binary is:",
          options: [
            { id: "A", text: "1100100", isCorrect: true, explanation: "64 + 32 + 4 = 100." },
            { id: "B", text: "1010101", isCorrect: false, explanation: "Incorrect." }
          ]
        },
        {
          id: "step2",
          type: "quiz",
          title: "Final Result",
          content: "Combine $1100100$ and $.101$.",
          options: [
            { id: "A", text: "1100100.101", isCorrect: true, explanation: "Simple concatenation." },
            { id: "B", text: "101.1100100", isCorrect: false, explanation: "Order matters." }
          ]
        }
      ]
    }
  ]
};