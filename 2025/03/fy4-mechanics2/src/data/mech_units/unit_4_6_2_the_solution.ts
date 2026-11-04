import { Unit } from '../../types';

export const UNIT_4_6_2_THE_SOLUTION: Unit = {
  id: "unit-4-6-2",
  title: "462 (The Solution)",
  description: "Solving the Foucault Precession",
  color: "duo-orange",
  lessons:[
    {
      id: "les-4-6-2-1",
      title: "The Complex Variable Trick",
      description: "Combining two equations into one",
      icon: "Layers",
      slides:[
        {
          id: "wu1",
          type: "quiz",
          title: "Conceptual Warm-up",
          content: "We have two coupled equations: $\\ddot{x} - 2K\\dot{y} + \\omega^2 x = 0$ and $\\ddot{y} + 2K\\dot{x} + \\omega^2 y = 0$. How can we solve them?",
          options:[
            { id: "A", text: "Combine them into a single equation using complex numbers.", isCorrect: true, explanation: "By defining $\\zeta = x + iy$, we can merge them into one elegantly solvable ODE." },
            { id: "B", text: "Ignore the y equation entirely.", isCorrect: false }
          ]
        },
        {
          id: "proof",
          type: "proof",
          title: "Creating the Complex ODE",
          content: "Let $\\zeta = x + iy$.",
          proofSteps:[
            "Take the y-equation and multiply by $i$: $i\\ddot{y} + 2iK\\dot{x} + i\\omega^2 y = 0$.",
            "Add it to the x-equation: $(\\ddot{x} + i\\ddot{y}) + 2K(i\\dot{x} - \\dot{y}) + \\omega^2(x + iy) = 0$.",
            "Note that $i\\dot{x} - \\dot{y} = i(\\dot{x} + i\\dot{y}) = i\\dot{\\zeta}$.",
            "Substitute $\\zeta$: $\\ddot{\\zeta} + 2iK\\dot{\\zeta} + \\omega^2\\zeta = 0$."
          ]
        },
        {
          id: "theory",
          type: "theory",
          title: "The New Equation",
          content: "We now have a single, uncoupled differential equation:\n$$ \\ddot{\\zeta} + 2iK\\dot{\\zeta} + \\omega^2\\zeta = 0 $$\n\nThis looks exactly like the damped harmonic oscillator equation, but with an imaginary damping coefficient!"
        }
      ]
    },
    {
      id: "les-4-6-2-2",
      title: "Solving the Complex ODE",
      description: "Finding the roots",
      icon: "FunctionSquare",
      slides:[
        {
          id: "proof",
          type: "proof",
          title: "Auxiliary Equation",
          content: "We guess a solution of the form $\\zeta = e^{pt}$.",
          proofSteps:[
            "Substitute into ODE: $p^2 e^{pt} + 2iK p e^{pt} + \\omega^2 e^{pt} = 0$.",
            "Divide by $e^{pt}$: $p^2 + 2iK p + \\omega^2 = 0$.",
            "Use quadratic formula: $p = \\frac{-2iK \\pm \\sqrt{-4K^2 - 4\\omega^2}}{2}$.",
            "Simplify: $p = -iK \\pm i\\sqrt{K^2 + \\omega^2}$."
          ]
        },
        {
          id: "theory",
          type: "theory",
          title: "Approximating the Roots",
          content: "Recall that $K = \\Omega \\cos\\lambda$. $\\Omega$ is the rotation rate of the Earth ($\\approx 7.29 \\times 10^{-5}$ rad/s).\n$\\omega$ is the pendulum frequency $\\sqrt{g/l}$ (e.g. $\\approx 1$ rad/s).\n\nSince $K \\ll \\omega$, we can ignore $K^2$ under the square root compared to $\\omega^2$.\nThus, $\\sqrt{K^2 + \\omega^2} \\approx \\omega$."
        },
        {
          id: "proof2",
          type: "proof",
          title: "The Final Roots",
          content: "Using the approximation.",
          proofSteps:[
            "The roots become: $p \\approx -iK \\pm i\\omega$.",
            "The general solution is a sum of these two roots: $\\zeta = A e^{-i(K+\\omega)t} + B e^{-i(K-\\omega)t}$.",
            "Factor out the common term: $\\zeta = e^{-iKt} (A e^{-i\\omega t} + B e^{i\\omega t})$."
          ]
        }
      ]
    },
    {
      id: "les-4-6-2-3",
      title: "The Precession Rate",
      description: "Interpreting the solution",
      icon: "RefreshCcw",
      slides:[
        {
          id: "theory",
          type: "theory",
          title: "Interpreting the Math",
          content: "The solution is $\\zeta = e^{-iKt}[A e^{-i\\omega t} + B e^{i\\omega t}]$.\n\n*   The bracketed term $[A e^{-i\\omega t} + B e^{i\\omega t}]$ represents a standard, fast 1D oscillation with frequency $\\omega$ (the regular back-and-forth swing).\n*   The outer term $e^{-iKt}$ is a complex rotation operator. It slowly rotates the entire inner solution in the complex plane at angular velocity $K$."
        },
        {
          id: "mcq",
          type: "quiz",
          title: "The Rate",
          content: "What is the physical meaning of $K$ in this context?",
          options:[
            { id: "A", text: "The frequency of the pendulum's back-and-forth swing.", isCorrect: false },
            { id: "B", text: "The rate at which the plane of the swing rotates (precesses).", isCorrect: true, explanation: "Since $K = \\Omega \\cos\\lambda$, this proves the precession rate formula!" }
          ]
        },
        {
          id: "fib",
          type: "fill_in_blank",
          title: "Key Takeaway",
          content: "The plane of the Foucault pendulum precesses at a rate of $\\Omega$ multiplied by the ___ of the colatitude.",
          blankAnswer: "cosine"
        }
      ]
    },
    {
      id: "les-4-6-2-4",
      title: "Visualizing the Amplitudes",
      description: "Figure 15.8",
      icon: "BarChart",
      slides:[
        {
          id: "theory",
          type: "theory",
          title: "X and Y Components",
          content: "If we split $\\zeta$ back into its real ($x$) and imaginary ($y$) parts, we get expressions that look like:\n$x(t) = [\\text{Amplitude}(t)] \\cos \\omega t$\n$y(t) = -[\\text{Amplitude}(t)] \\cos \\omega t$\n\nWhere the Amplitudes themselves slowly vary as $\\cos(Kt)$ and $\\sin(Kt)$."
        },
        {
          id: "canvas",
          type: "interactive_canvas",
          title: "Figure 15.8: Amplitude Modulation",
          content: "The rapid swing $\\omega$ is enveloped by the slow rotation $K$. As x's amplitude dies down, y's amplitude grows.",
          interactiveCanvasId: "foucault-amplitude-plots"
        }
      ]
    },
    {
      id: "les-4-6-2-5",
      title: "Worked Example 15.4",
      description: "Determining Constants",
      icon: "Target",
      slides:[
        {
          id: "q",
          type: "example_q",
          title: "Worked Example 15.4",
          content: "At time $t=0$, the Foucault pendulum is released from rest at position $x=\\mathcal{A}, y=0$.\n\nObtain explicit real expressions for $x(t)$ and $y(t)$."
        },
        {
          id: "sol",
          type: "solution",
          title: "Solving the Constants",
          content: "Use the general solution $\\zeta = e^{-iKt} (A e^{-i\\omega t} + B e^{i\\omega t})$.",
          interactiveSteps:[
            {
              prompt: "To satisfy the initial conditions easily, let's pick complex constants $A = \\frac{1}{2} C e^{-i\\theta}$ and $B = \\frac{1}{2} C e^{i\\theta}$. What does the bracketed term become using Euler's formula?",
              options:[
                { id: "A", text: "$C \\cos(\\omega t + \\theta)$", isCorrect: true, explanation: "Yes, $\\frac{1}{2}C(e^{-i(\\omega t + \\theta)} + e^{i(\\omega t + \\theta)}) = C \\cos(\\omega t + \\theta)$." }
              ]
            },
            {
              prompt: "So $\\zeta = e^{-iKt} C \\cos(\\omega t + \\theta)$. Expanding $e^{-iKt} = \\cos Kt - i\\sin Kt$, what are $x(t)$ (real part) and $y(t)$ (imaginary part)?",
              options:[
                { id: "A", text: "$x = C \\cos Kt \\cos(\\omega t + \\theta)$ and $y = -C \\sin Kt \\cos(\\omega t + \\theta)$", isCorrect: true, explanation: "Correct." }
              ]
            },
            {
              prompt: "Apply $t=0$: $x(0) = C \\cos(0) \\cos(\\theta) = C \\cos\\theta = \\mathcal{A}$. And $y(0) = 0$. For velocity to be zero, $\\theta=0$. What is $C$?",
              options:[
                { id: "A", text: "$C = \\mathcal{A}$", isCorrect: true, explanation: "Correct. The final solutions are $x(t) = \\mathcal{A} \\cos Kt \\cos \\omega t$ and $y(t) = -\\mathcal{A} \\sin Kt \\cos \\omega t$." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "les-4-6-2-6",
      title: "Worked Example 15.5",
      description: "The Starred Coordinate System",
      icon: "Activity",
      slides:[
        {
          id: "q",
          type: "example_q",
          title: "Worked Example 15.5",
          content: "Solve for the precession rate by considering the problem in a rotating reference frame in which the pendulum does **not** precess."
        },
        {
          id: "canvas",
          type: "interactive_canvas",
          title: "Figure 15.9: The Starred Frame",
          content: "The starred frame rotates at angular velocity K relative to the Earth frame.",
          interactiveCanvasId: "foucault-starred-system"
        },
        {
          id: "sol",
          type: "solution",
          title: "Solution Steps",
          content: "Transform the coordinates.",
          interactiveSteps:[
            {
              prompt: "If the bob swings purely along the x* axis with displacement $s$, then $x^* = s$ and $y^* = 0$. If the starred frame rotates at $K$, what are the x and y coordinates in the Earth frame?",
              options:[
                { id: "A", text: "$x = s \\cos Kt$ and $y = -s \\sin Kt$", isCorrect: true, explanation: "The negative sign is because the Earth frame sees the pendulum plane rotating clockwise (negative direction)." }
              ]
            },
            {
              prompt: "If you plug these into the sum of the equations of motion $\\ddot{x} + \\ddot{y} + 2K(\\dot{x}-\\dot{y}) + \\omega^2(x+y) = 0$, what equation do you get for $s$ after assuming $K \\ll \\omega$?",
              options:[
                { id: "A", text: "$\\ddot{s} + \\omega^2 s = 0$", isCorrect: true, explanation: "This proves that in the precessing frame, the pendulum simply executes perfect 1D simple harmonic motion!" }
              ]
            }
          ]
        }
      ]
    }
  ]
};