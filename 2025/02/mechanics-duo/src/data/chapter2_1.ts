import { Section } from '../types';

export const SECTION_2_1: Section = {
  "id": "section-2-1",
  "title": "Section 1: Simple Harmonic Motion",
  "description": "Springs, pendulums, differential equations, and energy in undamped systems.",
  "color": "duo-blue",
  "units": [
    {
      "id": "unit-2-1",
      "title": "Springs & Pendulums",
      "description": "The fundamental equations of motion for basic oscillators.",
      "color": "duo-blue",
      "lessons": [
        {
          "id": "lesson-2-1-1-springs",
          "title": "Mass on a Spring",
          "description": "Deriving SHM from Hooke's Law and the Lagrangian.",
          "icon": "Activity",
          "slides": [
            {
              "id": "s1-theory",
              "type": "theory",
              "title": "The Spring-Mass System",
              "content": "A very simple oscillatory system consists of a mass $m$ connected to a spring of constant $k$ on a frictionless horizontal surface.\n\nThe kinetic energy is $T = \\frac{1}{2}m\\dot{x}^2$ and the potential energy of the spring is $V = \\frac{1}{2}kx^2$.\n\nThe Lagrangian is $L = T - V = \\frac{1}{2}m\\dot{x}^2 - \\frac{1}{2}kx^2$."
            },
            {
              "id": "s2-canvas",
              "type": "theory",
              "title": "Visualization: Spring-Mass",
              "content": "The mass moves back and forth around the equilibrium position ($x=0$), constantly exchanging kinetic and potential energy.",
              "canvasId": "spring-mass"
            },
            {
              "id": "s3-proof",
              "type": "proof",
              "title": "Interactive Derivation: Equation of Motion",
              "content": "Let's derive the equation of motion using Lagrange's equation: $\\frac{d}{dt}\\frac{\\partial L}{\\partial \\dot{x}} - \\frac{\\partial L}{\\partial x} = 0$.",
              "interactiveSteps": [
                {
                  "stepText": "We have $L = \\frac{1}{2}m\\dot{x}^2 - \\frac{1}{2}kx^2$."
                },
                {
                  "prompt": "What is the partial derivative of $L$ with respect to velocity, $\\frac{\\partial L}{\\partial \\dot{x}}$?",
                  "stepText": "$\\frac{\\partial L}{\\partial \\dot{x}} = m\\dot{x}$ (This is the linear momentum).",
                  "options": [
                    { "id": "A", "text": "$m\\dot{x}$", "isCorrect": true, "explanation": "The derivative of $\\frac{1}{2}m\\dot{x}^2$ is $m\\dot{x}$." },
                    { "id": "B", "text": "$-kx$", "isCorrect": false, "explanation": "That's the derivative with respect to $x$, not $\\dot{x}$." }
                  ]
                },
                {
                  "prompt": "What is the partial derivative of $L$ with respect to position, $\\frac{\\partial L}{\\partial x}$?",
                  "stepText": "$\\frac{\\partial L}{\\partial x} = -kx$ (This is the restoring force).",
                  "options": [
                    { "id": "A", "text": "$kx$", "isCorrect": false, "explanation": "Don't forget the minus sign from $L = T - V$." },
                    { "id": "B", "text": "$-kx$", "isCorrect": true, "explanation": "Correct. $V = \\frac{1}{2}kx^2$, so $-V$ gives $-kx$." }
                  ]
                },
                {
                  "stepText": "Putting it together: $\\frac{d}{dt}(m\\dot{x}) - (-kx) = 0 \\implies m\\ddot{x} + kx = 0$."
                },
                {
                  "stepText": "Dividing by $m$ gives the classic Simple Harmonic Motion (SHM) equation: $\\ddot{x} + \\frac{k}{m}x = 0$."
                }
              ]
            },
            {
              "id": "s4-numerical",
              "type": "numerical",
              "title": "Find the Angular Frequency",
              "content": "A mass of $m = 2$ kg is attached to a spring with constant $k = 50$ N/m. \n\nWhat is the angular frequency $\\omega = \\sqrt{k/m}$ in rad/s?",
              "numericAnswer": 5,
              "numericTolerance": 0.1
            },
            {
              "id": "s5-quiz",
              "type": "quiz",
              "title": "Check Your Understanding",
              "content": "What is the defining characteristic of the equation $\\ddot{x} + \\frac{k}{m}x = 0$?",
              "options": [
                { "id": "1", "text": "Acceleration is constant.", "isCorrect": false, "explanation": "Acceleration $\\ddot{x}$ depends on $x$, so it changes continuously." },
                { "id": "2", "text": "Acceleration is proportional to velocity.", "isCorrect": false, "explanation": "It is proportional to position, not velocity." },
                { "id": "3", "text": "Acceleration is negatively proportional to displacement.", "isCorrect": true, "explanation": "$\\ddot{x} = -\\frac{k}{m}x$. This indicates a restoring force always pointing towards equilibrium." }
              ]
            },
            {
              "id": "s6-blank",
              "type": "fill_in_blank",
              "title": "Terminology",
              "content": "A force that always acts to pull a system back toward its equilibrium position is called a ___ force.",
              "blankAnswer": "restoring"
            }
          ]
        },
        {
          "id": "lesson-2-1-2-pendulum",
          "title": "The Simple Pendulum",
          "description": "Small angle approximations and angular SHM.",
          "icon": "Clock",
          "slides": [
            {
              "id": "s1-theory",
              "type": "theory",
              "title": "The Simple Pendulum",
              "content": "A simple pendulum consists of a mass $m$ (the bob) on a massless string of length $l$.\n\nIn polar coordinates, kinetic energy is $T = \\frac{1}{2}ml^2\\dot{\\theta}^2$ and potential energy is $V = -mgl\\cos\\theta$ (relative to the pivot).\n\nThe Lagrangian gives the equation of motion: $ml^2\\ddot{\\theta} + mgl\\sin\\theta = 0$."
            },
            {
              "id": "s2-canvas",
              "type": "theory",
              "title": "Visualization: Pendulum",
              "content": "The pendulum swings back and forth. The restoring force relies on gravity.",
              "canvasId": "pendulum"
            },
            {
              "id": "s3-proof",
              "type": "proof",
              "title": "Interactive Proof: Small Angle Approximation",
              "content": "The equation $ml^2\\ddot{\\theta} + mgl\\sin\\theta = 0$ is non-linear due to the $\\sin\\theta$ term. Let's simplify it.",
              "interactiveSteps": [
                {
                  "stepText": "Divide the entire equation by $ml^2$ to isolate the acceleration term: $\\ddot{\\theta} + \\frac{g}{l}\\sin\\theta = 0$."
                },
                {
                  "prompt": "For small angles ($\\theta \\lesssim 20^\\circ$ or $\\approx 0.35$ rad), what is a valid approximation for $\\sin\\theta$?",
                  "stepText": "Using the Taylor series $\\sin\\theta = \\theta - \\frac{\\theta^3}{3!} + ...$, for small $\\theta$, we can approximate $\\sin\\theta \\approx \\theta$ (in radians).",
                  "options": [
                    { "id": "A", "text": "$\\sin\\theta \\approx 1$", "isCorrect": false, "explanation": "That would be $\\cos\\theta$ for small angles." },
                    { "id": "B", "text": "$\\sin\\theta \\approx \\theta$", "isCorrect": true, "explanation": "This is the standard small-angle approximation." }
                  ]
                },
                {
                  "stepText": "Substituting this approximation gives: $\\ddot{\\theta} + \\frac{g}{l}\\theta = 0$."
                },
                {
                  "prompt": "Notice this has the exact same form as the spring equation $\\ddot{x} + \\frac{k}{m}x = 0$. What is the equivalent 'angular frequency squared' ($\\omega^2$) for the pendulum?",
                  "stepText": "By direct comparison, $\\omega^2 = \\frac{g}{l}$, so $\\omega = \\sqrt{\\frac{g}{l}}$.",
                  "options": [
                    { "id": "A", "text": "$g/l$", "isCorrect": true, "explanation": "Yes, $\\frac{g}{l}$ takes the place of $\\frac{k}{m}$." },
                    { "id": "B", "text": "$l/g$", "isCorrect": false, "explanation": "It's the coefficient in front of $\\theta$." }
                  ]
                }
              ]
            },
            {
              "id": "s4-numerical",
              "type": "numerical",
              "title": "Calculate Pendulum Frequency",
              "content": "A simple pendulum is located on Earth where $g = 9.8$ m/s$^2$. \nIf the string length $l = 0.2$ meters, calculate the angular frequency $\\omega$ in rad/s.",
              "numericAnswer": 7,
              "numericTolerance": 0.1
            },
            {
              "id": "s5-quiz",
              "type": "quiz",
              "title": "Pendulum Mass",
              "content": "According to the derived equation $\\ddot{\\theta} + \\frac{g}{l}\\theta = 0$, how does changing the mass of the pendulum bob affect its period?",
              "options": [
                { "id": "1", "text": "A heavier mass increases the period.", "isCorrect": false, "explanation": "Look closely at the equation." },
                { "id": "2", "text": "A heavier mass decreases the period.", "isCorrect": false, "explanation": "Does mass appear in the final equation?" },
                { "id": "3", "text": "Mass has no effect on the period.", "isCorrect": true, "explanation": "Mass $m$ canceled out entirely! Only gravity $g$ and length $l$ matter." }
              ]
            },
            {
              "id": "s6-blank",
              "type": "fill_in_blank",
              "title": "Approximations",
              "content": "To reduce the pendulum equation to simple harmonic motion, we must use the ___ angle approximation.",
              "blankAnswer": "small"
            }
          ]
        },
        {
          "id": "lesson-2-1-3-diff-eqs",
          "title": "Solving the Differential Equation",
          "description": "Using auxiliary equations to find the general solution.",
          "icon": "FunctionSquare",
          "slides": [
            {
              "id": "s1-theory",
              "type": "theory",
              "title": "Linear Homogeneous Equations",
              "content": "An equation like $m\\ddot{x} + kx = 0$ is a second-order linear homogeneous differential equation with constant coefficients.\n\nTo solve it, we guess a solution of the form $x = e^{pt}$. \nSubstituting $x = e^{pt}$ and $\\ddot{x} = p^2 e^{pt}$ gives:\n$$mp^2 e^{pt} + k e^{pt} = 0$$"
            },
            {
              "id": "s2-example",
              "type": "example",
              "title": "The Auxiliary Equation",
              "content": "Dividing by $e^{pt}$, we get the **auxiliary equation**:\n$$mp^2 + k = 0$$\n\nSolving for $p$ gives $p = \\pm \\sqrt{-\\frac{k}{m}} = \\pm i\\sqrt{\\frac{k}{m}} = \\pm i\\omega$.\nThus we have two solutions: $x_1 = e^{i\\omega t}$ and $x_2 = e^{-i\\omega t}$."
            },
            {
              "id": "s3-proof",
              "type": "proof",
              "title": "Interactive Proof: Euler's Formula",
              "content": "The general solution is a linear combination: $x(t) = C_1 e^{i\\omega t} + C_2 e^{-i\\omega t}$. Let's convert this to sines and cosines.",
              "interactiveSteps": [
                {
                  "stepText": "Euler's formula states: $e^{\\pm i\\theta} = \\cos\\theta \\pm i\\sin\\theta$."
                },
                {
                  "prompt": "Substitute Euler's formula into $x(t)$. Group the cosine and sine terms. What do you get for the coefficient of $\\cos\\omega t$?",
                  "stepText": "$x = C_1(\\cos\\omega t + i\\sin\\omega t) + C_2(\\cos\\omega t - i\\sin\\omega t) = (C_1 + C_2)\\cos\\omega t + i(C_1 - C_2)\\sin\\omega t$.",
                  "options": [
                    { "id": "A", "text": "$(C_1 + C_2)$", "isCorrect": true, "explanation": "Correct. Both exponential terms contribute a positive cosine." },
                    { "id": "B", "text": "$(C_1 - C_2)$", "isCorrect": false, "explanation": "That is the coefficient for the imaginary sine term." }
                  ]
                },
                {
                  "stepText": "Let $A_1 = C_1 + C_2$ and $A_2 = i(C_1 - C_2)$. The solution is $x(t) = A_1\\cos\\omega t + A_2\\sin\\omega t$."
                },
                {
                  "stepText": "By trigonometric identities, this can also be written in the very convenient form: $x(t) = A\\cos(\\omega t + \\beta)$ or $x(t) = x_0\\sin(\\omega t + \\phi)$."
                }
              ]
            },
            {
              "id": "s4-numerical",
              "type": "numerical",
              "title": "Period Calculation",
              "content": "If the auxiliary equation yields $p = \\pm 3.14i$, then $\\omega = 3.14$ rad/s.\n\nThe period of oscillation is $P = \\frac{2\\pi}{\\omega}$. Calculate the period $P$ (use $\\pi \\approx 3.14$).",
              "numericAnswer": 2,
              "numericTolerance": 0.05
            },
            {
              "id": "s5-quiz",
              "type": "quiz",
              "title": "Superposition Principle",
              "content": "Why are we allowed to just add $C_1 e^{i\\omega t}$ and $C_2 e^{-i\\omega t}$ together to get a general solution?",
              "options": [
                { "id": "1", "text": "Because it's a first-order equation.", "isCorrect": false, "explanation": "It's a second-order equation." },
                { "id": "2", "text": "Because the differential equation is linear and homogeneous.", "isCorrect": true, "explanation": "For linear homogeneous equations, the sum of any two solutions is also a solution." },
                { "id": "3", "text": "Because energy is conserved.", "isCorrect": false, "explanation": "While true, superposition is a mathematical property of the differential equation." }
              ]
            },
            {
              "id": "s6-blank",
              "type": "fill_in_blank",
              "title": "Equation Roots",
              "content": "The algebraic equation $mp^2 + k = 0$ is known as the ___ equation.",
              "blankAnswer": "auxiliary"
            }
          ]
        }
      ]
    },
    {
      "id": "unit-2-2",
      "title": "Energy & Solving Problems",
      "description": "Energy conservation and working through specific examples.",
      "color": "duo-blue",
      "lessons": [
        {
          "id": "lesson-2-2-1-energy",
          "title": "Energy of an Undamped Oscillator",
          "description": "Kinetic, Potential, and Total Energy.",
          "icon": "Zap",
          "slides": [
            {
              "id": "s1-theory",
              "type": "theory",
              "title": "Energy Components",
              "content": "The total energy $E = T + V$ for an undamped oscillator is constant.\n\n$$E = \\frac{1}{2}m\\dot{x}^2 + \\frac{1}{2}kx^2$$\n\nIf we substitute the solution $x = A\\sin(\\omega t + \\beta)$ and $\\dot{x} = A\\omega\\cos(\\omega t + \\beta)$, we can find the total energy."
            },
            {
              "id": "s2-example",
              "type": "example",
              "title": "Deriving Total Energy",
              "content": "$E = \\frac{1}{2}m(A\\omega\\cos(\\omega t + \\beta))^2 + \\frac{1}{2}k(A\\sin(\\omega t + \\beta))^2$\n\nRecall that $\\omega^2 = k/m$, so $m\\omega^2 = k$. Substituting this in:\n$E = \\frac{1}{2}kA^2\\cos^2(...) + \\frac{1}{2}kA^2\\sin^2(...)$\n\n$E = \\frac{1}{2}kA^2(\\cos^2 + \\sin^2) = \\frac{1}{2}kA^2$"
            },
            {
              "id": "s3-proof",
              "type": "proof",
              "title": "Interactive Proof: Velocity vs Position",
              "content": "Let's use energy to relate position $x_0$ and velocity $v_0$ at any instant.",
              "interactiveSteps": [
                {
                  "stepText": "Total energy is $E = \\frac{1}{2}mv_0^2 + \\frac{1}{2}kx_0^2$ at some initial time."
                },
                {
                  "prompt": "If the amplitude is $A$, we know maximum potential energy occurs when velocity is zero, and $E = \\frac{1}{2}kA^2$. Set these equal.",
                  "stepText": "$\\frac{1}{2}kA^2 = \\frac{1}{2}mv_0^2 + \\frac{1}{2}kx_0^2$.",
                  "options": [
                    { "id": "A", "text": "$\\frac{1}{2}kA^2 = \\frac{1}{2}mv_0^2 + \\frac{1}{2}kx_0^2$", "isCorrect": true, "explanation": "Energy is conserved, so energy at amplitude equals energy at any point." },
                    { "id": "B", "text": "$A = x_0 + v_0$", "isCorrect": false, "explanation": "Energies sum quadratically, not linearly." }
                  ]
                },
                {
                  "stepText": "Multiply by 2 and solve for $v_0^2$: $mv_0^2 = kA^2 - kx_0^2 = k(A^2 - x_0^2)$."
                },
                {
                  "prompt": "Take the square root to find $v_0$.",
                  "stepText": "$v_0 = \\pm\\sqrt{\\frac{k}{m}(A^2 - x_0^2)} = \\pm\\omega\\sqrt{A^2 - x_0^2}$.",
                  "options": [
                    { "id": "A", "text": "$v_0 = \\pm\\omega\\sqrt{A^2 - x_0^2}$", "isCorrect": true, "explanation": "Correct. This gives velocity at any position $x_0$." },
                    { "id": "B", "text": "$v_0 = \\pm\\omega(A - x_0)$", "isCorrect": false, "explanation": "You cannot distribute a square root over subtraction." }
                  ]
                }
              ]
            },
            {
              "id": "s4-numerical",
              "type": "numerical",
              "title": "Calculate Total Energy",
              "content": "A spring with $k = 10$ N/m oscillates with an amplitude $A = 2$ meters.\n\nCalculate the total energy $E$ of the system.",
              "numericAnswer": 20,
              "numericTolerance": 0.1
            },
            {
              "id": "s5-quiz",
              "type": "quiz",
              "title": "Energy Dependence",
              "content": "The total energy of a simple harmonic oscillator is proportional to:",
              "options": [
                { "id": "1", "text": "The amplitude.", "isCorrect": false, "explanation": "It scales faster than linearly." },
                { "id": "2", "text": "The square of the amplitude.", "isCorrect": true, "explanation": "$E = \\frac{1}{2}kA^2$." },
                { "id": "3", "text": "The inverse of the amplitude.", "isCorrect": false, "explanation": "It grows as amplitude grows." }
              ]
            },
            {
              "id": "s6-blank",
              "type": "fill_in_blank",
              "title": "Conservation",
              "content": "For an undamped oscillator, the total mechanical energy remains ___ over time.",
              "blankAnswer": "constant"
            }
          ]
        },
        {
          "id": "lesson-2-2-2-worked-examples",
          "title": "Worked Examples 11.1 & 11.2",
          "description": "Applying the concepts to specific numerical problems.",
          "icon": "PenTool",
          "slides": [
            {
              "id": "s1-q",
              "type": "example_q",
              "title": "Example 11.1: Differential Eq",
              "content": "Solve the differential equation $\\frac{d^2x}{dt^2} - 4x = 0$, given the initial conditions $x(0) = 0$ and $\\dot{x}(0) = 3$ m/s.\n\n*Notice that this is NOT the SHM equation because the coefficient of $x$ is negative!*"
            },
            {
              "id": "s2-sol",
              "type": "solution",
              "title": "Interactive Solution: Example 11.1",
              "content": "We use the auxiliary equation method.",
              "interactiveSteps": [
                {
                  "stepText": "Substitute $x = e^{pt}$. This gives $p^2 - 4 = 0$."
                },
                {
                  "prompt": "What are the roots for $p$?",
                  "stepText": "$p = \\pm 2$. Notice these are real roots, not imaginary.",
                  "options": [
                    { "id": "A", "text": "$p = \\pm 2i$", "isCorrect": false, "explanation": "The equation was $p^2 - 4 = 0$, so $p^2 = 4$, which has real roots." },
                    { "id": "B", "text": "$p = \\pm 2$", "isCorrect": true, "explanation": "Correct. $2^2 = 4$ and $(-2)^2 = 4$." }
                  ]
                },
                {
                  "stepText": "The general solution is $x(t) = C_1 e^{2t} + C_2 e^{-2t}$."
                },
                {
                  "prompt": "Apply $x(0) = 0$. What relationship between $C_1$ and $C_2$ does this give?",
                  "stepText": "$0 = C_1 e^0 + C_2 e^0 \implies C_2 = -C_1$. So $x(t) = C_1(e^{2t} - e^{-2t})$.",
                  "options": [
                    { "id": "A", "text": "$C_1 = C_2$", "isCorrect": false, "explanation": "Then $x(0)$ would be $2C_1$, not 0." },
                    { "id": "B", "text": "$C_2 = -C_1$", "isCorrect": true, "explanation": "Correct, they must cancel out at $t=0$." }
                  ]
                },
                {
                  "stepText": "Apply $\\dot{x}(0) = 3$. The derivative is $\\dot{x}(t) = 2C_1 e^{2t} + 2C_1 e^{-2t}$. At $t=0$, $4C_1 = 3 \implies C_1 = 3/4$."
                },
                {
                  "stepText": "Final Solution: $x(t) = \\frac{3}{4}(e^{2t} - e^{-2t}) = \\frac{3}{2}\\sinh(2t)$."
                }
              ]
            },
            {
              "id": "s3-q",
              "type": "example_q",
              "title": "Example 11.2: Initial Velocity",
              "content": "A mass of 0.25 kg is attached to a spring of force constant 1.0 N/m. The mass is displaced 0.15 m from equilibrium and released from rest ($v_0 = 0$).\n\nEvaluate the total energy. What is the maximum velocity?"
            },
            {
              "id": "s4-sol",
              "type": "solution",
              "title": "Interactive Solution: Example 11.2",
              "content": "Let's find Energy and Velocity.",
              "interactiveSteps": [
                {
                  "prompt": "Since it is released from rest, what is the initial kinetic energy?",
                  "stepText": "Initial KE is 0.",
                  "options": [
                    { "id": "A", "text": "0", "isCorrect": true, "explanation": "$v_0 = 0$ means kinetic energy is zero." },
                    { "id": "B", "text": "1/2 m v^2", "isCorrect": false, "explanation": "It's released from rest, so $v$ is 0." }
                  ]
                },
                {
                  "stepText": "Total Energy $E = \\frac{1}{2}kx_0^2 = \\frac{1}{2}(1.0)(0.15)^2 = 0.01125$ Joules."
                },
                {
                  "prompt": "Maximum velocity occurs when $x = 0$ and all energy is kinetic. How do we find $v_{max}$?",
                  "stepText": "$E = \\frac{1}{2}mv_{max}^2 \\implies v_{max} = \\sqrt{2E/m}$.",
                  "options": [
                    { "id": "A", "text": "$v_{max} = E/m$", "isCorrect": false, "explanation": "Don't forget the $1/2$ and the square root." },
                    { "id": "B", "text": "$v_{max} = \\sqrt{2E/m}$", "isCorrect": true, "explanation": "Rearranging $1/2 m v^2 = E$ correctly." }
                  ]
                },
                {
                  "stepText": "$v_{max} = \\sqrt{2(0.01125)/0.25} = \\sqrt{0.09} = 0.3$ m/s."
                }
              ]
            }
          ]
        },
        {
          "id": "lesson-2-2-3-exercises",
          "title": "Chapter Exercises",
          "description": "Exercises 11.1, 11.2, 11.3",
          "icon": "Target",
          "slides": [
            {
              "id": "s1-numerical",
              "type": "numerical",
              "title": "Exercise 11.2: Find the frequency",
              "content": "A certain spring stretches 6 cm (0.06 m) when a force of 6 N is applied to it. \nCalculate the spring constant $k$ (in N/m).",
              "numericAnswer": 100,
              "numericTolerance": 1
            },
            {
              "id": "s2-quiz",
              "type": "quiz",
              "title": "Exercise 11.2 Continued",
              "content": "A 5 kg mass is attached to this spring ($k=100$ N/m). It is stretched 3 cm (0.03 m) and released with a push so its initial speed is -6 cm/s (-0.06 m/s).\n\nWhat is the angular frequency $\\omega$?",
              "options": [
                { "id": "1", "text": "20 rad/s", "isCorrect": false, "explanation": "You forgot to take the square root of $k/m$." },
                { "id": "2", "text": "4.47 rad/s", "isCorrect": true, "explanation": "$\\omega = \\sqrt{k/m} = \\sqrt{100/5} = \\sqrt{20} \\approx 4.47$ rad/s." },
                { "id": "3", "text": "0.22 rad/s", "isCorrect": false, "explanation": "That's $\\sqrt{m/k}$." }
              ]
            },
            {
              "id": "s3-q",
              "type": "example_q",
              "title": "Exercise 11.3: Find Amplitude",
              "content": "At time $t=0$, a simple harmonic oscillator with $\\omega = 2$ rad/s is at $x=3$ cm and has a speed of $v=1$ cm/s.\n\nWe know $x(t) = C_1\\cos\\omega t + C_2\\sin\\omega t$. Let's find $C_1$ and $C_2$."
            },
            {
              "id": "s4-sol",
              "type": "solution",
              "title": "Interactive Solution",
              "content": "Finding the coefficients from initial conditions.",
              "interactiveSteps": [
                {
                  "stepText": "We have $x(t) = C_1\\cos(2t) + C_2\\sin(2t)$."
                },
                {
                  "prompt": "At $t=0$, $x=3$. What does this tell us about $C_1$?",
                  "stepText": "Since $\\sin(0) = 0$ and $\\cos(0) = 1$, we get $x(0) = C_1 = 3$.",
                  "options": [
                    { "id": "A", "text": "$C_1 = 3$", "isCorrect": true, "explanation": "Direct substitution at t=0 isolates $C_1$." },
                    { "id": "B", "text": "$C_2 = 3$", "isCorrect": false, "explanation": "$C_2$ is tied to the sine term, which vanishes at t=0." }
                  ]
                },
                {
                  "stepText": "Now find velocity: $\\dot{x}(t) = -2C_1\\sin(2t) + 2C_2\\cos(2t)$."
                },
                {
                  "prompt": "At $t=0$, $\\dot{x} = 1$. What is $C_2$?",
                  "stepText": "$\\dot{x}(0) = 2C_2 = 1 \\implies C_2 = 1/2$.",
                  "options": [
                    { "id": "A", "text": "$C_2 = 1/2$", "isCorrect": true, "explanation": "Correct!" },
                    { "id": "B", "text": "$C_2 = 1$", "isCorrect": false, "explanation": "You forgot the chain rule factor of $\\omega=2$ coming out of the derivative." }
                  ]
                },
                {
                  "stepText": "Final Equation: $x(t) = 3\\cos(2t) + 0.5\\sin(2t)$."
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};