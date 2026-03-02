import { Unit } from '../../types';

export const UNIT_3_1_4: Unit = {
  id: "unit-3-1-4",
  title: "Section 3.1 Exercises",
  description: "Test your BJT knowledge",
  color: "duo-blue",
  lessons: [
    {
      id: "les-3-1-4-1",
      title: "Identifying Terminals",
      description: "Visual Quiz",
      icon: "Crosshair",
      slides: [
        {
          id: "q1",
          type: "quiz",
          title: "Identify",
          content: "Which terminal is physically the largest?",
          options: [
            { id: "A", text: "Emitter", isCorrect: false, explanation: "Moderate size." },
            { id: "B", text: "Collector", isCorrect: true, explanation: "Largest to handle heat dissipation." }
          ]
        },
        {
          id: "q2",
          type: "quiz",
          title: "Identify",
          content: "Which terminal is most heavily doped?",
          options: [
            { id: "A", text: "Emitter", isCorrect: true, explanation: "Needs to inject massive amounts of carriers." },
            { id: "B", text: "Base", isCorrect: false, explanation: "Lightly doped." }
          ]
        }
      ]
    },
    {
      id: "les-3-1-4-2",
      title: "Current Vectors",
      description: "Direction of flow",
      icon: "ArrowRight",
      slides: [
        {
          id: "q3",
          type: "fill_in_blank",
          title: "NPN Direction",
          content: "In an NPN transistor symbol, the arrow on the emitter points ___.",
          blankAnswer: "out"
        },
        {
          id: "q4",
          type: "numerical",
          title: "Current Calc",
          content: "If $I_E = 10mA$ and $I_C = 9.8mA$, calculate the Base Current $I_B$ in mA.",
          numericAnswer: 0.2,
          numericTolerance: 0.05
        }
      ]
    }
  ]
};