import { Unit } from '../../types';

export const UNIT_3_1_1: Unit = {
  id: "unit-3-1-1",
  title: "d-Block Elements",
  description: "Position, Configurations & Properties",
  color: "duo-gray",
  lessons: [
    {
      id: "les-3-1-1-1",
      title: "Position & Configuration",
      description: "General Electronic Config",
      icon: "Grid",
      slides: [
        { id: "pre-1", type: "quiz", title: "Pre-Check", content: "Transition elements belong to which block?", options: [{id: "A", text: "d-block", isCorrect: true, explanation: "Groups 3-12."}, {id: "B", text: "f-block", isCorrect: false, explanation: "Inner transition."}] },
        { id: "pre-2", type: "quiz", title: "Pre-Check", content: "Is Zinc considered a typical transition element?", options: [{id: "A", text: "Yes", isCorrect: false, explanation: "Full d10 config."}, {id: "B", text: "No", isCorrect: true, explanation: "Does not have partly filled d-orbitals in ground or common oxidation state."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Position & Definition",
          content: "The **d-block** occupies the middle section (Groups 3-12). \n**Definition:** Transition elements have incompletely filled d-subshells in their ground state or in any of their common oxidation states.\n\n**General Configuration:**\n$$(n-1)d^{1-10}ns^{1-2}$$"
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "The d-Block",
          content: "Visualizing the position of transition elements and the 'pseudo-transition' elements (Zn, Cd, Hg).",
          interactiveCanvasId: "d-block-position"
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "Zinc, Cadmium, and Mercury have full ___ configuration ($d^{10}$) and are not regarded as transition metals.",
          blankAnswer: "d10"
        },
        {
          id: "ar-1",
          type: "quiz",
          title: "Assertion-Reason",
          content: "**Assertion:** Copper (Z=29) is a transition element.\n**Reason:** It has completely filled d-orbitals ($3d^{10}$) in its ground state.",
          options: [
            { id: "A", text: "Both True, R explains A", isCorrect: false, explanation: "Reason contradicts Assertion's classification." },
            { id: "B", text: "Assertion True, Reason True, but R does not explain A", isCorrect: false, explanation: "Wait, Cu is transition because Cu2+ is 3d9." },
            { id: "C", text: "Assertion True, Reason True, but Definition applies to ions too", isCorrect: true, explanation: "Cu is transition because in +2 state it has 3d9 (incomplete)." }
          ]
        },
        {
          id: "trap-1",
          type: "quiz",
          title: "Spot the Error",
          content: "Which element is NOT a transition element despite being in the d-block?",
          options: [
            { id: "A", text: "Scandium", isCorrect: false, explanation: "Sc is transition (3d1)." },
            { id: "B", text: "Zinc", isCorrect: true, explanation: "Zn has 3d10 in ground and +2 state." }
          ]
        },
        {
          id: "pyq-1",
          type: "quiz",
          title: "NEET PYQ Integration",
          content: "Which among the following electronic configurations belong to main group elements? (NEET 2025)\nA. [Ne]3s1\nB. [Ar]3d3 4s2\nC. [Kr]4d10 5s2 5p5\nD. [Ar]3d10 4s1\nE. [Rn]5f0 6d2 7s2",
          options: [
            { id: "A", text: "A and C only", isCorrect: true, explanation: "A (s-block) and C (p-block) are main group. B, D are transition. E is f-block." },
            { id: "B", text: "B and D only", isCorrect: false, explanation: "Transition elements." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Heisenberg's Uncertainty Principle formula?", options: [{id: "A", text: "dx * dp >= h/4pi", isCorrect: true, explanation: "Correct"}, {id: "B", text: "E = mc^2", isCorrect: false, explanation: "Einstein"}]}
      ]
    },
    {
      id: "les-3-1-1-2",
      title: "Physical Properties",
      description: "Melting Points & Enthalpy",
      icon: "Activity",
      slides: [
        { id: "init-1", type: "quiz", title: "Pre-Check", content: "Transition metals generally have:", options: [{id: "A", text: "Low Melting Points", isCorrect: false, explanation: "High due to strong bonding."}, {id: "B", text: "High Melting Points", isCorrect: true, explanation: "Involvement of (n-1)d electrons."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Physical Properties",
          content: "Transition metals are hard, have high MP/BP, and high enthalpies of atomisation.\n\n**Reason:** Strong interatomic bonding involving both $ns$ and $(n-1)d$ electrons.\n**Trend:** MP rises to a maximum at $d^5$ (maximum unpaired electrons) and then falls."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Melting Point Trends",
          content: "Graph showing MP of 3d series. Note the dip at Mn.",
          interactiveCanvasId: "d-block-melting-points"
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Anomaly Check",
          content: "Which element in 3d series has an anomalously low melting point?",
          options: [
            { id: "A", text: "Mn (Manganese)", isCorrect: true, explanation: "Stable d5 config leads to weaker metallic bonding." },
            { id: "B", text: "Fe (Iron)", isCorrect: false, explanation: "High MP." }
          ]
        },
        {
          id: "ar-1",
          type: "quiz",
          title: "Assertion-Reason",
          content: "**Assertion:** Transition metals have high enthalpy of atomisation.\n**Reason:** They have large number of unpaired electrons participating in interatomic bonding.",
          options: [
            { id: "A", text: "Both True, R explains A", isCorrect: true, explanation: "Strong bonding requires high energy to break." },
            { id: "B", text: "Both False", isCorrect: false, explanation: "Incorrect." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Ionic bond is formed by?", options: [{id: "A", text: "Transfer of electrons", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Sharing of electrons", isCorrect: false, explanation: "Covalent"}]}
      ]
    },
    {
      id: "les-3-1-1-3",
      title: "Atomic & Ionic Radii",
      description: "Trends & Lanthanoid Contraction",
      icon: "Minimize",
      slides: [
        { id: "init-1", type: "quiz", title: "Pre-Check", content: "Atomic radius across a period generally:", options: [{id: "A", text: "Decreases", isCorrect: true, explanation: "Increased Zeff."}, {id: "B", text: "Increases", isCorrect: false, explanation: "Incorrect."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Radii Trends",
          content: "1. **Across Period:** Radii decrease initially, then become constant, then increase at end (Cu, Zn) due to e-e repulsion.\n2. **Down Group:** Increases from 3d to 4d.\n3. **Anomaly:** 4d and 5d series have similar radii (e.g., Zr $\\approx$ Hf). \n**Reason:** **Lanthanoid Contraction** (poor shielding of 4f electrons)."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Lanthanoid Contraction",
          content: "Visualizing why 5d elements are not larger than 4d elements.",
          interactiveCanvasId: "lanthanoid-contraction-graph"
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "The almost identical radii of Zr (160 pm) and Hf (159 pm) is a consequence of the ___ contraction.",
          blankAnswer: "lanthanoid"
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Application",
          content: "Due to Lanthanoid Contraction, Hf and Zr have:",
          options: [
            { id: "A", text: "Similar chemical properties", isCorrect: true, explanation: "Size and charge are similar." },
            { id: "B", text: "Different oxidation states", isCorrect: false, explanation: "Usually same group valency." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Config of Cr?", options: [{id: "A", text: "3d5 4s1", isCorrect: true, explanation: "Correct"}, {id: "B", text: "3d4 4s2", isCorrect: false, explanation: "Incorrect"}]}
      ]
    },
    {
      id: "les-3-1-1-4",
      title: "Ionisation Enthalpies",
      description: "Thermodynamic Stability",
      icon: "Zap",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Ionisation Enthalpy (IE)",
          content: "Increase in IE along the series is not regular.\n- $IE_1$: Generally increases.\n- $IE_2$: Exceptionally high for Cu and Cr (removal from stable $d^{10}$ or $d^5$).\n- $IE_3$: Exceptionally high for Mn (removal from stable $d^5$).\n\nThermodynamic Stability: $Ni^{2+}$ is more stable than $Pt^{2+}$, but $Pt^{4+}$ is more stable than $Ni^{4+}$."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Stability",
          content: "Which is a stronger reducing agent?",
          options: [
            { id: "A", text: "$Cr^{2+}$", isCorrect: true, explanation: "$Cr^{2+} \\to Cr^{3+}$ ($d^3$, stable t2g)." },
            { id: "B", text: "$Fe^{2+}$", isCorrect: false, explanation: "Fe2+ is less reducing than Cr2+." }
          ]
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Unpaired Electrons",
          content: "Calculate number of unpaired electrons in $Cr^{2+}$ ($d^4$).",
          numericAnswer: 4,
          numericTolerance: 0
        },
        {
          id: "pyq-1",
          type: "quiz",
          title: "NEET PYQ",
          content: "Correct order of IE2:",
          options: [
            { id: "A", text: "Cu > Cr > Mn > Fe", isCorrect: false, explanation: "Wait, Cu (d10->d9) high, Cr (d5->d4) high." },
            { id: "B", text: "Check specific data", isCorrect: true, explanation: "Cu and Cr are high due to stable config disruption." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Is ionization enthalpy exo or endo?", options: [{id: "A", text: "Endothermic", isCorrect: true, explanation: "Requires energy"}, {id: "B", text: "Exothermic", isCorrect: false, explanation: "No"}]}
      ]
    },
    {
      id: "les-3-1-1-5",
      title: "Oxidation States",
      description: "Variability & Trends",
      icon: "Layers",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Oxidation States",
          content: "Transition metals show variable oxidation states due to participation of $(n-1)d$ and $ns$ electrons.\n- **Common:** +2 (except Sc).\n- **Max Oxidation State:** Increases from Sc to Mn (+7), then decreases.\n- Stability: Higher oxidation states stable for heavier elements (e.g., $Mo^{VI}, W^{VI}$ stable, $Cr^{VI}$ oxidising)."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Oxidation Trends",
          content: "Graph or Table showing OS from Sc to Zn.",
          interactiveCanvasId: "d-block-oxidation-trends"
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Maximum OS",
          content: "Which 3d element shows the highest oxidation state?",
          options: [
            { id: "A", text: "Mn (+7)", isCorrect: true, explanation: "Loses 3d5 4s2." },
            { id: "B", text: "Fe (+6)", isCorrect: false, explanation: "Lower max." }
          ]
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Stability",
          content: "$Cr^{2+}$ is reducing because it wants to become:",
          options: [
            { id: "A", text: "$Cr^{3+}$", isCorrect: true, explanation: "Stable t2g3 configuration." },
            { id: "B", text: "$Cr^+$", isCorrect: false, explanation: "Unstable." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Oxidation state of O in H2O2?", options: [{id: "A", text: "-1", isCorrect: true, explanation: "Peroxide"}, {id: "B", text: "-2", isCorrect: false, explanation: "Oxide"}]}
      ]
    },
    {
      id: "les-3-1-1-6",
      title: "Electrode Potentials",
      description: "E0 Trends",
      icon: "Battery",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Standard Electrode Potentials ($E^\\ominus$)",
          content: "Trend is irregular. $E^\\ominus(M^{2+}/M)$ becomes less negative across series.\n**Exception:** Cu has positive $E^\\ominus$ (+0.34V). Reason: High $\\Delta_a H$ and low $\\Delta_{hyd}H$ not balanced.\n\n$Mn, Ni, Zn$ have more negative values than expected due to stability of half-filled/full-filled subshells or hydration."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Copper Anomaly",
          content: "Why does Copper have positive E0?",
          options: [
            { id: "A", text: "High atomisation energy, Low hydration energy", isCorrect: true, explanation: "Energy required to sublime and ionise is not fully recovered by hydration." },
            { id: "B", text: "It is a noble gas", isCorrect: false, explanation: "No." }
          ]
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Reaction Feasibility",
          content: "Can Copper displace Hydrogen from acids?",
          options: [
            { id: "A", text: "No", isCorrect: true, explanation: "Positive E0 means it cannot reduce H+." },
            { id: "B", text: "Yes", isCorrect: false, explanation: "Only metals with negative E0 displace H2." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Daniel cell anode?", options: [{id: "A", text: "Zinc", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Copper", isCorrect: false, explanation: "Cathode"}]}
      ]
    },
    {
      id: "les-3-1-1-7",
      title: "Magnetic & Colour",
      description: "Properties",
      icon: "Magnet",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Magnetic Properties",
          content: "**Paramagnetism:** Due to unpaired electrons. \nMagnetic Moment (Spin only): $\\mu = \\sqrt{n(n+2)}$ BM.\n\n**Colour:** Due to d-d transition. Unpaired d-electrons absorb light from visible region and jump to higher d-orbital. Observed colour is complementary."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Colour Wheel",
          content: "Visualizing complementary colours (e.g. Absorb Red -> Appear Green).",
          interactiveCanvasId: "d-block-colour-wheel"
        },
        {
          id: "num-1",
          type: "numerical",
          title: "Magnetic Moment",
          content: "Calculate $\\mu$ for $Mn^{2+}$ (Z=25). Config $3d^5$. (Root 35).",
          numericAnswer: 5.92,
          numericTolerance: 0.1
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Colour Check",
          content: "Why is $Sc^{3+}$ colourless?",
          options: [
            { id: "A", text: "No unpaired d-electrons ($d^0$)", isCorrect: true, explanation: "No d-d transition possible." },
            { id: "B", text: "It is a solid", isCorrect: false, explanation: "Irrelevant." }
          ]
        },
        {
          id: "pyq-1",
          type: "quiz",
          title: "NEET PYQ",
          content: "Which of the following ions is coloured?",
          options: [
            { id: "A", text: "$Cu^{2+}$", isCorrect: true, explanation: "3d9 (1 unpaired)." },
            { id: "B", text: "$Zn^{2+}$", isCorrect: false, explanation: "3d10 (No unpaired)." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Shape of d-orbital?", options: [{id: "A", text: "Double Dumbbell", isCorrect: true, explanation: "Correct"}, {id: "B", text: "Spherical", isCorrect: false, explanation: "s-orbital"}]}
      ]
    }
  ]
};