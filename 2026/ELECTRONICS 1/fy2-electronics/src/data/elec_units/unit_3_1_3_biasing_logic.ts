import { Unit } from '../../types';

export const UNIT_3_1_3: Unit = {
  id: "unit-3-1-3",
  title: "Biasing Logic",
  description: "How to turn it on",
  color: "duo-blue",
  lessons: [
    {
      id: "les-3-1-3-1",
      title: "The Golden Rule",
      description: "Active Region",
      icon: "CheckCircle",
      slides: [
        {
          id: "rule",
          type: "theory",
          title: "Biasing for Amplification",
          content: "For a transistor to act as an amplifier (Active Region):\n1. **Emitter-Base Junction:** Forward Biased (Low resistance).\n2. **Collector-Base Junction:** Reverse Biased (High resistance)."
        },
        {
          id: "mnemonic",
          type: "fill_in_blank",
          title: "Mnemonic",
          content: "**Forward** In, **___** Out.",
          blankAnswer: "reverse"
        }
      ]
    },
    {
      id: "les-3-1-3-2",
      title: "Current Flow Mechanism",
      description: "NPN Operation",
      icon: "Wind",
      slides: [
        {
          id: "vis",
          type: "interactive_canvas",
          title: "Carrier Flow",
          content: "100% Electrons leave Emitter. 5% recombine in Base. 95% reach Collector.",
          interactiveCanvasId: "bjt-current-flow"
        },
        {
          id: "calc",
          type: "quiz",
          title: "Current Equation",
          content: "Based on Kirchhoff's Current Law, which equation holds true?",
          options: [
            { id: "A", text: "$I_C = I_E + I_B$", isCorrect: false, explanation: "Emitter supplies both." },
            { id: "B", text: "$I_E = I_C + I_B$", isCorrect: true, explanation: "Emitter current splits into Base and Collector currents." }
          ]
        }
      ]
    }
  ]
};