import { Unit } from '../../types';

export const UNIT_5_2_1: Unit = {
  id: "unit-5-2-1",
  title: "Cells & Nernst Equation",
  description: "Electrochemical Cells & Potentials",
  color: "duo-blue",
  lessons: [
    {
      id: "les-5-2-1-1",
      title: "Electrochemical Cells",
      description: "Galvanic vs Electrolytic",
      icon: "Battery",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept Check", content: "A device converting chemical energy to electrical energy is:", options: [{id: "A", text: "Galvanic Cell", isCorrect: true, explanation: "Spontaneous redox generates current."}, {id: "B", text: "Electrolytic Cell", isCorrect: false, explanation: "Uses electrical energy for reaction."}] },
        { id: "init-2", type: "quiz", title: "Concept Check", content: "In a Galvanic cell, the anode is:", options: [{id: "A", text: "Negative", isCorrect: true, explanation: "Source of electrons (Oxidation)."}, {id: "B", text: "Positive", isCorrect: false, explanation: "That's cathode."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Electrochemical Cells",
          content: "**Electrochemistry:** Study of production of electricity from spontaneous chemical reactions and use of electrical energy to bring about non-spontaneous transformations.\n\n**Two Types:**\n1. **Galvanic (Voltaic) Cell:** Chemical Energy $\\to$ Electrical Energy (e.g., Daniell Cell).\n2. **Electrolytic Cell:** Electrical Energy $\\to$ Chemical Energy."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "The Daniell Cell",
          content: "Visualizing Zn-Cu cell. Zn dissolves (Anode), Cu deposits (Cathode).",
          interactiveCanvasId: "electro-galvanic-cell"
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "In a galvanic cell, the half-cell in which oxidation takes place is called ___ and it has a negative potential.",
          blankAnswer: "anode"
        },
        {
          id: "ar-1",
          type: "quiz",
          title: "Assertion-Reason",
          content: "**Assertion:** In Daniell cell, electrons flow from Zn to Cu.\n**Reason:** Current flows from Cu to Zn.",
          options: [
            { id: "A", text: "Both True, R explains A", isCorrect: false, explanation: "Conventionally current is opposite to electron flow, but reason is just a restatement of direction." },
            { id: "B", text: "Both True, R does not explain A", isCorrect: true, explanation: "Both are facts of the setup." }
          ]
        },
        {
          id: "app-1",
          type: "quiz",
          title: "External Potential",
          content: "If external opposing potential $E_{ext} > 1.1 V$ is applied to Daniell cell ($E^0 = 1.1 V$), what happens?",
          options: [
            { id: "A", text: "Electrons flow Cu to Zn", isCorrect: true, explanation: "Cell behaves as Electrolytic cell (Reverse reaction)." },
            { id: "B", text: "Reaction stops", isCorrect: false, explanation: "Stops only at E_ext = 1.1 V." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Oxidation state of Zn in ZnSO4?", options: [{id: "A", text: "+2", isCorrect: true, explanation: "Correct"}, {id: "B", text: "+1", isCorrect: false, explanation: "Zn is group 12"}]}
      ]
    },
    {
      id: "les-5-2-1-2",
      title: "Electrode Potential",
      description: "Standard Hydrogen Electrode",
      icon: "Thermometer",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept Check", content: "Absolute potential of a single electrode:", options: [{id: "A", text: "Can be measured", isCorrect: false, explanation: "Needs a reference."}, {id: "B", text: "Cannot be measured", isCorrect: true, explanation: "Only difference is measurable."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Standard Hydrogen Electrode (SHE)",
          content: "Reference electrode assigned **zero potential** at all temperatures.\n- **Setup:** Pt foil coated with Pt black, $H_2$ gas at 1 bar, $H^+$ solution at 1 M.\n- **Reaction:** $H^+(aq) + e^- \\to \\frac{1}{2} H_2(g)$ (Reduction)."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "SHE Setup",
          content: "Visual of the Standard Hydrogen Electrode.",
          interactiveCanvasId: "electro-she"
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "According to IUPAC convention, standard reduction potentials are now called standard ___ potentials.",
          blankAnswer: "electrode"
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Application",
          content: "If $E^0$ of metal M is negative, it means:",
          options: [
            { id: "A", text: "M is a stronger reducing agent than H2", isCorrect: true, explanation: "M oxidizes easily to M+." },
            { id: "B", text: "M is a weaker reducing agent", isCorrect: false, explanation: "Positive E0 means weaker." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Pressure of gas in SHE?", options: [{id: "A", text: "1 bar", isCorrect: true, explanation: "Standard state"}, {id: "B", text: "1 atm", isCorrect: false, explanation: "Old convention"}]}
      ]
    },
    {
      id: "les-5-2-1-3",
      title: "Electrochemical Series",
      description: "E0 Values & Strength",
      icon: "List",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept Check", content: "Fluorine ($F_2$) has highest positive $E^0$. It is:", options: [{id: "A", text: "Strongest Oxidising Agent", isCorrect: true, explanation: "Gets reduced easily."}, {id: "B", text: "Strongest Reducing Agent", isCorrect: false, explanation: "Incorrect."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Electrochemical Series",
          content: "Arrangement of elements in order of increasing standard reduction potentials.\n- **Top (High +ve):** Strong Oxidising Agents ($F_2, Au^{3+}, MnO_4^-$).\n- **Bottom (High -ve):** Strong Reducing Agents ($Li, K, Mg$).\n\n$E^0_{cell} = E^0_{cathode} - E^0_{anode}$."
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Calculation",
          content: "Calculate $E^0_{cell}$ for $Zn|Zn^{2+} || Cu^{2+}|Cu$. Given $E^0_{Cu} = 0.34V, E^0_{Zn} = -0.76V$.",
          numericAnswer: 1.1,
          numericTolerance: 0
        },
        {
          id: "sol-1",
          type: "solution",
          title: "Solution",
          content: "Cathode (Cu) - Anode (Zn).",
          interactiveSteps: [
            { stepText: "$E^0_{cell} = 0.34 - (-0.76)$" },
            { stepText: "$= 1.10$ V." }
          ]
        },
        {
          id: "pyq-1",
          type: "quiz",
          title: "NEET PYQ",
          content: "Reaction is feasible if $E^0_{cell}$ is:",
          options: [
            { id: "A", text: "Positive", isCorrect: true, explanation: "Corresponds to negative Delta G." },
            { id: "B", text: "Negative", isCorrect: false, explanation: "Non-spontaneous." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Li is in Group?", options: [{id: "A", text: "1", isCorrect: true, explanation: "Alkali metal"}, {id: "B", text: "2", isCorrect: false, explanation: "Alkaline earth"}]}
      ]
    },
    {
      id: "les-5-2-1-4",
      title: "Nernst Equation I",
      description: "Concept & Formula",
      icon: "FunctionSquare",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Does electrode potential depend on concentration?", options: [{id: "A", text: "Yes", isCorrect: true, explanation: "Nernst equation."}, {id: "B", text: "No", isCorrect: false, explanation: "Only E0 is constant."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Nernst Equation",
          content: "For reaction $M^{n+} + ne^- \\to M(s)$:\n$$ E = E^0 - \\frac{RT}{nF} \\ln \\frac{1}{[M^{n+}]} $$\n\nFor Cell Reaction $aA + bB \\to cC + dD$ at 298K:\n$$ E_{cell} = E^0_{cell} - \\frac{0.059}{n} \\log \\frac{[C]^c [D]^d}{[A]^a [B]^b} $$"
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "In Nernst equation, the concentration of solid M is taken as ___.",
          blankAnswer: "unity"
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Trend",
          content: "For $Zn^{2+} + 2e^- \\to Zn$, if $[Zn^{2+}]$ increases, $E_{red}$ will:",
          options: [
            { id: "A", text: "Increase", isCorrect: true, explanation: "$E = E^0 - (- \\log [Zn^{2+}]) = E^0 + \\log [Zn^{2+}]$. Higher conc favors reduction." },
            { id: "B", text: "Decrease", isCorrect: false, explanation: "Check the sign." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Log 10 is?", options: [{id: "A", text: "1", isCorrect: true, explanation: "Correct"}, {id: "B", text: "0", isCorrect: false, explanation: "Log 1"}]}
      ]
    },
    {
      id: "les-5-2-1-5",
      title: "Nernst Numerical",
      description: "Calculating EMF",
      icon: "Calculator",
      slides: [
        {
          id: "num-1",
          type: "numerical",
          title: "Challenge",
          content: "Calculate EMF of cell: $Mg | Mg^{2+}(0.001M) || Cu^{2+}(0.0001M) | Cu$.\n$E^0_{cell} = 2.71 V$. n=2. (Use log 10 = 1).",
          numericAnswer: 2.68,
          numericTolerance: 0.05
        },
        {
          id: "sol-1",
          type: "solution",
          title: "Step-by-Step",
          content: "Apply Nernst Equation.",
          interactiveSteps: [
            { stepText: "$Q = [Mg^{2+}] / [Cu^{2+}] = 10^{-3} / 10^{-4} = 10$." },
            { stepText: "$E = 2.71 - (0.059/2) \\log(10)$" },
            { stepText: "$E = 2.71 - 0.0295(1) = 2.68$ V." }
          ]
        },
        {
          id: "trap-1",
          type: "quiz",
          title: "Spot the Error",
          content: "Common mistake in this calculation:",
          options: [
            { id: "A", text: "Inverting Anode/Cathode in Q", isCorrect: true, explanation: "Remember Q = Products(Anode ion) / Reactants(Cathode ion)." },
            { id: "B", text: "Using 0.059 at 298K", isCorrect: false, explanation: "That is correct." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "R value?", options: [{id: "A", text: "8.314 J/K mol", isCorrect: true, explanation: "Correct"}, {id: "B", text: "0.0821", isCorrect: false, explanation: "Gas constant"}]}
      ]
    },
    {
      id: "les-5-2-1-6",
      title: "Equilibrium Constant K",
      description: "Relation to E0",
      icon: "Scale",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "At equilibrium, $E_{cell}$ is:", options: [{id: "A", text: "Zero", isCorrect: true, explanation: "No current flows."}, {id: "B", text: "$E^0_{cell}$", isCorrect: false, explanation: "Only at standard states."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Equilibrium Constant",
          content: "At equilibrium, $E_{cell} = 0$ and $Q = K_c$.\nSubstituting in Nernst Equation:\n\n$$ E^0_{cell} = \\frac{0.059}{n} \\log K_c $$\n\nAllows calculation of $K_c$ from standard potential."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Equilibrium Point",
          content: "Reaction stops when potential difference is zero.",
          interactiveCanvasId: "electro-equilibrium" 
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Calculate K",
          content: "For a cell with $E^0 = 0.59 V$ and $n=1$, calculate $\\log K_c$.",
          numericAnswer: 10,
          numericTolerance: 0.1
        },
        {
          id: "sol-1",
          type: "solution",
          title: "Calculation",
          content: "Rearranging formula.",
          interactiveSteps: [
            { stepText: "$\\log K_c = n E^0 / 0.059$" },
            { stepText: "$1 \\times 0.59 / 0.059 = 10$." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Is Delta G zero at equilibrium?", options: [{id: "A", text: "Yes", isCorrect: true, explanation: "Correct"}, {id: "B", text: "No", isCorrect: false, explanation: "Incorrect"}]}
      ]
    },
    {
      id: "les-5-2-1-7",
      title: "Gibbs Energy",
      description: "Work & Potential",
      icon: "Zap",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Gibbs Energy & Cell Potential",
          content: "Electrical work done in one second = Electrical potential $\\times$ Total charge.\nReversible work done = $-\\Delta G$.\n\n$$ \\Delta_r G = -nFE_{cell} $$\n$$ \\Delta_r G^0 = -nFE^0_{cell} $$\n\n$E$ is intensive, $\\Delta G$ is extensive."
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "Formula",
          content: "The value of Faraday constant F is approx ___ C/mol.",
          blankAnswer: "96500"
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Calculate Delta G",
          content: "For Daniell cell ($E^0=1.1V, n=2$), calc $\\Delta_r G^0$ in kJ/mol. ($F=96500$).",
          numericAnswer: -212.3,
          numericTolerance: 1
        },
        {
          id: "sol-1",
          type: "solution",
          title: "Steps",
          content: "Calculation",
          interactiveSteps: [
            { stepText: "$\\Delta G = -2 \\times 96500 \\times 1.1$" },
            { stepText: "$= -212300$ J/mol" },
            { stepText: "$= -212.3$ kJ/mol." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Unit of G?", options: [{id: "A", text: "J/mol", isCorrect: true, explanation: "Energy"}, {id: "B", text: "Volts", isCorrect: false, explanation: "Potential"}]}
      ]
    }
  ]
};