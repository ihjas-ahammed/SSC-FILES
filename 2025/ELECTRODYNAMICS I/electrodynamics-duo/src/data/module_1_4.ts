import { ModuleSection } from '../types';

export const UNIT_1_4: ModuleSection = {
  id: "sec-1-4",
  title: "Unit 4: Curvilinear Coordinates",
  description: "Spherical and Cylindrical systems, differential elements, and vector derivatives.",
  color: "duo-blue",
  units: [
    {
      id: "unit-1-4-spherical",
      title: "Spherical Coordinates",
      description: "Radius, Polar, and Azimuthal angles.",
      color: "duo-blue",
      lessons: [
        {
          id: "lesson-sphere-def",
          title: "Definition (r, θ, φ)",
          description: "Variables and ranges.",
          icon: "Globe",
          slides: [
            {
              id: "s1",
              type: "theory",
              title: "Coordinates",
              content: "A point $P$ is defined by:\n\n*   $r$: Distance from origin ($0 \\le r < \\infty$)\n*   $\\theta$: Polar angle from positive z-axis ($0 \\le \\theta \\le \\pi$)\n*   $\\phi$: Azimuthal angle from positive x-axis ($0 \\le \\phi \\le 2\\pi$)\n\nRelation to Cartesian:\n$$ x = r \\sin\\theta \\cos\\phi, \\quad y = r \\sin\\theta \\sin\\phi, \\quad z = r \\cos\\theta $$"
            },
            {
              id: "m1",
              type: "match",
              title: "Coordinate Ranges",
              content: "Match the variable to its standard range.",
              pairs: [
                { id: "p1", left: "Polar Angle ($\\theta$)", right: "$0 \\to \\pi$" },
                { id: "p2", left: "Azimuthal Angle ($\\phi$)", right: "$0 \\to 2\\pi$" },
                { id: "p3", left: "Radius ($r$)", right: "$0 \\to \\infty$" }
              ]
            },
            {
              id: "s2",
              type: "theory",
              title: "Unit Vectors",
              content: "The unit vectors $\\hat{r}, \\hat{\\theta}, \\hat{\\phi}$ point in the direction of increasing $r, \\theta, \\phi$ respectively.\n\n**Crucial Note**: Unlike Cartesian $\\hat{x}, \\hat{y}, \\hat{z}$, these unit vectors **change direction** depending on position. Therefore, their derivatives are not necessarily zero."
            }
          ]
        },
        {
          id: "lesson-sphere-diff",
          title: "Differential Elements",
          description: "Length, Area, and Volume.",
          icon: "Minimize",
          slides: [
            {
              id: "s1",
              type: "theory",
              title: "Line Element",
              content: "An infinitesimal displacement $d\\mathbf{l}$ is:\n\n$$ d\\mathbf{l} = dr \\, \\hat{r} + r d\\theta \\, \\hat{\\theta} + r \\sin\\theta d\\phi \\, \\hat{\\phi} $$\n\nNotice the scaling factors ($r$ for $\\theta$, $r\\sin\\theta$ for $\\phi$) needed to convert angles to lengths."
            },
            {
              id: "q1",
              type: "fill-blank",
              title: "Volume Element",
              content: "Complete the formula for the volume element $d\\tau$.",
              segments: [
                { id: "1", text: "$$ d\\tau = dl_r \\cdot dl_\\theta \\cdot dl_\\phi = $", isBlank: false },
                { id: "2", isBlank: true, correctValue: "r^2" },
                { id: "3", text: " $\\sin\\theta \\, dr \\, d\\theta \\, d\\phi $$", isBlank: false }
              ],
              wordBank: ["r", "r^2", "sin(phi)", "cos(theta)"]
            }
          ]
        }
      ]
    },
    {
      id: "unit-1-4-cylindrical",
      title: "Cylindrical Coordinates",
      description: "Radial distance, Angle, and Height.",
      color: "duo-blue",
      lessons: [
        {
          id: "lesson-cyl-def",
          title: "Definition (s, φ, z)",
          description: "Variables and relations.",
          icon: "Database",
          slides: [
            {
              id: "s1",
              type: "theory",
              title: "Coordinates",
              content: "A point is defined by:\n\n*   $s$: Radial distance from z-axis ($s = \\sqrt{x^2+y^2}$)\n*   $\\phi$: Azimuthal angle ($0 \\to 2\\pi$)\n*   $z$: Height ($-\\infty \\to \\infty$)\n\nUnit vectors: $\\hat{s}, \\hat{\\phi}, \\hat{z}$. Note: $\\hat{z}$ is constant, but $\\hat{s}$ and $\\hat{\\phi}$ vary."
            },
            {
              id: "q1",
              type: "quiz",
              title: "Conversion",
              content: "What is $x$ in cylindrical coordinates?",
              options: [
                { id: "1", text: "$s \\cos \\phi$", isCorrect: true, explanation: "Standard polar conversion in the xy plane." },
                { id: "2", text: "$s \\sin \\phi$", isCorrect: false, explanation: "That is y." },
                { id: "3", text: "$z \\tan \\phi$", isCorrect: false, explanation: "" }
              ]
            },
            {
              id: "s2",
              type: "theory",
              title: "Differential Elements",
              content: "Displacement:\n$$ d\\mathbf{l} = ds \\, \\hat{s} + s d\\phi \\, \\hat{\\phi} + dz \\, \\hat{z} $$\n\nVolume:\n$$ d\\tau = s \\, ds \\, d\\phi \\, dz $$"
            }
          ]
        }
      ]
    },
    {
      id: "unit-1-4-derivatives",
      title: "Vector Derivatives",
      description: "Gradient, Divergence, Curl in curvilinear.",
      color: "duo-blue",
      lessons: [
        {
          id: "lesson-grad-curve",
          title: "The Gradient",
          description: "Not just partial derivatives.",
          icon: "TrendingUp",
          slides: [
            {
              id: "s1",
              type: "theory",
              title: "Why it changes",
              content: "Because $d\\mathbf{l}$ has scale factors (like $r d\\theta$), the gradient must compensate to ensure $\\nabla T \\cdot d\\mathbf{l} = dT$.\n\n**Spherical Gradient:**\n$$ \\nabla T = \\frac{\\partial T}{\\partial r}\\hat{r} + \\frac{1}{r}\\frac{\\partial T}{\\partial \\theta}\\hat{\\theta} + \\frac{1}{r\\sin\\theta}\\frac{\\partial T}{\\partial \\phi}\\hat{\\phi} $$"
            },
            {
              id: "q1",
              type: "quiz",
              title: "Gradient Direction",
              content: "If $T$ depends only on $r$ (e.g., $T = k/r$), which way does $\\nabla T$ point?",
              options: [
                { id: "1", text: "$\\hat{r}$ direction", isCorrect: true, explanation: "Only the partial derivative w.r.t r is non-zero." },
                { id: "2", text: "$\\hat{\\theta}$ direction", isCorrect: false, explanation: "" },
                { id: "3", text: "Zero vector", isCorrect: false, explanation: "" }
              ]
            }
          ]
        },
        {
          id: "lesson-div-curl-curve",
          title: "Div & Curl Formulas",
          description: "Using the general formulas.",
          icon: "ListChecks",
          slides: [
            {
              id: "s1",
              type: "theory",
              title: "Look it up!",
              content: "The formulas for Divergence and Curl in spherical/cylindrical coordinates are complex and usually looked up (e.g., inside the cover of Griffiths).\n\n**Example (Spherical Divergence):**\n$$ \\nabla \\cdot \\mathbf{v} = \\frac{1}{r^2}\\frac{\\partial}{\\partial r}(r^2 v_r) + \\frac{1}{r\\sin\\theta}\\frac{\\partial}{\\partial \\theta}(\\sin\\theta v_\\theta) + \\dots $$"
            },
            {
              id: "p1",
              type: "proof",
              title: "Check Divergence",
              content: "Calculate $\\nabla \\cdot \\mathbf{v}$ for $\\mathbf{v} = r^2 \\hat{r}$.",
              proofSteps: [
                "Identify components: $v_r = r^2, v_\\theta = 0, v_\\phi = 0$.",
                "Use formula term 1: $\\frac{1}{r^2}\\frac{\\partial}{\\partial r}(r^2 v_r)$.",
                "Substitute $v_r$: $\\frac{1}{r^2}\\frac{\\partial}{\\partial r}(r^2 \\cdot r^2) = \\frac{1}{r^2}\\frac{\\partial}{\\partial r}(r^4)$.",
                "Differentiate: $\\frac{1}{r^2}(4r^3) = 4r$.",
                "Other terms are zero. Result: $4r$."
              ]
            }
          ]
        }
      ]
    }
  ]
};