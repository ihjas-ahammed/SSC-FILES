"""Transcribed past papers for Properties of Solids, in the Abstract Algebra layout.
Data: one entry per paper (printed wording kept). Output: build_paper.build() writes one HTML per paper.
Usage: python3 build_transcriptions.py
"""
import sys, os, html
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import build_paper
"""Build transcribed PYQ HTML files for Properties of Solids (scratch tool, not in the project).
Usage: python3 build_pyq.py <outdir>
Each paper is data transcribed from the page text layer or the page image (scans 06 and 12).
Printed wording is kept. Blanks are ______. Marks are printed as on the paper.
"""

OUT = "/home/ihjas/Documents/GitHub/SSC-FILES/SEM5-PYQ/PROPERTIES-OF-SOLIDS/source/pyq"

_OLD_CSS = """
@page{size:A4;margin:16mm}
@media print{.paper{box-shadow:none;margin:0;padding:0;max-width:none}body{background:#fff}}
body{background:#e9e9e4;margin:0;font-family:"Times New Roman",Georgia,serif;color:#111}
.paper{background:#fff;max-width:820px;margin:24px auto;padding:36px 48px;box-shadow:0 1px 4px rgba(0,0,0,.15)}
.code{float:right;font-size:14px;font-weight:bold}
.code-note{font-size:12px;color:#555}
h1{font-size:19px;text-align:center;margin:6px 0 2px}
.sub{text-align:center;font-size:15px;margin:2px 0}
.meta{width:100%;border-collapse:collapse;margin-top:14px;font-size:15px}
.meta td{padding:3px 0}
.rule{border:0;border-top:1px solid #222;margin:12px 0}
.sec{font-size:16px;font-weight:bold;text-align:center;margin:18px 0 4px;break-after:avoid}
.instr{font-size:14px;font-style:italic;text-align:center;margin:0 0 8px;break-after:avoid}
ol.q{list-style:none;padding:0;margin:0}
ol.q li{margin:0 0 9px 0;font-size:15px;line-height:1.45;padding-left:34px;text-indent:-34px}
.n{display:inline-block;width:30px;text-indent:0}
.foot{text-align:right;font-size:14px;margin:4px 0 6px}
.sub-q{font-size:14px;font-style:italic;margin:0 0 8px}
.tnote{font-size:13px;color:#444;margin-top:24px;border-top:1px solid #999;padding-top:8px}
.tnote li{margin:3px 0}
sub,sup{font-size:70%}
"""

def sec(heading, instr, qs, foot=None, sub=None):
    return {"heading": heading, "instr": instr, "qs": qs, "foot": foot, "sub": sub}

# ---------- papers ----------
PAPERS = []

PAPERS.append({
 "file": "2026-APR-PHY6B11-adm2020.html",
 "code": "D 140215", "pages": "2",
 "exam": "Sixth Semester (CBCSS—UG) Degree Examination, April 2026",
 "dept": "Physics/Applied Physics",
 "course": "PHY 6B 11/APH 6B 11—Statistical Physics, Solid State Physics, Spectroscopy and Photonics",
 "adm": "(2020 Admission onwards)", "time": "Two Hours", "max": "60 Marks",
 "preamble": "The symbols used in this question paper have their usual meanings.",
 "sections": [
  sec("Section A (Short Answer Type)",
      ["Answer all questions in two or three sentences, each correct answer carries a maximum of 2 marks."],
      [(1,"What are the key assumptions of Bose-Einstein statistics ?"),(2,"Define crystal symmetry and give an example."),
       (3,"What is a unit cell, and how does it differ from a primitive cell ?"),(4,"What is the importance of Miller indices in crystallography ?"),
       (5,"Define resolving power of a spectrometer."),(6,"What do you mean by intensity of spectral transitions ?"),
       (7,"What is meant by a diatomic vibrating rotator ?"),(8,"Explain the concept of hot bands in IR spectroscopy."),
       (9,"What is light amplification ?"),(10,"What is pumping ? Give two examples of pumping mechanisms."),
       (11,"What are the applications of lasers in modern technology ?"),(12,"Explain the quantum theory of the Raman effect.")],
      "(Ceiling 20)"),
  sec("Section B (Paragraph/Problem Type)",
      ["Answer all questions in a paragraph of about half a page to one page, each correct answer carries a maximum of 5 marks."],
      [(13,"Discuss the role of blackbody radiation in understanding quantum statistics."),
       (14,"Find the lattice spacing of a cubic crystal with lattice parameter 4.2 Å for (1, 1, 1) planes."),
       (15,"Explain how Bragg’s X-ray spectrometer works and its application."),
       (16,"The rotational constant of CO is 1.93 cm<sup>–1</sup>. Find its bond length."),
       (17,"Discuss the effect of anharmonicity on vibrational spectra."),
       (18,"A He-Ne laser emits radiation at 632.8 nm. Calculate its energy."),
       (19,"Explain the working principle of a semiconductor laser.")],
      "(Ceiling 30)"),
  sec("Section C (Essay Type)",
      ["Essays - Answer in about two pages, any one question. Answer carries 10 marks."],
      [(20,"Compare classical and quantum statistics and discuss their significance in physics."),
       (21,"Explain the construction and working of a Nd:YAG laser and its applications.")],
      "(1 × 10 = 10 marks)"),
 ]})

