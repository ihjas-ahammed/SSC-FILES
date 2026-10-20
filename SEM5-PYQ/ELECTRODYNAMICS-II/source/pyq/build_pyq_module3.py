import re, html
ROOT = "/home/ihjas/Documents/GitHub/SSC-FILES/SEM5-PYQ/ELECTRODYNAMICS-II"
m1 = open(f"{ROOT}/source/pyq/module-1-pyq.html", encoding="utf-8").read()
head = m1[:m1.index("<body>") + len("<body>")]
head = head.replace("FYUGP Electrodynamics II, Module 1 PYQ", "FYUGP Electrodynamics II, Module 3 PYQ")

TOPICS = [
    "Waves in one dimension and the wave equation",
    "Polarisation and transverse waves",
    "Electromagnetic waves in vacuum",
    "Poynting’s theorem and the Poynting vector",
    "Energy and radiation pressure of electromagnetic waves",
    "Reflection and transmission at a boundary",
]
# (group, topic index, source label, sort key, marks, text)
Q = [
 # ---- A: 1 to 3 marks
 ("A",0,"April 2020",1,1,"Write down the wave equation in one dimension."),
 ("A",1,"November 2019",1,1,"State whether true or false: Electromagnetic wave is transverse and not longitudinal."),
 ("A",2,"November 2021",1,1,"State whether true or false: Electromagnetic waves travel with the speed of light in vacuum."),
 ("A",3,"November 2021",2,2,"Define Poynting vector and give an expression for the same."),
 ("A",3,"April 2022",1,3,"What is Poynting vector ? Give an expression for the same."),
 ("A",2,"April 2022",2,3,"Give the wave equation for the magnetic field vector $\\vec B$ in free space and explain the terms involved. Write down the expression for the speed of the wave."),
 ("A",2,"April 2022",3,3,"What do you mean by a monochromatic plane wave ? Give its general form."),
 ("A",4,"November 2019",1,1,"The average power per unit area transported by an electromagnetic wave is called its ______."),
 ("A",4,"November 2021",1,1,"The average power per unit area transported by an electromagnetic wave is called its ______."),
 ("A",5,"November 2019",2,1,"The velocity of electromagnetic waves in a medium with permittivity $\\varepsilon$ and permeability $\\mu$ is given by ______."),
 # ---- B: 4 to 5 marks
 ("B",2,"November 2019",1,4,"Write down the real electric and magnetic field for a monochromatic plane wave of amplitude $E_0$, frequency $\\omega$ and phase angle zero that is travelling in the positive $x$ direction and polarized in the $z$ direction."),
 ("B",2,"November 2019",2,4,"From Maxwell’s equations find the wave equation for the electric field in vacuum."),
 ("B",4,"November 2019",3,4,"What is radiation pressure due to electromagnetic field? Find how it is related to intensity of the wave."),
 ("B",3,"April 2022",1,5,"Prove that for a plane monochromatic wave, the Poynting vector is the energy density times the velocity of the wave."),
 ("B",5,"April 2022",2,5,"Give the fundamental laws of geometrical optics considering the reflection and transmission of electromagnetic waves at a boundary separating two linear media."),
 # ---- C: 10 and 11 marks
 ("C",0,"November 2019",1,10,"Find the boundary conditions for reflection and transmission of electromagnetic wave, when propagated through a string which is tied onto a second string."),
 ("C",5,"November 2021",1,10,"Find expressions for the transmission and reflection coefficients when a plane polarized monochromatic wave of angular frequency $\\omega$ passes normally through the boundary between two linear dielectrics."),
 ("C",2,"April 2022",1,11,"Obtain the wave equation for the $\\vec E$ and $\\vec B$ vectors in free space. Using a plane wave solution show that the electromagnetic waves are transverse in nature and the $\\vec E$ and $\\vec B$ vectors are in phase and mutually perpendicular."),
]
ORDER = {"A":0,"B":1,"C":2}
MONTHS = {"April":4,"November":11}
def date_key(src):
    mon, yr = src.split()
    return (int(yr), MONTHS[mon])
Q.sort(key=lambda r: (ORDER[r[0]], r[1], date_key(r[2]), r[3]))

def sec_title(g):
    return {"A":"Section A: 1 to 3 marks","B":"Section B: 4 to 5 marks","C":"Section C: 10 and 11 marks"}[g]

out = []
out.append(head.replace("</style>", ".sec-title, .topic { break-after: avoid; }\n@media print { .sheet { height: auto !important; min-height: 0 !important; } }\n</style>", 1))
out.append('<div class="sheet">')
out.append('<div class="title">')
out.append('<div class="tl exam">FYUGP B.Sc. PHYSICS HONOURS</div>')
out.append('<div class="tl sch">ELECTRODYNAMICS II</div>')
out.append('<div class="tl course">Semester V &middot; Core in Major</div>')
out.append('<div class="tl subject">MODULE 3: ELECTROMAGNETIC WAVES</div>')
out.append('<div class="tl course">Past questions</div>')
out.append('</div>')
n = 0
cur_g = None; cur_t = None
for g, t, src, _, marks, text in Q:
    if g != cur_g:
        if cur_g is not None: out.append('</div>')
        out.append(f'<div class="sec"><div class="sec-title">{sec_title(g)}</div>')
        cur_g = g; cur_t = None
    if t != cur_t:
        out.append(f'<div class="topic">{TOPICS[t]}</div>'); cur_t = t
    n += 1
    out.append(f'<div class="q"><span class="n">{n}</span><div><span class="q-src">{src}</span>'
               f'<p>{text} <span class="mk">({marks} mark{"s" if marks>1 else ""})</span></p></div></div>')
out.append('</div>')
out.append('</div></body></html>')
open(f"{ROOT}/source/pyq/module-3-pyq.html", "w", encoding="utf-8").write("\n".join(out))
print("questions:", n, {g: sum(1 for r in Q if r[0]==g) for g in "ABC"})
