import { Unit } from '../../types';

export const UNIT_5_2_3: Unit = {
  id: "unit-5-2-3",
  title: "Batteries & Corrosion",
  description: "Electrochemistry in Daily Life",
  color: "duo-blue",
  lessons: [
    {
      id: "les-5-2-3-1",
      title: "Primary Batteries",
      description: "Non-rechargeable",
      icon: "Battery",
      slides: [
        { id: "init-1", type: "quiz", title: "Concept", content: "Primary cells can be:", options: [{id: "A", text: "Used only once", isCorrect: true, explanation: "Reaction is irreversible."}, {id: "B", text: "Recharged", isCorrect: false, explanation: "Secondary cells."}] },
        {
          id: "core-1",
          type: "theory",
          title: "Dry Cell (Leclanche)",
          content: "Anode: Zinc container.\nCathode: Carbon (graphite) rod.\nElectrolyte: $MnO_2 + C + NH_4Cl + ZnCl_2$ paste.\nReaction: $Zn \\to Zn^{2+}$. $MnO_2 + NH_4^+ + e^- \\to MnO(OH) + NH_3$."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Dry Cell",
          content: "Cross-section of a standard battery.",
          interactiveCanvasId: "electro-battery-dry"
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Mercury Cell",
          content: "Used in watches. Anode is Zn-Hg. Cathode is:",
          options: [
            { id: "A", text: "HgO + C", isCorrect: true, explanation: "Mercury(II) oxide." },
            { id: "B", text: "MnO2", isCorrect: false, explanation: "Dry cell." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Mn oxidation state in MnO2?", options: [{id: "A", text: "+4", isCorrect: true, explanation: "Correct"}, {id: "B", text: "+2", isCorrect: false, explanation: "No"}]}
      ]
    },
    {
      id: "les-5-2-3-2",
      title: "Secondary Batteries",
      description: "Rechargeable",
      icon: "RefreshCw",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Lead Storage Battery",
          content: "Used in cars. Rechargeable.\n- **Anode:** Pb\n- **Cathode:** $PbO_2$\n- **Electrolyte:** 38% $H_2SO_4$\n\n**Discharge Reaction:**\n$Pb + PbO_2 + 2H_2SO_4 \\to 2PbSO_4 + 2H_2O$.\n(Both electrodes form $PbSO_4$)."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Lead Acid",
          content: "Schematic of plates.",
          interactiveCanvasId: "electro-battery-dry" // Placeholder
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Recharging",
          content: "During recharging, the cell acts as:",
          options: [
            { id: "A", text: "Electrolytic Cell", isCorrect: true, explanation: "Energy supplied to reverse reaction." },
            { id: "B", text: "Galvanic Cell", isCorrect: false, explanation: "That's discharging." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Sulphuric acid formula?", options: [{id: "A", text: "H2SO4", isCorrect: true, explanation: "Correct"}, {id: "B", text: "HCl", isCorrect: false, explanation: "Hydrochloric"}]}
      ]
    },
    {
      id: "les-5-2-3-3",
      title: "Ni-Cd Battery",
      description: "Longer Life",
      icon: "BatteryCharging",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Nickel-Cadmium Cell",
          content: "Longer life than Lead storage but more expensive.\nReaction:\n$Cd(s) + 2Ni(OH)_3(s) \\to CdO(s) + 2Ni(OH)_2(s) + H_2O(l)$."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Components",
          content: "The anode in Ni-Cd cell is:",
          options: [
            { id: "A", text: "Cadmium", isCorrect: true, explanation: "Oxidizes to CdO." },
            { id: "B", text: "Nickel", isCorrect: false, explanation: "Cathode material." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Is Cd a transition metal?", options: [{id: "A", text: "No", isCorrect: true, explanation: "Group 12 (d10)"}, {id: "B", text: "Yes", isCorrect: false, explanation: "Incorrect"}]}
      ]
    },
    {
      id: "les-5-2-3-4",
      title: "Fuel Cells",
      description: "High Efficiency",
      icon: "Flame",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Hydrogen-Oxygen Fuel Cell",
          content: "Converts energy of combustion directly to electricity. Used in Apollo space program.\n- **Anode:** $2H_2 + 4OH^- \\to 4H_2O + 4e^-$\n- **Cathode:** $O_2 + 2H_2O + 4e^- \\to 4OH^-$\n- **Net:** $2H_2 + O_2 \\to 2H_2O$."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Fuel Cell",
          content: "H2 and O2 entering, Water leaving.",
          interactiveCanvasId: "electro-fuel-cell"
        },
        {
          id: "ret-1",
          type: "fill_in_blank",
          title: "NCERT Check",
          content: "Fuel cells produce electricity with an efficiency of about ___ %.",
          blankAnswer: "70"
        },
        {
          id: "app-1",
          type: "quiz",
          title: "Advantage",
          content: "Main advantage of fuel cells?",
          options: [
            { id: "A", text: "Pollution free and continuous", isCorrect: true, explanation: "Reactants fed continuously." },
            { id: "B", text: "Low cost", isCorrect: false, explanation: "Catalysts are expensive (Pt)." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Product of H2 combustion?", options: [{id: "A", text: "Water", isCorrect: true, explanation: "Correct"}, {id: "B", text: "CO2", isCorrect: false, explanation: "No Carbon"}]}
      ]
    },
    {
      id: "les-5-2-3-5",
      title: "Corrosion",
      description: "Electrochemical Phenomenon",
      icon: "AlertTriangle",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Corrosion (Rusting)",
          content: "Iron surface acts as small electrochemical cell.\n- **Anode:** $Fe \\to Fe^{2+} + 2e^-$.\n- **Cathode:** $O_2 + 4H^+ + 4e^- \\to 2H_2O$ (H+ from carbonic acid in air).\n- $Fe^{2+}$ further oxidised to $Fe_2O_3 \\cdot xH_2O$ (Rust)."
        },
        {
          id: "vis-1",
          type: "interactive_canvas",
          title: "Rusting Mechanism",
          content: "Electron flow on iron surface.",
          interactiveCanvasId: "electro-corrosion"
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Prevention",
          content: "Sacrificial protection uses:",
          options: [
            { id: "A", text: "More reactive metal (Mg/Zn)", isCorrect: true, explanation: "It oxidises instead of Fe." },
            { id: "B", text: "Less reactive metal", isCorrect: false, explanation: "Coating." }
          ]
        },
        { id: "flash-1", type: "quiz", title: "Flashback", content: "Reduction potential of Fe?", options: [{id: "A", text: "-0.44 V", isCorrect: true, explanation: "Standard"}, {id: "B", text: "+0.34 V", isCorrect: false, explanation: "Cu"}]}
      ]
    },
    {
      id: "les-5-2-3-6",
      title: "Hydrogen Economy",
      description: "Future Energy",
      icon: "Sun",
      slides: [
        {
          id: "core-1",
          type: "theory",
          title: "Hydrogen Economy",
          content: "Use of Hydrogen as renewable, non-polluting fuel. Production via electrolysis of water. Storage and transport are challenges."
        },
        {
          id: "ret-1",
          type: "quiz",
          title: "Check",
          content: "Combustion of hydrogen produces:",
          options: [
            { id: "A", text: "Water only", isCorrect: true, explanation: "Zero carbon emissions." },
            { id: "B", text: "CO2", isCorrect: false, explanation: "No." }
          ]
        }
      ]
    }
  ]
};