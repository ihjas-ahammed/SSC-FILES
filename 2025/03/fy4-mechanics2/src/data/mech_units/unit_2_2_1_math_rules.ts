import { Unit } from '../../types';

export const UNIT_2_2_1_MATH_RULES: Unit = {
  id: "unit-2-2-1",
  title: "Mathematical Rules",
  description: "Solving Linear Homogeneous ODEs",
  color: "duo-orange",
  lessons: [
    {
      id: "les-2-2-1-1",
      title: "Rule 1: Linearity",
      description: "Superposition of solutions",
      icon: "Layers",
      slides: [
        {
          id: "priming",
          type: "quiz",
          title: "Priming Check",
          content: "If $x_1(t)$ makes the equation equal zero, and $x_2(t)$ makes the equation equal zero, what does $x_1(t) + x_2(t)$ make it equal?",
          options: [
            { id: "A", text: "Zero", isCorrect: true, explanation: "For LINEAR homogeneous equations, the sum of solutions is also a solution." },
            { id: "B", text: "Double zero", isCorrect: false, explanation: "Zero is just zero." }
          ]
        },
        {
          id: "theory",
          type: "theory",
          title: "Rule 1",
          content: "**Rule 1:** If $x_1(t)$ and $x_2(t)$ are both solutions of a linear homogeneous differential equation, then $x_1(t) + x_2(t)$ is also a solution.\n\nThis is known as the Principle of Superposition."
        }
      ]
    },
    {
      id: "les-2-2-1-2",
      title: "Rule 2: Constants",
      description: "Scaling solutions",
      icon: "Maximize",
      slides: [
        {
          id: "theory",
          type: "theory",
          title: "Rule 2",
          content: "**Rule 2:** If $x(t)$ is a solution of a linear homogeneous differential equation, then $C x(t)$, where $C$ is an arbitrary constant, is also a solution.\n\nCombining Rule 1 and 2: $x = C_1 x_1 + C_2 x_2$ is the most general form."
        }
      ]
    },
    {
      id: "les-2-2-1-3",
      title: "The Auxiliary Equation",
      description: "Guessing an exponential",
      icon: "FunctionSquare",
      slides: [
        {
          id: "intuition",
          type: "quiz",
          title: "The Best Guess",
          content: "We need a function whose derivatives look exactly like the original function. What should we guess for $x(t)$?",
          options: [
            { id: "A", text: "$e^{pt}$", isCorrect: true, explanation: "The derivative of $e^{pt}$ is $p e^{pt}$, returning the same function." },
            { id: "B", text: "$\\ln(pt)$", isCorrect: false, explanation: "The derivative is $1/t$, which doesn't match." }
          ]
        },
        {
          id: "proof",
          type: "proof",
          title: "The Method",
          content: "Let's apply this to $m\\ddot{x} + kx = 0$.",
          proofSteps: [
            "Guess $x = e^{pt}$. Then $\\ddot{x} = p^2 e^{pt}$.",
            "Substitute: $m(p^2 e^{pt}) + k(e^{pt}) = 0$.",
            "Divide by $e^{pt}$: $mp^2 + k = 0$. This is the **Auxiliary Equation**.",
            "Solve for $p$: $p^2 = -k/m \\implies p = \\pm i\\sqrt{k/m} = \\pm i\\omega$."
          ]
        }
      ]
    },
    {
      id: "les-2-2-1-4",
      title: "Euler's Formula",
      description: "From Complex to Real",
      icon: "Globe",
      slides: [
        {
          id: "theory",
          type: "theory",
          title: "The Bridge",
          content: "Our solution is $x(t) = C_1 e^{+i\\omega t} + C_2 e^{-i\\omega t}$. But position $x$ must be a real number!\n\nWe use **Euler's Formula**:\n$$ e^{\\pm i\\theta} = \\cos\\theta \\pm i\\sin\\theta $$"
        },
        {
          id: "vis",
          type: "interactive_canvas",
          title: "Complex Rotation",
          content: "$e^{i\\omega t}$ traces a circle in the complex plane. Its real part is cosine, its imaginary part is sine.",
          interactiveCanvasId: "complex-rotation"
        },
        {
          id: "proof",
          type: "proof",
          title: "Real Solution",
          content: "Expand the exponentials.",
          proofSteps: [
            "$x = C_1(\\cos\\omega t + i\\sin\\omega t) + C_2(\\cos\\omega t - i\\sin\\omega t)$",
            "Group terms: $x = (C_1+C_2)\\cos\\omega t + i(C_1-C_2)\\sin\\omega t$",
            "Define new constants: $A = C_1+C_2$ and $B = i(C_1-C_2)$.",
            "Result: $x = A\\cos\\omega t + B\\sin\\omega t$. (A purely real function!)"
          ]
        }
      ]
    }
  ]
};