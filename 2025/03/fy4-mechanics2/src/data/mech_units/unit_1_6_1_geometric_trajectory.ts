import { Unit } from '../../types';

export const UNIT_1_6_1_GEOMETRIC_TRAJECTORY: Unit = {
  id: "unit-1-6-1",
  title: "Geometric Trajectory",
  description: "Eliminating time",
  color: "duo-red",
  lessons: [
    {
      id: "les-1-6-1-1",
      title: "Eliminating Time",
      description: "Chain Rule",
      icon: "Link",
      slides: [
        {
          id: "intro",
          type: "theory",
          title: "Why?",
          content: "We often care about the shape of the orbit $r(\\theta)$ rather than where the planet is at a specific second $r(t)$. We need to remove $t$."
        },
        {
          id: "derive",
          type: "proof",
          title: "Chain Rule Trick",
          content: "Use the angular momentum relation $\\dot{\\theta} = \\frac{l}{mr^2}$.",
          proofSteps: [
            "$\\frac{d}{dt} = \\frac{d\\theta}{dt}\\frac{d}{d\\theta} = \\dot{\\theta}\\frac{d}{d\\theta}$",
            "$\\frac{d}{dt} = \\frac{l}{mr^2}\\frac{d}{d\\theta}$",
            "This operator replaces all time derivatives."
          ]
        }
      ]
    },
    {
      id: "les-1-6-1-2",
      title: "Binet Equation",
      description: "The Substitution u = 1/r",
      icon: "RefreshCcw",
      slides: [
        {
          id: "sub",
          type: "theory",
          title: "The Substitution",
          content: "The math gets messy with $1/r^2$ terms. A brilliant trick is to use the variable $u = 1/r$."
        },
        {
          id: "derive_u",
          type: "proof",
          title: "Deriving the Equation",
          content: "Calculate $\\dot{r}$ in terms of $u$.",
          proofSteps: [
            "$r = 1/u$, so $\\frac{dr}{d\\theta} = -\\frac{1}{u^2}\\frac{du}{d\\theta}$",
            "$\\dot{r} = \\frac{l}{mr^2}\\frac{dr}{d\\theta} = \\frac{l u^2}{m} (-\\frac{1}{u^2}\\frac{du}{d\\theta}) = -\\frac{l}{m}\\frac{du}{d\\theta}$",
            "Differentiate again for $\\ddot{r}$...",
            "Substitute into Newton's Radial Equation.",
            "Result: $\\frac{d^2u}{d\\theta^2} + u = -\\frac{m}{l^2 u^2} f(1/u)$"
          ]
        }
      ]
    },
    {
      id: "les-1-6-1-3",
      title: "Harmonic Oscillator Form",
      description: "Why this is beautiful",
      icon: "Activity",
      slides: [
        {
          id: "vis",
          type: "interactive_canvas",
          title: "Mathematical Twins",
          content: "The Orbit Equation looks suspiciously like a Harmonic Oscillator!",
          interactiveCanvasId: "harmonic-oscillator-analogy"
        },
        {
          id: "gravity_case",
          type: "theory",
          title: "Gravity Case",
          content: "For gravity, $f(r) = -k/r^2 = -k u^2$.\n\nThe equation becomes:\n$$ \\frac{d^2u}{d\\theta^2} + u = \\frac{mk}{l^2} $$\n\nThis is exactly the equation for a **Shifted Harmonic Oscillator**! The solution is a cosine wave (which describes an ellipse in polar coordinates)."
        }
      ]
    }
  ]
};