PAPERS.append({
 "file": "2025-MAR-PHY6B11-adm2019.html",
 "code": "D 120205", "pages": "2",
 "exam": "Sixth Semester (CBCSS—UG) Degree Examination, March 2025",
 "dept": "Physics/Applied Physics",
 "course": "PHY6B11/APH6B11—Statistical Physics, Solid State Physics, Spectroscopy and Photonics",
 "adm": "(Admissions Year—2019 Onwards)", "time": "Two Hours", "max": "60 Marks",
 "preamble": "The symbols used in this question paper have their usual meanings.",
 "sections": [
  sec("Section A (Short Answer Type)",
      ["Answer all questions in two or three sentences, each correct answer carries a maximum of 2 marks."],
      [(1,"What are Bosons ? Give two examples."),(2,"Distinguish between Bose Einstein and Fermi Dirac statistics."),
       (3,"What is meant by unit cell ? Give an example."),(4,"Explain the terms crystal lattice and basis."),
       (5,"What is a symmetric top molecule ? Give an example."),(6,"What is zero point energy of a harmonic oscillator ?"),
       (7,"What is isotopic substitution ?"),(8,"List out some differences between laser light and ordinary light."),
       (9,"What is Morse curve ?"),(10,"Explain the terms : (i) Population inversion ; and (ii) Metastable state."),
       (11,"Explain any two types of pumping mechanisms."),(12,"Optical pumping is not used in gas lasers. Why ?")],
      "(Ceiling = 20 marks)"),
  sec("Section B (Paragraph / Problem Type)",
      ["Answer all questions in a paragraph of about half a page to one page, each correct answer carries a maximum of 5 marks."],
      [(13,"Compare average velocity, root mean square velocity and most probable velocity."),
       (14,"Derive and explain Bragg’s law."),
       (15,"The first line in the pure rotational spectrum of HCl appears at 21.18 cm<sup>–1</sup>. Calculate bond length of the molecule. Given atomic masses of H and Cl is 1.008 and 35.45 amu respectively."),
       (16,"Explain the spectrum of a non - rigid rotator."),
       (17,"Calculate the bond force constant, k, for <sup>1</sup>H <sup>35</sup>Cl. The fundamental vibration frequency is ϑ<sub>e</sub> = 2990.9 cm<sup>–1</sup>."),
       (18,"Obtain the equation for J<sub>max</sub>, the rotational quantum number of the state to which the transitions give rise to spectral lines with maximum intensity."),
       (19,"Discuss the classical theory of Raman scattering.")],
      "(Ceiling = 30 marks)"),
  sec("Section C (Essay Type)",
      ["Essays - Answer in about two pages, any one question. The question carries 10 marks."],
      [(20,"With supporting diagrams, explain the working of a ruby laser."),
       (21,"Discuss the theory of a diatomic vibrating rotator.")],
      "(1 × 10 = 10 marks)"),
 ]})

PAPERS.append({
 "file": "2025-MAR-PHY6B14-adm2019.html",
 "code": "D 120210", "pages": "2",
 "exam": "Sixth Semester (CBCSS—UG) Degree Examination, March 2025",
 "dept": "Physics/Applied Physics",
 "course": "PHY6B14 (EL3)—Materials Science",
 "adm": "(Admissions Year—2019 Onwards)", "time": "Two Hours", "max": "60 Marks",
 "preamble": "The symbols used in this question paper have their usual meanings.",
 "sections": [
  sec("Section A (Short Answer Type)",
      ["(Answer all questions in two or three sentences, each correct answer carries a maximum of 2 marks)."],
      [(1,"What are composites ? Give the classification of composites."),(2,"Write a short note on thermosetting and thermoplastic polymers."),
       (3,"List the important mechanical properties of materials."),(4,"What is polymerization ? What are the different strengthening mechanisms of polymers ?"),
       (5,"What is a semiconducting material ? Give the significance."),(6,"Explain Grain and Grain boundary."),
       (7,"Write short notes on Fullerenes."),(8,"Explain the principle of electron microscopy."),
       (9,"What are refractories ?"),(10,"Explain Metallic bonding in crystals."),
       (11,"What are Allotropes ? Give one Example"),(12,"What is diffusion in solids and mention the two types of diffusion in solids ?")],
      "(Ceiling = 20 marks)"),
  sec("Section B (Paragraph / Problem Type)",
      ["(Answer all questions in a paragraph of about half a page to one page, each correct answer carries a maximum of 5 marks)"],
      [(13,"Explain the construction and working Scanning probe microscopy"),
       (14,"How will you determine grain size of a sample ?"),
       (15,"Find out the packing fraction of FCC."),
       (16,"Explain viscoelastic deformation of polymers."),
       (17,"Compute the line energy of dislocations in BCC iron. The Burgers vector in iron is ½ for &lt;111&gt; type. The shear modulus of iron is 80.2 GN m<sup>–2</sup>."),
       (18,"Explain the factors effecting diffusion ?"),
       (19,"Explain Frenkel defects and derive an expression for the equilibrium concentration for Frenkel defects.")],
      "(Ceiling = 30 marks)"),
  sec("Section C (Essay Type)",
      ["(Essays - Answer in about two pages, any one question. The question carries 10 marks."],
      [(20,"Explain dislocations in solids and their importance in material science."),
       (21,"Explain the principle and working of Scanning Electron Microscope.")],
      "(1 × 10 = 10 marks)"),
 ]})

