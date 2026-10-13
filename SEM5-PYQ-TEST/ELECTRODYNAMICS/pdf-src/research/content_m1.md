> Research brief: atom codes here predate the final teaching organization. Use `coverage_m*.json` and the printed preparation topic route for final P/M/T/Q codes. Source mapping is finalized in `scope_audit.md`.

# Module I content brief — fields in matter

**Authority:** syllabus units 1–5, Griffiths 5e §§4.1.1–4.1.4, 4.2.1–4.2.2, 4.3.1, 4.3.3, 4.4.1; §§6.1.1–6.1.4, 6.2.1–6.2.3, 6.3.1, 6.4.1–6.4.2. Use `syllabus.md`, `book_notes.md`, `pedagogy.md`. This is a writer's dependency map, not final prose. Keep bound-current *physical interpretation* at the syllabus's conceptual depth. Assign PYQ IDs only after source verification.

## Atoms and dependencies

Prerequisites: **P1** charge, field and superposition (Plus Two Electric Charges and Fields); **P2** dipole moment $\mathbf p=q\mathbf d$ (Plus Two); **P3** Gauss law and closed-surface normal (Plus Two); **P4** current loop magnetic moment, Ampère law (Plus Two Moving Charges and Magnetism); **P5** magnetic materials at qualitative school level. Maths: **M1** dot product/normal projection; **M2** divergence as local outward flux; **M3** curl and right-hand loop orientation; **M4** surface/volume integral; **M5** component boundary conditions from pillbox and thin loop.

