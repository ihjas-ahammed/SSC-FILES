import { Unit } from '../../types';

export const UNIT_1_4_5: Unit = {
  id: "unit-1-4-5",
  title: "Hydrogen Bonding",
  description: "Special Dipole Interaction",
  color: "duo-orange",
  lessons: [
    {
      id: "les-1-4-5-1",
      title: "Hydrogen Bonding",
      description: "Concept & Types",
      icon: "Link",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "H-bond forms when H is linked to:", options: [{id: "A", text: "Highly electronegative atom (F, O, N)", isCorrect: true, explanation: "High polarity needed."}, {id: "B", text: "Carbon", isCorrect: false, explanation: "C-H is non-polar."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Hydrogen Bond",
          content: "Electrostatic attraction between a positively charged H atom of one molecule and a highly electronegative atom (F, O, N) of another.\n\n**Types:**\n1. **Intermolecular:** Between different molecules (HF, $H_2O$, Alcohol). Causes high BP.\n2. **Intramolecular:** Within same molecule (o-nitrophenol)."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "H-Bonding",
          content: "Visualizing H-bonding in water.",
          interactiveCanvasId: "chem-h-bonding"
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "Hydrogen bond is represented by a ___ line.",
          blankAnswer: "dotted"
        },
        {
          id: "ar-1",
          type: "quiz",
          title: "Assertion-Reason",
          content: "**Assertion:** o-nitrophenol is more volatile than p-nitrophenol.\n**Reason:** o-nitrophenol has intramolecular H-bonding, while p-nitrophenol has intermolecular association.",
          options: [
            { id: "A", text: "Both True, R explains A", isCorrect: true, explanation: "Intermolecular raises BP (less volatile)." },
            { id: "B", text: "Both True, R does not explain", isCorrect: false, explanation: "It explains volatility diff." }
          ]
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Application",
          content: "Why does ice float on water?",
          options: [
            { id: "A", text: "Cage-like structure due to H-bonds", isCorrect: true, explanation: "Creates vacant spaces, lowers density." },
            { id: "B", text: "Ice is lighter by nature", isCorrect: false, explanation: "Structure is the reason." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Paramagnetic species?", options: [{id: "A", text: "O2", isCorrect: true, explanation: "Correct"}, {id: "B", text: "He", isCorrect: false, explanation: "Diamagnetic"}]}
      ]
    }
  ]
};