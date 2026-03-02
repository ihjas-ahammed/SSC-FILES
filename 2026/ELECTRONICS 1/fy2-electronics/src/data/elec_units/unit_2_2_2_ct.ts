import { Unit } from '../../types';

export const UNIT_2_2_2: Unit = {
  id: "unit-2-2-2",
  title: "Full-Wave Center-Tap",
  description: "Two diodes, one big transformer",
  color: "duo-orange",
  lessons: [
    {
      id: "les-2-2-2-1",
      title: "Center-Tap Architecture",
      description: "Splitting the voltage",
      icon: "GitBranch",
      slides: [
        {
          id: "def",
          type: "theory",
          title: "The Setup",
          content: "Utilizes **two diodes** ($D_1$, $D_2$) and a **center-tapped transformer**.\n\n- Positive Half-Cycle: $D_1$ is forward-biased, $D_2$ is reverse-biased.\n- Negative Half-Cycle: $D_2$ is forward-biased, $D_1$ is reverse-biased.\n\nCurrent flows through the load in the same direction both times."
        },
        {
          id: "vis",
          type: "interactive_canvas",
          title: "Waveforms",
          content: "Observe how both halves of the AC wave are utilized to create continuous humps.",
          interactiveCanvasId: "fw-waveform"
        }
      ]
    },
    {
      id: "les-2-2-2-2",
      title: "Output Frequency",
      description: "Doubling the ripple",
      icon: "FastForward",
      slides: [
        {
          id: "theory",
          type: "theory",
          title: "Frequency Relationship",
          content: "In a full-wave rectifier, the output repeats *twice* for every single AC input cycle. \n\nTherefore:\n$$ f_{out} = 2f_{in} $$"
        },
        {
          id: "check",
          type: "numerical",
          title: "Calculation",
          content: "If the input AC supply is 50 Hz, what is the output ripple frequency in Hz?",
          numericAnswer: 100,
          numericTolerance: 0
        }
      ]
    },
    {
      id: "les-2-2-2-3",
      title: "Peak Inverse Voltage (PIV)",
      description: "A major disadvantage",
      icon: "AlertOctagon",
      slides: [
        {
          id: "theory",
          type: "theory",
          title: "PIV is $2V_m$",
          content: "When $D_1$ is conducting, it acts like a wire. The entire secondary voltage of the transformer appears across the non-conducting diode $D_2$.\n\nBecause the transformer is center-tapped ($V_m$ on top, $V_m$ on bottom), the total voltage across the reverse-biased diode is:\n$$ PIV = 2V_m $$"
        },
        {
          id: "check",
          type: "quiz",
          title: "Cost Implication",
          content: "Because $PIV = 2V_m$, Center-Tap rectifiers require diodes that are:",
          options: [
            { id: "A", text: "Cheaper and lower rated", isCorrect: false, explanation: "Incorrect." },
            { id: "B", text: "More expensive and higher rated", isCorrect: true, explanation: "They must withstand twice the voltage of a bridge rectifier." }
          ]
        }
      ]
    }
  ]
};