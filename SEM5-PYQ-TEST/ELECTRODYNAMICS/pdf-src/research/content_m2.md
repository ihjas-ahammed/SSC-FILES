> Research brief: atom codes here predate the final teaching organization. Use `coverage_m*.json` and the printed preparation topic route for final P/M/T/Q codes. Source mapping is finalized in `scope_audit.md`.

# Module II content brief — induction and Maxwell

**Authority:** syllabus units 6–8; Griffiths 5e §§7.1.1–7.1.3, 7.2.1–7.2.4, 7.3.1–7.3.3, 7.3.5–7.3.6. §7.3.4 magnetic charge is omitted. Use `book_notes.md` and `pedagogy.md` for the teaching sequence. PYQ mapping pending.

## Atoms and dependencies

Prerequisites **P1** current and Ohm law; **P2** magnetic Lorentz force; **P3** magnetic flux and Lenz law; **P4** energy/work; **P5** static Gauss/Ampère laws. Maths **M1** dot/cross products; **M2** oriented line/surface integrals; **M3** time derivative and chain rule; **M4** divergence/curl, Gauss/Stokes; **M5** simple integral of $I\,dI$.

| Code | Atomic concept and essential result | Needs | Source |
|---|---|---|---|
| T1 | Microscopic Ohm law $\mathbf J=\sigma\mathbf E$ (stationary simple conductor) and $R=\ell/(\sigma A)$ | P1 | 7.1.1 |
| T2 | Emf $\mathcal E=\oint\mathbf f_s\cdot d\mathbf l$ as non-electrostatic work/charge; ideal versus loaded source | P4,M2 | 7.1.2 |
| T3 | Motional force/charge $\mathbf v\times\mathbf B$, polarity, $\mathcal E_{mot}=\int(\mathbf v\times\mathbf B)\cdot d\mathbf l$ | P2,M1 | 7.1.3 |
| T4 | Magnetic flux $\Phi_B=\int\mathbf B\cdot d\mathbf a$ (Wb), loop/surface orientation | P3,M1,M2 | 7.2.1 |
| T5 | Flux rule $\mathcal E=-d\Phi_B/dt$ for a specified moving or stationary loop | T3,T4,M3 | 7.2.1 |
| T6 | Induced nonconservative $\mathbf E$: $\oint\mathbf E\cdot d\mathbf l=-d\Phi_B/dt$ for fixed loop | T5,M2 | 7.2.2 |
| T7 | Differential Faraday law $\nabla\times\mathbf E=-\partial\mathbf B/\partial t$ | T6,M4 | 7.2.2 |
| T8 | Self-inductance $L=\Phi_{link}/I$, back emf $-L\,dI/dt$ when $L$ fixed | T4,T5 | 7.2.3 |
| T9 | Mutual inductance $M=\Phi_{21,link}/I_1$, $\mathcal E_2=-M\,dI_1/dt$ | T8 | 7.2.3 |
| T10 | Magnetic energy $U=\frac12LI^2$ from work against back emf | T8,P4,M5 | 7.2.4 |
| T11 | Vacuum magnetic energy density $u_B=B^2/(2\mu_0)$; material form requires assumptions | T10 | 7.2.4 |
| T12 | Charge continuity $\partial_t\rho+\nabla\cdot\mathbf J=0$ | P1,M4 | 7.3.1 |
| T13 | Why $\nabla\times\mathbf B=\mu_0\mathbf J$ fails for time-varying $\rho$ | T12,P5 | 7.3.1 |
| T14 | Displacement term $\mu_0\epsilon_0\partial_t\mathbf E$; equal current through capacitor gap in ideal geometry | T13 | 7.3.2 |
| T15 | Four vacuum Maxwell equations in differential/integral forms, with physical source meaning | T7,T14,P5 | 7.3.3 |
| T16 | Matter equations $\nabla\cdot\mathbf D=\rho_f$, $\nabla\times\mathbf H=\mathbf J_f+\partial_t\mathbf D$ (plus unchanged $B,E$ equations) | T15; M1 T6,T15 | 7.3.5 |
| T17 | Boundary jumps $\hat n\cdot\Delta D=\sigma_f$, $\hat n\cdot\Delta B=0$, $\hat n\times\Delta E=0$, $\hat n\times\Delta H=\mathbf K_f$ | T16,M2 | 7.3.6 |

## Derivation skeletons and worked anchors

1. **Moving rod:** Choose rod $+y$, speed $+x$, $B=+z$. $\mathbf v\times\mathbf B=-y$, so positive charge collects at the rod's lower end. Magnitude $B\ell v$; if closed with resistance $R$, $I=B\ell v/R$. Magnetic drag $F=I\ell B$ opposes motion and $Fv=I^2R$. For $B=.50$ T, $\ell=.20$ m, $v=3.0$ m/s, $R=2.0\,\Omega$: $\mathcal E=.30$ V, $I=.15$ A, $F=.015$ N, both powers $.045$ W.
2. **Faraday:** Fix positive traversal by right hand to chosen $+\hat n$; calculate *signed* $\Phi_B$; differentiate; leading minus gives positive/negative emf in chosen traversal. A second figure shows stationary wire with changing $B$: force is $q\mathbf E$ around loop, not $q\mathbf v\times B$ due to conductor motion. Take a circular loop of radius $r$ inside changing uniform $B_z$: $E_\phi(2\pi r)=-\pi r^2\dot B_z$, hence $E_\phi=-r\dot B_z/2$.
3. **Induction/energy:** For fixed linear inductor, source work $dW=L I\,dI$; integrate 0→$I$. Vacuum field energy can be shown with $\mathbf B=\mu_0\mathbf H$. **Do not assert** $u=B^2/(2\mu)$ for nonlinear/hysteretic media. For reversible linear isotropic media only, $u=\frac12\mathbf B\cdot\mathbf H$; more generally incremental energy density is $\int\mathbf H\cdot d\mathbf B$ under stated quasistatic/reversible conditions.
4. **Ampère repair:** Divergence of any curl is zero, but continuity says $\nabla\cdot\mathbf J=-\dot\rho$. From Gauss, $\dot\rho=\epsilon_0\nabla\cdot\dot{\mathbf E}$; thus $\mathbf J+\epsilon_0\dot{\mathbf E}$ is divergence-free. A surface slicing the wire counts conduction current $I$; a surface bulging between ideal capacitor plates counts $I_D=\epsilon_0d\Phi_E/dt=I$. Stress it is a term in the field law, not charge crossing vacuum.
5. **Matter/boundary:** Let $\hat n$ run medium 1→2. Pillboxes give $D_{2n}-D_{1n}=\sigma_f$ and $B_{2n}=B_{1n}$. Narrow loops give $\hat n\times(E_2-E_1)=0$ and $\hat n\times(H_2-H_1)=K_f$ for finite fields and ordinary sheet sources. If using component tangents, draw their orientation; a minus sign can enter when converting the cross equation to one chosen tangent.

**Traps:** emf is a loop work/charge, voltage between two points is a potential difference only when the electric field is conservative or a specified path is chosen. $\Phi=LI$ means *flux linkage* (include turns). Faraday's flux rule for a moving loop contains motional and transformer terms; the fixed-loop curl equation addresses transformer field. Do not mislabel displacement current as literal movement of charged particles. In a magnetic material, $\mathbf D$/$\mathbf H$ free-source laws do not replace constitutive relations. Avoid treating $B^2/(2\mu_0)$ as a general material energy density.
