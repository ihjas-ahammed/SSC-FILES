import { Unit } from '../../types';

export const UNIT_3_3_2_PROBABILITY: Unit = {
  id: "unit-3-3-2",
  title: "Probability & Randomness",
  description: "T: The statistical nature of quantum mechanics · D: Probability Amplitude |ψ|²",
  color: "duo-violet",
  lessons: [
    // ── LESSON 1: Priming ─────────────────────────────────────────────────────────
    {
      id: "les-3-3-2-act",
      title: "Priming: Predictability",
      description: "Activate prior thinking about determinism vs randomness",
      icon: "Brain",
      slides: [
        {
          id: "prob-prime-1",
          type: "quiz",
          title: "Priming Question",
          content: "In classical physics, if you know the exact initial position, velocity, and forces on a coin being flipped, can you predict whether it will land heads or tails?",
          options: [
            { id: "A", text: "Yes, classical physics is entirely deterministic.", isCorrect: true, explanation: "In Newtonian mechanics, the universe is like clockwork. 'Randomness' just means we lack enough information to do the calculation." },
            { id: "B", text: "No, coin flips are fundamentally random.", isCorrect: false, explanation: "A coin is a macroscopic object obeying classical mechanics. It is fully deterministic, just highly sensitive to starting conditions." }
          ]
        },
        {
          id: "prob-prime-2",
          type: "quiz",
          title: "The Quantum Shift",
          content: "If you prepare two identical radioactive atoms in exactly the same way, will they decay at exactly the same time?",
          options: [
            { id: "A", text: "Yes, identical initial conditions yield identical results.", isCorrect: false, explanation: "This is true in classical physics, but not in quantum physics." },
            { id: "B", text: "No, their decay times are completely random and unpredictable.", isCorrect: true, explanation: "Correct. Quantum mechanics introduces *fundamental* randomness into nature. Identically prepared systems do NOT show identical subsequent behavior." }
          ]
        }
      ]
    },

    // ── LESSON 2: Theory: Fundamental Randomness ──────────────────────────────────
    {
      id: "les-3-3-2-1",
      title: "Fundamental Randomness",
      description: "T: Why quantum mechanics relies on statistics",
      icon: "Dices",
      slides: [
        {
          id: "rand-theory-1",
          type: "theory",
          title: "Probability in Quantum Mechanics",
          content: "A fundamental rupture from classical physics is that **systems prepared in identical ways do not show identical subsequent behavior**.\n\nWe cannot predict the outcome of a *single* measurement (like exactly when one atom will decay, or exactly where one electron will hit a screen).\n\nHowever, we CAN predict the **statistical distribution** of a large number of measurements. Quantum mechanics provides the mathematical procedure to calculate the average outcome and probability distribution of events. \n\nThis random behavior is not due to 'hidden variables' or our lack of knowledge; it is a fundamental aspect of nature."
        },
        {
          id: "rand-q1",
          type: "quiz",
          title: "Conceptual Check",
          content: "Einstein famously disliked this aspect of quantum mechanics, stating 'God does not play dice with the universe.' He believed in 'hidden variables'—that we just didn't know enough about the system yet to predict it perfectly. Was Einstein right?",
          options: [
            { id: "A", text: "Yes, later experiments found the hidden variables.", isCorrect: false, explanation: "No hidden variables have ever been found." },
            { id: "B", text: "No, experiments have shown that the randomness is inherent to the laws of quantum physics.", isCorrect: true, explanation: "Bell's Theorem and subsequent experiments proved that local hidden variables cannot exist. Nature truly does play dice!" }
          ]
        }
      ]
    },

    // ── LESSON 3: Definition: Probability Amplitude ───────────────────────────────
    {
      id: "les-3-3-2-2",
      title: "The Probability Amplitude",
      description: "D: Connecting the wave function to physical reality",
      icon: "Activity",
      slides: [
        {
          id: "amp-theory-1",
          type: "theory",
          title: "The Born Interpretation",
          content: "If a particle is described by a de Broglie wave, what is actually 'waving'? It is not a physical displacement like water, nor a pressure wave like sound.\n\nIn 1926, Max Born proposed that the wave function $\\psi(x)$ is a **Probability Amplitude**.\n\nThe square of its absolute magnitude gives the **Probability Density** $P(x)$:\n$$\\boxed{P(x) = |\\psi(x)|^2} \\qquad (\\text{Eq. 5.7})$$\n\n$P(x)$ tells us the probability per unit length of finding the particle near position $x$.\nWhere the wave amplitude is large, the particle is highly likely to be found. Where it is zero, the particle will never be found."
        },
        {
          id: "amp-canvas",
          type: "interactive_canvas",
          title: "Wave Function vs Probability Density",
          content: "The wave function $\\psi$ can be negative, but the probability density $|\\psi|^2$ is strictly positive.",
          interactiveCanvasId: "probability-density"
        },
        {
          id: "amp-q1",
          type: "quiz",
          title: "Conceptual Check",
          content: "Why do we take the square of the absolute magnitude $|\\psi(x)|^2$ rather than just using $\\psi(x)$ directly as the probability?",
          options: [
            { id: "A", text: "Because wave functions can be negative or complex numbers, but probabilities must be real, positive numbers.", isCorrect: true, explanation: "Exactly. You can't have a -20% chance or an imaginary chance of finding an electron! Squaring the absolute value ensures a positive, real probability." },
            { id: "B", text: "Because it matches the classical kinetic energy formula.", isCorrect: false, explanation: "It has nothing to do with kinetic energy. It's about mathematical requirements for probability." }
          ]
        },
        {
          id: "amp-fitb",
          type: "fill_in_blank",
          title: "Fill in the Blank",
          content: "The probability density $P(x)$ is found by taking the square of the absolute magnitude of the wave ___.",
          blankAnswer: "amplitude"
        }
      ]
    },

    // ── LESSON 4: Theory: Normalization & Expectation Values ──────────────────────
    {
      id: "les-3-3-2-3",
      title: "Normalization & Averages",
      description: "T: Math tools for probability",
      icon: "FunctionSquare",
      slides: [
        {
          id: "norm-theory-1",
          type: "theory",
          title: "Normalization Condition",
          content: "If $P(x) dx$ is the probability of finding a particle in a tiny interval $dx$, then what is the probability of finding the particle *somewhere* in the entire universe?\n\nIt must be exactly 100% (or 1). Therefore, the integral of the probability density over all space must equal 1:\n$$\\boxed{\\int_{-\\infty}^{+\\infty} |\\psi(x)|^2 \\, dx = 1} \\qquad (\\text{Eq. 5.9})$$\n\nThis is called the **normalization condition**. We use it to find the scaling constants for wave functions so they represent valid physical probabilities."
        },
        {
          id: "exp-theory-2",
          type: "theory",
          title: "Expectation Values",
          content: "Since we cannot predict single outcomes, we calculate the average outcome of many measurements, called the **Expectation Value**.\n\nFor position $x$, the average expected value is:\n$$\\boxed{x_{\\text{av}} = \\int_{-\\infty}^{+\\infty} x |\\psi(x)|^2 \\, dx} \\qquad (\\text{Eq. 5.12})$$\n\nIn general, the expectation value of any function $f(x)$ is:\n$$[f(x)]_{\\text{av}} = \\int_{-\\infty}^{+\\infty} f(x) |\\psi(x)|^2 \\, dx$$"
        },
        {
          id: "norm-q1",
          type: "quiz",
          title: "Conceptual Check",
          content: "Suppose a mathematical solution to a wave equation gives $\\psi(x) = A e^{kx}$ for $x > 0$ (where $k$ is positive). Can this represent a real particle?",
          options: [
            { id: "A", text: "Yes, it is a valid exponential wave.", isCorrect: false, explanation: "Look at what happens as $x \\to \\infty$." },
            { id: "B", text: "No, because as $x \\to \\infty$, the wave function blows up to infinity, meaning it cannot be normalized.", isCorrect: true, explanation: "Correct! If the area under the curve is infinite, the probability integral cannot equal 1. We must discard solutions that blow up to infinity." }
          ]
        }
      ]
    },

    // ── LESSON 5: Example Probability Calculation ─────────────────────────────────
    {
      id: "les-3-3-2-4",
      title: "Calculating Probabilities",
      description: "Ex: Finding the chance to locate a particle",
      icon: "Calculator",
      slides: [
        {
          id: "prob-ex-q",
          type: "example_q",
          title: "Example — Probability in an Interval",
          content: "**Problem:**\nA particle is confined to a region between $x=0$ and $x=L$. Its normalized wave function is:\n$$\\psi(x) = \\sqrt{\\frac{2}{L}} \\sin\\left(\\frac{\\pi x}{L}\\right)$$\n\nWhat is the probability of finding the particle in the left half of the region (between $x=0$ and $x=L/2$)?"
        },
        {
          id: "prob-ex-sol",
          type: "proof",
          title: "Interactive Solution",
          content: "We must integrate the probability density $P(x) = |\\psi(x)|^2$ over the given interval.",
          interactiveSteps: [
            {
              stepText: "Set up the integral:\n$$P(0 \\text{ to } L/2) = \\int_{0}^{L/2} |\\psi(x)|^2 \\, dx$$"
            },
            {
              prompt: "Substitute the wave function and square it.",
              stepText: "$$P = \\int_{0}^{L/2} \\frac{2}{L} \\sin^2\\left(\\frac{\\pi x}{L}\\right) \\, dx$$",
              options: [
                { id: "A", text: "Proceed", isCorrect: true, explanation: "" }
              ]
            },
            {
              prompt: "Symmetry trick! The function $\\sin^2(\\pi x/L)$ is perfectly symmetric around the midpoint $x = L/2$. Since the total integral from $0$ to $L$ must be $1$, what is the integral over exactly half that symmetric region?",
              stepText: "Due to symmetry, exactly half the total probability lies in the left half of the region.\n$$P(0 \\text{ to } L/2) = 0.5$$",
              options: [
                { id: "A", text: "$0.5$ (or 50%)", isCorrect: true, explanation: "Correct! Symmetrical wave functions make finding probabilities over symmetric halves very easy without doing complex integration." },
                { id: "B", text: "$1.0$", isCorrect: false, explanation: "That would mean it's 100% guaranteed to be in the left half, which isn't true." }
              ]
            }
          ]
        },
        {
          id: "prob-ex-interp",
          type: "quiz",
          title: "Physical Interpretation",
          content: "For that same wave function $\\psi(x) = \\sqrt{\\frac{2}{L}} \\sin(\\frac{\\pi x}{L})$, the probability density is maximum at the very center ($x=L/2$). Classically, a bouncing ball spends equal time everywhere. How does the quantum particle behave?",
          options: [
            { id: "A", text: "It is found equally everywhere.", isCorrect: false, explanation: "That's the classical view." },
            { id: "B", text: "It is much more likely to be found near the middle than near the edges.", isCorrect: true, explanation: "The probability peaks at the center and drops to zero at the walls! This highly non-classical behavior is driven entirely by its wave nature." }
          ]
        }
      ]
    }
  ]
};