PAPERS.append({
 "file": "2026-APR-PHY6B14-adm2020.html",
 "code": "D 140220", "pages": "2",
 "exam": "Sixth Semester (CBCSS—UG) Degree Examination, April 2026",
 "dept": "Physics/Applied Physics",
 "course": "PHY6B14 (EL3)—Materials Science",
 "adm": "(2020 Admission onwards)", "time": "Two Hours", "max": "60 Marks",
 "preamble": "The symbols used in this question paper have their usual meanings.",
 "sections": [
  sec("Section A (Short Answer Type)",
      ["Answer all questions in two or three sentences, each correct answer carries a maximum of 2 marks."],
      [(1,"Define smart materials."),(2,"How do metals differ from ceramics in terms of atomic bonding and properties ?"),
       (3,"What are van der Waals forces ?"),(4,"Explain why are metals good conductors of electricity based on their bonding nature ?"),
       (5,"What is meant by atomic packing factor (APF) ?"),(6,"What is the difference between polymorphism and allotropy ?"),
       (7,"What is a permanent dipole bond, and how does it affect intermolecular interactions ?"),(8,"Define anisotropy in crystalline materials."),
       (9,"Define a vacancy defect in a crystal structure."),(10,"How do edge and screw dislocations differ ?"),
       (11,"Compare the mechanical properties of diamond and carbon nanotubes."),(12,"State Fick’s first law of diffusion.")],
      "(Ceiling - 20)"),
  sec("Section B (Paragraph/Problem Type)",
      ["Answer all questions in a paragraph of about half a page to one page, each correct answer carries maximum of 5 marks."],
      [(13,"Explain the concept of bonding forces and energies in solids. How does the balance between attractive and repulsive forces determine bond strength ?"),
       (14,"The potential energy between two atoms in a solid is given by the equation : U (r) = –A/r<sup>m</sup> + B/r<sup>n</sup>, where A and B are constants, and r is the interatomic distance. Explain what happens to the energy when r increases or decreases. Derive the expression for equilibrium bond length."),
       (15,"Water expands upon freezing, unlike most substances that contract. Explain the molecular structure and bonding interactions responsible for this behaviour."),
       (16,"How do grain boundaries in polycrystalline materials influence their mechanical strength and electrical properties ?"),
       (17,"A monochromatic X-ray beam of wavelength 1.54 Å is used in a powder diffraction experiment. If the first-order diffraction peak is observed at a Bragg angle of 30°, calculate the interplanar spacing (d) of the crystal."),
       (18,"Why are polycrystalline materials typically isotropic, while single crystals exhibit anisotropic behaviour ?"),
       (19,"The diffusion co-efficients of copper in aluminium are 2.0 × 10<sup>–14</sup> m<sup>2</sup>/s at 500°C and 7.0 × 10<sup>–13</sup> m<sup>2</sup>/s at 700°C. Determine the activation energy for diffusion.")],
      "(Ceiling - 30)"),
  sec("Section C (Essay Type)",
      ["Essays - Answer in about two pages, any one question. The question carries 10 marks."],
      [(20,"Explain the principles and working of Laue’s technique and the rotating crystal method for X-ray diffraction. Compare their advantages and limitations in determining crystal structures."),
       (21,"Discuss the bonding characteristics in diamond and graphite. Analyze how the nature of bonding contributes to their hardness, electrical conductivity, and thermal properties.")],
      "(1 × 10 = 10 marks)"),
 ]})

PAPERS.append({
 "file": "2023-MAR-PHY6B11-APY6B12-adm2017.html",
 "code": "C 40204", "pages": "3",
 "exam": "Sixth Semester (CUCBCSS—UG) Degree Examination, March 2023",
 "dept": "Physics/Applied Physics",
 "course": "PHY 6B 11/APY 6B 12—Solid State Physics, Spectroscopy and Laser Physics",
 "adm": "(2017—2018 Admissions)", "time": "Three Hours", "max": "80 Marks",
 "preamble": None,
 "sections": [
  sec("Section A", ["Answer in a word or phrase.", "Answer all questions ; each question carries 1 mark."],
      [(1,"Transition temperature of mercury is ______."),(2,"Which theory explains the phenomenon of superconductivity ?"),
       (3,"Vector form of Bragg’s law is ______."),(4,"In ac Josephson effect current oscillates with ______ frequency"),
       (5,"Transition temperature Tc and critical field Hc for a superconductor are related as ______."),
       (6,"The temperature at which a conductor become superconductor is ______."),
       (7,"Give the expression for lattice constant ‘a’ of a cubic system."),(8,"Give an example of highly coherent source of light."),
       (9,"Give an example of high temperature superconductor."),(10,"In hologram phase variation is recorded, True or False.")],
      "(10 × 1 = 10 marks)"),
  sec("Section B", ["Answer in a short paragraph-three or four sentences.", "Answer all questions ; each question carries 2 marks."],
      [(11,"Stocks or antistockes, which are more intense ? Why ?"),(12,"What is optical pumping associated with LASER ?"),
       (13,"Sketch the temperature dependence of the electronic specific heat in the normal and superconducting states."),
       (14,"What is isotopic effect in superconductors ?"),(15,"What is meant by second order phase transition ?"),
       (16,"What is meant by atomic packing factor ?"),(17,"What are miller indices ?")],
      "(7 × 2 = 14 marks)"),
  sec("Section C", ["Answer in a paragraph of about half a page to one page.", "Answer any five questions ; each question carries 4 marks."],
      [(18,"Discuss Type I and Type II superconductors."),(19,"Discuss rotational spectrum of rigid diatomic molecule."),
       (20,"Write a note on intensity of spectral transitions."),(21,"What are symmetry elements ?"),
       (22,"Discuss quantum theory of Raman effect."),(23,"Discuss important characteristics of LASER."),
       (24,"Discuss power application of superconductors.")],
      "(5 × 4 = 20 marks)"),
  sec("Section D", ["Problems - write all relevant formulas. All important steps carry separate marks.", "Answer any four questions ; each question carries 4 marks."],
      [(25,"Find the miller indices of a plane that makes intercepts as a, b and c axes equal to 3 Å, 4 Å and 3 Å in a tetragonal crystal with c/a ratio as 1.5."),
       (26,"Calculate the inter planar spacing for (321) plane in simple cubic lattice with inter atomic spacing a = 4.21 Å."),
       (27,"In the CO molecule the wave number difference between the successive absorption lines in the pure rotational spectrum is 384 m<sup>–1</sup>. Calculate the moment of inertia of the molecule and the equilibrium bond length of the molecule. Masses of the C<sup>12</sup> and O<sup>16</sup> atoms are respectively 1.99 × 10<sup>–26</sup> Kg and 2.66 × 10<sup>–26</sup> Kg."),
       (28,"Calculate the critical current density for 1 mm diameter wire of lead at (a) 4.2 K ; and (b) 7 K. A parabolic dependence of H<sub>c</sub> upon T may be assumed. Given T<sub>c</sub> for lead is 7.18 K and H<sub>0</sub> for lead is 6.5 × 10<sup>4</sup> A/m."),
       (29,"The normal modes of vibration of CO<sub>2</sub> molecule are ν<sub>1</sub> = 1330 cm<sup>–1</sup>, ν<sub>2</sub> = 667 cm<sup>–1</sup>, ν<sub>3</sub> = 2349 cm<sup>–1</sup>. Evaluate the zero point energy of CO<sub>2</sub> molecule."),
       (30,"Light of wavelength 1.5 µm incident on a material with a characteristic Raman frequency of 20 × 10<sup>12</sup> Hz. Calculate the wavelength of stocks-shifted line (given c = 3 × 10<sup>8</sup> m/s )."),
       (31,"Calculate the number of photons emitted per second from a 1 Watt Ar-ion Laser operating at 488 nm.")],
      "(4 × 4 = 16 marks)"),
  sec("Section E (Essays)", ["Answer in about two pages.", "Answer any two questions ; each question carries 10 marks."],
      [(32,"Discuss BCS theory of superconductors. What is Meissner effect ?"),(33,"Explain the working of He-Ne Laser with energy level diagram."),
       (34,"Discuss vibrational Raman spectrum of symmetric top molecule."),
       (35,"Discuss vibrational rotational spectrum by considering diatomic vibrating rotator.")],
      "(2 × 10 = 20 marks)"),
 ]})

