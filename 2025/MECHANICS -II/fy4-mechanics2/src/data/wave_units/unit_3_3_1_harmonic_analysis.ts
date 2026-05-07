import { Unit } from '../../types';

export const UNIT_3_3_1_HARMONIC_ANALYSIS: Unit = {
  id: "unit-3-3-1",
  title: "Harmonic Analysis",
  description: "Fourier Series and Complex Waveforms",
  color: "duo-orange",
  lessons:[
    {
      id: "les-3-3-1-1",
      title: "Approximating a Square Wave",
      description: "Building complex shapes from simple sines",
      icon: "BarChart",
      slides:[
        {
          id: "warmup-1",
          type: "quiz",
          title: "Conceptual Warm-up 1",
          content: "Is it possible to create a sharp, jagged square wave by adding together perfectly smooth, curved sine waves?",
          options:[
            { id: "A", text: "Yes", isCorrect: true, explanation: "This is the core concept of Fourier Analysis. By adding infinitely many sine waves of different frequencies, we can perfectly reconstruct a square wave." },
            { id: "B", text: "No", isCorrect: false, explanation: "Sine waves are smooth, but their sum can have sharp edges." }
          ]
        },
        {
          id: "warmup-2",
          type: "quiz",
          title: "Conceptual Warm-up 2",
          content: "When you add higher frequency sine waves to your approximation, what happens to the resulting wave shape?",
          options:[
            { id: "A", text: "It becomes smoother and rounder.", isCorrect: false },
            { id: "B", text: "It captures sharper details and edges.", isCorrect: true, explanation: "High frequencies are required to model abrupt changes in the wave." }
          ]
        },
        {
          id: "theory-def",
          type: "theory",
          title: "Fourier Series Concept",
          content: "Any periodic function (such as a wave) or a portion of a periodic function (such as a standing wave) can be represented as a sum of sines and cosines.\n\nConsider a square wave: $f(x) = -\\pi/2$ for $-\\pi < x < 0$ and $f(x) = +\\pi/2$ for $0 < x < +\\pi$. This can be approximated by adding harmonics:\n$$ f(x) \\approx 2 \\sin x + \\frac{2}{3} \\sin 3x + \\frac{2}{5} \\sin 5x + \\dots $$"
        },
        {
          id: "canvas-1",
          type: "interactive_canvas",
          title: "Square Wave Approximation",
          content: "Top: Square wave. Middle: 1st harmonic. Bottom: Sum of 1st and 3rd harmonics.",
          interactiveCanvasId: "square-wave-approx"
        },
        {
          id: "mcq-1",
          type: "quiz",
          title: "Knowledge Check",
          content: "Why do we only see odd terms ($\\sin x, \\sin 3x, \\sin 5x$) in the square wave approximation?",
          options:[
            { id: "A", text: "Because the square wave is an odd function.", isCorrect: true, explanation: "An odd function $f(-x) = -f(x)$ will only contain sine terms (which are odd) and no cosine terms (which are even)." },
            { id: "B", text: "Because even terms equal zero.", isCorrect: false, explanation: "They equal zero *because* the function is odd." }
          ]
        },
        {
          id: "fib-1",
          type: "fill_in_blank",
          title: "Key Takeaway",
          content: "Finding out how much of each harmonic contributes to a particular vibration is the study of ___ analysis.",
          blankAnswer: "Fourier"
        }
      ]
    },
    {
      id: "les-3-3-1-2",
      title: "Plucked String Geometry",
      description: "Initial conditions for a string",
      icon: "Scissors",
      slides:[
        {
          id: "warmup-1",
          type: "quiz",
          title: "Conceptual Warm-up 1",
          content: "When you solve for a mass on a spring, the initial condition is just its starting position $x_0$. What is the initial condition for a plucked guitar string?",
          options:[
            { id: "A", text: "The initial displacement of the exact center point.", isCorrect: false },
            { id: "B", text: "The initial shape of the entire string.", isCorrect: true, explanation: "The initial condition is a function $y(x, 0)$, representing the displacement of every single point on the string." }
          ]
        },
        {
          id: "theory-def",
          type: "theory",
          title: "The Problem of Initial Conditions",
          content: "Our general solution to the wave equation is an infinite sum of sines and cosines. \n\n$$ y(x,t) = \\sum_{n=1}^\\infty (A_n \\cos \\omega_n t + B_n \\sin \\omega_n t) \\sin \\left(\\frac{n\\pi x}{L}\\right) $$\n\nTo find the constants $A_n$ and $B_n$, we must match this solution to the initial shape of the string at $t=0$, $y(x,0)$."
        },
        {
          id: "canvas-2",
          type: "interactive_canvas",
          title: "Plucked String Shape",
          content: "The string is plucked at its center to a height b.",
          interactiveCanvasId: "plucked-string-geometry"
        },
        {
          id: "mcq-1",
          type: "quiz",
          title: "Knowledge Check",
          content: "If the string is released from rest at $t=0$, what does this tell us about the initial velocity of the string?",
          options:[
            { id: "A", text: "It is maximum at the center.", isCorrect: false },
            { id: "B", text: "It is zero everywhere.", isCorrect: true, explanation: "This means the initial velocity function $\\frac{\\partial y(x,0)}{\\partial t} = 0$, which helps us eliminate the $B_n$ terms." }
          ]
        },
        {
          id: "fib-1",
          type: "fill_in_blank",
          title: "Key Takeaway",
          content: "We use Fourier series to express the initial shape $y(x,0)$ as an infinite sum of ___.",
          blankAnswer: "harmonics"
        }
      ]
    },
    {
      id: "les-3-3-1-3",
      title: "General Fourier Series Equation",
      description: "The mathematical definition (Eq 13.3)",
      icon: "FunctionSquare",
      slides:[
        {
          id: "warmup-1",
          type: "quiz",
          title: "Conceptual Warm-up 1",
          content: "A Fourier series breaks a periodic signal down into:",
          options:[
            { id: "A", text: "Exponential functions", isCorrect: false },
            { id: "B", text: "Sines, Cosines, and a Constant", isCorrect: true, explanation: "The constant represents the average (DC) value, while the sines and cosines represent the oscillating components." }
          ]
        },
        {
          id: "theory-def",
          type: "theory",
          title: "The Formula",
          content: "In general, a function $f(x)$ defined in the interval $-\\pi < x < +\\pi$ can be expressed as a Fourier series having the form:\n\n$$ f(x) = \\frac{a_0}{2} + a_1 \\cos x + a_2 \\cos 2x + \\dots + b_1 \\sin x + b_2 \\sin 2x + \\dots $$\n\nOr in summation notation (Equation 13.3):\n$$ f(x) = \\frac{a_0}{2} + \\sum_{n=1}^\\infty a_n \\cos nx + \\sum_{n=1}^\\infty b_n \\sin nx $$"
        },
        {
          id: "mcq-1",
          type: "quiz",
          title: "Knowledge Check",
          content: "What does the term $a_0 / 2$ represent in a Fourier series?",
          options:[
            { id: "A", text: "The fundamental frequency.", isCorrect: false },
            { id: "B", text: "The average value of the function over one period.", isCorrect: true, explanation: "If the function is centered perfectly around zero (like a pure sine wave), $a_0$ will be zero." }
          ]
        }
      ]
    },
    {
      id: "les-3-3-1-4",
      title: "Integral Formulas for Coefficients",
      description: "Using Orthogonality",
      icon: "Filter",
      slides:[
        {
          id: "warmup-1",
          type: "quiz",
          title: "Conceptual Warm-up 1",
          content: "If you multiply $\\sin(x)$ by $\\cos(x)$ and find the total area under the curve over one full period, what do you get?",
          options:[
            { id: "A", text: "Zero", isCorrect: true, explanation: "Sines and cosines of integer frequencies are 'orthogonal' to each other over a full period." },
            { id: "B", text: "Pi", isCorrect: false }
          ]
        },
        {
          id: "theory-def",
          type: "theory",
          title: "Orthogonality Relations",
          content: "The problem reduces to determining the coefficients $a_n$ and $b_n$. This is accomplished using the **orthogonality properties** of sines and cosines over the interval $[-\\pi, \\pi]$:\n\n$\\int_{-\\pi}^{+\\pi} \\sin(nx) \\cos(mx) dx = 0$ for all $m, n$\n\n$\\int_{-\\pi}^{+\\pi} \\sin(nx) \\sin(mx) dx = \\pi$ for $n=m$, and $0$ otherwise.\n\n$\\int_{-\\pi}^{+\\pi} \\cos(nx) \\cos(mx) dx = \\pi$ for $n=m$, and $0$ otherwise."
        },
        {
          id: "proof-1",
          type: "proof",
          title: "Finding the Coefficients",
          content: "To find $a_m$, we multiply the entire Fourier series by $\\cos(mx)$ and integrate.",
          proofSteps:[
            "Multiply $f(x)$ by $\\cos(mx)$: $\\int f(x)\\cos(mx) dx = \\int (\\frac{a_0}{2} + \\sum a_n \\cos(nx) + \\dots) \\cos(mx) dx$.",
            "Because of orthogonality, every integral on the right side equals $0$, EXCEPT the one where $n=m$.",
            "The surviving term is: $\\int a_m \\cos^2(mx) dx = a_m \\pi$.",
            "Result: $a_m = \\frac{1}{\\pi} \\int_{-\\pi}^{+\\pi} f(x) \\cos(mx) dx$.",
            "Similarly, $b_m = \\frac{1}{\\pi} \\int_{-\\pi}^{+\\pi} f(x) \\sin(mx) dx$."
          ]
        },
        {
          id: "mcq-1",
          type: "quiz",
          title: "Knowledge Check",
          content: "If $f(x)$ is an EVEN function (symmetric around the y-axis, like $x^2$), which coefficients will be zero?",
          options:[
            { id: "A", text: "The $a_m$ coefficients (cosine terms)", isCorrect: false },
            { id: "B", text: "The $b_m$ coefficients (sine terms)", isCorrect: true, explanation: "An even function times $\\sin(mx)$ (an odd function) results in an odd function, which integrates to zero over a symmetric interval." }
          ]
        },
        {
          id: "fib-1",
          type: "fill_in_blank",
          title: "Key Takeaway",
          content: "The property that integrals of products of different harmonics equal zero is called ___.",
          blankAnswer: "orthogonality"
        }
      ]
    },
    {
      id: "les-3-3-1-5",
      title: "Exercise 13.4: Shifted Intervals",
      description: "Coefficients for 0 < x < l",
      icon: "PenTool",
      slides:[
        {
          id: "ex-13-4-q",
          type: "example_q",
          title: "Exercise 13.4",
          content: "Show that if $f(x)$ is defined in the interval $0 < x < l$, the coefficients in the Fourier expansion are:\n\n$a_m = \\frac{2}{l} \\int_0^l f(x) \\cos\\left(\\frac{m\\pi}{l}x\\right) dx$\n\n$b_m = \\frac{2}{l} \\int_0^l f(x) \\sin\\left(\\frac{m\\pi}{l}x\\right) dx$"
        },
        {
          id: "ex-13-4-sol",
          type: "solution",
          title: "Solution",
          content: "This is a change of variables problem.",
          interactiveSteps:[
            {
              prompt: "In the standard definition from $-l$ to $+l$, the period is $2l$. Here the interval is $0$ to $l$, so we assume the function is odd/even and extend it to $-l$ to $l$. For a general series matching $0$ to $l$, what is the effective period?",
              options:[
                { id: "a", text: "The effective period is $2l$.", isCorrect: true, explanation: "To use half-range expansions (like sine series for a string tied at 0 and l), we treat the length $l$ as half the period." }
              ]
            },
            {
              prompt: "If we define an odd extension of $f(x)$ from $-l$ to $0$, the integral $\\int_{-l}^l f(x) \\sin(\\dots)$ becomes:",
              options:[
                { id: "a", text: "$2 \\int_0^l f(x) \\sin(\\dots)$", isCorrect: true, explanation: "Because $f(x)\\sin(\\dots)$ is an even function (odd times odd = even), the integral from $-l$ to $l$ is twice the integral from $0$ to $l$." }
              ]
            },
            {
              prompt: "The standard formula for $-l$ to $l$ is $b_m = \\frac{1}{l} \\int_{-l}^l f(x) \\sin(\\frac{m\\pi x}{l}) dx$. Substituting our $2\\times$ integral gives:",
              options:[
                { id: "a", text: "$b_m = \\frac{2}{l} \\int_0^l f(x) \\sin(\\frac{m\\pi x}{l}) dx$", isCorrect: true, explanation: "Proof complete. This is exactly the formula needed for the plucked string problem on an interval $[0, L]$." }
              ]
            }
          ]
        }
      ]
    }
  ]
};