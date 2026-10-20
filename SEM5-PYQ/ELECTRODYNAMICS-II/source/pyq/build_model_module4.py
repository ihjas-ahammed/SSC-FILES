import re
ROOT = "/home/ihjas/Documents/GitHub/SSC-FILES/SEM5-PYQ/ELECTRODYNAMICS-II"
m1 = open(f"{ROOT}/source/pyq/module-1-pyq.html", encoding="utf-8").read()
head = m1[:m1.index("<body>") + len("<body>")]
head = head.replace("FYUGP Electrodynamics II, Module 1 PYQ", "FYUGP Electrodynamics II, Module 4 model questions")
head = head.replace("</style>", ".sec-title, .topic { break-after: avoid; }\n@media print { .sheet { height: auto !important; min-height: 0 !important; } .sheet.key { break-before: page; } .sheet:not(.key) { padding-top: 6mm !important; padding-bottom: 6mm !important; } .sheet:not(.key) .q p { font-size: 12px; line-height: 1.3; } .sheet:not(.key) .sec-title { font-size: 13px; } .sheet:not(.key) .title { margin-top: 0; } .sheet:not(.key) .sec { margin-top: 6px; } .sheet:not(.key) .sec-title { margin-top: 3px; } .sheet:not(.key) .topic { margin: 2px 0 0 0; } .sheet:not(.key) .q { margin-bottom: 1px; } }\n</style>", 1)

SECTIONS = [
 ("Section A: 1 mark each, answer all", [
  ("Transient currents in L-R circuits", [
   (1, 1, "Write the instantaneous current in an L-R circuit after the cell is removed and the circuit is closed on itself, if the current at the instant of removal is $I_0$.", 1)]),
  ("Oscillations of an L-C circuit", [
   (2, 1, "Write the natural frequency $\\nu$ of an L-C circuit in terms of $L$ and $C$.", 1)]),
  ("EMF in a rotating coil", [
   (3, 1, "Write the peak value $E_0$ of the emf induced in a coil of $N$ turns and area $A$ rotating with angular velocity $\\omega$ in a uniform field $B$.", 1)]),
  ("Phase relations", [
   (4, 1, "State whether true or false: in a purely inductive circuit the current leads the applied emf by $90^\\circ$.", 1),
   (5, 1, "Write the impedance $Z$ of a series $R$–$C$ circuit in terms of $R$, $C$ and $\\omega$.", 1)]),
  ("The j operator", [
   (6, 1, "Write the impedance of an inductor $L$ in complex (j) notation.", 1)])]),
 ("Section B: 2 marks each, answer all", [
  ("Mean value of alternating current", [
   (7, 2, "Write the mean value of an alternating current over half a cycle in terms of its peak value $I_0$, and the r.m.s. value in terms of $I_0$.", 2)]),
  ("Phase angle of a series R–C circuit", [
   (8, 2, "State whether the current leads or lags the applied emf in a series $R$–$C$ circuit. Write the expression for the phase angle.", 2)]),
  ("Parallel resonance", [
   (9, 2, "Write the resonant frequency of a parallel $LC$ circuit in which the resistance of the coil is negligible.", 2)]),
  ("Series resonance", [
   (10, 2, "Sketch the current against frequency for a series $LCR$ circuit with a low and a high value of $R$. Mark the resonant frequency on the graph.", 2)]),
  ("Power in a resistive AC circuit", [
   (11, 2, "Write the average power consumed in a purely resistive AC circuit in terms of the r.m.s. emf and r.m.s. current.", 2)])]),
 ("Section C: 4 marks each, answer any two", [
  ("Growth of current in L-R", [
   (12, 4, "A coil of inductance 0.5 H and resistance 10 $\\Omega$ is connected to a 12 V cell. Find the time constant, the steady current, and the current after 0.1 s. Take $e^{-2}=0.1353$.", 4)]),
  ("Charging and discharge of a capacitor", [
   (13, 4, "A capacitor of 10 $\\mu$F is charged to 100 V and then discharged through a resistance of 1 M$\\Omega$. Find the initial charge, the charge remaining after 10 s, and the time in which the charge falls to $1/e$ of its initial value.", 4)]),
  ("Parallel resonant circuit", [
   (14, 4, "A coil of inductance 0.1 H is connected in parallel with a capacitor of 4 $\\mu$F. Find the resonant frequency of the circuit, taking the resistance of the coil to be negligible.", 4)]),
  ("Power factor and true power", [
   (15, 4, "A coil of resistance 30 $\\Omega$ and inductance 0.1 H is connected to a 240 V, 50 Hz supply. Find the impedance, the power factor, and the true power.", 4)])]),
 ("Section D: 10 marks each, answer any one", [
  ("Series LCR circuit: phasor (j) method", [
   (16, 10, "A series $LCR$ circuit is driven by $E = E_0 e^{j\\omega t}$. Using the j operator, obtain the impedance $Z$, the current $I$, and the phase angle $\\phi$. Show that the current amplitude is a maximum at $\\omega = 1/\\sqrt{LC}$, and state the peak value of the current there.", 10)]),
  ("Parallel LC circuit", [
   (17, 10, "A coil of inductance $L$ and resistance $R$ is connected in parallel with a capacitance $C$ across an AC source. Show that the impedance of the parallel combination is a maximum at $\\omega_0 = 1/\\sqrt{LC}$ when $R$ is negligible. Explain why this is called a rejector circuit.", 10)])]),
]