PAPERS.append({
 "file": "2019-NOV-PHY3C11-adm2017.html",
 "code": "Not legible on the scan", "pages": "2 (scan)",
 "exam": "Third Semester M.Sc. Degree (Regular) Examination, November 2019",
 "dept": "Physics", "course": "PHY 3C 11—Solid State Physics",
 "adm": "(2017 Admissions)", "time": "Three Hours", "max": "36 Weightage",
 "preamble": None,
 "sections": [
  sec("Part A", ["Answer all questions.", "Each question carries 1 weightage."],
      [(1,"What is a symmetry operation ? Mention different types of symmetry elements and symmetry operations in a cubic crystal."),
       (2,"What are Brillouin zones ? Construct first Brillouin zone for a two dimensional square lattice."),
       (3,"Show that the group velocity for elastic waves of lattice vibrations are zero at the edges of Brillouin zones."),
       (4,"Discuss the limitations of Einstein model for lattice heat capacity in solids."),
       (5,"What is the limitation of free electron model in explaining Hall coefficients of metals ?"),
       (6,"Explain the concept of holes in semiconductors."),(7,"What is effective mass of a charge carrier ? What is its importance ?"),
       (8,"Distinguish between paramagnetic and ferromagnetic materials."),(9,"Briefly explain the concept of magnons in ferromagnetic materials."),
       (10,"Briefly explain the origin of ferrimagnetic moments."),
       (11,"What are superconductors ? What is the importance of transition temperature of superconductors ?"),
       (12,"Certain superconductor has an energy gap of 10<sup>–4</sup> eV. Calculate the wavelength of electromagnetic radiation to which this superconductor respond.")],
      "(12 × 1 = 12 weightage)"),
  sec("Part B", ["Answer any two questions.", "Each question carries 6 weightage."],
      [(13,"What are reciprocal lattices ? Show that reciprocal lattice to BCC lattice is an FCC lattice and reciprocal lattice to FCC lattice is BCC lattice."),
       (14,"Derive an expression for lattice heat capacity using Debye model. Discuss how this model differs from Einstein model."),
       (15,"Derive Curie-Weiss law for ferromagnetism."),
       (16,"Explain flux quantization in superconductors and use it to explain the principle of macroscopic quantum interference.")],
      "(2 × 6 = 12 weightage)"),
  sec("Part C", ["Answer any four questions.", "Each question carries 3 weightage."],
      [(17,"An orthorhombic crystal has a ratio a : b : c = 0.429 : 1 : 0.377. find the Miller indices of the faces whose intercepts are (i) 0.214 : 1 : 0.188 and (ii) 0.429 : ∞ : 0.126."),
       (18,"If phonon mean free path length in quartz crystal is 30 Å and the specific heat capacity per unit volume is 4 × 10<sup>3</sup> J m<sup>–3</sup>K<sup>–1</sup> at 300 K, calculate lattice thermal conductivity in quartz, (assume phonon velocity = 5 × 10<sup>3</sup> ms<sup>–1</sup>)."),
       (19,"Valence electron density for monovalent potassium is, N/V = 1.402 × 10<sup>28</sup> m<sup>–3</sup>. For a typical current density of 10<sup>6</sup> Am<sup>–2</sup>, obtain the drift velocity in terms of Fermi velocity for electrons in potassium."),
       (20,"Prove that the Fermi level in an intrinsic semiconductor lies in the middle of the forbidden gap if the effective masses of electrons and holes are equal."),
       (21,"Calculate the value of magnetic susceptibility for a paramagnetic material (N = 9 × 10<sup>28</sup> m<sup>–3</sup>, μ<sub>B</sub> = 9.27 × 10<sup>–24</sup> JT<sup>–1</sup>) at 0.1 K."),
       (22,"A superconducting material has a transition temperature of 3.7 K at zero magnetic field and a critical field of 3 × 10<sup>5</sup> A/m at 0 K. Find the critical field at 2 K.")],
      "(4 × 3 = 12 weightage)"),
 ],
 "tnote": ["Scan of a printed paper. The paper code is not legible on the scan, so it is not transcribed.",
           "Part A to Part C are read from page 1 (Q1–Q13) and page 2 (Q14–Q22)."]})

