import { Unit } from '../../types';

export const UNIT_1_4_3: Unit = {
  id: "unit-1-4-3",
  title: "Valence Theory",
  description: "VBT & Hybridisation",
  color: "duo-orange",
  lessons: [
    {
      id: "les-1-4-3-1",
      title: "Valence Bond Theory",
      description: "Orbital Overlap",
      icon: "GitMerge",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Covalent bond is formed by:", options: [{id: "A", text: "Overlap of half-filled orbitals", isCorrect: true, explanation: "VBT concept."}, {id: "B", text: "Overlap of filled orbitals", isCorrect: false, explanation: "Usually no bond."}] },
        {
          id: "core-1",
          type: "theory",
          title: "VBT & Overlap",
          content: "**Sigma ($\\sigma$) Bond:** Head-on overlap (Axial). Stronger. Formed by s-s, s-p, p-p (axial).\n**Pi ($\\pi$) Bond:** Sidewise overlap (Lateral). Weaker. Formed by p-p (sidewise).\n\nA single bond is always $\\sigma$. A double bond is $1\\sigma + 1\\pi$. A triple is $1\\sigma + 2\\pi$."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Overlap Types",
          content: "Visualizing Sigma vs Pi.",
          interactiveCanvasId: "chem-orbital-overlap"
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "The strength of a bond depends upon the extent of ___.",
          blankAnswer: "overlap"
        },
        {
          id: "pyq-1",
          type: "numerical",
          title: "Counting Bonds",
          content: "How many sigma bonds in Ethene ($C_2H_4$)?",
          numericAnswer: 5,
          numericTolerance: 0
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Geometry of CH4?", options: [{id: "A", text: "Tetrahedral", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Square Planar", isCorrect: false, explanation: "No"}]}
      ]
    },
    {
      id: "les-1-4-3-2",
      title: "Hybridisation Basics",
      description: "sp, sp2, sp3",
      icon: "Layers",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Hybridisation is mixing of:", options: [{id: "A", text: "Orbitals of slightly different energies", isCorrect: true, explanation: "To form equivalent hybrid orbitals."}, {id: "B", text: "Electrons", isCorrect: false, explanation: "No."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Hybridisation Types",
          content: "1. **sp:** 1s + 1p. Linear (180°). $BeCl_2, C_2H_2$ (Ethyne).\n2. **sp²:** 1s + 2p. Trigonal Planar (120°). $BCl_3, C_2H_4$ (Ethene).\n3. **sp³:** 1s + 3p. Tetrahedral (109.5°). $CH_4, NH_3, H_2O$."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "sp3 Hybridisation",
          content: "Visualizing 4 lobes of sp3.",
          interactiveCanvasId: "chem-hybridisation"
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Check",
          content: "% s-character in sp2?",
          options: [
            { id: "A", text: "33.3%", isCorrect: true, explanation: "1/3rd s." },
            { id: "B", text: "50%", isCorrect: false, explanation: "That is sp." }
          ]
        },
        {
          id: "pyq-1",
          type: "quiz",
          title: "NEET PYQ",
          content: "Hybridisation of C in diamond?",
          options: [
            { id: "A", text: "sp3", isCorrect: true, explanation: "Tetrahedral network." },
            { id: "B", text: "sp2", isCorrect: false, explanation: "Graphite is sp2." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Bond angle in Ethene?", options: [{id: "A", text: "120", isCorrect: true, explanation: "sp2 trigonal"}, {id: "B", text: "109.5", isCorrect: false, explanation: "sp3"}]}
      ]
    },
    {
      id: "les-1-4-3-3",
      title: "Advanced Hybridisation",
      description: "Involving d-orbitals",
      icon: "Hexagon",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Can Nitrogen expand its octet?", options: [{id: "A", text: "No", isCorrect: true, explanation: "No d-orbitals in 2nd shell."}, {id: "B", text: "Yes", isCorrect: false, explanation: "Only period 3+."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Hybridisation with d-orbitals",
          content: "1. **$sp^3d$:** Trigonal Bipyramidal. $PCl_5$. (Uses $d_{z^2}$).\n- Axial bonds are longer/weaker than equatorial.\n2. **$sp^3d^2$:** Octahedral. $SF_6$. (Uses $d_{x^2-y^2}, d_{z^2}$)."
        },
        {
          id: "ar-1",
          type: "quiz",
          title: "Assertion-Reason",
          content: "**Assertion:** $PCl_5$ is reactive.\n**Reason:** Its two axial bonds are longer and weaker than three equatorial bonds.",
          options: [
            { id: "A", text: "Both True, R explains A", isCorrect: true, explanation: "Axial bonds break easily." },
            { id: "B", text: "Assertion False", isCorrect: false, explanation: "It is reactive." }
          ]
        },
        {
          id: "pyq-1",
          type: "quiz",
          title: "NEET PYQ",
          content: "Hybridisation in $IF_7$?",
          options: [
            { id: "A", text: "$sp^3d^3$", isCorrect: true, explanation: "Pentagonal Bipyramidal." },
            { id: "B", text: "$sp^3d^2$", isCorrect: false, explanation: "Octahedral." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Pi bond is formed by?", options: [{id: "A", text: "Sidewise overlap", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Head-on overlap", isCorrect: false, explanation: "Sigma"}]}
      ]
    }
  ]
};