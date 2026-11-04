"""Model questions for Properties of Solids, Module IV (dielectric and magnetic properties, syllabus items 17 to 22): topics the past papers miss.
Layout: the Module III model paper (pyq-head-ed.html, sections, topic headings, key sheet, mapping table).
Sections: A 1 mark (answer all), B 2 marks (answer all), C 4 marks (answer all), D 10 marks (answer any ONE). Total 46.
Run: python3 build_model_module4.py
"""
import os
HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "properties-of-solids-module-4-model-missed-topics-from-pyq.html")

QS = [
 'Write the relation between the magnetisation $M$, the susceptibility $\\chi$ and the field $H$.',
 'Write the relative permeability $\\mu_r$ in terms of the susceptibility $\\chi$.',
 'State the Curie law for a paramagnetic material and name the Curie constant.',
 'Write the saturation magnetisation $M_s$ of a paramagnet with $N$ atoms per unit volume, Landé factor $g$ and total angular momentum $J$.',
 'Write the Curie–Weiss law for a ferromagnet above its Curie temperature $T_C$, and define the Curie constant $C$ in terms of $\\mu_0$, $T_C$ and $\\lambda$.',
 'Write the relation between the Néel temperature $T_N$ and $\\theta$ for an antiferromagnet, in terms of the interaction constants $\\alpha$ and $\\beta$.',
 'State the Clausius–Mossotti relation between the dielectric constant $\\varepsilon_r$ and the atomic polarisability $\\alpha$.',
 'Write the total polarisability $\\alpha$ as the sum of its three contributions, and name them.',
 'Derive the classical Langevin expression $\\chi_{dia}=-\\dfrac{N\\mu_0Ze^2}{6m}\\langle r^2\\rangle$ for diamagnetism, starting from the change of orbital frequency under a field.',
 'Show that for $x\\ll1$ the Langevin function is $L(x)\\cong x/3$, and hence derive the Curie law $\\chi_{para}=C/T$.',
 'Explain the origin of the permanent magnetic moment of an atom. Write the Landé $g$-factor in terms of $J$, $S$ and $L$, and give its value for pure spin motion.',
 'Distinguish between antiferromagnetism and ferrimagnetism with a sketch of the sublattice moments, and state the sign of the exchange integral for each.',
 'Derive the Lorentz local field $\\mathbf{E}_{loc}=\\mathbf{E}+\\mathbf{P}/3\\varepsilon_o$ for an atom of cubic symmetry, explaining each term.',
 'Explain piezoelectricity. Why must a piezoelectric crystal have no centre of inversion? Give one example of a crystal that is piezoelectric but not ferroelectric.',
 'Explain the Weiss molecular field theory of ferromagnetism. Derive the Curie–Weiss law above $T_C$ and show that $T_C=\\lambda Ng^2\\mu_B^2J(J+1)/3k$.',
 'Derive the Clausius–Mossotti relation $\\dfrac{\\varepsilon_r-1}{\\varepsilon_r+2}=\\dfrac{N\\alpha}{3\\varepsilon_o}$ from the local field. Explain the three sources of polarisability and how their contributions change with frequency.',
 'Explain ferroelectricity in barium titanate: the cubic and tetragonal structures, the polarisation catastrophe, and the Curie–Weiss-type variation $\\varepsilon_r\\cong\\xi/(T-T_C)$ above the transition temperature.',
]
KEYS = [
 '$M=\\chi H$ (book Eq. 8.1).',
 '$\\mu_r=1+\\chi$ (book Eq. 8.7).',
 '$\\chi_{para}=C/T$ with $C=\\mu_0N\\mu^2/3k$ (book Eqs. 8.33, 8.34).',
 '$M_s=NgJ\\mu_B$ (book Eq. 8.49).',
 '$\\chi=C/(T-T_C)$ with $C=\\mu_0T_C/\\lambda$ (book Eqs. 8.64, 8.65).',
 '$T_N/\\theta=(\\beta-\\alpha)/(\\beta+\\alpha)$ (book Eq. 8.82).',
 '$(\\varepsilon_r-1)/(\\varepsilon_r+2)=N\\alpha/3\\varepsilon_o$ (book Eq. 9.12).',
 '$\\alpha=\\alpha_e+\\alpha_i+\\alpha_d$ (electronic, ionic, dipolar; book Eq. 9.32).',
 'The orbital frequency changes by $eB/2m$ (Larmor). The induced moment is $\\mu_a=-(Ze^2B/4m)\\langle\\rho^2\\rangle$; with $\\langle r^2\\rangle=\\tfrac32\\langle\\rho^2\\rangle$ and $M=N\\mu_a$ this gives Eq. 8.20 (book §8.3.1).',
 '$L(x)=\\coth x-1/x\\cong x/3$ for small $x$ (Eq. 8.32). With $M\\cong N\\mu^2B/3kT$, $\\chi=\\mu_0N\\mu^2/3kT=C/T$ (Eqs. 8.33, 8.34).',
 'Origin: spin and orbital motion of unpaired electrons (book §8.2). $g=1+\\dfrac{J(J+1)+S(S+1)-L(L+1)}{2J(J+1)}$ (Eq. 8.37); $g=2$ for pure spin.',
 'Antiferromagnet: equal and opposite sublattice moments, cancelling (no net moment). Ferrimagnet: unequal opposite moments, so a net moment. Exchange integral negative in both, with AB interaction dominant (book §8.6, §8.7).',
 'The applied field $\\mathbf{E}_o$ plus the polarisation field $\\mathbf{E}_p=-\\mathbf{P}/3\\varepsilon_o$ inside a cubic site, plus the field of the other polarised atoms (book Eq. 9.3 and §9.2).',
 'Piezoelectricity: stress gives a dipole (Eq. 9.39). Needs no centre of inversion (Fig. 9.6). Quartz is piezoelectric but not ferroelectric (book §9.7).',
 'Molecular field $B_E=\\lambda M$ (Eq. 8.52); $x=gJ\\mu_B(B+\\lambda M)/kT$ (Eq. 8.62); $\\chi=C/(T-T_C)$ (Eq. 8.64), with $T_C$ from Eq. 8.66.',
 'Eq. (9.10) and (9.12) from $P=N\\alpha(E+P/3\\varepsilon_o)$ (Eq. 9.9). Sources: electronic (resonance at $\\omega_o$, $\\alpha_e=e^2/m(\\omega_o^2-\\omega^2)$), ionic ($e^2/\\beta$), dipolar ($p^2/3kT$); dipolar disappears first at high frequency (book §9.4, §9.5).',
 'Cubic phase: centres of charge coincide. Tetragonal phase: Ti and Ba move up, O moves down, giving spontaneous polarisation (book §9.6, Fig. 9.5). Polarisation catastrophe when $\\sum N_j\\alpha_j=3\\varepsilon_o$ (Eq. 9.34). Near $T_C$, $\\varepsilon_r\\cong\\xi/(T-T_C)$ (Eq. 9.38).',
]
TOPICS = ['Susceptibility', 'Permeability', 'Curie law', 'Saturation magnetisation', 'Curie–Weiss law', 'Néel temperature',
          'Clausius–Mossotti relation', 'Total polarisability', 'Diamagnetism', 'Paramagnetism', 'Origin of permanent moment and g-factor',
          'Antiferromagnetism and ferrimagnetism', 'Local field', 'Piezoelectricity', 'Weiss theory',
          'Clausius–Mossotti relation and sources', 'Ferroelectricity']
