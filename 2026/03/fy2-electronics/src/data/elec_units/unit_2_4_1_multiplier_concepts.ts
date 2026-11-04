import { Unit } from '../../types';

export const UNIT_2_4_1: Unit = {
  id: "unit-2-4-1",
  title: "Multiplier Concepts",
  description: "Stepping up voltage without transformers",
  color: "duo-orange",
  lessons: [
    {
      id: "les-2-4-1-1",
      title: "What is a Voltage Multiplier?",
      description: "Definition and logic",
      icon: "Zap",
      slides: [
        {
          id: "priming",
          type: "quiz",
          title: "Intuition Check",
          content: "We can use a step-up transformer to increase AC voltage. But if we want a DC voltage that is much higher than the input AC peak, what component can store voltage and stack it like batteries?",
          options: [
            { id: "A", text: "Resistors", isCorrect: false, explanation: "Resistors dissipate energy; they don't store it." },
            { id: "B", text: "Capacitors", isCorrect: true, explanation: "Capacitors store charge and can be wired to add voltages together." }
          ]
        },
        {
          id: "def",
          type: "theory",
          title: "The Definition",
          content: "A **Voltage Multiplier** uses diodes and capacitors to build a circuit that provides a DC output that is a multiple of the peak input AC voltage.\n\nE.g., A Doubler outputs $2V_m$, a Tripler $3V_m$."
        },
        {
          id: "retrieval",
          type: "fill_in_blank",
          title: "Recall",
          content: "A voltage multiplier increases the voltage based on the ___ input voltage, not the RMS.",
          blankAnswer: "peak"
        }
      ]
    },
    {
      id: "les-2-4-1-2",
      title: "Conservation of Energy",
      description: "No free lunch",
      icon: "Shield",
      slides: [
        {
          id: "theory",
          type: "theory",
          title: "The Trade-off",
          content: "Voltage multipliers do *not* amplify power. By the **Law of Conservation of Energy**:\n$$ P_{in} \\approx P_{out} $$\n\nIf a multiplier increases voltage by a factor $n$, the available current is decreased by approximately the same factor $n$."
        },
        {
          id: "elab",
          type: "quiz",
          title: "Critical Thinking",
          content: "**Assertion:** A voltage tripler is a great way to power a heavy motor that requires high voltage and high current.\n**Reason:** Triplers increase voltage without any current loss.",
          options: [
            { id: "A", text: "Both True", isCorrect: false, explanation: "Energy must be conserved." },
            { id: "B", text: "Both False", isCorrect: true, explanation: "Multipliers severely limit current. They are only used for low-current applications (like CRTs)." }
          ]
        },
        {
          id: "flash",
          type: "quiz",
          title: "Flashback",
          content: "What is the Peak Inverse Voltage (PIV) rating required for a Center-Tap Full-Wave rectifier?",
          options: [
            { id: "A", text: "$V_m$", isCorrect: false, explanation: "That's for a bridge rectifier." },
            { id: "B", text: "$2V_m$", isCorrect: true, explanation: "Correct. The non-conducting diode sees the full secondary voltage." }
          ]
        }
      ]
    }
  ]
};