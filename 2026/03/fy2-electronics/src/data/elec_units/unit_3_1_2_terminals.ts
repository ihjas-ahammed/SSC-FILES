import { Unit } from '../../types';

export const UNIT_3_1_2: Unit = {
  id: "unit-3-1-2",
  title: "Transistor Terminals",
  description: "Emitter, Base, Collector",
  color: "duo-blue",
  lessons: [
    {
      id: "les-3-1-2-1",
      title: "The Emitter",
      description: "The Supplier",
      icon: "Upload",
      slides: [
        {
          id: "def",
          type: "theory",
          title: "Emitter (E)",
          content: "The section on one side that **supplies** charge carriers.\n- **Doping:** Heavily Doped (to supply many carriers).\n- **Size:** Moderate."
        }
      ]
    },
    {
      id: "les-3-1-2-2",
      title: "The Base",
      description: "The Controller",
      icon: "Sliders",
      slides: [
        {
          id: "def",
          type: "theory",
          title: "Base (B)",
          content: "The middle section that forms junctions with Emitter and Collector.\n- **Doping:** Very Lightly Doped.\n- **Size:** Very Thin ($<10^{-6}m$).\n\nIts function is to pass carriers from Emitter to Collector with minimal loss."
        },
        {
          id: "check",
          type: "quiz",
          title: "Why Thin?",
          content: "Why must the base be very thin?",
          options: [
            { id: "A", text: "To save material", isCorrect: false, explanation: "" },
            { id: "B", text: "To minimize recombination", isCorrect: true, explanation: "If it were thick, carriers would recombine before reaching the collector." }
          ]
        }
      ]
    },
    {
      id: "les-3-1-2-3",
      title: "The Collector",
      description: "The Receiver",
      icon: "Download",
      slides: [
        {
          id: "def",
          type: "theory",
          title: "Collector (C)",
          content: "The section that **collects** the charges.\n- **Doping:** Moderately Doped.\n- **Size:** Largest (to dissipate heat)."
        },
        {
          id: "vis",
          type: "interactive_canvas",
          title: "Size Comparison",
          content: "Compare the physical sizes and doping levels of E, B, and C.",
          interactiveCanvasId: "bjt-size-doping"
        }
      ]
    }
  ]
};