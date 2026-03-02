import { Unit } from '../../types';

export const UNIT_2_4_4: Unit = {
  id: "unit-2-4-4",
  title: "Section 2.4 Exercises",
  description: "Test your Multiplier knowledge",
  color: "duo-orange",
  lessons: [
    {
      id: "les-2-4-4-1",
      title: "Conceptual Review",
      description: "Multipliers in Action",
      icon: "CheckCircle",
      slides: [
        {
          id: "q1",
          type: "quiz",
          title: "Energy Check",
          content: "A voltage multiplier increases peak input voltage by a factor of $n$. What happens to the available peak input current?",
          options: [
            { id: "A", text: "Increases by n", isCorrect: false, explanation: "That would violate conservation of energy." },
            { id: "B", text: "Decreases by n", isCorrect: true, explanation: "Power is conserved ($P=VI$). If V goes up, I goes down." }
          ]
        },
        {
          id: "q2",
          type: "fill_in_blank",
          title: "Components",
          content: "A voltage doubler uses diodes and ___ to step up the voltage.",
          blankAnswer: "capacitors"
        }
      ]
    },
    {
      id: "les-2-4-4-2",
      title: "Calculation Check",
      description: "Peak math",
      icon: "Hash",
      slides: [
        {
          id: "q3",
          type: "numerical",
          title: "Doubler Output",
          content: "An AC supply with an RMS voltage of $10V$ is fed into a half-wave voltage doubler.\nWhat is the ideal unloaded DC output voltage? (Hint: $V_m = 10 \times 1.414$)",
          numericAnswer: 28.3,
          numericTolerance: 0.2
        },
        {
          id: "sol",
          type: "solution",
          title: "Solution Steps",
          content: "Review the calculation.",
          interactiveSteps: [
            { stepText: "First find Peak Voltage: $V_m = 10 \times \\sqrt{2} = 14.14V$" },
            { stepText: "A doubler outputs $2V_m$." },
            { stepText: "$2 \times 14.14 = 28.28V$" }
          ]
        }
      ]
    }
  ]
};