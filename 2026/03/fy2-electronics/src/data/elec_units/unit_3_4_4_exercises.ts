import { Unit } from '../../types';

export const UNIT_3_4_4: Unit = {
  id: "unit-3-4-4",
  title: "Section 3.4 Exercises",
  description: "Check your understanding",
  color: "duo-blue",
  lessons: [
    {
      id: "les-3-4-4-1",
      title: "Distortion Logic",
      description: "Identifying Causes",
      icon: "Search",
      slides: [
        {
          id: "q1",
          type: "quiz",
          title: "Diagnosis",
          content: "An amplifier output has the negative half-cycles completely missing. The likely cause is:",
          options: [
            { id: "A", text: "Saturation Clipping", isCorrect: false, explanation: "Usually affects peaks or both sides." },
            { id: "B", text: "Cut-off Clipping", isCorrect: true, explanation: "The Zero Signal Collector Current is too low, so the negative swing shuts the transistor off." }
          ]
        },
        {
          id: "q2",
          type: "fill_in_blank",
          title: "Design",
          content: "If the peak signal current is $2 mA$, the zero signal collector current must be at least ___ mA.",
          blankAnswer: "2"
        }
      ]
    }
  ]
};