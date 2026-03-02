import { Unit } from '../../types';

export const UNIT_6_3_2: Unit = {
  id: "unit-6-3-2",
  title: "Carboxylic Acids",
  description: "Structure, Prep, Acidity & Reactions",
  color: "duo-orange",
  lessons: [
    {
      id: "les-6-3-2-1",
      title: "Structure & Nomenclature",
      description: "Carboxyl Group",
      icon: "Type",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept Check", content: "The functional group -COOH is called carboxyl because:", options: [{id: "A", text: "It combines carbonyl and hydroxyl groups", isCorrect: true, explanation: "Carb(onyl) + (hydr)oxyl."}, {id: "B", text: "It contains carbon and oxygen", isCorrect: false, explanation: "Many groups do."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Structure of Carboxyl Group",
          content: "The bonds to the carboxyl carbon lie in one plane ($sp^2, 120^\\circ$).\n**Crucial Detail:** The carboxylic carbon is **less electrophilic** than the carbonyl carbon in aldehydes/ketones because of resonance involving the hydroxyl oxygen's lone pair."
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "In IUPAC system, aliphatic carboxylic acids are named by replacing the ending –e in the name of the corresponding alkane with –___ acid.",
          blankAnswer: "oic"
        },
        {
          id: "ar-1",
          type: "quiz",
          title: "Assertion-Reason",
          content: "**Assertion:** The carbonyl carbon of a carboxylic acid does not undergo typical nucleophilic addition reactions like aldehydes.\n**Reason:** Resonance from the adjacent -OH group oxygen reduces the electrophilic character of the carbonyl carbon.",
          options: [
            { id: "A", text: "Both True, R explains A", isCorrect: true, explanation: "Delocalization quenches the positive charge on C." },
            { id: "B", text: "Both False", isCorrect: false, explanation: "Incorrect." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Dialkylcadmium is used to prepare:", options: [{id: "A", text: "Ketones from acyl chlorides", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Aldehydes from nitriles", isCorrect: false, explanation: "DIBAL-H or Stephen."}]}
      ]
    },
    {
      id: "les-6-3-2-2",
      title: "Preparation Methods I",
      description: "Oxidation Methods",
      icon: "Beaker",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept Check", content: "Vigorous oxidation of primary alcohols yields:", options: [{id: "A", text: "Carboxylic Acids", isCorrect: true, explanation: "Using KMnO4 or CrO3/H2SO4."}, {id: "B", text: "Ketones", isCorrect: false, explanation: "Secondary alcohols give ketones."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Preparation via Oxidation",
          content: "1. **From Primary Alcohols/Aldehydes:** Oxidized by $KMnO_4, K_2Cr_2O_7$, or Jones Reagent ($CrO_3/H_2SO_4$).\n2. **From Alkylbenzenes:** Any primary/secondary alkyl group on a benzene ring is oxidized to a $-COOH$ group using $KMnO_4/KOH + \\Delta$. (Tertiary alkyl groups are not affected). \n   - e.g., Toluene $\\to$ Benzoic acid. Propylbenzene $\\to$ Benzoic acid."
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Alkylbenzene Oxidation",
          content: "What is the product of vigorous oxidation of Isopropylbenzene?",
          options: [
            { id: "A", text: "Benzoic acid", isCorrect: true, explanation: "Entire side chain oxidizes to -COOH." },
            { id: "B", text: "Phenylacetic acid", isCorrect: false, explanation: "Carbon chain is clipped to 1 carbon." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Tollens' reagent reduces to:", options: [{id: "A", text: "Metallic Silver", isCorrect: true, explanation: "Silver mirror."}, {id: "B", text: "Cu2O", isCorrect: false, explanation: "Fehling's test."}]}
      ]
    },
    {
      id: "les-6-3-2-3",
      title: "Preparation Methods II",
      description: "Hydrolysis & Grignard",
      icon: "Link",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Other Preps",
          content: "3. **From Nitriles and Amides:** $R-CN \\xrightarrow{H^+/OH^-, H_2O} R-CONH_2 \\xrightarrow{H^+, \\Delta} R-COOH$. (Mild conditions stop at amide).\n4. **From Grignard Reagents:** $R-MgX + CO_2 \\text{ (dry ice)} \\to R-COOMgX \\xrightarrow{H_3O^+} R-COOH$.\n   *(Useful for ascending the series - adds one Carbon).* \n5. **From Esters/Acyl Halides/Anhydrides:** Hydrolysis with water or base."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Grignard Reaction",
          content: "Which gas is bubbled through Grignard reagent to form a carboxylic acid?",
          options: [
            { id: "A", text: "Carbon dioxide (Dry Ice)", isCorrect: true, explanation: "Reacts to form carboxylate salt." },
            { id: "B", text: "Carbon monoxide", isCorrect: false, explanation: "Forms aldehydes in Gatterman-Koch, but not with Grignard." }
          ]
        },
        {
          id: "sol-1",
          type: "solution",
          title: "Conversion Chain",
          content: "Convert Bromobenzene to Benzoic acid.",
          interactiveSteps: [
            { stepText: "1. Add Mg/dry ether $\\to$ Phenylmagnesium bromide." },
            { stepText: "2. Add $CO_2$ (dry ice)." },
            { stepText: "3. Acidify ($H_3O^+$) $\\to$ Benzoic acid." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "What does NaOX (haloform reaction) detect?", options: [{id: "A", text: "Methyl Ketones", isCorrect: true, explanation: "CH3-CO- group."}, {id: "B", text: "Primary Alcohols", isCorrect: false, explanation: "Only Ethanol responds."}]}
      ]
    },
    {
      id: "les-6-3-2-4",
      title: "Physical Props & Acidity",
      description: "Dimerization & Substituents",
      icon: "Battery",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept Check", content: "Carboxylic acids have higher boiling points than alcohols of similar mass because:", options: [{id: "A", text: "More extensive H-bonding forming dimers", isCorrect: true, explanation: "Even exists as dimers in vapour phase."}, {id: "B", text: "They are more polar", isCorrect: false, explanation: "H-bond extent is the key."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Acidity of Carboxylic Acids",
          content: "Stronger acids than alcohols and phenols. \n**Reason:** Carboxylate ion is stabilized by two **equivalent** resonance structures (negative charge on highly electronegative oxygen).\nPhenoxide has non-equivalent structures with charge on less electronegative carbon.\n\n**Substituent Effect:**\n- **Electron Withdrawing Groups (EWG):** Stabilize carboxylate anion, **increase acidity** ($CF_3 > NO_2 > CN > F > Cl > Br > I$).\n- **Electron Donating Groups (EDG):** Destabilize anion, **decrease acidity** (Alkyl groups)."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "EWG vs EDG",
          content: "Visualizing charge dispersion vs concentration.",
          interactiveCanvasId: "acidity-ewg"
        },
        {
          id: "pyq-1",
          type: "quiz",
          title: "NEET PYQ (Code 48)",
          content: "Correct order of decreasing acidity?",
          options: [
            { id: "A", text: "HCOOH > CH3COOH > (CH3)2CHCOOH", isCorrect: true, explanation: "More alkyl groups = stronger +I effect = weaker acid." },
            { id: "B", text: "(CH3)2CHCOOH > CH3COOH > HCOOH", isCorrect: false, explanation: "Inverse." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Is an aldol condensation product stable to heat?", options: [{id: "A", text: "No, readily loses water", isCorrect: true, explanation: "Forms alpha,beta-unsaturated compound."}, {id: "B", text: "Yes", isCorrect: false, explanation: "Heating causes elimination."}]}
      ]
    },
    {
      id: "les-6-3-2-5",
      title: "C-OH Bond Cleavage",
      description: "Derivatives Formation",
      icon: "Scissors",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Reactions involving C-OH cleavage",
          content: "1. **Anhydride Formation:** Heating with $H_2SO_4$ or $P_2O_5$ removes $H_2O$ from 2 molecules.\n2. **Esterification:** $RCOOH + R'OH \\rightleftharpoons RCOOR' + H_2O$ (Acid catalyzed). Follows nucleophilic acyl substitution mechanism.\n3. **With PCl5, PCl3, SOCl2:** Forms Acyl Chlorides ($RCOCl$). Thionyl chloride ($SOCl_2$) preferred as byproducts are gases ($SO_2, HCl$).\n4. **With Ammonia:** Forms ammonium salt, heating gives **Amides** ($RCONH_2$)."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Best Reagent",
          content: "Which reagent is preferred to convert a carboxylic acid to an acid chloride?",
          options: [
            { id: "A", text: "SOCl2", isCorrect: true, explanation: "Gaseous byproducts escape, leaving pure product." },
            { id: "B", text: "PCl5", isCorrect: false, explanation: "Solid/liquid byproducts." }
          ]
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Esterification Mechanism",
          content: "In esterification, the -OH group removed as water comes primarily from:",
          options: [
            { id: "A", text: "Carboxylic Acid", isCorrect: true, explanation: "Acid loses OH, Alcohol loses H (proved by isotopic labeling)." },
            { id: "B", text: "Alcohol", isCorrect: false, explanation: "Incorrect." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Which is more reactive to nucleophiles: Aldehydes or Ketones?", options: [{id: "A", text: "Aldehydes", isCorrect: true, explanation: "Less steric hindrance and less +I effect."}, {id: "B", text: "Ketones", isCorrect: false, explanation: "Opposite."}]}
      ]
    },
    {
      id: "les-6-3-2-6",
      title: "Reactions of COOH Group",
      description: "Reduction & Decarboxylation",
      icon: "ArrowDown",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept Check", content: "Can NaBH4 reduce carboxylic acids?", options: [{id: "A", text: "No", isCorrect: true, explanation: "It is a mild reducing agent."}, {id: "B", text: "Yes", isCorrect: false, explanation: "Requires LiAlH4 or B2H6."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Involving entire -COOH",
          content: "1. **Reduction:** Reduced to primary alcohols by $LiAlH_4$ or $B_2H_6$. Diborane ($B_2H_6$) is excellent as it does not reduce ester, nitro, or halo groups. $NaBH_4$ does NOT reduce carboxyl group.\n2. **Decarboxylation:** Sodium salts of acids heated with **Soda lime** (NaOH:CaO = 3:1) lose $CO_2$ to form hydrocarbons (1 C less). Kolbe electrolysis yields hydrocarbons."
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "Sodium borohydride does ___ reduce the carboxyl group.",
          blankAnswer: "not"
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Decarboxylation",
          content: "Heating Sodium Acetate ($CH_3COONa$) with soda lime gives:",
          options: [
            { id: "A", text: "Methane ($CH_4$)", isCorrect: true, explanation: "Loses the carboxyl carbon as Na2CO3." },
            { id: "B", text: "Ethane", isCorrect: false, explanation: "That would be Kolbe electrolysis." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Which base is used in Cannizzaro reaction?", options: [{id: "A", text: "Concentrated Alkali", isCorrect: true, explanation: "Causes disproportionation."}, {id: "B", text: "Dilute Alkali", isCorrect: false, explanation: "Used for Aldol."}]}
      ]
    },
    {
      id: "les-6-3-2-7",
      title: "Hydrocarbon Part Reactions",
      description: "HVZ & Ring Substitution",
      icon: "Hash",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Hell-Volhard-Zelinsky (HVZ) Reaction",
          content: "Carboxylic acids having an **$\\alpha$-hydrogen** are halogenated at the $\\alpha$-position on treatment with $Cl_2$ or $Br_2$ in presence of small amount of **Red Phosphorus**.\n- Product: $\\alpha$-halocarboxylic acid."
        },
        {
          id: "core-2",
          type: "theory",
          title: "Ring Substitution (Aromatic)",
          content: "The carboxyl group is **deactivating** and **meta-directing**.\n- Undergoes Nitration, Bromination at meta position.\n- **Crucial Exception:** They do **NOT** undergo Friedel-Crafts reaction because the carboxyl group deactivates the ring and the $AlCl_3$ catalyst (Lewis acid) gets bonded to the carboxyl group."
        },
        {
          id: "trap-1",
          type: "quiz",
          title: "Spot the Error",
          content: "Can you perform Friedel-Crafts alkylation on Benzoic acid?",
          options: [
            { id: "A", text: "No", isCorrect: true, explanation: "AlCl3 forms a complex with the COOH group." },
            { id: "B", text: "Yes", isCorrect: false, explanation: "Fails entirely." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Why do ortho/para directing halogens deactivate the benzene ring?", options: [{id: "A", text: "Strong -I effect", isCorrect: true, explanation: "Withdraws electron density overall."}, {id: "B", text: "Strong +R effect", isCorrect: false, explanation: "Directs o/p, but doesn't outweigh -I."}]}
      ]
    },
    {
      id: "les-6-3-2-8",
      title: "Summary of Carbonyls & Acids",
      description: "Uses & Review",
      icon: "BookOpen",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Uses",
          content: "- **Methanal (Formaldehyde):** 40% aq solution is **formalin** (preservative). Used in Bakelite resins.\n- **Ethanal (Acetaldehyde):** Starting material for acetic acid, ethyl acetate.\n- **Acetone:** Common industrial solvent.\n- **Methanoic acid (Formic):** Rubber/textile industries.\n- **Ethanoic acid (Acetic):** Vinegar, solvent.\n- **Hexanedioic acid (Adipic):** Nylon-6,6.\n- **Sodium Benzoate:** Food preservative."
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "Formaldehyde is well known as ___ (40% solution) used to preserve biological specimens.",
          blankAnswer: "formalin"
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Summary Link",
          content: "The reaction that converts $R-COCl$ to $R-CHO$ is:",
          options: [
            { id: "A", text: "Rosenmund Reduction", isCorrect: true, explanation: "H2 / Pd-BaSO4." },
            { id: "B", text: "Stephen Reaction", isCorrect: false, explanation: "Nitriles to Aldehydes." }
          ]
        }
      ]
    }
  ]
};