> Research brief: atom codes here predate the final teaching organization. Use `coverage_m*.json` and the printed preparation topic route for final P/M/T/Q codes. Source mapping is finalized in `scope_audit.md`.

# Module III content brief — electromagnetic waves

**Authority:** syllabus units 9–14; Griffiths 5e §§9.1.1, 9.1.2, 9.1.4, 9.2.1–9.2.3, 9.3.1 and §8.1.2 for Poynting theorem. Griffiths source text and `book_notes.md` checked. PYQ mapping pending. The source §9.3.1 is simple linear media: say which constitutive and source assumptions permit each formula.

## Atoms and dependencies

Prerequisites **P1** school wave quantities $\lambda,f,T,v$; **P2** oscillating electric/magnetic fields and Maxwell laws; **P3** energy conservation and power/area. Maths **M1** derivatives of $f(x\mp vt)$ and sine; **M2** vector dot/cross and right-hand direction; **M3** curl–curl identity and one-dimensional simplification; **M4** time average of $\cos^2$; **M5** momentum = energy/speed for vacuum radiation at this level.

| Code | Atomic concept and essential result | Needs | Source |
|---|---|---|---|
| T1 | Right/left traveling wave $f(x\mp vt)$ and fixed-phase direction | P1,M1 | 9.1.1 |
| T2 | One-dimensional wave equation $\partial_x^2 f=v^{-2}\partial_t^2 f$ | T1,M1 | 9.1.1 |
| T3 | Sinusoid $A\cos(kx-\omega t+\phi)$; $k=2\pi/\lambda$, $\omega=2\pi f$, $v=\omega/k$ | T1,P1 | 9.1.2 |
| T4 | Phase and superposition; phase shift as displacement/time delay | T3 | 9.1.2 |
| T5 | Linear polarization means fixed direction of transverse $\mathbf E$ | T3,M2 | 9.1.4 |
| T6 | Circular and elliptical polarization from two orthogonal components with phase difference | T5 | 9.1.4 |
| T7 | Source-free vacuum electric wave equation $\nabla^2\mathbf E-\mu_0\epsilon_0\partial_t^2\mathbf E=0$ | P2,M3 | 9.2.1 |
| T8 | Analogous magnetic wave equation; $c=(\mu_0\epsilon_0)^{-1/2}$ | T7 | 9.2.1 |
| T9 | Plane-wave fields $\mathbf E=\mathbf E_0\cos(\mathbf k\cdot\mathbf r-\omega t)$, $\mathbf B=(1/\omega)\mathbf k\times\mathbf E$ | T7,T8,M2 | 9.2.2 |
| T10 | Transversality $\mathbf k\cdot\mathbf E=\mathbf k\cdot\mathbf B=0$; $\mathbf E\times\mathbf B$ travels along $\mathbf k$ | T9 | 9.2.2 |
| T11 | Vacuum amplitude ratio $E_0/B_0=c$ and $\omega=ck$ | T9 | 9.2.2 |
| T12 | Vacuum energy density $u=\frac12\epsilon_0E^2+B^2/(2\mu_0)$, equal E/B parts in a plane wave | T11,P3 | 8.1.2; 9.2.3 |
| T13 | Poynting vector $\mathbf S=\mathbf E\times\mathbf B/\mu_0$ in vacuum | T12,M2 | 8.1.2 |
| T14 | Poynting theorem $\partial_tu+\nabla\cdot\mathbf S=-\mathbf J\cdot\mathbf E$ | T12,T13 | 8.1.2 |
| T15 | Sinusoidal mean intensity $\langle S\rangle=\epsilon_0cE_0^2/2$ for vacuum plane wave | T11,T13,M4 | 9.2.3 |
| T16 | Vacuum field momentum density $\mathbf g=\mathbf S/c^2$ | T13 | 9.2.3 |
| T17 | Normal-incidence pressure $I/c$ absorption, $2I/c$ perfect reflection | T16 | 9.2.3 |
| T18 | Homogeneous linear, isotropic, nondispersive, source-free medium: $v=1/\sqrt{\mu\epsilon}$; $n=c/v$ | P2,T7 | 9.3.1 |
| T19 | In that medium $B_0=E_0/v$, $E_0/H_0=\sqrt{\mu/\epsilon}$; $\mathbf S=\mathbf E\times\mathbf H$ | T18 | 9.3.1; 8.1.2 |

## Derivation skeletons and checks

1. **Wave derivative:** Show $\xi=x-vt$. Then $\partial_x f=f'(\xi)$ and $\partial_t f=-vf'(\xi)$; second derivatives yield the one-dimensional equation. For $A\cos(kx-\omega t)$, substitute and find $v=\omega/k$. A crest has constant $kx-\omega t$, so $dx/dt=+\omega/k$. This avoids guessing travel direction from a picture.
2. **Maxwell → wave:** In vacuum with $\rho=J=0$, curl Faraday. Apply $\nabla\times(\nabla\times E)=\nabla(\nabla\cdot E)-\nabla^2E$; Gauss removes the first term; Ampère–Maxwell replaces curl $B$. Repeat with curl $B$. Annotate each equation with its reason. Result is speed $c$, not a force on a test charge.
3. **Plane wave geometry:** Choose propagation $+z$, $E=E_0\hat x\cos(kz-\omega t)$, $B=(E_0/c)\hat y\cos(kz-\omega t)$. Compute $\hat x\times\hat y=\hat z$. Check with curl Faraday or Ampère to establish same phase and ratio. Do not draw $E$ or $B$ longitudinally.
4. **Poynting theorem:** Dot Ampère–Maxwell with $E$; dot Faraday with $B/\mu_0$; subtract using $\nabla\cdot(E\times B)=B\cdot(\nabla\times E)-E\cdot(\nabla\times B)$. Collect the time derivatives into $u$ and identify $J\cdot E$ as power to charges. Integrate over a volume to show outward flux plus energy decrease equals work to charges. In simple linear nondispersive media, $u=\tfrac12(E\cdot D+B\cdot H)$ and $S=E\times H$ under the stated assumptions; **do not make this energy formula universal for dispersive, nonlinear or lossy media**.
5. **Energy and momentum:** Vacuum plane wave $u_E=u_B$ because $B=E/c$ and $c^{-2}=\mu_0\epsilon_0$. Then $S=cu$ and mean of cosine squared is $1/2$. For normally incident light, absorbed momentum flux is $I/c$, reflected momentum changes twice as much.
6. **Linear medium:** With $D=\epsilon E$, $B=\mu H$ and constant scalar $\epsilon,\mu$, repeat the curl–curl derivation to find $v$. Tangential frequency stays fixed across a stationary interface; wavelength changes to $v/f$. $B=E/v$, while the *wave impedance* is $E/H=\mu v=\sqrt{\mu/\epsilon}$.

**Worked checks:** $E_0=100$ V/m vacuum → $B_0=3.34\times10^{-7}$ T, $I=\epsilon_0cE_0^2/2\approx13.3$ W/m². If $\epsilon_r=4,\mu_r=1$ in an ideal nondispersive medium, $v=c/2$, $\lambda_{med}=\lambda_0/2$ and $B_0=2E_0/c$ at equal chosen $E_0$; do not claim unchanged amplitude across an interface, where reflection matters.

**Traps:** Keep $E_0$ (peak) distinct from RMS field; pressure uses *mean* intensity for time-averaged force. Polarization refers to $E$, not $B$ or travel direction. Do not overgeneralize $g=S/c^2$ or $I/c$ from vacuum to arbitrary media without discussing material momentum. The prescribed §9.3.1 warrants simple linear-media propagation, not general absorbing/dispersion theory.
