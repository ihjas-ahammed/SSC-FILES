import { Unit } from '../../types';

export const UNIT_2_4_1_DRIVING_FORCES: Unit = {
  id: "unit-2-4-1",
  title: "Driving Forces",
  description: "Inhomogeneous ODEs",
  color: "duo-red",
  lessons: [
    {
      id: "les-2-4-1-1",
      title: "Equation for Driven Oscillator",
      description: "Deriving Eq 11.17",
      icon: "Activity",
      slides: [
        {
          id: "target",
          type: "theory",
          title: "The Destination",
          content: "We aim to establish the governing equation for a harmonic oscillator subjected to an external driving force $F(t)$:\n$$ m\\ddot{x} + b\\dot{x} + kx = F(t) $$"
        },
        {
          id: "setup",
          type: "theory",
          title: "The Setup",
          content: "We apply Newton's Second Law ($\\Sigma F_{net} = ma$) to a mass on a spring with damping, now including an external push or pull."
        },
        {
          id: "proof",
          type: "proof",
          title: "Derivation",
          content: "Summing all forces acting on the mass.",
          interactiveSteps: [
            {
              prompt: "Identify the three main forces acting on the mass.",
              stepText: "The net force is the sum of the spring force, damping force, and external force.",
              options: [
                {id: "a", text: "$F_{net} = -kx - b\\dot{x} + F(t)$", isCorrect: true, explanation: "Correct. Restoring force, damping force, and the external driving force."}
              ]
            },
            {
              prompt: "Set the net force equal to $ma$ and rearrange into standard form.",
              stepText: "Move all terms involving $x$ and its derivatives to the left side.",
              options: [
                { id: "a", text: "$m\\ddot{x} + b\\dot{x} + kx = F(t)$", isCorrect: true, explanation: "This is a linear, second-order, inhomogeneous ordinary differential equation." }
              ]
            }
          ]
        },
        {
          id: "sig",
          type: "quiz",
          title: "Physical Significance",
          content: "Why is the right-hand side $F(t)$ no longer zero, unlike in a damped oscillator?",
          options: [
            { id: "A", text: "Because energy is being conserved.", isCorrect: false, explanation: "Actually, energy is constantly being pumped into the system by the force and drained out by the damping." },
            { id: "B", text: "Because the system is not isolated.", isCorrect: true, explanation: "An external agent is actively applying force over time, preventing it from being a closed system." }
          ]
        }
      ]
    },
    {
      id: "les-2-4-1-2",
      title: "Complementary vs Particular",
      description: "Solution Structure",
      icon: "GitMerge",
      slides: [
        {
          id: "priming",
          type: "quiz",
          title: "Priming Check",
          content: "When you start pushing a swing, it takes a few seconds to settle into a smooth rhythm. What are those chaotic first few seconds called?",
          options: [
            { id: "A", text: "Steady-state motion", isCorrect: false, explanation: "Steady-state is the smooth, predictable motion that happens AFTER it settles." },
            { id: "B", text: "Transient motion", isCorrect: true, explanation: "Transients are the initial, short-lived motions that die out over time due to friction (damping)." }
          ]
        },
        {
          id: "anchor",
          type: "theory",
          title: "The Two Parts (Rule 3)",
          content: "The general solution to an inhomogeneous differential equation is the sum of two distinct parts:\n$$ x(t) = x_c(t) + x_p(t) $$\n\n1. **Complementary ($x_c$):** The solution to the homogeneous equation ($F=0$). It represents the **Transient** motion that eventually dies out due to damping.\n2. **Particular ($x_p$):** Any specific solution that satisfies the full driven equation. It represents the long-term **Steady-State** motion, oscillating at the driving frequency."
        },
        {
          id: "retrieval",
          type: "fill_in_blank",
          title: "Retrieval Practice",
          content: "The part of the solution that dictates the long-term behavior after transients die out is called the ___ solution.",
          blankAnswer: "particular"
        }
      ]
    },
    {
      id: "les-2-4-1-3",
      title: "Trick #1: Exponential Forcing",
      description: "Guessing solutions",
      icon: "TrendingUp",
      slides: [
        {
          id: "target",
          type: "theory",
          title: "The Goal",
          content: "We want to find the particular solution $x_p(t)$ when the driving force is a simple exponential: $F(t) = K e^{at}$."
        },
        {
          id: "proof",
          type: "proof",
          title: "The Exponential Trick",
          content: "We make an educated guess that the system will respond with a solution of the same form.",
          interactiveSteps: [
            {
              prompt: "What is a logical guess for the form of the particular solution $x_p(t)$?",
              stepText: "Guess: $x_p(t) = C e^{at}$.",
              options: [
                { id: "a", text: "$x_p(t) = C e^{at}$", isCorrect: true, explanation: "Since derivatives of exponentials are still exponentials, this form is likely to work." }
              ]
            },
            {
              prompt: "Substitute this guess into the ODE: $m\\ddot{x} + b\\dot{x} + kx = K e^{at}$. What do you get?",
              stepText: "Differentiate: $\\dot{x}_p = aC e^{at}$, $\\ddot{x}_p = a^2C e^{at}$. Substitute and factor out $C e^{at}$.",
              options: [
                { id: "a", text: "$C(m a^2 + b a + k)e^{at} = K e^{at}$", isCorrect: true, explanation: "The exponential term appears on both sides!" }
              ]
            },
            {
              prompt: "Now, solve algebraically for the unknown constant C.",
              stepText: "Divide both sides by $e^{at}$.",
              options: [
                { id: "a", text: "$C = \\frac{K}{ma^2 + ba + k}$", isCorrect: true, explanation: "This gives us our particular solution instantly. The physics is encoded in the denominator." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "les-2-4-1-4",
      title: "Trick #2: Complex Forcing",
      description: "Using Euler's formula",
      icon: "Waves",
      slides: [
        {
          id: "target",
          type: "theory",
          title: "The Goal",
          content: "We want to find $x_p(t)$ when the force is sinusoidal, like $F_0 \\sin(\\omega_d t)$. Calculating derivatives of sines and cosines repeatedly is tedious."
        },
        {
          id: "proof",
          type: "proof",
          title: "The Complex Substitution",
          content: "We replace the real force with a complex one that's easier to differentiate.",
          interactiveSteps: [
            {
              prompt: "Using Euler's formula $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$, how can we represent our real force $F_0 \\sin(\\omega_d t)$?",
              stepText: "$F(t) = \\text{Im}(F_0 e^{i\\omega_d t})$",
              options: [
                { id: "a", text: "As the imaginary part of $F_0 e^{i\\omega_d t}$.", isCorrect: true, explanation: "Correct. A cosine force would be the real part." }
              ]
            },
            {
              prompt: "The strategy is to solve the ODE for the complex force $F(t)_{complex} = F_0 e^{i\\omega_d t}$ to get a complex solution $\\xi_p(t)$. How do we get the real answer at the end?",
              stepText: "Since our real force was the *imaginary part* of the complex force, our real solution will be the *imaginary part* of the complex solution.",
              options: [
                { id: "a", text: "Take the imaginary part of $\\xi_p(t)$.", isCorrect: true, explanation: "This powerful trick simplifies the algebra immensely." },
                { id: "b", text: "Take the magnitude of $\\xi_p(t)$.", isCorrect: false, explanation: "The magnitude gives the amplitude, but not the time-varying position." }
              ]
            }
          ]
        }
      ]
    }
  ]
};