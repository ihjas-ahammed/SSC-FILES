import { Unit } from '../../types';

export const UNIT_2_3_2: Unit = {
  id: "unit-2-3-2",
  title: "Capacitor Filters",
  description: "The parallel approach",
  color: "duo-blue",
  lessons: [
    {
      id: "les-2-3-2-1",
      title: "Shunt Capacitor",
      description: "Wiring the filter",
      icon: "Layers",
      slides: [
        {
          id: "predict",
          type: "quiz",
          title: "Prediction",
          content: "We know a capacitor blocks DC and passes AC. To keep AC *away* from the load, how should we wire the capacitor?",
          options: [
            { id: "A", text: "In parallel (shunt) with the load", isCorrect: true, explanation: "The AC bypasses the load by going through the capacitor to ground." },
            { id: "B", text: "In series with the load", isCorrect: false, explanation: "That would block the DC we want!" }
          ]
        },
        {
          id: "mechanism",
          type: "proof",
          title: "Filter Mechanism",
          content: "How the capacitor smooths the voltage:",
          proofSteps: [
            "1. Rectifier voltage rises: Capacitor charges up to peak voltage ($V_m$).",
            "2. Rectifier voltage drops: Diode becomes reverse-biased (turns off).",
            "3. The Capacitor now acts as a battery, discharging slowly through the Load ($R_L$).",
            "4. Before it discharges much, the next cycle begins and recharges it."
          ]
        },
        {
          id: "boundary",
          type: "quiz",
          title: "Boundary Check",
          content: "What happens if we remove the load resistor ($R_L = \\infty$)?",
          options: [
            { id: "A", text: "The capacitor discharges instantly.", isCorrect: false, explanation: "There is no path for it to discharge." },
            { id: "B", text: "The output becomes a perfectly flat DC line at $V_m$.", isCorrect: true, explanation: "With no load to drain it, the capacitor stays fully charged." }
          ]
        }
      ]
    },
    {
      id: "les-2-3-2-2",
      title: "Interactive Filtering",
      description: "Visualizing capacitance",
      icon: "Sliders",
      slides: [
        {
          id: "vis",
          type: "interactive_canvas",
          title: "Capacitor Sizing",
          content: "Drag the slider to see how a larger capacitor reduces the ripple amplitude.",
          interactiveCanvasId: "interactive-cap-filter"
        },
        {
          id: "theory",
          type: "theory",
          title: "Ripple Factors",
          content: "To get the lowest ripple, we need a **large capacitor** ($C$) or a **large load resistance** ($R_L$ - meaning a light current draw).\n\nIf the load draws heavy current (low $R_L$), the capacitor discharges too fast, and ripples increase."
        }
      ]
    }
  ]
};