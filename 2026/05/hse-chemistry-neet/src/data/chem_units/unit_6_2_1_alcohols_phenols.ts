import { Unit } from '../../types';

export const UNIT_6_2_1: Unit = {
  id: "unit-6-2-1",
  title: "Alcohols & Phenols",
  description: "Structure, Prep & Reactions",
  color: "duo-pink",
  lessons: [
    {
      id: "les-6-2-1-1",
      title: "Classification & Naming",
      description: "Structures & IUPAC",
      icon: "List",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept Check", content: "Is Phenol an alcohol?", options: [{id: "A", text: "Yes", isCorrect: false, explanation: "Phenol has OH directly on benzene ring. Distinct class."}, {id: "B", text: "No", isCorrect: true, explanation: "Phenols are aromatic hydroxy compounds."}] },
        { id: "init-2", type: "quiz", title: "Concept Check", content: "Allylic alcohol has OH on:", options: [{id: "A", text: "sp3 Carbon", isCorrect: true, explanation: "Next to C=C."}, {id: "B", text: "sp2 Carbon", isCorrect: false, explanation: "That is Vinylic."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Classification",
          content: "1. **Aliphatic Alcohols:** $R-OH$. Classified as $1^\\circ, 2^\\circ, 3^\\circ$ based on C attached to OH.\n2. **Allylic:** OH on $sp^3$ C adjacent to $C=C$.\n3. **Benzylic:** OH on $sp^3$ C adjacent to Benzene.\n4. **Vinylic:** OH on $sp^2$ C (Unstable, tautomerises).\n5. **Phenols:** OH directly on Benzene ring ($Ar-OH$)."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Visualizing Classes",
          content: "1°, 2°, 3°, Allylic and Benzylic alcohols.",
          interactiveCanvasId: "alc-classification"
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "In benzylic alcohols, the -OH group is attached to an ___ hybridised carbon atom next to an aromatic ring.",
          blankAnswer: "sp3"
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Nomenclature",
          content: "IUPAC Name of Glycerol?",
          options: [
            { id: "A", text: "Propane-1,2,3-triol", isCorrect: true, explanation: "Three OH groups." },
            { id: "B", text: "1,2,3-Trihydroxypropane", isCorrect: false, explanation: "Old naming." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Hybridisation of carbonyl carbon?", options: [{id: "A", text: "sp2", isCorrect: true, explanation: "Correct"}, {id: "B", text: "sp3", isCorrect: false, explanation: "No"}]}
      ]
    },
    {
      id: "les-6-2-1-2",
      title: "Structure & Phenols",
      description: "Bond Angles & Naming",
      icon: "Hexagon",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Bond angle in alcohol is:", options: [{id: "A", text: "Exactly 109.5°", isCorrect: false, explanation: "Lone pair repulsion."}, {id: "B", text: "Slightly less than 109.5°", isCorrect: true, explanation: "Due to lp-lp repulsion."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Structure",
          content: "**Methanol:** C-O-H angle is $108.9^\\circ$. C-O length 142 pm.\n**Phenol:** C-O-H angle is $109^\\circ$. C-O length 136 pm.\n\nPhenol C-O bond is **shorter** due to:\n1. Partial double bond character (Resonance).\n2. $sp^2$ hybridised carbon (higher electronegativity)."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Structures",
          content: "Comparing Methanol and Phenol geometry.",
          interactiveCanvasId: "alc-structure"
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Phenol Naming",
          content: "Common name for 2-Methylphenol?",
          options: [
            { id: "A", text: "o-Cresol", isCorrect: true, explanation: "Methyl + Hydroxy on benzene = Cresol." },
            { id: "B", text: "Catechol", isCorrect: false, explanation: "1,2-Benzenediol." }
          ]
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Comparison",
          content: "Why is C-O bond length in phenol shorter than methanol?",
          options: [
            { id: "A", text: "Partial double bond character", isCorrect: true, explanation: "Conjugation of lone pair." },
            { id: "B", text: "Steric hindrance", isCorrect: false, explanation: "Incorrect." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Shape of water molecule?", options: [{id: "A", text: "Bent", isCorrect: true, explanation: "Due to lone pairs"}, {id: "B", text: "Linear", isCorrect: false, explanation: "No"}]}
      ]
    },
    {
      id: "les-6-2-1-3",
      title: "Preparation: Alkenes",
      description: "Hydration Methods",
      icon: "Beaker",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Acid catalysed hydration follows:", options: [{id: "A", text: "Markovnikov Rule", isCorrect: true, explanation: "Stable carbocation."}, {id: "B", text: "Anti-Markovnikov", isCorrect: false, explanation: "Hydroboration does effective anti-markovnikov addition."}] },
        {
          id: "core-1",
          type: "theory",
          title: "From Alkenes",
          content: "1. **Acid Catalysed Hydration:** $C=C + H_2O \\xrightarrow{H^+} Alcohol$.\n   - Mechanism: Protonation $\\to$ Carbocation $\\to$ Water Attack $\\to$ Deprotonation.\n   - Follows Markovnikov rule.\n2. **Hydroboration-Oxidation:** (i) $B_2H_6$ (ii) $H_2O_2/OH^-$.\n   - Product: Anti-Markovnikov Alcohol (Primary from terminal alkene).\n   - Excellent yield."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Hydration Mechanism",
          content: "Step-by-step protonation and attack.",
          interactiveCanvasId: "alc-prep-hydration"
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "Hydroboration-oxidation gives alcohol corresponding to addition of water in an ___ rule manner.",
          blankAnswer: "anti-markovnikov"
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Predict Product",
          content: "Propene + $B_2H_6$, then $H_2O_2/OH^-$ gives:",
          options: [
            { id: "A", text: "Propan-1-ol", isCorrect: true, explanation: "Anti-Markovnikov addition." },
            { id: "B", text: "Propan-2-ol", isCorrect: false, explanation: "Acid hydration product." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Markovnikov rule is based on?", options: [{id: "A", text: "Carbocation stability", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Sterics", isCorrect: false, explanation: "No"}]}
      ]
    },
    {
      id: "les-6-2-1-4",
      title: "Preparation: Carbonyls",
      description: "Reduction & Grignard",
      icon: "Zap",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Reduction of Aldehyde gives:", options: [{id: "A", text: "Primary Alcohol", isCorrect: true, explanation: "RCHO -> RCH2OH."}, {id: "B", text: "Secondary Alcohol", isCorrect: false, explanation: "Ketone gives secondary."}] },
        {
          id: "core-1",
          type: "theory",
          title: "From Carbonyl Compounds",
          content: "1. **Reduction:**\n   - Aldehydes $\\to$ 1° Alcohols. Ketones $\\to$ 2° Alcohols.\n   - Reagents: $H_2/Pd$, $NaBH_4$ (mild), $LiAlH_4$ (strong).\n   - Acids/Esters $\\to$ 1° Alcohols (Need $LiAlH_4$).\n2. **Grignard Reaction:**\n   - Formaldehyde + RMgX $\\to$ 1° Alcohol.\n   - Other Aldehydes + RMgX $\\to$ 2° Alcohol.\n   - Ketones + RMgX $\\to$ 3° Alcohol."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Grignard Addition",
          content: "Nucleophilic attack of R- on C=O.",
          interactiveCanvasId: "alc-prep-grignard"
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Check",
          content: "$NaBH_4$ can reduce:",
          options: [
            { id: "A", text: "Aldehydes and Ketones", isCorrect: true, explanation: "Specific for carbonyls." },
            { id: "B", text: "Carboxylic Acids", isCorrect: false, explanation: "Needs LiAlH4." }
          ]
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Grignard Product",
          content: "Acetone + $CH_3MgBr$, then hydrolysis gives:",
          options: [
            { id: "A", text: "tert-Butyl alcohol", isCorrect: true, explanation: "Ketone -> 3° Alcohol." },
            { id: "B", text: "Isopropyl alcohol", isCorrect: false, explanation: "Reduction product." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Grignard reagent polarity?", options: [{id: "A", text: "C is delta minus", isCorrect: true, explanation: "Correct"}, {id: "B", text: "C is delta plus", isCorrect: false, explanation: "Incorrect"}]}
      ]
    },
    {
      id: "les-6-2-1-5",
      title: "Preparation of Phenols",
      description: "Industrial & Lab Methods",
      icon: "Factory",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Most common commercial method for Phenol?", options: [{id: "A", text: "From Cumene", isCorrect: true, explanation: "High yield, useful byproduct."}, {id: "B", text: "From Chlorobenzene", isCorrect: false, explanation: "Dow process, harsh."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Methods",
          content: "1. **From Haloarenes:** Chlorobenzene + NaOH (623K, 300atm) $\\to$ Phenoxide $\\to$ Phenol (Dow Process).\n2. **From Sulfonic Acid:** $C_6H_5SO_3H$ + NaOH $\\to$ Phenol.\n3. **From Diazonium Salts:** $ArN_2Cl + H_2O$ (Warm) $\\to$ Phenol.\n4. **From Cumene:** Cumene (Isopropylbenzene) $\\xrightarrow{O_2}$ Cumene Hydroperoxide $\\xrightarrow{H^+}$ Phenol + Acetone."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Cumene Process",
          content: "Oxidation and cleavage to Phenol and Acetone.",
          interactiveCanvasId: "phenol-prep-cumene"
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "The valuable by-product obtained in the commercial preparation of phenol from cumene is ___.",
          blankAnswer: "acetone"
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Sandmeyer reaction uses?", options: [{id: "A", text: "Cu2Cl2/HCl", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Cu powder", isCorrect: false, explanation: "Gattermann"}]}
      ]
    },
    {
      id: "les-6-2-1-6",
      title: "Physical Properties",
      description: "BP & Solubility",
      icon: "Thermometer",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Why do alcohols have high BP?", options: [{id: "A", text: "Intermolecular H-bonding", isCorrect: true, explanation: "Strong association."}, {id: "B", text: "Dipole-Dipole interactions", isCorrect: false, explanation: "Weaker than H-bond."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Boiling Point & Solubility",
          content: "**Boiling Point:** Much higher than hydrocarbons/ethers of similar mass due to **H-bonding**. Increases with chain length. Decreases with branching.\n**Solubility:** Lower alcohols are miscible with water (H-bonding). Solubility decreases as alkyl group (hydrophobic part) grows."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Compare BP",
          content: "Order of BP: Ethanol vs Propane vs Dimethyl ether?",
          options: [
            { id: "A", text: "Ethanol > Ether > Propane", isCorrect: true, explanation: "H-bond > Dipole > VDW." },
            { id: "B", text: "Propane > Ethanol > Ether", isCorrect: false, explanation: "Incorrect." }
          ]
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Solubility",
          content: "Which is most soluble in water?",
          options: [
            { id: "A", text: "Methanol", isCorrect: true, explanation: "Small alkyl group." },
            { id: "B", text: "Butanol", isCorrect: false, explanation: "Larger hydrophobic part." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "H-bond requirements?", options: [{id: "A", text: "H attached to F, O, N", isCorrect: true, explanation: "Correct"}, {id: "B", text: "H attached to C", isCorrect: false, explanation: "No"}]}
      ]
    },
    {
      id: "les-6-2-1-7",
      title: "Reactions: Acidity",
      description: "Alcohol vs Phenol",
      icon: "Battery",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Which is more acidic?", options: [{id: "A", text: "Phenol", isCorrect: true, explanation: "Resonance stabilized ion."}, {id: "B", text: "Ethanol", isCorrect: false, explanation: "Less acidic than water."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Acidity",
          content: "Alcohols and Phenols react with Na to give $H_2$. Phenols also react with NaOH (Alcohols don't).\n**Acidity Order:** Phenol > Water > 1° Alcohol > 2° > 3°.\n\n**Reason for Phenol Acidity:** Phenoxide ion is resonance stabilized (negative charge delocalized). Alkoxide ion is destabilized by +I effect of alkyl group."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Resonance Stabilization",
          content: "Comparison of Phenoxide vs Alkoxide stability.",
          interactiveCanvasId: "alc-acidity"
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Effect of Substituents",
          content: "Nitrophenol vs Phenol: Which is more acidic?",
          options: [
            { id: "A", text: "Nitrophenol", isCorrect: true, explanation: "Electron withdrawing NO2 stabilizes phenoxide." },
            { id: "B", text: "Phenol", isCorrect: false, explanation: "Less acidic." }
          ]
        },
        {
          id: "ar-1",
          type: "quiz",
          title: "Assertion-Reason",
          content: "**Assertion:** p-Nitrophenol is more acidic than phenol.\n**Reason:** Nitro group exerts -R and -I effect.",
          options: [
            { id: "A", text: "Both True, R explains A", isCorrect: true, explanation: "Withdraws electrons, stabilizing anion." },
            { id: "B", text: "Both False", isCorrect: false, explanation: "Incorrect." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Inductive effect of Alkyl group?", options: [{id: "A", text: "+I (Donating)", isCorrect: true, explanation: "Destabilizes anion"}, {id: "B", text: "-I (Withdrawing)", isCorrect: false, explanation: "No"}]}
      ]
    },
    {
      id: "les-6-2-1-8",
      title: "Reactions: C-O Cleavage",
      description: "Lucas Test & Dehydration",
      icon: "Scissors",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Lucas Reagent is:", options: [{id: "A", text: "Conc HCl + Anhydrous ZnCl2", isCorrect: true, explanation: "Correct."}, {id: "B", text: "HBr + H2SO4", isCorrect: false, explanation: "No."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Reaction with HX (Lucas Test)",
          content: "Distinguishes 1°, 2°, 3° alcohols based on reactivity with HCl/ZnCl2.\n- **3°:** Immediate turbidity (Halide insoluble).\n- **2°:** Turbidity in 5 mins.\n- **1°:** No turbidity at room temp.\n\n**Dehydration:** Alcohol $\\to$ Alkene ($H_2SO_4$, 443K). Mechanism: Protonation $\\to$ Carbocation (Slow) $\\to$ Elimination. Reactivity: $3^\\circ > 2^\\circ > 1^\\circ$."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Lucas Test",
          content: "Visual simulation of turbidity appearance.",
          interactiveCanvasId: "alc-lucas"
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "The mechanism of dehydration of ethanol involves the formation of a ___ intermediate.",
          blankAnswer: "carbocation"
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Predict Product",
          content: "Dehydration of Butan-2-ol gives major product:",
          options: [
            { id: "A", text: "But-2-ene", isCorrect: true, explanation: "Saytzeff product (more substituted)." },
            { id: "B", text: "But-1-ene", isCorrect: false, explanation: "Minor." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Intermediate in SN1?", options: [{id: "A", text: "Carbocation", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Transition State", isCorrect: false, explanation: "SN2"}]}
      ]
    },
    {
      id: "les-6-2-1-9",
      title: "Phenol Reactions",
      description: "ESR & Name Reactions",
      icon: "Star",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Electrophilic Substitution",
          content: "-OH is **o/p directing** and highly **activating**.\n1. **Nitration:** Dilute $HNO_3 \\to$ mono-nitro. Conc $HNO_3 \\to$ Picric Acid (2,4,6-trinitro).\n2. **Halogenation:** $Br_2$ in $CS_2 \\to$ mono-bromo. $Br_2$ water $\\to$ 2,4,6-tribromophenol (White ppt)."
        },
        {
          id: "core-2",
          type: "theory",
          title: "Name Reactions",
          content: "1. **Kolbe's Reaction:** Phenol + NaOH + $CO_2 \\to$ Salicylic Acid (2-Hydroxybenzoic acid).\n2. **Reimer-Tiemann:** Phenol + $CHCl_3$ + NaOH $\\to$ Salicylaldehyde (2-Hydroxybenzaldehyde). Intermediate: Carbene ($:CCl_2$).\n3. **Reaction with Zn dust:** Phenol $\\to$ Benzene.\n4. **Oxidation:** With $Na_2Cr_2O_7$ $\\to$ Benzoquinone."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Reimer-Tiemann",
          content: "Reaction pathway to Salicylaldehyde.",
          interactiveCanvasId: "phenol-reimer-tiemann"
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Check",
          content: "Product of Phenol + Zinc Dust?",
          options: [
            { id: "A", text: "Benzene", isCorrect: true, explanation: "Reduction." },
            { id: "B", text: "Cyclohexanol", isCorrect: false, explanation: "Requires H2/Ni." }
          ]
        },
        {
          id: "pyq-1",
          type: "quiz",
          title: "NEET PYQ",
          content: "Which reaction produces Salicylic Acid?",
          options: [
            { id: "A", text: "Kolbe's Reaction", isCorrect: true, explanation: "CO2 insertion." },
            { id: "B", text: "Reimer-Tiemann", isCorrect: false, explanation: "Produces Aldehyde." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Is OH group activating?", options: [{id: "A", text: "Yes", isCorrect: true, explanation: "+R effect"}, {id: "B", text: "No", isCorrect: false, explanation: "Incorrect"}]}
      ]
    }
  ]
};