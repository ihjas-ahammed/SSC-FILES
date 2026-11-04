import { Unit } from '../../types';

export const UNIT_3_2_1_SEPARATION: Unit = {
  id: "unit-3-2-1",
  title: "Separation of Variables",
  description: "Solving the wave equation directly",
  color: "duo-orange",
  lessons:[
    {
      id: "les-3-2-1-1",
      title: "The Ansatz (Guess)",
      description: "Assuming a separable solution",
      icon: "Split",
      slides:[
        {
          id: "warmup-1",
          type: "quiz",
          title: "Conceptual Warm-up 1",
          content: "To solve a complex equation with two variables (like position $x$ and time $t$), what is a common mathematical trick?",
          options:[
            { id: "A", text: "Assume the solution is a product of two single-variable functions.", isCorrect: true, explanation: "This technique is called 'Separation of Variables', assuming $y(x,t) = X(x)T(t)$." },
            { id: "B", text: "Set time $t$ to zero and ignore it.", isCorrect: false, explanation: "That would only give us the initial state, not the full dynamic solution." }
          ]
        },
        {
          id: "warmup-2",
          type: "quiz",
          title: "Conceptual Warm-up 2",
          content: "If a wave on a string looks like a spatial shape $X(x)$ that just scales up and down in place over time $T(t)$, what kind of wave is it?",
          options:[
            { id: "A", text: "A traveling wave", isCorrect: false },
            { id: "B", text: "A standing wave", isCorrect: true, explanation: "In a standing wave, the spatial nodes are fixed, and the amplitude oscillates in place." }
          ]
        },
        {
          id: "theory-def",
          type: "theory",
          title: "The Separation Ansatz",
          content: "We want to solve the wave equation:\n$$ \\frac{\\partial^2 y}{\\partial x^2} = \\frac{1}{v^2} \\frac{\\partial^2 y}{\\partial t^2} $$\n\nThe basic idea behind the separation of variables method is to express the unknown function $y(x,t)$ as the product of two functions, each depending on only one variable:\n$$ y(x,t) = X(x)T(t) $$"
        },
        {
          id: "canvas-1",
          type: "interactive_canvas",
          title: "Separation Visualized",
          content: "The shape $X(x)$ acts as an envelope. The function $T(t)$ scales it between $+1$ and $-1$ over time.",
          interactiveCanvasId: "separation-ansatz"
        },
        {
          id: "proof-1",
          type: "proof",
          title: "Substituting into the ODE",
          content: "Let's plug $y = X(x)T(t)$ into the wave equation.",
          proofSteps:[
            "Take the 2nd spatial derivative: $\\frac{\\partial^2}{\\partial x^2}[X(x)T(t)] = T(t) \\frac{d^2 X}{dx^2}$.",
            "Take the 2nd time derivative: $\\frac{\\partial^2}{\\partial t^2}[X(x)T(t)] = X(x) \\frac{d^2 T}{dt^2}$.",
            "Substitute into the wave equation: $T \\frac{d^2 X}{dx^2} = \\frac{1}{v^2} X \\frac{d^2 T}{dt^2}$.",
            "Divide both sides by $X \cdot T$: $\\frac{1}{X} \\frac{d^2 X}{dx^2} = \\frac{1}{v^2 T} \\frac{d^2 T}{dt^2}$."
          ]
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Evaluating the Ansatz",
          content: "If our solution is $y(x,t) = X(x)T(t)$, and we know $X(2) = 5$ m and $T(3) = -0.5$, what is the displacement of the string at position $x=2$ and time $t=3$?",
          numericAnswer: -2.5,
          numericTolerance: 0.1
        },
        {
          id: "mcq-1",
          type: "quiz",
          title: "Knowledge Check",
          content: "Why do the partial derivatives $\\partial$ become ordinary derivatives $d$ after we apply the product rule?",
          options:[
            { id: "A", text: "Because $X$ depends only on $x$, and $T$ depends only on $t$.", isCorrect: true, explanation: "When differentiating $X(x)$ with respect to $x$, it is a single-variable function, so we use ordinary derivatives." },
            { id: "B", text: "Because the wave equation is linear.", isCorrect: false }
          ]
        },
        {
          id: "fib-1",
          type: "fill_in_blank",
          title: "Key Takeaway",
          content: "The method of separation of variables assumes the solution is a ___ of two independent functions.",
          blankAnswer: "product"
        }
      ]
    },
    {
      id: "les-3-2-1-2",
      title: "Solving the Ordinary Differential Equations",
      description: "Equating to a separation constant",
      icon: "FunctionSquare",
      slides:[
        {
          id: "warmup-1",
          type: "quiz",
          title: "Conceptual Warm-up 1",
          content: "If a function that depends *only* on $x$ is perfectly equal to a function that depends *only* on $t$ for all values of $x$ and $t$, what must be true?",
          options:[
            { id: "A", text: "They must both equal $0$.", isCorrect: false, explanation: "They could be 5, or -100." },
            { id: "B", text: "They must both equal the same constant.", isCorrect: true, explanation: "Since changing $x$ doesn't change the $t$ side, the $x$ side must not actually change when $x$ changes. It's a constant." }
          ]
        },
        {
          id: "warmup-2",
          type: "quiz",
          title: "Conceptual Warm-up 2",
          content: "To get wave-like (oscillatory) solutions like sines and cosines, should our separation constant be positive or negative?",
          options:[
            { id: "A", text: "Negative", isCorrect: true, explanation: "A negative constant leads to complex roots in the auxiliary equation, which yields sines and cosines." },
            { id: "B", text: "Positive", isCorrect: false, explanation: "A positive constant would give exponentially growing/decaying solutions, which don't describe stable waves." }
          ]
        },
        {
          id: "theory-def",
          type: "theory",
          title: "The Separation Constant",
          content: "From the previous lesson:\n$$ \\frac{v^2}{X} \\frac{d^2 X}{dx^2} = \\frac{1}{T} \\frac{d^2 T}{dt^2} $$\n\nThe left-hand side depends only on $x$ and the right-hand side depends only on $t$. The only way this is satisfied for all $x$ and $t$ is if both sides equal the same constant. Let's call it $-\\omega^2$.\n\nThis separates the PDE into two ODEs:\n$$ \\frac{v^2}{X} \\frac{d^2 X}{dx^2} = -\\omega^2 \\implies \\frac{d^2 X}{dx^2} + \\frac{\\omega^2}{v^2}X = 0 $$\n$$ \\frac{1}{T} \\frac{d^2 T}{dt^2} = -\\omega^2 \\implies \\frac{d^2 T}{dt^2} + \\omega^2 T = 0 $$"
        },
        {
          id: "canvas-2",
          type: "interactive_canvas",
          title: "Two Harmonic Oscillators",
          content: "We just transformed one complex string into two simple harmonic oscillators: one in space, one in time.",
          interactiveCanvasId: "oscillator-odes"
        },
        {
          id: "proof-1",
          type: "proof",
          title: "Solving the ODEs",
          content: "Both of these equations have the form of the Simple Harmonic Oscillator equation.",
          proofSteps:[
            "For Time: $\\ddot{T} + \\omega^2 T = 0$. The solution is $T(t) = C \\cos(\\omega t) + D \\sin(\\omega t)$.",
            "For Space: $X'' + (\\omega/v)^2 X = 0$.",
            "Let $k = \\omega/v$. The equation is $X'' + k^2 X = 0$.",
            "The solution is $X(x) = A \\cos(kx) + B \\sin(kx)$."
          ]
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Finding the Wave Number",
          content: "In the spatial ODE $\\frac{d^2 X}{dx^2} + k^2 X = 0$, if the angular frequency is $\\omega = 6$ rad/s and the phase velocity is $v = 2$ m/s, what is the value of $k$?",
          numericAnswer: 3,
          numericTolerance: 0.1
        },
        {
          id: "mcq-1",
          type: "quiz",
          title: "Knowledge Check",
          content: "Why did we specifically choose the separation constant to be $-\\omega^2$?",
          options:[
            { id: "A", text: "Because energy is negative.", isCorrect: false },
            { id: "B", text: "To guarantee sinusoidal (oscillatory) solutions.", isCorrect: true, explanation: "If we picked a positive constant $+C^2$, the solutions would be $e^{Ct}$ and $e^{-Ct}$, which explode or die out, rather than oscillating." }
          ]
        },
        {
          id: "fib-1",
          type: "fill_in_blank",
          title: "Key Takeaway",
          content: "The separation of variables reduces the partial differential equation into two ___ differential equations.",
          blankAnswer: "ordinary"
        }
      ]
    },
    {
      id: "les-3-2-1-3",
      title: "Combining X and T (Eq 13.2)",
      description: "Forming the general solution",
      icon: "Layers",
      slides:[
        {
          id: "warmup-1",
          type: "quiz",
          title: "Conceptual Warm-up 1",
          content: "If $y(x,t) = X(x)T(t)$, and we have 2 constants for $X$ ($A, B$) and 2 constants for $T$ ($C, D$), how many total constants will be multiplied out in the final expanded form?",
          options:[
            { id: "A", text: "Two", isCorrect: false },
            { id: "B", text: "Four", isCorrect: true, explanation: "Expanding $(A + B)(C + D)$ yields 4 terms (AC, AD, BC, BD)." }
          ]
        },
        {
          id: "warmup-2",
          type: "quiz",
          title: "Conceptual Warm-up 2",
          content: "Do the constants $A, B, C, D$ depend on the wave equation itself, or something else?",
          options:[
            { id: "A", text: "They depend on the boundary and initial conditions.", isCorrect: true, explanation: "The ODE gives the form; how the string is plucked (initial) and tied down (boundary) gives the constants." },
            { id: "B", text: "They are fixed universal constants like gravity.", isCorrect: false }
          ]
        },
        {
          id: "theory-def",
          type: "theory",
          title: "The General Solution",
          content: "The solution for $y = y(x,t)$ is the product of the two functions:\n\n$$ y(x,t) = (A \\cos kx + B \\sin kx)(C \\cos \\omega t + D \\sin \\omega t) $$\n\nThis is **Equation (13.2)**. It is a general form for a standing wave."
        },
        {
          id: "canvas-3",
          type: "interactive_canvas",
          title: "Four Components",
          content: "The product creates four distinct combinations of space and time oscillations.",
          interactiveCanvasId: "standing-wave-math"
        },
        {
          id: "proof-1",
          type: "proof",
          title: "Expanding the Solution",
          content: "Note that the partial differential equation (13.1) is satisfied by four distinct expressions:",
          proofSteps:[
            "1. $\\cos kx \\cos \\omega t$",
            "2. $\\cos kx \\sin \\omega t$",
            "3. $\\sin kx \\cos \\omega t$",
            "4. $\\sin kx \\sin \\omega t$",
            "Equation 13.2 is simply the linear combination of all of these, multiplied by arbitrary constants $AC, AD, BC, BD$."
          ]
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Evaluating at boundaries",
          content: "If the string is tied down at $x=0$, then $y(0,t) = 0$ for all time $t$. Looking at $y(x,t) = (A \\cos kx + B \\sin kx)(...)$, what must the value of $A$ be?",
          numericAnswer: 0,
          numericTolerance: 0.01
        },
        {
          id: "mcq-1",
          type: "quiz",
          title: "Knowledge Check",
          content: "In Eq 13.2, what do the terms with 'kx' represent?",
          options:[
            { id: "A", text: "The temporal oscillation (how it moves in time).", isCorrect: false },
            { id: "B", text: "The spatial envelope (the shape along the string).", isCorrect: true, explanation: "The $X(x)$ part determines the fixed shape of the wave, including where the nodes are." }
          ]
        },
        {
          id: "fib-1",
          type: "fill_in_blank",
          title: "Key Takeaway",
          content: "The constants A, B, C, D in the general solution are determined from the ___ and initial conditions.",
          blankAnswer: "boundary"
        }
      ]
    },
    {
      id: "les-3-2-1-4",
      title: "Exercise 13.1: Frequency of a 6m string",
      description: "Applying the wave parameters",
      icon: "Activity",
      slides:[
        {
          id: "ex-13-1-q",
          type: "example_q",
          title: "Exercise 13.1",
          content: "A string of length 6 m is fixed at both ends. Its mass is 0.1 kg and the tension in the string is 50 N.\n\n(a) What is the wavelength of the longest possible standing wave in this string?\n(b) What is the frequency of that wave?\n\nGrab a pen and try to solve this using $v = \\sqrt{F/\\rho}$ and $v = \\lambda f$."
        },
        {
          id: "ex-13-1-sol",
          type: "solution",
          title: "Solution",
          content: "Let's find the wavelength and frequency step-by-step.",
          interactiveSteps:[
            {
              prompt: "What is the longest possible standing wave that fits on a string fixed at both ends?",
              options:[
                { id: "a", text: "One full wavelength $\\lambda = L$", isCorrect: false, explanation: "You can fit a longer wave than that!" },
                { id: "b", text: "Half a wavelength $\\lambda/2 = L$", isCorrect: true, explanation: "The fundamental mode has nodes only at the ends, so it is exactly half a wavelength. Thus $\\lambda = 2L = 12$ m." }
              ]
            },
            {
              prompt: "To find frequency, we need speed. First, calculate the linear mass density $\\rho = m/L$.",
              options:[
                { id: "a", text: "$\\rho = 0.1 / 6$ kg/m", isCorrect: true, explanation: "Correct." }
              ]
            },
            {
              prompt: "Now calculate the phase speed $v = \\sqrt{F/\\rho}$.",
              options:[
                { id: "a", text: "$v = \\sqrt{50 / (0.1/6)} = \\sqrt{3000} \\approx 54.77$ m/s", isCorrect: true, explanation: "Correct." }
              ]
            },
            {
              prompt: "Finally, calculate the frequency using $f = v/\\lambda$.",
              options:[
                { id: "a", text: "$f = 54.77 / 12 \\approx 4.56$ Hz", isCorrect: true, explanation: "Correct. The lowest frequency standing wave is 4.56 Hz." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "les-3-2-1-5",
      title: "Exercise 13.2: General Frequency Proof",
      description: "Proof for Half-Wavelength frequencies",
      icon: "PenTool",
      slides:[
        {
          id: "ex-13-2-q",
          type: "example_q",
          title: "Exercise 13.2",
          content: "If $n$ is the number of half wavelengths, show that the frequency of a standing wave in a string is $f = nv/2L$.\n\nTry to prove this algebraically using the relation between $L$ and $\\lambda$."
        },
        {
          id: "ex-13-2-sol",
          type: "solution",
          title: "Solution",
          content: "We relate the string length $L$ to the number of half-wavelengths.",
          interactiveSteps:[
            {
              prompt: "If the string contains $n$ half-wavelengths, what is the equation linking $L$ and $\\lambda$?",
              options:[
                { id: "a", text: "$L = n (\\lambda / 2)$", isCorrect: true, explanation: "Correct. Each loop is a half-wavelength." }
              ]
            },
            {
              prompt: "Rearrange this equation to solve for $\\lambda$.",
              options:[
                { id: "a", text: "$\\lambda = 2L / n$", isCorrect: true, explanation: "Correct." }
              ]
            },
            {
              prompt: "We know the fundamental wave relationship $v = \\lambda f$. Substitute our expression for $\\lambda$ to solve for $f$.",
              options:[
                { id: "a", text: "$f = v / (2L / n) = nv / 2L$", isCorrect: true, explanation: "Proof complete. The frequencies of standing waves are integer multiples of the fundamental frequency $v/2L$." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "les-3-2-1-6",
      title: "Exercise 13.3: Phase Constant Form",
      description: "Trigonometric combinations",
      icon: "RefreshCw",
      slides:[
        {
          id: "ex-13-3-q",
          type: "example_q",
          title: "Exercise 13.3",
          content: "Show that an expression of the form $y = A \\sin kx + B \\cos kx$ can be expressed as $y = C \\cos(kx + \\alpha)$.\n\nExpress $C$ and $\\alpha$ in terms of $A$ and $B$. (The quantity $\\alpha$ is called the 'phase constant'.)"
        },
        {
          id: "ex-13-3-sol",
          type: "solution",
          title: "Solution",
          content: "Use the angle addition formula for cosine.",
          interactiveSteps:[
            {
              prompt: "Expand $C \\cos(kx + \\alpha)$ using the identity $\\cos(u+v) = \\cos u \\cos v - \\sin u \\sin v$.",
              options:[
                { id: "a", text: "$C \\cos(kx)\\cos\\alpha - C \\sin(kx)\\sin\\alpha$", isCorrect: true, explanation: "Correct." }
              ]
            },
            {
              prompt: "Equate this to the original expression: $B \\cos kx + A \\sin kx$. What must $B$ and $A$ equal?",
              options:[
                { id: "a", text: "$B = C \\cos\\alpha$ and $A = -C \\sin\\alpha$", isCorrect: true, explanation: "Matching the coefficients of $\\cos kx$ and $\\sin kx$." }
              ]
            },
            {
              prompt: "Square both equations ($B^2 = C^2 \\cos^2\\alpha$ and $A^2 = C^2 \\sin^2\\alpha$) and add them together.",
              options:[
                { id: "a", text: "$A^2 + B^2 = C^2(\\sin^2\\alpha + \\cos^2\\alpha) = C^2$", isCorrect: true, explanation: "So $C = \\sqrt{A^2+B^2}$." }
              ]
            },
            {
              prompt: "Finally, divide the equation for $A$ by the equation for $B$.",
              options:[
                { id: "a", text: "$A/B = -\\tan\\alpha \\implies \\alpha = \\tan^{-1}(-A/B)$", isCorrect: true, explanation: "Proof complete. We can combine sines and cosines of the same frequency into a single cosine with a phase shift." }
              ]
            }
          ]
        }
      ]
    }
  ]
};