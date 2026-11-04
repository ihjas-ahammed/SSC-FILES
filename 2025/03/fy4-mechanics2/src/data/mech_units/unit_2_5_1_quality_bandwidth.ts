import { Unit } from '../../types';

export const UNIT_2_5_1_QUALITY_BANDWIDTH: Unit = {
  id: "unit-2-5-1",
  title: "Quality and Bandwidth",
  description: "Characterizing Oscillators",
  color: "duo-indigo",
  lessons: [
    {
      id: "les-2-5-1-1",
      title: "Definition of Q Factor",
      description: "What is Quality?",
      icon: "Star",
      slides: [
        {
          id: "priming",
          type: "quiz",
          title: "Priming Check",
          content: "A cheap bell makes a dull 'thud', while a good bell 'rings' for a long time. The good bell has a:",
          options: [
            { id: "A", text: "Low Q factor", isCorrect: false, explanation: "Low Q means it loses energy fast (high damping)." },
            { id: "B", text: "High Q factor", isCorrect: true, explanation: "High Quality means low damping; it stores and releases energy slowly as sound." }
          ]
        },
        {
          id: "anchor",
          type: "theory",
          title: "The Definition",
          content: "The Q (Quality) factor is a dimensionless parameter that measures how 'good' an oscillator is at storing energy compared to losing it per cycle. It mathematically relates the resonant frequency to the width of the resonance curve.\n\n$$ Q = \\frac{\\omega_0}{\\Delta\\omega} $$\n\nWhere $\\Delta\\omega$ is the Full Width at Half Maximum (FWHM) of the resonance energy curve."
        },
        {
          id: "retrieval",
          type: "fill_in_blank",
          title: "Retrieval",
          content: "A higher Q factor indicates a ___ resonance peak.",
          blankAnswer: "sharper"
        }
      ]
    },
    {
      id: "les-2-5-1-2",
      title: "Figure 11.8 - Resonance Curve",
      description: "FWHM Visualized",
      icon: "BarChart2",
      slides: [
        {
          id: "vis",
          type: "interactive_canvas",
          title: "Full Width at Half Maximum",
          content: "The width $\\Delta\\omega$ is measured horizontally between the two frequencies where the energy (proportional to Amplitude Squared) is exactly half of its peak value.",
          interactiveCanvasId: "resonance-curve-fwhm"
        },
        {
          id: "intuition",
          type: "quiz",
          title: "Peak Sharpness",
          content: "A system with a very sharp, narrow peak in its resonance curve is:",
          options: [
            { id: "A", text: "Highly damped (Low Q)", isCorrect: false },
            { id: "B", text: "Lightly damped (High Q)", isCorrect: true, explanation: "Since $Q = \\omega_0 / \\Delta\\omega$, a small width $\\Delta\\omega$ makes Q very large. This is ideal for tuning a radio." }
          ]
        }
      ]
    },
    {
      id: "les-2-5-1-3",
      title: "Q Formula Derivation",
      description: "In terms of m, b, w",
      icon: "FunctionSquare",
      slides: [
        {
          id: "target",
          type: "theory",
          title: "The Goal",
          content: "Express the Q factor using the physical parameters of the system: $m$, $k$, and $b$."
        },
        {
          id: "proof",
          type: "proof",
          title: "Connecting Width to Damping",
          content: "In the next lesson, we will rigorously prove that the width of the resonance curve is dictated purely by damping and mass.",
          proofSteps: [
            "We will show that $\\Delta\\omega = b/m$.",
            "Substitute this into the definition of Q: $Q = \\frac{\\omega_0}{\\Delta\\omega}$"
          ],
          interactiveSteps: [
            {
              prompt: "Complete the substitution.",
              options: [
                { id: "a", text: "$Q = \\frac{\\omega_0}{b/m} = \\frac{m\\omega_0}{b}$", isCorrect: true, explanation: "This means high mass and high natural frequency, with low damping, yield a high Q." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "les-2-5-1-4",
      title: "Worked Example 11.5",
      description: "Phase Angle Proof",
      icon: "PenTool",
      slides: [
        {
          id: "prob",
          type: "theory",
          title: "The Problem",
          content: "Show that the phase angle $\\phi$ in the expression $x(t) = A\\cos(\\omega t - \\phi)$ is given by $\\tan\\phi = \\frac{\\omega_d b / m}{\\omega_0^2 - \\omega_d^2}$."
        },
        {
          id: "proof",
          type: "proof",
          title: "Complex Argument",
          content: "The phase of the response is related to the phase of the complex amplitude C.",
          interactiveSteps: [
            {
              prompt: "We found $C = \\frac{F_0/m}{X + iY}$, where $X = \\omega_0^2 - \\omega_d^2$ and $Y = b\\omega_d/m$. What is the phase angle of the denominator?",
              options: [
                { id: "a", text: "$\\tan^{-1}(Y/X)$", isCorrect: true, explanation: "The phase of a complex number $X+iY$ is the angle it makes with the real axis." }
              ]
            },
            {
              prompt: "The phase of a fraction $1/Z$ is equal to the negative of the phase of $Z$. This means the response *lags* the force. What is the lag angle $\\phi$?",
              options: [
                { id: "a", text: "$\\phi = \\tan^{-1}(Y/X)$", isCorrect: true, explanation: "This confirms the formula for the phase lag." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "les-2-5-1-5",
      title: "Exercise 11.23",
      description: "Deriving Delta Omega",
      icon: "PenTool",
      slides: [
        {
          id: "target",
          type: "theory",
          title: "The Goal",
          content: "Prove that the Full Width at Half Maximum $\\Delta\\omega = b/m$. We must find the frequencies $\\omega_d$ where the squared amplitude $A^2$ falls to half its maximum value."
        },
        {
          id: "sol",
          type: "solution",
          title: "Scaffolding the Proof",
          content: "$A^2 = \\frac{(F_0/m)^2}{(\\omega_0^2 - \\omega_d^2)^2 + (b\\omega_d/m)^2}$. Set this to half its max value.",
          interactiveSteps: [
            {
              prompt: "The denominator of $A^2$ is $(\\omega_0^2 - \\omega_d^2)^2 + (b\\omega_d/m)^2$. What is its minimum value (which gives max $A^2$)? Assume light damping, so resonance is at $\\omega_d \\approx \\omega_0$.",
              options: [
                { id: "a", text: "$(b\\omega_0/m)^2$", isCorrect: true, explanation: "At resonance, the first term is zero." }
              ]
            },
            {
              prompt: "We need the denominator to be twice its minimum value. Set up the equation.",
              options: [
                { id: "a", text: "$(\\omega_0^2 - \\omega_d^2)^2 + (b\\omega_0/m)^2 = 2(b\\omega_0/m)^2$", isCorrect: true, explanation: "Correct. We approximate $\\omega_d \\approx \\omega_0$ in the small damping term." }
              ]
            },
            {
              prompt: "Simplify and take the square root of both sides.",
              options: [
                { id: "a", text: "$|\\omega_0^2 - \\omega_d^2| = b\\omega_0/m$", isCorrect: true, explanation: "Correct." }
              ]
            },
            {
              prompt: "Factor the left side using difference of squares and the approximation $(\\omega_0 + \\omega_d) \\approx 2\\omega_0$.",
              options: [
                { id: "a", text: "$|(\\omega_0 - \\omega_d)(2\\omega_0)| = b\\omega_0/m$", isCorrect: true, explanation: "Correct. $(\\omega_0 - \\omega_d)$ is the half-width." }
              ]
            },
            {
              prompt: "The full width $\\Delta\\omega = 2|\\omega_0 - \\omega_d|$. Solve for $\\Delta\\omega$.",
              options: [
                { id: "a", text: "$\\Delta\\omega = b/m$", isCorrect: true, explanation: "Proved! The width of the resonance peak is determined solely by the ratio of damping to mass." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "les-2-5-1-6",
      title: "Exercise 11.24",
      description: "Phase Identity",
      icon: "Activity",
      slides: [
        {
          id: "prob",
          type: "proof",
          title: "Trigonometric Identity",
          content: "Show that $A\\sin\\omega t + B\\cos\\omega t = R\\cos(\\omega t - \\phi)$ where $R=\\sqrt{A^2+B^2}$ and $\\tan\\phi = A/B$.",
          proofSteps: [
            "Start with the RHS: $R \\cos(\\omega t - \\phi)$.",
            "Use cosine angle subtraction formula: $\\cos(X-Y) = \\cos X\\cos Y + \\sin X\\sin Y$.",
            "RHS $= R [\\cos\\omega t\\cos\\phi + \\sin\\omega t\\sin\\phi]$.",
            "Draw a right triangle with opposite side=$A$, adjacent side=$B$, hypotenuse=$R$.",
            "From the triangle, $\\cos\\phi = B/R$ and $\\sin\\phi = A/R$.",
            "Substitute these back into the expanded RHS: $R [\\cos\\omega t(B/R) + \\sin\\omega t(A/R)]$.",
            "The hypotenuse $R$ cancels out.",
            "Result: $B\\cos\\omega t + A\\sin\\omega t$. Proved."
          ]
        }
      ]
    },
    {
      id: "les-2-5-1-7",
      title: "Exercise 11.25",
      description: "Exponentially Decaying Force",
      icon: "PenTool",
      slides: [
        {
          id: "prob",
          type: "theory",
          title: "The Problem",
          content: "Find the general solution for a damped oscillator driven by a force $F(t) = F_0 e^{-at}$."
        },
        {
          id: "sol",
          type: "solution",
          title: "Solving with Trick #1",
          content: "The equation is $\\ddot{x} + 2\\gamma\\dot{x} + \\omega_0^2 x = (F_0/m) e^{-at}$.",
          interactiveSteps: [
            {
              prompt: "What is our guess for the particular solution $x_p(t)$?",
              options: [
                { id: "a", text: "$x_p = C e^{-at}$", isCorrect: true, explanation: "We match the form of the driving force." }
              ]
            },
            {
              prompt: "Substitute this guess into the ODE and solve for C.",
              options: [
                { id: "a", text: "$C = \\frac{F_0/m}{a^2 - 2\\gamma a + \\omega_0^2}$", isCorrect: true, explanation: "This is a direct application of Trick #1." }
              ]
            }
          ]
        },
        {
          id: "final",
          type: "theory",
          title: "Full Solution",
          content: "The full solution is the sum of this particular solution and the appropriate transient solution (underdamped, overdamped, or critical)."
        }
      ]
    }
  ]
};