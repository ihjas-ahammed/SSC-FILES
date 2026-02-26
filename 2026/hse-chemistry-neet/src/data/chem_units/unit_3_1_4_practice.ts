import { Unit } from '../../types';

export const UNIT_3_1_4: Unit = {
  id: "unit-3-1-4",
  title: "Chapter Practice",
  description: "NCERT Exercises & PYQs",
  color: "duo-gray",
  lessons: [
    {
      id: "exe-3-1-4-1",
      title: "Electronic Configs",
      description: "Q 4.1",
      icon: "Edit3",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Config of $Cu^+$", 
          content: "Write electronic config of $Cu^+$ (Z=29).", 
          options: [
            { id: "A", text: "$[Ar] 3d^{10}$", isCorrect: true, explanation: "Loses 4s1 electron." },
            { id: "B", text: "$[Ar] 3d^9 4s^1$", isCorrect: false, explanation: "Incorrect." }
          ] 
        },
        { 
          id: "q-2", 
          type: "numerical", 
          title: "Unpaired Electrons", 
          content: "Number of unpaired electrons in $Mn^{2+}$ (Z=25).", 
          numericAnswer: 5, 
          numericTolerance: 0 
        }
      ]
    },
    {
      id: "exe-3-1-4-2",
      title: "Reasoning Questions",
      description: "Q 4.2 - 4.3",
      icon: "HelpCircle",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Stability", 
          content: "Why is $Mn^{2+}$ more stable than $Fe^{2+}$ towards oxidation to +3?", 
          options: [
            { id: "A", text: "$Mn^{2+}$ has stable $d^5$ half-filled config", isCorrect: true, explanation: "Hard to remove 6th electron from half-filled shell. Fe2+ (d6) loses e- easily to get d5." },
            { id: "B", text: "$Fe^{2+}$ has stable $d^6$", isCorrect: false, explanation: "d6 is not special stable." }
          ] 
        }
      ]
    },
    {
      id: "exe-3-1-4-3",
      title: "Trends & Properties",
      description: "Q 4.5 - 4.8",
      icon: "TrendingUp",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Oxidation States", 
          content: "Stable oxidation state for 3d5 ($Mn$) is?", 
          options: [
            { id: "A", text: "+2, +7", isCorrect: true, explanation: "+2 (half filled), +7 (empty d)." },
            { id: "B", text: "+1", isCorrect: false, explanation: "Uncommon." }
          ] 
        }
      ]
    },
    {
      id: "exe-3-1-4-4",
      title: "Lanthanoids",
      description: "Q 4.7, 4.10",
      icon: "Minimize",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Consequences", 
          content: "Consequence of Lanthanoid Contraction?", 
          options: [
            { id: "A", text: "Similarity of 4d and 5d series (e.g. Zr-Hf)", isCorrect: true, explanation: "Radii are almost same." },
            { id: "B", text: "Decrease in density", isCorrect: false, explanation: "Density increases." }
          ] 
        }
      ]
    },
    {
      id: "exe-3-1-4-5",
      title: "Magnetic Moments",
      description: "Q 4.11",
      icon: "Magnet",
      slides: [
        { 
          id: "q-1", 
          type: "numerical", 
          title: "Calculate Moment", 
          content: "Calculate spin-only magnetic moment for $M^{2+}$ ion (Z=27, Co). Config $3d^7$.", 
          numericAnswer: 3.87, 
          numericTolerance: 0.1 
        },
        {
          id: "sol-1",
          type: "solution",
          title: "Steps",
          content: "Config $3d^7$. Unpaired e- ($n$) = 3. $\\mu = \\sqrt{3(5)} = \\sqrt{15} \\approx 3.87$.",
          interactiveSteps: []
        }
      ]
    },
    {
      id: "exe-3-1-4-6",
      title: "Potassium Dichromate",
      description: "Q 4.14 - 4.15",
      icon: "Beaker",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Reaction Product", 
          content: "Reaction of acidified $K_2Cr_2O_7$ with Iodide ($I^-$)?", 
          options: [
            { id: "A", text: "Liberates Iodine ($I_2$)", isCorrect: true, explanation: "I- oxidised to I2." },
            { id: "B", text: "Forms $IO_3^-$", isCorrect: false, explanation: "In neutral/alkaline KMnO4 maybe." }
          ] 
        }
      ]
    },
    {
      id: "exe-3-1-4-7",
      title: "Reaction Stoichiometry",
      description: "Q 4.16",
      icon: "Scale",
      slides: [
        { 
          id: "q-1", 
          type: "numerical", 
          title: "KMnO4 Reaction", 
          content: "Moles of KMnO4 required to oxidise 1 mole of Ferrous oxalate ($FeC_2O_4$) in acidic medium? (Fe2+->Fe3+, C2O4 2- -> CO2). Total e- lost = 1 + 2 = 3. KMnO4 gains 5.", 
          numericAnswer: 0.6, 
          numericTolerance: 0 
        },
        {
          id: "sol-1",
          type: "solution",
          title: "Steps",
          content: "Equate equivalents. $n_1 \times 5 = 1 \times 3$. $n_1 = 3/5 = 0.6$.",
          interactiveSteps: []
        }
      ]
    },
    {
      id: "exe-3-1-4-8",
      title: "Mixed Concepts",
      description: "Q 4.21 - 4.38",
      icon: "Star",
      slides: [
        { 
          id: "q-1", 
          type: "quiz", 
          title: "Stability of Ions", 
          content: "Why is $Cu^+$ unstable in aqueous solution?", 
          options: [
            { id: "A", text: "Disproportionates to $Cu^{2+}$ and $Cu$", isCorrect: true, explanation: "High hydration energy of Cu2+ drives reaction." },
            { id: "B", text: "Oxidises to $Cu^{3+}$", isCorrect: false, explanation: "No." }
          ] 
        }
      ]
    }
  ]
};