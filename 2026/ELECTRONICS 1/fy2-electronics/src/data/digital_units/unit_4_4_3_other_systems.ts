import { Unit } from '../../types';

export const UNIT_4_4_3: Unit = {
  id: "unit-4-4-3",
  title: "Octal System",
  description: "Base 8 Fundamentals",
  color: "duo-indigo",
  lessons: [
    {
      id: "les-4-4-3-1",
      title: "Octal Basics",
      description: "Radix 8",
      icon: "Box",
      slides: [
        {
          id: "def",
          type: "theory",
          title: "Definition",
          content: "The **Octal** number system has a **Radix of 8**.\n\nIt uses eight digits: **0, 1, 2, 3, 4, 5, 6, 7**.\n\nLike Hex, it is useful because $8 = 2^3$, allowing easy conversion from binary (groups of 3)."
        },
        {
          id: "quiz",
          type: "quiz",
          title: "Valid Digits",
          content: "Is the number **18** valid in the Octal system?",
          options: [
            { id: "A", text: "Yes", isCorrect: false, explanation: "There is no digit '8' in base 8." },
            { id: "B", text: "No", isCorrect: true, explanation: "Digits go from 0 to 7." }
          ]
        }
      ]
    },
    {
      id: "les-4-4-3-2",
      title: "Binary to Octal",
      description: "Example 24.13",
      icon: "Layers",
      slides: [
        {
          id: "method",
          type: "theory",
          title: "Grouping by 3",
          content: "To convert Binary to Octal, group bits in **threes** starting from the binary point."
        },
        {
          id: "vis",
          type: "interactive_canvas",
          title: "Grouping",
          content: "Visualizing 101010110 -> 0.526 (Octal).",
          interactiveCanvasId: "octal-grouping-visual"
        },
        {
          id: "check",
          type: "numerical",
          title: "Quick Calc",
          content: "Convert binary **101 011** to Octal (enter integer).",
          numericAnswer: 53,
          numericTolerance: 0
        }
      ]
    },
    {
      id: "les-4-4-3-3",
      title: "Comparison",
      description: "Example 24.14",
      icon: "GitCompare",
      slides: [
        {
          id: "scenario",
          type: "theory",
          title: "Multi-System Conversion",
          content: "Consider binary **101011**.\n\n- **Decimal:** $32+8+2+1 = 43$\n- **Octal:** $101 | 011 \\to 53$"
        },
        {
          id: "quiz",
          type: "quiz",
          title: "Efficiency",
          content: "Which representation is more compact (fewer digits) for large numbers?",
          options: [
            { id: "A", text: "Binary", isCorrect: false, explanation: "Binary is the longest." },
            { id: "B", text: "Hexadecimal", isCorrect: true, explanation: "Base 16 is most dense." }
          ]
        }
      ]
    }
  ]
};