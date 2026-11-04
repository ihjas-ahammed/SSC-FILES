import { Unit } from '../../types';

export const UNIT_5_3_1: Unit = {
  id: "unit-5-3-1",
  title: "Rate Laws & Order",
  description: "Basics of Chemical Kinetics",
  color: "duo-red",
  lessons: [
    {
      id: "les-5-3-1-1",
      title: "Rate of Reaction",
      description: "Average vs Instantaneous",
      icon: "Activity",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Does the rate of a reaction remain constant throughout?", options: [{id: "A", text: "No, decreases with time", isCorrect: true, explanation: "Reactant concentration decreases."}, {id: "B", text: "Yes", isCorrect: false, explanation: "Only for Zero order."}] },
        { id: "init-2", type: "quiz", title: "Concept", content: "Rate of reaction is always:", options: [{id: "A", text: "Positive", isCorrect: true, explanation: "Speed cannot be negative."}, {id: "B", text: "Negative", isCorrect: false, explanation: "Decrease is handled by sign."}] },
        {
          id: "anc-1",
          type: "theory",
          title: "Rate of Reaction",
          content: "Change in concentration of reactant or product in unit time.\nFor $R \\to P$:\n- **Average Rate ($r_{av}$):** $\\frac{-\\Delta [R]}{\\Delta t} = \\frac{+\\Delta [P]}{\\Delta t}$\n- **Instantaneous Rate ($r_{inst}$):** $\\frac{-d[R]}{dt} = \\frac{+d[P]}{dt}$ (Slope of tangent at time t).\n\nNegative sign indicates decrease in reactant concentration."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Rate Graph",
          content: "Visualizing decrease of R and increase of P.",
          interactiveCanvasId: "kinetics-rate-graph"
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "The slope of the tangent at any point in the Concentration vs Time plot gives the ___ rate.",
          blankAnswer: "instantaneous"
        },
        {
          id: "ar-1",
          type: "quiz",
          title: "Assertion-Reason",
          content: "**Assertion:** Rate of reaction is always positive.\n**Reason:** The minus sign in $-d[R]/dt$ makes the rate positive as $d[R]$ is negative.",
          options: [
            { id: "A", text: "Both True, R explains A", isCorrect: true, explanation: "Since conc decreases, change is negative. Minus x Minus = Plus." },
            { id: "B", text: "Both False", isCorrect: false, explanation: "Incorrect." }
          ]
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Units",
          content: "Unit of rate for gaseous reaction?",
          options: [
            { id: "A", text: "atm $s^{-1}$", isCorrect: true, explanation: "Pressure change per time." },
            { id: "B", text: "mol $L^{-1}$", isCorrect: false, explanation: "That's concentration." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Is rusting a fast or slow reaction?", options: [{id: "A", text: "Slow", isCorrect: true, explanation: "Takes days/months"}, {id: "B", text: "Fast", isCorrect: false, explanation: "Ionic reactions are fast"}]}
      ]
    },
    {
      id: "les-5-3-1-2",
      title: "Stoichiometry & Rate",
      description: "Expressing Rate",
      icon: "Scale",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "In $2A \\to B$, rate of disappearance of A is:", options: [{id: "A", text: "Twice the rate of formation of B", isCorrect: true, explanation: "2 moles A go for 1 mole B."}, {id: "B", text: "Half the rate", isCorrect: false, explanation: "Inverse."}] },
        {
          id: "anc-1",
          type: "theory",
          title: "Stoichiometric Coefficients",
          content: "For general reaction $aA + bB \\to cC + dD$:\n\n$$ \\text{Rate} = -\\frac{1}{a}\\frac{d[A]}{dt} = -\\frac{1}{b}\\frac{d[B]}{dt} = +\\frac{1}{c}\\frac{d[C]}{dt} = +\\frac{1}{d}\\frac{d[D]}{dt} $$\n\nTo equate rates, divide by stoichiometric coefficient."
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Challenge",
          content: "For $N_2 + 3H_2 \\to 2NH_3$, if rate of disappearance of $H_2$ is $6 \\times 10^{-3}$ M/s, what is rate of formation of $NH_3$ in $10^{-3}$ M/s?",
          numericAnswer: 4,
          numericTolerance: 0.1
        },
        {
          id: "sol-1",
          type: "solution",
          title: "Calculation",
          content: "Relation",
          interactiveSteps: [
            { stepText: "Rate = $-\\frac{1}{3}\\frac{d[H_2]}{dt} = +\\frac{1}{2}\\frac{d[NH_3]}{dt}$" },
            { stepText: "$\\frac{1}{3}(6) = \\frac{1}{2}(\\text{Rate } NH_3)$" },
            { stepText: "$2 = 0.5 \\times \\text{Rate } NH_3 \\implies \\text{Rate } NH_3 = 4$." }
          ]
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Relation Check",
          content: "For $2HI \\to H_2 + I_2$, Rate = $-1/2 d[HI]/dt = d[H_2]/dt$. True?",
          options: [
            { id: "A", text: "Yes", isCorrect: true, explanation: "Correct division by coefficient." },
            { id: "B", text: "No", isCorrect: false, explanation: "Incorrect." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Unit of rate constant for Zero order?", options: [{id: "A", text: "mol L-1 s-1", isCorrect: true, explanation: "Same as rate"}, {id: "B", text: "s-1", isCorrect: false, explanation: "First order"}]}
      ]
    },
    {
      id: "les-5-3-1-3",
      title: "Rate Law & Order",
      description: "Experimental Dependence",
      icon: "FileText",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Can rate law be predicted from balanced equation?", options: [{id: "A", text: "No, it's experimental", isCorrect: true, explanation: "Except for elementary reactions."}, {id: "B", text: "Yes, using coefficients", isCorrect: false, explanation: "Only for elementary."}] },
        {
          id: "anc-1",
          type: "theory",
          title: "Rate Law & Order",
          content: "Expression relating rate to concentration of reactants.\n$$ \\text{Rate} = k [A]^x [B]^y $$\n- $k$: Rate Constant.\n- $x, y$: Orders wrt A and B (Experimental).\n- **Overall Order:** $n = x + y$.\n- Order can be 0, 1, 2, 3 or fractional."
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "The sum of powers of the concentration of the reactants in the rate law expression is called the ___ of that chemical reaction.",
          blankAnswer: "order"
        },
        {
          id: "app-1",
          type: "numerical",
          title: "Find Order",
          content: "Rate = $k [A]^{1/2} [B]^{3/2}$. What is the overall order?",
          numericAnswer: 2,
          numericTolerance: 0
        },
        {
          id: "pyq-1",
          type: "quiz",
          title: "NEET PYQ",
          content: "Unit of rate constant for zero order reaction?",
          options: [
            { id: "A", text: "mol $L^{-1} s^{-1}$", isCorrect: true, explanation: "Rate = k. Units match." },
            { id: "B", text: "$s^{-1}$", isCorrect: false, explanation: "First order." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Molarity unit?", options: [{id: "A", text: "mol/L", isCorrect: true, explanation: "Correct"}, {id: "B", text: "mol/kg", isCorrect: false, explanation: "Molality"}]}
      ]
    },
    {
      id: "les-5-3-1-4",
      title: "Molecularity vs Order",
      description: "Elementary Reactions",
      icon: "Users",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Can molecularity be zero?", options: [{id: "A", text: "No", isCorrect: true, explanation: "Colliding particles cannot be zero."}, {id: "B", text: "Yes", isCorrect: false, explanation: "Order can be zero."}] },
        {
          id: "anc-1",
          type: "theory",
          title: "Molecularity",
          content: "Number of reacting species (atoms/ions/molecules) taking part in an **elementary reaction**, colliding simultaneously.\n- Theoretical concept.\n- Can be 1 (Uni), 2 (Bi), 3 (Ter). >3 is very rare.\n- Applicable only to elementary steps.\n\n**Order:** Experimental, applicable to complex reactions, can be fractional/zero."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Complex Reaction",
          content: "For a complex reaction, order is given by:",
          options: [
            { id: "A", text: "Slowest (Rate Determining) Step", isCorrect: true, explanation: "Bottleneck principle." },
            { id: "B", text: "Fastest Step", isCorrect: false, explanation: "Incorrect." }
          ]
        },
        {
          id: "ar-1",
          type: "quiz",
          title: "Assertion-Reason",
          content: "**Assertion:** Order and molecularity are always same for elementary reactions.\n**Reason:** Order is experimental, Molecularity is theoretical.",
          options: [
            { id: "A", text: "Both True, R does not explain A", isCorrect: true, explanation: "For elementary, they coincide, but definitions differ." },
            { id: "B", text: "Assertion False", isCorrect: false, explanation: "They are same for elementary." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Example of zero order?", options: [{id: "A", text: "Decomposition of NH3 on Pt", isCorrect: true, explanation: "Surface catalysis"}, {id: "B", text: "Radioactive decay", isCorrect: false, explanation: "First order"}]}
      ]
    },
    {
      id: "les-5-3-1-5",
      title: "Zero Order Integrated",
      description: "Equations & Graphs",
      icon: "TrendingDown",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "In zero order, rate depends on:", options: [{id: "A", text: "Independent of concentration", isCorrect: true, explanation: "[R]^0 = 1."}, {id: "B", text: "Initial concentration", isCorrect: false, explanation: "Incorrect."}] },
        {
          id: "anc-1",
          type: "theory",
          title: "Zero Order Integration",
          content: "Rate = $-d[R]/dt = k[R]^0 = k$.\n\n**Integrated Equation:**\n$$ [R] = -kt + [R]_0 $$\n\n- Plot of $[R]$ vs $t$ is a straight line.\n- Slope = $-k$.\n- Intercept = $[R]_0$."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Zero Order Plot",
          content: "Linear decrease of concentration.",
          interactiveCanvasId: "kinetics-zero-order"
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "The decomposition of gaseous ammonia on a hot platinum surface is a ___ order reaction at high pressure.",
          blankAnswer: "zero"
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Half Life (Zero)",
          content: "$t_{1/2}$ for zero order is:",
          options: [
            { id: "A", text: "$[R]_0 / 2k$", isCorrect: true, explanation: "Directly proportional to initial conc." },
            { id: "B", text: "$0.693 / k$", isCorrect: false, explanation: "First order." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Unit of k for zero order?", options: [{id: "A", text: "mol L-1 s-1", isCorrect: true, explanation: "Correct"}, {id: "B", text: "s-1", isCorrect: false, explanation: "First order"}]}
      ]
    },
    {
      id: "les-5-3-1-6",
      title: "First Order Integrated",
      description: "Logarithmic Decay",
      icon: "TrendingDown",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Radioactive decay follows:", options: [{id: "A", text: "First Order", isCorrect: true, explanation: "Rate proportional to N."}, {id: "B", text: "Zero Order", isCorrect: false, explanation: "No."}] },
        {
          id: "anc-1",
          type: "theory",
          title: "First Order Integration",
          content: "Rate = $-d[R]/dt = k[R]$.\n\n**Integrated Equation:**\n$$ \\ln[R] = -kt + \\ln[R]_0 $$\n$$ k = \\frac{2.303}{t} \\log \\frac{[R]_0}{[R]} $$\n\n- Plot $\\ln[R]$ vs $t$: Slope = $-k$.\n- Plot $\\log([R]_0/[R])$ vs $t$: Slope = $k/2.303$."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "First Order Plot",
          content: "Linear plot of ln[R] vs time.",
          interactiveCanvasId: "kinetics-first-order"
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Solve k",
          content: "If reaction 50% complete in 10s, find k ($X \\times 10^{-2}$). $0.693/10$.",
          numericAnswer: 6.93,
          numericTolerance: 0.1
        },
        {
          id: "pyq-1",
          type: "quiz",
          title: "NEET PYQ",
          content: "A plot of $\\log[R]$ vs $t$ gives a straight line with slope:",
          options: [
            { id: "A", text: "$-k/2.303$", isCorrect: true, explanation: "From integrated rate law." },
            { id: "B", text: "$-k$", isCorrect: false, explanation: "For ln[R]." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Unit of k for 1st order?", options: [{id: "A", text: "s-1", isCorrect: true, explanation: "Correct"}, {id: "B", text: "mol/L s", isCorrect: false, explanation: "Zero order"}]}
      ]
    },
    {
      id: "les-5-3-1-7",
      title: "Half-Life Period",
      description: "t1/2 Formulas",
      icon: "Clock",
      slides: [
        {
          id: "anc-1",
          type: "theory",
          title: "Half-Life ($t_{1/2}$)",
          content: "Time in which concentration reduces to half.\n\n1. **Zero Order:** $t_{1/2} = \\frac{[R]_0}{2k}$.\n   - Proportional to initial concentration.\n2. **First Order:** $t_{1/2} = \\frac{0.693}{k}$.\n   - **Independent** of initial concentration."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Check",
          content: "For a first order reaction, if conc is doubled, half-life:",
          options: [
            { id: "A", text: "Remains same", isCorrect: true, explanation: "Independent of [R]0." },
            { id: "B", text: "Doubles", isCorrect: false, explanation: "True for Zero order." }
          ]
        },
        {
          id: "app-1",
          type: "numerical",
          title: "Calculation",
          content: "$t_{1/2} = 69.3$ min. Find k in $min^{-1}$. (Enter X where answer is $X \\times 10^{-2}$).",
          numericAnswer: 1,
          numericTolerance: 0
        },
        {
          id: "sol-1",
          type: "solution",
          title: "Steps",
          content: "$k = 0.693/t_{1/2}$",
          interactiveSteps: [
            { stepText: "$k = 0.693 / 69.3 = 0.01$." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Is half-life constant for radioactive decay?", options: [{id: "A", text: "Yes", isCorrect: true, explanation: "1st order"}, {id: "B", text: "No", isCorrect: false, explanation: "Incorrect"}]}
      ]
    },
    {
      id: "les-5-3-1-8",
      title: "Pseudo First Order",
      description: "Excess Solvent",
      icon: "Minimize",
      slides: [
        {
          id: "anc-1",
          type: "theory",
          title: "Pseudo First Order Reaction",
          content: "Reaction is higher order, but behaves as first order because one reactant is in **large excess** (concentration remains constant).\n\n**Example:** Hydrolysis of Ester.\n$CH_3COOEt + H_2O \\xrightarrow{H^+} CH_3COOH + EtOH$\nRate = $k [Ester][H_2O] \\approx k' [Ester]$."
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "Inversion of cane sugar is another ___ first order reaction.",
          blankAnswer: "pseudo"
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Identify",
          content: "For pseudo first order, the rate constant $k'$ involves:",
          options: [
            { id: "A", text: "Concentration of excess reactant", isCorrect: true, explanation: "$k' = k[H_2O]$." },
            { id: "B", text: "Only catalyst", isCorrect: false, explanation: "Incorrect." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Hydrolysis of ester gives?", options: [{id: "A", text: "Acid + Alcohol", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Aldehyde", isCorrect: false, explanation: "No"}]}
      ]
    }
  ]
};