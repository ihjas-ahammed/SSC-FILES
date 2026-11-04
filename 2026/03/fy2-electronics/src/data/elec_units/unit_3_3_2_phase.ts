import { Unit } from '../../types';

export const UNIT_3_3_2: Unit = {
  id: "unit-3-3-2",
  title: "Phase Relationships",
  description: "Input vs Output",
  color: "duo-orange",
  lessons: [
    {
      id: "les-3-3-2-1",
      title: "Signal Swing",
      description: "How Vout changes",
      icon: "TrendingDown",
      slides: [
        {
          id: "predict",
          type: "quiz",
          title: "Prediction",
          content: "If input signal voltage rises (positive half), Base current rises. Collector current rises. What happens to Collector Voltage ($V_C$)?",
          options: [
            { id: "A", text: "Rises", isCorrect: false, explanation: "$V_C = V_{CC} - I_C R_C$. If $I_C$ goes up, drop goes up, so $V_C$ goes DOWN." },
            { id: "B", text: "Falls", isCorrect: true, explanation: "Correct. More drop across resistor means less voltage at collector." }
          ]
        },
        {
          id: "theory",
          type: "theory",
          title: "Logic",
          content: "1. Input $\\uparrow$ \n2. $I_B \\uparrow$ \n3. $I_C \\uparrow$ \n4. Drop $I_C R_C \\uparrow$ \n5. Output $V_{CE} = V_{CC} - I_C R_C \\downarrow$\n\nResult: Positive Input = Negative Output swing."
        }
      ]
    },
    {
      id: "les-3-3-2-2",
      title: "Phase Reversal",
      description: "180 degrees",
      icon: "RefreshCw",
      slides: [
        {
          id: "vis",
          type: "interactive_canvas",
          title: "Phase Shift",
          content: "Visualizing the 180 degree phase shift between input and output.",
          interactiveCanvasId: "phase-reversal"
        },
        {
          id: "check",
          type: "fill_in_blank",
          title: "Degree Shift",
          content: "In a Common Emitter amplifier, the output voltage is ___ degrees out of phase with the input.",
          blankAnswer: "180"
        }
      ]
    },
    {
      id: "les-3-3-2-3",
      title: "Active Region",
      description: "Avoiding distortion",
      icon: "Sliders",
      slides: [
        {
          id: "theory",
          type: "theory",
          title: "Staying Linear",
          content: "To ensure the output is a faithful copy (just inverted), we must operate in the **Active Region**.\n\n- If input drives $V_{CE}$ below knee voltage $\\to$ Saturation Clipping.\n- If input drives $I_B$ to zero $\\to$ Cut-off Clipping."
        }
      ]
    }
  ]
};