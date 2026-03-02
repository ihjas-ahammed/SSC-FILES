import { Unit } from '../../types';

export const UNIT_4_2_4: Unit = {
  id: "unit-4-2-4",
  title: "Section 4.2 Exercises",
  description: "Binary Fluency",
  color: "duo-indigo",
  lessons: [
    {
      id: "les-4-2-4-1",
      title: "Binary Recognition",
      description: "Reading Bits",
      icon: "Glasses",
      slides: [
        {
          id: "q1",
          type: "quiz",
          title: "Identify Value",
          content: "What is the positional weight of the **third** bit from the right? (e.g., the '1' in 100)",
          options: [
            { id: "A", text: "2", isCorrect: false, explanation: "That's the 2nd bit (2^1)." },
            { id: "B", text: "4", isCorrect: true, explanation: "Correct. 3rd bit corresponds to 2^2 = 4." }
          ]
        },
        {
          id: "q2",
          type: "numerical",
          title: "Summation",
          content: "Calculate the decimal value of **1010**.",
          numericAnswer: 10,
          numericTolerance: 0
        }
      ]
    },
    {
      id: "les-4-2-4-2",
      title: "System Properties",
      description: "Radix Math",
      icon: "Cpu",
      slides: [
        {
          id: "q3",
          type: "fill_in_blank",
          title: "Terminology",
          content: "In the number 11011, the leftmost '1' is called the ___.",
          blankAnswer: "MSB"
        },
        {
          id: "q4",
          type: "quiz",
          title: "Base comparison",
          content: "Which number is larger: $(10)_{10}$ or $(10)_2$?",
          options: [
            { id: "A", text: "(10) base 10", isCorrect: true, explanation: "Ten vs Two." },
            { id: "B", text: "(10) base 2", isCorrect: false, explanation: "10 in binary is just 2." }
          ]
        }
      ]
    }
  ]
};