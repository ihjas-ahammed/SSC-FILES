import { Module } from '../../types';
import { SEC_U1_HUMAN_RIGHTS } from './sec_u1_human_rights_un';
import { SEC_U2_RULE_OF_ROAD } from './sec_u2_rule_of_the_road';
import { SEC_U3_HUMANITIES_SCIENCE } from './sec_u3_humanities_science';
import { SEC_U4_I_AM_A_CAT } from './sec_u4_i_am_a_cat';

export const MODULE_1_HUMAN_RIGHTS: Module = {
  id: 'module-1-human-rights',
  title: 'Module I: Human Rights',
  description: 'Exploring human dignity, equality, and holistic development.',
  sections: [
    SEC_U1_HUMAN_RIGHTS,
    SEC_U2_RULE_OF_ROAD,
    SEC_U3_HUMANITIES_SCIENCE,
    SEC_U4_I_AM_A_CAT
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