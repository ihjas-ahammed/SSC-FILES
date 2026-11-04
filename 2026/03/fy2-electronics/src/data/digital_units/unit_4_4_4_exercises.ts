import { Unit } from '../../types';

export const UNIT_4_4_4: Unit = {
  id: "unit-4-4-4",
  title: "Section 4.4 Exercises",
  description: "Test your Base Conversions",
  color: "duo-indigo",
  lessons: [
    {
      id: "les-4-4-4-1",
      title: "Hex Conversions",
      description: "Drill",
      icon: "Hash",
      slides: [
        {
          id: "q1",
          type: "numerical",
          title: "Hex to Decimal",
          content: "Convert Hex **2B** to Decimal.\nHint: $2 \\times 16 + 11$.",
          numericAnswer: 43,
          numericTolerance: 0
        },
        {
          id: "q2",
          type: "quiz",
          title: "Binary to Hex",
          content: "Convert **1110 0101** to Hex.",
          options: [
            { id: "A", text: "E5", isCorrect: true, explanation: "1110=14(E), 0101=5." },
            { id: "B", text: "F5", isCorrect: false, explanation: "1111 is F." }
          ]
        }
      ]
    },
    {
      id: "les-4-4-4-2",
      title: "Octal Conversions",
      description: "Drill",
      icon: "Box",
      slides: [
        {
          id: "q3",
          type: "numerical",
          title: "Octal to Decimal",
          content: "Convert Octal **23** to Decimal.\nHint: $2 \\times 8 + 3$.",
          numericAnswer: 19,
          numericTolerance: 0
        },
        {
          id: "q4",
          type: "quiz",
          title: "Binary Grouping",
          content: "To convert binary to Octal, we group bits by:",
          options: [
            { id: "A", text: "3", isCorrect: true, explanation: "2^3 = 8." },
            { id: "B", text: "4", isCorrect: false, explanation: "That's for Hex." }
          ]
        }
      ]
    }
  ]
};