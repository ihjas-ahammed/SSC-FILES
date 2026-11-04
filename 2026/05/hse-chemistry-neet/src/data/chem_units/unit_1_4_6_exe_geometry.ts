import { Unit } from '../../types';

export const UNIT_1_4_6: Unit = {
  id: "unit-1-4-6",
  title: "Geometry Exercises",
  description: "NCERT Exe 4.1 - 4.20",
  color: "duo-orange",
  lessons: [
    {
      id: "exe-1-4-6-1",
      title: "Lewis Structures",
      description: "Q 4.1 - 4.4",
      icon: "Edit3",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Exercise 4.4", 
          content: "Draw Lewis structure for $CO_3^{2-}$. How many double bonds?", 
          options: [
            { id: "A", text: "1", isCorrect: true, explanation: "One C=O and two C-O-." },
            { id: "B", text: "2", isCorrect: false, explanation: "Incorrect." }
          ] 
        }
      ]
    },
    {
      id: "exe-1-4-6-2",
      title: "Octet Rule",
      description: "Q 4.5",
      icon: "Shield",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Exercise 4.5", 
          content: "Define Octet Rule. Which molecule is electron deficient (incomplete octet)?", 
          options: [
            { id: "A", text: "$BCl_3$", isCorrect: true, explanation: "B has 6 valence e-." },
            { id: "B", text: "$SiCl_4$", isCorrect: false, explanation: "Complete octet." }
          ] 
        }
      ]
    },
    {
      id: "exe-1-4-6-3",
      title: "Lattice Enthalpy",
      description: "Q 4.6",
      icon: "Grid",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Exercise 4.6", 
          content: "Favourable factor for ionic bond?", 
          options: [
            { id: "A", text: "High Lattice Enthalpy", isCorrect: true, explanation: "Stabilizes the crystal." },
            { id: "B", text: "High Ionization Enthalpy", isCorrect: false, explanation: "Unfavourable." }
          ] 
        }
      ]
    },
    {
      id: "exe-1-4-6-4",
      title: "VSEPR Shapes",
      description: "Q 4.7 - 4.8",
      icon: "Box",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Exercise 4.7", 
          content: "Shape of $PH_3$?", 
          options: [
            { id: "A", text: "Trigonal Pyramidal", isCorrect: true, explanation: "Like NH3 (1 lp)." },
            { id: "B", text: "Trigonal Planar", isCorrect: false, explanation: "Like BF3." }
          ] 
        },
        {
          id: "q-2",
          type: "quiz",
          title: "Exercise 4.8",
          content: "Why is bond angle in water (104.5) less than ammonia (107)?",
          options: [
            { id: "A", text: "2 lone pairs in water cause more repulsion", isCorrect: true, explanation: "lp-lp > lp-bp." },
            { id: "B", text: "O is larger than N", isCorrect: false, explanation: "Size is secondary." }
          ]
        }
      ]
    },
    {
      id: "exe-1-4-6-5",
      title: "Resonance",
      description: "Q 4.11 - 4.13",
      icon: "RefreshCw",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Exercise 4.11", 
          content: "In $CO_3^{2-}$, are all C-O bond lengths equal?", 
          options: [
            { id: "A", text: "Yes", isCorrect: true, explanation: "Due to resonance." },
            { id: "B", text: "No", isCorrect: false, explanation: "Double bond would be shorter if static." }
          ] 
        },
        {
          id: "q-2",
          type: "quiz",
          title: "Exercise 4.13",
          content: "Resonance structures for $SO_3$ involves how many canonical forms?",
          options: [
            { id: "A", text: "3", isCorrect: true, explanation: "Double bond rotates." },
            { id: "B", text: "2", isCorrect: false, explanation: "Incorrect." }
          ]
        }
      ]
    },
    {
      id: "exe-1-4-6-6",
      title: "Dipole Moment",
      description: "Q 4.15 - 4.16",
      icon: "ArrowRight",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Exercise 4.15", 
          content: "$CO_2$ is linear because its dipole moment is:", 
          options: [
            { id: "A", text: "Zero", isCorrect: true, explanation: "Cancellation implies linearity." },
            { id: "B", text: "High", isCorrect: false, explanation: "Implies bent." }
          ] 
        }
      ]
    },
    {
      id: "exe-1-4-6-7",
      title: "Ionic Character",
      description: "Q 4.19",
      icon: "Percent",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Exercise 4.19", 
          content: "Arrange by increasing ionic character: LiF, K2O, N2, SO2, ClF3.", 
          options: [
            { id: "A", text: "$N_2 < SO_2 < ClF_3 < K_2O < LiF$", isCorrect: true, explanation: "N2 is non-polar cov, LiF is most ionic." },
            { id: "B", text: "$LiF < K_2O < ...$", isCorrect: false, explanation: "Incorrect." }
          ] 
        }
      ]
    },
    {
      id: "exe-1-4-6-8",
      title: "Shapes Review",
      description: "Q 4.20 - 4.21",
      icon: "Hexagon",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Exercise 4.21", 
          content: "Why is $CH_4$ not square planar?", 
          options: [
            { id: "A", text: "C is sp3 hybridized (Tetrahedral)", isCorrect: true, explanation: "109.5 > 90 (Square planar). Minimizes repulsion." },
            { id: "B", text: "C is sp2", isCorrect: false, explanation: "Incorrect." }
          ] 
        }
      ]
    }
  ]
};