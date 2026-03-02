import { Unit } from '../../types';

export const UNIT_1_2_3: Unit = {
  id: "unit-1-2-3",
  title: "Biasing Mechanics",
  description: "Forward & Reverse Operations",
  color: "duo-green",
  lessons: [
    {
      id: "les-1-2-3-1",
      title: "Zero Bias",
      description: "Equilibrium State",
      icon: "MinusCircle",
      slides: [
        {
          id: "intro",
          type: "theory",
          title: "No External Voltage",
          content: "When no external voltage is applied:\n\nThe **Barrier Potential** prevents majority carriers from crossing.\nA very small current flows due to *minority* carriers (thermally generated), but net current is effectively zero."
        }
      ]
    },
    {
      id: "les-1-2-3-2",
      title: "Forward Bias",
      description: "Opening the gate",
      icon: "ArrowRightCircle",
      slides: [
        {
          id: "setup",
          type: "theory",
          title: "The Setup",
          content: "To **Forward Bias** a PN junction:\n1. Connect **Positive** terminal of battery to **p-type**.\n2. Connect **Negative** terminal to **n-type**.\n\n$V_{ext}$ opposes $V_{barrier}$."
        },
        {
          id: "mech",
          type: "proof",
          title: "Mechanism",
          content: "What happens inside?",
          proofSteps: [
            "1. Positive terminal repels holes in p-region towards the junction.",
            "2. Negative terminal repels electrons in n-region towards the junction.",
            "3. The depletion layer width **decreases**.",
            "4. The barrier potential is lowered.",
            "5. Carriers cross the junction easily -> Current flows."
          ]
        },
        {
          id: "vis",
          type: "interactive_canvas",
          title: "Forward Bias Visualization",
          content: "Observe the depletion layer shrinking.",
          interactiveCanvasId: "pn-bias-forward"
        },
        {
          id: "check",
          type: "quiz",
          title: "Concept Check",
          content: "In forward bias, the resistance of the junction is:",
          options: [
            { id: "A", text: "Very High", isCorrect: false, explanation: "That's reverse bias." },
            { id: "B", text: "Very Low", isCorrect: true, explanation: "The barrier is overcome, allowing easy flow." }
          ]
        }
      ]
    },
    {
      id: "les-1-2-3-3",
      title: "Reverse Bias",
      description: "Closing the gate",
      icon: "XCircle",
      slides: [
        {
          id: "setup",
          type: "theory",
          title: "The Setup",
          content: "To **Reverse Bias** a PN junction:\n1. Connect **Positive** terminal to **n-type**.\n2. Connect **Negative** terminal to **p-type**.\n\n$V_{ext}$ aids $V_{barrier}$."
        },
        {
          id: "mech",
          type: "proof",
          title: "Mechanism",
          content: "Why does current stop?",
          proofSteps: [
            "1. Positive terminal attracts electrons in n-region *away* from junction.",
            "2. Negative terminal attracts holes in p-region *away* from junction.",
            "3. The depletion layer width **increases**.",
            "4. Barrier potential rises.",
            "5. Majority carriers cannot cross."
          ]
        },
        {
          id: "vis",
          type: "interactive_canvas",
          title: "Reverse Bias Visualization",
          content: "Observe the depletion layer widening.",
          interactiveCanvasId: "pn-bias-reverse"
        },
        {
          id: "leakage",
          type: "theory",
          title: "Leakage Current",
          content: "Although majority carriers are blocked, **Minority Carriers** (electrons in p, holes in n) are helped across by the field. This causes a tiny **Reverse Saturation Current** ($I_s$)."
        }
      ]
    }
  ]
};