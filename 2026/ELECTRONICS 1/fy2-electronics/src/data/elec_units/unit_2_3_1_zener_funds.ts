import { Unit } from '../../types';

export const UNIT_2_3_1: Unit = {
  id: "unit-2-3-1",
  title: "Zener Fundamentals",
  description: "Breakdown as a Feature",
  color: "duo-violet",
  lessons: [
    {
      id: "les-2-3-1-1",
      title: "The Zener Diode",
      description: "Designed for Breakdown",
      icon: "Zap",
      slides: [
        {
          id: "priming",
          type: "quiz",
          title: "Priming",
          content: "Normal diodes are destroyed if the reverse voltage exceeds the PIV. What if we designed a diode to handle this current safely?",
          options: [
            { id: "A", text: "It would act like a fuse", isCorrect: false, explanation: "Fuses break the circuit." },
            { id: "B", text: "It could maintain a constant voltage", isCorrect: true, explanation: "In breakdown, voltage remains constant while current changes." }
          ]
        },
        {
          id: "def",
          type: "theory",
          title: "Definition",
          content: "A **Zener Diode** is a properly doped crystal diode which has a sharp breakdown voltage and is designed to operate in the **reverse breakdown region**."
        },
        {
          id: "vis",
          type: "interactive_canvas",
          title: "Characteristics",
          content: "The Z-shape symbol and the sharp vertical drop in the reverse characteristics.",
          interactiveCanvasId: "zener-symbol-curve"
        },
        {
          id: "retrieval",
          type: "fill_in_blank",
          title: "Key Property",
          content: "In the breakdown region, the voltage across the Zener diode ($V_Z$) remains almost ___ even if current changes.",
          blankAnswer: "constant"
        }
      ]
    },
    {
      id: "les-2-3-1-2",
      title: "Breakdown Types",
      description: "Avalanche vs Zener",
      icon: "Minimize2",
      slides: [
        {
          id: "concept",
          type: "theory",
          title: "Two Mechanisms",
          content: "1. **Avalanche Breakdown:** Occurs at higher voltages ($>6V$). Caused by carrier collision multiplication.\n2. **Zener Breakdown:** Occurs at lower voltages ($<6V$). Caused by strong electric field tearing bonds."
        },
        {
          id: "distinction",
          type: "quiz",
          title: "Doping Check",
          content: "Zener breakdown requires a very strong Electric Field. Therefore, the depletion layer must be:",
          options: [
            { id: "A", text: "Wide (Lightly Doped)", isCorrect: false, explanation: "Wide layers reduce field strength." },
            { id: "B", text: "Thin (Heavily Doped)", isCorrect: true, explanation: "Heavy doping creates a thin layer, intensifying the field ($E=V/d$)." }
          ]
        }
      ]
    }
  ]
};