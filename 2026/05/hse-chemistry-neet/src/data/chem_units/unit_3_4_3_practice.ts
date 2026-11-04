import { Unit } from '../../types';

export const UNIT_3_4_3: Unit = {
  id: "unit-3-4-3",
  title: "Coordination Practice",
  description: "Applications & Exercises",
  color: "duo-violet",
  lessons: [
    {
      id: "les-3-4-3-1",
      title: "Applications",
      description: "Real World Uses",
      icon: "Globe",
      slides: [
        {
          id: "anc-1",
          type: "theory",
          title: "Uses",
          content: "1. **Analysis:** Hardness of water (EDTA), Ni detection (DMG).\n2. **Biology:** Chlorophyll (Mg), Haemoglobin (Fe), Vitamin B12 (Co).\n3. **Medicine:** Cisplatin (Cancer).\n4. **Metallurgy:** Extraction of Au/Ag (Cyanide process), Purification of Ni (Mond process)."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Match",
          content: "Wilkinson Catalyst ($[(Ph_3P)_3RhCl]$) is used for:",
          options: [
            { id: "A", text: "Hydrogenation of alkenes", isCorrect: true, explanation: "Correct." },
            { id: "B", text: "Polymerisation", isCorrect: false, explanation: "Ziegler-Natta." }
          ]
        },
        {
          id: "pyq-1",
          type: "quiz",
          title: "NEET PYQ",
          content: "The metal present in Vitamin B12 is:",
          options: [
            { id: "A", text: "Cobalt", isCorrect: true, explanation: "Cyanocobalamin." },
            { id: "B", text: "Iron", isCorrect: false, explanation: "Haemoglobin." }
          ]
        }
      ]
    },
    {
      id: "les-3-4-3-2",
      title: "Nomenclature Exe",
      description: "NCERT Q 5.6 - 5.7",
      icon: "Type",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Exercise 5.7", 
          content: "IUPAC Name for $[Co(NH_3)_6]Cl_3$?", 
          options: [
            { id: "A", text: "Hexaamminecobalt(III) chloride", isCorrect: true, explanation: "Correct." },
            { id: "B", text: "Hexaamminecobalt(II) chloride", isCorrect: false, explanation: "Oxidation state +3." }
          ] 
        },
        {
          id: "q-2",
          type: "quiz",
          title: "Exercise 5.7",
          content: "Name for $[Ni(CO)_4]$?",
          options: [
            { id: "A", text: "Tetracarbonylnickel(0)", isCorrect: true, explanation: "Neutral, OS 0." },
            { id: "B", text: "Tetracarbonylnickelate(0)", isCorrect: false, explanation: "Not anionic." }
          ]
        }
      ]
    },
    {
      id: "les-3-4-3-3",
      title: "Isomerism Exe",
      description: "NCERT Q 5.9 - 5.11",
      icon: "GitBranch",
      slides: [
        { 
          id: "q-1", 
          type: "numerical", 
          title: "Exercise 5.9", 
          content: "How many geometrical isomers for $[Cr(C_2O_4)_3]^{3-}$?", 
          numericAnswer: 0, 
          numericTolerance: 0 
        },
        {
          id: "sol-1",
          type: "solution",
          title: "Reason",
          content: "M(AA)3 type only has one form geometrically. However, it shows **Optical Isomerism** (d and l forms).",
          interactiveSteps: []
        },
        { 
          id: "q-2", 
          type: "quiz", 
          title: "Exercise 5.11", 
          content: "Optical isomers possible for:", 
          options: [
            { id: "A", text: "$[CoCl_2(en)_2]^+$", isCorrect: true, explanation: "Cis form is optical active." },
            { id: "B", text: "$[Co(NH_3)_3Cl_3]$", isCorrect: false, explanation: "Ma3b3 has plane of symmetry." }
          ] 
        }
      ]
    },
    {
      id: "les-3-4-3-4",
      title: "Bonding VBT Exe",
      description: "NCERT Q 5.15, 5.19",
      icon: "Magnet",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Exercise 5.19", 
          content: "Why is $[Cr(NH_3)_6]^{3+}$ paramagnetic?", 
          options: [
            { id: "A", text: "3 unpaired electrons", isCorrect: true, explanation: "Cr3+ is d3. t2g3 configuration." },
            { id: "B", text: "1 unpaired electron", isCorrect: false, explanation: "Incorrect." }
          ] 
        },
        {
          id: "q-2",
          type: "quiz",
          title: "Exercise 5.15",
          content: "Geometry of $[Ni(CN)_4]^{2-}$?",
          options: [
            { id: "A", text: "Square Planar", isCorrect: true, explanation: "dsp2, diamagnetic." },
            { id: "B", text: "Tetrahedral", isCorrect: false, explanation: "Incorrect." }
          ]
        }
      ]
    },
    {
      id: "les-3-4-3-5",
      title: "Bonding CFT Exe",
      description: "NCERT Q 5.16 - 5.25",
      icon: "Layers",
      slides: [
        { 
          id: "q-1", 
          type: "numerical", 
          title: "Exercise 5.25", 
          content: "Number of unpaired electrons in $[Fe(H_2O)_6]^{2+}$ (Weak field)? Fe2+ is d6.", 
          numericAnswer: 4, 
          numericTolerance: 0 
        },
        { 
          id: "q-2", 
          type: "quiz", 
          title: "Colour", 
          content: "If $\\Delta_o$ increases, the wavelength absorbed:", 
          options: [
            { id: "A", text: "Decreases", isCorrect: true, explanation: "E = hc/lambda. Higher E -> Lower lambda." },
            { id: "B", text: "Increases", isCorrect: false, explanation: "Inverse." }
          ] 
        }
      ]
    },
    {
      id: "les-3-4-3-6",
      title: "NEET PYQs General",
      description: "Past Paper Questions",
      icon: "Star",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "NEET 2020", 
          content: "The calculated spin only magnetic moment of $Cr^{2+}$ ion is:", 
          options: [
            { id: "A", text: "4.90 BM", isCorrect: true, explanation: "d4 -> 4 unpaired. Root 24." },
            { id: "B", text: "3.87 BM", isCorrect: false, explanation: "d3." }
          ] 
        },
        {
          id: "q-2",
          type: "quiz",
          title: "NEET 2019",
          content: "Which will exhibit optical isomerism?",
          options: [
            { id: "A", text: "$[Cr(ox)_3]^{3-}$", isCorrect: true, explanation: "Tris-chelate." },
            { id: "B", text: "$[ZnCl_4]^{2-}$", isCorrect: false, explanation: "Tetrahedral." }
          ]
        }
      ]
    },
    {
      id: "les-3-4-3-7",
      title: "NEET PYQs Bonding",
      description: "VBT & CFT",
      icon: "Zap",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "NEET 2018", 
          content: "Which is high spin complex?", 
          options: [
            { id: "A", text: "$[CoF_6]^{3-}$", isCorrect: true, explanation: "Weak ligand F-." },
            { id: "B", text: "$[Co(NH_3)_6]^{3+}$", isCorrect: false, explanation: "Strong ligand, low spin." }
          ] 
        },
        {
          id: "q-2",
          type: "quiz",
          title: "NEET 2016",
          content: "CFSE for $d^6$ in low spin octahedral?",
          options: [
            { id: "A", text: "-2.4 $\\Delta_o$", isCorrect: true, explanation: "6 e- in t2g. 6 * -0.4 = -2.4." },
            { id: "B", text: "-0.4 $\\Delta_o$", isCorrect: false, explanation: "Incorrect." }
          ]
        }
      ]
    },
    {
      id: "les-3-4-3-8",
      title: "NEET PYQs Isomerism",
      description: "Recent Trends",
      icon: "GitBranch",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "NEET 2021", 
          content: "Isomerism in $[Co(NH_3)_5SO_4]Br$ and $[Co(NH_3)_5Br]SO_4$?", 
          options: [
            { id: "A", text: "Ionisation", isCorrect: true, explanation: "Different ions in solution." },
            { id: "B", text: "Linkage", isCorrect: false, explanation: "No ambidentate change." }
          ] 
        }
      ]
    }
  ]
};