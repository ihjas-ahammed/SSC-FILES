import { ModuleSection } from '../types';

export const UNIT_4_1: ModuleSection = {
  id: "sec-4-1",
  title: "Unit 1: Basic Measurements",
  description: "Kirchhoff's Laws and Bridge Circuits.",
  color: "duo-gray",
  units: [
    {
      id: "unit-4-1-laws",
      title: "Kirchhoff's Laws",
      description: "Analysis of DC circuits.",
      color: "duo-gray",
      lessons: [
        {
          id: "lesson-kcl-kvl",
          title: "KCL & KVL",
          description: "Current and Voltage laws.",
          icon: "GitMerge",
          slides: [
            {
              id: "s1",
              type: "theory",
              title: "Kirchhoff's Current Law (KCL)",
              content: "**Conservation of Charge**: The algebraic sum of currents entering a node is zero.\n\n$$ \\sum I_{in} = \\sum I_{out} $$\n\nor $\\sum I = 0$ at any junction."
            },
            {
              id: "s2",
              type: "theory",
              title: "Kirchhoff's Voltage Law (KVL)",
              content: "**Conservation of Energy**: The algebraic sum of voltage drops around any closed loop is zero.\n\n$$ \\sum V = 0 \\quad \\text{or} \\quad \\sum \\mathcal{E} = \\sum IR $$"
            },
            {
              id: "q1",
              type: "fill-blank",
              title: "Mesh Analysis",
              content: "Mesh analysis uses ",
              segments: [
                { id: "1", isBlank: true, correctValue: "KVL" },
                { id: "2", text: " to solve for loop currents, while Nodal analysis uses ", isBlank: false },
                { id: "3", isBlank: true, correctValue: "KCL" },
                { id: "4", text: ".", isBlank: false }
              ],
              wordBank: ["KVL", "KCL", "Ohm's Law", "Power"]
            }
          ]
        }
      ]
    },
    {
      id: "unit-4-1-bridges",
      title: "DC Bridges",
      description: "Wheatstone and Carey Foster.",
      color: "duo-gray",
      lessons: [
        {
          id: "lesson-wheatstone",
          title: "Wheatstone Bridge",
          description: "Balance condition.",
          icon: "Scale",
          slides: [
            {
              id: "s1",
              type: "theory",
              title: "Derivation",
              content: "For a bridge with arms $P, Q, R, S$, the galvanometer shows zero deflection (null point) when potentials at B and D are equal.\n\n$$ \\frac{P}{Q} = \\frac{R}{S} $$"
            },
            {
              id: "p1",
              type: "proof",
              title: "Proof of Balance",
              content: "Show P/Q = R/S when Ig = 0.",
              proofSteps: [
                "Voltage at B equals Voltage at D ($V_B = V_D$).",
                "Voltage drop $V_{AB} = I_1 P$ and $V_{AD} = I_2 R$. So $I_1 P = I_2 R$.",
                "Voltage drop $V_{BC} = I_1 Q$ and $V_{DC} = I_2 S$. So $I_1 Q = I_2 S$.",
                "Divide equations: $(I_1 P) / (I_1 Q) = (I_2 R) / (I_2 S)$.",
                "Result: $P/Q = R/S$."
              ]
            }
          ]
        },
        {
          id: "lesson-carey",
          title: "Carey Foster Bridge",
          description: "Measuring low resistance difference.",
          icon: "Sliders",
          slides: [
            {
              id: "s1",
              type: "theory",
              title: "Principle",
              content: "The Carey Foster bridge compares two nearly equal resistances. It eliminates end errors of the meter bridge.\n\nFormula:\n$$ X - Y = \\rho (l_2 - l_1) $$\n\nWhere $\\rho$ is resistance per unit length of the wire."
            }
          ]
        }
      ]
    }
  ]
};