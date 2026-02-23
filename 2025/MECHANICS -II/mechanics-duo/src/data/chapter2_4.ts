import { Section } from '../types';

export const SECTION_2_4: Section = {
  "id": "section-2-4",
  "title": "Section 4: Comprehensive Oscillator Problems",
  "description": "Complete worked examples and chapter exercises covering SHM, Damping, and Inhomogeneous Forcing.",
  "color": "duo-blue",
  "units": [
    {
      "id": "unit-2-4-1",
      "title": "Fundamentals of SHM",
      "description": "Trigonometric equivalences and initial condition derivations.",
      "color": "duo-blue",
      "lessons": [
        {
          "id": "lesson-2-4-1-ex11-10",
          "title": "Exercise 11.10: Sine and Cosine Equivalence",
          "description": "Proving different forms of the SHM general solution.",
          "icon": "Repeat",
          "slides": [
            {
              "id": "s1-q",
              "type": "example_q",
              "title": "Exercise 11.10",
              "content": "Show mathematically that the single-phase expression $x = x_0 \\sin(\\omega t + \\beta)$ is perfectly equivalent to the linear combination $x = C_1 \\cos \\omega t + C_2 \\sin \\omega t$."
            },
            {
              "id": "s2-sol",
              "type": "solution",
              "title": "Interactive Solution",
              "content": "We will use trigonometric angle addition formulas to expand the first expression.",
              "interactiveSteps": [
                {
                  "stepText": "Recall the sine addition identity: $\\sin(A + B) = \\sin A \\cos B + \\cos A \\sin B$."
                },
                {
                  "prompt": "Apply this identity to expand $\\sin(\\omega t + \\beta)$. What do you get?",
                  "stepText": "$\\sin(\\omega t + \\beta) = \\sin \\omega t \\cos \\beta + \\cos \\omega t \\sin \\beta$",
                  "options": [
                    { "id": "A", "text": "$\\sin \\omega t \\cos \\beta + \\cos \\omega t \\sin \\beta$", "isCorrect": true, "explanation": "Correct application of the angle sum identity." },
                    { "id": "B", "text": "$\\sin \\omega t \\sin \\beta - \\cos \\omega t \\cos \\beta$", "isCorrect": false, "explanation": "This resembles the cosine addition formula." }
                  ]
                },
                {
                  "stepText": "Multiply the expansion by $x_0$: $x(t) = (x_0 \\cos \\beta)\\sin \\omega t + (x_0 \\sin \\beta)\\cos \\omega t$."
                },
                {
                  "prompt": "By matching this to $C_1 \\cos \\omega t + C_2 \\sin \\omega t$, what are $C_1$ and $C_2$?",
                  "stepText": "$C_1 = x_0 \\sin \\beta$ and $C_2 = x_0 \\cos \\beta$.",
                  "options": [
                    { "id": "A", "text": "$C_1 = x_0 \\sin \\beta$, $C_2 = x_0 \\cos \\beta$", "isCorrect": true, "explanation": "Matching the coefficient of $\\cos \\omega t$ to $C_1$ and $\\sin \\omega t$ to $C_2$." },
                    { "id": "B", "text": "$C_1 = x_0 \\cos \\beta$, $C_2 = x_0 \\sin \\beta$", "isCorrect": false, "explanation": "Look closely at which trig function corresponds to which constant." }
                  ]
                }
              ]
            },
            {
              "id": "s3-quiz",
              "type": "quiz",
              "title": "Understanding Constants",
              "content": "In the form $x = C_1 \\cos \\omega t + C_2 \\sin \\omega t$, how many independent arbitrary constants are there?",
              "options": [
                { "id": "1", "text": "One", "isCorrect": false, "explanation": "There are two separate terms." },
                { "id": "2", "text": "Two", "isCorrect": true, "explanation": "A second-order differential equation requires two independent constants (like $C_1$ and $C_2$, or $x_0$ and $\\beta$)." },
                { "id": "3", "text": "Three", "isCorrect": false, "explanation": "$\\omega$ is defined by the physical system, not arbitrary." }
              ]
            },
            {
              "id": "s4-quiz",
              "type": "quiz",
              "title": "Relating Amplitudes",
              "content": "Given $C_1 = x_0 \\sin \\beta$ and $C_2 = x_0 \\cos \\beta$, what is the relationship for the total amplitude $x_0$ in terms of $C_1$ and $C_2$?",
              "options": [
                { "id": "1", "text": "$x_0 = C_1 + C_2$", "isCorrect": false, "explanation": "Try squaring them and adding." },
                { "id": "2", "text": "$x_0 = \\sqrt{C_1^2 + C_2^2}$", "isCorrect": true, "explanation": "$C_1^2 + C_2^2 = x_0^2(\\sin^2\\beta + \\cos^2\\beta) = x_0^2$." },
                { "id": "3", "text": "$x_0 = C_1 / C_2$", "isCorrect": false, "explanation": "That gives $\\tan \\beta$." }
              ]
            },
            {
              "id": "s5-blank",
              "type": "fill_in_blank",
              "title": "Phase Shift",
              "content": "The ratio $C_1 / C_2$ evaluates to $x_0 \\sin \\beta / x_0 \\cos \\beta$, which simplifies to the trigonometric function ___ of $\\beta$.",
              "blankAnswer": "tan"
            }
          ]
        },
        {
          "id": "lesson-2-4-1-ex11-11",
          "title": "Exercise 11.11: Finding the Amplitude",
          "description": "Using initial conditions to evaluate amplitude.",
          "icon": "Target",
          "slides": [
            {
              "id": "s1-q",
              "type": "example_q",
              "title": "Exercise 11.11",
              "content": "A spring of constant $10$ N/m is connected to a mass of $2$ kg. It is initially at rest in an unstretched position ($x=0$). It is given an initial speed of $3$ m/s.\n\nWhat is the amplitude of the oscillation?"
            },
            {
              "id": "s2-sol",
              "type": "solution",
              "title": "Interactive Solution",
              "content": "We can solve this using either kinematics or energy conservation. Let's use kinematics.",
              "interactiveSteps": [
                {
                  "prompt": "First, calculate the natural angular frequency $\\omega$.",
                  "stepText": "$\\omega = \\sqrt{k/m} = \\sqrt{10/2} = \\sqrt{5}$ rad/s.",
                  "options": [
                    { "id": "A", "text": "$\\sqrt{5}$ rad/s", "isCorrect": true, "explanation": "Correct. $\\omega = \\sqrt{k/m}$." },
                    { "id": "B", "text": "$5$ rad/s", "isCorrect": false, "explanation": "Don't forget the square root." }
                  ]
                },
                {
                  "stepText": "The general equation is $x(t) = A \\sin(\\omega t + \\phi)$. Since $x(0) = 0$, $A \\sin(\\phi) = 0 \\implies \\phi = 0$. So $x(t) = A \\sin(\\omega t)$."
                },
                {
                  "prompt": "Take the derivative to find the velocity equation $v(t)$. What is $v(t)$?",
                  "stepText": "$v(t) = A\\omega \\cos(\\omega t)$.",
                  "options": [
                    { "id": "A", "text": "$v(t) = A\\omega \\cos(\\omega t)$", "isCorrect": true, "explanation": "The chain rule brings $\\omega$ outside." },
                    { "id": "B", "text": "$v(t) = -A\\omega \\cos(\\omega t)$", "isCorrect": false, "explanation": "Derivative of sine is positive cosine." }
                  ]
                },
                {
                  "stepText": "At $t=0$, the velocity is $v(0) = A\\omega \\cos(0) = A\\omega$."
                },
                {
                  "prompt": "We are given $v(0) = 3$. Solve for $A$.",
                  "stepText": "$A = \\frac{v(0)}{\\omega} = \\frac{3}{\\sqrt{5}} \\approx 1.34$ m.",
                  "options": [
                    { "id": "A", "text": "$1.34$ m", "isCorrect": true, "explanation": "$3 / 2.236 \\approx 1.34$ m." },
                    { "id": "B", "text": "$6.7$ m", "isCorrect": false, "explanation": "You multiplied instead of divided." }
                  ]
                }
              ]
            },
            {
              "id": "s3-quiz",
              "type": "quiz",
              "title": "Energy Method",
              "content": "If we had used energy conservation instead, the total initial energy $E$ would be:",
              "options": [
                { "id": "1", "text": "$E = \\frac{1}{2}mv_0^2$", "isCorrect": true, "explanation": "Since initial position is unstretched ($x=0$), all energy is purely kinetic initially." },
                { "id": "2", "text": "$E = \\frac{1}{2}kx_0^2$", "isCorrect": false, "explanation": "Initial stretch is 0, so potential energy is 0." },
                { "id": "3", "text": "$E = 0$", "isCorrect": false, "explanation": "It has an initial velocity, so it has energy." }
              ]
            },
            {
              "id": "s4-quiz",
              "type": "quiz",
              "title": "Checking Energy Balance",
              "content": "Equating the initial kinetic energy to the maximum potential energy gives $\\frac{1}{2}mv_0^2 = \\frac{1}{2}kA^2$. Solving for A gives:",
              "options": [
                { "id": "1", "text": "$A = v_0 \\sqrt{m/k}$", "isCorrect": true, "explanation": "This perfectly matches $v_0 / \\omega$!" },
                { "id": "2", "text": "$A = v_0 \\sqrt{k/m}$", "isCorrect": false, "explanation": "The ratio is inverted." }
              ]
            },
            {
              "id": "s5-numerical",
              "type": "numerical",
              "title": "Calculate Maximum Force",
              "content": "At the maximum amplitude $A = 1.3416$ m, what is the magnitude of the maximum restoring force in Newtons? ($k=10$ N/m)",
              "numericAnswer": 13.416,
              "numericTolerance": 0.1
            }
          ]
        },
        {
          "id": "lesson-2-4-1-ex11-12",
          "title": "Exercise 11.12: Complex Constants",
          "description": "Evaluating the independence of complex constants.",
          "icon": "Hash",
          "slides": [
            {
              "id": "s1-q",
              "type": "example_q",
              "title": "Exercise 11.12",
              "content": "The complex constants $C_1$ and $C_2$ can be written in the form $C_1 = a_1 + ib_1$ and $C_2 = a_2 + ib_2$. But there can only be two independent constants.\n\nUsing Equation (11.14) where $C_1 = \\frac{1}{2}A e^{i\\theta}$ and $C_2 = \\frac{1}{2}A e^{-i\\theta}$, show that $a_2 = a_1$ and $b_2 = -b_1$."
            },
            {
              "id": "s2-sol",
              "type": "solution",
              "title": "Interactive Solution",
              "content": "We will use Euler's formula to expand the exponentials.",
              "interactiveSteps": [
                {
                  "prompt": "Apply Euler's formula $e^{\\pm i\\theta} = \\cos \\theta \\pm i \\sin \\theta$ to expand $C_1 = \\frac{1}{2}A e^{i\\theta}$.",
                  "stepText": "$C_1 = \\frac{1}{2}A (\\cos \\theta + i \\sin \\theta)$.",
                  "options": [
                    { "id": "A", "text": "$C_1 = \\frac{1}{2}A (\\cos \\theta + i \\sin \\theta)$", "isCorrect": true, "explanation": "Correct expansion for positive exponent." },
                    { "id": "B", "text": "$C_1 = \\frac{1}{2}A (\\sin \\theta + i \\cos \\theta)$", "isCorrect": false, "explanation": "Euler's formula places 'i' with the sine." }
                  ]
                },
                {
                  "stepText": "Expanding $C_2 = \\frac{1}{2}A e^{-i\\theta}$ yields $C_2 = \\frac{1}{2}A (\\cos \\theta - i \\sin \\theta)$."
                },
                {
                  "prompt": "Compare this with $C_1 = a_1 + ib_1$. What is $a_1$ and $b_1$?",
                  "stepText": "$a_1 = \\frac{1}{2}A \\cos \\theta$ and $b_1 = \\frac{1}{2}A \\sin \\theta$.",
                  "options": [
                    { "id": "A", "text": "$a_1 = \\frac{1}{2}A \\cos \\theta$, $b_1 = \\frac{1}{2}A \\sin \\theta$", "isCorrect": true, "explanation": "Just splitting real and imaginary parts." },
                    { "id": "B", "text": "$a_1 = \\frac{1}{2}A \\sin \\theta$, $b_1 = \\frac{1}{2}A \\cos \\theta$", "isCorrect": false, "explanation": "Match the real part with cosine." }
                  ]
                },
                {
                  "stepText": "Comparing $C_2$ with $C_2 = a_2 + ib_2$ yields $a_2 = \\frac{1}{2}A \\cos \\theta$ and $b_2 = -\\frac{1}{2}A \\sin \\theta$."
                },
                {
                  "stepText": "Thus, substituting $a_1$ and $b_1$, we clearly see $a_2 = a_1$ and $b_2 = -b_1$. They are complex conjugates!"
                }
              ]
            },
            {
              "id": "s3-quiz",
              "type": "quiz",
              "title": "Complex Conjugates",
              "content": "The relationship $a_2 = a_1$ and $b_2 = -b_1$ means that the complex constants $C_1$ and $C_2$ must be:",
              "options": [
                { "id": "1", "text": "Identical", "isCorrect": false, "explanation": "The imaginary parts have opposite signs." },
                { "id": "2", "text": "Complex conjugates", "isCorrect": true, "explanation": "By definition, if $Z = x + iy$, its conjugate is $Z^* = x - iy$." },
                { "id": "3", "text": "Orthogonal", "isCorrect": false, "explanation": "This describes vectors." }
              ]
            },
            {
              "id": "s4-quiz",
              "type": "quiz",
              "title": "Why Conjugates?",
              "content": "Why is it physically necessary for $C_1$ and $C_2$ to be complex conjugates of each other in the general solution $x(t) = C_1 e^{i\\omega t} + C_2 e^{-i\\omega t}$?",
              "options": [
                { "id": "1", "text": "To ensure the final displacement $x(t)$ is a purely real number.", "isCorrect": true, "explanation": "When you add a complex number and its conjugate, the imaginary parts cancel out, leaving a strictly real physical position." },
                { "id": "2", "text": "To satisfy energy conservation.", "isCorrect": false, "explanation": "While true overall, the mathematical reason is to ensure real-valued output." },
                { "id": "3", "text": "To prevent resonance.", "isCorrect": false, "explanation": "Resonance is about forcing functions, not homogeneous constants." }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "unit-2-4-2",
      "title": "Damping Variations",
      "description": "Analyzing different damping conditions mathematically.",
      "color": "duo-blue",
      "lessons": [
        {
          "id": "lesson-2-4-2-ex11-13",
          "title": "Exercise 11.13: Anti-Damping",
          "description": "Solving non-standard signs in differential equations.",
          "icon": "Activity",
          "slides": [
            {
              "id": "s1-q",
              "type": "example_q",
              "title": "Exercise 11.13",
              "content": "Obtain the general solution of the following differential equations (assume $m, b, k > 0$):\n(a) $m\\ddot{x} + b\\dot{x} - kx = 0$\n(b) $m\\ddot{x} - b\\dot{x} + kx = 0$"
            },
            {
              "id": "s2-sol",
              "type": "solution",
              "title": "Interactive Solution for (a)",
              "content": "Let's analyze $m\\ddot{x} + b\\dot{x} - kx = 0$. Note the negative spring constant!",
              "interactiveSteps": [
                {
                  "stepText": "The auxiliary equation is $mp^2 + bp - k = 0$."
                },
                {
                  "prompt": "Using the quadratic formula, what is the expression under the square root (the discriminant)?",
                  "stepText": "$\\Delta = b^2 - 4(m)(-k) = b^2 + 4mk$.",
                  "options": [
                    { "id": "A", "text": "$b^2 - 4mk$", "isCorrect": false, "explanation": "The 'c' term is $-k$, so $-4ac$ becomes $+4mk$." },
                    { "id": "B", "text": "$b^2 + 4mk$", "isCorrect": true, "explanation": "Correct. Notice this guarantees the square root is always positive!" }
                  ]
                },
                {
                  "prompt": "Since $b^2 + 4mk > 0$, the roots $p_1$ and $p_2$ are strictly real. What does this mean for the physical motion?",
                  "stepText": "Because the roots are real, the solution $x(t) = C_1 e^{p_1 t} + C_2 e^{p_2 t}$ does not contain sines or cosines. It does not oscillate.",
                  "options": [
                    { "id": "A", "text": "It oscillates indefinitely.", "isCorrect": false, "explanation": "Real roots mean exponential growth/decay, not oscillation." },
                    { "id": "B", "text": "It does not oscillate.", "isCorrect": true, "explanation": "Correct." }
                  ]
                },
                {
                  "stepText": "Furthermore, one root $p = \\frac{-b + \\sqrt{b^2 + 4mk}}{2m}$ is strictly positive because $\\sqrt{b^2 + 4mk} > b$. Thus, $e^{p t}$ grows exponentially towards infinity. (This makes sense: a repulsive spring pushes the mass away forever)."
                }
              ]
            },
            {
              "id": "s3-quiz",
              "type": "quiz",
              "title": "Part (b): Negative Damping",
              "content": "Now look at equation (b): $m\\ddot{x} - b\\dot{x} + kx = 0$. Here the damping term is negative. What are the roots of its auxiliary equation $mp^2 - bp + k = 0$?",
              "options": [
                { "id": "1", "text": "$p = \\frac{b \\pm \\sqrt{b^2 - 4mk}}{2m}$", "isCorrect": true, "explanation": "The $-B$ in the quadratic formula flips the sign of the $-b$ term to positive." },
                { "id": "2", "text": "$p = \\frac{-b \\pm \\sqrt{b^2 - 4mk}}{2m}$", "isCorrect": false, "explanation": "Watch the leading sign." }
              ]
            },
            {
              "id": "s4-quiz",
              "type": "quiz",
              "title": "Physical Interpretation of (b)",
              "content": "If $b^2 < 4mk$, the roots for equation (b) are complex, yielding $p = \\gamma \\pm i\\omega_1$. What does the positive real part $\\gamma$ imply?",
              "options": [
                { "id": "1", "text": "The amplitude decays to zero.", "isCorrect": false, "explanation": "That would require a negative exponent $-\\gamma t$." },
                { "id": "2", "text": "The amplitude grows exponentially while oscillating.", "isCorrect": true, "explanation": "The solution is $e^{+\\gamma t}\\cos(\\omega_1 t)$. Negative friction adds energy to the system!" }
              ]
            }
          ]
        },
        {
          "id": "lesson-2-4-2-ex11-14",
          "title": "Exercises 11.14 & 11.15: Overdamped Initial Conditions",
          "description": "Solving for constants in overdamped motion.",
          "icon": "ArrowDownToLine",
          "slides": [
            {
              "id": "s1-q",
              "type": "example_q",
              "title": "Exercise 11.15",
              "content": "Obtain $C_1$ and $C_2$ for an overdamped oscillator if it is pushed from the equilibrium position.\n\nThe initial conditions are $x(t=0) = 0$ and $\\dot{x}(t=0) = v_0$."
            },
            {
              "id": "s2-sol",
              "type": "solution",
              "title": "Interactive Solution",
              "content": "The general solution for an overdamped oscillator is $x(t) = C_1 e^{-\\gamma_1 t} + C_2 e^{-\\gamma_2 t}$.",
              "interactiveSteps": [
                {
                  "prompt": "Apply $x(0) = 0$. What equation do you get?",
                  "stepText": "$0 = C_1 + C_2 \\implies C_2 = -C_1$.",
                  "options": [
                    { "id": "A", "text": "$C_2 = -C_1$", "isCorrect": true, "explanation": "Because $e^0=1$." },
                    { "id": "B", "text": "$C_1 = C_2$", "isCorrect": false, "explanation": "They sum to zero, they aren't equal." }
                  ]
                },
                {
                  "stepText": "The derivative is $\\dot{x}(t) = -\\gamma_1 C_1 e^{-\\gamma_1 t} - \\gamma_2 C_2 e^{-\\gamma_2 t}$."
                },
                {
                  "prompt": "Apply $\\dot{x}(0) = v_0$ and substitute $C_2 = -C_1$.",
                  "stepText": "$v_0 = -\\gamma_1 C_1 - \\gamma_2 (-C_1) = C_1(\\gamma_2 - \\gamma_1)$.",
                  "options": [
                    { "id": "A", "text": "$v_0 = C_1(\\gamma_2 - \\gamma_1)$", "isCorrect": true, "explanation": "Correct substitution and factoring." },
                    { "id": "B", "text": "$v_0 = C_1(\\gamma_1 + \\gamma_2)$", "isCorrect": false, "explanation": "Watch the signs." }
                  ]
                },
                {
                  "stepText": "Therefore, $C_1 = \\frac{v_0}{\\gamma_2 - \\gamma_1}$ and $C_2 = -C_1$."
                }
              ]
            },
            {
              "id": "s3-numerical",
              "type": "numerical",
              "title": "Exercise 11.14: Numeric Overdamped",
              "content": "Assume initially $x(0) = 1$ and $v(0) = 0$. Let $\\gamma_1 = 3.414$ and $\\gamma_2 = 0.586$.\n\nThe equation derived in the textbook for this is $C_1 = -\\frac{\\gamma_2}{\\gamma_1 - \\gamma_2} x_0$.\n\nCalculate $C_1$ numerically to three decimal places.",
              "numericAnswer": -0.207,
              "numericTolerance": 0.01
            },
            {
              "id": "s4-quiz",
              "type": "quiz",
              "title": "Comparing Gammas",
              "content": "In overdamping, $\\gamma_1 = \\gamma + \\sqrt{\\gamma^2 - \\omega_0^2}$ and $\\gamma_2 = \\gamma - \\sqrt{\\gamma^2 - \\omega_0^2}$. Which decay term dies out faster?",
              "options": [
                { "id": "1", "text": "The $\\gamma_1$ term", "isCorrect": true, "explanation": "Since $\\gamma_1 > \\gamma_2$, $e^{-\\gamma_1 t}$ decays much faster. The long-term behavior is entirely dictated by the slower $\\gamma_2$ term." },
                { "id": "2", "text": "The $\\gamma_2$ term", "isCorrect": false, "explanation": "Smaller exponent means slower decay." }
              ]
            }
          ]
        },
        {
          "id": "lesson-2-4-2-ex11-16",
          "title": "Exercise 11.16: Critical Damping Initial Conditions",
          "description": "Solving for constants in critical damping.",
          "icon": "Crosshair",
          "slides": [
            {
              "id": "s1-q",
              "type": "example_q",
              "title": "Exercise 11.16",
              "content": "A critically damped harmonic oscillator is initially at its equilibrium position ($x=0$) and is struck, giving it a velocity $v_0$.\n\nObtain expressions for the constants $C_1$ and $C_2$ in the solution $x(t) = (C_1 + C_2 t)e^{-\\gamma_c t}$."
            },
            {
              "id": "s2-sol",
              "type": "solution",
              "title": "Interactive Solution",
              "content": "We need to plug $t=0$ into the position and velocity equations.",
              "interactiveSteps": [
                {
                  "prompt": "For position: At $t=0$, what does $(C_1 + C_2(0))e^0$ evaluate to?",
                  "stepText": "$C_1$. Since $x(0) = 0$, we conclude $C_1 = 0$.",
                  "options": [
                    { "id": "A", "text": "$C_1$", "isCorrect": true, "explanation": "Correct, the $C_2 t$ term vanishes." },
                    { "id": "B", "text": "$C_1 + C_2$", "isCorrect": false, "explanation": "$C_2$ is multiplied by $t=0$." }
                  ]
                },
                {
                  "stepText": "Now find the velocity derivative: $\\dot{x}(t) = C_2 e^{-\\gamma_c t} - \\gamma_c(C_1 + C_2 t)e^{-\\gamma_c t}$."
                },
                {
                  "prompt": "Evaluate this at $t=0$. What do you get?",
                  "stepText": "$\\dot{x}(0) = C_2 - \\gamma_c C_1$.",
                  "options": [
                    { "id": "A", "text": "$C_2 - \\gamma_c C_1$", "isCorrect": true, "explanation": "Correct application of the product rule at $t=0$." },
                    { "id": "B", "text": "$- \\gamma_c C_2$", "isCorrect": false, "explanation": "Don't forget the derivative of the polynomial part." }
                  ]
                },
                {
                  "stepText": "Since $C_1 = 0$ and $\\dot{x}(0) = v_0$, we have $v_0 = C_2 - 0 \\implies C_2 = v_0$."
                }
              ]
            },
            {
              "id": "s3-quiz",
              "type": "quiz",
              "title": "Final Equation Form",
              "content": "With $C_1 = 0$ and $C_2 = v_0$, what is the final equation of motion for this struck oscillator?",
              "options": [
                { "id": "1", "text": "$x(t) = v_0 t e^{-\\gamma_c t}$", "isCorrect": true, "explanation": "Substitute the constants back into $x(t) = (C_1 + C_2 t)e^{-\\gamma_c t}$." },
                { "id": "2", "text": "$x(t) = v_0 e^{-\\gamma_c t}$", "isCorrect": false, "explanation": "You forgot the factor of $t$ on $C_2$." },
                { "id": "3", "text": "$x(t) = (v_0 + t)e^{-\\gamma_c t}$", "isCorrect": false, "explanation": "Algebra is incorrect." }
              ]
            },
            {
              "id": "s4-blank",
              "type": "fill_in_blank",
              "title": "Shape of the Curve",
              "content": "The function $x(t) = v_0 t e^{-\\gamma_c t}$ starts at zero, rises to a maximum, and then exponentially decays back to zero. It will cross the x-axis exactly ___ times after $t=0$.",
              "blankAnswer": "zero"
            }
          ]
        }
      ]
    },
    {
      "id": "unit-2-4-3",
      "title": "Inhomogeneous Proofs & Phase",
      "description": "Understanding forced mechanics mathematically.",
      "color": "duo-blue",
      "lessons": [
        {
          "id": "lesson-2-4-3-ex11-18",
          "title": "Exercise 11.18: Inhomogeneous Superposition",
          "description": "Proof of Rule 3 for inhomogeneous equations.",
          "icon": "Layers",
          "slides": [
            {
              "id": "s1-q",
              "type": "example_q",
              "title": "Exercise 11.18",
              "content": "Show mathematically that the general solution of an inhomogeneous differential equation $D(x) = f(t)$ is the sum of a particular solution $x_p$ and the general solution of the homogeneous equation $x_g$."
            },
            {
              "id": "s2-sol",
              "type": "solution",
              "title": "Interactive Solution",
              "content": "Let the linear differential operator be $D$.",
              "interactiveSteps": [
                {
                  "stepText": "By definition, the homogeneous solution $x_g$ satisfies $D(x_g) = 0$."
                },
                {
                  "stepText": "By definition, the particular solution $x_p$ satisfies $D(x_p) = f(t)$."
                },
                {
                  "prompt": "Because $D$ represents linear derivatives, it is a linear operator. What does $D(A + B)$ equal?",
                  "stepText": "$D(A + B) = D(A) + D(B)$.",
                  "options": [
                    { "id": "A", "text": "$D(A) + D(B)$", "isCorrect": true, "explanation": "The derivative of a sum is the sum of the derivatives." },
                    { "id": "B", "text": "$D(A) \\cdot D(B)$", "isCorrect": false, "explanation": "That violates linearity." }
                  ]
                },
                {
                  "prompt": "Therefore, evaluate $D(x_g + x_p)$.",
                  "stepText": "$D(x_g + x_p) = D(x_g) + D(x_p) = 0 + f(t) = f(t)$.",
                  "options": [
                    { "id": "A", "text": "$0$", "isCorrect": false, "explanation": "$D(x_p)$ is not zero." },
                    { "id": "B", "text": "$f(t)$", "isCorrect": true, "explanation": "Since it evaluates to $f(t)$, the sum $x_g + x_p$ is a valid solution to the full equation!" }
                  ]
                }
              ]
            },
            {
              "id": "s3-quiz",
              "type": "quiz",
              "title": "Why add the homogeneous part?",
              "content": "If $x_p$ alone already equals $f(t)$, why do we bother adding $x_g$ to form the general solution?",
              "options": [
                { "id": "1", "text": "To make the math look more complex.", "isCorrect": false, "explanation": "" },
                { "id": "2", "text": "Because $x_p$ usually lacks the arbitrary constants needed to match initial position and velocity.", "isCorrect": true, "explanation": "A second-order system requires two constants to fit the starting conditions. $x_g$ provides exactly these." },
                { "id": "3", "text": "To satisfy energy conservation.", "isCorrect": false, "explanation": "Energy is not conserved in an externally forced system." }
              ]
            }
          ]
        },
        {
          "id": "lesson-2-4-3-ex11-24",
          "title": "Exercise 11.24: Phase Shift Identity",
          "description": "Converting sine and cosine sums into a single phase-shifted wave.",
          "icon": "ActivitySquare",
          "slides": [
            {
              "id": "s1-q",
              "type": "example_q",
              "title": "Exercise 11.24",
              "content": "Show that the sum of a sine and cosine wave of the same frequency:\n$A \\sin \\omega t + B \\cos \\omega t$\n\nCan always be rewritten as a single phase-shifted wave:\n$\\sqrt{A^2 + B^2} \\cos(\\omega t - \\phi)$\nwhere $\\tan \\phi = A/B$."
            },
            {
              "id": "s2-sol",
              "type": "solution",
              "title": "Interactive Solution",
              "content": "We will expand the target expression and match coefficients.",
              "interactiveSteps": [
                {
                  "stepText": "Expand $\\cos(\\omega t - \\phi)$ using the cosine difference identity."
                },
                {
                  "prompt": "What is the expansion?",
                  "stepText": "$\\cos(\\omega t)\\cos\\phi + \\sin(\\omega t)\\sin\\phi$.",
                  "options": [
                    { "id": "A", "text": "$\\cos(\\omega t)\\cos\\phi + \\sin(\\omega t)\\sin\\phi$", "isCorrect": true, "explanation": "Correct cosine difference identity." },
                    { "id": "B", "text": "$\\cos(\\omega t)\\cos\\phi - \\sin(\\omega t)\\sin\\phi$", "isCorrect": false, "explanation": "That is for $\\cos(A+B)$." }
                  ]
                },
                {
                  "stepText": "Multiply by the amplitude $R = \\sqrt{A^2+B^2}$. The expression is $(R\\sin\\phi)\\sin\\omega t +  (R\\cos\\phi)\\cos\\omega t$."
                },
                {
                  "prompt": "By matching this to the original expression $A \\sin \\omega t + B \\cos \\omega t$, what must $A$ equal?",
                  "stepText": "$A = R\\sin\\phi = \\sqrt{A^2+B^2}\\sin\\phi$.",
                  "options": [
                    { "id": "A", "text": "$A = \\sqrt{A^2+B^2}\\sin\\phi$", "isCorrect": true, "explanation": "Matches the coefficient of $\\sin \\omega t$." },
                    { "id": "B", "text": "$A = \\sqrt{A^2+B^2}\\cos\\phi$", "isCorrect": false, "explanation": "That belongs to $B$." }
                  ]
                },
                {
                  "stepText": "Similarly, $B = \\sqrt{A^2+B^2}\\cos\\phi$."
                },
                {
                  "stepText": "Dividing $A$ by $B$ yields $A/B = \\frac{\\sin\\phi}{\\cos\\phi} = \\tan\\phi$. The proof is complete!"
                }
              ]
            },
            {
              "id": "s3-quiz",
              "type": "quiz",
              "title": "Phase Angle Applications",
              "content": "In a forced damped oscillator, the phase angle $\\phi$ represents:",
              "options": [
                { "id": "1", "text": "The amount the mass is displaced initially.", "isCorrect": false, "explanation": "Initial displacement determines homogeneous constants." },
                { "id": "2", "text": "The time delay (lag) between the applied force and the mass's response.", "isCorrect": true, "explanation": "Because of damping, the mass doesn't perfectly follow the force; it lags behind by angle $\\phi$." }
              ]
            }
          ]
        },
        {
          "id": "lesson-2-4-3-ex11-23",
          "title": "Exercise 11.23 & 11.22: Resonance Frequency",
          "description": "Calculus condition for maximum amplitude.",
          "icon": "Wifi",
          "slides": [
            {
              "id": "s1-q",
              "type": "example_q",
              "title": "Exercise 11.23",
              "content": "The amplitude of a forced damped oscillator is given by:\n$A = \\frac{F_0}{\\left[ m^2(\\omega_0^2 - \\omega_d^2)^2 + \\omega_d^2 b^2 \\right]^{1/2}}$\n\nFind the exact driving frequency $\\omega_d$ that maximizes this amplitude."
            },
            {
              "id": "s2-sol",
              "type": "solution",
              "title": "Interactive Solution",
              "content": "To maximize $A$, we must minimize its denominator.",
              "interactiveSteps": [
                {
                  "stepText": "Let $f(\\omega_d) = m^2(\\omega_0^2 - \\omega_d^2)^2 + \\omega_d^2 b^2$. We take the derivative with respect to $\\omega_d$ and set it to zero."
                },
                {
                  "prompt": "Apply the chain rule to the first term $m^2(\\omega_0^2 - \\omega_d^2)^2$. What is its derivative?",
                  "stepText": "$2m^2(\\omega_0^2 - \\omega_d^2)(-2\\omega_d)$.",
                  "options": [
                    { "id": "A", "text": "$2m^2(\\omega_0^2 - \\omega_d^2)$", "isCorrect": false, "explanation": "You forgot the inner derivative of $-\\omega_d^2$." },
                    { "id": "B", "text": "$2m^2(\\omega_0^2 - \\omega_d^2)(-2\\omega_d)$", "isCorrect": true, "explanation": "Correct chain rule application." }
                  ]
                },
                {
                  "stepText": "The derivative of the second term $\\omega_d^2 b^2$ is $2\\omega_d b^2$."
                },
                {
                  "stepText": "Setting the sum to zero: $-4\\omega_d m^2(\\omega_0^2 - \\omega_d^2) + 2\\omega_d b^2 = 0$."
                },
                {
                  "prompt": "Assuming $\\omega_d \\neq 0$, we can divide by $2\\omega_d$ and solve for $\\omega_d^2$. What is the result?",
                  "stepText": "$\\omega_d^2 = \\omega_0^2 - \\frac{b^2}{2m^2}$.",
                  "options": [
                    { "id": "A", "text": "$\\omega_d^2 = \\omega_0^2 + \\frac{b^2}{2m^2}$", "isCorrect": false, "explanation": "Watch the algebraic signs." },
                    { "id": "B", "text": "$\\omega_d^2 = \\omega_0^2 - \\frac{b^2}{2m^2}$", "isCorrect": true, "explanation": "This proves the resonant frequency is slightly lower than the natural frequency." }
                  ]
                }
              ]
            },
            {
              "id": "s3-numerical",
              "type": "numerical",
              "title": "Exercise 11.22: Calculation",
              "content": "A simple harmonic oscillator consists of a mass of 3 kg on a spring of constant 0.15 N/m. Assuming damping is negligibly small ($b \\approx 0$).\n\nDetermine the driving frequency $\\omega_d$ which will cause the amplitude to grow extremely large (resonance).",
              "numericAnswer": 0.22,
              "numericTolerance": 0.02
            },
            {
              "id": "s4-quiz",
              "type": "quiz",
              "title": "Resonance Limit",
              "content": "Look closely at the resonant frequency $\\omega' = \\sqrt{\\omega_0^2 - \\frac{b^2}{2m^2}}$. What happens if the damping $b$ is extremely large, specifically $b^2 > 2m^2 \\omega_0^2$?",
              "options": [
                { "id": "1", "text": "The resonance peak shifts to a higher frequency.", "isCorrect": false, "explanation": "The term is subtracted." },
                { "id": "2", "text": "There is no resonance peak; amplitude strictly decreases as driving frequency increases.", "isCorrect": true, "explanation": "The term under the root becomes negative, meaning no real non-zero frequency maximizes amplitude." }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "unit-2-4-4",
      "title": "Advanced Forced Oscillators",
      "description": "Solving complex inhomogeneous differential equations.",
      "color": "duo-blue",
      "lessons": [
        {
          "id": "lesson-2-4-4-ex11-4",
          "title": "Worked Example 11.4: Polynomial Forcing",
          "description": "Integrating factor technique for linear forcing.",
          "icon": "FunctionSquare",
          "slides": [
            {
              "id": "s1-q",
              "type": "example_q",
              "title": "Worked Example 11.4",
              "content": "Find the general solution for $(D^2 - 4)x = 2 - 8t$\n\nInitial conditions: $t=0, x=0, \\dot{x}=5$."
            },
            {
              "id": "s2-sol",
              "type": "solution",
              "title": "Interactive Solution",
              "content": "We factor the operator and use an integrating factor.",
              "interactiveSteps": [
                {
                  "stepText": "Factor the operator: $(D - 2)(D + 2)x = 2 - 8t$. Let $u = (D + 2)x$. Then $(D - 2)u = 2 - 8t$."
                },
                {
                  "prompt": "This is $\\frac{du}{dt} - 2u = 2 - 8t$. The integrating factor is $e^{\\int -2 dt}$. What is the integrating factor?",
                  "stepText": "The integrating factor is $e^{-2t}$.",
                  "options": [
                    { "id": "A", "text": "$e^{2t}$", "isCorrect": false, "explanation": "The coefficient of u is -2." },
                    { "id": "B", "text": "$e^{-2t}$", "isCorrect": true, "explanation": "Correct." }
                  ]
                },
                {
                  "stepText": "Multiply equation by $e^{-2t}$: $\\frac{d}{dt}(u e^{-2t}) = 2e^{-2t} - 8te^{-2t}$."
                },
                {
                  "stepText": "Integrating both sides yields $u e^{-2t} = -e^{-2t} - 8\\int t e^{-2t} dt$. Using integration by parts, $u = C_1 e^{2t} + 4t + 1$."
                },
                {
                  "stepText": "Now replace $u = (D+2)x = \\frac{dx}{dt} + 2x = C_1 e^{2t} + 4t + 1$."
                },
                {
                  "stepText": "Use integrating factor $e^{2t}$ this time: $\\frac{d}{dt}(x e^{2t}) = C_1 e^{4t} + 4t e^{2t} + e^{2t}$."
                },
                {
                  "stepText": "Integrating again gives the complete general solution: $x(t) = C_2 e^{-2t} + \\frac{1}{4}C_1 e^{2t} + 2t - \\frac{1}{2}$."
                }
              ]
            },
            {
              "id": "s3-quiz",
              "type": "quiz",
              "title": "Applying Initial Conditions",
              "content": "If $x(t) = C_a e^{2t} + C_b e^{-2t} + 2t - 0.5$, applying $x(0) = 0$ gives $C_a + C_b = 0.5$. \nApplying $\\dot{x}(0) = 5$ gives $2C_a - 2C_b + 2 = 5$. \nSolving these yields:",
              "options": [
                { "id": "1", "text": "$C_a = 1, C_b = -0.5$", "isCorrect": true, "explanation": "$1 - 0.5 = 0.5$, and $2(1) - 2(-0.5) + 2 = 2 + 1 + 2 = 5$. Correct!" },
                { "id": "2", "text": "$C_a = 2, C_b = -1.5$", "isCorrect": false, "explanation": "Doesn't satisfy the velocity equation." }
              ]
            }
          ]
        },
        {
          "id": "lesson-2-4-4-ex11-19",
          "title": "Exercise 11.19: Constant Forcing",
          "description": "Solving via inspection and operator factoring.",
          "icon": "PenTool",
          "slides": [
            {
              "id": "s1-q",
              "type": "example_q",
              "title": "Exercise 11.19",
              "content": "Obtain the general solution to $(D^2 - D - 6)x = 8$."
            },
            {
              "id": "s2-sol",
              "type": "solution",
              "title": "Interactive Solution",
              "content": "This relies on finding the roots of the homogeneous part, and guessing the particular part.",
              "interactiveSteps": [
                {
                  "prompt": "Find the roots of the auxiliary equation $p^2 - p - 6 = 0$.",
                  "stepText": "Factoring $(p-3)(p+2) = 0$ gives $p=3$ and $p=-2$.",
                  "options": [
                    { "id": "A", "text": "$p=3, p=-2$", "isCorrect": true, "explanation": "Correct factorization." },
                    { "id": "B", "text": "$p=-3, p=2$", "isCorrect": false, "explanation": "Check signs: $(-3)(2) = -6$, but $-3+2 = -1$ which would give $+p$." }
                  ]
                },
                {
                  "stepText": "So the homogeneous solution is $x_g(t) = C_1 e^{3t} + C_2 e^{-2t}$."
                },
                {
                  "prompt": "Since the RHS is a constant ($8$), guess a constant particular solution $x_p = A$. What is $D(A)$ and $D^2(A)$?",
                  "stepText": "Derivatives of a constant are zero.",
                  "options": [
                    { "id": "A", "text": "$0$", "isCorrect": true, "explanation": "Correct." },
                    { "id": "B", "text": "$A$", "isCorrect": false, "explanation": "The derivative is zero." }
                  ]
                },
                {
                  "stepText": "Substitute into $(D^2 - D - 6)A = 8 \\implies -6A = 8 \\implies A = -8/6 = -4/3$."
                },
                {
                  "stepText": "Final Solution: $x(t) = C_1 e^{3t} + C_2 e^{-2t} - \\frac{4}{3}$."
                }
              ]
            },
            {
              "id": "s3-blank",
              "type": "fill_in_blank",
              "title": "Superposition",
              "content": "The total solution is simply the ___ of the homogeneous solution and the particular solution.",
              "blankAnswer": "sum"
            }
          ]
        },
        {
          "id": "lesson-2-4-4-ex11-25",
          "title": "Exercise 11.25: Exponential Driving Force",
          "description": "Applying Trick #1 to physical equations.",
          "icon": "Wind",
          "slides": [
            {
              "id": "s1-q",
              "type": "example_q",
              "title": "Exercise 11.25",
              "content": "A damped harmonic oscillator is driven by an exponentially decaying force $F_0 e^{-\\alpha t}$. \n\nFind the general solution. (Assume standard underdamped conditions for the homogeneous part)."
            },
            {
              "id": "s2-sol",
              "type": "solution",
              "title": "Interactive Solution",
              "content": "The equation is $m\\ddot{x} + b\\dot{x} + kx = F_0 e^{-\\alpha t}$.",
              "interactiveSteps": [
                {
                  "stepText": "The homogeneous solution (assuming underdamped) is $x_g = A e^{-\\gamma t}\\cos(\\omega_1 t + \\theta)$."
                },
                {
                  "prompt": "For the particular solution, Trick #1 suggests we guess $x_p = C e^{-\\alpha t}$. What are $\\dot{x}_p$ and $\\ddot{x}_p$?",
                  "stepText": "$\\dot{x}_p = -\\alpha C e^{-\\alpha t}$ and $\\ddot{x}_p = \\alpha^2 C e^{-\\alpha t}$.",
                  "options": [
                    { "id": "A", "text": "$\\dot{x}_p = -\\alpha C e^{-\\alpha t}$, $\\ddot{x}_p = \\alpha^2 C e^{-\\alpha t}$", "isCorrect": true, "explanation": "Chain rule pulls out a $-\\alpha$ each time." },
                    { "id": "B", "text": "$\\dot{x}_p = \\alpha C e^{-\\alpha t}$, $\\ddot{x}_p = \\alpha^2 C e^{-\\alpha t}$", "isCorrect": false, "explanation": "Don't drop the negative sign." }
                  ]
                },
                {
                  "stepText": "Substitute into the equation: $C(m\\alpha^2 - b\\alpha + k)e^{-\\alpha t} = F_0 e^{-\\alpha t}$."
                },
                {
                  "stepText": "Cancel the exponential and solve for $C$: $C = \\frac{F_0}{m\\alpha^2 - b\\alpha + k}$."
                },
                {
                  "stepText": "The general solution is $x(t) = A e^{-\\gamma t}\\cos(\\omega_1 t + \\theta) + \\frac{F_0}{m\\alpha^2 - b\\alpha + k} e^{-\\alpha t}$."
                }
              ]
            },
            {
              "id": "s3-quiz",
              "type": "quiz",
              "title": "Trick Failure Condition",
              "content": "When does Trick #1 fail, requiring us to multiply our guess by $t$?",
              "options": [
                { "id": "1", "text": "When the forcing exponent $-\\alpha$ exactly matches one of the homogeneous roots.", "isCorrect": true, "explanation": "If $-\\alpha$ was a root of the auxiliary equation, the denominator $m\\alpha^2 - b\\alpha + k$ would be exactly zero! The math trick brilliantly predicts its own failure." },
                { "id": "2", "text": "When the force is too large.", "isCorrect": false, "explanation": "Linear equations scale perfectly with amplitude." },
                { "id": "3", "text": "When there is no damping.", "isCorrect": false, "explanation": "It works fine without damping, as long as $-\\alpha$ isn't a root." }
              ]
            }
          ]
        }
      ]
    }
  ]
};