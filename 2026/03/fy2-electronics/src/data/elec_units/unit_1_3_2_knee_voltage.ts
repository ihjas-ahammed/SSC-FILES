import { Unit } from '../../types';

export const UNIT_1_3_2: Unit = {
  id: "unit-1-3-2",
  title: "Knee Voltage",
  description: "The conduction threshold",
  color: "duo-violet",
  lessons: [
    {
      id: "les-1-3-2-1",
      title: "Definition of Knee",
      description: "When does it turn ON?",
      icon: "TrendingUp",
      slides: [
        {
          id: "priming",
          type: "quiz",
          title: "Intuition",
          content: "Imagine pushing a heavy door. You push a little, nothing happens. You push harder, suddenly it opens. The force required to open it is analogous to:",
          options: [
            { id: "A", text: "Breakdown Voltage", isCorrect: false, explanation: "That's when the door breaks." },
            { id: "B", text: "Knee Voltage", isCorrect: true, explanation: "The threshold to start conduction." }
          ]
        },
        {
          id: "def",
          type: "theory",
          title: "Knee Voltage ($V_K$)",
          content: "The forward voltage at which the current through the junction starts to increase rapidly is called the **Knee Voltage** (or Cut-in Voltage).\n\nBelow $V_K$, the current is negligible because the Potential Barrier has not been overcome."
        }
      ]
    },
    {
      id: "les-1-3-2-2",
      title: "Si vs Ge",
      description: "Material Differences",
      icon: "GitCompare",
      slides: [
        {
          id: "vis",
          type: "interactive_canvas",
          title: "Comparison",
          content: "Comparing the turn-on points for Silicon and Germanium.",
          interactiveCanvasId: "knee-voltage-comparison"
        },
        {
          id: "values",
          type: "theory",
          title: "Standard Values",
          content: "Memorize these values:\n\n*   **Germanium (Ge):** $V_K \\approx 0.3 V$\n*   **Silicon (Si):** $V_K \\approx 0.7 V$\n\nSilicon has a higher barrier potential, so it needs more voltage to turn on."
        },
        {
          id: "recall",
          type: "fill_in_blank",
          title: "Quick Recall",
          content: "The knee voltage for a Silicon diode is approximately ___ V.",
          blankAnswer: "0.7"
        }
      ]
    },
    {
      id: "les-1-3-2-3",
      title: "Resistance Types",
      description: "Static vs Dynamic",
      icon: "Divide",
      slides: [
        {
          id: "static",
          type: "theory",
          title: "DC (Static) Resistance",
          content: "The resistance offered by the diode to a DC forward current.\n$$ R_{DC} = \\frac{V}{I} $$"
        },
        {
          id: "dynamic",
          type: "theory",
          title: "AC (Dynamic) Resistance",
          content: "The resistance offered to a changing (AC) forward current.\n$$ r_{ac} = \\frac{\\Delta V}{\\Delta I} $$\n\nIt is the **reciprocal of the slope** of the V-I curve."
        }
      ]
    }
  ]
};