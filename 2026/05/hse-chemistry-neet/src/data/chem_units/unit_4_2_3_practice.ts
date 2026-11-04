import { Unit } from '../../types';

export const UNIT_4_2_3: Unit = {
  id: "unit-4-2-3",
  title: "Hydrocarbon Practice",
  description: "NCERT Exe & Conversions",
  color: "duo-orange",
  lessons: [
    {
      id: "exe-4-2-3-1",
      title: "Isomerism Count",
      description: "Q 13.1 - 13.3",
      icon: "Hash",
      slides: [
        { 
          id: "q-1", 
          type: "numerical", 
          title: "Exercise 13.1", 
          content: "How many chain isomers for $C_6H_{14}$ (Hexane)?", 
          numericAnswer: 5, 
          numericTolerance: 0 
        },
        {
          id: "sol-1",
          type: "solution",
          title: "List",
          content: "n-Hexane, 2-MP, 3-MP, 2,2-DMB, 2,3-DMB.",
          interactiveSteps: []
        }
      ]
    },
    {
      id: "exe-4-2-3-2",
      title: "IUPAC Naming",
      description: "Q 13.4",
      icon: "Edit3",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Exercise 13.4", 
          content: "Name of $(CH_3)_2C=CH_2$?", 
          options: [
            { id: "A", text: "2-Methylprop-1-ene", isCorrect: true, explanation: "Longest chain 3 carbons." },
            { id: "B", text: "Isobutene", isCorrect: false, explanation: "Common name." }
          ] 
        }
      ]
    },
    {
      id: "exe-4-2-3-3",
      title: "Reactions Alkenes",
      description: "Q 13.6 - 13.8",
      icon: "Zap",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Exercise 13.6", 
          content: "Effect of Peroxide on HBr addition to Propene?", 
          options: [
            { id: "A", text: "Anti-Markovnikov (1-Bromopropane)", isCorrect: true, explanation: "Free radical mech." },
            { id: "B", text: "Markovnikov (2-Bromopropane)", isCorrect: false, explanation: "Only without peroxide." }
          ] 
        },
        {
          id: "q-2",
          type: "quiz",
          title: "Exercise 13.7",
          content: "Product of Propyne + $H_2O (Hg^{2+})$?",
          options: [
            { id: "A", text: "Propanone", isCorrect: true, explanation: "Ketone formed." },
            { id: "B", text: "Propanal", isCorrect: false, explanation: "No." }
          ]
        }
      ]
    },
    {
      id: "exe-4-2-3-4",
      title: "Conversions",
      description: "Q 13.12 - 13.14",
      icon: "ArrowRight",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Exercise 13.12", 
          content: "Convert Benzene to p-Nitrobromobenzene.", 
          options: [
            { id: "A", text: "Bromination then Nitration", isCorrect: true, explanation: "Br is o/p directing. NO2 is m directing. So Br first." },
            { id: "B", text: "Nitration then Bromination", isCorrect: false, explanation: "Gives m-isomer." }
          ] 
        }
      ]
    },
    {
      id: "exe-4-2-3-5",
      title: "Mechanism Reasoning",
      description: "Q 13.16",
      icon: "Settings",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Exercise 13.16", 
          content: "Why is Benzene extra stable?", 
          options: [
            { id: "A", text: "Delocalization of pi electrons", isCorrect: true, explanation: "Resonance energy." },
            { id: "B", text: "It contains double bonds", isCorrect: false, explanation: "Usually unsaturation means reactivity." }
          ] 
        }
      ]
    },
    {
      id: "exe-4-2-3-6",
      title: "Ozonolysis",
      description: "Q 13.9",
      icon: "Scissors",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Exercise 13.9", 
          content: "An alkene gives Propanal and Pentan-3-one on ozonolysis. Structure?", 
          options: [
            { id: "A", text: "3-Ethylhex-3-ene", isCorrect: true, explanation: "Join double bonds: CH3CH2CH=C(Et)2." },
            { id: "B", text: "Oct-3-ene", isCorrect: false, explanation: "Incorrect products." }
          ] 
        }
      ]
    },
    {
      id: "exe-4-2-3-7",
      title: "Boiling Points",
      description: "Q 13.15",
      icon: "Thermometer",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Exercise 13.15", 
          content: "Effect of branching on Boiling Point?", 
          options: [
            { id: "A", text: "Decreases", isCorrect: true, explanation: "Less surface area." },
            { id: "B", text: "Increases", isCorrect: false, explanation: "Incorrect." }
          ] 
        }
      ]
    },
    {
      id: "exe-4-2-3-8",
      title: "Aromaticity Check",
      description: "Q 13.11",
      icon: "Shield",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Exercise 13.11", 
          content: "Is Cyclopentadiene aromatic?", 
          options: [
            { id: "A", text: "No", isCorrect: true, explanation: "sp3 carbon breaks conjugation." },
            { id: "B", text: "Yes", isCorrect: false, explanation: "Anion is aromatic, not neutral." }
          ] 
        }
      ]
    },
    {
      id: "exe-4-2-3-9",
      title: "NEET PYQs",
      description: "Past Paper",
      icon: "Star",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "NEET 2021", 
          content: "Major product of dehydrohalogenation of 2-Bromopentane?", 
          options: [
            { id: "A", text: "Pent-2-ene", isCorrect: true, explanation: "Saytzeff Rule (More substituted)." },
            { id: "B", text: "Pent-1-ene", isCorrect: false, explanation: "Minor product." }
          ] 
        }
      ]
    }
  ]
};