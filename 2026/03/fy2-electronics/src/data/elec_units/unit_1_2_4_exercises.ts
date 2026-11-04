import { Unit } from '../../types';

export const UNIT_1_2_4: Unit = {
  id: "unit-1-2-4",
  title: "Section 1.2 Exercises",
  description: "Test your PN Junction knowledge",
  color: "duo-green",
  lessons: [
    {
      id: "les-1-2-4-1",
      title: "Conceptual Review",
      description: "Rapid Fire",
      icon: "CheckSquare",
      slides: [
        {
          id: "q1",
          type: "quiz",
          title: "Potential Barrier",
          content: "For a Silicon PN junction, the barrier potential is approximately:",
          options: [
            { id: "A", text: "0.3 V", isCorrect: false, explanation: "That is for Germanium." },
            { id: "B", text: "0.7 V", isCorrect: true, explanation: "Correct for Silicon." }
          ]
        },
        {
          id: "q2",
          type: "fill_in_blank",
          title: "Depletion Region",
          content: "The depletion region contains immobile ___ ions.",
          blankAnswer: "impurity" 
        },
        {
          id: "q3",
          type: "quiz",
          title: "Biasing",
          content: "If the P-terminal is connected to the Negative pole of the battery, the junction is:",
          options: [
            { id: "A", text: "Forward Biased", isCorrect: false, explanation: "Forward needs P to Positive." },
            { id: "B", text: "Reverse Biased", isCorrect: true, explanation: "P to Negative attracts holes away from junction." }
          ]
        }
      ]
    },
    {
      id: "les-1-2-4-2",
      title: "Logic & Application",
      description: "Deep thinking",
      icon: "Brain",
      slides: [
        {
          id: "q4",
          type: "quiz",
          title: "Doping Effect",
          content: "**Scenario:** We increase the doping level of the P and N sides significantly.\n**Prediction:** What happens to the depletion width?",
          options: [
            { id: "A", text: "Increases", isCorrect: false, explanation: "Higher charge density means ions are packed closer." },
            { id: "B", text: "Decreases", isCorrect: true, explanation: "High density of ions means a shorter distance is needed to build the barrier potential." }
          ]
        },
        {
          id: "q5",
          type: "quiz",
          title: "Temperature Effect",
          content: "If temperature increases, what happens to the Reverse Leakage Current?",
          options: [
            { id: "A", text: "Increases", isCorrect: true, explanation: "Heat generates more minority carriers (electron-hole pairs)." },
            { id: "B", text: "Decreases", isCorrect: false, explanation: "More thermal energy means more carriers." }
          ]
        }
      ]
    }
  ]
};