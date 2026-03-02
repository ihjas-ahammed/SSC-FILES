import { Unit } from '../../types';

export const UNIT_2_3_4: Unit = {
  id: "unit-2-3-4",
  title: "Section 2.3 Exercises",
  description: "Design Problems",
  color: "duo-violet",
  lessons: [
    {
      id: "les-2-3-4-1",
      title: "Design a Regulator",
      description: "Calculating R",
      icon: "PenTool",
      slides: [
        {
          id: "problem",
          type: "numerical",
          title: "Series Resistor",
          content: "Design a regulator for $V_Z = 5V$. Input is $12V$. Max Zener current is $100mA$. Load current is negligible ($0$).\nCalculate the minimum resistance $R$ (in $\\Omega$) to prevent burnout.\n$$ R = \\frac{V_{in} - V_Z}{I_{max}} $$",
          numericAnswer: 70,
          numericTolerance: 5
        },
        {
          id: "safety",
          type: "quiz",
          title: "Safety Check",
          content: "If we use a resistor smaller than $70\\Omega$, what happens?",
          options: [
            { id: "A", text: "Regulation improves", isCorrect: false, explanation: "No." },
            { id: "B", text: "Zener burns out", isCorrect: true, explanation: "Current exceeds rating." }
          ]
        }
      ]
    }
  ]
};