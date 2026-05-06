import { Course } from '../types';
import { SECTION_4_1 } from './chapter4_1';
import { SECTION_4_2 } from './chapter4_2';
import { SECTION_4_3 } from './chapter4_3';
import { SECTION_4_4 } from './chapter4_4';
import { SECTION_4_5 } from './chapter4_5';
import { SECTION_4_6 } from './chapter4_6';

export const MODULE_4: Course = {
  id: 'module-4',
  title: 'Module IV: Electrical Measurements',
  description: 'Kirchhoff\'s laws, Wheatstone\'s Bridge, Carey Foster Bridge, Potentiometer, and Network Theorems.',
  sections:[
    SECTION_4_1,
    SECTION_4_2,
    SECTION_4_3,
    SECTION_4_4,
    SECTION_4_5,
    SECTION_4_6
  ],
  chapterSummary:[
    {
      id: "chap-sum-4-1",
      type: "theory",
      title: "Chapter Summary: Kirchhoff & Wheatstone",
      content: "We began by studying complex circuits using **Kirchhoff's Laws**: the Junction Rule ($\\sum I = 0$) resulting from charge conservation, and the Loop Rule ($\\sum \\Delta V = 0$) resulting from energy conservation.\n\nApplying these to the **Wheatstone Bridge**, we proved the balance condition $P/Q = R/S$ when the galvanometer current is zero. We explored its sensitivity, showing that accuracy is maximized when all four arms are of the same order of magnitude (Maxwell/Callendar rules)."
    },
    {
      id: "chap-sum-4-2",
      type: "theory",
      title: "Chapter Summary: Precision Bridges",
      content: "We examined the **Carey Foster Bridge**, a clever modification of the Wheatstone bridge designed to measure extremely small resistance differences by swapping the standard and unknown resistors, completely eliminating errors from end-resistances ($R - S = \\rho(l_2 - l_1)$).\n\nThis method is highly effective for precisely determining the resistivity of a material sample."
    },
    {
      id: "chap-sum-4-3",
      type: "theory",
      title: "Chapter Summary: The Potentiometer",
      content: "We explored the **Potentiometer**, an ideal measurement tool that balances unknown voltages against a uniform wire without drawing *any* current from the test circuit ($V \\propto l$). \n\nBecause it acts as an ideal infinite-impedance voltmeter, it allows precise measurement of cell EMFs and internal resistance ($r = R(l_1/l_2 - 1)$), measurement of unknown coils ($P/Q = l_1/l_2$), and exact calibration of standard ammeters and voltmeters against a known reference cell."
    },
    {
      id: "chap-sum-4-4",
      type: "theory",
      title: "Chapter Summary: Network Theorems",
      content: "We transitioned to formal Network Analysis, defining active/passive and linear/non-linear networks. We introduced the **Superposition Theorem**, which states that in a linear multi-source network, the total current in any branch is the algebraic sum of the currents produced by each source acting independently.\n\nWe then learned **Thevenin's and Norton's Theorems**, which allow us to dramatically simplify any linear active network down to a single voltage source and series resistor, or a single current source and parallel resistor."
    },
    {
      id: "chap-sum-4-5",
      type: "theory",
      title: "Chapter Summary: Maximum Power Transfer",
      content: "Finally, the **Maximum Power Transfer Theorem** proved that to extract the most power from a source, the load resistance must exactly match the source's internal Thevenin resistance ($R_L = R_{th}$). At this point, the system transfers maximum energy, though at a limited efficiency of 50%."
    }
  ]
};