PAPERS.append({
 "file": "2021-NOV-PHY3C11-adm2019.html",
 "code": "D 11690", "pages": "2",
 "exam": "Third Semester M.Sc. Degree (Regular/Supplementary) Examination, November 2021 (CBCSS)",
 "dept": "Physics", "course": "PHY 3C 11—Solid State Physics",
 "adm": "(2019 Admission onwards)", "time": "Three Hours", "max": "30 Weightage",
 "preamble": "General Instructions: 1. In cases where choices are provided, students can attend all questions in each section. 2. The minimum number of questions to be attended from the Section/Part shall remain the same. 3. The instruction if any, to attend a minimum number of questions from each sub section/sub part/ sub division may be ignored. 4. There will be an overall ceiling for each Section/Part that is equivalent to the maximum weightage of the Section/Part.",
 "sections": [
  sec("Section A", ["8 Short questions answerable within 7.5 minutes.", "Answer all questions, each question carries weightage 1."],
      [(1,"What are symmetry operations ? Name the symmetry elements of a crystal."),
       (2,"What are the different types of bonding in the crystal and mention its characteristics ?"),
       (3,"The one-dimensional monoatomic lattice acts as a low-pass filter. Explain."),(4,"What is Wiedemann -Franz law ?"),
       (5,"What is Hall effect ? Give the expression for Hall co-efficient as predicted by free electron theory."),
       (6,"Explain the origin of the diamagnetism."),(7,"Distinguish between pyroelectric and piezoelectric materials."),
       (8,"What is the importance of high temperature superconductors ? Give one example with transition temperature.")],
      "(8 × 1 = 8 weightage)"),
  sec("Section B", ["4 essay questions answerable within 30 minutes.", "Answer any two questions, each carry weightage 5."],
      [(9,"What are the short comings of Einstein’s theory of lattice specific heat ? Explain Debeye’s theory of lattice specific heat."),
       (10,"Discuss with necessary theory the Kronig-Penny model and show how energy bands are formed in solids."),
       (11,"Distinguish between ferromagnetism and anti-ferromagnetisms. Describe the Neel model of antiferromagnetism."),
       (12,"Explain Meisner effect. Describe London equations and discuss how do they help in explaining superconducting state.")],
      "(2 × 5 = 10 weightage)"),
  sec("Section C", ["7 problems answerable within 15 minutes.", "(Answer any four questions, each carry weightage 3."],
      [(13,"Silicon crystallizes in the diamond cubic structure. The radius of silicon atom is 0.1176 nm. The atomic weight and density of silicon are 28.09 and 2.3 × 10<sup>3</sup> kg/m<sup>3</sup>. Give me the number of atoms present in a unit cell."),
       (14,"If Einstein’s temperature of a material is 157 K, find the value of C<sub>v</sub> for the material at 100 K in cal/mol/K using Einstein’s formula. Also calculate Einstein’s frequency."),
       (15,"Find the relaxation time and mean free path of conduction electron in copper. For copper density of the free electron 8.5 × 10<sup>28</sup>/m<sup>3</sup>, resistivity 1.69 × 10<sup>–8</sup> ohm-m and average velocity of electron 1.154 × 10<sup>5</sup> m/s."),
       (16,"Helium gas contains 2.7 × 10<sup>25</sup> atoms/m<sup>3</sup> and dielectric constant of He atom NTD is 1. 0000684. Calculate the electric polarizability of He atom."),
       (17,"A paramagnetic material has 10<sup>28</sup> atoms/m<sup>3</sup>. Its susceptibility at 350 K is 2.8 × 10<sup>–4</sup>. Calculate susceptibility at 300 K."),
       (18,"A superconducting tin has a critical temperature of 3.7 K at zero magnetic field and a critical field of 0.0306 T at 0 K. What is the critical field at 2 K ?"),
       (19,"A beam of X-rays of wavelength 0.842 Å is incident on a crystal at a glancing angle of 8° 35' when the first order Bragg reflection occurs. Calculate the glancing angle of the third order reflection.")],
      "(4 × 3 = 12 weightage)"),
 ]})

PAPERS.append({
 "file": "2022-NOV-PHY3C11-adm2019.html",
 "code": "D 31199", "pages": "2",
 "exam": "Third Semester M.Sc. Degree (Regular/Supplementary) Examination, November 2022 (CBCSS)",
 "dept": "Physics", "course": "PHY 3C 11—Solid State Physics",
 "adm": "(2019 Admission onwards)", "time": "Three Hours", "max": "30 Weightage",
 "preamble": None,
 "sections": [
  sec("Section A", ["8 Short questions, answerable within 7.5 minutes", "Answer all questions, Each question carries weightage 1."],
      [(1,"What is the difference between a metallic bond and a covalent bond ?"),(2,"Explain the concept of Phonons."),
       (3,"What is Dulong and Petti’s law ? Why does Dulong and Petti’s law fails at low temperature ?"),
       (4,"What are Brillouin Zones ? Construct first Brillouin Zone for a two-dimensional square lattice."),
       (5,"What is effective mass of a charge carrier ? What is its importance ?"),(6,"Explain Neel’s theory of anti-ferromagnetism"),
       (7,"Distinguish between hard and soft magnetic materials."),(8,"What is Meisner effect ?")],
      "(8 × 1 = 8 weightage)"),
  sec("Section B", ["4 Essay questions, answerable within 30 minutes", "Answer any two questions, Each question carries weightage 5."],
      [(9,"Describe macroscopically the origin of static dielectric constant of a substance and discuss the classical theory of electronic polarization."),
       (10,"Obtain the expressions for the carrier concentrations in intrinsic semiconductor."),
       (11,"What are reciprocal lattices ? Show the reciprocal lattice to BCC lattice is an FCC lattice and reciprocal lattice FCC lattice is BCC lattice."),
       (12,"Discuss BCS theory of superconductivity and briefly explain BCS ground state.")],
      "(2 × 5 = 10 weightage)"),
  sec("Section C", ["7 Problem answerable within 15 minutes", "Answer any four questions, Each question carries weightage 3."],
      [(13,"The distance d<sub>100</sub> between (100) planes in BCC structure is 0.32 nm. What is the size of the unit cell ? What is the radius of the atom ?"),
       (14,"Find the cut off frequency for a one-dimensional monoatomic chain given that the interatomic spacing is 3 Å and velocity of sound 3000 m/s."),
       (15,"Find the Fermi velocity of the electrons if the number density of electrons in sodium is 2.52 × 10<sup>28</sup> m<sup>–3</sup> at room temperature."),
       (16,"An electric field of 100 V/m is applied to a n-type semiconductor having hall co-efficient 0.0125 m<sup>3</sup>/C. Determine the current density in the sample if the electron mobility is 0.36 m<sup>2</sup> v<sup>–1</sup> s<sup>–1</sup>."),
       (17,"If the magnetization and flux density of a magnetic material be 3200 A/m and 0.005 Wb/m<sup>2</sup>. Calculate the relative permeability of the material."),
       (18,"The critical temperature for Hg with isotopic mass 199.5 is 4.18 K. Calculate the critical temperature for an isotopic mass 203.4"),
       (19,"Copper has an FCC structure and the atomic radius is 0.1278 nm. Calculate the inter planar spacing for (110) and (212) planes.")],
      "(4 × 3 = 12 weightage)"),
 ]})

