import { Unit } from '../../types';

export const UNIT_1_1_3: Unit = {
  id: "unit-1-1-3",
  title: "Carrier Mechanics",
  description: "Electrons, Holes & Conductivity",
  color: "duo-blue",
  lessons: [
    {
      id: "les-1-1-3-1",
      title: "Hole Current",
      description: "The missing electron",
      icon: "Circle",
      slides: [
        {
          id: "intro",
          type: "quiz",
          title: "Intuition",
          content: "If an electron leaves a bond, the spot it leaves behind becomes effectively:",
          options: [
            { id: "A", text: "Neutral", isCorrect: false, explanation: "An electron (-1) left." },
            { id: "B", text: "Positive", isCorrect: true, explanation: "Absence of negative = Positive." }
          ]
        },
        {
          id: "theory",
          type: "theory",
          title: "Concept of the Hole",
          content: "When a bond breaks (due to heat), an electron becomes free. The vacancy left in the bond is called a **Hole**.\n\n- It acts like a **Positive Charge**.\n- It 'moves' when a neighboring bound electron jumps into it."
        },
        {
          id: "vis",
          type: "interactive_canvas",
          title: "Hole Movement",
          content: "Visualize electron jumping left, making hole move right.",
          interactiveCanvasId: "semi-hole-movement"
        },
        {
          id: "check",
          type: "fill_in_blank",
          title: "Key Term",
          content: "In intrinsic semiconductors, $n_e$ (electrons) is equal to $n_h$ (___).",
          blankAnswer: "holes"
        }
      ]
    },
    {
      id: "les-1-1-3-2",
      title: "Intrinsic Calculation",
      description: "Example 3.7",
      icon: "Calculator",
      slides: [
        {
          id: "goal",
          type: "theory",
          title: "The Challenge",
          content: "**Problem:** In a pure semiconductor, electron density is $6 \\times 10^{19} /m^3$. How many holes in a sample of size $1cm \\times 1cm \\times 1mm$?"
        },
        {
          id: "step1",
          type: "quiz",
          title: "Step 1: Concept",
          content: "For a pure (intrinsic) semiconductor:",
          options: [
            { id: "A", text: "$n_h = n_e$", isCorrect: true, explanation: "Pairs are created together." },
            { id: "B", text: "$n_h > n_e$", isCorrect: false, explanation: "Only in P-type." }
          ]
        },
        {
          id: "step2",
          type: "solution",
          title: "Step 2: Volume",
          content: "Convert dimensions to meters.\n$1cm = 10^{-2}m$, $1mm = 10^{-3}m$.",
          interactiveSteps: [
            { stepText: "$Vol = 10^{-2} \\times 10^{-2} \\times 10^{-3} m^3$" },
            { stepText: "$Vol = 10^{-7} m^3$" }
          ]
        },
        {
          id: "step3",
          type: "numerical",
          title: "Step 3: Calculate",
          content: "Total Holes = Density $\\times$ Volume.\n$n_h = 6 \\times 10^{19} \\times 10^{-7}$. Enter the coefficient X where answer is $X \\times 10^{12}$.",
          numericAnswer: 6,
          numericTolerance: 0.1
        }
      ]
    },
    {
      id: "les-1-1-3-3",
      title: "Conductivity Calculation",
      description: "Example 3.8",
      icon: "Activity",
      slides: [
        {
          id: "formula",
          type: "theory",
          title: "Conductivity Formula",
          content: "Current is carried by both electrons and holes.\n$$ \\sigma = e (n_e \\mu_e + n_h \\mu_h) $$\n\nFor N-Type (doped), electrons dominate ($n_e \\gg n_h$), so:\n$$ \\sigma \\approx e n_e \\mu_e $$"
        },
        {
          id: "problem",
          type: "solution",
          title: "The Problem",
          content: "Find donor density ($N_d$) for N-type Ge.\nGiven: $\\sigma = 5 \\, \\Omega^{-1} cm^{-1}$, $\\mu_e = 3900 \\, cm^2/Vs$.",
          interactiveSteps: [
            { stepText: "Assume $N_d \\approx n_e$. Formula: $N_d = \\sigma / (e \\mu_e)$" },
            { stepText: "Values: $e = 1.6 \\times 10^{-19}$ C." },
            { stepText: "Calculate: $5 / (1.6 \\times 10^{-19} \\times 3900)$" }
          ]
        },
        {
          id: "calc",
          type: "numerical",
          title: "Final Value",
          content: "Calculate $N_d$. Enter X for $X \\times 10^{15} cm^{-3}$. ($5 / 6240 \\times 10^{19}$)",
          numericAnswer: 8.01,
          numericTolerance: 0.1
        },
        {
          id: "units",
          type: "quiz",
          title: "Unit Check",
          content: "Why did we not convert cm to m?",
          options: [
            { id: "A", text: "Because all units were given in cm", isCorrect: true, explanation: "Sigma and Mu were both in cm. Consistency is key." },
            { id: "B", text: "Conductivity doesn't depend on length", isCorrect: false, explanation: "It does." }
          ]
        }
      ]
    }
  ]
};