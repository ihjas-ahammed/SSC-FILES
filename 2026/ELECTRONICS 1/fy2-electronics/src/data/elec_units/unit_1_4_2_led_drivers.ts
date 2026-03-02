import { Unit } from '../../types';

export const UNIT_1_4_2: Unit = {
  id: "unit-1-4-2",
  title: "LED Drivers",
  description: "Circuit Design",
  color: "duo-orange",
  lessons: [
    {
      id: "les-1-4-2-1",
      title: "Current Limiting",
      description: "Preventing burnout",
      icon: "Sliders",
      slides: [
        {
          id: "prob",
          type: "theory",
          title: "The Problem",
          content: "LEDs have low resistance when ON. Connecting them directly to a voltage source causes excessive current, destroying the LED.\n\n**Solution:** Add a Series Resistor ($R_S$)."
        },
        {
          id: "formula",
          type: "theory",
          title: "The Formula",
          content: "To calculate $R_S$:\n$$ R_S = \\frac{V_S - V_D}{I_F} $$\n\nWhere:\n$V_S$: Source Voltage\n$V_D$: LED Voltage Drop (approx 2V)\n$I_F$: Desired Current (approx 10-20mA)"
        }
      ]
    },
    {
      id: "les-1-4-2-2",
      title: "Design Calculation",
      description: "Example 5.1",
      icon: "Calculator",
      slides: [
        {
          id: "ex1",
          type: "numerical",
          title: "Calculate Resistor",
          content: "Design a circuit for an LED ($V_D = 2V$, $I_F = 20mA$) with a 10V supply.\nCalculate $R_S$ in Ohms.\n$$ R_S = \\frac{10 - 2}{0.02} $$",
          numericAnswer: 400,
          numericTolerance: 10
        },
        {
          id: "check",
          type: "quiz",
          title: "Power Rating",
          content: "If $R_S = 400\\Omega$, what happens if we use a smaller resistor (e.g., 100$\\Omega$)?",
          options: [
            { id: "A", text: "LED gets dimmer", isCorrect: false, explanation: "Lower R means higher I." },
            { id: "B", text: "LED may burn out", isCorrect: true, explanation: "Current exceeds ratings." }
          ]
        }
      ]
    },
    {
      id: "les-1-4-2-3",
      title: "Transistor Driver",
      description: "Switching Logic",
      icon: "Cpu",
      slides: [
        {
          id: "context",
          type: "theory",
          title: "Why use a Transistor?",
          content: "Digital logic chips (like microcontrollers) cannot supply enough current (20mA) for an LED.\n\nWe use a Transistor (BJT) as a **Switch** to amplify the current."
        },
        {
          id: "setup",
          type: "quiz",
          title: "Configuration",
          content: "To switch an LED ON using an NPN transistor, we apply a ___ voltage to the Base.",
          options: [
            { id: "A", text: "High (Logic 1)", isCorrect: true, explanation: "Turns on the transistor path." },
            { id: "B", text: "Low (Logic 0)", isCorrect: false, explanation: "Keeps transistor Cut-off." }
          ]
        }
      ]
    }
  ]
};