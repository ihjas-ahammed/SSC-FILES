import { Unit } from '../../types';

export const UNIT_3_4_2: Unit = {
  id: "unit-3-4-2",
  title: "Biasing Conditions",
  description: "Voltage Requirements",
  color: "duo-blue",
  lessons: [
    {
      id: "les-3-4-2-1",
      title: "Base-Emitter Voltage",
      description: "Keeping it Forward",
      icon: "ArrowRightCircle",
      slides: [
        {
          id: "rule",
          type: "theory",
          title: "Minimum $V_{BE}$",
          content: "To maintain forward bias, the instantaneous base-emitter voltage ($v_{BE}$) must not fall below the **Potential Barrier**.\n\n*   **Germanium:** $\\approx 0.5 V$\n*   **Silicon:** $\\approx 0.7 V$"
        },
        {
          id: "quiz",
          type: "quiz",
          title: "Silicon Check",
          content: "If $v_{BE}$ drops to 0.1V in a Silicon transistor, what happens?",
          options: [
            { id: "A", text: "It amplifies linearly", isCorrect: false, explanation: "" },
            { id: "B", text: "It cuts off", isCorrect: true, explanation: "0.1V is far below the 0.7V barrier potential needed to conduct." }
          ]
        }
      ]
    },
    {
      id: "les-3-4-2-2",
      title: "Collector-Emitter Voltage",
      description: "Avoiding Saturation",
      icon: "Shield",
      slides: [
        {
          id: "rule",
          type: "theory",
          title: "Minimum $V_{CE}$",
          content: "To maintain the collector-base reverse bias, the instantaneous $v_{CE}$ must not fall below the **Knee Voltage** ($V_{knee}$).\n\n*   **Silicon:** $\\approx 1 V$"
        },
        {
          id: "vis",
          type: "interactive_canvas",
          title: "Active Region",
          content: "Visualize the safe operating area between Cut-off and Saturation.",
          interactiveCanvasId: "active-region-plot"
        },
        {
          id: "check",
          type: "quiz",
          title: "Saturation",
          content: "If $v_{CE}$ drops below 1V, the collector-base junction becomes ___ biased.",
          options: [
            { id: "A", text: "Reverse", isCorrect: false, explanation: "That is the normal Active mode." },
            { id: "B", text: "Forward", isCorrect: true, explanation: "This pushes the transistor into Saturation (Switch ON state), distorting the signal." }
          ]
        }
      ]
    }
  ]
};