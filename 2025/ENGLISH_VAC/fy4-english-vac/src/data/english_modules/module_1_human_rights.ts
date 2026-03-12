import { Module } from '../../types';
import { SEC_U1, SEC_U2, SEC_U4 } from './placeholders';
import { SEC_U3_HUMANITIES_SCIENCE } from './sec_u3_humanities_science';

export const MODULE_1_HUMAN_RIGHTS: Module = {
  id: 'module-1-human-rights',
  title: 'Module I: Human Rights',
  description: 'Exploring human dignity, equality, and holistic development.',
  sections: [
    SEC_U1,
    SEC_U2,
    SEC_U3_HUMANITIES_SCIENCE,
    SEC_U4
  ],
  moduleSummary: [
    {
      id: "mod-sum-1",
      type: "theory",
      title: "Module I Overview",
      content: "**Human Rights**\n\nThis module bridges structural global policies (UN SDGs) with deeply philosophical takes on individual liberty (Gardiner), holistic moral education (Radhakrishnan), and social satire on class structures (I am a Cat)."
    }
  ]
};