PAPERS.append({
 "file": "2023-NOV-PHY3C11-adm2019.html",
 "code": "D 51330", "pages": "2",
 "exam": "Third Semester M.Sc. Degree (Regular/Supplementary) Examination, November 2023 (CBCSS)",
 "dept": "Physics", "course": "PHY 3C 11—Solid State Physics",
 "adm": "(2019 Admission onwards)", "time": "Three Hours", "max": "30 Weightage",
 "preamble": None,
 "sections": [
  sec("Section A", ["Answer all questions.", "Each question carries weightage 1."],
      [(1,"Distinguish between para and ferromagnetism."),(2,"What are symmetry operations ? Name the symmetry elements of a crystal."),
       (3,"What are Miller indices ?"),(4,"Give example of material exhibiting SC and BCC structure."),
       (5,"Briefly explain Hall effect."),(6,"Distinguish between Type I and Type II superconductors."),
       (7,"What do you meant by indirect band gap semiconductors ?"),(8,"Discuss the ferroelectric and paraelectric states.")],
      "(8 × 1 = 8 weightage)"),
  sec("Section B", ["Answer any two questions.", "Each question carries weightage 5."],
      [(9,"Give an account of the phenomenon of superconductivity. Distinguish between Type I and Type II superconductors. List out few applications of superconductors."),
       (10,"Discuss the formation of allowed and forbidden energy bands on the basis of the Kronig Penny model."),
       (11,"Describe the Einstein model of lattice heat capacity. Discuss the success and failure of this model at different temperatures."),
       (12,"Describe the Langevin’s theory of paramagnetism and obtain an expression for paramagnetic susceptibility. Mention the temperature dependence of susceptibility.")],
      "(2 × 5 = 10 weightage)"),
  sec("Section C", ["Answer any four questions.", "Each question carries weightage 3."],
      [(13,"A ferromagnetic material with J = 3/2 and g = 2 has a Curie temperature of 125 K. Calculate the intrinsic flux density near 0 K. Also, calculate the ratio of the magnetization at 300 K in the presence of an external field of 1 mT to the spontaneous magnetization at 0 K."),
       (14,"The critical fields at 6 K and 8 K for a NbTi alloy are 7.616 × 10<sup>6</sup> and 4.284 × 10<sup>6</sup> A/m respectively. Determine the transition temperature and the critical field at 0 K."),
       (15,"Two dimensional lattice has the basis vectors a = 2 x̂, b = x̂ + 2 ŷ. Find the reciprocal lattice vectors."),
       (16,"The mobility of hole is µ<sub>h</sub> = 0.025 m<sup>2</sup>/Vsec. What would be the resistivity of p-type silicon if the hall co-efficient of the sample is 2.25 × 10<sup>–5</sup> m<sup>3</sup>/C ?"),
       (17,"The energy near the valence band edge of a crystal is given by E = –Ak<sup>2</sup>, where A = 10<sup>–39</sup> J m<sup>2</sup>. An electron with wave vector k = 10<sup>10</sup> k<sub>x</sub> m<sup>–1</sup> is removed from an orbital in the completely filled valence band. Determine the effective mass, velocity and momentum of the hole."),
       (18,"Derive the Clausius-Mossotti relation by considering the local field effects."),
       (19,"The unit cell volume of sodium is 7.93 × 10<sup>–29</sup> m<sup>3</sup>. Calculate the Fermi energy of sodium at absolute zero")],
      "(4 × 3 = 12 weightage)"),
 ]})

