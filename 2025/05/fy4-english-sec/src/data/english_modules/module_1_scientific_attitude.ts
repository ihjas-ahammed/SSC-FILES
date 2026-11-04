import { Module } from '../../types';
import { SEC_U1_SCIENTISTS_IMAGINATION } from './sec_u1_scientists_imagination';
import { SEC_U2_MAN_KNEW_INFINITY } from './sec_u2_man_knew_infinity';
import { SEC_U3_WHATS_EXPECTED } from './sec_u3_whats_expected';
import { SEC_U4_SINGULARITY } from './sec_u4_singularity';

export const MODULE_1_SCIENTIFIC_ATTITUDE: Module = {
  id: 'module-1-scientific-attitude',
  title: 'Module I: Scientific Attitude',
  description: 'Imagination, biography, free will, and poetic reflection on science.',
  sections: [
    SEC_U1_SCIENTISTS_IMAGINATION,
    SEC_U2_MAN_KNEW_INFINITY,
    SEC_U3_WHATS_EXPECTED,
    SEC_U4_SINGULARITY
  ],
  moduleSummary: [
    {
      id: "mod1-sum",
      type: "theory",
      title: "Module I Overview",
      content: `**Scientific Attitude**\n\nThis module explores the *human dimension* of science:\n\n- **Unit 1** (Scientists & Imagination): Imagination as the bridge from the known to the unknown.\n- **Unit 2** (Man Who Knew Infinity): Ramanujan's story — persistence, genius, humility.\n- **Unit 3** (What's Expected of Us?): Chiang's warning about free will and technology.\n- **Unit 4** (Singularity): Marie Howe's longing for cosmic unity and belonging.`
    }
  ]
};
