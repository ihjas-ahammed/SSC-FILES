import { Unit } from '../../types';

export const UNIT_3_4_1_BOUNDARY_CONDITIONS: Unit = {
  id: "unit-3-4-1",
  title: "Boundary Conditions",
  description: "Fixed ends and normal modes",
  color: "duo-pink",
  lessons:[
    {
      id: "les-3-4-1-1",
      title: "Solutions for Fixed-End Strings",
      description: "Applying spatial constraints",
      icon: "Link",
      slides:[
        {
          id: "warmup-1",
          type: "quiz",
          title: "Conceptual Warm-up 1",
          content: "If a guitar string is securely tied down at both ends, can those specific end points vibrate up and down?",
          options:[
            { id: "A", text: "Yes, slightly.", isCorrect: false },
            { id: "B", text: "No, they must remain stationary.", isCorrect: true, explanation: "Because they are physically fixed, their displacement $y(x,t)$ must always be zero." }
          ]
        },
        {
          id: "warmup-2",
          type: "quiz",
          title: "Conceptual Warm-up 2",
          content: "Which trigonometric function naturally equals zero when evaluated at an input of zero?",
          options:[
            { id: "A", text: "Cosine", isCorrect: false, explanation: "$\cos(0) = 1$." },
            { id: "B", text: "Sine", isCorrect: true, explanation: "$\sin(0) = 0$. This makes sine functions very useful for modeling strings tied at $x=0$." }
          ]
        },
        {
          id: "theory-def",
          type: "theory",
          title: "Applying Boundary Conditions",
          content: "For a string of length $L$ fixed at $x=0$ and $x=L$, the boundary conditions are:\n$$ y(0,t) = 0 \\quad \\text{and} \\quad y(L,t) = 0 $$\n\nUsing the general solution $y(x,t) = (A\\cos kx + B\\sin kx)(C\\cos \\omega t + D\\sin \\omega t)$, setting $x=0$ yields $A = 0$.\n\nThus, the spatial shape must be a pure sine wave: $y(x,t) = \\sin(kx)(E\\cos \\omega t + F\\sin \\omega t)$."
        },
        {
          id: "canvas-1",
          type: "interactive_canvas",
          title: "Fixed Ends Visualization",
          content: "The string oscillates, but the red points at $x=0$ and $x=L$ never move.",
          interactiveCanvasId: "fixed-end-string"
        },
        {
          id: "proof-1",
          type: "proof",
          title: "Quantizing the Wave Number",
          content: "Let's apply the second boundary condition at $x=L$.",
          proofSteps:[
            "We know $y(L,t) = \\sin(kL) \\times (\\text{Time Terms}) = 0$.",
            "For a non-trivial wave, the time terms cannot be zero. Thus, $\\sin(kL) = 0$.",
            "The sine function is zero at integer multiples of $\\pi$.",
            "Therefore, $kL = n\\pi$ where $n = 1, 2, 3, \\dots$",
            "Result: $k_n = \\frac{n\\pi}{L}$."
          ]
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Calculating k",
          content: "If a string has length $L = 2$ m and is vibrating in its $n = 3$ mode, what is the wave number $k$? (Use $\\pi \\approx 3.1415$ and round to two decimal places).",
          numericAnswer: 4.71,
          numericTolerance: 0.05
        },
        {
          id: "mcq-1",
          type: "quiz",
          title: "Knowledge Check",
          content: "What physical reality does the integer $n$ represent?",
          options:[
            { id: "A", text: "The time elapsed in seconds.", isCorrect: false },
            { id: "B", text: "The harmonic mode number (number of loops).", isCorrect: true, explanation: "Each integer value of $n$ corresponds to a specific, discrete way the string can vibrate." }
          ]
        },
        {
          id: "fib-1",
          type: "fill_in_blank",
          title: "Key Takeaway",
          content: "The mathematical restriction that $y=0$ at the edges of the string is called a ___ condition.",
          blankAnswer: "boundary"
        }
      ]
    },
    {
      id: "les-3-4-1-2",
      title: "Nodes vs Antinodes",
      description: "Points of zero and maximum amplitude",
      icon: "Activity",
      slides:[
        {
          id: "warmup-1",
          type: "quiz",
          title: "Conceptual Warm-up 1",
          content: "In a standing wave on a guitar string, do all points on the string vibrate with the same maximum amplitude?",
          options:[
            { id: "A", text: "Yes", isCorrect: false },
            { id: "B", text: "No", isCorrect: true, explanation: "Some points don't move at all, while the middle of a loop moves the most." }
          ]
        },
        {
          id: "warmup-2",
          type: "quiz",
          title: "Conceptual Warm-up 2",
          content: "What do we call the points on a standing wave that remain perfectly stationary?",
          options:[
            { id: "A", text: "Antinodes", isCorrect: false },
            { id: "B", text: "Nodes", isCorrect: true, explanation: "Nodes are points of zero displacement." }
          ]
        },
        {
          id: "theory-def",
          type: "theory",
          title: "Nodes and Antinodes",
          content: "In a standing wave, the spatial shape is fixed by $\\sin(n\\pi x/L)$.\n\n*   **Nodes:** Points where the spatial amplitude is zero. The medium here is stationary.\n*   **Antinodes:** Points where the spatial amplitude is at its maximum absolute value (loops)."
        },
        {
          id: "canvas-2",
          type: "interactive_canvas",
          title: "Locating Nodes and Antinodes",
          content: "Visualizing the stationary and maximally moving parts of a standing wave.",
          interactiveCanvasId: "nodes-antinodes-vis"
        },
        {
          id: "proof-1",
          type: "proof",
          title: "Deriving Node Positions",
          content: "Where exactly are the nodes for the $n$-th mode?",
          proofSteps:[
            "We need the spatial shape to equal zero: $\\sin(n\\pi x / L) = 0$.",
            "This happens when the argument equals an integer multiple of $\\pi$: $n\\pi x / L = m\\pi$.",
            "Cancel $\\pi$ and solve for $x$: $x = \\frac{m L}{n}$.",
            "Here, $m = 0, 1, 2, \\dots, n$. These fractions of $L$ indicate the exact positions of the nodes."
          ]
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Node Calculation",
          content: "A string is $L = 4$ m long and vibrates in its $n = 2$ mode. Aside from the fixed ends, there is one node in the middle. At what position $x$ is this middle node located?",
          numericAnswer: 2,
          numericTolerance: 0.01
        },
        {
          id: "mcq-1",
          type: "quiz",
          title: "Knowledge Check",
          content: "How many antinodes does the 3rd harmonic ($n=3$) have?",
          options:[
            { id: "A", text: "2", isCorrect: false },
            { id: "B", text: "3", isCorrect: true, explanation: "The $n$-th harmonic always has $n$ loops, and therefore $n$ antinodes." }
          ]
        },
        {
          id: "fib-1",
          type: "fill_in_blank",
          title: "Key Takeaway",
          content: "The points of maximum vibration in a standing wave are called ___.",
          blankAnswer: "antinodes"
        }
      ]
    },
    {
      id: "les-3-4-1-3",
      title: "Quantized Frequencies",
      description: "Harmonics and Overtones",
      icon: "Music",
      slides:[
        {
          id: "warmup-1",
          type: "quiz",
          title: "Conceptual Warm-up 1",
          content: "Can a guitar string vibrate at any completely random frequency you choose?",
          options:[
            { id: "A", text: "Yes", isCorrect: false },
            { id: "B", text: "No", isCorrect: true, explanation: "Because the ends are fixed, only specific resonant frequencies are allowed." }
          ]
        },
        {
          id: "warmup-2",
          type: "quiz",
          title: "Conceptual Warm-up 2",
          content: "The lowest possible frequency a string can vibrate at is called the:",
          options:[
            { id: "A", text: "Fundamental frequency", isCorrect: true, explanation: "This corresponds to $n=1$." },
            { id: "B", text: "First overtone", isCorrect: false, explanation: "The first overtone is the second harmonic ($n=2$)." }
          ]
        },
        {
          id: "theory-def",
          type: "theory",
          title: "Harmonic Frequencies",
          content: "Because the wave number is restricted to $k_n = n\\pi/L$, and the phase velocity is $v = \\omega/k = \lambda f$, the allowed frequencies are also restricted or 'quantized'.\n\nThe allowed frequencies are given by $f_n = \\frac{nv}{2L}$."
        },
        {
          id: "canvas-3",
          type: "interactive_canvas",
          title: "The Harmonic Series",
          content: "Showing $n=1$ (Fundamental), $n=2$ (1st Overtone), and $n=3$ (2nd Overtone).",
          interactiveCanvasId: "quantized-harmonics"
        },
        {
          id: "proof-1",
          type: "proof",
          title: "Deriving the Frequency Formula",
          content: "Let's prove $f_n = n f_1$.",
          proofSteps:[
            "Start with the wave speed relation: $v = \\lambda f \\implies f = v/\\lambda$.",
            "We know $k = 2\\pi/\\lambda$ and $k_n = n\\pi/L$.",
            "Equating them: $\\frac{2\\pi}{\\lambda_n} = \\frac{n\\pi}{L} \\implies \\lambda_n = \\frac{2L}{n}$.",
            "Substitute $\\lambda_n$ into the frequency equation: $f_n = \\frac{v}{2L/n} = n\\left(\\frac{v}{2L}\\right)$.",
            "The fundamental frequency is $f_1 = \\frac{v}{2L}$. Therefore, $f_n = n f_1$."
          ]
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Calculating Harmonics",
          content: "If the fundamental frequency ($f_1$) of a string is $440$ Hz (an 'A' note), what is the frequency of the 3rd harmonic ($f_3$)?",
          numericAnswer: 1320,
          numericTolerance: 1
        },
        {
          id: "mcq-1",
          type: "quiz",
          title: "Knowledge Check",
          content: "In musical terms, the higher harmonic frequencies ($n>1$) are collectively referred to as:",
          options:[
            { id: "A", text: "Overtones", isCorrect: true, explanation: "They add the characteristic timbre or 'color' to the sound of an instrument." },
            { id: "B", text: "Fundamentals", isCorrect: false }
          ]
        },
        {
          id: "fib-1",
          type: "fill_in_blank",
          title: "Key Takeaway",
          content: "The allowed frequencies of a standing wave are integer multiples of the ___ frequency.",
          blankAnswer: "fundamental"
        }
      ]
    },
    {
      id: "les-3-4-1-4",
      title: "Worked Example 13.1",
      description: "Coefficients for Plucked String",
      icon: "Scissors",
      slides:[
        {
          id: "ex-13-1-q",
          type: "example_q",
          title: "Worked Example 13.1",
          content: "A string of length $L$ is plucked at the center to a height $h$ and released from rest. \n\nWe want to find the Fourier coefficients $C_n$ and $D_n$ for the general solution $y(x,t) = \\sum \\sin(n\\pi x/L) (C_n \\cos \\omega_n t + D_n \\sin \\omega_n t)$."
        },
        {
          id: "ex-13-1-sol",
          type: "solution",
          title: "Solution Steps",
          content: "We use the initial conditions $y(x,0)$ and $\\dot{y}(x,0)$.",
          interactiveSteps:[
            {
              prompt: "The string is released from rest, meaning initial velocity $\\dot{y}(x,0) = 0$. Which time coefficient must be zero?",
              options:[
                { id: "a", text: "$C_n = 0$", isCorrect: false },
                { id: "b", text: "$D_n = 0$", isCorrect: true, explanation: "The time derivative of the terms gives $-\\omega C_n\\sin + \\omega D_n\\cos$. At $t=0$, this equals $\\omega D_n$. For this to be zero, $D_n$ must be 0." }
              ]
            },
            {
              prompt: "At $t=0$, the remaining shape is $y(x,0) = \\sum C_n \\sin(n\\pi x/L)$. This is a Fourier sine series. What is the integral formula for $C_n$?",
              options:[
                { id: "a", text: "$C_n = \\frac{2}{L} \\int_0^L y(x,0) \\sin(n\\pi x/L) dx$", isCorrect: true, explanation: "This uses the half-range expansion derived in Exercise 13.4." }
              ]
            },
            {
              prompt: "The result of this integral calculation gives $C_n = \\frac{8h}{\\pi^2 n^2} \\sin(n\\pi/2)$. What happens to this coefficient when $n$ is an EVEN number (e.g., 2, 4, 6)?",
              options:[
                { id: "a", text: "It equals zero.", isCorrect: true, explanation: "Because $\\sin(2\\pi/2) = \\sin(\\pi) = 0$. The plucked shape is perfectly symmetric, so anti-symmetric (even) modes don't contribute." }
              ]
            }
          ]
        },
        {
          id: "mcq-1",
          type: "quiz",
          title: "Solution Analysis",
          content: "What does the $1/n^2$ dependence in the coefficient $C_n$ tell us?",
          options:[
            { id: "A", text: "Higher frequency harmonics contribute MORE to the final shape.", isCorrect: false },
            { id: "B", text: "Higher frequency harmonics contribute LESS to the final shape.", isCorrect: true, explanation: "The amplitude drops off rapidly for higher harmonics, meaning the fundamental mode dominates the sound." }
          ]
        }
      ]
    },
    {
      id: "les-3-4-1-5",
      title: "Exercise 13.5",
      description: "Number of loops in mode n",
      icon: "PenTool",
      slides:[
        {
          id: "ex-13-5-q",
          type: "example_q",
          title: "Exercise 13.5",
          content: "Show that the $n$-th normal mode of a fixed string has exactly $n$ loops."
        },
        {
          id: "ex-13-5-sol",
          type: "solution",
          title: "Counting the Loops",
          content: "We use the properties of the sine function.",
          interactiveSteps:[
            {
              prompt: "The spatial shape is $\\sin(n\\pi x/L)$. As established, nodes occur at $x = m L/n$ for integers $m$. What is the range of valid $m$ values along the string (from $x=0$ to $x=L$)?",
              options:[
                { id: "a", text: "$m = 0, 1, 2, \\dots, n$", isCorrect: true, explanation: "When $m=0$, $x=0$. When $m=n$, $x=L$. These are the boundaries." }
              ]
            },
            {
              prompt: "If $m$ goes from $0$ to $n$, how many nodes are there in total (including the ends)?",
              options:[
                { id: "a", text: "$n+1$", isCorrect: true, explanation: "For example, if $n=2$, $m$ can be 0, 1, 2 (which is 3 nodes)." }
              ]
            },
            {
              prompt: "A 'loop' occurs in the space between any two consecutive nodes. If there are $n+1$ nodes, how many loops are there?",
              options:[
                { id: "a", text: "$n$ loops", isCorrect: true, explanation: "Correct. For example, 3 nodes define 2 spaces (loops) between them." }
              ]
            }
          ]
        },
        {
          id: "mcq-1",
          type: "quiz",
          title: "Conceptual Check",
          content: "If a standing wave has 4 loops, which harmonic mode is it vibrating in?",
          options:[
            { id: "A", text: "n = 3", isCorrect: false },
            { id: "B", text: "n = 4", isCorrect: true, explanation: "The number of loops equals the mode number $n$." }
          ]
        }
      ]
    }
  ]
};