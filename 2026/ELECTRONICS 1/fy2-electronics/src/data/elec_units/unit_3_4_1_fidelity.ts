import { Unit } from '../../types';

export const UNIT_3_4_1: Unit = {
  id: "unit-3-4-1",
  title: "Fidelity Concepts",
  description: "Defining Faithful Amplification",
  color: "duo-blue",
  lessons: [
    {
      id: "les-3-4-1-1",
      title: "What is Faithful?",
      description: "Shape vs Size",
      icon: "Activity",
      slides: [
        {
          id: "priming",
          type: "quiz",
          title: "Priming",
          content: "If an amplifier makes a signal louder but cuts off the bottom half of the wave, is it useful for music?",
          options: [
            { id: "A", text: "Yes", isCorrect: false, explanation: "It would sound terribly distorted." },
            { id: "B", text: "No", isCorrect: true, explanation: "We need the *shape* to remain unchanged. This is 'Fidelity'." }
          ]
        },
        {
          id: "def",
          type: "theory",
          title: "Faithful Amplification",
          content: "The process of raising the strength of a weak signal without any change in its **general shape** is known as faithful amplification."
        },
        {
          id: "vis",
          type: "interactive_canvas",
          title: "Waveform Comparison",
          content: "See the difference between faithful amplification and clipped (distorted) output.",
          interactiveCanvasId: "faithful-vs-clipped"
        }
      ]
    },
    {
      id: "les-3-4-1-2",
      title: "Zero Signal Collector Current",
      description: "The DC Bias",
      icon: "Battery",
      slides: [
        {
          id: "problem",
          type: "theory",
          title: "The Problem with AC",
          content: "Transistors only conduct current in one direction. If we apply a pure AC signal, the negative half-cycle would turn the transistor **OFF** (Cut-off), leading to distortion."
        },
        {
          id: "solution",
          type: "proof",
          title: "The Solution",
          content: "How do we keep it ON?",
          proofSteps: [
            "1. Apply a DC voltage ($V_{BB}$) to the base.",
            "2. This establishes a steady **Zero Signal Collector Current** ($I_C$).",
            "3. The AC signal rides on top of this DC level.",
            "4. Even at the negative peak of the AC, the total current remains positive."
          ]
        },
        {
          id: "check",
          type: "quiz",
          title: "Condition",
          content: "To avoid cut-off, the Zero Signal Collector Current must be ___ the maximum collector current swing due to the signal.",
          options: [
            { id: "A", text: "Less than", isCorrect: false, explanation: "That would clip the negative peak." },
            { id: "B", text: "Greater than or equal to", isCorrect: true, explanation: "Correct. $I_{DC} \\ge I_{ac(peak)}$." }
          ]
        }
      ]
    }
  ]
};