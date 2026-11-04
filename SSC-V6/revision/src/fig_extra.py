"""Animated figures for derivations that have none in the deck (revision pages only).
EXTRA[title prefix] = {"figure": setup.figure, "steps": [step figure dicts, one per step]}"""
import math
R2 = lambda v: [round(v[0], 2), round(v[1], 2)]
def F(focus, keep=None, cap=''):
    d = {"focus": focus, "caption": cap}
    if keep: d["keep"] = keep
    return d
EXTRA = {}

# ---- Unit 5: phasor addition ----
a1, t1, a2, t2 = 62, 18, 46, 78
P = R2([a1*math.cos(math.radians(t1)), a1*math.sin(math.radians(t1))])
Rr = R2([P[0]+a2*math.cos(math.radians(t2)), P[1]+a2*math.sin(math.radians(t2))])
E = R2([P[0]*1.45, P[1]*1.45])
EXTRA['Resultant amplitude'] = {"figure": {"box": [-14, -22, 108, 80],
  "points": {"O": {"at": [0, 0], "side": "sw"}, "P": {"at": P, "side": "se"}, "R": {"at": Rr, "side": "n"},
             "Rx": {"at": [Rr[0], 0], "side": "s", "label": False, "size": 2.5}, "Ry": {"at": [0, Rr[1]], "side": "w", "label": False, "size": 2.5}},
  "parts": {"xax": {"type": "line", "from": [-10, 0], "to": [104, 0], "style": "axis", "arrow": True},
   "yax": {"type": "line", "from": [0, -10], "to": [0, 76], "style": "axis", "arrow": True},
   "OP": {"type": "line", "from": "O", "to": "P", "arrow": True, "label": "a_1"},
   "PR": {"type": "line", "from": "P", "to": "R", "arrow": True, "label": "a_2"},
   "OR": {"type": "line", "from": "O", "to": "R", "style": "ray", "arrow": True, "label": "a"},
   "th1": {"type": "angle", "at": "O", "from": [30, 0], "to": "P", "r": 34, "label": "θ_1"},
   "hP": {"type": "line", "from": "P", "to": [P[0]+32, P[1]], "style": "guide"},
   "th2": {"type": "angle", "at": "P", "from": [P[0]+30, P[1]], "to": "R", "r": 22, "label": "θ_2"},
   "th": {"type": "angle", "at": "O", "from": [30, 0], "to": "R", "r": 22, "label": "θ"},
   "ext": {"type": "line", "from": "P", "to": E, "style": "guide"},
   "dl": {"type": "angle", "at": "P", "from": E, "to": "R", "r": 16, "label": "θ_2−θ_1"},
   "tri": {"type": "polygon", "points": ["O", "P", "R"]},
   "gx": {"type": "line", "from": "R", "to": "Rx", "style": "guide"},
   "gy": {"type": "line", "from": "R", "to": "Ry", "style": "guide"},
   "ax": {"type": "dim", "from": "O", "to": "Rx", "offset": -14, "arrow": "both", "label": "a cos θ"},
   "ay": {"type": "dim", "from": "O", "to": "Ry", "offset": 14, "arrow": "both", "label": "a sin θ"}},
  "draw": [{"parts": ["xax", "yax", "O"], "caption": "Phasor plane"},
           {"parts": ["OP", "P", "th1"], "caption": "First vibration: phasor a_1 at θ_1"},
           {"parts": ["hP", "PR", "R", "th2"], "caption": "Second: a_2 at θ_2, tip to tail"},
           {"parts": ["OR", "th"], "caption": "Resultant OR = a at θ"}]},
 "steps": [F(["OP", "PR"], ["xax"], "Two vibrations, same ω"),
           F(["OP", "PR", "th1", "th2"], ["xax", "hP"], "Split each into cos ωt and sin ωt parts"),
           F(["OR", "th"], ["xax"], "Resultant a at phase θ"),
           F(["ax", "gx", "OR"], ["OP", "PR"], "Horizontal: a cos θ = a_1cos θ_1 + a_2cos θ_2"),
           F(["ay", "gy", "OR"], ["OP", "PR"], "Vertical: a sin θ = a_1sin θ_1 + a_2sin θ_2"),
           F(["ax", "ay", "OR"], ["gx", "gy"], "Square and add the components"),
           F(["OP", "PR", "OR"], [], "Expand: cos² + sin² = 1"),
           F(["tri", "ext", "dl", "OP", "PR", "OR"], [], "Angle between phasors: θ_2 − θ_1 (cosine law)"),
           F(["OR"], ["OP", "PR", "dl"], "a² = a_1² + a_2² + 2a_1a_2cos(θ_1−θ_2)")]}

