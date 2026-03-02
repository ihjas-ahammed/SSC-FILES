import { Unit } from '../../types';

export const UNIT_2_2_4: Unit = {
  id: "unit-2-2-4",
  title: "Section 2.2 Exercises",
  description: "Problem Solving",
  color: "duo-orange",
  lessons: [
    {
      id: "les-2-2-4-1",
      title: "Tracing Paths",
      description: "Logic check",
      icon: "GitCommit",
      slides: [
        {
          id: "q1",
          type: "quiz",
          title: "Bridge Conduction",
          content: "In a Bridge Rectifier, how many diodes are conducting at any given instant during the AC cycle?",
          options: [
            { id: "A", text: "One", isCorrect: false, explanation: "That would be an open circuit." },
            { id: "B", text: "Two", isCorrect: true, explanation: "Diagonally opposite pairs conduct together." }
          ]
        },
        {
          id: "q2",
          type: "quiz",
          title: "Diode Drops",
          content: "Because two diodes are in series during conduction in a Bridge Rectifier, the total voltage drop across the diodes is:",
          options: [
            { id: "A", text: "0.7V", isCorrect: false, explanation: "That is for one diode." },
            { id: "B", text: "1.4V", isCorrect: true, explanation: "Two Si diodes in series = 0.7V + 0.7V." }
          ]
        }
      ]
    },
    {
      id: "les-2-2-4-2",
      title: "Numerical Calculations",
      description: "Example 4.24",
      icon: "Calculator",
      slides: [
        {
          id: "q3",
          type: "numerical",
          title: "Transformer Math",
          content: "An AC supply of 230V RMS is applied to a transformer with turn ratio $N_1:N_2 = 10:1$.\n\nCalculate the RMS voltage across the secondary.",
          numericAnswer: 23,
          numericTolerance: 0.1
        },
        {
          id: "solution",
          type: "solution",
          title: "DC Voltage Output",
          content: "Using the 23V RMS secondary, calculate $V_{dc}$ for a **Half-Wave** Rectifier.",
          interactiveSteps: [
            { stepText: "First, find Peak Secondary Voltage: $V_{sm} = 23 \\times \\sqrt{2} = 32.53V$" },
            { stepText: "For Half-Wave, $V_{dc} = \\frac{V_{sm}}{\\pi}$" },
            { stepText: "Calculate: $32.53 / 3.1415 = 10.36V$" }
          ]
        },
        {
          id: "q4",
          type: "numerical",
          title: "Your turn",
          content: "If it were a **Full-Wave Bridge** rectifier using the same 32.53V peak secondary, what is $V_{dc}$? (Assume ideal diodes). \n$$ V_{dc} = \\frac{2V_{sm}}{\\pi} $$",
          numericAnswer: 20.7,
          numericTolerance: 0.1
        }
      ]
    }
  ]
};