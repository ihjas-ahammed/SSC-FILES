import { Unit } from '../../types';

export const UNIT_4_1_2: Unit = {
  id: "unit-4-1-2",
  title: "Isomerism & Mechanisms",
  description: "Structural, Stereo & Electronic Effects",
  color: "duo-green",
  lessons: [
    {
      id: "les-4-1-2-1",
      title: "Structural Isomerism",
      description: "Chain, Position, Functional",
      icon: "GitBranch",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Isomers have:", options: [{id: "A", text: "Same formula, different properties", isCorrect: true, explanation: "Definition."}, {id: "B", text: "Different formula", isCorrect: false, explanation: "Not isomers."}] },
        { id: "init-2", type: "quiz", title: "Concept", content: "Butane and Isobutane are:", options: [{id: "A", text: "Chain Isomers", isCorrect: true, explanation: "Different skeleton."}, {id: "B", text: "Position Isomers", isCorrect: false, explanation: "Different branching."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Types of Structural Isomerism",
          content: "1. **Chain:** Different carbon skeleton (Pentane vs Isopentane).\n2. **Position:** Different position of functional group/substituent (Butan-1-ol vs Butan-2-ol).\n3. **Functional:** Different functional groups ($C_2H_6O$: Ethanol vs Methoxymethane).\n4. **Metamerism:** Different alkyl chains around a functional group (Ethers, Ketones)."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Isomers Visual",
          content: "Constructing isomers of C4H10 and C3H8O.",
          interactiveCanvasId: "goc-isomers"
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Identify",
          content: "Pentan-2-one and Pentan-3-one are:",
          options: [
            { id: "A", text: "Metamers", isCorrect: true, explanation: "Different alkyl groups across CO (Propyl/Methyl vs Ethyl/Ethyl). Also Position isomers." },
            { id: "B", text: "Functional", isCorrect: false, explanation: "Both ketones." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Hybridisation of C in Ethane?", options: [{id: "A", text: "sp3", isCorrect: true, explanation: "Correct"}, {id: "B", text: "sp2", isCorrect: false, explanation: "Ethene"}]}
      ]
    },
    {
      id: "les-4-1-2-2",
      title: "Stereoisomerism Basics",
      description: "Geometrical & Optical",
      icon: "Box",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Stereoisomers have:", options: [{id: "A", text: "Same constitution, different spatial arrangement", isCorrect: true, explanation: "Definition."}, {id: "B", text: "Different connectivity", isCorrect: false, explanation: "Structural."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Stereoisomerism",
          content: "1. **Geometrical:** Restricted rotation (C=C). **Cis** (same side) and **Trans** (opposite).\n2. **Optical:** Chiral molecules. Non-superimposable mirror images (Enantiomers).\n\nRequires no symmetry element (Plane of symmetry)."
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "Stereoisomerism involves compounds having same constitution and sequence of covalent bonds but differ in relative ___ of their atoms in space.",
          blankAnswer: "positions"
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Condition",
          content: "Which compound shows Geometrical Isomerism?",
          options: [
            { id: "A", text: "But-2-ene", isCorrect: true, explanation: "Has distinct groups on double bonded carbons." },
            { id: "B", text: "Propene", isCorrect: false, explanation: "Terminal C has 2 H's." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Metamerism is common in?", options: [{id: "A", text: "Ethers", isCorrect: true, explanation: "R-O-R"}, {id: "B", text: "Alcohols", isCorrect: false, explanation: "Terminal group"}]}
      ]
    },
    {
      id: "les-4-1-2-3",
      title: "Bond Fission",
      description: "Homolytic vs Heterolytic",
      icon: "Scissors",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Heterolytic cleavage leads to:", options: [{id: "A", text: "Ions (Cation/Anion)", isCorrect: true, explanation: "Unequal sharing."}, {id: "B", text: "Free Radicals", isCorrect: false, explanation: "Homolytic."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Fission Types",
          content: "1. **Heterolytic:** Bond breaks, one atom takes both electrons. Forms **Carbocation** ($C^+$) or **Carbanion** ($C^-$).\n   - $CH_3Br \\to CH_3^+ + Br^-$\n2. **Homolytic:** Each atom takes one electron. Forms **Free Radicals** ($\\dot{C}H_3$).\n   - Favoured by heat/light/peroxide."
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "In homolytic cleavage, the movement of a single electron is shown by a ___ arrow.",
          blankAnswer: "fishhook"
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Stability Order",
          content: "Stability of Alkyl Free Radicals/Carbocations:",
          options: [
            { id: "A", text: "$3^\circ > 2^\circ > 1^\circ$", isCorrect: true, explanation: "Due to hyperconjugation/inductive effect." },
            { id: "B", text: "$1^\circ > 2^\circ > 3^\circ$", isCorrect: false, explanation: "Only for Carbanions." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Shape of methyl cation ($CH_3^+$)?", options: [{id: "A", text: "Planar (sp2)", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Pyramidal (sp3)", isCorrect: false, explanation: "Carbanion"}]}
      ]
    },
    {
      id: "les-4-1-2-4",
      title: "Reagents & Effects I",
      description: "Nucleophiles & Inductive",
      icon: "Magnet",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Nucleophile means:", options: [{id: "A", text: "Nucleus loving (Electron rich)", isCorrect: true, explanation: "Attacks positive centers."}, {id: "B", text: "Electron loving", isCorrect: false, explanation: "Electrophile."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Reagents",
          content: "1. **Nucleophiles ($Nu^-$):** Electron rich. Attack low electron density. ($OH^-, CN^-, H_2O, NH_3$).\n2. **Electrophiles ($E^+$):** Electron deficient. Attack high electron density. ($H^+, Cl^+, NO_2^+, BF_3$).\n\n**Inductive Effect (I-effect):** Permanent displacement of $\\sigma$ electrons along carbon chain due to electronegativity difference.\n- **-I Effect:** Electron withdrawing ($NO_2 > F > Cl > OH$).\n- **+I Effect:** Electron donating (Alkyl groups)."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Inductive Effect",
          content: "Visualizing delta charges along a chain: C-C-C-Cl.",
          interactiveCanvasId: "goc-inductive-effect"
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Classification",
          content: "$BF_3$ acts as:",
          options: [
            { id: "A", text: "Electrophile", isCorrect: true, explanation: "Incomplete octet (6e-)." },
            { id: "B", text: "Nucleophile", isCorrect: false, explanation: "No lone pair." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Homolytic fission produces?", options: [{id: "A", text: "Free Radicals", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Ions", isCorrect: false, explanation: "Heterolytic"}]}
      ]
    },
    {
      id: "les-4-1-2-5",
      title: "Effects II: Resonance",
      description: "Delocalization",
      icon: "RefreshCw",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Resonance involves movement of:", options: [{id: "A", text: "Pi electrons", isCorrect: true, explanation: "Delocalization."}, {id: "B", text: "Sigma electrons", isCorrect: false, explanation: "That's Inductive/Hyperconjugation."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Resonance (Mesomeric) Effect",
          content: "Permanent polarity due to interaction of two $\\pi$ bonds or $\\pi$ bond and lone pair.\n- **+R Effect:** Transfer of e- AWAY from group ($OH, NH_2, Cl$). Increases e- density in ring (o/p directing).\n- **-R Effect:** Transfer of e- TOWARDS group ($NO_2, CHO, CN$). Decreases e- density (meta directing)."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Resonance Structures",
          content: "Drawing structures for Nitrobenzene and Aniline.",
          interactiveCanvasId: "goc-resonance"
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "The energy of the resonance hybrid is ___ than that of any of the canonical structures.",
          blankAnswer: "lower"
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Application",
          content: "In Aniline, the $NH_2$ group shows:",
          options: [
            { id: "A", text: "+R Effect", isCorrect: true, explanation: "Donates lone pair to ring." },
            { id: "B", text: "-R Effect", isCorrect: false, explanation: "Incorrect." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Inductive effect is?", options: [{id: "A", text: "Permanent", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Temporary", isCorrect: false, explanation: "Electromeric is temporary"}]}
      ]
    },
    {
      id: "les-4-1-2-6",
      title: "Effects III: Hyperconjugation",
      description: "Baker-Nathan Effect",
      icon: "TrendingUp",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Hyperconjugation involves delocalization of:", options: [{id: "A", text: "Sigma electrons of C-H bond", isCorrect: true, explanation: "Into adjacent empty p-orbital."}, {id: "B", text: "Lone pair", isCorrect: false, explanation: "Resonance."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Hyperconjugation",
          content: "Stabilizing interaction involving $\\sigma$ bond of C-H group attached to unsaturated system or carbocation.\n- Also called **No-Bond Resonance**.\n- Explains stability of alkenes (More alkylated = More stable) and carbocations ($3^\circ > 2^\circ > 1^\circ$).\n- Depends on number of $\\alpha$-Hydrogens."
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Counting",
          content: "Number of $\\alpha$-hydrogens in Isopropyl carbocation $(CH_3)_2CH^+$?",
          numericAnswer: 6,
          numericTolerance: 0
        },
        {
          id: "ar-1",
          type: "quiz",
          title: "Assertion-Reason",
          content: "**Assertion:** tert-Butyl carbocation is more stable than methyl carbocation.\n**Reason:** Hyperconjugation and +I effect of methyl groups stabilize the positive charge.",
          options: [
            { id: "A", text: "Both True, R explains A", isCorrect: true, explanation: "9 alpha-H plus inductive effect." },
            { id: "B", text: "A True, R False", isCorrect: false, explanation: "Incorrect." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "+R effect group?", options: [{id: "A", text: "-OH", isCorrect: true, explanation: "Donates"}, {id: "B", text: "-NO2", isCorrect: false, explanation: "Withdrawing"}]}
      ]
    },
    {
      id: "les-4-1-2-7",
      title: "Electromeric Effect",
      description: "Temporary Effect",
      icon: "Zap",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Electromeric Effect (E-effect)",
          content: "**Temporary** effect. Complete transfer of $\\pi$ electrons in presence of attacking reagent.\n- **+E Effect:** Electrons move TO the atom where reagent attacks (e.g. $H^+$ addition to alkene).\n- **-E Effect:** Electrons move AWAY from attacking atom (e.g. $CN^-$ attack on carbonyl).\n\nIf reagent is removed, effect disappears."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Check",
          content: "Is Electromeric effect permanent?",
          options: [
            { id: "A", text: "No", isCorrect: true, explanation: "Only in presence of reagent." },
            { id: "B", text: "Yes", isCorrect: false, explanation: "Inductive/Resonance are permanent." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Stability of carbocations?", options: [{id: "A", text: "3 > 2 > 1", isCorrect: true, explanation: "Correct"}, {id: "B", text: "1 > 2 > 3", isCorrect: false, explanation: "Carbanions"}]}
      ]
    },
    {
      id: "les-4-1-2-8",
      title: "Reaction Types",
      description: "Sub, Add, Elim, Rearr",
      icon: "Shuffle",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Types of Organic Reactions",
          content: "1. **Substitution:** Atom/group replaced (e.g. Nitration of benzene, $S_N1/S_N2$).\n2. **Addition:** Reagent adds to multiple bond (e.g. Hydration of ethene).\n3. **Elimination:** Removal of atoms to form multiple bond (e.g. Dehydration of alcohol).\n4. **Rearrangement:** Migration of atoms within molecule."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Identify",
          content: "$CH_3CH_2Br + KOH(aq) \\to CH_3CH_2OH + KBr$. Type?",
          options: [
            { id: "A", text: "Substitution", isCorrect: true, explanation: "Br replaced by OH." },
            { id: "B", text: "Elimination", isCorrect: false, explanation: "Would form Ethene (alc. KOH)." }
          ]
        },
        {
          id: "pyq-1",
          type: "quiz",
          title: "NEET Concept",
          content: "Dehydration of ethanol to ethene is:",
          options: [
            { id: "A", text: "Elimination", isCorrect: true, explanation: "Water removed, double bond formed." },
            { id: "B", text: "Addition", isCorrect: false, explanation: "Reverse." }
          ]
        }
      ]
    }
  ]
};