SECTIONS = [
 ("Section A: 1 mark each, answer all", 1, range(0, 4)),
 ("Section B: 2 marks each, answer all", 2, range(4, 8)),
 ("Section C: 4 marks each, answer all", 4, range(8, 14)),
 ("Section D: 10 marks each, answer any ONE", 10, range(14, 17)),
]
MAP = [
 ('17', 'Types of magnetism; origin of the permanent moment', '8.1, 8.2', '1, 2, 11'),
 ('18', 'Diamagnetism and paramagnetism (classical); ferromagnetism (Weiss)', '8.3, 8.4, 8.5', '3, 4, 5, 9, 10, 15'),
 ('19', 'Antiferromagnetism and ferrimagnetism (qualitative)', '8.6, 8.7', '6, 12'),
 ('20', 'Polarisation, susceptibility, local field', '9.1, 9.2', '13'),
 ('21', 'Dielectric constant, polarisability and its sources', '9.3, 9.4, 9.5', '7, 8, 16'),
 ('22', 'Ferro- and piezoelectricity (qualitative)', '9.6, 9.7', '14, 17'),
]

def build():
    head = open(os.path.join(HERE, "pyq-head-ed.html"), encoding="utf-8").read()
    head = head.replace("</style>", ".sec-title, .topic { break-after: avoid; }\n@media print { .sheet { height: auto !important; min-height: 0 !important; } .sheet.key { break-before: page; } }\n.sheet:not(.key) .q p { font-size: 11px; line-height: 1.15; }\n.sheet:not(.key) { padding-top: 8mm; padding-bottom: 8mm; }\n.sheet:not(.key) .title { margin-top: 4px; }\n.sheet:not(.key) .topic { margin: 0; font-size: 11px; line-height: 1.1; }\n.sheet:not(.key) .sec-title { margin: 4px 0 2px; }\n.sheet:not(.key) .sec { margin-bottom: 2px; }\n.sheet:not(.key) .q { margin: 0; padding: 0; }\n.sheet:not(.key) .q .mk { font-size: 10.5px; }\n.sheet:not(.key) .topic, .sheet:not(.key) .sec-title { margin-top: 6px; }\n</style>", 1)
    out = [head, '<div class="sheet">',
           '<div class="title">',
           '<div class="tl exam">FYUGP B.Sc. PHYSICS HONOURS</div>',
           '<div class="tl sch">PROPERTIES OF SOLIDS</div>',
           '<div class="tl course">Semester V &middot; Major Elective (Materials Science)</div>',
           '<div class="tl subject">MODULE IV: DIELECTRIC AND MAGNETIC PROPERTIES OF SOLIDS</div>',
           '<div class="tl course">Model questions on topics the past papers miss</div>',
           '</div>']
    n = 0
    for title, marks, idxs in SECTIONS:
        out.append(f'<div class="sec"><div class="sec-title">{title}</div>')
        last = None
        for i in idxs:
            n += 1
            if TOPICS[i] != last:
                out.append(f'<div class="topic">{TOPICS[i]}</div>'); last = TOPICS[i]
            out.append(f'<div class="q"><span class="n">{n}</span><div>'
                       f'<p>{QS[i]} <span class="mk">({marks} mark{"s" if marks > 1 else ""})</span></p></div></div>')
        out.append('</div>')
    out.append('</div>')
    out.append('<div class="sheet key"><div class="title"><div class="tl subject">MODULE IV: MODEL ANSWERS</div>'
               '<div class="tl course">For checking your work. Each answer shows the key step and the result.</div></div>')
    for title, marks, idxs in SECTIONS:
        items = " ".join(f"<b>{i+1}.</b> {KEYS[i]}" for i in idxs)
        out.append(f'<p class="key"><b>{title.split(":")[0]}.</b> {items}</p>')
    out.append('<div class="sec"><div class="sec-title">Mapping to the syllabus and textbook</div>')
    out.append('<table class="tbl" style="width:100%"><tr><th>Syllabus item</th><th>Topic</th><th>Puri and Babbar section</th><th>Model questions</th></tr>')
    for a, b, c, d in MAP:
        out.append(f'<tr><td>{a}</td><td style="text-align:left">{b}</td><td>{c}</td><td>{d}</td></tr>')
    out.append('</table></div>')
    out.append('<p class="key" style="font-size:12px">Questions are drafted for the gaps in the past papers (not from any past paper). Chapter questions and problems of the book are not used.</p>')
    out.append('</div></body></html>')
    open(OUT, "w", encoding="utf-8").write("\n".join(out))
    print("model questions:", n, "| marks 46")

if __name__ == "__main__":
    build()
