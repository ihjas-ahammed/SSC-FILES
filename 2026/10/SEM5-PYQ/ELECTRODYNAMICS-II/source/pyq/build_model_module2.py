import re
ROOT = "/home/ihjas/Documents/GitHub/SSC-FILES/SEM5-PYQ/ELECTRODYNAMICS-II"
m1 = open(f"{ROOT}/source/pyq/module-1-pyq.html", encoding="utf-8").read()
head = m1[:m1.index("<body>") + len("<body>")]
head = head.replace("FYUGP Electrodynamics II, Module 1 PYQ", "FYUGP Electrodynamics II, Module 2 model questions")
head = head.replace("</style>", ".sec-title, .topic { break-after: avoid; }\n@media print { .sheet { height: auto !important; min-height: 0 !important; } .sheet.key { break-before: page; } }\n</style>", 1)

SECTIONS = [
 ("Section A: 1 mark each, answer all", [
  ("Motional emf and emf", [
   (1, 1, "The emf induced across a conductor of length $l$ moving with speed $v$ perpendicular to a uniform field $B$ is ______.", 1)]),
  ("Induced electric field", [
   (2, 1, "State whether true or false: the electric field produced by a changing magnetic flux is conservative.", 1),
   (3, 1, "Write the Maxwell–Faraday law in differential form.", 1)]),
  ("Ohm’s law and displacement current", [
   (4, 1, "Write Ohm’s law in differential form.", 1),
   (5, 1, "Write the displacement current density in terms of $\\vec E$.", 1)]),
  ("Energy in magnetic fields", [
   (6, 1, "Write the magnetic energy density in a linear medium in terms of $\\vec H$ and $\\vec B$.", 1)])]),
 ("Section B: 2 marks each, answer all", [
  ("Motional emf", [
   (7, 2, "Why does a conductor moving across a magnetic field develop an emf when no circuit flux changes? Give the force responsible.", 2)]),
  ("Induced electric field", [
   (8, 2, "Distinguish the electric field of static charges from the induced electric field produced by a changing magnetic field.", 2)]),
  ("Faraday’s law", [
   (9, 2, "State the physical meaning of the minus sign in Faraday’s law.", 2)]),
  ("Displacement current", [
   (10, 2, "A capacitor is charged by a steady current. Explain why Ampère’s law as written fails for a surface passing through the gap, and how Maxwell fixed it.", 2),
   (11, 2, "Write the integral form of Ampère–Maxwell law and identify the term Maxwell added.", 2)])]),
 ("Section C: 4 marks each, answer any two", [
  ("Motional emf and Ohm’s law", [
   (12, 4, "A conducting bar of length 0.5 m slides at 2 m/s on frictionless parallel rails in a uniform field of 0.4 T. The rails are joined by a resistance of 0.2 $\\Omega$. Find the emf, the current, the force needed to keep the bar at constant speed, and the power dissipated.", 4)]),
  ("Displacement current", [
   (13, 4, "A parallel-plate capacitor has plates of area 0.02 m$^2$ separated by 2 mm. The voltage across it rises at $5\\times10^{4}$ V/s. Find the displacement current between the plates, and the conduction current in the wire. Take $\\varepsilon_0 = 8.85\\times10^{-12}$ F/m.", 4)]),
  ("Energy in magnetic fields", [
   (14, 4, "A long solenoid has 500 turns per metre, radius 2 cm and carries a current of 2 A. Find the magnetic energy stored in a length of 0.5 m. Take $\\mu_0 = 4\\pi\\times10^{-7}$ H/m.", 4)]),
  ("Induced electric field", [
   (15, 4, "A long solenoid of radius 5 cm has $dB/dt = 0.1$ T/s inside it, and zero field outside. Find the magnitude of the induced electric field at $r = 2$ cm and at $r = 8$ cm from the axis.", 4)])]),
 ("Section D: 10 marks each, answer any one", [
  ("Maxwell’s equations in matter", [
   (16, 10, "Starting from the Maxwell equations, derive $\\nabla\\cdot\\vec D=\\rho_f$ and $\\nabla\\times\\vec H=\\vec J_f+\\partial\\vec D/\\partial t$. Define $\\vec D$ and $\\vec H$ in terms of $\\vec E$, $\\vec P$, $\\vec B$ and $\\vec M$. State the boundary conditions for the normal component of $\\vec D$ and the tangential component of $\\vec H$ at a surface carrying free current.", 10)]),
  ("Faraday’s law", [
   (17, 10, "Explain the difference between the transformer emf and the motional emf. Show that $\\oint\\vec E\\cdot d\\vec l=-\\dfrac{d}{dt}\\int\\vec B\\cdot d\\vec a$ holds for a loop that is moving as well as for one that is fixed.", 10)])]),
]

