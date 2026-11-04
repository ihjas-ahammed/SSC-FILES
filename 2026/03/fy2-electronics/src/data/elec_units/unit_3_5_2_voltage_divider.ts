import { Unit } from '../../types';

export const UNIT_3_5_2: Unit = {
  id: "unit-3-5-2",
  title: "Voltage Divider Bias",
  description: "Universal Bias",
  color: "duo-violet",
  lessons: [
    {
      id: "les-3-5-2-1",
      title: "Circuit Structure",
      description: "The Gold Standard",
      icon: "GitMerge",
      slides: [
        {
          id: "intro",
          type: "theory",
          title: "Voltage Divider Method",
          content: "Uses two resistors ($R_1$ and $R_2$) to form a voltage divider across $V_{CC}$. The voltage across $R_2$ provides the bias.\n\nCrucially, it includes an **Emitter Resistor ($R_E$)** for stabilization."
        },
        {
          id: "vis",
          type: "interactive_canvas",
          title: "Schematic",
          content: "Observe the potential divider at the Base and the resistor at the Emitter.",
          interactiveCanvasId: "voltage-divider-schematic"
        }
      ]
    },
    {
      id: "les-3-5-2-2",
      title: "Stabilization Logic",
      description: "Negative Feedback",
      icon: "RefreshCw",
      slides: [
        {
          id: "mech",
          type: "proof",
          title: "How $R_E$ Stabilizes",
          content: "Tracing the feedback loop:",
          proofSteps: [
            "1. Temp $\\uparrow$ $\\Rightarrow$ $I_C$ tries to increase.",
            "2. Since $I_E \\approx I_C$, the voltage drop across $R_E$ ($V_E = I_E R_E$) increases.",
            "3. Base voltage $V_B$ is fixed by the divider.",
            "4. $V_{BE} = V_B - V_E$. As $V_E$ goes up, $V_{BE}$ goes **down**.",
            "5. Reduced $V_{BE}$ reduces $I_B$, which reduces $I_C$, counteracting the initial rise."
          ]
        },
        {
          id: "vis",
          type: "interactive_canvas",
          title: "Feedback Animation",
          content: "Visualizing the stabilization cycle.",
          interactiveCanvasId: "stabilization-feedback"
        }
      ]
    },
    {
      id: "les-3-5-2-3",
      title: "Stability Factor",
      description: "Formula",
      icon: "FunctionSquare",
      slides: [
        {
          id: "formula",
          type: "theory",
          title: "Stability Formula",
          content: "For Voltage Divider Bias:\n$$ S = \\frac{\\beta + 1}{1 + \\beta(\\frac{R_E}{R_E + R_{Th}})} $$\n\nIf we design it such that $R_{Th}/R_E$ is small, then $S \\approx 1$. This is **excellent stability**."
        }
      ]
    }
  ]
};