import { Unit } from '../../types';

export const UNIT_1_1_4: Unit = {
  id: "unit-1-1-4",
  title: "Section 1.1 Summary",
  description: "Recap of Concepts, Measurement, and Laws",
  color: "duo-blue",
  lessons: [
    {
      id: "les-1-1-4-1",
      title: "Summary: Matter & Measurement",
      description: "Recap of Units 1.1.1 & 1.1.2",
      icon: "BookOpen",
      slides: [
        { 
          id: "sum-1", 
          type: "theory", 
          title: "Matter & Classification", 
          content: "**Matter** occupies space and has mass. It exists as Solids, Liquids, Gases.\n\n**Classification:**\n- **Mixtures:** Homogeneous (uniform) vs Heterogeneous.\n- **Pure Substances:** Elements (one atom type) vs Compounds (fixed ratio of different atoms).\n\n**Key Drugs:** Cisplatin/Taxol (Cancer), AZT (AIDS)." 
        },
        { 
          id: "sum-2", 
          type: "theory", 
          title: "Measurement", 
          content: "**SI Units:** 7 Base units (m, kg, s, A, K, mol, cd).\n**Precision:** Closeness of measurements.\n**Accuracy:** Agreement with true value.\n**Sig Figs:** Rules for zeros and rounding.\n\n**Conversions:**\n$^\circ F = \\frac{9}{5}(^\circ C) + 32$\n$K = ^\circ C + 273.15$" 
        },
        { id: "ret-1", type: "quiz", title: "Recall", content: "Which is a pure substance?", options: [{id: "A", text: "Gold", isCorrect: true, explanation: "Element"}, {id: "B", text: "Air", isCorrect: false, explanation: "Mixture"}]}
      ]
    },
    {
      id: "les-1-1-4-2",
      title: "Summary: Chemical Laws",
      description: "Recap of Unit 1.1.3",
      icon: "BookOpen",
      slides: [
        { 
          id: "sum-1", 
          type: "theory", 
          title: "Laws of Combination", 
          content: "1. **Conservation of Mass (Lavoisier):** Mass neither created nor destroyed.\n2. **Definite Proportions (Proust):** Fixed % by weight.\n3. **Multiple Proportions (Dalton):** Small whole number ratios for different compounds of same elements.\n4. **Gay Lussac:** Simple ratio by volume for gases.\n5. **Avogadro:** Equal vol = Equal molecules." 
        },
        { 
          id: "sum-2", 
          type: "theory", 
          title: "Dalton's Theory", 
          content: "Matter is made of indivisible atoms. Atoms of same element are identical (later disproven by isotopes). Reorganisation of atoms occurs in reactions." 
        },
        { id: "ret-1", type: "fill_in_blank", title: "Recall", content: "Gay Lussac's law deals with ___.", blankAnswer: "volumes" }
      ]
    }
  ]
};