| Code | Atomic concept and essential result | Needs | Source |
|---|---|---|---|
| T1 | Dielectric dipole and polarization $\mathbf P=d\mathbf p/dV$ (C/m²) | P2 | 4.1.1–4.1.2 |
| T2 | Uniform versus nonuniform polarization; microscopic dipoles cancel inside but can leave surface charge | T1 | 4.1.2–4.1.3 |
| T3 | Field/potential of polarized object as dipole superposition, $V=(4\pi\epsilon_0)^{-1}\int \mathbf P(\mathbf r')\cdot\hat{\mathcal R}/\mathcal R^2\,d\tau'$ | T1,M1,M4 | 4.2.1 |
| T4 | Bound volume charge $\rho_b=-\nabla\cdot\mathbf P$ | T3,M2 | 4.2.2 |
| T5 | Bound surface charge $\sigma_b=\mathbf P\cdot\hat n$ and slab sign check | T3,M1 | 4.2.2 |
| T6 | Displacement $\mathbf D=\epsilon_0\mathbf E+\mathbf P$; $\nabla\cdot\mathbf D=\rho_f$ | T4,P3 | 4.3.1 |
| T7 | $D$ flux: $\oint\mathbf D\cdot d\mathbf a=Q_{f,enc}$; symmetry, not a generic Coulomb law | T6,M4 | 4.3.1 |
| T8 | Electrostatic interface: $\hat n\cdot(\mathbf D_2-\mathbf D_1)=\sigma_f$, $\hat n\times(\mathbf E_2-\mathbf E_1)=0$, $\hat n$ from 1 to 2 | T6,M5 | 4.3.3 |
| T9 | Linear isotropic homogeneous dielectric $\mathbf P=\epsilon_0\chi_e\mathbf E$, $\mathbf D=\epsilon\mathbf E$, $\epsilon_r=1+\chi_e$ | T6 | 4.4.1 |
| T10 | Magnetization $\mathbf M=d\mathbf m/dV$ (A/m), microscopic current-loop picture | P4 | 6.1.1–6.1.3 |
| T11 | Vector potential/field of a magnetized body as magnetic-dipole superposition | T10,M4 | 6.2.1 |
| T12 | Equivalent bound volume current $\mathbf J_b=\nabla\times\mathbf M$ | T11,M3 | 6.2.1 |
| T13 | Equivalent bound surface current $\mathbf K_b=\mathbf M\times\hat n$ | T11,M3 | 6.2.1 |
| T14 | Why uniformly magnetized sample can have $J_b=0$ inside and circulating $K_b$ at boundary | T12,T13 | 6.2.2 |
| T15 | Auxiliary $\mathbf H=\mathbf B/\mu_0-\mathbf M$, $\nabla\times\mathbf H=\mathbf J_f$ in magnetostatics | T12,P4 | 6.3.1 |
| T16 | $\mathbf H$ source accounting: bound current is absorbed into $\mathbf M$, so $\oint\mathbf H\cdot d\mathbf l=I_{f,enc}$; choose free current only | T15,M3 | 6.3.1 |
| T17 | Linear magnetic material $\mathbf M=\chi_m\mathbf H$, $\mu=\mu_0(1+\chi_m)$ | T15 | 6.4.1 |
| T18 | Diamagnetic/paramagnetic signs; ferromagnetic domains, remanence, coercivity and nonlinear hysteresis | T17,P5 | 6.4.2 |

## Derivation and figure skeletons

1. **Polarized object → bound sources:** Start with one dipole potential, replace the sum by $\int\mathbf P\cdot\nabla'(1/\mathcal R)d\tau'/(4\pi\epsilon_0)$, use product rule and divergence theorem. The surface term is $\sigma_b=\mathbf P\cdot\hat n$; bulk term is $\rho_b=-\nabla\cdot\mathbf P$. Explain that this is an equivalent *electric field* source description, not new free charge. Figure: aligned dipoles in a slab; $\mathbf P$ right, right face $+$, left face $-$.
2. **$D$ and boundary:** Gauss law for total charge, substitute $\rho_b$, move $\nabla\cdot\mathbf P$ left. Draw pillbox across medium 1/2 with $\hat n$ pointing 1→2. Top minus bottom flux gives $D_{2n}-D_{1n}=\sigma_f$. A tiny rectangular loop gives $\mathbf E_{2t}=\mathbf E_{1t}$ in electrostatics. Avoid saying $\mathbf D$ always points along $\mathbf E$; that follows only for scalar linear $\epsilon$.
3. **Magnetized object → bound currents:** Start from magnetic dipole vector potential, integrate by parts to expose $\mathbf J_b=\nabla\times\mathbf M$ and $\mathbf K_b=\mathbf M\times\hat n$. The student-facing explanation should be adjacent loops cancel where they share an edge. Draw uniform-$\mathbf M$ cylinder with a circulating surface current. Show orientation via right hand.
4. **$H$ and free sources:** Insert $\mathbf J=\mathbf J_f+\nabla\times\mathbf M$ into Ampère; rearrange; use a loop around an ideal magnetized cylinder to separate free-current and bound-current counting. Magnetic boundary jumps are taught in Module II, where syllabus unit 8 and Griffiths §7.3.6 explicitly assign boundary conditions; Griffiths §6.3.3 is omitted from Module I's prescribed reading.

## Worked anchors and checks

- Slab: $\mathbf P=P_0\hat x$, faces normal $\pm\hat x$: $\rho_b=0$, $\sigma_b=+P_0$ on right, $-P_0$ on left. Unit C/m²; net bound charge zero.
- Nonuniform $\mathbf P=ax\hat x$ inside a region: $\rho_b=-a$; separately include surface charge at *each* physical boundary. For a cube side $L$ from $x=0$ to $L$, $Q_{b,vol}=-aL^3$ and right face $Q_{b,surf}=aL^3$.
- Uniform $\mathbf M=M_0\hat z$ cylinder: $\mathbf J_b=0$, curved-side $\mathbf K_b=M_0\hat\phi$ A/m; top/bottom $\mathbf K_b=0$.
- Linear dielectric $\chi_e=3$, $E=100$ V/m: $\epsilon_r=4$, $P=3\epsilon_0 E$, $D=4\epsilon_0 E$. Keep numerical $\epsilon_0$ conversion only if necessary.

**Student traps:** electric surface formula uses $P\cdot n$; magnetic uses $M\times n$ (order matters). $\mathbf D$ counts free charge but $\mathbf E$ responds to total charge. $\mathbf H$ is useful bookkeeping, not a second magnetic induction. $\mu_r=1+\chi_m$ is not valid as one fixed scalar across a ferromagnetic hysteresis cycle. Keep the magnetostatic derivation explicitly static.