# ---- Unit 6: hyperbola of constant path difference ----
d, D = 60, 30
ha, hb = D/2, math.sqrt(d*d - D*D)/2
br = [R2([ha*math.cosh(t), hb*math.sinh(t)]) for t in [i*0.15 - 1.35 for i in range(19)]]
tp = 0.75; Pp = R2([ha*math.cosh(tp), hb*math.sinh(tp)])
parts6 = {"xax": {"type": "line", "from": [-62, 0], "to": [66, 0], "style": "axis", "arrow": True, "label": "x"},
  "zax": {"type": "line", "from": [0, -46], "to": [0, 50], "style": "normal"},
  "S1P": {"type": "line", "from": "S₁", "to": "P", "style": "ray", "label": "S₁P"},
  "S2P": {"type": "line", "from": "S₂", "to": "P", "style": "ray", "label": "S₂P"},
  "foot": {"type": "line", "from": "P", "to": "N", "style": "guide"},
  "tri1": {"type": "polygon", "points": ["S₁", "N", "P"]},
  "tri2": {"type": "polygon", "points": ["S₂", "N", "P"]},
  "dd": {"type": "dim", "from": "S₂", "to": "S₁", "offset": -16, "arrow": "both", "label": "d"},
  "zz": {"type": "dim", "from": "N", "to": "P", "offset": -12, "arrow": "both", "label": "z"}}
hy = []
for i in range(len(br)-1):
    parts6['h%d' % i] = {"type": "line", "from": br[i], "to": br[i+1], "style": "mirror"}; hy.append('h%d' % i)
EXTRA['Hyperbolic'] = {"figure": {"box": [-62, -50, 68, 52],
  "points": {"S₁": {"at": [d/2, 0], "side": "s"}, "S₂": {"at": [-d/2, 0], "side": "s"}, "O": {"at": [0, 0], "side": "sw"},
             "P": {"at": Pp, "side": "ne"}, "N": {"at": [Pp[0], 0], "side": "s", "size": 2.5}},
  "parts": parts6,
  "draw": [{"parts": ["xax", "zax", "O"], "caption": "Axes through the midpoint O"},
           {"parts": ["S₁", "S₂", "dd"], "caption": "Coherent sources S₁, S₂ a distance d apart"},
           {"parts": ["P", "S1P", "S2P"], "caption": "Point P(x, z): path difference S₂P − S₁P"},
           {"parts": hy, "caption": "All points with the same Δ: a hyperbola"}]},
 "steps": [F(["S1P", "S2P"], ["P"], "Δ = S₂P − S₁P fixed"),
           F(["tri1", "tri2", "foot", "zz"], ["S1P", "S2P"], "Pythagoras: S₁P² = (x − d/2)² + z²"),
           F(["S2P"], ["S1P"], "Isolate the root S₂P"),
           F(["S2P", "S1P"], [], "Square both sides"),
           F(["S1P"], ["S2P"], "One root left: S₁P"),
           F(["S1P", "S2P"], [], "Square again"),
           F(hy, ["S₁", "S₂"], "Collect x² and z²"),
           F(hy, ["S₁", "S₂", "dd"], "Hyperbola: semi-axis Δ/2, foci S₁, S₂")]}

# ---- Unit 15: Fresnel half-period zones ----
dz = 100; rs = [0, 30, 43, 53]
pts15 = {"O": {"at": [0, 0], "side": "sw"}, "P": {"at": [dz, 0], "side": "se"}}
parts15 = {"wf": {"type": "line", "from": [0, -62], "to": [0, 62], "style": "mirror", "label": "W"},
  "OP": {"type": "line", "from": "O", "to": "P", "style": "axis", "label": "d"},
  "in1": {"type": "line", "from": [-40, 40], "to": [-4, 40], "style": "ray", "arrow": True},
  "in2": {"type": "line", "from": [-40, 0], "to": [-4, 0], "style": "ray", "arrow": True},
  "in3": {"type": "line", "from": [-40, -40], "to": [-4, -40], "style": "ray", "arrow": True}}
