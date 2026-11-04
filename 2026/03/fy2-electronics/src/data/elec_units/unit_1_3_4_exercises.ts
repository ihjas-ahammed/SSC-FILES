import { Unit } from '../../types';

export const UNIT_1_3_4: Unit = {
  id: "unit-1-3-4",
  title: "Section 1.3 Exercises",
  description: "Calculations & Analysis",
  color: "duo-violet",
  lessons: [
    {
      id: "les-1-3-4-1",
      title: "Resistance Calculation",
      description: "Static vs Dynamic",
      icon: "Calculator",
      slides: [
        {
          id: "q1",
          type: "numerical",
          title: "Static Resistance",
          content: "At a forward voltage of 0.8V, the current is 10mA. Calculate the DC resistance ($R_{DC}$) in Ohms.",
          numericAnswer: 80,
          numericTolerance: 1
        },
        {
          id: "q2",
          type: "numerical",
          title: "Dynamic Resistance",
          content: "If changing voltage by 0.1V changes current by 2mA, calculate $r_{ac}$ in Ohms.\n$$ r_{ac} = \\frac{\\Delta V}{\\Delta I} $$",
          numericAnswer: 50,
          numericTolerance: 1
        }
      ]
    },
    {
      id: "les-1-3-4-2",
      title: "Curve Interpretation",
      description: "Reading graphs",
      icon: "BarChart2",
      slides: [
        {
          id: "q3",
          type: "quiz",
          title: "Identify Material",
          content: "You measure a diode's V-I curve and find the current rises sharply at 0.3V. The material is likely:",
          options: [
            { id: "A", text: "Silicon", isCorrect: false, explanation: "Silicon turns on at 0.7V." },
            { id: "B", text: "Germanium", isCorrect: true, explanation: "Correct. 0.3V is the knee voltage for Ge." }
          ]
        },
        {
          id: "q4",
          type: "quiz",
          title: "Temperature Check",
          content: "If temperature increases, the V-I curve shifts to the ___.",
          options: [
            { id: "A", text: "Left (Lower Knee Voltage)", isCorrect: true, explanation: "More thermal energy helps overcome the barrier earlier." },
            { id: "B", text: "Right (Higher Knee Voltage)", isCorrect: false, explanation: "Incorrect." }
          ]
        }
      ]
    }
  ]
};