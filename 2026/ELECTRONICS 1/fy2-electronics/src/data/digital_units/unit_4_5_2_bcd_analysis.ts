import { Unit } from '../../types';

export const UNIT_4_5_2: Unit = {
  id: "unit-4-5-2",
  title: "BCD Analysis",
  description: "Valid vs Invalid",
  color: "duo-indigo",
  lessons: [
    {
      id: "les-4-5-2-1",
      title: "Valid Codes",
      description: "0 to 9 Only",
      icon: "CheckCircle",
      slides: [
        {
          id: "rule",
          type: "theory",
          title: "The Constraint",
          content: "A 4-bit binary number can represent 16 values (0-15). \n\nHowever, decimal digits only go from 0-9. \nTherefore, the codes **1010 (10)** to **1111 (15)** are **Forbidden** or Invalid in BCD."
        },
        {
          id: "quiz",
          type: "quiz",
          title: "Validation",
          content: "Is **1100** a valid BCD number?",
          options: [
            { id: "A", text: "Yes", isCorrect: false, explanation: "1100 is 12. Decimal digits can't be 12." },
            { id: "B", text: "No", isCorrect: true, explanation: "Correct. It is an invalid code." }
          ]
        }
      ]
    },
    {
      id: "les-4-5-2-2",
      title: "BCD vs Pure Binary",
      description: "Comparison",
      icon: "GitCompare",
      slides: [
        {
          id: "vis",
          type: "interactive_canvas",
          title: "Visual Comparison",
          content: "See how Decimal 12 differs in Binary vs BCD.",
          interactiveCanvasId: "bcd-vs-binary-visual"
        },
        {
          id: "theory",
          type: "theory",
          title: "Efficiency",
          content: "**Binary** is more efficient (fewer bits for large numbers). \n**BCD** is less efficient but easier to display (direct digit mapping)."
        }
      ]
    },
    {
      id: "les-4-5-2-3",
      title: "Conversion Example",
      description: "Decimal to BCD",
      icon: "ArrowRight",
      slides: [
        {
          id: "prob",
          type: "example_q",
          title: "Convert 489",
          content: "Convert Decimal 489 to BCD."
        },
        {
          id: "sol",
          type: "solution",
          title: "Solution",
          content: "Encode each digit separately.",
          interactiveSteps: [
            { stepText: "4 -> 0100" },
            { stepText: "8 -> 1000" },
            { stepText: "9 -> 1001" },
            { stepText: "Result: 0100 1000 1001" }
          ]
        }
      ]
    }
  ]
};