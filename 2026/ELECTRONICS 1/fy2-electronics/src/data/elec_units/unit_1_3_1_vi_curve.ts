import { Unit } from '../../types';

export const UNIT_1_3_1: Unit = {
  id: "unit-1-3-1",
  title: "V-I Characteristics",
  description: "Graphing Diode Behavior",
  color: "duo-violet",
  lessons: [
    {
      id: "les-1-3-1-1",
      title: "The V-I Curve",
      description: "Visualizing current vs voltage",
      icon: "Activity",
      slides: [
        {
          id: "def",
          type: "theory",
          title: "Definition",
          content: "The **Volt-Ampere (V-I) Characteristic** is a graph showing the relationship between the voltage ($V$) applied across a junction and the current ($I$) flowing through it.\n\nUsually, Voltage is on the x-axis and Current on the y-axis."
        },
        {
          id: "vis",
          type: "interactive_canvas",
          title: "Interactive Curve",
          content: "The curve is not linear like a resistor. It has two distinct regions: Forward (Quadrant I) and Reverse (Quadrant III).",
          interactiveCanvasId: "vi-curve-interactive"
        },
        {
          id: "check",
          type: "quiz",
          title: "Ohm's Law",
          content: "Does a PN junction diode obey Ohm's Law ($V=IR$) linearly?",
          options: [
            { id: "A", text: "Yes", isCorrect: false, explanation: "A resistor is linear. A diode is non-linear." },
            { id: "B", text: "No", isCorrect: true, explanation: "Correct. The resistance changes with voltage." }
          ]
        }
      ]
    },
    {
      id: "les-1-3-1-2",
      title: "Test Circuit",
      description: "How to measure it",
      icon: "Zap",
      slides: [
        {
          id: "setup",
          type: "numerical", // Using numerical as a placeholder for circuit setup check
          title: "Circuit Setup",
          content: "To measure the V-I curve, we need a variable DC supply, an Ammeter (series), and a Voltmeter (parallel). \n\nIf we want to measure Forward Current ($I_F$), should the Ammeter be in mA or $\\mu$A?",
          numericAnswer: 0, // Not used for this logic, just structure
          options: [
            { id: "A", text: "mA (Milliampere)", isCorrect: true, explanation: "Forward current is large (mA)." },
            { id: "B", text: "uA (Microampere)", isCorrect: false, explanation: "That is for reverse leakage." }
          ]
        },
        {
          id: "zero-bias",
          type: "theory",
          title: "Zero External Voltage",
          content: "When $V_{ext} = 0$, the potential barrier blocks majority carriers.\n\nTherefore, **Current = 0**."
        }
      ]
    }
  ]
};