"""Module III PYQ for Properties of Solids (semiconductors, syllabus items 12 to 16), in the Electrodynamics II layout.
Selection: 7 questions. The UG pool holds 2 relevant questions (2025-MAR PHY6B14 Q5 and the PHY6B11 laser questions, which are not in scope),
so the M.Sc. papers are used (weightage kept as printed). Items 12 to 16 are covered by: intrinsic and extrinsic (T1), drift,
mobility and conductivity (T2), carrier concentration and Fermi level (T3).
Bands: Section A 1 to 3 marks, Section B 4 to 5 marks, Section C 10 marks. Inside a section: topic order, then year, then month.
Run: python3 build_module3_pyq.py
"""
import os
HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "properties-of-solids-module-3-pyq.html")
TOPIC = {"T1": "Intrinsic and extrinsic semiconductors", "T2": "Drift velocity, mobility and conductivity", "T3": "Carrier concentration and Fermi level"}
ROWS = [
 {'num': 6, 'marks': 1, 'topic': 'T1', 'year': 2019, 'mo': 2, 'label': 'November 2019 (M.Sc.)', 'ms': True,
  'html': 'Explain the concept of holes in semiconductors.'},
 {'num': 7, 'marks': 1, 'topic': 'T1', 'year': 2023, 'mo': 2, 'label': 'November 2023 (M.Sc.)', 'ms': True,
  'html': 'What do you meant by indirect band gap semiconductors ?'},
 {'num': 5, 'marks': 2, 'topic': 'T1', 'year': 2025, 'mo': 3, 'label': 'March 2025', 'ms': False,
  'html': 'What is a semiconducting material ? Give the significance.'},
 {'num': 16, 'marks': 3, 'topic': 'T2', 'year': 2022, 'mo': 2, 'label': 'November 2022 (M.Sc.)', 'ms': True,
  'html': 'An electric field of 100 V/m is applied to a n-type semiconductor having hall co-efficient 0.0125 m<sup>3</sup>/C. Determine the current density in the sample if the electron mobility is 0.36 m<sup>2</sup> v<sup>–1</sup> s<sup>–1</sup>.'},
 {'num': 16, 'marks': 3, 'topic': 'T2', 'year': 2023, 'mo': 2, 'label': 'November 2023 (M.Sc.)', 'ms': True,
  'html': 'The mobility of hole is µ<sub>h</sub> = 0.025 m<sup>2</sup>/Vsec. What would be the resistivity of p-type silicon if the hall co-efficient of the sample is 2.25 × 10<sup>–5</sup> m<sup>3</sup>/C ?'},
 {'num': 20, 'marks': 3, 'topic': 'T3', 'year': 2019, 'mo': 2, 'label': 'November 2019 (M.Sc.)', 'ms': True,
  'html': 'Prove that the Fermi level in an intrinsic semiconductor lies in the middle of the forbidden gap if the effective masses of electrons and holes are equal.'},
 {'num': 10, 'marks': 5, 'topic': 'T3', 'year': 2022, 'mo': 2, 'label': 'November 2022 (M.Sc.)', 'ms': True,
  'html': 'Obtain the expressions for the carrier concentrations in intrinsic semiconductor.'},
]

def build():
    head = open(os.path.join(HERE, "pyq-head-ed.html"), encoding="utf-8").read()
    out = [head, '<div class="sheet">', '<div class="title">',
           '<div class="tl exam">FYUGP B.Sc. PHYSICS HONOURS</div>',
           '<div class="tl sch">PROPERTIES OF SOLIDS</div>',
           '<div class="tl course">Semester V &middot; Major Elective (Materials Science)</div>',
           '<div class="tl subject">MODULE III: SEMICONDUCTORS</div>',
           '<div class="tl course">Past questions</div>',
           '</div>']
    bands = [("A", "Section A: 1 to 3 marks", lambda m: m <= 3),
             ("B", "Section B: 4 to 5 marks", lambda m: 4 <= m <= 5),
             ("C", "Section C: 10 marks", lambda m: m >= 10)]
    n = 0
    for _, title, test in bands:
        rows = sorted([x for x in ROWS if test(x["marks"])], key=lambda x: (x["topic"], x["year"], x["mo"]))
        if not rows:
            continue
        out.append(f'<div class="sec"><div class="sec-title">{title}</div>')
        last = None
        for r in rows:
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
