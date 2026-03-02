import { Unit } from '../../types';

export const UNIT_4_5_3: Unit = {
  id: "unit-4-5-3",
  title: "BCD Applications",
  description: "Why we use it",
  color: "duo-indigo",
  lessons: [
    {
      id: "les-4-5-3-1",
      title: "Human Interface",
      description: "Digital Displays",
      icon: "Monitor",
      slides: [
        {
          id: "theory",
          type: "theory",
          title: "Interfacing",
          content: "Digital voltmeters, frequency counters, and digital clocks use BCD.\n\nWhy? Because the display (7-segment) expects to show decimal digits (0-9). It is easier to decode BCD to 7-segment than pure binary to 7-segment."
        },
        {
          id: "quiz",
          type: "quiz",
          title: "Application",
          content: "A digital clock needs to display '12'. In BCD, the internal logic stores this as:",
          options: [
            { id: "A", text: "Two separate codes (1 and 2)", isCorrect: true, explanation: "Allows driving separate display digits." },
            { id: "B", text: "One binary number (1100)", isCorrect: false, explanation: "Harder to split for display." }
          ]
        }
      ]
    },
    {
      id: "les-4-5-3-2",
      title: "Calculators",
      description: "Precision",
      icon: "Calculator",
      slides: [
        {
          id: "theory",
          type: "theory",
          title: "Rounding Errors",
          content: "Pure binary (floating point) can have rounding errors with decimal fractions (e.g., 0.1 is repeating in binary). \n\nFinancial calculators often use BCD math to ensure $0.1 + 0.1 = 0.2$ exactly."
        }
      ]
    },
    {
      id: "les-4-5-3-3",
      title: "Summary",
      description: "Pros Cons",
      icon: "ThumbsUp",
      slides: [
        {
          id: "table",
          type: "theory",
          title: "Trade-offs",
          content: "**Pros:** Easy conversion to decimal digits. Essential for displays.\n\n**Cons:** Wastes bits (10-15 unused). Arithmetic is more complex."
        }
      ]
    }
  ]
};