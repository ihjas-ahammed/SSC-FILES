import { Unit } from '../../types';

export const UNIT_2_1_1: Unit = {
  id: "unit-2-1-1",
  title: "Rectification Concepts",
  description: "AC to DC",
  color: "duo-blue",
  lessons: [
    {
      id: "les-2-1-1-1",
      title: "What is Rectification?",
      description: "Definition",
      icon: "Activity",
      slides: [
        {
          id: "priming",
          type: "quiz",
          title: "Intuition Check",
          content: "Batteries provide Direct Current (DC). The wall outlet provides Alternating Current (AC). How does your phone charger work?",
          options: [
            { id: "A", text: "It uses AC directly", isCorrect: false, explanation: "Electronics require DC." },
            { id: "B", text: "It converts AC to DC", isCorrect: true, explanation: "This conversion process is called Rectification." }
          ]
        },
        {
          id: "def",
          type: "theory",
          title: "Rectification",
          content: "The process of converting Alternating Current (AC) into Direct Current (DC) is called **Rectification**.\n\nA device that performs this conversion is called a **Rectifier**."
        },
        {
          id: "vis",
          type: "interactive_canvas",
          title: "Block Diagram",
          content: "The basic flow of a rectifier circuit.",
          interactiveCanvasId: "rectifier-block-diagram"
        }
      ]
    },
    {
      id: "les-2-1-1-2",
      title: "Why use Diodes?",
      description: "Unidirectional Flow",
      icon: "ArrowRight",
      slides: [
        {
          id: "theory",
          type: "theory",
          title: "The Diode's Role",
          content: "A PN junction diode conducts current only in **one direction** (when Forward Biased).\n\nIf we apply an AC voltage (which reverses polarity every half-cycle) to a diode, it will block the current during the negative half-cycles. This naturally converts bi-directional AC into unidirectional DC."
        },
        {
          id: "check",
          type: "quiz",
          title: "Logic Check",
          content: "A diode acting as a rectifier behaves like a:",
          options: [
            { id: "A", text: "One-way valve", isCorrect: true, explanation: "It only lets current flow forward." },
            { id: "B", text: "Two-way street", isCorrect: false, explanation: "That would just be a wire, passing AC." }
          ]
        }
      ]
    },
    {
      id: "les-2-1-1-3",
      title: "Need for DC Supply",
      description: "Electronic requirements",
      icon: "Battery",
      slides: [
        {
          id: "theory",
          type: "theory",
          title: "Why DC?",
          content: "Power generation and transmission use AC for economic reasons (easy to step up/down voltage).\n\nHowever, almost all **electronic circuits** (transistors, ICs, logic gates) require a steady, unipolar DC voltage to establish proper operating points (biasing)."
        }
      ]
    }
  ]
};