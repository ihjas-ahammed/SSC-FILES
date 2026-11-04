import re
ROOT = "/home/ihjas/Documents/GitHub/SSC-FILES/SEM5-PYQ/ELECTRODYNAMICS-II"
m1 = open(f"{ROOT}/source/pyq/module-1-pyq.html", encoding="utf-8").read()
head = m1[:m1.index("<body>") + len("<body>")]
head = head.replace("FYUGP Electrodynamics II, Module 1 PYQ", "FYUGP Electrodynamics II, Module 3 model questions")
head = head.replace("</style>", ".sec-title, .topic { break-after: avoid; }\n@media print { .sheet { height: auto !important; min-height: 0 !important; } .sheet.key { break-before: page; } .sheet:not(.key) { padding-top: 6mm !important; padding-bottom: 6mm !important; } .sheet:not(.key) .q p { font-size: 13px; } .sheet:not(.key) .title { margin-top: 0; } .sheet:not(.key) .sec { margin-top: 6px; } .sheet:not(.key) .sec-title { margin-top: 3px; } .sheet:not(.key) .topic { margin: 2px 0 0 0; } .sheet:not(.key) .q { margin-bottom: 1px; } }\n</style>", 1)

SECTIONS = [
 ("Section A: 1 mark each, answer all", [
  ("Sinusoidal waves", [
   (1, 1, "Write the relation between the wavelength $\\lambda$ and the wave number $k$ of a sinusoidal wave.", 1),
   (2, 1, "Write the relation between the speed $v$, the frequency $\\nu$ and the wavelength $\\lambda$ of a wave.", 1)]),
  ("Polarisation", [
   (3, 1, "State whether true or false: in a circularly polarised wave the two perpendicular components of $\\vec E$ have equal amplitudes and differ in phase by $90^\\circ$.", 1),
   (4, 1, "Write the polarisation vector $\\hat n$ of a wave polarised at angle $\\theta$ to the $x$ axis, in the $xy$ plane.", 1)]),
  ("Refractive index", [
   (5, 1, "Write the index of refraction $n$ of a linear medium in terms of its permittivity $\\varepsilon$ and permeability $\\mu$.", 1)]),
  ("Radiation pressure", [
   (6, 1, "Write the radiation pressure on a perfect absorber in terms of the intensity $I$ and the speed of light $c$.", 1)])]),
 ("Section B: 2 marks each, answer all", [
  ("Complex notation", [
   (7, 2, "Write the wave $f(z,t)=A\\cos(kz-\\omega t+\\delta)$ in complex notation. State how the physical wave is recovered from the complex form.", 2)]),
  ("Energy density of a plane wave", [
   (8, 2, "Write the energy density of a monochromatic plane wave of amplitude $E_0$ in vacuum, averaged over one cycle.", 2)]),
  ("Waves in a linear medium", [
   (9, 2, "Write the speed of a monochromatic wave in a linear medium of index $n$, and the relation between the amplitudes $B_0$ and $E_0$ in that medium.", 2)]),
  ("Normal incidence", [
   (10, 2, "Light passes normally from air ($n_1=1$) into glass ($n_2=1.5$). Find the fraction of the incident intensity that is reflected, and the fraction transmitted.", 2)]),
  ("Brewster’s angle", [
   (11, 2, "State Brewster’s law for the angle $\\theta_B$ at which the reflected wave is extinguished, for $\\mu_1\\approx\\mu_2$. Find $\\theta_B$ for air to glass with $n_2=1.5$.", 2)])]),
 ("Section C: 4 marks each, answer any two", [
  ("Waves in a linear medium", [
   (12, 4, "A monochromatic plane wave of frequency $5\\times10^{14}$ Hz travels in glass of index 1.5 (take $\\mu=\\mu_0$). Find its speed in glass, its wavelength in vacuum, and its wavelength in glass.", 4)]),
  ("Radiation pressure", [
   (13, 4, "Sunlight of intensity 1300 W/m$^2$ falls normally on a perfect absorber, and then on a perfect reflector. Find the radiation pressure in each case. Take $c=3.0\\times10^8$ m/s.", 4)]),
  ("Intensity and energy density", [
   (14, 4, "A monochromatic plane wave in vacuum has electric amplitude $E_0=100$ V/m. Find the magnetic amplitude $B_0$, the average intensity, and the average energy density. Take $\\varepsilon_0=8.85\\times10^{-12}$ F/m and $c=3.0\\times10^8$ m/s.", 4)]),
  ("Reflection and refraction", [
   (15, 4, "Light in air ($n_1=1.00$) strikes a glass surface ($n_2=1.50$) at an angle of incidence $40^\\circ$. Find the angle of reflection and the angle of refraction.", 4)])]),
 ("Section D: 10 marks each, answer any one", [
  ("Electromagnetic waves in a linear medium", [
   (16, 10, "In a linear homogeneous medium with no free charge or current, derive the wave equation for $\\vec E$ from Maxwell’s equations, and show that $v=1/\\sqrt{\\varepsilon\\mu}=c/n$. For a plane wave, show that $B_0=E_0/v$ and $I=\\tfrac12 v\\varepsilon E_0^2$.", 10)]),
  ("Reflection and refraction, Brewster’s angle", [
   (17, 10, "Light passes from medium 1 to medium 2. From the boundary conditions, state the laws of reflection and refraction, and derive Brewster’s law $\\tan\\theta_B=n_2/n_1$ for $\\mu_1\\approx\\mu_2$. State the polarisation of the reflected beam at $\\theta_B$.", 10)])]),
]

