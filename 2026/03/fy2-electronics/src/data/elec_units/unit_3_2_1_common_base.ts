import { Unit } from '../../types';

export const UNIT_3_2_1: Unit = {
  id: "unit-3-2-1",
  title: "Common Base (CB)",
  description: "Configuration & Alpha",
  color: "duo-violet",
  lessons: [
    {
      id: "les-3-2-1-1",
      title: "CB Configuration",
      description: "Circuit Setup",
      icon: "GitPullRequest",
      slides: [
        {
          id: "intro",
          type: "quiz",
          title: "Priming",
          content: "A transistor has 3 terminals, but a circuit needs 4 connection points (2 Input, 2 Output). How do we solve this?",
          options: [
            { id: "A", text: "Add a 4th terminal", isCorrect: false, explanation: "We can't change the device." },
            { id: "B", text: "Make one terminal common", isCorrect: true, explanation: "One terminal is shared between input and output." }
          ]
        },
        {
          id: "theory",
          type: "theory",
          title: "Common Base Connection",
          content: "In this arrangement, the **Base** is common to both input and output circuits.\n\n*   **Input:** Applied between Emitter and Base.\n*   **Output:** Taken from Collector and Base."
        },
        {
          id: "vis",
          type: "interactive_canvas",
          title: "CB Circuit Diagram",
          content: "Note that the Base is grounded/common.",
          interactiveCanvasId: "cb-config"
        }
      ]
    },
    {
      id: "les-3-2-1-2",
      title: "Current Gain Alpha",
      description: "Amplification Factor",
      icon: "TrendingUp",
      slides: [
        {
          id: "def",
          type: "theory",
          title: "Current Amplification Factor ($\\alpha$)",
          content: "In CB connection, $\\alpha$ is the ratio of output current ($I_C$) to input current ($I_E$).\n\n$$ \\alpha = \\frac{\\Delta I_C}{\\Delta I_E} $$"
        },
        {
          id: "quiz",
          type: "quiz",
          title: "Value Check",
          content: "Since $I_E = I_B + I_C$ and $I_B > 0$, the value of $\\alpha$ must be:",
          options: [
            { id: "A", text: "Greater than 1", isCorrect: false, explanation: "Collector current cannot exceed Emitter current." },
            { id: "B", text: "Less than 1", isCorrect: true, explanation: "Typically 0.9 to 0.99." }
          ]
        }
      ]
    },
    {
      id: "les-3-2-1-3",
      title: "Leakage Current",
      description: "ICBO",
      icon: "Droplet",
      slides: [
        {
          id: "theory",
          type: "theory",
          title: "Total Collector Current",
          content: "Ideally $I_C = \\alpha I_E$. However, a leakage current flows due to minority carriers in the reverse-biased Collector-Base junction.\n\n$$ I_C = \\alpha I_E + I_{CBO} $$ \n\nWhere $I_{CBO}$ is Collector-Base current with Emitter Open."
        },
        {
          id: "fill",
          type: "fill_in_blank",
          title: "Recall",
          content: "$I_{CBO}$ is usually very small in Silicon transistors, in the range of ___ Amperes.",
          blankAnswer: "micro" // or nano, but text says micro generally, specific text context needed
        }
      ]
    }
  ]
};