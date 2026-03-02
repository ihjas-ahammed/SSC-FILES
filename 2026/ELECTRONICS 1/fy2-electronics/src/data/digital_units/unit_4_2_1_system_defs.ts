import { Unit } from '../../types';

export const UNIT_4_2_1: Unit = {
  id: "unit-4-2-1",
  title: "System Definitions",
  description: "Radix and Digits",
  color: "duo-indigo",
  lessons: [
    {
      id: "les-4-2-1-1",
      title: "Radix or Base",
      description: "Counting items",
      icon: "Database",
      slides: [
        {
          id: "priming",
          type: "quiz",
          title: "Intuition Check",
          content: "We count in 'tens' (0-9) likely because we have ten fingers. If we were cartoons with 4 fingers on each hand (8 total), our 'natural' number system would likely be base:",
          options: [
            { id: "A", text: "10 (Decimal)", isCorrect: false, explanation: "Decimal is based on 10 unique digits." },
            { id: "B", text: "8 (Octal)", isCorrect: true, explanation: "The base (radix) usually equals the count of unique symbols available." }
          ]
        },
        {
          id: "def",
          type: "theory",
          title: "Definition: Radix",
          content: "The **Radix** (or Base) of a number system is the total number of unique digits used to count items.\n\n*   **Decimal:** Radix = 10 (Digits 0-9)\n*   **Binary:** Radix = 2 (Digits 0, 1)"
        },
        {
          id: "retrieval",
          type: "fill_in_blank",
          title: "Recall",
          content: "The total number of digits used in a number system is called its ___.",
          blankAnswer: "radix"
        }
      ]
    },
    {
      id: "les-4-2-1-2",
      title: "Binary System",
      description: "Base 2",
      icon: "Binary",
      slides: [
        {
          id: "theory",
          type: "theory",
          title: "The Binary System",
          content: "Binary uses a **Radix of 2**. \n\nIt has only two possible digit symbols: **0** and **1**.\n\nDespite having only two symbols, it can represent *any* quantity that the decimal system can."
        },
        {
          id: "why",
          type: "quiz",
          title: "Why Binary?",
          content: "Why do digital circuits prefer binary?",
          options: [
            { id: "A", text: "It is easier for humans to read", isCorrect: false, explanation: "Binary strings are long and hard for humans to parse." },
            { id: "B", text: "Matches Transistor States (ON/OFF)", isCorrect: true, explanation: "Transistors are naturally two-state switches." }
          ]
        }
      ]
    },
    {
      id: "les-4-2-1-3",
      title: "Decimal System",
      description: "Base 10",
      icon: "Hash",
      slides: [
        {
          id: "theory",
          type: "theory",
          title: "Decimal Context",
          content: "The decimal system uses 10 digits: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9.\n\nIt evolved naturally from human anatomy. The word **digit** is derived from the Latin word for 'finger'."
        },
        {
          id: "check",
          type: "quiz",
          title: "Comparison",
          content: "Which number system requires more digits to represent the same value?",
          options: [
            { id: "A", text: "Decimal", isCorrect: false, explanation: "Decimal is dense (10 states per position)." },
            { id: "B", text: "Binary", isCorrect: true, explanation: "Binary is sparse (2 states). Example: 9 (1 digit) vs 1001 (4 bits)." }
          ]
        }
      ]
    }
  ]
};