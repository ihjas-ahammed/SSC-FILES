import { Unit } from '../../types';

export const UNIT_3_2_3: Unit = {
  id: "unit-3-2-3",
  title: "CE Characteristics",
  description: "Output Curves",
  color: "duo-violet",
  lessons: [
    {
      id: "les-3-2-3-1",
      title: "Output Characteristics",
      description: "Ic vs Vce",
      icon: "BarChart2",
      slides: [
        {
          id: "intro",
          type: "theory",
          title: "The Graph",
          content: "The output characteristic plots Collector Current ($I_C$) versus Collector-Emitter Voltage ($V_{CE}$) for fixed values of Base Current ($I_B$)."
        },
        {
          id: "vis",
          type: "interactive_canvas",
          title: "Interactive Graph",
          content: "Observe the Active Region (flat), Saturation (steep rise), and Cut-off (bottom).",
          interactiveCanvasId: "ce-output-characteristics"
        },
        {
          id: "check",
          type: "quiz",
          title: "Active Region",
          content: "In the active region, $I_C$ is largely independent of $V_{CE}$ and depends mostly on:",
          options: [
            { id: "A", text: "$I_B$", isCorrect: true, explanation: "Collector current is controlled by Base current." },
            { id: "B", text: "Temperature", isCorrect: false, explanation: "Secondary effect." }
          ]
        }
      ]
    },
    {
      id: "les-3-2-3-2",
      title: "Knee Voltage",
      description: "Saturation Boundary",
      icon: "CornerDownRight",
      slides: [
        {
          id: "def",
          type: "theory",
          title: "Knee Voltage ($V_{knee}$)",
          content: "The low value of $V_{CE}$ below which $I_C$ decreases rapidly. \n\nFor Si transistors, $V_{knee} \\approx 1V$. \nIf $V_{CE} < V_{knee}$, the transistor enters **Saturation**."
        },
        {
          id: "implication",
          type: "quiz",
          title: "Logic",
          content: "To operate as an amplifier, we must keep $V_{CE}$:",
          options: [
            { id: "A", text: "Below Knee Voltage", isCorrect: false, explanation: "That's saturation (Switch ON)." },
            { id: "B", text: "Above Knee Voltage", isCorrect: true, explanation: "That's the Active Region." }
          ]
        }
      ]
    },
    {
      id: "les-3-2-3-3",
      title: "Leakage ICEO",
      description: "Base Open",
      icon: "Droplet",
      slides: [
        {
          id: "def",
          type: "theory",
          title: "Collector-Emitter Leakage ($I_{CEO}$)",
          content: "The current that flows from Collector to Emitter when the **Base is Open** ($I_B = 0$).\n\nIt is much larger than $I_{CBO}$ because it gets amplified by the transistor action: $I_{CEO} = (\\beta + 1)I_{CBO}$."
        },
        {
          id: "calc",
          type: "numerical",
          title: "Check",
          content: "If $I_{CBO} = 1 \\mu A$ and $\\beta = 99$, what is $I_{CEO}$ in $\\mu A$?",
          numericAnswer: 100,
          numericTolerance: 1
        }
      ]
    }
  ]
};