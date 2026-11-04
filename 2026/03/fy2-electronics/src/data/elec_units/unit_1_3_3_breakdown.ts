import { Unit } from '../../types';

export const UNIT_1_3_3: Unit = {
  id: "unit-1-3-3",
  title: "Breakdown Mechanics",
  description: "When limits are exceeded",
  color: "duo-violet",
  lessons: [
    {
      id: "les-1-3-3-1",
      title: "Breakdown Voltage",
      description: "The danger zone",
      icon: "AlertTriangle",
      slides: [
        {
          id: "concept",
          type: "theory",
          title: "Reverse Breakdown",
          content: "If the **Reverse Bias** voltage is increased beyond a critical value, the reverse current increases sharply. This voltage is called the **Breakdown Voltage** ($V_{BR}$).\n\nNormal diodes can be destroyed by the heat generated here."
        }
      ]
    },
    {
      id: "les-1-3-3-2",
      title: "Avalanche Breakdown",
      description: "The snowball effect",
      icon: "Zap",
      slides: [
        {
          id: "mech",
          type: "proof",
          title: "Mechanism: Impact Ionization",
          content: "How does one electron create many?",
          proofSteps: [
            "1. High Reverse Voltage accelerates a minority electron.",
            "2. Electron gains high **Kinetic Energy**.",
            "3. It collides with a valence electron in a covalent bond.",
            "4. The bond breaks, releasing a new electron-hole pair.",
            "5. These new carriers accelerate and collide again (Chain Reaction)."
          ]
        },
        {
          id: "vis",
          type: "interactive_canvas",
          title: "Avalanche Visualization",
          content: "One electron hits an atom, releasing two. The chain reaction begins.",
          interactiveCanvasId: "breakdown-avalanche"
        },
        {
          id: "condition",
          type: "quiz",
          title: "Voltage Range",
          content: "Avalanche breakdown typically occurs at:",
          options: [
            { id: "A", text: "Low Voltages (< 4V)", isCorrect: false, explanation: "That's usually Zener territory." },
            { id: "B", text: "High Voltages (> 6V)", isCorrect: true, explanation: "Requires room for acceleration." }
          ]
        }
      ]
    },
    {
      id: "les-1-3-3-3",
      title: "Zener Breakdown",
      description: "Field Effect",
      icon: "Minimize2",
      slides: [
        {
          id: "theory",
          type: "theory",
          title: "Zener Mechanism",
          content: "Occurs in **Heavily Doped** diodes with thin depletion layers.\n\nThe intense Electric Field acts directly on the covalent bonds, tearing electrons loose (Quantum Tunneling)."
        },
        {
          id: "distinction",
          type: "quiz",
          title: "Zener vs Avalanche",
          content: "Which breakdown mechanism relies on high velocity collisions?",
          options: [
            { id: "A", text: "Avalanche", isCorrect: true, explanation: "Correct. Zener relies on field strength, not speed." },
            { id: "B", text: "Zener", isCorrect: false, explanation: "Zener is direct field emission." }
          ]
        }
      ]
    }
  ]
};