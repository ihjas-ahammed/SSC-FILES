import { Unit } from '../../types';

export const UNIT_4_6_3_FINAL_PRACTICE: Unit = {
  id: "unit-4-6-3",
  title: "463 (Final Practice)",
  description: "Numerical Evaluation and Checking",
  color: "duo-pink",
  lessons:[
    {
      id: "les-4-6-3-1",
      title: "Exercise 15.8",
      description: "Velocity Initial Conditions",
      icon: "Crosshair",
      slides:[
        {
          id: "q",
          type: "example_q",
          title: "Exercise 15.8",
          content: "A Foucault pendulum is observed to have a velocity $v_0$ in the $+x$-direction at time $t=0$ when it passes through the origin.\n\nObtain expressions for $x$ and $y$ as functions of $t$."
        },
        {
          id: "sol",
          type: "solution",
          title: "Solution Steps",
          content: "Use the complex solution $\\zeta = C[\\cos Kt \\cos(\\omega t + \\theta) - i \\sin Kt \\cos(\\omega t + \\theta)]$.",
          interactiveSteps:[
            {
              prompt: "At $t=0$, position is origin. So $x(0)=0$ and $y(0)=0$. What does this mean for $\\theta$?",
              options:[
                { id: "A", text: "$\\cos(\\theta) = 0 \\implies \\theta = -\\pi/2$", isCorrect: true, explanation: "So $\\cos(\\omega t - \\pi/2) = \\sin \\omega t$." }
              ]
            },
            {
              prompt: "So $\\zeta = C \\sin \\omega t (\\cos Kt - i \\sin Kt)$. We need the velocity $\\dot{x}(0) = v_0$. Taking the time derivative and evaluating at $t=0$, what is $C$?",
              options:[
                { id: "A", text: "$C = v_0 / \\omega$", isCorrect: true, explanation: "The derivative of $\\sin \\omega t$ brings out an $\\omega$. So $C\\omega = v_0$." }
              ]
            },
            {
              prompt: "What are the final expressions for $x$ and $y$?",
              options:[
                { id: "A", text: "$x = \\frac{v_0}{\\omega} \\sin \\omega t \\cos Kt$ and $y = -\\frac{v_0}{\\omega} \\sin \\omega t \\sin Kt$", isCorrect: true, explanation: "Correct." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "les-4-6-3-2",
      title: "Exercise 15.9",
      description: "Filling the Math Steps",
      icon: "PenTool",
      slides:[
        {
          id: "q",
          type: "example_q",
          title: "Exercise 15.9",
          content: "Fill in the missing steps between substituting $x = s\\cos Kt$ and $y = -s\\sin Kt$ into the ODEs, to arrive at $\\ddot{s} + \\omega^2 s = 0$."
        },
        {
          id: "sol",
          type: "solution",
          title: "The Algebra",
          content: "Calculus practice.",
          interactiveSteps:[
            {
              prompt: "First, what is $\\dot{x}$?",
              options:[
                { id: "A", text: "$\\dot{s}\\cos Kt - sK\\sin Kt$", isCorrect: true, explanation: "Product rule." }
              ]
            },
            {
              prompt: "After calculating all second derivatives and plugging them in, the $K^2$ terms are dropped because $K \\ll \\omega$. The resulting equation simplifies exactly to:",
              options:[
                { id: "A", text: "$\\ddot{s} + \\omega^2 s = 0$", isCorrect: true, explanation: "The Coriolis terms $2K\\dot{x}$ perfectly cancel out the cross terms from the second derivatives." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "les-4-6-3-3",
      title: "Exercise 15.11",
      description: "Precession in San Francisco",
      icon: "Calculator",
      slides:[
        {
          id: "prob",
          type: "numerical",
          title: "Calculating Precession Rate",
          content: "Suppose a 20 m Foucault pendulum is mounted at San Francisco, California (latitude $37.77^\\circ$).\n\nDetermine the precession rate of its plane of motion in degrees per hour.\n\nRecall that the Earth rotates $360^\\circ$ in $24$ hours. Also remember that the formula uses COLATITUDE $\\lambda$, but you are given LATITUDE.",
          numericAnswer: 9.19, // Formula is Omega * cos(colatitude). Colatitude = 90 - latitude.
          // Wait, cos(colatitude) = sin(latitude).
          // Precession rate = Omega * sin(latitude) = (360 deg / 24 hr) * sin(37.77)
          // 15 * sin(37.77) = 15 * 0.61249 = 9.187 deg/hr.
          numericTolerance: 0.1
        },
        {
          id: "sol",
          type: "solution",
          title: "Step-by-Step",
          content: "Convert latitude to the proper factor.",
          interactiveSteps:[
            {
              prompt: "The formula is $K = \\Omega \\cos\\lambda$ where $\\lambda$ is colatitude ($90^\\circ - \\text{latitude}$). What is another way to write $\\cos\\lambda$?",
              options:[
                { id: "A", text: "$\\sin(\\text{latitude})$", isCorrect: true, explanation: "$\\cos(90^\\circ - \\theta) = \\sin(\\theta)$." }
              ]
            },
            {
              prompt: "The Earth's rotation rate $\\Omega$ in degrees per hour is:",
              options:[
                { id: "A", text: "$360 / 24 = 15^\\circ$/hr", isCorrect: true, explanation: "Correct." }
              ]
            },
            {
              prompt: "Calculate $15 \\times \\sin(37.77^\\circ)$.",
              options:[
                { id: "A", text: "$\\approx 9.19^\\circ$/hr", isCorrect: true, explanation: "Correct. Notice the text answer key says 11.9. Wait, let me check the text." }
              ]
            }
          ]
        },
        {
          id: "correction",
          type: "theory",
          title: "Note on the Text Answer",
          content: "The text provides an answer of $11.9^\\circ$/h. \nIf we compute $15 \\times \\cos(37.77^\\circ)$, we get $15 \\times 0.79 = 11.86^\\circ$/h. \n\nThis means the author accidentally used $\\cos(\\text{latitude})$ instead of $\\cos(\\text{colatitude})$! The correct physical answer is $9.19^\\circ$/h."
        }
      ]
    }
  ]
};