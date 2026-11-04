"""Model questions for Properties of Solids, Module I (topics the past papers miss).
Layout: the Electrodynamics II model paper (pyq-head-ed.html, sections, topic headings, key sheet, mapping table).
Sections: A 1 mark (answer all), B 2 marks (answer all), C 4 marks (answer all), D 10 marks (answer any one). Total 46.
Run: python3 build_model_paper.py
"""
import os
HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "properties-of-solids-module-2-model-missed-topics-from-pyq.html")

QS = ['What is a Bloch function? Write its form in terms of a periodic function $u_k(x)$.', 'Write the Fermi–Dirac occupation $f(E)$ at 0 K for $E<E_{F0}$ and for $E>E_{F0}$.', 'Write the group velocity of an electron in a band in terms of $E(k)$.', 'How many electrons can a single band of a crystal of $N$ primitive cells hold?', 'Write the number of electrons $N$ of a three-dimensional free electron gas in terms of the volume $V$ and the Fermi energy $E_F$ at 0 K.', 'Define the Fermi temperature $T_F$ and give its relation with the Fermi energy.', 'State the relation between the average kinetic energy per electron and the Fermi energy $E_{F0}$ for a three-dimensional free electron gas at 0 K.', 'For a free electron gas in a one-dimensional box of length $L$ with $N$ electrons, show that the top filled level gives $E_F=\\dfrac{\\hbar^2}{2m}\\left(\\dfrac{N\\pi}{2L}\\right)^2$.', 'Show that the density of states of a three-dimensional free electron gas is $D(E)=\\dfrac{V}{2\\pi^2}\\left(\\dfrac{2m}{\\hbar^2}\\right)^{3/2}E^{1/2}$. Count the states inside a sphere of radius $k$ in $k$-space.', 'Show that the Fermi function equals $\\tfrac12$ at $E=E_F$ for any temperature, and explain why only electrons within about $k_BT$ of $E_F$ are excited.', 'Show that the effective mass of an electron in a band is $m^*=\\hbar^2/(d^2E/dk^2)$, starting from the acceleration produced by a field.', 'For $E=-E_0\\cos ka$, show that the effective mass at $k=0$ is $m^*=\\hbar^2/(E_0a^2)$.', 'Explain why a completely filled band has zero effective number of free electrons, using $N_{\\text{eff}}=\\dfrac{2Lm}{\\pi\\hbar^2}\\left(\\dfrac{dE}{dk}\\right)_{k_1}$.', 'State the Kronig–Penney condition $P\\dfrac{\\sin\\alpha a}{\\alpha a}+\\cos\\alpha a=\\cos ka$. Give the limits $P\\to0$ and $P\\to\\infty$ and what each gives.', 'Derive the Fermi energy $E_{F0}$, the average kinetic energy $E_0=\\tfrac35E_{F0}$, and the density of states $D(E)$ of a three-dimensional free electron gas at 0 K.', 'Derive the Kronig–Penney dispersion relation $P\\dfrac{\\sin\\alpha a}{\\alpha a}+\\cos\\alpha a=\\cos ka$ in the delta-function limit, state how allowed and forbidden bands follow from it, and discuss the limits of large and small $P$.', 'Using the band picture, distinguish between a metal, an intrinsic semiconductor and an insulator. Show that the effective number of free electrons in a completely filled band is zero and that it is largest when the band is filled up to the point of inflexion.']
KEYS = ['$u_k(x)$ is periodic with the lattice period, and $\\psi(x)=e^{ikx}u_k(x)$ (book Eq. 6.4).', '$f(E)=1$ for $E<E_{F0}$ and $f(E)=0$ for $E>E_{F0}$ (book Eq. 5.29).', '$v_g=\\dfrac{1}{\\hbar}\\dfrac{dE}{dk}$ (book Eq. 6.49).', '$2N$ electrons (two spins in each of the $N$ $k$-states of the band; book §6.3.2).', '$N=\\dfrac{V}{3\\pi^2}\\left(\\dfrac{2mE_F}{\\hbar^2}\\right)^{3/2}$ (book Eq. 5.37).', '$T_F=E_F/k_B$ (book §5.3.1).', '$E_{F0}$ and $E_0$ are related by $E_0=\\tfrac35E_{F0}$ (book §5.2.2).', '$E_n=n^2h^2/8mL^2$; the top level $n_F=N/2$ gives $E_F=\\dfrac{\\hbar^2}{2m}\\left(\\dfrac{N\\pi}{2L}\\right)^2$ (book Eqs. 5.10, 5.12, 5.13).', 'Count the $k$-states in a sphere of radius $k$: $2\\cdot\\tfrac43\\pi k^3/(2\\pi/L)^3=\\dfrac{L^3}{3\\pi^2}k^3=N$. With $k=\\sqrt{2mE}/\\hbar$ and $N(E)=\\dfrac{V}{3\\pi^2}\\left(\\dfrac{2mE}{\\hbar^2}\\right)^{3/2}$, differentiate: $D(E)=dN/dE$ gives Eq. 5.40.', 'At $E=E_F$, $f=1/[e^0+1]=\\tfrac12$ for any $T$. At $T>0$ electrons within about $k_BT$ of $E_F$ can jump to empty states; those deeper cannot (book §5.2.2).', '$a=\\dfrac{e\\mathcal E}{\\hbar^2}\\dfrac{d^2E}{dk^2}$ (book Eq. 6.53); comparing with $a=e\\mathcal E/m$ gives $m^*=\\hbar^2/(d^2E/dk^2)$ (Eq. 6.55).', '$d^2E/dk^2=E_0a^2\\cos ka$, which is $E_0a^2$ at $k=0$. So $m^*=\\hbar^2/(E_0a^2)$.', 'At a completely filled band $k_1=\\pi/a$ and $dE/dk=0$ there, so $N_{\\text{eff}}=0$ (book Eq. 6.59). $N_{\\text{eff}}$ is largest when $dE/dk$ is largest, at the inflexion point.', 'Condition (6.39). $P\\to0$: $\\cos\\alpha a=\\cos ka$, so $\\alpha=k$, the free electron case with all energies allowed. $P\\to\\infty$: $\\sin\\alpha a=0$, so $\\alpha a=\\pm n\\pi$, which gives levels (book §6.3).', '$E_{F0}=\\dfrac{\\hbar^2}{2m}(3\\pi^2 n)^{2/3}$ (5.47) from $N=\\int_0^{E_{F0}}D\\,dE$; $E_0=\\tfrac1N\\int_0^{E_{F0}}E\\,D\\,dE=\\tfrac35E_{F0}$; $D(E)$ as Eq. (5.40).', 'Bloch form and the Wronskian give $\\lambda^2-(\\alpha_1+\\beta_2)\\lambda+1=0$; in the delta limit (6.37) with $P$ (6.38), giving Eq. (6.39). Allowed bands where the left side lies in $[-1,1]$; forbidden otherwise (Fig. 6.3). Limits as C14.', 'Metal: partly filled band, $N_{\\text{eff}}\\neq0$. Insulator: full bands with a wide gap (diamond about 6 eV). Intrinsic semiconductor: full band with a narrow gap (about 1 eV), conduction by thermal excitation. Full band: $N_{\\text{eff}}=0$ (6.59); maximum at the inflexion point.']

