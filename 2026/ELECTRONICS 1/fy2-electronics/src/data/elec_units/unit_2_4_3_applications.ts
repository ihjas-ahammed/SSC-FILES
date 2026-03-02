import { Unit } from '../../types';

export const UNIT_2_4_3: Unit = {
  id: "unit-2-4-3",
  title: "Multiplier Applications",
  description: "When and where to use them",
  color: "duo-orange",
  lessons: [
    {
      id: "les-2-4-3-1",
      title: "High Voltage, Low Current",
      description: "The ideal use case",
      icon: "Monitor",
      slides: [
        {
          id: "theory",
          type: "theory",
          title: "Application Domain",
          content: "Because output voltage drops rapidly as load current increases, multipliers are strictly used for **High Voltage, Low Current** applications.\n\nExamples:\n- Cathode Ray Tubes (CRTs) in old TVs/Oscilloscopes.\n- Photomultiplier tubes.\n- X-ray systems."
        },
        {
          id: "quiz",
          type: "quiz",
          title: "Design Choice",
          content: "Would you use a voltage multiplier to power a 12V, 5A DC motor?",
          options: [
            { id: "A", text: "Yes", isCorrect: false, explanation: "5 Amps is a very high current." },
            { id: "B", text: "No", isCorrect: true, explanation: "Multipliers cannot supply high continuous current." }
          ]
        }
      ]
    },
    {
      id: "les-2-4-3-2",
      title: "Triplers and Quadruplers",
      description: "Scaling up",
      icon: "Layers",
      slides: [
        {
          id: "theory",
          type: "theory",
          title: "Cascading Stages",
          content: "By adding more diode-capacitor sections, we can build Voltage Triplers ($3V_m$) and Quadruplers ($4V_m$).\n\nEach successive capacitor stores a multiple of the peak voltage, stacking them higher."
        },
        {
          id: "piv",
          type: "theory",
          title: "PIV Ratings",
          content: "An advantage of multiplier circuits is that despite the high output voltage, the **Peak Inverse Voltage (PIV)** rating required for each individual diode is generally only $2V_m$."
        },
        {
          id: "check",
          type: "fill_in_blank",
          title: "PIV Recall",
          content: "In a voltage quadrupler, the individual diodes must withstand a PIV of ___ times the peak input voltage.",
          blankAnswer: "2"
        }
      ]
    }
  ]
};