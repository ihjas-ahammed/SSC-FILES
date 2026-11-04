import { Unit } from '../../types';

export const UNIT_2_1_2: Unit = {
  id: "unit-2-1-2",
  title: "Diode Parameters",
  description: "PIV & Leakage",
  color: "duo-blue",
  lessons: [
    {
      id: "les-2-1-2-1",
      title: "Peak Inverse Voltage (PIV)",
      description: "The breaking point",
      icon: "Zap",
      slides: [
        {
          id: "def",
          type: "theory",
          title: "Definition of PIV",
          content: "**Peak Inverse Voltage (PIV)** is the maximum reverse voltage that a diode can withstand without destroying the junction.\n\nDuring the negative half-cycle of an AC input, the diode is reverse-biased. We must ensure the peak AC voltage does *not* exceed the diode's PIV rating."
        },
        {
          id: "check",
          type: "quiz",
          title: "Design Constraint",
          content: "If a circuit has a peak AC input of 50V, which diode should you choose?",
          options: [
            { id: "A", text: "Diode with PIV = 40V", isCorrect: false, explanation: "It will break down during the negative half-cycle." },
            { id: "B", text: "Diode with PIV = 100V", isCorrect: true, explanation: "The PIV must be safely above the peak reverse voltage." }
          ]
        }
      ]
    },
    {
      id: "les-2-1-2-2",
      title: "Leakage Current",
      description: "The imperfect block",
      icon: "Droplet",
      slides: [
        {
          id: "theory",
          type: "theory",
          title: "Reverse Current",
          content: "Ideally, a diode blocks 100% of current in reverse bias. \n\nIn reality, a tiny **Leakage Current** flows due to minority carriers. \n- Silicon: $< 1 \\mu A$\n- Germanium: $\\approx 100 \\mu A$"
        },
        {
          id: "check",
          type: "fill_in_blank",
          title: "Recall",
          content: "Leakage current in a reverse-biased diode is caused by the movement of ___ carriers.",
          blankAnswer: "minority"
        }
      ]
    },
    {
      id: "les-2-1-2-3",
      title: "Forward vs Reverse Resistance",
      description: "The ideal ratio",
      icon: "Scissors",
      slides: [
        {
          id: "theory",
          type: "theory",
          title: "Resistance Ratio",
          content: "A typical diode might have a forward current of $100mA$ and a reverse current of $1\\mu A$.\n\nThis means the ratio of Reverse Resistance to Forward Resistance is enormous (thousands to one), which is what makes it a good rectifier."
        }
      ]
    }
  ]
};