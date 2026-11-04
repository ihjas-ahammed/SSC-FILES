# M4 POLARISATION brief (Ghatak ch22 + 24.5; "B2" = Book 2 Subrahmanyam/Brij Lal, not in Ghatak, content from standard physics)
Conventions: o = ordinary, e = extraordinary, no/ne = principal indices; calcite (neg.) no=1.658, ne=1.486 (589 nm; Ghatak 1.65836/1.48641); quartz (pos.) no=1.544, ne=1.553; Canada balsam nb=1.55. Handedness rule (Ghatak, wave +z, Ex=a cos wt, Ey=b cos(wt-th)): 0<th<pi right (RCP/REP); pi<th<2pi left; Ex=a cos wt,Ey=a sin wt = RCP (Ex19, Fig22.19). Direction of propagation reverses the label; always state convention.

## 1. ATOMIC CONCEPTS
K01 | Polarisation, transverse nature, states | E ⟂ k; linear(plane)/circular/elliptical/unpolarised(random E on time << detection, >> 1/nu)/partial; slit-on-string shows transverse (sound can't polarise); plane of vibration (E) vs plane of polarisation (⟂ it, contains B) | G§22.1 | P01,P02
K02 | EM plane wave | Ex=E0cos(kz-wt),Hy=H0cos(kz-wt); k=w/v; v=1/√(εμ); H0=nE0/η0, η0=√(μ0/ε0)≈120π Ω; propagation ∥ E×H | G(22.4-22.8) | P10
K03 | Polariser, analyser, pass axis | Polaroid: aligned iodine polymer chains absorb E ∥ chains (Joule); wire grid: spacing < λ, absorbs E ∥ wires, passes E ⟂ wires; pass axis = E-direction of emergent beam | G§22.3.1 | K01
K04 | Malus law | I=I0cos²θ; amplitude E0cosθ; 0°→I0, 45°→I0/2, 90°→0; 2 max, 2 min per 360° | G(22.9) | K03,P04
K05 | Unpolarised through polariser; chains | unpol→I0/2 (any angle); then Malus between CONSECUTIVE axes; P=(Imax−Imin)/(Imax+Imin) | G Pr22.10; map c.4.3.2 | K04
K06 | Crossed polaroids + middle one | I=(I0/2)cos²θ·sin²θ=(I0/8)sin²2θ; max I0/8 at 45°; without middle: 0 | G Pr22.10,B2 | K05
K07 | Parallel-E superposition | a²=a1²+a2²+2a1a2cos(θ1−θ2), same axis, linear | G(22.11-15) | P06
K08 | Perpendicular SHMs → ellipse | Ex=a cos wt,Ey=b cos(wt−θ): Ex²/a²+Ey²/b²−2ExEy cosθ/(ab)=sin²θ; θ=mπ line Ex/Ey=±a/b (tan φ=±a/b from y-axis); θ=±π/2,a=b circle; θ=±π/2,a≠b ellipse on axes; else tilted ellipse | G(22.18-22.22); map c.4.1.2 | K01,P09,P06
K09 | Ellipse axes tilt | tanα... standard: tan2ψ=2ab cosθ/(a²−b²) (ψ from x-axis); G prints (22.35) tan2α=2ab cosθ/(b²−a²) with ξ-axis at −α from x (Eξ=Ex cosα−Ey sinα) = same result; a=b→axes at 45°; semi-axes E1/E2=tan(θ/2) for a=b (Ex 22.5: π/3→0.577, 2π/3→1.732, 4π/3→−1.732, 5π/3→−0.577; π/2→1); E1²+E2²=a²+b² | G(22.28-22.35) | K08
K10 | Handedness | see convention line; Ghatak Fig22.19: θ=0 LP +45°, π/3 REP, π/2 RCP, 2π/3 REP, π LP −45°, 4π/3 LEP, 3π/2 LCP, 5π/3 LEP | G Fig22.19 | K08
K11 | Methods of producing linear light | reflection, pile of plates, dichroism (tourmaline: unequal absorption of o,e), double refraction+Nicol, scattering, Polaroid/wire grid | G§22.3 | K01
K12 | Brewster law | tanθp=n2/n1; θ1+θ2=90°; reflected ⟂ refracted; reflected E ⟂ plane of incidence, transmitted partial; r∥=0; air-water 53°, glass 1.5→56.3°; glass in water: 48.4° | G(22.10),(24.55-24.57) | P07,K01
K13 | Pile of plates & Brewster window | many plates at θp: ⟂ comp. reflected away (R⊥≈15%/surface for n=1.5) → transmitted ≈ fully polarised in plane of incidence; Brewster window (gas-laser tube end, tilted at θp) transmits p-light with zero loss | G Fig22.9b; B2 | K12
K14 | Scattering polarisation | beam scattered at 90° linearly polarised; dipole can't radiate along its axis; blue sky, Barkla (X-rays transverse) | G§22.3.4 | K01
K15 | Double refraction | anisotropic crystal (calcite, quartz) splits beam into o (obeys Snell, undeviated at normal inc.) and e (not Snell in general); both plane polarised, mutually ⟂; rotate crystal → e-ray circles o-ray | G§22.5 | K01,P07
K16 | Optic axis, uniaxial; principal section | direction (not a line) where vo=ve; uniaxial/biaxial; principal section = plane through optic axis ⟂ a face pair (B2); o vibration ⟂ principal section, e vibration in it (when plane of incidence = principal section); D·k=0 both; o: D⟂axis; e: D in plane(k,axis) | G(22.42-44); B2 | K15
K17 | Velocities | vo=c/no all directions; 1/ve²=sin²θ/(c/ne)²+cos²θ/(c/no)² (θ from axis); n_re=√(no²cos²θ+ne²sin²θ); neg crystal ne<no (calcite, ve>vo, e-surface outside sphere); pos ne>no (quartz, inside) | G(22.36-22.41),(22.45) | K16
K18 | Wave surfaces | o: sphere radius c/no; e: ellipsoid of revolution, semi-axes c/no along axis, c/ne ⟂ axis; touch on axis | G Fig22.22 | K17,P09
K19 | Huygens construction | each point of crystal surface emits sphere (o) + ellipsoid (e) in time t; common tangent planes = o and e wavefronts; ray = source point→tangency point (e-ray ≠ wave-normal in general) | G§22.5.1-2 | K18,P08
K20 | Huygens special cases | (a) axis ∥ surface, normal inc.: same direction, different speeds (basis of wave plates); (b) axis ⟂ surface, normal inc.: no splitting, speed c/no; (c) axis oblique, normal inc.: e deviates, o straight; (d) oblique inc., axis in plane of incidence ∥ surface; (e) oblique, axis ⟂ plane of incidence; wavefronts coincide in direction when axis ∥ or ⟂ ... (Ghatak Fig22.24a,b,c; B2 lists) | G Fig22.24-25; B2 | K19
K21 | Refraction laws | o: sin i/sin r=no; e, axis ⟂ plane of incidence: sin i/sin r=ne; axis in surface & plane of incidence: tan ro/tan re=no/ne (derived below) | G(22.46-47), Pr22.29 | K19,P07
K22 | Nicol prism | calcite rhombus (length:breadth ≈3:1) end faces ground 71°→68°, cut along diagonal ⟂ new faces, cemented Canada balsam (1.55): ne(1.486)<nb<no(1.658); o-ray incidence on balsam > critical angle C=sin⁻¹(1.55/1.658)=69.2° → TIR, absorbed by blackened side; e passes (never TIR); field ≈28°; as analyser 2 extinctions/360° | G Fig22.15 (48°,68°,71°,90° printed); B2 details | K16,P07
K23 | Wollaston, Rochon | Wollaston: 2 prisms, axes ⟂ (∥ edge & ∥ face), two diverging beams, calcite 20° → 7.18°; Rochon: axis1 ⟂ face, o undeviated, e deviates | G§22.10-11 (out of strict scope) | K22
K24 | Retardation plate | plate cut ∥ axis; components ⟂/∥ axis in phase on entry; θ=(ω/c)(no−ne)d=2π(no−ne)d/λ0; fast axis = lower index | G(22.48-22.50) | K17,K08
K25 | QWP, HWP, full wave | QWP: θ=π/2, d=λ0/4|no−ne| (odd multiples (2m+1)λ/4|Δn|); HWP: θ=π, d=λ0/2|Δn|; θ=2π,4π: unchanged | G(22.52-53) | K24
K26 | Action of plates | QWP with linear at 45°: circular (else elliptical, axes ∥ plate axes); QWP: circular→linear; HWP: linear at φ→−φ (rotated 2φ; 45°→90° rotation); HWP: RCP↔LCP; calcite QWP at 45°→LCP (G Ex22.6) | G§22.6, Fig22.26-27 | K25
K27 | Plate between crossed polaroids | I=I1 sin²2φ sin²(θ/2), I1=after P1 (φ=axis angle to P1) | G Pr22.11-14 | K26,K05
K28 | Production of linear/circular/elliptical | linear: polariser (K11). circular: polariser+QWP axis at 45° to its pass axis (equal amplitudes, θ=π/2). elliptical: QWP at other angle (≠0,90,45), or non-QWP plate | G§22.6; B2 | K26
K29 | Analysis of polarised light | analyser rotated: 2 extinctions→linear; constant I→unpol/circ/mix: QWP then analyser: constant→unpol, 2 extinctions→circ, no extinction→mix; varying no extinction→ellip/lin+unpol/ellip+unpol: QWP axis ∥ analyser at Imax: 2 extinctions→elliptical; no extinction & Imax same place→lin+unpol; Imax elsewhere→ellip+unpol | G§22.7, Pr22.19 | K28,K05
K30 | Optical activity | linear = RCP+LCP equal; nL≠nR; E=2E0cos[½(kL−kR)z]cos(...) → linear, rotated by φ=½(kL−kR)z=(π/λ)(nL−nR)z; nL>nR dextro (clockwise, looking toward source); nL<nR laevo; ∝ path and concentration | G(22.56-22.58) | K10,K24
K31 | Specific rotation | G: ρ=(π/λ0)(nl−nr) rad/unit length (quartz 3.79 rad/cm at 5893 Å=21.7°/mm); B2/Biot: [α]=θ/(l c), l in dm, c in g/cm³, T,λ stated (≈1/λ²); sugar solution concentration by rotation | G§22.16.1; B2 | K30
K32 | Laurent half-shade polarimeter (B2/not in Ghatak) | source(Na)+collimating lens→polariser→half-shade plate (half-wave plate over half of disc, other half glass)→sample tube→analyser+telescope; polariser axis at small half-shade angle ε to plate axis → two halves vibrate at ±ε about the axis; I1∝sin²(ε−x),I2∝sin²(ε+x); equal at balance (x=0); sample rotates both by α → analyser turned by α to restore equality = rotation; narrow equal-darkness match sensitive to ~0.01°; c=α/([α]l) | B2 (standard) | K31,K25

## 2. DERIVATION SKELETONS
D1 Malus: (1) P1 passes E0 along x; (2) P2 axis at θ; (3) component E0cosθ; (4) I∝E²→I=I0cos²θ.
D2 Brewster (G24.5): (1) r∥=(n2cosθ1−n1cosθ2)/(n2cosθ1+n1cosθ2)=0 (24.49); (2) n2cosθ1=n1cosθ2; (3) Snell n1sinθ1=n2sinθ2; (4) divide: sinθ1cosθ1=sinθ2cosθ2 → sin2θ1=sin2θ2; (5) θ1≠θ2 (n1≠n2) so 2θ1=π−2θ2; (6) θ1+θ2=90°; (7) sinθ2=cosθ1 → n1sinθ1=n2cosθ1; (8) tanθp=n2/n1. Reflected⟂refracted: angle between = 180°−θ1−θ2 =90° (Pr22.9). Alt (dipole): refracted E∥ dipoles vibrate along reflected direction, can't radiate along axis.
D3 Ellipse: Ex=a cos wt, Ey=b cos(wt−θ) → (1) cos wt=Ex/a; (2) Ey/b=cos wt cosθ+sin wt sinθ; (3) sin wt=√(1−Ex²/a²); (4) (Ey/b−Ex cosθ/a)²=sin²θ(1−Ex²/a²); (5) expand: Ex²/a²+Ey²/b²−2ExEy cosθ/(ab)=sin²θ. Cases: θ=0: Ey=(b/a)Ex (+), θ=π: −(b/a)Ex (G(22.20-22)); θ=π/2: Ex²/a²+Ey²/b²=1 (ellipse; circle a=b, x²+y²=a²); a=b,θ general: axes 45°, E1/E2=tan(θ/2).
D3b G's route (22.25-35): (1) axes ξη at α: Eξ=E1cos(wt−φ),Eη=E2 sin(wt−φ), (Eξ/E1)²+(Eη/E2)²=1; (2) rotate (22.28-29); (3) match coefficients of cos wt, sin wt → (22.30-33); (4) square-add E1²+E2²=a²+b²; (5) ratio → tan2α=2ab cosθ/(b²−a²).
D4 Wave plate (22.48-52): (1) incident linear at φ to y(axis ∥y): Ex=E0sinφ (o), Ey=E0cosφ (e), in phase; (2) in crystal o phase no kd, e phase ne kd (k=2π/λ0); (3) relative phase θ=kd(no−ne)=2πd(no−ne)/λ0; (4) QWP θ=π/2⇒d=λ0/4(no−ne); (5) HWP θ=π⇒d=λ0/2(no−ne); (6) general (2m+1)λ0/4|Δn| (QWP), (2m+1)λ0/2|Δn| (HWP); path difference Δ=|Δn|d=λ/4 or λ/2 equivalently. For φ=45°,θ=π/2: Ex=(E0/√2)sin wt,Ey=(E0/√2)cos wt, Ex²+Ey²=E0²/2 circle (G(22.51) calls LCP). HWP: Ex=−(E0/√2)cos wt, Ey=+: line at 135° (rotated 2φ=90°).
D5 Circular/elliptical production: (1) polariser→linear; (2) QWP axis at 45° to it: equal amplitudes, θ=π/2 → circle; (3) other angle φ: amplitudes E0sinφ,E0cosφ, θ=π/2 → Ex²/(E0sinφ)²+Ey²/(E0cosφ)²=1 axes along plate axes.
D6 Analysis: use K29 branches; each justified by QWP turning circular/elliptical (axes ∥ plate) into linear, unpolarised unchanged.
D7 Crossed/3 polaroids: unpolarised I0 → P1: I0/2 → middle at θ: (I0/2)cos²θ → P3 at 90°−θ: ×cos²(90°−θ)=sin²θ → (I0/8)sin²2θ; θ=45°: I0/8.
D8 Plate between crossed polarisers (Pr22.12,14): (1) after P1 amplitude A (I1=I0/2); (2) plate axis at φ: A cosφ (e), A sinφ (o); (3) analyser ⟂ P1 projects: A sinφ cosφ and −A sinφ cosφ with extra phase θ: amplitude A sinφcosφ(1−e^{iθ}); (4) I=I1 sin²2φ sin²(θ/2). QWP φ=45°: I1/2=I0/4. HWP φ=45°: I1=I0/2. HWP φ=15°: I0/2·sin²30°·1=I0/8. QWP rotated: I=(I0/2)sin²2φ·½ (max I0/4 at 45°, zero at 0°,90°); HWP rotated: (I0/2)sin²2φ.
D9 e-ray velocity (G(22.37-39)): (1) ellipse z²/a²+x²/b²=1, a=c/no (axis z), b=c/ne; (2) z=ρcosθ,x=ρsinθ; (3) 1/ρ²=cos²θ/a²+sin²θ/b²; ρ=ve.
D10 Huygens normal incidence (G Fig22.23): (1) plane wavefront AB on surface; (2) from points on surface draw spheres radius (c/no)t and ellipsoids semi-axes (c/no)t along axis,(c/ne)t ⟂; (3) common tangent plane to spheres = o front, ray = point→tangent contact; (4) same for ellipsoids = e front; (5) both wave normals along k, e ray deviates unless axis ∥ or ⟂ surface; o D ⟂ plane of paper (dots), e D in plane (lines). Oblique (Fig22.25): tangent from F (the far end of wavefront at time t) to circle & ellipse.
D11 Pr22.29 tan ro/tan re=no/ne (axis ∥ surface, in plane of incidence; Huygens, tangent from (L,0)): (1) o-circle radius a=vot: sin ro=a/L (Snell), tan ro=a/√(L²−a²); (2) e-ellipse semi-axis a along surface, b=vet normal to it: tangent at (x0,z0): x0x/a²+z0z/b²=1 through (L,0): x0=a²/L; z0=b√(1−a²/L²); (3) tan re=x0/z0=a²/(b√(L²−a²)); (4) tan re/tan ro=a/b=vo/ve=ne/no ⇒ tan ro/tan re=no/ne.
D12 Optical activity (G Fig22.28): (1) RCP Ex=E0cos(kRz−wt),Ey=−E0 sin(kRz−wt); LCP with +; (2) add: Ex=2E0cos[½(kL−kR)z]cos(wt−θ(z)), Ey=2E0 sin[½(kL−kR)z]cos(wt−θ(z)), θ(z)=½(kL+kR)z; (3) fixed ratio Ey/Ex=tanφ(z)→linear; (4) φ=½(kL−kR)z=(π/λ)(nL−nR)z; (5) specific rotation [α]=θ/(l c) (Biot).
D13 Laurent (B2): (1) half of field passes plate: vibration reflected about plate axis → ±ε directions; (2) analyser at x from "crossed with bisector": I1=I0sin²(ε−x), I2=I0 sin²(ε+x); (3) x=0 equal; (4) active sample rotates plane by α: analyser rotation to re-balance = α; (5) [α]=α/(l c).
D14 Nicol (B2): (1) unpolarised enters, splits o (no=1.658),e (ne=1.486); (2) at balsam (1.55) o goes dense→rare: sinC=1.55/1.658, C=69.2°; o incidence ≈ 77° > C → TIR; (3) e: ne<1.55 → passes; (4) emerges linear, E in principal section.
D15 Specific rotation from Fresnel: rotation per unit length ρ=(π/λ0)(nl−nr) (G(22.184)); Biot: θ=[α] l c (l dm, c g/cm³).

## 3. WORKED EXAMPLES (given → answer)
W1 G Ex22.1 θ=π/2,a=b: Ex²+Ey²=a²: RCP. Ex22.2 θ=3π/2: LCP. Ex22.3 θ=π/3: REP (t=0:(a,a/2); π/3w:(a/2,a); π/2w:(0,0.866a); π/w:(−a,−a/2)); Ex22.4 2π/3: REP; Ex22.5 table in K09.
W2 G Pr22.1 answers: (a) linear, (b) RCP (wave along −z), (c) LCP, (d) LEP. (c) check: phase diff π/2, equal amp.
W3 G Pr22.3 quartz HWP 5890 Å (Δn=0.00911): d=5.89e-7/(2×0.00911)=32.3 μm (printed 32.34).
W4 G QWP calcite 5893 Å: d=5.893e-7/(4×0.17195)=8.57e-7 m=0.000857 mm.
W5 G Ex22.7 LCP, calcite d=0.005141 mm: θ=2π(0.17195)(5.141e-6)/5.893e-7=3π (=6 QWP thick): RCP. Ex22.8 LCP, quartz d=0.022 mm, Δn=0.00911: θ=2π(0.00911)(2.2e-5)/5.893e-7=0.68π: right elliptical.
W6 Pr22.5 Brewster glass 1.5 in water 4/3: tan⁻¹(1.125)=48.4°. Air-water: tan⁻¹1.33=53.1°; air-glass 1.5: 56.3°.
W7 Pr22.10 three polaroids 45°: I0/8; Pr22.12 QWP (axis 45°) between crossed: I0/4; HWP: I0/2. Pr22.14: ½,½,⅛ (HWP rotates polarisation 30°, then 60° to P2: ½cos²60°).
W8 Pr22.4 RCP + calcite HWP: θ=π adds π between components → LCP (Ex=sin,Ey=cos ↔ Ex→−Ex).
W9 Pr22.13 calcite QWP at 4046 Å: Δn=0.18440, d=4.046e-5/(4×0.1844)=5.49e-5 cm (printed). At 7065 Å Δn=0.16848: θ=2π(0.16848)(5.485e-5)/7.065e-5=0.82 rad=47° (not 90°): LCP→left elliptical, axes at 45° to plate axes, minor/major=tan(21.5°)≈0.39.
W10 Pr22.21a calcite axis 20°, normal inc.: tanψ_ray=(no²/ne²)tan20°=1.241×0.364=0.452→24.31°; deviation 4.31° (printed). Wollaston (calcite 20°): r1=22.43°, θ1=3.61°, θ2=3.57°, total 7.18°.
W11 Pr22.8 S–k angle: KDP 1.56°, LiNbO3 2.25° (printed; need Table).
W12 Optical activity numbers (G): quartz |Δn|=7e-5,z=0.1 cm,6000 Å: φ=π(7e-5)(0.1)/6e-5=7π/60=21°; turpentine 37° at 10 cm.
W13 PYQs: N19-Q30/N22-Q30: ne=1.54,no=1.53,λ=5500 Å: d=5.5e-7/(4×0.01)=1.375e-5 m=13.75 μm. N20-Q28 quartz 5000 Å (Δn=0.009): QWP 5e-7/0.036=13.89 μm; HWP 27.78 μm. N25-Q17 589 nm: 5.89e-7/0.036=16.36 μm. N25-Q16: 1/ve²=½(1/(2.02e8)²+1/(1.81e8)²)→ve=1.906e8 m/s (note: 1.81e8=c/no is the speed ALONG axis (o and e equal there); 2.02e8=c/ne ⟂ axis; check n: no=1.656,ne=1.485).
W14 Sugar: sucrose [α]=+66.5° dm⁻¹(g/mL)⁻¹; 5 g/100 mL, 1 dm: 3.3°.

## 4. PREREQ ATOMS
P01 | Wave y=a cos(kz−ωt+φ); k=2π/λ; ω=2πν; v=ω/k | NCERT XI 14.2 | K01,K02,K08
P02 | Transverse vs longitudinal; light transverse | XI Ch14, XII Ch10 §10.7 | K01
P03 | Phase diff Δφ=2πΔ/λ (path Δ) | implicit XII Ch10 | K24,K25
P04 | I∝a² (amplitude²) | XII Ch10 §10.4 | K04
P05 | SHM x=A cos(ωt+φ); phase constant | XI Ch13 | K08
P06 | cos(A−B)=cosAcosB+sinAsinB; cos2x=2cos²x−1; sin2x=2sinx cosx; sin²+cos²=1; sinA+sinB=2sin½(A+B)cos½(A−B) (not verified in NCERT) | XI Maths §3 | K06,K08,K30
P07 | Snell n1sin i=n2sin r; n=c/v; TIR: sinC=n2/n1 (n1>n2) | XII Ch9 | K12,K21,K22
P08 | Huygens principle: wavefront = envelope of secondary wavelets | XII Ch10 §10.2 | K19
P09 | Ellipse x²/a²+y²/b²=1; circle; polar form | XI Maths §10.5.3 | K08,K18
P10 | EM wave: E⊥B⊥propagation; c=1/√(μ0ε0); B0=E0/c | XII Ch8 | K02
P11 | Phasor/complex sum (Euler e^{iθ} not in NCERT) | XI Maths Ch4 | D8
P12 | Polaroid: pass axis, 50% through first; I=I0cos²θ; Brewster NOT in NCERT | XII Ch10 §10.7 | K03-K05
P13 | Unit conversions Å=1e-10 m, nm=1e-9, μm; deg↔rad; dm=10 cm | — | W*
P14 | Dipole radiates nothing along its axis | not in NCERT (flag) | K12,K14
P15 | Class 10 reflection law; incident, reflected, normal coplanar; angle of incidence from normal | Cl.10 | K12

## 5. PYQ MAP
- N19-Q8 (1) T/F o,e rays plane polarised [true] → K15,K16
- N22-Q9 (1) T/F negative uniaxial: vo<ve [true, except along axis equal] → K17,K18
- N24-Q10 (2) define polarisation → K01
- N20-Q5 (1) specific rotation → K31 ; N25-Q7 (2) optical activity → K30
- N20-Q16 (2) HWP; N22-Q23 (4) notes QWP & HWP → K24,K25,K26
- N20-Q17 (2) Brewster law & window → K12,K13
- N24-Q9 (2) Huygens explanation of double refraction → K19,K20,K18
- N24-Q18 (5) define double refraction + Laurent half-shade → K15,K16,K32,K31
- N19-Q30 (4), N22-Q30 (4) [same question] QWP thickness λ/4, 5500 Å, ne1.54,no1.53 → K25,K24
- N20-Q28 (4) quartz HWP+QWP 5000 Å; N25-Q17 (5) quartz QWP 589 nm → K25,K24
- N25-Q16 (5) e-ray velocity at 45° → K17
- N19-Q34 (10) produce circular & elliptical, analyse; N20-Q23 (4) produce plane/circ/ellip → K28,K26,K08,K10,K29,K11
- N20-Q34 (10) distinguish plane/circ/elliptical; production by reflection and refraction; produce & detect circular → K01,K08,K12,K13,K28,K29
UNTESTED K: K02,K03,K04,K05,K06,K07,K09,K14,K21,K22 (Nicol: only via N24-Q18-style/likely), K23,K27,K32 tested once (N24-Q18). Likely future: Malus, Nicol, Laurent, Huygens cases, 3-polaroid numerical, specific rotation numerical.

## 6. STUDENT TRAPS
- K01 plane of polarisation ⟂ plane of vibration (E); unpolarised ≠ circular mix.
- K04 Malus applies to already polarised light only; unpolarised halves first (K05).
- K05/K06 use angle between CONSECUTIVE axes; I0/8 includes the first-polariser 1/2.
- K08 θ=π/2 gives circle only if a=b; ellipse axes ∥ x,y only for θ=π/2.
- K09 G prints tan2α=2ab cosθ/(b²−a²) vs standard (a²−b²): sign = angle-reference difference, not error.
- K10 Handedness depends on propagation direction and observer convention; state it. G's 22.6 list "m=1,3,4" is typo for 1,3,5 (LCP m even, RCP m odd per G).
- K12 Not all light reflected at θp: only ⟂ component; ~15% for glass n=1.5 (student map says "few %" - wrong; R⊥=((n²−1)/(n²+1))²=14.8%). tanθp=n2/n1 with n2 the medium entered. Transmitted ray partially polarised.
- K13 Brewster window is p-light transmitted with no loss, not reflecting.
- K15 e-ray does obey Snell with ne when axis ⟂ plane of incidence; along axis both rays travel at c/no (no splitting).
- K16 Optic axis is a direction, not a single line; vo=ve only along it.
- K17 Neg crystal ne<no so ve>vo ⟂ axis; G§22.6 intro wrongly says e faster in quartz too (positive: e slower, ne>no). G Fig22.26 labels o(s),e(f) hold for calcite only.
- K18 Neg: ellipsoid OUTSIDE sphere; pos: INSIDE. e-ray direction = to tangency point, not wave normal.
- K22 Only o-ray TIR; critical angle is for o at balsam (sinC=nb/no); e never TIR (ne<nb).
- K24 Plate retardation is for ONE λ; other λ gives elliptical (W9).
- K25 G eq(22.53) uses (no−ne) but next printed line uses (ne−no): use |no−ne|; d positive. Do not confuse 1 path-wavelength λ/4 with phase π/2 (equivalent).
- K26 QWP gives circular only at 45°; HWP never makes circular from linear (rotates plane by 2φ); HWP flips circular handedness.
- K27 I1 in sin²2φ sin²(θ/2) is after P1 (I0/2), not I0.
- K29 Constant intensity ≠ unpolarised (could be circular); do QWP test.
- K30 nL>nR is dextro (clockwise toward source); rotation φ=½ of phase difference.
- K31 l in dm; G prints sugar (5 g/100 g) ρ≈−0.59 rad/cm: that is ~0.59 rad/m (≈0.0058 rad/cm, 0.33°/cm); sucrose is dextro (+), book's sign/unit suspect. Lambda in cm in G(22.184).
- K32 Half-shade angle ε small (≈2–10°); match = equal dimness, not extinction.
- G errata: eq(22.54) Ez should be Ex; Sec 24.5 cross-ref "22.2.2" = 22.3.2; Table 22.1 absent so Pr22.3/22.8 need given data; G Nicol figure shows 48°,68°,71°,90° unexplained (68° is the ground end-face angle).
