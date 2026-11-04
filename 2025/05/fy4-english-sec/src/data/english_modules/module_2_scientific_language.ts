import { Module } from '../../types';
import { SEC_U5_WORLDWIDE_EFFORT } from './sec_u5_worldwide_effort';
import { SEC_U6_SCIENCE_VOCABULARY } from './sec_u6_science_vocabulary';
import { SEC_U7_SCIENTIFIC_REASONING } from './sec_u7_scientific_reasoning';
import { SEC_U8_MEMORY_LINDEN } from './sec_u8_memory_linden';

export const MODULE_2_SCIENTIFIC_LANGUAGE: Module = {
  id: 'module-2-scientific-language',
  title: 'Module II: Scientific Language',
  description: 'Podcasting, vocabulary instruction, reasoning, and memory science.',
  sections: [
    SEC_U5_WORLDWIDE_EFFORT,
    SEC_U6_SCIENCE_VOCABULARY,
    SEC_U7_SCIENTIFIC_REASONING,
    SEC_U8_MEMORY_LINDEN
  ],
  moduleSummary: [
    {
      id: "mod2-sum",
      type: "theory",
      title: "Module II Overview",
      content: `**Scientific Language**\n\nThis module examines how science is *communicated*:\n\n- **Unit 5** (Worldwide Effort): The Scientific American podcast on global scientific collaboration.\n- **Unit 6** (Science Vocabulary): Five strategies for teaching science vocabulary words.\n- **Unit 7** (Scientific Reasoning): Hume's problem of induction and philosophy of science.\n- **Unit 8** (Memory — Linden): Why our memories are unreliable yet adaptive.`
    }
  ]
};
