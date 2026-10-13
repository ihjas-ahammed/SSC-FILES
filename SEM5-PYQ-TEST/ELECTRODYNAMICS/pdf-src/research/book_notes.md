# Electrodynamics II: book research notes

Source checked: CU FYUGP BSc Physics Honours syllabus, course PHY4CJ203, Semester V, PDF pp. 97–103. The uploaded Griffiths source is explicitly *Introduction to Electrodynamics*, 5th ed. (2024), 628 PDF pages. The syllabus was published as 2024, so the assigned 5th-edition pagination matches. Murugeshan source is titled *Electricity and Magnetism*, 10th ed. in the filename; PDF front matter is consistent with R. Murugeshan / S. Chand. It has 485 PDF pages; contents give printed chapter pagination.

## Syllabus coverage and source map

| Module | Syllabus content | Assigned text anchors |
|---|---|---|
| I. Electric and magnetic fields in matter (12 h, 16 marks) | Polarization; field of polarized body; D and boundary conditions; linear dielectric parameters; magnetization; field of magnetized body and physical bound-current interpretation; Ampère law in matter; susceptibility/permeability; ferromagnetism. | Griffiths 5e ch. 4: §§4.1.1–4.1.4 pp.166–171; §4.2.1 pp.172–175; §4.2.2 pp.175–178; §4.3.1 pp.181–183; §4.3.3 pp.184–185; §4.4.1 pp.186–193. Ch. 6: §§6.1.1–6.1.4 pp.268–276; §§6.2.1–6.2.3 pp.276–281; §6.3.1 pp.281–285; §§6.4.1–6.4.2 pp.286–294. |
| II. Electrodynamics (12 h, 18 marks) | Ohm law, emf and motional emf; Faraday law and induced E; inductance and magnetic field energy; pre-Maxwell electrodynamics, displacement current, Maxwell equations in matter and boundaries. | Griffiths 5e ch. 7: §§7.1.1–7.1.3 pp.298–316; §§7.2.1–7.2.4 pp.316–335; §§7.3.1–7.3.3 pp.335–341; §§7.3.5–7.3.6 pp.342–347. Note syllabus omits §7.3.4 Magnetic Charge. |
| III. Electromagnetic waves (8 h, 18 marks) | 1D and sinusoidal waves, polarization; E/B wave equations; monochromatic plane waves; Poynting theorem; energy and momentum; propagation in linear media. | Griffiths 5e §§9.1.1–9.1.2 pp.390–396; §9.1.4 pp.399–401; §9.2.1 pp.401–402; §9.2.2 pp.402–406; §9.2.3 pp.406–408; §9.3.1 pp.408–410; plus §8.1.2 Poynting theorem pp.363–367. |
| IV. Transient circuits and alternating currents (13 h, 18 marks) | LR/CR/LC transients; rotating-coil emf; pure R/L/C AC; j operator; LR/CR/parallel LC; series LCR; AC power. | Murugeshan 10e ch. 12, “Transient Currents (Varying Currents),” printed pp.311–328; ch. 13, “Alternating Current,” pp.329–379. Syllabus specifies §§12.1, 12.3, 12.5, 13.1–13.3, 13.5. The local scan's extracted contents confirms chapter pagination, but numbered subsection headings are not text-searchable in this scan; retain these syllabus subsection IDs and chapter page spans rather than inventing per-section page boundaries. |
| V. Practicals (30 h) | Choose six experiments (one among 1–4 and five among 5–14) plus instructor-selected/additional experiment; includes induction, dropping magnet, BG methods, mutual inductance, capacitor/dielectric, Brewster, transients, AC phase and LCR resonance. | Syllabus pp.99–102. Cited Griffiths and simulation resources are reproduced in the syllabus; this kit can use its own lab notes. |

## Compact derivation skeletons / checks

### I. Matter

