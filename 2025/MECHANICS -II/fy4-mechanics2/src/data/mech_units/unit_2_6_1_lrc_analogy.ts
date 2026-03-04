import { Unit } from '../../types';

export const UNIT_2_6_1_LRC_ANALOGY: Unit = {
  id: "unit-2-6-1",
  title: "The RLC Analogy",
  description: "Mechanical to Electrical Translation",
  color: "duo-pink",
  lessons: [
    {
      id: "les-2-6-1-1",
      title: "Figure 11.9 - The Circuit",
      description: "Visualizing the system",
      icon: "Zap",
      slides: [
        {
          id: "priming",
          type: "quiz",
          title: "Priming Check",
          content: "Math doesn't care about physics. If two totally different physical systems have the exact same differential equation, will they behave the same way mathematically?",
          options: [
            { id: "A", text: "Yes", isCorrect: true, explanation: "This is the beauty of Physics. A mass on a spring is mathematically IDENTICAL to a radio tuning circuit." },
            { id: "B", text: "No", isCorrect: false, explanation: "While physically different, their mathematical description is the same." }
          ]
        },
        {
          id: "vis",
          type: "interactive_canvas",
          title: "RLC Series Circuit",
          content: "A Resistor (R), Inductor (L), and Capacitor (C) connected in series with an AC Voltage source.",
          interactiveCanvasId: "rlc-circuit"
        }
      ]
    },
    {
      id: "les-2-6-1-2",
      title: "Kirchhoff vs Newton",
      description: "The Analogy Dictionary",
      icon: "BookOpen",
      slides: [
        {
          id: "eq",
          type: "theory",
          title: "Kirchhoff's Voltage Law",
          content: "The sum of voltage drops around a closed loop equals the driving voltage:\n$$ L\\frac{d^2q}{dt^2} + R\\frac{dq}{dt} + \\frac{1}{C}q = V(t) $$\n\nCompare this to the mechanical equation:\n$$ m\\frac{d^2x}{dt^2} + b\\frac{dx}{dt} + kx = F(t) $$"
        },
        {
          id: "dictionary",
          type: "theory",
          title: "The Translation Dictionary",
          content: "Mass (Inertia) $m \\iff$ Inductance $L$\nDamping $b \\iff$ Resistance $R$\nStiffness $k \\iff$ Inverse Capacitance $1/C$\nDisplacement $x \\iff$ Charge $q$\nVelocity $v \\iff$ Current $I = dq/dt$"
        },
        {
          id: "retrieval",
          type: "fill_in_blank",
          title: "Retrieval",
          content: "In an electrical circuit, the equivalent of mechanical inertia (mass) is provided by the ___.",
          blankAnswer: "inductor"
        }
      ]
    },
    {
      id: "les-2-6-1-3",
      title: "Figure 11.10 - Current Resonance",
      description: "Current vs Frequency Plot",
      icon: "Activity",
      slides: [
        {
          id: "theory",
          type: "theory",
          title: "Electrical Resonance",
          content: "Just as velocity amplitude peaks at mechanical resonance, the electrical Current $I = \\dot{q}$ peaks at electrical resonance.\n\nWithout resistance ($R=0$), the current would theoretically go to infinity when the driving frequency matches the circuit's natural frequency. This is the core principle behind tuning a radio receiver."
        },
        {
          id: "check",
          type: "quiz",
          title: "Check your logic",
          content: "To change the resonant frequency of your radio, you turn a knob. What physical component is the knob most likely changing?",
          options: [
            { id: "A", text: "The variable Capacitor", isCorrect: true, explanation: "Changing C changes the natural frequency $\\omega_0 = 1/\\sqrt{LC}$ to match the incoming radio station's frequency." },
            { id: "B", text: "The Resistor", isCorrect: false, explanation: "Changing R changes the height and width of the resonance peak (like volume or tuning quality), but not its center frequency." }
          ]
        }
      ]
    },
    {
      id: "les-2-6-1-4",
      title: "Exercise 11.26",
      description: "Resonant Frequency",
      icon: "Calculator",
      slides: [
        {
          id: "prob",
          type: "numerical",
          title: "Tuning a Radio",
          content: "An RLC circuit has $R=10\\Omega$, $C = 6\\mu F$ ($6 \\times 10^{-6}$ F), and $L = 0.2$ H.\n\nDetermine the resonant angular frequency $\\omega_0$ in rad/s.\n\n(Hint: For a mechanical oscillator, $\\omega_0 = \\sqrt{k/m}$. Use the analogy dictionary!).",
          numericAnswer: 913,
          numericTolerance: 5
        },
        {
          id: "sol",
          type: "solution",
          title: "Calculation Steps",
          content: "Translate the formula and calculate.",
          interactiveSteps: [
            {
              prompt: "What is the electrical equivalent of the mechanical natural frequency formula $\\omega_0 = \\sqrt{k/m}$?",
              options: [
                { id: "a", text: "$\\omega_0 = \\sqrt{1/LC}$", isCorrect: true, explanation: "Correct, since $k \\to 1/C$ and $m \\to L$." }
              ]
            },
            {
              prompt: "Substitute the given values into the formula.",
              options: [
                { id: "a", text: "$\\omega_0 = 1 / \\sqrt{0.2 \\times 6\\times 10^{-6}}$", isCorrect: true, explanation: "Correct." },
                { id: "b", text: "$1 / \\sqrt{10 \\times 6\\times 10^{-6}}$", isCorrect: false, explanation: "You used Resistance (damping) instead of Inductance (inertia)!" }
              ]
            },
            {
              prompt: "Calculate the final numerical value.",
              options: [
                { id: "a", text: "$\\approx 913$ rad/s", isCorrect: true, explanation: "$L \\times C = 1.2 \\times 10^{-6}$. The square root is $\\approx 0.001095$. The reciprocal is $912.8$." }
              ]
            }
          ]
        },
        {
          id: "spot_error",
          type: "quiz",
          title: "Spot the Error",
          content: "A student calculates $\\omega_0 = \\sqrt{R/L}$ and gets the wrong answer. Why is this conceptually incorrect?",
          options: [
            { id: "A", text: "Resonance is a battle between inertia (L) and restoring force (C), not friction (R).", isCorrect: true, explanation: "Resistance (damping) determines the height and sharpness of the resonance peak, but not its location (the natural frequency)." },
            { id: "B", text: "The units are wrong.", isCorrect: true, explanation: "This is also correct! $\\sqrt{R/L}$ has units of $1/s$, but the formula is dimensionally incorrect for frequency." }
          ]
        }
      ]
    }
  ]
};