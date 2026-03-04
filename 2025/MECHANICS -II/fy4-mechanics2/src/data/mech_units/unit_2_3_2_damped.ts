import { Unit } from '../../types';

export const UNIT_2_3_2_DAMPED: Unit = {
  id: "unit-2-3-2",
  title: "The Damped Oscillator",
  description: "Friction and Decay",
  color: "duo-green",
  lessons: [
    {
      id: "les-2-3-2-1",
      title: "Figure 11.4 - Retarding Force",
      description: "Modeling Friction",
      icon: "Wind",
      slides: [
        {
          id: "priming",
          type: "quiz",
          title: "Priming Check",
          content: "Does air resistance (drag) on a moving car depend on how fast the car is going?",
          options: [
            { id: "A", text: "Yes", isCorrect: true, explanation: "Drag forces usually scale with velocity or velocity squared." },
            { id: "B", text: "No", isCorrect: false }
          ]
        },
        {
          id: "intro",
          type: "theory",
          title: "The Damping Term",
          content: "We model linear damping as a force proportional to velocity:\n$$ F_f = -b\\dot{x} $$\n\nAdding this to Newton's 2nd Law:\n$$ m\\ddot{x} + b\\dot{x} + kx = 0 $$"
        }
      ]
    },
    {
      id: "les-2-3-2-2",
      title: "Table 11.1 - The 3 Cases",
      description: "Classifying Damping",
      icon: "Layers",
      slides: [
        {
          id: "vis_comp",
          type: "interactive_canvas",
          title: "Comparison",
          content: "Comparing how different damping levels return to equilibrium.",
          interactiveCanvasId: "damping-comparison"
        },
        {
          id: "table",
          type: "theory",
          title: "Classification",
          content: "Let $\\gamma = b/2m$ and $\\omega_0 = \\sqrt{k/m}$. The auxiliary equation roots are $p = -\\gamma \\pm \\sqrt{\\gamma^2 - \\omega_0^2}$.\n\n1. **Underdamped** ($\\gamma < \\omega_0$): Complex roots. Oscillates.\n2. **Critically Damped** ($\\gamma = \\omega_0$): Repeated real root. Fastest return.\n3. **Overdamped** ($\\gamma > \\omega_0$): Real distinct roots. Slow, sludgy return."
        }
      ]
    },
    {
      id: "les-2-3-2-3",
      title: "Case 1: Underdamped",
      description: "Eq 11.15",
      icon: "Activity",
      slides: [
        {
          id: "derive",
          type: "proof",
          title: "Derivation",
          content: "Since $\\gamma < \\omega_0$, the term under the square root is negative.",
          proofSteps: [
            "Roots: $p = -\\gamma \\pm i\\omega_1$, where $\\omega_1 = \\sqrt{\\omega_0^2 - \\gamma^2}$.",
            "General Solution: $x(t) = e^{-\\gamma t}(C_1 e^{i\\omega_1 t} + C_2 e^{-i\\omega_1 t})$.",
            "Using Euler's formula: $x(t) = A e^{-\\gamma t} \\cos(\\omega_1 t + \\theta)$."
          ]
        },
        {
          id: "vis",
          type: "interactive_canvas",
          title: "The Envelope",
          content: "The exponential term $e^{-\\gamma t}$ acts as a decay 'envelope' squeezing the cosine wave.",
          interactiveCanvasId: "damped-envelope"
        }
      ]
    },
    {
      id: "les-2-3-2-4",
      title: "Case 2: Overdamped",
      description: "Eq 11.16",
      icon: "TrendingDown",
      slides: [
        {
          id: "derive",
          type: "proof",
          title: "Derivation",
          content: "Since $\\gamma > \\omega_0$, the square root is positive real.",
          proofSteps: [
            "Let $\\alpha = \\sqrt{\\gamma^2 - \\omega_0^2}$.",
            "Roots: $p = -\\gamma \\pm \\alpha$.",
            "Solution: $x(t) = C_1 e^{-(\\gamma - \\alpha)t} + C_2 e^{-(\\gamma + \\alpha)t}$.",
            "Both exponents are negative, so it's a sum of two decaying exponentials with NO oscillation."
          ]
        }
      ]
    },
    {
      id: "les-2-3-2-5",
      title: "Case 3: Critically Damped",
      description: "Repeated Roots",
      icon: "Minimize2",
      slides: [
        {
          id: "derive",
          type: "proof",
          title: "Derivation",
          content: "Here $\\gamma = \\omega_0$, so the square root is zero.",
          proofSteps: [
            "Root: $p = -\\gamma$ (repeated twice).",
            "Math rule for repeated roots: multiply second term by $t$.",
            "Solution: $x(t) = (C_1 + C_2 t) e^{-\\gamma t}$."
          ]
        },
        {
          id: "theory",
          type: "theory",
          title: "Physical Significance",
          content: "Critical damping is used in car shock absorbers and door closers. It returns the system to equilibrium in the fastest possible time without overshooting."
        }
      ]
    },
    {
      id: "les-2-3-2-6",
      title: "Worked Example 11.3",
      description: "Decay Time",
      icon: "Clock",
      slides: [
        {
          id: "prob",
          type: "numerical",
          title: "Oscillations before decay",
          content: "An underdamped oscillator has $k=2$, $m=1$, $b=0.1$. How many oscillations occur before the amplitude decreases to $1/e$ of its initial value?",
          numericAnswer: 4.5, // gamma = b/2m = 0.1/2 = 0.05. Time to 1/e is t = 1/gamma = 20s. 
          // w0^2 = 2. w1 = sqrt(2 - 0.05^2) = sqrt(2 - 0.0025) = sqrt(1.9975) = 1.413 rad/s.
          // f = w1 / 2pi = 1.413 / 6.28 = 0.225 Hz.
          // Oscillations = f * t = 0.225 * 20 = 4.5.
          numericTolerance: 0.2
        },
        {
          id: "sol",
          type: "solution",
          title: "Solution",
          content: "Calculate decay time and frequency.",
          interactiveSteps: [
            {
              stepText: "Time for amplitude to hit $1/e$ is $\\tau = 1/\\gamma$. Calculate $\\tau$.",
              options: [
                { id: "a", text: "20 seconds", isCorrect: true, explanation: "$\\gamma = b/2m = 0.05$. $1/0.05 = 20$." }
              ]
            },
            {
              stepText: "Calculate damped frequency $\\omega_1 = \\sqrt{\\omega_0^2 - \\gamma^2}$.",
              options: [
                { id: "a", text: "$\\approx 1.413$ rad/s", isCorrect: true, explanation: "$\\sqrt{2 - 0.0025}$." }
              ]
            },
            {
              stepText: "Total phase $\\omega_1 \\tau$. Divide by $2\\pi$ for number of cycles.",
              options: [
                { id: "a", text: "$4.5$ cycles", isCorrect: true, explanation: "$(1.413 \\times 20) / 2\\pi = 28.26 / 6.283 = 4.5$." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "les-2-3-2-7",
      title: "Exercise 11.12",
      description: "Underdamped Constants",
      icon: "PenTool",
      slides: [
        {
          id: "prob",
          type: "proof",
          title: "Complex Constants",
          content: "Show that $C_1 = \\frac{1}{2} A e^{i\\theta}$ and $C_2 = \\frac{1}{2} A e^{-i\\theta}$ lead to a real solution.",
          proofSteps: [
            "$x = e^{-\\gamma t} ( C_1 e^{i\\omega_1 t} + C_2 e^{-i\\omega_1 t} ) $",
            "Substitute C1, C2: $x = \\frac{A}{2} e^{-\\gamma t} ( e^{i(\\omega_1 t + \\theta)} + e^{-i(\\omega_1 t + \\theta)} ) $",
            "Recall Euler: $\\cos(Z) = \\frac{e^{iZ} + e^{-iZ}}{2}$",
            "Result: $x = A e^{-\\gamma t} \\cos(\\omega_1 t + \\theta)$."
          ]
        }
      ]
    },
    {
      id: "les-2-3-2-8",
      title: "Exercise 11.13",
      description: "General Solution Steps",
      icon: "PenTool",
      slides: [
        {
          id: "prob",
          type: "solution",
          title: "Solve $\\ddot{x} + 2\\gamma\\dot{x} + \\omega_0^2 x = 0$",
          content: "Provide the auxiliary roots.",
          interactiveSteps: [
            {
              stepText: "Quadratic formula for $p^2 + 2\\gamma p + \\omega_0^2 = 0$.",
              options: [
                { id: "a", text: "$p = \\frac{-2\\gamma \\pm \\sqrt{4\\gamma^2 - 4\\omega_0^2}}{2}$", isCorrect: true, explanation: "Correct." }
              ]
            },
            {
              stepText: "Simplify.",
              options: [
                { id: "a", text: "$p = -\\gamma \\pm \\sqrt{\\gamma^2 - \\omega_0^2}$", isCorrect: true, explanation: "This dictates the three regimes of damping." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "les-2-3-2-9",
      title: "Exercise 11.14",
      description: "Overdamped Plot",
      icon: "TrendingDown",
      slides: [
        {
          id: "prob",
          type: "theory",
          title: "Overdamped Initial Conditions",
          content: "Assume $x(0) = 1$ and $\\dot{x}(0) = 0$. Let $\\gamma_1 = 3.414$ and $\\gamma_2 = 0.586$.\n\nThe solution is $x(t) = C_1 e^{-\\gamma_1 t} + C_2 e^{-\\gamma_2 t}$. Determine $C_1$ and $C_2$."
        },
        {
          id: "sol",
          type: "solution",
          title: "Solving",
          content: "Use ICs.",
          interactiveSteps: [
            {
              stepText: "$C_1 + C_2 = 1$. Find $\\dot{x}(0)$.",
              options: [
                { id: "a", text: "$-\\gamma_1 C_1 - \\gamma_2 C_2 = 0$", isCorrect: true, explanation: "Correct." }
              ]
            },
            {
              stepText: "Solve system.",
              options: [
                { id: "a", text: "$C_1 = \\frac{-\\gamma_2}{\\gamma_1 - \\gamma_2}$, $C_2 = \\frac{\\gamma_1}{\\gamma_1 - \\gamma_2}$", isCorrect: true, explanation: "Correct." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "les-2-3-2-10",
      title: "Exercise 11.17",
      description: "Critical Constants",
      icon: "PenTool",
      slides: [
        {
          id: "prob",
          type: "numerical",
          title: "Evaluating Constants",
          content: "Critically damped oscillator: $b=0.3$, $k=0.4$ (mass not given, but $\\gamma=\\omega_0$). Released from rest at $x(0)=0.04$.\n\nSolution is $x(t) = (C_1 + C_2 t)e^{-\\gamma t}$. Find $C_1$.",
          numericAnswer: 0.04,
          numericTolerance: 0.001
        },
        {
          id: "prob2",
          type: "solution",
          title: "Evaluating C2",
          content: "Find $C_2$.",
          interactiveSteps: [
            {
              stepText: "Apply $\\dot{x}(0) = 0$.",
              options: [
                { id: "a", text: "$C_2 - \\gamma C_1 = 0$", isCorrect: true, explanation: "Derivative is $C_2 e^{-\\gamma t} - \\gamma(C_1+C_2 t)e^{-\\gamma t}$. At $t=0$, $C_2 - \\gamma C_1 = 0$." }
              ]
            },
            {
              stepText: "Since $\\gamma = b/2m$ and $\\omega_0^2 = k/m$. From $\\gamma^2 = \\omega_0^2$, $b^2/4m^2 = k/m \\implies m = b^2/4k = 0.09 / 1.6 = 0.05625$. So $\\gamma = 0.3 / 0.1125 = 2.667$.",
              options: [
                { id: "a", text: "$C_2 = 2.667 \\times 0.04 = 0.107$", isCorrect: true, explanation: "Correct." }
              ]
            }
          ]
        }
      ]
    }
  ]
};