KEY = [
 ("A", "A1 $vBl$. A2 False: its line integral round a closed loop is not zero. A3 $\\nabla\\times\\vec E=-\\partial\\vec B/\\partial t$. A4 $\\vec J=\\sigma\\vec E$. A5 $\\vec J_d=\\varepsilon_0\\,\\partial\\vec E/\\partial t$. A6 $u=\\tfrac12\\vec H\\cdot\\vec B$."),
 ("B", "B1 The magnetic force $q\\vec v\\times\\vec B$ pushes positive charges along the bar, so an emf $\\oint(\\vec v\\times\\vec B)\\cdot d\\vec l$ appears. B2 Static-charge fields are conservative ($\\nabla\\times\\vec E=0$); the induced field has $\\nabla\\times\\vec E=-\\partial\\vec B/\\partial t\\neq0$. B3 Through the gap $I=0$, so $\\mu_0 I$ alone gives zero; Maxwell added $\\mu_0\\varepsilon_0\\,d\\Phi_E/dt$, which fixes it. B4 Lenz: the induced emf opposes the change in flux. B5 $\\oint\\vec B\\cdot d\\vec l=\\mu_0 I_{enc}+\\mu_0\\varepsilon_0\\,\\frac{d}{dt}\\int\\vec E\\cdot d\\vec a$."),
 ("C", "C1 emf $=Blv=0.4\\times0.5\\times2=0.4$ V; $I=0.4/0.2=2$ A; $F=BIl=0.4\\times2\\times0.5=0.4$ N; power $=Fv=0.8$ W $=I^2R$. C2 $C=\\varepsilon_0 A/d=8.85\\times10^{-11}$ F; conduction current $I=C\\,dV/dt=4.43\\,\\mu$A; displacement current between plates is the same, $4.43\\,\\mu$A. C3 $B=\\mu_0 nI=1.257\\times10^{-3}$ T; $u=B^2/2\\mu_0=0.628$ J/m$^3$; volume $=\\pi r^2 l=6.28\\times10^{-4}$ m$^3$; $U=3.95\\times10^{-4}$ J (check: $\\tfrac12LI^2$ with $L=1.97\\times10^{-4}$ H). C4 Inside, $E=\\tfrac{r}{2}\\,dB/dt=1.0$ mV/m at $r=2$ cm; outside, $E=\\dfrac{R^2}{2r}\\,dB/dt=1.56$ mV/m at $r=8$ cm."),
 ("D", "D1 Gauss in $\\vec E$ with $\\rho=\\rho_b+\\rho_f$ and $\\rho_b=-\\nabla\\cdot\\vec P$ gives $\\nabla\\cdot\\vec D=\\rho_f$, with $\\vec D=\\varepsilon_0\\vec E+\\vec P$. Ampère–Maxwell with $\\vec J=\\vec J_f+\\nabla\\times\\vec M+\\partial\\vec P/\\partial t$ gives $\\nabla\\times\\vec H=\\vec J_f+\\partial\\vec D/\\partial t$, with $\\vec H=\\vec B/\\mu_0-\\vec M$. Boundary conditions: $D^\\perp_{above}-D^\\perp_{below}=\\sigma_f$ and $\\vec H^\\parallel_{above}-\\vec H^\\parallel_{below}=\\vec K_f\\times\\hat n$. D2 Transformer emf comes from $\\partial\\vec B/\\partial t$ with the loop fixed; motional emf from $\\vec v\\times\\vec B$ with the loop moving. Both follow from $\\oint\\vec E_{\\rm loop}\\cdot d\\vec l$ in the frame of the loop, and the flux rule $\\mathcal E=-d\\Phi/dt$ covers both."),
]

MAP = [
 ("6", "Motional emf", "7.1.3", "1, 7, 12"),
 ("6", "Emf of a source; Ohm’s law $\\vec J=\\sigma\\vec E$", "7.1.1–7.1.2", "4"),
 ("7", "Induced electric field, not conservative", "7.2.2", "2, 3, 8, 15"),
 ("8", "Displacement current, numerical", "7.3.2", "5, 10, 11, 13"),
 ("7", "Energy in magnetic fields, $u=\\tfrac12\\vec H\\cdot\\vec B$", "7.2.4", "6, 14"),
 ("8", "Maxwell’s equations in matter, $\\vec D$ and $\\vec H$ form", "7.3.5", "16"),
 ("7", "Transformer vs motional emf, flux rule", "7.2.1, 7.1.3", "17"),
]

out = [head, '<div class="sheet">',
 '<div class="title">',
 '<div class="tl exam">FYUGP B.Sc. PHYSICS HONOURS</div>',
 '<div class="tl sch">ELECTRODYNAMICS II</div>',
 '<div class="tl course">Semester V &middot; Core in Major</div>',
 '<div class="tl subject">MODULE 2: ELECTROMAGNETIC INDUCTION AND MAXWELL’S EQUATIONS</div>',
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
out.append('<div class="sheet key"><div class="title"><div class="tl subject">MODULE 2: MODEL ANSWERS</div>'
           '<div class="tl course">For checking your work. Each answer shows the key step and the result.</div></div>')
for sec, text in KEY:
    out.append(f'<p class="key"><b>Section {sec}.</b> {text}</p>')
out.append('<div class="sec"><div class="sec-title">Mapping to the syllabus and textbook</div>')
out.append('<table class="tbl" style="width:100%"><tr><th>Syllabus item</th><th>Topic</th><th>Griffiths section</th><th>Model questions</th></tr>')
for a,b,c,d in MAP:
    out.append(f'<tr><td>{a}</td><td style="text-align:left">{b}</td><td>{c}</td><td>{d}</td></tr>')
out.append('</table></div>')
out.append('</div></body></html>')
open(f"{ROOT}/source/pyq/module-2-model-missed-topics.html", "w", encoding="utf-8").write("\n".join(out))
print("model questions:", sum(len(qs) for _, t in SECTIONS for _, qs in t))
