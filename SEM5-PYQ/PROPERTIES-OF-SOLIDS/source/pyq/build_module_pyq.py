"""Module I PYQ for Properties of Solids (missed-topic layout of the Electrodynamics II module PYQ).
Selection: 37 UG questions (syllabus items 1 to 5) from the eight UG papers in this folder. M.Sc. papers left out.
Bands: Section A 1 to 3 marks, Section B 4 to 5 marks, Section C 10 marks. Inside a section: topic order, then year, then month.
Head: pyq-head-ed.html (copied from the Electrodynamics II module PYQ). Run: python3 build_module_pyq.py
"""
import os
HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "properties-of-solids-module-1-pyq.html")
TOPIC = {1: "Crystal lattice, unit cell and basis", 2: "Symmetry operations, point groups and space groups",
         3: "Bravais lattices and crystal systems", 4: "Lattice directions, planes, Miller indices and interplanar spacing",
         5: "Simple crystal structures", 6: "X-ray diffraction, Bragg’s law and reciprocal lattice"}
ROWS = [
 {
  "topic": 2,
  "marks": 2,
  "year": 2026,
  "mo": 1,
  "label": "April 2026",
  "html": "Define crystal symmetry and give an example."
 },
 {
  "topic": 1,
  "marks": 2,
  "year": 2026,
  "mo": 1,
  "label": "April 2026",
  "html": "What is a unit cell, and how does it differ from a primitive cell ?"
 },
 {
  "topic": 4,
  "marks": 2,
  "year": 2026,
  "mo": 1,
  "label": "April 2026",
  "html": "What is the importance of Miller indices in crystallography ?"
 },
 {
  "topic": 4,
  "marks": 5,
  "year": 2026,
  "mo": 1,
  "label": "April 2026",
  "html": "Find the lattice spacing of a cubic crystal with lattice parameter 4.2 Å for (1, 1, 1) planes."
 },
 {
  "topic": 6,
  "marks": 5,
  "year": 2026,
  "mo": 1,
  "label": "April 2026",
  "html": "Explain how Bragg’s X-ray spectrometer works and its application."
 },
 {
  "topic": 1,
  "marks": 2,
  "year": 2025,
  "mo": 0,
  "label": "March 2025",
  "html": "What is meant by unit cell ? Give an example."
 },
 {
  "topic": 1,
  "marks": 2,
  "year": 2025,
  "mo": 0,
  "label": "March 2025",
  "html": "Explain the terms crystal lattice and basis."
 },
 {
  "topic": 6,
  "marks": 5,
  "year": 2025,
  "mo": 0,
  "label": "March 2025",
  "html": "Derive and explain Bragg’s law."
 },
 {
  "topic": 5,
  "marks": 5,
  "year": 2025,
  "mo": 0,
  "label": "March 2025",
  "html": "Find out the packing fraction of FCC."
 },
 {
  "topic": 5,
  "marks": 2,
  "year": 2026,
  "mo": 1,
  "label": "April 2026",
  "html": "What is meant by atomic packing factor (APF) ?"
 },
 {
  "topic": 6,
  "marks": 5,
  "year": 2026,
  "mo": 1,
  "label": "April 2026",
  "html": "A monochromatic X-ray beam of wavelength 1.54 Å is used in a powder diffraction experiment. If the first-order diffraction peak is observed at a Bragg angle of 30°, calculate the interplanar spacing (d) of the crystal."
 },
 {
  "topic": 6,
  "marks": 1,
  "year": 2023,
  "mo": 0,
  "label": "March 2023",
  "html": "Vector form of Bragg’s law is ______."
 },
 {
  "topic": 4,
  "marks": 1,
  "year": 2023,
  "mo": 0,
  "label": "March 2023",
  "html": "Give the expression for lattice constant ‘a’ of a cubic system."
 },
 {
  "topic": 5,
  "marks": 2,
  "year": 2023,
  "mo": 0,
  "label": "March 2023",
  "html": "What is meant by atomic packing factor ?"
 },
 {
  "topic": 4,
  "marks": 2,
  "year": 2023,
  "mo": 0,
  "label": "March 2023",
  "html": "What are miller indices ?"
 },
 {
  "topic": 2,
  "marks": 4,
  "year": 2023,
  "mo": 0,
  "label": "March 2023",
  "html": "What are symmetry elements ?"
 },
 {
  "topic": 4,
  "marks": 4,
  "year": 2023,
  "mo": 0,
  "label": "March 2023",
  "html": "Find the miller indices of a plane that makes intercepts as a, b and c axes equal to 3 Å, 4 Å and 3 Å in a tetragonal crystal with c/a ratio as 1.5."
 },
 {
  "topic": 5,
  "marks": 2,
  "year": 2023,
  "mo": 0,
  "label": "March 2023",
  "html": "What do you mean by the co-ordination number of a lattice ? What is the co-ordination number of an fcc lattice ?"
 },
 {
  "topic": 5,
  "marks": 2,
  "year": 2023,
  "mo": 0,
  "label": "March 2023",
  "html": "Draw the atomic positions in the cubic cell of diamond projected on a face."
 },
 {
  "topic": 4,
  "marks": 2,
  "year": 2023,
  "mo": 0,
  "label": "March 2023",
  "html": "Indicate a (111) direction in a cubic crystal."
 },
 {
  "topic": 6,
  "marks": 5,
  "year": 2023,
  "mo": 0,
  "label": "March 2023",
  "html": "A monochromatic beam of X ray of λ = 0.7 Å undergoes first order Bragg reflection from the plane (3 0 2) of a cubic crystal at a glancing angle of 35°. Determine the lattice constant [symbol missing in print]."
 },
 {
  "topic": 5,
  "marks": 10,
  "year": 2023,
  "mo": 0,
  "label": "March 2023",
  "html": "Explain the atomic arrangements in an hcp structure and obtain the corresponding packing fraction."
 },
 {
  "topic": 1,
  "marks": 1,
  "year": 2022,
  "mo": 0,
  "label": "March 2022",
  "html": "The process of determination of crystal structure is called ______."
 },
 {
  "topic": 1,
  "marks": 2,
  "year": 2022,
  "mo": 0,
  "label": "March 2022",
  "html": "Define crystal lattice."
 },
 {
  "topic": 6,
  "marks": 2,
  "year": 2022,
  "mo": 0,
  "label": "March 2022",
  "html": "Write down Bragg’s equation."
 },
 {
  "topic": 3,
  "marks": 4,
  "year": 2022,
  "mo": 0,
  "label": "March 2022",
  "html": "Write a brief note on crystal systems."
 },
 {
  "topic": 4,
  "marks": 4,
  "year": 2022,
  "mo": 0,
  "label": "March 2022",
  "html": "Copper has fee structure with the lattice constant 0.361 nm. Calculate the interplanar spacing for (112) and (120) planes."
 },
 {
  "topic": 5,
  "marks": 10,
  "year": 2022,
  "mo": 0,
  "label": "March 2022",
  "html": "Explain the close-packed structures in crystal."
 },
 {
  "topic": 5,
  "marks": 1,
  "year": 2020,
  "mo": 0,
  "label": "March 2020",
  "html": "Atomic packing factor of a diamond cubic structure is ______."
 },
 {
  "topic": 5,
  "marks": 1,
  "year": 2020,
  "mo": 0,
  "label": "March 2020",
  "html": "Give an example for simple cubic structure."
 },
 {
  "topic": 6,
  "marks": 4,
  "year": 2020,
  "mo": 0,
  "label": "March 2020",
  "html": "Explain how X- rays are used for determining the crystal structure."
 },
 {
  "topic": 1,
  "marks": 4,
  "year": 2020,
  "mo": 0,
  "label": "March 2020",
  "html": "Define the terms : lattice, basis, crystal structure and unit cell."
 },
 {
  "topic": 5,
  "marks": 4,
  "year": 2020,
  "mo": 0,
  "label": "March 2020",
  "html": "Show that the packing factor of bcc lattice is π√3/8."
 },
 {
  "topic": 4,
  "marks": 4,
  "year": 2020,
  "mo": 0,
  "label": "March 2020",
  "html": "Calculate the inter planar spacing for (321) plane in simple cubic lattice with inter atomic spacing a = 4.21 Å."
 },
 {
  "topic": 5,
  "marks": 4,
  "year": 2020,
  "mo": 0,
  "label": "March 2020",
  "html": "Derive the expression for volume of unit cell in body centred cubic structure."
 },
 {
  "topic": 6,
  "marks": 10,
  "year": 2020,
  "mo": 0,
  "label": "March 2020",
  "html": "Explain Bragg’s law and Bragg’s X-ray spectrometer."
 },
 {
  "topic": 3,
  "marks": 10,
  "year": 2020,
  "mo": 0,
  "label": "March 2020",
  "html": "Explain the crystal system in detail with examples."
 }
]

