import { Unit } from '../../types';

export const UNIT_4_1_3: Unit = {
  id: "unit-4-1-3",
  title: "Practical Organic Chem",
  description: "Purification & Analysis",
  color: "duo-green",
  lessons: [
    {
      id: "les-4-1-3-1",
      title: "Purification: Solids",
      description: "Sublimation & Crystallisation",
      icon: "Filter",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Sublimation separates:", options: [{id: "A", text: "Volatile solid from non-volatile impurity", isCorrect: true, explanation: "Direct solid to gas."}, {id: "B", text: "Liquid from solid", isCorrect: false, explanation: "Distillation/Filtration."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Methods",
          content: "1. **Sublimation:** Solid $\\to$ Vapour. (Camphor, Naphthalene, Benzoic acid).\n2. **Crystallisation:** Based on difference in solubility in a solvent. Impure solid dissolved in hot solvent, crystallized on cooling.\n   - Use **fractional crystallisation** if solubilities are close."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Example",
          content: "Naphthalene can be purified by:",
          options: [
            { id: "A", text: "Sublimation", isCorrect: true, explanation: "It sublimes." },
            { id: "B", text: "Distillation", isCorrect: false, explanation: "Less common for solids." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Carbocation carbon hybridisation?", options: [{id: "A", text: "sp2", isCorrect: true, explanation: "Planar, 3 bonds"}, {id: "B", text: "sp3", isCorrect: false, explanation: "Carbanion"}]}
      ]
    },
    {
      id: "les-4-1-3-2",
      title: "Purification: Liquids",
      description: "Distillation Types",
      icon: "Beaker",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Distillation",
          content: "1. **Simple:** BP diff > 20-30K (Chloroform & Aniline).\n2. **Fractional:** BP diff < 20K. Uses fractionating column (Crude oil).\n3. **Vacuum (Reduced Pressure):** For liquids that decompose at BP (Glycerol from spent-lye).\n4. **Steam:** Steam volatile, water immiscible (Aniline, Nitrobenzene). Vapor pressure of mixture = $p_1 + p_2 = p_{atm}$."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Distillation Setup",
          content: "Comparing Simple vs Fractional vs Steam apparatus.",
          interactiveCanvasId: "goc-purification" // Placeholder
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "Glycerol is purified by distillation under ___ pressure.",
          blankAnswer: "reduced"
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Match",
          content: "Aniline - Water mixture separation?",
          options: [
            { id: "A", text: "Steam Distillation", isCorrect: true, explanation: "Aniline is steam volatile." },
            { id: "B", text: "Simple Distillation", isCorrect: false, explanation: "BP difference allows it but steam is specific." }
          ]
        },
        {
          id: "pyq-1",
          type: "quiz",
          title: "NEET PYQ",
          content: "A liquid decomposes at its boiling point. Purification method?",
          options: [
            { id: "A", text: "Vacuum Distillation", isCorrect: true, explanation: "Boils at lower T." },
            { id: "B", text: "Steam Distillation", isCorrect: false, explanation: "Only if steam volatile." }
          ]
        }
      ]
    },
    {
      id: "les-4-1-3-3",
      title: "Chromatography",
      description: "Adsorption & Partition",
      icon: "Layers",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Chromatography",
          content: "Separation based on differential movement of components.\n1. **Adsorption:** Stationary Phase is Solid (Silica/Alumina).\n   - Column Chromatography.\n   - Thin Layer Chromatography (TLC). $R_f = \\text{Dist substance} / \\text{Dist solvent}$.\n2. **Partition:** Stationary Phase is Liquid (held in support).\n   - Paper Chromatography."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "TLC Plate",
          content: "Visualizing separation and Rf calculation.",
          interactiveCanvasId: "goc-chromatography"
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Rf Calculation",
          content: "Spot moves 4 cm, Solvent moves 8 cm. Rf?",
          numericAnswer: 0.5,
          numericTolerance: 0.05
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Steam distillation is for?", options: [{id: "A", text: "Steam volatile, water immiscible", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Miscible liquids", isCorrect: false, explanation: "Fractional"}]}
      ]
    },
    {
      id: "les-4-1-3-4",
      title: "Qualitative Analysis",
      description: "Lassaigne's Test",
      icon: "TestTube",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Lassaigne's Test",
          content: "Fusion with Na to convert covalent C, N, S, X into ionic salts.\n- **N:** $NaCN$. Test: $Fe_4[Fe(CN)_6]_3$ (Prussian Blue).\n- **S:** $Na_2S$. Test: Lead Acetate (Black PPT) or Nitroprusside (Violet).\n- **N+S:** $NaSCN$. Test: $Fe(SCN)^{2+}$ (Blood Red).\n- **Halogens:** $NaX$. Test: $AgNO_3$."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Lassaigne Colours",
          content: "Prussian Blue (N), Violet (S), Blood Red (N+S).",
          interactiveCanvasId: "goc-lassaigne"
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Reactions",
          content: "Prussian blue colour is due to:",
          options: [
            { id: "A", text: "Ferriferrocyanide", isCorrect: true, explanation: "Iron(III) hexacyanidoferrate(II)." },
            { id: "B", text: "Ferroferricyanide", isCorrect: false, explanation: "Incorrect." }
          ]
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Exception",
          content: "Lassaigne test fails for Diazo compounds ($N=N$) because:",
          options: [
            { id: "A", text: "N2 gas is evolved on heating", isCorrect: true, explanation: "Nitrogen lost before fusion." },
            { id: "B", text: "Stable bonds", isCorrect: false, explanation: "No." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Rf value range?", options: [{id: "A", text: "0 to 1", isCorrect: true, explanation: "Ratio"}, {id: "B", text: "1 to 10", isCorrect: false, explanation: "No"}]}
      ]
    },
    {
      id: "les-4-1-3-5",
      title: "Quantitative Analysis I",
      description: "Carbon & Hydrogen",
      icon: "Calculator",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Liebig's Method",
          content: "Combustion with CuO. \n- C $\\to$ $CO_2$ (Absorbed by KOH).\n- H $\\to$ $H_2O$ (Absorbed by anhydrous $CaCl_2$).\n\n**Formulas:**\n%C = $\\frac{12}{44} \\times \\frac{m_{CO_2}}{m_{sample}} \\times 100$\n%H = $\\frac{2}{18} \\times \\frac{m_{H_2O}}{m_{sample}} \\times 100$"
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Calculation",
          content: "0.2g organic compound gives 0.44g $CO_2$. % Carbon?",
          numericAnswer: 60,
          numericTolerance: 0.1
        },
        {
          id: "sol-1",
          type: "solution",
          title: "Steps",
          content: "Calc %C",
          interactiveSteps: [
            { stepText: "$(12/44) \\times (0.44 / 0.2) \\times 100$" },
            { stepText: "$0.2727 \\times 2.2 \\times 100 = 60\\%$." }
          ]
        }
      ]
    },
    {
      id: "les-4-1-3-6",
      title: "Quantitative Analysis II",
      description: "Nitrogen: Dumas & Kjeldahl",
      icon: "Calculator",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Nitrogen Methods",
          content: "1. **Dumas:** Heated with CuO $\\to$ $N_2$ gas.\n   %N = $\\frac{28}{22400} \\times \\frac{Vol_{STP}}{m} \\times 100$\n2. **Kjeldahl:** Heated with $H_2SO_4$ $\\to$ $(NH_4)_2SO_4$ $\\to$ $NH_3$ (distilled).\n   %N = $\\frac{1.4 \\times M_{acid} \\times 2(V_{acid} - V_{base})}{m}$ (If back titration).\n   Or simply $\\frac{1.4 \\times N_{acid} \\times V_{used}}{m}$."
        },
        {
          id: "trap-1",
          type: "quiz",
          title: "Limitation",
          content: "Kjeldahl method is NOT applicable for:",
          options: [
            { id: "A", text: "Nitro, Azo groups, N in ring (Pyridine)", isCorrect: true, explanation: "N not converted to ammonium sulfate." },
            { id: "B", text: "Amines", isCorrect: false, explanation: "Works well." }
          ]
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Kjeldahl Calc",
          content: "NH3 from 0.5g compound neutralizes 10mL of 1M H2SO4. %N?",
          numericAnswer: 56,
          numericTolerance: 0.5
        },
        {
          id: "sol-1",
          type: "solution",
          title: "Steps",
          content: "1M H2SO4 = 2N. Vol = 10mL.",
          interactiveSteps: [
            { stepText: "%N = $1.4 \\times N \\times V / m$" },
            { stepText: "$1.4 \\times 2 \\times 10 / 0.5$" },
            { stepText: "$28 / 0.5 = 56\\%$" }
          ]
        }
      ]
    },
    {
      id: "les-4-1-3-7",
      title: "Quantitative Analysis III",
      description: "Halogens & Sulphur (Carius)",
      icon: "Calculator",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Carius Method",
          content: "**Halogens:** Heated with fuming $HNO_3 + AgNO_3 \\to AgX$ ppt.\n%X = $\\frac{\\text{At. Mass X}}{\\text{Mol. Mass AgX}} \\times \\frac{m_{AgX}}{m_{sample}} \\times 100$\n\n**Sulphur:** Heated with $Na_2O_2/HNO_3 \\to H_2SO_4 \\xrightarrow{BaCl_2} BaSO_4$ ppt.\n%S = $\\frac{32}{233} \\times \\frac{m_{BaSO_4}}{m_{sample}} \\times 100$"
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Sulphur Calc",
          content: "0.1g compound gives 0.233g $BaSO_4$. %S?",
          numericAnswer: 32,
          numericTolerance: 0.1
        },
        {
          id: "sol-1",
          type: "solution",
          title: "Steps",
          content: "Calc",
          interactiveSteps: [
            { stepText: "$(32/233) \\times (0.233/0.1) \\times 100$" },
            { stepText: "$0.137 \\times 2.33 \\times 100$" },
            { stepText: "Easy: 0.233 is $10^{-3}$ mol. S = $10^{-3}$ mol = 0.032g. % = 32%." }
          ]
        }
      ]
    }
  ]
};