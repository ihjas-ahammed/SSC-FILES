import { Unit } from '../../types';

export const UNIT_1_5_1_INTEGRAL_METHOD: Unit = {
  id: "unit-1-5-1",
  title: "Integral Method",
  description: "Separation of Variables",
  color: "duo-green",
  lessons: [
    {
      id: "les-1-5-1-1",
      title: "Solving for t(r)",
      description: "The Energy Integral",
      icon: "Clock",
      slides: [
        {
          id: "setup",
          type: "theory",
          title: "Rearranging Energy",
          content: "Start with $E = \\frac{1}{2}m\\dot{r}^2 + V_{eff}(r)$.\n\nIsolate velocity $\\dot{r} = \\frac{dr}{dt}$:\n$$ \\dot{r} = \\pm\\sqrt{\\frac{2}{m}(E - V_{eff}(r))} $$"
        },
        {
          id: "derive",
          type: "proof",
          title: "Separation of Variables",
          content: "Move terms to separate $r$ and $t$.",
          proofSteps: [
            "$\\frac{dr}{dt} = \\sqrt{\\dots}$",
            "$dt = \\frac{dr}{\\sqrt{\\frac{2}{m}(E - V_{eff}(r))}}$",
            "Integrate both sides: $t = \\int_{r_0}^r \\frac{dr'}{\\sqrt{\\frac{2}{m}(E - V_{eff}(r'))}}$"
          ]
        },
        {
          id: "note",
          type: "theory",
          title: "Note",
          content: "This integral gives $t(r)$. To find the position at a specific time $r(t)$, we must invert this result. This is often difficult analytically!"
        }
      ]
    },
    {
      id: "les-1-5-1-2",
      title: "Exercise 10.10",
      description: "Parabolic Orbit Time",
      icon: "Calculator",
      slides: [
        {
          id: "prob",
          type: "theory",
          title: "Exercise 10.10",
          content: "Obtain $t(r)$ for a parabolic orbit ($E=0$)."
        },
        {
          id: "sol",
          type: "solution",
          title: "Solving the Integral",
          content: "Substitute $E=0$ and $V_{eff} = \\frac{l^2}{2mr^2} - \\frac{k}{r}$.",
          interactiveSteps: [
            {
              stepText: "Simplify the term under square root.",
              options: [
                { id: "a", text: "$\\frac{2}{m}(\\frac{k}{r} - \\frac{l^2}{2mr^2})$", isCorrect: true, explanation: "Correct." }
              ]
            },
            {
              stepText: "The integral involves $\\int \\frac{r dr}{\\sqrt{r - C}}$.",
              options: [
                { id: "a", text: "It results in a $t \\propto r^{3/2}$ relationship.", isCorrect: true, explanation: "For large r, parabolic motion behaves like free fall." }
              ]
            }
          ]
        }
      ]
    }
  ]
};