import { Unit } from '../../types';

export const UNIT_1_7_3_GEOMETRY_PRACTICE: Unit = {
  id: "unit-1-7-3",
  title: "Geometry Practice",
  description: "Calculations with Conics",
  color: "duo-indigo",
  lessons: [
    {
      id: "les-1-7-3-1",
      title: "Worked Example 10.3",
      description: "Comet Orbit",
      icon: "Star",
      slides: [
        {
          id: "prob",
          type: "theory",
          title: "The Problem",
          content: "**Worked Example 10.3:**\n\nA comet of mass $m$ starts from infinity with velocity $v_0$ and impact parameter $b$. Find the distance of closest approach (perihelion)."
        },
        {
          id: "setup",
          type: "theory",
          title: "Conserved Quantities",
          content: "At infinity ($r \\to \\infty$), $V=0$.\n\nEnergy: $E = \\frac{1}{2}mv_0^2$\nAngular Momentum: $l = mv_0 b$"
        },
        {
          id: "solve",
          type: "proof",
          title: "Finding Perihelion",
          content: "We need the minimum $r$ for a hyperbolic orbit (since $E>0$).",
          proofSteps: [
            "Use the general orbit equation: $r_{min} = \\frac{a(e^2-1)}{1+e}$ (at $\\theta=0$)",
            "Wait, simpler: Use conservation of energy at perihelion $r_p$.",
            "$E = \\frac{1}{2}mv_p^2 - \\frac{k}{r_p}$ and $l = mv_p r_p$.",
            "Substitute $v_p = l/mr_p$ into Energy equation.",
            "Solve the quadratic for $r_p$."
          ]
        }
      ]
    },
    {
      id: "les-1-7-3-2",
      title: "Exercise 10.11",
      description: "Equation Derivation",
      icon: "PenTool",
      slides: [
        {
          id: "prob",
          type: "fill_in_blank",
          title: "Exercise 10.11",
          content: "Starting from the Law of Cosines derivation, we defined eccentricity $e$ as the ratio of focal distance $f$ to ___.",
          blankAnswer: "a"
        }
      ]
    },
    {
      id: "les-1-7-3-3",
      title: "Exercise 10.12",
      description: "Minor Axis Relation",
      icon: "PenTool",
      slides: [
        {
          id: "prob",
          type: "proof",
          title: "Exercise 10.12",
          content: "Show that for an ellipse $b/a = (1-e^2)^{1/2}$.",
          proofSteps: [
            "Consider the point P at the end of the minor axis.",
            "Distance to center is $b$. Distance to focus is $a$.",
            "Pythagorean theorem on the triangle: $a^2 = b^2 + f^2$.",
            "Recall $f = ae$.",
            "$a^2 = b^2 + a^2 e^2 \\implies b^2 = a^2(1-e^2)$.",
            "Square root both sides."
          ]
        }
      ]
    },
    {
      id: "les-1-7-3-4",
      title: "Exercise 10.13",
      description: "Average Potential",
      icon: "PenTool",
      slides: [
        {
          id: "prob",
          type: "numerical",
          title: "Average Potential",
          content: "Using the Virial Theorem $\\langle T \\rangle = -\\frac{1}{2}\\langle V \\rangle$ and $E = \\langle T \\rangle + \\langle V \\rangle$, find $\\langle V \\rangle$ in terms of $E$.",
          numericAnswer: 0, // Placeholder
          // Answer is <V> = 2E.
        },
        {
          id: "sol",
          type: "solution",
          title: "Solution",
          content: "Substitute T.",
          interactiveSteps: [
            {
              stepText: "Replace $\\langle T \\rangle$ in the Energy equation.",
              options: [
                { id: "a", text: "$E = -\\frac{1}{2}\\langle V \\rangle + \\langle V \\rangle = \\frac{1}{2}\\langle V \\rangle$", isCorrect: true, explanation: "Correct." }
              ]
            },
            {
              stepText: "Solve for $\\langle V \\rangle$.",
              options: [
                { id: "a", text: "$\\langle V \\rangle = 2E = -k/a$", isCorrect: true, explanation: "Correct. The average potential energy is twice the total energy." }
              ]
            }
          ]
        }
      ]
    }
  ]
};