import { Unit } from '../../types';

export const UNIT_6_1_3: Unit = {
  id: "unit-6-1-3",
  title: "Haloalkanes Practice",
  description: "NCERT Exercises & PYQs",
  color: "duo-indigo",
  lessons: [
    {
      id: "exe-6-1-3-1",
      title: "Structure & Naming",
      description: "Q 10.1 - 10.2",
      icon: "Edit3",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Exercise 10.1", 
          content: "Identify structure of 2-chloro-3-methylpentane.", 
          options: [
            { id: "A", text: "$CH_3-CH(Cl)-CH(CH_3)-CH_2-CH_3$", isCorrect: true, explanation: "Cl at 2, Me at 3." },
            { id: "B", text: "$CH_3-CH(CH_3)-CH(Cl)-CH_2-CH_3$", isCorrect: false, explanation: "Numbering priority." }
          ] 
        }
      ]
    },
    {
      id: "exe-6-1-3-2",
      title: "Properties & Boiling Point",
      description: "Q 10.6",
      icon: "Thermometer",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Exercise 10.6", 
          content: "Arrange in increasing BP: Bromomethane, Bromoform, Chloromethane, Dibromomethane.", 
          options: [
            { id: "A", text: "Chloro < Bromo < Dibromo < Bromoform", isCorrect: true, explanation: "Mass/Size increases -> VDW increases." },
            { id: "B", text: "Bromoform < Dibromo < ...", isCorrect: false, explanation: "Reverse." }
          ] 
        }
      ]
    },
    {
      id: "exe-6-1-3-3",
      title: "SN1 vs SN2 Prediction",
      description: "Q 10.7, 10.16",
      icon: "GitBranch",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Exercise 10.7", 
          content: "Which undergoes SN2 faster: 1-Bromobutane or 2-Bromobutane?", 
          options: [
            { id: "A", text: "1-Bromobutane", isCorrect: true, explanation: "Primary, less steric hindrance." },
            { id: "B", text: "2-Bromobutane", isCorrect: false, explanation: "Secondary is slower." }
          ] 
        },
        {
          id: "q-2",
          type: "quiz",
          title: "Exercise 10.16",
          content: "Predict mechanism: 2-Bromo-2-methylpropane + water -> alcohol.",
          options: [
            { id: "A", text: "SN1", isCorrect: true, explanation: "Tertiary halide, weak nucleophile (solvent)." },
            { id: "B", text: "SN2", isCorrect: false, explanation: "Sterically hindered." }
          ]
        }
      ]
    },
    {
      id: "exe-6-1-3-4",
      title: "Conversions I",
      description: "Q 10.11",
      icon: "ArrowRight",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Conversion", 
          content: "Ethanol to But-1-yne?", 
          options: [
            { id: "A", text: "SOCl2 -> Acetylide attack", isCorrect: true, explanation: "EtCl + NaC=CH -> But-1-yne." },
            { id: "B", text: "Dehydration -> Ozonolysis", isCorrect: false, explanation: "No." }
          ] 
        }
      ]
    },
    {
      id: "exe-6-1-3-5",
      title: "Mechanism Questions",
      description: "Q 10.18, 10.19",
      icon: "Settings",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Exercise 10.19", 
          content: "Conversion of (R)-2-Bromooctane to (S)-2-Octanol represents:", 
          options: [
            { id: "A", text: "Inversion", isCorrect: true, explanation: "SN2 characteristic." },
            { id: "B", text: "Retention", isCorrect: false, explanation: "No." }
          ] 
        }
      ]
    },
    {
      id: "exe-6-1-3-6",
      title: "Grignard Reaction",
      description: "Q 10.21",
      icon: "Zap",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Exercise 10.21", 
          content: "Primary halide (A) + Na -> C8H18. A + Mg -> B. B + H2O -> Butane. A is?", 
          options: [
            { id: "A", text: "1-Bromobutane", isCorrect: true, explanation: "Wurtz gives Octane (C8). Grignard gives Butane." },
            { id: "B", text: "2-Bromobutane", isCorrect: false, explanation: "Gives branched octane." }
          ] 
        }
      ]
    },
    {
      id: "exe-6-1-3-7",
      title: "Reasoning Questions",
      description: "Q 10.12",
      icon: "HelpCircle",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Exercise 10.12", 
          content: "Why is dipole moment of Chlorobenzene lower than Cyclohexyl chloride?", 
          options: [
            { id: "A", text: "sp2 carbon is more electronegative, less polarity diff", isCorrect: true, explanation: "Also resonance puts partial double bond, shorter distance." },
            { id: "B", text: "Cl is less electronegative in ring", isCorrect: false, explanation: "No." }
          ] 
        }
      ]
    },
    {
      id: "exe-6-1-3-8",
      title: "NEET PYQs",
      description: "Past Paper",
      icon: "Award",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "NEET 2021", 
          content: "Major product of dehydrohalogenation of 2-Bromopentane?", 
          options: [
            { id: "A", text: "Pent-2-ene", isCorrect: true, explanation: "Zaitsev product." },
            { id: "B", text: "Pent-1-ene", isCorrect: false, explanation: "Hoffmann product." }
          ] 
        },
        {
          id: "q-2",
          type: "quiz",
          title: "NEET 2019",
          content: "Reaction of $R-OH$ with $HX$ involves intermediate:",
          options: [
            { id: "A", text: "Carbocation", isCorrect: true, explanation: "SN1 pathway is common (Lucas)." },
            { id: "B", text: "Carbanion", isCorrect: false, explanation: "No." }
          ]
        }
      ]
    }
  ]
};