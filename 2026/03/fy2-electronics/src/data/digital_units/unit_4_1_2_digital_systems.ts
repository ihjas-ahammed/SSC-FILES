import { Unit } from '../../types';

export const UNIT_4_1_2: Unit = {
  id: "unit-4-1-2",
  title: "Digital Systems",
  description: "Circuits & Reliability",
  color: "duo-indigo",
  lessons: [
    {
      id: "les-4-1-2-1",
      title: "Digital Circuits",
      description: "Definition",
      icon: "Cpu",
      slides: [
        {
          id: "def",
          type: "theory",
          title: "Definition",
          content: "An electronic circuit that handles only a digital signal is called a **Digital Circuit**.\n\nThe output voltage is either Low or High, and no other value."
        },
        {
          id: "states",
          type: "theory",
          title: "Two-State Operation",
          content: "Digital operation is a **Two-States Operation**.\n\n*   High / Low\n*   ON / OFF\n*   1 / 0"
        }
      ]
    },
    {
      id: "les-4-1-2-2",
      title: "Physical Mechanism",
      description: "Transistor States",
      icon: "Zap",
      slides: [
        {
          id: "predict",
          type: "quiz",
          title: "Transistor Mode",
          content: "For a transistor to act as a digital switch (ON/OFF), which regions of operation do we use?",
          options: [
            { id: "A", text: "Active Region only", isCorrect: false, explanation: "That is for amplification (Analog)." },
            { id: "B", text: "Cut-off and Saturation", isCorrect: true, explanation: "Cut-off = OFF (Open switch), Saturation = ON (Closed switch)." }
          ]
        },
        {
          id: "vis",
          type: "interactive_canvas",
          title: "Visualizing States",
          content: "Low (Cut-off) vs High (Saturation).",
          interactiveCanvasId: "digital-states-visual"
        }
      ]
    },
    {
      id: "les-4-1-2-3",
      title: "Reliability",
      description: "Why Digital won",
      icon: "ShieldCheck",
      slides: [
        {
          id: "theory",
          type: "theory",
          title: "Reliability",
          content: "Digital circuits are far more reliable than analog.\n\n**Reason:** It is easy to recognize a signal as either High or Low. Small noise fluctuations don't change the state (a 4.8V signal is still read as High)."
        },
        {
          id: "quiz",
          type: "quiz",
          title: "Noise Immunity",
          content: "In a 5V digital system, if noise drops the voltage to 4.5V, how is it interpreted?",
          options: [
            { id: "A", text: "As a 'Medium' value", isCorrect: false, explanation: "Digital has no medium." },
            { id: "B", text: "Still as High (1)", isCorrect: true, explanation: "It is within the margin of the High state." }
          ]
        }
      ]
    }
  ]
};