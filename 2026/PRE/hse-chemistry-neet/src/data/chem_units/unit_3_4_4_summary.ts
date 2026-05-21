import { Unit } from '../../types';

export const UNIT_3_4_4: Unit = {
  id: "unit-3-4-4",
  title: "Chapter Summary",
  description: "Review of Coordination",
  color: "duo-violet",
  lessons: [
    {
      id: "sum-3-4-1",
      title: "Basics Recap",
      description: "Werner to Isomerism",
      icon: "BookOpen",
      slides: [
        { id: "s-1", type: "theory", title: "Werner", content: "Metals have Primary (Oxidation State) and Secondary (Coordination Number) valencies." },
        { id: "s-2", type: "theory", title: "Isomerism", content: "Structural (Linkage, Ionisation, Solvate, Coordination) vs Stereo (Geometrical, Optical)." }
      ]
    },
    {
      id: "sum-3-4-2",
      title: "Bonding Recap",
      description: "VBT & CFT",
      icon: "BookOpen",
      slides: [
        { id: "s-1", type: "theory", title: "VBT", content: "Hybridisation determines geometry. Inner ($d^2sp^3$) vs Outer ($sp^3d^2$) orbitals based on ligand strength." },
        { id: "s-2", type: "theory", title: "CFT", content: "Ligands split d-orbitals. $\\Delta_o$ magnitude determines pairing. Explains colour and magnetism." }
      ]
    }
  ]
};