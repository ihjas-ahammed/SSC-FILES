import { Unit } from '../../types';

export const UNIT_2_3_3: Unit = {
  id: "unit-2-3-3",
  title: "Regulator Analysis",
  description: "Calculations & Conditions",
  color: "duo-violet",
  lessons: [
    {
      id: "les-2-3-3-1",
      title: "Condition for ON",
      description: "Will it regulate?",
      icon: "Power",
      slides: [
        {
          id: "intro",
          type: "theory",
          title: "The 'ON' Condition",
          content: "For the Zener diode to regulate, it must be in breakdown. \n\n**Condition:** The Thevenin voltage at the diode terminals (with diode removed) must be greater than $V_Z$."
        },
        {
          id: "calc",
          type: "numerical",
          title: "Check State",
          content: "$V_{in} = 10V$, $R = 1k\\Omega$, $R_L = 1k\\Omega$, $V_Z = 6V$.\nCalculate voltage divider output: $V = V_{in} \\times \\frac{R_L}{R + R_L}$.\nIs $V > V_Z$? Enter the calculated V.",
          numericAnswer: 5,
          numericTolerance: 0.1
        },
        {
          id: "result",
          type: "quiz",
          title: "Conclusion",
          content: "Since $5V < 6V$, the Zener diode is:",
          options: [
            { id: "A", text: "ON (Regulating at 6V)", isCorrect: false, explanation: "Not enough voltage to break down." },
            { id: "B", text: "OFF (Open Circuit)", isCorrect: true, explanation: "It acts as an open switch. $V_{out} = 5V$." }
          ]
        }
      ]
    },
    {
      id: "les-2-3-3-2",
      title: "Current Analysis",
      description: "Example 4.30",
      icon: "Calculator",
      slides: [
        {
          id: "setup",
          type: "theory",
          title: "Kirchhoff's Current Law",
          content: "At the node:\n$$ I_S = I_Z + I_L $$\n\nWhere:\n$I_S = \\frac{V_{in} - V_Z}{R}$ (Source Current)\n$I_L = \\frac{V_Z}{R_L}$ (Load Current)"
        },
        {
          id: "problem",
          type: "solution",
          title: "Solve for Iz",
          content: "Given: $V_{in}=20V, V_Z=10V, R=500\\Omega, R_L=1k\\Omega$.\nFind $I_Z$.",
          interactiveSteps: [
            { stepText: "Step 1: Find Load Current. $I_L = 10V / 1000\\Omega = 10mA$" },
            { stepText: "Step 2: Find Source Current. $I_S = (20-10)V / 500\\Omega = 20mA$" },
            { stepText: "Step 3: $I_Z = I_S - I_L = 20 - 10 = 10mA$" }
          ]
        },
        {
          id: "calc",
          type: "numerical",
          title: "Your Turn",
          content: "If $R_L$ is removed (No Load), what is $I_Z$? (Enter in mA)",
          numericAnswer: 20,
          numericTolerance: 1
        }
      ]
    }
  ]
};