import { Unit } from '../../types';

export const UNIT_3_2_2: Unit = {
  id: "unit-3-2-2",
  title: "Common Emitter (CE)",
  description: "The most popular config",
  color: "duo-violet",
  lessons: [
    {
      id: "les-3-2-2-1",
      title: "CE Configuration",
      description: "Why it's used",
      icon: "Star",
      slides: [
        {
          id: "intro",
          type: "quiz",
          title: "Priming",
          content: "The Common Base config has a current gain < 1. If we want high current gain, we need a configuration where the input current is very small ($I_B$). This is:",
          options: [
            { id: "A", text: "Common Emitter", isCorrect: true, explanation: "Input is Base, Output is Collector." },
            { id: "B", text: "Common Collector", isCorrect: false, explanation: "" }
          ]
        },
        {
          id: "theory",
          type: "theory",
          title: "Common Emitter",
          content: "Input is applied between **Base and Emitter**. Output is taken from **Collector and Emitter**.\n\nThis is the most efficient configuration for amplification."
        },
        {
          id: "vis",
          type: "interactive_canvas",
          title: "CE Circuit Diagram",
          content: "Note the Emitter is common to ground.",
          interactiveCanvasId: "ce-config"
        }
      ]
    },
    {
      id: "les-3-2-2-2",
      title: "Current Gain Beta",
      description: "Base Amplification",
      icon: "ChevronsUp",
      slides: [
        {
          id: "def",
          type: "theory",
          title: "Base Current Amplification ($\\beta$)",
          content: "The ratio of change in collector current ($I_C$) to change in base current ($I_B$).\n\n$$ \\beta = \\frac{\\Delta I_C}{\\Delta I_B} $$"
        },
        {
          id: "calc",
          type: "numerical",
          title: "Magnitude",
          content: "Since $I_B$ is very small (e.g. 5% of $I_E$), $\\beta$ is large. \nIf $I_C = 100 mA$ and $I_B = 1 mA$, calculate $\\beta$.",
          numericAnswer: 100,
          numericTolerance: 0
        }
      ]
    },
    {
      id: "les-3-2-2-3",
      title: "Alpha vs Beta",
      description: "The Relationship",
      icon: "Link",
      slides: [
        {
          id: "dest",
          type: "theory",
          title: "The Formula",
          content: "We will derive the relationship:\n$$ \\beta = \\frac{\\alpha}{1-\\alpha} $$"
        },
        {
          id: "proof",
          type: "proof",
          title: "Derivation",
          content: "Start with $I_E = I_C + I_B$.",
          proofSteps: [
            "1. Divide by $I_C$: $\\frac{I_E}{I_C} = 1 + \\frac{I_B}{I_C}$",
            "2. Substitute $\\alpha = I_C/I_E$ and $\\beta = I_C/I_B$: $\\frac{1}{\\alpha} = 1 + \\frac{1}{\\beta}$",
            "3. Rearrange: $\\frac{1}{\\beta} = \\frac{1}{\\alpha} - 1 = \\frac{1-\\alpha}{\\alpha}$",
            "4. Invert: $\\beta = \\frac{\\alpha}{1-\\alpha}$"
          ]
        },
        {
          id: "check",
          type: "numerical",
          title: "Calculation",
          content: "If $\\alpha = 0.99$, calculate $\\beta$. \n$$ \\beta = \\frac{0.99}{1-0.99} $$",
          numericAnswer: 99,
          numericTolerance: 0.1
        }
      ]
    }
  ]
};