KEY = [
 ("A", "A1 $\\lambda=2\\pi/k$. A2 $v=\\nu\\lambda$. A3 True: a circularly polarised wave has equal components, $90^\\circ$ apart in phase. A4 $\\hat n=\\cos\\theta\\,\\hat x+\\sin\\theta\\,\\hat y$ (Eq. 9.38). A5 $n=\\sqrt{\\varepsilon\\mu/\\varepsilon_0\\mu_0}=c/v$. A6 $P=I/c$ (Eq. 9.65 for the absorber)."),
 ("B", "B7 $\\tilde f=\\tilde A e^{i(kz-\\omega t)}$ with $\\tilde A=Ae^{i\\delta}$; the physical wave is $f=\\mathrm{Re}(\\tilde f)$ (Eqs. 9.16–9.18). B8 $\\langle u\\rangle=\\tfrac12\\varepsilon_0E_0^2$, since the average of $\\cos^2$ over a cycle is $\\tfrac12$ (Eq. 9.61). B9 $v=c/n$; $B_0=E_0/v=nE_0/c$ (Eqs. 9.48, 9.69, 9.74). B10 $R=\\left(\\frac{n_1-n_2}{n_1+n_2}\\right)^2=0.04$, and $T=1-R=0.96$ (Eqs. 9.87, 9.88). B11 $\\tan\\theta_B=n_2/n_1=1.5$, so $\\theta_B\\approx56.3^\\circ$ (Eq. 9.113)."),
 ("C", "C12 $v=c/n=2.0\\times10^8$ m/s; vacuum wavelength $\\lambda_0=c/\\nu=6.0\\times10^{-7}$ m; wavelength in glass $\\lambda=v/\\nu=4.0\\times10^{-7}$ m. C13 Absorber: $P=I/c=1300/3.0\\times10^8=4.3\\times10^{-6}$ Pa. Reflector: $P=2I/c=8.7\\times10^{-6}$ Pa. C14 $B_0=E_0/c=3.3\\times10^{-7}$ T; $I=\\tfrac12c\\varepsilon_0E_0^2=13.3$ W/m$^2$; $\\langle u\\rangle=I/c=4.4\\times10^{-8}$ J/m$^3$. C15 Reflection angle $=40^\\circ$. Refraction: $\\sin\\theta_T=\\sin40^\\circ/1.50=0.429$, so $\\theta_T\\approx25.4^\\circ$."),
 ("D", "D16 Curl of Faraday’s law and the Ampère–Maxwell law with $\\nabla\\cdot\\vec E=0$ give $\\nabla^2\\vec E=\\mu\\varepsilon\\,\\partial^2\\vec E/\\partial t^2$, so $v=1/\\sqrt{\\varepsilon\\mu}=c/n$ (Eqs. 9.68–9.69). For a plane wave, $\\nabla\\times\\vec E=-\\partial\\vec B/\\partial t$ gives $kE_0=\\omega B_0$, so $B_0=E_0/v$. The average Poynting vector is $\\langle S\\rangle=E_0^2/(2\\mu v)=\\tfrac12v\\varepsilon E_0^2$, using $1/\\mu=v^2\\varepsilon$ (Eqs. 9.72–9.74). D17 Matching the exponential factors at the boundary gives $\\theta_I=\\theta_R$ and $\\sin\\theta_I/\\sin\\theta_T=n_2/n_1$ (Eqs. 9.100–9.101). For polarisation in the plane of incidence the Fresnel reflection amplitude has $\\alpha=\\beta$ at $\\theta_B$, with $\\sin^2\\theta_B=(1-\\beta^2)/((n_1/n_2)^2-\\beta^2)$; for $\\mu_1\\approx\\mu_2$, $\\tan\\theta_B=n_2/n_1$ (Eqs. 9.110–9.113). The reflected beam at $\\theta_B$ is polarised perpendicular to the plane of incidence (footnote 19)."),
]

