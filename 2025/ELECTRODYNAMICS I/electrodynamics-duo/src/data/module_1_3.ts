import { ModuleSection } from '../types';

export const UNIT_1_3: ModuleSection = {
  id: "sec-1-3",
  title: "Unit 3: Integral Calculus",
  description: "Line, Surface, and Volume integrals, and the Fundamental Theorems of Vector Calculus.",
  color: "duo-blue",
  units: [
    {
      id: "unit-1-3-integrals",
      title: "Vector Integrals",
      description: "Defining Work, Flux, and Volume accumulation.",
      color: "duo-blue",
      lessons: [
        {
          id: "lesson-line-int",
          title: "Line Integrals",
          description: "Path integration and Work.",
          icon: "Activity",
          slides: [
            {
              id: "s1",
              type: "theory",
              title: "Definition",
              content: "A **Line Integral** sums the component of a vector field $\\mathbf{v}$ along a path $\\mathcal{P}$ from point $a$ to $b$:\n\n$$ \\int_{\\mathcal{P}} \\mathbf{v} \\cdot d\\mathbf{l} $$\n\nwhere $d\\mathbf{l}$ is the infinitesimal displacement vector along the path."
            },
            {
              id: "s2",
              type: "theory",
              title: "Physical Example: Work",
              content: "The most common example is the work $W$ done by a force $\\mathbf{F}$ on a particle moving along a path:\n\n$$ W = \\int_a^b \\mathbf{F} \\cdot d\\mathbf{l} $$\n\nIf the path is a closed loop, we write $\\oint \\mathbf{F} \\cdot d\\mathbf{l}$."
            },
            {
              id: "q1",
              type: "fill-blank",
              title: "Conservative Fields",
              content: "Fill in the property of conservative fields.",
              segments: [
                { id: "1", text: "If a line integral depends only on the end points and not the path, the field is ", isBlank: false },
                { id: "2", isBlank: true, correctValue: "conservative" },
                { id: "3", text: ". For a closed loop, the integral is ", isBlank: false },
                { id: "4", isBlank: true, correctValue: "zero" },
                { id: "5", text: ".", isBlank: false }
              ],
              wordBank: ["conservative", "solenoidal", "zero", "infinite"]
            }
          ]
        },
        {
          id: "lesson-surface-int",
          title: "Surface Integrals",
          description: "Flux through surfaces.",
          icon: "Layers",
          slides: [
            {
              id: "s1",
              type: "theory",
              title: "Definition",
              content: "A **Surface Integral** calculates the flux of a vector field $\\mathbf{v}$ through a surface $\\mathcal{S}$:\n\n$$ \\Phi = \\int_{\\mathcal{S}} \\mathbf{v} \\cdot d\\mathbf{a} $$\n\nHere, $d\\mathbf{a}$ is a vector with magnitude equal to the area of the patch and direction **normal** (perpendicular) to the surface."
            },
            {
              id: "s2",
              type: "theory",
              title: "Orientation",
              content: "For a **closed surface** (like a sphere), the direction of $d\\mathbf{a}$ is conventionally taken as pointing **outward**.\n\n$$ \\oint \\mathbf{v} \\cdot d\\mathbf{a} $$\n\nA positive flux means the net flow is outward."
            },
            {
              id: "q1",
              type: "quiz",
              title: "Flux Direction",
              content: "If water flows *into* a closed box, what is the sign of the flux?",
              options: [
                { id: "1", text: "Positive", isCorrect: false, explanation: "Positive means outward flow." },
                { id: "2", text: "Negative", isCorrect: true, explanation: "Inward flow opposes the outward normal vector." },
                { id: "3", text: "Zero", isCorrect: false, explanation: "Only if inflow equals outflow." }
              ]
            }
          ]
        },
        {
          id: "lesson-volume-int",
          title: "Volume Integrals",
          description: "Accumulation over space.",
          icon: "Box",
          slides: [
            {
              id: "s1",
              type: "theory",
              title: "Definition",
              content: "A **Volume Integral** sums a scalar quantity $T$ over a 3D region $\\mathcal{V}$:\n\n$$ \\int_{\\mathcal{V}} T \\, d\\tau $$\n\nwhere $d\\tau$ is the infinitesimal volume element ($dx\\,dy\\,dz$ in Cartesian)."
            },
            {
              id: "m1",
              type: "match",
              title: "Integral Types",
              content: "Match the integral to the geometry of its element.",
              pairs: [
                { id: "p1", left: "Line Integral ($d\\mathbf{l}$)", right: "1 Dimension" },
                { id: "p2", left: "Surface Integral ($d\\mathbf{a}$)", right: "2 Dimensions" },
                { id: "p3", left: "Volume Integral ($d\\tau$)", right: "3 Dimensions" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "unit-1-3-theorems",
      title: "Fundamental Theorems",
      description: "Connecting derivatives and integrals.",
      color: "duo-blue",
      lessons: [
        {
          id: "lesson-fund-grad",
          title: "Theorem for Gradients",
          description: "Relating points to paths.",
          icon: "ArrowRight",
          slides: [
            {
              id: "s1",
              type: "theory",
              title: "The Gradient Theorem",
              content: "Also known as the Fundamental Theorem for Line Integrals:\n\n$$ \\int_a^b (\\nabla T) \\cdot d\\mathbf{l} = T(b) - T(a) $$\n\n**Significance**: The line integral of a gradient depends *only* on the end points, not the path taken."
            },
            {
              id: "q1",
              type: "quiz",
              title: "Closed Loops",
              content: "Based on this theorem, what is $\\oint (\\nabla T) \\cdot d\\mathbf{l}$?",
              options: [
                { id: "1", text: "$T(b) - T(a)$", isCorrect: false, explanation: "For a closed loop, a = b." },
                { id: "2", text: "Zero", isCorrect: true, explanation: "Since start and end points are the same, the difference is zero." }
              ]
            }
          ]
        },
        {
          id: "lesson-divergence-thm",
          title: "The Divergence Theorem",
          description: "Gauss's Theorem (Green's Thm).",
          icon: "Maximize",
          slides: [
            {
              id: "s1",
              type: "theory",
              title: "Statement",
              content: "The **Divergence Theorem** relates the flow out of a volume to the divergence inside:\n\n$$ \\int_{\\mathcal{V}} (\\nabla \\cdot \mathbf{v}) \\, d\\tau = \\oint_{\\mathcal{S}} \\mathbf{v} \\cdot d\\mathbf{a} $$\n\nWhere $\\mathcal{S}$ is the closed boundary of $\\mathcal{V}$."
            },
            {
              id: "s2",
              type: "theory",
              title: "Intuition",
              content: "Imagine a faucet inside a tub. To measure how much water is being produced (Divergence inside volume), you can measure how much flows out through the surface (Flux)."
            },
            {
              id: "p1",
              type: "proof",
              title: "Example Application",
              content: "Evaluate $\\oint \\mathbf{r} \\cdot d\\mathbf{a}$ for a sphere of radius R.",
              proofSteps: [
                "Using Divergence Theorem: convert to $\\int (\\nabla \\cdot \\mathbf{r}) d\\tau$.",
                "Calculate divergence: $\\nabla \\cdot \\mathbf{r} = \\frac{\\partial x}{\\partial x} + \\frac{\\partial y}{\\partial y} + \\frac{\\partial z}{\\partial z} = 3$.",
                "Integral becomes $\\int 3 \\, d\\tau = 3 \\times (Volume)$.",
                "Volume of sphere is $\\frac{4}{3}\\pi R^3$.",
                "Result: $3 \\times \\frac{4}{3}\\pi R^3 = 4\\pi R^3$."
              ]
            }
          ]
        },
        {
          id: "lesson-stokes",
          title: "Stokes' Theorem",
          description: "Curl over a surface.",
          icon: "RotateCcw",
          slides: [
            {
              id: "s1",
              type: "theory",
              title: "Statement",
              content: "**Stokes' Theorem** relates the twist over a surface to the circulation around its edge:\n\n$$ \\int_{\\mathcal{S}} (\\nabla \\times \\mathbf{v}) \\cdot d\\mathbf{a} = \\oint_{\\mathcal{P}} \\mathbf{v} \\cdot d\\mathbf{l} $$\n\nWhere $\\mathcal{P}$ is the perimeter bounding the open surface $\\mathcal{S}$."
            },
            {
              id: "m1",
              type: "match",
              title: "Boundary Relationships",
              content: "Match the Region to its Boundary.",
              pairs: [
                { id: "p1", left: "Volume ($\\mathcal{V}$)", right: "Closed Surface ($\\mathcal{S}$)" },
                { id: "p2", left: "Open Surface ($\\mathcal{S}$)", right: "Closed Loop ($\\mathcal{P}$)" },
                { id: "p3", left: "Line Path ($\\mathcal{P}$)", right: "Two End Points ($a, b$)" }
              ]
            },
            {
              id: "q1",
              type: "fill-blank",
              title: "Right Hand Rule",
              content: "The direction of $d\\mathbf{a}$ and the direction of integration along the path $\\mathcal{P}$ are related by the ",
              segments: [
                { id: "1", isBlank: true, correctValue: "right hand" },
                { id: "2", text: " rule.", isBlank: false }
              ],
              wordBank: ["right hand", "left hand", "corkscrew", "thumb"]
            }
          ]
        }
      ]
    }
  ]
};