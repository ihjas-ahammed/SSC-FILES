import { Unit } from '../../types';

export const UNIT_4_5_1: Unit = {
  id: "unit-4-5-1",
  title: "BCD Theory",
  description: "Binary Coded Decimal",
  color: "duo-indigo",
  lessons: [
    {
      id: "les-4-5-1-1",
      title: "What is BCD?",
      description: "Hybrid Code",
      icon: "Code",
      slides: [
        {
          id: "priming",
          type: "quiz",
          title: "The Problem",
          content: "Computers use binary. Humans use decimal. Pure binary conversion logic is complex to build in hardware. Is there a way to represent decimal digits directly using bits?",
          options: [
            { id: "A", text: "Yes, use ASCII", isCorrect: false, explanation: "ASCII is for text." },
            { id: "B", text: "Yes, use BCD", isCorrect: true, explanation: "Binary Coded Decimal encodes each digit separately." }
          ]
        },
        {
          id: "def",
          type: "theory",
          title: "Definition",
          content: "In **BCD (Binary-Coded Decimal)**, each decimal digit is represented by a **4-bit binary number**.\n\nExample: Decimal **12** is not $1100_2$. \nIt is $0001$ (1) $0010$ (2) in BCD."
        },
        {
          id: "vis",
          type: "interactive_canvas",
          title: "BCD Mapping",
          content: "Visualizing decimal digits 0-9 mapping to 4-bit blocks.",
          interactiveCanvasId: "bcd-decimal-mapping"
        }
      ]
    },
    {
      id: "les-4-5-1-2",
      title: "The 8421 Code",
      description: "Weights",
      icon: "Hash",
      slides: [
        {
          id: "theory",
          type: "theory",
          title: "8421 Weights",
          content: "The most common BCD code uses standard binary weights ($2^3, 2^2, 2^1, 2^0$) for the 4 bits.\n\n$8-4-2-1$\n\nExample: 9 is $1001$ ($8+1$)."
        },
        {
          id: "check",
          type: "fill_in_blank",
          title: "Bits per Digit",
          content: "To represent the decimal number 489 in BCD, we need a total of ___ bits.",
          blankAnswer: "12" // 3 digits * 4 bits
        }
      ]
    },
    {
      id: "les-4-5-1-3",
      title: "Mapping Table",
      description: "Valid Codes",
      icon: "List",
      slides: [
        {
          id: "table",
          type: "theory",
          title: "Table 24.16",
          content: "| Decimal | BCD Code |\n|---|---|\n| 0 | 0000 |\n| ... | ... |\n| 9 | 1001 |\n\nCrucially, binary patterns **1010 through 1111** are never used in BCD. They are **Invalid**."
        }
      ]
    }
  ]
};