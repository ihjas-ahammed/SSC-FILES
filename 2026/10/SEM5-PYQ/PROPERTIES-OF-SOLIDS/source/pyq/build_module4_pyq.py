"""Module IV PYQ for Properties of Solids (dielectric and magnetic properties of solids, syllabus items 17 to 22), in the Electrodynamics II layout.
Selection: 18 questions from the M.Sc. Solid State papers (2019 Nov, 2021 Nov, 2022 Nov, 2023 Nov); weightage kept as printed.
Excluded (not Module IV): magnons (2019 Nov Q9), superconductivity questions, semiconductor and crystal-structure questions,
and 2023 Mar PHY6B11 Q13 (spin-half population ratio, a quantum treatment beyond the classical theory of item 18).
Topics: T1 types of magnetism (17); T2 diamagnetism, paramagnetism and ferromagnetism (18); T3 antiferromagnetism and ferrimagnetism (19);
T4 polarisation, local field, dielectric constant and polarisability (20, 21); T5 ferro- and piezoelectricity (22).
Bands: A 1 to 3 weightage; B 4 to 6 weightage (the 6-weightage item is placed in B, as in Module III). No 10-mark item in the pool.
Run: python3 build_module4_pyq.py
"""
import os
HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "properties-of-solids-module-4-pyq.html")
TOPIC = {"T1": "Types of magnetism", "T2": "Diamagnetism, paramagnetism and ferromagnetism (classical theories)",
         "T3": "Antiferromagnetism and ferrimagnetism", "T4": "Polarisation, local field, dielectric constant and polarisability",
         "T5": "Ferro- and piezoelectricity"}
