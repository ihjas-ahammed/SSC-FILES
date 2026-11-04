import { Unit } from '../../types';

export const UNIT_6_2_3: Unit = {
  id: "unit-6-2-3",
  title: "Alcohol & Ether Practice",
  description: "NCERT Exercises",
  color: "duo-pink",
  lessons: [
    {
      id: "exe-6-2-3-1",
      title: "Nomenclature Exe",
      description: "Q 7.1 - 7.3",
      icon: "Edit3",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Exercise 7.1", 
          content: "IUPAC Name of Glycerol ($CH_2OH-CHOH-CH_2OH$)?", 
          options: [
            { id: "A", text: "Propane-1,2,3-triol", isCorrect: true, explanation: "Correct." },
            { id: "B", text: "1,2,3-Propanetriol", isCorrect: false, explanation: "Old style." }
          ] 
        },
        {
          id: "q-2",
          type: "quiz",
          title: "Classification",
          content: "Is 2-Methylpropan-2-ol primary, secondary or tertiary?",
          options: [
            { id: "A", text: "Tertiary", isCorrect: true, explanation: "OH on Carbon with 3 Methyls." },
            { id: "B", text: "Secondary", isCorrect: false, explanation: "No." }
          ]
        }
      ]
    },
    {
      id: "exe-6-2-3-2",
      title: "Preparation Exe",
      description: "Q 7.13, 7.20",
      icon: "Beaker",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Conversion", 
          content: "Propene to Propan-2-ol?", 
          options: [
            { id: "A", text: "Acid catalyzed hydration", isCorrect: true, explanation: "Markovnikov addition." },
            { id: "B", text: "Hydroboration-Oxidation", isCorrect: false, explanation: "Gives Propan-1-ol." }
          ] 
        },
        {
          id: "q-2",
          type: "quiz",
          title: "Grignard",
          content: "Reagents to prep 2-Methylpropan-2-ol from Methyl magnesium bromide?",
          options: [
            { id: "A", text: "Acetone (Propanone)", isCorrect: true, explanation: "Ketone + Grignard -> 3° Alcohol." },
            { id: "B", text: "Acetaldehyde", isCorrect: false, explanation: "Gives 2° Alcohol." }
          ]
        }
      ]
    },
    {
      id: "exe-6-2-3-3",
      title: "Mechanism Exe",
      description: "Q 7.25, 7.33",
      icon: "Settings",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Exercise 7.33", 
          content: "When 3-methylbutan-2-ol is treated with HBr, the major product is 2-bromo-2-methylbutane. Why?", 
          options: [
            { id: "A", text: "Hydride shift to stable 3° carbocation", isCorrect: true, explanation: "Rearrangement of 2° cation." },
            { id: "B", text: "Direct SN2 substitution", isCorrect: false, explanation: "Would give 2-bromo-3-methyl." }
          ] 
        }
      ]
    },
    {
      id: "exe-6-2-3-4",
      title: "Properties Exe",
      description: "Q 7.4 - 7.5",
      icon: "Thermometer",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Exercise 7.4", 
          content: "Why is BP of Propanol > Butane?", 
          options: [
            { id: "A", text: "Intermolecular H-bonding", isCorrect: true, explanation: "Stronger force." },
            { id: "B", text: "Higher molecular mass", isCorrect: false, explanation: "Butane mass (58) is similar to Propanol (60)." }
          ] 
        }
      ]
    },
    {
      id: "exe-6-2-3-5",
      title: "Phenol Reactions",
      description: "Q 7.9 - 7.12",
      icon: "Star",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Exercise 7.9", 
          content: "Preparation of Phenol from Cumene involves intermediate:", 
          options: [
            { id: "A", text: "Cumene Hydroperoxide", isCorrect: true, explanation: "Oxidation by air." },
            { id: "B", text: "Cumene Oxide", isCorrect: false, explanation: "No." }
          ] 
        },
        { 
          id: "q-2", 
          type: "quiz", 
          title: "Exercise 7.16", 
          content: "Nitration of phenol gives ortho/para isomers. Which is steam volatile?", 
          options: [
            { id: "A", text: "o-Nitrophenol", isCorrect: true, explanation: "Intramolecular H-bonding." },
            { id: "B", text: "p-Nitrophenol", isCorrect: false, explanation: "Intermolecular (Association)." }
          ] 
        }
      ]
    },
    {
      id: "exe-6-2-3-6",
      title: "Ether Reactions",
      description: "Q 7.24, 7.28",
      icon: "Zap",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Williamson Synthesis", 
          content: "To make 1-Methoxyethane, use:", 
          options: [
            { id: "A", text: "Sodium ethoxide + Chloromethane (or Sodium methoxide + Chloroethane)", isCorrect: true, explanation: "Both 1° halides, works." },
            { id: "B", text: "Methanol + Ethanol", isCorrect: false, explanation: "Dehydration gives mixture." }
          ] 
        },
        {
          id: "q-2",
          type: "quiz",
          title: "Cleavage",
          content: "Product of Benzyl ethyl ether + HI?",
          options: [
            { id: "A", text: "Benzyl Iodide + Ethanol", isCorrect: true, explanation: "Benzyl carbocation is stable (SN1-like cleavage)." },
            { id: "B", text: "Ethyl Iodide + Benzyl Alcohol", isCorrect: false, explanation: "Incorrect." }
          ]
        }
      ]
    },
    {
      id: "exe-6-2-3-7",
      title: "Word Problems",
      description: "Q 7.22",
      icon: "HelpCircle",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Exercise 7.22", 
          content: "Reagent to convert Phenol to Benzoquinone?", 
          options: [
            { id: "A", text: "$Na_2Cr_2O_7 / H_2SO_4$", isCorrect: true, explanation: "Strong oxidation." },
            { id: "B", text: "$KMnO_4$", isCorrect: false, explanation: "Destroys ring often." }
          ] 
        }
      ]
    }
  ]
};