KEY = [
 ("A", "A1 $I=I_0 e^{-Rt/L}$ (Murugeshan §12.2, Eq. 2). A2 $\\nu=1/(2\\pi\\sqrt{LC})$ (§12.5, Eq. 4). A3 $E_0=NBA\\omega$ (§13.1). A4 False: in a pure inductor the current lags the emf by $\\pi/2$ (§13.2(ii)). A5 $Z=\\sqrt{R^2+1/(\\omega C)^2}$, from $Z=R+1/(j\\omega C)$ (§13.2(v)). A6 $Z_L=j\\omega L$ (§13.2 j operator)."),
 ("B", "B7 Mean over half a cycle $I_{mean}=2I_0/\\pi=0.637\\,I_0$; r.m.s. $I_{rms}=I_0/\\sqrt2=0.707\\,I_0$ (§13.1). B8 The current leads the emf by $\\theta=\\tan^{-1}\\dfrac{1/(\\omega C)}{R}$ (§13.2(v), Eq. 5). B9 $\\nu_0=1/(2\\pi\\sqrt{LC})$ (§13.4). B10 Both curves peak at $\\nu_0$ with height $E_0/R$; the low-$R$ curve is taller and sharper (§13.3, Figs. 13.17–13.18). B11 $P=E_{rms}I_{rms}$, since $\\cos\\phi=1$ (§13.5, special case 1)."),
 ("C", "C12 Time constant $L/R=0.05$ s; steady current $I_0=12/10=1.2$ A; $I(0.1)=1.2(1-e^{-2})=1.2\\times0.8647=1.04$ A (§12.1, Eq. 4). C13 $Q_0=CV=10^{-5}\\times100=1.0\\times10^{-3}$ C; $CR=10$ s; $Q(10\\text{ s})=Q_0e^{-1}=3.68\\times10^{-4}$ C; the charge falls to $1/e$ at $t=CR=10$ s (§12.3(b), Eq. 2). C14 $\\nu_0=\\dfrac{1}{2\\pi\\sqrt{(0.1)(4\\times10^{-6})}}=251.6$ Hz, about 252 Hz (§13.4, Eq. 2). C15 $X_L=2\\pi(50)(0.1)=31.42\\ \\Omega$; $Z=\\sqrt{30^2+31.42^2}=43.44\\ \\Omega$; $\\cos\\phi=30/43.44=0.691$; $I=240/43.44=5.52$ A; $P=E\\,I\\cos\\phi=916$ W (§13.5)."),
 ("D", "D16 $Z=R+j(\\omega L-1/\\omega C)$, so $|Z|=\\sqrt{R^2+(\\omega L-1/\\omega C)^2}$ and $\\tan\\phi=(\\omega L-1/\\omega C)/R$. The current is $I=E/Z=I_0 e^{j(\\omega t-\\phi)}$ with $I_0=E_0/|Z|$. The amplitude is largest when $\\omega L=1/\\omega C$, that is $\\omega=1/\\sqrt{LC}$, where $|Z|=R$ and $I_0=E_0/R$ (§13.3, second method, Eqs. 2–5). D17 For the parallel branch $1/Z=1/(R+j\\omega L)+j\\omega C$. With $R\\to0$, $1/Z=j(\\omega C-1/\\omega L)$, which is zero at $\\omega_0=1/\\sqrt{LC}$, so $Z$ is infinite there. The circuit rejects the current of its natural frequency, which is why it is called a rejector (§13.4)."),
]

