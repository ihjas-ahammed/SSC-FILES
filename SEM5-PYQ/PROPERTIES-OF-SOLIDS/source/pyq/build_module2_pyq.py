"""Module II PYQ for Properties of Solids (missed-topic layout of the Electrodynamics II module PYQ).
Selection: 17 questions (syllabus items 6 to 11). The UG pool holds 2 relevant questions, so the M.Sc. papers are used (weightage kept as printed).
Bands: Section A 1 to 3 marks, Section B 4 to 5 marks, Section C 10 marks. Inside a section: topic order, then year, then month.
Head: pyq-head-ed.html (copied from the Electrodynamics II module PYQ). Run: python3 build_module_pyq.py
"""
import os
HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "properties-of-solids-module-2-pyq.html")
TOPIC = {"T1": "Drude–Lorentz classical theory", "T2": "Free electron gas: Fermi energy, density of states and applications", "T3": "Band theory: Bloch theorem, Kronig–Penney model, velocity and effective mass", "T4": "Metals, insulators and semiconductors"}
ROWS = [{'paper': '2021-NOV-PHY3C11-adm2019', 'num': 15, 'marks': 3, 'topic': 'T1', 'html': 'Find the relaxation time and mean free path of conduction electron in copper. For copper density of the free electron 8.5 × 10<sup>28</sup>/m<sup>3</sup>, resistivity 1.69 × 10<sup>–8</sup> ohm-m and average velocity of electron 1.154 × 10<sup>5</sup> m/s.', 'year': 2021, 'mo': 2, 'label': 'November 2021 (M.Sc.)', 'ms': True}, {'paper': '2019-NOV-PHY3C11-adm2017', 'num': 19, 'marks': 3, 'topic': 'T2', 'html': 'Valence electron density for monovalent potassium is, N/V = 1.402 × 10<sup>28</sup> m<sup>–3</sup>. For a typical current density of 10<sup>6</sup> Am<sup>–2</sup>, obtain the drift velocity in terms of Fermi velocity for electrons in potassium.', 'year': 2019, 'mo': 2, 'label': 'November 2019 (M.Sc.)', 'ms': True}, {'paper': '2022-NOV-PHY3C11-adm2019', 'num': 15, 'marks': 3, 'topic': 'T2', 'html': 'Find the Fermi velocity of the electrons if the number density of electrons in sodium is 2.52 × 10<sup>28</sup> m<sup>–3</sup> at room temperature.', 'year': 2022, 'mo': 2, 'label': 'November 2022 (M.Sc.)', 'ms': True}, {'paper': '2023-NOV-PHY3C11-adm2019', 'num': 19, 'marks': 3, 'topic': 'T2', 'html': 'The unit cell volume of sodium is 7.93 × 10<sup>–29</sup> m<sup>3</sup>. Calculate the Fermi energy of sodium at absolute zero', 'year': 2023, 'mo': 2, 'label': 'November 2023 (M.Sc.)', 'ms': True}, {'paper': '2021-NOV-PHY3C11-adm2019', 'num': 4, 'marks': 1, 'topic': 'T1', 'html': 'What is Wiedemann -Franz law ?', 'year': 2021, 'mo': 2, 'label': 'November 2021 (M.Sc.)', 'ms': True}, {'paper': '2021-NOV-PHY3C11-adm2019', 'num': 5, 'marks': 1, 'topic': 'T1', 'html': 'What is Hall effect ? Give the expression for Hall co-efficient as predicted by free electron theory.', 'year': 2021, 'mo': 2, 'label': 'November 2021 (M.Sc.)', 'ms': True}, {'paper': '2019-NOV-PHY3C11-adm2017', 'num': 5, 'marks': 1, 'topic': 'T1', 'html': 'What is the limitation of free electron model in explaining Hall coefficients of metals ?', 'year': 2019, 'mo': 2, 'label': 'November 2019 (M.Sc.)', 'ms': True}, {'paper': '2023-NOV-PHY3C11-adm2019', 'num': 5, 'marks': 1, 'topic': 'T1', 'html': 'Briefly explain Hall effect.', 'year': 2023, 'mo': 2, 'label': 'November 2023 (M.Sc.)', 'ms': True}, {'paper': '2023-NOV-PHY3C11-adm2019', 'num': 10, 'marks': 5, 'topic': 'T3', 'html': 'Discuss the formation of allowed and forbidden energy bands on the basis of the Kronig Penny model.', 'year': 2023, 'mo': 2, 'label': 'November 2023 (M.Sc.)', 'ms': True}, {'paper': '2021-NOV-PHY3C11-adm2019', 'num': 10, 'marks': 5, 'topic': 'T3', 'html': 'Discuss with necessary theory the Kronig-Penny model and show how energy bands are formed in solids.', 'year': 2021, 'mo': 2, 'label': 'November 2021 (M.Sc.)', 'ms': True}, {'paper': '2022-NOV-PHY3C11-adm2019', 'num': 5, 'marks': 1, 'topic': 'T3', 'html': 'What is effective mass of a charge carrier ? What is its importance ?', 'year': 2022, 'mo': 2, 'label': 'November 2022 (M.Sc.)', 'ms': True}, {'paper': '2019-NOV-PHY3C11-adm2017', 'num': 7, 'marks': 1, 'topic': 'T3', 'html': 'What is effective mass of a charge carrier ? What is its importance ?', 'year': 2019, 'mo': 2, 'label': 'November 2019 (M.Sc.)', 'ms': True}, {'paper': '2023-NOV-PHY3C11-adm2019', 'num': 17, 'marks': 3, 'topic': 'T3', 'html': 'The energy near the valence band edge of a crystal is given by E = –Ak<sup>2</sup>, where A = 10<sup>–39</sup> J m<sup>2</sup>. An electron with wave vector k = 10<sup>10</sup> k<sub>x</sub> m<sup>–1</sup> is removed from an orbital in the completely filled valence band. Determine the effective mass, velocity and momentum of the hole.', 'year': 2023, 'mo': 2, 'label': 'November 2023 (M.Sc.)', 'ms': True}, {'paper': '2023-NOV-PHY3C11-adm2019', 'num': 7, 'marks': 1, 'topic': 'T4', 'html': 'What do you meant by indirect band gap semiconductors ?', 'year': 2023, 'mo': 2, 'label': 'November 2023 (M.Sc.)', 'ms': True}, {'paper': '2019-NOV-PHY3C11-adm2017', 'num': 6, 'marks': 1, 'topic': 'T4', 'html': 'Explain the concept of holes in semiconductors.', 'year': 2019, 'mo': 2, 'label': 'November 2019 (M.Sc.)', 'ms': True}, {'paper': '2019-NOV-PHY3C11-adm2017', 'num': 20, 'marks': 3, 'topic': 'T4', 'html': 'Prove that the Fermi level in an intrinsic semiconductor lies in the middle of the forbidden gap if the effective masses of electrons and holes are equal.', 'year': 2019, 'mo': 2, 'label': 'November 2019 (M.Sc.)', 'ms': True}, {'paper': '2023-MAR-PHY6B11-adm2019', 'num': 14, 'marks': 5, 'topic': 'T2', 'html': 'Explain the reason for a very low value of electronic heat capacity of metals at ordinary temperatures.', 'year': 2023, 'mo': 0, 'label': 'March 2023', 'ms': False}]


def build():
    head = open(os.path.join(HERE, "pyq-head-ed.html"), encoding="utf-8").read()
    out = [head, '<div class="sheet">', '<div class="title">',
           '<div class="tl exam">FYUGP B.Sc. PHYSICS HONOURS</div>',
           '<div class="tl sch">PROPERTIES OF SOLIDS</div>',
           '<div class="tl course">Semester V &middot; Major Elective (Materials Science)</div>',
           '<div class="tl subject">MODULE II: FREE ELECTRON THEORY AND BAND THEORY</div>',
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
            mk = f"({r['marks']} weightage)" if r.get("ms") else f"({r['marks']} mark{'s' if r['marks'] != 1 else ''})"
            out.append(f'<div class="q"><span class="n">{n}</span><div><span class="q-src">{r["label"]}</span>'
                       f'<p>{r["html"]} <span class="mk">{mk}</span></p></div></div>')
        out.append('</div>')
    out.append('</div>\n</body>\n</html>\n')
    open(OUT, "w", encoding="utf-8").write("\n".join(out))
    print("written", OUT, "| questions", n)

if __name__ == "__main__":
    build()
