import { Unit } from '../../types';

export const UNIT_4_2_SUMMARY: Unit = {
  id: "unit-4-2-summary",
  title: "Section 4.2 Summary",
  description: "Line Spectra & Bohr Model Recap",
  color: "duo-orange",
  lessons: [
    {
      id: "les-sum-4-2-1",
      title: "Summary: Line Spectra",
      description: "Key ideas from Unit 4.2.1",
      icon: "BookCheck",
      slides: [
        {
          id: "sum-421",
          type: "theory",
          title: "Unit 4.2.1 — Line Spectra",
          content: "**Line Spectra:** Gases emit light only at specific, discrete wavelengths, contradicting classical physics which predicted continuous emission from spiraling electrons.\n\n**Rydberg Formula:** An empirical formula describing all hydrogen lines:\n$$\\frac{1}{\\lambda} = R_\\infty \\left( \\frac{1}{n_f^2} - \\frac{1}{n_i^2} \\right)$$\n\n**Spectral Series:** Groupings of lines ending at a specific $n_f$.\n- Lyman: $n_f = 1$ (UV)\n- Balmer: $n_f = 2$ (Visible)\n- Paschen: $n_f = 3$ (IR)"
        }
      ]
    },
    {
      id: "les-sum-4-2-2",
      title: "Summary: The Bohr Model",
      description: "Key ideas from Unit 4.2.2",
      icon: "BookCheck",
      slides: [
        {
          id: "sum-422",
          type: "theory",
          title: "Unit 4.2.2 — The Bohr Model",
          content: "**Postulates:** \n1. Electrons orbit in stable, non-radiating 'stationary states' where angular momentum is quantized: $L = n\\hbar$.\n2. Photons are emitted or absorbed only when electrons 'jump' between states: $hf = \\Delta E$.\n\n**Bohr Radius & Orbits:**\n$$r_n = n^2 a_0 \\quad (a_0 = 0.0529 \\text{ nm})$$\n\n**Energy Levels:**\n$$E_n = -\\frac{13.6 \\text{ eV}}{n^2}$$\nThese elegantly explained the exact wavelengths of the hydrogen line spectra and derived the Rydberg constant from scratch."
        }
      ]
    },
    {
      id: "les-sum-4-2-3",
      title: "Summary: Hydrogen-Like Atoms",
      description: "Key ideas from Unit 4.2.3",
      icon: "BookCheck",
      slides: [
        {
          id: "sum-423",
          type: "theory",
          title: "Unit 4.2.3 — Ions and Variations",
          content: "**Hydrogen-Like Ions (Z > 1):** The Bohr model works for single-electron ions (He⁺, Li²⁺).\nThe increased nuclear charge scales the orbits and energies:\n$$r_n = \\frac{n^2 a_0}{Z} \\quad \\text{and} \\quad E_n = -13.6 \\text{ eV} \\frac{Z^2}{n^2}$$\n\n**Absorption vs Emission:** Atoms mostly exist in the ground state ($n=1$), meaning absorption spectra only show lines starting from $n=1$ (e.g. Lyman series for Hydrogen), while emission spectra show transitions between all excited states.\n\n**Mass Dependence:** Heavier orbiting particles (like muons) orbit much closer to the nucleus and are bound with much higher energies ($E \\propto m$)."
        }
      ]
    }
  ]
};