import { Unit } from '../../types';

export const UNIT_1_8_1_PROOFS: Unit = {
  id: "unit-1-8-1",
  title: "The Proofs",
  description: "Newton's Triumph",
  color: "duo-pink",
  lessons: [
    {
      id: "les-1-8-1-1",
      title: "First Law Proof",
      description: "Deriving the Ellipse",
      icon: "Award",
      slides: [
        {
          id: "recap",
          type: "theory",
          title: "The Goal",
          content: "Kepler stated planets move in ellipses. Newton proved it using $F = ma$.\n\nWe found the orbit equation for gravity to be:\n$$ r = \\frac{p}{1 + e\\cos\\theta} $$\n\nThis IS the polar equation of an ellipse (with origin at one focus). Law 1 Proved."
        }
      ]
    },
    {
      id: "les-1-8-1-2",
      title: "Second Law Proof",
      description: "Areal Velocity",
      icon: "Award",
      slides: [
        {
          id: "recap",
          type: "theory",
          title: "The Goal",
          content: "Kepler stated equal areas are swept in equal times."
        },
        {
          id: "proof",
          type: "proof",
          title: "Newton's Proof",
          content: "We already showed this in Section 1.2!",
          proofSteps: [
            "Angular Momentum $L$ is conserved for central forces.",
            "Geometric definition of $L$: $\\frac{dA}{dt} = \\frac{L}{2m}$.",
            "Since $L$ and $m$ are constants, $dA/dt$ is constant.",
            "Law 2 Proved."
          ]
        }
      ]
    },
    {
      id: "les-1-8-1-3",
      title: "Third Law Proof",
      description: "Period T",
      icon: "Award",
      slides: [
        {
          id: "setup",
          type: "theory",
          title: "The Goal",
          content: "Prove $T^2 \\propto a^3$."
        },
        {
          id: "derive",
          type: "proof",
          title: "Derivation",
          content: "Integrate the area rate over one full period.",
          proofSteps: [
            "Total Area of Ellipse $A = \\pi a b$.",
            "Rate $\\frac{dA}{dt} = \\frac{L}{2m}$.",
            "Period $T = \\frac{\\text{Total Area}}{\\text{Rate}} = \\frac{\\pi a b}{L/2m} = \\frac{2\\pi m a b}{L}$",
            "Substitute $b = a\\sqrt{1-e^2}$ and $L = \\sqrt{m k a (1-e^2)}$.",
            "Simplify: $T = 2\\pi \\sqrt{\\frac{m}{k}} a^{3/2}$.",
            "Square it: $T^2 = \\frac{4\\pi^2 m}{k} a^3$. Law 3 Proved."
          ]
        }
      ]
    }
  ]
};