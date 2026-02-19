import { ModuleSection } from '../types';

export const UNIT_1_2: ModuleSection = {
  id: "sec-1-2",
  title: "Unit 2: Differential Calculus",
  description: "The Del Operator, Gradient, Divergence, Curl, and Second Derivatives.",
  color: "duo-blue",
  units: [
    {
      id: "unit-1-2-del",
      title: "The Del Operator",
      description: "Gradient, Divergence, and Curl.",
      color: "duo-blue",
      lessons: [
        {
          id: "lesson-gradient",
          title: "The Gradient",
          description: "Slope and direction of steepest descent.",
          icon: "TrendingUp",
          slides: [
            {
              id: "s1",
              type: "theory",
              title: "The Del Operator",
              content: "The vector differential operator, $\\nabla$ (del), is defined in Cartesian coordinates as:\n\n$$ \\nabla = \\hat{x}\\frac{\\partial}{\\partial x} + \\hat{y}\\frac{\\partial}{\\partial y} + \\hat{z}\\frac{\\partial}{\\partial z} $$\n\nIt acts as a vector operator. When applied to a scalar function $T(x,y,z)$, it produces the **Gradient**:\n\n$$ \\nabla T = \\frac{\\partial T}{\\partial x}\\hat{x} + \\frac{\\partial T}{\\partial y}\\hat{y} + \\frac{\\partial T}{\\partial z}\\hat{z} $$"
            },
            {
              id: "s2",
              type: "theory",
              title: "Geometrical Interpretation",
              content: "The gradient $\\nabla T$ encodes two pieces of information:\n\n1.  **Direction**: Points in the direction of maximum increase of the function $T$.\n2.  **Magnitude**: Gives the slope (rate of increase) along that direction."
            },
            {
              id: "q1",
              type: "fill-blank",
              title: "Gradient Properties",
              content: "Analyze the properties of the gradient.",
              segments: [
                { id: "1", text: "If $\\nabla T = 0$ everywhere, then $T$ is ", isBlank: false },
                { id: "2", isBlank: true, correctValue: "constant" },
                { id: "3", text: ". The gradient is always ", isBlank: false },
                { id: "4", isBlank: true, correctValue: "perpendicular" },
                { id: "5", text: " to the equipotential surfaces ($T = \\text{const}$)." }
              ],
              wordBank: ["parallel", "perpendicular", "zero", "constant", "variable"]
            }
          ]
        },
        {
          id: "lesson-divergence",
          title: "The Divergence",
          description: "Sources and Sinks.",
          icon: "Maximize2",
          slides: [
            {
              id: "s1",
              type: "theory",
              title: "Definition",
              content: "The divergence is the dot product of $\\nabla$ with a vector function $\\mathbf{v}$:\n\n$$ \\nabla \\cdot \\mathbf{v} = \\frac{\\partial v_x}{\\partial x} + \\frac{\\partial v_y}{\\partial y} + \\frac{\\partial v_z}{\\partial z} $$\n\nResult: A **Scalar**.\n\nInterpretation: It measures how much the vector $\\mathbf{v}$ spreads out (diverges) from a point."
            },
            {
              id: "m1",
              type: "match",
              title: "Physical Interpretation",
              content: "Match the divergence value to the flow characteristic.",
              pairs: [
                { id: "p1", left: "$\\nabla \\cdot \\mathbf{v} > 0$", right: "Source (Generation)" },
                { id: "p2", left: "$\\nabla \\cdot \\mathbf{v} < 0$", right: "Sink (Accumulation)" },
                { id: "p3", left: "$\\nabla \\cdot \\mathbf{v} = 0$", right: "Solenoidal (Incompressible)" }
              ]
            },
            {
              id: "q1",
              type: "quiz",
              title: "Position Vector Divergence",
              content: "Calculate $\\nabla \\cdot \\mathbf{r}$, where $\\mathbf{r} = x\\hat{x} + y\\hat{y} + z\\hat{z}$.",
              options: [
                { id: "1", text: "0", isCorrect: false, explanation: "Partial derivatives are 1, not 0." },
                { id: "2", text: "1", isCorrect: false, explanation: "You sum the partials: 1+1+1." },
                { id: "3", text: "3", isCorrect: true, explanation: "$\\frac{\\partial x}{\\partial x} + \\frac{\\partial y}{\\partial y} + \\frac{\\partial z}{\\partial z} = 1 + 1 + 1 = 3$." }
              ]
            }
          ]
        },
        {
          id: "lesson-curl",
          title: "The Curl",
          description: "Rotation and Swirl.",
          icon: "RotateCw",
          slides: [
            {
              id: "s1",
              type: "theory",
              title: "Definition",
              content: "The curl is the cross product of $\\nabla$ with a vector $\\mathbf{v}$:\n\n$$ \\nabla \\times \\mathbf{v} = \\begin{vmatrix} \\hat{x} & \\hat{y} & \\hat{z} \\\\ \\partial/\\partial x & \\partial/\\partial y & \\partial/\\partial z \\\\ v_x & v_y & v_z \\end{vmatrix} $$\n\nResult: A **Vector**.\n\nInterpretation: It measures the 'swirl' or circulation of the vector field around a point."
            },
            {
              id: "q1",
              type: "quiz",
              title: "Conservative Fields",
              content: "If $\\nabla \\times \\mathbf{F} = 0$ everywhere, what implies?",
              options: [
                { id: "1", text: "The field is constant.", isCorrect: false, explanation: "A field can vary but have no curl (e.g., diverging field)." },
                { id: "2", text: "The field is irrotational.", isCorrect: true, explanation: "It can be expressed as the gradient of a scalar potential ($\\mathbf{F} = -\\nabla V$)." },
                { id: "3", text: "The field lines are closed loops.", isCorrect: false, explanation: "Closed loops usually imply non-zero curl." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "unit-1-2-advanced",
      title: "Advanced Derivatives",
      description: "Product Rules and Second Derivatives.",
      color: "duo-blue",
      lessons: [
        {
          id: "lesson-product-rules",
          title: "Product Rules",
          description: "Vector calculus identities.",
          icon: "ListChecks",
          slides: [
            {
              id: "s1",
              type: "theory",
              title: "The Rules",
              content: "Just as $\\frac{d}{dx}(fg) = f\\frac{dg}{dx} + g\\frac{df}{dx}$, vector calculus has product rules.\n\n**Example (Divergence of scalar x vector):**\n$$ \\nabla \\cdot (f\\mathbf{A}) = f(\\nabla \\cdot \\mathbf{A}) + \\mathbf{A} \\cdot (\\nabla f) $$"
            },
            {
              id: "q1",
              type: "fill-blank",
              title: "Curl Product Rule",
              content: "Complete the identity for $\\nabla \\times (f\\mathbf{A})$.",
              segments: [
                { id: "1", text: "$$ \\nabla \\times (f\\mathbf{A}) = f(\\nabla \\times \\mathbf{A}) - \\mathbf{A} \\times ($", isBlank: false },
                { id: "2", isBlank: true, correctValue: "grad(f)" },
                { id: "3", text: ") $$", isBlank: false }
              ],
              wordBank: ["grad(f)", "div(f)", "curl(f)", "f"]
            }
          ]
        },
        {
          id: "lesson-second-derivs",
          title: "Second Derivatives",
          description: "Laplacian and Null Identities.",
          icon: "Layers",
          slides: [
            {
              id: "s1",
              type: "theory",
              title: "The Laplacian",
              content: "The divergence of the gradient is the **Laplacian**:\n\n$$ \\nabla \\cdot (\\nabla T) = \\nabla^2 T $$\n\n$$ \\nabla^2 T = \\frac{\\partial^2 T}{\\partial x^2} + \\frac{\\partial^2 T}{\\partial y^2} + \\frac{\\partial^2 T}{\\partial z^2} $$\n\nThis operator is fundamental to Electrostatics (Poisson's Equation)."
            },
            {
              id: "s2",
              type: "theory",
              title: "Identity 1: Curl of Gradient",
              content: "The curl of a gradient is **always zero**:\n\n$$ \\nabla \\times (\\nabla T) = 0 $$\n\nIf a field is the gradient of a scalar ($\\mathbf{E} = -\\nabla V$), it is irrotational."
            },
            {
              id: "p1",
              type: "proof",
              title: "Proof: Div of Curl",
              content: "Prove $\\nabla \\cdot (\\nabla \\times \\mathbf{v}) = 0$",
              proofSteps: [
                "Expand $\\mathbf{A} = \\nabla \\times \\mathbf{v}$. $A_x = \\frac{\\partial v_z}{\\partial y} - \\frac{\\partial v_y}{\\partial z}$.",
                "Calculate divergence terms: $\\frac{\\partial}{\\partial x} A_x = \\frac{\\partial^2 v_z}{\\partial x \\partial y} - \\frac{\\partial^2 v_y}{\\partial x \\partial z}$.",
                "Sum all three terms: $\\frac{\\partial A_x}{\\partial x} + \\frac{\\partial A_y}{\\partial y} + \\frac{\\partial A_z}{\\partial z}$.",
                "By Clairaut's theorem ($\\frac{\\partial^2}{\\partial x \\partial y} = \\frac{\\partial^2}{\\partial y \\partial x}$), all terms cancel in pairs.",
                "Result is exactly 0."
              ]
            },
            {
              id: "m1",
              type: "match",
              title: "Second Derivative Identities",
              content: "Match the operation to its result.",
              pairs: [
                { id: "p1", left: "$\\nabla \\times (\\nabla T)$", right: "0 (Vector)" },
                { id: "p2", left: "$\\nabla \\cdot (\\nabla \\times \\mathbf{v})$", right: "0 (Scalar)" },
                { id: "p3", left: "$\\nabla \\cdot (\\nabla T)$", right: "$\\nabla^2 T$ (Scalar)" },
                { id: "p4", left: "$\\nabla \\times (\\nabla \\times \\mathbf{v})$", right: "$\\nabla(\\nabla \\cdot \\mathbf{v}) - \\nabla^2 \\mathbf{v}$" }
              ]
            }
          ]
        }
      ]
    }
  ]
};