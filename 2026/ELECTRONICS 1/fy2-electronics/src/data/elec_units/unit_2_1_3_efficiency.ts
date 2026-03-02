import { Unit } from '../../types';

export const UNIT_2_1_3: Unit = {
  id: "unit-2-1-3",
  title: "Rectifier Efficiency",
  description: "Measuring performance",
  color: "duo-blue",
  lessons: [
    {
      id: "les-2-1-3-1",
      title: "Efficiency Definition",
      description: "DC Out vs AC In",
      icon: "Percent",
      slides: [
        {
          id: "def",
          type: "theory",
          title: "Rectifier Efficiency ($\\eta$)",
          content: "The efficiency of a rectifier tells us how well it converts AC power into useful DC power.\n\n$$ \\eta = \\frac{P_{dc}}{P_{ac}} $$\n\nWhere $P_{dc}$ is the DC power output to the load, and $P_{ac}$ is the AC power input."
        }
      ]
    },
    {
      id: "les-2-1-3-2",
      title: "Derivation: Half-Wave Efficiency",
      description: "Calculating the max limit",
      icon: "PenTool",
      slides: [
        {
          id: "destination",
          type: "theory",
          title: "The Goal",
          content: "We will prove that the maximum efficiency of a Half-Wave Rectifier is **40.6%**.\n\n$$ \\eta = \\frac{0.406}{1 + (r_f / R_L)} $$"
        },
        {
          id: "step1",
          type: "proof",
          title: "Step 1: Current Components",
          content: "First, we define the currents.",
          proofSteps: [
            "1. DC (Average) Current: $I_{dc} = \\frac{I_m}{\\pi}$",
            "2. RMS (AC) Current: $I_{rms} = \\frac{I_m}{2}$"
          ],
          interactiveSteps: [
            {
              prompt: "What is the formula for DC Power output ($P_{dc}$)?",
              options: [
                { id: "A", text: "$P_{dc} = I_{rms}^2 R_L$", isCorrect: false, explanation: "RMS is used for AC power." },
                { id: "B", text: "$P_{dc} = I_{dc}^2 R_L$", isCorrect: true, explanation: "Correct. DC power uses the DC (average) current." }
              ]
            }
          ]
        },
        {
          id: "step2",
          type: "proof",
          title: "Step 2: Substitution",
          content: "Substitute currents into the Efficiency formula.",
          proofSteps: [
            "$$ \\eta = \\frac{I_{dc}^2 R_L}{I_{rms}^2 (r_f + R_L)} $$",
            "Substitute $I_{dc}$ and $I_{rms}$:",
            "$$ \\eta = \\frac{(I_m / \\pi)^2 R_L}{(I_m / 2)^2 (r_f + R_L)} $$",
            "$$ \\eta = \\frac{4}{\\pi^2} \\times \\frac{R_L}{r_f + R_L} $$",
            "Since $4/\\pi^2 \\approx 0.406$:"
          ],
          interactiveSteps: [
            {
              prompt: "To get the maximum efficiency, what must be true about the diode resistance ($r_f$) compared to Load Resistance ($R_L$)?",
              options: [
                { id: "A", text: "$r_f$ must be much larger than $R_L$", isCorrect: false, explanation: "That would make efficiency drop." },
                { id: "B", text: "$r_f$ must be negligible compared to $R_L$", isCorrect: true, explanation: "If $r_f \\approx 0$, the ratio becomes 1, giving max efficiency of 40.6%." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "les-2-1-3-3",
      title: "Comparison Table",
      description: "HW vs FW",
      icon: "Grid",
      slides: [
        {
          id: "table",
          type: "theory",
          title: "Efficiency Comparison",
          content: "| Rectifier Type | Max Efficiency | \n|---|---|\n| Half-Wave | 40.6% |\n| Full-Wave (Center-Tap) | 81.2% |\n| Full-Wave (Bridge) | 81.2% |\n\nFull-wave rectifiers are twice as efficient because they utilize both halves of the AC cycle."
        }
      ]
    }
  ]
};