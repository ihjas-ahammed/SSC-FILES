import { Unit } from '../../types';

export const UNIT_6_3_3: Unit = {
  id: "unit-6-3-3",
  title: "Carbonyls Practice",
  description: "NCERT Exe & NEET PYQs",
  color: "duo-orange",
  lessons: [
    {
      id: "exe-6-3-3-1",
      title: "Nomenclature Exe",
      description: "Q 8.1 - 8.4",
      icon: "Type",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Exercise 8.2", 
          content: "IUPAC Name of $CH_3CH=CHCHO$?", 
          options: [
            { id: "A", text: "But-2-enal", isCorrect: true, explanation: "Numbering starts at CHO." },
            { id: "B", text: "Crotonaldehyde", isCorrect: false, explanation: "This is the common name." }
          ] 
        },
        { 
          id: "q-2", 
          type: "quiz", 
          title: "Exercise 8.4", 
          content: "Common name of Ph-CO-Ph?", 
          options: [
            { id: "A", text: "Benzophenone", isCorrect: true, explanation: "Diphenyl ketone." },
            { id: "B", text: "Acetophenone", isCorrect: false, explanation: "Ph-CO-CH3." }
          ] 
        }
      ]
    },
    {
      id: "exe-6-3-3-2",
      title: "Preparation Reactions",
      description: "Q 8.5, 8.14",
      icon: "Beaker",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Exercise 8.14", 
          content: "Prepare Benzophenone from Benzene?", 
          options: [
            { id: "A", text: "Friedel-Crafts Acylation with Benzoyl Chloride ($PhCOCl/AlCl_3$)", isCorrect: true, explanation: "Standard method." },
            { id: "B", text: "Etard Reaction", isCorrect: false, explanation: "Yields Benzaldehyde." }
          ] 
        },
        {
          id: "q-2",
          type: "quiz",
          title: "Reagents",
          content: "Convert Hexan-1-ol to Hexanal?",
          options: [
            { id: "A", text: "PCC", isCorrect: true, explanation: "Mild oxidation." },
            { id: "B", text: "KMnO4", isCorrect: false, explanation: "Gives Hexanoic acid." }
          ]
        }
      ]
    },
    {
      id: "exe-6-3-3-3",
      title: "Physical Props & Acidity",
      description: "Q 8.3, 8.12",
      icon: "Thermometer",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Exercise 8.3", 
          content: "Increasing order of boiling points: $CH_3CHO, CH_3CH_2OH, CH_3OCH_3, CH_3CH_2CH_3$", 
          options: [
            { id: "A", text: "Alkane < Ether < Aldehyde < Alcohol", isCorrect: true, explanation: "Based on VDW, Dipole, and H-bonding." },
            { id: "B", text: "Alkane < Aldehyde < Ether < Alcohol", isCorrect: false, explanation: "Aldehydes are more polar than ethers." }
          ] 
        },
        { 
          id: "q-2", 
          type: "quiz", 
          title: "Exercise 8.12 (Acidity)", 
          content: "Which is the strongest acid?", 
          options: [
            { id: "A", text: "4-Nitrobenzoic acid", isCorrect: true, explanation: "-NO2 is EWG, stabilizes anion." },
            { id: "B", text: "4-Methoxybenzoic acid", isCorrect: false, explanation: "-OCH3 is EDG, destabilizes anion." }
          ] 
        }
      ]
    },
    {
      id: "exe-6-3-3-4",
      title: "Nucleophilic Addition",
      description: "Reactivity Order",
      icon: "GitMerge",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Exercise 8.12", 
          content: "Increasing order of reactivity towards HCN?", 
          options: [
            { id: "A", text: "Di-tert-butyl ketone < Acetone < Acetaldehyde", isCorrect: true, explanation: "Steric hindrance and +I effect decrease reactivity." },
            { id: "B", text: "Acetaldehyde < Acetone < Di-tert-butyl ketone", isCorrect: false, explanation: "Inverse." }
          ] 
        },
        {
          id: "sol-1",
          type: "solution",
          title: "Rule",
          content: "Aldehydes are more reactive than Ketones. Bulky groups hinder attack.",
          interactiveSteps: []
        }
      ]
    },
    {
      id: "exe-6-3-3-5",
      title: "Oxidation & Reduction",
      description: "Tollens, Iodoform",
      icon: "Eye",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Exercise 8.13", 
          content: "Distinguish between Propanal and Propanone?", 
          options: [
            { id: "A", text: "Tollens' Test", isCorrect: true, explanation: "Propanal gives silver mirror." },
            { id: "B", text: "Iodoform Test", isCorrect: false, explanation: "Actually, Iodoform distinguishes them too (Propanone is methyl ketone, gives yellow ppt). Both are valid but Tollens is general for Ald vs Ketone." }
          ] 
        },
        { 
          id: "q-2", 
          type: "quiz", 
          title: "Exercise 8.13", 
          content: "Distinguish between Pentan-2-one and Pentan-3-one?", 
          options: [
            { id: "A", text: "Iodoform Test", isCorrect: true, explanation: "Pentan-2-one is a methyl ketone, gives yellow ppt." },
            { id: "B", text: "Fehling's Test", isCorrect: false, explanation: "Neither reacts." }
          ] 
        }
      ]
    },
    {
      id: "exe-6-3-3-6",
      title: "Aldol & Cannizzaro",
      description: "Q 8.7",
      icon: "Scissors",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Exercise 8.7", 
          content: "Which undergoes Cannizzaro reaction?", 
          options: [
            { id: "A", text: "Benzaldehyde", isCorrect: true, explanation: "No alpha-hydrogen." },
            { id: "B", text: "Phenylacetaldehyde", isCorrect: false, explanation: "Has alpha-H (CH2 group), undergoes Aldol." }
          ] 
        },
        {
          id: "q-2",
          type: "quiz",
          title: "Cannizzaro Products",
          content: "Products of Cannizzaro reaction of Methanal (Formaldehyde)?",
          options: [
            { id: "A", text: "Methanol + Sodium formate", isCorrect: true, explanation: "Disproportionation." },
            { id: "B", text: "Ethanal + Sodium formate", isCorrect: false, explanation: "Incorrect." }
          ]
        }
      ]
    },
    {
      id: "exe-6-3-3-7",
      title: "Carboxylic Acid Reactions",
      description: "Conversions",
      icon: "RefreshCw",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Exercise 8.15", 
          content: "Convert Benzoic acid to Benzaldehyde?", 
          options: [
            { id: "A", text: "Convert to Benzoyl chloride (SOCl2), then Rosenmund reduction", isCorrect: true, explanation: "Cannot reduce directly easily without overshooting, Rosenmund is specific." },
            { id: "B", text: "Reduction with LiAlH4", isCorrect: false, explanation: "Gives Benzyl alcohol." }
          ] 
        }
      ]
    },
    {
      id: "exe-6-3-3-8",
      title: "Identification Word Problems",
      description: "Q 8.10",
      icon: "Search",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Exercise 8.10", 
          content: "Compound forms 2,4-DNP derivative, reduces Tollens, undergoes Cannizzaro. It is:", 
          options: [
            { id: "A", text: "An aldehyde without alpha-H", isCorrect: true, explanation: "2,4-DNP means Carbonyl. Tollens means Aldehyde. Cannizzaro means no alpha-H." },
            { id: "B", text: "A ketone", isCorrect: false, explanation: "Ketones don't reduce Tollens." }
          ] 
        }
      ]
    },
    {
      id: "exe-6-3-3-9",
      title: "NEET PYQ: Reagents",
      description: "Code 48",
      icon: "Star",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "NEET 2025 Prediction/PYQ", 
          content: "Identify the suitable reagent for conversion of Methyl Benzoate to Benzaldehyde.", 
          options: [
            { id: "A", text: "(i) DIBAL-H, (ii) H2O", isCorrect: true, explanation: "Selectively reduces esters to aldehydes at low temps." },
            { id: "B", text: "NaBH4", isCorrect: false, explanation: "Does not reduce esters." }
          ] 
        }
      ]
    },
    {
      id: "exe-6-3-3-10",
      title: "NEET PYQ: Acidity",
      description: "Code 48",
      icon: "Award",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "NEET 2025 PYQ", 
          content: "Correct order of decreasing acidity?", 
          options: [
            { id: "A", text: "HCOOH > CH3COOH > (CH3)2CHCOOH > (CH3)3CCOOH", isCorrect: true, explanation: "More EDG (alkyl groups) destabilize the carboxylate anion via +I effect, decreasing acidity." },
            { id: "B", text: "CH3COOH > (CH3)2CHCOOH > (CH3)3CCOOH > HCOOH", isCorrect: false, explanation: "Formic acid is the strongest here." }
          ] 
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "SN2 inversion is called?", options: [{id: "A", text: "Walden Inversion", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Racemisation", isCorrect: false, explanation: "SN1"}]}
      ]
    }
  ]
};