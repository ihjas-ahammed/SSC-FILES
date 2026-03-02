import { Unit } from '../../types';

export const UNIT_2_1_4: Unit = {
  id: "unit-2-1-4",
  title: "Section 2.1 Exercises",
  description: "Test your Rectifier Concepts",
  color: "duo-blue",
  lessons: [
    {
      id: "les-2-1-4-1",
      title: "Efficiency Problem",
      description: "Example 4.23",
      icon: "Calculator",
      slides: [
        {
          id: "prob",
          type: "numerical",
          title: "Calculate Efficiency",
          content: "The applied input AC power to a half-wave rectifier is 100 Watts. The DC output power obtained is 40 Watts. \n\nCalculate the rectification efficiency in percent (%).",
          numericAnswer: 40,
          numericTolerance: 1
        },
        {
          id: "check",
          type: "quiz",
          title: "Conceptual Trap",
          content: "Does a 40% efficiency mean that 60 Watts of power is lost as heat in the diode?",
          options: [
            { id: "A", text: "Yes", isCorrect: false, explanation: "The diode doesn't consume that much power." },
            { id: "B", text: "No", isCorrect: true, explanation: "50W is in the negative half-cycle, which is simply not supplied. The diode only converts the positive 50W into 40W (80% power efficiency)." }
          ]
        }
      ]
    },
    {
      id: "les-2-1-4-2",
      title: "PIV Selection",
      description: "Design safe circuits",
      icon: "Shield",
      slides: [
        {
          id: "q2",
          type: "numerical",
          title: "Peak Voltage calculation",
          content: "An AC supply has an RMS voltage of 230V. \nThe Peak Voltage ($V_m$) is $\\sqrt{2} \\times V_{rms}$.\nCalculate $V_m$ (Enter number only).",
          numericAnswer: 325,
          numericTolerance: 1
        },
        {
          id: "q3",
          type: "quiz",
          title: "Diode Selection",
          content: "Based on the 325V peak calculated, if building a half-wave rectifier, which diode PIV rating is required?",
          options: [
            { id: "A", text: "PIV = 200V", isCorrect: false, explanation: "Will break down." },
            { id: "B", text: "PIV = 400V", isCorrect: true, explanation: "Safely above the 325V peak." }
          ]
        }
      ]
    }
  ]
};