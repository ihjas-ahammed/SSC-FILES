import { Unit } from '../../types';

export const UNIT_3_6_3_SECTION_SUMMARY: Unit = {
  id: "unit-3-6-3",
  title: "Section 3.6 Summary",
  description: "Review of Wave Energetics",
  color: "duo-blue",
  lessons:[
    {
      id: "les-3-6-3-1",
      title: "Summary: Energy and Flow",
      description: "Recap of Unit 3.6",
      icon: "List",
      slides:[
        {
          id: "theory1",
          type: "theory",
          title: "Wave Energy Recap",
          content: "A wave carries both kinetic and potential energy.\n\n*   **Kinetic:** Due to the transverse velocity of the string particles.\n*   **Potential:** Due to the stretching of the string against tension.\n\nTotal Energy $E = \\frac{1}{4} \\rho \\omega^2 L A^2$. Importantly, energy is proportional to the **square of the amplitude** ($A^2$)."
        },
        {
          id: "theory2",
          type: "theory",
          title: "Transmission & Reflection",
          content: "When a wave hits a boundary where wave speed changes, it splits.\n\n*   **Reflection:** $A_r/A_i = (v_2 - v_1)/(v_1 + v_2)$\n*   **Transmission:** $A_t/A_i = 2v_2/(v_1 + v_2)$\n\nIf it hits a denser medium ($v_2 < v_1$), the reflected wave is inverted. If it hits a hard wall ($v_2 = 0$), $100\\%$ is reflected and inverted ($A_r = -A_i$)."
        },
        {
          id: "mcq",
          type: "quiz",
          title: "Knowledge Check",
          content: "At an interface between two strings, what guarantees that the string doesn't snap apart?",
          options:[
            { id: "A", text: "The sum of the incident and reflected displacements must equal the transmitted displacement.", isCorrect: true, explanation: "$y_i + y_r = y_t$ ensures mathematical and physical continuity." },
            { id: "B", text: "The energy must be completely absorbed.", isCorrect: false }
          ]
        },
        {
          id: "fib",
          type: "fill_in_blank",
          title: "Key Takeaway",
          content: "For a massless knot, the tension pulls evenly, meaning the ___ of the string must be continuous across the boundary.",
          blankAnswer: "slope"
        }
      ]
    }
  ]
};