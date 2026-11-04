import { Unit } from '../../types';

export const UNIT_1_4_8: Unit = {
  id: "unit-1-4-8",
  title: "Section Summary",
  description: "Review of Bonding",
  color: "duo-orange",
  lessons: [
    {
      id: "sum-1-4-1",
      title: "Bonding Types",
      description: "Ionic & Covalent",
      icon: "BookOpen",
      slides: [
        { id: "s-1", type: "theory", title: "Ionic", content: "Transfer of electrons. Stabilized by Lattice Enthalpy. Non-directional." },
        { id: "s-2", type: "theory", title: "Covalent", content: "Sharing of electrons. Directional. Described by VBT and MOT." }
      ]
    },
    {
      id: "sum-1-4-2",
      title: "Geometry & Theories",
      description: "VSEPR & MOT",
      icon: "BookOpen",
      slides: [
        { id: "s-1", type: "theory", title: "VSEPR", content: "Repulsion determines shape. lp > bp. Predicts $H_2O$ bent, $NH_3$ pyramidal." },
        { id: "s-2", type: "theory", title: "MOT", content: "LCAO. Bond order predicts stability. Explains $O_2$ paramagnetism." },
        { id: "s-3", type: "theory", title: "H-Bonding", content: "Dipole-dipole interaction with H and F, O, N. Raises boiling point." }
      ]
    }
  ]
};