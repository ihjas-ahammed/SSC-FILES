/* ══════════════════════════════════════════════════════════════════════════
   Optics — syllabus view over the content pool.
   CU-FYUGP B.Sc. Physics Honours, Semester V core, "Optics".
   Book 1: Ghatak, Optics 6e (Modules I–III). Book 2: Subrahmanyam, Brij Lal &
   Avadhanulu, A Text Book of Optics (Module IV). Section ids are the unit
   numbers of the syllabus, grouped by module.
   ══════════════════════════════════════════════════════════════════════════ */
const DATA_KIND = 'live';

const SYLLABI = [
  {
    id: 'op', title: 'Optics', code: 'CU-FYUGP · Optics', sem: 'V', book: 'Ghatak, Optics 6e · Subrahmanyam, Brij Lal & Avadhanulu',
    blurb: "Fermat's principle and the geometrical optics that follows from it, interference, diffraction and polarisation of light.",
    modules: [
      { id: 'op.m1', n: 'I', title: "Fermat's Principle", marks: 15,
        secs: ['1.1', '1.2', '1.3', '1.4'] },
      { id: 'op.m2', n: 'II', title: 'Interference', marks: 25,
        secs: ['2.1', '2.2', '2.3', '2.4', '2.5', '2.6', '2.7'] },
      { id: 'op.m3', n: 'III', title: 'Diffraction', marks: 15,
        secs: ['3.1', '3.2', '3.3', '3.4', '3.5'] },
      { id: 'op.m4', n: 'IV', title: 'Polarisation', marks: 15,
        secs: ['4.1', '4.2', '4.3', '4.4', '4.5', '4.6'] }
    ]
  }
];

const SECTITLE = {
  '1.1': "Laws of Reflection and Refraction from Fermat's Principle",
  '1.2': 'Refraction and Reflection at a Single Spherical Surface',
  '1.3': 'The Thin Lens: Principal Foci and Focal Length',
  '1.4': "Newton's Formula and Lateral Magnification",
  '2.1': 'Superposition of Two Sinusoidal Waves',
  '2.2': 'Interference by Division of Wavefront: Coherence',
  '2.3': "Interference of Light Waves: Young's Experiment",
  '2.4': "Fresnel's Two Mirrors and Fresnel's Biprism",
  '2.5': "White-Light Fringes, Lloyd's Mirror and Phase Change on Reflection",
  '2.6': 'Division of Amplitude: Thin Films and Non-Reflecting Coatings',
  '2.7': "Wedge Films, Newton's Rings and the Michelson Interferometer",
  '3.1': 'Single-Slit Fraunhofer Diffraction',
  '3.2': 'Two-Slit Fraunhofer Diffraction',
  '3.3': 'N-Slit Diffraction and the Grating',
  '3.4': 'Fresnel Diffraction: Half-Period Zones and the Zone Plate',
  '3.5': 'Diffraction by a Straight Edge',
  '4.1': 'Polarisation: Introduction',
  '4.2': 'Production of Linearly Polarised Light',
  '4.3': 'Effects of a Polariser and an Analyser',
  '4.4': "Double Refraction and Huygens' Explanation",
  '4.5': 'Wave Plates',
  '4.6': 'Production and Analysis of Polarised Light'
};
