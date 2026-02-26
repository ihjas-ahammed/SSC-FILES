import { Unit } from '../../types';

export const UNIT_2_3_1: Unit = {
  id: "unit-2-3-1",
  title: "Redox Theory",
  description: "Basics of Oxidation & Reduction",
  color: "duo-violet",
  lessons: [
    {
      id: "les-2-3-1-1",
      title: "Classical Idea",
      description: "Oxygen & Hydrogen",
      icon: "RefreshCw",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Oxidation originally meant:", options: [{id: "A", text: "Addition of Oxygen", isCorrect: true, explanation: "e.g., C + O2 -> CO2."}, {id: "B", text: "Addition of Hydrogen", isCorrect: false, explanation: "That is reduction."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Classical Definitions",
          content: "**Oxidation:** Addition of Oxygen OR Removal of Hydrogen (OR addition of electronegative element).\n$2Mg + O_2 \\to 2MgO$ (Mg oxidized).\n\n**Reduction:** Addition of Hydrogen OR Removal of Oxygen (OR addition of electropositive element).\n$CuO + H_2 \\to Cu + H_2O$ (CuO reduced)."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Identify",
          content: "In $H_2S + Cl_2 \\to 2HCl + S$, what happens to $H_2S$?",
          options: [
            { id: "A", text: "Oxidized", isCorrect: true, explanation: "Removal of Hydrogen (H2S -> S)." },
            { id: "B", text: "Reduced", isCorrect: false, explanation: "Cl2 is reduced." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Is rusting a redox reaction?", options: [{id: "A", text: "Yes", isCorrect: true, explanation: "Fe oxidized by O2"}, {id: "B", text: "No", isCorrect: false, explanation: "Incorrect"}]}
      ]
    },
    {
      id: "les-2-3-1-2",
      title: "Electronic Concept",
      description: "Electron Transfer",
      icon: "Zap",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "OIL RIG stands for:", options: [{id: "A", text: "Oxidation Is Loss, Reduction Is Gain", isCorrect: true, explanation: "Of electrons."}, {id: "B", text: "Oxidation Is Low, Reduction Is Great", isCorrect: false, explanation: "Mnemonic."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Electron Transfer",
          content: "**Oxidation:** Loss of electrons (Increase in + charge).\n$Na \\to Na^+ + e^-$\n\n**Reduction:** Gain of electrons (Decrease in + charge).\n$Cl_2 + 2e^- \\to 2Cl^-$\n\n**Redox:** Both occur simultaneously."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Zn-Cu Reaction",
          content: "Zn rod in CuSO4 solution. Zn loses e-, Cu gains e-.",
          interactiveCanvasId: "redox-electron-transfer"
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Check",
          content: "Agent that accepts electrons is:",
          options: [
            { id: "A", text: "Oxidizing Agent", isCorrect: true, explanation: "It gets reduced." },
            { id: "B", text: "Reducing Agent", isCorrect: false, explanation: "It donates electrons." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "K value indicates?", options: [{id: "A", text: "Extent of reaction", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Rate of reaction", isCorrect: false, explanation: "Kinetics"}]}
      ]
    }
  ]
};