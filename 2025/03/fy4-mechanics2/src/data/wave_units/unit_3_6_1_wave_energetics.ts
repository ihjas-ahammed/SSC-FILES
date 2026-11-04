import { Unit } from '../../types';

export const UNIT_3_6_1_WAVE_ENERGETICS: Unit = {
  id: "unit-3-6-1",
  title: "361 (Wave Energetics)",
  description: "Kinetic, Potential, and Total Energy of a Wave",
  color: "duo-blue",
  lessons:[
    {
      id: "les-3-6-1-1",
      title: "Derivation: Kinetic Energy dT",
      description: "Kinetic energy of a string segment",
      icon: "Activity",
      slides:[
        {
          id: "wu1",
          type: "quiz",
          title: "Conceptual Warm-up",
          content: "As a wave passes through a string, the particles of the string move up and down. Do they possess kinetic energy?",
          options:[
            { id: "A", text: "Yes", isCorrect: true, explanation: "Any mass in motion possesses kinetic energy." },
            { id: "B", text: "No", isCorrect: false }
          ]
        },
        {
          id: "wu2",
          type: "quiz",
          title: "Velocity check",
          content: "Which velocity is used to calculate this kinetic energy?",
          options:[
            { id: "A", text: "The phase velocity (v)", isCorrect: false, explanation: "That's the speed the wave shape travels left/right." },
            { id: "B", text: "The transverse velocity (dy/dt)", isCorrect: true, explanation: "The string particles actually only move vertically." }
          ]
        },
        {
          id: "theory",
          type: "theory",
          title: "Kinetic Energy of a Segment",
          content: "Let's determine the kinetic energy of a tiny mass element of the string $dm = \\rho dx$ as it oscillates up and down.\n\nThe standard formula is $K = \\frac{1}{2}mv^2$. The vertical velocity is $v_y = \\frac{\\partial y}{\\partial t}$."
        },
        {
          id: "proof",
          type: "proof",
          title: "Deriving dT",
          content: "Combining these concepts gives the differential kinetic energy.",
          proofSteps:[
            "Substitute $dm = \\rho dx$ into the kinetic energy formula.",
            "Substitute $v = \\frac{\\partial y}{\\partial t}$.",
            "Result: $dT = \\frac{1}{2} \\rho dx \\left(\\frac{\\partial y}{\\partial t}\\right)^2$"
          ]
        },
        {
          id: "num",
          type: "numerical",
          title: "Segment Kinetic Energy",
          content: "A string segment has a mass of $0.002$ kg. At a certain instant, it is moving vertically at $3$ m/s. What is its kinetic energy in Joules?",
          numericAnswer: 0.009,
          numericTolerance: 0.0001
        },
        {
          id: "mcq",
          type: "quiz",
          title: "Knowledge Check",
          content: "When is the kinetic energy of a specific point on the string at its absolute maximum?",
          options:[
            { id: "A", text: "When it reaches its peak amplitude.", isCorrect: false, explanation: "At the peak, it stops to turn around, so $v_y = 0$." },
            { id: "B", text: "When it passes through the equilibrium line ($y=0$).", isCorrect: true, explanation: "Just like a pendulum or mass on a spring, its speed is highest at equilibrium." }
          ]
        },
        {
          id: "fib",
          type: "fill_in_blank",
          title: "Key Takeaway",
          content: "The kinetic energy of a string segment depends on the square of its ___ velocity.",
          blankAnswer: "transverse"
        }
      ]
    },
    {
      id: "les-3-6-1-2",
      title: "Derivation: Potential Energy dV",
      description: "Energy from stretching",
      icon: "Maximize",
      slides:[
        {
          id: "wu1",
          type: "quiz",
          title: "Conceptual Warm-up",
          content: "Where does the potential energy in a vibrating string come from?",
          options:[
            { id: "A", text: "Gravity pulling the string down.", isCorrect: false, explanation: "Gravity is negligible here." },
            { id: "B", text: "The string stretching against its own tension.", isCorrect: true, explanation: "As it curves, its length increases slightly, acting like a stretched spring." }
          ]
        },
        {
          id: "theory",
          type: "theory",
          title: "Potential Energy of a Segment",
          content: "An unstretched horizontal segment of length $dx$ stretches to a length $ds$ when the wave passes through. The displacement produces a net stretch of $ds - dx$.\n\nThe work done against the constant tension $F$ is equal to the potential energy gained:\n$$ dV = F(ds - dx) $$"
        },
        {
          id: "canvas",
          type: "interactive_canvas",
          title: "Segment Stretching",
          content: "The segment stretches to become the hypotenuse of the triangle.",
          interactiveCanvasId: "wave-energy-stretch"
        },
        {
          id: "proof",
          type: "proof",
          title: "Deriving dV",
          content: "We use the Pythagorean theorem and binomial expansion.",
          proofSteps:[
            "Hypotenuse $ds = \\sqrt{dx^2 + dy^2} = dx \\sqrt{1 + (dy/dx)^2}$",
            "Substitute into potential: $dV = F[dx \\sqrt{1 + (dy/dx)^2} - dx]$",
            "Factor out $dx$: $dV = F dx [\\sqrt{1 + (dy/dx)^2} - 1]$",
            "Use binomial expansion $(1+u)^{1/2} \\approx 1 + \\frac{1}{2}u$ for small slopes.",
            "$dV \\approx F dx[1 + \\frac{1}{2}\\left(\\frac{\\partial y}{\\partial x}\\right)^2 - 1]$",
            "Result: $dV = \\frac{1}{2} F \\left(\\frac{\\partial y}{\\partial x}\\right)^2 dx$"
          ]
        },
        {
          id: "mcq",
          type: "quiz",
          title: "OMR: Potential Energy Factor",
          content: "According to the derived formula, what determines the amount of potential energy stored in a specific string segment?",
          options:[
            { id: "A", text: "Its vertical height ($y$)", isCorrect: false },
            { id: "B", text: "Its slope ($\\partial y / \\partial x$)", isCorrect: true, explanation: "Steeper slopes mean the string is stretched more severely." },
            { id: "C", text: "Its velocity", isCorrect: false }
          ]
        }
      ]
    },
    {
      id: "les-3-6-1-3",
      title: "Derivation: Total Energy",
      description: "Integration over the entire wave",
      icon: "Sigma",
      slides:[
        {
          id: "theory",
          type: "theory",
          title: "Total Energy of the Wave",
          content: "The total energy in a vibrating string of length $L$ is the integral of all the kinetic and potential energy segments:\n$$ E = T + V = \\int_0^L (dT + dV) $$\n$$ E = \\int_0^L \\left[ \\frac{1}{2} \\rho \\left(\\frac{\\partial y}{\\partial t}\\right)^2 + \\frac{1}{2} F \\left(\\frac{\\partial y}{\\partial x}\\right)^2 \\right] dx $$"
        },
        {
          id: "proof",
          type: "proof",
          title: "Integrating a Standing Wave",
          content: "Let's apply this to a specific standing wave: $y(x,t) = A \\sin(\\frac{\\pi x}{L}) \\cos(\\omega t)$.",
          proofSteps:[
            "Velocity: $\\frac{\\partial y}{\\partial t} = -\\omega A \\sin(\\frac{\\pi x}{L}) \\sin(\\omega t)$",
            "Slope: $\\frac{\\partial y}{\\partial x} = \\frac{\\pi}{L} A \\cos(\\frac{\\pi x}{L}) \\cos(\\omega t)$",
            "Plug into integral. We must evaluate $\\int_0^L \\sin^2(\\frac{\\pi x}{L}) dx$ and $\\int_0^L \\cos^2(\\frac{\\pi x}{L}) dx$.",
            "Both of these integrals equal exactly $L/2$ over half a period.",
            "Substitute: $E = \\frac{1}{2} \\rho (\\omega^2 A^2 \\sin^2 \\omega t) (L/2) + \\frac{1}{2} F (\\frac{\\pi^2}{L^2} A^2 \\cos^2 \\omega t) (L/2)$",
            "Recall $F = \\rho v^2$ and $\\omega = \\pi v / L$. So $F \\frac{\\pi^2}{L^2} = \\rho \\omega^2$.",
            "The terms match! $E = \\frac{1}{4} \\rho \\omega^2 A^2 L (\\sin^2 \\omega t + \\cos^2 \\omega t)$.",
            "Result: $E = \\frac{1}{4} \\rho \\omega^2 L A^2$."
          ]
        },
        {
          id: "num",
          type: "numerical",
          title: "Amplitude Scaling",
          content: "A wave initially has a total energy of $4$ Joules. If you double its amplitude ($2\\times$) while keeping everything else the same, what is its new total energy in Joules?",
          numericAnswer: 16,
          numericTolerance: 0.1
        },
        {
          id: "mcq",
          type: "quiz",
          title: "Energy Dependence",
          content: "The total energy of a harmonic oscillator (or a standing wave) is always proportional to:",
          options:[
            { id: "A", text: "The amplitude", isCorrect: false },
            { id: "B", text: "The square of the amplitude", isCorrect: true, explanation: "Because $E \\propto A^2$, a wave twice as tall carries four times as much energy." }
          ]
        },
        {
          id: "fib",
          type: "fill_in_blank",
          title: "Key Takeaway",
          content: "The total energy $E$ integrates out the time dependence because $\\sin^2 \\omega t + \\cos^2 \\omega t$ equals ___.",
          blankAnswer: "one"
        }
      ]
    }
  ]
};