- Polarization P is dipole moment per volume. For a small volume element, the dipoles' interior charge cancels; integrating by parts in the potential of a polarized body yields equivalent bound charge densities `rho_b = -div P` and `sigma_b = P·n_hat`. Sign check: a uniformly polarized slab has positive bound charge on the face where P points outward.
- Gauss law with total charge separates free from bound charge: `div(epsilon0 E)=rho_f+rho_b`; since `rho_b=-div P`, define `D=epsilon0 E+P`, giving `div D=rho_f`. Integral form gives flux D = free charge enclosed. At a pillbox interface, `n·(D2-D1)=sigma_free`; an infinitesimal loop in electrostatics gives `n×(E2-E1)=0`.
- Linear isotropic dielectric: `P=epsilon0 chi_e E`, so `D=epsilon E`, `epsilon=epsilon0(1+chi_e)=epsilon0 epsilon_r`. Do not apply scalar epsilon to anisotropic/nonlinear media.
- Magnetization M is dipole moment per volume. The corresponding bound currents are `J_b=curl M` and `K_b=M×n_hat`; note syllabus requests physical interpretation only, so emphasize microscopic current loops cancel in bulk except where M varies or at a surface.
- Write `B=mu0(H+M)` and use `curl H=J_f` (Ampère-Maxwell in time-varying case includes `dD/dt`). At a boundary `n·(B2-B1)=0`, `n×(H2-H1)=K_free`; relation for `B` tangential includes surface bound current, so do not incorrectly set it continuous.
- Linear magnetic response: `M=chi_m H`, hence `B=mu H`, `mu=mu0(1+chi_m)=mu0 mu_r`. Diamagnets have small negative chi, paramagnets positive small chi, ferromagnets large nonlinear/hysteretic response with domains; the linear relation is only a limited approximation.

### II. Induction and Maxwell

- Microscopic Ohm law `J=sigma E` for a stationary conductor (more generally `J=sigma(E+v×B)`). Current is not the emf: `emf=integral f_non-electrostatic·dl`; terminal voltage and emf coincide for an ideal source but differ with internal resistance under load. Power check `P=VI=I²R=V²/R`.
- Motional emf: magnetic Lorentz force per charge on a moving wire is `v×B`; integrate along the circuit. Example geometry (straight rod length `l`, speed `v` perpendicular to uniform B and rod): `|emf|=Blv`, and for resistance R, `I=Blv/R`; magnetic drag `F=IlB`, giving `Fv=I²R`, an energy conservation check.
- Faraday law for stationary loop: `integral E·dl=-dPhi_B/dt`; Stokes theorem gives `curl E=-partial_t B`. Include minus sign as Lenz law. Moving-loop flux rule combines transformer and motional contributions; mention loop orientation convention.
- Inductor: `Phi=LI`, `emf=-L dI/dt`; mutual `emf_2=-M dI_1/dt`, with reciprocity `M12=M21`. Energy delivered against back emf: integrate `L I dI` from 0 to I to get `U=1/2 L I²`; field form in vacuum `integral B²/(2mu0) dV` (and in linear material use care about constitutive assumptions).
- The inconsistency: divergence of magnetostatic Ampère law and continuity equation conflict for charging capacitor. Add displacement current `I_D=epsilon0 dPhi_E/dt`, so `curl B=mu0 J+mu0 epsilon0 partial_t E`; for parallel plate capacitor, `I_D=epsilon0 A dE/dt=dQ/dt=I` when fringing ignored. General form in matter: `curl H=J_f+partial_t D`.
- Maxwell vacuum/matter set: `div D=rho_f`, `div B=0`, `curl E=-partial_t B`, `curl H=J_f+partial_t D`. Boundary jumps follow pillbox/loop integrals: normal D jumps by free surface charge; normal B continuous; tangential E continuous; tangential H jumps by free surface current.

### III. Waves

- In source-free vacuum, take curl of Faraday: `curl curl E=-partial_t(curl B)`. Use `curl curl E=grad div E - laplacian E`, `div E=0`, and `curl B=mu0epsilon0 partial_t E`; obtain `laplacian E-mu0epsilon0 partial_t² E=0` (same for B), speed `c=1/sqrt(mu0epsilon0)`.
- Plane wave `E=E0 cos(k·r-omega t+phi)`, `B=(1/omega) k×E`; hence E, B, k mutually perpendicular, `E/B=c`, and `omega=ck`. A sign sanity check: for propagation +z and E along +x, B is +y.
- Polarization describes tip of E at a fixed location: linear for fixed direction, circular for equal perpendicular components in quadrature, elliptical generally. Distinguish polarization from propagation direction.
- Poynting theorem follows dotting Ampère-Maxwell with E, Faraday with B/mu0, subtracting and applying `div(E×B)` identity: `partial_t u + div S = -J·E`, where `u=epsilon0 E²/2+B²/(2mu0)`, `S=E×B/mu0`. For plane wave cycle-averaged intensity `I=<S>=E0²/(2mu0 c)=c epsilon0 E0²/2`.
- EM momentum density in vacuum is `g=S/c²`; radiation pressure is intensity/c for perfect absorption, twice that for ideal reflection. Linear medium: source-free linear constitutive fields give wave speed `v=1/sqrt(mu epsilon)` and refractive index `n=c/v=sqrt(epsilon_r mu_r)`; nonmagnetic optical material approximates `n≈sqrt(epsilon_r)`.

