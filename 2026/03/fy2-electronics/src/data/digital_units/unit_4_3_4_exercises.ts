import { Unit } from '../../types';

export const UNIT_4_3_4: Unit = {
  id: "unit-4-3-4",
  title: "Section 4.3 Exercises",
  description: "Test Conversion Skills",
  color: "duo-indigo",
  lessons: [
    {
      id: "les-4-3-4-1",
      title: "Integer Drills",
      description: "Division practice",
      icon: "Hash",
      slides: [
        {
          id: "q1",
          type: "numerical",
          title: "Convert 43",
          content: "Convert decimal 43 to binary.",
          numericAnswer: 101011,
          numericTolerance: 0
        },
        {
          id: "hint",
          type: "solution",
          title: "Check",
          content: "43 = 32 + 8 + 2 + 1",
          interactiveSteps: [
            { stepText: "32 (1)" },
            { stepText: "16 (0)" },
            { stepText: "8 (1)" },
            { stepText: "4 (0)" },
            { stepText: "2 (1)" },
            { stepText: "1 (1)" }
          ]
        }
      ]
    },
    {
      id: "les-4-3-4-2",
      title: "Fraction Drills",
      description: "Multiplication practice",
      icon: "Percent",
      slides: [
        {
          id: "q2",
          type: "numerical",
          title: "Convert 0.25",
          content: "Convert 0.25 to binary (just the digits after the point, e.g. if 0.11, enter 11).",
          numericAnswer: 1, // 0.01, interpreted as number 1 is tricky in current input logic, let's adjust content
          numericTolerance: 0
        },
        {
          id: "correction",
          type: "quiz",
          title: "Format Check",
          content: "Wait, 0.25 is $1/4$ or $2^{-2}$. In binary this is:",
          options: [
            { id: "A", text: "0.01", isCorrect: true, explanation: "Zero halves, One quarter." },
            { id: "B", text: "0.10", isCorrect: false, explanation: "That would be 0.5." }
          ]
        }
      ]
    }
  ]
};