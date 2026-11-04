import { Unit } from '../../types';

export const UNIT_6_2_2: Unit = {
  id: "unit-6-2-2",
  title: "Ethers & Commercial",
  description: "Prep, Properties & Methanol/Ethanol",
  color: "duo-pink",
  lessons: [
    {
      id: "les-6-2-2-1",
      title: "Commercial Alcohols",
      description: "Methanol & Ethanol",
      icon: "Factory",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Wood spirit is:", options: [{id: "A", text: "Methanol", isCorrect: true, explanation: "Historically from wood."}, {id: "B", text: "Ethanol", isCorrect: false, explanation: "Grain alcohol."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Important Alcohols",
          content: "**Methanol ($CH_3OH$):** Wood spirit. Produced from $CO + H_2$ (ZnO-Cr2O3 catalyst). Highly poisonous (causes blindness).\n**Ethanol ($C_2H_5OH$):** Fermentation of sugars (Molasses). Enzymes: Invertase (Sucrose $\\to$ Glucose/Fructose), Zymase (Glucose $\\to$ Ethanol). \n**Denatured Alcohol:** Ethanol + CuSO4/Pyridine (Unfit for drinking)."
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "The commercial alcohol is made unfit for drinking by mixing in it some copper sulphate and ___.",
          blankAnswer: "pyridine"
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Enzyme in yeast?", options: [{id: "A", text: "Zymase", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Urease", isCorrect: false, explanation: "Urea"}]}
      ]
    },
    {
      id: "les-6-2-2-2",
      title: "Prep of Ethers: Dehydration",
      description: "Conditions matter",
      icon: "Beaker",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Dehydration of Ethanol at 443K gives:", options: [{id: "A", text: "Ethene", isCorrect: true, explanation: "High temp favors elimination."}, {id: "B", text: "Ethoxyethane", isCorrect: false, explanation: "Requires 413K."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Acidic Dehydration",
          content: "$2 ROH \\xrightarrow{H_2SO_4, 413K} R-O-R + H_2O$\n- Mechanism: SN2 attack of Alcohol on Protonated Alcohol.\n- Only successful for **Primary** alcohols.\n- Secondary/Tertiary alcohols give Alkenes (Elimination)."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Mechanism Check",
          content: "Formation of ether from ethanol is:",
          options: [
            { id: "A", text: "SN2", isCorrect: true, explanation: "Nucleophilic attack." },
            { id: "B", text: "SN1", isCorrect: false, explanation: "No carbocation for 1°." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Bond angle in ether?", options: [{id: "A", text: "> 109.5", isCorrect: true, explanation: "Repulsion of bulky R groups"}, {id: "B", text: "< 109.5", isCorrect: false, explanation: "Water/Alcohol"}]}
      ]
    },
    {
      id: "les-6-2-2-3",
      title: "Williamson Synthesis",
      description: "Best Method",
      icon: "Star",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Williamson synthesis involves:", options: [{id: "A", text: "Alkyl Halide + Sodium Alkoxide", isCorrect: true, explanation: "R-X + R'ONa."}, {id: "B", text: "Alcohol + Acid", isCorrect: false, explanation: "No."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Williamson Synthesis",
          content: "$R-X + R'-ONa \\to R-O-R' + NaX$\n- Mechanism: **SN2**.\n- **Constraint:** Alkyl halide must be **Primary**. \n- If Alkyl halide is $2^\\circ$ or $3^\\circ$, **Elimination** dominates $\\to$ Alkene.\n- Best for unsymmetrical ethers."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Reaction Outcome",
          content: "3° Halide -> Alkene. 1° Halide -> Ether.",
          interactiveCanvasId: "ether-williamson"
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Reagents",
          content: "To prepare tert-butyl methyl ether, use:",
          options: [
            { id: "A", text: "CH3Br + Sodium tert-butoxide", isCorrect: true, explanation: "1° halide is safe." },
            { id: "B", text: "tert-Butyl bromide + Sodium methoxide", isCorrect: false, explanation: "3° halide undergoes elimination." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "SN2 reactivity order?", options: [{id: "A", text: "1 > 2 > 3", isCorrect: true, explanation: "Steric hindrance"}, {id: "B", text: "3 > 2 > 1", isCorrect: false, explanation: "SN1"}]}
      ]
    },
    {
      id: "les-6-2-2-4",
      title: "Properties of Ethers",
      description: "Physical & Chemical",
      icon: "Layers",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Physical Properties",
          content: "- **Boiling Point:** Much lower than isomeric alcohols (No H-bonding). Comparable to alkanes.\n- **Solubility:** Soluble in water (Oxygen forms H-bond with water). Miscibility similar to alcohols of same mass.\n- **Polarity:** Weakly polar (Bent shape, net dipole)."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Comparison",
          content: "Why is Ethanol BP > Dimethyl Ether BP?",
          options: [
            { id: "A", text: "Intermolecular H-bonding in Ethanol", isCorrect: true, explanation: "Ethers lack H on O." },
            { id: "B", text: "Ethanol is heavier", isCorrect: false, explanation: "Isomers have same mass." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Boiling point trend with branching?", options: [{id: "A", text: "Decreases", isCorrect: true, explanation: "Less surface area"}, {id: "B", text: "Increases", isCorrect: false, explanation: "Incorrect"}]}
      ]
    },
    {
      id: "les-6-2-2-5",
      title: "Cleavage by Acids",
      description: "Reaction with HI",
      icon: "Scissors",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Reaction with HX",
          content: "Ethers cleaved by HI/HBr (not HCl). $R-O-R' + HI \\to R-I + R'-OH$.\n**Rules:**\n1. **Standard:** Halide goes to **smaller** alkyl group (SN2 attack on less hindered C).\n2. **Tertiary Exception:** If one group is $3^\\circ$, Halide goes to $3^\\circ$ group (SN1 via stable carbocation).\n3. **Anisole:** Bond O-Ph is strong. Cleavage always gives **Phenol + Methyl Iodide**."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Cleavage Rules",
          content: "Visual guide to I- attack.",
          interactiveCanvasId: "ether-cleavage"
        },
        {
          id: "num-1",
          type: "quiz",
          title: "Predict Product",
          content: "Anisole + HI $\\to$ ?",
          options: [
            { id: "A", text: "Phenol + Methyl Iodide", isCorrect: true, explanation: "O-Phenyl bond stable due to resonance." },
            { id: "B", text: "Iodobenzene + Methanol", isCorrect: false, explanation: "Incorrect." }
          ]
        },
        {
          id: "pyq-1",
          type: "quiz",
          title: "NEET PYQ",
          content: "Reaction of $(CH_3)_3C-O-CH_3$ with HI gives:",
          options: [
            { id: "A", text: "$(CH_3)_3C-I + CH_3OH$", isCorrect: true, explanation: "SN1 pathway (Stable 3° carbocation)." },
            { id: "B", text: "$(CH_3)_3C-OH + CH_3I$", isCorrect: false, explanation: "Only for 1°/2°." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Is Phenoxide or Alkoxide more stable?", options: [{id: "A", text: "Phenoxide", isCorrect: true, explanation: "Resonance"}, {id: "B", text: "Alkoxide", isCorrect: false, explanation: "No"}]}
      ]
    },
    {
      id: "les-6-2-2-6",
      title: "Electrophilic Subst.",
      description: "Reactions of Anisole",
      icon: "Zap",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Reactions of Anisole",
          content: "Alkoxy group (-OR) is **o/p directing** and activating.\n1. **Halogenation:** $Br_2$ in Ethanoic acid $\\to$ p-Bromoanisole (Major).\n2. **Friedel-Crafts:** Alkylation/Acylation at o/p.\n3. **Nitration:** $HNO_3/H_2SO_4 \\to$ o/p Nitroanisole."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Major Product",
          content: "Friedel-Crafts methylation of Anisole gives:",
          options: [
            { id: "A", text: "4-Methoxytoluene (Major)", isCorrect: true, explanation: "Para is major due to sterics." },
            { id: "B", text: "2-Methoxytoluene", isCorrect: false, explanation: "Minor." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Reagent for Nitration?", options: [{id: "A", text: "HNO3 + H2SO4", isCorrect: true, explanation: "Correct"}, {id: "B", text: "HNO3 only", isCorrect: false, explanation: "Too slow"}]}
      ]
    }
  ]
};