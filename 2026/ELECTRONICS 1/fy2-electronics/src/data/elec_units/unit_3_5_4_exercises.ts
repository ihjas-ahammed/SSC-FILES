import { Unit } from '../../types';

export const UNIT_3_5_4: Unit = {
  id: "unit-3-5-4",
  title: "Section 3.5 Exercises",
  description: "Test your Biasing Skills",
  color: "duo-violet",
  lessons: [
    {
      id: "les-3-5-4-1",
      title: "Stability Check",
      description: "Compare methods",
      icon: "BarChart",
      slides: [
        {
          id: "q1",
          type: "quiz",
          title: "Ranking",
          content: "Which biasing method provides the BEST stabilization against temperature changes?",
          options: [
            { id: "A", text: "Fixed Bias (Base Resistor)", isCorrect: false, explanation: "Worst stability." },
            { id: "B", text: "Voltage Divider Bias", isCorrect: true, explanation: "Best stability due to negative feedback." }
          ]
        },
        {
          id: "q2",
          type: "numerical",
          title: "Fixed Bias S",
          content: "If a transistor has $\\beta = 100$ and is used in a Fixed Bias circuit, what is the Stability Factor $S$?",
          numericAnswer: 101,
          numericTolerance: 0
        }
      ]
    },
    {
      id: "les-3-5-4-2",
      title: "Circuit Calculation",
      description: "Finding Q-Point",
      icon: "Calculator",
      slides: [
        {
          id: "q3",
          type: "numerical",
          title: "Divider Bias Analysis",
          content: "Given: $V_{CC}=10V$, $R_1=10k$, $R_2=2.2k$. Ignore $I_B$. \nCalculate Base Voltage $V_B$.\n$$ V_B = 10 \\times \\frac{2.2}{10 + 2.2} $$",
          numericAnswer: 1.8,
          numericTolerance: 0.1
        },
        {
          id: "q4",
          type: "numerical",
          title: "Emitter Current",
          content: "If $V_B = 1.8V$ and $V_{BE} = 0.7V$, find voltage across $R_E$ ($V_E$).",
          numericAnswer: 1.1,
          numericTolerance: 0.1
        }
      ]
    }
  ]
};