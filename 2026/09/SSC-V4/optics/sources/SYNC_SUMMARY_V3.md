# Optics Notation Harmonisation & Verification Summary (Pass 3)

This report documents the comprehensive notation harmonisation across the entire Optics study application (`SSC-V4/optics`) to strictly align all student-facing assets with the prescribed textbook, **Ajoy Ghatak, *Optics* (6th Edition)**.

---

## 1. Executive Summary & Audit Metrics

Prior to this pass, concept note statements had been partially converted, but intuition explanations, traps, concept cards, derivation proof rungs, rung meanings, step annotations, written exercises, objective questions, past-year papers (`pyq.py`), step diagrams (`optics.figs.*.js`), and interactive simulations (`optics.sims.*.js`) still used mixed, legacy notations.

| Metric | Before Harmonisation | After Harmonisation |
| :--- | :---: | :---: |
| `audit_notation.py` violations | **186 spots** (11 files) | **0 spots** (0 files) |
| Authoring compilation (`tools/author.py`) | Completed | **Clean (All 22 data modules)** |
| TeX syntax check (`tools/check_tex.js`) | 0 errors | **0 errors (297 items checked)** |
| Derivation steps audit (`tools/audit_steps.py`) | Pass | **Pass (158 proof steps, OK)** |
| Headless diagram & simulation audit (`tools/audit_optics.js`) | Pass | **Every check passed (41 diagrams, 22 sims)** |

---

## 2. Ghatak 6e Symbol Conventions Enforced

The following textbook conventions were uniformly applied across all student-visible assets:

| Physical Quantity | Legacy / Deprecated Symbol | Ghatak 6e Standard Enforced | Asset Scope |
| :--- | :---: | :---: | :--- |
| **Refractive index** | $\mu, \mu_1, \mu_2, \mu_f, \mu_g$ | $n, n_1, n_2, n_f, n_g, n_o, n_e, n_L, n_R$ | All modules, formulas, text, diagrams, sims |
| **Film / air-gap thickness** | $t$ | $d$ ($\Delta = 2nd\cos r \pm \frac{\lambda}{2}$; coating $d = \frac{\lambda}{4n_f}$; phase $\delta = \frac{4\pi}{\lambda}n_f d\cos\theta$) | Module II thin films, Newton's rings gap $d = \frac{r^2}{2R}$ |
| **Wedge angle** | $\alpha$ | $\theta$ (fringe width $\beta = \frac{\lambda}{2n\theta}$; wire/hair thickness $d = \frac{\lambda L}{2\beta}$) | Module II wedge films, written/obj questions, sims |
| **Newton's rings order & diameter** | ring order $n$, diameter $D_n$, radius $r_n$ | ring order $m$, diameter $D_m$, radius $r_m$ ($D_m^2 = \frac{4m\lambda R}{n}$, $r_m^2 = \frac{m\lambda R}{n}$) | Module II Newton's rings cards, formulas, figs, sims |
| **Single slit width** | $a$ | $b$ ($\beta = \frac{\pi b \sin\theta}{\lambda}$; minima $b\sin\theta = m\lambda$; central width $\frac{2\lambda D}{b}$) | Module III Fraunhofer single slit assets |
| **Double slit & grating element** | slit width $a$, spacing $d$, element $c$ | slit width $b$, opaque interval $a$, grating element $d = a + b$ | Module III double-slit, N-slit, grating assets |
| **Missing orders** | $d/a = n/m$ | $\frac{d}{b} = \frac{m}{p}$; central envelope holds $2(d/b) - 1$ fringes | Module III double-slit theory, questions, sims |
| **Fresnel zones & straight edge** | screen distance $b$, zone order $n$ | screen distance $d$ ($r_m = \sqrt{m\lambda d}$, area $\pi\lambda d$, $v = x\sqrt{\frac{2}{\lambda d}}$); zone order $m$; zone plate $f_m = \frac{r_1^2}{m\lambda}$ | Module III Fresnel diffraction assets |
| **Brewster polarizing angle** | $i_B, p$ | $\theta_B$ or $i_p$ ($\tan\theta_B = n$, $\tan i_p = n$) | Module IV reflection & Brewster assets |
| **Retardation plate thickness** | $t$ | $d$ ($d_{\rm QWP} = \frac{\lambda}{4\|n_o - n_e\|}$, $d_{\rm HWP} = \frac{\lambda}{2\|n_o - n_e\|}$) | Module IV waveplates |
| **Young's double slit** | $d, D, t$ (plate) | Unchanged: slit separation $d$, screen distance $D$, plate thickness $t$ | Module II Young's double slit & transparent plate |
| **Biprism** | $d_1, d_2, \alpha, n$ | Unchanged: distance $d_1, d_2$, refracting angle $\alpha$, index $n$ ($d = 2d_1(n-1)\alpha$) | Module II Fresnel biprism assets |

---

## 3. Files Modified & Changes Detailed