PAPERS.append({
 "file": "2023-MAR-PHY6B11-adm2019.html",
 "code": "C 40626", "pages": "2",
 "exam": "Sixth Semester U.G. Degree Examination, March 2023 (CBCSS—UG)",
 "dept": "Physics/Applied Physics",
 "course": "PHY 6B 11/APH 6B 11—Statistical Physics, Solid State Physics, Spectroscopy and Photonics",
 "adm": "(2019 Admission onwards)", "time": "Two Hours", "max": "60 Marks",
 "preamble": "The symbols used in question paper have their usual meanings.",
 "sections": [
  sec("Section A (Short Answer Type)",
      ["Answer all questions in two or three sentences.", "Each correct answer carries a maximum of 2 marks."],
      [(1,"Explain the terms macrostate and microstate in statistical analysis."),
       (2,"Plot the Maxwell molecular speed distribution. Give an expression for the root-mean square speed and explain the terms involved."),
       (3,"What do you mean by the co-ordination number of a lattice ? What is the co-ordination number of an fcc lattice ?"),
       (4,"Draw the atomic positions in the cubic cell of diamond projected on a face."),
       (5,"Indicate a (111) direction in a cubic crystal."),(6,"Give the block diagram of a typical emission spectrometer."),
       (7,"Give an expression for the rotational energy levels of a rigid diatomic molecule and explain the terms involved."),
       (8,"Explain why the rotational changes about the symmetry axis of symmetric top molecules do not give rise to rotational spectrum."),
       (9,"What is Born-Oppenheimer approximation ?"),(10,"Mention the physical meaning of the Einstein’s co-efficients."),
       (11,"Explain Raman effect."),(12,"List the properties of laser beams.")],
      "(Ceiling 20)"),
  sec("Section B (Paragraph/Problem Type)",
      ["Answer all questions in a paragraph of about half a page to one page.", "Each correct answer carries a maximum of 5 marks."],
      [(13,"A certain atom with total atomic spin ½ has a magnetic moment µ. A collection of such atoms is placed in a magnetic field of strength B. What is the ratio, at room temperature T, of the number of atoms with their spins aligned along the field to those with their spins aligned opposite to the field ?"),
       (14,"Explain the reason for a very low value of electronic heat capacity of metals at ordinary temperatures."),
       (15,"A monochromatic beam of X ray of λ = 0.7 Å undergoes first order Bragg reflection from the plane (3 0 2) of a cubic crystal at a glancing angle of 35°. Determine the lattice constant [symbol missing in print]."),
       (16,"Explain the various regions of the electromagnetic spectrum."),
       (17,"Using a suitable energy level diagram, indicate the transitions between the rotational-vibrational energy levels of a diatomic molecule (lowest two rotational levels only required). Show the corresponding spectrum."),
       (18,"Write short note on (a) Principle of laser ; and (b) Metastable state."),
       (19,"Discuss the construction, energy levels involved in lasing action and emission wavelengths of a He-Ne laser.")],
      "(Ceiling 30)"),
  sec("Section C (Essay Type)",
      ["Answer in about two pages, any one question.", "Answer carries 10 marks."],
      [(20,"Explain the Einstein theory of heat capacity. Give a typical plot of heat capacity versus temperature."),
       (21,"Explain the atomic arrangements in an hcp structure and obtain the corresponding packing fraction.")],
      "(1 × 10 = 10 marks)"),
 ]})

PAPERS.append({
 "file": "2022-MAR-PHY6B11-APY6B12-adm2014.html",
 "code": "C 20225", "pages": "3",
 "exam": "Sixth Semester (CUCBCSS—UG) Degree Examination, March 2022",
 "dept": "Physics/Applied Physics",
 "course": "PHY 6B 11/APY 6B 12—Solid State Physics, Spectroscopy and Laser Physics",
 "adm": "(2014 to 2018 Admissions)", "time": "Three Hours", "max": "80 Marks",
 "preamble": None,
 "sections": [
  sec("Section A", ["Answer in word or a phrase each.", "Answer all questions.", "Each question carries 1 marks."],
      [(1,"The process of determination of crystal structure is called ______."),
       (2,"X-rays are produced when an element of high atomic weight is bombarded by high energy ______."),
       (3,"The vibrational energy of lowest energy state is called ______."),
       (4,"In Raman scattering, if the scattered photon have energy h(ν<sub>0</sub> + ν<sub>m</sub>) that corresponds to ______ line."),
       (5,"If the number of atoms in the excited state is greater than that in the lower energy level, it is called ______."),
       ("sub","Questions 6 to 10 : Write True or False :"),(6,"Crystalline solids are anisotropic."),
       (7,"In an asymmetric top molecule, all the three moment of inertia are distinct."),
       (8,"Soft superconductors show Meissner effect."),
       (9,"X-rays have electromagnetic wave nature as ordinary light."),
       (10,"In superconductors, the critical field depends on temperature.")],
      "(10 × 1 = 10 marks)"),
  sec("Section B", ["Answer in two or three sentences each.", "Answer all questions.", "Each question carries 2 marks."],
      [(11,"Define crystal lattice."),(12,"What is Meissner effect ?"),(13,"What is Doppler broadening ?"),
       (14,"Write down Bragg’s equation."),(15,"Why anti-stokes lines are less intense than stokes lines ?"),
       (16,"Distinguish between stimulated emission and spontaneous emission."),(17,"Write any 4 medical applications of laser.")],
      "(7 × 2 = 14 marks)"),
  sec("Section C", ["Answer in a paragraph of about half a page to one page each.", "Answer any five questions.", "Each question carries 4 marks."],
      [(18,"Write a brief note on crystal systems."),(19,"Distinguish between Type I and Type II superconductors."),
       (20,"Write a note on Absorption instruments."),(21,"Outline the effect of isotopic substitution on the rotational spectra of molecules."),
       (22,"Write a note on vibrational Raman spectra."),(23,"Which are the factors that affect the intensity of spectral lines ?"),
       (24,"What are Einstein’s co-efficients ?")],
      "(5 × 4 = 20 marks)"),
  sec("Section D", ["Problems : write all relevant formulas, all important steps carry separate marks.", "Answer any four questions.", "Each question carries 4 marks."],
      [(25,"A Raman line is observed at 4768.5 Å when acetylene was radiated by 4358.3 Å radiations. Calculate the vibrational frequency that causes this shift."),
       (26,"An atom has two atomic levels spaced by 3 eV in energy. Calculate the ratio of population in higher and lower energy at 50°C. Boltzmann’s constant = 1.38 × 10<sup>–23</sup> J/K."),
       (27,"What is the minimum voltage applied to an X-ray tube to produce X-rays of 0.5 Å ?"),
       (28,"Electrons are accelerated to 728 volts and are reflected from a crystal. The first reflection maximum occurs when glancing angle is 8°. Determine the interplanar spacing of the crystal."),
       (29,"Copper has fee structure with the lattice constant 0.361 nm. Calculate the interplanar spacing for (112) and (120) planes."),
       (30,"If the bond length of H<sub>2</sub> is 0.07417 nm, what would be the positions of the first three rotational Raman lines in the spectrum ? What is the effect of nuclear spin on the spectrum ? <sup>1</sup>H = 1.673 × 10<sup>–27</sup> kg."),
       (31,"The frequency of OH stretching vibration in CH<sub>3</sub>OH is 3300 cm<sup>–1</sup>. Estimate the frequency of OD stretching vibration in CH<sub>3</sub>OD.")],
      "(4 × 4 = 16 marks)"),
  sec("Section E", ["Essays - answer in about two pages each.", "Answer any two questions.", "Each question carries 10 marks."],
      [(32,"Explain the close-packed structures in crystal."),(33,"Explain the rotational spectra of rigid diatomic molecule with energy level diagram."),
       (34,"Explain the working of Infrared spectrophotometer."),(35,"Describe a semiconductor laser and explain its working.")],
      "(2 × 10 = 20 marks)"),
 ]})

