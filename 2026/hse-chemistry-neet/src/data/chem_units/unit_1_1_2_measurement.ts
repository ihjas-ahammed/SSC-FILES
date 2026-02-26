import { Unit } from '../../types';

export const UNIT_1_1_2: Unit = {
  id: "unit-1-1-2",
  title: "Measurement & Uncertainty",
  description: "SI Units, Sig Figs, and Dimensional Analysis",
  color: "duo-blue",
  lessons: [
    {
      id: "les-1-1-2-1",
      title: "SI Units",
      description: "The 7 Base Units",
      icon: "Ruler",
      slides: [
        { id: "init-1", type: "quiz", title: "Pre-Check", content: "What is the SI unit of Temperature?", options: [{ id: "A", text: "Celsius", isCorrect: false, explanation: "Celsius is common, but Kelvin is SI." }, { id: "B", text: "Kelvin", isCorrect: true, explanation: "K is the SI unit." }] },
        { id: "init-2", type: "quiz", title: "Pre-Check", content: "Amount of substance is measured in?", options: [{ id: "A", text: "Gram", isCorrect: false, explanation: "That is mass." }, { id: "B", text: "Mole", isCorrect: true, explanation: "mol is the unit." }] },
        { 
          id: "core-1", 
          type: "theory", 
          title: "The 7 SI Base Units", 
          content: "The International System of Units (SI) has 7 base units:\n1. **Length**: metre (m)\n2. **Mass**: kilogram (kg)\n3. **Time**: second (s)\n4. **Electric Current**: ampere (A)\n5. **Thermodynamic Temperature**: kelvin (K)\n6. **Amount of substance**: mole (mol)\n7. **Luminous Intensity**: candela (cd)" 
        },
        { 
          id: "vis-1", 
          type: "interactive_canvas", 
          title: "SI Units Chart", 
          content: "Interactive table of quantities and units.", 
          interactiveCanvasId: "chem-si-units" 
        },
        { 
          id: "ret-1", 
          type: "fill_in_blank", 
          title: "NCERT Check", 
          content: "The symbol for the SI unit of Luminous Intensity is ___.", 
          blankAnswer: "cd" 
        },
        { 
          id: "app-1",
          type: "quiz",
          title: "Prefix Check",
          content: "What does the prefix 'micro' stand for?",
          options: [
            { id: "A", text: "$10^{-6}$", isCorrect: true, explanation: "Micro is 10^-6." },
            { id: "B", text: "$10^{-9}$", isCorrect: false, explanation: "That is nano." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Is air a pure substance?", options: [{id: "A", text: "No", isCorrect: true, explanation: "Mixture."}, {id: "B", text: "Yes", isCorrect: false, explanation: "Incorrect."}]}
      ]
    },
    {
      id: "les-1-1-2-2",
      title: "Mass, Weight & Volume",
      description: "Definitions and Units",
      icon: "Scale",
      slides: [
        { id: "init-1", type: "quiz", title: "Pre-Check", content: "Which quantity changes with gravity?", options: [{ id: "A", text: "Mass", isCorrect: false, explanation: "Mass is constant." }, { id: "B", text: "Weight", isCorrect: true, explanation: "Weight = mg, depends on g." }] },
        { id: "init-2", type: "quiz", title: "Pre-Check", content: "Is Litre (L) an SI unit?", options: [{ id: "A", text: "Yes", isCorrect: false, explanation: "SI unit for volume is cubic meter." }, { id: "B", text: "No", isCorrect: true, explanation: "It is a common unit, but not SI." }] },
        { 
          id: "core-1", 
          type: "theory", 
          title: "Mass vs Weight & Volume", 
          content: "**Mass vs Weight:**\n- **Mass:** Amount of matter. Constant.\n- **Weight:** Force exerted by gravity ($W=mg$). Varies with location.\n- SI Unit of Mass: **kg** (Note: Labs often use grams).\n\n**Volume:**\n- SI Unit: $m^3$.\n- Common: Litre (L). $1 L = 1000 mL = 1000 cm^3 = 1 dm^3$." 
        },
        { 
          id: "ret-1", 
          type: "fill_in_blank", 
          title: "Unit Conversion", 
          content: "$1 dm^3$ is equivalent to ___ L.", 
          blankAnswer: "1" 
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Conversion Challenge",
          content: "Convert 2 Litres to cubic centimeters ($cm^3$).",
          numericAnswer: 2000,
          numericTolerance: 0
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "SI unit of current?", options: [{id: "A", text: "Ampere", isCorrect: true, explanation: "A"}, {id: "B", text: "Volt", isCorrect: false, explanation: "Potential diff."}]}
      ]
    },
    {
      id: "les-1-1-2-3",
      title: "Density & Temperature",
      description: "Formulas and Scales",
      icon: "Thermometer",
      slides: [
        { id: "init-1", type: "quiz", title: "Pre-Check", content: "Is negative Kelvin possible?", options: [{ id: "A", text: "Yes", isCorrect: false, explanation: "0 K is absolute zero." }, { id: "B", text: "No", isCorrect: true, explanation: "Kelvin scale starts at 0." }] },
        { id: "init-2", type: "quiz", title: "Pre-Check", content: "Formula relating K and C?", options: [{ id: "A", text: "K = C + 273.15", isCorrect: true, explanation: "Correct." }, { id: "B", text: "K = C - 273.15", isCorrect: false, explanation: "Inverse." }] },
        { 
          id: "core-1", 
          type: "theory", 
          title: "Density and Temp", 
          content: "**Density:**\n- Density = Mass / Volume.\n- SI Unit: $kg/m^3$. Common: $g/cm^3$.\n\n**Temperature:**\n- Scales: Celsius ($^\circ C$), Fahrenheit ($^\circ F$), Kelvin (K).\n- **SI Unit: Kelvin**.\n- $K = ^\circ C + 273.15$\n- $^\circ F = \\frac{9}{5}(^\circ C) + 32$" 
        },
        { 
          id: "vis-1", 
          type: "interactive_canvas", 
          title: "Temp Scales", 
          content: "Interactive thermometer converting C to F to K.", 
          interactiveCanvasId: "chem-temp-converter" 
        },
        { 
          id: "ret-1", 
          type: "fill_in_blank", 
          title: "NCERT Check", 
          content: "Temperatures below ___ degrees Celsius are not possible in the Kelvin scale.", 
          blankAnswer: "-273.15" 
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Calculation",
          content: "Convert $25^\circ C$ (room temp) to Kelvin.",
          numericAnswer: 298.15,
          numericTolerance: 0.1
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "1 L = ? cm3", options: [{id: "A", text: "1000", isCorrect: true, explanation: "Correct."}, {id: "B", text: "100", isCorrect: false, explanation: "No."}]}
      ]
    },
    {
      id: "les-1-1-2-4",
      title: "Scientific Notation",
      description: "Handling Large/Small Numbers",
      icon: "Hash",
      slides: [
        { id: "init-1", type: "quiz", title: "Pre-Check", content: "Express 0.00016 in scientific notation.", options: [{ id: "A", text: "$1.6 \\times 10^{-4}$", isCorrect: true, explanation: "Decimal moved 4 places right." }, { id: "B", text: "$1.6 \\times 10^{-3}$", isCorrect: false, explanation: "Incorrect count." }] },
        { 
          id: "core-1", 
          type: "theory", 
          title: "Scientific Notation", 
          content: "Chemistry deals with huge numbers (molecules) and tiny numbers (mass of atom). \n\nFormat: $N \\times 10^n$\n- $N$ is a number between 1.000... and 9.999...\n- $n$ is the exponent.\n\n**Operations:**\n- Addition/Subtraction: Powers must match.\n- Multiplication: Add exponents.\n- Division: Subtract exponents." 
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Calculation Challenge",
          content: "Solve: $(5.6 \\times 10^5) \\times (6.9 \\times 10^8)$. Report the coefficient (N) only, rounded to 1 decimal place.",
          numericAnswer: 3.9,
          numericTolerance: 0.1
        },
        {
          id: "hint-1",
          type: "quiz",
          title: "Solution Logic",
          content: "In the previous calculation, the exponent becomes:",
          options: [
            { id: "A", text: "13", isCorrect: false, explanation: "5+8=13, but the coefficient 38.64 adjusts it." },
            { id: "B", text: "14", isCorrect: true, explanation: "38.64 x 10^13 -> 3.864 x 10^14." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "K = C + ?", options: [{id: "A", text: "273.15", isCorrect: true, explanation: "Correct"}, {id: "B", text: "100", isCorrect: false, explanation: "No"}]}
      ]
    },
    {
      id: "les-1-1-2-5",
      title: "Significant Figures",
      description: "Rules for Precision",
      icon: "Eye",
      slides: [
        { id: "init-1", type: "quiz", title: "Pre-Check", content: "How many sig figs in 0.0025?", options: [{ id: "A", text: "2", isCorrect: true, explanation: "Leading zeros are not significant." }, { id: "B", text: "4", isCorrect: false, explanation: "Only 2 and 5 count." }] },
        { id: "init-2", type: "quiz", title: "Pre-Check", content: "How many sig figs in 200.0?", options: [{ id: "A", text: "1", isCorrect: false, explanation: "Trailing zeros with a decimal are significant." }, { id: "B", text: "4", isCorrect: true, explanation: "All count." }] },
        { 
          id: "core-1", 
          type: "theory", 
          title: "Rules for Significant Figures", 
          content: "1. All **non-zero** digits are significant.\n2. Zeros **preceding** first non-zero are NOT significant (e.g., 0.03 has 1).\n3. Zeros **between** non-zeros are significant (e.g., 2.005 has 4).\n4. Zeros at the **end** are significant ONLY if there is a decimal point (0.200 has 3, 100 has 1).\n5. Exact numbers (counting objects) have infinite sig figs." 
        },
        { 
          id: "vis-1", 
          type: "interactive_canvas", 
          title: "Sig Fig Tester", 
          content: "Type a number to see its significant figures count.", 
          interactiveCanvasId: "chem-sig-figs" 
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Calculation Rule",
          content: "For addition: 12.11 + 18.0 + 1.012 = 31.122. Round to the correct sig figs.",
          numericAnswer: 31.1,
          numericTolerance: 0
        },
        { 
          id: "ret-1", 
          type: "quiz", 
          title: "Reasoning", 
          content: "Why is the answer 31.1?", 
          options: [
            { id: "A", text: "Least decimal places (18.0 has 1)", isCorrect: true, explanation: "Addition/Subtraction rule uses decimal places." },
            { id: "B", text: "Least sig figs", isCorrect: false, explanation: "That is for multiplication/division." }
          ] 
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Micro = ?", options: [{id: "A", text: "10^-6", isCorrect: true, explanation: "Correct"}, {id: "B", text: "10^-3", isCorrect: false, explanation: "Milli"}]}
      ]
    },
    {
      id: "les-1-1-2-6",
      title: "Dimensional Analysis",
      description: "Unit Factor Method",
      icon: "ArrowRightLeft",
      slides: [
        { id: "init-1", type: "quiz", title: "Pre-Check", content: "To convert inches to cm, we multiply by:", options: [{ id: "A", text: "2.54 cm / 1 in", isCorrect: true, explanation: "This cancels 'in' and leaves 'cm'." }, { id: "B", text: "1 in / 2.54 cm", isCorrect: false, explanation: "This would give in^2 / cm." }] },
        { 
          id: "core-1", 
          type: "theory", 
          title: "Dimensional Analysis", 
          content: "Often used to convert units. Uses **unit factors** (ratios equal to 1).\n\nExample: Convert 3 in to cm.\nUnit factor: $\\frac{2.54 \\text{ cm}}{1 \\text{ in}} = 1$\nCalculation: $3 \\text{ in} \\times \\frac{2.54 \\text{ cm}}{1 \\text{ in}} = 7.62 \\text{ cm}$." 
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Unit Conversion",
          content: "A jug contains 2L of milk. Calculate the volume in cubic meters ($m^3$).\nHint: $1 L = 10^{-3} m^3$.",
          numericAnswer: 0.002,
          numericTolerance: 0
        },
        { 
          id: "ret-1", 
          type: "quiz", 
          title: "Process Check", 
          content: "In dimensional analysis, the goal is to:", 
          options: [
            { id: "A", text: "Cancel out unwanted units", isCorrect: true, explanation: "Units are treated like algebraic variables." },
            { id: "B", text: "Keep all units", isCorrect: false, explanation: "Incorrect." }
          ] 
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Trailing zeros without decimal point are:", options: [{id: "A", text: "Significant", isCorrect: false, explanation: "Not usually."}, {id: "B", text: "Not Significant", isCorrect: true, explanation: "100 has 1 sig fig."}]}
      ]
    }
  ]
};