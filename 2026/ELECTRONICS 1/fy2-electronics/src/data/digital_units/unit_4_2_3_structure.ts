import { Unit } from '../../types';

export const UNIT_4_2_3: Unit = {
  id: "unit-4-2-3",
  title: "Binary Structure",
  description: "Counting & Limits",
  color: "duo-indigo",
  lessons: [
    {
      id: "les-4-2-3-1",
      title: "Powers of 2",
      description: "The sequence",
      icon: "TrendingUp",
      slides: [
        {
          id: "theory",
          type: "theory",
          title: "The Sequence",
          content: "Binary weights follow the powers of 2. Memorizing the first few is essential:\n\n$2^0 = 1$\n$2^1 = 2$\n$2^2 = 4$\n$2^3 = 8$\n$2^4 = 16$\n$2^5 = 32$"
        },
        {
          id: "check",
          type: "numerical",
          title: "Next in sequence",
          content: "What is $2^6$? (Double 32)",
          numericAnswer: 64,
          numericTolerance: 0
        }
      ]
    },
    {
      id: "les-4-2-3-2",
      title: "Counting in Binary",
      description: "Example Logic",
      icon: "List",
      slides: [
        {
          id: "process",
          type: "theory",
          title: "Counting Process",
          content: "Just like decimal, when a digit reaches its max (1), it resets to 0 and carries over to the left.\n\n0\n1\n10 (2)\n11 (3)\n100 (4)"
        },
        {
          id: "example",
          type: "example_q",
          title: "Next Number",
          content: "What is the next binary number after **101** (5)?"
        },
        {
          id: "sol",
          type: "solution",
          title: "Solution",
          content: "Add 1 to the LSB.",
          interactiveSteps: [
            { stepText: "101 + 1" },
            { stepText: "1 + 1 = 10 (0 carry 1)" },
            { stepText: "Result: **110** (6)" }
          ]
        }
      ]
    },
    {
      id: "les-4-2-3-3",
      title: "Max Value",
      description: "N bits",
      icon: "Maximize",
      slides: [
        {
          id: "theory",
          type: "theory",
          title: "Maximum Count",
          content: "With $n$ bits, the maximum decimal number you can represent is:\n$$ Max = 2^n - 1 $$\n\nExample: 3 bits (111) $\\to 2^3 - 1 = 7$."
        },
        {
          id: "quiz",
          type: "numerical",
          title: "Calculation",
          content: "What is the maximum decimal number representable by 4 bits? ($2^4 - 1$)",
          numericAnswer: 15,
          numericTolerance: 0
        }
      ]
    }
  ]
};