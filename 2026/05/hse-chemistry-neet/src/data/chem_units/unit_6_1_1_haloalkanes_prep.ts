import { Unit } from '../../types';

export const UNIT_6_1_1: Unit = {
  id: "unit-6-1-1",
  title: "Prep & Properties",
  description: "Classification, Naming & Preparation",
  color: "duo-indigo",
  lessons: [
    {
      id: "les-6-1-1-1",
      title: "Classification",
      description: "Based on Hybridisation",
      icon: "Grid",
      slides: [
        { id: "init-1", type: "quiz", title: "Brain Warm-up", content: "In alkyl halides, the halogen is attached to:", options: [{id: "A", text: "sp3 Carbon", isCorrect: true, explanation: "Saturated carbon."}, {id: "B", text: "sp2 Carbon", isCorrect: false, explanation: "That's Vinylic/Aryl."}] },
        { id: "init-2", type: "quiz", title: "Brain Warm-up", content: "Allylic halides have halogen on:", options: [{id: "A", text: "Carbon next to C=C", isCorrect: true, explanation: "Allylic position."}, {id: "B", text: "Carbon of C=C", isCorrect: false, explanation: "Vinylic position."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Classification of Halides",
          content: "1. **Alkyl ($sp^3$):** Primary ($1^\\circ$), Secondary ($2^\\circ$), Tertiary ($3^\\circ$).\n2. **Allylic ($sp^3$):** Halogen on C adjacent to $C=C$.\n3. **Benzylic ($sp^3$):** Halogen on C adjacent to Benzene ring.\n4. **Vinylic ($sp^2$):** Halogen on C of $C=C$.\n5. **Aryl ($sp^2$):** Halogen directly on Benzene ring."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Visualizing Types",
          content: "Explore the different structural types.",
          interactiveCanvasId: "halo-classification"
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "In vinylic halides, the halogen atom is bonded to an ___ hybridised carbon atom.",
          blankAnswer: "sp2"
        },
        {
          id: "ar-1",
          type: "quiz",
          title: "Assertion-Reason",
          content: "**Assertion:** Chlorobenzene is an aryl halide.\n**Reason:** The halogen atom is bonded to an sp2 hybridised carbon atom of an aromatic ring.",
          options: [
            { id: "A", text: "Both True, R explains A", isCorrect: true, explanation: "Definition of Aryl halide." },
            { id: "B", text: "Both False", isCorrect: false, explanation: "Incorrect." }
          ]
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Identification",
          content: "Structure $CH_2=CH-CH_2-Cl$ is:",
          options: [
            { id: "A", text: "Allylic Halide", isCorrect: true, explanation: "Cl on sp3 C next to double bond." },
            { id: "B", text: "Vinylic Halide", isCorrect: false, explanation: "Cl would be on C=C." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Hybridisation of C in Methane?", options: [{id: "A", text: "sp3", isCorrect: true, explanation: "Tetrahedral"}, {id: "B", text: "sp2", isCorrect: false, explanation: "Planar"}]}
      ]
    },
    {
      id: "les-6-1-1-2",
      title: "Nomenclature",
      description: "IUPAC Rules",
      icon: "Type",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Common name of Chloroethane?", options: [{id: "A", text: "Ethyl Chloride", isCorrect: true, explanation: "Alkyl + Halide."}, {id: "B", text: "Chloroethyl", isCorrect: false, explanation: "No."}] },
        { id: "init-2", type: "quiz", title: "Concept", content: "Gem-dihalides have halogens on:", options: [{id: "A", text: "Same Carbon", isCorrect: true, explanation: "Geminal."}, {id: "B", text: "Adjacent Carbons", isCorrect: false, explanation: "Vicinal."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Nomenclature",
          content: "**Common:** Alkyl halide (e.g., n-Propyl bromide).\n**IUPAC:** Haloalkane (e.g., 1-Bromopropane).\n\n**Dihalides:**\n- **Geminal (gem):** Both on same C (Alkylidene halide).\n- **Vicinal (vic):** On adjacent C's (Alkylene dihalide)."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Check",
          content: "IUPAC name of $(CH_3)_3C-Br$?",
          options: [
            { id: "A", text: "2-Bromo-2-methylpropane", isCorrect: true, explanation: "Longest chain 3 carbons." },
            { id: "B", text: "tert-Butyl bromide", isCorrect: false, explanation: "Common name." }
          ]
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Dihalide Naming",
          content: "Common name for $CH_3-CH(Cl)_2$?",
          options: [
            { id: "A", text: "Ethylidene chloride", isCorrect: true, explanation: "Gem-dihalide." },
            { id: "B", text: "Ethylene dichloride", isCorrect: false, explanation: "Vic-dihalide (CH2Cl-CH2Cl)." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Priority order: -OH vs -X?", options: [{id: "A", text: "-OH > -X", isCorrect: true, explanation: "Alcohol is functional group"}, {id: "B", text: "-X > -OH", isCorrect: false, explanation: "Halogen is prefix"}]}
      ]
    },
    {
      id: "les-6-1-1-3",
      title: "Nature of C-X Bond",
      description: "Polarity & Dipole Moment",
      icon: "Magnet",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "C-X bond is:", options: [{id: "A", text: "Polar", isCorrect: true, explanation: "X is electronegative."}, {id: "B", text: "Non-polar", isCorrect: false, explanation: "Incorrect."}] },
        { id: "init-2", type: "quiz", title: "Concept", content: "Strongest bond?", options: [{id: "A", text: "C-F", isCorrect: true, explanation: "Shortest, high energy."}, {id: "B", text: "C-I", isCorrect: false, explanation: "Longest, weak."}] },
        {
          id: "core-1",
          type: "theory",
          title: "C-X Bond Properties",
          content: "Halogens are more electronegative than C $\\to$ Bond is polar ($C^{\\delta+} - X^{\\delta-}$).\n\n**Trends:**\n- **Bond Length:** $C-F < C-Cl < C-Br < C-I$\n- **Bond Enthalpy:** $C-F > C-Cl > C-Br > C-I$\n- **Dipole Moment:** $CH_3Cl > CH_3F > CH_3Br > CH_3I$. (Exception: Cl has highest dipole due to optimal bond length/charge product)."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Bond Polarity",
          content: "Visual of dipole vectors.",
          interactiveCanvasId: "halo-bond-polarity"
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Dipole Order",
          content: "Why is dipole moment of $CH_3Cl$ greater than $CH_3F$?",
          options: [
            { id: "A", text: "Longer bond length of C-Cl compensates for lower charge", isCorrect: true, explanation: "Dipole = q * d. d increases more significant." },
            { id: "B", text: "Chlorine is more electronegative", isCorrect: false, explanation: "F is more electronegative." }
          ]
        },
        {
          id: "pyq-1",
          type: "quiz",
          title: "NEET PYQ",
          content: "Which C-X bond has the highest bond dissociation enthalpy?",
          options: [
            { id: "A", text: "C-F", isCorrect: true, explanation: "Small size, strong overlap." },
            { id: "B", text: "C-Cl", isCorrect: false, explanation: "Weaker than F." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Electronegativity trend down group?", options: [{id: "A", text: "Decreases", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Increases", isCorrect: false, explanation: "No"}]}
      ]
    },
    {
      id: "les-6-1-1-4",
      title: "Prep from Alcohols",
      description: "Substitution Reactions",
      icon: "Beaker",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Reagent used to convert Alcohol to Alkyl Chloride?", options: [{id: "A", text: "SOCl2", isCorrect: true, explanation: "Preferred."}, {id: "B", text: "Cl2", isCorrect: false, explanation: "Need catalyst/light, not for alcohol."}] },
        {
          id: "core-1",
          type: "theory",
          title: "From Alcohols",
          content: "Replacement of -OH by -X.\n1. **Lucas Reagent:** $HCl + ZnCl_2$. Order: $3^\\circ > 2^\\circ > 1^\\circ$.\n2. **Phosphorus Halides:** $PCl_3, PCl_5$. (Yields POCl3/H3PO3).\n3. **Thionyl Chloride ($SOCl_2$):** **Best method** because byproducts ($SO_2, HCl$) are escapable gases $\\to$ Pure product."
        },
        {
          id: "sol-1",
          type: "solution",
          title: "Reaction",
          content: "$R-OH + SOCl_2 \\to$ ?",
          interactiveSteps: [
            { stepText: "$R-Cl$" },
            { stepText: "$+ SO_2 (g) + HCl (g)$" }
          ]
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "The reaction of primary and secondary alcohols with HCl requires the presence of a catalyst, ___.",
          blankAnswer: "zncl2"
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Application",
          content: "Does this method work for Phenol?",
          options: [
            { id: "A", text: "No", isCorrect: true, explanation: "C-O bond in phenol has partial double bond character (Resonance)." },
            { id: "B", text: "Yes", isCorrect: false, explanation: "Only for alkyl alcohols." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Lucas test distinguishes?", options: [{id: "A", text: "Alcohols", isCorrect: true, explanation: "1, 2, 3 degree"}, {id: "B", text: "Amines", isCorrect: false, explanation: "Hinsberg test"}]}
      ]
    },
    {
      id: "les-6-1-1-5",
      title: "Prep from Hydrocarbons",
      description: "Free Radical & Electrophilic",
      icon: "Zap",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Free radical chlorination gives:", options: [{id: "A", text: "Mixture of isomers", isCorrect: true, explanation: "Low selectivity."}, {id: "B", text: "Single product", isCorrect: false, explanation: "Rarely."}] },
        {
          id: "core-1",
          type: "theory",
          title: "From Hydrocarbons",
          content: "1. **Free Radical Halogenation:** Alkanes + $Cl_2/UV$. Gives mixture of mono/poly halides. Difficult to separate.\n2. **Electrophilic Substitution:** Toluene + $X_2 (Fe/FeCl_3) \\to$ o- and p-halotoluene. (Ortho/Para isomers separated by MP diff). iodine requires $HNO_3$ to oxidise HI formed."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "EAS Mechanism",
          content: "Mechanism of halogenation of benzene.",
          interactiveCanvasId: "hydrocarbon-mechanism-eas"
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Iodination",
          content: "Why is oxidising agent like $HNO_3$ needed for iodination?",
          options: [
            { id: "A", text: "To oxidise HI formed", isCorrect: true, explanation: "Reaction is reversible; HI is strong reducing agent." },
            { id: "B", text: "To catalyst reaction", isCorrect: false, explanation: "Incorrect." }
          ]
        },
        {
          id: "pyq-1",
          type: "quiz",
          title: "NEET PYQ",
          content: "Sandmeyer's reaction uses:",
          options: [
            { id: "A", text: "Cu2X2 (Cuprous halide)", isCorrect: true, explanation: "Converts Diazonium salt to Haloarene." },
            { id: "B", text: "Cu powder", isCorrect: false, explanation: "That is Gattermann reaction." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Most stable radical?", options: [{id: "A", text: "Tertiary", isCorrect: true, explanation: "3 > 2 > 1"}, {id: "B", text: "Primary", isCorrect: false, explanation: "Least"}]}
      ]
    },
    {
      id: "les-6-1-1-6",
      title: "Prep from Alkenes",
      description: "Addition of HX",
      icon: "PlusCircle",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Addition of HX to alkene follows:", options: [{id: "A", text: "Markovnikov Rule", isCorrect: true, explanation: "H to C with more H."}, {id: "B", text: "Saytzeff Rule", isCorrect: false, explanation: "Elimination."}] },
        {
          id: "core-1",
          type: "theory",
          title: "From Alkenes",
          content: "1. **Addition of HX:** $C=C + HX \\to$ Alkyl Halide. \n   - Markovnikov: Halogen to C with less H.\n   - Anti-Markovnikov (Kharasch): Only HBr + Peroxide.\n2. **Addition of Halogen:** $C=C + Br_2 (CCl_4) \\to$ Vic-dibromide. (Test for unsaturation - Red/Orange color discharges)."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Markovnikov",
          content: "Visualizing proton attack.",
          interactiveCanvasId: "hydrocarbon-mechanism-markovnikov"
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "Addition of bromine in CCl4 to an alkene resulting in discharge of reddish brown colour is a test for ___.",
          blankAnswer: "unsaturation"
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Application",
          content: "Propene + HBr + Peroxide $\\to$ ?",
          options: [
            { id: "A", text: "1-Bromopropane", isCorrect: true, explanation: "Anti-Markovnikov." },
            { id: "B", text: "2-Bromopropane", isCorrect: false, explanation: "Markovnikov." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Carbocation shape?", options: [{id: "A", text: "Planar", isCorrect: true, explanation: "sp2"}, {id: "B", text: "Tetrahedral", isCorrect: false, explanation: "sp3"}]}
      ]
    },
    {
      id: "les-6-1-1-7",
      title: "Halogen Exchange",
      description: "Finkelstein & Swarts",
      icon: "RefreshCw",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Can we prepare Alkyl Iodides directly from alcohols easily?", options: [{id: "A", text: "No", isCorrect: true, explanation: "Low yield/reversibility."}, {id: "B", text: "Yes", isCorrect: false, explanation: "Direct iodination is tough."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Halogen Exchange Reactions",
          content: "1. **Finkelstein Reaction:** Prep of Alkyl Iodides.\n   $R-X + NaI \\xrightarrow{\\text{dry acetone}} R-I + NaX \\downarrow$\n   (Driven by precipitation of NaCl/NaBr).\n2. **Swarts Reaction:** Prep of Alkyl Fluorides.\n   $R-Br + AgF/Hg_2F_2/CoF_2/SbF_3 \\to R-F$."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Finkelstein",
          content: "Why is dry acetone used?",
          options: [
            { id: "A", text: "To precipitate NaCl/NaBr", isCorrect: true, explanation: "Le Chatelier principle shifts eq forward." },
            { id: "B", text: "To dissolve NaI", isCorrect: false, explanation: "NaI is soluble, but product salts are not." }
          ]
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Identify Reaction",
          content: "$CH_3Br + AgF \\to CH_3F + AgBr$. Name?",
          options: [
            { id: "A", text: "Swarts Reaction", isCorrect: true, explanation: "Synthesis of Fluorides." },
            { id: "B", text: "Wurtz Reaction", isCorrect: false, explanation: "Coupling." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Le Chatelier Principle applies to?", options: [{id: "A", text: "Equilibrium", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Kinetics", isCorrect: false, explanation: "No"}]}
      ]
    },
    {
      id: "les-6-1-1-8",
      title: "Physical Properties",
      description: "BP, MP & Solubility",
      icon: "Thermometer",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Physical Properties",
          content: "**Boiling Point:** Increases with size (R-I > R-Br > R-Cl). Increases with chain length. **Decreases with branching** (Surface area decreases).\n**Melting Point:** Para-isomers have higher MP than ortho/meta due to **symmetry** (better crystal packing).\n**Density:** Increases with mass of halogen.\n**Solubility:** Slightly soluble in water (Can't form H-bonds effectively)."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Boiling Point",
          content: "Which has lower BP: n-Butyl bromide or tert-Butyl bromide?",
          options: [
            { id: "A", text: "tert-Butyl bromide", isCorrect: true, explanation: "Spherical shape, less surface area." },
            { id: "B", text: "n-Butyl bromide", isCorrect: false, explanation: "Linear, high surface area." }
          ]
        },
        {
          id: "ar-1",
          type: "quiz",
          title: "Assertion-Reason",
          content: "**Assertion:** p-Dichlorobenzene has higher MP than o-isomer.\n**Reason:** p-isomer fits better in crystal lattice due to symmetry.",
          options: [
            { id: "A", text: "Both True, R explains A", isCorrect: true, explanation: "Symmetry leads to compact packing." },
            { id: "B", text: "Both False", isCorrect: false, explanation: "Incorrect." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "H-bonding condition?", options: [{id: "A", text: "H with F, O, N", isCorrect: true, explanation: "Correct"}, {id: "B", text: "H with C", isCorrect: false, explanation: "No"}]}
      ]
    }
  ]
};