for n in (1, 2, 3):
    pts15['Q%d' % n] = {"at": [0, rs[n]], "side": "w", "label": "Q_%d" % n, "size": 3}
    parts15['PQ%d' % n] = {"type": "line", "from": "P", "to": "Q%d" % n, "style": "guide", "label": "d + %sλ/2" % ('' if n == 1 else n)}
parts15['zone3'] = {"type": "line", "from": "Q2", "to": "Q3", "style": "ray"}
parts15['zone3b'] = {"type": "line", "from": [0, -rs[2]], "to": [0, -rs[3]], "style": "ray"}
parts15['r3'] = {"type": "dim", "from": "O", "to": "Q3", "offset": -14, "arrow": "both", "label": "r_n"}
parts15['tri'] = {"type": "polygon", "points": ["P", "O", "Q3"]}
parts15['ro'] = {"type": "polygon", "points": [[0, 0], [5, 0], [5, 5], [0, 5]]}
EXTRA['Radius, equal area'] = {"figure": {"box": [-44, -64, 112, 66], "points": pts15, "parts": parts15,
  "draw": [{"parts": ["in1", "in2", "in3"], "caption": "Plane wave"},
           {"parts": ["wf", "O"], "caption": "Wavefront WW′"},
           {"parts": ["OP", "P"], "caption": "Observer P on the axis, OP = d"},
           {"parts": ["PQ1", "Q1", "PQ2", "Q2", "PQ3", "Q3"], "caption": "Rim distances grow by λ/2: half-period zones"}]},
 "steps": [F(["tri", "ro", "r3", "PQ3", "OP"], ["Q3"], "Pythagoras in △POQ_n"),
           F(["r3", "PQ3"], ["tri"], "Expand (d + nλ/2)²"),
           F(["r3"], ["OP"], "nλ ≪ d: r_n ≈ √(nλd)"),
           F(["zone3", "zone3b"], ["Q2", "Q3"], "Zone n: ring between r_(n−1) and r_n"),
           F(["zone3", "zone3b"], ["r3"], "Area ≈ πλd, nearly equal"),
           F(["PQ1", "PQ2", "PQ3"], ["P"], "Neighbouring zones arrive out of phase"),
           F(["PQ1", "PQ2", "PQ3"], ["wf"], "Group the terms in brackets"),
           F(["PQ1"], ["P", "Q1"], "u(P) ≈ u_1/2: half the first zone")]}

# ---- Unit 19: Malus' law ----
th = math.radians(35); E0 = 72
Ap = R2([E0*math.cos(th)**2, E0*math.cos(th)*math.sin(th)])
u = [math.cos(th), math.sin(th)]; w = [-math.sin(th), math.cos(th)]
sq = [R2([Ap[0]-u[0]*5, Ap[1]-u[1]*5]), R2([Ap[0]-u[0]*5-w[0]*5, Ap[1]-u[1]*5-w[1]*5]), R2([Ap[0]-w[0]*5, Ap[1]-w[1]*5]), Ap]
EXTRA['Malus'] = {"figure": {"box": [-30, -24, 92, 66],
  "points": {"O": {"at": [0, 0], "side": "sw"}, "T": {"at": [E0, 0], "side": "s", "label": False}, "A": {"at": Ap, "side": "nw", "label": False, "size": 2.5}},
  "parts": {"pol": {"type": "line", "from": [-26, 0], "to": [88, 0], "style": "normal", "label": "polariser axis"},
   "ana": {"type": "line", "from": R2([-26*u[0], -26*u[1]]), "to": R2([86*u[0], 86*u[1]]), "style": "mirror", "label": "analyser axis"},
   "E0": {"type": "line", "from": "O", "to": "T", "style": "ray", "arrow": True, "label": "E_0"},
   "th": {"type": "angle", "at": "O", "from": "T", "to": "A", "r": 28, "label": "θ"},
   "Epar": {"type": "line", "from": "O", "to": "A", "arrow": True, "label": "E_0cos θ"},
   "Eperp": {"type": "line", "from": "A", "to": "T", "style": "guide", "label": "E_0sin θ"},
   "ra": {"type": "polygon", "points": sq}, "tri": {"type": "polygon", "points": ["O", "A", "T"]}},
  "draw": [{"parts": ["pol", "O"], "caption": "Plane-polarised light leaves the polariser"},
           {"parts": ["E0", "T"], "caption": "Its field amplitude E_0"},
           {"parts": ["ana", "th"], "caption": "Analyser axis at angle θ"}]},
 "steps": [F(["Epar", "th", "tri", "ra", "A"], ["E0", "ana"], "Resolve E_0 along the analyser axis: E_0cos θ"),
           F(["Eperp", "ra"], ["E0", "Epar"], "E_0sin θ is absorbed"),
           F(["Epar"], ["ana"], "Intensity ∝ amplitude²"),
           F(["Epar"], ["ana"], "Multiply by K"),
           F(["Epar", "th"], ["ana", "E0"], "I = KE_0²cos²θ"),
           F(["Epar", "E0", "th"], ["ana"], "I = I_0cos²θ")]}

