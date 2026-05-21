import { Unit } from '../../types';

export const UNIT_5_1_3: Unit = {
  id: "unit-5-1-3",
  title: "Colligative Properties",
  description: "Properties depending on Particle Count",
  color: "duo-maroon",
  lessons: [
    {
      id: "les-5-1-3-1",
      title: "Relative Lowering of VP",
      description: "RLVP Formula",
      icon: "ArrowDown",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Colligative properties depend on:", options: [{id: "A", text: "Number of particles", isCorrect: true, explanation: "Definition."}, {id: "B", text: "Nature of solute", isCorrect: false, explanation: "Identity doesn't matter."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Relative Lowering of Vapour Pressure",
          content: "Addition of non-volatile solute reduces VP.\n**Formula:**\n$$ \\frac{p^0 - p}{p^0} = x_2 $$\n\nWhere $x_2$ is mole fraction of solute. This ratio is called Relative Lowering."
        },
        {
          id: "sol-1",
          type: "solution",
          title: "Molar Mass Determination",
          content: "Calculate $M_2$ using RLVP.",
          interactiveSteps: [
            { stepText: "$x_2 \\approx n_2/n_1$ (For dilute)." },
            { stepText: "$(p^0 - p)/p^0 = (w_2 M_1) / (M_2 w_1)$." },
            { stepText: "$M_2 = \\frac{w_2 M_1 p^0}{w_1 (p^0 - p)}$." }
          ]
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "Relative lowering of vapour pressure is equal to the ___ fraction of the solute.",
          blankAnswer: "mole"
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Raoult's law for non-volatile solute?", options: [{id: "A", text: "p = p0 x1", isCorrect: true, explanation: "Correct"}, {id: "B", text: "p = p0 x2", isCorrect: false, explanation: "Incorrect"}]}
      ]
    },
    {
      id: "les-5-1-3-2",
      title: "Elevation of Boiling Point",
      description: "Ebullioscopy",
      icon: "Thermometer",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Boiling point of solution is:", options: [{id: "A", text: "Higher than pure solvent", isCorrect: true, explanation: "Elevation."}, {id: "B", text: "Lower", isCorrect: false, explanation: "Depression."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Elevation in BP ($\\Delta T_b$)",
          content: "Solution boils at higher temp because VP is lowered.\n$$ \\Delta T_b = T_b - T_b^0 = K_b m $$\n\n- $K_b$: Molal Elevation Constant (Ebullioscopic Constant).\n- Unit: K kg/mol."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "BP Curve",
          content: "Graph showing VP of solvent vs solution. Intersection with 1 atm.",
          interactiveCanvasId: "sol-colligative-bp"
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Constant",
          content: "Value of $K_b$ for water?",
          options: [
            { id: "A", text: "0.52 K kg/mol", isCorrect: true, explanation: "Standard value." },
            { id: "B", text: "1.86 K kg/mol", isCorrect: false, explanation: "That is Kf." }
          ]
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Calc Delta T",
          content: "1 mol solute in 1 kg water. $\\Delta T_b$?",
          numericAnswer: 0.52,
          numericTolerance: 0
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Molality unit?", options: [{id: "A", text: "mol/kg", isCorrect: true, explanation: "Correct"}, {id: "B", text: "mol/L", isCorrect: false, explanation: "Molarity"}]}
      ]
    },
    {
      id: "les-5-1-3-3",
      title: "Depression of Freezing Point",
      description: "Cryoscopy",
      icon: "Snowflake",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Adding salt to ice:", options: [{id: "A", text: "Lowers freezing point", isCorrect: true, explanation: "Melts ice."}, {id: "B", text: "Raises freezing point", isCorrect: false, explanation: "Incorrect."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Depression in FP ($\\Delta T_f$)",
          content: "Solution freezes at lower temp.\n$$ \\Delta T_f = T_f^0 - T_f = K_f m $$\n\n- $K_f$: Molal Depression Constant (Cryoscopic Constant).\n- Freezing point: Solid solvent VP = Liquid solvent VP."
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "Ethylene glycol is used as an ___ in car radiators.",
          blankAnswer: "antifreeze"
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Comparison",
          content: "Which has larger value for water?",
          options: [
            { id: "A", text: "$K_f$ (1.86)", isCorrect: true, explanation: "Depression is more pronounced." },
            { id: "B", text: "$K_b$ (0.52)", isCorrect: false, explanation: "Smaller." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Kb unit?", options: [{id: "A", text: "K kg/mol", isCorrect: true, explanation: "Correct"}, {id: "B", text: "K/mol", isCorrect: false, explanation: "No"}]}
      ]
    },
    {
      id: "les-5-1-3-4",
      title: "Osmosis",
      description: "Flow of Solvent",
      icon: "ArrowRight",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Osmosis flow direction:", options: [{id: "A", text: "Low conc to High conc", isCorrect: true, explanation: "Solvent flows to dilute the concentrated side."}, {id: "B", text: "High to Low", isCorrect: false, explanation: "Diffusion."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Osmotic Pressure ($\\Pi$)",
          content: "Pressure applied to stop osmosis.\n$$ \\Pi = CRT $$\n- $C$: Molarity.\n- $R$: Gas constant.\n- $T$: Temperature.\n\nBest method for polymers (Biomolecules) as it uses Molarity at room Temp."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Osmosis Setup",
          content: "Piston applying pressure pi.",
          interactiveCanvasId: "sol-osmosis"
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Advantage",
          content: "Why is Osmotic Pressure used for proteins?",
          options: [
            { id: "A", text: "High magnitude even for dilute solutions", isCorrect: true, explanation: "Proteins have high M, so low molality. Pi is measurable." },
            { id: "B", text: "Proteins are stable at high T", isCorrect: false, explanation: "They denature." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Is Delta Tf proportional to Molarity?", options: [{id: "A", text: "No, Molality", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Yes", isCorrect: false, explanation: "Incorrect"}]}
      ]
    },
    {
      id: "les-5-1-3-5",
      title: "Reverse Osmosis & Isotonic",
      description: "Applications",
      icon: "Filter",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Isotonic solutions have:", options: [{id: "A", text: "Same Osmotic Pressure", isCorrect: true, explanation: "No net flow."}, {id: "B", text: "Same Volume", isCorrect: false, explanation: "Irrelevant."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Tonicity & RO",
          content: "1. **Isotonic:** Same $\\Pi$ (0.9% NaCl with Blood).\n2. **Hypertonic:** Higher $\\Pi$ (Conc > 0.9%). Cell shrinks (Plasmolysis).\n3. **Hypotonic:** Lower $\\Pi$. Cell swells/bursts.\n\n**Reverse Osmosis:** $P > \\Pi$. Solvent flows from Solution to Pure Solvent. Desalination."
        },
        {
          id: "vis-1",
          type: "theory",
          title: "Blood Cells",
          content: "Hypertonic -> Shrink. Hypotonic -> Swell."
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Medical",
          content: "Why do people eating salty food swell (Edema)?",
          options: [
            { id: "A", text: "Water retention due to osmosis", isCorrect: true, explanation: "Tissue becomes hypertonic." },
            { id: "B", text: "Fat accumulation", isCorrect: false, explanation: "No." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "SPM stands for?", options: [{id: "A", text: "Semi Permeable Membrane", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Standard Pressure Mode", isCorrect: false, explanation: "No"}]}
      ]
    },
    {
      id: "les-5-1-3-6",
      title: "Molar Mass Calc",
      description: "Using Colligative Props",
      icon: "Calculator",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Molar Mass Formulae",
          content: "All properties allow finding $M_2$ (Solute).\n1. $M_2 = \\frac{K_b w_2 1000}{\\Delta T_b w_1}$\n2. $M_2 = \\frac{K_f w_2 1000}{\\Delta T_f w_1}$\n3. $M_2 = \\frac{w_2 R T}{\\Pi V}$"
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Calculation",
          content: "10g solute in 100g water raises BP by 0.52 K. ($K_b = 0.52$). Find $M_2$.",
          numericAnswer: 100,
          numericTolerance: 1
        },
        {
          id: "sol-1",
          type: "solution",
          title: "Steps",
          content: "Solution",
          interactiveSteps: [
            { stepText: "Formula: $M_2 = (K_b \\cdot w_2 \\cdot 1000) / (\\Delta T_b \\cdot w_1)$" },
            { stepText: "$M_2 = (0.52 \\cdot 10 \\cdot 1000) / (0.52 \\cdot 100)$" },
            { stepText: "$M_2 = 100$ g/mol." }
          ]
        }
      ]
    },
    {
      id: "les-5-1-3-7",
      title: "Abnormal Molar Mass",
      description: "Dissociation & Association",
      icon: "AlertTriangle",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "KCl dissociates. Number of particles:", options: [{id: "A", text: "Increases", isCorrect: true, explanation: "1 -> 2."}, {id: "B", text: "Decreases", isCorrect: false, explanation: "Association."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Abnormal Molar Mass",
          content: "When solute associates or dissociates, observed colligative property deviates.\n- **Dissociation:** Particles $\\uparrow$, Colligative Prop $\\uparrow$, Molar Mass $\\downarrow$.\n- **Association:** Particles $\\downarrow$, Colligative Prop $\\downarrow$, Molar Mass $\\uparrow$ (e.g., Ethanoic acid dimer)."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Association",
          content: "Dimerisation of Acetic Acid via H-bonds.",
          interactiveCanvasId: "sol-vant-hoff"
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Check",
          content: "For Ethanoic acid in benzene, experimental molar mass is approx:",
          options: [
            { id: "A", text: "120 g/mol", isCorrect: true, explanation: "Dimer (60 x 2)." },
            { id: "B", text: "60 g/mol", isCorrect: false, explanation: "Normal mass." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Pi = ?", options: [{id: "A", text: "CRT", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Kbm", isCorrect: false, explanation: "BP"}]}
      ]
    },
    {
      id: "les-5-1-3-8",
      title: "van't Hoff Factor (i)",
      description: "Correction Factor",
      icon: "Hash",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "van't Hoff Factor ($i$)",
          content: "$$ i = \\frac{\\text{Normal Molar Mass}}{\\text{Abnormal Molar Mass}} = \\frac{\\text{Observed Colligative Prop}}{\\text{Calc Colligative Prop}} $$\n\n- Dissociation: $i > 1$ (e.g., NaCl $i=2$).\n- Association: $i < 1$ (e.g., Dimer $i=0.5$).\n- No change: $i = 1$ (Glucose).\n\nModified Eq: $\\Delta T_b = i K_b m$, $\\Pi = i C R T$."
        },
        {
          id: "num-1",
          type: "numerical",
          title: "i Calculation",
          content: "For $K_2SO_4$ (complete dissociation), what is $i$?",
          numericAnswer: 3,
          numericTolerance: 0
        },
        {
          id: "sol-1",
          type: "solution",
          title: "Logic",
          content: "$K_2SO_4 \\to 2K^+ + SO_4^{2-}$. Total 3 ions.",
          interactiveSteps: []
        },
        {
          id: "pyq-1",
          type: "quiz",
          title: "NEET PYQ",
          content: "Which has highest boiling point (0.1 M aq)?",
          options: [
            { id: "A", text: "$Al_2(SO_4)_3$", isCorrect: true, explanation: "i = 5 (Max particles)." },
            { id: "B", text: "$NaCl$", isCorrect: false, explanation: "i = 2." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Association i value?", options: [{id: "A", text: "< 1", isCorrect: true, explanation: "Correct"}, {id: "B", text: "> 1", isCorrect: false, explanation: "Dissociation"}]}
      ]
    }
  ]
};