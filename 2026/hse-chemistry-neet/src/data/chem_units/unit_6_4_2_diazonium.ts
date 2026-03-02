import { Unit } from '../../types';

export const UNIT_6_4_2: Unit = {
  id: "unit-6-4-2",
  title: "Diazonium Salts",
  description: "Prep, Properties & Syntheses",
  color: "duo-blue",
  lessons: [
    {
      id: "les-6-4-2-1",
      title: "Preparation & Stability",
      description: "Diazotisation",
      icon: "Beaker",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept Check", content: "Diazonium salts of aliphatic amines are:", options: [{id: "A", text: "Highly unstable", isCorrect: true, explanation: "Decompose immediately to release N2."}, {id: "B", text: "Stable", isCorrect: false, explanation: "Only aromatic ones are stable."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Diazotisation & Stability",
          content: "**General Formula:** $Ar-N_2^+ X^-$.\n**Diazotisation:** Conversion of 1° aromatic amine to diazonium salt.\n$C_6H_5NH_2 + NaNO_2 + 2HCl \\xrightarrow{273-278K} C_6H_5N_2^+Cl^- + NaCl + 2H_2O$\n\n**Stability:** Arenediazonium salts are stable for a short time at low temp due to **resonance** dispersion of positive charge over the benzene ring. They decompose easily in dry state."
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "Due to its instability, the diazonium salt is not generally stored and is used ___ after its preparation.",
          blankAnswer: "immediately"
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Primary aliphatic amine with HNO2 gives?", options: [{id: "A", text: "Alcohol + N2 gas", isCorrect: true, explanation: "Quantitative evolution of N2."}, {id: "B", text: "Stable diazonium", isCorrect: false, explanation: "Unstable."}]}
      ]
    },
    {
      id: "les-6-4-2-2",
      title: "Displacement by Halides",
      description: "Sandmeyer & Gatterman",
      icon: "ArrowRight",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Sandmeyer reaction uses:", options: [{id: "A", text: "Cuprous halides (CuX)", isCorrect: true, explanation: "Cu2Cl2 or Cu2Br2."}, {id: "B", text: "Copper powder", isCorrect: false, explanation: "That's Gatterman."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Replacement by Halide/Cyanide",
          content: "Diazonium group ($N_2^+$) is an excellent leaving group (releases stable $N_2$ gas).\n\n1. **Sandmeyer Reaction:** Uses $Cu(I)$ salts ($Cu_2Cl_2/HCl, Cu_2Br_2/HBr, CuCN/KCN$). Yield is better.\n2. **Gatterman Reaction:** Uses finely divided **Copper powder** with corresponding halogen acid ($Cu/HCl, Cu/HBr$)."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Yield Comparison",
          content: "Which reaction gives a better yield for preparing chlorobenzene?",
          options: [
            { id: "A", text: "Sandmeyer", isCorrect: true, explanation: "Specifically stated in NCERT." },
            { id: "B", text: "Gatterman", isCorrect: false, explanation: "Lower yield." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Hinsberg reagent is?", options: [{id: "A", text: "Benzenesulphonyl chloride", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Acetyl chloride", isCorrect: false, explanation: "Acylation"}]}
      ]
    },
    {
      id: "les-6-4-2-3",
      title: "Other Displacements",
      description: "I, F, H, OH, NO2",
      icon: "Layers",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Other Replacement Reactions",
          content: "1. **By Iodide ($I^-$):** Warm with aqueous **KI**. (Does not require Cu catalyst).\n2. **By Fluoride ($F^-$):** Treat with $HBF_4$ to get precipitate, then heat (Balz-Schiemann reaction).\n3. **By H (Reduction):** Treat with mild reducing agents like **$H_3PO_2$** (hypophosphorous acid) or **Ethanol**. Diazonium reduces to Benzene, reagents oxidize to $H_3PO_3$ and Ethanal.\n4. **By OH:** Warm to 283K $\\to$ Phenol.\n5. **By $NO_2$:** Heat fluoroborate salt with $NaNO_2/Cu$."
        },
        {
          id: "trap-1",
          type: "quiz",
          title: "Spot the Error",
          content: "To convert benzenediazonium chloride to benzene, use:",
          options: [
            { id: "A", text: "H3PO2 and H2O", isCorrect: true, explanation: "Excellent mild reducing agent." },
            { id: "B", text: "LiAlH4", isCorrect: false, explanation: "Not typically used for this specific cleavage." }
          ]
        },
        {
          id: "pyq-1",
          type: "quiz",
          title: "NEET PYQ",
          content: "Reaction of diazonium salt with ethanol yields:",
          options: [
            { id: "A", text: "Benzene + Ethanal", isCorrect: true, explanation: "Ethanol acts as a reducing agent." },
            { id: "B", text: "Phenetole", isCorrect: false, explanation: "Incorrect." }
          ]
        }
      ]
    },
    {
      id: "les-6-4-2-4",
      title: "Coupling Reactions",
      description: "Azo Dyes",
      icon: "Link",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Coupling reactions represent which mechanism?", options: [{id: "A", text: "Electrophilic Substitution", isCorrect: true, explanation: "Diazonium ion is a weak electrophile."}, {id: "B", text: "Nucleophilic Substitution", isCorrect: false, explanation: "It attacks electron rich rings."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Coupling Reactions",
          content: "Reactions involving retention of diazo group ($-N=N-$) to form extended conjugated systems (Azo Dyes).\n1. **With Phenol:** Couples at **para** position in slightly **alkaline** medium (pH 9-10) $\\to$ p-Hydroxyazobenzene (Orange dye).\n2. **With Aniline:** Couples at **para** position in slightly **acidic** medium (pH 4-5) $\\to$ p-Aminoazobenzene (Yellow dye)."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Orange Dye Formation",
          content: "Visualizing coupling with Phenol.",
          interactiveCanvasId: "diazonium-coupling"
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Color Match",
          content: "p-Aminoazobenzene is:",
          options: [
            { id: "A", text: "Yellow dye", isCorrect: true, explanation: "From aniline." },
            { id: "B", text: "Orange dye", isCorrect: false, explanation: "From phenol." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Is anilinium ion o/p directing?", options: [{id: "A", text: "No, meta directing", isCorrect: true, explanation: "Strongly deactivating."}, {id: "B", text: "Yes", isCorrect: false, explanation: "-NH2 is o/p, not -NH3+."}]}
      ]
    },
    {
      id: "les-6-4-2-5",
      title: "Importance in Synthesis",
      description: "Why use Diazonium?",
      icon: "Star",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Synthetic Utility",
          content: "Diazonium salts are excellent intermediates for introducing -F, -Cl, -Br, -I, -CN, -OH, -NO₂ into the aromatic ring.\n\n**Advantages:**\n- Aryl fluorides/iodides cannot be made by direct halogenation.\n- Cyano group cannot be introduced by nucleophilic substitution on chlorobenzene.\n- Allows preparation of substituted benzenes that cannot be made directly."
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "The cyano group cannot be introduced by nucleophilic substitution of chlorine in chlorobenzene but cyanobenzene can be easily obtained from ___ salt.",
          blankAnswer: "diazonium"
        }
      ]
    },
    {
      id: "les-6-4-2-6",
      title: "Conversion Logic",
      description: "Chain Reactions",
      icon: "GitBranch",
      slides: [
        {
          id: "sol-1",
          type: "solution",
          title: "Conversion Challenge",
          content: "Convert Aniline to 1,3,5-Tribromobenzene.",
          interactiveSteps: [
            { stepText: "1. Brominate Aniline (Br2/aq) $\\to$ 2,4,6-Tribromoaniline." },
            { stepText: "2. Diazotize ($NaNO_2/HCl, 273K$) $\\to$ Diazonium salt." },
            { stepText: "3. Reduce ($H_3PO_2$) to remove diazo group $\\to$ 1,3,5-Tribromobenzene." }
          ]
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Step purpose",
          content: "In the conversion above, what is the role of $H_3PO_2$?",
          options: [
            { id: "A", text: "Replaces $N_2^+$ with H", isCorrect: true, explanation: "Reductive deamination." },
            { id: "B", text: "Replaces $N_2^+$ with OH", isCorrect: false, explanation: "That requires warming with water." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Is an amide reduced by LiAlH4 to an amine?", options: [{id: "A", text: "Yes", isCorrect: true, explanation: "Correct"}, {id: "B", text: "No", isCorrect: false, explanation: "Esters reduce to alcohols"}]}
      ]
    }
  ]
};