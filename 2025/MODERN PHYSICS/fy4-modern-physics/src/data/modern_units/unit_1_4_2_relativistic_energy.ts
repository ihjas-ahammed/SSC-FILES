import { Unit } from '../../types';

export const UNIT_1_4_2_RELATIVISTIC_ENERGY: Unit = {
  id: "unit-1-4-2",
  title: "Relativistic Energy",
  description: "Der: Kinetic Energy · T: Rest Energy E=mc² · T: Energy-Momentum Relation",
  color: "duo-orange",
  lessons: [
    // ── Derivation: Relativistic Kinetic Energy ───────────────────────────
    {
      id: "les-1-4-2-1",
      title: "Deriving Kinetic Energy",
      description: "Der: Relativistic kinetic energy → Eq 2.34",
      icon: "Zap",
      slides: [
        {
          id: "ke-der-start",
          type: "theory",
          title: "Goal: Relativistic Kinetic Energy",
          content: "The classical formula $K = \\frac{1}{2}mv^2$ allows $K \\to \\infty$ to give $v \\to \\infty$, which violates $v < c$.\n\nWe derive the relativistic kinetic energy using the work-energy theorem:\n$$K = W = \\int F \\, dx = \\int \\frac{dp}{dt} dx = \\int v \\, dp$$\n\n**Goal (Eq. 2.34):**\n$$\\boxed{K = \\frac{mc^2}{\\sqrt{1 - v^2/c^2}} - mc^2 = \\gamma mc^2 - mc^2}$$"
        },
        {
          id: "ke-der-steps",
          type: "proof",
          title: "Interactive Derivation",
          content: "Start with $K = \\int v \\, dp$. We use integration by parts: $\\int v \\, dp = pv - \\int p \\, dv$.",
          interactiveSteps: [
            {
              stepText: "Substitute relativistic momentum $p = \\gamma m v = \\frac{mv}{\\sqrt{1-v^2/c^2}}$:\n$$K = \\frac{mv^2}{\\sqrt{1-v^2/c^2}} - \\int_0^v \\frac{mv}{\\sqrt{1-v^2/c^2}} dv$$"
            },
            {
              prompt: "Evaluate the integral $\\int_0^v m v (1-v^2/c^2)^{-1/2} dv$.",
              stepText: "The integral evaluates to $-mc^2 \\sqrt{1-v^2/c^2} \\Big|_0^v = -mc^2 \\sqrt{1-v^2/c^2} - (-mc^2)$.",
              options: [
                { id: "A", text: "It evaluates exactly to a square root term.", isCorrect: true, explanation: "Correct. Standard u-substitution with $u = 1 - v^2/c^2$." }
              ]
            },
            {
              prompt: "Combine the terms:\n$$K = \\frac{mv^2}{\\sqrt{1-v^2/c^2}} + mc^2\\sqrt{1-v^2/c^2} - mc^2$$",
              stepText: "Find a common denominator for the first two terms:\n$$K = \\frac{mv^2 + mc^2(1-v^2/c^2)}{\\sqrt{1-v^2/c^2}} - mc^2$$\n$$K = \\frac{mv^2 + mc^2 - mv^2}{\\sqrt{1-v^2/c^2}} - mc^2$$\n$$K = \\frac{mc^2}{\\sqrt{1-v^2/c^2}} - mc^2 = \\gamma mc^2 - mc^2$$",
              options: [
                { id: "A", text: "The $mv^2$ terms cancel in the numerator.", isCorrect: true, explanation: "Yes, $mv^2 + mc^2 - mv^2 = mc^2$, leaving just $\\gamma mc^2$ for the first part." },
                { id: "B", text: "The $c^2$ terms cancel.", isCorrect: false, explanation: "No, the $v^2$ terms cancel." }
              ]
            }
          ]
        },
        {
          id: "ke-q1",
          type: "quiz",
          title: "Speed Limit Check",
          content: "Look at the formula $K = \\gamma mc^2 - mc^2$. As we pump infinite kinetic energy ($K \\to \\infty$) into a particle, what happens to its speed $v$?",
          options: [
            { id: "A", text: "$v \\to \\infty$", isCorrect: false, explanation: "That's the classical result." },
            { id: "B", text: "$v \\to c$", isCorrect: true, explanation: "As $K \\to \\infty$, $\\gamma \\to \\infty$, which only happens as $v \\to c$. You can add infinite energy without ever exceeding $c$!" }
          ]
        }
      ]
    },

    // ── Theory: Total & Rest Energy ───────────────────────────────────────
    {
      id: "les-1-4-2-2",
      title: "Total & Rest Energy",
      description: "T: Defining E = mc² and Total Energy",
      icon: "Atom",
      slides: [
        {
          id: "en-theory",
          type: "theory",
          title: "Total Energy and Rest Energy",
          content: "We can rearrange the kinetic energy equation $K = \\gamma mc^2 - mc^2$ into:\n\n$$K = E - E_0$$\n\nWhere:\n**Total Relativistic Energy:**\n$$E = \\gamma mc^2 = \\frac{mc^2}{\\sqrt{1 - v^2/c^2}}$$\n\n**Rest Energy:**\n$$E_0 = mc^2$$\n\nThis is Einstein's famous **mass-energy equivalence**. Even when a particle is at rest ($v=0$, $K=0$), it possesses an enormous amount of stored energy solely by virtue of its mass."
        },
        {
          id: "en-q1",
          type: "quiz",
          title: "Conceptual Check",
          content: "If a particle is at rest, what is its total relativistic energy?",
          options: [
            { id: "A", text: "Zero", isCorrect: false, explanation: "Only its kinetic energy is zero." },
            { id: "B", text: "$mc^2$", isCorrect: true, explanation: "At rest, $v=0 \\implies \\gamma=1$. Total energy $E = E_0 = mc^2$." }
          ]
        },
        {
          id: "en-fitb",
          type: "fill_in_blank",
          title: "Fill in the Blank",
          content: "The total energy of a moving particle is the sum of its rest energy and its ___ energy.",
          blankAnswer: "kinetic"
        }
      ]
    },

    // ── Theory: Energy-Momentum Relation ──────────────────────────────────
    {
      id: "les-1-4-2-3",
      title: "Energy-Momentum Relation",
      description: "T: E² = (pc)² + (mc²)²",
      icon: "TriangleRight",
      slides: [
        {
          id: "ep-theory",
          type: "theory",
          title: "Energy-Momentum Relation",
          content: "By manipulating $E = \\gamma mc^2$ and $p = \\gamma mv$, we can find a relationship between Total Energy ($E$) and Momentum ($p$) that doesn't explicitly contain velocity $v$:\n\n$$\\boxed{E^2 = (pc)^2 + (mc^2)^2} \\qquad \\text{(Eq. 2.39)}$$\n\nThis equation resembles the Pythagorean theorem! We can draw a right triangle where:\n- The hypotenuse is $E$\n- The vertical leg is $pc$\n- The horizontal leg is $mc^2$"
        },
        {
          id: "ep-canvas",
          type: "interactive_canvas",
          title: "The Energy-Momentum Triangle",
          content: "A geometric way to remember the relationship between E, p, and m.",
          interactiveCanvasId: "energy-momentum-triangle"
        },
        {
          id: "ep-q1",
          type: "quiz",
          title: "Extreme Relativistic Approximation",
          content: "What happens to the triangle when the particle travels very close to the speed of light ($K \\gg mc^2$)?",
          options: [
            { id: "A", text: "The vertical leg ($pc$) becomes much larger than the base ($mc^2$), so $E \\approx pc$.", isCorrect: true, explanation: "Yes! At ultra-high speeds, rest mass energy is negligible compared to kinetic energy, so $E \\approx pc$. This is called the extreme relativistic approximation." },
            { id: "B", text: "The triangle flattens out, so $E \\approx mc^2$.", isCorrect: false, explanation: "That happens at very low speeds (rest)." }
          ]
        },
        {
          id: "ep-q2",
          type: "quiz",
          title: "Massless Particles",
          content: "A photon has zero rest mass ($m = 0$). According to the energy-momentum relation, what is its energy?",
          options: [
            { id: "A", text: "$E = 0$", isCorrect: false, explanation: "A photon has no mass, but it carries momentum." },
            { id: "B", text: "$E = pc$", isCorrect: true, explanation: "If $m=0$, then $E^2 = (pc)^2 + 0$, so $E = pc$. All massless particles must travel at exactly $c$ and have energy entirely from their momentum." }
          ]
        }
      ]
    },

    // ── Examples ──────────────────────────────────────────────────────────
    {
      id: "les-1-4-2-4",
      title: "Ex 2.14 & 2.15: Energy Calculations",
      description: "Ex: Using the energy-momentum formulas",
      icon: "Calculator",
      slides: [
        {
          id: "ex214-q",
          type: "example_q",
          title: "Example 2.14 — Proton Energy",
          content: "**Problem:** A proton ($E_0 = mc^2 = 938$ MeV) moves at $v = 0.86c$. In Ex 2.13, we found its momentum is $p = 1580$ MeV/c.\n\nFind its Total Energy ($E$) and Kinetic Energy ($K$)."
        },
        {
          id: "ex214-sol",
          type: "proof",
          title: "Solution 2.14",
          content: "Use the Energy-Momentum relation.",
          interactiveSteps: [
            {
              prompt: "Calculate Total Energy: $E = \\sqrt{(pc)^2 + (mc^2)^2}$.",
              stepText: "$E = \\sqrt{(1580 \\text{ MeV})^2 + (938 \\text{ MeV})^2} = \\sqrt{2496400 + 879844} = \\sqrt{3376244} \\approx 1837 \\text{ MeV}$",
              options: [
                { id: "A", text: "1837 MeV", isCorrect: true, explanation: "Correct." },
                { id: "B", text: "2518 MeV", isCorrect: false, explanation: "You added $pc + mc^2$ directly. You must add their squares and take the square root." }
              ]
            },
            {
              prompt: "Calculate Kinetic Energy: $K = E - E_0$.",
              stepText: "$K = 1837 \\text{ MeV} - 938 \\text{ MeV} = 899 \\text{ MeV}$",
              options: [
                { id: "A", text: "899 MeV", isCorrect: true, explanation: "Correct. $K = E - mc^2$." },
                { id: "B", text: "1580 MeV", isCorrect: false, explanation: "That is $pc$." }
              ]
            }
          ]
        },
        {
          id: "ex215-q",
          type: "example_q",
          title: "Example 2.15 — Electron Momentum",
          content: "**Problem:** Find the momentum of an electron ($E_0 = 0.511$ MeV) with a kinetic energy of $K = 10.0$ MeV."
        },
        {
          id: "ex215-sol",
          type: "proof",
          title: "Solution 2.15",
          content: "Work backward from $K$ to $E$, then to $p$.",
          interactiveSteps: [
            {
              stepText: "**Step 1:** Total energy $E = K + E_0 = 10.0 \\text{ MeV} + 0.511 \\text{ MeV} = 10.511 \\text{ MeV}$"
            },
            {
              prompt: "Use $E^2 = (pc)^2 + (mc^2)^2$ to find $pc$.",
              stepText: "$$pc = \\sqrt{E^2 - (mc^2)^2} = \\sqrt{(10.511)^2 - (0.511)^2} \\approx 10.5 \\text{ MeV}$$ \nSo $p = 10.5$ MeV/c.",
              options: [
                { id: "A", text: "$p = 10.5$ MeV/c", isCorrect: true, explanation: "Notice that because $K \\gg mc^2$, $pc \\approx E$ (10.5 vs 10.511). This is the extreme relativistic approximation." },
                { id: "B", text: "$p = 10.0$ MeV/c", isCorrect: false, explanation: "Close, but you must use total energy $E$, not just $K$." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "les-1-4-2-5",
      title: "Ex 2.17: Mass-Energy Conversion",
      description: "Ex: The Sun's energy output",
      icon: "Sun",
      slides: [
        {
          id: "ex217-q",
          type: "example_q",
          title: "Example 2.17 — Sun's Mass Loss",
          content: "**Problem:** At Earth's orbit ($R = 1.5 \\times 10^{11}$ m), solar radiation intensity is $I = 1.4 \\times 10^3$ W/m$^2$.\n\nFind the rate at which the mass of the Sun is decreasing due to radiation. ($E = mc^2$)\n\n*Hint: First find total power $P$ emitted by the Sun across a full sphere.*"
        },
        {
          id: "ex217-sol",
          type: "proof",
          title: "Solution 2.17",
          content: "Use $P = I \times A$ and $\\Delta E = \\Delta m c^2$.",
          interactiveSteps: [
            {
              prompt: "What is the total power $P$ radiated by the Sun?",
              stepText: "$P = I \\times 4\\pi R^2 = (1.4 \\times 10^3 \\text{ W/m}^2) \\times 4\\pi (1.5 \\times 10^{11} \\text{ m})^2 \\approx 4.0 \\times 10^{26}$ J/s (Watts)",
              options: [
                { id: "A", text: "$4.0 \\times 10^{26}$ W", isCorrect: true, explanation: "Correct. The energy spreads over a sphere of radius $R$." },
                { id: "B", text: "$1.4 \\times 10^3$ W", isCorrect: false, explanation: "That's the power per square meter at Earth, not the total power." }
              ]
            },
            {
              prompt: "Since $\\Delta E = \\Delta m c^2$, find the mass lost per second.",
              stepText: "$$\\frac{\\Delta m}{\\Delta t} = \\frac{P}{c^2} = \\frac{4.0 \\times 10^{26} \\text{ J/s}}{(3 \\times 10^8 \\text{ m/s})^2} \\approx 4.4 \\times 10^9 \\text{ kg/s}$$",
              options: [
                { id: "A", text: "$4.4 \\times 10^9$ kg/s", isCorrect: true, explanation: "The Sun loses over 4 billion kilograms of mass *every second* just by shining!" }
              ]
            }
          ]
        }
      ]
    }
  ]
};