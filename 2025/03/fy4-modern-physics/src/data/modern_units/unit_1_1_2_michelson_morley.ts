import { Unit } from '../../types';

export const UNIT_1_1_2_MICHELSON_MORLEY: Unit = {
  id: "unit-1-1-2",
  title: "The Michelson–Morley Experiment",
  description: "The experiment that shook classical physics",
  color: "duo-violet",
  lessons: [
    // ── LESSON 1 (Priming) ────────────────────────────────────────────────
    {
      id: "les-1-1-2-1",
      title: "Priming: Ether & Light",
      description: "Activate prior thinking",
      icon: "Brain",
      slides: [
        {
          id: "prime-1",
          type: "quiz",
          title: "Priming Question 1",
          content: "Sound waves need a medium (air) to travel through. In the 1800s, scientists assumed light — also a wave — must also travel through a medium. What did they call this hypothetical medium?",
          options: [
            { id: "A", text: "Plasma", isCorrect: false, explanation: "Plasma is a state of matter; it wasn't proposed as the medium for light." },
            { id: "B", text: "Luminiferous ether", isCorrect: true, explanation: "The 'luminiferous ether' (light-bearing ether) was the hypothetical substance filling all of space through which light was thought to propagate." },
            { id: "C", text: "Dark matter", isCorrect: false, explanation: "Dark matter was proposed much later in the 20th century for gravitational reasons, not for wave propagation." }
          ]
        },
        {
          id: "prime-2",
          type: "quiz",
          title: "Priming Question 2",
          content: "If Earth moves through the ether, from Earth's perspective there should be an 'ether wind' — just like a cyclist feels a headwind even on a still day. What measurable effect on light would this ether wind predict?",
          options: [
            { id: "A", text: "Light in the direction of Earth's motion should appear slightly faster.", isCorrect: false, explanation: "Actually, motion into the ether headwind would slow light down (like a swimmer going upstream), not speed it up." },
            { id: "B", text: "Light traveling parallel to Earth's motion should take a different time than light traveling perpendicular to it.", isCorrect: true, explanation: "Exactly! By the swimmer analogy, upstream + downstream light takes more time than crosswise light over the same distance. Michelson and Morley tried to detect this time difference." },
            { id: "C", text: "Light would slow down everywhere and become invisible.", isCorrect: false, explanation: "The ether wind would affect the speed in different directions differently, not uniformly extinguish light." }
          ]
        }
      ]
    },

    // ── LESSON 2 (Definition: Ether Hypothesis) ───────────────────────────
    {
      id: "les-1-1-2-2",
      title: "The Ether Hypothesis",
      description: "What scientists believed in 1887",
      icon: "CloudFog",
      slides: [
        {
          id: "def-ether",
          type: "theory",
          title: "Definition: The Luminiferous Ether",
          content: "By the mid-19th century, Maxwell's equations described light as an electromagnetic wave. Since all known waves required a medium, physicists postulated the **luminiferous ether** — a stationary, invisible substance filling all space.\n\n**Key assumptions of the ether hypothesis:**\n1. Ether fills all space and is at absolute rest.\n2. Light travels at speed $c$ relative to the ether.\n3. Earth moves through the ether as it orbits the Sun ($v_{\\text{Earth}} \\approx 3 \\times 10^4$ m/s).\n4. By Galilean addition, an observer on Earth sees light at $c \\pm v_{\\text{Earth}}$, depending on direction.\n\n**The prediction:** There exists an 'ether wind' of ~$3 \\times 10^4$ m/s relative to Earth."
        },
        {
          id: "q-ether-1",
          type: "quiz",
          title: "Conceptual Check 1",
          content: "If the ether hypothesis is correct, the measured speed of light should depend on direction. What is the predicted difference in light speed parallel vs. perpendicular to Earth's orbital velocity?",
          options: [
            { id: "A", text: "No difference — ether drags light along with Earth.", isCorrect: false, explanation: "That's the 'ether drag' hypothesis, which was a separate proposal. The standard ether model predicts a difference." },
            { id: "B", text: "$c$ vs $\\sqrt{c^2 - v^2}$ — a measurable difference.", isCorrect: true, explanation: "Correct. Parallel light (going into and with the 'wind') has average speed $c^2/(c^2-v^2) \\cdot c$, while perpendicular has $\\sqrt{c^2 - v^2}$. The fractional difference is $\\sim v^2/c^2 \\approx 10^{-8}$." },
            { id: "C", text: "Exactly $2c$ in the direction of motion.", isCorrect: false, explanation: "Galilean addition gives $c + v$ toward the wind and $c - v$ away — not $2c$." }
          ]
        },
        {
          id: "q-ether-2",
          type: "quiz",
          title: "Conceptual Check 2",
          content: "Why was it reasonable, in 1887, to believe in the ether?",
          options: [
            { id: "A", text: "Einstein had not yet published his theory.", isCorrect: false, explanation: "While true, this isn't the physical reason scientists believed in the ether." },
            { id: "B", text: "All other wave phenomena required a medium, so it was a natural extension to light.", isCorrect: true, explanation: "Sound needs air; water waves need water; seismic waves need rock. Every wave known at the time required a medium. Assuming light did too was entirely reasonable by analogy." },
            { id: "C", text: "Several experiments had confirmed ether drift.", isCorrect: false, explanation: "No experiment had confirmed the ether; it was a theoretical assumption. Michelson–Morley was designed specifically to detect it." }
          ]
        },
        {
          id: "canvas-ether",
          type: "interactive_canvas",
          title: "Earth Moving Through the Ether",
          content: "If the ether is at rest, Earth's orbital motion creates a relative 'ether wind'.",
          interactiveCanvasId: "ether-wind-analogy"
        },
        {
          id: "fitb-ether",
          type: "fill_in_blank",
          title: "Fill in the Blank",
          content: "The hypothetical medium through which 19th-century physicists believed light propagated was called the ___ ether.",
          blankAnswer: "luminiferous"
        }
      ]
    },

    // ── LESSON 3 (Experiment: Michelson Interferometer & Null Result) ──────
    {
      id: "les-1-1-2-3",
      title: "The Interferometer & Null Result",
      description: "Exp: Setup, operation, and the shocking finding",
      icon: "FlaskConical",
      slides: [
        {
          id: "exp-setup",
          type: "theory",
          title: "The Michelson Interferometer (Figure 2.6)",
          content: "In 1887, Albert Michelson and Edward Morley built a precision interferometer to detect the ether wind.\n\n**How it works:**\n1. A light beam is split by a **half-silvered mirror (beamsplitter)** into two perpendicular arms.\n2. Each beam travels to a **mirror** at the end of its arm and reflects back.\n3. The two beams **recombine** and create an **interference pattern** (bright/dark fringes).\n4. If one arm is parallel to the ether wind and the other perpendicular, the travel times differ — causing the fringe pattern to **shift**.\n\nThe apparatus was placed on a floating stone slab (to isolate vibrations) and rotated slowly. The expected fringe shift was $\\Delta N \\approx 0.4$ fringe."
        },
        {
          id: "exp-canvas",
          type: "interactive_canvas",
          title: "Michelson Interferometer Setup",
          content: "The interferometer splits, redirects, and recombines two light beams to compare travel times.",
          interactiveCanvasId: "michelson-setup"
        },
        {
          id: "exp-prediction",
          type: "proof",
          title: "Predicted Time Difference",
          content: "Using the swimmer analogy, what time difference does the ether predict?",
          proofSteps: [
            "Let $L$ = arm length, $c$ = speed of light, $v$ = Earth's speed through ether.",
            "**Parallel arm** (into + against ether wind): $t_{\\parallel} = \\frac{L}{c - v} + \\frac{L}{c + v} = \\frac{2Lc}{c^2 - v^2} = \\frac{2L/c}{1 - v^2/c^2}$.",
            "**Perpendicular arm**: $t_{\\perp} = \\frac{2L}{\\sqrt{c^2 - v^2}} = \\frac{2L/c}{\\sqrt{1 - v^2/c^2}}$.",
            "Time difference: $\\Delta t = t_{\\parallel} - t_{\\perp} \\approx \\frac{Lv^2}{c^3}$ (using $v \\ll c$ approximation).",
            "With $L \\approx 11$ m and $v/c \\approx 10^{-4}$: $\\Delta t \\approx 4 \\times 10^{-16}$ s — small but detectable by interferometry."
          ]
        },
        {
          id: "exp-result",
          type: "theory",
          title: "The Null Result (Figure 2.7)",
          content: "When Michelson and Morley rotated their apparatus through all orientations:\n\n> **The fringe pattern did not shift.** *(Or at most, shifted by less than 1/40th of the expected amount — well within experimental error.)*\n\nThis is called the **null result**: the experiment failed to detect any ether wind.\n\n**This was one of the most important 'failed' experiments in physics history.** It implied either:\n- Earth drags the ether with it exactly (contradicted by stellar aberration data), OR\n- The ether simply does not exist, AND the speed of light is the same in all directions regardless of Earth's motion."
        },
        {
          id: "null-canvas",
          type: "interactive_canvas",
          title: "The Null Result",
          content: "Expected: a fringe shift as the apparatus rotates. Observed: no shift at all.",
          interactiveCanvasId: "michelson-null-result"
        },
        {
          id: "exp-q",
          type: "quiz",
          title: "Observation Question",
          content: "Michelson and Morley expected to see the interference fringe pattern shift as they rotated the apparatus. What did they actually observe?",
          options: [
            { id: "A", text: "A large fringe shift, confirming the ether.", isCorrect: false, explanation: "The ether was NOT confirmed. The expected shift was ~0.4 fringes; the observed shift was at most ~0.01 — consistent with zero." },
            { id: "B", text: "No detectable fringe shift — the null result.", isCorrect: true, explanation: "Correct. No fringe shift was observed. The two beams always arrived in phase, regardless of the apparatus orientation." },
            { id: "C", text: "A fringe shift, but in the opposite direction to predictions.", isCorrect: false, explanation: "The result was null — essentially zero, not reversed." }
          ]
        },
        {
          id: "exp-num",
          type: "numerical",
          title: "Order-of-Magnitude Check",
          content: "The ratio of Earth's orbital speed to the speed of light is $v/c \\approx 10^{-4}$. The expected fractional time difference between arms scales as $(v/c)^2$. What is $(v/c)^2$?",
          numericAnswer: 0.00000001,
          numericTolerance: 0.000000005
        }
      ]
    },

    // ── LESSON 4 (Theory: Implications for Galilean Relativity) ───────────
    {
      id: "les-1-1-2-4",
      title: "Implications for Classical Physics",
      description: "Why the null result breaks Galilean relativity",
      icon: "AlertTriangle",
      slides: [
        {
          id: "implication-theory",
          type: "theory",
          title: "The Null Result Contradicts Galilean Relativity",
          content: "The Galilean velocity addition law predicts that the measured speed of light should be $c \\pm v$ depending on direction relative to the ether wind.\n\n**The null result says:** The speed of light is the same in all directions — approximately $c = 3 \\times 10^8$ m/s — regardless of Earth's motion.\n\nThis contradicts Galilean velocity addition. Something must be deeply wrong with classical assumptions.\n\n**Possible explanations explored before Einstein (1905):**\n- **Ether drag** (Stokes, 1845): Earth drags the ether with it. *Contradicted by stellar aberration.*\n- **Length contraction** (Lorentz–FitzGerald, 1892): Moving objects physically contract along the direction of motion. *Correctly predicted the math, but offered no deep physical understanding.*\n- **Einstein's Special Relativity (1905):** Abandon the concept of ether altogether. The speed of light is universally constant — a postulate."
        },
        {
          id: "q-impl-1",
          type: "quiz",
          title: "Conceptual Check 1",
          content: "The Michelson–Morley null result tells us that light's speed does NOT add with Earth's velocity as Galilean mechanics predicts. What fundamental classical assumption does this violate?",
          options: [
            { id: "A", text: "Conservation of energy.", isCorrect: false, explanation: "The null result is about velocity addition, not energy conservation." },
            { id: "B", text: "The assumption that velocities add linearly (Galilean velocity addition).", isCorrect: true, explanation: "Yes. If $c + v \\ne c$, then the Galilean rule fails for light. Einstein's resolution: $c$ is a universal constant, and the transformation laws (not just light) must be revised." },
            { id: "C", text: "Newton's law of gravitation.", isCorrect: false, explanation: "Gravity is not involved in this experiment." }
          ]
        },
        {
          id: "q-impl-2",
          type: "quiz",
          title: "Conceptual Check 2",
          content: "The Lorentz–FitzGerald contraction hypothesis (1892) could mathematically account for the null result. Why was Einstein's 1905 solution considered superior?",
          options: [
            { id: "A", text: "Einstein's calculation was more accurate numerically.", isCorrect: false, explanation: "Both give the same numerical prediction for the Michelson–Morley result." },
            { id: "B", text: "Einstein derived the contraction from physical first principles (constant $c$ + relativity of simultaneity), not as an ad hoc patch.", isCorrect: true, explanation: "The Lorentz–FitzGerald contraction was invented specifically to explain the null result with no deeper justification. Einstein showed length contraction, time dilation, and velocity addition all follow inevitably from two simple postulates." },
            { id: "C", text: "Einstein's theory predicted faster-than-light travel.", isCorrect: false, explanation: "Special Relativity shows the opposite: nothing can exceed $c$." }
          ]
        },
        {
          id: "historical-context",
          type: "theory",
          title: "Historical Significance",
          content: "The Michelson–Morley experiment is often called **'the most famous null result in physics.'**\n\n| Year | Development |\n|------|------------|\n| 1865 | Maxwell predicts electromagnetic waves at speed $c$ |\n| 1887 | Michelson–Morley null result — no ether wind detected |\n| 1892 | Lorentz–FitzGerald propose length contraction |\n| 1905 | Einstein publishes Special Relativity — ether abandoned |\n\nThe experiment directly motivated Einstein's two postulates:\n1. **The laws of physics are the same in all inertial frames.**\n2. **The speed of light in vacuum is constant, $c$, for all inertial observers.**"
        },
        {
          id: "fitb-mm",
          type: "fill_in_blank",
          title: "Fill in the Blank",
          content: "The Michelson–Morley experiment produced a ___ result, meaning no ether wind was detected.",
          blankAnswer: "null"
        }
      ]
    }
  ]
};
