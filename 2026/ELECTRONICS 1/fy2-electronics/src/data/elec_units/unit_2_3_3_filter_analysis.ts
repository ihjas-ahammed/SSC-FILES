import { Unit } from '../../types';

export const UNIT_2_3_3: Unit = {
  id: "unit-2-3-3",
  title: "Filter Analysis",
  description: "Calculating Voltage Drops",
  color: "duo-blue",
  lessons: [
    {
      id: "les-2-3-3-1",
      title: "Choke Filter DC Voltage",
      description: "Deriving load voltage",
      icon: "PenTool",
      slides: [
        {
          id: "dest",
          type: "theory",
          title: "The Destination",
          content: "We will prove how to find the final DC voltage across a load when a series choke (inductor) is used.\n\n**Goal Formula:**\n$$ V_{dc} = \\frac{V'_{dc} \\times R_L}{R + R_L} $$"
        },
        {
          id: "proof1",
          type: "proof",
          title: "Step-by-Step Construction",
          content: "Let $V'_{dc}$ be the theoretical DC voltage from the rectifier (e.g., $2V_m/\\pi$).",
          proofSteps: [
            "1. The choke (inductor) has a small internal DC resistance, let's call it $R$.",
            "2. The inductor acts as a short circuit for DC, leaving only its resistance $R$ in series with $R_L$."
          ],
          interactiveSteps: [
            {
              prompt: "Since $R$ and $R_L$ are in series, what rule applies to find voltage across $R_L$?",
              options: [
                { id: "A", text: "Voltage Divider Rule", isCorrect: true, explanation: "Correct! The DC voltage splits between the choke resistance and the load." },
                { id: "B", text: "Current Divider Rule", isCorrect: false, explanation: "Current is the same in a series circuit." }
              ]
            }
          ]
        },
        {
          id: "comp",
          type: "quiz",
          title: "Comprehension Check",
          content: "In this derivation, why did we ignore the inductive reactance ($X_L$)?",
          options: [
            { id: "A", text: "Because we are calculating the DC component, where f = 0.", isCorrect: true, explanation: "Reactance only matters for the AC ripple." },
            { id: "B", text: "Because inductors don't have reactance.", isCorrect: false, explanation: "They do, but only for AC." }
          ]
        }
      ]
    },
    {
      id: "les-2-3-3-2",
      title: "Calculating the Drop",
      description: "Example 4.39",
      icon: "Calculator",
      slides: [
        {
          id: "chal",
          type: "theory",
          title: "The Challenge",
          content: "**Problem:** A choke has a d.c. resistance of $25 \\Omega$. The full-wave signal into the choke has a peak value of $25.7 V$. The load is $750 \\Omega$. What is the d.c. voltage across the load?"
        },
        {
          id: "vis",
          type: "interactive_canvas",
          title: "Circuit Model",
          content: "We model the rectifier output as a DC source $V'_{dc}$ driving a series circuit.",
          interactiveCanvasId: "choke-analysis-circuit"
        },
        {
          id: "scaffold",
          type: "solution",
          title: "Scaffolded Solution",
          content: "First, find the DC component of the full-wave rectifier output before the choke.",
          interactiveSteps: [
            { stepText: "Formula: $V'_{dc} = \\frac{2V_m}{\\pi}$" },
            { stepText: "$V'_{dc} = \\frac{2 \\times 25.7}{3.14} = 16.4 V$" },
            { stepText: "Now apply Voltage Divider: $V_{dc} = 16.4 \\times \\frac{750}{25 + 750}$" }
          ]
        },
        {
          id: "num",
          type: "numerical",
          title: "Final Answer",
          content: "Calculate $V_{dc}$.",
          numericAnswer: 15.9,
          numericTolerance: 0.1
        },
        {
          id: "error",
          type: "quiz",
          title: "Spot the Error",
          content: "A student calculates $V_{dc} = 25.7 \\times \\frac{750}{775}$. What is the mistake?",
          options: [
            { id: "A", text: "Used peak voltage instead of average DC voltage.", isCorrect: true, explanation: "The DC calculation requires the average value $2V_m/\\pi$, not the peak $V_m$." },
            { id: "B", text: "Added the resistors incorrectly.", isCorrect: false, explanation: "25 + 750 = 775 is correct." }
          ]
        }
      ]
    }
  ]
};