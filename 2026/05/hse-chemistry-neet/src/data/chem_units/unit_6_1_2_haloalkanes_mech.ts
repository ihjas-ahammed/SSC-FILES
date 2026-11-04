import { Unit } from '../../types';

export const UNIT_6_1_2: Unit = {
  id: "unit-6-1-2",
  title: "Mechanisms & Reactions",
  description: "SN1, SN2, Elimination & Metals",
  color: "duo-indigo",
  lessons: [
    {
      id: "les-6-1-2-1",
      title: "Nucleophilic Substitution",
      description: "Overview",
      icon: "GitMerge",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Nucleophiles attack:", options: [{id: "A", text: "Electron deficient carbon", isCorrect: true, explanation: "Partial positive charge."}, {id: "B", text: "Electron rich carbon", isCorrect: false, explanation: "Electrophiles attack there."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Nucleophilic Substitution",
          content: "A nucleophile ($Nu^-$) replaces the halogen ($X^-$).\n$R-X + Nu^- \\to R-Nu + X^-$\n\n**Nucleophiles:** $OH^-, CN^-, NC^-, NO_2^-, ONO^-$. \n**Ambident Nucleophiles:** Can attack through two different sites (e.g., CN: C or N; NO2: N or O)."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Ambident Check",
          content: "KCN gives Cyanide (RCN), but AgCN gives:",
          options: [
            { id: "A", text: "Isocyanide (RNC)", isCorrect: true, explanation: "AgCN is covalent, N is available donor." },
            { id: "B", text: "Cyanide (RCN)", isCorrect: false, explanation: "Ionic KCN gives this." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Example of nucleophile?", options: [{id: "A", text: "NH3", isCorrect: true, explanation: "Lone pair"}, {id: "B", text: "BF3", isCorrect: false, explanation: "Electrophile"}]}
      ]
    },
    {
      id: "les-6-1-2-2",
      title: "SN2 Mechanism",
      description: "Backside Attack",
      icon: "ArrowRight",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Order of SN2 reaction?", options: [{id: "A", text: "2 (Bimolecular)", isCorrect: true, explanation: "Rate = k[RX][Nu]."}, {id: "B", text: "1", isCorrect: false, explanation: "SN1."}] },
        {
          id: "core-1",
          type: "theory",
          title: "SN2 (Substitution Nucleophilic Bimolecular)",
          content: "Single step mechanism. No intermediate.\n- **Backside Attack:** Nu attacks from side opposite to halogen.\n- **Transition State:** Unstable state where C is bonded to both Nu and X.\n- **Result:** **Inversion of Configuration** (Walden Inversion).\n- **Reactivity:** $1^\\circ > 2^\\circ > 3^\\circ$ (Steric hindrance)."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "SN2 Mechanism",
          content: "Visual of umbrella inversion.",
          interactiveCanvasId: "mech-sn2"
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "The presence of bulky substituents on or near the carbon atom have a dramatic ___ effect on SN2 reaction.",
          blankAnswer: "inhibiting"
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Prediction",
          content: "Which reacts faster in SN2: $CH_3Cl$ or $(CH_3)_3CCl$?",
          options: [
            { id: "A", text: "$CH_3Cl$", isCorrect: true, explanation: "Less steric hindrance (Primary)." },
            { id: "B", text: "$(CH_3)_3CCl$", isCorrect: false, explanation: "Tertiary is very slow in SN2." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Geometry of transition state?", options: [{id: "A", text: "Trigonal Bipyramidal", isCorrect: true, explanation: "Carbon connected to 5 species"}, {id: "B", text: "Tetrahedral", isCorrect: false, explanation: "Reactant/Product"}]}
      ]
    },
    {
      id: "les-6-1-2-3",
      title: "SN1 Mechanism",
      description: "Carbocation Intermediate",
      icon: "Layers",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "SN1 proceeds in:", options: [{id: "A", text: "Two Steps", isCorrect: true, explanation: "Ionization then Attack."}, {id: "B", text: "One Step", isCorrect: false, explanation: "SN2."}] },
        {
          id: "core-1",
          type: "theory",
          title: "SN1 (Substitution Nucleophilic Unimolecular)",
          content: "Two step mechanism.\n1. **Ionisation:** Formation of Carbocation (Slow/RDS).\n2. **Attack:** Nucleophile attacks planar carbocation from either side (Fast).\n- **Result:** **Racemisation** (Mixture of retention and inversion).\n- **Reactivity:** $3^\\circ > 2^\\circ > 1^\\circ$ (Stability of Carbocation)."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "SN1 Steps",
          content: "Step 1 (Carbocation) -> Step 2 (Attack).",
          interactiveCanvasId: "mech-sn1"
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Factors",
          content: "Polar protic solvents (water, alcohol) favour:",
          options: [
            { id: "A", text: "SN1", isCorrect: true, explanation: "Stabilize ions by solvation." },
            { id: "B", text: "SN2", isCorrect: false, explanation: "Favoured by polar aprotic." }
          ]
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Reactivity",
          content: "Which reacts faster in SN1: Allyl chloride or Propyl chloride?",
          options: [
            { id: "A", text: "Allyl chloride", isCorrect: true, explanation: "Allyl carbocation is resonance stabilized." },
            { id: "B", text: "Propyl chloride", isCorrect: false, explanation: "Primary carbocation less stable." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Carbocation shape?", options: [{id: "A", text: "Planar", isCorrect: true, explanation: "sp2"}, {id: "B", text: "Tetrahedral", isCorrect: false, explanation: "No"}]}
      ]
    },
    {
      id: "les-6-1-2-4",
      title: "Stereochemistry",
      description: "Chirality & Optical Activity",
      icon: "Box",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Optical Activity",
          content: "**Chiral Carbon:** Bonded to 4 different groups.\n**Enantiomers:** Non-superimposable mirror images. Rotate plane polarized light in opposite directions (Dextro/Laevo).\n**Racemic Mixture:** Equimolar mixture of enantiomers. Optically inactive (zero rotation).\n\n**Retention:** Config preserved.\n**Inversion:** Config flipped."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Chirality",
          content: "Visual of Chiral vs Achiral molecule.",
          interactiveCanvasId: "mech-chirality"
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "The process of conversion of enantiomer into a racemic mixture is known as ___.",
          blankAnswer: "racemisation"
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Identification",
          content: "Is Butan-2-ol chiral?",
          options: [
            { id: "A", text: "Yes", isCorrect: true, explanation: "C2 has H, OH, CH3, C2H5 groups." },
            { id: "B", text: "No", isCorrect: false, explanation: "It is asymmetric." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "In SN2, what happens to config?", options: [{id: "A", text: "Inversion", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Retention", isCorrect: false, explanation: "Rare"}]}
      ]
    },
    {
      id: "les-6-1-2-5",
      title: "Elimination Reactions",
      description: "Dehydrohalogenation",
      icon: "Scissors",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Elimination uses:", options: [{id: "A", text: "Alcoholic KOH", isCorrect: true, explanation: "Strong base, heat."}, {id: "B", text: "Aqueous KOH", isCorrect: false, explanation: "Substitution."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Beta-Elimination",
          content: "Removal of Halogen from $\\alpha$-carbon and Hydrogen from $\\beta$-carbon to form Alkene.\n\n**Zaitsev Rule (Saytzeff):** In dehydrohalogenation, the preferred product is that alkene which has the **greater number of alkyl groups** attached to the doubly bonded carbon atoms (More substituted alkene)."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Mechanism",
          content: "H removal and X departure.",
          interactiveCanvasId: "mech-elimination"
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Major Product",
          content: "Number of alpha-hydrogens (hyperconjugation) in 2-Butene ($CH_3-CH=CH-CH_3$)?",
          numericAnswer: 6,
          numericTolerance: 0
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Competition",
          content: "Tertiary halide with strong bulky base favors:",
          options: [
            { id: "A", text: "Elimination", isCorrect: true, explanation: "Steric hindrance prevents substitution." },
            { id: "B", text: "Substitution", isCorrect: false, explanation: "Unlikely." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Stability of alkene depends on?", options: [{id: "A", text: "Hyperconjugation", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Inductive only", isCorrect: false, explanation: "No"}]}
      ]
    },
    {
      id: "les-6-1-2-6",
      title: "Reaction with Metals",
      description: "Grignard & Wurtz",
      icon: "BatteryCharging",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Organometallic Compounds",
          content: "1. **Grignard Reagent:** $R-X + Mg \\xrightarrow{\\text{dry ether}} RMgX$. (R is $\\delta-$, Mg is $\\delta+$). Very reactive with proton source ($H_2O, ROH$) to give Alkane ($R-H$).\n2. **Wurtz Reaction:** $2RX + 2Na \\to R-R$. (Coupling).\n3. **Wurtz-Fittig:** Aryl halide + Alkyl halide $\\to$ Alkylarene.\n4. **Fittig:** 2 Aryl halide $\\to$ Diphenyl."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Grignard Polarity",
          content: "Visualizing the C-Mg bond polarity.",
          interactiveCanvasId: "mech-grignard"
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Grignard Precaution",
          content: "Why must Grignard prep be anhydrous?",
          options: [
            { id: "A", text: "It reacts with water to form alkane", isCorrect: true, explanation: "RMgX + H2O -> RH + Mg(OH)X." },
            { id: "B", text: "It explodes", isCorrect: false, explanation: "No." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Wurtz reaction doubles the carbons?", options: [{id: "A", text: "Yes", isCorrect: true, explanation: "Coupling"}, {id: "B", text: "No", isCorrect: false, explanation: "Incorrect"}]}
      ]
    },
    {
      id: "les-6-1-2-7",
      title: "Haloarenes Reactions",
      description: "Low Reactivity to Nu-",
      icon: "Shield",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Nucleophilic Substitution in Haloarenes",
          content: "Aryl halides are extremely **less reactive** towards Nu- substitution.\n**Reasons:**\n1. **Resonance Effect:** C-Cl bond acquires partial double bond character.\n2. **Hybridisation:** sp2 Carbon holds halogen tighter.\n3. **Repulsion:** Electron rich arene repels nucleophile.\n\n**Condition:** Drastic (High T, P) or presence of electron withdrawing group ($NO_2$) at o/p positions."
        },
        {
          id: "core-2",
          type: "theory",
          title: "Electrophilic Substitution",
          content: "Halogen is **o, p-directing** but **deactivating**.\n- Inductive (-I) withdraws electrons (deactivates).\n- Resonance (+R) pushes electrons to o/p positions (directs).\n\nReactions: Chlorination, Nitration, Sulphonation, Friedel-Crafts."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Dow's Process",
          content: "Conversion of Chlorobenzene to Phenol requires:",
          options: [
            { id: "A", text: "NaOH, 623K, 300 atm", isCorrect: true, explanation: "Drastic conditions." },
            { id: "B", text: "NaOH, Room Temp", isCorrect: false, explanation: "No reaction." }
          ]
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Directing",
          content: "Nitration of Chlorobenzene gives major product:",
          options: [
            { id: "A", text: "p-Nitrochlorobenzene", isCorrect: true, explanation: "Less steric hindrance than ortho." },
            { id: "B", text: "m-Nitrochlorobenzene", isCorrect: false, explanation: "Cl is o/p directing." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Is C-Cl bond length shorter in chlorobenzene than methyl chloride?", options: [{id: "A", text: "Yes", isCorrect: true, explanation: "Double bond char"}, {id: "B", text: "No", isCorrect: false, explanation: "Incorrect"}]}
      ]
    },
    {
      id: "les-6-1-2-8",
      title: "Polyhalogen Compounds",
      description: "Uses & Effects",
      icon: "Globe",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Polyhalogens",
          content: "1. **Dichloromethane ($CH_2Cl_2$):** Solvent, paint remover. Harmful to CNS.\n2. **Chloroform ($CHCl_3$):** Anaesthetic (obsolete). Oxidises to Phosgene ($COCl_2$, toxic) in light/air.\n3. **Iodoform ($CHI_3$):** Antiseptic (due to free iodine).\n4. **Freons:** CFCs. Refrigerants. Deplete Ozone.\n5. **DDT:** Insecticide. Non-biodegradable, bio-magnification."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Storage",
          content: "Chloroform is stored in dark bottles to prevent formation of:",
          options: [
            { id: "A", text: "Phosgene ($COCl_2$)", isCorrect: true, explanation: "Poisonous gas." },
            { id: "B", text: "Chlorine gas", isCorrect: false, explanation: "Secondary." }
          ]
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Environment",
          content: "Freon-12 ($CCl_2F_2$) causes:",
          options: [
            { id: "A", text: "Ozone Depletion", isCorrect: true, explanation: "Radical chain reaction in stratosphere." },
            { id: "B", text: "Acid Rain", isCorrect: false, explanation: "SO2/NO2." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Iodoform test detects?", options: [{id: "A", text: "Methyl Ketones / Methyl Carbinols", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Acids", isCorrect: false, explanation: "No"}]}
      ]
    }
  ]
};