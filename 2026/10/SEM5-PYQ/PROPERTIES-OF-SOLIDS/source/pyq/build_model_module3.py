"""Model questions for Properties of Solids, Module III (semiconductors, syllabus items 12 to 16): topics the past papers miss.
Layout: the Module II model paper (pyq-head-ed.html, sections, topic headings, key sheet, mapping table).
Sections: A 1 mark (answer all), B 2 marks (answer all), C 4 marks (answer all), D 10 marks (answer any ONE). Total 46.
Run: python3 build_model_module3.py
"""
import os
HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "properties-of-solids-module-3-model-missed-topics-from-pyq.html")

QS = [
 'What is the difference between an intrinsic and an extrinsic semiconductor?',
 'Write the law of mass action for a doped semiconductor, in terms of the electron and hole concentrations and the intrinsic concentration $n_i$.',
 'Write the drift velocity of a carrier in terms of its mobility $\\mu$ and the applied field $\\mathcal{E}$.',
 'Write the conductivity of an intrinsic semiconductor in terms of $n_i$, $e$ and the electron and hole mobilities.',
 'Where does the Fermi level of an intrinsic semiconductor lie at 0 K? Write the expression.',
 'Write the electron concentration in the conduction band in terms of the effective density of states $N_c$, $E_c$ and $E_F$.',
 'In an $n$-type semiconductor, what is the ionisation energy of the donors? Write it in terms of $E_c$ and $E_d$.',
 'In a $p$-type semiconductor the ionised acceptor concentration is $N_a^-$. Write the hole concentration in terms of $N_a^-$.',
 'An electron of mass $m$ and charge $e$ moves in a field $\\mathcal{E}$ and has average time $\\tau$ between collisions. Show that the conductivity of an electron gas of density $n$ is $\\sigma=ne^2\\tau/m$.',
 'Show that for an $n$-type semiconductor at moderate temperatures the Fermi level is $E_F=\\dfrac{E_d+E_c}{2}+\\dfrac{kT}{2}\\ln\\dfrac{N_d}{N_c}$.',
 'State the law of mass action and show that $np$ depends only on the band gap and the temperature for an intrinsic semiconductor.',
 'For an intrinsic semiconductor with effective masses $m_n^*$ and $m_p^*$, show that the Fermi level is $E_F=\\dfrac{E_c+E_v}{2}+\\dfrac{3}{4}kT\\ln\\dfrac{m_p^*}{m_n^*}$.',
 'Explain the variation of the Fermi level with temperature for an $n$-type semiconductor, and say what happens at high temperature.',
 'Sketch $\\ln\\sigma$ against $1/T$ for an intrinsic semiconductor. Show that the slope gives the band gap $E_g$.',
 'Derive the electron concentration in the conduction band of an intrinsic semiconductor, and write the effective density of states $N_c$ in terms of $m_n^*$, $T$ and $h$.',
 'Derive the hole concentration in the valence band, and the intrinsic carrier concentration $n_i=2(2\\pi kT/h^2)^{3/2}(m_n^*m_p^*)^{3/4}\\exp(-E_g/2kT)$.',
 'Explain how the conductivity of an $n$-type semiconductor varies with temperature in three regions (ionisation, saturation and intrinsic), and derive $\\sigma=eN_d\\mu_n$ for the middle region.',
]
KEYS = [
 'An intrinsic semiconductor is pure, with $n=p=n_i$. An extrinsic semiconductor is doped with donors or acceptors, so one carrier type dominates (book §7.1 to §7.3).',
 '$np=n_i^2$ (book Eq. 7.34).',
 '$v_d=\\mu\\mathcal{E}$ (book Eq. 7.3).',
 '$\\sigma=en_i(\\mu_n+\\mu_p)$ (book Eq. 7.9).',
 '$E_F=E_i=(E_c+E_v)/2$ (book Eq. 7.31).',
 '$n=N_c\\exp[-(E_c-E_F)/kT]$ (book Eq. 7.20).',
 '$\\Delta E=E_c-E_d$ (book §7.6a; Eq. 7.44).',
 '$p\\cong N_a^-$ (book Eq. 7.46).',
 '$J=nev_d$ and $v_d=\\mu\\mathcal{E}$ with $\\mu=e\\tau/m$ give $J=(ne^2\\tau/m)\\mathcal{E}$; compare with $J=\\sigma\\mathcal{E}$ (book Eqs. 7.3 to 7.6).',
 'Use $n=N_d^+$ (Eq. 7.38) and $N_d^+=N_d\\exp[-(E_F-E_d)/kT]$ (Eq. 7.40) with $n=N_c\\exp[-(E_c-E_F)/kT]$ (Eq. 7.20); take logarithms (Eq. 7.41).',
 '$np=n_i^2=N_cN_v\\exp(-E_g/kT)$ (Eqs. 7.32 to 7.34), a constant at fixed $T$. Its value depends only on $E_g$ and $T$ for an intrinsic material.',
 'Equate $N_c\\exp[-(E_c-E_F)/kT]=N_v\\exp[-(E_F-E_v)/kT]$ (Eqs. 7.20, 7.26), take logarithms, and use $N_c$, $N_v$ (Eqs. 7.21, 7.27) (Eq. 7.30).',
 'Rises with temperature across the ionisation region to $E_F$ near $E_d$, then falls towards $E_i$ as $T$ rises; the formula (7.41) fails at $T=0$ and at very high $T$ (book §7.6a, Fig. 7.8).',
 'From $\\sigma=CT^{3/2}\\exp(-E_g/2kT)$ (Eq. 7.11), $\\ln\\sigma=-(E_g/2k)(1/T)+\\tfrac32\\ln T+$ const (Eq. 7.12). The slope is $-E_g/2k$, so $E_g=-2k\\times$slope (book Fig. 7.5).',
 'Integrate $dn=D(E)f(E)dE$ with $D$ and $f$ (Eqs. 7.13 to 7.18), use $kT\\ll E-E_F$ and $x=(E-E_c)/kT$ (book §7.5.1); $n=N_c\\exp[-(E_c-E_F)/kT]$ with $N_c=2(2\\pi m_n^*kT/h^2)^{3/2}$ (Eqs. 7.19 to 7.21).',
 'Integrate $dp=D(E)[1-f(E)]dE$ over $E<E_v$ (Eqs. 7.22 to 7.25) to get $p$ and $N_v$ (Eq. 7.27). Then $n_i^2=np=N_cN_v\\exp(-E_g/kT)$ gives $n_i$ (Eqs. 7.32, 7.35, 7.36).',
 'Ionisation region: $\\sigma$ rises as donors ionise (point A to B). Saturation region: $\\sigma$ falls with the mobility (B to C). Intrinsic region: $\\sigma$ rises as $n_i$ grows (C to D). Middle region: $n\\cong N_d^+$ (Eq. 7.38), so $\\sigma=en\\mu_n\\cong eN_d\\mu_n$ (Eq. 7.45).',
]
TOPICS = ['Intrinsic and extrinsic', 'Law of mass action', 'Drift velocity', 'Conductivity of intrinsic semiconductors', 'Fermi level at 0 K', 'Electron concentration in the conduction band', 'Donor ionisation energy', 'Hole concentration in p-type', 'Conductivity from drift', 'Fermi level, n-type', 'Law of mass action', 'Fermi level, intrinsic', 'Fermi level and temperature', 'Temperature dependence of conductivity', 'Electron concentration, derivation', 'Hole concentration and n_i, derivation', 'Conductivity of n-type']
SECTIONS = [
 ("Section A: 1 mark each, answer all", 1, range(0, 4)),
 ("Section B: 2 marks each, answer all", 2, range(4, 8)),
 ("Section C: 4 marks each, answer all", 4, range(8, 14)),
 ("Section D: 10 marks each, answer any ONE", 10, range(14, 17)),
]
MAP = [
 ('12', 'Intrinsic and extrinsic semiconductors', '7.1 to 7.3', '1, 2, 7, 8'),
 ('13', 'Drift velocity', '7.4', '3, 9'),
 ('14', 'Mobility and conductivity of intrinsic semiconductors', '7.4 (Eqs. 7.3 to 7.12)', '4, 14'),
 ('15', 'Carrier concentration and Fermi level', '7.5, 7.6', '5, 6, 10, 11, 12, 13, 15, 16'),
 ('16', 'Conductivity for intrinsic and extrinsic semiconductors', '7.4, 7.6 (Eqs. 7.45, 7.51)', '17'),
]

def build():
    head = open(os.path.join(HERE, "pyq-head-ed.html"), encoding="utf-8").read()
    head = head.replace("</style>", ".sec-title, .topic { break-after: avoid; }\n@media print { .sheet { height: auto !important; min-height: 0 !important; } .sheet.key { break-before: page; } }\n</style>", 1)
    out = [head, '<div class="sheet">',
           '<div class="title">',
           '<div class="tl exam">FYUGP B.Sc. PHYSICS HONOURS</div>',
           '<div class="tl sch">PROPERTIES OF SOLIDS</div>',
           '<div class="tl course">Semester V &middot; Major Elective (Materials Science)</div>',
           '<div class="tl subject">MODULE III: SEMICONDUCTORS</div>',
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
    out.append('<div class="sheet key"><div class="title"><div class="tl subject">MODULE III: MODEL ANSWERS</div>'
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
