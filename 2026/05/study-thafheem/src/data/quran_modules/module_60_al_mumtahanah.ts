import { Module } from '../../types';
import { SECTION_60_1_RELATIONS } from './section_60_1_relations';
import { SECTION_60_2_TESTING } from './section_60_2_testing';

export const MODULE_60_AL_MUMTAHANAH: Module = {
  id: 'module-60-al-mumtahanah',
  title: 'Surah 60: Al-Mumtahinah',
  description: 'The Examined Woman | Madani | 13 Ayat | Juz 28',
  sections: [
    SECTION_60_1_RELATIONS,
    SECTION_60_2_TESTING
  ],
  moduleSummary: [
    {
      id: "mod-sum-60-1",
      type: "theory",
      title: "Module Overview",
      content: "**Surah Al-Mumtahinah (The Examined Woman)**\n\nRevealed in Madinah, it deals with the boundaries of relationships between Muslims and hostile disbelievers, and the legal protocols for evaluating women who migrate to the Islamic state."
    }
  ]
};