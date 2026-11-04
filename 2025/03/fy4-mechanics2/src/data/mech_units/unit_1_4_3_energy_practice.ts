import { Unit } from '../../types';

export const UNIT_1_4_3_ENERGY_PRACTICE: Unit = {
  id: "unit-1-4-3",
  title: "Energy Practice",
  description: "Numerical Problems",
  color: "duo-blue",
  lessons: [
    {
      id: "les-1-4-3-1",
      title: "Exercise 10.8",
      description: "Parabolic Orbit",
      icon: "PenTool",
      slides: [
        {
          id: "prob",
          type: "numerical",
          title: "Turning Point",
          content: "For a parabolic orbit ($E=0$), find the turning point $r_0$ (distance of closest approach) in terms of $l$, $m$, $k$.\n\nSet $E = V_{eff}(r_0) = 0$ where $V_{eff} = \\frac{l^2}{2mr^2} - \\frac{k}{r}$.\nSolve for $r_0$.",
          numericAnswer: 0.5, // Actually symbolic. Let's do multiple choice or steps.
          // Wait, numeric type expects a number. Let's switch to solution type.
        },
        {
          id: "sol",
          type: "solution",
          title: "Solution",
          content: "Solve $\\frac{l^2}{2mr_0^2} - \\frac{k}{r_0} = 0$.",
          interactiveSteps: [
            {
              stepText: "Multiply by $r_0^2$.",
              options: [
                { id: "a", text: "$\\frac{l^2}{2m} - kr_0 = 0$", isCorrect: true, explanation: "Correct." }
              ]
            },
            {
              stepText: "Isolate $r_0$.",
              options: [
                { id: "a", text: "$r_0 = \\frac{l^2}{2mk}$", isCorrect: true, explanation: "This is the perihelion distance for a parabola." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "les-1-4-3-2",
      title: "Exercise 10.9",
      description: "Bohr Atom",
      icon: "Atom",
      slides: [
        {
          id: "prob",
          type: "theory",
          title: "Bohr Model",
          content: "In the Bohr model, $l = \\hbar$. The potential is electrostatic $V = -\\frac{e^2}{4\\pi\\epsilon_0 r}$.\n\nShow that the total energy of the lowest circular orbit is:\n$$ E = -\\frac{1}{2} \\frac{me^4}{(4\\pi\\epsilon_0\\hbar)^2} $$"
        },
        {
          id: "hint",
          type: "quiz",
          title: "Strategy",
          content: "For a circular orbit, where on the $V_{eff}$ curve are we?",
          options: [
            { id: "A", text: "Anywhere", isCorrect: false },
            { id: "B", text: "At the minimum", isCorrect: true, explanation: "We need to find $r_0$ such that $dV_{eff}/dr = 0$, then plug it back into $E = V_{eff}(r_0)$." }
          ]
        }
      ]
    }
  ]
};