### IV. Circuits (Murugeshan alignment)

- First-order RC charging: KVL `E=q/C+R dq/dt`, `q(t)=CE(1-exp(-t/RC))`, `i=(E/R)exp(-t/RC)`; discharge `q=q0 exp(-t/RC)`. At `t=tau=RC`, charge reaches 63.2% of final (or decays to 36.8%). RL growth `i=(E/R)(1-exp(-tR/L))`; decay `i=i0 exp(-tR/L)`; `tau=L/R`.
- Ideal LC oscillation: `L q''+q/C=0`, `omega0=1/sqrt(LC)`, energy swaps between `q²/(2C)` and `L i²/2`. For real resistance, damping changes the response; syllabus labels LC growth/decay as relevant portions, so do not imply a monotonic exponential current as in RC/RL.
- Rotating N-turn coil: `Phi=NBA cos(omega t)`, `e=-dPhi/dt=NBA omega sin(omega t)`; peak `E0=NBA omega`. Angle choice changes sine/cosine phase only.
- Sinusoidal steady state using `j` as imaginary unit: `Z_R=R`, `Z_L=j omega L`, `Z_C=1/(j omega C)=-j/(omega C)`. Reactance magnitudes `X_L=omega L`, `X_C=1/(omega C)`. For series RLC, `Z=R+j(omega L-1/(omega C))`; `I=V/Z`, phase `tan(phi)=(X_L-X_C)/R`; resonance `omega0=1/sqrt(LC)` and current is in phase with source. Parallel ideal L and C cancel susceptance at resonance; avoid using series formula for it.
- Average real power: `P_avg=V_rms I_rms cos(phi)`. Pure resistor `cos phi=1`; ideal L/C average zero over a cycle. For a source `v=V0 cos omega t` and `i=I0 cos(omega t-phi)`, averaging gives `V0 I0 cos(phi)/2`.

## Recomputed illustrative checks

These are freshly computed examples for the kit, not copied textbook answers.

1. Motional rod with `B=0.50 T`, `l=0.20 m`, `v=3.0 m/s`, `R=2.0 ohm`: `emf=0.30 V`, `I=0.15 A`, magnetic drag `IlB=0.015 N`; mechanical power `Fv=0.045 W` equals `I²R=0.045 W`.
2. RC with `R=10 kohm`, `C=100 microF`, `E=5.0 V`: `tau=1.0 s`; after 1 s, charging capacitor voltage `5(1-e^-1)=3.16 V`, current `0.184 mA`.
3. Series RLC with `R=40 ohm`, `L=0.20 H`, `C=50 microF`: `omega0=316 rad/s` (50.3 Hz); at resonance with 12 V rms, `I_rms=0.300 A`, average power `I²R=3.60 W`.
4. Vacuum plane wave with `E0=100 V/m`: average intensity `epsilon0 c E0²/2 = 13.3 W/m²`; `B0=E0/c=3.34e-7 T`.

## Prerequisites and caution points

The syllabus lists Electrodynamics I as prerequisite. The derivations assume vector calculus (Gauss/Stokes, divergence/curl identities), electrostatic boundary conditions, Biot–Savart/Ampère law, Lorentz force, and elementary ODEs/complex numbers. Keep `rho` (volume charge density) distinct from resistivity; use `J` for current density, `I` for current, `E` for field and emf only with a calligraphic symbol; state whether phasors are peak or RMS. In matter, qualify field-energy formulae and constitutive assumptions. The specified Griffiths subsection list is selective; avoid teaching omitted topics as examinable core.
