import { Module } from '../../types';
import { SEC_U13_LIFE_OF_GALILEO } from './sec_u13_life_of_galileo';
import { SEC_U14_PRESENTATION_TIPS } from './sec_u14_presentation_tips';
import { SEC_U15_SCIENCE_PRESENTATIONS } from './sec_u15_science_presentations';
import { SEC_U16_TEAM_PRESENTATIONS } from './sec_u16_team_presentations';

export const MODULE_4_SCIENTIFIC_PRESENTATIONS: Module = {
  id: 'module-4-scientific-presentations',
  title: 'Module IV: Scientific Presentations',
  description: 'Drama, tips, oral presentations, and team collaboration.',
  sections: [
    SEC_U13_LIFE_OF_GALILEO,
    SEC_U14_PRESENTATION_TIPS,
    SEC_U15_SCIENCE_PRESENTATIONS,
    SEC_U16_TEAM_PRESENTATIONS
  ],
  moduleSummary: [
    {
      id: "mod4-sum",
      type: "theory",
      title: "Module IV Overview",
      content: `**Scientific Presentations**\n\nThis module prepares students to *present science effectively*:\n\n- **Unit 13** (Life of Galileo — Brecht): The tension between scientific truth and institutional power.\n- **Unit 14** (Presentation Tips): Step-by-step guide to creating and delivering a scientific talk.\n- **Unit 15** (Science Presentations): Purpose, structure, and techniques for oral presentations.\n- **Unit 16** (Team Presentations — Jordan Turner): Best practices for collaborative presentation design.`
    }
  ]
};
