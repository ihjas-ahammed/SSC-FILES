import { Unit } from '../../types';

export const UNIT_3_4_3: Unit = {
  id: "unit-3-4-3",
  title: "Stabilization",
  description: "Fighting Temperature",
  color: "duo-blue",
  lessons: [
    {
      id: "les-3-4-3-1",
      title: "Why Stabilize?",
      description: "Temperature Effects",
      icon: "Thermometer",
      slides: [
        {
          id: "intro",
          type: "quiz",
          title: "Intuition",
          content: "Transistors are semiconductors. When they heat up, what happens to their leakage current?",
          options: [
            { id: "A", text: "Decreases", isCorrect: false, explanation: "" },
            { id: "B", text: "Increases", isCorrect: true, explanation: "Heat generates more minority carriers." }
          ]
        },
        {
          id: "theory",
          type: "theory",
          title: "Thermal Runaway",
          content: "1. Temp $\\uparrow$ $\\to$ Leakage ($I_{CBO}$) $\\uparrow$\n2. Collector Current ($I_C$) $\\uparrow$ (since $I_C = \\beta I_B + (\\beta+1)I_{CBO}$)\n3. Power Dissipation ($I_C^2 R$) $\\uparrow$ $\\to$ More Heat.\n\nThis cycle can lead to self-destruction called **Thermal Runaway**."
        }
      ]
    },
    {
      id: "les-3-4-3-2",
      title: "Stability Factor S",
      description: "Measuring Stability",
      icon: "Activity",
      slides: [
        {
          id: "def",
          type: "theory",
          title: "Stability Factor ($S$)",
          content: "The rate of change of collector current $I_C$ with respect to the leakage current $I_{CO}$ at constant $\\beta$ and $I_B$.\n\n$$ S = \\frac{dI_C}{dI_{CO}} $$"
        },
        {
          id: "ideal",
          type: "quiz",
          title: "Ideal Value",
          content: "For a stable circuit, we want $I_C$ to change as *little* as possible when $I_{CO}$ changes. Therefore, we want $S$ to be:",
          options: [
            { id: "A", text: "As small as possible", isCorrect: true, explanation: "Ideally S=1." },
            { id: "B", text: "As large as possible", isCorrect: false, explanation: "Large S means highly unstable." }
          ]
        }
      ]
    }
  ]
};