# ---- Unit 20: e-ray velocity ellipse ----
ea, eb, et = 40, 56, math.radians(40)
rho = 1/math.sqrt(math.cos(et)**2/ea**2 + math.sin(et)**2/eb**2)
Q = R2([rho*math.sin(et), rho*math.cos(et)])
ell = [R2([eb*math.cos(math.radians(k)), ea*math.sin(math.radians(k))]) for k in range(0, 360, 10)]
EXTRA['Extraordinary ray velocity'] = {"figure": {"box": [-66, -52, 72, 58],
  "points": {"O": {"at": [0, 0], "side": "sw"}, "Q": {"at": Q, "side": "ne"},
             "Qx": {"at": [Q[0], 0], "side": "s", "label": False, "size": 2.5}, "Qz": {"at": [0, Q[1]], "side": "w", "label": False, "size": 2.5}},
  "parts": {"zax": {"type": "line", "from": [0, -50], "to": [0, 56], "style": "axis", "arrow": True, "label": "z (optic axis)"},
   "xax": {"type": "line", "from": [-64, 0], "to": [70, 0], "style": "axis", "arrow": True, "label": "x"},
   "ell": {"type": "polygon", "points": ell, "label": "e-wave"},
   "circ": {"type": "arc", "center": "O", "r": ea, "from": 0, "to": 360, "style": "normal"},
   "ray": {"type": "line", "from": "O", "to": "Q", "style": "ray", "arrow": True, "label": "ρ = v_re"},
   "th": {"type": "angle", "at": "O", "from": [0, 30], "to": "Q", "r": 24, "label": "θ"},
   "da": {"type": "dim", "from": "O", "to": [0, ea], "offset": -14, "arrow": "both", "label": "a = c/n_o"},
   "db": {"type": "dim", "from": "O", "to": [eb, 0], "offset": -14, "arrow": "both", "label": "b = c/n_e"},
   "gx": {"type": "line", "from": "Q", "to": "Qx", "style": "guide", "label": "z = ρcos θ"},
   "gz": {"type": "line", "from": "Q", "to": "Qz", "style": "guide", "label": "x = ρsin θ"}},
  "draw": [{"parts": ["zax", "xax", "O"], "caption": "Optic axis z"},
           {"parts": ["circ"], "caption": "o-wavelet: sphere, speed c/n_o"},
           {"parts": ["ell"], "caption": "e-wavelet: ellipsoid of revolution about z"},
           {"parts": ["ray", "Q", "th"], "caption": "e-ray at angle θ to the optic axis"}]},
 "steps": [F(["ray", "th"], ["ell", "zax"], "Ray speed v_re at angle θ"),
           F(["da", "db", "ray"], ["ell"], "Semi-axes a = c/n_o, b = c/n_e; ρ = v_re"),
           F(["ray"], ["ell", "th"], "Multiply by ρ²"),
           F(["gx", "gz", "ell"], ["Q"], "z = ρcos θ, x = ρsin θ: an ellipse"),
           F(["ray", "th"], ["ell"], "Multiply by c²"),
           F(["ray", "th"], ["ell"], "n_re = c / v_re"),
           F(["ray", "th", "ell"], [], "n_re = √(n_o²cos²θ + n_e²sin²θ)")]}
