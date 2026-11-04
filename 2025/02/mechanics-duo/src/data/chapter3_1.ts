import { Section } from '../types';

export const SECTION_3_1: Section = {
  "id": "section-3-1",
  "title": "Section 1: Waves in Stretched Strings",
  "description": "Wave equations, Fourier Series, Standing Waves, Traveling Waves, and Energy Flow.",
  "color": "duo-blue",
  "units": [
    {
      "id": "unit-3-1",
      "title": "Fundamentals of Waves",
      "description": "Wave properties, the wave equation, and separation of variables.",
      "color": "duo-blue",
      "lessons": [
        {
          "id": "lesson-3-1-1-properties",
          "title": "Wave Properties & Terminology",
          "description": "Defining amplitude, wavelength, frequency, and wave number.",
          "icon": "Activity",
          "slides": [
            {
              "id": "s1-theory",
              "type": "theory",
              "title": "Characteristics of a Wave",
              "content": "A wave is characterized by several physical parameters:\n\n*   **Amplitude ($A$):** Maximum displacement from equilibrium.\n*   **Wavelength ($\\lambda$):** Distance between two corresponding points (like peak to peak).\n*   **Period ($\\tau$):** Time for one complete oscillation.\n*   **Frequency ($f$):** Number of oscillations per unit time ($f = 1/\\tau$).\n*   **Speed ($v$):** How fast the waveform is displaced ($v = \\lambda / \\tau = \\lambda f$).\n*   **Angular frequency ($\\omega$):** $\\omega = 2\\pi f = 2\\pi/\\tau$.\n*   **Wave number ($k$):** $k = 2\\pi / \\lambda$. (Notice $k = \\omega / v$)."
            },
            {
              "id": "s2-example",
              "type": "example",
              "title": "Snapshot vs Video",
              "content": "A photograph of a string at a specific instant shows displacement $y$ as a function of position $x$, giving $y(x) = A\\sin(kx)$.\n\nA video shows the string moving over time, so displacement depends on both position and time: $y(x,t)$. This is where $\\omega t$ will enter the argument."
            },
            {
              "id": "s3-quiz",
              "type": "quiz",
              "title": "Wave Number vs Angular Frequency",
              "content": "Angular frequency $\\omega$ represents an inverse time. What does the wave number $k$ represent?",
              "options": [
                { "id": "1", "text": "An inverse length", "isCorrect": true, "explanation": "Since $k = 2\\pi/\\lambda$, its units are radians per meter. It describes spatial frequency." },
                { "id": "2", "text": "A velocity", "isCorrect": false, "explanation": "Velocity is $\\omega/k$." },
                { "id": "3", "text": "An inverse time", "isCorrect": false, "explanation": "That is angular frequency." }
              ]
            },
            {
              "id": "s4-blank",
              "type": "fill_in_blank",
              "title": "Wave Speed",
              "content": "The speed $v$ of a wave can be found by multiplying its wavelength $\\lambda$ by its ___ $f$.",
              "blankAnswer": "frequency"
            }
          ]
        },
        {
          "id": "lesson-3-1-2-wave-equation",
          "title": "The Wave Equation",
          "description": "Deriving the wave equation from Newton's Second Law.",
          "icon": "TrendingUp",
          "slides": [
            {
              "id": "s1-theory",
              "type": "theory",
              "title": "String Dynamics",
              "content": "Consider a string of mass density $\\rho$ under tension $F$. A small segment $dx$ has mass $dm = \\rho dx$. \n\nThe horizontal tension forces cancel out, but curvature creates a net vertical restoring force. Using the small angle approximation $\\sin\\theta \\approx \\tan\\theta = \\partial y / \\partial x$, we can apply $F_{net} = ma$."
            },
            {
              "id": "s2-proof",
              "type": "proof",
              "title": "Interactive Proof: The Wave Equation",
              "content": "Let's derive the equation of motion for a wave on a string.",
              "interactiveSteps": [
                {
                  "stepText": "The net vertical force is $F_{net} = F\\sin\\phi - F\\sin\\theta$, where $\\phi$ is the angle at $x+dx$ and $\\theta$ is the angle at $x$."
                },
                {
                  "prompt": "Using $\\sin\\theta \\approx \\frac{\\partial y}{\\partial x}$, how do we write the force difference?",
                  "stepText": "$F_{net} = F \\left[ \\frac{\\partial y(x+dx, t)}{\\partial x} - \\frac{\\partial y(x, t)}{\\partial x} \\right]$.",
                  "options": [
                    { "id": "A", "text": "$F \\left[ \\frac{\\partial y(x+dx, t)}{\\partial x} - \\frac{\\partial y(x, t)}{\\partial x} \\right]$", "isCorrect": true, "explanation": "It is the difference in slopes between the two ends." },
                    { "id": "B", "text": "$F \\frac{\\partial^2 y}{\\partial x^2}$", "isCorrect": false, "explanation": "This is the next step, after dividing by $dx$." }
                  ]
                },
                {
                  "stepText": "Newton's second law is $F_{net} = (\\rho dx) \\frac{\\partial^2 y}{\\partial t^2}$."
                },
                {
                  "prompt": "Divide both sides by $dx$ and take the limit as $dx \\to 0$. What does the left side become?",
                  "stepText": "$F \\frac{\\partial^2 y}{\\partial x^2}$.",
                  "options": [
                    { "id": "A", "text": "$F \\frac{\\partial^2 y}{\\partial x^2}$", "isCorrect": true, "explanation": "The limit of the difference quotient of the first derivative is the second derivative." },
                    { "id": "B", "text": "$\\rho \\frac{\\partial y}{\\partial t}$", "isCorrect": false, "explanation": "That is momentum density, not force." }
                  ]
                },
                {
                  "stepText": "Equating them: $F \\frac{\\partial^2 y}{\\partial x^2} = \\rho \\frac{\\partial^2 y}{\\partial t^2}$. By defining $v = \\sqrt{F/\\rho}$, we get the standard wave equation: $\\frac{\\partial^2 y}{\\partial x^2} = \\frac{1}{v^2}\\frac{\\partial^2 y}{\\partial t^2}$."
                }
              ]
            },
            {
              "id": "s3-numerical",
              "type": "numerical",
              "title": "Exercise 13.1: Longest Standing Wave",
              "content": "A string of length $6$ m is fixed at both ends. Its mass is $0.1$ kg and the tension is $50$ N.\n\nWhat is the wavelength of the longest possible standing wave in this string (in meters)?",
              "numericAnswer": 12,
              "numericTolerance": 0.1
            },
            {
              "id": "s4-quiz",
              "type": "quiz",
              "title": "Exercise 13.1 (Part B): Wave Frequency",
              "content": "For the same string ($L=6$m, $m=0.1$kg, $T=50$N), the wave speed is $v = \\sqrt{50 / (0.1/6)} = \\sqrt{3000} \\approx 54.77$ m/s. The longest wavelength is $\\lambda = 12$m. What is the frequency of that wave?",
              "options": [
                { "id": "1", "text": "4.56 Hz", "isCorrect": true, "explanation": "$f = v / \\lambda = 54.77 / 12 \\approx 4.56$ Hz." },
                { "id": "2", "text": "9.13 Hz", "isCorrect": false, "explanation": "This would be the second harmonic." },
                { "id": "3", "text": "54.77 Hz", "isCorrect": false, "explanation": "This is the wave speed, not frequency." }
              ]
            }
          ]
        },
        {
          "id": "lesson-3-1-3-separation-variables",
          "title": "Direct Solution: Separation of Variables",
          "description": "Solving the PDE by splitting space and time.",
          "icon": "SplitSquareHorizontal",
          "slides": [
            {
              "id": "s1-theory",
              "type": "theory",
              "title": "Separation of Variables",
              "content": "To solve the PDE $\\frac{\\partial^2 y}{\\partial x^2} = \\frac{1}{v^2}\\frac{\\partial^2 y}{\\partial t^2}$, we assume the solution can be factored into two independent functions:\n\n$$y(x,t) = X(x)T(t)$$\n\nSubstituting this into the wave equation gives:\n$$T(t)\\frac{\\partial^2 X}{\\partial x^2} = \\frac{1}{v^2}X(x)\\frac{\\partial^2 T}{\\partial t^2}$$"
            },
            {
              "id": "s2-proof",
              "type": "proof",
              "title": "Interactive Proof: The Separation Constant",
              "content": "Let's separate the variables onto different sides of the equals sign.",
              "interactiveSteps": [
                {
                  "stepText": "Start with $T \\frac{d^2 X}{dx^2} = \\frac{1}{v^2} X \\frac{d^2 T}{dt^2}$."
                },
                {
                  "prompt": "Divide both sides by $X(x)T(t)$ to separate the variables. What is the result?",
                  "stepText": "$\\frac{1}{X} \\frac{d^2 X}{dx^2} = \\frac{1}{v^2 T} \\frac{d^2 T}{dt^2}$.",
                  "options": [
                    { "id": "A", "text": "$\\frac{1}{X} \\frac{d^2 X}{dx^2} = \\frac{1}{v^2 T} \\frac{d^2 T}{dt^2}$", "isCorrect": true, "explanation": "Now the left side depends ONLY on x, and the right side depends ONLY on t." },
                    { "id": "B", "text": "$X \\frac{d^2 X}{dx^2} = T \\frac{d^2 T}{dt^2}$", "isCorrect": false, "explanation": "Division puts X and T in the denominators." }
                  ]
                },
                {
                  "stepText": "Since a function of purely $x$ equals a function of purely $t$ for all possible values, they must both equal a constant. Call this constant $-\\omega^2 / v^2$."
                },
                {
                  "prompt": "This yields two ordinary differential equations. For $X$, we have $\\frac{d^2 X}{dx^2} = -\\frac{\\omega^2}{v^2} X$. What kind of motion does this represent?",
                  "stepText": "It is the Simple Harmonic Motion equation! $\\frac{d^2 X}{dx^2} + k^2 X = 0$, where $k = \\omega/v$.",
                  "options": [
                    { "id": "A", "text": "Exponential decay", "isCorrect": false, "explanation": "The constant is negative, leading to oscillatory (sine/cosine) solutions." },
                    { "id": "B", "text": "Simple Harmonic Motion", "isCorrect": true, "explanation": "Exactly. The spatial part is just a sine/cosine wave." }
                  ]
                }
              ]
            },
            {
              "id": "s3-example",
              "type": "example",
              "title": "The General Solution",
              "content": "Both ODEs yield harmonic solutions:\n$X(x) = A\\cos kx + B\\sin kx$\n$T(t) = C\\cos \\omega t + D\\sin \\omega t$\n\nThe full solution is their product:\n$y(x,t) = (A\\cos kx + B\\sin kx)(C\\cos \\omega t + D\\sin \\omega t)$"
            },
            {
              "id": "s4-quiz",
              "type": "quiz",
              "title": "Logic Check",
              "content": "Why do we choose the separation constant to be negative ( $-\\omega^2/v^2$ ) rather than positive?",
              "options": [
                { "id": "1", "text": "To force the solutions to be sines and cosines (oscillatory) rather than growing exponentials.", "isCorrect": true, "explanation": "A positive constant would yield $e^{kx}$ and $e^{-kx}$, which blow up at infinity, unphysical for a bounded string." },
                { "id": "2", "text": "Because frequency must be negative.", "isCorrect": false, "explanation": "Frequency $\\omega$ is positive; we manually add the minus sign to the square." },
                { "id": "3", "text": "To satisfy gravity.", "isCorrect": false, "explanation": "Gravity isn't in this equation." }
              ]
            }
          ]
        },
        {
          "id": "lesson-3-1-4-general-solutions",
          "title": "Exercises & Superposition",
          "description": "Applying initial conditions and phase identities.",
          "icon": "PenTool",
          "slides": [
            {
              "id": "s1-q",
              "type": "example_q",
              "title": "Exercise 13.2",
              "content": "If $n$ is the number of half wavelengths that fit on a string of length $L$, show that the frequency of the standing wave is $f = nv/2L$."
            },
            {
              "id": "s2-sol",
              "type": "solution",
              "title": "Interactive Solution",
              "content": "Let's connect wavelengths, length, and frequency.",
              "interactiveSteps": [
                {
                  "stepText": "The length of the string $L$ fits exactly $n$ half-wavelengths: $L = n(\\lambda/2)$."
                },
                {
                  "prompt": "Solve this for $\\lambda$.",
                  "stepText": "$\\lambda = 2L/n$.",
                  "options": [
                    { "id": "A", "text": "$\\lambda = nL/2$", "isCorrect": false, "explanation": "Check your algebra." },
                    { "id": "B", "text": "$\\lambda = 2L/n$", "isCorrect": true, "explanation": "Correct." }
                  ]
                },
                {
                  "prompt": "We know wave speed $v = \\lambda f$. Substitute our expression for $\\lambda$ and solve for $f$.",
                  "stepText": "$v = (2L/n)f \\implies f = nv / 2L$.",
                  "options": [
                    { "id": "A", "text": "$f = nv / 2L$", "isCorrect": true, "explanation": "Correct. This gives the allowed harmonic frequencies of a string." },
                    { "id": "B", "text": "$f = vL / 2n$", "isCorrect": false, "explanation": "Wrong algebraic manipulation." }
                  ]
                }
              ]
            },
            {
              "id": "s3-q",
              "type": "example_q",
              "title": "Exercise 13.3",
              "content": "Show that the spatial expression $y = A\\sin kx + B\\cos kx$ can be expressed as $y = C\\cos(kx + \\alpha)$. \n\nExpress $C$ and $\\alpha$ in terms of $A$ and $B$."
            },
            {
              "id": "s4-quiz",
              "type": "quiz",
              "title": "Exercise 13.3 Solution",
              "content": "Expanding $C\\cos(kx + \\alpha)$ gives $C\\cos kx \\cos\\alpha - C\\sin kx \\sin\\alpha$. Matching coefficients to $A\\sin kx + B\\cos kx$, we find $B = C\\cos\\alpha$ and $A = -C\\sin\\alpha$. \nWhat are $C$ and $\\alpha$?",
              "options": [
                { "id": "1", "text": "$C = A+B$, $\\alpha = A/B$", "isCorrect": false, "explanation": "Trigonometric coefficients combine via Pythagoras." },
                { "id": "2", "text": "$C = \\sqrt{A^2 + B^2}$, $\\alpha = \\tan^{-1}(-A/B)$", "isCorrect": true, "explanation": "$A^2+B^2 = C^2(\\sin^2\\alpha+\\cos^2\\alpha)=C^2$. And $A/B = -\\sin\\alpha/\\cos\\alpha = -\\tan\\alpha$." },
                { "id": "3", "text": "$C = \\sqrt{A^2 - B^2}$, $\\alpha = \\tan^{-1}(B/A)$", "isCorrect": false, "explanation": "The sum under the square root must be positive." }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "unit-3-2",
      "title": "Fourier Series & Standing Waves",
      "description": "Matching boundary conditions and decomposing complex shapes.",
      "color": "duo-blue",
      "lessons": [
        {
          "id": "lesson-3-2-1-fourier",
          "title": "Fourier Series Fundamentals",
          "description": "Representing periodic functions as sums of sines and cosines.",
          "icon": "Layers",
          "slides": [
            {
              "id": "s1-theory",
              "type": "theory",
              "title": "The Fourier Series",
              "content": "Any periodic function (or a function on a finite interval) can be represented as an infinite sum of sines and cosines:\n\n$$f(x) = \\frac{a_0}{2} + \\sum_{n=1}^\\infty a_n \\cos(nx) + \\sum_{n=1}^\\infty b_n \\sin(nx)$$\n\nThis is highly useful for matching the initial shape of a plucked string to the infinite set of possible standing wave solutions."
            },
            {
              "id": "s2-example",
              "type": "example",
              "title": "Finding the Coefficients",
              "content": "We find $a_n$ and $b_n$ using the **orthogonality** of sines and cosines. For an interval $-\\pi$ to $\\pi$:\n\n*   $a_0 = \\frac{1}{\\pi} \\int_{-\\pi}^{\\pi} f(x) dx$\n*   $a_m = \\frac{1}{\\pi} \\int_{-\\pi}^{\\pi} f(x) \\cos(mx) dx$\n*   $b_m = \\frac{1}{\\pi} \\int_{-\\pi}^{\\pi} f(x) \\sin(mx) dx$"
            },
            {
              "id": "s3-quiz",
              "type": "quiz",
              "title": "Labor Saving Fact",
              "content": "If $f(x)$ is an **odd** function ($f(x) = -f(-x)$), which coefficients will entirely disappear (evaluate to zero) from the series?",
              "options": [
                { "id": "1", "text": "The $b_n$ coefficients (sine terms).", "isCorrect": false, "explanation": "Sine is an odd function. An odd function times an odd function is even, which survives integration." },
                { "id": "2", "text": "The $a_n$ coefficients (cosine terms).", "isCorrect": true, "explanation": "Cosine is even. Odd times Even is Odd. The integral of an odd function from $-\\pi$ to $\\pi$ is exactly zero!" },
                { "id": "3", "text": "All of them.", "isCorrect": false, "explanation": "Then the function would be zero everywhere." }
              ]
            },
            {
              "id": "s4-blank",
              "type": "fill_in_blank",
              "title": "Orthogonality",
              "content": "The integral of $\\sin(nx)\\cos(mx)$ over a full period is always equal to ___ for all integers $m$ and $n$.",
              "blankAnswer": "zero"
            }
          ]
        },
        {
          "id": "lesson-3-2-2-standing-waves",
          "title": "Standing Waves & Boundary Conditions",
          "description": "Quantizing the wave number to fit the string.",
          "icon": "Aperture",
          "slides": [
            {
              "id": "s1-theory",
              "type": "theory",
              "title": "Tying Down the Ends",
              "content": "Consider a string tied down at $x=0$ and $x=L$. The boundary conditions are $y(0,t) = y(L,t) = 0$.\n\nRecall our general solution: \n$y(x,t) = (A\\cos kx + B\\sin kx)(C\\cos \\omega t + D\\sin \\omega t)$"
            },
            {
              "id": "s2-proof",
              "type": "proof",
              "title": "Interactive Proof: Quantization",
              "content": "Let's apply the boundary conditions to find allowed wave numbers $k$.",
              "interactiveSteps": [
                {
                  "stepText": "First boundary: $y(0,t) = 0$. Since $\\sin(0)=0$ and $\\cos(0)=1$, the spatial part becomes $A(1) + B(0) = A$."
                },
                {
                  "prompt": "To make $y(0,t) = 0$ for ALL times $t$, what must $A$ be?",
                  "stepText": "We must set $A = 0$. The spatial part is now just $B\\sin kx$.",
                  "options": [
                    { "id": "A", "text": "$A = 0$", "isCorrect": true, "explanation": "If A is not zero, the string would move up and down at x=0." },
                    { "id": "B", "text": "$A = -B$", "isCorrect": false, "explanation": "At x=0, B doesn't contribute at all." }
                  ]
                },
                {
                  "stepText": "Second boundary: $y(L,t) = 0$. The spatial part at $x=L$ is $B\\sin(kL)$."
                },
                {
                  "prompt": "If $B\\sin(kL) = 0$, and $B$ cannot be zero (otherwise there's no wave), what is the condition on $kL$?",
                  "stepText": "$\\sin(kL) = 0$, which means $kL = n\\pi$ for $n = 1, 2, 3, ...$",
                  "options": [
                    { "id": "A", "text": "$kL = n\\pi/2$", "isCorrect": false, "explanation": "Sine is 1 at $\\pi/2$." },
                    { "id": "B", "text": "$kL = n\\pi$", "isCorrect": true, "explanation": "Sine is zero at integer multiples of $\\pi$." }
                  ]
                },
                {
                  "stepText": "Therefore, the wave number is quantized: $k_n = \\frac{n\\pi}{L}$. Since $\\omega = kv$, the angular frequencies are also quantized: $\\omega_n = \\frac{n\\pi v}{L}$."
                }
              ]
            },
            {
              "id": "s3-example",
              "type": "example",
              "title": "The General Standing Wave",
              "content": "Since any integer $n$ works, the most general solution is a sum of all possible valid standing waves (a Fourier Series!):\n\n$$y(x,t) = \\sum_{n=1}^\\infty (A_n \\cos \\omega_n t + B_n \\sin \\omega_n t) \\sin\\left(\\frac{n\\pi x}{L}\\right)$$\n\nWhere $\\omega_n = n\\pi v / L$."
            },
            {
              "id": "s4-quiz",
              "type": "quiz",
              "title": "Nodes",
              "content": "The points on the string where $\\sin(n\\pi x / L) = 0$ do not move at all during the oscillation. What are these points called?",
              "options": [
                { "id": "1", "text": "Antinodes", "isCorrect": false, "explanation": "Antinodes are points of maximum displacement." },
                { "id": "2", "text": "Nodes", "isCorrect": true, "explanation": "Nodes are points of zero displacement." },
                { "id": "3", "text": "Harmonics", "isCorrect": false, "explanation": "Harmonics refer to the frequencies." }
              ]
            }
          ]
        },
        {
          "id": "lesson-3-2-3-worked-example-13-1",
          "title": "Worked Example 13.1: The Plucked String",
          "description": "Applying initial conditions to find the Fourier coefficients.",
          "icon": "PenTool",
          "slides": [
            {
              "id": "s1-q",
              "type": "example_q",
              "title": "Worked Example 13.1",
              "content": "A string of length $L$ is pulled up at its midpoint a distance $b$ and then released from rest.\n\nDetermine the coefficients $A_n$ and $B_n$ for the general solution."
            },
            {
              "id": "s2-sol",
              "type": "solution",
              "title": "Interactive Solution",
              "content": "We use the initial velocity to eliminate half the coefficients instantly.",
              "interactiveSteps": [
                {
                  "stepText": "The general solution is $y(x,t) = \\sum (A_n \\cos \\omega_n t + B_n \\sin \\omega_n t) \\sin(n\\pi x / L)$."
                },
                {
                  "prompt": "Take the time derivative $\\partial y / \\partial t$. At $t=0$, the string is released from rest, so $\\partial y / \\partial t = 0$. Which terms survive in the derivative at $t=0$?",
                  "stepText": "The derivative of cosine is sine (becomes 0 at t=0). The derivative of sine is cosine (becomes 1 at t=0). So only the $B_n \\omega_n$ terms survive.",
                  "options": [
                    { "id": "A", "text": "Only the $A_n$ terms.", "isCorrect": false, "explanation": "The derivative of $\\cos(\\omega t)$ has a $\\sin(\\omega t)$ which is zero at $t=0$." },
                    { "id": "B", "text": "Only the $B_n$ terms.", "isCorrect": true, "explanation": "Correct. $B_n \\omega_n \\cos(0) = B_n \\omega_n$." }
                  ]
                },
                {
                  "stepText": "Thus $0 = \\sum B_n \\omega_n \\sin(n\\pi x / L)$ for all $x$. This implies $B_n = 0$ for all $n$."
                },
                {
                  "stepText": "Now apply the initial position $y(x,0)$. The solution reduces to $y(x,0) = \\sum A_n \\sin(n\\pi x / L)$."
                },
                {
                  "stepText": "To find $A_n$, we calculate the Fourier sine coefficients of the triangular plucked shape. The math yields $A_n = \\frac{8b}{n^2 \\pi^2} \\sin(\\frac{n\\pi}{2})$."
                }
              ]
            },
            {
              "id": "s3-quiz",
              "type": "quiz",
              "title": "Interpreting the Result",
              "content": "The expression $A_n = \\frac{8b}{n^2 \\pi^2} \\sin(\\frac{n\\pi}{2})$ contains a $\\sin(n\\pi / 2)$ term. What happens to the EVEN harmonics ($n=2,4,6...$)?",
              "options": [
                { "id": "1", "text": "They are exactly zero.", "isCorrect": true, "explanation": "$\\sin(2\\pi/2) = \\sin(\\pi) = 0$. Plucking exactly at the center excites only odd harmonics!" },
                { "id": "2", "text": "They are the strongest.", "isCorrect": false, "explanation": "They evaluate to zero." }
              ]
            },
            {
              "id": "s4-blank",
              "type": "fill_in_blank",
              "title": "Initial Velocity",
              "content": "Because the string was released from rest, all the coefficients attached to the ___ time-dependence term became zero.",
              "blankAnswer": "sine"
            }
          ]
        },
        {
          "id": "lesson-3-2-4-fourier-exercises",
          "title": "Fourier Exercises",
          "description": "Exercises 13.4 and 13.5",
          "icon": "Target",
          "slides": [
            {
              "id": "s1-q",
              "type": "example_q",
              "title": "Exercise 13.4",
              "content": "We derived Fourier coefficients for the interval $-\\pi$ to $\\pi$. \n\nShow that if $f(x)$ is defined in an arbitrary interval $0 < x < l$ (or $-l < x < l$), the cosine coefficient formula becomes:\n$a_m = \\frac{2}{l} \\int_0^l f(x) \\cos\\left(\\frac{m\\pi}{l} x\\right) dx$"
            },
            {
              "id": "s2-sol",
              "type": "solution",
              "title": "Interactive Solution",
              "content": "This is a simple change of variables.",
              "interactiveSteps": [
                {
                  "stepText": "The original formula relies on the variable having a period of $2\\pi$. If our physical string has length $2l$ (from $-l$ to $l$), we need a new variable."
                },
                {
                  "prompt": "Let $\\theta = c \\cdot x$. If we want $x = l$ to correspond to $\\theta = \\pi$, what is $c$?",
                  "stepText": "$\\pi = c \\cdot l \\implies c = \\pi/l$. So $\\theta = \\frac{\\pi x}{l}$.",
                  "options": [
                    { "id": "A", "text": "$\\theta = \\frac{\\pi x}{l}$", "isCorrect": true, "explanation": "Correct scaling factor." },
                    { "id": "B", "text": "$\\theta = \\frac{l x}{\\pi}$", "isCorrect": false, "explanation": "Check your algebra." }
                  ]
                },
                {
                  "stepText": "Substituting this $\\theta$ into $\\cos(m\\theta)$ yields $\\cos(\\frac{m\\pi}{l}x)$."
                },
                {
                  "stepText": "The normalization factor $1/\\pi$ becomes $1/l$. For a symmetric interval $0$ to $l$, we can double the integral and integrate from $0$ to $l$, giving the factor $2/l$."
                }
              ]
            },
            {
              "id": "s3-quiz",
              "type": "quiz",
              "title": "Exercise 13.5: Harmonics",
              "content": "In a standing wave, the integer $n$ is the harmonic number. If $n=3$ (the third harmonic), how many 'loops' or antinodes are visible on the string?",
              "options": [
                { "id": "1", "text": "1", "isCorrect": false, "explanation": "That is the fundamental ($n=1$)." },
                { "id": "2", "text": "3", "isCorrect": true, "explanation": "The $n$-th harmonic always has $n$ loops and $n+1$ nodes (including the ends)." },
                { "id": "3", "text": "4", "isCorrect": false, "explanation": "That would be the number of nodes." }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "unit-3-3",
      "title": "Traveling Waves & Energy Flow",
      "description": "Moving pulses, superposition, and impedance matching.",
      "color": "duo-blue",
      "lessons": [
        {
          "id": "lesson-3-3-1-traveling-waves",
          "title": "Traveling Waves",
          "description": "Functions of (x - vt) and the complex representation.",
          "icon": "ArrowRight",
          "slides": [
            {
              "id": "s1-theory",
              "type": "theory",
              "title": "The Traveling Wave",
              "content": "A pulse moving down an infinite string without changing shape means the displacement at position $x$ at time $t$ is the same as the displacement at position $x-vt$ at time zero.\n\nThe functional form for a wave traveling to the **right** is $y(x,t) = f(x - vt)$.\nA wave traveling to the **left** is $y(x,t) = g(x + vt)$."
            },
            {
              "id": "s2-proof",
              "type": "proof",
              "title": "Interactive Proof: Checking the Solution",
              "content": "Let's prove that $f(x-vt)$ satisfies the wave equation $\\frac{\\partial^2 y}{\\partial x^2} = \\frac{1}{v^2}\\frac{\\partial^2 y}{\\partial t^2}$.",
              "interactiveSteps": [
                {
                  "stepText": "Let $u = x - vt$. Then $y = f(u)$."
                },
                {
                  "prompt": "Using the chain rule, $\\frac{\\partial y}{\\partial t} = \\frac{\\partial f}{\\partial u} \\frac{\\partial u}{\\partial t}$. What is $\\frac{\\partial u}{\\partial t}$?",
                  "stepText": "$\\frac{\\partial}{\\partial t}(x - vt) = -v$. So $\\frac{\\partial y}{\\partial t} = -v \\frac{\\partial f}{\\partial u}$.",
                  "options": [
                    { "id": "A", "text": "$-v$", "isCorrect": true, "explanation": "The derivative of $x-vt$ with respect to $t$ is $-v$." },
                    { "id": "B", "text": "$v$", "isCorrect": false, "explanation": "Don't forget the negative sign." }
                  ]
                },
                {
                  "stepText": "Taking the second derivative: $\\frac{\\partial^2 y}{\\partial t^2} = -v \\frac{\\partial}{\\partial t}(\\frac{\\partial f}{\\partial u}) = (-v)(-v)\\frac{\\partial^2 f}{\\partial u^2} = v^2 \\frac{\\partial^2 f}{\\partial u^2}$."
                },
                {
                  "stepText": "Now for $x$: $\\frac{\\partial y}{\\partial x} = \\frac{\\partial f}{\\partial u} \\frac{\\partial u}{\\partial x}$. Since $\\frac{\\partial u}{\\partial x} = 1$, we get $\\frac{\\partial^2 y}{\\partial x^2} = \\frac{\\partial^2 f}{\\partial u^2}$."
                },
                {
                  "stepText": "Comparing the two: $\\frac{\\partial^2 y}{\\partial t^2} = v^2 \\frac{\\partial^2 y}{\\partial x^2}$. It works perfectly!"
                }
              ]
            },
            {
              "id": "s3-example",
              "type": "example",
              "title": "Complex Representation",
              "content": "A very common way to write a sinusoidal traveling wave is using Euler's relation:\n$$y(x,t) = A e^{i(kx - \\omega t)}$$\n\nBy taking the real part, we get $A\\cos(kx - \\omega t)$. The constant $k$ must be the wave number because $v = \\omega/k$ matches the $(x-vt)$ form perfectly: $k(x - \\omega/k t) = kx - \\omega t$."
            },
            {
              "id": "s4-quiz",
              "type": "quiz",
              "title": "Direction of Travel",
              "content": "Which of the following represents a wave traveling in the negative x-direction (to the left)?",
              "options": [
                { "id": "1", "text": "$A\\sin(kx - \\omega t)$", "isCorrect": false, "explanation": "This travels to the right." },
                { "id": "2", "text": "$A\\sin(kx + \\omega t)$", "isCorrect": true, "explanation": "The '+' sign indicates $g(x+vt)$, which moves to the left." },
                { "id": "3", "text": "$A\\cos(kx)\\sin(\\omega t)$", "isCorrect": false, "explanation": "This is a standing wave." }
              ]
            }
          ]
        },
        {
          "id": "lesson-3-3-2-superposition",
          "title": "Superposition: Standing as Traveling",
          "description": "How two traveling waves create a standing wave.",
          "icon": "Repeat",
          "slides": [
            {
              "id": "s1-theory",
              "type": "theory",
              "title": "The Superposition Principle",
              "content": "Are the standing wave solutions we found earlier equivalent to traveling waves?\n\nYes! A standing wave can be considered the sum (superposition) of two traveling waves moving in opposite directions."
            },
            {
              "id": "s2-proof",
              "type": "proof",
              "title": "Interactive Proof: Trig Identities",
              "content": "Let's add a right-traveling wave and a left-traveling wave.",
              "interactiveSteps": [
                {
                  "stepText": "Let $y_1 = A\\sin(kx - \\omega t)$ and $y_2 = A\\sin(kx + \\omega t)$."
                },
                {
                  "stepText": "Recall the identity: $\\sin(\\alpha) + \\sin(\\beta) = 2\\sin\\left(\\frac{\\alpha+\\beta}{2}\\right)\\cos\\left(\\frac{\\alpha-\\beta}{2}\\right)$."
                },
                {
                  "prompt": "Apply this to $y_1 + y_2$. What is $\\frac{\\alpha+\\beta}{2}$?",
                  "stepText": "$\\frac{(kx-\\omega t) + (kx+\\omega t)}{2} = \\frac{2kx}{2} = kx$.",
                  "options": [
                    { "id": "A", "text": "$kx$", "isCorrect": true, "explanation": "The $\\omega t$ terms cancel." },
                    { "id": "B", "text": "$\\omega t$", "isCorrect": false, "explanation": "Check the addition." }
                  ]
                },
                {
                  "prompt": "What is $\\frac{\\alpha-\\beta}{2}$?",
                  "stepText": "$\\frac{(kx-\\omega t) - (kx+\\omega t)}{2} = \\frac{-2\\omega t}{2} = -\\omega t$.",
                  "options": [
                    { "id": "A", "text": "$-\\omega t$", "isCorrect": true, "explanation": "The $kx$ terms cancel." },
                    { "id": "B", "text": "$kx$", "isCorrect": false, "explanation": "Check the subtraction." }
                  ]
                },
                {
                  "stepText": "So $y_1 + y_2 = 2A\\sin(kx)\\cos(-\\omega t)$. Since cosine is even, this is $2A\\sin(kx)\\cos(\\omega t)$."
                },
                {
                  "stepText": "This perfectly matches the standing wave equation $y = C\\sin(kx)\\cos(\\omega t)$! A standing wave is just two traveling waves passing through each other."
                }
              ]
            },
            {
              "id": "s3-quiz",
              "type": "quiz",
              "title": "Exercise 13.8: Trivial Zero",
              "content": "For the standing wave $y(x,t) = [2A\\sin(kx)]\\cos\\omega t$, we must satisfy the boundary $y(L) = 0$. This requires $2A\\sin(kL) = 0$. \nWhich of the following is true?",
              "options": [
                { "id": "1", "text": "We must set $A=0$ to solve it.", "isCorrect": false, "explanation": "That gives the trivial solution (no wave)." },
                { "id": "2", "text": "We quantize $k$ such that $kL = n\\pi$.", "isCorrect": true, "explanation": "This restricts the allowed traveling wave frequencies that can form a standing wave." }
              ]
            },
            {
              "id": "s4-blank",
              "type": "fill_in_blank",
              "title": "Standing Waves",
              "content": "A standing wave is generated by the ___ of two identical traveling waves moving in opposite directions.",
              "blankAnswer": "superposition"
            }
          ]
        },
        {
          "id": "lesson-3-3-3-energy",
          "title": "Energy of a Wave",
          "description": "Integrating kinetic and potential energy.",
          "icon": "Zap",
          "slides": [
            {
              "id": "s1-theory",
              "type": "theory",
              "title": "Kinetic and Potential Elements",
              "content": "For a standing wave $y = A\\sin(\\frac{\\pi x}{L})\\cos(\\omega t)$, the energy in a small mass element $dm = \\rho dx$ is:\n\n*   **Kinetic:** $dT = \\frac{1}{2} \\rho dx (\\frac{\\partial y}{\\partial t})^2$\n*   **Potential:** The work done to stretch the string $ds - dx$ against tension $F$. $dV = F(ds - dx)$."
            },
            {
              "id": "s2-proof",
              "type": "proof",
              "title": "Interactive Proof: Potential Energy",
              "content": "Let's simplify the $dV$ expression using geometry.",
              "interactiveSteps": [
                {
                  "stepText": "The stretched length is $ds = \\sqrt{dx^2 + dy^2} = dx\\sqrt{1 + (\\frac{\\partial y}{\\partial x})^2}$."
                },
                {
                  "prompt": "Since the slope $\\frac{\\partial y}{\\partial x}$ is small, apply the binomial expansion $\\sqrt{1+\\epsilon} \\approx 1 + \\frac{1}{2}\\epsilon$. What does the bracket become?",
                  "stepText": "$\\sqrt{1 + (\\frac{\\partial y}{\\partial x})^2} \\approx 1 + \\frac{1}{2}(\\frac{\\partial y}{\\partial x})^2$.",
                  "options": [
                    { "id": "A", "text": "$1 + \\frac{1}{2}(\\frac{\\partial y}{\\partial x})^2$", "isCorrect": true, "explanation": "Standard 1st order binomial expansion." },
                    { "id": "B", "text": "$1 + (\\frac{\\partial y}{\\partial x})^2$", "isCorrect": false, "explanation": "You missed the $1/2$ factor from the square root." }
                  ]
                },
                {
                  "stepText": "So $ds \\approx dx[1 + \\frac{1}{2}(\\frac{\\partial y}{\\partial x})^2]$. The stretch is $ds - dx = \\frac{1}{2}(\\frac{\\partial y}{\\partial x})^2 dx$."
                },
                {
                  "stepText": "Therefore, the potential energy element is $dV = F(ds-dx) = \\frac{1}{2}F(\\frac{\\partial y}{\\partial x})^2 dx$."
                }
              ]
            },
            {
              "id": "s3-example",
              "type": "example",
              "title": "Total Energy Integration",
              "content": "Integrating $dT + dV$ from $0$ to $L$ requires evaluating $\\int_0^L \\sin^2(\\frac{\\pi x}{L}) dx$ and $\\int_0^L \\cos^2(\\frac{\\pi x}{L}) dx$. \n\nBoth integrals equal $L/2$. Substituting $\\omega^2 = F\\pi^2 / \\rho L^2$ leads to the total energy:\n\n$$E = \\frac{1}{4} A^2 \\rho \\omega^2 L$$\n\nEnergy is proportional to the square of the amplitude and square of the frequency."
            },
            {
              "id": "s4-quiz",
              "type": "quiz",
              "title": "Energy Dependence",
              "content": "If you double the amplitude of a wave on a string, what happens to the total energy contained in that wave?",
              "options": [
                { "id": "1", "text": "It doubles.", "isCorrect": false, "explanation": "Look at the $A^2$ term." },
                { "id": "2", "text": "It quadruples.", "isCorrect": true, "explanation": "Because $E \\propto A^2$, $(2A)^2 = 4A^2$, the energy increases by a factor of 4." },
                { "id": "3", "text": "It stays the same.", "isCorrect": false, "explanation": "Energy depends on amplitude." }
              ]
            }
          ]
        },
        {
          "id": "lesson-3-3-4-energy-flow",
          "title": "Energy Flow & Boundary Reflection",
          "description": "Worked Example 13.2 and Exercise 13.10",
          "icon": "ActivitySquare",
          "slides": [
            {
              "id": "s1-theory",
              "type": "theory",
              "title": "Two Strings Interface",
              "content": "Consider two strings of different densities $\\rho_1$ and $\\rho_2$ tied together at $x=0$. \nAn incident wave $y_i$ hits the junction, causing a reflected wave $y_r$ and a transmitted wave $y_t$.\n\nBecause the strings are tied, the position must be continuous: $y_i + y_r = y_t$ at $x=0$.\nBecause the tension $F$ is uniform, the slope must be continuous: $\\partial y_i/\\partial x + \\partial y_r/\\partial x = \\partial y_t/\\partial x$ at $x=0$."
            },
            {
              "id": "s2-proof",
              "type": "proof",
              "title": "Interactive Proof: Reflection Amplitude",
              "content": "Let's find the ratio of reflected amplitude $A_r$ to incident amplitude $A_i$.",
              "interactiveSteps": [
                {
                  "stepText": "From continuity of position at $x=0$, $A_i + A_r = A_t$."
                },
                {
                  "stepText": "From continuity of slope, taking derivatives brings down wave numbers: $k_1 A_i - k_1 A_r = k_2 A_t$."
                },
                {
                  "prompt": "Substitute $A_t = A_i + A_r$ into the slope equation. What do you get?",
                  "stepText": "$k_1(A_i - A_r) = k_2(A_i + A_r)$.",
                  "options": [
                    { "id": "A", "text": "$k_1(A_i - A_r) = k_2(A_i + A_r)$", "isCorrect": true, "explanation": "Correct substitution." },
                    { "id": "B", "text": "$k_1(A_i + A_r) = k_2(A_i - A_r)$", "isCorrect": false, "explanation": "You swapped the signs." }
                  ]
                },
                {
                  "stepText": "Rearrange to solve for $A_r/A_i$: \n$k_1 A_i - k_2 A_i = k_1 A_r + k_2 A_r \\implies A_i(k_1 - k_2) = A_r(k_1 + k_2)$."
                },
                {
                  "stepText": "Result: $\\frac{A_r}{A_i} = \\frac{k_1 - k_2}{k_1 + k_2} = \\frac{v_2 - v_1}{v_2 + v_1}$."
                }
              ]
            },
            {
              "id": "s3-example",
              "type": "example",
              "title": "Worked Example 13.2: Reflection Coefficient",
              "content": "The reflection coefficient $R$ is defined as the ratio of reflected intensity to incident intensity. \nIntensity is proportional to amplitude squared.\n\n$$R = \\frac{I_r}{I_i} = \\frac{A_r^2}{A_i^2} = \\left(\\frac{k_1 - k_2}{k_1 + k_2}\\right)^2$$"
            },
            {
              "id": "s4-quiz",
              "type": "quiz",
              "title": "Exercise 13.10: Knot Mass",
              "content": "If the two strings are joined by a knot of mass $m$, the slope is NO LONGER continuous. The difference in vertical tension forces must now accelerate the mass $m$. What is the new boundary condition at $x=0$?",
              "options": [
                { "id": "1", "text": "$F\\left(\\frac{\\partial y}{\\partial x}|_{0^+} - \\frac{\\partial y}{\\partial x}|_{0^-}\\right) = 0$", "isCorrect": false, "explanation": "This assumes the knot is massless." },
                { "id": "2", "text": "$F\\left(\\frac{\\partial y}{\\partial x}|_{0^+} - \\frac{\\partial y}{\\partial x}|_{0^-}\\right) = m\\frac{\\partial^2 y}{\\partial t^2}|_0$", "isCorrect": true, "explanation": "Newton's Second Law applied to the knot: Net vertical force = mass * acceleration." },
                { "id": "3", "text": "$y(0^+) = -y(0^-)$", "isCorrect": false, "explanation": "The string must still be attached, so position is continuous." }
              ]
            }
          ]
        }
      ]
    }
  ]
};