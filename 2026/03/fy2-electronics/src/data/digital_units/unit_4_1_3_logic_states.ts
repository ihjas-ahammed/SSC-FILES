import { Unit } from '../../types';

export const UNIT_4_1_3: Unit = {
  id: "unit-4-1-3",
  title: "Logic States",
  description: "Bits and Levels",
  color: "duo-indigo",
  lessons: [
    {
      id: "les-4-1-3-1",
      title: "Voltage Levels",
      description: "The Standard",
      icon: "Battery",
      slides: [
        {
          id: "theory",
          type: "theory",
          title: "Standard Voltages",
          content: "In most basic digital logic:\n\n*   **High (Logic 1):** +5 V\n*   **Low (Logic 0):** 0 V"
        },
        {
          id: "check",
          type: "quiz",
          title: "Level Check",
          content: "Which voltage represents Logic 0?",
          options: [
            { id: "A", text: "0 V", isCorrect: true, explanation: "Ground potential." },
            { id: "B", text: "-5 V", isCorrect: false, explanation: "Usually 0V in standard TTL/CMOS intro." }
          ]
        }
      ]
    },
    {
      id: "les-4-1-3-2",
      title: "Binary Digits",
      description: "The Bit",
      icon: "Hash",
      slides: [
        {
          id: "def",
          type: "theory",
          title: "The Bit",
          content: "A digital circuit expresses values in digits 1 and 0. This numbering concept is the **Binary Numbering System**.\n\nA single binary digit (0 or 1) is called a **Bit**."
        },
        {
          id: "check",
          type: "fill_in_blank",
          title: "Term Origin",
          content: "The numbering system using only 0 and 1 is called the ___ system.",
          blankAnswer: "binary"
        }
      ]
    },
    {
      id: "les-4-1-3-3",
      title: "MSB and LSB",
      description: "Positional Weight",
      icon: "ArrowLeftRight",
      slides: [
        {
          id: "theory",
          type: "theory",
          title: "Significance",
          content: "In a binary number (e.g., 1001):\n*   **LSB (Least Significant Bit):** The right-most digit (Lowest weight $2^0$).\n*   **MSB (Most Significant Bit):** The left-most digit (Highest weight)."
        },
        {
          id: "quiz",
          type: "quiz",
          title: "Identify",
          content: "In the binary number **1**00**0**, the '1' is the:",
          options: [
            { id: "A", text: "LSB", isCorrect: false, explanation: "It's on the left." },
            { id: "B", text: "MSB", isCorrect: true, explanation: "Most Significant Bit, carrying the most weight." }
          ]
        }
      ]
    }
  ]
};