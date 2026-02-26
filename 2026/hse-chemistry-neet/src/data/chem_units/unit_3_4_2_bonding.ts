import { Unit } from '../../types';

export const UNIT_3_4_2: Unit = {
  id: "unit-3-4-2",
  title: "Bonding & Isomerism",
  description: "VBT, CFT, and Structures",
  color: "duo-violet",
  lessons: [
    {
      id: "les-3-4-2-1",
      title: "Structural Isomerism",
      description: "Linkage, Coordination, Ionisation, Solvate",
      icon: "GitBranch",
      slides: [
        {
          id: "anc-1",
          type: "theory",
          title: "Structural Isomers",
          content: "1. **Linkage:** Ambidentate ligand binds differently ($NO_2$ vs $ONO$).\n2. **Coordination:** Interchange of ligands between cationic and anionic entities ($[Co(NH_3)_6][Cr(CN)_6]$ vs $[Cr(NH_3)_6][Co(CN)_6]$).\n3. **Ionisation:** Counter ion displaces ligand ($[Co(NH_3)_5SO_4]Br$ vs $[Co(NH_3)_5Br]SO_4$).\n4. **Solvate:** Water as ligand vs water of crystallization."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Isomers",
          content: "Visualizing Linkage and Ionisation isomers.",
          interactiveCanvasId: "chem-molecule-viewer" // Placeholder
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Identify",
          content: "Which type is shown by $[Cr(H_2O)_6]Cl_3$ and $[Cr(H_2O)_5Cl]Cl_2 \cdot H_2O$?",
          options: [
            { id: "A", text: "Solvate (Hydrate)", isCorrect: true, explanation: "Water position changes." },
            { id: "B", text: "Ionisation", isCorrect: false, explanation: "Specific term is Solvate." }
          ]
        },
        {
          id: "pyq-1",
          type: "quiz",
          title: "NEET PYQ",
          content: "Type of isomerism in $[Co(NH_3)_5NO_2]Cl_2$ and $[Co(NH_3)_5ONO]Cl_2$?",
          options: [
            { id: "A", text: "Linkage", isCorrect: true, explanation: "Ambidentate NO2." },
            { id: "B", text: "Geometrical", isCorrect: false, explanation: "Incorrect." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Werner's primary valency is?", options: [{id: "A", text: "Ionisable", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Non-ionisable", isCorrect: false, explanation: "Secondary"}]}
      ]
    },
    {
      id: "les-3-4-2-2",
      title: "Stereoisomerism",
      description: "Geometrical & Optical",
      icon: "Box",
      slides: [
        {
          id: "anc-1",
          type: "theory",
          title: "Geometrical Isomerism",
          content: "Different spatial arrangement of ligands.\n- **Square Planar ($MA_2B_2$):** Cis (adjacent) and Trans (opposite).\n- **Octahedral ($MA_4B_2$):** Cis/Trans.\n- **Octahedral ($MA_3B_3$):** Facial (Fac) and Meridional (Mer)."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Cis vs Trans",
          content: "Interactive view of Cis/Trans isomers.",
          interactiveCanvasId: "coordination-isomers"
        },
        {
          id: "anc-2",
          type: "theory",
          title: "Optical Isomerism",
          content: "Non-superimposable mirror images (Enantiomers).\n- Common in octahedral complexes with didentate ligands (e.g., $[Co(en)_3]^{3+}$).\n- Cis isomers of $MA_2(LL)_2$ are optically active. Trans are inactive (plane of symmetry)."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Check",
          content: "Does tetrahedral $MA_2B_2$ show geometrical isomerism?",
          options: [
            { id: "A", text: "No", isCorrect: true, explanation: "All positions equidistant." },
            { id: "B", text: "Yes", isCorrect: false, explanation: "Only Square planar." }
          ]
        },
        {
          id: "pyq-1",
          type: "quiz",
          title: "NEET PYQ",
          content: "Which exhibits optical isomerism?",
          options: [
            { id: "A", text: "cis-$[Co(en)_2Cl_2]^+$", isCorrect: true, explanation: "Chiral." },
            { id: "B", text: "trans-$[Co(en)_2Cl_2]^+$", isCorrect: false, explanation: "Has symmetry plane." }
          ]
        }
      ]
    },
    {
      id: "les-3-4-2-3",
      title: "Valence Bond Theory",
      description: "Hybridisation & Magnetism",
      icon: "Magnet",
      slides: [
        {
          id: "anc-1",
          type: "theory",
          title: "VBT Assumptions",
          content: "Metal ion provides empty orbitals for hybridisation.\n- **CN=4:** $sp^3$ (Tetrahedral) or $dsp^2$ (Square Planar).\n- **CN=6:** $d^2sp^3$ (Inner Orbital) or $sp^3d^2$ (Outer Orbital).\n\nLigand nature determines pairing: Strong field pairs e-, Weak field does not."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Hybridisation",
          content: "Visual of orbital mixing.",
          interactiveCanvasId: "chem-hybridisation" // Placeholder
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Inner vs Outer",
          content: "$[Co(NH_3)_6]^{3+}$ is diamagnetic. Hybridisation?",
          options: [
            { id: "A", text: "$d^2sp^3$ (Inner)", isCorrect: true, explanation: "NH3 is strong, pairs electrons." },
            { id: "B", text: "$sp^3d^2$ (Outer)", isCorrect: false, explanation: "Paramagnetic." }
          ]
        },
        {
          id: "app-1",
          type: "numerical",
          title: "Magnetic Moment",
          content: "Calculate $\\mu$ for $[MnCl_4]^{2-}$ (Weak field, Td). Mn2+ is $d^5$. Unpaired = 5.",
          numericAnswer: 5.9,
          numericTolerance: 0.1
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Fac-Mer isomerism occurs in?", options: [{id: "A", text: "MA3B3", isCorrect: true, explanation: "Correct"}, {id: "B", text: "MA4B2", isCorrect: false, explanation: "Cis-Trans"}]}
      ]
    },
    {
      id: "les-3-4-2-4",
      title: "VBT Examples",
      description: "CN 4 and 6 Cases",
      icon: "List",
      slides: [
        {
          id: "anc-1",
          type: "theory",
          title: "CN=4 Examples",
          content: "- **$[NiCl_4]^{2-}$:** $Cl^-$ weak. $3d^8$, no pairing. $sp^3$ (Tetrahedral). Paramagnetic.\n- **$[Ni(CN)_4]^{2-}$:** $CN^-$ strong. $3d^8$, pairing occurs. $dsp^2$ (Square Planar). Diamagnetic."
        },
        {
          id: "anc-2",
          type: "theory",
          title: "CN=6 Examples",
          content: "- **$[Fe(CN)_6]^{3-}$:** $Fe^{3+} (d^5)$. Strong. 1 unpaired. $d^2sp^3$ (Inner).\n- **$[FeF_6]^{3-}$:** $Fe^{3+} (d^5)$. Weak. 5 unpaired. $sp^3d^2$ (Outer)."
        },
        {
          id: "trap-1",
          type: "quiz",
          title: "Spot the Error",
          content: "Is $[Ni(CO)_4]$ Square Planar?",
          options: [
            { id: "A", text: "No, Tetrahedral ($sp^3$)", isCorrect: true, explanation: "Ni(0) $d^{10}$ system effectively. 4s e- shift to 3d." },
            { id: "B", text: "Yes", isCorrect: false, explanation: "Common mistake." }
          ]
        }
      ]
    },
    {
      id: "les-3-4-2-5",
      title: "Crystal Field Theory (Oct)",
      description: "Octahedral Splitting",
      icon: "Layers",
      slides: [
        {
          id: "anc-1",
          type: "theory",
          title: "Splitting",
          content: "Ligands approach axes $\\to$ axial orbitals ($d_{x^2-y^2}, d_{z^2}$) repelled more.\nResult: Splitting into **$t_{2g}$ (lower energy)** and **$e_g$ (higher energy)**.\n\nEnergy Gap = $\\Delta_o$."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Octahedral Splitting",
          content: "Visual of d-orbitals splitting into t2g and eg.",
          interactiveCanvasId: "coordination-cft-oct"
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "The crystal field splitting $\\Delta_o$ depends on the ___ of the ligand.",
          blankAnswer: "strength"
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Electronic Config",
          content: "For $d^4$ with Strong Field ($\Delta_o > P$):",
          options: [
            { id: "A", text: "$t_{2g}^4 e_g^0$", isCorrect: true, explanation: "Pairing occurs in lower level." },
            { id: "B", text: "$t_{2g}^3 e_g^1$", isCorrect: false, explanation: "This is for weak field." }
          ]
        }
      ]
    },
    {
      id: "les-3-4-2-6",
      title: "CFT (Tet) & Colour",
      description: "Tetrahedral & Spectrum",
      icon: "Palette",
      slides: [
        {
          id: "anc-1",
          type: "theory",
          title: "Tetrahedral Splitting",
          content: "Ligands approach between axes. Splitting inverted: **$e$ (lower)** and **$t_2$ (higher)**.\n\n$\\Delta_t = \\frac{4}{9} \\Delta_o$.\nUsually $\\Delta_t < P$, so always High Spin."
        },
        {
          id: "anc-2",
          type: "theory",
          title: "Colour",
          content: "Due to **d-d transition**. Electron absorbs light to jump from lower d to higher d orbital. Observed colour is complementary.\nExample: $[Ti(H_2O)_6]^{3+}$ absorbs green/yellow, appears violet.\n\n**Spectrochemical Series:** $I^- < F^- < H_2O < NH_3 < CN^- < CO$."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Series Check",
          content: "Which is a stronger ligand?",
          options: [
            { id: "A", text: "$CN^-$", isCorrect: true, explanation: "Strong field." },
            { id: "B", text: "$Cl^-$", isCorrect: false, explanation: "Weak field." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Is $Zn^{2+}$ coloured?", options: [{id: "A", text: "No", isCorrect: true, explanation: "d10, no transition"}, {id: "B", text: "Yes", isCorrect: false, explanation: "Incorrect"}]}
      ]
    },
    {
      id: "les-3-4-2-7",
      title: "Bonding in Carbonyls",
      description: "Synergic Effect",
      icon: "RefreshCw",
      slides: [
        {
          id: "anc-1",
          type: "theory",
          title: "Synergic Bonding",
          content: "Metal Carbonyls involve both $\\sigma$ and $\\pi$ character.\n1. **$\\sigma$ bond:** C lone pair $\\to$ Metal empty orbital.\n2. **$\\pi$ bond:** Metal filled d-orbital $\\to$ CO $\\pi^*$ antibonding orbital (Back bonding).\n\nResult: Strengthens M-C bond, weakens C-O bond."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Synergic Bonding",
          content: "Visual of sigma donation and pi back-donation.",
          interactiveCanvasId: "coordination-carbonyl"
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Bond Length",
          content: "Due to synergic bonding, the C-O bond length in metal carbonyls:",
          options: [
            { id: "A", text: "Increases", isCorrect: true, explanation: "Bond order decreases due to filling antibonding orbital." },
            { id: "B", text: "Decreases", isCorrect: false, explanation: "Incorrect." }
          ]
        }
      ]
    },
    {
      id: "les-3-4-2-8",
      title: "Stability of Complexes",
      description: "Formation Constant K",
      icon: "TrendingUp",
      slides: [
        {
          id: "anc-1",
          type: "theory",
          title: "Stability Constant (K)",
          content: "For $M + 4L \\rightleftharpoons ML_4$: $K = \\frac{[ML_4]}{[M][L]^4}$.\nHigher K $\\to$ Higher stability.\n\nFactors:\n1. Nature of Metal (Charge, Size).\n2. Nature of Ligand (Basicity, Chelation).\n**Chelate Effect:** Chelated complexes are significantly more stable."
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Overall K",
          content: "If stepwise constants are $\\log K_1=4, \\log K_2=3$. Overall $\\log \\beta$ is?",
          numericAnswer: 7,
          numericTolerance: 0
        },
        {
          id: "sol-1",
          type: "solution",
          title: "Logic",
          content: "$\\beta = K_1 \\times K_2$. $\\log \\beta = \\log K_1 + \\log K_2$.",
          interactiveSteps: []
        }
      ]
    }
  ]
};