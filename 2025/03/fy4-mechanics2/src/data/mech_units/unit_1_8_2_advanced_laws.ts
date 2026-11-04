import { Unit } from '../../types';

export const UNIT_1_8_2_ADVANCED_LAWS: Unit = {
  id: "unit-1-8-2",
  title: "Advanced Laws",
  description: "Real-world Corrections",
  color: "duo-pink",
  lessons: [
    {
      id: "les-1-8-2-1",
      title: "Mass Correction",
      description: "Two-Body Problem",
      icon: "GitPullRequest",
      slides: [
        {
          id: "prob",
          type: "theory",
          title: "The Approximation",
          content: "Kepler assumed the Sun was fixed. In reality, both the Sun and Planet orbit their common Center of Mass.\n\nNewton showed that the mass $m$ in the formula should be replaced by the **reduced mass** $\\mu$, or equivalently, the constant depends on total mass $M+m$."
        },
        {
          id: "formula",
          type: "theory",
          title: "Corrected Third Law",
          content: "$$ T^2 = \\frac{4\\pi^2}{G(M+m)} a^3 $$\n\nFor planets, $m \\ll M$, so $M+m \\approx M$, recovering Kepler's original law."
        }
      ]
    },
    {
      id: "les-1-8-2-2",
      title: "Worked Example 10.4",
      description: "Velocity Limits",
      icon: "Activity",
      slides: [
        {
          id: "prob",
          type: "theory",
          title: "Example 10.4",
          content: "A particle moves in an elliptical orbit. The velocity at perihelion is $v_1$ and aphelion is $v_2$. Determine the period $T$."
        },
        {
          id: "sol",
          type: "solution",
          title: "Solution Steps",
          content: "Use conservation laws.",
          interactiveSteps: [
            {
              stepText: "Conserve Angular Momentum: $mv_1 r_1 = mv_2 r_2$.",
              options: [
                { id: "a", text: "$r_1/r_2 = v_2/v_1$", isCorrect: true, explanation: "Distances are inversely proportional to velocities." }
              ]
            },
            {
              stepText: "Use $2a = r_1 + r_2$ and solve for $a$ and $e$.",
              options: [
                { id: "a", text: "Plug into T formula.", isCorrect: true, explanation: "Correct." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "les-1-8-2-3",
      title: "Worked Example 10.5",
      description: "Inverse Square Verification",
      icon: "Search",
      slides: [
        {
          id: "prob",
          type: "theory",
          title: "Example 10.5",
          content: "Suppose you know the orbit is an ellipse with the Sun at a focus. Prove the force *must* be inverse square."
        },
        {
          id: "sol",
          type: "theory",
          title: "Solution Logic",
          content: "1. Start with polar equation of ellipse: $u = (1+e\\cos\\theta)/p$.\n2. Differentiate twice to get $d^2u/d\\theta^2$.\n3. Plug into the Binet Equation (Section 1.6).\n4. You will find $f(u) \\propto u^2$, which means $f(r) \\propto 1/r^2$."
        }
      ]
    }
  ]
};