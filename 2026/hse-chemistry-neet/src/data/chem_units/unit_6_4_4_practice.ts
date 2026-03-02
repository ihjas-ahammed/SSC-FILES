import { Unit } from '../../types';

export const UNIT_6_4_4: Unit = {
  id: "unit-6-4-4",
  title: "Practice: Amines & Bio",
  description: "NCERT Exe & PYQs",
  color: "duo-green",
  lessons: [
    {
      id: "exe-6-4-4-1",
      title: "Amines Naming Exe",
      description: "Q 9.1",
      icon: "Type",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Exercise 9.1", 
          content: "IUPAC name of $(CH_3)_2CHNH_2$?", 
          options: [
            { id: "A", text: "Propan-2-amine", isCorrect: true, explanation: "Isopropyl group, NH2 on C2." },
            { id: "B", text: "2-Methylpropanamine", isCorrect: false, explanation: "Incorrect chain." }
          ] 
        }
      ]
    },
    {
      id: "exe-6-4-4-2",
      title: "Amines Prep Exe",
      description: "Q 9.5",
      icon: "Beaker",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Exercise 9.5", 
          content: "Convert Ethanoic acid to Methanamine.", 
          options: [
            { id: "A", text: "React with NH3 to form amide, then Hoffmann bromamide", isCorrect: true, explanation: "Reduces 2C to 1C amine." },
            { id: "B", text: "Reduction with LiAlH4", isCorrect: false, explanation: "Gives Ethanol." }
          ] 
        }
      ]
    },
    {
      id: "exe-6-4-4-3",
      title: "Basicity Orders",
      description: "Q 9.4",
      icon: "TrendingUp",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Exercise 9.4", 
          content: "Decreasing order of pKb (Increasing basicity): $C_6H_5NH_2, NH_3, C_2H_5NH_2, (C_2H_5)_2NH$ (Aqueous).", 
          options: [
            { id: "A", text: "Aniline < Ammonia < Ethylamine < Diethylamine", isCorrect: true, explanation: "Order of basicity." },
            { id: "B", text: "Ammonia < Aniline < ...", isCorrect: false, explanation: "Aniline is weaker than NH3." }
          ] 
        }
      ]
    },
    {
      id: "exe-6-4-4-4",
      title: "Amine Reactions",
      description: "Q 9.9, 9.11",
      icon: "Zap",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Exercise 9.11", 
          content: "Complete: $C_6H_5NH_2 + CHCl_3 + KOH(alc) \\to$ ?", 
          options: [
            { id: "A", text: "$C_6H_5NC$ (Phenyl isocyanide)", isCorrect: true, explanation: "Carbylamine reaction." },
            { id: "B", text: "$C_6H_5CN$", isCorrect: false, explanation: "Cyanide." }
          ] 
        }
      ]
    },
    {
      id: "exe-6-4-4-5",
      title: "Diazonium Uses",
      description: "Q 9.8",
      icon: "RefreshCw",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Exercise 9.8", 
          content: "Convert Aniline to Fluorobenzene.", 
          options: [
            { id: "A", text: "Diazotise, treat with HBF4, then heat", isCorrect: true, explanation: "Balz-Schiemann." },
            { id: "B", text: "Treat with F2/Fe", isCorrect: false, explanation: "Direct fluorination is too violent." }
          ] 
        }
      ]
    },
    {
      id: "exe-6-4-4-6",
      title: "Carbs Practice",
      description: "Q 10.4, 10.9",
      icon: "List",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Exercise 10.9", 
          content: "Reaction of Glucose with $HNO_3$ yields:", 
          options: [
            { id: "A", text: "Saccharic Acid", isCorrect: true, explanation: "Dicarboxylic acid." },
            { id: "B", text: "Gluconic Acid", isCorrect: false, explanation: "With Bromine water." }
          ] 
        }
      ]
    },
    {
      id: "exe-6-4-4-7",
      title: "Proteins Practice",
      description: "Q 10.12, 10.18",
      icon: "GitBranch",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Exercise 10.18", 
          content: "What happens to the primary structure of a protein during denaturation?", 
          options: [
            { id: "A", text: "Remains intact", isCorrect: true, explanation: "Sequence doesn't break." },
            { id: "B", text: "Is destroyed", isCorrect: false, explanation: "Only 2/3 structures." }
          ] 
        }
      ]
    },
    {
      id: "exe-6-4-4-8",
      title: "DNA & RNA Practice",
      description: "Q 10.22, 10.24",
      icon: "Menu",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Exercise 10.24", 
          content: "Which base is found only in RNA?", 
          options: [
            { id: "A", text: "Uracil", isCorrect: true, explanation: "Instead of Thymine." },
            { id: "B", text: "Cytosine", isCorrect: false, explanation: "In both." }
          ] 
        }
      ]
    },
    {
      id: "exe-6-4-4-9",
      title: "Amines PYQs",
      description: "NEET Papers",
      icon: "Star",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "NEET 2025 PYQ (Code 46)", 
          content: "Decreasing basic strength: N-ethylethanamine, ethanamine, N-methylaniline, benzenamine.", 
          options: [
            { id: "A", text: "N-ethylethanamine > ethanamine > N-methylaniline > benzenamine", isCorrect: true, explanation: "Aliphatic (2° > 1°) > Aromatic (2° > 1°)." },
            { id: "B", text: "benzenamine > ...", isCorrect: false, explanation: "Aromatic is weakest." }
          ] 
        }
      ]
    },
    {
      id: "exe-6-4-4-10",
      title: "Biomolecules PYQs",
      description: "NEET Papers",
      icon: "Award",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "NEET 2025 PYQ (Code 46)", 
          content: "Sugar 'X' is found in honey, is a keto sugar, exists in $\\alpha$ and $\\beta$ anomeric forms, and is laevorotatory. X is:", 
          options: [
            { id: "A", text: "D-Fructose", isCorrect: true, explanation: "Matches all criteria (Ketohexose, Laevorotatory)." },
            { id: "B", text: "D-Glucose", isCorrect: false, explanation: "Aldohexose, Dextrorotatory." }
          ] 
        },
        { 
          id: "q-2", 
          type: "quiz", 
          title: "Match Vitamin (NEET 2025)", 
          content: "Vitamin B12 deficiency causes:", 
          options: [
            { id: "A", text: "Pernicious anaemia", isCorrect: true, explanation: "RBC deficient in haemoglobin." },
            { id: "B", text: "Cheilosis", isCorrect: false, explanation: "Vitamin B2." }
          ] 
        }
      ]
    }
  ]
};