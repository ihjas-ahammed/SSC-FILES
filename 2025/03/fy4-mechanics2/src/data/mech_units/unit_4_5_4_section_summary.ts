import { Unit } from '../../types';

export const UNIT_4_5_4_SECTION_SUMMARY: Unit = {
  id: "unit-4-5-4",
  title: "Section 4.5 Summary",
  description: "Review of The Coriolis Force",
  color: "duo-blue",
  lessons:[
    {
      id: "les-4-5-4-1",
      title: "Summary: The Coriolis Force",
      description: "Recap of Unit 4.5",
      icon: "List",
      slides:[
        {
          id: "wu1",
          type: "quiz",
          title: "Conceptual Warm-up",
          content: "In the Northern Hemisphere, which way does the Coriolis force deflect a moving object?",
          options:[
            { id: "A", text: "To its right", isCorrect: true, explanation: "Whether moving North, South, East, or West, it always deflects to the right of its path in the Northern Hemisphere." },
            { id: "B", text: "To its left", isCorrect: false }
          ]
        },
        {
          id: "theory",
          type: "theory",
          title: "The Coriolis Acceleration",
          content: "The Coriolis acceleration is $\\mathbf{a}_c = -2\\mathbf{\\Omega} \times \\mathbf{v}_r$. \n\nBy setting up a local coordinate system (x=East, y=North, z=Up) and using colatitude $\\lambda$, we found $\\mathbf{\\Omega} = \\Omega \sin \lambda \\mathbf{\\hat{j}} + \\Omega \\cos \lambda \\mathbf{\\hat{k}}$.\n\nExpanding the cross product yields the coupled equations of motion for any projectile on Earth."
        },
        {
          id: "theory2",
          type: "theory",
          title: "Falling Bodies",
          content: "A body dropped from rest acquires a downward velocity $v_z = -gt$. The Coriolis force acts on this downward velocity, resulting in a primary deflection towards the **East**.\n$$ x = \\frac{1}{3} \\Omega g t^3 \\sin \lambda $$\n\nA much smaller, second-order deflection pushes the object South."
        },
        {
          id: "mcq",
          type: "quiz",
          title: "Knowledge Check",
          content: "Why do we use the 'Method of Successive Approximations' to solve for projectile motion on Earth?",
          options:[
            { id: "A", text: "Because the Coriolis force changes the velocity, which in turn changes the Coriolis force.", isCorrect: true, explanation: "The coupled differential equations are difficult to solve exactly, but since $\\Omega$ is small, perturbation methods work perfectly." },
            { id: "B", text: "Because gravity is not constant.", isCorrect: false }
          ]
        },
        {
          id: "fib",
          type: "fill_in_blank",
          title: "Key Takeaway",
          content: "The Coriolis force is a fictitious force that only acts on objects that are ___ relative to the rotating frame.",
          blankAnswer: "moving"
        }
      ]
    }
  ]
};