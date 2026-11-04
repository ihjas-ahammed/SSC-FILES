import { Unit } from '../../types';

export const UNIT_4_6_4_SECTION_SUMMARY: Unit = {
  id: "unit-4-6-4",
  title: "Section 4.6 Summary",
  description: "Review of The Foucault Pendulum",
  color: "duo-blue",
  lessons:[
    {
      id: "les-4-6-4-1",
      title: "Summary: Pendulum Dynamics",
      description: "Recap of Unit 461",
      icon: "List",
      slides:[
        {
          id: "wu1",
          type: "quiz",
          title: "Conceptual Warm-up",
          content: "Why does the Foucault pendulum's plane of swing appear to rotate?",
          options:[
            { id: "A", text: "Because the Coriolis force continually deflects it sideways.", isCorrect: true, explanation: "As the pendulum moves, the Coriolis force pushes it perpendicular to its velocity, causing the swing plane to slowly precess." },
            { id: "B", text: "Because of friction in the pivot.", isCorrect: false }
          ]
        },
        {
          id: "theory",
          type: "theory",
          title: "Coupled Equations",
          content: "By applying Newton's laws in the rotating frame and including the Coriolis acceleration components, we derived the horizontal equations of motion for the pendulum bob:\n$$ \\ddot{x} - 2K\\dot{y} + \\omega^2 x = 0 $$\n$$ \\ddot{y} + 2K\\dot{x} + \\omega^2 y = 0 $$\n\nWhere $K = \\Omega \\cos \\lambda$ is the precession rate, and $\\omega^2 = g/l$ is the natural frequency."
        }
      ]
    },
    {
      id: "les-4-6-4-2",
      title: "Summary: The Solution",
      description: "Recap of Unit 462",
      icon: "FunctionSquare",
      slides:[
        {
          id: "theory",
          type: "theory",
          title: "Complex Variable Trick",
          content: "To solve the coupled equations, we defined a complex variable $\\zeta = x + iy$. This combined the two equations into one:\n$$ \\ddot{\\zeta} + 2iK\\dot{\\zeta} + \\omega^2\\zeta = 0 $$\n\nThe solution, assuming $K \\ll \\omega$, is $\\zeta = e^{-iKt} (A e^{-i\\omega t} + B e^{i\\omega t})$.\n\nThis represents a fast oscillation at frequency $\\omega$ whose entire plane slowly rotates (precesses) at angular velocity $K = \\Omega \\cos\\lambda$."
        },
        {
          id: "canvas",
          type: "interactive_canvas",
          title: "Visual Summary",
          content: "The amplitude modulation created by the precession.",
          interactiveCanvasId: "foucault-amplitude-plots"
        },
        {
          id: "mcq",
          type: "quiz",
          title: "Knowledge Check",
          content: "What is the precession rate of a Foucault pendulum exactly at the equator (colatitude $\\lambda = 90^\\circ$)?",
          options:[
            { id: "A", text: "0 degrees per hour", isCorrect: true, explanation: "Since $\\cos(90^\\circ) = 0$, $K=0$. It does not precess at the equator." },
            { id: "B", text: "15 degrees per hour", isCorrect: false }
          ]
        }
      ]
    }
  ]
};