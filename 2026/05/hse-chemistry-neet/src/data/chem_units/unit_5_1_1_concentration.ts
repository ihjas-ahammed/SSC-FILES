import { Unit } from '../../types';

export const UNIT_5_1_1: Unit = {
  id: "unit-5-1-1",
  title: "Concentration & Solubility",
  description: "Types, Terms & Henry's Law",
  color: "duo-maroon",
  lessons: [
    {
      id: "les-5-1-1-1",
      title: "Types of Solutions",
      description: "Binary Solutions Classification",
      icon: "Beaker",
      slides: [
        { id: "init-1", type: "quiz", title: "Brain Warm-up", content: "Is air a solution?", options: [{id: "A", text: "Yes", isCorrect: true, explanation: "Homogeneous mixture of gases."}, {id: "B", text: "No", isCorrect: false, explanation: "It is a gaseous solution."}] },
        { id: "init-2", type: "quiz", title: "Brain Warm-up", content: "In a solution of sugar in water, water is the:", options: [{id: "A", text: "Solute", isCorrect: false, explanation: "Dissolved substance."}, {id: "B", text: "Solvent", isCorrect: true, explanation: "Component in larger quantity/determining phase."}] },
        {
          id: "core-1",
          type: "theory",
          title: "What is a Solution?",
          content: "Solutions are **homogeneous** mixtures of two or more components.\n- **Solvent:** Component present in largest quantity. Determines physical state.\n- **Solute:** Other component(s).\n\n**Binary Solutions** have only two components.\n\n**Types:**\n- **Gaseous:** Gas in Gas (Air), Liquid in Gas (Chloroform in N2).\n- **Liquid:** Gas in Liquid (O2 in water), Solid in Liquid (Sugar in water).\n- **Solid:** Gas in Solid (H2 in Pd), Solid in Solid (Alloys like Brass)."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Visualizing Components",
          content: "Solute + Solvent = Homogeneous Solution.",
          interactiveCanvasId: "sol-types"
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "Amalgam of mercury with sodium is an example of ___ in solid solution.",
          blankAnswer: "liquid"
        },
        {
          id: "ar-1",
          type: "quiz",
          title: "Assertion-Reason",
          content: "**Assertion:** Brass is a solid solution.\n**Reason:** It is a homogeneous mixture of Copper and Zinc.",
          options: [
            { id: "A", text: "Both True, R explains A", isCorrect: true, explanation: "Homogeneity in solid phase defines solid solution." },
            { id: "B", text: "Both False", isCorrect: false, explanation: "Incorrect." }
          ]
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Application",
          content: "Camphor in nitrogen gas is an example of:",
          options: [
            { id: "A", text: "Solid in Gas", isCorrect: true, explanation: "Camphor (Solid) acts as solute in N2 (Gas)." },
            { id: "B", text: "Gas in Solid", isCorrect: false, explanation: "Solvent is Gas." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "SI unit of temperature?", options: [{id: "A", text: "Kelvin", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Celsius", isCorrect: false, explanation: "Common unit"}]}
      ]
    },
    {
      id: "les-5-1-1-2",
      title: "Mass, Volume & PPM",
      description: "Basic Concentration Terms",
      icon: "Scale",
      slides: [
        { id: "init-1", type: "quiz", title: "Pre-Check", content: "10% w/w means:", options: [{id: "A", text: "10g solute in 100g solution", isCorrect: true, explanation: "Mass percent."}, {id: "B", text: "10g solute in 100mL solution", isCorrect: false, explanation: "That is w/V."}] },
        { id: "init-2", type: "quiz", title: "Pre-Check", content: "PPM is used for:", options: [{id: "A", text: "Very dilute solutions", isCorrect: true, explanation: "Trace quantities."}, {id: "B", text: "Concentrated solutions", isCorrect: false, explanation: "Molarity is better."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Percentage & PPM",
          content: "1. **Mass % (w/w):** $\\frac{\\text{Mass of component}}{\\text{Total mass}} \\times 100$.\n2. **Volume % (v/v):** $\\frac{\\text{Volume of component}}{\\text{Total volume}} \\times 100$ (e.g. Antifreeze).\n3. **Mass by Vol % (w/V):** Mass solute in 100 mL solution (Medicine).\n4. **Parts Per Million (ppm):** $\\frac{\\text{Number of parts}}{\\text{Total parts}} \\times 10^6$. Used for pollutants."
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "1 ppm of fluoride ions prevents tooth decay, while ___ ppm causes mottling of teeth.",
          blankAnswer: "1.5"
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Calculation",
          content: "If 2g of solute is in 18g water, what is mass % of solute?",
          numericAnswer: 10,
          numericTolerance: 0
        },
        {
          id: "sol-1",
          type: "solution",
          title: "Steps",
          content: "Solution",
          interactiveSteps: [
            { stepText: "Total Mass = 2 + 18 = 20g" },
            { stepText: "$(2 / 20) \\times 100 = 10\\%$" }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Formula of Glucose?", options: [{id: "A", text: "C6H12O6", isCorrect: true, explanation: "Correct"}, {id: "B", text: "C12H22O11", isCorrect: false, explanation: "Sucrose"}]}
      ]
    },
    {
      id: "les-5-1-1-3",
      title: "Mole Fraction",
      description: "Ratio of Moles",
      icon: "PieChart",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Sum of mole fractions of all components is:", options: [{id: "A", text: "1", isCorrect: true, explanation: "Unity."}, {id: "B", text: "100", isCorrect: false, explanation: "Percentage sum."}] },
        { id: "init-2", type: "quiz", title: "Concept", content: "Unit of mole fraction?", options: [{id: "A", text: "Dimensionless", isCorrect: true, explanation: "Ratio of moles."}, {id: "B", text: "mol/L", isCorrect: false, explanation: "Molarity."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Mole Fraction ($x$)",
          content: "Ratio of number of moles of a component to the total number of moles of all components.\n\n$$ x_A = \\frac{n_A}{n_A + n_B} $$\n\nUseful for relating physical properties like **vapour pressure**."
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "Definition",
          content: "Mole fraction is denoted by the symbol ___.",
          blankAnswer: "x"
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Calculation",
          content: "Mole fraction of A in mixture of 2 mol A and 8 mol B?",
          numericAnswer: 0.2,
          numericTolerance: 0
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Application",
          content: "Does mole fraction change with temperature?",
          options: [
            { id: "A", text: "No", isCorrect: true, explanation: "Mass/Moles are T-independent." },
            { id: "B", text: "Yes", isCorrect: false, explanation: "Only volume based units change." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Avogadro's Law relates?", options: [{id: "A", text: "V and n", isCorrect: true, explanation: "Correct"}, {id: "B", text: "P and V", isCorrect: false, explanation: "Boyle's Law"}]}
      ]
    },
    {
      id: "les-5-1-1-4",
      title: "Molarity vs Molality",
      description: "Temperature Dependence",
      icon: "Thermometer",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Molarity (M) depends on volume. Volume changes with Temp. So Molarity...", options: [{id: "A", text: "Changes with Temp", isCorrect: true, explanation: "Correct."}, {id: "B", text: "Is constant", isCorrect: false, explanation: "Molality is constant."}] },
        { id: "init-2", type: "quiz", title: "Concept", content: "Unit of Molality (m)?", options: [{id: "A", text: "mol/kg", isCorrect: true, explanation: "Moles per kg solvent."}, {id: "B", text: "mol/L", isCorrect: false, explanation: "Molarity."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Molarity vs Molality",
          content: "1. **Molarity ($M$):** Moles of solute per **Litre of Solution**.\n   - Function of Temperature (Volume expands/contracts).\n   - Formula: $n_{solute} / V_{sol}(L)$.\n2. **Molality ($m$):** Moles of solute per **kg of Solvent**.\n   - Independent of Temperature (Mass is constant).\n   - Formula: $n_{solute} / Mass_{solvent}(kg)$."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Mass vs Volume",
          content: "Visual comparison of temperature effect.",
          interactiveCanvasId: "sol-concentration"
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Comparison",
          content: "Which is preferred for experiments involving temperature changes?",
          options: [
            { id: "A", text: "Molality", isCorrect: true, explanation: "Constant value." },
            { id: "B", text: "Molarity", isCorrect: false, explanation: "Varies." }
          ]
        },
        {
          id: "ar-1",
          type: "quiz",
          title: "Assertion-Reason",
          content: "**Assertion:** 1 M aqueous solution is more concentrated than 1 m aqueous solution.\n**Reason:** Density of water is approx 1 g/mL, so 1 L solution < 1 kg solvent?",
          options: [
            { id: "A", text: "A True, R False", isCorrect: true, explanation: "1 M = 1 mol in 1 L solution (Solvent < 1L). 1 m = 1 mol in 1 kg (~1L) Solvent. Less solvent in M -> More concentrated." },
            { id: "B", text: "Both False", isCorrect: false, explanation: "Check definition." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Bond angle in water?", options: [{id: "A", text: "104.5", isCorrect: true, explanation: "Correct"}, {id: "B", text: "109.5", isCorrect: false, explanation: "Tetrahedral"}]}
      ]
    },
    {
      id: "les-5-1-1-5",
      title: "Solubility of Solids",
      description: "Factors & Le Chatelier",
      icon: "Filter",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Like dissolves Like means:", options: [{id: "A", text: "Polar dissolves in Polar", isCorrect: true, explanation: "e.g., Salt in Water."}, {id: "B", text: "Polar dissolves in Non-polar", isCorrect: false, explanation: "They repel/don't mix."}] },
        { id: "init-2", type: "quiz", title: "Concept", content: "Does pressure affect solubility of solid in liquid?", options: [{id: "A", text: "No", isCorrect: true, explanation: "Solids/Liquids incompressible."}, {id: "B", text: "Yes", isCorrect: false, explanation: "Only for gases."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Solid in Liquid Solubility",
          content: "**Saturated Solution:** Equilibrium between undissolved solid and solution.\n$$\\text{Solute} + \\text{Solvent} \\rightleftharpoons \\text{Solution}$$\n\n**Le Chatelier's Principle:**\n- If dissolution is **Endothermic** ($\\Delta_{sol}H > 0$): Solubility $\\uparrow$ with Temp $\\uparrow$.\n- If dissolution is **Exothermic** ($\\Delta_{sol}H < 0$): Solubility $\\downarrow$ with Temp $\\uparrow$."
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "Pressure does not have any significant effect on solubility of solids in liquids because solids and liquids are highly ___.",
          blankAnswer: "incompressible"
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Application",
          content: "Dissolution of $Na_2SO_4$ releases heat. On heating, its solubility will:",
          options: [
            { id: "A", text: "Decrease", isCorrect: true, explanation: "Exothermic reaction disfavoured by heat." },
            { id: "B", text: "Increase", isCorrect: false, explanation: "Incorrect." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Does K change with P?", options: [{id: "A", text: "No", isCorrect: true, explanation: "Only T"}, {id: "B", text: "Yes", isCorrect: false, explanation: "Incorrect"}]}
      ]
    },
    {
      id: "les-5-1-1-6",
      title: "Solubility of Gases",
      description: "Henry's Law",
      icon: "Cloud",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Fish prefer cold water because:", options: [{id: "A", text: "More oxygen dissolves", isCorrect: true, explanation: "Gas solubility increases as T decreases."}, {id: "B", text: "Less oxygen dissolves", isCorrect: false, explanation: "Incorrect."}] },
        { id: "init-2", type: "quiz", title: "Concept", content: "Soda bottles are sealed under:", options: [{id: "A", text: "High Pressure", isCorrect: true, explanation: "To dissolve more CO2."}, {id: "B", text: "Low Pressure", isCorrect: false, explanation: "CO2 would escape."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Henry's Law",
          content: "**Statement:** The solubility of a gas in a liquid is directly proportional to the partial pressure of the gas present above the surface of liquid or solution.\n\n$$ p = K_H x $$\n\n- $p$: Partial pressure.\n- $x$: Mole fraction (Solubility).\n- $K_H$: Henry's Law constant. Higher $K_H$ $\\to$ Lower solubility."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Henry's Graph",
          content: "Plot of p vs x (Straight line passing through origin). Slope = KH.",
          interactiveCanvasId: "sol-henry-graph"
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "Different gases have different $K_H$ values at the same temperature. This suggests that $K_H$ is a function of the nature of the ___.",
          blankAnswer: "gas"
        },
        {
          id: "ar-1",
          type: "quiz",
          title: "Assertion-Reason",
          content: "**Assertion:** Scuba divers suffer from 'bends' if they surface quickly.\n**Reason:** Dissolved N2 bubbles out of blood due to decrease in pressure.",
          options: [
            { id: "A", text: "Both True, R explains A", isCorrect: true, explanation: "Henry's law application." },
            { id: "B", text: "Both False", isCorrect: false, explanation: "Incorrect." }
          ]
        },
        {
          id: "pyq-1",
          type: "quiz",
          title: "NEET Trend",
          content: "Value of Henry's constant $K_H$ increases with:",
          options: [
            { id: "A", text: "Increase in Temperature", isCorrect: true, explanation: "Solubility decreases, so KH must increase (p = KH * x)." },
            { id: "B", text: "Decrease in Temperature", isCorrect: false, explanation: "Incorrect." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Is solution homogeneous?", options: [{id: "A", text: "Yes", isCorrect: true, explanation: "Correct"}, {id: "B", text: "No", isCorrect: false, explanation: "Mixture"}]}
      ]
    }
  ]
};