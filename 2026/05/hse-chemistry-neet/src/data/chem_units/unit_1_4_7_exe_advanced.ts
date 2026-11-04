import { Unit } from '../../types';

export const UNIT_1_4_7: Unit = {
  id: "unit-1-4-7",
  title: "Advanced Exercises",
  description: "NCERT Exe 4.21 - 4.40",
  color: "duo-orange",
  lessons: [
    {
      id: "exe-1-4-7-1",
      title: "Dipole Reasons",
      description: "Q 4.22 - 4.23",
      icon: "HelpCircle",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Exercise 4.22", 
          content: "Why does $BeH_2$ have zero dipole?", 
          options: [
            { id: "A", text: "Linear geometry", isCorrect: true, explanation: "Bond dipoles cancel (180 deg)." },
            { id: "B", text: "Bonds are non-polar", isCorrect: false, explanation: "Be-H is polar." }
          ] 
        }
      ]
    },
    {
      id: "exe-1-4-7-2",
      title: "Hybridisation ID",
      description: "Q 4.24 - 4.25",
      icon: "Search",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Exercise 4.25", 
          content: "Reaction: $AlCl_3 + Cl^- \\to AlCl_4^-$. Change in hybridization of Al?", 
          options: [
            { id: "A", text: "$sp^2$ to $sp^3$", isCorrect: true, explanation: "AlCl3 is trigonal planar, AlCl4- is tetrahedral." },
            { id: "B", text: "$sp^3$ to $sp^3d$", isCorrect: false, explanation: "Incorrect." }
          ] 
        }
      ]
    },
    {
      id: "exe-1-4-7-3",
      title: "Sigma & Pi Count",
      description: "Q 4.27 - 4.28",
      icon: "Hash",
      slides: [
        { 
          id: "q-1", 
          type: "numerical", 
          title: "Exercise 4.28(a)", 
          content: "Number of sigma bonds in $C_2H_2$ (Ethyne).", 
          numericAnswer: 3, 
          numericTolerance: 0 
        },
        { 
          id: "q-2", 
          type: "numerical", 
          title: "Exercise 4.28(a)", 
          content: "Number of pi bonds in $C_2H_2$.", 
          numericAnswer: 2, 
          numericTolerance: 0 
        }
      ]
    },
    {
      id: "exe-1-4-7-4",
      title: "Bond Formation",
      description: "Q 4.29 - 4.30",
      icon: "GitMerge",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Exercise 4.29", 
          content: "Consider x-axis as internuclear axis. Which will NOT form a sigma bond?", 
          options: [
            { id: "A", text: "1s and 2px", isCorrect: true, explanation: "px is perpendicular to x-axis (usually z is internuclear, but if x is axis, py/pz are pi. If x is axis, px forms sigma. 1s+2px sigma. 1s+2py pi? No, 1s+2py is zero overlap)." },
            { id: "B", text: "1s and 2s", isCorrect: false, explanation: "Forms sigma." }
          ] 
        },
        {
           id: "correction",
           type: "theory",
           title: "Correction",
           content: "Note: If X is internuclear axis:\n- 1s + 1s = Sigma\n- 1s + 2px = Sigma (Head on)\n- 1s + 2py = Zero overlap (Symmetry mismatch)"
        },
        {
           id: "q-2",
           type: "quiz",
           title: "Exercise 4.29 (Rephrase)",
           content: "If x-axis is internuclear axis, which combination gives ZERO overlap?",
           options: [
             { id: "A", text: "1s and 2py", isCorrect: true, explanation: "Orthogonal." },
             { id: "B", text: "1s and 2s", isCorrect: false, explanation: "Sigma." }
           ]
        }
      ]
    },
    {
      id: "exe-1-4-7-5",
      title: "Hybrid Orbitals",
      description: "Q 4.30",
      icon: "Layers",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Exercise 4.30", 
          content: "Hybridization of carbons in $CH_3-CH=CH_2$?", 
          options: [
            { id: "A", text: "$sp^3, sp^2, sp^2$", isCorrect: true, explanation: "Single bond C is sp3, double bond C is sp2." },
            { id: "B", text: "$sp^3, sp, sp$", isCorrect: false, explanation: "Incorrect." }
          ] 
        }
      ]
    },
    {
      id: "exe-1-4-7-6",
      title: "MOT Stability",
      description: "Q 4.35 - 4.36",
      icon: "Activity",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Exercise 4.35", 
          content: "Why does $Be_2$ not exist?", 
          options: [
            { id: "A", text: "Bond Order is 0", isCorrect: true, explanation: "4 bonding, 4 antibonding e-." },
            { id: "B", text: "Bond Order is 1", isCorrect: false, explanation: "Incorrect." }
          ] 
        },
        { 
          id: "q-2", 
          type: "quiz", 
          title: "Exercise 4.36", 
          content: "Compare stability: $O_2^{2-}$ vs $O_2^+$.", 
          options: [
            { id: "A", text: "$O_2^+ > O_2^{2-}$", isCorrect: true, explanation: "O2+ (BO=2.5) > O2-- (BO=1)." },
            { id: "B", text: "$O_2^{2-} > O_2^+$", isCorrect: false, explanation: "Incorrect." }
          ] 
        }
      ]
    },
    {
      id: "exe-1-4-7-7",
      title: "Axial vs Equatorial",
      description: "Q 4.38",
      icon: "Maximize",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Exercise 4.38", 
          content: "In $PCl_5$, why are axial bonds longer?", 
          options: [
            { id: "A", text: "Repulsion from equatorial pairs", isCorrect: true, explanation: "Axial pairs suffer 3 repulsions at 90 deg." },
            { id: "B", text: "Attraction from P", isCorrect: false, explanation: "No." }
          ] 
        }
      ]
    },
    {
      id: "exe-1-4-7-8",
      title: "Calculations",
      description: "Q 4.40",
      icon: "Calculator",
      slides: [
        { 
          id: "q-1", 
          type: "numerical", 
          title: "Exercise 4.40", 
          content: "Calculate Bond Order of $N_2$.", 
          numericAnswer: 3, 
          numericTolerance: 0 
        },
        { 
          id: "q-2", 
          type: "numerical", 
          title: "Exercise 4.40", 
          content: "Calculate Bond Order of $O_2$.", 
          numericAnswer: 2, 
          numericTolerance: 0 
        },
        {
          id: "q-3",
          type: "numerical",
          title: "Exercise 4.40",
          content: "Calculate Bond Order of $O_2^+$. (15 e-).",
          numericAnswer: 2.5,
          numericTolerance: 0
        }
      ]
    },
    {
      id: "exe-1-4-7-9",
      title: "General Review",
      description: "Mixed Questions",
      icon: "Star",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Review", 
          content: "H-bond is strongest in?", 
          options: [
            { id: "A", text: "HF", isCorrect: true, explanation: "F is most electronegative." },
            { id: "B", text: "H2O", isCorrect: false, explanation: "Strong, but HF individual bond is stronger (though water network is extensive)." }
          ] 
        }
      ]
    }
  ]
};