MAP = [
 ("9", "Waves in one dimension, sinusoidal waves, polarisation", "9.1.1, 9.1.2, 9.1.4", "1, 2, 3, 4, 7"),
 ("10", "Wave equation for $\\vec E$ and $\\vec B$", "9.2.1", "16"),
 ("11", "Monochromatic plane waves; $\\vec E$ and $\\vec B$ amplitudes", "9.2.2", "16, 9"),
 ("12", "Poynting’s theorem and the Poynting vector", "8.1.2", "8, 14"),
 ("13", "Energy and momentum; radiation pressure", "9.2.3", "6, 8, 13, 14"),
 ("14", "Propagation in linear media; reflection, refraction and Brewster’s angle (9.3.2 and 9.3.3 are background)", "9.3.1, 9.3.2, 9.3.3", "5, 9, 10, 11, 12, 15, 17"),
]

out = [head, '<div class="sheet">',
 '<div class="title">',
 '<div class="tl exam">FYUGP B.Sc. PHYSICS HONOURS</div>',
 '<div class="tl sch">ELECTRODYNAMICS II</div>',
 '<div class="tl course">Semester V &middot; Core in Major</div>',
 '<div class="tl subject">MODULE 3: ELECTROMAGNETIC WAVES</div>',
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
out.append('<div class="sheet key"><div class="title"><div class="tl subject">MODULE 3: MODEL ANSWERS</div>'
           '<div class="tl course">For checking your work. Each answer shows the key step and the result.</div></div>')
for sec, text in KEY:
    out.append(f'<p class="key"><b>Section {sec}.</b> {text}</p>')
out.append('<div class="sec"><div class="sec-title">Mapping to the syllabus and textbook</div>')
out.append('<table class="tbl" style="width:100%"><tr><th>Syllabus item</th><th>Topic</th><th>Griffiths section</th><th>Model questions</th></tr>')
for a,b,c,d in MAP:
    out.append(f'<tr><td>{a}</td><td style="text-align:left">{b}</td><td>{c}</td><td>{d}</td></tr>')
out.append('</table></div>')
out.append('</div></body></html>')
open(f"{ROOT}/source/pyq/module-3-model-missed-topics.html", "w", encoding="utf-8").write("\n".join(out))
print("model questions:", sum(len(qs) for _, t in SECTIONS for _, qs in t))
