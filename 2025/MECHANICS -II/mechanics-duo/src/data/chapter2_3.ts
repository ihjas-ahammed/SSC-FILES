import { Section } from '../types';

export const SECTION_2_3: Section = {
  "id": "section-2-3",
  "title": "Section 3: Advanced Forced & Coupled Oscillators",
  "description": "Mathematical tricks for inhomogeneous equations and systems with multiple masses.",
  "color": "duo-blue",
  "units": [
    {
      "id": "unit-2-5",
      "title": "Solving Inhomogeneous Equations",
      "description": "Techniques and tricks for finding particular solutions.",
      "color": "duo-blue",
      "lessons": [
        {
          "id": "lesson-2-5-1-math-tricks",
          "title": "Mathematical Tricks",
          "description": "Using exponential and complex methods to bypass heavy integration.",
          "icon": "Wand2",
          "slides": [
            {
              "id": "s1-theory",
              "type": "theory",
              "title": "Trick #1: Exponential Forcing",
              "content": "When the forcing function on the right-hand side is of the form $f(t) \propto e^{at}$, we write the differential equation in operator form $D = d/dt$:\n\n$$(D - b_1)(D - b_2)x = Ke^{at}$$\n\nThe particular solution is often simply $x_p = C e^{at}$. You plug this guess back into the equation to find the constant $C$."
            },
            {
              "id": "s2-example",
              "type": "example",
              "title": "Trick #2: Sinusoidal Forcing",
              "content": "When $f(t)$ is a sine or cosine, we use Euler's formula. We write the equation as:\n\n$$(D - b_1)(D - b_2)\\xi_p = K e^{iat}$$\n\nWe solve for the complex function $\\xi_p(t) = C e^{iat}$. \nIf the original force was $K\\sin(at)$, the physical particular solution $x_p$ is just the **imaginary part** of $\\xi_p$. If it was $K\\cos(at)$, it is the **real part**."
            },
            {
              "id": "s3-proof",
              "type": "proof",
              "title": "Interactive Proof: Verifying Trick #1",
              "content": "Let's verify why $x_p = C e^{at}$ works for $(D - b_1)(D - b_2)x = K e^{at}$.",
              "interactiveSteps": [
                {
                  "stepText": "Expand the operator: $(D^2 - (b_1+b_2)D + b_1 b_2)x = Ke^{at}$."
                },
                {
                  "prompt": "If we substitute our guess $x_p = Ce^{at}$, what does the operator $D$ (the derivative $d/dt$) do to $e^{at}$?",
                  "stepText": "Every derivative pulls down a factor of $a$, so $Dx_p = aCe^{at}$ and $D^2x_p = a^2Ce^{at}$.",
                  "options": [
                    { "id": "A", "text": "It removes the exponent.", "isCorrect": false, "explanation": "Derivatives of exponentials reproduce the exponential." },
                    { "id": "B", "text": "It multiplies it by $a$.", "isCorrect": true, "explanation": "By the chain rule, $d/dt(e^{at}) = a e^{at}$." }
                  ]
                },
                {
                  "prompt": "Substitute $D=a$ into the expanded operator equation. What is the algebraic result?",
                  "stepText": "$(a^2 - (b_1+b_2)a + b_1 b_2)C e^{at} = K e^{at}$.",
                  "options": [
                    { "id": "A", "text": "$(a^2 - (b_1+b_2)a + b_1 b_2)C e^{at} = K e^{at}$", "isCorrect": true, "explanation": "The differential equation magically becomes a simple algebraic equation!" },
                    { "id": "B", "text": "$C e^{at} = K e^{at}$", "isCorrect": false, "explanation": "You can't ignore the constants $b_1$ and $b_2$." }
                  ]
                },
                {
                  "stepText": "We can factor the left side back to $(a - b_1)(a - b_2)C = K$. \nTherefore, $C = \\frac{K}{(a-b_1)(a-b_2)}$. The trick works as long as $a \\neq b_1$ and $a \\neq b_2$!"
                }
              ]
            },
            {
              "id": "s4-quiz",
              "type": "quiz",
              "title": "Exercise 11.21",
              "content": "To find the general solution of $(D^2 - 4)x = \\sin t$, what complex function would you set up for Trick #2?",
              "options": [
                { "id": "1", "text": "$(D^2 - 4)\\xi_p = e^{it}$", "isCorrect": true, "explanation": "Since $\\sin t$ has an angular frequency of 1, we use $e^{1it}$." },
                { "id": "2", "text": "$(D^2 - 4)\\xi_p = e^{4it}$", "isCorrect": false, "explanation": "The '4' is part of the homogeneous equation, not the forcing frequency." },
                { "id": "3", "text": "$(D^2 - 4)\\xi_p = \\sin(it)$", "isCorrect": false, "explanation": "We replace the trig function entirely with the complex exponential." }
              ]
            },
            {
              "id": "s5-blank",
              "type": "fill_in_blank",
              "title": "Complex Exponentials",
              "content": "If the driving force is $F_0 \\cos(\\omega_d t)$, the particular solution $x_p(t)$ is the ___ part of the complex solution $\\xi_p(t)$.",
              "blankAnswer": "real"
            }
          ]
        },
        {
          "id": "lesson-2-5-2-worked-examples",
          "title": "Worked Examples 11.4 & 11.5",
          "description": "Solving non-standard inhomogeneous equations and phase angles.",
          "icon": "PenTool",
          "slides": [
            {
              "id": "s1-q",
              "type": "example_q",
              "title": "Example 11.5: The Phase Angle",
              "content": "For a damped forced oscillator, we found the particular solution:\n$$x_p(t) = \\frac{F_0}{m} \\frac{(\\omega_0^2 - \\omega_d^2)\\sin\\omega_d t - (\\omega_d b / m)\\cos\\omega_d t}{(\\omega_0^2 - \\omega_d^2)^2 + (\\omega_d b / m)^2}$$\n\nShow that this can be written as $A\\cos(\\omega_d t - \\phi)$, and find the phase angle $\\phi$."
            },
            {
              "id": "s2-sol",
              "type": "solution",
              "title": "Interactive Solution: Phase Angle",
              "content": "We use the trigonometric identity $A_1 \\sin\\omega t + B_1 \\cos\\omega t = \\sqrt{A_1^2 + B_1^2}\\cos(\\omega t - \\phi)$.",
              "interactiveSteps": [
                {
                  "stepText": "From the identity, we know $\\tan\\phi = A_1 / B_1$."
                },
                {
                  "prompt": "Identify $A_1$ (the coefficient of $\\sin\\omega_d t$) from the numerator.",
                  "stepText": "$A_1 = \\frac{F_0}{m}(\\omega_0^2 - \\omega_d^2)$.",
                  "options": [
                    { "id": "A", "text": "$A_1 = -(\\omega_d b / m)$", "isCorrect": false, "explanation": "That is the coefficient of the cosine term." },
                    { "id": "B", "text": "$A_1 = \\frac{F_0}{m}(\\omega_0^2 - \\omega_d^2)$", "isCorrect": true, "explanation": "Correct." }
                  ]
                },
                {
                  "prompt": "Identify $B_1$ (the coefficient of $\\cos\\omega_d t$) from the numerator.",
                  "stepText": "$B_1 = \\frac{F_0}{m}[-(\\omega_d b / m)]$.",
                  "options": [
                    { "id": "A", "text": "$B_1 = \\frac{F_0}{m}[-(\\omega_d b / m)]$", "isCorrect": true, "explanation": "Correct, including the negative sign." },
                    { "id": "B", "text": "$B_1 = \\omega_0^2 - \\omega_d^2$", "isCorrect": false, "explanation": "That belongs to the sine term." }
                  ]
                },
                {
                  "stepText": "Calculate the ratio: $\\frac{A_1}{B_1} = \\frac{\\omega_0^2 - \\omega_d^2}{-(\\omega_d b / m)}$."
                },
                {
                  "stepText": "Therefore, the phase angle is $\\phi = \\tan^{-1}\\left[ \\frac{-(\\omega_d^2 - \\omega_0^2)}{\\omega_d b / m} \\right]$. This phase shift describes the lag between the applied force and the system's response!"
                }
              ]
            },
            {
              "id": "s3-numerical",
              "type": "numerical",
              "title": "Exercise 11.20: Damped Forcing",
              "content": "Given $(D^2 - 9)x = 5e^{-2t}$.\nUsing Trick #1 where $a = -2$, the particular solution is $x_p = C e^{-2t}$.\nSubstitute $x_p$ into the equation to find $C$. What is the value of $C$?",
              "numericAnswer": -1,
              "numericTolerance": 0.01
            },
            {
              "id": "s4-quiz",
              "type": "quiz",
              "title": "Phase Lag at Resonance",
              "content": "Looking at $\\tan\\phi = \\frac{\\omega_0^2 - \\omega_d^2}{-(\\omega_d b / m)}$, what is the phase angle $\\phi$ exactly at resonance ($\\omega_d = \\omega_0$)?",
              "options": [
                { "id": "1", "text": "0 degrees", "isCorrect": false, "explanation": "If the numerator is zero, tan(phi) is 0. However, due to the negative sign in the denominator and convention, it's actually 90 degrees out of phase in terms of force vs velocity." },
                { "id": "2", "text": "0 radians (Force and displacement are perfectly in phase)", "isCorrect": true, "explanation": "$\\tan\\phi = 0 \\implies \\phi = 0$. The displacement is exactly in phase with the force (if we ignore the velocity lag)." },
                { "id": "3", "text": "Infinite", "isCorrect": false, "explanation": "The tangent is 0, not infinite." }
              ]
            }
          ]
        }
      ]
    }
  ]
};