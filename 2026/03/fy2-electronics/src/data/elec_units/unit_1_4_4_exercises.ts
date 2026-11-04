import { Unit } from '../../types';

export const UNIT_1_4_4: Unit = {
  id: "unit-1-4-4",
  title: "Section 1.4 Exercises",
  description: "Design Problems",
  color: "duo-orange",
  lessons: [
    {
      id: "les-1-4-4-1",
      title: "LED Circuit Design",
      description: "Calculate parameters",
      icon: "PenTool",
      slides: [
        {
          id: "q1",
          type: "numerical",
          title: "Series Resistor",
          content: "Supply: 12V. LED: 2V drop. Desired Current: 25mA (0.025A).\nCalculate $R_S$ in Ohms.\n$$ R = \\frac{12-2}{0.025} $$",
          numericAnswer: 400,
          numericTolerance: 5
        },
        {
          id: "q2",
          type: "quiz",
          title: "Troubleshooting",
          content: "You build the circuit but the LED is dark. You check the resistor and it's correct. What is the most likely error?",
          options: [
            { id: "A", text: "Diode is reversed", isCorrect: true, explanation: "LEDs block current in reverse. They must be forward biased." },
            { id: "B", text: "Voltage is too high", isCorrect: false, explanation: "That would blow it up (flash then dark)." }
          ]
        }
      ]
    },
    {
      id: "les-1-4-4-2",
      title: "Photodiode Apps",
      description: "Real world usage",
      icon: "Cpu",
      slides: [
        {
          id: "q3",
          type: "quiz",
          title: "Application",
          content: "Which device would you use to receive signals from a TV remote (Infrared)?",
          options: [
            { id: "A", text: "LED", isCorrect: false, explanation: "Remotes *use* LEDs to send." },
            { id: "B", text: "Photodiode", isCorrect: true, explanation: "Fast response time makes them ideal for data reception." }
          ]
        },
        {
          id: "q4",
          type: "fill_in_blank",
          title: "Term Recall",
          content: "The small current flowing in a photodiode when no light is present is called ___ current.",
          blankAnswer: "dark"
        }
      ]
    }
  ]
};