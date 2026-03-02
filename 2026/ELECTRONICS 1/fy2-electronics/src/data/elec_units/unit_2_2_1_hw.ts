import { Unit } from '../../types';

export const UNIT_2_2_1: Unit = {
  id: "unit-2-2-1",
  title: "Half-Wave Rectifier",
  description: "The simplest design",
  color: "duo-orange",
  lessons: [
    {
      id: "les-2-2-1-1",
      title: "Definition & Operation",
      description: "One diode only",
      icon: "MoreHorizontal",
      slides: [
        {
          id: "def",
          type: "theory",
          title: "Half-Wave Rectifier",
          content: "A rectifier circuit that conducts current only during the **positive half-cycles** of the input AC supply.\n\nThe negative half-cycles are suppressed (blocked) because the diode becomes reverse-biased."
        },
        {
          id: "vis",
          type: "interactive_canvas",
          title: "Waveforms",
          content: "Observe how the output is flat during the negative half of the input cycle.",
          interactiveCanvasId: "hw-waveform"
        }
      ]
    },
    {
      id: "les-2-2-1-2",
      title: "Output Frequency",
      description: "Ripple timing",
      icon: "Activity",
      slides: [
        {
          id: "theory",
          type: "theory",
          title: "Frequency Relationship",
          content: "A waveform completes one cycle when it repeats the same pattern. \n\nIn a half-wave rectifier, the output pattern repeats exactly as often as the input AC pattern. \n\nTherefore:\n$$ f_{out} = f_{in} $$"
        },
        {
          id: "check",
          type: "numerical",
          title: "Frequency Calc",
          content: "If the input AC supply is 50 Hz, what is the fundamental ripple frequency of the Half-Wave output in Hz?",
          numericAnswer: 50,
          numericTolerance: 0
        }
      ]
    },
    {
      id: "les-2-2-1-3",
      title: "Disadvantages",
      description: "Why we need better designs",
      icon: "ThumbsDown",
      slides: [
        {
          id: "theory",
          type: "theory",
          title: "Drawbacks",
          content: "1. **High Ripple:** The pulsating DC contains a large AC component, requiring heavy filtering.\n2. **Low Power Output:** AC supply delivers power only half the time."
        }
      ]
    }
  ]
};