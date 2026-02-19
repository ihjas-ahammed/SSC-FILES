import { ModuleSection } from '../types';

export const UNIT_3_2: ModuleSection = {
  id: "sec-3-2",
  title: "Unit 2: Field Equations",
  description: "Divergence, Curl, Ampere's Law, and Potentials.",
  color: "duo-green",
  units: [
    {
      id: "unit-3-2-maxwell",
      title: "Div & Curl of B",
      description: "Fundamental properties of Magnetostatics.",
      color: "duo-green",
      lessons: [
        {
          id: "lesson-div-b",
          title: "Divergence of B",
          description: "No magnetic monopoles.",
          icon: "Maximize2",
          slides: [
            {
              id: "s1",
              type: "theory",
              title: "Statement",
              content: "The divergence of the magnetic field is always zero:\n\n$$ \\nabla \\cdot \\mathbf{B} = 0 $$\n\nThis is a direct consequence of the Biot-Savart law. Physically, it means there are **no magnetic monopoles**; magnetic field lines always form closed loops."
            },
            {
              id: "m1",
              type: "match",
              title: "Compare E and B",
              content: "Match the field to its divergence behavior.",
              pairs: [
                { id: "p1", left: "Electrostatics ($\\nabla \\cdot \\mathbf{E}$)", right: "$\\rho / \\epsilon_0$ (Sources exist)" },
                { id: "p2", left: "Magnetostatics ($\\nabla \\cdot \\mathbf{B}$)", right: "0 (No sources)" }
              ]
            }
          ]
        },
        {
          id: "lesson-ampere-law",
          title: "Ampere's Law",
          description: "The Curl of B.",
          icon: "RotateCw",
          slides: [
            {
              id: "s1",
              type: "theory",
              title: "Differential Form",
              content: "For steady currents, the curl of $\\mathbf{B}$ is proportional to the current density $\\mathbf{J}$:\n\n$$ \\nabla \\times \\mathbf{B} = \\mu_0 \\mathbf{J} $$\n\nThis is **Ampere's Law**."
            },
            {
              id: "s2",
              type: "theory",
              title: "Integral Form",
              content: "Applying Stokes' Theorem:\n\n$$ \\oint \\mathbf{B} \\cdot d\\mathbf{l} = \\mu_0 I_{enc} $$\n\nThe line integral of $\\mathbf{B}$ around a closed loop equals $\\mu_0$ times the current piercing the loop."
            },
            {
              id: "p1",
              type: "proof",
              title: "Proof: Field of Solenoid",
              content: "Find B inside a long solenoid with $n$ turns per unit length.",
              proofSteps: [
                "Draw rectangular Ampere loop with one side inside and one outside.",
                "Field outside is zero. Field perpendicular to axis is zero.",
                "Only the side of length $L$ inside contributes: $\\int \\mathbf{B} \\cdot d\\mathbf{l} = B L$.",
                "Current enclosed: $N$ turns $\\times$ Current $I$. $I_{enc} = (nL)I$.",
                "Apply Ampere's Law: $B L = \\mu_0 n L I$.",
                "Result: $B = \\mu_0 n I$."
              ]
            }
          ]
        }
      ]
    },
    {
      id: "unit-3-2-potential",
      title: "Magnetic Potential",
      description: "The Vector Potential A.",
      color: "duo-green",
      lessons: [
        {
          id: "lesson-vec-pot",
          title: "Vector Potential A",
          description: "Definition and Gauge.",
          icon: "Anchor",
          slides: [
            {
              id: "s1",
              type: "theory",
              title: "Definition",
              content: "Since $\\nabla \\cdot \\mathbf{B} = 0$, we can express $\\mathbf{B}$ as the curl of a vector field $\\mathbf{A}$:\n\n$$ \\mathbf{B} = \\nabla \\times \\mathbf{A} $$\n\n$\\mathbf{A}$ is called the **Magnetic Vector Potential**."
            },
            {
              id: "q1",
              type: "fill-blank",
              title: "Gauge Freedom",
              content: "We are free to choose the divergence of A. The Coulomb Gauge sets ",
              segments: [
                { id: "1", text: "$\\nabla \\cdot \\mathbf{A} = $", isBlank: false },
                { id: "2", isBlank: true, correctValue: "0" },
                { id: "3", text: ". This simplifies Ampere's law to ", isBlank: false },
                { id: "4", isBlank: true, correctValue: "Poisson's" },
                { id: "5", text: " equation.", isBlank: false }
              ],
              wordBank: ["0", "infinity", "Laplace's", "Poisson's"]
            },
            {
              id: "s2",
              type: "theory",
              title: "Poisson's Equation for A",
              content: "Under the Coulomb gauge:\n\n$$ \\nabla^2 \\mathbf{A} = -\\mu_0 \\mathbf{J} $$\n\nThis separates into three scalar Poisson equations, one for each component."
            }
          ]
        },
        {
          id: "lesson-boundary-mag",
          title: "Boundary Conditions",
          description: "Fields at interfaces.",
          icon: "Split",
          slides: [
            {
              id: "s1",
              type: "theory",
              title: "The Conditions",
              content: "Across a surface carrying surface current $\\mathbf{K}$:\n\n1.  **Normal B**: Continuous.\n$$ B_{above}^{\\perp} = B_{below}^{\\perp} $$\n2.  **Tangential B**: Discontinuous.\n$$ \\mathbf{B}_{above}^{\\parallel} - \\mathbf{B}_{below}^{\\parallel} = \\mu_0 (\\mathbf{K} \\times \\hat{n}) $$"
            },
            {
              id: "s2",
              type: "theory",
              title: "Potential Continuity",
              content: "The vector potential $\\mathbf{A}$ is continuous across any boundary:\n\n$$ \\mathbf{A}_{above} = \\mathbf{A}_{below} $$\n\nHowever, its derivative (related to B) is discontinuous."
            }
          ]
        }
      ]
    }
  ]
};