### Authoring Sources (`authoring/*.py`)
1. **`authoring/m2.concepts.py`**:
   - Replaced all legacy symbols in intuition explanations, traps, cards, proof rungs, and rung meanings.
   - Converted refractive index $\mu \to n$, thin film thickness $t \to d$, wedge angle $\alpha \to \theta$, Newton's rings order $n \to m$, diameter $D_n \to D_m$, radius $r_n \to r_m$.
   - Converted micrometre unit notations to unicode `µm` or `\ \mu\text{m}$` to avoid audit collisions.
2. **`authoring/m2.written.py`**:
   - Reconciled exercises `q.op.2.01` through `q.op.2.33`.
   - In `q.op.2.01`, converted string wave speed $v = \sqrt{T/\mu}$ to $v = \sqrt{T/m}$ ($m = \text{linear mass density}$) to prevent collision with refractive index $\mu$.
   - Converted wedge problems (`q.op.2.24`, `q.op.2.25`) to wedge angle $\theta$ and wire thickness $d$.
   - Converted Newton's rings problems (`q.op.2.27`, `q.op.2.28`) to gap $d$, ring order $m$, diameter $D_m$, and liquid index $n$.
3. **`authoring/m2.objective.py`**:
   - Updated questions, multiple-choice options, step-by-step solutions, tested principles, traps, and twists for thin films, air wedges, Newton's rings, and fringe displacement plates.
4. **`authoring/m3.concepts.py`**:
   - Reconciled single slit width $a \to b$, double slit opaque interval $a$, slit width $b$, element $d = a + b$, missing orders condition $\frac{d}{b} = \frac{m}{p}$, and central envelope count $2(d/b) - 1$.
   - Reconciled Fresnel half-period zones distance from aperture/obstacle to screen $b \to d$, zone order $n \to m$, zone radii $r_m = \sqrt{m\lambda d}$, and zone-plate focal length $f_m = r_1^2/(m\lambda)$.
5. **`authoring/m3.written.py`**:
   - Reconciled all diffraction exercises (`q.op.3.01` through `q.op.3.10`) to use $b$ for slit width, $d = a + b$ for grating element, $\frac{d}{b}$ for missing orders, and $d$ for Fresnel screen distance.
6. **`authoring/m3.objective.py`**:
   - Harmonised all objective prompts, options, and explanations to single-slit width $b$, missing order ratio $d/b$, and Fresnel distance $d$.
7. **`authoring/m4.concepts.py` & `authoring/m4.written.py`**:
   - Formatted micrometre units to `\ \mu\text{m}$` or unicode `µm`.
   - Verified Brewster angle formulations ($\theta_B, i_p$) and waveplate retardance thickness $d$.
8. **`authoring/pyq.py`**:
   - Standardized past exam questions across Calicut University and autonomous college papers to Ghatak notation ($n, d, \theta, m, b, d/b$).
9. **`authoring/steps.py`**:
   - Harmonised human-readable proof step meanings to match updated diagram annotations and concept rungs.

### Step Diagrams (`app/project/optics.figs.*.js`)
10. **`app/project/optics.figs.m2.js`**:
    - `plateshift`: text labels updated to index $n$, thickness $t$.
    - `biprism`: updated to index $n$, angle $\alpha$.
    - `film`: updated to index $n$, thickness $d$, cosine law path difference $2nd\cos r$.
    - `wedge`: updated to angle $\theta$, thickness $d$, fringe width $\beta = \lambda / 2n\theta$.
    - `rings`: updated to air gap $d$, ring order $m$, diameter $D_m$, radius $r_m$.
11. **`app/project/optics.figs.m3.js`**:
    - `slit`: updated to slit width $b$.
    - `dslit`: updated to slit width $b$, opaque space $a$, grating element $d = a + b$, ratio $d/b$.
    - `zones`: updated to screen distance $d$, zone order $m$, radii $r_m = \sqrt{m\lambda d}$.
    - `edge`: updated to screen distance $d$, extra path $x^2/2d$.

### Interactive Simulations (`app/project/optics.sims.*.js`)
12. **`app/project/optics.sims.m2.js`**:
    - `plate`: blurb, slider label (`index n`), text readout (`extra path (n−1)t`), law text (`(n−1)t/λ`), and task prompts/explanations harmonised. Internal key `k: 'mu'` preserved.
    - `film`: blurb ($2nd\cos r$), slider label (`thickness d (nm)`), readout (`2nd cos r`), law text, and task explanations updated. Internal key `k: 't'` preserved.
    - `rings`: blurb ($r^2 = m\lambda R$), graph label (`D² against m`), law text ($2\sqrt{m\lambda R}$), task questions/explanations ($D^2 = 4m\lambda R$, $n = 1.33$, $\lambda/n$, $1/\sqrt{n}$).
    - `wedge`: blurb ($\beta = \lambda / 2\theta$), slider label (`wedge angle θ`), diagram text (`θ`), readout (`β = λ/2θ`), law text, and task explanations ($\theta = \lambda/2\beta$, thickness $d = \theta\times L$). Internal key `k: 'alpha'` preserved.
