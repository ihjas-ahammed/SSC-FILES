import { Unit } from '../../types';

export const UNIT_1_4_2: Unit = {
  id: "unit-1-4-2",
  title: "Bond Geometry",
  description: "Parameters & VSEPR Theory",
  color: "duo-orange",
  lessons: [
    {
      id: "les-1-4-2-1",
      title: "Bond Parameters",
      description: "Length, Angle, Order",
      icon: "Ruler",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Higher bond order implies:", options: [{id: "A", text: "Weaker bond", isCorrect: false, explanation: "Stronger."}, {id: "B", text: "Shorter bond length", isCorrect: true, explanation: "More pull between nuclei."}] },
        { id: "init-2", type: "quiz", title: "Concept", content: "Bond angle of water is:", options: [{id: "A", text: "109.5°", isCorrect: false, explanation: "Tetrahedral angle."}, {id: "B", text: "104.5°", isCorrect: true, explanation: "Reduced due to lone pairs."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Bond Parameters",
          content: "1. **Bond Length:** Equilibrium distance between nuclei. ($R = r_A + r_B$).\n2. **Bond Angle:** Angle between orbitals containing bonding electron pairs.\n3. **Bond Enthalpy:** Energy to break 1 mole of bonds.\n4. **Bond Order:** Number of bonds. (Order $\\propto$ Stability $\\propto$ Enthalpy $\\propto$ 1/Length)."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Visualizing Parameters",
          content: "See bond length and angle for water.",
          interactiveCanvasId: "chem-bond-parameters"
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "With increase in bond order, bond enthalpy ___ and bond length decreases.",
          blankAnswer: "increases"
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Bond Order",
          content: "Calculate Bond Order for $N_2$ (Isoelectronic with CO).",
          numericAnswer: 3,
          numericTolerance: 0
        },
        {
          id: "pyq-1",
          type: "quiz",
          title: "NEET PYQ",
          content: "Correct order of bond length:",
          options: [
            { id: "A", text: "$C-C > C=C > C \\equiv C$", isCorrect: true, explanation: "Single > Double > Triple." },
            { id: "B", text: "$C \\equiv C > C=C > C-C$", isCorrect: false, explanation: "Inverse order." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Lewis symbol for Carbon?", options: [{id: "A", text: "4 dots", isCorrect: true, explanation: "Valence 4"}, {id: "B", text: "6 dots", isCorrect: false, explanation: "Total e-"}]}
      ]
    },
    {
      id: "les-1-4-2-2",
      title: "Resonance & Polarity",
      description: "Dipole Moment",
      icon: "RefreshCw",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "In Resonance, do atoms move?", options: [{id: "A", text: "Yes", isCorrect: false, explanation: "Only electrons move."}, {id: "B", text: "No", isCorrect: true, explanation: "Nuclei positions are fixed."}] },
        { id: "init-2", type: "quiz", title: "Concept", content: "Is $CO_2$ polar?", options: [{id: "A", text: "Yes", isCorrect: false, explanation: "C=O bonds are polar, but molecule is non-polar."}, {id: "B", text: "No", isCorrect: true, explanation: "Dipoles cancel (Linear)."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Resonance & Dipole Moment",
          content: "**Resonance:** Single Lewis structure cannot explain all properties. Actual structure is a hybrid of canonical forms.\nExample: $O_3$ (bond lengths equal).\n\n**Dipole Moment ($\\mu$):** Product of charge and distance ($\mu = q \\times d$). Vector quantity.\n- Resultant $\\mu = 0$ $\\to$ Non-polar ($CO_2, BF_3$).\n- Resultant $\\mu \\neq 0$ $\\to$ Polar ($H_2O, NH_3$)."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Comparison",
          content: "Which has higher dipole moment: $NH_3$ or $NF_3$?",
          options: [
            { id: "A", text: "$NH_3$", isCorrect: true, explanation: "Dipoles add up (lp and bonds). In NF3, they subtract." },
            { id: "B", text: "$NF_3$", isCorrect: false, explanation: "F is more electronegative, but vector sum is lower." }
          ]
        },
        {
          id: "ar-1",
          type: "quiz",
          title: "Assertion-Reason",
          content: "**Assertion:** The dipole moment of $BF_3$ is zero.\n**Reason:** The B-F bonds are non-polar.",
          options: [
            { id: "A", text: "Assertion True, Reason False", isCorrect: true, explanation: "Bonds are polar, but they cancel vectorially." },
            { id: "B", text: "Both True", isCorrect: false, explanation: "Reason is false." }
          ]
        },
        {
          id: "pyq-1",
          type: "quiz",
          title: "NEET PYQ",
          content: "Which molecule has non-zero dipole moment?",
          options: [
            { id: "A", text: "$CCl_4$", isCorrect: false, explanation: "Symmetric (0)." },
            { id: "B", text: "$SO_2$", isCorrect: true, explanation: "Bent shape (not 0)." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Lattice enthalpy relates to?", options: [{id: "A", text: "Ionic crystals", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Gases", isCorrect: false, explanation: "No"}]}
      ]
    },
    {
      id: "les-1-4-2-3",
      title: "VSEPR Theory",
      description: "Predicting Geometry",
      icon: "Box",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "What determines molecular shape?", options: [{id: "A", text: "Repulsion between electron pairs", isCorrect: true, explanation: "VSEPR postulate."}, {id: "B", text: "Attraction between nuclei", isCorrect: false, explanation: "Not primary."}] },
        {
          id: "core-1",
          type: "theory",
          title: "VSEPR Postulates",
          content: "**Valence Shell Electron Pair Repulsion Theory:**\n1. Shape depends on number of valence electron pairs (bonded or non-bonded) around central atom.\n2. Pairs repel each other to minimize energy.\n3. Repulsion Order: **lp-lp > lp-bp > bp-bp**.\n\nBasic Geometries (No lone pairs):\n2: Linear, 3: Trigonal Planar, 4: Tetrahedral, 5: Trigonal Bipyramidal, 6: Octahedral."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "VSEPR Shapes",
          content: "Visualizing standard geometries.",
          interactiveCanvasId: "chem-vsepr-shapes"
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "For a molecule $AB_5$ with zero lone pairs, the geometry is ___ bipyramidal.",
          blankAnswer: "trigonal"
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Application",
          content: "Shape of $PCl_5$?",
          options: [
            { id: "A", text: "Trigonal Bipyramidal", isCorrect: true, explanation: "5 bond pairs, 0 lone pairs." },
            { id: "B", text: "Square Pyramidal", isCorrect: false, explanation: "Requires 5 bonds + 1 lone pair." }
          ]
        },
        {
          id: "pyq-1",
          type: "quiz",
          title: "NEET PYQ",
          content: "Which species is linear?",
          options: [
            { id: "A", text: "$BeCl_2$", isCorrect: true, explanation: "sp hybrid, 2 bp, 0 lp." },
            { id: "B", text: "$SO_2$", isCorrect: false, explanation: "Bent." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Dipole moment of CO2?", options: [{id: "A", text: "Zero", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Non-zero", isCorrect: false, explanation: "No"}]}
      ]
    },
    {
      id: "les-1-4-2-4",
      title: "VSEPR with Lone Pairs",
      description: "Distortions",
      icon: "AlertTriangle",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Does a lone pair occupy more space than a bond pair?", options: [{id: "A", text: "Yes", isCorrect: true, explanation: "Causes more repulsion."}, {id: "B", text: "No", isCorrect: false, explanation: "Incorrect."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Distorted Geometries",
          content: "Lone pairs distort regular geometry.\n\n- **$NH_3$ ($AB_3E$):** 4 electron pairs (Tetrahedral arrangement) $\\to$ 1 lone pair $\\to$ **Pyramidal** shape. Angle 107°.\n- **$H_2O$ ($AB_2E_2$):** 4 pairs $\\to$ 2 lone pairs $\\to$ **Bent/V-shape**. Angle 104.5°."
        },
        {
          id: "vis-1",
          type: "theory",
          title: "Advanced Shapes",
          content: "**$SF_4$ ($AB_4E$):** See-Saw (lp at equatorial).\n**$ClF_3$ ($AB_3E_2$):** T-Shape (2 lp at equatorial).\n**$XeF_2$ ($AB_2E_3$):** Linear (3 lp at equatorial).\n**$XeF_4$ ($AB_4E_2$):** Square Planar (2 lp axial)."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Check",
          content: "In $PCl_5$ (TBP), where do lone pairs go first?",
          options: [
            { id: "A", text: "Equatorial", isCorrect: true, explanation: "Less repulsion (120 deg vs 90 deg)." },
            { id: "B", text: "Axial", isCorrect: false, explanation: "Higher repulsion." }
          ]
        },
        {
          id: "pyq-1",
          type: "quiz",
          title: "NEET PYQ",
          content: "The shape of $XeF_4$ is:",
          options: [
            { id: "A", text: "Square Planar", isCorrect: true, explanation: "6 electron pairs (Octahedral geometry), 2 lone pairs." },
            { id: "B", text: "Tetrahedral", isCorrect: false, explanation: "Incorrect." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Repulsion order?", options: [{id: "A", text: "lp-lp > lp-bp > bp-bp", isCorrect: true, explanation: "Correct"}, {id: "B", text: "bp-bp > lp-lp", isCorrect: false, explanation: "Incorrect"}]}
      ]
    }
  ]
};