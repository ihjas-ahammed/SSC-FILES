import { Unit } from '../../types';

export const UNIT_4_2_1: Unit = {
  id: "unit-4-2-1",
  title: "Aliphatic Hydrocarbons",
  description: "Alkanes, Alkenes & Alkynes",
  color: "duo-orange",
  lessons: [
    {
      id: "les-4-2-1-1",
      title: "Classification & Alkanes",
      description: "Basics & Isomerism",
      icon: "List",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept Check", content: "General formula for alkanes?", options: [{id: "A", text: "$C_nH_{2n+2}$", isCorrect: true, explanation: "Saturated."}, {id: "B", text: "$C_nH_{2n}$", isCorrect: false, explanation: "Alkene."}] },
        { id: "init-2", type: "quiz", title: "Concept Check", content: "Isomerism in alkanes starts from:", options: [{id: "A", text: "Butane (C4)", isCorrect: true, explanation: "n-butane and isobutane."}, {id: "B", text: "Propane (C3)", isCorrect: false, explanation: "Only one structure."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Alkanes (Paraffins)",
          content: "Saturated open chain hydrocarbons. Inert under normal conditions.\n- **General Formula:** $C_nH_{2n+2}$.\n- **Hybridisation:** $sp^3$. Bond angle $109.5^\\circ$.\n- **Isomerism:** Chain isomerism (e.g., $C_5H_{12}$ has n-pentane, isopentane, neopentane)."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Isomerism",
          content: "Structural isomers of Butane.",
          interactiveCanvasId: "hydrocarbon-alkane-isomers"
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "Alkanes were earlier known as ___ (Latin: little affinity).",
          blankAnswer: "paraffins"
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Boiling Point",
          content: "Among isomers, branching ___ the boiling point.",
          options: [
            { id: "A", text: "Decreases", isCorrect: true, explanation: "Surface area decreases, weak VDW forces." },
            { id: "B", text: "Increases", isCorrect: false, explanation: "Straight chain has higher BP." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Bond angle in sp3?", options: [{id: "A", text: "109.5", isCorrect: true, explanation: "Tetrahedral"}, {id: "B", text: "120", isCorrect: false, explanation: "Trigonal"}]}
      ]
    },
    {
      id: "les-4-2-1-2",
      title: "Preparation of Alkanes",
      description: "Hydrogenation & Wurtz",
      icon: "Beaker",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Wurtz reaction is used for:", options: [{id: "A", text: "Symmetrical alkanes", isCorrect: true, explanation: "Even carbon number."}, {id: "B", text: "Methane", isCorrect: false, explanation: "Starts with 2 carbons."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Methods of Preparation",
          content: "1. **Hydrogenation:** Alkenes/Alkynes + $H_2$ (Pt/Pd/Ni). (Sabatier-Senderens).\n2. **Wurtz Reaction:** $2RX + 2Na \\xrightarrow{\\text{dry ether}} R-R + 2NaX$. Good for even carbons.\n3. **Decarboxylation:** $RCOONa + NaOH/CaO \\xrightarrow{\\Delta} RH + Na_2CO_3$. (Soda-lime).\n4. **Kolbe's Electrolysis:** $2RCOOK \\to R-R + 2CO_2 + H_2 + 2KOH$."
        },
        {
          id: "mech-1",
          type: "theory",
          title: "Reaction Outline",
          content: "Predict product: $CH_3Cl + Na \\xrightarrow{\\text{ether}}$ ?\nProduct: Ethane ($CH_3-CH_3$)."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Specific Reagent",
          content: "Soda-lime is a mixture of:",
          options: [
            { id: "A", text: "NaOH + CaO", isCorrect: true, explanation: "3:1 ratio." },
            { id: "B", text: "NaOH + CaCO3", isCorrect: false, explanation: "No." }
          ]
        },
        {
          id: "pyq-1",
          type: "quiz",
          title: "NEET PYQ",
          content: "Which alkane cannot be prepared by Wurtz reaction?",
          options: [
            { id: "A", text: "Methane", isCorrect: true, explanation: "Minimum 2 carbons needed." },
            { id: "B", text: "Ethane", isCorrect: false, explanation: "Can be prepared." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Catalyst for hydrogenation?", options: [{id: "A", text: "Ni/Pt/Pd", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Fe", isCorrect: false, explanation: "Haber process"}]}
      ]
    },
    {
      id: "les-4-2-1-3",
      title: "Properties of Alkanes",
      description: "Substitution & Combustion",
      icon: "Flame",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Chemical Properties",
          content: "1. **Halogenation:** Free radical mechanism (Initiation, Propagation, Termination). Reactivity: $F_2 > Cl_2 > Br_2 > I_2$. H-abstraction: $3^\\circ > 2^\\circ > 1^\\circ$.\n2. **Combustion:** Complete $\\to CO_2 + H_2O$. Incomplete $\\to C$ (Black).\n3. **Aromatization:** n-Hexane $\\xrightarrow{Cr_2O_3/Al_2O_3} Benzene$."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Combustion",
          content: "Visual of bond breaking and energy release.",
          interactiveCanvasId: "hydrocarbon-combustion"
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Mechanism Check",
          content: "Chlorination of methane proceeds via:",
          options: [
            { id: "A", text: "Free Radical Substitution", isCorrect: true, explanation: "UV light generates Cl radicals." },
            { id: "B", text: "Electrophilic Substitution", isCorrect: false, explanation: "Characteristic of aromatics." }
          ]
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Selectivity",
          content: "Bromination is ___ selective than Chlorination.",
          options: [
            { id: "A", text: "More", isCorrect: true, explanation: "Br radical is less reactive, thus more selective for stable 3° H." },
            { id: "B", text: "Less", isCorrect: false, explanation: "Cl is highly reactive, less selective." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Wurtz reaction reagent?", options: [{id: "A", text: "Na/Dry Ether", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Zn/HCl", isCorrect: false, explanation: "Reduction"}]}
      ]
    },
    {
      id: "les-4-2-1-4",
      title: "Conformations",
      description: "Ethane Rotamers",
      icon: "RotateCw",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Rotation about C-C single bond is:", options: [{id: "A", text: "Free (almost)", isCorrect: true, explanation: "Except steric/torsional strain."}, {id: "B", text: "Restricted", isCorrect: false, explanation: "Double bonds."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Conformations of Ethane",
          content: "Infinite spatial arrangements by rotation around C-C bond.\n1. **Eclipsed:** H atoms on back carbon hidden by front. Maximum repulsion (**Torsional Strain**). Least stable.\n2. **Staggered:** H atoms far apart ($60^\\circ$ dihedral angle). Minimum repulsion. Most stable.\n3. **Skew:** Intermediate."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Newman Projections",
          content: "Visualizing Staggered vs Eclipsed forms.",
          interactiveCanvasId: "hydrocarbon-conformations"
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "The repulsive interaction between the electron clouds, which affects stability of a conformation, is called ___ strain.",
          blankAnswer: "torsional"
        },
        {
          id: "ar-1",
          type: "quiz",
          title: "Assertion-Reason",
          content: "**Assertion:** Staggered conformation is more stable than eclipsed.\n**Reason:** Torsional strain is minimum in staggered form.",
          options: [
            { id: "A", text: "Both True, R explains A", isCorrect: true, explanation: "Correct." },
            { id: "B", text: "Both False", isCorrect: false, explanation: "Incorrect." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Shape of methane?", options: [{id: "A", text: "Tetrahedral", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Planar", isCorrect: false, explanation: "No"}]}
      ]
    },
    {
      id: "les-4-2-1-5",
      title: "Alkenes & Isomerism",
      description: "Structure & Cis-Trans",
      icon: "GitBranch",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Alkenes contain:", options: [{id: "A", text: "C=C Double Bond", isCorrect: true, explanation: "Unsaturated."}, {id: "B", text: "C-C Single Bond only", isCorrect: false, explanation: "Alkanes."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Alkenes",
          content: "Unsaturated hydrocarbons with $C=C$. General Formula $C_nH_{2n}$.\n**Isomerism:**\n1. **Structural:** Chain, Position.\n2. **Geometrical:** Due to restricted rotation. \n   - **Cis:** Identical groups on same side.\n   - **Trans:** Identical groups on opposite sides (More stable, zero dipole if symm)."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Cis vs Trans",
          content: "Visualizing But-2-ene isomers.",
          interactiveCanvasId: "hydrocarbon-isomerism"
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Dipole Moment",
          content: "Which has higher dipole moment: Cis-but-2-ene or Trans-but-2-ene?",
          options: [
            { id: "A", text: "Cis", isCorrect: true, explanation: "Dipoles add up. In Trans they cancel." },
            { id: "B", text: "Trans", isCorrect: false, explanation: "Zero for symmetric trans." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Torsional strain is max in?", options: [{id: "A", text: "Eclipsed", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Staggered", isCorrect: false, explanation: "Minimum"}]}
      ]
    },
    {
      id: "les-4-2-1-6",
      title: "Preparation of Alkenes",
      description: "Elimination Reactions",
      icon: "Filter",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Methods",
          content: "1. **Dehydration of Alcohols:** Conc. $H_2SO_4, 443K$. Mechanism involves carbocation.\n2. **Dehydrohalogenation:** Alkyl halide + Alc. KOH ($\\beta$-elimination).\n   - **Saytzeff Rule:** Preferred product is the more substituted alkene (more stable).\n3. **Partial Hydrogenation:** Alkynes + Lindlar's Catalyst $\\to$ Cis-alkene. Na/liq $NH_3$ $\\to$ Trans-alkene."
        },
        {
          id: "mech-1",
          type: "theory",
          title: "Saytzeff Rule",
          content: "Reaction: 2-Bromobutane + Alc. KOH $\\to$ ?\nMajor: But-2-ene (80%). Minor: But-1-ene (20%)."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Reagent Check",
          content: "Reagent for Dehydrohalogenation?",
          options: [
            { id: "A", text: "Alcoholic KOH", isCorrect: true, explanation: "Elimination." },
            { id: "B", text: "Aqueous KOH", isCorrect: false, explanation: "Substitution (forms alcohol)." }
          ]
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Stereo-Selectivity",
          content: "Birch reduction (Na/liq NH3) of 2-butyne gives:",
          options: [
            { id: "A", text: "Trans-but-2-ene", isCorrect: true, explanation: "Anti-addition." },
            { id: "B", text: "Cis-but-2-ene", isCorrect: false, explanation: "Lindlar's catalyst." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "General formula of Alkanes?", options: [{id: "A", text: "CnH2n+2", isCorrect: true, explanation: "Correct"}, {id: "B", text: "CnH2n", isCorrect: false, explanation: "Alkenes"}]}
      ]
    },
    {
      id: "les-4-2-1-7",
      title: "Reactions of Alkenes",
      description: "Addition Mechanism",
      icon: "PlusCircle",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Electrophilic Addition",
          content: "Alkenes are rich in $\\pi$ electrons $\\to$ Attacked by Electrophiles.\n1. **Markovnikov's Rule:** Negative part of addendum adds to C with lesser H (via more stable carbocation).\n2. **Peroxide Effect (Anti-Markovnikov):** Only with HBr + Peroxide. Adds to C with more H (Free radical mechanism)."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Markovnikov Addition",
          content: "Propene + H+. Formation of 2° Carbocation.",
          interactiveCanvasId: "hydrocarbon-mechanism-markovnikov"
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Predict Product",
          content: "Propene + HBr $\\to$ ?",
          options: [
            { id: "A", text: "2-Bromopropane", isCorrect: true, explanation: "Markovnikov." },
            { id: "B", text: "1-Bromopropane", isCorrect: false, explanation: "Only with peroxide." }
          ]
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Ozonolysis",
          content: "Reaction to locate double bond. Ozonolysis of But-2-ene gives:",
          options: [
            { id: "A", text: "2 moles Ethanal", isCorrect: true, explanation: "CH3-CH=CH-CH3 -> 2 CH3CHO." },
            { id: "B", text: "Propanal + Methanal", isCorrect: false, explanation: "From But-1-ene." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Most stable carbocation?", options: [{id: "A", text: "Tertiary", isCorrect: true, explanation: "3 > 2 > 1"}, {id: "B", text: "Primary", isCorrect: false, explanation: "Least"}]}
      ]
    },
    {
      id: "les-4-2-1-8",
      title: "Alkynes",
      description: "Structure & Preparation",
      icon: "Menu",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Alkynes contain:", options: [{id: "A", text: "Triple Bond (1 sig, 2 pi)", isCorrect: true, explanation: "Correct."}, {id: "B", text: "Double Bond", isCorrect: false, explanation: "Alkene."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Alkynes",
          content: "Unsaturated ($C \\equiv C$). General Formula $C_nH_{2n-2}$.\n- **Hybridisation:** $sp$ ($180^\\circ$, Linear).\n- **Acidic Nature:** Terminal H is acidic (50% s-character of sp carbon pulls e-). Reacts with Na or Sodamide."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Preparation",
          content: "Calcium Carbide ($CaC_2$) + Water gives:",
          options: [
            { id: "A", text: "Ethyne (Acetylene)", isCorrect: true, explanation: "Industrial method." },
            { id: "B", text: "Ethene", isCorrect: false, explanation: "No." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Markovnikov rule applies to?", options: [{id: "A", text: "Unsymmetric alkenes", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Symmetric alkenes", isCorrect: false, explanation: "No diff"}]}
      ]
    },
    {
      id: "les-4-2-1-9",
      title: "Reactions of Alkynes",
      description: "Addition & Polymerisation",
      icon: "Zap",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Reactions",
          content: "1. **Addition:** Adds 2 moles of reagent ($H_2, X_2, HX$).\n2. **Hydration:** $Hg^{2+}/H^+$ $\\to$ Enol $\\to$ Ketone (Tautomerism). Ethyne gives Ethanal.\n3. **Cyclic Polymerisation:** Ethyne $\\xrightarrow{\\text{Red hot Fe tube}}$ Benzene."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Hydration Product",
          content: "Propyne + $H_2O (Hg^{2+}, H^+)$ $\\to$ ?",
          options: [
            { id: "A", text: "Acetone (Propanone)", isCorrect: true, explanation: "Markovnikov addition of OH -> Enol -> Ketone." },
            { id: "B", text: "Propanal", isCorrect: false, explanation: "Only from anti-markovnikov or specific conditions." }
          ]
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Acidity Test",
          content: "Which reacts with Tollen's reagent ($AgNO_3/NH_4OH$)?",
          options: [
            { id: "A", text: "But-1-yne", isCorrect: true, explanation: "Terminal alkyne (Acidic H)." },
            { id: "B", text: "But-2-yne", isCorrect: false, explanation: "Internal alkyne (No acidic H)." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Bond angle in sp?", options: [{id: "A", text: "180", isCorrect: true, explanation: "Linear"}, {id: "B", text: "120", isCorrect: false, explanation: "sp2"}]}
      ]
    },
    {
      id: "les-4-2-1-10",
      title: "Comparison",
      description: "Bond Lengths & Reactivity",
      icon: "GitCompare",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Comparison",
          content: "**Bond Length:** $C-C (154 pm) > C=C (134 pm) > C \\equiv C (120 pm)$.\n**Acidity:** Alkyne > Alkene > Alkane ($sp > sp^2 > sp^3$).\n**Reactivity (Electrophilic):** Alkenes > Alkynes (Alkynes less reactive to electrophiles due to tight pi cloud, though more unsat)."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Ranking",
          content: "Which is most acidic?",
          options: [
            { id: "A", text: "Ethyne", isCorrect: true, explanation: "sp carbon, 50% s-character." },
            { id: "B", text: "Ethane", isCorrect: false, explanation: "sp3, least acidic." }
          ]
        }
      ]
    }
  ]
};