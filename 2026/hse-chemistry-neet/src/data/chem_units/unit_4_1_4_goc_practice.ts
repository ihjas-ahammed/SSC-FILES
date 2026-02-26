import { Unit } from '../../types';

export const UNIT_4_1_4: Unit = {
  id: "unit-4-1-4",
  title: "GOC Practice",
  description: "Exercises & NEET PYQs",
  color: "duo-green",
  lessons: [
    {
      id: "exe-4-1-4-1",
      title: "Nomenclature Practice",
      description: "NCERT & PYQs",
      icon: "Edit3",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Exercise 8.4", 
          content: "IUPAC name of $CH_3COCH_2CH_2CH_3$?", 
          options: [
            { id: "A", text: "Pentan-2-one", isCorrect: true, explanation: "Ketone at C2." },
            { id: "B", text: "Pentan-4-one", isCorrect: false, explanation: "Lowest locant rule violation." }
          ] 
        },
        { 
          id: "q-2", 
          type: "quiz", 
          title: "NEET PYQ", 
          content: "Structure of 3-methylpent-2-ene?", 
          options: [
            { id: "A", text: "$CH_3CH=C(CH_3)CH_2CH_3$", isCorrect: true, explanation: "Double bond at C2, Methyl at C3." },
            { id: "B", text: "$CH_3CH_2CH=C(CH_3)_2$", isCorrect: false, explanation: "That is 2-methylpent-2-ene." }
          ] 
        }
      ]
    },
    {
      id: "exe-4-1-4-2",
      title: "Isomerism Exercises",
      description: "Structural & Stereo",
      icon: "GitBranch",
      slides: [
        { 
          id: "q-1", 
          type: "numerical", 
          title: "NEET PYQ 48/60", 
          content: "How many monochlorination products (including stereoisomers) for 2-methylbutane?", 
          numericAnswer: 6, 
          numericTolerance: 0 
        },
        {
          id: "sol-1",
          type: "solution",
          title: "Count",
          content: "Positions: C1(2 enantiomers), C2(1), C3(2 enantiomers), C4(1). Total 6.",
          interactiveSteps: []
        },
        {
          id: "q-2",
          type: "numerical", 
          title: "NEET PYQ 46/48",
          content: "Total cyclic ethers of molecular formula $C_4H_8O$?",
          numericAnswer: 10,
          numericTolerance: 0
        },
        {
          id: "sol-2",
          type: "solution",
          title: "Count",
          content: "Oxiranes (3-ring), Oxetanes (4-ring), THF (5-ring). Including stereoisomers.",
          interactiveSteps: []
        }
      ]
    },
    {
      id: "exe-4-1-4-3",
      title: "Electronic Effects",
      description: "Acidity & Stability",
      icon: "Zap",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "NEET PYQ 48/47", 
          content: "Correct order of decreasing acidity?", 
          options: [
            { id: "A", text: "$HCOOH > CH_3COOH > (CH_3)_2CHCOOH$", isCorrect: true, explanation: "+I effect of alkyl groups decreases acidity." },
            { id: "B", text: "$CH_3COOH > HCOOH > ...$", isCorrect: false, explanation: "Incorrect." }
          ] 
        },
        { 
          id: "q-2", 
          type: "quiz", 
          title: "Carbocation Stability", 
          content: "Most stable carbocation among: Allyl, Methyl, Ethyl, Propyl?", 
          options: [
            { id: "A", text: "Allyl", isCorrect: true, explanation: "Resonance stabilized." },
            { id: "B", text: "Propyl", isCorrect: false, explanation: "Inductive only." }
          ] 
        }
      ]
    },
    {
      id: "exe-4-1-4-4",
      title: "Purification PYQs",
      description: "Methods",
      icon: "Filter",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "NEET PYQ 46/83", 
          content: "Separation of Aniline and Water?", 
          options: [
            { id: "A", text: "Steam Distillation", isCorrect: true, explanation: "Aniline is steam volatile." },
            { id: "B", text: "Simple Distillation", isCorrect: false, explanation: "Boiling points close?" }
          ] 
        },
        { 
          id: "q-2", 
          type: "quiz", 
          title: "NEET PYQ 46/83", 
          content: "Separation of Glycerol from spent-lye?", 
          options: [
            { id: "A", text: "Reduced Pressure Distillation", isCorrect: true, explanation: "Glycerol decomposes at BP." },
            { id: "B", text: "Fractional Distillation", isCorrect: false, explanation: "No." }
          ] 
        }
      ]
    },
    {
      id: "exe-4-1-4-5",
      title: "Analysis PYQs",
      description: "Lassaigne & Quant",
      icon: "TestTube",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "NEET PYQ 48/48", 
          content: "Which reaction does NOT belong to Lassaigne's test?", 
          options: [
            { id: "A", text: "$2CuO + C \\to 2Cu + CO_2$", isCorrect: true, explanation: "This is detection of C (Copper Oxide test), not Lassaigne (Sodium Fusion)." },
            { id: "B", text: "$Na + C + N \\to NaCN$", isCorrect: false, explanation: "This is Lassaigne." }
          ] 
        },
        {
          id: "q-2",
          type: "numerical",
          title: "Kjeldahl",
          content: "0.5g compound, NH3 neutralizes 10mL 1M H2SO4. %N?",
          numericAnswer: 56,
          numericTolerance: 0
        }
      ]
    },
    {
      id: "exe-4-1-4-6",
      title: "Reaction Mechs",
      description: "GOC Mechanisms",
      icon: "Settings",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "NEET PYQ 48/53", 
          content: "Assertion: Iodide is a better leaving group than Chloride. Reason: Large size of Iodine.", 
          options: [
            { id: "A", text: "Both True, R explains A", isCorrect: true, explanation: "Large size disperses charge, stable anion = good leaving group." },
            { id: "B", text: "A True, R False", isCorrect: false, explanation: "Incorrect." }
          ] 
        },
        { 
          id: "q-2", 
          type: "quiz", 
          title: "NEET PYQ 46/73", 
          content: "Time for 99.9% completion of 1st order reaction if half life is 1 min?", 
          options: [
            { id: "A", text: "10 min", isCorrect: true, explanation: "10 * t_half." },
            { id: "B", text: "5 min", isCorrect: false, explanation: "No." }
          ] 
        }
      ]
    }
  ]
};