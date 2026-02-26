import { Unit } from '../../types';

export const UNIT_1_1_5: Unit = {
  id: "unit-1-1-5",
  title: "Atomic & Molecular Masses",
  description: "Atoms, Molecules, and the Mole Concept",
  color: "duo-green",
  lessons: [
    {
      id: "les-1-1-5-1",
      title: "Atomic Mass",
      description: "Unified Mass & C-12 Standard",
      icon: "Scale",
      slides: [
        { id: "pre-1", type: "quiz", title: "Initial Thought", content: "Is the mass of a single atom usually measured in grams in daily calculations?", options: [{id: "A", text: "No", isCorrect: true, explanation: "It's too small (approx 10^-24 g). We use amu/u."}, {id: "B", text: "Yes", isCorrect: false, explanation: "Grams are macroscopic."}] },
        { id: "pre-2", type: "quiz", title: "Initial Thought", content: "Which isotope is the current reference for atomic mass?", options: [{id: "A", text: "Oxygen-16", isCorrect: false, explanation: "Used historically, not now."}, {id: "B", text: "Carbon-12", isCorrect: true, explanation: "Standard since 1961."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Atomic Mass Unit",
          content: "The **atomic mass unit (amu)**, now often called **unified mass (u)**, is defined precisely as **one-twelfth** of the mass of one carbon-12 atom.\n\n$$1 \\text{ amu} = 1.66056 \\times 10^{-24} \\text{ g}$$\n\nMass of Hydrogen $\\approx 1.008$ u.\nMass of Oxygen-16 $\\approx 15.995$ u."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "The Standard",
          content: "Visualizing the definition: 1 amu is exactly 1/12th of the Carbon-12 isotope.",
          interactiveCanvasId: "chem-c12-standard"
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Recall",
          content: "One atomic mass unit is defined as a mass exactly equal to ___ the mass of one carbon-12 atom.",
          blankAnswer: "one-twelfth"
        },
        {
          id: "ar-1",
          type: "quiz",
          title: "Assertion-Reason",
          content: "**Assertion:** The atomic mass of Carbon-12 is exactly 12 u.\n**Reason:** Carbon-12 is the standard reference for measuring atomic masses.",
          options: [
            { id: "A", text: "Both True, Reason explains Assertion", isCorrect: true, explanation: "By definition, C-12 is assigned mass 12." },
            { id: "B", text: "Both True, Reason does not explain", isCorrect: false, explanation: "The definition is the reason." }
          ]
        },
        {
          id: "trap-1",
          type: "quiz",
          title: "Spot the Error",
          content: "Why is the atomic mass of Chlorine 35.5 u?",
          options: [
            { id: "A", text: "It has half a proton", isCorrect: false, explanation: "Protons are whole." },
            { id: "B", text: "It is an average of isotopes", isCorrect: true, explanation: "Cl-35 and Cl-37 exist in 3:1 ratio." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Law of conservation of mass was given by?", options: [{id: "A", text: "Lavoisier", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Dalton", isCorrect: false, explanation: "Multiple proportions"}]}
      ]
    },
    {
      id: "les-1-1-5-2",
      title: "Average Atomic Mass",
      description: "Handling Isotopes",
      icon: "Percent",
      slides: [
        { id: "pre-1", type: "quiz", title: "Concept Check", content: "Do all atoms of an element have the same mass?", options: [{id: "A", text: "Yes", isCorrect: false, explanation: "Isotopes have different masses."}, {id: "B", text: "No", isCorrect: true, explanation: "Neutrons can vary."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Average Atomic Mass",
          content: "Elements occur in nature as a mixture of isotopes. The atomic mass in the periodic table is the **weighted average**.\n\n$$\\text{Avg Mass} = \\sum (\\text{Isotopic Mass} \\times \\text{Relative Abundance})$$\n\nExample: Chlorine\n$^{35}Cl$ (75.77%), $^{37}Cl$ (24.23%) \n$\\approx 35.5$ u"
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Isotope Visualization",
          content: "See how the 3:1 ratio of Cl-35 to Cl-37 results in 35.5 u.",
          interactiveCanvasId: "chem-isotope-avg"
        },
        {
          id: "calc-1",
          type: "numerical",
          title: "Numerical Challenge",
          content: "Boron has two isotopes: $^{10}B$ (19%) and $^{11}B$ (81%). Calculate average atomic mass (round to 1 decimal).",
          numericAnswer: 10.8,
          numericTolerance: 0.1
        },
        {
          id: "pyq-1",
          type: "quiz",
          title: "PYQ Insight",
          content: "If an element has atomic mass 10.8, it implies:",
          options: [
            { id: "A", text: "It is a single isotope of mass 10.8", isCorrect: false, explanation: "Mass number is integer." },
            { id: "B", text: "It is a mixture of isotopes", isCorrect: true, explanation: "Fractional mass indicates isotopes." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "1 u = ?", options: [{id: "A", text: "1.66 x 10^-24 g", isCorrect: true, explanation: "Correct"}, {id: "B", text: "6.022 x 10^23 g", isCorrect: false, explanation: "Avogadro number"}]}
      ]
    },
    {
      id: "les-1-1-5-3",
      title: "Molecular & Formula Mass",
      description: "Summing it up",
      icon: "Calculator",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Molecular vs Formula Mass",
          content: "**Molecular Mass:** Sum of atomic masses in a discrete molecule (e.g., $C_6H_{12}O_6$, $H_2O$).\n\n**Formula Mass:** Used for ionic compounds (e.g., $NaCl$) which do not exist as discrete molecules but as crystal lattices. We sum the ions in the formula unit."
        },
        {
          id: "sol-1",
          type: "solution",
          title: "Interactive Solution",
          content: "Calculate Molecular Mass of Glucose ($C_6H_{12}O_6$).\nGiven: C=12.01, H=1.008, O=16.00",
          interactiveSteps: [
            { stepText: "Step 1: Count atoms.\n6 Carbon, 12 Hydrogen, 6 Oxygen." },
            { stepText: "Step 2: Multiply by atomic masses.\n$6 \\times 12.01 = 72.06$ u\n$12 \\times 1.008 = 12.096$ u\n$6 \\times 16.00 = 96.00$ u" },
            { stepText: "Step 3: Sum them up.\n$72.06 + 12.096 + 96.00 = 180.156$ u" }
          ]
        },
        {
          id: "ret-1",
          type: "numerical",
          title: "Quick Check",
          content: "Calculate formula mass of NaCl (Na=23.0, Cl=35.5).",
          numericAnswer: 58.5,
          numericTolerance: 0.1
        },
        {
          id: "trap-1",
          type: "quiz",
          title: "Spot the Error",
          content: "Can we say 'Molecular Mass of NaCl'?",
          options: [
            { id: "A", text: "Yes, it is a molecule", isCorrect: false, explanation: "Ionic compounds form lattices." },
            { id: "B", text: "No, use Formula Mass", isCorrect: true, explanation: "NaCl is not a discrete molecule." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Average atomic mass depends on?", options: [{id: "A", text: "Relative Abundance", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Radioactivity", isCorrect: false, explanation: "Irrelevant"}]}
      ]
    },
    {
      id: "les-1-1-5-4",
      title: "Mole Concept",
      description: "The Chemists Dozen",
      icon: "Package",
      slides: [
        { id: "pre-1", type: "quiz", title: "Concept Check", content: "A mole is a unit of:", options: [{id: "A", text: "Mass", isCorrect: false, explanation: "It's amount of substance."}, {id: "B", text: "Number of particles", isCorrect: true, explanation: "Like a dozen."}] },
        {
          id: "core-1",
          type: "theory",
          title: "The Mole",
          content: "One **mole** is the amount of substance that contains as many particles as there are atoms in exactly 12 g of $^{12}C$ isotope.\n\nThis number is the **Avogadro Constant ($N_A$)**:\n$$N_A = 6.02214076 \\times 10^{23}$$"
        },
        {
          id: "vis-1",
          type: "theory",
          title: "Visualization",
          content: "Imagine 1 mole of marbles. They would cover the entire Earth to a depth of miles! Yet 1 mole of water molecules is just ~18 mL (a sip)."
        },
        {
          id: "core-2",
          type: "theory",
          title: "Molar Mass",
          content: "The mass of one mole of a substance in grams is called its **Molar Mass**.\nNumerically equal to atomic/molecular mass in u.\n\nExample:\nWater ($H_2O$) mass = 18.02 u.\nMolar Mass = 18.02 g/mol."
        },
        {
          id: "calc-1",
          type: "numerical",
          title: "Numerical",
          content: "How many moles are in 36g of Water?",
          numericAnswer: 2,
          numericTolerance: 0.1
        },
        {
          id: "ar-1",
          type: "quiz",
          title: "Assertion-Reason",
          content: "**Assertion:** 1 mole of Hydrogen gas ($H_2$) and 1 mole of Oxygen gas ($O_2$) have the same number of molecules.\n**Reason:** 1 mole always contains $N_A$ entities.",
          options: [
            { id: "A", text: "Both True, Explanation Correct", isCorrect: true, explanation: "Correct definition of mole." },
            { id: "B", text: "Assertion True, Reason False", isCorrect: false, explanation: "Reason is the definition." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Formula mass is used for?", options: [{id: "A", text: "Ionic compounds", isCorrect: true, explanation: "Like NaCl"}, {id: "B", text: "Gases", isCorrect: false, explanation: "Usually molecular"}]}
      ]
    }
  ]
};