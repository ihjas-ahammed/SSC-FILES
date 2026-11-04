import { Unit } from '../../types';

export const UNIT_3_1_SUMMARY: Unit = {
  id: "unit-3-1-summary",
  title: "Section 3.1 Summary",
  description: "Matter Waves Recap",
  color: "duo-orange",
  lessons: [
    {
      id: "les-sum-3-1-1",
      title: "Summary: de Broglie's Hypothesis",
      description: "Key ideas from Unit 3.1.1",
      icon: "BookCheck",
      slides: [
        {
          id: "sum-311",
          type: "theory",
          title: "Unit 3.1.1 — de Broglie's Hypothesis",
          content: "**Matter Waves:** Just as light exhibits particle properties, massive particles (like electrons) exhibit wave properties. This is the foundation of quantum mechanics.\n\n**The de Broglie Wavelength:**\n$$\\lambda = \\frac{h}{p}$$\nThe wavelength of a particle is inversely proportional to its momentum.\n\n**Kinetic Energy Shortcut:**\n$$\\lambda = \\frac{hc}{\\sqrt{2mc^2 K}}$$\nThis allows rapid conversion from accelerating voltage (eV) to wavelength.\n\n**Macroscopic Objects:** Cars and baseballs have wavelengths around $\\sim 10^{-34}$ m. This is too small to diffract through any physical gap, which is why macroscopic objects appear to strictly follow classical particle mechanics."
        }
      ]
    },
    {
      id: "les-sum-3-1-2",
      title: "Summary: Experimental Evidence",
      description: "Key ideas from Unit 3.1.2",
      icon: "BookCheck",
      slides: [
        {
          id: "sum-312",
          type: "theory",
          title: "Unit 3.1.2 — Experimental Evidence",
          content: "**Davisson-Germer Experiment:** Fired 54 V electrons at a nickel crystal. The resulting intensity peak at $50^\\circ$ perfectly matched the Bragg-like surface diffraction formula $d \\sin \\phi = n\\lambda$, providing the first undeniable proof of matter waves.\n\n**Double-Slit with Particles:** Electrons (and later neutrons, atoms, and molecules) fired one-by-one through a double slit accumulate to form an interference pattern. The wave nature dictates the *probability* of where the particle lands.\n\n**Complementarity:** Observing *which* slit a particle passes through destroys the wave interference. Wave and particle behaviors are mutually exclusive in a single measurement.\n\n**Neutron Diffraction:** 'Thermal' (room temperature) neutrons have wavelengths of $\\sim 0.18$ nm, making them ideal probes for the structural analysis of crystals."
        }
      ]
    }
  ]
};