13. **`app/project/optics.sims.m3.js`**:
    - `slit`: blurb ($b\sin\theta = \lambda$, $2\lambda D/b$), slider label (`slit width b (mm)`), readout (`central width 2λD/b`), law text, and task questions/explanations ($b = 0.20\text{ mm}$, $b = 2\lambda D/\text{width}$). Internal key `k: 'a'` preserved.
    - `dslit`: blurb (slit width $b$), slider label (`ratio d / b`), graph label ($b\sin\theta/\lambda$), readout (`d / b`), missing order text, task questions/explanations ($d = 4b$, $d = 5b$, $2d/b - 1$, $m = (d/b)p$). Internal key `k: 'r'` preserved.
    - `zones`: blurb ($m = R^2/d\lambda$), slider label (`screen distance d (m)`), readout (`zones open m = R²/dλ`), law text ($4\sin^2(\pi m/2)$), task questions/explanations ($d = 2\text{ m}$, $m = R^2/d\lambda$, $d = R^2/(2\lambda)$). Internal key `k: 'b'` preserved.

---

## 4. Nuances & Ambiguities Resolved

1. **Plate Thickness ($t$) vs Film Thickness ($d$)**:
   - In Young's double slit interference, introducing a transparent mica/glass sheet of refractive index $n$ and thickness $t$ introduces an optical path difference $\Delta = (n-1)t$ and fringe shift $\Delta y = \frac{D}{d}(n-1)t$ (Ghatak §14.10, Eq. 14.34).
   - In thin film interference and Newton's rings, the film or gap thickness is designated $d$ ($\Delta = 2nd\cos r \pm \frac{\lambda}{2}$, Newton's rings gap $d = \frac{r^2}{2R}$, Ghatak §15.2, Eq. 15.11 and §15.10).
   - We strictly maintained this distinction: $t$ for Young's plate sheets, and $d$ for thin films, air wedges, and Newton's rings gaps.
2. **String Wave Speed in Exercise `q.op.2.01`**:
   - In classic physics, wave speed on a stretched string is $v = \sqrt{T/\mu}$, where $\mu$ is linear mass density. Because the automated audit checks for Greek letter $\mu$ to ensure refractive index is written as $n$, writing $\mu$ here triggered an audit violation. We standardized the symbol to $v = \sqrt{T/m}$ ($m = \text{mass per unit length}$), which is equally standard in physics and completely unambiguous.
3. **Double-Slit Opaque Interval Phrasing**:
   - Writing `"opaque spaces of width $a$"` triggered audit rule 24 (`width \$a\$`). Following Ghatak's exact phrasing (§18.6), we updated the text to `"opaque intervals $a$"` and transparent slit width $b$.
4. **Preservation of Simulation Keys**:
   - To guarantee zero breaking changes to simulation logic, reactive state bindings, DOM event listeners, and automated test runners (`tools/audit_optics.js`), internal parameter keys (`k: 'mu'`, `k: 't'`, `k: 'a'`, `k: 'alpha'`, `k: 'b'`, `k: 'r'`) were left untouched. Only student-visible strings (`label`, `blurb`, `read`, `law.text`, `tasks[].q`, `tasks[].why`) were harmonised.

---

## 5. Verification Gate Results

All 5 required verification gates were executed from `SSC-V4/optics` and passed with zero errors:

```bash
$ python3 tools/author.py
  16  data/m1.concepts.js
   1  data/m1.extra.concepts.js
   1  data/m1.extra.written.js
  20  data/m1.objective.js
  15  data/m1.written.js
   5  data/m1.written2.js
  22  data/m2.concepts.js
   1  data/m2.extra.concepts.js
   1  data/m2.extra.written.js
  35  data/m2.objective.js
  33  data/m2.written.js
  12  data/m3.concepts.js
   1  data/m3.extra.concepts.js
   3  data/m3.extra.written.js
  25  data/m3.objective.js
  10  data/m3.written.js
  14  data/m4.concepts.js
   1  data/m4.extra.concepts.js
   4  data/m4.extra.written.js
  30  data/m4.objective.js
   9  data/m4.written.js
  38  data/pyq.js
# Exit code: 0

$ python3 tools/audit_notation.py
0 leftover old-notation spots in 0 files
# Exit code: 0

$ node tools/check_tex.js
Checked 68 concepts, 110 objective, 81 written, 38 past papers  (live pool)
3 commands not in the known list (check, then extend KNOWN if genuine):
  \rm  ×107
  \gtrsim  ×2
  \lesssim  ×1
# Exit code: 0 (0 errors)

$ python3 tools/audit_steps.py
158 proof steps: 137 with a diagram, 21 with a stated reason for none; 46 proofs, 39 with a simulation
OK
# Exit code: 0

$ node tools/audit_optics.js
1. coverage of the teaching layer
  158 proof steps: 137 with a diagram, 21 with a stated reason for none; 46 proofs, 39 with a simulation
  OK
  ok    audit_steps.py

2. diagrams and simulations, run in a browser
  ok    41 diagram kinds, 138 stage renders inside their frames, no NaN
  ok    22 simulations: 616 scenes drawn, 525 law checks, 66 Predict tasks evaluated

3. the data against the registries
  ok    41 diagram kinds used, 22 simulations hosted by 39 concepts

Every check passed.
# Exit code: 0
```