PAPERS.append({
 "file": "2020-MAR-PHY6B11-APY6B12-scan.html",
 "code": "C 80282 (page 3 header; page 1 has no code)", "pages": "4 (scan)",
 "exam": "Sixth Semester B.A./B.Sc. Degree Examination, March 2020 (CUCBCSS—UG)",
 "dept": "Physics/Applied Physics",
 "course": "PHY 6B 11/APY 6B 12—Solid State Physics, Spectroscopy and Laser Physics",
 "adm": "(admission year not printed)", "time": "Three Hours", "max": "80 Marks",
 "preamble": None,
 "sections": [
  sec("Section A", ["Answer in a word or phrase.", "Answer all questions ; each question carries 1 mark."],
      [(1,"Expand SQUID."),(2,"Atomic packing factor of a diamond cubic structure is ______."),(3,"Give an example for simple cubic structure."),
       (4,"Which theory explains the superconductivity ?"),(5,"Transition temperature of mercury is ______."),
       (6,"The temperature at which the band gap disappears in the case of superconductor is ______."),
       (7,"For a non rigid rotator the spacing between the successive spectral lines decreases, true or false"),
       (8,"Population inversion is a phenomenon in ______."),(9,"Laser light is highly monochromatic, true or false"),
       (10,"A superconductor exhibits complete Meissner effect is called ______.")],
      "(10 × 1 = 10 marks)"),
  sec("Section B", ["Answer in a short paragraph-three or four sentences.", "Answer all questions ; each question carries 2 marks."],
      [(11,"What is two fluid model ?"),(12,"State Silsbee’s Rule."),(13,"What is cooper pair ?"),(14,"What is mean by coherence length ?"),
       (15,"Differentiate spontaneous and stimulated emission"),(16,"Define critical magnetic field."),(17,"What is zero point energy ?")],
      "(7 × 2 = 14 marks)"),
  sec("Section C", ["Answer in a paragraph of about half a page to one page.", "Answer any five questions ; each question carries 4 marks."],
      [(18,"Explain how X- rays are used for determining the crystal structure."),(19,"Define the terms : lattice, basis, crystal structure and unit cell."),
       (20,"Show that the packing factor of bcc lattice is π√3/8."),(21,"Discuss medical applications of laser ?"),
       (22,"Give the salient features of BCS theory of superconductors."),(23,"Explain Raman effect."),(24,"What are Einstein’s co-efficients ?")],
      "(5 × 4 = 20 marks)"),
  sec("Section D", ["(Problems - write all relevant formulas. All important steps carry separate marks )", "Answer any four questions ; each question carries 4 marks."],
      [(25,"In the microwave spectrum of identical rigid diatomic molecules, the separation between the spectral lines is recorded to be 0.7143 cm<sup>–1</sup>. Find the moment of inertia of the molecule."),
       (26,"Calculate the inter planar spacing for (321) plane in simple cubic lattice with inter atomic spacing a = 4.21 Å."),
       (27,"Calculate the critical current which can flow through a long thin superconducting wire of Al of diameter 10<sup>–3</sup> m. The critical magnetic field for Al is 7.9 × 10<sup>3</sup> A/m."),
       (28,"Derive the expression for volume of unit cell in body centred cubic structure."),
       (29,"Derive London’s equations and explain how it solution explains Meissner effect. [as printed]"),
       (30,"The critical temperature, T<sub>c</sub> for mercury with isotopic mass 199.5 is 4.185 K. Calculate its critical temperature when its isotopic mass changes to 203.4."),
       (31,"Calculate the angle of incidence at which electrons of energy 100 eV must be incident on the lattice planes of a metal crystal in order to give a strong Bragg reflection in the first order, given that the lattice spacing is 0.252 nm.")],
      "(4 × 4 = 16 marks)"),
  sec("Section E", ["Essays - Answer in about two pages.", "Answer any two questions ; each question carries 10 marks."],
      [(32,"Explain Bragg’s law and Bragg’s X-ray spectrometer."),(33,"Explain the theory and working of semiconductor laser."),
       (34,"Explain the crystal system in detail with examples."),
       (35,"Describe an experimental arrangement to study Raman effect. How is Raman scattering different from Compton scattering ?")],
      "(2 × 10 = 20 marks)"),
 ],
 "tnote": ["Scan of a printed paper. Page 2 of the scan appears twice (the same image is in the file twice); the text is read once.",
           "Q29 is printed as “explain how it solution explains Meissner effect” and is kept as printed.",
           "The paper code on page 3 reads C 80282. Page 1 has no code printed."]})



def to_aa(p):
    tl=[("exam", p["exam"]), ("sch", p["dept"]), ("course", p["course"]), ("subject", p["adm"])]
    blocks=[]
    if p.get("preamble"):
        blocks.append(("sub", p["preamble"]))
    for s in p["sections"]:
        blocks.append(("sec", s["heading"], " ".join(s["instr"])))
        for n, t in s["qs"]:
            if n == "sub":
                blocks.append(("sub", t))
            else:
                blocks.append(("q", n, t))
        if s.get("foot"):
            blocks.append(("foot", s["foot"]))
    for t in p.get("tnote", []):
        blocks.append(("foot", "Transcription note: " + t))
    return {"file": p["file"],
            "title": f"{p['exam']}, {p['course']} {p['adm']}",
            "header": {"code": p["code"], "pages": p["pages"], "title": tl, "time": p["time"], "max": p["max"]},
            "pages": [blocks]}

if __name__ == "__main__":
    for p in PAPERS:
        build_paper.build(to_aa(p))
