import { Unit } from '../../types';

export const UNIT_2_2_3: Unit = {
  id: "unit-2-2-3",
  title: "Full-Wave Bridge",
  description: "The industry standard",
  color: "duo-orange",
  lessons: [
    {
      id: "les-2-2-3-1",
      title: "Bridge Architecture",
      description: "Four diodes",
      icon: "Square",
      slides: [
        {
          id: "def",
          type: "theory",
          title: "The Setup",
          content: "Eliminates the need for a bulky center-tapped transformer by using **four diodes** ($D_1, D_2, D_3, D_4$).\n\n- Positive Half-Cycle: $D_1$ and $D_3$ conduct.\n- Negative Half-Cycle: $D_2$ and $D_4$ conduct."
        },
        {
          id: "vis",
          type: "interactive_canvas",
          title: "Current Path",
          content: "Visualizing the current flow through diagonally opposite diodes.",
          interactiveCanvasId: "bridge-path-pos"
        }
      ]
    },
    {
      id: "les-2-2-3-2",
      title: "Advantages",
      description: "Why use the bridge?",
      icon: "ThumbsUp",
      slides: [
        {
          id: "theory",
          type: "theory",
          title: "Benefits over Center-Tap",
          content: "1. **No Center Tap Needed:** Transformers are cheaper.\n2. **Lower PIV:** The Peak Inverse Voltage is only $V_m$ (not $2V_m$).\n3. **Higher Output:** Output voltage is twice that of a center-tap for the same transformer secondary."
        },
        {
          id: "check",
          type: "quiz",
          title: "Frequency Check",
          content: "Since it is a Full-Wave rectifier, the output frequency is:",
          options: [
            { id: "A", text: "$f_{in}$", isCorrect: false, explanation: "That's Half-Wave." },
            { id: "B", text: "$2f_{in}$", isCorrect: true, explanation: "Correct. Like the center-tap, it doubles the frequency." }
          ]
        }
      ]
    }
  ]
};