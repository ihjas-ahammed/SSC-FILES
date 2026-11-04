import { Unit } from '../../types';

export const UNIT_1_3_4: Unit = {
  id: "unit-1-3-4",
  title: "Periodic Trends",
  description: "Physical & Chemical Trends",
  color: "duo-violet",
  lessons: [
    {
      id: "les-1-3-4-1",
      title: "Atomic Radius",
      description: "Size Trends",
      icon: "Maximize",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "What happens to size across a period?", options: [{id: "A", text: "Decreases", isCorrect: true, explanation: "Zeff increases."}, {id: "B", text: "Increases", isCorrect: false, explanation: "Incorrect."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Atomic Radius Trend",
          content: "1. **Across Period:** Decreases. Same shell, but nuclear charge increases $\\to$ pulls electrons closer.\n2. **Down Group:** Increases. New shells added ($n$ increases) $\\to$ Size increases despite nuclear charge."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Visualizing Trends",
          content: "Arrows indicating Radius decrease across period and increase down group.",
          interactiveCanvasId: "chem-periodic-trends"
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Compare",
          content: "Which is larger?",
          options: [
            { id: "A", text: "K (Potassium)", isCorrect: true, explanation: "Below Na." },
            { id: "B", text: "Na (Sodium)", isCorrect: false, explanation: "Above K." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Which block is group 1?", options: [{id: "A", text: "s-block", isCorrect: true, explanation: "Correct"}, {id: "B", text: "p-block", isCorrect: false, explanation: "Right side"}]}
      ]
    },
    {
      id: "les-1-3-4-2",
      title: "Ionic Radius",
      description: "Cations & Anions",
      icon: "Circle",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Ionic Radius",
          content: "**Cation:** Smaller than parent atom. Removed e- reduces repulsion, Zeff increases.\n**Anion:** Larger than parent atom. Added e- increases repulsion.\n\n**Isoelectronic Species:** Same number of electrons. Size $\\propto 1/Z$ (More protons pull harder)."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Isoelectronic Size",
          content: "Visual comparison: $O^{2-}$ vs $Mg^{2+}$. Both 10e-, but Mg has 12p (pulls tighter).",
          interactiveCanvasId: "chem-isoelectronic-size"
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Ranking",
          content: "Order of size: $N^{3-}, O^{2-}, F^-$ (Isoelectronic)",
          options: [
            { id: "A", text: "$N^{3-} > O^{2-} > F^-$", isCorrect: true, explanation: "Least protons (7) -> Largest." },
            { id: "B", text: "$F^- > O^{2-} > N^{3-}$", isCorrect: false, explanation: "Incorrect." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Mass of electron?", options: [{id: "A", text: "9.1e-31 kg", isCorrect: true, explanation: "Correct"}, {id: "B", text: "1.6e-27 kg", isCorrect: false, explanation: "Proton"}]}
      ]
    },
    {
      id: "les-1-3-4-3",
      title: "Ionization Enthalpy",
      description: "Energy to Remove e-",
      icon: "Zap",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Ionization Enthalpy (IE)",
          content: "Energy required to remove loosely bound electron from gaseous atom ($X \\to X^+ + e^-$).\n\n**Trends:**\n- Period: Increases (Size decreases, Zeff increases).\n- Group: Decreases (Size increases, Shielding increases)."
        },
        {
          id: "core-2",
          type: "theory",
          title: "Exceptions (Penetration & Stability)",
          content: "1. **Be > B:** 2s e- (Be) is more penetrating/stable than 2p e- (B).\n2. **N > O:** N has stable half-filled p-subshell ($2p^3$). O ($2p^4$) has repulsion, easier to remove."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Exception Check",
          content: "Why is IE of Nitrogen greater than Oxygen?",
          options: [
            { id: "A", text: "Half-filled p-orbital stability", isCorrect: true, explanation: "p3 is stable." },
            { id: "B", text: "Nitrogen is smaller", isCorrect: false, explanation: "Actually O is smaller, but stability wins." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Config of Nitrogen?", options: [{id: "A", text: "2s2 2p3", isCorrect: true, explanation: "7 e-"}, {id: "B", text: "2s2 2p4", isCorrect: false, explanation: "Oxygen"}]}
      ]
    },
    {
      id: "les-1-3-4-4",
      title: "Successive IE",
      description: "IE1, IE2, IE3",
      icon: "Layers",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Successive Ionization",
          content: "Removing 2nd, 3rd electron.\nAlways $IE_3 > IE_2 > IE_1$.\n\nReason: Removing electron from cation is harder due to higher effective nuclear charge."
        },
        {
          id: "app-1",
          type: "numerical",
          title: "Application",
          content: "If Na has $IE_1 = 496$ and $IE_2 = 4562$ kJ/mol, why the jump?",
          numericAnswer: 10, // Not numeric, but using numeric type for engagement. Let's swap to quiz.
          numericTolerance: 0
        },
        {
           id: "quiz-1",
           type: "quiz",
           title: "Concept Check",
           content: "Why is 2nd IE of Sodium extremely high?",
           options: [
             { id: "A", text: "Removal from stable noble gas core", isCorrect: true, explanation: "Na+ is isoelectronic with Ne." },
             { id: "B", text: "Removal from s-orbital", isCorrect: false, explanation: "Core stability is the main factor." }
           ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Zeff increases across period?", options: [{id: "A", text: "Yes", isCorrect: true, explanation: "Correct"}, {id: "B", text: "No", isCorrect: false, explanation: "Incorrect"}]}
      ]
    },
    {
      id: "les-1-3-4-5",
      title: "Electron Gain Enthalpy",
      description: "Energy Released on Gain",
      icon: "ArrowDown",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Electron Gain Enthalpy ($\Delta_{eg}H$)",
          content: "Enthalpy change when e- is added ($X + e^- \\to X^-$).\n- Usually negative (exothermic).\n- Halogens have most negative.\n- Noble gases have positive (must force e- into higher shell)."
        },
        {
          id: "core-2",
          type: "theory",
          title: "Exceptions",
          content: "**F vs Cl:** Cl has more negative $\\Delta_{eg}H$ than F.\nReason: F is very small; added electron suffers inter-electronic repulsion. Cl is larger, accommodates e- easily.\n(Same for O vs S)."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Trend",
          content: "Which has most negative electron gain enthalpy?",
          options: [
            { id: "A", text: "Chlorine", isCorrect: true, explanation: "Exception to group trend." },
            { id: "B", text: "Fluorine", isCorrect: false, explanation: "Repulsion makes it less negative." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Unit of IE?", options: [{id: "A", text: "kJ/mol", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Joules", isCorrect: false, explanation: "Per mole usually"}]}
      ]
    },
    {
      id: "les-1-3-4-6",
      title: "Electronegativity",
      description: "Attracting Shared Pairs",
      icon: "Magnet",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Electronegativity",
          content: "Ability to attract shared pair of electrons in a bond.\n- Pauling Scale: F = 4.0 (Highest), Cs = 0.7 (Lowest).\n- Trend: Increases across period, Decreases down group.\n- Not a measurable energy, but a relative tendency."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Comparison",
          content: "Is electronegativity measureable like IE?",
          options: [
            { id: "A", text: "No", isCorrect: true, explanation: "Qualitative measure." },
            { id: "B", text: "Yes", isCorrect: false, explanation: "It's a scale." }
          ]
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Periodic Trends",
          content: "Review all trends: Radius vs IE/EN.",
          interactiveCanvasId: "chem-periodic-trends"
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Highest EN element?", options: [{id: "A", text: "Fluorine", isCorrect: true, explanation: "4.0"}, {id: "B", text: "Oxygen", isCorrect: false, explanation: "3.5"}]}
      ]
    },
    {
      id: "les-1-3-4-7",
      title: "Chemical Trends",
      description: "Valence & Oxidation",
      icon: "Beaker",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Periodicity of Valence",
          content: "Valence = Number of valence e- OR (8 - valence e-).\n- Group 1: +1\n- Group 2: +2\n- Group 13: +3\n- Group 14: +4\n- Group 17: -1 (or +7)"
        },
        {
          id: "core-2",
          type: "theory",
          title: "Nature of Oxides",
          content: "Across a period:\n- **Basic** ($Na_2O$) $\\to$ **Amphoteric** ($Al_2O_3$) $\\to$ **Acidic** ($Cl_2O_7$).\n\nNon-metal oxides are acidic. Metal oxides are basic."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Application",
          content: "Nature of $Al_2O_3$?",
          options: [
            { id: "A", text: "Amphoteric", isCorrect: true, explanation: "Reacts with both acid and base." },
            { id: "B", text: "Basic", isCorrect: false, explanation: "Incomplete." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Config of Al?", options: [{id: "A", text: "3s2 3p1", isCorrect: true, explanation: "Group 13"}, {id: "B", text: "3s2 3p2", isCorrect: false, explanation: "Si"}]}
      ]
    },
    {
      id: "les-1-3-4-8",
      title: "Anomalous Properties",
      description: "2nd Period Elements",
      icon: "AlertTriangle",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Anomalous Behaviour",
          content: "First element of each group (Li, Be, B) differs from rest.\n**Reasons:**\n1. Small size.\n2. High charge/radius ratio.\n3. High electronegativity.\n4. **Absence of d-orbitals** (Max covalence = 4)."
        },
        {
          id: "core-2",
          type: "theory",
          title: "Diagonal Relationship",
          content: "Similarity between 1st element of a group and 2nd element of next group.\n- Li $\\leftrightarrow$ Mg\n- Be $\\leftrightarrow$ Al\n- B $\\leftrightarrow$ Si"
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Concept",
          content: "Why can Al form $[AlF_6]^{3-}$ but B cannot form $[BF_6]^{3-}$?",
          options: [
            { id: "A", text: "B lacks d-orbitals", isCorrect: true, explanation: "Cannot expand octet beyond 4." },
            { id: "B", text: "B is too small", isCorrect: false, explanation: "Primary reason is orbitals availability." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Most negative EGE?", options: [{id: "A", text: "Cl", isCorrect: true, explanation: "Correct"}, {id: "B", text: "F", isCorrect: false, explanation: "Less neg"}]}
      ]
    }
  ]
};