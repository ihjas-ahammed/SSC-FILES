import { Unit } from '../../types';

export const UNIT_4_4_1: Unit = {
  id: "unit-4-4-1",
  title: "Hex Fundamentals",
  description: "Understanding Base 16",
  color: "duo-indigo",
  lessons: [
    {
      id: "les-4-4-1-1",
      title: "Why Hexadecimal?",
      description: "Beyond 0-9",
      icon: "Grid",
      slides: [
        {
          id: "priming",
          type: "quiz",
          title: "Intuition Check",
          content: "We run out of unique single digits after 9. If we want to count in a base larger than 10 (like 16), what symbols should we use for 10, 11, 12...?",
          options: [
            { id: "A", text: "Create entirely new squiggly lines", isCorrect: false, explanation: "Too hard to learn/type." },
            { id: "B", text: "Use Letters (A, B, C...)", isCorrect: true, explanation: "Correct. We use the alphabet." }
          ]
        },
        {
          id: "def",
          type: "theory",
          title: "Definition: Hexadecimal",
          content: "The **Hexadecimal** system uses a **Radix of 16**.\n\nIt uses 16 distinct symbols:\n- Digits: **0, 1, 2, 3, 4, 5, 6, 7, 8, 9**\n- Letters: **A, B, C, D, E, F**"
        },
        {
          id: "vis",
          type: "interactive_canvas",
          title: "The Hex Clock",
          content: "Visualizing the cycle of 16 digits.",
          interactiveCanvasId: "hex-circle-diagram"
        },
        {
          id: "check",
          type: "fill_in_blank",
          title: "Recall",
          content: "In Hexadecimal, the letter **F** represents the decimal value ___.",
          blankAnswer: "15"
        }
      ]
    },
    {
      id: "les-4-4-1-2",
      title: "Hex-Decimal Map",
      description: "Table 24.15",
      icon: "List",
      slides: [
        {
          id: "table",
          type: "theory",
          title: "The Mapping",
          content: "| Dec | Hex | Binary |\n|---|---|---|\n| 0-9 | 0-9 | 0000-1001 |\n| 10 | A | 1010 |\n| 11 | B | 1011 |\n| 12 | C | 1100 |\n| 13 | D | 1101 |\n| 14 | E | 1110 |\n| 15 | F | 1111 |"
        },
        {
          id: "quiz",
          type: "quiz",
          title: "Quick Conversion",
          content: "Which Hex digit corresponds to Binary **1100**?",
          options: [
            { id: "A", text: "B", isCorrect: false, explanation: "B is 11 (1011)." },
            { id: "B", text: "C", isCorrect: true, explanation: "C is 12 (8+4=12)." }
          ]
        }
      ]
    },
    {
      id: "les-4-4-1-3",
      title: "Positional Weight",
      description: "Powers of 16",
      icon: "TrendingUp",
      slides: [
        {
          id: "theory",
          type: "theory",
          title: "Weights",
          content: "Just as decimal uses $10^n$ and binary uses $2^n$, Hexadecimal uses powers of 16.\n\n$$ 16^0 = 1 $$\n$$ 16^1 = 16 $$\n$$ 16^2 = 256 $$\n$$ 16^3 = 4096 $$"
        },
        {
          id: "calc",
          type: "numerical",
          title: "Calculate Value",
          content: "Calculate the decimal value of Hex number **2A**.\nHint: $2 \\times 16^1 + 10 \\times 16^0$.",
          numericAnswer: 42,
          numericTolerance: 0
        }
      ]
    }
  ]
};