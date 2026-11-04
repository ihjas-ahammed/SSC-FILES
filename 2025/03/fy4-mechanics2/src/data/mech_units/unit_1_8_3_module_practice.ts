import { Unit } from '../../types';

export const UNIT_1_8_3_MODULE_PRACTICE: Unit = {
  id: "unit-1-8-3",
  title: "Module 1 Practice",
  description: "Comprehensive Problems",
  color: "duo-pink",
  lessons: [
    {
      id: "les-1-8-3-1",
      title: "Exercise 10.14",
      description: "Plotting Orbits",
      icon: "PenTool",
      slides: [
        {
          id: "prob",
          type: "theory",
          title: "Plotting",
          content: "Plot the equation $r = \\frac{p}{1+e\\cos\\theta}$ for $e=0, 0.5, 1.0$."
        },
        {
          id: "vis",
          type: "interactive_canvas",
          title: "Orbit Plotter",
          content: "Observe the transition from Circle to Parabola.",
          interactiveCanvasId: "conic-eccentricity"
        }
      ]
    },
    {
      id: "les-1-8-3-2",
      title: "Exercise 10.15",
      description: "Asteroid Period",
      icon: "PenTool",
      slides: [
        {
          id: "prob",
          type: "numerical",
          title: "Asteroid Axis",
          content: "An asteroid has a period of 4 years. What is its semimajor axis in AU?\n\n(Hint: For Earth, $T=1$ yr, $a=1$ AU. Use ratios.)",
          numericAnswer: 2.52, // 4^2 = a^3 -> 16 = a^3 -> a = cuberoot(16) approx 2.519
          numericTolerance: 0.1
        },
        {
          id: "sol",
          type: "solution",
          title: "Ratio Method",
          content: "Use $(T/T_E)^2 = (a/a_E)^3$.",
          interactiveSteps: [
            {
              stepText: "Calculate $4^2$.",
              options: [
                { id: "a", text: "16", isCorrect: true, explanation: "Correct." }
              ]
            },
            {
              stepText: "Find $\\sqrt[3]{16}$.",
              options: [
                { id: "a", text: "2.52", isCorrect: true, explanation: "Correct." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "les-1-8-3-3",
      title: "Exercise 10.16",
      description: "Saturn Mass Correction",
      icon: "PenTool",
      slides: [
        {
          id: "prob",
          type: "theory",
          title: "Saturn's Period",
          content: "Using the corrected 3rd law, calculate the effect of Saturn's mass ($M_{Sat} \\approx 95 M_{Earth}$) on its period compared to a massless test particle."
        },
        {
          id: "quiz",
          type: "quiz",
          title: "Effect Check",
          content: "Does including Saturn's mass make the period shorter or longer?",
          options: [
            { id: "A", text: "Longer", isCorrect: false, explanation: "Mass is in the denominator ($M+m$)." },
            { id: "B", text: "Shorter", isCorrect: true, explanation: "Larger mass term in denominator means smaller $T^2$. The planet orbits slightly faster." }
          ]
        }
      ]
    },
    {
      id: "les-1-8-3-4",
      title: "Exercise 10.17",
      description: "Circular Limit",
      icon: "PenTool",
      slides: [
        {
          id: "prob",
          type: "theory",
          title: "Circular derivation",
          content: "Use $F = ma = mv^2/r$ for a circular orbit to derive Kepler's 3rd Law immediately."
        },
        {
          id: "derive",
          type: "proof",
          title: "Quick Derivation",
          content: "Equate forces.",
          proofSteps: [
            "$\\frac{GMm}{r^2} = \\frac{mv^2}{r}$",
            "$v^2 = \\frac{GM}{r}$",
            "Use $v = \\frac{2\\pi r}{T}$",
            "$\\frac{4\\pi^2 r^2}{T^2} = \\frac{GM}{r}$",
            "$T^2 = \\frac{4\\pi^2}{GM} r^3$"
          ]
        }
      ]
    },
    {
      id: "les-1-8-3-5",
      title: "Exercise 10.18",
      description: "Halley's Comet",
      icon: "Star",
      slides: [
        {
          id: "prob",
          type: "numerical",
          title: "Halley's Comet",
          content: "Halley's comet has eccentricity $e=0.967$ and perihelion distance $0.59$ AU.\n\nCalculate its period in years.\n\nHint: First find $a$ using $r_p = a(1-e)$.",
          numericAnswer: 76, // rp = a(1-e) -> 0.59 = a(1-0.967) = a(0.033) -> a = 0.59/0.033 = 17.88 AU.
                             // T^2 = a^3 = 17.88^3 = 5716. T = sqrt(5716) = 75.6 years.
          numericTolerance: 2
        },
        {
          id: "sol",
          type: "solution",
          title: "Calculation",
          content: "Step by step.",
          interactiveSteps: [
            {
              stepText: "Find $a$.",
              options: [
                { id: "a", text: "$a = 17.9$ AU", isCorrect: true, explanation: "$a = 0.59 / (1-0.967)$." }
              ]
            },
            {
              stepText: "Find $T = a^{1.5}$.",
              options: [
                { id: "a", text: "75.6 years", isCorrect: true, explanation: "Correct." }
              ]
            }
          ]
        }
      ]
    }
  ]
};