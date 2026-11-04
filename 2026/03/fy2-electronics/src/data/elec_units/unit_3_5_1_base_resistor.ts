import { Unit } from '../../types';

export const UNIT_3_5_1: Unit = {
  id: "unit-3-5-1",
  title: "Base Resistor Method",
  description: "Fixed Bias",
  color: "duo-violet",
  lessons: [
    {
      id: "les-3-5-1-1",
      title: "The Circuit",
      description: "Simple but Unstable",
      icon: "Layout",
      slides: [
        {
          id: "desc",
          type: "theory",
          title: "Fixed Bias",
          content: "A high resistance $R_B$ is connected between the Base and the positive supply $V_{CC}$.\n\nThe required zero signal base current $I_B$ is provided by $V_{CC}$ flowing through $R_B$."
        },
        {
          id: "vis",
          type: "interactive_canvas",
          title: "Circuit Diagram",
          content: "Simple component count, but highly dependent on Beta.",
          interactiveCanvasId: "base-resistor-circuit"
        },
        {
          id: "analysis",
          type: "proof",
          title: "Circuit Analysis",
          content: "Applying KVL to the Base-Emitter loop:",
          proofSteps: [
            "$$ V_{CC} = I_B R_B + V_{BE} $$",
            "Rearranging for $I_B$:",
            "$$ I_B = \\frac{V_{CC} - V_{BE}}{R_B} $$",
            "Since $V_{CC} \\gg V_{BE}$, $I_B$ is effectively constant (fixed)."
          ]
        }
      ]
    },
    {
      id: "les-3-5-1-2",
      title: "Stability Analysis",
      description: "Why it fails",
      icon: "AlertTriangle",
      slides: [
        {
          id: "formula",
          type: "theory",
          title: "Stability Factor ($S$)",
          content: "For a Fixed Bias circuit:\n$$ S = \\beta + 1 $$\n\nThis is the **worst possible** stability. If $\\beta = 100$, then $S = 101$. Any change in leakage current is multiplied by 101."
        },
        {
          id: "check",
          type: "quiz",
          title: "Implication",
          content: "If the temperature rises, $I_{CO}$ increases. In a fixed bias circuit with high $S$, the Collector Current $I_C$ will:",
          options: [
            { id: "A", text: "Increase drastically", isCorrect: true, explanation: "Leading to shift in operating point or thermal runaway." },
            { id: "B", text: "Stay constant", isCorrect: false, explanation: "There is no feedback mechanism to stop it." }
          ]
        }
      ]
    }
  ]
};