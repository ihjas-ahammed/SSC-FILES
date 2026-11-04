import { Module } from '../../types';
import { SEC_U9_FRANCIS_BACON } from './sec_u9_francis_bacon';
import { SEC_U10_STEVEN_SHAPIN } from './sec_u10_steven_shapin';
import { SEC_U11_APHANTASIA } from './sec_u11_aphantasia';
import { SEC_U12_GALACTIC_PORTRAITS } from './sec_u12_galactic_portraits';

export const MODULE_3_SCIENTIFIC_IMAGINATION: Module = {
  id: 'module-3-scientific-imagination',
  title: 'Module III: Scientific Imagination',
  description: 'Philosophy, history, neurodiversity, and poetry in science.',
  sections: [
    SEC_U9_FRANCIS_BACON,
    SEC_U10_STEVEN_SHAPIN,
    SEC_U11_APHANTASIA,
    SEC_U12_GALACTIC_PORTRAITS
  ],
  moduleSummary: [
    {
      id: "mod3-sum",
      type: "theory",
      title: "Module III Overview",
      content: `**Scientific Imagination**\n\nThis module explores the *boundaries* of scientific thinking:\n\n- **Unit 9** (Francis Bacon): Aphorisms on the interpretation of nature — the foundation of empirical science.\n- **Unit 10** (Steven Shapin): History and sociology of science — from individual virtue to institutional authority.\n- **Unit 11** (Aphantasia — Kim Zarins): Science fiction reading without mental imagery.\n- **Unit 12** (Galactic Portraits — Sudeep Sen): Ekphrastic poetry responding to James Webb Space Telescope images.`
    }
  ]
};
