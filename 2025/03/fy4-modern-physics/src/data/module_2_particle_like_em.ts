import { Module } from '../types';
import { SECTION_2_1_EM_WAVES_XRAY } from './section_2_1_em_waves_xray';
import { SECTION_2_2_PHOTOELECTRIC_EFFECT } from './section_2_2_photoelectric_effect';
import { SECTION_2_3_THERMAL_RADIATION } from './section_2_3_thermal_radiation';
import { SECTION_2_4_COMPTON_DUALITY } from './section_2_4_compton_duality';

export const MODULE_2_PARTICLE_LIKE_EM: Module = {
  id: 'module-2-particle-like-em',
  title: 'Module II: Particle-Like Properties of EM Radiation',
  description: 'When light behaves as a particle (Krane Ch. 3, §3.1–3.6)',
  sections: [
    SECTION_2_1_EM_WAVES_XRAY,
    SECTION_2_2_PHOTOELECTRIC_EFFECT,
    SECTION_2_3_THERMAL_RADIATION,
    SECTION_2_4_COMPTON_DUALITY
  ],
  moduleSummary: [
    {
      id: "mod-sum-em-201aaxv",
      type: "theory",
      title: "Module II Overview",
      content: "In this module, we explore the dual nature of light. We begin with its established classical wave behavior (diffraction) and then encounter experiments (Photoelectric, Compton) that prove light delivers energy in discrete, particle-like bundles called photons."
    },
    {
      id: "mod-sum-em-20ss",
      type: "theory",
      title: "Section 2.1 & 2.2 Summary",
      content: "**Wave Nature of Light:**\n- Interference and diffraction prove light is a wave.\n- X-ray diffraction utilizes crystal lattices as gratings, governed by Bragg's Law: $2d \\sin\\theta = n\\lambda$.\n\n**The Photoelectric Effect (Quantization Shift):**\n- Energy states requirements are bundled: $E=hf$"
    },
     {
      id: "mod-sum-trmszvvcxsd992a",
      type: "theory",
      title: "Section 2.3 & 2.4 Summary",
      content: "**Thermal calculations combinations options lengths tests limits limits variables bounds geometries combinations values:**\n- Validated checks properties: $I = \\sigma T^4$ & $\\lambda_{MAX} \\propto 1/T$.\n- Planck limits equations constraints limits elements lengths definitions mapping tests formats assumptions tests components configurations lengths requirements constraints conditions variables limitations bounds models.\n\n**Compton & Paradoxes formats parameters expectations limits expectations:**\n- Dimensions geometries combinations limits bounds options constraints limits equations variables bounds boundaries values configurations sizes formats assumptions variations checking expectations measurements elements components parameters tests limitations features limits ($ \\frac{1}{m_{e}c^2}(1-\\cos\\theta) $).\n- Duality tests parameters formats elements checks sizes states features properties forms limitations conditions dimensions constraints testing values expectations elements parameters! Probability is driven linearly bounded parameters elements tests fields testing lengths!"
    }
  ]
};