TOPICS = ['Bloch functions', 'Fermi function', 'Velocity in a band', 'Number of states in a band', 'Free electron gas, 3D', 'Fermi temperature', 'Average kinetic energy', 'Free electron gas, 1D box', 'Density of states', 'Fermi function', 'Effective mass', 'Effective mass', 'Filled band and conduction', 'Kronig–Penney model', 'Free electron gas, 3D', 'Kronig–Penney model', 'Metals, insulators and semiconductors']

SECTIONS = [
 ("Section A: 1 mark each, answer all", 1, range(0, 4)),
 ("Section B: 2 marks each, answer all", 2, range(4, 8)),
 ("Section C: 4 marks each, answer all", 4, range(8, 14)),
 ("Section D: 10 marks each, answer any ONE", 10, range(14, 17)),
]
MAP = [('6', 'Drude–Lorentz classical theory', '5.1', 'none (covered by the past papers)'), ('7', 'Sommerfeld theory, one-dimensional box', '5.2.1 (Eqs. 5.10–5.13)', '8'), ('8', 'Fermi energy, total energy, density of states', '5.2.2, 5.3', '2, 5, 9, 15'), ('9', 'Application of the free electron gas model', '5.3, 5.3.1', '6, 7'), ('10', 'Bloch theorem, Kronig–Penney, velocity and effective mass', '6.1–6.4', '1, 3, 11, 12, 14, 16'), ('11', 'Metals, insulators and semiconductors', '6.5', '4, 13, 17')]


def build():
    head = open(os.path.join(HERE, "pyq-head-ed.html"), encoding="utf-8").read()
    head = head.replace("</style>", ".sec-title, .topic { break-after: avoid; }\n@media print { .sheet { height: auto !important; min-height: 0 !important; } .sheet.key { break-before: page; } }\n</style>", 1)
    out = [head, '<div class="sheet">',
           '<div class="title">',
           '<div class="tl exam">FYUGP B.Sc. PHYSICS HONOURS</div>',
           '<div class="tl sch">PROPERTIES OF SOLIDS</div>',
           '<div class="tl course">Semester V &middot; Major Elective (Materials Science)</div>',
           '<div class="tl subject">MODULE II: FREE ELECTRON THEORY AND BAND THEORY</div>',
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
    out.append('<div class="sheet key"><div class="title"><div class="tl subject">MODULE II: MODEL ANSWERS</div>'
               '<div class="tl course">For checking your work. Each answer shows the key step and the result.</div></div>')
    for title, marks, idxs in SECTIONS:
        items = " ".join(f"<b>{i+1}.</b> {KEYS[i]}" for i in idxs)
        out.append(f'<p class="key"><b>{title.split(":")[0]}.</b> {items}</p>')
    out.append('<div class="sec"><div class="sec-title">Mapping to the syllabus and textbook</div>')
    out.append('<table class="tbl" style="width:100%"><tr><th>Syllabus item</th><th>Topic</th><th>Puri and Babbar section</th><th>Model questions</th></tr>')
    for a, b, c, d in MAP:
        out.append(f'<tr><td>{a}</td><td style="text-align:left">{b}</td><td>{c}</td><td>{d}</td></tr>')
    out.append('</table></div>')
    out.append('<p class="key" style="font-size:12px">Questions are drafted for the gaps in the past papers (not from any past paper). Section 2.3 (X-ray diffraction methods) is outside the Module I scope, so no question uses it.</p>')
    out.append('</div></body></html>')
    open(OUT, "w", encoding="utf-8").write("\n".join(out))
    print("model questions:", n, "| marks 46")

if __name__ == "__main__":
    build()
