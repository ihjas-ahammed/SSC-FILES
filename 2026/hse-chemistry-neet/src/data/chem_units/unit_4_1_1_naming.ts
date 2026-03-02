import { Unit } from '../../types';

export const UNIT_4_1_1: Unit = {
  id: "unit-4-1-1",
  title: "Structure & Nomenclature",
  description: "Shapes, Classification & IUPAC Naming",
  color: "duo-green",
  lessons: [
    {
      id: "les-4-1-1-1",
      title: "Tetravalence & Shapes",
      description: "Hybridisation of Carbon",
      icon: "Hexagon",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept Check", content: "Carbon forms 4 bonds. This property is called:", options: [{id: "A", text: "Catenation", isCorrect: false, explanation: "That's self-linking."}, {id: "B", text: "Tetravalence", isCorrect: true, explanation: "Valency of 4."}] },
        { id: "init-2", type: "quiz", title: "Concept Check", content: "Shape of methane ($CH_4$) molecule?", options: [{id: "A", text: "Tetrahedral", isCorrect: true, explanation: "sp3 hybridized."}, {id: "B", text: "Planar", isCorrect: false, explanation: "That's Ethene."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Hybridisation & Shapes",
          content: "Carbon forms covalent bonds via hybridisation of s and p orbitals.\n\n1. **sp³ ($CH_4$):** Tetrahedral ($109.5^\circ$). 4 $\\sigma$ bonds.\n2. **sp² ($C_2H_4$):** Trigonal Planar ($120^\circ$). 3 $\\sigma, 1 \\pi$.\n3. **sp ($C_2H_2$):** Linear ($180^\circ$). 2 $\\sigma, 2 \\pi$."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Orbital Shapes",
          content: "Visualizing the geometry of sp3, sp2, and sp hybridised carbon.",
          interactiveCanvasId: "goc-hybridisation"
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "In a $\\pi$ bond formation, parallel orientation of two ___ orbitals on adjacent atoms is necessary.",
          blankAnswer: "p"
        },
        {
          id: "ar-1",
          type: "quiz",
          title: "Assertion-Reason",
          content: "**Assertion:** Rotation about C=C double bond is restricted.\n**Reason:** Rotation interferes with the maximum overlap of p-orbitals forming the $\\pi$ bond.",
          options: [
            { id: "A", text: "Both True, R explains A", isCorrect: true, explanation: "Pi bond requires parallel p-orbitals; rotation breaks this overlap." },
            { id: "B", text: "Both False", isCorrect: false, explanation: "Incorrect." }
          ]
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Hybridisation Check",
          content: "Identify hybridisation of carbon in $CH_2=C=CH_2$ (Allene).",
          options: [
            { id: "A", text: "Terminal sp2, Central sp", isCorrect: true, explanation: "Central C forms two pi bonds (sp)." },
            { id: "B", text: "All sp2", isCorrect: false, explanation: "Incorrect." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Heisenberg's principle involves?", options: [{id: "A", text: "Position & Momentum", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Energy & Time only", isCorrect: false, explanation: "Mainly x and p"}]}
      ]
    },
    {
      id: "les-4-1-1-2",
      title: "Structural Representations",
      description: "Lewis to Bond-line",
      icon: "Edit3",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "In bond-line notation, methyl groups are:", options: [{id: "A", text: "Written as CH3", isCorrect: false, explanation: "Usually just a line end."}, {id: "B", text: "Represented by terminals", isCorrect: true, explanation: "Ends of lines."}] },
        { id: "init-2", type: "quiz", title: "Concept", content: "A wedge represents a bond:", options: [{id: "A", text: "Towards observer", isCorrect: true, explanation: "Solid wedge."}, {id: "B", text: "Away from observer", isCorrect: false, explanation: "That's a dash."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Representations",
          content: "1. **Complete:** All bonds shown.\n2. **Condensed:** $CH_3CH_2CH_3$ (Bonds omitted).\n3. **Bond-line:** Carbon/Hydrogen atoms not shown. Zig-zag lines.\n4. **3D (Wedge-Dash):** \n   - **Solid Wedge:** Towards observer.\n   - **Dashed Wedge:** Away from observer."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Bond Line",
          content: "Converting structures to bond-line notation.",
          interactiveCanvasId: "goc-bond-line" 
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "In bond-line structural representation, atoms like nitrogen, oxygen and halogens are ___ written.",
          blankAnswer: "specifically"
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Interpretation",
          content: "A hexagon with a circle inside represents:",
          options: [
            { id: "A", text: "Cyclohexane", isCorrect: false, explanation: "No double bonds." },
            { id: "B", text: "Benzene", isCorrect: true, explanation: "Delocalized pi electrons." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Which orbital has spherical shape?", options: [{id: "A", text: "s", isCorrect: true, explanation: "Correct"}, {id: "B", text: "p", isCorrect: false, explanation: "Dumbbell"}]}
      ]
    },
    {
      id: "les-4-1-1-3",
      title: "Classification of Compounds",
      description: "Acyclic, Cyclic, Aromatic",
      icon: "Grid",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Benzene is:", options: [{id: "A", text: "Alicyclic", isCorrect: false, explanation: "It's aromatic."}, {id: "B", text: "Benzenoid Aromatic", isCorrect: true, explanation: "Contains benzene ring."}] },
        { id: "init-2", type: "quiz", title: "Concept", content: "Tetrahydrofuran (THF) contains Oxygen in the ring. It is:", options: [{id: "A", text: "Homocyclic", isCorrect: false, explanation: "Only Carbon."}, {id: "B", text: "Heterocyclic", isCorrect: true, explanation: "Contains heteroatom."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Classification",
          content: "1. **Acyclic (Aliphatic):** Open chain.\n2. **Cyclic:**\n   - **Alicyclic:** Homocyclic (only C) or Heterocyclic. Properties like aliphatics.\n   - **Aromatic:** Huckel's Rule ($4n+2 \\pi e^-$).\n     - **Benzenoid:** Contains benzene ring (Aniline).\n     - **Non-benzenoid:** No benzene ring but aromatic (Tropone)."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Example Check",
          content: "Naphthalene is an example of:",
          options: [
            { id: "A", text: "Benzenoid Aromatic", isCorrect: true, explanation: "Fused benzene rings." },
            { id: "B", text: "Alicyclic", isCorrect: false, explanation: "It is aromatic." }
          ]
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Identification",
          content: "Pyridine (Six membered ring with N, aromatic) is:",
          options: [
            { id: "A", text: "Heterocyclic Aromatic", isCorrect: true, explanation: "Heteroatom N + Aromatic." },
            { id: "B", text: "Homocyclic Aromatic", isCorrect: false, explanation: "Contains N." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Molecule with triple bond?", options: [{id: "A", text: "Ethyne", isCorrect: true, explanation: "HC=CH"}, {id: "B", text: "Ethene", isCorrect: false, explanation: "Double"}]}
      ]
    },
    {
      id: "les-4-1-1-4",
      title: "Nomenclature Basics",
      description: "IUPAC Rules & Alkanes",
      icon: "Type",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "First step in naming?", options: [{id: "A", text: "Numbering", isCorrect: false, explanation: "Second step."}, {id: "B", text: "Identify Longest Chain", isCorrect: true, explanation: "Parent chain."}] },
        { id: "init-2", type: "quiz", title: "Concept", content: "Parent alkane with 10 carbons is:", options: [{id: "A", text: "Decane", isCorrect: true, explanation: "Correct."}, {id: "B", text: "Dodecane", isCorrect: false, explanation: "12 carbons."}] },
        {
          id: "core-1",
          type: "theory",
          title: "IUPAC Rules for Alkanes",
          content: "1. **Longest Chain:** Select longest continuous C chain (Parent).\n2. **Numbering:** Lowest number to substituents (Lowest Locant Rule).\n3. **Alphabetical Order:** Substituents listed alphabetically (Ethyl before Methyl).\n4. **Prefixes:** di, tri, tetra for multiple identical groups (Ignored in alphabetizing)."
        },
        {
          id: "sol-1",
          type: "solution",
          title: "Naming Example",
          content: "Name: $CH_3-CH(CH_3)-CH_2-CH_3$",
          interactiveSteps: [
            { stepText: "Longest Chain: 4 carbons (Butane)." },
            { stepText: "Numbering: From left gives Methyl at 2. From right gives 3. Choose 2." },
            { stepText: "Name: 2-Methylbutane." }
          ]
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Rule Check",
          content: "If two chains have same length, choose the one with:",
          options: [
            { id: "A", text: "More substituents", isCorrect: true, explanation: "IUPAC rule." },
            { id: "B", text: "Fewer substituents", isCorrect: false, explanation: "Incorrect." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Geometric shape of sp2?", options: [{id: "A", text: "Trigonal Planar", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Linear", isCorrect: false, explanation: "sp"}]}
      ]
    },
    {
      id: "les-4-1-1-5",
      title: "Functional Group Naming",
      description: "Priority & Suffixes",
      icon: "List",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Functional group determines:", options: [{id: "A", text: "Chemical properties", isCorrect: true, explanation: "Main reactive site."}, {id: "B", text: "Only physical properties", isCorrect: false, explanation: "Chemical too."}] },
        { id: "init-2", type: "quiz", title: "Concept", content: "Suffix for Alcohol?", options: [{id: "A", text: "-ol", isCorrect: true, explanation: "Methanol."}, {id: "B", text: "-al", isCorrect: false, explanation: "Aldehyde."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Functional Groups Priority",
          content: "Decreasing Priority:\n$-COOH > -SO_3H > -COOR > -COCl > -CONH_2 > -CN > -CHO > >C=O > -OH > -NH_2 > C=C > C\\equiv C$\n\nPrincipal group gets **Suffix**. Others get **Prefix**.\nExample: OH is 'ol' if principal, 'hydroxy' if substituent."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Groups Table",
          content: "Visual list of prefixes and suffixes.",
          interactiveCanvasId: "goc-functional-groups" 
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Carbon Count",
          content: "Number of carbons in 'Pent-4-en-2-ol'?",
          numericAnswer: 5,
          numericTolerance: 0
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Check",
          content: "Name of $CH_3COCH_2COOH$?",
          options: [
            { id: "A", text: "3-Oxobutanoic acid", isCorrect: true, explanation: "Acid > Ketone. Ketone becomes 'oxo' prefix." },
            { id: "B", text: "2-Carboxyrpopanone", isCorrect: false, explanation: "Ketone is not priority." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Isomers with different functional groups?", options: [{id: "A", text: "Functional Isomers", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Metamers", isCorrect: false, explanation: "Same group, different chains"}]}
      ]
    },
    {
      id: "les-4-1-1-6",
      title: "Benzene Nomenclature",
      description: "Substituted Benzenes",
      icon: "Hexagon",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Common name for Methylbenzene?", options: [{id: "A", text: "Toluene", isCorrect: true, explanation: "Accepted by IUPAC."}, {id: "B", text: "Aniline", isCorrect: false, explanation: "Aminobenzene."}] },
        { id: "init-2", type: "quiz", title: "Concept", content: "1,2-disubstituted benzene is called:", options: [{id: "A", text: "Ortho", isCorrect: true, explanation: "1,2 position."}, {id: "B", text: "Para", isCorrect: false, explanation: "1,4 position."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Substituted Benzenes",
          content: "1. **Monosubstituted:** Prefix + Benzene (e.g., Nitrobenzene). Special names: Phenol (OH), Aniline ($NH_2$), Anisole ($OCH_3$).\n2. **Disubstituted:** 1,2 (ortho), 1,3 (meta), 1,4 (para).\n3. **Polysubstituted:** Lowest locant rule. Base compound gets number 1."
        },
        {
          id: "sol-1",
          type: "solution",
          title: "Naming",
          content: "Name structure: Cl at 1, NO2 at 2,4.",
          interactiveSteps: [
            { stepText: "Base: Benzene (or Chlorobenzene? No, numbering). 1-Chloro-2,4-dinitrobenzene." },
            { stepText: "Rule: Lowest locant set (1,2,4)." },
            { stepText: "Alphabetical: Chloro vs Nitro." }
          ]
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Application",
          content: "IUPAC Name of Anisole?",
          options: [
            { id: "A", text: "Methoxybenzene", isCorrect: true, explanation: "Correct." },
            { id: "B", text: "Ethoxybenzene", isCorrect: false, explanation: "That is Phenetole." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Shape of benzene?", options: [{id: "A", text: "Planar Hexagon", isCorrect: true, explanation: "sp2 carbons"}, {id: "B", text: "Chair", isCorrect: false, explanation: "Cyclohexane"}]}
      ]
    }
  ]
};