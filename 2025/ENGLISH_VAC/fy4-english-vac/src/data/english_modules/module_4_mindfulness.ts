import { Module } from '../../types';
import { SEC_U13_FACTORIES } from './sec_u13_factories';
import { SEC_U14_STIGMA_SHAME } from './sec_u14_stigma_shame';
import { SEC_U15_LONG_WALK_TO_WATER } from './sec_u15_long_walk_to_water';
import { SEC_U16_POISONED_BREAD } from './sec_u16_poisoned_bread';

export const MODULE_4_MINDFULNESS: Module = {
  id: 'module-4-mindfulness',
  title: 'Module IV: Mindfulness',
  description: 'Conscious awareness of environment, stigma, and survival.',
  sections: [
    SEC_U13_FACTORIES,
    SEC_U14_STIGMA_SHAME,
    SEC_U15_LONG_WALK_TO_WATER,
    SEC_U16_POISONED_BREAD
  ],
  moduleSummary: []
};