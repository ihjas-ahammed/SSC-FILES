import { Unit } from '../../types';

export const UNIT_2_3_3: Unit = {
  id: "unit-2-3-3",
  title: "Electrodes & Cells",
  description: "Redox Applications",
  color: "duo-violet",
  lessons: [
    {
      id: "les-2-3-3-1",
      title: "Electrochemical Cell",
      description: "Daniel Cell",
      icon: "Battery",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "In Galvanic cell, energy conversion is:", options: [{id: "A", text: "Chemical to Electrical", isCorrect: true, explanation: "Spontaneous redox generates current."}, {id: "B", text: "Electrical to Chemical", isCorrect: false, explanation: "Electrolytic cell."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Daniel Cell",
          content: "Zn rod in $ZnSO_4$ (Anode, Oxidation) || Cu rod in $CuSO_4$ (Cathode, Reduction).\n\n**Reactions:**\nAnode: $Zn \\to Zn^{2+} + 2e^-$\nCathode: $Cu^{2+} + 2e^- \\to Cu$\n\nElectrons flow Zn $\\to$ Cu. Current flows Cu $\\to$ Zn."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Cell Diagram",
          content: "Visualizing Anode/Cathode and Salt Bridge.",
          interactiveCanvasId: "redox-dan-cell"
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Mnemonic",
          content: "LOAN stands for:",
          options: [
            { id: "A", text: "Left Oxidation Anode Negative", isCorrect: true, explanation: "Standard convention." },
            { id: "B", text: "Left Oxygen Anode Neutral", isCorrect: false, explanation: "Incorrect." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Oxidation is loss of?", options: [{id: "A", text: "Electrons", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Protons", isCorrect: false, explanation: "No"}]}
      ]
    },
    {
      id: "les-2-3-3-2",
      title: "Standard Electrode Potential",
      description: "E0 Values",
      icon: "TrendingUp",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Standard Electrode Potential ($E^\\ominus$)",
          content: "Potential of a half-cell coupled with Standard Hydrogen Electrode (SHE, $E^\\ominus = 0$V) at 1M conc, 298K.\n\n- High Positive $E^\\ominus$: Strong Oxidizing Agent ($F_2$).\n- High Negative $E^\\ominus$: Strong Reducing Agent ($Li$).\n\n$E_{cell} = E_{cathode} - E_{anode}$."
        },
        {
          id: "app-1",
          type: "numerical",
          title: "Cell Potential",
          content: "For Daniel cell: $E^\\ominus_{Cu} = 0.34$ V, $E^\\ominus_{Zn} = -0.76$ V. Calculate $E^\\ominus_{cell}$.",
          numericAnswer: 1.1,
          numericTolerance: 0
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Anode is negative in?", options: [{id: "A", text: "Galvanic Cell", isCorrect: true, explanation: "Source of electrons"}, {id: "B", text: "Electrolytic Cell", isCorrect: false, explanation: "Positive there"}]}
      ]
    }
  ]
};