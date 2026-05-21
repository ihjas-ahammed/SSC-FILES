import { Unit } from '../../types';

export const UNIT_6_4_3: Unit = {
  id: "unit-6-4-3",
  title: "Biomolecules",
  description: "Carbs, Proteins, Nucleic Acids",
  color: "duo-orange",
  lessons: [
    {
      id: "les-6-4-3-1",
      title: "Carbohydrates Classification",
      description: "Saccharides",
      icon: "List",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Carbohydrates are chemically defined as:", options: [{id: "A", text: "Optically active polyhydroxy aldehydes/ketones", isCorrect: true, explanation: "Modern definition."}, {id: "B", text: "Hydrates of carbon", isCorrect: false, explanation: "Old definition (Cx(H2O)y)."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Classification on Hydrolysis",
          content: "1. **Monosaccharides:** Cannot be hydrolysed further (Glucose, Fructose, Ribose).\n2. **Oligosaccharides:** Yield 2-10 monosaccharide units (Sucrose, Maltose, Lactose).\n3. **Polysaccharides:** Yield large number of units. Non-sugars (Starch, Cellulose, Glycogen)."
        },
        {
          id: "core-2",
          type: "theory",
          title: "Reducing vs Non-Reducing",
          content: "**Reducing Sugars:** Reduce Fehling's and Tollens' reagents. Have free aldehydic/ketonic group. (All monosaccharides, Maltose, Lactose).\n**Non-Reducing:** Functional groups are bonded in glycosidic linkage (Sucrose)."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Identify",
          content: "Which of the following is a non-reducing sugar?",
          options: [
            { id: "A", text: "Sucrose", isCorrect: true, explanation: "Both reducing groups involved in bond." },
            { id: "B", text: "Maltose", isCorrect: false, explanation: "Reducing sugar." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Is Gabriel phthalimide synthesis used for aromatic amines?", options: [{id: "A", text: "No", isCorrect: true, explanation: "Aryl halides don't undergo nucleophilic sub"}, {id: "B", text: "Yes", isCorrect: false, explanation: "Only aliphatic 1°"}]}
      ]
    },
    {
      id: "les-6-4-3-2",
      title: "Glucose: Structure Evidence",
      description: "Reactions of Glucose",
      icon: "GitMerge",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Heating glucose with HI gives:", options: [{id: "A", text: "n-hexane", isCorrect: true, explanation: "Proves 6 carbons in straight chain."}, {id: "B", text: "Gluconic acid", isCorrect: false, explanation: "Oxidation product."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Chemical Evidence for Open Chain",
          content: "1. **HI/Heat:** Forms n-hexane (Straight chain).\n2. **NH₂OH & HCN:** Forms oxime & cyanohydrin (Confirms Carbonyl group).\n3. **Bromine Water:** Oxidises to Gluconic acid (Confirms Aldehyde).\n4. **Acetic Anhydride:** Forms Pentaacetate (Confirms 5 -OH groups).\n5. **Nitric Acid ($HNO_3$):** Oxidises to Saccharic acid (Confirms primary alcoholic group at bottom)."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Confirmation",
          content: "What reagent confirms that the carbonyl group is an aldehyde?",
          options: [
            { id: "A", text: "Bromine water", isCorrect: true, explanation: "Mild oxidising agent only affects aldehydes." },
            { id: "B", text: "HCN", isCorrect: false, explanation: "Reacts with both aldehydes and ketones." }
          ]
        },
        {
          id: "pyq-1",
          type: "quiz",
          title: "NEET PYQ",
          content: "D-Glucose on reaction with Bromine water yields:",
          options: [
            { id: "A", text: "Gluconic acid", isCorrect: true, explanation: "Monocarboxylic acid." },
            { id: "B", text: "Saccharic acid", isCorrect: false, explanation: "Requires HNO3." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Sandmeyer uses?", options: [{id: "A", text: "Cu2Cl2 / HCl", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Cu powder / HCl", isCorrect: false, explanation: "Gatterman"}]}
      ]
    },
    {
      id: "les-6-4-3-3",
      title: "Glucose: Cyclic Structure",
      description: "Anomers and Mutarotation",
      icon: "RefreshCw",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Why was a cyclic structure proposed for glucose?", options: [{id: "A", text: "It fails Schiff's test and doesn't form NaHSO3 addition product", isCorrect: true, explanation: "Aldehyde is not totally free."}, {id: "B", text: "It forms an oxime", isCorrect: false, explanation: "Open chain explains this."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Cyclic Hemiacetal",
          content: "-OH at C5 adds to the -CHO group forming a 6-membered ring (Pyranose).\n- Exists in two crystalline forms: $\\alpha$ and $\\beta$.\n- **Anomers:** Stereoisomers differing only at C1 (Anomeric carbon).\n  - $\\alpha$-form: -OH on C1 is on the right (down in Haworth).\n  - $\\beta$-form: -OH on C1 is on the left (up in Haworth)."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Haworth Projection",
          content: "Alpha vs Beta forms.",
          interactiveCanvasId: "bio-glucose-cyclic"
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "The two cyclic hemiacetal forms of glucose differ only in the configuration of the hydroxyl group at C1, called ___ carbon.",
          blankAnswer: "anomeric"
        },
        {
          id: "trap-1",
          type: "quiz",
          title: "Spot the Error",
          content: "Do alpha and beta glucose represent D and L forms?",
          options: [
            { id: "A", text: "No", isCorrect: true, explanation: "They are anomers (diastereomers), not enantiomers." },
            { id: "B", text: "Yes", isCorrect: false, explanation: "D and L refer to lowest chiral carbon." }
          ]
        }
      ]
    },
    {
      id: "les-6-4-3-4",
      title: "Fructose & Disaccharides",
      description: "Glycosidic Linkages",
      icon: "Link",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Fructose",
          content: "Ketohexose. Naturally D-(-)-fructose. Forms a 5-membered cyclic hemiketal (Furanose ring) by C2-C5 linkage."
        },
        {
          id: "core-2",
          type: "theory",
          title: "Disaccharides",
          content: "Linked by **Glycosidic Linkage** (oxide linkage formed by loss of water).\n1. **Sucrose (Invert Sugar):** $\\alpha$-D-Glucose(C1) - $\\beta$-D-Fructose(C2). Non-reducing.\n2. **Maltose:** $\\alpha$-D-Glucose(C1) - $\\alpha$-D-Glucose(C4). Reducing.\n3. **Lactose (Milk Sugar):** $\\beta$-D-Galactose(C1) - $\\beta$-D-Glucose(C4). Reducing."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Invert Sugar",
          content: "Hydrolysis of sucrose (dextro) gives a mixture that is:",
          options: [
            { id: "A", text: "Laevorotatory", isCorrect: true, explanation: "Laevo rotation of fructose (-92.4) > Dextro of glucose (+52.5)." },
            { id: "B", text: "Dextrorotatory", isCorrect: false, explanation: "Incorrect." }
          ]
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Linkage Match",
          content: "Which linkage is present in Lactose?",
          options: [
            { id: "A", text: "β-D-Galactose C1 to β-D-Glucose C4", isCorrect: true, explanation: "Correct." },
            { id: "B", text: "α-D-Glucose C1 to α-D-Glucose C4", isCorrect: false, explanation: "Maltose." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Secondary amines with Hinsberg reagent give?", options: [{id: "A", text: "Alkali insoluble product", isCorrect: true, explanation: "No acidic H."}, {id: "B", text: "Alkali soluble product", isCorrect: false, explanation: "1° amine"}]}
      ]
    },
    {
      id: "les-6-4-3-5",
      title: "Polysaccharides",
      description: "Starch, Cellulose, Glycogen",
      icon: "Layers",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Starch",
          content: "Storage in plants. Polymer of $\\alpha$-D-glucose.\n- **Amylose (15-20%):** Water soluble, unbranched. C1-C4 linkage.\n- **Amylopectin (80-85%):** Water insoluble, branched. Chain C1-C4, Branching C1-C6."
        },
        {
          id: "core-2",
          type: "theory",
          title: "Cellulose & Glycogen",
          content: "**Cellulose:** Plant cell wall. Straight chain of **$\\beta$-D-glucose** (C1-C4 linkage).\n**Glycogen:** Animal starch (liver, muscles). Highly branched structure similar to amylopectin."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Structural Difference",
          content: "Cellulose is made of:",
          options: [
            { id: "A", text: "β-D-Glucose", isCorrect: true, explanation: "Beta linkages make it rigid and indigestible for humans." },
            { id: "B", text: "α-D-Glucose", isCorrect: false, explanation: "Starch/Glycogen." }
          ]
        }
      ]
    },
    {
      id: "les-6-4-3-6",
      title: "Amino Acids",
      description: "Zwitter Ions & Isoelectric",
      icon: "Plus",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Except Glycine, all naturally occurring alpha-amino acids are:", options: [{id: "A", text: "Optically active", isCorrect: true, explanation: "Chiral alpha carbon."}, {id: "B", text: "Optically inactive", isCorrect: false, explanation: "Glycine has 2 H's."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Amino Acids",
          content: "Contain Amino (-NH₂) and Carboxyl (-COOH) groups. Proteins are polymers of $\\alpha$-amino acids (L-configuration).\n\n**Zwitter Ion:** In aqueous solution, -COOH loses $H^+$ and -NH₂ accepts it $\\to$ Dipolar, neutral ion ($H_3N^+-CH(R)-COO^-$). Amphoteric behaviour.\n\n**Essential Amino Acids:** Cannot be synthesized in body (e.g., Valine, Leucine). Must be in diet."
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "Amino acids are usually colourless, crystalline solids and behave like ___ rather than simple amines or carboxylic acids.",
          blankAnswer: "salts"
        },
        {
          id: "pyq-1",
          type: "quiz",
          title: "NEET PYQ",
          content: "Which of the following is an essential amino acid?",
          options: [
            { id: "A", text: "Valine", isCorrect: true, explanation: "Marked with asterisk in NCERT table." },
            { id: "B", text: "Glycine", isCorrect: false, explanation: "Non-essential." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "D and L configurations in carbs relate to?", options: [{id: "A", text: "Glyceraldehyde", isCorrect: true, explanation: "Relative configuration"}, {id: "B", text: "Optical rotation", isCorrect: false, explanation: "(+) and (-)"}]}
      ]
    },
    {
      id: "les-6-4-3-7",
      title: "Proteins & Peptide Bond",
      description: "Primary & Secondary Structure",
      icon: "GitBranch",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Peptide Linkage",
          content: "Amide bond (-CO-NH-) formed between -COOH of one amino acid and -NH₂ of another, releasing water."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Peptide Bond",
          content: "Visual of H2O elimination.",
          interactiveCanvasId: "bio-peptide"
        },
        {
          id: "core-2",
          type: "theory",
          title: "Structures (1° and 2°)",
          content: "**Primary (1°):** Specific sequence of amino acids.\n**Secondary (2°):** Shape of long chain. Stabilized by **H-bonds**.\n- **$\\alpha$-Helix:** Right-handed screw, intramolecular H-bonds between C=O and N-H.\n- **$\\beta$-Pleated Sheet:** Stretched out, laid side-by-side, intermolecular H-bonds."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Bonds",
          content: "Secondary structure is stabilized primarily by:",
          options: [
            { id: "A", text: "Hydrogen Bonds", isCorrect: true, explanation: "Between amide groups." },
            { id: "B", text: "Disulfide linkages", isCorrect: false, explanation: "More important for tertiary." }
          ]
        }
      ]
    },
    {
      id: "les-6-4-3-8",
      title: "Proteins 3°/4° & Denaturation",
      description: "Folding & Loss of Activity",
      icon: "Globe",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Tertiary & Quaternary",
          content: "**Tertiary (3°):** Overall folding of 2° structure. Gives Fibrous (Keratin, Myosin) or Globular (Insulin, Albumin) shapes. Stabilized by H-bonds, disulphide, van der Waals, electrostatic.\n**Quaternary (4°):** Spatial arrangement of multiple sub-units."
        },
        {
          id: "core-2",
          type: "theory",
          title: "Denaturation",
          content: "Physical/Chemical change (temp/pH) disrupts H-bonds. Globules unfold, helix uncoils $\\to$ Loss of biological activity.\n**Crucial:** 2° and 3° structures are destroyed, but **Primary structure remains intact**.\nExamples: Coagulation of egg white, curdling of milk."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Intact Structure",
          content: "During denaturation, which structure is unaffected?",
          options: [
            { id: "A", text: "Primary", isCorrect: true, explanation: "Sequence of amino acids does not break." },
            { id: "B", text: "Secondary", isCorrect: false, explanation: "H-bonds break." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Is amylopectin water soluble?", options: [{id: "A", text: "No", isCorrect: true, explanation: "Insoluble, branched"}, {id: "B", text: "Yes", isCorrect: false, explanation: "Amylose is soluble"}]}
      ]
    },
    {
      id: "les-6-4-3-9",
      title: "Enzymes & Vitamins",
      description: "Biocatalysts & Deficiencies",
      icon: "Activity",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Enzymes",
          content: "Biocatalysts (mostly globular proteins). Highly specific. Reduce activation energy. Named ending in '-ase' (e.g., Maltase)."
        },
        {
          id: "core-2",
          type: "theory",
          title: "Vitamins",
          content: "**Fat Soluble:** A, D, E, K. Stored in liver/adipose tissue.\n**Water Soluble:** B complex, C. Must be supplied regularly (excreted in urine). *Exception:* Vitamin B₁₂ is stored.\n\n**Diseases:**\n- A: Night blindness, Xerophthalmia.\n- B1 (Thiamine): Beri beri.\n- B12: Pernicious anaemia.\n- C (Ascorbic acid): Scurvy.\n- D: Rickets, Osteomalacia."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Storage",
          content: "Which water-soluble vitamin can be stored in the body?",
          options: [
            { id: "A", text: "Vitamin B12", isCorrect: true, explanation: "Exception to the rule." },
            { id: "B", text: "Vitamin C", isCorrect: false, explanation: "Must be taken regularly." }
          ]
        }
      ]
    },
    {
      id: "les-6-4-3-10",
      title: "Nucleic Acids & Hormones",
      description: "DNA/RNA Structure",
      icon: "Menu",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Nucleic Acids",
          content: "Polynucleotides. Components: Pentose Sugar + Phosphoric acid + Nitrogen Base.\n- **DNA:** $\\beta$-D-2-deoxyribose. Bases: A, G (Purines); C, **T** (Pyrimidines).\n- **RNA:** $\\beta$-D-ribose. Bases: A, G; C, **U**.\n\n**Nucleoside:** Base + Sugar (C1).\n**Nucleotide:** Base + Sugar + Phosphate (C5).\nLinkage: Phosphodiester linkage (between 5' and 3')."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "DNA Pairing",
          content: "A=T (2 H-bonds), G≡C (3 H-bonds).",
          interactiveCanvasId: "bio-dna"
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Base Check",
          content: "Which base is present in RNA but not in DNA?",
          options: [
            { id: "A", text: "Uracil (U)", isCorrect: true, explanation: "Replaces Thymine." },
            { id: "B", text: "Thymine (T)", isCorrect: false, explanation: "In DNA." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Deficiency of Vitamin C causes?", options: [{id: "A", text: "Scurvy", isCorrect: true, explanation: "Bleeding gums"}, {id: "B", text: "Beri beri", isCorrect: false, explanation: "B1"}]}
      ]
    }
  ]
};