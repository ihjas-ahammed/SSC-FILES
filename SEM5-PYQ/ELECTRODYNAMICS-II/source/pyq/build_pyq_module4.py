import re, html
ROOT = "/home/ihjas/Documents/GitHub/SSC-FILES/SEM5-PYQ/ELECTRODYNAMICS-II"
m1 = open(f"{ROOT}/source/pyq/module-1-pyq.html", encoding="utf-8").read()
head = m1[:m1.index("<body>") + len("<body>")]
head = head.replace("FYUGP Electrodynamics II, Module 1 PYQ", "FYUGP Electrodynamics II, Module 4 PYQ")

TOPICS = [
    "Growth and decay of current in L-R circuits (items 15, 16)",
    "Growth and decay of charge in C-R and L-C circuits (items 15, 16)",
    "EMF in a rotating coil; r.m.s. and mean values (item 17)",
    "AC circuits with R, L and C; the j operator (items 18, 19, 20)",
    "Parallel resonant circuit (item 20)",
    "Series LCR circuit and resonance (item 21)",
    "Power in AC circuits (item 22)",
]
TF = "State whether true or false: "
BL = "______"
# (group, topic index, source label, sort key, marks, text)
Q = [
 # ---- A: 1 to 3 marks
 ("A",0,"April 2022",1,3,"Distinguish between initiation and transition transient currents."),
 ("A",0,"November 2021",1,2,"Give an expression for the instantaneous current in a series LR circuit. What are the terms involved ?"),
 ("A",0,"November 2021",2,1,TF + "If the value of $L/R$ in an LR series circuit increases, the time taken by the current to reach its maximum value decreases."),
 ("A",1,"November 2021",1,1,f"The smaller is the time constant $CR$, the {BL} is the discharge of the capacitor in a series $CR$ circuit."),
 ("A",2,"November 2021",1,1,f"The ratio of r.m.s. value of current to the mean value of current is called {BL}."),
 ("A",3,"November 2019",1,2,"Show graphically the relation between current and e.m.f having a pure inductance. Explain."),
 ("A",3,"November 2019",2,2,"What is $j$ operator? Give one of its applications to A.C. circuits."),
 ("A",3,"November 2021",1,1,TF + "In pure inductive circuits, the current is lagging behind the e.m.f. by $\\pi/2$ in phase."),
 ("A",4,"November 2019",1,1,TF + "A parallel resonant circuit is a rejector circuit."),
 ("A",5,"November 2019",1,1,f"The phase difference between the current and the voltage across the resistance connected in series with inductance and capacitor in an a.c. circuit is {BL}."),
 ("A",5,"November 2019",2,1,f"The quality factor of an LCR circuit is given by {BL}."),
 ("A",5,"November 2021",1,1,f"Higher the quality factor of a circuit, {BL} is its bandwidth."),
 # ---- B: 4 to 5 marks
 ("B",1,"November 2019",1,4,"A capacitor $3\\,\\mu\\text{F}$ is discharged through a resistance. The time taken for half the charge on the capacitor to leak is found to be 5 seconds. Compute the value of the resistance."),
 ("B",1,"November 2021",1,4,"Obtain an expression for the growth and decay of charge in a capacitor through a resistor."),
 ("B",1,"November 2021",2,4,"A capacitor of $0.2\\,\\mu\\text{F}$ is first charged and discharged through a resistance of $10\\ \\text{M}\\Omega$. Find the time the potential takes to fall to $\\tfrac14$ of its original value."),
 ("B",2,"November 2021",1,4,"Obtain equations for r.m.s. value of e.m.f. and current in an AC circuit."),
 ("B",3,"November 2021",1,4,"An alternating voltage of 100 V at a frequency of 25 Hz is applied to a circuit consisting a resistance $1.5\\ \\Omega$ and an inductance of 0.01 H in series: (a) find the current flowing; (b) phase difference between e.m.f. and current; and (c) potential drop across resistor and inductor."),
 ("B",5,"November 2019",1,4,"An a.c. of 100 V and 50 hertz is applied across a series circuit having an inductance of 5 henry, a resistance of 100 ohm and a variable capacitance. At what value of capacitance will the current in the circuit be in phase with the applied voltage ? Calculate the current in this condition."),
 ("B",5,"April 2022",1,5,"A circuit consists of a non-inductive resistance of $50\\ \\Omega$, an inductance of 0.3 H and a resistance of $2\\ \\Omega$ and a capacitor of $40\\,\\mu\\text{F}$ in series and is supplied with 200 V at 50 Hz. Find the impedance of the circuit."),
 ("B",6,"April 2022",1,5,"An alternating voltage of 10 V at 100 Hz is applied to a choke of inductance 5 H and resistance $200\\ \\Omega$. Determine the power factor of the coil."),
 # ---- C: 10 marks
 ("C",0,"November 2019",1,10,"Discuss the growth of current in an inductor in a circuit containing resistance connected to a cell of steady e.m.f. Also find the time constant of the circuit."),
 ("C",0,"November 2021",1,10,"Discuss the growth of current in a circuit containing an inductance $L$ and a resistance $R$ connected in series with a cell of steady e.m.f. Explain the time constant of the circuit."),
 ("C",5,"November 2021",2,10,"Obtain expressions for resultant e.m.f., impedance and power factor of an LCR series circuit when an alternating current is flowing through it. Explain the resonance in LCR series circuit."),
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
out.append(head.replace("</style>", ".sec-title, .topic { break-after: avoid; }\n@media print { .sheet { height: auto !important; min-height: 0 !important; } }\n</style>", 1))
out.append('<div class="sheet">')
out.append('<div class="title">')
out.append('<div class="tl exam">FYUGP B.Sc. PHYSICS HONOURS</div>')
out.append('<div class="tl sch">ELECTRODYNAMICS II</div>')
out.append('<div class="tl course">Semester V &middot; Core in Major</div>')
out.append('<div class="tl subject">MODULE 4: TRANSIENT CIRCUITS AND ALTERNATING CURRENTS</div>')
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
open(f"{ROOT}/source/pyq/module-4-pyq.html", "w", encoding="utf-8").write("\n".join(out))
print("questions:", n, {g: sum(1 for r in Q if r[0]==g) for g in "ABC"})
