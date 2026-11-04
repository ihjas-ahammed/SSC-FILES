import { Unit } from '../../types';

export const UNIT_6_4_1: Unit = {
  id: "unit-6-4-1",
  title: "Amines",
  description: "Structure, Prep & Reactions",
  color: "duo-green",
  lessons: [
    {
      id: "les-6-4-1-1",
      title: "Structure & Classification",
      description: "Geometry & Classes of Amines",
      icon: "Hexagon",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept Check", content: "Amines are derivatives of:", options: [{id: "A", text: "Ammonia", isCorrect: true, explanation: "NH3 with H replaced by R/Ar groups."}, {id: "B", text: "Water", isCorrect: false, explanation: "Alcohols/Ethers are water derivatives."}] },
        { id: "init-2", type: "quiz", title: "Concept Check", content: "The geometry of Nitrogen in amines is:", options: [{id: "A", text: "Pyramidal", isCorrect: true, explanation: "sp3 hybridized with one lone pair."}, {id: "B", text: "Planar", isCorrect: false, explanation: "Due to lone pair repulsion, it's not planar (unless forced)."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Structure & Classification",
          content: "Nitrogen in amines is **sp³ hybridised** with one unshared pair of electrons resulting in a **pyramidal** geometry (Bond angle < 109.5°).\n\n**Classification** (based on H atoms replaced in NH₃):\n1. **Primary (1°):** $R-NH_2$\n2. **Secondary (2°):** $R-NH-R'$\n3. **Tertiary (3°):** $R_3N$"
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Visualizing Geometry",
          content: "The lone pair compresses the C-N-C bond angle.",
          interactiveCanvasId: "amine-structure"
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "Amines are classified as primary, secondary and tertiary depending upon the number of ___ atoms replaced by alkyl or aryl groups in ammonia.",
          blankAnswer: "hydrogen"
        },
        {
          id: "ar-1",
          type: "quiz",
          title: "Assertion-Reason",
          content: "**Assertion:** Trimethylamine has a pyramidal shape.\n**Reason:** Nitrogen is sp³ hybridized and carries an unshared pair of electrons.",
          options: [
            { id: "A", text: "Both True, R explains A", isCorrect: true, explanation: "Standard VSEPR theory." },
            { id: "B", text: "A True, R False", isCorrect: false, explanation: "Reason is correct." }
          ]
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Classification Check",
          content: "Is tert-butylamine a tertiary amine?",
          options: [
            { id: "A", text: "No, it's a primary amine", isCorrect: true, explanation: "It has a -NH2 group attached to a tertiary carbon. Classification is based on N, not C." },
            { id: "B", text: "Yes", isCorrect: false, explanation: "Only one H of NH3 is replaced." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Ozonolysis of alkenes gives?", options: [{id: "A", text: "Aldehydes/Ketones", isCorrect: true, explanation: "Cleavage of double bond."}, {id: "B", text: "Carboxylic acids", isCorrect: false, explanation: "Only with oxidative workup (H2O2)."}]}
      ]
    },
    {
      id: "les-6-4-1-2",
      title: "Nomenclature",
      description: "IUPAC Naming Rules",
      icon: "Type",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept Check", content: "In IUPAC, primary aliphatic amines are named as:", options: [{id: "A", text: "Alkanamines", isCorrect: true, explanation: "Replace 'e' of alkane with 'amine'."}, {id: "B", text: "Alkylamines", isCorrect: false, explanation: "That's common naming."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Nomenclature Rules",
          content: "1. **Primary:** Alkanamine (e.g., $CH_3CH_2NH_2$ is Ethanamine).\n2. **Secondary/Tertiary:** Named as N-substituted derivatives of primary amines. The largest alkyl group forms the parent chain.\n   - e.g., $CH_3-NH-CH_2CH_3$ is **N-Methylethanamine**.\n3. **Arylamines:** $C_6H_5NH_2$ is Aniline (also accepted by IUPAC) or Benzenamine."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Name this",
          content: "IUPAC name of $(CH_3)_3N$?",
          options: [
            { id: "A", text: "N,N-Dimethylmethanamine", isCorrect: true, explanation: "One methyl is parent, two are substituents on N." },
            { id: "B", text: "Trimethylamine", isCorrect: false, explanation: "This is the common name." }
          ]
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Priority Check",
          content: "In a compound with both -OH and -NH2 groups, which gets the suffix?",
          options: [
            { id: "A", text: "-OH (Alcohol)", isCorrect: true, explanation: "OH has higher priority than NH2. NH2 becomes 'amino' prefix." },
            { id: "B", text: "-NH2 (Amine)", isCorrect: false, explanation: "Lower priority." }
          ]
        }
      ]
    },
    {
      id: "les-6-4-1-3",
      title: "Preparation I",
      description: "Reduction & Ammonolysis",
      icon: "Beaker",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept Check", content: "Reduction of Nitrobenzene yields:", options: [{id: "A", text: "Aniline", isCorrect: true, explanation: "Standard method."}, {id: "B", text: "Phenol", isCorrect: false, explanation: "No."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Preparation Methods",
          content: "1. **Reduction of Nitro Compounds:** $R-NO_2 \\xrightarrow{H_2/Pd \\text{ or } Sn/HCl \\text{ or } Fe/HCl} R-NH_2$.\n   *(Fe/HCl is preferred as FeCl₂ formed gets hydrolysed releasing HCl).* \n2. **Ammonolysis of Alkyl Halides:** $RX + NH_3 \\xrightarrow{373K} 1^\\circ, 2^\\circ, 3^\\circ \\text{ amines } + \\text{Quaternary salt}$.\n   *(Disadvantage: Yields a mixture. Primary amine is major if NH₃ is in large excess).* \n3. **Reduction of Nitriles/Amides:** $R-CN \\xrightarrow{LiAlH_4/H_2/Ni} R-CH_2NH_2$ (Ascent of series). $R-CONH_2 \\xrightarrow{LiAlH_4} R-CH_2NH_2$."
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Fact",
          content: "Reduction with iron scrap and hydrochloric acid is preferred because ___ formed gets hydrolysed to release HCl.",
          blankAnswer: "fecl2"
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Ascent of Series",
          content: "Which reaction is used for ascending the amine series (adding one C)?",
          options: [
            { id: "A", text: "Reduction of Nitriles", isCorrect: true, explanation: "RX -> RCN -> RCH2NH2." },
            { id: "B", text: "Ammonolysis", isCorrect: false, explanation: "Carbon number remains same." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Which acid derivative does NOT react with LiAlH4 to give alcohol?", options: [{id: "A", text: "Amides", isCorrect: true, explanation: "Amides give Amines."}, {id: "B", text: "Esters", isCorrect: false, explanation: "Esters give Alcohols."}]}
      ]
    },
    {
      id: "les-6-4-1-4",
      title: "Preparation II",
      description: "Gabriel & Hoffmann",
      icon: "Star",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept Check", content: "Hoffmann bromamide degradation forms an amine with:", options: [{id: "A", text: "One carbon less than amide", isCorrect: true, explanation: "Carbonyl carbon is lost as carbonate."}, {id: "B", text: "Same number of carbons", isCorrect: false, explanation: "No."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Gabriel Phthalimide Synthesis",
          content: "Used for preparation of **Primary Aliphatic Amines** only.\nPhthalimide $\\xrightarrow{KOH}$ K-salt $\\xrightarrow{R-X}$ N-Alkylphthalimide $\\xrightarrow{NaOH}$ $R-NH_2$ + Na-phthalate.\n**Note:** Aromatic primary amines cannot be prepared because aryl halides do not undergo nucleophilic substitution easily."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Gabriel Synthesis",
          content: "Steps of Gabriel synthesis.",
          interactiveCanvasId: "amine-gabriel"
        },
        {
          id: "core-2",
          type: "theory",
          title: "Hoffmann Bromamide Degradation",
          content: "Preparation of primary amines by treating an amide with $Br_2$ in aqueous/ethanolic NaOH.\n$R-CONH_2 + Br_2 + 4NaOH \\to R-NH_2 + Na_2CO_3 + 2NaBr + 2H_2O$.\nMigration of alkyl/aryl group from carbonyl carbon to nitrogen. Product has **one carbon less**."
        },
        {
          id: "vis-2",
          type: "interactive_canvas",
          title: "Hoffmann Degradation",
          content: "Carbonyl removal.",
          interactiveCanvasId: "amine-hoffmann"
        },
        {
          id: "pyq-1",
          type: "quiz",
          title: "NEET PYQ",
          content: "Which of the following amides will give propanamine on Hoffmann bromamide reaction?",
          options: [
            { id: "A", text: "Butanamide", isCorrect: true, explanation: "4 carbons -> 3 carbons (Propanamine)." },
            { id: "B", text: "Propanamide", isCorrect: false, explanation: "Would give Ethanamine." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Can chlorobenzene undergo SN2 easily?", options: [{id: "A", text: "No", isCorrect: true, explanation: "Due to partial double bond character."}, {id: "B", text: "Yes", isCorrect: false, explanation: "It is highly unreactive."}]}
      ]
    },
    {
      id: "les-6-4-1-5",
      title: "Physical Properties & Basicity",
      description: "Basicity Trends",
      icon: "Thermometer",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept Check", content: "Amines behave as Lewis bases because:", options: [{id: "A", text: "They have a lone pair on Nitrogen", isCorrect: true, explanation: "Available for protonation."}, {id: "B", text: "They release OH- in water", isCorrect: false, explanation: "Bronsted/Lewis base, not strictly Arrhenius."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Physical Properties & Basicity",
          content: "**Boiling Point:** Primary/Secondary amines form intermolecular H-bonds. BP order: $1^\\circ > 2^\\circ > 3^\\circ$ (3° has no H for bonding).\n\n**Basicity ($K_b$):** Higher $K_b$ (lower $pK_b$) = Stronger base.\n- **Gas Phase:** Basicity depends only on +I effect of alkyl groups. Order: $3^\\circ > 2^\\circ > 1^\\circ > NH_3$.\n- **Aqueous Phase:** Depends on +I effect, Solvation (H-bonding), and Steric hindrance."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Basicity Trends",
          content: "Comparing Gas vs Aqueous phase.",
          interactiveCanvasId: "amine-basicity"
        },
        {
          id: "core-2",
          type: "theory",
          title: "Aqueous Phase Orders",
          content: "Due to interplay of inductive, steric, and solvation effects:\n- For Methyl group ($-CH_3$): $2^\\circ > 1^\\circ > 3^\\circ > NH_3$\n- For Ethyl group ($-C_2H_5$): $2^\\circ > 3^\\circ > 1^\\circ > NH_3$\n\n**Arylamines (Aniline):** Weaker base than ammonia because lone pair is delocalized into benzene ring via resonance."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Order Check",
          content: "Correct basicity order for methylamines in aqueous solution?",
          options: [
            { id: "A", text: "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$", isCorrect: true, explanation: "2 > 1 > 3 for methyl." },
            { id: "B", text: "$(CH_3)_3N > (CH_3)_2NH > CH_3NH_2$", isCorrect: false, explanation: "Gas phase order." }
          ]
        },
        {
          id: "ar-1",
          type: "quiz",
          title: "Assertion-Reason",
          content: "**Assertion:** Aniline is a weaker base than cyclohexylamine.\n**Reason:** In aniline, the lone pair of electrons on nitrogen is delocalized over the benzene ring.",
          options: [
            { id: "A", text: "Both True, R explains A", isCorrect: true, explanation: "Resonance decreases electron availability." },
            { id: "B", text: "Both False", isCorrect: false, explanation: "They are true." }
          ]
        }
      ]
    },
    {
      id: "les-6-4-1-6",
      title: "Chemical Reactions I",
      description: "Acylation & Carbylamine",
      icon: "Settings",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept Check", content: "Carbylamine reaction is a specific test for:", options: [{id: "A", text: "Primary Amines only", isCorrect: true, explanation: "Both aliphatic and aromatic 1° amines."}, {id: "B", text: "Secondary Amines", isCorrect: false, explanation: "Do not give this test."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Acylation & Carbylamine Reaction",
          content: "1. **Acylation:** $1^\\circ, 2^\\circ$ amines react with acid chlorides/anhydrides to form amides. ($3^\\circ$ do not react - no replaceable H).\n2. **Carbylamine Reaction (Isocyanide Test):** $1^\\circ$ amines (aliphatic/aromatic) heated with $CHCl_3$ and ethanolic KOH form **Isocyanides** (foul-smelling).\n$R-NH_2 + CHCl_3 + 3KOH \\xrightarrow{\\Delta} R-NC + 3KCl + 3H_2O$."
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "Secondary and tertiary amines do ___ show carbylamine reaction.",
          blankAnswer: "not"
        },
        {
          id: "pyq-1",
          type: "quiz",
          title: "NEET PYQ",
          content: "Which of the following will give a foul-smelling product with CHCl3 and KOH?",
          options: [
            { id: "A", text: "Aniline", isCorrect: true, explanation: "It is a primary aromatic amine." },
            { id: "B", text: "N-Methylaniline", isCorrect: false, explanation: "Secondary amine." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "CHCl3 is known as?", options: [{id: "A", text: "Chloroform", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Iodoform", isCorrect: false, explanation: "CHI3"}]}
      ]
    },
    {
      id: "les-6-4-1-7",
      title: "Chemical Reactions II",
      description: "Nitrous Acid & Hinsberg",
      icon: "Shield",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept Check", content: "Hinsberg's reagent is used to:", options: [{id: "A", text: "Distinguish 1°, 2°, 3° amines", isCorrect: true, explanation: "Based on solubility of sulfonamides."}, {id: "B", text: "Prepare amines", isCorrect: false, explanation: "It is an analytical reagent."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Reaction with Nitrous Acid ($HNO_2$)",
          content: "Prepared in situ ($NaNO_2 + HCl$).\n- **$1^\\circ$ Aliphatic:** Form highly unstable diazonium salts $\\to$ Alcohols + $N_2$ gas (Quantitative).\n- **$1^\\circ$ Aromatic:** Form stable Arenediazonium salts at low temp (273-278K)."
        },
        {
          id: "core-2",
          type: "theory",
          title: "Hinsberg's Test",
          content: "Reagent: **Benzenesulphonyl chloride** ($C_6H_5SO_2Cl$).\n- **$1^\\circ$ Amine:** Forms N-alkylbenzenesulphonamide. Contains acidic H attached to N $\\to$ **Soluble in Alkali**.\n- **$2^\\circ$ Amine:** Forms N,N-dialkylbenzenesulphonamide. No acidic H $\\to$ **Insoluble in Alkali**.\n- **$3^\\circ$ Amine:** **Does not react**."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Hinsberg's Test",
          content: "Summary of solubilities.",
          interactiveCanvasId: "amine-hinsberg"
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "Nowadays, benzenesulphonyl chloride is replaced by p-toluenesulphonyl chloride for the distinction of ___.",
          blankAnswer: "amines"
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Aldol condensation requires?", options: [{id: "A", text: "Alpha Hydrogen", isCorrect: true, explanation: "Correct"}, {id: "B", text: "No Alpha Hydrogen", isCorrect: false, explanation: "Cannizzaro"}]}
      ]
    },
    {
      id: "les-6-4-1-8",
      title: "Electrophilic Substitution",
      description: "Reactions of Aniline",
      icon: "Zap",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept Check", content: "Is the -NH2 group activating or deactivating?", options: [{id: "A", text: "Strongly Activating", isCorrect: true, explanation: "Ortho/para directing."}, {id: "B", text: "Deactivating", isCorrect: false, explanation: "No."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Electrophilic Substitution of Aniline",
          content: "Very high reactivity. Poly-substitution is common.\n1. **Bromination:** Aniline + $Br_2$(aq) $\\to$ 2,4,6-Tribromoaniline (White ppt).\n   - To get mono-bromo, protect -NH₂ by **acetylation** with acetic anhydride, then brominate, then hydrolyse.\n2. **Nitration:** Direct nitration gives tarry products + significant **meta**-derivative (47%) because in acidic medium, aniline forms **anilinium ion** (meta directing). Protect -NH₂ first to get para-nitroaniline.\n3. **Sulphonation:** Forms zwitter ion (Sulphanilic acid).\n4. **Friedel-Crafts:** Aniline **fails** to undergo F-C reaction because it forms a salt with Lewis acid catalyst ($AlCl_3$)."
        },
        {
          id: "trap-1",
          type: "quiz",
          title: "Spot the Error",
          content: "Why does direct nitration of aniline give ~47% meta isomer?",
          options: [
            { id: "A", text: "Formation of anilinium ion in acidic medium", isCorrect: true, explanation: "-NH3+ is strongly deactivating and meta directing." },
            { id: "B", text: "-NH2 is meta directing", isCorrect: false, explanation: "-NH2 is o/p directing." }
          ]
        },
        {
          id: "pyq-1",
          type: "quiz",
          title: "NEET PYQ",
          content: "Which of the following will not undergo Friedel-Crafts alkylation?",
          options: [
            { id: "A", text: "Aniline", isCorrect: true, explanation: "Lone pair on N coordinates with AlCl3." },
            { id: "B", text: "Toluene", isCorrect: false, explanation: "Undergoes F-C easily." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Williamson synthesis uses?", options: [{id: "A", text: "Alkyl halide + Alkoxide", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Two alkyl halides", isCorrect: false, explanation: "Wurtz"}]}
      ]
    }
  ]
};