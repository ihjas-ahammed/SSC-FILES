import { Unit } from '../../types';

export const UNIT_4_5_4: Unit = {
  id: "unit-4-5-4",
  title: "Section 4.5 Exercises",
  description: "BCD Problems",
  color: "duo-indigo",
  lessons: [
    {
      id: "les-4-5-4-1",
      title: "Encoding",
      description: "Decimal to BCD",
      icon: "Code",
      slides: [
        {
          id: "q1",
          type: "quiz",
          title: "Encode 35",
          content: "Convert Decimal 35 to BCD.",
          options: [
            { id: "A", text: "0011 0101", isCorrect: true, explanation: "3 -> 0011, 5 -> 0101." },
            { id: "B", text: "100011", isCorrect: false, explanation: "That is pure binary (35)." }
          ]
        },
        {
          id: "q2",
          type: "quiz",
          title: "Identify",
          content: "Which of these is a valid BCD sequence?",
          options: [
            { id: "A", text: "1001 1100", isCorrect: false, explanation: "1100 (12) is invalid." },
            { id: "B", text: "1001 0000", isCorrect: true, explanation: "9 and 0 are valid digits." }
          ]
        }
      ]
    },
    {
      id: "les-4-5-4-2",
      title: "Decoding",
      description: "BCD to Decimal",
      icon: "Terminal",
      slides: [
        {
          id: "q3",
          type: "numerical",
          title: "Decode",
          content: "BCD Code: **0010 1001**. What is the decimal number?",
          numericAnswer: 29,
          numericTolerance: 0
        },
        {
          id: "q4",
          type: "fill_in_blank",
          title: "Bit Count",
          content: "A 4-digit decimal number requires ___ bits in BCD.",
          blankAnswer: "16"
        }
      ]
    }
  ]
};