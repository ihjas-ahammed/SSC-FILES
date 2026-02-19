import { ModuleSection } from '../types';

export const UNIT_2_2: ModuleSection = {
  id: "sec-2-2",
  title: "Unit 2: Divergence & Curl of E",
  description: "Field lines, Flux, Gauss's Law, and Curl.",
  color: "duo-blue",
  units: [
    {
      id: "unit-2-2-gauss",
      title: "Gauss's Law",
      description: "Flux and charge enclosure.",
      color: "duo-blue",
      lessons: [
        {
          id: "lesson-flux",
          title: "Electric Flux",
          description: "Flow of field lines.",
          icon: "Maximize",
          slides: [
            {
              id: "s1",
              type: "theory",
              title: "Flux Definition",
              content: "The flux of $\\mathbf{E}$ through a surface $S$ is:\n\n$$ \\Phi_E = \\int_S \\mathbf{E} \\cdot d\\mathbf{a} $$\n\nIt is a measure of the 'number of field lines' passing through the surface."
            }
          ]
        },
        {
          id: "lesson-gauss-law",
          title: "Gauss's Law",
          description: "Integral and Differential forms.",
          icon: "Box",
          slides: [
            {
              id: "s1",
              type: "theory",
              title: "Integral Form",
              content: "The flux through any **closed** surface is proportional to the total enclosed charge:\n\n$$ \\oint \\mathbf{E} \\cdot d\\mathbf{a} = \\frac{1}{\\epsilon_0} Q_{enc} $$\n\nThis is useful for finding $\\mathbf{E}$ when high symmetry exists."
            },
            {
              id: "s2",
              type: "theory",
              title: "Differential Form",
              content: "Applying the Divergence Theorem, we get the differential form:\n\n$$ \\nabla \\cdot \\mathbf{E} = \\frac{\\rho}{\\epsilon_0} $$\n\nThis tells us that charge is the source (or sink) of electric field divergence."
            },
            {
              id: "q1",
              type: "quiz",
              title: "Symmetry",
              content: "Which symmetries allow Gauss's Law to easily solve for E?",
              options: [
                { id: "1", text: "Spherical, Cylindrical, Planar", isCorrect: true, explanation: "These allow us to pull |E| out of the integral." },
                { id: "2", text: "Cubical, Triangular, Arbitrary", isCorrect: false, explanation: "Lack sufficient symmetry for constant field magnitude." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "unit-2-2-curl",
      title: "The Curl of E",
      description: "Electrostatic nature.",
      color: "duo-blue",
      lessons: [
        {
          id: "lesson-curl-e",
          title: "Curl is Zero",
          description: "Conservative fields.",
          icon: "RotateCcw",
          slides: [
            {
              id: "s1",
              type: "theory",
              title: "Statement",
              content: "For static charges, the curl of $\\mathbf{E}$ is always zero:\n\n$$ \\nabla \\times \\mathbf{E} = 0 $$\n\nThis implies that $\\oint \\mathbf{E} \\cdot d\\mathbf{l} = 0$ for any closed loop."
            },
            {
              id: "p1",
              type: "proof",
              title: "Proof Sketch (Point Charge)",
              content: "Show $\\oint \\mathbf{E} \\cdot d\\mathbf{l} = 0$ for a point charge.",
              proofSteps: [
                "$\\mathbf{E} \\propto \\frac{1}{r^2} \\hat{r}$.",
                "In spherical coords, $d\\mathbf{l} = dr \\hat{r} + r d\\theta \\hat{\\theta} + r \\sin\\theta d\\phi \\hat{\\phi}$.",
                "$\\mathbf{E} \\cdot d\\mathbf{l} \\propto \\frac{1}{r^2} dr$.",
                "$\\int_a^b \\mathbf{E} \\cdot d\\mathbf{l}$ depends only on $r_a$ and $r_b$.",
                "For a closed loop, $r_a = r_b$, so the integral is 0."
              ]
            }
          ]
        }
      ]
    }
  ]
};