ROWS = [
 {'topic': 'T1', 'marks': 1, 'year': 2019, 'mo': 2, 'label': 'November 2019 (M.Sc.)', 'html': 'Distinguish between paramagnetic and ferromagnetic materials.'},
 {'topic': 'T1', 'marks': 1, 'year': 2023, 'mo': 2, 'label': 'November 2023 (M.Sc.)', 'html': 'Distinguish between para and ferromagnetism.'},
 {'topic': 'T1', 'marks': 3, 'year': 2022, 'mo': 2, 'label': 'November 2022 (M.Sc.)', 'html': 'If the magnetization and flux density of a magnetic material be 3200 A/m and 0.005 Wb/m<sup>2</sup>. Calculate the relative permeability of the material.'},
 {'topic': 'T2', 'marks': 1, 'year': 2021, 'mo': 2, 'label': 'November 2021 (M.Sc.)', 'html': 'Explain the origin of the diamagnetism.'},
 {'topic': 'T2', 'marks': 1, 'year': 2022, 'mo': 2, 'label': 'November 2022 (M.Sc.)', 'html': 'Distinguish between hard and soft magnetic materials.'},
 {'topic': 'T2', 'marks': 3, 'year': 2019, 'mo': 2, 'label': 'November 2019 (M.Sc.)', 'html': 'Calculate the value of magnetic susceptibility for a paramagnetic material (N = 9 × 10<sup>28</sup> m<sup>–3</sup>, µ<sub>B</sub> = 9.27 × 10<sup>–24</sup> JT<sup>–1</sup>) at 0.1 K.'},
 {'topic': 'T2', 'marks': 3, 'year': 2021, 'mo': 2, 'label': 'November 2021 (M.Sc.)', 'html': 'A paramagnetic material has 10<sup>28</sup> atoms/m<sup>3</sup>. Its susceptibility at 350 K is 2.8 × 10<sup>–4</sup>. Calculate susceptibility at 300 K.'},
 {'topic': 'T2', 'marks': 3, 'year': 2023, 'mo': 2, 'label': 'November 2023 (M.Sc.)', 'html': 'A ferromagnetic material with J = 3/2 and g = 2 has a Curie temperature of 125 K. Calculate the intrinsic flux density near 0 K. Also, calculate the ratio of the magnetization at 300 K in the presence of an external field of 1 mT to the spontaneous magnetization at 0 K.'},
 {'topic': 'T2', 'marks': 5, 'year': 2023, 'mo': 2, 'label': 'November 2023 (M.Sc.)', 'html': 'Describe the Langevin’s theory of paramagnetism and obtain an expression for paramagnetic susceptibility. Mention the temperature dependence of susceptibility.'},
 {'topic': 'T2', 'marks': 6, 'year': 2019, 'mo': 2, 'label': 'November 2019 (M.Sc.)', 'html': 'Derive Curie-Weiss law for ferromagnetism.'},
 {'topic': 'T3', 'marks': 1, 'year': 2019, 'mo': 2, 'label': 'November 2019 (M.Sc.)', 'html': 'Briefly explain the origin of ferrimagnetic moments.'},
 {'topic': 'T3', 'marks': 1, 'year': 2022, 'mo': 2, 'label': 'November 2022 (M.Sc.)', 'html': 'Explain Neel’s theory of anti-ferromagnetism.'},
 {'topic': 'T3', 'marks': 5, 'year': 2021, 'mo': 2, 'label': 'November 2021 (M.Sc.)', 'html': 'Distinguish between ferromagnetism and anti-ferromagnetisms. Describe the Neel model of antiferromagnetism.'},
 {'topic': 'T4', 'marks': 5, 'year': 2022, 'mo': 2, 'label': 'November 2022 (M.Sc.)', 'html': 'Describe macroscopically the origin of static dielectric constant of a substance and discuss the classical theory of electronic polarization.'},
 {'topic': 'T4', 'marks': 3, 'year': 2021, 'mo': 2, 'label': 'November 2021 (M.Sc.)', 'html': 'Helium gas contains 2.7 × 10<sup>25</sup> atoms/m<sup>3</sup> and dielectric constant of He atom NTD is 1. 0000684. Calculate the electric polarizability of He atom.'},
 {'topic': 'T4', 'marks': 3, 'year': 2023, 'mo': 2, 'label': 'November 2023 (M.Sc.)', 'html': 'Derive the Clausius-Mossotti relation by considering the local field effects.'},
 {'topic': 'T5', 'marks': 1, 'year': 2021, 'mo': 2, 'label': 'November 2021 (M.Sc.)', 'html': 'Distinguish between pyroelectric and piezoelectric materials.'},
 {'topic': 'T5', 'marks': 1, 'year': 2023, 'mo': 2, 'label': 'November 2023 (M.Sc.)', 'html': 'Discuss the ferroelectric and paraelectric states.'},
]
# Band B items: the 5 and 6 weightage questions; the rest are band A.
SECTIONS = [("A", "Section A: 1 to 3 weightage", lambda m: m <= 3),
            ("B", "Section B: 4 to 6 weightage", lambda m: 4 <= m <= 6)]

def build():
    head = open(os.path.join(HERE, "pyq-head-ed.html"), encoding="utf-8").read()
    out = [head, '<div class="sheet">', '<div class="title">',
           '<div class="tl exam">FYUGP B.Sc. PHYSICS HONOURS</div>',
           '<div class="tl sch">PROPERTIES OF SOLIDS</div>',
           '<div class="tl course">Semester V &middot; Major Elective (Materials Science)</div>',
           '<div class="tl subject">MODULE IV: DIELECTRIC AND MAGNETIC PROPERTIES OF SOLIDS</div>',
           '<div class="tl course">Past questions</div>',
           '</div>']
    n = 0
    for _, title, test in SECTIONS:
        rows = sorted([x for x in ROWS if test(x["marks"])], key=lambda x: (x["topic"], x["year"], x["mo"]))
        if not rows:
            continue
        out.append(f'<div class="sec"><div class="sec-title">{title}</div>')
        last = None
        for r in rows:
            if r["topic"] != last:
                out.append(f'<div class="topic">{TOPIC[r["topic"]]}</div>'); last = r["topic"]
            n += 1
            out.append(f'<div class="q"><span class="n">{n}</span><div><span class="q-src">{r["label"]}</span>'
                       f'<p>{r["html"]} <span class="mk">({r["marks"]} weightage)</span></p></div></div>')
        out.append('</div>')
    out.append('</div>\n</body>\n</html>\n')
    open(OUT, "w", encoding="utf-8").write("\n".join(out))
    print("written", OUT, "| questions", n)

if __name__ == "__main__":
    build()
