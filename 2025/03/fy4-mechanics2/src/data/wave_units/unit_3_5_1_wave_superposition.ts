import { Unit } from '../../types';

export const UNIT_3_5_1_WAVE_SUPERPOSITION: Unit = {
  id: "unit-3-5-1",
  title: "351 (Wave Superposition)",
  description: "Combining traveling waves into standing waves",
  color: "duo-orange",
  lessons:[
    {
      id: "les-3-5-1-1",
      title: "Derivation: Standing from Traveling",
      description: "Combining two traveling waves",
      icon: "Layers",
      slides:[
        {
          id: "wu1",
          type: "quiz",
          title: "Conceptual Warm-up 1",
          content: "Can two traveling waves moving in opposite directions form a stationary pattern?",
          options:[
            { id: "A", text: "Yes", isCorrect: true, explanation: "When they have the same amplitude and frequency, they form a standing wave." },
            { id: "B", text: "No", isCorrect: false }
          ]
        },
        {
          id: "wu2",
          type: "quiz",
          title: "Conceptual Warm-up 2",
          content: "If you add two waves of the same frequency moving opposite to each other, what do you get?",
          options:[
            { id: "A", text: "A standing wave", isCorrect: true, explanation: "Their sum creates nodes and antinodes." },
            { id: "B", text: "A faster traveling wave", isCorrect: false }
          ]
        },
        {
          id: "theory",
          type: "theory",
          title: "Superposition of Traveling Waves",
          content: "A standing wave can be considered the sum of two traveling waves moving in opposite directions. The general form of two sinusoidal waves traveling in opposite directions is:\n$$ y(x,t) = A \\sin(kx - \\omega t) + B \\sin(kx + \\omega t) + C \\cos(kx - \\omega t) + D \\cos(kx + \\omega t) $$"
        },
        {
          id: "canvas",
          type: "interactive_canvas",
          title: "Superposition Visualized",
          content: "Two traveling waves (top) summing into a standing wave (bottom).",
          interactiveCanvasId: "traveling-standing-superposition"
        },
        {
          id: "proof",
          type: "proof",
          title: "Deriving the Standing Wave",
          content: "We will prove that applying the boundary condition $y = 0$ at $x = 0$ yields a standing wave.",
          proofSteps:[
            "Apply $y(0,t) = 0$: $0 = -A \\sin \\omega t + B \\sin \\omega t + C \\cos \\omega t + D \\cos \\omega t$",
            "This holds at all times if $B = A$ and $C = -D$.",
            "Substitute back: $y = A[\\sin(kx - \\omega t) + \\sin(kx + \\omega t)] + C[\\cos(kx - \\omega t) - \\cos(kx + \\omega t)]$",
            "Use trig identities: $\\sin \\alpha + \\sin \\beta = 2 \\sin \\frac{1}{2}(\\alpha + \\beta) \\cos \\frac{1}{2}(\\alpha - \\beta)$",
            "And: $\\cos \\alpha - \\cos \\beta = -2 \\sin \\frac{1}{2}(\\alpha + \\beta) \\sin \\frac{1}{2}(\\alpha - \\beta)$",
            "Result: $y(x,t) = [2A \\sin(kx)] \\cos \\omega t + [2C \\sin(kx)] \\sin \\omega t$. This is exactly a standing wave!"
          ]
        },
        {
          id: "num",
          type: "numerical",
          title: "Amplitude of Superposition",
          content: "If two identical traveling waves each with amplitude $3$ m are moving in opposite directions, what is the maximum possible amplitude of the resulting standing wave antinode in meters?",
          numericAnswer: 6,
          numericTolerance: 0.1
        },
        {
          id: "mcq",
          type: "quiz",
          title: "Knowledge Check",
          content: "Which trigonometric identity is crucial to transforming the sum of traveling waves into a standing wave product?",
          options:[
            { id: "A", text: "Sum-to-product identities", isCorrect: true, explanation: "These identities turn sums like $\\sin(A) + \\sin(B)$ into products like $2\\sin(...)\\cos(...)$." },
            { id: "B", text: "Pythagorean identity", isCorrect: false },
            { id: "C", text: "Double angle identities", isCorrect: false },
            { id: "D", text: "Euler's formula", isCorrect: false }
          ]
        },
        {
          id: "fib",
          type: "fill_in_blank",
          title: "Key Takeaway",
          content: "A standing wave is mathematically equivalent to the ___ of two traveling waves moving in opposite directions.",
          blankAnswer: "superposition"
        }
      ]
    },
    {
      id: "les-3-5-1-2",
      title: "Exercise 13.8",
      description: "Proving y=0 at x=L",
      icon: "PenTool",
      slides:[
        {
          id: "q",
          type: "example_q",
          title: "Exercise 13.8",
          content: "Show that $y = 0$ when $x = L$ for the standing wave derived from two traveling waves.\n\nRecall our result: $y(x,t) =[2A \\sin(kx)] \\cos \\omega t + [2C \\sin(kx)] \\sin \\omega t$. Apply the second boundary condition at the far end of the string."
        },
        {
          id: "sol",
          type: "solution",
          title: "Solution Steps",
          content: "We enforce the boundary condition at $x=L$.",
          interactiveSteps:[
            {
              prompt: "Set $x = L$ in the standing wave equation.",
              options:[
                { id: "A", text: "$y(L,t) = [2A \\sin(kL)] \\cos \\omega t +[2C \\sin(kL)] \\sin \\omega t$", isCorrect: true, explanation: "Correct substitution." }
              ]
            },
            {
              prompt: "For this to equal zero at all times $t$, what must be true about the spatial part?",
              options:[
                { id: "A", text: "$\\sin(kL) = 0$", isCorrect: true, explanation: "The time-varying parts don't generally equal zero, so the spatial coefficient must be zero." }
              ]
            },
            {
              prompt: "Solve for the condition on $k$.",
              options:[
                { id: "A", text: "$kL = n\\pi \\implies k = \\frac{n\\pi}{L}$", isCorrect: true, explanation: "This reproduces the exact quantization condition we found earlier." }
              ]
            }
          ]
        },
        {
          id: "mcq1",
          type: "quiz",
          title: "OMR 1: The Constraint",
          content: "What physical constraint forces $y=0$ at $x=L$?",
          options:[
            { id: "A", text: "A node at the fixed end", isCorrect: true, explanation: "The string is physically tied down, so it cannot move there." },
            { id: "B", text: "A traveling pulse passing by", isCorrect: false },
            { id: "C", text: "Maximum amplitude at the center", isCorrect: false },
            { id: "D", text: "Zero tension in the string", isCorrect: false }
          ]
        },
        {
          id: "mcq2",
          type: "quiz",
          title: "OMR 2: Solving the Sine",
          content: "The condition $\\sin(kL) = 0$ implies that $kL$ must be:",
          options:[
            { id: "A", text: "An integer multiple of $\\pi$", isCorrect: true, explanation: "The roots of the sine function are at $0, \\pi, 2\\pi, \\dots$" },
            { id: "B", text: "An integer multiple of $2\\pi$", isCorrect: false },
            { id: "C", text: "An integer multiple of $\\pi/2$", isCorrect: false },
            { id: "D", text: "A rational number", isCorrect: false }
          ]
        },
        {
          id: "mcq3",
          type: "quiz",
          title: "OMR 3: Core Conclusion",
          content: "This proof demonstrates that standing waves on a fixed string can only exist if:",
          options:[
            { id: "A", text: "Their wavelengths are quantized", isCorrect: true, explanation: "Since $k = 2\\pi/\\lambda$, forcing $k$ to specific values quantizes the allowed wavelengths." },
            { id: "B", text: "Their amplitudes are zero", isCorrect: false },
            { id: "C", text: "They travel at the speed of light", isCorrect: false },
            { id: "D", text: "They have infinite energy", isCorrect: false }
          ]
        }
      ]
    }
  ]
};