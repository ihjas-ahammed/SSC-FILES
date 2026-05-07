import { Unit } from '../../types';

export const UNIT_3_5_2_SECTION_SUMMARY: Unit = {
  id: "unit-3-5-2",
  title: "Section 3.5 Summary",
  description: "Review of Wave Superposition",
  color: "duo-orange",
  lessons:[
    {
      id: "les-3-5-2-1",
      title: "Summary: Wave Superposition",
      description: "Recap of Unit 351",
      icon: "List",
      slides:[
        {
          id: "wu1",
          type: "quiz",
          title: "Conceptual Warm-up",
          content: "Is a standing wave fundamentally different from a traveling wave?",
          options:[
            { id: "A", text: "Yes, it obeys a different equation.", isCorrect: false },
            { id: "B", text: "No, it's just two traveling waves combined.", isCorrect: true, explanation: "A standing wave is exactly equivalent to the superposition of two traveling waves moving in opposite directions." }
          ]
        },
        {
          id: "wu2",
          type: "quiz",
          title: "Conceptual Warm-up 2",
          content: "Which identity is key to proving this?",
          options:[
            { id: "A", text: "Sum-to-product", isCorrect: true, explanation: "Transforms a sum of sine waves into a product of space and time components." },
            { id: "B", text: "Double angle", isCorrect: false }
          ]
        },
        {
          id: "theory",
          type: "theory",
          title: "Superposition Recap",
          content: "By applying the boundary conditions $y(0,t) = 0$ and $y(L,t) = 0$ to the general superposition of left and right traveling waves:\n$$ y(x,t) = A \\sin(kx - \\omega t) + B \\sin(kx + \\omega t) + \\dots $$\nWe recovered the exact standing wave equation, proving that standing waves are simply a special case of traveling wave interference."
        },
        {
          id: "canvas",
          type: "interactive_canvas",
          title: "Visual Summary",
          content: "Two waves summing to form a standing pattern.",
          interactiveCanvasId: "traveling-standing-superposition"
        },
        {
          id: "proof",
          type: "proof",
          title: "Summary of Conditions",
          content: "To get a perfect standing wave from $f(x-vt) + g(x+vt)$:",
          proofSteps:[
            "1. The two waves must have the same amplitude.",
            "2. They must have the same frequency (and wavelength).",
            "3. They must travel in opposite directions.",
            "4. Boundary conditions enforce specific quantized wavelengths $\\lambda = 2L/n$."
          ]
        },
        {
          id: "num",
          type: "numerical",
          title: "Quick Calculation",
          content: "If a left-traveling wave has equation $2 \\sin(3x + 10t)$, what must the equation of the right-traveling wave be (in terms of amplitude) to form a perfect standing wave with a node at $x=0$? (Assume it is of the form $B \\sin(kx - \\omega t)$ and give the value of $B$).",
          numericAnswer: 2,
          numericTolerance: 0.1
        },
        {
          id: "mcq",
          type: "quiz",
          title: "Knowledge Check",
          content: "What creates the nodes in a standing wave?",
          options:[
            { id: "A", text: "Destructive interference", isCorrect: true, explanation: "The two traveling waves perfectly cancel each other out at the nodes at all times." },
            { id: "B", text: "Constructive interference", isCorrect: false, explanation: "Constructive interference occurs at the antinodes." },
            { id: "C", text: "Tension loss", isCorrect: false },
            { id: "D", text: "Wave reflection only", isCorrect: false }
          ]
        },
        {
          id: "fib",
          type: "fill_in_blank",
          title: "Key Takeaway",
          content: "A standing wave is the ___ of two identical waves traveling in opposite directions.",
          blankAnswer: "sum"
        }
      ]
    }
  ]
};