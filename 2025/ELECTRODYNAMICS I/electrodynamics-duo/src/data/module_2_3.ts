import { ModuleSection } from '../types';

export const UNIT_2_3: ModuleSection = {
  id: "sec-2-3",
  title: "Unit 3: Electric Potential",
  description: "Scalar potential, Poisson's Eq, and Boundaries.",
  color: "duo-blue",
  units: [
    {
      id: "unit-2-3-potential",
      title: "Potential",
      description: "Introduction to V.",
      color: "duo-blue",
      lessons: [
        {
          id: "lesson-pot-def",
          title: "Electric Potential",
          description: "Relation to E-field.",
          icon: "TrendingDown",
          slides: [
            {
              id: "s1",
              type: "theory",
              title: "Definition",
              content: "Since $\\nabla \\times \\mathbf{E} = 0$, we can define a scalar potential $V$ such that:\n\n$$ \\mathbf{E} = -\\nabla V $$\n\n$$ V(\\mathbf{r}) = - \\int_{\\mathcal{O}}^{\\mathbf{r}} \\mathbf{E} \\cdot d\\mathbf{l} $$\n\nWhere $\\mathcal{O}$ is a reference point (usually infinity)."
            },
            {
              id: "q1",
              type: "fill-blank",
              title: "Reference Point",
              content: "Typically, we set V = 0 at ",
              segments: [
                { id: "1", isBlank: true, correctValue: "infinity" }
              ],
              wordBank: ["origin", "infinity", "surface", "center"]
            }
          ]
        },
        {
          id: "lesson-poisson",
          title: "Poisson & Laplace",
          description: "Differential equations for V.",
          icon: "GitBranch",
          slides: [
            {
              id: "s1",
              type: "theory",
              title: "Poisson's Equation",
              content: "Combining $\\mathbf{E} = -\\nabla V$ with Gauss's Law $\\nabla \\cdot \\mathbf{E} = \\rho/\\epsilon_0$:\n\n$$ \\nabla \\cdot (-\\nabla V) = \\frac{\\rho}{\\epsilon_0} \\implies \\nabla^2 V = -\\frac{\\rho}{\\epsilon_0} $$\n\nThis is **Poisson's Equation**."
            },
            {
              id: "s2",
              type: "theory",
              title: "Laplace's Equation",
              content: "In regions where there is no charge ($\\rho = 0$), Poisson's equation reduces to **Laplace's Equation**:\n\n$$ \\nabla^2 V = 0 $$"
            }
          ]
        }
      ]
    },
    {
      id: "unit-2-3-boundary",
      title: "Boundary Conditions",
      description: "Fields across surfaces.",
      color: "duo-blue",
      lessons: [
        {
          id: "lesson-bc-field",
          title: "Field Boundary Conditions",
          description: "Normal and Tangential components.",
          icon: "Split",
          slides: [
            {
              id: "s1",
              type: "theory",
              title: "Discontinuity",
              content: "At a surface with charge density $\\sigma$:\n\n1.  **Normal Component**: Discontinuous.\n$$ E_{above}^{\\perp} - E_{below}^{\\perp} = \\frac{\\sigma}{\\epsilon_0} $$\n2.  **Tangential Component**: Continuous.\n$$ \\mathbf{E}_{above}^{\\parallel} = \\mathbf{E}_{below}^{\\parallel} $$"
            },
            {
              id: "m1",
              type: "match",
              title: "Match Component Behavior",
              content: "What happens across a charged surface?",
              pairs: [
                { id: "p1", left: "Tangential E", right: "Continuous" },
                { id: "p2", left: "Normal E", right: "Discontinuous" },
                { id: "p3", left: "Potential V", right: "Continuous" }
              ]
            }
          ]
        }
      ]
    }
  ]
};