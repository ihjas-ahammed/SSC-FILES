import { Unit } from '../../types';

export const UNIT_4_2_2: Unit = {
  id: "unit-4-2-2",
  title: "Aromatic Hydrocarbons",
  description: "Benzene & Electrophilic Substitution",
  color: "duo-orange",
  lessons: [
    {
      id: "les-4-2-2-1",
      title: "Aromaticity",
      description: "Huckel's Rule",
      icon: "Hexagon",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Are all cyclic compounds aromatic?", options: [{id: "A", text: "No", isCorrect: true, explanation: "Must follow Huckel's rule."}, {id: "B", text: "Yes", isCorrect: false, explanation: "Cyclohexane is not."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Conditions for Aromaticity",
          content: "1. **Cyclic** structure.\n2. **Planar** (sp2 hybridized atoms).\n3. **Complete delocalization** of $\\pi$ electrons.\n4. **Huckel's Rule:** Contains $(4n + 2) \\pi$ electrons ($n = 0, 1, 2...$).\n\nExamples: Benzene (6 $\\pi$, n=1), Naphthalene (10 $\\pi$, n=2)."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Benzene Delocalization",
          content: "Visualizing the pi-cloud ring.",
          interactiveCanvasId: "hydrocarbon-benzene-structure"
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "Cyclooctatetraene has 8 pi electrons. It is ___ aromatic.",
          blankAnswer: "not"
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Rule Check",
          content: "Cyclopentadienyl anion ($C_5H_5^-$) has 6 pi electrons. Is it aromatic?",
          options: [
            { id: "A", text: "Yes", isCorrect: true, explanation: "4(1)+2 = 6. Planar." },
            { id: "B", text: "No", isCorrect: false, explanation: "Incorrect." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Ethyne geometry?", options: [{id: "A", text: "Linear", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Bent", isCorrect: false, explanation: "No"}]}
      ]
    },
    {
      id: "les-4-2-2-2",
      title: "Benzene Structure",
      description: "Resonance & Stability",
      icon: "Shield",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Structure of Benzene",
          content: "Proposed by Kekule. Resonance hybrid of two structures.\n- All C-C bond lengths are equal (139 pm). Intermediate between single (154 pm) and double (134 pm).\n- High stability due to **Resonance Energy**."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Fact",
          content: "Benzene prefers which type of reaction?",
          options: [
            { id: "A", text: "Substitution", isCorrect: true, explanation: "Retains aromaticity." },
            { id: "B", text: "Addition", isCorrect: false, explanation: "Destroys aromaticity (Requires tough conditions)." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Huckel Rule formula?", options: [{id: "A", text: "4n + 2", isCorrect: true, explanation: "Correct"}, {id: "B", text: "4n", isCorrect: false, explanation: "Anti-aromatic"}]}
      ]
    },
    {
      id: "les-4-2-2-3",
      title: "Preparation of Benzene",
      description: "From Ethyne, Phenol, Acids",
      icon: "Beaker",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Methods",
          content: "1. **Cyclic Polymerisation:** Ethyne $\\xrightarrow{\\text{Red hot Fe}}$ Benzene.\n2. **Decarboxylation:** Sodium Benzoate + Soda-lime $\\xrightarrow{\\Delta}$ Benzene.\n3. **Reduction of Phenol:** Phenol + Zn dust $\\to$ Benzene + ZnO."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Reagent",
          content: "Reagent to convert Phenol to Benzene?",
          options: [
            { id: "A", text: "Zinc Dust", isCorrect: true, explanation: "Reduction." },
            { id: "B", text: "Soda-lime", isCorrect: false, explanation: "For acids." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Propyne hydration product?", options: [{id: "A", text: "Acetone", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Propanal", isCorrect: false, explanation: "Incorrect"}]}
      ]
    },
    {
      id: "les-4-2-2-4",
      title: "EAS Mechanism",
      description: "Electrophilic Aromatic Subst.",
      icon: "Settings",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Mechanism (S_E)",
          content: "1. **Generation of Electrophile ($E^+$):** e.g., $Cl_2 + AlCl_3 \\to Cl^+ + AlCl_4^-$.\n2. **Formation of Carbocation (Arenium Ion):** $E^+$ attacks ring. Hybrid of 3 resonance structures (Sigma complex).\n3. **Removal of Proton:** Base removes $H^+$ to restore aromaticity."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "EAS Mechanism",
          content: "Step-by-step: Attack, Sigma Complex, Deprotonation.",
          interactiveCanvasId: "hydrocarbon-mechanism-eas"
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "The sigma complex or arenium ion loses its ___ character because delocalization stops at sp3 carbon.",
          blankAnswer: "aromatic"
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Is Benzene planar?", options: [{id: "A", text: "Yes", isCorrect: true, explanation: "sp2 carbons"}, {id: "B", text: "No", isCorrect: false, explanation: "No"}]}
      ]
    },
    {
      id: "les-4-2-2-5",
      title: "Reactions of Benzene",
      description: "Nitration, Sulphonation, F-C",
      icon: "Zap",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Reactions",
          content: "1. **Nitration:** Conc. $HNO_3 + H_2SO_4$. Electrophile $NO_2^+$.\n2. **Halogenation:** $X_2 + FeX_3$. Electrophile $X^+$.\n3. **Sulphonation:** Fuming $H_2SO_4$. Electrophile $SO_3$.\n4. **Friedel-Crafts Alkylation:** $RCl + AlCl_3 \\to R^+$.\n5. **Friedel-Crafts Acylation:** $RCOCl + AlCl_3 \\to RCO^+$."
        },
        {
          id: "trap-1",
          type: "quiz",
          title: "Spot the Error",
          content: "Electrophile in Sulphonation is:",
          options: [
            { id: "A", text: "$SO_3$", isCorrect: true, explanation: "Neutral electrophile." },
            { id: "B", text: "$SO_3H^+$", isCorrect: false, explanation: "Incorrect." }
          ]
        },
        {
          id: "pyq-1",
          type: "quiz",
          title: "NEET PYQ",
          content: "Which species is the electrophile in Nitration?",
          options: [
            { id: "A", text: "Nitronium ion ($NO_2^+$)", isCorrect: true, explanation: "Generated from acid mix." },
            { id: "B", text: "Nitrite ion ($NO_2^-$)", isCorrect: false, explanation: "No." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "C-C bond length in benzene?", options: [{id: "A", text: "139 pm", isCorrect: true, explanation: "Correct"}, {id: "B", text: "154 pm", isCorrect: false, explanation: "Alkane"}]}
      ]
    },
    {
      id: "les-4-2-2-6",
      title: "Directive Influence",
      description: "Ortho/Para vs Meta",
      icon: "Compass",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Substituent Effects",
          content: "1. **Ortho-Para Directors (Activators):** $+R$ or $+I$ groups. Increase e- density at o/p. ($-OH, -NH_2, -CH_3, -OCH_3$).\n   - Exception: Halogens ($-X$) are o/p directing but **Deactivating** (due to strong -I).\n2. **Meta Directors (Deactivators):** $-R$ or strong $-I$. Decrease e- density. ($-NO_2, -CHO, -COOH, -CN$)."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Classification",
          content: "Nitrobenzene undergoes nitration at:",
          options: [
            { id: "A", text: "Meta position", isCorrect: true, explanation: "NO2 is meta directing." },
            { id: "B", text: "Ortho position", isCorrect: false, explanation: "Incorrect." }
          ]
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Exception",
          content: "Chlorine is:",
          options: [
            { id: "A", text: "o/p directing but deactivating", isCorrect: true, explanation: "Resonance directs, Inductive deactivates." },
            { id: "B", text: "m directing and deactivating", isCorrect: false, explanation: "No." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Friedel Crafts catalyst?", options: [{id: "A", text: "Anhydrous AlCl3", isCorrect: true, explanation: "Lewis Acid"}, {id: "B", text: "Fe", isCorrect: false, explanation: "No"}]}
      ]
    },
    {
      id: "les-4-2-2-7",
      title: "Carcinogenicity",
      description: "Toxicity",
      icon: "AlertTriangle",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Toxicity",
          content: "Benzene and polynuclear hydrocarbons (fused rings) are toxic and **carcinogenic** (cancer-causing).\nExamples: 1,2-Benzanthracene, 1,2-Benzpyrene.\nFormed by incomplete combustion of organic materials (tobacco, coal)."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Fact",
          content: "Polynuclear hydrocarbons are formed by:",
          options: [
            { id: "A", text: "Incomplete combustion", isCorrect: true, explanation: "Correct." },
            { id: "B", text: "Polymerisation of ethene", isCorrect: false, explanation: "Polythene." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Meta directing group?", options: [{id: "A", text: "-CHO", isCorrect: true, explanation: "Correct"}, {id: "B", text: "-OH", isCorrect: false, explanation: "o/p"}]}
      ]
    }
  ]
};