MAP = [
 ("15", "Growth of current in L-R, C-R and L-C circuits", "12.1, 12.3, 12.5", "1, 12, 21, 22"),
 ("16", "Decay of current in L-R, C-R and L-C circuits", "12.2, 12.3, 12.5", "1, 2, 13"),
 ("17", "EMF induced in a rotating coil; mean and r.m.s. values", "13.1", "3, 7, 16"),
 ("18", "AC circuits with R, L and C alone; L-R and C-R", "13.2", "4, 5, 8, 14"),
 ("19", "Use of the j operator", "13.2", "6, 16"),
 ("20", "Parallel L and C; parallel resonance", "13.2, 13.4", "5, 9, 14, 17"),
 ("21", "Series LCR circuit and resonance", "13.3", "10, 15, 16"),
 ("22", "Power in AC circuits; power factor", "13.5", "11, 15"),
]

out = [head, '<div class="sheet">',
 '<div class="title">',
 '<div class="tl exam">FYUGP B.Sc. PHYSICS HONOURS</div>',
 '<div class="tl sch">ELECTRODYNAMICS II</div>',
 '<div class="tl course">Semester V &middot; Core in Major</div>',
 '<div class="tl subject">MODULE 4: TRANSIENT CIRCUITS AND ALTERNATING CURRENTS</div>',
 '<div class="tl course">Model questions on topics the past papers miss</div>',
 '</div>']
for sec_title, topics in SECTIONS:
    out.append(f'<div class="sec"><div class="sec-title">{sec_title}</div>')
    for topic, qs in topics:
        out.append(f'<div class="topic">{topic}</div>')
        for n, marks, text, _ in qs:
            out.append(f'<div class="q"><span class="n">{n}</span><div>'
                       f'<p>{text} <span class="mk">({marks} mark{"s" if marks>1 else ""})</span></p></div></div>')
    out.append('</div>')
out.append('</div>')
out.append('<div class="sheet key"><div class="title"><div class="tl subject">MODULE 4: MODEL ANSWERS</div>'
           '<div class="tl course">For checking your work. Each answer shows the key step and the result.</div></div>')
for sec, text in KEY:
    out.append(f'<p class="key"><b>Section {sec}.</b> {text}</p>')
out.append('<div class="sec"><div class="sec-title">Mapping to the syllabus and textbook</div>')
out.append('<table class="tbl" style="width:100%"><tr><th>Syllabus item</th><th>Topic</th><th>Murugeshan section</th><th>Model questions</th></tr>')
for a,b,c,d in MAP:
    out.append(f'<tr><td>{a}</td><td style="text-align:left">{b}</td><td>{c}</td><td>{d}</td></tr>')
out.append('</table></div>')
out.append('</div></body></html>')
open(f"{ROOT}/source/pyq/module-4-model-missed-topics.html", "w", encoding="utf-8").write("\n".join(out))
print("model questions:", sum(len(qs) for _, t in SECTIONS for _, qs in t))
