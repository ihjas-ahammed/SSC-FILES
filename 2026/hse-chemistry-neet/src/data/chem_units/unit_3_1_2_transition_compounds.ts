import { Unit } from '../../types';

export const UNIT_3_1_2: Unit = {
  id: "unit-3-1-2",
  title: "Transition Compounds",
  description: "Complexes, Oxides & Catalysts",
  color: "duo-gray",
  lessons: [
    {
      id: "les-3-1-2-1",
      title: "Complex Formation",
      description: "Coordination Tendency",
      icon: "Hexagon",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Complex Formation",
          content: "Transition metals form a large number of complexes.\n**Reasons:**\n1. Small size of metal ions.\n2. High ionic charge.\n3. Availability of **d-orbitals** for bond formation."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Reasoning",
          content: "Why do s-block elements rarely form complexes?",
          options: [
            { id: "A", text: "Large size, low charge, no d-orbitals", isCorrect: true, explanation: "Lack the necessary conditions." },
            { id: "B", text: "Too reactive", isCorrect: false, explanation: "Not the primary reason." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Valence of Group 1?", options: [{id: "A", text: "1", isCorrect: true, explanation: "Correct"}, {id: "B", text: "2", isCorrect: false, explanation: "Group 2"}]}
      ]
    },
    {
      id: "les-3-1-2-2",
      title: "Catalytic Properties",
      description: "Why they are catalysts",
      icon: "Zap",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Catalytic Activity",
          content: "Transition metals are excellent catalysts (e.g., V2O5, Fe, Ni).\n**Reasons:**\n1. Ability to adopt **multiple oxidation states**.\n2. Ability to form complexes.\n3. Provide large surface area for reactants."
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Examples",
          content: "Catalyst used in Contact Process for H2SO4?",
          options: [
            { id: "A", text: "$V_2O_5$", isCorrect: true, explanation: "Vanadium Pentoxide." },
            { id: "B", text: "Fe", isCorrect: false, explanation: "Haber Process." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Does catalyst change K?", options: [{id: "A", text: "No", isCorrect: true, explanation: "Only rate"}, {id: "B", text: "Yes", isCorrect: false, explanation: "Incorrect"}]}
      ]
    },
    {
      id: "les-3-1-2-3",
      title: "Interstitial & Alloys",
      description: "Structures",
      icon: "Grid",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Interstitial Compounds",
          content: "Small atoms (H, C, N) trapped inside crystal lattice of metals.\n**Properties:** High MP, very hard, chemically inert, retain conductivity.\n\n**Alloys:** Formed readily because transition metals have similar radii (can swap positions). E.g., Brass (Cu+Zn), Bronze (Cu+Sn)."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Interstitial Site",
          content: "Visual of small atom in lattice void.",
          interactiveCanvasId: "chem-ionic-lattice" // Placeholder
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Property Check",
          content: "Interstitial compounds are typically:",
          options: [
            { id: "A", text: "Chemically Inert", isCorrect: true, explanation: "Hard and unreactive." },
            { id: "B", text: "Soft", isCorrect: false, explanation: "Very hard." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Packing efficiency of FCC?", options: [{id: "A", text: "74%", isCorrect: true, explanation: "Correct"}, {id: "B", text: "68%", isCorrect: false, explanation: "BCC"}]}
      ]
    },
    {
      id: "les-3-1-2-4",
      title: "Oxides & Oxoanions",
      description: "Acidic/Basic Nature",
      icon: "Beaker",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Oxides",
          content: "Acidity increases with oxidation state.\n- Low OS ($MO$): Basic (e.g., $MnO$).\n- Intermediate ($M_2O_3$): Amphoteric.\n- High OS ($M_2O_7$): Acidic (e.g., $Mn_2O_7$ is an acidic oil, gives $HMnO_4$ with water)."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Trend",
          content: "Nature of $CrO_3$?",
          options: [
            { id: "A", text: "Acidic", isCorrect: true, explanation: "High oxidation state (+6)." },
            { id: "B", text: "Basic", isCorrect: false, explanation: "Low OS are basic." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "pH of acidic solution?", options: [{id: "A", text: "< 7", isCorrect: true, explanation: "Correct"}, {id: "B", text: "> 7", isCorrect: false, explanation: "Basic"}]}
      ]
    },
    {
      id: "les-3-1-2-5",
      title: "Potassium Dichromate",
      description: "Preparation & Properties",
      icon: "Droplet",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Preparation of $K_2Cr_2O_7$",
          content: "From Chromite ore ($FeCr_2O_4$).\n1. Fusion: $FeCr_2O_4 + Na_2CO_3 + O_2 \\to Na_2CrO_4$ (Yellow).\n2. Acidification: $Na_2CrO_4 + H^+ \\to Na_2Cr_2O_7$ (Orange).\n3. Exchange: $Na_2Cr_2O_7 + KCl \\to K_2Cr_2O_7$ (Crystals).\n\nEquilibrium: $2CrO_4^{2-} (Yellow) + 2H^+ \\leftrightarrow Cr_2O_7^{2-} (Orange) + H_2O$."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Structure",
          content: "Chromate (Tetrahedral) vs Dichromate (Two tetrahedra sharing corner).",
          interactiveCanvasId: "structure-chromate-dichromate"
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "pH Effect",
          content: "In alkali (high pH), Dichromate converts to:",
          options: [
            { id: "A", text: "Chromate (Yellow)", isCorrect: true, explanation: "Eq shifts left." },
            { id: "B", text: "No change", isCorrect: false, explanation: "It is pH dependent." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Is oxidation loss of electrons?", options: [{id: "A", text: "Yes", isCorrect: true, explanation: "Correct"}, {id: "B", text: "No", isCorrect: false, explanation: "Reduction"}]}
      ]
    },
    {
      id: "les-3-1-2-6",
      title: "Potassium Permanganate",
      description: "Preparation & Oxidising Action",
      icon: "Droplet",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Preparation of $KMnO_4$",
          content: "From Pyrolusite ($MnO_2$).\n1. Fusion: $MnO_2 + KOH + O_2 \\to K_2MnO_4$ (Green Manganate).\n2. Disproportionation: $MnO_4^{2-} + H^+ \\to MnO_4^- (Purple) + MnO_2 + H_2O$.\n\n**Oxidising Action (Acidic):** $MnO_4^- + 8H^+ + 5e^- \\to Mn^{2+}$. (n-factor = 5).\nOxidises $I^- \\to I_2$, $Fe^{2+} \\to Fe^{3+}$, $C_2O_4^{2-} \\to CO_2$."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Structure",
          content: "Manganate vs Permanganate (Both Tetrahedral).",
          interactiveCanvasId: "structure-manganate-permanganate"
        },
        {
          id: "num-1",
          type: "numerical",
          title: "n-factor",
          content: "What is the n-factor of KMnO4 in neutral/faintly alkaline medium? ($MnO_4^- \\to MnO_2$)",
          numericAnswer: 3,
          numericTolerance: 0
        },
        {
          id: "pyq-1",
          type: "quiz",
          title: "NEET PYQ",
          content: "KMnO4 acts as self-indicator. In acidic medium, end point colour is:",
          options: [
            { id: "A", text: "Light Pink", isCorrect: true, explanation: "Excess drop of permanganate." },
            { id: "B", text: "Green", isCorrect: false, explanation: "Manganate is green." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Shape of methane?", options: [{id: "A", text: "Tetrahedral", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Linear", isCorrect: false, explanation: "No"}]}
      ]
    }
  ]
};