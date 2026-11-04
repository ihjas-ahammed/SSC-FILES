import { Unit } from '../../types';

export const UNIT_3_4_1: Unit = {
  id: "unit-3-4-1",
  title: "Coordination Basics",
  description: "Werner’s Theory, Terms & Nomenclature",
  color: "duo-violet",
  lessons: [
    {
      id: "les-3-4-1-1",
      title: "Werner's Theory",
      description: "Primary & Secondary Valency",
      icon: "Circle",
      slides: [
        {
          id: "anc-1",
          type: "theory",
          title: "Werner's Postulates",
          content: "Alfred Werner (1898) proposed that metals in coordination compounds show two types of linkages:\n\n1. **Primary Valency:** Ionisable, satisfied by negative ions. Corresponds to **Oxidation State**.\n2. **Secondary Valency:** Non-ionisable, satisfied by neutral molecules or negative ions. Corresponds to **Coordination Number**. Fixed for a metal."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Visualizing Valency",
          content: "Example: $CoCl_3 \\cdot 6NH_3$. \nSecondary Valency = 6 ($NH_3$). Primary Valency = 3 ($Cl^-$).\nStructure: $[Co(NH_3)_6]Cl_3$.",
          interactiveCanvasId: "coordination-werner"
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "The secondary valences are directed towards fixed positions in space and determine the ___ of the complex.",
          blankAnswer: "geometry"
        },
        {
          id: "ar-1",
          type: "quiz",
          title: "Assertion-Reason",
          content: "**Assertion:** In $[Co(NH_3)_6]Cl_3$, addition of $AgNO_3$ precipitates 3 moles of AgCl.\n**Reason:** All three chloride ions satisfy primary valency and are ionisable.",
          options: [
            { id: "A", text: "Both True, R explains A", isCorrect: true, explanation: "Primary valency ions are outside the sphere." },
            { id: "B", text: "Both False", isCorrect: false, explanation: "Incorrect." }
          ]
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Application",
          content: "Which complex gives NO precipitate with $AgNO_3$?",
          options: [
            { id: "A", text: "$CoCl_3 \\cdot 3NH_3$", isCorrect: true, explanation: "Structure is $[Co(NH_3)_3Cl_3]$. No ionisable Cl." },
            { id: "B", text: "$CoCl_3 \\cdot 4NH_3$", isCorrect: false, explanation: "Gives 1 AgCl (trans/cis isomer)." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Oxidation state of Cr in $K_2Cr_2O_7$?", options: [{id: "A", text: "+6", isCorrect: true, explanation: "Correct"}, {id: "B", text: "+3", isCorrect: false, explanation: "Stable ion"}]}
      ]
    },
    {
      id: "les-3-4-1-2",
      title: "Coordination Terms I",
      description: "Entities & Ligands",
      icon: "Hexagon",
      slides: [
        {
          id: "anc-1",
          type: "theory",
          title: "Definitions",
          content: "**Coordination Entity:** Central metal atom/ion bonded to a fixed number of ions/molecules.\n**Central Atom/Ion:** The metal to which ligands are attached (Lewis Acid).\n**Ligands:** Ions/molecules bound to the central atom (Lewis Base).\n- **Unidentate:** One donor atom ($H_2O, NH_3, Cl^-$).\n- **Didentate:** Two donor atoms ($en, C_2O_4^{2-}$).\n- **Polydentate:** Several donor atoms ($EDTA^{4-}$ - hexadentate)."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Ligand Types",
          content: "Visualizing Unidentate vs Chelate Ligands.",
          interactiveCanvasId: "coordination-ligands"
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "When a di- or polydentate ligand uses its two or more donor atoms to bind a single metal ion, it is said to be a ___ ligand.",
          blankAnswer: "chelate"
        },
        {
          id: "ar-1",
          type: "quiz",
          title: "Assertion-Reason",
          content: "**Assertion:** Chelate complexes are more stable than similar unidentate complexes.\n**Reason:** Chelation increases entropy significantly (Chelate Effect).",
          options: [
            { id: "A", text: "Both True, R explains A", isCorrect: true, explanation: "Release of solvent molecules increases entropy." },
            { id: "B", text: "A True, R False", isCorrect: false, explanation: "Reason is correct thermodynamic explanation." }
          ]
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Ambidentate Ligand",
          content: "Which ligand can donate through two different atoms?",
          options: [
            { id: "A", text: "$NO_2^-$", isCorrect: true, explanation: "N (Nitro) or O (Nitrito)." },
            { id: "B", text: "$NH_3$", isCorrect: false, explanation: "Only N donates." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Is $Fe^{2+}$ a Lewis Acid?", options: [{id: "A", text: "Yes", isCorrect: true, explanation: "Electron pair acceptor"}, {id: "B", text: "No", isCorrect: false, explanation: "Incorrect"}]}
      ]
    },
    {
      id: "les-3-4-1-3",
      title: "Coordination Terms II",
      description: "CN, Sphere & Oxidation Number",
      icon: "Hash",
      slides: [
        {
          id: "anc-1",
          type: "theory",
          title: "Definitions Continued",
          content: "**Coordination Number (CN):** Number of ligand donor atoms bonded to metal.\n- $[PtCl_6]^{2-}$: CN = 6.\n- $[Ni(NH_3)_4]^{2+}$: CN = 4.\n- Note: $C_2O_4^{2-}$ counts as 2.\n\n**Coordination Sphere:** The square bracket entity.\n**Coordination Polyhedron:** Spatial arrangement (Octahedral, Tetrahedral, Square Planar).\n**Oxidation Number:** Charge on metal if ligands removed."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Polyhedra",
          content: "Visualizing Octahedral vs Tetrahedral shapes.",
          interactiveCanvasId: "coordination-shapes"
        },
        {
          id: "ret-1",
          type: "numerical",
          title: "Calculation",
          content: "Find Oxidation Number of Fe in $K_4[Fe(CN)_6]$. (K=+1, CN=-1).",
          numericAnswer: 2,
          numericTolerance: 0
        },
        {
          id: "sol-1",
          type: "solution",
          title: "Solution",
          content: "Calc.",
          interactiveSteps: [
            {stepText: "$4(+1) + x + 6(-1) = 0$"},
            {stepText: "$4 + x - 6 = 0$"},
            {stepText: "$x = +2$"}
          ]
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Coordination Number",
          content: "CN of Fe in $[Fe(C_2O_4)_3]^{3-}$?",
          options: [
            { id: "A", text: "6", isCorrect: true, explanation: "Oxalate is didentate. 3 x 2 = 6." },
            { id: "B", text: "3", isCorrect: false, explanation: "Count donor atoms, not molecules." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Shape of d-orbital?", options: [{id: "A", text: "Double Dumbbell", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Spherical", isCorrect: false, explanation: "s-orbital"}]}
      ]
    },
    {
      id: "les-3-4-1-4",
      title: "Nomenclature Rules I",
      description: "Writing Formulas",
      icon: "Edit3",
      slides: [
        {
          id: "anc-1",
          type: "theory",
          title: "Rules for Writing Formulas",
          content: "1. Central atom listed first.\n2. Ligands listed in **alphabetical order** (by first letter of formula/abbreviation).\n3. Formula enclosed in square brackets [ ].\n4. No space between ligand and metal.\n5. Charge indicated outside bracket as right superscript."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Concept Check",
          content: "In formula $[Pt(NH_3)_2Cl_2]$, which ligand is written first?",
          options: [
            { id: "A", text: "$NH_3$ (ammine)", isCorrect: false, explanation: "Wait, alphabetical by symbol? N vs C. C comes first? NCERT rule 2004 says alphabetical. Cl vs NH3? N vs C. C first. Let's check strictly." },
            { id: "B", text: "Strictly Alphabetical", isCorrect: true, explanation: "Polydentate also alphabetical. Formula writing follows alphabetical order of *ligand symbol* (e.g. H2O then NH3? No. N vs O. NH3 then H2O? No. H vs N? H comes first? Actually usually: Metal -> Anionic -> Neutral? No, that's old. New: Alphabetical by symbol)." }
          ]
        },
        {
           id: "correction",
           type: "theory",
           title: "Correction",
           content: "Actually, standard convention often puts neutral ligands before anionic, but IUPAC 2004 recommends **alphabetical ordering** of ligand symbols.\nExample: $[PtCl_2(NH_3)_2]$." 
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Identify Correct",
          content: "Correct formula for Potassium hexacyanidoferrate(II)?",
          options: [
            { id: "A", text: "$K_4[Fe(CN)_6]$", isCorrect: true, explanation: "Fe(II) means +2. CN is -1. Sphere is -4. Needs 4 K+." },
            { id: "B", text: "$K_3[Fe(CN)_6]$", isCorrect: false, explanation: "This is Ferrate(III)." }
          ]
        }
      ]
    },
    {
      id: "les-3-4-1-5",
      title: "Nomenclature Rules II",
      description: "Naming Compounds",
      icon: "Type",
      slides: [
        {
          id: "anc-1",
          type: "theory",
          title: "Rules for Naming",
          content: "1. Cation named first.\n2. Ligands named alphabetically before metal.\n3. Anionic ligands end in **-o** (chlorido, cyanido). Neutral same (except aqua, ammine, carbonyl, nitrosyl).\n4. Prefixes: di, tri, tetra. If ligand name has prefix, use **bis, tris, tetrakis**.\n5. Oxidation state in Roman numeral.\n6. If complex is anion, metal ends in **-ate**."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Ligand Name",
          content: "IUPAC name for $H_2O$ ligand?",
          options: [
            { id: "A", text: "Aqua", isCorrect: true, explanation: "Correct." },
            { id: "B", text: "Hydrate", isCorrect: false, explanation: "Incorrect." }
          ]
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Metal Name",
          content: "Name of Fe in $[Fe(CN)_6]^{4-}$ (Anionic)?",
          options: [
            { id: "A", text: "Ferrate", isCorrect: true, explanation: "Anionic complex." },
            { id: "B", text: "Iron", isCorrect: false, explanation: "Used in cationic/neutral." }
          ]
        }
      ]
    },
    {
      id: "les-3-4-1-6",
      title: "Formula Practice",
      description: "Writing Names & Formulas",
      icon: "PenTool",
      slides: [
        {
          id: "q-1",
          type: "quiz",
          title: "Name This",
          content: "Name of $[Co(NH_3)_5Cl]Cl_2$?",
          options: [
            { id: "A", text: "Pentaamminechloridocobalt(III) chloride", isCorrect: true, explanation: "Alphabetical: Ammine then Chlorido. Co is +3." },
            { id: "B", text: "Chloridopentaamminecobalt(III) chloride", isCorrect: false, explanation: "Ammine starts with A." }
          ]
        },
        {
          id: "q-2",
          type: "quiz",
          title: "Formula Check",
          content: "Formula for Tetracarbonylnickel(0)?",
          options: [
            { id: "A", text: "$[Ni(CO)_4]$", isCorrect: true, explanation: "Neutral complex." },
            { id: "B", text: "$[Ni(CN)_4]^{2-}$", isCorrect: false, explanation: "Tetracyanidonickelate(II)." }
          ]
        },
        {
          id: "trap-1",
          type: "quiz",
          title: "Spot the Error",
          content: "Name of $[Pt(NH_3)_2Cl(NO_2)]$?",
          options: [
            { id: "A", text: "Diamminechloridonitrito-N-platinum(II)", isCorrect: true, explanation: "NO2 binds through N." },
            { id: "B", text: "Diamminechloridonitroplatinum(II)", isCorrect: false, explanation: "Nitro is old usage, specify N." }
          ]
        }
      ]
    }
  ]
};