import { ModuleSection } from '../types';

export const UNIT_2_1: ModuleSection = {
  id: "sec-2-1",
  title: "Unit 1: The Electric Field",
  description: "Coulomb's Law, Superposition, and Continuous Charge Distributions.",
  color: "duo-blue",
  units: [
    {
      id: "unit-2-1-coulomb",
      title: "Coulomb's Law",
      description: "Forces between point charges.",
      color: "duo-blue",
      lessons: [
        {
          id: "lesson-coulomb-def",
          title: "Coulomb's Law",
          description: "The fundamental law of electrostatics.",
          icon: "Zap",
          slides: [
            {
              id: "s1",
              type: "theory",
              title: "Definition",
              content: "The force on a test charge $Q$ due to a single point charge $q$ at rest a distance $r$ away is:\n\n$$ \\mathbf{F} = \\frac{1}{4\\pi\\epsilon_0} \\frac{q Q}{r^2} \\hat{r} $$\n\nWhere $\\epsilon_0 = 8.85 \\times 10^{-12} \\, \\mathrm{C^2/N\\cdot m^2}$ is the permittivity of free space."
            },
            {
              id: "q1",
              type: "fill-blank",
              title: "Force Direction",
              content: "Complete the statement about force direction.",
              segments: [
                { id: "1", text: "The force is ", isBlank: false },
                { id: "2", isBlank: true, correctValue: "repulsive" },
                { id: "3", text: " if $q$ and $Q$ have the same sign, and ", isBlank: false },
                { id: "4", isBlank: true, correctValue: "attractive" },
                { id: "5", text: " if they have opposite signs.", isBlank: false }
              ],
              wordBank: ["repulsive", "attractive", "perpendicular", "parallel"]
            }
          ]
        },
        {
          id: "lesson-efield",
          title: "The Electric Field",
          description: "Force per unit charge.",
          icon: "Wind",
          slides: [
            {
              id: "s1",
              type: "theory",
              title: "Definition",
              content: "The Electric Field $\\mathbf{E}$ is defined as the force per unit charge:\n\n$$ \\mathbf{F} = Q \\mathbf{E} $$\n\nFor a point charge $q$:\n\n$$ \\mathbf{E}(\\mathbf{r}) = \\frac{1}{4\\pi\\epsilon_0} \\frac{q}{r^2} \\hat{r} $$"
            },
            {
              id: "s2",
              type: "theory",
              title: "Superposition Principle",
              content: "For a collection of point charges $q_1, q_2, \\dots q_n$, the total field is the vector sum:\n\n$$ \\mathbf{E} = \\mathbf{E}_1 + \\mathbf{E}_2 + \\dots + \\mathbf{E}_n = \\frac{1}{4\\pi\\epsilon_0} \\sum_{i=1}^n \\frac{q_i}{r_i^2} \\hat{r}_i $$"
            }
          ]
        }
      ]
    },
    {
      id: "unit-2-1-continuous",
      title: "Continuous Charge",
      description: "Line, Surface, and Volume charges.",
      color: "duo-blue",
      lessons: [
        {
          id: "lesson-densities",
          title: "Charge Densities",
          description: "Lambda, Sigma, and Rho.",
          icon: "Layers",
          slides: [
            {
              id: "s1",
              type: "theory",
              title: "Definitions",
              content: "When charge is distributed continuously, we define charge densities:\n\n*   **Line Charge ($\\lambda$):** Charge per unit length ($dq = \\lambda dl'$)\n*   **Surface Charge ($\\sigma$):** Charge per unit area ($dq = \\sigma da'$)\n*   **Volume Charge ($\\rho$):** Charge per unit volume ($dq = \\rho d\\tau'$)"
            },
            {
              id: "m1",
              type: "match",
              title: "Match Units",
              content: "Match the density symbol to its SI unit.",
              pairs: [
                { id: "p1", left: "$\\lambda$ (Line)", right: "C/m" },
                { id: "p2", left: "$\\sigma$ (Surface)", right: "C/m$^2$" },
                { id: "p3", left: "$\\rho$ (Volume)", right: "C/m$^3$" }
              ]
            }
          ]
        },
        {
          id: "lesson-cont-field",
          title: "Field Calculation",
          description: "Integral form of E-field.",
          icon: "Calculator",
          slides: [
            {
              id: "s1",
              type: "theory",
              title: "General Formula",
              content: "For a volume charge density $\\rho(\\mathbf{r}')$:\n\n$$ \\mathbf{E}(\\mathbf{r}) = \\frac{1}{4\\pi\\epsilon_0} \\int \\frac{\\rho(\\mathbf{r}')}{r^2} \\hat{r} \\, d\\tau' $$\n\nwhere $\\mathbf{r}$ is the separation vector from source to field point."
            }
          ]
        }
      ]
    }
  ]
};