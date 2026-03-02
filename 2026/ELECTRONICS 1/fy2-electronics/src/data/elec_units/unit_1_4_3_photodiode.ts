import { Unit } from '../../types';

export const UNIT_1_4_3: Unit = {
  id: "unit-1-4-3",
  title: "Photodiodes",
  description: "Detecting Light",
  color: "duo-orange",
  lessons: [
    {
      id: "les-1-4-3-1",
      title: "Operation Principle",
      description: "Reverse Bias Detector",
      icon: "Eye",
      slides: [
        {
          id: "def",
          type: "theory",
          title: "Definition",
          content: "A **Photodiode** is a pn junction operated in **Reverse Bias**.\n\nWhen light strikes the junction, it breaks covalent bonds, creating electron-hole pairs that increase the reverse current."
        },
        {
          id: "vis",
          type: "interactive_canvas",
          title: "Dark Current",
          content: "Even without light, a tiny 'Dark Current' flows. Light increases this current significantly.",
          interactiveCanvasId: "photodiode-dark-current"
        }
      ]
    },
    {
      id: "les-1-4-3-2",
      title: "Characteristics",
      description: "Light vs Current",
      icon: "BarChart",
      slides: [
        {
          id: "relation",
          type: "theory",
          title: "Linearity",
          content: "The Reverse Current ($I_R$) is directly proportional to the Light Intensity ($E$).\n$$ I_R = mE $$\nwhere $m$ is sensitivity."
        },
        {
          id: "quiz",
          type: "quiz",
          title: "Bias Check",
          content: "Why do we use Reverse Bias for photodiodes?",
          options: [
            { id: "A", text: "To reduce resistance", isCorrect: false, explanation: "" },
            { id: "B", text: "To make light effect noticeable", isCorrect: true, explanation: "In Forward bias, the huge current would mask the tiny change caused by light." }
          ]
        }
      ]
    },
    {
      id: "les-1-4-3-3",
      title: "Symbol & Package",
      description: "Visual ID",
      icon: "Tag",
      slides: [
        {
          id: "sym",
          type: "theory",
          title: "Symbol",
          content: "The symbol has two arrows pointing **inwards** towards the diode, representing incident photons."
        }
      ]
    }
  ]
};