import { Unit } from '../../types';

export const UNIT_4_4_2_SECTION_SUMMARY: Unit = {
  id: "unit-4-4-2",
  title: "Section 4.4 Summary",
  description: "Review of Centrifugal Force and Plumb Bob",
  color: "duo-blue",
  lessons:[
    {
      id: "les-4-4-2-1",
      title: "Summary: Gravitational Effects",
      description: "Recap of Unit 441",
      icon: "List",
      slides:[
        {
          id: "wu1",
          type: "quiz",
          title: "Conceptual Warm-up",
          content: "Does a plumb bob point to the center of the Earth?",
          options:[
            { id: "A", text: "Yes", isCorrect: false },
            { id: "B", text: "No, it points along the effective gravity vector.", isCorrect: true, explanation: "Effective gravity includes both true gravity and the centrifugal force." }
          ]
        },
        {
          id: "theory",
          type: "theory",
          title: "Plumb Bob and Effective Gravity",
          content: "In a rotating frame, an object at rest (like a plumb bob) experiences a centrifugal force $-m\\mathbf{\\Omega} \times (\\mathbf{\\Omega} \times \\mathbf{r})$. \n\nWe define **effective gravity** as $\\mathbf{g}_e = \\mathbf{g} - \\mathbf{\\Omega} \times (\\mathbf{\\Omega} \times \\mathbf{r})$.\n\nThe tension in the string balances this effective gravity: $\\mathbf{T} + m\\mathbf{g}_e = 0$. Consequently, the bob is deflected slightly towards the equator."
        },
        {
          id: "canvas",
          type: "interactive_canvas",
          title: "Visual Summary",
          content: "The combination of true gravity and centrifugal force.",
          interactiveCanvasId: "effective-gravity-vector"
        },
        {
          id: "theory2",
          type: "theory",
          title: "The Equatorial Bulge",
          content: "If the Earth were a perfect sphere, the centrifugal force would have an unbalanced tangential component pulling matter toward the equator. Over time, the Earth deformed into an oblate spheroid. \n\nOn the current Earth, the surface is perpendicular to $\\mathbf{g}_e$, meaning there is no net tangential force on resting objects."
        },
        {
          id: "mcq",
          type: "quiz",
          title: "Knowledge Check",
          content: "At the equator, is the effective gravity $g_e$ stronger or weaker than true gravity $g$?",
          options:[
            { id: "A", text: "Stronger", isCorrect: false },
            { id: "B", text: "Weaker", isCorrect: true, explanation: "At the equator, the centrifugal force points directly opposite to true gravity, subtracting from it." }
          ]
        },
        {
          id: "fib",
          type: "fill_in_blank",
          title: "Key Takeaway",
          content: "The centrifugal force is responsible for the Earth's shape being an oblate ___.",
          blankAnswer: "spheroid"
        }
      ]
    }
  ]
};