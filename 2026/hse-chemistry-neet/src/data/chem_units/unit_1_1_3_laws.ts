import { Unit } from '../../types';

export const UNIT_1_1_3: Unit = {
  id: "unit-1-1-3",
  title: "Chemical Laws & Theory",
  description: "Laws of Combination and Atomic Theory",
  color: "duo-blue",
  lessons: [
    {
      id: "les-1-1-3-1",
      title: "Law of Conservation of Mass",
      description: "Lavoisier's Law",
      icon: "Scale",
      slides: [
        { id: "init-1", type: "quiz", title: "Pre-Check", content: "Can matter be created in a chemical reaction?", options: [{ id: "A", text: "No", isCorrect: true, explanation: "Conservation of mass." }, { id: "B", text: "Yes", isCorrect: false, explanation: "Violates the law." }] },
        { 
          id: "core-1", 
          type: "theory", 
          title: "Law of Conservation of Mass", 
          content: "Proposed by **Antoine Lavoisier** (1789).\n\n**Statement:** Matter can neither be created nor destroyed.\n\nIn a chemical reaction, the total mass of reactants equals the total mass of products." 
        },
        { 
          id: "ret-1", 
          type: "fill_in_blank", 
          title: "NCERT Check", 
          content: "Antoine Lavoisier performed careful experimental studies for ___ reactions.", 
          blankAnswer: "combustion" 
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Calculation",
          content: "If 4g of Hydrogen reacts with 32g of Oxygen to form Water, what is the mass of Water formed?",
          numericAnswer: 36,
          numericTolerance: 0
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "How many sig figs in 0.002?", options: [{id: "A", text: "1", isCorrect: true, explanation: "Correct"}, {id: "B", text: "3", isCorrect: false, explanation: "Leading zeros don't count"}]}
      ]
    },
    {
      id: "les-1-1-3-2",
      title: "Law of Definite Proportions",
      description: "Proust's Law",
      icon: "PieChart",
      slides: [
        { id: "init-1", type: "quiz", title: "Pre-Check", content: "Does water from a river have a different formula than lab-synthesized water?", options: [{ id: "A", text: "Yes", isCorrect: false, explanation: "Origin doesn't matter." }, { id: "B", text: "No", isCorrect: true, explanation: "H2O is always H2O." }] },
        { 
          id: "core-1", 
          type: "theory", 
          title: "Law of Definite Proportions", 
          content: "Proposed by **Joseph Proust**.\n\n**Statement:** A given compound always contains exactly the same proportion of elements by weight.\n\nExample: Cupric Carbonate samples (Natural vs Synthetic) had exactly same % of Cu, C, and O." 
        },
        { 
          id: "ret-1", 
          type: "fill_in_blank", 
          title: "NCERT Check", 
          content: "This law is sometimes also referred to as Law of Definite ___.", 
          blankAnswer: "composition" 
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Concept Check",
          content: "If 1.8g of water contains 0.2g Hydrogen, how much Hydrogen is in 18g of water?",
          options: [
            { id: "A", text: "2.0g", isCorrect: true, explanation: "Proportion remains constant (11.1%)." },
            { id: "B", text: "1.8g", isCorrect: false, explanation: "Incorrect ratio." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "SI unit of mass?", options: [{id: "A", text: "kg", isCorrect: true, explanation: "Correct"}, {id: "B", text: "g", isCorrect: false, explanation: "Gram is not base SI"}]}
      ]
    },
    {
      id: "les-1-1-3-3",
      title: "Law of Multiple Proportions",
      description: "Dalton's Law",
      icon: "Layers",
      slides: [
        { id: "init-1", type: "quiz", title: "Pre-Check", content: "When Carbon forms CO and CO2, is this related to definite proportions?", options: [{ id: "A", text: "No", isCorrect: true, explanation: "This is multiple proportions (two different compounds)." }, { id: "B", text: "Yes", isCorrect: false, explanation: "Definite proportions applies to a single compound." }] },
        { 
          id: "core-1", 
          type: "theory", 
          title: "Law of Multiple Proportions", 
          content: "Proposed by **Dalton** (1803).\n\n**Statement:** If two elements can combine to form more than one compound, the masses of one element that combine with a fixed mass of the other element are in the **ratio of small whole numbers**.\n\nExample: Hydrogen + Oxygen $\\to$ Water (16g O) vs Hydrogen Peroxide (32g O). Ratio 16:32 = 1:2." 
        },
        { 
          id: "ret-1", 
          type: "quiz", 
          title: "Identification", 
          content: "Which pair illustrates the Law of Multiple Proportions?", 
          options: [
            { id: "A", text: "$H_2O$ and $D_2O$", isCorrect: false, explanation: "These are isotopes, not different ratios of same elements." },
            { id: "B", text: "$NO$ and $NO_2$", isCorrect: true, explanation: "Fixed N, O ratio is 1:2." }
          ] 
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Lavoisier proposed?", options: [{id: "A", text: "Conservation of Mass", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Multiple Proportions", isCorrect: false, explanation: "That was Dalton"}]}
      ]
    },
    {
      id: "les-1-1-3-4",
      title: "Gay Lussac's Law",
      description: "Gaseous Volumes",
      icon: "Cloud",
      slides: [
        { id: "init-1", type: "quiz", title: "Pre-Check", content: "Does Gay Lussac's law apply to solids?", options: [{ id: "A", text: "Yes", isCorrect: false, explanation: "Only gases." }, { id: "B", text: "No", isCorrect: true, explanation: "Gaseous volumes." }] },
        { 
          id: "core-1", 
          type: "theory", 
          title: "Gay Lussac’s Law of Gaseous Volumes", 
          content: "Given by **Gay Lussac** (1808).\n\n**Statement:** When gases combine or are produced in a chemical reaction they do so in a **simple ratio by volume**, provided all gases are at the same temperature and pressure.\n\nExample: $100 mL H_2 + 50 mL O_2 \\to 100 mL H_2O (vapour)$.\nRatio H:O:Water = 2:1:2." 
        },
        { 
          id: "ret-1", 
          type: "fill_in_blank", 
          title: "Concept Connection", 
          content: "Gay Lussac's discovery of integer ratio in volume relationship is actually the law of ___ proportions by volume.", 
          blankAnswer: "definite" 
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Calculation",
          content: "If 20 mL of Hydrogen reacts with 10 mL of Oxygen, what volume of water vapour is produced? (Assume same T, P)",
          numericAnswer: 20,
          numericTolerance: 0
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Proust proposed?", options: [{id: "A", text: "Definite Proportions", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Conservation of Mass", isCorrect: false, explanation: "Lavoisier"}]}
      ]
    },
    {
      id: "les-1-1-3-5",
      title: "Avogadro's Law",
      description: "Volume and Molecules",
      icon: "Maximize",
      slides: [
        { id: "init-1", type: "quiz", title: "Pre-Check", content: "Who distinguished between atoms and molecules?", options: [{ id: "A", text: "Dalton", isCorrect: false, explanation: "Dalton didn't make clear distinction." }, { id: "B", text: "Avogadro", isCorrect: true, explanation: "Proposed polyatomic molecules." }] },
        { 
          id: "core-1", 
          type: "theory", 
          title: "Avogadro's Law", 
          content: "Proposed by **Avogadro** (1811).\n\n**Statement:** Equal volumes of all gases at the same temperature and pressure should contain **equal number of molecules**.\n\nThis explained Gay Lussac's results by suggesting elements like Oxygen and Hydrogen exist as diatomic molecules ($O_2, H_2$), not single atoms." 
        },
        { 
          id: "vis-1", 
          type: "interactive_canvas", 
          title: "Avogadro's Hypothesis", 
          content: "Visualizing equal boxes of gas having equal particles.", 
          interactiveCanvasId: "chem-avogadro-box" 
        },
        { 
          id: "ret-1", 
          type: "quiz", 
          title: "True/False", 
          content: "Dalton approved of Avogadro's hypothesis immediately.", 
          options: [
            { id: "A", text: "True", isCorrect: false, explanation: "It was not accepted for many years." },
            { id: "B", text: "False", isCorrect: true, explanation: "Dalton believed atoms of same kind cannot combine." }
          ] 
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Law of Multiple Proportions deals with:", options: [{id: "A", text: "Two elements forming >1 compound", isCorrect: true, explanation: "Correct"}, {id: "B", text: "One compound", isCorrect: false, explanation: "Definite proportions"}]}
      ]
    },
    {
      id: "les-1-1-3-6",
      title: "Dalton's Atomic Theory",
      description: "Postulates and Limitations",
      icon: "Atom",
      slides: [
        { id: "init-1", type: "quiz", title: "Pre-Check", content: "According to Dalton, are atoms divisible?", options: [{ id: "A", text: "Yes", isCorrect: false, explanation: "He thought they were indivisible." }, { id: "B", text: "No", isCorrect: true, explanation: "'a-tomio' means indivisible." }] },
        { 
          id: "core-1", 
          type: "theory", 
          title: "Dalton's Atomic Theory (1808)", 
          content: "**Postulates:**\n1. Matter consists of indivisible atoms.\n2. All atoms of a given element have **identical properties** and mass.\n3. Atoms of different elements differ in mass.\n4. Compounds are formed when atoms of different elements combine in a fixed ratio.\n5. Chemical reactions involve reorganisation of atoms; they are neither created nor destroyed." 
        },
        { 
          id: "ret-1", 
          type: "quiz", 
          title: "Spot the Error", 
          content: "Which postulate was later proven wrong?", 
          options: [
            { id: "A", text: "Compounds form in fixed ratios", isCorrect: false, explanation: "This is true." },
            { id: "B", text: "Atoms of same element have identical mass", isCorrect: true, explanation: "Isotopes exist (e.g., C-12, C-14 have different masses)." }
          ] 
        },
        { 
          id: "ret-2", 
          type: "fill_in_blank", 
          title: "NCERT Check", 
          content: "Dalton's theory could explain the laws of chemical combination but not the laws of ___ volumes.", 
          blankAnswer: "gaseous" 
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Avogadro proposed equal volumes have equal?", options: [{id: "A", text: "Molecules", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Mass", isCorrect: false, explanation: "Different gases have different masses"}]}
      ]
    }
  ]
};