import { Unit } from '../../types';

export const UNIT_4_2_2: Unit = {
  id: "unit-4-2-2",
  title: "Positional Logic",
  description: "Weights and Significance",
  color: "duo-indigo",
  lessons: [
    {
      id: "les-4-2-2-1",
      title: "Positional Weighting",
      description: "Value depends on place",
      icon: "BarChart",
      slides: [
        {
          id: "intro",
          type: "theory",
          title: "Principle of Weighting",
          content: "The value of a digit depends on its **position**. \n\nIn decimal **642**: \n- The '6' is worth $6 \\times 10^2$ (600)\n- The '4' is worth $4 \\times 10^1$ (40)\n- The '2' is worth $2 \\times 10^0$ (2)\n\nIn any system with radix $r$, position $n$ has weight $r^n$."
        },
        {
          id: "vis",
          type: "interactive_canvas",
          title: "Binary Weights",
          content: "Toggle bits to see how their position determines their decimal contribution.",
          interactiveCanvasId: "binary-positional-weights"
        }
      ]
    },
    {
      id: "les-4-2-2-2",
      title: "MSB and LSB",
      description: "Extremes",
      icon: "ArrowLeftRight",
      slides: [
        {
          id: "def",
          type: "theory",
          title: "Bit Significance",
          content: "*   **MSB (Most Significant Bit):** The leftmost bit. Carries the most weight (highest power of 2).\n*   **LSB (Least Significant Bit):** The rightmost bit. Carries the least weight ($2^0=1$)."
        },
        {
          id: "vis",
          type: "interactive_canvas",
          title: "Identify MSB/LSB",
          content: "Visualizing the weight distribution in the binary number 1001.",
          interactiveCanvasId: "msb-lsb-identifier"
        },
        {
          id: "check",
          type: "quiz",
          title: "Impact",
          content: "Which error causes a larger change in value?",
          options: [
            { id: "A", text: "Flipping the LSB", isCorrect: false, explanation: "Changes value by only 1." },
            { id: "B", text: "Flipping the MSB", isCorrect: true, explanation: "Changes value by a large power of 2 (e.g., 128)." }
          ]
        }
      ]
    },
    {
      id: "les-4-2-2-3",
      title: "Diagram Analysis",
      description: "Fig 24.5",
      icon: "Map",
      slides: [
        {
          id: "diagram",
          type: "theory",
          title: "Positional Diagram",
          content: "For binary number $1001$:\n\n$$ 1 \\times 2^3 + 0 \\times 2^2 + 0 \\times 2^1 + 1 \\times 2^0 $$\n$$ 8 + 0 + 0 + 1 = 9 $$"
        },
        {
          id: "quiz",
          type: "numerical",
          title: "Calculate",
          content: "What is the decimal value of binary **110**?\n($1 \\times 4 + 1 \\times 2 + 0 \\times 1$)",
          numericAnswer: 6,
          numericTolerance: 0
        }
      ]
    }
  ]
};