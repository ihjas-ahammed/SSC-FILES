import { Unit } from '../../types';

export const UNIT_3_3_3: Unit = {
  id: "unit-3-3-3",
  title: "Gain Calculations",
  description: "Measuring Performance",
  color: "duo-orange",
  lessons: [
    {
      id: "les-3-3-3-1",
      title: "Current Gain",
      description: "Beta AC",
      icon: "ChevronsUp",
      slides: [
        {
          id: "def",
          type: "theory",
          title: "AC Current Gain",
          content: "The ratio of change in output current to change in input current.\n$$ A_i = \\beta_{ac} = \\frac{\\Delta I_C}{\\Delta I_B} $$"
        }
      ]
    },
    {
      id: "les-3-3-3-2",
      title: "Voltage Gain",
      description: "Av",
      icon: "Maximize2",
      slides: [
        {
          id: "def",
          type: "theory",
          title: "Voltage Gain ($A_v$)",
          content: "Ratio of change in output voltage to change in input voltage.\n$$ A_v = \\frac{\\Delta V_{CE}}{\\Delta V_{BE}} $$\n\nApproximation: $A_v = \\beta \\frac{R_{load}}{R_{in}}$"
        },
        {
          id: "quiz",
          type: "quiz",
          title: "Influence",
          content: "To increase the voltage gain of an amplifier, we can:",
          options: [
            { id: "A", text: "Increase Load Resistance ($R_C$)", isCorrect: true, explanation: "Gain is proportional to Load Resistance." },
            { id: "B", text: "Decrease Load Resistance", isCorrect: false, explanation: "" }
          ]
        }
      ]
    },
    {
      id: "les-3-3-3-3",
      title: "Example Calculation",
      description: "Putting numbers to it",
      icon: "Calculator",
      slides: [
        {
          id: "prob",
          type: "numerical",
          title: "Gain Calc",
          content: "A transistor has $\\beta = 100$. Input Resistance $R_{in} = 1k\\Omega$. Output Load $R_L = 5k\\Omega$. \nCalculate Voltage Gain $A_v = \\beta (R_L / R_{in})$.",
          numericAnswer: 500,
          numericTolerance: 10
        }
      ]
    }
  ]
};