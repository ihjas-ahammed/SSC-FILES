import { Unit } from '../../types';

export const UNIT_2_4_2_FORCING_PRACTICE: Unit = {
  id: "unit-2-4-2",
  title: "Forcing Practice",
  description: "Solving Inhomogeneous ODEs",
  color: "duo-red",
  lessons: [
    {
      id: "les-2-4-2-1",
      title: "Worked Example 11.4",
      description: "Polynomial forcing",
      icon: "PenTool",
      slides: [
        {
          id: "prob",
          type: "theory",
          title: "The Challenge",
          content: "Find the general solution for:\n$$ \\ddot{x} - 4x = 2 - 8t $$"
        },
        {
          id: "sol_p",
          type: "solution",
          title: "Step 1: Particular Solution",
          content: "Since the RHS is a polynomial of degree 1, we guess a particular solution of the same form: $x_p = At + B$.",
          interactiveSteps: [
            {
              prompt: "What is the second derivative, $\\ddot{x}_p$, of our guess?",
              options: [
                { id: "a", text: "0", isCorrect: true, explanation: "The first derivative is A (a constant), so the second is zero." }
              ]
            },
            {
              prompt: "Substitute into the ODE: $\\ddot{x}_p - 4x_p = 2 - 8t$.",
              options: [
                { id: "a", text: "$0 - 4(At + B) = 2 - 8t$", isCorrect: true, explanation: "Correct substitution." }
              ]
            },
            {
              prompt: "Equate the coefficients of the $t$ terms on both sides.",
              options: [
                { id: "a", text: "$-4A = -8 \\implies A=2$", isCorrect: true, explanation: "Correct." }
              ]
            },
            {
              prompt: "Equate the constant terms on both sides.",
              options: [
                { id: "a", text: "$-4B = 2 \\implies B = -0.5$", isCorrect: true, explanation: "So our particular solution is $x_p = 2t - 0.5$." }
              ]
            }
          ]
        },
        {
          id: "sol_c",
          type: "solution",
          title: "Step 2: Complementary Solution",
          content: "Now find the solution to the homogeneous equation $\\ddot{x} - 4x = 0$.",
          interactiveSteps: [
            {
              stepText: "Auxiliary equation: $p^2 - 4 = 0$, so $p = \\pm 2$.",
              options: [
                { id: "a", text: "$x_c(t) = C_1 e^{2t} + C_2 e^{-2t}$", isCorrect: true, explanation: "This is the transient part." }
              ]
            }
          ]
        },
        {
          id: "final",
          type: "theory",
          title: "Step 3: General Solution",
          content: "The full solution is $x(t) = x_c(t) + x_p(t)$.\n\n$$ x(t) = C_1 e^{2t} + C_2 e^{-2t} + 2t - 0.5 $$"
        }
      ]
    },
    {
      id: "les-2-4-2-2",
      title: "Exercise 11.19",
      description: "Linear Constant Forcing",
      icon: "Target",
      slides: [
        {
          id: "prob",
          type: "theory",
          title: "The Problem",
          content: "Solve $(D^2 - D - 6)x = 8$, where $D = d/dt$."
        },
        {
          id: "sol",
          type: "solution",
          title: "Scaffolding",
          content: "First find the complementary solution $x_c$, then the particular solution $x_p$.",
          interactiveSteps: [
            {
              prompt: "Find the roots of the homogeneous auxiliary equation $p^2 - p - 6 = 0$.",
              options: [
                { id: "a", text: "p = 3 and p = -2", isCorrect: true, explanation: "The equation factors to $(p-3)(p+2) = 0$." }
              ]
            },
            {
              prompt: "What is the form of the complementary solution $x_c(t)$?",
              options: [
                { id: "a", text: "$x_c(t) = C_1 e^{3t} + C_2 e^{-2t}$", isCorrect: true, explanation: "Correct, a sum of two real exponentials." }
              ]
            },
            {
              prompt: "Now find the particular solution $x_p$ for the constant forcing term of 8. What is a good guess for $x_p$?",
              options: [
                { id: "a", text: "$x_p = C$ (a constant)", isCorrect: true, explanation: "If the forcing is constant, the steady-state response will also be a constant displacement." }
              ]
            },
            {
              prompt: "Substitute $x_p = C$ into the ODE and solve for C.",
              options: [
                { id: "a", text: "$C = -4/3$", isCorrect: true, explanation: "$D^2(C) = 0$, $D(C) = 0$. So $-6C = 8 \\implies C = -8/6 = -4/3$." }
              ]
            }
          ]
        },
        {
          id: "final",
          type: "theory",
          title: "Final General Solution",
          content: "Summing the parts: $x(t) = x_c + x_p$\n\n$$ x(t) = C_1 e^{3t} + C_2 e^{-2t} - \\frac{4}{3} $$"
        }
      ]
    },
    {
      id: "les-2-4-2-3",
      title: "Exercise 11.20",
      description: "Exponential Forcing",
      icon: "TrendingUp",
      slides: [
        {
          id: "prob",
          type: "theory",
          title: "The Problem",
          content: "Find the general solution to $\\ddot{x} - 9x = 5e^{-2t}$."
        },
        {
          id: "sol",
          type: "solution",
          title: "Finding the Particular Solution",
          content: "Use Trick #1: Guess $x_p = C e^{-2t}$.",
          interactiveSteps: [
            {
              prompt: "What is the second derivative, $\\ddot{x}_p$?",
              options: [
                { id: "a", text: "$4C e^{-2t}$", isCorrect: true, explanation: "The derivative brings down a factor of -2 twice: $(-2) \\times (-2) = 4$." }
              ]
            },
            {
              prompt: "Substitute into the ODE: $4C e^{-2t} - 9(C e^{-2t}) = 5e^{-2t}$. Solve for C.",
              options: [
                { id: "a", text: "$C = -1$", isCorrect: true, explanation: "$-5C = 5 \\implies C = -1$. So $x_p = -e^{-2t}$." }
              ]
            }
          ]
        },
        {
          id: "spot_error",
          type: "quiz",
          title: "Final Answer Check",
          content: "A student gives the final answer as $x(t) = -e^{-2t}$. What did they miss?",
          options: [
            { id: "A", text: "The complementary solution $x_c = C_1e^{3t} + C_2e^{-3t}$", isCorrect: true, explanation: "The full solution must include the transient part, which is found by solving $\\ddot{x}-9x=0$." },
            { id: "B", text: "A factor of 5", isCorrect: false }
          ]
        }
      ]
    },
    {
      id: "les-2-4-2-4",
      title: "Exercise 11.21",
      description: "Sine Forcing",
      icon: "Waves",
      slides: [
        {
          id: "prob",
          type: "theory",
          title: "The Problem",
          content: "Solve $(D^2 - 4)x = \\sin t$."
        },
        {
          id: "sol",
          type: "solution",
          title: "Scaffolding the Solution",
          content: "Use the complex trick: Solve $(D^2 - 4)\\xi = e^{it}$ and then take the imaginary part.",
          interactiveSteps: [
            {
              prompt: "Guess a particular solution for the complex equation: $\\xi_p = C e^{it}$. What is $D^2(\\xi_p)$?",
              options: [
                { id: "a", text: "$-C e^{it}$", isCorrect: true, explanation: "Since $D(e^{it}) = i e^{it}$, the second derivative is $D^2(e^{it}) = i^2 e^{it} = -1 e^{it}$." }
              ]
            },
            {
              prompt: "Substitute into the complex ODE: $-C e^{it} - 4(C e^{it}) = e^{it}$. Solve for C.",
              options: [
                { id: "a", text: "$C = -1/5$", isCorrect: true, explanation: "$-5C = 1 \\implies C = -1/5$." }
              ]
            },
            {
              prompt: "The complex particular solution is $\\xi_p = -\\frac{1}{5} e^{it}$. What is its imaginary part?",
              options: [
                { id: "a", text: "$-\\frac{1}{5}\\sin t$", isCorrect: true, explanation: "We use Euler's formula: $e^{it} = \\cos t + i\\sin t$. The imaginary part is $\\sin t$." }
              ]
            }
          ]
        },
        {
          id: "final",
          type: "theory",
          title: "Full General Solution",
          content: "The final answer is $x(t) = x_c(t) + x_p(t)$:\n\n$$ x(t) = C_1 e^{2t} + C_2 e^{-2t} - \\frac{1}{5}\\sin t $$"
        }
      ]
    }
  ]
};