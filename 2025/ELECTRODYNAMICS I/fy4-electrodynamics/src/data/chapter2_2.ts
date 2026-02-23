import { Section } from '../types';

export const SECTION_2_2: Section = {
  "id": "section-2-2",
  "title": "Section 2: Damped & Forced Oscillators",
  "description": "Friction, resonance, the Q factor, and inhomogeneous differential equations.",
  "color": "duo-red",
  "units": [
    {
      "id": "unit-2-3",
      "title": "The Damped Harmonic Oscillator",
      "description": "Underdamped, overdamped, and critically damped systems.",
      "color": "duo-red",
      "lessons": [
        {
          "id": "lesson-2-3-1-damping-force",
          "title": "Introduction to Damping",
          "description": "Adding a retarding force to the harmonic oscillator.",
          "icon": "Wind",
          "slides": [
            {
              "id": "s1-theory",
              "type": "theory",
              "title": "The Retarding Force",
              "content": "In reality, oscillators lose energy and eventually stop due to retarding forces like air resistance or friction.\n\nLet the system be a mass on a spring acted upon by a resistive force proportional to its velocity. The total force is:\n$$F = -kx - b\\dot{x}$$\nwhere $b$ is the **damping coefficient**."
            },
            {
              "id": "s2-example",
              "type": "example",
              "title": "The Equation of Motion",
              "content": "Using Newton's Second Law ($F = m\\ddot{x}$), the equation of motion for a damped harmonic oscillator becomes:\n$$m\\ddot{x} + b\\dot{x} + kx = 0$$\n\nThis is a second-order linear homogeneous differential equation with constant coefficients."
            },
            {
              "id": "s3-proof",
              "type": "proof",
              "title": "Interactive Derivation: The Auxiliary Equation",
              "content": "Let's find the roots of this differential equation.",
              "interactiveSteps": [
                {
                  "stepText": "We assume a solution of the form $x = e^{pt}$. Therefore, $\\dot{x} = pe^{pt}$ and $\\ddot{x} = p^2e^{pt}$."
                },
                {
                  "prompt": "Substitute these into $m\\ddot{x} + b\\dot{x} + kx = 0$. What equation do you get after factoring out $e^{pt}$?",
                  "stepText": "The auxiliary equation is $mp^2 + bp + k = 0$.",
                  "options": [
                    { "id": "A", "text": "$mp^2 + bp + k = 0$", "isCorrect": true, "explanation": "Correct. This is a standard quadratic equation for p." },
                    { "id": "B", "text": "$m + bp + kp^2 = 0$", "isCorrect": false, "explanation": "Match the powers of $p$ with the order of the derivatives." }
                  ]
                },
                {
                  "stepText": "To simplify, we divide by $m$: $p^2 + \\frac{b}{m}p + \\frac{k}{m} = 0$."
                },
                {
                  "prompt": "Using the quadratic formula $p = \\frac{-B \\pm \\sqrt{B^2 - 4AC}}{2A}$, what are the roots for $p$?",
                  "stepText": "The roots are $p = -\\frac{b}{2m} \\pm \\sqrt{\\left(\\frac{b}{2m}\\right)^2 - \\frac{k}{m}}$.",
                  "options": [
                    { "id": "A", "text": "$p = -\\frac{b}{m} \\pm \\sqrt{\\frac{b^2}{m^2} - \\frac{k}{m}}$", "isCorrect": false, "explanation": "Don't forget to divide by $2A$ (which is 2 here)." },
                    { "id": "B", "text": "$p = -\\frac{b}{2m} \\pm \\sqrt{\\left(\\frac{b}{2m}\\right)^2 - \\frac{k}{m}}$", "isCorrect": true, "explanation": "Perfect application of the quadratic formula." }
                  ]
                }
              ]
            },
            {
              "id": "s4-quiz",
              "type": "quiz",
              "title": "Understanding the Roots",
              "content": "The behavior of the oscillator entirely depends on the term under the square root: $\\left(\\frac{b}{2m}\\right)^2 - \\frac{k}{m}$. If this term is negative, what kind of roots do we get?",
              "options": [
                { "id": "1", "text": "Real and positive", "isCorrect": false, "explanation": "A negative square root produces imaginary numbers." },
                { "id": "2", "text": "Complex / Imaginary", "isCorrect": true, "explanation": "The square root of a negative number yields an imaginary component, leading to oscillatory sine/cosine solutions." },
                { "id": "3", "text": "Zero", "isCorrect": false, "explanation": "It's only zero if the terms are exactly equal." }
              ]
            },
            {
              "id": "s5-blank",
              "type": "fill_in_blank",
              "title": "Terminology",
              "content": "The retarding force in our model is directly proportional to the ___ of the mass.",
              "blankAnswer": "velocity"
            }
          ]
        },
        {
          "id": "lesson-2-3-2-underdamped",
          "title": "The Underdamped Oscillator",
          "description": "Oscillations with an exponentially decaying amplitude.",
          "icon": "Activity",
          "slides": [
            {
              "id": "s1-theory",
              "type": "theory",
              "title": "Underdamped Condition",
              "content": "An oscillator is **underdamped** when the damping is small: $\\left(\\frac{b}{2m}\\right)^2 < \\frac{k}{m}$.\n\nLet's define two new constants to make the math cleaner:\n*   $\\omega_0^2 = \\frac{k}{m}$ (Natural frequency squared)\n*   $\\gamma = \\frac{b}{2m}$ (Damping coefficient)\n\nThe roots become: $p = -\\gamma \\pm \\sqrt{\\gamma^2 - \\omega_0^2}$"
            },
            {
              "id": "s2-example",
              "type": "example",
              "title": "Complex Roots",
              "content": "Since $\\gamma^2 < \\omega_0^2$ for underdamped systems, the square root is negative. We factor out $-1$ to get an imaginary number:\n$$p = -\\gamma \\pm i\\omega_1$$\nwhere $\\omega_1 = \\sqrt{\\omega_0^2 - \\gamma^2}$ is the new, slightly slower frequency of the damped oscillator."
            },
            {
              "id": "s3-canvas",
              "type": "theory",
              "title": "Visualizing Underdamped Motion",
              "content": "The solution is $x(t) = Ae^{-\\gamma t}\\cos(\\omega_1 t + \\theta)$. It oscillates rapidly (cosine term), but the amplitude is squeezed by an exponentially decreasing envelope ($e^{-\\gamma t}$).",
              "canvasId": "damped-oscillation"
            },
            {
              "id": "s4-numerical",
              "type": "numerical",
              "title": "Calculate Damped Frequency",
              "content": "An underdamped oscillator has a natural frequency $\\omega_0 = 5$ rad/s and a damping coefficient $\\gamma = 3$ s$^{-1}$.\n\nCalculate the damped angular frequency $\\omega_1 = \\sqrt{\\omega_0^2 - \\gamma^2}$.",
              "numericAnswer": 4,
              "numericTolerance": 0.05
            },
            {
              "id": "s5-quiz",
              "type": "quiz",
              "title": "Frequency Comparison",
              "content": "How does the damped frequency $\\omega_1$ compare to the natural (undamped) frequency $\\omega_0$?",
              "options": [
                { "id": "1", "text": "It is always greater (faster oscillations).", "isCorrect": false, "explanation": "Look at the formula: $\\omega_1 = \\sqrt{\\omega_0^2 - \\gamma^2}$." },
                { "id": "2", "text": "It is always equal.", "isCorrect": false, "explanation": "Only if $\\gamma = 0$." },
                { "id": "3", "text": "It is always smaller (slower oscillations).", "isCorrect": true, "explanation": "The friction slows down the oscillatory back-and-forth motion." }
              ]
            }
          ]
        },
        {
          "id": "lesson-2-3-3-worked-example",
          "title": "Worked Example 11.3",
          "description": "Calculating amplitude decay over time.",
          "icon": "PenTool",
          "slides": [
            {
              "id": "s1-q",
              "type": "example_q",
              "title": "The Problem",
              "content": "An underdamped harmonic oscillator has $k = 2$ N/m, $m = 1$ kg, and $b = 0.1$ kg/s.\n\nHow many oscillations does the system make before the amplitude decreases to $1/e$ of its initial value?"
            },
            {
              "id": "s2-sol",
              "type": "solution",
              "title": "Interactive Solution",
              "content": "We need to find the time it takes to reach $1/e$, and then divide by the period of one oscillation.",
              "interactiveSteps": [
                {
                  "stepText": "The amplitude function is $A(t) = A_0 e^{-\\gamma t}$. We want the time $t$ when $A(t) = \\frac{1}{e}A_0$."
                },
                {
                  "prompt": "Using $e^{-\\gamma t} = e^{-1}$, what is the time $t$ in terms of the damping coefficient $\\gamma$?",
                  "stepText": "$t = 1/\\gamma$.",
                  "options": [
                    { "id": "A", "text": "$t = 1/\\gamma$", "isCorrect": true, "explanation": "Since $-\\gamma t = -1$, $t = 1/\\gamma$." },
                    { "id": "B", "text": "$t = \\gamma$", "isCorrect": false, "explanation": "Check the algebra." }
                  ]
                },
                {
                  "prompt": "Recall that $\\gamma = \\frac{b}{2m}$. Calculate the value of $t$ using the given numbers ($m=1, b=0.1$).",
                  "stepText": "$\\gamma = \\frac{0.1}{2(1)} = 0.05$. Therefore $t = 1/0.05 = 20$ seconds.",
                  "options": [
                    { "id": "A", "text": "$t = 10$ s", "isCorrect": false, "explanation": "You forgot the $2$ in the denominator of $\\gamma$." },
                    { "id": "B", "text": "$t = 20$ s", "isCorrect": true, "explanation": "Correct. $1 / 0.05 = 20$." }
                  ]
                },
                {
                  "stepText": "Now we need the number of oscillations. First, calculate the damped frequency: $\\omega_1 = \\sqrt{k/m - \\gamma^2} = \\sqrt{2 - 0.05^2} \\approx \\sqrt{1.9975} \\approx 1.413$ rad/s."
                },
                {
                  "stepText": "Total radians covered in 20 seconds is $\\omega_1 t = 1.413 \\times 20 = 28.26$ radians."
                },
                {
                  "prompt": "One full oscillation is $2\\pi$ radians. How many oscillations is $28.26$ radians?",
                  "stepText": "Number of oscillations = $28.26 / (2\\pi) \\approx 4.5$.",
                  "options": [
                    { "id": "A", "text": "4.5 oscillations", "isCorrect": true, "explanation": "Correct! $28.26 / 6.28 \\approx 4.5$." },
                    { "id": "B", "text": "9.0 oscillations", "isCorrect": false, "explanation": "You divided by $\\pi$ instead of $2\\pi$." }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "lesson-2-3-4-overdamped",
          "title": "The Overdamped Oscillator",
          "description": "When friction dominates the spring.",
          "icon": "ArrowDownToLine",
          "slides": [
            {
              "id": "s1-theory",
              "type": "theory",
              "title": "Overdamped Condition",
              "content": "An oscillator is **overdamped** when the damping is very large: $\\left(\\frac{b}{2m}\\right)^2 > \\frac{k}{m}$.\n\nIn our $\\gamma$ notation, this means $\\gamma^2 > \\omega_0^2$. The term under the square root is positive, so the roots $p_1$ and $p_2$ are strictly real and negative."
            },
            {
              "id": "s2-example",
              "type": "example",
              "title": "The Solution",
              "content": "Let the roots be $-\\gamma_1$ and $-\\gamma_2$. The general solution is a sum of two exponentially decaying terms:\n$$x(t) = C_1 e^{-\\gamma_1 t} + C_2 e^{-\\gamma_2 t}$$\n\nBecause there are no imaginary parts, there are **no sines or cosines**. The mass does not cross the equilibrium point back and forth; it just slowly oozes back toward $x=0$."
            },
            {
              "id": "s3-proof",
              "type": "proof",
              "title": "Interactive: Finding Constants",
              "content": "Let's find $C_1$ and $C_2$ for an overdamped mass pulled to $x_0$ and released from rest ($v_0 = 0$).",
              "interactiveSteps": [
                {
                  "stepText": "We have $x(t) = C_1 e^{-\\gamma_1 t} + C_2 e^{-\\gamma_2 t}$ and $\\dot{x}(t) = -\\gamma_1 C_1 e^{-\\gamma_1 t} - \\gamma_2 C_2 e^{-\\gamma_2 t}$."
                },
                {
                  "prompt": "At $t=0$, $x(0) = x_0$. What is the resulting equation?",
                  "stepText": "$x_0 = C_1 + C_2 \\implies C_1 = x_0 - C_2$.",
                  "options": [
                    { "id": "A", "text": "$x_0 = C_1 + C_2$", "isCorrect": true, "explanation": "Because $e^0 = 1$." },
                    { "id": "B", "text": "$x_0 = C_1 - C_2$", "isCorrect": false, "explanation": "The terms are added in the general solution." }
                  ]
                },
                {
                  "prompt": "At $t=0$, $v_0 = 0$. What is the resulting equation?",
                  "stepText": "$0 = -\\gamma_1 C_1 - \\gamma_2 C_2 \\implies \\gamma_1 C_1 = -\\gamma_2 C_2$.",
                  "options": [
                    { "id": "A", "text": "$0 = C_1 + C_2$", "isCorrect": false, "explanation": "That is the position equation." },
                    { "id": "B", "text": "$0 = -\\gamma_1 C_1 - \\gamma_2 C_2$", "isCorrect": true, "explanation": "Derived from the velocity equation at t=0." }
                  ]
                },
                {
                  "stepText": "Solving this system yields $C_1 = -\\frac{\\gamma_2}{\\gamma_1 - \\gamma_2}x_0$ and $C_2 = \\frac{\\gamma_1}{\\gamma_1 - \\gamma_2}x_0$."
                }
              ]
            },
            {
              "id": "s4-quiz",
              "type": "quiz",
              "title": "Overdamped Behavior",
              "content": "Can an overdamped oscillator ever cross the equilibrium point ($x=0$)?",
              "options": [
                { "id": "1", "text": "Yes, it crosses exactly once before stopping.", "isCorrect": false, "explanation": "While it CAN cross once if pushed hard initially, if simply released from rest, it will approach zero asymptotically without crossing." },
                { "id": "2", "text": "No, it just decays toward zero asymptotically.", "isCorrect": true, "explanation": "Without a violent initial push, the sum of two decaying exponentials from a starting position will smoothly approach 0 but never cross it." },
                { "id": "3", "text": "Yes, it oscillates but very slowly.", "isCorrect": false, "explanation": "There is strictly no oscillation." }
              ]
            }
          ]
        },
        {
          "id": "lesson-2-3-5-critical-damping",
          "title": "Critically Damped Oscillator",
          "description": "The exact boundary between oscillating and not oscillating.",
          "icon": "Crosshair",
          "slides": [
            {
              "id": "s1-theory",
              "type": "theory",
              "title": "Critical Damping Condition",
              "content": "Critical damping occurs exactly when $\\left(\\frac{b}{2m}\\right)^2 = \\frac{k}{m}$.\n\nHere, the term under the square root is exactly zero. We define $\\gamma_c = \\frac{b}{2m} = \\omega_0$. The auxiliary equation yields a single, repeated root: $p = -\\gamma_c$."
            },
            {
              "id": "s2-example",
              "type": "example",
              "title": "The Solution for Repeated Roots",
              "content": "When a second-order differential equation has a repeated root, the general solution requires a factor of $t$ in the second term to maintain linear independence:\n$$x(t) = C_1 e^{-\\gamma_c t} + C_2 t e^{-\\gamma_c t}$$\n\nor\n\n$$x(t) = (C_1 + C_2 t)e^{-\\gamma_c t}$$"
            },
            {
              "id": "s3-numerical",
              "type": "numerical",
              "title": "Critical Damping Constant",
              "content": "For a system to be critically damped, $b = 2m\\sqrt{k/m} = 2\\sqrt{km}$.\n\nIf a car's suspension has a mass $m = 500$ kg and a spring constant $k = 2000$ N/m, what must the shock absorber's damping coefficient $b$ be to achieve critical damping?",
              "numericAnswer": 2000,
              "numericTolerance": 10
            },
            {
              "id": "s4-quiz",
              "type": "quiz",
              "title": "Why Critical Damping?",
              "content": "Why do engineers often design systems (like car suspensions or closing doors) to be critically damped rather than overdamped?",
              "options": [
                { "id": "1", "text": "It uses less fluid in the shock absorbers.", "isCorrect": false, "explanation": "Fluid volume isn't the primary physics reason." },
                { "id": "2", "text": "It returns the system to equilibrium in the fastest possible time without oscillating.", "isCorrect": true, "explanation": "Overdamped systems are 'sluggish' and take a long time to return to 0. Critically damped is the mathematically fastest return without bouncing." },
                { "id": "3", "text": "It allows for a small, comfortable amount of bouncing.", "isCorrect": false, "explanation": "Critical damping prevents all bouncing." }
              ]
            }
          ]
        },
        {
          "id": "lesson-2-3-6-damping-summary",
          "title": "Damping Summary & Exercises",
          "description": "Comparing the three regimes.",
          "icon": "Layers",
          "slides": [
            {
              "id": "s1-theory",
              "type": "theory",
              "title": "The Three Regimes",
              "content": "Let $\\gamma = b/2m$ and $\\omega_0 = \\sqrt{k/m}$.\n\n1. **Underdamped:** $\\gamma < \\omega_0$. Oscillates. $x(t) = A e^{-\\gamma t}\\cos(\\omega_1 t + \\theta)$.\n2. **Critically Damped:** $\\gamma = \\omega_0$. Fastest decay, no oscillation. $x(t) = (C_1 + C_2 t)e^{-\\gamma t}$.\n3. **Overdamped:** $\\gamma > \\omega_0$. Slow decay, no oscillation. $x(t) = C_1 e^{-\\gamma_1 t} + C_2 e^{-\\gamma_2 t}$."
            },
            {
              "id": "s2-q",
              "type": "example_q",
              "title": "Exercise 11.17",
              "content": "A critically damped harmonic oscillator has $b=0.3$ kg/s and $k=0.4$ N/m. It is released from rest at $x=0.04$ m. \n\nEvaluate the constants $C_1$ and $C_2$ in $x(t) = (C_1 + C_2 t)e^{-\\gamma t}$."
            },
            {
              "id": "s3-sol",
              "type": "solution",
              "title": "Interactive Solution",
              "content": "First, we must find $\\gamma_c$.",
              "interactiveSteps": [
                {
                  "prompt": "For critical damping, $\\frac{b^2}{4m^2} = \\frac{k}{m} \\implies m = \\frac{b^2}{4k}$. Calculate $m$.",
                  "stepText": "$m = \\frac{0.3^2}{4(0.4)} = \\frac{0.09}{1.6} = 0.05625$ kg.",
                  "options": [
                    { "id": "A", "text": "$0.05625$ kg", "isCorrect": true, "explanation": "Correct calculation." },
                    { "id": "B", "text": "$0.56$ kg", "isCorrect": false, "explanation": "Check the decimal places." }
                  ]
                },
                {
                  "stepText": "Now calculate $\\gamma_c = b / 2m = 0.3 / (2 \\times 0.05625) = 2.667$ s$^{-1}$."
                },
                {
                  "stepText": "At $t=0$, $x = C_1 = 0.04$."
                },
                {
                  "prompt": "Velocity is $\\dot{x} = C_2 e^{-\\gamma_c t} - \\gamma_c(C_1 + C_2 t)e^{-\\gamma_c t}$. Since $v_0 = 0$, what is $C_2$?",
                  "stepText": "$0 = C_2 - \\gamma_c C_1 \\implies C_2 = \\gamma_c C_1 = 2.667 \\times 0.04 = 0.107$.",
                  "options": [
                    { "id": "A", "text": "$C_2 = -C_1$", "isCorrect": false, "explanation": "Apply the product rule correctly to the derivative." },
                    { "id": "B", "text": "$C_2 = \\gamma_c C_1$", "isCorrect": true, "explanation": "Correct. At t=0, the $t$ terms vanish, leaving $C_2 - \\gamma_c C_1 = 0$." }
                  ]
                }
              ]
            },
            {
              "id": "s4-blank",
              "type": "fill_in_blank",
              "title": "Regimes",
              "content": "An oscillator that decays to zero as fast as mathematically possible without crossing the equilibrium point is ___ damped.",
              "blankAnswer": "critically"
            }
          ]
        }
      ]
    },
    {
      "id": "unit-2-4",
      "title": "The Forced Harmonic Oscillator",
      "description": "Inhomogeneous equations, driving forces, and resonance.",
      "color": "duo-red",
      "lessons": [
        {
          "id": "lesson-2-4-1-inhomogeneous",
          "title": "Driven Oscillators & Differential Math",
          "description": "The math behind forced oscillators.",
          "icon": "Activity",
          "slides": [
            {
              "id": "s1-theory",
              "type": "theory",
              "title": "The Forced Oscillator",
              "content": "If we apply an external driving force $F(t)$ to our system, the equation of motion becomes:\n$$m\\ddot{x} + b\\dot{x} + kx = F(t)$$\n\nThis is an **inhomogeneous** differential equation because the right side is not zero."
            },
            {
              "id": "s2-example",
              "type": "example",
              "title": "Rule 3: Superposition of Solutions",
              "content": "The solution to an inhomogeneous differential equation is the sum of two parts:\n$$x(t) = x_g(t) + x_p(t)$$\n\n1.  **$x_g(t)$ (General Solution):** The solution to the homogeneous equation (where $F(t) = 0$). Also called the *complementary function*.\n2.  **$x_p(t)$ (Particular Solution):** ANY single function that satisfies the full inhomogeneous equation."
            },
            {
              "id": "s3-proof",
              "type": "proof",
              "title": "Interactive Proof: Why add them?",
              "content": "Let's prove why $x_g + x_p$ is a valid solution.",
              "interactiveSteps": [
                {
                  "stepText": "Let the differential operator be $D = m\\frac{d^2}{dt^2} + b\\frac{d}{dt} + k$. The equation is $D(x) = F(t)$."
                },
                {
                  "prompt": "By definition, what does $D(x_g)$ equal?",
                  "stepText": "$D(x_g) = 0$, because $x_g$ is the solution to the unforced (homogeneous) equation.",
                  "options": [
                    { "id": "A", "text": "$0$", "isCorrect": true, "explanation": "Correct. Homogeneous means it evaluates to 0." },
                    { "id": "B", "text": "$F(t)$", "isCorrect": false, "explanation": "That is the definition of the particular solution." }
                  ]
                },
                {
                  "prompt": "By definition, what does $D(x_p)$ equal?",
                  "stepText": "$D(x_p) = F(t)$, because it is a particular solution to the driven equation.",
                  "options": [
                    { "id": "A", "text": "$0$", "isCorrect": false, "explanation": "No, it must satisfy the inhomogeneous part." },
                    { "id": "B", "text": "$F(t)$", "isCorrect": true, "explanation": "Correct." }
                  ]
                },
                {
                  "stepText": "Because the operator $D$ is linear, $D(x_g + x_p) = D(x_g) + D(x_p) = 0 + F(t) = F(t)$. The sum works!"
                }
              ]
            },
            {
              "id": "s4-quiz",
              "type": "quiz",
              "title": "Initial Conditions",
              "content": "When applying initial conditions ($x(0)$ and $v(0)$) to find the constants $C_1$ and $C_2$, which function must you use?",
              "options": [
                { "id": "1", "text": "Only the homogeneous solution $x_g(t)$", "isCorrect": false, "explanation": "You must use the complete total motion of the system." },
                { "id": "2", "text": "Only the particular solution $x_p(t)$", "isCorrect": false, "explanation": "The particular solution rarely contains the arbitrary constants." },
                { "id": "3", "text": "The full solution $x(t) = x_g(t) + x_p(t)$", "isCorrect": true, "explanation": "Initial conditions apply to the real, total physical state of the system." }
              ]
            }
          ]
        },
        {
          "id": "lesson-2-4-2-constant-force",
          "title": "Finding Particular Solutions",
          "description": "Gravity as a constant driving force.",
          "icon": "ArrowDown",
          "slides": [
            {
              "id": "s1-theory",
              "type": "theory",
              "title": "A Constant Force",
              "content": "Suppose a mass hangs from a spring in a constant gravitational field. The driving force is $F(t) = mg$ (a constant).\n\n$$m\\ddot{x} + b\\dot{x} + kx = mg$$"
            },
            {
              "id": "s2-example",
              "type": "example",
              "title": "Solution by Inspection",
              "content": "To find $x_p(t)$, we need *any* function that makes the equation true.\n\nGuess a constant: $x_p = C$. \nThen $\\dot{x}_p = 0$ and $\\ddot{x}_p = 0$.\n\nSubstitute into the equation: $0 + 0 + kC = mg \\implies C = mg/k$.\nSo, $x_p = mg/k$."
            },
            {
              "id": "s3-theory",
              "type": "theory",
              "title": "The Full Solution",
              "content": "The full solution is $x(t) = x_g(t) + mg/k$. \n\nIf underdamped, $x(t) = A e^{-\\gamma t}\\cos(\\omega_1 t + \\theta) + \\frac{mg}{k}$.\n\nPhysically, this just means the mass oscillates around a new, lower equilibrium point shifted by exactly the stretch of the spring under gravity!"
            },
            {
              "id": "s4-numerical",
              "type": "numerical",
              "title": "Calculate the Shift",
              "content": "A 2 kg mass hangs from a spring with $k = 98$ N/m. \nUsing $g = 9.8$ m/s$^2$, what is the equilibrium shift $x_p$ in meters?",
              "numericAnswer": 0.2,
              "numericTolerance": 0.01
            },
            {
              "id": "s5-blank",
              "type": "fill_in_blank",
              "title": "Differential Equations",
              "content": "Finding a solution by simply looking at the equation and guessing an obvious answer is called solving by ___.",
              "blankAnswer": "inspection"
            }
          ]
        },
        {
          "id": "lesson-2-4-3-undamped-forced",
          "title": "Forced Undamped Oscillator",
          "description": "Sinusoidal driving forces and infinite resonance.",
          "icon": "Radio",
          "slides": [
            {
              "id": "s1-theory",
              "type": "theory",
              "title": "Sinusoidal Driving Force",
              "content": "Let's apply a periodic driving force $F(t) = F_0 \\sin \\omega_d t$ to an **undamped** oscillator.\n\n$$m\\ddot{x} + kx = F_0 \\sin \\omega_d t$$\nDividing by $m$ and using $\\omega_0^2 = k/m$:\n$$\\ddot{x} + \\omega_0^2 x = \\frac{F_0}{m} \\sin \\omega_d t$$"
            },
            {
              "id": "s2-example",
              "type": "example",
              "title": "The Complex Trick",
              "content": "To solve this, we replace $\\sin \\omega_d t$ with $e^{i\\omega_d t}$, solve the equation, and take the imaginary part of the answer at the end. \n\nLet $\\xi_p(t) = C e^{i\\omega_d t}$. Substituting this in yields:\n$(-\\omega_d^2 + \\omega_0^2)C = \\frac{F_0}{m}$"
            },
            {
              "id": "s3-proof",
              "type": "proof",
              "title": "Interactive Derivation: Amplitude",
              "content": "Let's isolate the amplitude $C$.",
              "interactiveSteps": [
                {
                  "stepText": "We have $(-\\omega_d^2 + \\omega_0^2)C = \\frac{F_0}{m}$."
                },
                {
                  "prompt": "Solve for C.",
                  "stepText": "$C = \\frac{F_0 / m}{\\omega_0^2 - \\omega_d^2}$",
                  "options": [
                    { "id": "A", "text": "$C = \\frac{F_0 / m}{\\omega_0^2 - \\omega_d^2}$", "isCorrect": true, "explanation": "Simple algebraic isolation." },
                    { "id": "B", "text": "$C = \\frac{F_0 / m}{\\omega_d^2 - \\omega_0^2}$", "isCorrect": false, "explanation": "Check the signs on the omegas." }
                  ]
                },
                {
                  "stepText": "Taking the imaginary part gives the particular solution: $x_p(t) = \\frac{F_0 / m}{\\omega_0^2 - \\omega_d^2} \\sin \\omega_d t$."
                }
              ]
            },
            {
              "id": "s4-quiz",
              "type": "quiz",
              "title": "The Catastrophe of Resonance",
              "content": "Looking at the amplitude $\\frac{F_0 / m}{\\omega_0^2 - \\omega_d^2}$, what happens if the driving frequency $\\omega_d$ is exactly equal to the natural frequency $\\omega_0$?",
              "options": [
                { "id": "1", "text": "The amplitude becomes zero.", "isCorrect": false, "explanation": "The denominator becomes zero, not the whole fraction." },
                { "id": "2", "text": "The amplitude becomes infinite.", "isCorrect": true, "explanation": "Division by zero implies the amplitude grows without bound. This is pure resonance in an undamped system." },
                { "id": "3", "text": "The amplitude stays constant.", "isCorrect": false, "explanation": "It blows up." }
              ]
            }
          ]
        },
        {
          "id": "lesson-2-4-4-damped-forced",
          "title": "Forced Damped Oscillator",
          "description": "How friction tames resonance.",
          "icon": "ActivitySquare",
          "slides": [
            {
              "id": "s1-theory",
              "type": "theory",
              "title": "Adding Damping Back",
              "content": "Real systems have damping, which prevents the amplitude from actually reaching infinity. \n\n$$m\\ddot{x} + b\\dot{x} + kx = F_0 \\sin \\omega_d t$$\n\nUsing the complex exponential trick $Ce^{i\\omega_d t}$, the first derivative adds an $i\\omega_d b/m$ term to the denominator."
            },
            {
              "id": "s2-example",
              "type": "example",
              "title": "The Real Amplitude",
              "content": "After taking the imaginary part and using trig identities, the steady-state particular solution is:\n$$x_p(t) = A_\\omega \\cos(\\omega_d t - \\phi)$$\nwhere the Amplitude is:\n$$A_\\omega = \\frac{F_0}{\\sqrt{m^2(\\omega_0^2 - \\omega_d^2)^2 + \\omega_d^2 b^2}}$$"
            },
            {
              "id": "s3-canvas",
              "type": "theory",
              "title": "Visualization: The Resonance Curve",
              "content": "Plotting $A^2$ vs $\\omega_d$ shows a peak. Because of the $b^2$ term in the denominator, the peak is finite, not infinite.",
              "canvasId": "resonance-curve"
            },
            {
              "id": "s4-quiz",
              "type": "quiz",
              "title": "The Resonant Frequency",
              "content": "Is the peak amplitude exactly at $\\omega_d = \\omega_0$ for a damped oscillator?",
              "options": [
                { "id": "1", "text": "Yes, always.", "isCorrect": false, "explanation": "The extra $\\omega_d^2 b^2$ term shifts the minimum of the denominator slightly." },
                { "id": "2", "text": "No, it is at a slightly lower frequency.", "isCorrect": true, "explanation": "By taking the derivative of the denominator, we find the peak is actually at $\\omega' = \\sqrt{\\omega_0^2 - b^2/2m^2}$." }
              ]
            }
          ]
        },
        {
          "id": "lesson-2-4-5-q-factor",
          "title": "The Q Factor",
          "description": "Measuring the quality of a resonance.",
          "icon": "Wifi",
          "slides": [
            {
              "id": "s1-theory",
              "type": "theory",
              "title": "What is the Q Factor?",
              "content": "The **Q factor** (Quality factor) describes how \"sharp\" the resonance peak is, and inversely, how fast the oscillator loses energy.\n\nDefined by the shape of the curve:\n$$Q = \\frac{\\omega_0}{\\Delta\\omega}$$\nwhere $\\Delta\\omega$ is the full width of the resonance curve at half maximum (FWHM)."
            },
            {
              "id": "s2-example",
              "type": "example",
              "title": "Q in terms of parameters",
              "content": "Mathematically, the width $\\Delta\\omega$ is approximately $b/m$. Therefore:\n$$Q = \\frac{m\\omega_0}{b}$$\n\n*   **High Q:** Small damping ($b$), sharp thin peak, rings for a long time (like a tuning fork).\n*   **Low Q:** Large damping, broad peak, stops quickly (like a car suspension)."
            },
            {
              "id": "s3-proof",
              "type": "proof",
              "title": "Interactive: Energy Loss",
              "content": "Let's see how Q relates to energy loss per cycle in an unforced oscillator.",
              "interactiveSteps": [
                {
                  "stepText": "Energy decays as $E(t) = E_0 e^{-2\\gamma t}$, where $\\gamma = b/2m$."
                },
                {
                  "stepText": "The time for one complete cycle (period) is $T = 2\\pi/\\omega_0$."
                },
                {
                  "prompt": "Substitute $T$ and $\\gamma$ into the exponent $-2\\gamma T$. What is the result?",
                  "stepText": "$-2\\left(\\frac{b}{2m}\\right)\\left(\\frac{2\\pi}{\\omega_0}\\right) = -\\frac{2\\pi b}{m\\omega_0}$.",
                  "options": [
                    { "id": "A", "text": "$-\\frac{2\\pi b}{m\\omega_0}$", "isCorrect": true, "explanation": "Correct substitution." },
                    { "id": "B", "text": "$-\\pi b m \\omega_0$", "isCorrect": false, "explanation": "Watch the denominators." }
                  ]
                },
                {
                  "stepText": "Since $Q = \\frac{m\\omega_0}{b}$, the exponent is exactly $-2\\pi / Q$!"
                },
                {
                  "stepText": "Thus, the ratio of energy after one cycle is $\\frac{E}{E_0} = e^{-2\\pi/Q}$."
                }
              ]
            },
            {
              "id": "s4-numerical",
              "type": "numerical",
              "title": "Calculate Q",
              "content": "A bell has a mass of 5 kg, a natural frequency of 100 rad/s, and a damping coefficient $b = 0.5$ kg/s.\n\nCalculate its Q factor.",
              "numericAnswer": 1000,
              "numericTolerance": 5
            },
            {
              "id": "s5-blank",
              "type": "fill_in_blank",
              "title": "Audio Electronics",
              "content": "To tune a radio precisely to one station without interference from a nearby frequency, the circuit needs a very ___ Q factor.",
              "blankAnswer": "high"
            }
          ]
        },
        {
          "id": "lesson-2-4-6-lrc-circuits",
          "title": "Application: Electrical Circuits",
          "description": "The exact analogy between mechanics and electronics.",
          "icon": "Cpu",
          "slides": [
            {
              "id": "s1-theory",
              "type": "theory",
              "title": "The LRC Circuit",
              "content": "An electrical circuit with an Inductor ($L$), Resistor ($R$), and Capacitor ($C$) obeys Kirchhoff's voltage law:\n$$L\\frac{d^2q}{dt^2} + R\\frac{dq}{dt} + \\frac{1}{C}q = V_{emf}(t)$$\nwhere $q$ is the charge on the capacitor."
            },
            {
              "id": "s2-example",
              "type": "example",
              "title": "The Mechanical Analogy",
              "content": "Compare this to $m\\ddot{x} + b\\dot{x} + kx = F(t)$:\n\n*   **Charge $q$** $\\iff$ Position $x$\n*   **Current $I=\\dot{q}$** $\\iff$ Velocity $\\dot{x}$\n*   **Inductance $L$** $\\iff$ Mass $m$ (Inertia)\n*   **Resistance $R$** $\\iff$ Damping $b$ (Friction)\n*   **Inverse Capacitance $1/C$** $\\iff$ Spring constant $k$"
            },
            {
              "id": "s3-quiz",
              "type": "quiz",
              "title": "Resonant Frequency of a Circuit",
              "content": "Based on the mechanical analogy where $\\omega_0 = \\sqrt{k/m}$, what is the natural resonant frequency of an LC circuit?",
              "options": [
                { "id": "1", "text": "$\\sqrt{RC}$", "isCorrect": false, "explanation": "Resistance is damping, not the spring constant." },
                { "id": "2", "text": "$\\sqrt{1/LC}$", "isCorrect": true, "explanation": "Substituting $k = 1/C$ and $m = L$ gives $\\omega_0 = \\sqrt{1/LC}$." },
                { "id": "3", "text": "$L/C$", "isCorrect": false, "explanation": "Missing the square root." }
              ]
            },
            {
              "id": "s4-numerical",
              "type": "numerical",
              "title": "Calculate Circuit Resonance",
              "content": "An RLC series circuit has a $10 \\Omega$ resistor, a $6 \\times 10^{-6}$ F capacitor, and a $0.2$ H inductor.\n\nDetermine the resonant frequency $\\omega_0$ in rad/s.",
              "numericAnswer": 912.87,
              "numericTolerance": 2
            }
          ]
        }
      ]
    }
  ]
};