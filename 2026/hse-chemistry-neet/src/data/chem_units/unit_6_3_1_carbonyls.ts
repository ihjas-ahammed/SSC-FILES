import { Unit } from '../../types';

export const UNIT_6_3_1: Unit = {
  id: "unit-6-3-1",
  title: "Aldehydes & Ketones",
  description: "Nomenclature, Prep & Properties",
  color: "duo-orange",
  lessons: [
    {
      id: "les-6-3-1-1",
      title: "Nomenclature & Structure",
      description: "Carbonyl Group Geometry",
      icon: "Hexagon",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept Check", content: "Aldehydes always have the carbonyl group at:", options: [{id: "A", text: "The terminal (end) carbon", isCorrect: true, explanation: "Bonded to at least one H."}, {id: "B", text: "An internal carbon", isCorrect: false, explanation: "That would be a ketone."}] },
        { id: "init-2", type: "quiz", title: "Concept Check", content: "The carbonyl carbon is hybridized as:", options: [{id: "A", text: "sp2", isCorrect: true, explanation: "Double bonded to Oxygen."}, {id: "B", text: "sp3", isCorrect: false, explanation: "No, it forms a pi bond."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Structure of Carbonyl Group",
          content: "The carbonyl carbon is **sp²-hybridised** and forms 3 sigma ($\\sigma$) bonds. The fourth electron forms a pi ($\\pi$) bond with oxygen.\n\n- **Geometry:** Trigonal coplanar (bond angles $\\approx 120^\\circ$).\n- **Polarity:** Oxygen is more electronegative, making the C=O bond polar. Carbon acts as an **electrophile** (Lewis acid) and oxygen as a **nucleophile** (Lewis base)."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Carbonyl Polarity",
          content: "Visualizing the trigonal planar geometry and dipole moment.",
          interactiveCanvasId: "carbonyl-structure"
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "Carbonyl compounds have substantial dipole moments and are more polar than ___.",
          blankAnswer: "ethers"
        },
        {
          id: "ar-1",
          type: "quiz",
          title: "Assertion-Reason",
          content: "**Assertion:** The carbonyl carbon is an electrophilic centre.\n**Reason:** The high electronegativity of oxygen polarises the carbon-oxygen double bond, leaving carbon electron-deficient.",
          options: [
            { id: "A", text: "Both True, R explains A", isCorrect: true, explanation: "Resonance structure shows C+ and O-." },
            { id: "B", text: "Both True, R does not explain A", isCorrect: false, explanation: "It is the exact explanation." }
          ]
        },
        {
          id: "app-1",
          type: "quiz",
          title: "IUPAC Naming",
          content: "IUPAC name of $CH_3-CH=CH-CHO$?",
          options: [
            { id: "A", text: "But-2-enal", isCorrect: true, explanation: "Numbering starts from CHO. Double bond at C2." },
            { id: "B", text: "But-3-enal", isCorrect: false, explanation: "Numbering must give CHO the lowest locant (1)." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "What is the hybridisation of carbon in an alcohol (R-OH)?", options: [{id: "A", text: "sp3", isCorrect: true, explanation: "All single bonds."}, {id: "B", text: "sp2", isCorrect: false, explanation: "No double bonds."}]}
      ]
    },
    {
      id: "les-6-3-1-2",
      title: "Preparation: General Methods",
      description: "From Alcohols & Hydrocarbons",
      icon: "Beaker",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept Check", content: "Oxidation of a 2° alcohol yields:", options: [{id: "A", text: "A ketone", isCorrect: true, explanation: "Cannot be oxidized to an aldehyde."}, {id: "B", text: "An aldehyde", isCorrect: false, explanation: "1° alcohols give aldehydes."}] },
        {
          id: "core-1",
          type: "theory",
          title: "General Preparation Methods",
          content: "1. **Oxidation of Alcohols:** 1° alcohol $\\xrightarrow{PCC/CrO_3}$ Aldehyde. 2° alcohol $\\to$ Ketone.\n2. **Dehydrogenation of Alcohols:** Vapours passed over heavy metal (Ag or Cu) at 573K. 1° $\\to$ Aldehyde, 2° $\\to$ Ketone.\n3. **Ozonolysis of Alkenes:** $O_3$ followed by $Zn/H_2O$ gives aldehydes/ketones depending on substitution.\n4. **Hydration of Alkynes:** Ethyne + $H_2O$ ($H_2SO_4/HgSO_4$) $\\to$ Acetaldehyde. All other alkynes give **ketones**."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Reagent Match",
          content: "Reagent used to convert primary alcohol to aldehyde without over-oxidizing to carboxylic acid?",
          options: [
            { id: "A", text: "PCC (Pyridinium chlorochromate)", isCorrect: true, explanation: "Mild oxidising agent." },
            { id: "B", text: "KMnO4", isCorrect: false, explanation: "Strong oxidising agent, forms acid." }
          ]
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Predict Product",
          content: "Hydration of Propyne in presence of $Hg^{2+}/H_2SO_4$ yields:",
          options: [
            { id: "A", text: "Acetone (Propanone)", isCorrect: true, explanation: "Follows Markovnikov rule -> enol -> ketone." },
            { id: "B", text: "Propanal", isCorrect: false, explanation: "Only ethyne gives an aldehyde." }
          ]
        },
        {
          id: "pyq-1",
          type: "quiz",
          title: "NEET PYQ Concept",
          content: "Ozonolysis of 2,3-Dimethylbut-2-ene followed by $Zn/H_2O$ produces:",
          options: [
            { id: "A", text: "Two moles of Acetone", isCorrect: true, explanation: "Cleavage of completely substituted C=C gives ketones." },
            { id: "B", text: "Acetaldehyde + Acetone", isCorrect: false, explanation: "Symmetric alkene." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Which reaction converts an alkyl halide to an ether?", options: [{id: "A", text: "Williamson Synthesis", isCorrect: true, explanation: "RX + RONa -> ROR"}, {id: "B", text: "Wurtz Reaction", isCorrect: false, explanation: "Forms alkanes."}]}
      ]
    },
    {
      id: "les-6-3-1-3",
      title: "Preparation: Aldehydes Only",
      description: "Name Reactions",
      icon: "Star",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept Check", content: "Rosenmund reduction uses which catalyst?", options: [{id: "A", text: "Pd on BaSO4", isCorrect: true, explanation: "Poisoned catalyst prevents over-reduction."}, {id: "B", text: "Zn-Hg / HCl", isCorrect: false, explanation: "Clemmensen reduction."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Aldehyde Specific Preps",
          content: "1. **Rosenmund Reduction:** Acyl chloride + $H_2$ ($Pd/BaSO_4$) $\\to$ Aldehyde.\n2. **Stephen Reaction:** Nitrile ($RCN$) + $SnCl_2/HCl$ $\\to$ Imine $\\xrightarrow{H_3O^+}$ Aldehyde.\n3. **DIBAL-H:** Reduces Nitriles and Esters selectively to Aldehydes (at low temp).\n4. **Etard Reaction:** Toluene + Chromyl chloride ($CrO_2Cl_2$) $\\to$ Chromium complex $\\xrightarrow{H_3O^+}$ Benzaldehyde.\n5. **Gatterman-Koch:** Benzene + $CO, HCl$ (Anhydrous $AlCl_3/CuCl$) $\\to$ Benzaldehyde."
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "Alternatively, nitriles are selectively reduced by diisobutylaluminium hydride, abbreviated as ___.",
          blankAnswer: "dibal-h"
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Reagent ID",
          content: "Which reagent converts an Ester directly into an Aldehyde?",
          options: [
            { id: "A", text: "DIBAL-H", isCorrect: true, explanation: "Selective reducing agent for esters/nitriles to aldehydes." },
            { id: "B", text: "NaBH4", isCorrect: false, explanation: "Does not reduce esters." }
          ]
        },
        {
          id: "pyq-1",
          type: "quiz",
          title: "NEET PYQ (Code 48)",
          content: "Identify the suitable reagent for the conversion: Methyl Benzoate $\\to$ Benzaldehyde.",
          options: [
            { id: "A", text: "(i) AlH(iBu)2, (ii) H2O", isCorrect: true, explanation: "This is the formula for DIBAL-H." },
            { id: "B", text: "H2 / Pd-BaSO4", isCorrect: false, explanation: "Rosenmund is for acyl chlorides, not esters." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Is an ether linkage cleaved by HCl?", options: [{id: "A", text: "No", isCorrect: true, explanation: "Requires HI or HBr."}, {id: "B", text: "Yes", isCorrect: false, explanation: "HCl is too unreactive."}]}
      ]
    },
    {
      id: "les-6-3-1-4",
      title: "Preparation: Ketones Only",
      description: "From Acyl Chlorides & Nitriles",
      icon: "Target",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept Check", content: "Reaction of Acid Chloride with Grignard reagent directly gives:", options: [{id: "A", text: "Tertiary Alcohol", isCorrect: true, explanation: "Grignard is too reactive and attacks the formed ketone."}, {id: "B", text: "Ketone", isCorrect: false, explanation: "Reaction doesn't stop at ketone."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Ketone Specific Preps",
          content: "1. **From Acyl Chlorides:** Treatment with **Dialkylcadmium** ($R_2Cd$).\n   $2 R'COCl + R_2Cd \\to 2 R'COR + CdCl_2$.\n   (Grignard is converted to $R_2Cd$ with $CdCl_2$ to prevent over-reaction to 3° alcohols).\n2. **From Nitriles:** Nitrile + Grignard Reagent $\\to$ Imine salt $\\xrightarrow{H_3O^+}$ Ketone.\n3. **Friedel-Crafts Acylation:** Benzene + $RCOCl$ / Anhyd $AlCl_3$ $\\to$ Alkyl phenyl ketone."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Why Cadmium?",
          content: "Dialkylcadmium is used instead of Grignard to prepare ketones from acid chlorides because:",
          options: [
            { id: "A", text: "It is less reactive and does not attack the ketone formed", isCorrect: true, explanation: "Stops the reaction at the ketone stage." },
            { id: "B", text: "It is a stronger nucleophile", isCorrect: false, explanation: "It is actually weaker." }
          ]
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Reaction Product",
          content: "Benzene + Acetyl chloride ($CH_3COCl$) in presence of anhydrous $AlCl_3$ yields:",
          options: [
            { id: "A", text: "Acetophenone", isCorrect: true, explanation: "Friedel-Crafts acylation." },
            { id: "B", text: "Toluene", isCorrect: false, explanation: "That would be alkylation with CH3Cl." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Is an aryl halide reactive towards nucleophilic substitution?", options: [{id: "A", text: "No", isCorrect: true, explanation: "Partial double bond character."}, {id: "B", text: "Yes", isCorrect: false, explanation: "Alkyl halides are."}]}
      ]
    },
    {
      id: "les-6-3-1-5",
      title: "Physical Props & Mech",
      description: "BP & Nucleophilic Addition",
      icon: "GitMerge",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept Check", content: "Aldehydes/Ketones have higher boiling points than:", options: [{id: "A", text: "Hydrocarbons & Ethers", isCorrect: true, explanation: "Due to dipole-dipole interactions."}, {id: "B", text: "Alcohols", isCorrect: false, explanation: "Alcohols have stronger H-bonds."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Physical Properties",
          content: "**Boiling Points:** Hydrocarbons < Ethers < Aldehydes/Ketones < Alcohols.\n**Solubility:** Lower members miscible with water (form H-bonds with water). Decreases as alkyl chain lengthens.\n\n**Nucleophilic Addition Mechanism:**\nNucleophile ($Nu^-$) attacks electrophilic sp² carbon perpendicular to the plane. Hybridisation changes to **sp³**, forming a tetrahedral alkoxide intermediate, which then captures a proton."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Addition Mechanism",
          content: "Visualizing the change from sp2 planar to sp3 tetrahedral.",
          interactiveCanvasId: "nu-addition-mech"
        },
        {
          id: "core-2",
          type: "theory",
          title: "Reactivity Order",
          content: "**Aldehydes > Ketones** towards nucleophilic attack.\n1. **Steric Factor:** Two large alkyl groups in ketones hinder the approach of the nucleophile.\n2. **Electronic Factor:** Alkyl groups release electrons (+I effect), reducing the electrophilicity of the carbonyl carbon in ketones."
        },
        {
          id: "ar-1",
          type: "quiz",
          title: "Assertion-Reason",
          content: "**Assertion:** Benzaldehyde is less reactive than Propanal in nucleophilic addition.\n**Reason:** Polarity of carbonyl group is reduced in benzaldehyde due to resonance.",
          options: [
            { id: "A", text: "Both True, R explains A", isCorrect: true, explanation: "Resonance donates electron density to the carbonyl carbon." },
            { id: "B", text: "Both False", isCorrect: false, explanation: "They are true." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Reimer-Tiemann reaction of Phenol yields?", options: [{id: "A", text: "Salicylaldehyde", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Salicylic acid", isCorrect: false, explanation: "Kolbe's reaction."}]}
      ]
    },
    {
      id: "les-6-3-1-6",
      title: "Nucleophilic Additions",
      description: "HCN, NaHSO3, Alcohols",
      icon: "PlusCircle",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept Check", content: "Reaction of Aldehyde with HCN yields:", options: [{id: "A", text: "Cyanohydrin", isCorrect: true, explanation: "Contains both -OH and -CN."}, {id: "B", text: "Hemiacetal", isCorrect: false, explanation: "Reaction with alcohol."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Important Additions",
          content: "1. **Addition of HCN:** Yields Cyanohydrins. Catalyzed by a base (generates stronger $CN^-$ nucleophile).\n2. **Addition of $NaHSO_3$:** Forms crystalline bisulphite addition product. Useful for **separation and purification** of aldehydes (water soluble, regenerates original compound with acid/base).\n3. **Addition of Alcohols:** Aldehydes + 1 eq ROH $\\to$ **Hemiacetal**. + 2 eq ROH $\\to$ **Acetal** (gem-dialkoxy compound, catalyzed by dry HCl gas). Ketones form Ketals with ethylene glycol."
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "The hydrogensulphite addition compound is useful for separation and ___ of aldehydes.",
          blankAnswer: "purification"
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Acetal Formation",
          content: "Role of dry HCl gas in acetal formation?",
          options: [
            { id: "A", text: "Protonates carbonyl oxygen, increasing electrophilicity of carbon", isCorrect: true, explanation: "Makes the carbon more susceptible to weak alcohol nucleophile attack." },
            { id: "B", text: "Acts as a solvent", isCorrect: false, explanation: "It is a catalyst." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Which alcohol is known as wood spirit?", options: [{id: "A", text: "Methanol", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Ethanol", isCorrect: false, explanation: "Grain spirit"}]}
      ]
    },
    {
      id: "les-6-3-1-7",
      title: "Ammonia Derivatives",
      description: "Addition-Elimination",
      icon: "Link",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept Check", content: "Reaction of carbonyls with ammonia derivatives produces a C=N double bond by eliminating:", options: [{id: "A", text: "Water", isCorrect: true, explanation: "Dehydration step follows addition."}, {id: "B", text: "Ammonia", isCorrect: false, explanation: "Ammonia derivative is the reactant."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Ammonia Derivatives ($H_2N-Z$)",
          content: "Nucleophilic addition followed by elimination of water (Reversible, acid catalyzed).\n\n- $+ NH_2OH$ (Hydroxylamine) $\\to$ **Oxime**.\n- $+ NH_2NH_2$ (Hydrazine) $\\to$ **Hydrazone**.\n- $+ PhNHNH_2$ (Phenylhydrazine) $\\to$ **Phenylhydrazone**.\n- $+ 2,4$-DNP $\\to$ **2,4-DNP derivative** (Yellow/orange/red ppt, used for characterization).\n- $+ NH_2NHCONH_2$ (Semicarbazide) $\\to$ **Semicarbazone**."
        },
        {
          id: "trap-1",
          type: "quiz",
          title: "Spot the Error",
          content: "Semicarbazide has two $-NH_2$ groups. Which one attacks the carbonyl carbon?",
          options: [
            { id: "A", text: "The terminal $-NH_2$ farthest from C=O", isCorrect: true, explanation: "The -NH2 near the carbonyl group is involved in resonance and its lone pair is not available." },
            { id: "B", text: "The $-NH_2$ directly attached to C=O", isCorrect: false, explanation: "Lone pair is delocalized." }
          ]
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Identification Test",
          content: "Brady's reagent (2,4-DNP) test gives a colored precipitate. It confirms the presence of:",
          options: [
            { id: "A", text: "Carbonyl group (Aldehyde/Ketone)", isCorrect: true, explanation: "General test for C=O." },
            { id: "B", text: "Carboxylic acid", isCorrect: false, explanation: "Acids do not form 2,4-DNP derivatives." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Anisole on cleavage with HI yields?", options: [{id: "A", text: "Phenol + Methyl Iodide", isCorrect: true, explanation: "O-Ph bond is strong."}, {id: "B", text: "Iodobenzene + Methanol", isCorrect: false, explanation: "No."}]}
      ]
    },
    {
      id: "les-6-3-1-8",
      title: "Oxidation Tests",
      description: "Tollens, Fehling & Haloform",
      icon: "Eye",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept Check", content: "Can mild oxidizing agents oxidize ketones?", options: [{id: "A", text: "No", isCorrect: true, explanation: "Ketones require strong agents and high temps (C-C cleavage)."}, {id: "B", text: "Yes", isCorrect: false, explanation: "Aldehydes are easily oxidized, ketones are not."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Distinguishing Aldehydes",
          content: "1. **Tollens' Test:** Ammoniacal $AgNO_3$. Aldehydes reduce $Ag^+$ to Ag (Silver mirror). Aldehyde $\\to$ Carboxylate anion.\n2. **Fehling's Test:** $Cu^{2+}$ complexed with tartrate. Aldehydes reduce $Cu^{2+}$ to $Cu_2O$ (Red-brown ppt). **Note:** Aromatic aldehydes do NOT respond to Fehling's."
        },
        {
          id: "core-2",
          type: "theory",
          title: "Haloform Reaction",
          content: "Test for **Methyl Ketones** (having $CH_3CO-$ group) or alcohols oxidizing to it.\n- Reagent: Sodium hypohalite ($NaOX$).\n- Product: Sodium salt of acid (1 C less) + **Haloform ($CHX_3$)**.\n- Iodoform test ($NaOI$) gives yellow ppt of $CHI_3$. Doesn't affect C=C bonds."
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "Aromatic aldehydes do not respond to ___ test.",
          blankAnswer: "fehling's"
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Differentiation",
          content: "Which reagent distinguishes Propanal from Propanone?",
          options: [
            { id: "A", text: "Tollens' reagent", isCorrect: true, explanation: "Propanal gives silver mirror; Propanone (ketone) does not." },
            { id: "B", text: "2,4-DNP", isCorrect: false, explanation: "Both will give ppt." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Primary alkyl halides prefer which substitution mechanism?", options: [{id: "A", text: "SN2", isCorrect: true, explanation: "Less steric hindrance."}, {id: "B", text: "SN1", isCorrect: false, explanation: "Carbocation unstable."}]}
      ]
    },
    {
      id: "les-6-3-1-9",
      title: "Reactions of alpha-Hydrogen",
      description: "Aldol Condensation",
      icon: "Scissors",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept Check", content: "Why are alpha-hydrogens of carbonyls acidic?", options: [{id: "A", text: "Electron withdrawing effect of C=O and resonance stabilized enolate", isCorrect: true, explanation: "Conjugate base is highly stable."}, {id: "B", text: "Electron donating effect of alkyl groups", isCorrect: false, explanation: "Decreases acidity."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Aldol Condensation",
          content: "**Aldol Reaction:** Aldehydes/Ketones with at least one $\\alpha$-H react with dilute alkali to form $\\beta$-hydroxy aldehydes (Aldol) or $\\beta$-hydroxy ketones (Ketol).\n\n**Condensation:** On heating, they readily lose water to form $\\alpha,\\beta$-unsaturated carbonyl compounds."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Aldol Mechanism",
          content: "Enolate formation and attack on another carbonyl molecule.",
          interactiveCanvasId: "aldol-mech"
        },
        {
          id: "core-2",
          type: "theory",
          title: "Cross Aldol Condensation",
          content: "Between two different aldehydes/ketones. If both have $\\alpha$-H, a mixture of **four** products is formed (2 simple, 2 cross).\nIf one lacks $\\alpha$-H (like benzaldehyde), it acts only as an electrophile."
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Reaction Requirement",
          content: "Which compound will NOT undergo Aldol condensation?",
          options: [
            { id: "A", text: "Methanal (Formaldehyde)", isCorrect: true, explanation: "Has no alpha-carbon, so no alpha-H." },
            { id: "B", text: "Ethanal (Acetaldehyde)", isCorrect: false, explanation: "Has 3 alpha-H." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Which colligative property is best for measuring molar mass of proteins?", options: [{id: "A", text: "Osmotic Pressure", isCorrect: true, explanation: "Measured at room temp, significant magnitude."}, {id: "B", text: "Elevation of Boiling Point", isCorrect: false, explanation: "Proteins denature at high T."}]}
      ]
    },
    {
      id: "les-6-3-1-10",
      title: "Reduction & Cannizzaro",
      description: "Clemmensen, Wolff-Kishner & Cannizzaro",
      icon: "RefreshCw",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Reduction to Hydrocarbons",
          content: "Carbonyl group ($>C=O$) is reduced to methylene group ($-CH_2-$).\n1. **Clemmensen Reduction:** Zinc amalgam and conc. HCl ($Zn-Hg / HCl$). Best for compounds stable to acids.\n2. **Wolff-Kishner Reduction:** Hydrazine ($NH_2NH_2$) followed by heating with KOH in ethylene glycol. Best for compounds stable to bases."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Reduction Paths",
          content: "Comparing Clemmensen and Wolff-Kishner conditions.",
          interactiveCanvasId: "clemmensen-wolff"
        },
        {
          id: "core-2",
          type: "theory",
          title: "Cannizzaro Reaction",
          content: "Aldehydes **without** $\\alpha$-hydrogen undergo self-oxidation-reduction (disproportionation) when heated with **concentrated alkali**.\n- One molecule reduced to Alcohol.\n- One molecule oxidized to Carboxylic Acid salt.\n\nExamples: Formaldehyde ($HCHO \\to CH_3OH + HCOO^-$), Benzaldehyde."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Distinguish Reactions",
          content: "Acetaldehyde + Dil NaOH gives Aldol. Formaldehyde + Conc NaOH gives:",
          options: [
            { id: "A", text: "Cannizzaro Reaction", isCorrect: true, explanation: "No alpha-H, conc alkali." },
            { id: "B", text: "Aldol Condensation", isCorrect: false, explanation: "Cannot occur without alpha-H." }
          ]
        },
        {
          id: "pyq-1",
          type: "quiz",
          title: "EAS in Benzaldehyde",
          content: "Electrophilic substitution in Benzaldehyde occurs primarily at:",
          options: [
            { id: "A", text: "Meta position", isCorrect: true, explanation: "-CHO is an electron-withdrawing, meta-directing group." },
            { id: "B", text: "Ortho/Para positions", isCorrect: false, explanation: "Deactivating groups direct meta." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Is an SN1 reaction stereospecific?", options: [{id: "A", text: "No, results in racemisation", isCorrect: true, explanation: "Planar carbocation attacked from both sides."}, {id: "B", text: "Yes, 100% inversion", isCorrect: false, explanation: "That's SN2."}]}
      ]
    }
  ]
};