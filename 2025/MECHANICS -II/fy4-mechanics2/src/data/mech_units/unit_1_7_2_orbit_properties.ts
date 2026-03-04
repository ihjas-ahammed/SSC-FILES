import { Unit } from '../../types';

export const UNIT_1_7_2_ORBIT_PROPERTIES: Unit = {
  id: "unit-1-7-2",
  title: "Orbit Properties",
  description: "Semimajor Axis & Eccentricity",
  color: "duo-indigo",
  lessons: [
    {
      id: "les-1-7-2-1",
      title: "Energy and Size",
      description: "Relation to 'a'",
      icon: "Maximize",
      slides: [
        {
          id: "intuition",
          type: "quiz",
          title: "Intuition Check",
          content: "Does the size of the orbit (semimajor axis $a$) depend on the angular momentum $l$?",
          options: [
            { id: "A", text: "Yes", isCorrect: false, explanation: "Surprisingly, $a$ depends ONLY on Energy." },
            { id: "B", text: "No", isCorrect: true, explanation: "For a given Energy $E$, the major axis is fixed regardless of angular momentum." }
          ]
        },
        {
          id: "formula",
          type: "theory",
          title: "Energy-Axis Relation",
          content: "For an elliptical orbit, the Total Energy depends only on the semimajor axis $a$:\n\n$$ E = -\\frac{k}{2a} $$\n\n(Where $k = GMm$). This is a remarkably simple and powerful result."
        },
        {
          id: "derive",
          type: "proof",
          title: "Quick Proof",
          content: "Consider the turning points.",
          proofSteps: [
            "At turning points ($r_p, r_a$), $E = V_{eff}$.",
            "This gives a quadratic equation for $1/r$.",
            "The sum of roots $r_p + r_a = 2a$.",
            "From the quadratic coefficients: $2a = k/(-E)$.",
            "Rearrange: $E = -k/2a$."
          ]
        }
      ]
    },
    {
      id: "les-1-7-2-2",
      title: "Eccentricity Formula",
      description: "e in terms of E and L",
      icon: "Minimize",
      slides: [
        {
          id: "formula",
          type: "theory",
          title: "Defining Shape",
          content: "While Energy fixes the *size* ($a$), Angular Momentum $l$ fixes the *shape* ($e$).\n\n$$ e = \\sqrt{1 + \\frac{2El^2}{mk^2}} $$"
        },
        {
          id: "analysis",
          type: "quiz",
          title: "Sign Analysis",
          content: "Look at the term under the square root. If $E$ is negative, what limits does $e$ have?",
          options: [
            { id: "A", text: "e can be imaginary", isCorrect: false, explanation: "Nature doesn't allow imaginary eccentricities." },
            { id: "B", text: "e < 1", isCorrect: true, explanation: "Since the second term is negative, the sum is less than 1. This confirms Negative Energy = Ellipse." }
          ]
        }
      ]
    }
  ]
};