def build():
    head = open(os.path.join(HERE, "pyq-head-ed.html"), encoding="utf-8").read()
    out = [head, '<div class="sheet">', '<div class="title">',
           '<div class="tl exam">FYUGP B.Sc. PHYSICS HONOURS</div>',
           '<div class="tl sch">PROPERTIES OF SOLIDS</div>',
           '<div class="tl course">Semester V &middot; Major Elective (Materials Science)</div>',
           '<div class="tl subject">MODULE 1: CRYSTAL STRUCTURE</div>',
           '<div class="tl course">Past questions</div>',
           '</div>']
    bands = [("A", "Section A: 1 to 3 marks", lambda m: m <= 3),
             ("B", "Section B: 4 to 5 marks", lambda m: 4 <= m <= 5),
             ("C", "Section C: 10 marks", lambda m: m >= 10)]
    n = 0
    for _, title, test in bands:
        out.append(f'<div class="sec"><div class="sec-title">{title}</div>')
        last = None
        for r in sorted([x for x in ROWS if test(x["marks"])], key=lambda x: (x["topic"], x["year"], x["mo"])):
            if r["topic"] != last:
                out.append(f'<div class="topic">{TOPIC[r["topic"]]}</div>'); last = r["topic"]
            n += 1
            mk = f"({r['marks']} mark{'s' if r['marks'] != 1 else ''})"
            out.append(f'<div class="q"><span class="n">{n}</span><div><span class="q-src">{r["label"]}</span>'
                       f'<p>{r["html"]} <span class="mk">{mk}</span></p></div></div>')
        out.append('</div>')
    out.append('</div>\n</body>\n</html>\n')
    open(OUT, "w", encoding="utf-8").write("\n".join(out))
    print("written", OUT, "| questions", n)

if __name__ == "__main__":
    build()
