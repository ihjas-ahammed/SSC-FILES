import { Unit } from '../../types';

export const UNIT_3_3_4: Unit = {
  id: "unit-3-3-4",
  title: "Section 3.3 Exercises",
  description: "Amplifier Problems",
  color: "duo-orange",
  lessons: [
    {
      id: "les-3-3-4-1",
      title: "Output Voltage",
      description: "Example Logic",
      icon: "Zap",
      slides: [
        {
          id: "q1",
          type: "numerical",
          title: "Find Vout",
          content: "An amplifier has a voltage gain $A_v = 50$. If the input signal is $10mV$, what is the output signal voltage in mV?",
          numericAnswer: 500,
          numericTolerance: 1
        },
        {
          id: "q2",
          type: "quiz",
          title: "Phase Check",
          content: "If the input is $+10mV$, the output in a CE amplifier is:",
          options: [
            { id: "A", text: "+500mV", isCorrect: false, explanation: "CE inverts the signal." },
            { id: "B", text: "-500mV (inverted)", isCorrect: true, explanation: "Correct." }
          ]
        }
      ]
    },
    {
      id: "les-3-3-4-2",
      title: "Power Gain",
      description: "Combining V and I",
      icon: "BatteryCharging",
      slides: [
        {
          id: "theory",
          type: "theory",
          title: "Power Gain ($A_p$)",
          content: "Power Gain is the product of Voltage Gain and Current Gain.\n$$ A_p = A_v \\times A_i $$"
        },
        {
          id: "q3",
          type: "numerical",
          title: "Calc Power Gain",
          content: "If Voltage Gain is 50 and Current Gain ($\\beta$) is 20, what is the Power Gain?",
          numericAnswer: 1000,
          numericTolerance: 10
        }
      ]
    }
  ]
};