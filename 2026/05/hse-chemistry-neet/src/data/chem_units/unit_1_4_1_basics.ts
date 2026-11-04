import { Unit } from '../../types';

export const UNIT_1_4_1: Unit = {
  id: "unit-1-4-1",
  title: "Bonding Basics",
  description: "Kössel-Lewis Approach & Ionic Bond",
  color: "duo-orange",
  lessons: [
    {
      id: "les-1-4-1-1",
      title: "Kössel-Lewis Approach",
      description: "Octet Rule & Lewis Symbols",
      icon: "Circle",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept Check", content: "Why do atoms combine?", options: [{id: "A", text: "To increase energy", isCorrect: false, explanation: "Systems tend to lower energy."}, {id: "B", text: "To attain stability", isCorrect: true, explanation: "Lower energy = Higher stability."}] },
        { id: "init-2", type: "quiz", title: "Concept Check", content: "Noble gases are inert because:", options: [{id: "A", text: "They have 8 valence electrons", isCorrect: true, explanation: "Stable octet config (except He)."}, {id: "B", text: "They are very large", isCorrect: false, explanation: "Size is not the primary reason."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Kössel-Lewis Approach (1916)",
          content: "Kössel and Lewis proposed that atoms achieve a stable octet (8 electrons in valence shell) when linked by chemical bonds.\n\n**Lewis Symbols:** Valence electrons are represented by dots around the symbol.\nExample: $\\cdot Li, \\cdot Be \\cdot, \\cdot \\dot{B} \\cdot, :\\dot{C}\\cdot$"
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Lewis Symbols",
          content: "Visualizing valence electrons for period 2 elements.",
          interactiveCanvasId: "chem-lewis-dot"
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "The number of dots around the symbol represents the number of ___ electrons.",
          blankAnswer: "valence"
        },
        {
          id: "ar-1",
          type: "quiz",
          title: "Assertion-Reason",
          content: "**Assertion:** Noble gases have little tendency to react.\n**Reason:** Their outermost shell is completely filled (stable octet).",
          options: [
            { id: "A", text: "Both True, R explains A", isCorrect: true, explanation: "Correct." },
            { id: "B", text: "Both True, R does not explain A", isCorrect: false, explanation: "Reason is the cause." }
          ]
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Exception",
          content: "Which molecule is an exception to the Octet Rule (incomplete octet)?",
          options: [
            { id: "A", text: "$CH_4$", isCorrect: false, explanation: "C has 8e-." },
            { id: "B", text: "$BeCl_2$", isCorrect: true, explanation: "Be has only 4 valence e-." }
          ]
        },
        {
          id: "pyq-1",
          type: "quiz",
          title: "NEET PYQ",
          content: "In which of the following is the octet rule NOT followed?",
          options: [
            { id: "A", text: "$CO_2$", isCorrect: false, explanation: "C and O have 8e-." },
            { id: "B", text: "$NO$", isCorrect: true, explanation: "Odd electron molecule (7+8=15e-)." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Valence of Group 1 elements?", options: [{id: "A", text: "1", isCorrect: true, explanation: "ns1"}, {id: "B", text: "2", isCorrect: false, explanation: "Group 2"}]}
      ]
    },
    {
      id: "les-1-4-1-2",
      title: "Ionic Bond",
      description: "Formation & Lattice Enthalpy",
      icon: "Zap",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept Check", content: "Ionic bond is formed by:", options: [{id: "A", text: "Sharing of electrons", isCorrect: false, explanation: "That is covalent."}, {id: "B", text: "Transfer of electrons", isCorrect: true, explanation: "Electrostatic attraction."}] },
        { id: "init-2", type: "quiz", title: "Concept Check", content: "Does NaCl exist as discrete molecules?", options: [{id: "A", text: "Yes", isCorrect: false, explanation: "No."}, {id: "B", text: "No", isCorrect: true, explanation: "It forms a 3D crystal lattice."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Ionic (Electrovalent) Bond",
          content: "Formed by electrostatic attraction between positive and negative ions.\n\nRequirements:\n1. Low Ionization Enthalpy of Metal (M).\n2. High negative Electron Gain Enthalpy of Non-metal (X).\n3. High **Lattice Enthalpy** of the compound ($MX$)."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Crystal Lattice",
          content: "Visualizing the 3D arrangement of Na+ and Cl- ions.",
          interactiveCanvasId: "chem-ionic-lattice"
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "Ionic compounds in the crystalline state consist of orderly ___ dimensional arrangements of cations and anions.",
          blankAnswer: "three"
        },
        {
          id: "ar-1",
          type: "quiz",
          title: "Assertion-Reason",
          content: "**Assertion:** Ionic compounds are stable.\n**Reason:** Lattice enthalpy release compensates for the energy required to form ions.",
          options: [
            { id: "A", text: "Both True, R explains A", isCorrect: true, explanation: "Energy release drives stability." },
            { id: "B", text: "Assertion False", isCorrect: false, explanation: "They are very stable." }
          ]
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Application",
          content: "Which has higher lattice enthalpy?",
          options: [
            { id: "A", text: "NaCl", isCorrect: false, explanation: "Lower charge density." },
            { id: "B", text: "MgO", isCorrect: true, explanation: "$Mg^{2+}, O^{2-}$ have higher charges, stronger attraction." }
          ]
        },
        {
          id: "pyq-1",
          type: "quiz",
          title: "NEET PYQ",
          content: "Which factor favours ionic bond formation?",
          options: [
            { id: "A", text: "High Ionization Enthalpy of metal", isCorrect: false, explanation: "Hard to form cation." },
            { id: "B", text: "High Lattice Enthalpy", isCorrect: true, explanation: "Releases more energy." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Is $O^{2-}$ larger than $Mg^{2+}$?", options: [{id: "A", text: "Yes", isCorrect: true, explanation: "Anion vs Cation (Isoelectronic)."}, {id: "B", text: "No", isCorrect: false, explanation: "Incorrect."}]}
      ]
    }
  ]
};