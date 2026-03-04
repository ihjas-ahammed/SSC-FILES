import { Unit } from '../../types';

export const UNIT_2_2_2_EQUATION_PRACTICE: Unit = {
  id: "unit-2-2-2",
  title: "Equation Practice",
  description: "Drilling the Math",
  color: "duo-orange",
  lessons: [
    {
      id: "les-2-2-2-1",
      title: "Worked Example 11.1",
      description: "Solving with Initial Conditions",
      icon: "PenTool",
      slides: [
        {
          id: "prob",
          type: "theory",
          title: "The Problem",
          content: "Solve $\\ddot{x} - 4x = 0$ given $x(0)=0$ and $\\dot{x}(0) = 3$ m/s."
        },
        {
          id: "sol",
          type: "solution",
          title: "Step 1: General Solution",
          content: "Find the roots of the auxiliary equation.",
          interactiveSteps: [
            {
              stepText: "Write the auxiliary equation.",
              options: [
                { id: "a", text: "$p^2 - 4 = 0$", isCorrect: true, explanation: "So $p = \\pm 2$." }
              ]
            },
            {
              stepText: "Write general form.",
              options: [
                { id: "a", text: "$x(t) = C_1 e^{2t} + C_2 e^{-2t}$", isCorrect: true, explanation: "These are real exponentials, not oscillatory, because of the minus sign in the original ODE." }
              ]
            }
          ]
        },
        {
          id: "sol2",
          type: "solution",
          title: "Step 2: Initial Conditions",
          content: "Apply the boundaries.",
          interactiveSteps: [
            {
              stepText: "Apply $x(0) = 0$.",
              options: [
                { id: "a", text: "$C_1 + C_2 = 0 \\implies C_2 = -C_1$", isCorrect: true, explanation: "Correct." }
              ]
            },
            {
              stepText: "Find $\\dot{x}(t)$ and apply $\\dot{x}(0) = 3$.",
              options: [
                { id: "a", text: "$2C_1 - 2C_2 = 3$", isCorrect: true, explanation: "Since $C_2 = -C_1$, $4C_1 = 3 \\implies C_1 = 3/4$." }
              ]
            },
            {
              stepText: "Final Equation.",
              options: [
                { id: "a", text: "$x(t) = \\frac{3}{4} e^{2t} - \\frac{3}{4} e^{-2t}$", isCorrect: true, explanation: "This can also be written as $\\frac{3}{2}\\sinh(2t)$." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "les-2-2-2-2",
      title: "Exercise 11.4",
      description: "Proof of Linearity",
      icon: "CheckSquare",
      slides: [
        {
          id: "prob",
          type: "proof",
          title: "Prove Rule 1",
          content: "Prove that if $x_1$ and $x_2$ satisfy $\\ddot{x} + \\omega^2x = 0$, then $y = x_1 + x_2$ also satisfies it.",
          proofSteps: [
            "Given: $\\ddot{x}_1 + \\omega^2x_1 = 0$ and $\\ddot{x}_2 + \\omega^2x_2 = 0$.",
            "Evaluate for $y$: $\\ddot{y} + \\omega^2y = \\frac{d^2}{dt^2}(x_1+x_2) + \\omega^2(x_1+x_2)$.",
            "Distribute derivative: $\\ddot{x}_1 + \\ddot{x}_2 + \\omega^2x_1 + \\omega^2x_2$.",
            "Regroup: $(\\ddot{x}_1 + \\omega^2x_1) + (\\ddot{x}_2 + \\omega^2x_2)$.",
            "Substitute givens: $0 + 0 = 0$. Proved."
          ]
        }
      ]
    },
    {
      id: "les-2-2-2-3",
      title: "Exercise 11.5",
      description: "Verifying Solutions",
      icon: "CheckSquare",
      slides: [
        {
          id: "prob",
          type: "theory",
          title: "The Problem",
          content: "Verify that $y = A e^{ax}\\cos(bx) + B e^{ax}\\sin(bx)$ satisfies the equation $[(D-a)^2 + b^2]y = 0$, where $D = d/dx$."
        },
        {
          id: "hint",
          type: "theory",
          title: "How to approach",
          content: "Expand the operator: $(D-a)^2 + b^2 = D^2 - 2aD + a^2 + b^2$.\nThis means calculate $\\frac{d^2y}{dx^2} - 2a\\frac{dy}{dx} + (a^2+b^2)y$ and show it sums to zero. It's a tedious product rule exercise, but foundational."
        }
      ]
    },
    {
      id: "les-2-2-2-4",
      title: "Exercise 11.6",
      description: "Solving 3rd Order",
      icon: "List",
      slides: [
        {
          id: "prob",
          type: "numerical",
          title: "Third Order Roots",
          content: "Solve $\\frac{d^3x}{dt^3} - 4\\frac{d^2x}{dt^2} + \\frac{dx}{dt} + 6x = 0$.\n\nWhat is the positive integer root of the auxiliary equation $p^3 - 4p^2 + p + 6 = 0$? (Hint: try integers between -3 and 3)",
          numericAnswer: 2, // roots are -1, 2, 3.
          numericTolerance: 0.1
        },
        {
          id: "sol",
          type: "theory",
          title: "General Solution",
          content: "The roots are $p = -1, 2, 3$.\n\nTherefore, by Rule 1, $x(t) = C_1 e^{-t} + C_2 e^{2t} + C_3 e^{3t}$."
        }
      ]
    },
    {
      id: "les-2-2-2-5",
      title: "Exercise 11.7",
      description: "Operator D notation",
      icon: "Hash",
      slides: [
        {
          id: "prob",
          type: "solution",
          title: "Solve $(D^2 + 2D - 3)y = 0$",
          content: "Find the roots.",
          interactiveSteps: [
            {
              stepText: "Write the auxiliary equation and factor.",
              options: [
                { id: "a", text: "$(p+3)(p-1) = 0$", isCorrect: true, explanation: "Roots are $p=-3$ and $p=1$." }
              ]
            },
            {
              stepText: "Write solution.",
              options: [
                { id: "a", text: "$y = C_1 e^x + C_2 e^{-3x}$", isCorrect: true, explanation: "Correct." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "les-2-2-2-6",
      title: "Exercise 11.8",
      description: "Second Order D",
      icon: "Hash",
      slides: [
        {
          id: "prob",
          type: "solution",
          title: "Solve $(D^2 - 6D + 9)y = 0$",
          content: "Find the roots.",
          interactiveSteps: [
            {
              stepText: "Write the auxiliary equation and factor.",
              options: [
                { id: "a", text: "$(p-3)^2 = 0$", isCorrect: true, explanation: "Repeated root $p=3$." }
              ]
            },
            {
              stepText: "What happens when roots are repeated?",
              options: [
                { id: "a", text: "Multiply the second term by t.", isCorrect: true, explanation: "Rule for repeated roots: $y = C_1 e^{3t} + C_2 t e^{3t}$." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "les-2-2-2-7",
      title: "Exercise 11.9",
      description: "Trigonometric Proofs",
      icon: "Activity",
      slides: [
        {
          id: "prob",
          type: "proof",
          title: "Double Angle Formulas",
          content: "Use Euler's Formula to derive $\\cos(2\\theta)$ and $\\sin(2\\theta)$.",
          proofSteps: [
            "Start with $(e^{i\\theta})^2 = e^{i(2\\theta)}$.",
            "Left side: $(\\cos\\theta + i\\sin\\theta)^2 = \\cos^2\\theta - \\sin^2\\theta + 2i\\sin\\theta\\cos\\theta$.",
            "Right side: $\\cos(2\\theta) + i\\sin(2\\theta)$.",
            "Equate Real parts: $\\cos(2\\theta) = \\cos^2\\theta - \\sin^2\\theta$.",
            "Equate Imaginary parts: $\\sin(2\\theta) = 2\\sin\\theta\\cos\\theta$."
          ]
        }
      ]
    }
  ]
};