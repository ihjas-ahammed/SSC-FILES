import { Unit } from '../../types';

export const UNIT_1_2_5: Unit = {
  id: "unit-1-2-5",
  title: "Electronic Theory Exe",
  description: "NCERT Exe 2.1 – 2.30",
  color: "duo-blue",
  lessons: [
    {
      id: "exe-1-2-5-1",
      title: "Subatomic Counts",
      description: "Q 2.1 - 2.4",
      icon: "Hash",
      slides: [
        { 
          id: "q-1", 
          type: "numerical", 
          title: "Exercise 2.1(i)", 
          content: "Calculate the number of electrons which will together weigh one gram. Mass of electron = $9.11 \\times 10^{-28}$ g. (Enter answer as $X \\times 10^{26}$, give X rounded to 2 decimal places).", 
          numericAnswer: 1.10, 
          numericTolerance: 0.05 
        },
        { 
          id: "q-2", 
          type: "numerical", 
          title: "Exercise 2.2(ii)", 
          content: "Find the total number of neutrons in 7 mg of $^{14}C$. (Mass number 14, Atomic number 6). (Enter $X$ where answer is $X \\times 10^{20}$).", 
          numericAnswer: 24.08, 
          numericTolerance: 0.5 
        },
        {
          id: "sol-1",
          type: "solution",
          title: "Solution 2.2(ii)",
          content: "Steps to find neutrons in 7 mg $^{14}C$.",
          interactiveSteps: [
            { stepText: "Step 1: Moles of C.\n$7 \\times 10^{-3} \\text{ g} / 14 \\text{ g/mol} = 0.5 \\times 10^{-3}$ mol." },
            { stepText: "Step 2: Number of atoms.\n$0.5 \\times 10^{-3} \\times 6.022 \\times 10^{23} = 3.011 \\times 10^{20}$ atoms." },
            { stepText: "Step 3: Neutrons per atom.\n$A - Z = 14 - 6 = 8$." },
            { stepText: "Step 4: Total neutrons.\n$8 \\times 3.011 \\times 10^{20} = 24.088 \\times 10^{20}$." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Atomic mass unit scale is based on?", options: [{id: "A", text: "C-12", isCorrect: true, explanation: "Correct"}, {id: "B", text: "O-16", isCorrect: false, explanation: "Old scale"}]}
      ]
    },
    {
      id: "exe-1-2-5-2",
      title: "Wave Parameters",
      description: "Q 2.5 - 2.7",
      icon: "Radio",
      slides: [
        { 
          id: "q-1", 
          type: "numerical", 
          title: "Exercise 2.5", 
          content: "Yellow light has wavelength ($\\lambda$) of 580 nm. Calculate frequency ($\\nu$). (Enter $X$ for $X \\times 10^{14}$ Hz). $c = 3 \\times 10^8$.", 
          numericAnswer: 5.17, 
          numericTolerance: 0.1 
        },
        { 
          id: "q-2", 
          type: "numerical", 
          title: "Exercise 2.6", 
          content: "Find energy of a photon corresponding to light of frequency $3 \\times 10^{15}$ Hz. (Enter $X$ for $X \\times 10^{-18}$ J).", 
          numericAnswer: 1.99, 
          numericTolerance: 0.1 
        }
      ]
    },
    {
      id: "exe-1-2-5-3",
      title: "Photons & Energy",
      description: "Q 2.8 - 2.9",
      icon: "Zap",
      slides: [
        { 
          id: "q-1", 
          type: "numerical", 
          title: "Exercise 2.8", 
          content: "What is the number of photons of light with $\\lambda = 4000$ pm that provide 1 J of energy? (Enter $X$ for $X \\times 10^{16}$).", 
          numericAnswer: 2.01, 
          numericTolerance: 0.1 
        },
        {
          id: "sol-1",
          type: "solution",
          title: "Solution 2.8",
          content: "Calculate photon count.",
          interactiveSteps: [
            { stepText: "Step 1: Energy of 1 photon.\n$E = hc/\\lambda = (6.626 \\times 10^{-34} \\times 3 \\times 10^8) / (4000 \\times 10^{-12})$." },
            { stepText: "$E = 4.97 \\times 10^{-17}$ J." },
            { stepText: "Step 2: Number of photons.\nTotal E / $E_{photon} = 1 / (4.97 \\times 10^{-17}) = 2.01 \\times 10^{16}$." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Is 4000 pm in visible range?", options: [{id: "A", text: "No", isCorrect: true, explanation: "4nm (X-ray/UV)"}, {id: "B", text: "Yes", isCorrect: false, explanation: "Visible is 400-750 nm"}]}
      ]
    },
    {
      id: "exe-1-2-5-4",
      title: "Photoelectric Effect",
      description: "Q 2.10 - 2.12",
      icon: "Sun",
      slides: [
        { 
          id: "q-1", 
          type: "numerical", 
          title: "Exercise 2.10", 
          content: "EM radiation of 242 nm is just sufficient to ionise Sodium. Calculate Ionisation Energy in kJ/mol. (Round to nearest integer).", 
          numericAnswer: 494, 
          numericTolerance: 2 
        },
        { 
          id: "q-2", 
          type: "numerical", 
          title: "Exercise 2.12", 
          content: "Calculate threshold frequency ($\\nu_0$) if work function is $W_0$. Wait, Q2.12 gives $\\lambda=6800$ A for zero velocity. Thus $W_0 = h\\nu = hc/\\lambda$. Calculate $W_0$ in $10^{-19}$ J.", 
          numericAnswer: 2.92, 
          numericTolerance: 0.1 
        }
      ]
    },
    {
      id: "exe-1-2-5-5",
      title: "Bohr Transitions",
      description: "Q 2.13 - 2.15",
      icon: "TrendingDown",
      slides: [
        { 
          id: "q-1", 
          type: "numerical", 
          title: "Exercise 2.13", 
          content: "What is the wavelength (in nm) emitted when electron in H-atom transitions from $n=4$ to $n=2$? (Balmer series).", 
          numericAnswer: 486, 
          numericTolerance: 2 
        },
        {
          id: "sol-1",
          type: "solution",
          title: "Rydberg Calculation",
          content: "Transition $n=4 \\to 2$.",
          interactiveSteps: [
            { stepText: "Formula: $\\bar{\\nu} = 109677 (1/2^2 - 1/4^2) = 109677 (1/4 - 1/16)$" },
            { stepText: "$\\bar{\\nu} = 109677 (3/16) \\approx 20564 \\text{ cm}^{-1}$" },
            { stepText: "$\\lambda = 1/\\bar{\\nu} = 4.86 \\times 10^{-5} \\text{ cm} = 486 \\text{ nm}$." }
          ]
        },
        { 
          id: "q-2", 
          type: "numerical", 
          title: "Exercise 2.15", 
          content: "Max number of emission lines when excited electron in $n=6$ drops to ground state.", 
          numericAnswer: 15, 
          numericTolerance: 0 
        }
      ]
    },
    {
      id: "exe-1-2-5-6",
      title: "Orbit Energies",
      description: "Q 2.16 - 2.19",
      icon: "Circle",
      slides: [
        { 
          id: "q-1", 
          type: "numerical", 
          title: "Exercise 2.16", 
          content: "Energy of 1st orbit is $-2.18 \\times 10^{-18}$ J. What is energy of 5th orbit? (Enter $X$ for $-X \\times 10^{-20}$ J).", 
          numericAnswer: 8.72, 
          numericTolerance: 0.1 
        },
        { 
          id: "q-2", 
          type: "numerical", 
          title: "Exercise 2.18", 
          content: "Energy required to shift electron from 1st to 5th Bohr orbit in H-atom. (Enter $X$ for $X \\times 10^{-18}$ J).", 
          numericAnswer: 2.09, 
          numericTolerance: 0.05 
        }
      ]
    },
    {
      id: "exe-1-2-5-7",
      title: "Velocity & Wavelength",
      description: "Q 2.20 - 2.21",
      icon: "Activity",
      slides: [
        { 
          id: "q-1", 
          type: "numerical", 
          title: "Exercise 2.20", 
          content: "Calculate wavelength of electron moving with velocity $2.05 \\times 10^7$ m/s. (Enter in pm, nearest integer).", 
          numericAnswer: 35, 
          numericTolerance: 1 
        },
        {
          id: "sol-1",
          type: "solution",
          title: "de Broglie Steps",
          content: "Steps for $\\lambda$.",
          interactiveSteps: [
            { stepText: "Formula: $\\lambda = h/mv$." },
            { stepText: "$6.626\\times 10^{-34} / (9.11\\times 10^{-31} \\times 2.05\\times 10^7)$" },
            { stepText: "$= 3.55 \\times 10^{-11} \\text{ m} = 35.5 \\text{ pm}$." }
          ]
        }
      ]
    },
    {
      id: "exe-1-2-5-8",
      title: "Species & Configurations",
      description: "Q 2.22 - 2.23",
      icon: "Users",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Exercise 2.22", 
          content: "Which species is isoelectronic with $Na^+$?", 
          options: [
            { id: "A", text: "$Mg^{2+}$", isCorrect: true, explanation: "Both have 10 electrons." },
            { id: "B", text: "$Ar$", isCorrect: false, explanation: "Ar has 18 electrons." }
          ] 
        },
        { 
          id: "q-2", 
          type: "quiz", 
          title: "Exercise 2.23(iii)", 
          content: "Which atom has configuration $[Ar]4s^2 3d^1$?", 
          options: [
            { id: "A", text: "Scandium (Sc)", isCorrect: true, explanation: "Z=21." },
            { id: "B", text: "Titanium (Ti)", isCorrect: false, explanation: "Ti is $3d^2$." }
          ] 
        }
      ]
    },
    {
      id: "exe-1-2-5-9",
      title: "Orbitals & Quantum #",
      description: "Q 2.24 - 2.30",
      icon: "Compass",
      slides: [
        { 
          id: "q-1", 
          type: "numerical", 
          title: "Exercise 2.24", 
          content: "What is the lowest value of n that allows 'g' orbitals to exist? (l=4).", 
          numericAnswer: 5, 
          numericTolerance: 0 
        },
        { 
          id: "q-2", 
          type: "quiz", 
          title: "Exercise 2.28", 
          content: "Which orbital is NOT possible?", 
          options: [
            { id: "A", text: "1p", isCorrect: true, explanation: "For n=1, l can only be 0 (s)." },
            { id: "B", text: "2s", isCorrect: false, explanation: "Possible." }
          ] 
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Shape of p orbital?", options: [{id: "A", text: "Dumbbell", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Spherical", isCorrect: false, explanation: "s orbital"}]}
      ]
    }
  ]
};