import { ModuleSection } from '../types';

export const UNIT_2_5: ModuleSection = {
  id: "sec-2-5",
  title: "Unit 5: Conductors",
  description: "Properties of ideal conductors and Capacitance.",
  color: "duo-blue",
  units: [
    {
      id: "unit-2-5-props",
      title: "Basic Properties",
      description: "Conductors in equilibrium.",
      color: "duo-blue",
      lessons: [
        {
          id: "lesson-cond-props",
          title: "Inside a Conductor",
          description: "E-field and Charge.",
          icon: "Shield",
          slides: [
            {
              id: "s1",
              type: "theory",
              title: "Basic Properties",
              content: "1. **$\\mathbf{E} = 0$ inside:** Otherwise charges would move.\n2. **$\\rho = 0$ inside:** From Gauss's Law ($ \\nabla \\cdot \\mathbf{E} = \\rho/\\epsilon_0 $).\n3. **Charge on Surface:** Any net charge resides on the surface.\n4. **Conductor is Equipotential:** $V$ is constant throughout."
            },
            {
              id: "s2",
              type: "theory",
              title: "Field at Surface",
              content: "Just outside a conductor, the electric field is perpendicular to the surface:\n\n$$ \\mathbf{E} = \\frac{\\sigma}{\\epsilon_0} \\hat{n} $$"
            },
            {
              id: "q1",
              type: "quiz",
              title: "Why Normal?",
              content: "Why must E be perpendicular to the conductor surface?",
              options: [
                { id: "1", text: "To maximize flux.", isCorrect: false, explanation: "" },
                { id: "2", text: "To prevent surface currents.", isCorrect: true, explanation: "A tangential component would force charges to move along the surface." }
              ]
            }
          ]
        },
        {
          id: "lesson-cavity",
          title: "Induced Charges",
          description: "Conductors with cavities.",
          icon: "Circle",
          slides: [
            {
              id: "s1",
              type: "theory",
              title: "Charge in Cavity",
              content: "If a charge $+q$ is placed inside a cavity of a neutral conductor, a charge $-q$ is induced on the inner wall to cancel the field inside the conductor meat. Consequently, $+q$ appears on the outer surface."
            }
          ]
        }
      ]
    },
    {
      id: "unit-2-5-caps",
      title: "Capacitors",
      description: "Storing charge and energy.",
      color: "duo-blue",
      lessons: [
        {
          id: "lesson-cap-def",
          title: "Capacitance",
          description: "Ratio of Charge to Potential.",
          icon: "BatteryCharging",
          slides: [
            {
              id: "s1",
              type: "theory",
              title: "Definition",
              content: "For two conductors carrying charges $+Q$ and $-Q$ with potential difference $V$:\n\n$$ C = \\frac{Q}{V} $$\n\n$C$ depends only on geometry. Unit: Farad (F)."
            },
            {
              id: "m1",
              type: "match",
              title: "Geometry Formulas",
              content: "Match the capacitor type to its capacitance.",
              pairs: [
                { id: "p1", left: "Parallel Plate", right: "$\\frac{\\epsilon_0 A}{d}$" },
                { id: "p2", left: "Spherical (radii a, b)", right: "$4\\pi\\epsilon_0 \\frac{ab}{b-a}$" }
              ]
            }
          ]
        }
      ]
    }
  ]
};