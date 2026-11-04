import { Unit } from '../../types';

export const UNIT_1_4_4: Unit = {
  id: "unit-1-4-4",
  title: "MO Theory",
  description: "Molecular Orbitals & Stability",
  color: "duo-orange",
  lessons: [
    {
      id: "les-1-4-4-1",
      title: "MOT Basics",
      description: "LCAO & Orbitals",
      icon: "GitBranch",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Atomic orbitals combine to form:", options: [{id: "A", text: "Hybrid Orbitals", isCorrect: false, explanation: "In VBT."}, {id: "B", text: "Molecular Orbitals", isCorrect: true, explanation: "In MOT."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Linear Combination of Atomic Orbitals (LCAO)",
          content: "1. **Constructive Interference:** $\\psi_A + \\psi_B \\to \\sigma$ (Bonding MO). Lower energy, stable.\n2. **Destructive Interference:** $\\psi_A - \\psi_B \\to \\sigma^*$ (Antibonding MO). Higher energy, unstable, node between nuclei.\n\nNumber of MOs formed = Number of AOs combined."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "MO Diagram",
          content: "Energy levels: Bonding vs Antibonding.",
          interactiveCanvasId: "chem-mo-diagram"
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "The bonding molecular orbital has ___ energy than the atomic orbitals.",
          blankAnswer: "lower"
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "sp3 shape?", options: [{id: "A", text: "Tetrahedral", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Linear", isCorrect: false, explanation: "sp"}]}
      ]
    },
    {
      id: "les-1-4-4-2",
      title: "Electronic Config",
      description: "Bond Order & Magnetism",
      icon: "List",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Bond Order & Stability",
          content: "$$ \\text{Bond Order} = \\frac{1}{2} (N_b - N_a) $$\n- $N_b$: Electrons in Bonding MO.\n- $N_a$: Electrons in Antibonding MO.\n\nIf B.O. > 0 $\\to$ Stable.\nIf B.O. = 0 $\\to$ Unstable ($He_2$ does not exist).\n\n**Magnetic Nature:**\n- All paired e- $\\to$ Diamagnetic.\n- Unpaired e- $\\to$ Paramagnetic."
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Calculation",
          content: "Calculate bond order of $He_2$. (2 e- in $\\sigma 1s$, 2 e- in $\\sigma^* 1s$).",
          numericAnswer: 0,
          numericTolerance: 0
        },
        {
          id: "sol-1",
          type: "solution",
          title: "Steps",
          content: "Solution for He2.",
          interactiveSteps: [
            { stepText: "$N_b = 2, N_a = 2$." },
            { stepText: "B.O. = $0.5(2-2) = 0$." },
            { stepText: "Molecule does not exist." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Is PCl5 axial bond longer?", options: [{id: "A", text: "Yes", isCorrect: true, explanation: "More repulsion"}, {id: "B", text: "No", isCorrect: false, explanation: "Incorrect"}]}
      ]
    },
    {
      id: "les-1-4-4-3",
      title: "Homonuclear Diatomics",
      description: "O2, N2, F2",
      icon: "Activity",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Energy Orders",
          content: "**Up to $N_2$ (Li, Be, B, C, N):**\n$\\sigma 1s < \\sigma^* 1s < \\sigma 2s < \\sigma^* 2s < \\pi 2p_x = \\pi 2p_y < \\sigma 2p_z < \\dots$\n(s-p mixing pushes $\\sigma 2p$ up).\n\n**For $O_2, F_2$:**\n$\\sigma 2p_z < \\pi 2p_x = \\pi 2p_y$."
        },
        {
          id: "core-2",
          type: "theory",
          title: "Paramagnetism of Oxygen",
          content: "$O_2$ (16e):\n$\\dots \\sigma 2p_z^2, (\\pi 2p_x^2 = \\pi 2p_y^2), (\\pi^* 2p_x^1 = \\pi^* 2p_y^1)$\n\nTwo unpaired electrons in $\\pi^*$ antibonding orbitals. Hence, **Paramagnetic**."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Check",
          content: "Why is $N_2$ diamagnetic?",
          options: [
            { id: "A", text: "No unpaired electrons", isCorrect: true, explanation: "All orbitals paired up to sigma 2p." },
            { id: "B", text: "It has bond order 3", isCorrect: false, explanation: "Bond order doesn't determine magnetism directly." }
          ]
        },
        {
          id: "pyq-1",
          type: "quiz",
          title: "NEET PYQ",
          content: "Which of the following is paramagnetic?",
          options: [
            { id: "A", text: "$O_2$", isCorrect: true, explanation: "2 unpaired e-." },
            { id: "B", text: "$N_2$", isCorrect: false, explanation: "Diamagnetic." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Bond order of O2?", options: [{id: "A", text: "2", isCorrect: true, explanation: "Double bond"}, {id: "B", text: "3", isCorrect: false, explanation: "N2"}]}
      ]
    }
  ]
};