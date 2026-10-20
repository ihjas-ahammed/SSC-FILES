import re, html
ROOT = "/home/ihjas/Documents/GitHub/SSC-FILES/SEM5-PYQ/ELECTRODYNAMICS-II"
m1 = open(f"{ROOT}/source/pyq/module-1-pyq.html", encoding="utf-8").read()
head = m1[:m1.index("<body>") + len("<body>")]
head = head.replace("FYUGP Electrodynamics II, Module 1 PYQ", "FYUGP Electrodynamics II, Module 2 PYQ")

TOPICS = [
    "Ohm’s law and emf",
    "Faraday’s law and induced electric field",
    "Inductance and energy in magnetic fields",
    "Maxwell’s equations and displacement current",
    "Maxwell’s equations in matter",
    "Boundary conditions",
]
# (group, topic index, source label, sort key, marks, text)
Q = [
 # ---- A: 1 to 3 marks
 ("A",0,"April 2022",1,3,"Explain Ohm’s law. Discuss the terms involved."),
 ("A",1,"November 2019",1,2,"State and explain Faraday’s law."),
 ("A",1,"November 2021",1,2,"State and explain Faraday’s law in electromagnetic induction."),
 ("A",3,"November 2019",1,1,"Displacement current is given by the equation ______, if the electric field is $\\vec E$."),
 ("A",3,"November 2019",2,2,"Give the Maxwell’s equations in linear medium."),
 ("A",3,"November 2021",1,1,"Magnetic field can be produced by a current or by a changing ______."),
 ("A",3,"November 2021",2,2,"Write down the importance of displacement current in Maxwell’s equations."),
 ("A",3,"April 2022",1,3,"What do you mean by the term displacement current ? Give an expression for the same."),
 ("A",3,"April 2022",2,3,"Illustrate the symmetry of Maxwell’s equations for $\\vec E$ and $\\vec B$ in the absence of the charge and current density terms."),
 ("A",5,"November 2021",1,1,"State whether true or false: The tangential component of $\\vec H$ is continuous across the boundary between two media."),
 ("A",5,"April 2022",1,3,"Write down the boundary conditions for the magnetic field vector $\\vec B$ at an interface separating two linear media of permittivities $\\varepsilon_1$ and $\\varepsilon_2$ and permeabilities $\\mu_1$ and $\\mu_2$."),
 # ---- B: 4 to 5 marks
 ("B",1,"April 2020",1,4,"A 50 cm. long solenoid having 500 turns and radius 2 cm. is wound on an iron core of relative permeability 800. What will be the average e.m.f. induced in the solenoid if the current in it changes from 0 to 2 A in 0.05 s?"),
 ("B",1,"November 2019",2,4,"An insulated wire has an iron core. An aluminium ring is slipped over the core so as to rest on the top of the coil. If an alternating current is passed through the coil show that the coil will repel the ring."),
 ("B",2,"November 2019",1,4,"Find Neumann formula for Mutual induction."),
 ("B",2,"November 2019",2,4,"A long coaxial cable has current $I$ flowing down the surface of the inner cylinder of radius $a$, and back along the outer cylinder of radius $b$. Find the magnetic energy stored in section of length $l$."),
 ("B",2,"November 2021",1,4,"Write down Neumann’s formula for mutual induction. Explain its importance."),
 ("B",2,"November 2021",2,4,"Find the magnetic flux through a solenoid of length $l$ with number of turns per unit length $N$ and radius $R$ carrying a current $I$. Also calculate self inductance per unit length of the coil."),
 ("B",2,"November 2021",3,4,"Find the energy stored in a long coaxial cable of length $l$ which carries a current $I$ flowing down the surface of the inner cylinder of radius $a$ and back along the outer cylinder of radius $b$."),
 ("B",2,"November 2021",4,4,"Obtain an expression for the energy stored in a magnetic field in terms of current."),
 ("B",2,"April 2022",1,5,"Obtain an expression for the energy stored in a magnetic field due to a current."),
 ("B",3,"November 2019",1,4,"Why Ampere Circuital law is to be modified? How is it modified by Maxwell?"),
 ("B",3,"April 2022",1,5,"Write down the integral forms of Maxwell’s equations and explain the terms involved."),
 ("B",5,"April 2018",1,4,"Explain magneto static boundary condition."),
 ("B",5,"November 2019",1,4,"Are the electric field and magnetic field continuous at a boundary between two different media ? Find the relevant equations."),
 ("B",5,"November 2021",1,4,"Write down the boundary conditions for the electric and magnetic vectors $\\vec E$ and $\\vec B$ at an interface separating two linear dielectrics of permittivities $\\varepsilon_1$ and $\\varepsilon_2$ and permeabilities $\\mu_1$ and $\\mu_2$."),
 # ---- C: 10 marks
 ("C",2,"November 2019",1,10,"Discuss the growth of current in an inductor in a circuit containing resistance connected to a cell of steady e.m.f. Also find the time constant of the circuit."),
 ("C",2,"November 2019",2,10,"Describe the Raleigh’s method to find the self inductance of a coil with the necessary diagram and theory."),
 ("C",2,"November 2021",1,10,"Discuss the growth of current in a circuit containing an inductance $L$ and a resistance $R$ connected in series with a cell of steady e.m.f. Explain the time constant of the circuit."),
 ("C",4,"November 2019",1,10,"Explain how Maxwell’s equations in vacuum are modified in Matter."),
 ("C",4,"November 2021",1,10,"Derive the Maxwell’s equations inside a polarized matter."),
 ("C",5,"November 2022",1,10,"Using suitable figures, discuss the magnetostatic boundary conditions."),
]
ORDER = {"A":0,"B":1,"C":2}
MONTHS = {"April":4,"November":11}
def date_key(src):
    mon, yr = src.split()
    return (int(yr), MONTHS[mon])
Q.sort(key=lambda r: (ORDER[r[0]], r[1], date_key(r[2]), r[3]))

def sec_title(g):
    return {"A":"Section A: 1 to 3 marks","B":"Section B: 4 to 5 marks","C":"Section C: 10 marks"}[g]

out = []
out.append(head.replace("</style>", ".sec-title, .topic { break-after: avoid; }\n</style>", 1))
out.append('<div class="sheet">')
out.append('<div class="title">')
out.append('<div class="tl exam">FYUGP B.Sc. PHYSICS HONOURS</div>')
out.append('<div class="tl sch">ELECTRODYNAMICS II</div>')
out.append('<div class="tl course">Semester V &middot; Core in Major</div>')
out.append('<div class="tl subject">MODULE 2: ELECTROMAGNETIC INDUCTION AND MAXWELL’S EQUATIONS</div>')
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
open(f"{ROOT}/source/pyq/module-2-pyq.html", "w", encoding="utf-8").write("\n".join(out))
print("questions:", n, {g: sum(1 for r in Q if r[0]==g) for g in "ABC"})
