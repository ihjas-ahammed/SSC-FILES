import { Unit } from '../../types';

export const UNIT_1_4_1_ENERGY_EQUATION: Unit = {
  id: "unit-1-4-1",
  title: "The Energy Equation",
  description: "Conservation and Effective Potential",
  color: "duo-blue",
  lessons: [
    {
      id: "les-1-4-1-1",
      title: "Mechanical Energy",
      description: "Conservation of E",
      icon: "Zap",
      slides: [
        {
          id: "intro",
          type: "theory",
          title: "Total Energy",
          content: "Since central forces are conservative, Total Mechanical Energy $E$ is constant.\n\n$$ E = T + V = \\frac{1}{2}m(\\dot{r}^2 + r^2\\dot{\\theta}^2) + V(r) $$"
        }
      ]
    },
    {
      id: "les-1-4-1-2",
      title: "Radial Energy Equation",
      description: "Eliminating theta",
      icon: "Minimize2",
      slides: [
        {
          id: "derive",
          type: "proof",
          title: "Simplifying Energy",
          content: "We want an equation only in $r$. Use $l = mr^2\\dot{\\theta}$.",
          proofSteps: [
            "Angular Term: $\\frac{1}{2}mr^2\\dot{\\theta}^2 = \\frac{1}{2}mr^2(\\frac{l}{mr^2})^2$",
            "Simplify: $\\frac{1}{2}mr^2 \\frac{l^2}{m^2 r^4} = \\frac{l^2}{2mr^2}$",
            "Substitute into E: $E = \\frac{1}{2}m\\dot{r}^2 + \\frac{l^2}{2mr^2} + V(r)$"
          ]
        },
        {
          id: "check",
          type: "quiz",
          title: "Concept Check",
          content: "The term $\\frac{l^2}{2mr^2}$ came from Kinetic Energy, but it depends only on position $r$. What does it look like now?",
          options: [
            { id: "A", text: "Kinetic Energy", isCorrect: false, explanation: "It doesn't involve $\\dot{r}$ anymore." },
            { id: "B", text: "Potential Energy", isCorrect: true, explanation: "Mathematically, it acts exactly like a repulsive potential energy term." }
          ]
        }
      ]
    },
    {
      id: "les-1-4-1-3",
      title: "Effective Potential",
      description: "V_eff Definition",
      icon: "TrendingUp",
      slides: [
        {
          id: "def",
          type: "theory",
          title: "Defining Effective Potential",
          content: "We define the **Effective Potential Energy** $V_{eff}(r)$ as:\n\n$$ V_{eff}(r) = \\frac{l^2}{2mr^2} + V(r) $$\n\nThis allows us to treat the radial motion as a 1D problem with energy:\n$$ E = \\frac{1}{2}m\\dot{r}^2 + V_{eff}(r) $$"
        },
        {
          id: "barrier",
          type: "theory",
          title: "Centrifugal Barrier",
          content: "The term $\\frac{l^2}{2mr^2}$ is always positive and proportional to $1/r^2$. As $r \\to 0$, this term shoots to $+\\infty$, creating a 'barrier' that prevents the particle from crashing into the center (unless $l=0$)."
        }
      ]
    }
  ]
};