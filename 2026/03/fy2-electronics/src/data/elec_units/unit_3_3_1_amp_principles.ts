import { Unit } from '../../types';

export const UNIT_3_3_1: Unit = {
  id: "unit-3-3-1",
  title: "Amplifier Principles",
  description: "Transfer + Resistor",
  color: "duo-orange",
  lessons: [
    {
      id: "les-3-3-1-1",
      title: "What is Amplification?",
      description: "Raising strength",
      icon: "Maximize",
      slides: [
        {
          id: "def",
          type: "theory",
          title: "Definition",
          content: "**Amplification** is the process of raising the strength of a weak signal without changing its shape.\n\nThe transistor transfers input signal current from a low resistance circuit to a high resistance circuit."
        },
        {
          id: "etymology",
          type: "quiz",
          title: "Name Origin",
          content: "The word 'Transistor' is a contraction of:",
          options: [
            { id: "A", text: "Transformer Resistor", isCorrect: false, explanation: "" },
            { id: "B", text: "Transfer Resistor", isCorrect: true, explanation: "Correct." }
          ]
        }
      ]
    },
    {
      id: "les-3-3-1-2",
      title: "The Circuit",
      description: "Standard Setup",
      icon: "Cpu",
      slides: [
        {
          id: "circuit",
          type: "interactive_canvas",
          title: "Common Emitter Amplifier",
          content: "Input at Base, Output at Collector. Biasing provided by $V_{BB}$ and $V_{CC}$.",
          interactiveCanvasId: "ce-amplifier-circuit"
        },
        {
          id: "check",
          type: "quiz",
          title: "Biasing Rule",
          content: "For faithful amplification, the Emitter-Base junction must always be:",
          options: [
            { id: "A", text: "Forward Biased", isCorrect: true, explanation: "Even during negative signal peaks." },
            { id: "B", text: "Reverse Biased", isCorrect: false, explanation: "This would cut off the transistor." }
          ]
        }
      ]
    },
    {
      id: "les-3-3-1-3",
      title: "Load Resistance",
      description: "Converting I to V",
      icon: "Activity",
      slides: [
        {
          id: "theory",
          type: "theory",
          title: "Role of RC",
          content: "The transistor amplifies Current ($I_B \\to I_C$). To get an output Voltage, we place a **Load Resistor ($R_C$)** in the collector.\n\n$$ V_{out} = V_{CC} - I_C R_C $$"
        }
      ]
    }
  ]
};