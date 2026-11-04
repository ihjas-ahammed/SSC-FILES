import { Unit } from '../../types';

export const UNIT_1_3_2_SIMULTANEITY: Unit = {
  id: "unit-1-3-2",
  title: "Simultaneity & The Twin Paradox",
  description: "D: Simultaneity · T: Clock desync · T: Twin Paradox resolution",
  color: "duo-blue",
  lessons: [
    // ── Priming ───────────────────────────────────────────────────────────
    {
      id: "les-1-3-2-act",
      title: "Priming: Simultaneity",
      description: "Thinking about 'now'",
      icon: "Brain",
      slides: [
        {
          id: "prime-1",
          type: "quiz",
          title: "Priming Question",
          content: "Two lightning bolts strike the front and back of a moving train. An observer on the ground sees them hit at the same instant. What does a passenger on the train see?",
          options: [
            { id: "A", text: "They hit at the same time.", isCorrect: false, explanation: "Simultaneity is relative." },
            { id: "B", text: "The front strike happens first.", isCorrect: true, explanation: "The passenger moves *toward* the light from the front, seeing it sooner." },
            { id: "C", text: "The back strike happens first.", isCorrect: false, explanation: "Passenger moves away from back signal." }
          ]
        }
      ]
    },

    // ── Relativity of Simultaneity ────────────────────────────────────────
    {
      id: "les-1-3-2-1",
      title: "Relativity of Simultaneity",
      description: "D: Definition and Eq 2.31",
      icon: "Clock",
      slides: [
        {
          id: "sim-theory",
          type: "theory",
          title: "Relativity of Simultaneity",
          content: "Events simultaneous in one frame are **not** simultaneous in another frame (unless they happen at the same place).\n\n**Equation 2.31 (Leading Clock Lags):**\nIf two clocks are synchronized in their rest frame S' (separated by $L_0$), then in frame S (where they move at $v$), they are out of sync by:\n\n$$\\Delta t = -\\frac{v L_0}{c^2}$$\n\nThe **rear** clock (trailing) reads a time **ahead** of the front clock."
        },
        {
          id: "sim-canvas",
          type: "interactive_canvas",
          title: "Leading Clock Lags",
          content: "Visualizing the desynchronization of moving clocks.",
          interactiveCanvasId: "clock-desync-visual"
        },
        {
          id: "sim-q1",
          type: "quiz",
          title: "Check",
          content: "A train moves right. Which clock on the train reads a later time (is 'ahead') according to the ground?",
          options: [
            { id: "A", text: "The rear clock.", isCorrect: true, explanation: "Rear clock is ahead in time setting. Front clock lags." },
            { id: "B", text: "The front clock.", isCorrect: false, explanation: "Front clock lags." }
          ]
        }
      ]
    },

    // ── Spacetime Diagrams ────────────────────────────────────────────────
    {
      id: "les-1-3-2-2",
      title: "Spacetime Diagrams",
      description: "D: Visualizing relativity",
      icon: "Grid",
      slides: [
        {
          id: "st-theory",
          type: "theory",
          title: "Spacetime Diagrams",
          content: "**Axis:** vertical = time ($ct$), horizontal = space ($x$).\n**Worldline:** The path of a particle.\n- Vertical line: Particle at rest.\n- Sloped line: Moving particle (slope = $c/v$).\n- 45° line: Light beam ($v=c$).\n\n**Light Cone:** Region bounded by light rays. Defines causal future/past."
        },
        {
          id: "st-canvas",
          type: "interactive_canvas",
          title: "Spacetime Diagram",
          content: "Worldlines and light cones.",
          interactiveCanvasId: "spacetime-diagram-basics"
        },
        {
          id: "st-q",
          type: "quiz",
          title: "Worldline Slope",
          content: "On a $ct$ vs $x$ diagram, can a particle's worldline have a slope less than 1 (angle < 45°)?",
          options: [
            { id: "A", text: "Yes", isCorrect: false, explanation: "Slope = $c/v$. If slope < 1, then $c/v < 1 \Rightarrow v > c$. Impossible." },
            { id: "B", text: "No", isCorrect: true, explanation: "Slope must be > 1 ($v < c$). < 45° implies faster than light." }
          ]
        }
      ]
    },

    // ── The Twin Paradox ──────────────────────────────────────────────────
    {
      id: "les-1-3-2-3",
      title: "The Twin Paradox",
      description: "T: The scenario and resolution",
      icon: "Users",
      slides: [
        {
          id: "twin-setup",
          type: "theory",
          title: "The Scenario",
          content: "Earth twin (Casper) stays home. Space twin (Amelia) travels to a star at $v=0.8c$ and returns.\n\n**Paradox:**\n- Casper sees Amelia moving $\\to$ Amelia's clock runs slow $\\to$ Amelia is younger.\n- Amelia sees Casper moving $\\to$ Casper's clock runs slow $\\to$ Casper is younger?\n\n**Who is really younger?**"
        },
        {
          id: "twin-res",
          type: "theory",
          title: "The Resolution",
          content: "The situation is **not symmetric**. Amelia **accelerates** (turns around). She jumps from an outbound inertial frame to an inbound inertial frame.\n\nCasper stays in **one** inertial frame.\n\n**Result:** Amelia is indeed younger. The path length in spacetime (proper time) is maximized for the inertial observer."
        },
        {
          id: "twin-canvas",
          type: "interactive_canvas",
          title: "Twin Worldlines",
          content: "Visualizing the path difference in spacetime.",
          interactiveCanvasId: "twin-paradox-worldlines"
        },
        {
          id: "twin-q",
          type: "quiz",
          title: "Aging",
          content: "If Amelia travels 3 light-years away at 0.6c and returns, how much does she age compared to Casper?",
          options: [
            { id: "A", text: "Same amount.", isCorrect: false, explanation: "" },
            { id: "B", text: "Less (80%).", isCorrect: true, explanation: "$\gamma = 1.25$. Casper time = $2 \times (3c / 0.6c) = 10$ yrs. Amelia time = $10 / 1.25 = 8$ yrs." }
          ]
        }
      ]
    }
  ]
};