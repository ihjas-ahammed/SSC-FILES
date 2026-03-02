import { Unit } from '../../types';

export const UNIT_3_5_3: Unit = {
  id: "unit-3-5-3",
  title: "Design & Analysis",
  description: "Practical Calculation",
  color: "duo-violet",
  lessons: [
    {
      id: "les-3-5-3-1",
      title: "Approximate Analysis",
      description: "Simplifying the Math",
      icon: "Calculator",
      slides: [
        {
          id: "assumption",
          type: "theory",
          title: "The Assumption",
          content: "If the current through $R_1$ and $R_2$ is much larger than the base current $I_B$ (e.g., $I_1 \ge 10 I_B$), we can assume the divider is unloaded.\n\n$$ V_2 = \\frac{V_{CC} R_2}{R_1 + R_2} $$"
        },
        {
          id: "steps",
          type: "solution",
          title: "Analysis Steps",
          content: "Find $I_C$ and $V_{CE}$.",
          interactiveSteps: [
            { stepText: "1. Calculate Base Voltage: $V_B = \\frac{V_{CC} R_2}{R_1 + R_2}$" },
            { stepText: "2. Calculate Emitter Voltage: $V_E = V_B - V_{BE}$" },
            { stepText: "3. Calculate Emitter Current: $I_E = V_E / R_E$" },
            { stepText: "4. Assume $I_C \\approx I_E$." },
            { stepText: "5. Find $V_{CE} = V_{CC} - I_C(R_C + R_E)$" }
          ]
        }
      ]
    },
    {
      id: "les-3-5-3-2",
      title: "Design Example",
      description: "Example 7.30",
      icon: "PenTool",
      slides: [
        {
          id: "problem",
          type: "numerical",
          title: "Calculate $I_1$",
          content: "We want $I_C = 2mA$, $\\beta = 50$. The assumption is $I_1 = 10 I_B$.\n\nFirst, calculate $I_B$ in mA.",
          numericAnswer: 0.04,
          numericTolerance: 0.005
        },
        {
          id: "step2",
          type: "numerical",
          title: "Calculate Divider Current",
          content: "Now, calculate $I_1 = 10 I_B$ in mA.",
          numericAnswer: 0.4,
          numericTolerance: 0.05
        }
      ]
    }
  ]
};