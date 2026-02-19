import { ModuleSection } from '../types';

export const UNIT_4_3: ModuleSection = {
  id: "sec-4-3",
  title: "Unit 3: Network Theorems",
  description: "Simplifying complex circuits.",
  color: "duo-gray",
  units: [
    {
      id: "unit-4-3-theorems",
      title: "Circuit Theorems",
      description: "Superposition, Thevenin, Norton.",
      color: "duo-gray",
      lessons: [
        {
          id: "lesson-superposition",
          title: "Superposition",
          description: "Multiple sources.",
          icon: "Layers",
          slides: [
            {
              id: "s1",
              type: "theory",
              title: "Statement",
              content: "In a linear network with multiple sources, the response in any branch is the algebraic sum of the responses due to each source acting alone.\n\n*   Voltage sources: Short circuit ($V=0$)\n*   Current sources: Open circuit ($I=0$)"
            }
          ]
        },
        {
          id: "lesson-thevenin",
          title: "Thevenin's Theorem",
          description: "Equivalent Voltage Source.",
          icon: "Box",
          slides: [
            {
              id: "s1",
              type: "theory",
              title: "Statement",
              content: "Any linear 2-terminal network can be replaced by a single voltage source $V_{th}$ in series with a resistor $R_{th}$.\n\n*   $V_{th}$: Open circuit voltage at terminals.\n*   $R_{th}$: Equivalent resistance looking into terminals (sources killed)."
            }
          ]
        },
        {
          id: "lesson-norton",
          title: "Norton's Theorem",
          description: "Equivalent Current Source.",
          icon: "ArrowRight",
          slides: [
            {
              id: "s1",
              type: "theory",
              title: "Statement",
              content: "Any linear 2-terminal network can be replaced by a single current source $I_N$ in parallel with a resistor $R_N$.\n\n*   $I_N$: Short circuit current.\n*   $R_N$: Same as $R_{th}$."
            },
            {
              id: "m1",
              type: "match",
              title: "Equivalents",
              content: "Match the theorem to its circuit model.",
              pairs: [
                { id: "p1", left: "Thevenin", right: "Series ($V_{th}, R_{th}$)" },
                { id: "p2", left: "Norton", right: "Parallel ($I_N, R_N$)" }
              ]
            }
          ]
        },
        {
          id: "lesson-max-power",
          title: "Max Power Transfer",
          description: "Impedance matching.",
          icon: "Zap",
          slides: [
            {
              id: "s1",
              type: "theory",
              title: "Condition",
              content: "Maximum power is transferred to the load resistance $R_L$ when:\n\n$$ R_L = R_{th} $$\n\nAt this point, the efficiency is 50%."
            }
          ]
        }
      ]
    }
  ]
};