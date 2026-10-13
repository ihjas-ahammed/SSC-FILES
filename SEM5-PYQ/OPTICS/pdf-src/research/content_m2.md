# M2 INTERFERENCE brief (Ghatak 6e; G=Ghatak, N=NCERT, U=student map c.2.*)
Notation: Δ path diff, δ=2πΔ/λ phase diff, β fringe width, m=0,1,2.., λ free-space.

## 0. VERIFIED AGAINST BOOK PDF (pp.217,219,224,225)
- Eq15.11b t=2n1/(n1+n2); 15.12 r'=(n2−n1)/(n2+n1)=−r; 15.13 t'=2n2/(n1+n2) [denominator n1+n2, NOT n2+n1-typo; both same]. 15.14: 1−tt'=1−4n1n2/(n1+n2)²=((n1−n2)/(n1+n2))²=r² ⇒ tt'=1−r² (=14.38). Extraction OK.
- Ex14.10 (printed 6.7e-4 cm): arithmetic t=dΔ/[D(n−1)]=0.1×0.2/(50×0.58)=6.90e-4 cm. BOOK PRINT IS WRONG (6.9e-4 cm; 6.9 μm).
- Ex14.11: book stops at 11λ=(n−1)t=0.58t; t=11×5893e-8/0.58=1.12e-3 cm (11.2 μm) ✓ (computed, not printed).
- Prob14.10 closed form printed in book = correct. Derivation: S2 farther, D=distance from S1 to plane, S2P²−S1P²=2Dd+d²; S1P+S2P=(2Dd+d²)/Δ; y²=¼[(2Dd+d²−Δ²)/Δ]²−D² =(d²−Δ²)[4D²+4Dd+d²−Δ²]/(4Δ²) ⇒ y=(1/2Δ)(d²−Δ²)^{1/2}[4D²+4Dd+(d²−Δ²)]^{1/2}≈(D/Δ)√((d−Δ)(d+Δ)) for D≫d.
- Extraction typo to ignore: "bright ring radius √(m+½)λR" really r_m²=(m+½)λR. Ex15.2/15.3 numbers re-checked OK. Ex15.1 text has a3 "0.874a" (should be 0.847a; a3=0.153×0.847=0.129a ✓).
- Ghatak conventions: air film/film in air: reflected maxima 2nd cosθ'=(m+½)λ (15.5b), minima mλ (15.5a). Lloyd (14.11): S2P−S1P=nλ → MINIMA, (n+½)λ → maxima. NRF footnote: both reflections π → 2nd cosθ'=mλ constructive, (m+½)λ destructive. Michelson: dark 2d cosθ=mλ, bright (m+½)λ (glass beam splitter π).

## 1. ATOMIC CONCEPTS  K## | name | key eq/statement | G § eq | needs
K01 | Superposition principle | x=x1+x2 (displacements add, not intensities) | 13.5, 13.21 | P01
K02 | Resultant of two same-ω SHM | x=a cos(ωt+θ); a²=a1²+a2²+2a1a2cos(θ1−θ2); tanθ=(a1 sinθ1+a2 sinθ2)/(a1cosθ1+a2cosθ2) | 13.22–13.26 | K01,P02
K03 | Constructive/destructive (phase) | θ1−θ2=0,2π,..→a=a1+a2; =π,3π..→a=|a1−a2|; energy only redistributed | 13.27–13.30 | K02
K04 | n-wave sum | a cosθ=Σa_i cosθ_i, a sinθ=Σa_i sinθ_i | 13.31–13.34 | K02
K05 | I∝E²; time average | I=KE²; ⟨cos²(ωt−θ)⟩=½ (T≈2π×10⁻¹⁵s≪τ; eye τ≈0.1 s) | 14.27, 14.29 | P05,P12
K06 | Coherent/incoherent sources | coherent = fixed phase diff; incoherent = φ changes too fast | 14.3, 14.11–12 | K03
K07 | Two lamps give no fringes | atom emits ~10⁻¹⁰s pulse (~10⁶ oscillations); φ random; ⟨cosφ⟩=0; I=I1+I2 =2I0 | 14.4, 14.13–14.16 | K06,K05
K08 | Division of wavefront vs amplitude | Young: split one wavefront → locked phase; film: split amplitude by partial reflection | 14.4, ch14 summ, 15.1 | K06
K09 | Sustained-fringe conditions | coherent (same-source split), same ω, same polarisation, comparable amplitudes, narrow source, Δ<coherence length | 14.3,14.4 fn,15.8 | K06,K10
K10 | Coherence length | L≈cτc≈λ²/Δλ; τc~10⁻¹⁰s→L~3 cm; Na D1 ~1 cm; laser ≫1 m | 15.8, 15.72 | K06
K11 | Young path difference | S2P−S1P=2x_n d/(S2P+S1P)≈x_n d/D (D≫d,x) | 14.17–14.19 | P08
K12 | Bright fringes, fringe width | x_n=nλD/d; β=x_{n+1}−x_n=λD/d; dark x=(n+½)λD/d; equally spaced | 14.20–14.21 | K11
K13 | Hyperbolic fringes | x²/a²−y²/b²=1; a²=Δ²[D²+¼(d²−Δ²)]/(d²−Δ²), b²=D²+¼(d²−Δ²); near axis (y≪D) straight; Δ=0→x=0 | 14.22–14.24 | K11,P13
K14 | General two-beam intensity | I=I1+I2+2√(I1I2)cosδ, δ=(2π/λ)(S2P−S1P) | 14.30–14.31 | K05,K11
K15 | Imax,Imin,visibility | Imax=(√I1+√I2)², Imin=(√I1−√I2)²; V=(Imax−Imin)/(Imax+Imin)=2√(I1I2)/(I1+I2) [V: U c.2.1.2] | 14.32 | K14
K16 | Equal-intensity cos² law | I=2I0+2I0cosδ=4I0cos²(δ/2); max 4I0, min 0, mean 2I0 | 14.33 | K14
K17 | Other fringe geometries | two plane waves ±θ: I=4I0cos²(kx sinθ), β=λ/(2sinθ); plane⊥line S1S2: circular; plane+spherical: r²_{m+p}−r²_m=2pλD | Ex14.5–14.7 | K16
K18 | Incoherent sources at slits | I=I'+I'' with I'=I0cos²{(π/λ)[xd/D+d sinθ]} → fringe contrast washes (spatial coherence, U c.2.2.3 w<λDs/2d) | Ex14.8 | K16,K06
K19 | Fresnel two mirrors | S,S1,S2 on circle centre M; S1S2=2bθ (b=MS), ∠S1MS2=2θ; β=λ(b+c)/(2bθ); fringes in overlap region BC | 14.7, Pr14.8 | K12
K20 | Fresnel biprism | d=S1S2=2a(n−1)α (thin prism dev (n−1)α); β=λD/d, D=a+b; α~20′ | 14.8 | K12,P09
K21 | λ with biprism | λ=dβ/D; d=√(d1d2), D=b1+b2 by lens displacement method (two conjugate positions, needs D>4f) | 14.34, Pr14.5 | K20,P15
K22 | White-light fringes | central white (Δ=0 all λ); first coloured fringe red-edge at Δ≈2×10⁻⁵cm=λ_v/2; Δ=3.5×10⁻⁵cm kills red; soon fades to white (overlap of orders); used to locate zero order | 14.9 | K12
K23 | Fringe displacement | extra optical path (n−1)t; shift Δ=D(n−1)t/d toward plate | 14.35–14.37 | K12,P04
K24 | Lloyd's mirror | S1+virtual S2 (d=2h); S2P−S1P=nλ→minima, (n+½)λ→maxima; central fringe dark (white light); β=λD/(2h) | 14.11 | K12,K25
K25 | Phase change on reflection | abrupt π on reflection from denser medium; none from rarer | 14.11–14.12 | K24
K26 | Stokes relations | r2=−r1 ; t1t2=1−r1² (optical reversibility) | 14.38–14.39 | K25
K27 | Fresnel normal-incidence coeffs | a_r=(n1−n2)/(n1+n2)a_i, a_t=2n1/(n1+n2)a_i; r'=−r; t'=2n2/(n1+n2); 1−tt'=r² | 15.10–15.14 | K26
K28 | Normal-incidence thin film | film in air: extra path 2nd, π at top ⇒ 2nd=mλ minima, (m+½)λ maxima (reflected); λ_film=λ/n | 15.1–15.2 | K25,P04
K29 | Index sequence decides condition | air film between glass: one π (same as 15.2); n1<n2<n3 (e.g. crown 1.52/oil 1.60/flint 1.66): π at both ⇒ conditions swap: 2nd=mλ max, (m+½)λ min | 15.3, NRF fn | K25
K30 | Cosine law | Δ=n2(BD+DF)−n1BC=2n2d cosθ' (θ'=refraction angle); max (m+½)λ, min mλ (film in air); transmitted: conditions exchanged | 15.3–15.9 | K28,P07
K31 | Plane wave on film: uniform illumination of plate P; eye sees only small region QR; fringes of equal inclination; thick film → Δ>L → no fringes (also why no colours in thick plates) | 15.3, 15.8 | K30,K10
K32 | Film point/extended source (Haidinger vs Newton) | parallel film: equal-inclination circular fringes at infinity, order highest at centre; Newton: equal thickness, localised on film, order grows outward [G§15.7 not in scoped extraction: general knowledge] | — | K30
K33 | Non-reflecting film thickness | 2n_f d=λ/2 → d=λ/4n_f (n_a<n_f<n_g, both π); MgF2 n_f=1.38, λ=5×10⁻⁵cm→0.9×10⁻⁵cm | 15.15 | K29
K34 | Ideal film index | equal amplitudes of rays (2),(5): (n_f−n_a)/(n_f+n_a)=(n_g−n_f)/(n_g+n_f) ⇒ n_f=√(n_a n_g) (uses 4n_a n_f/(n_f+n_a)²≈1; 0.97 for n_f=1.4); glass 1.5→1.22; 1.66→1.29 | 15.16–15.18 | K27,K33
K35 | Reflectivity & blooming | uncoated (n−1)²/(n+1)²≈4% (n=1.5), 6% (1.67); coated ≈[(n_f−n_a)/(n_f+n_a)−(n_g−n_f)/(n_g+n_f)]²≈1.3%; works for one λ (tint), energy goes to transmitted beam | 15.19, 15.4(b,c) | K34
K36 | Rigorous R of film | R=(r1²+r2²+2r1r2cos2δ)/(1+r1²r2²+2r1r2cos2δ), δ=2πn_f d/λ; min at cos2δ=−1: d=λ/4n_f,3λ/4n_f..; R_min=((n_a n_g−n_f²)/(n_a n_g+n_f²))²; λ/4 preferred (broadest dip) | 15.30–15.36 | K33
K37 | Wedge fringes | 2nAA'≈(m+½)λ; 2n(BB'−AA')=λ; β=λ/(2nφ); equal thickness, parallel to edge; thickness step λ/2n | 15.56–15.60 | K30
K38 | Localisation (extended source) | wedge fringes seen only focused on film upper surface; point source no localisation issue | 15.8 | K37
K39 | Colours of thin films | polychromatic light: each λ obeys its own condition; fringes of equal thickness coloured; soap bubble/oil; visible only for few-λ thick film | 15.9 | K37,K31
K40 | Newton's rings radii | 2nt=mλ dark, (m+½)λ bright (reflected); r_m²=t(2R−t)≈2Rt; r_m²=mλR; r=0.0774√m cm (λ=6×10⁻⁵,R=100); centre dark (m=0); transmitted: complementary, centre bright, poor contrast | 15.62–15.67, Ex15.1 | K37,P10
K41 | Newton λ & liquid | λ=(D²_{m+p}−D²_m)/(4pR); liquid n: r_m²=mλR/n, n=D²_air/D²_liq | 15.68–15.69 | K40
K42 | Newton two-λ disappearance | 2t/λ2−2t/λ1=½, t0=λ1λ2/4(λ1−λ2); reappear at t1=2t0, period 2t0≈½λ1λ2/Δλ; L≈λ²/Δλ | 15.70–15.72 | K40,K10
K43 | Michelson & circular fringes | G1 beam splitter, M1 movable, M2 fixed; d=x1−x2; 2d cosθ=mλ (dark), (m+½)λ (bright); fringes shrink to centre as d↓ | 15.11 | K30
K44 | Michelson λ & metre | N fringes collapse for mirror shift d0: λ=2d0/N; 1 fringe=λ/2; Cd red 6438.4696 Å, 1 m=1553164.13 λ, 1 part in 10⁹ | 15.73 | K43
K45 | Compensating plate & white light | beam (5) crosses G1 thrice; G2 same thickness; monochromatic: shift M1 by (n−1)t; white: needs G2 (n depends on λ: crown 1.5244@6560, 1.5330@4861, 0.5 cm → M1 0.2622 vs 0.2665 cm >100λ); zero-path from white fringes | 15.37 text | K43
K46 | Michelson Δλ of doublet | disappear: 2d/λ1−2d/λ2=½; reappear (consecutive disappearances) =1 → Δd=λ1λ2/(2Δλ)→Δλ≈λ²/(2Δd); broad line: no fringes if 2d≥λ²/Δλ | 15.74–15.76 | K43,K10
K47 | Michelson fringe types | circular (M1′∥M2, extended source), straight (M1′,M2 inclined: wedge), white-light (d≈0, coloured, central dark/achromatic) [straight/white types: general knowledge, not in G text] | 15.11 | K43,K45

## 2. DERIVATION SKELETONS
D1 Superposition (K02) 13.5
1 x1=a1cos(ωt+θ1),x2=a2cos(ωt+θ2) (13.20)
2 x=x1+x2 (superposition)
3 expand cos(ωt+θ_i) (angle addition)
4 match x=a cos(ωt+θ)=a cosωt cosθ−a sinωt sinθ
5 a cosθ=Σa_i cosθ_i; a sinθ=Σa_i sinθ_i (13.23–24) (coeffs of cosωt, sinωt)
6 square, add: a²=a1²+a2²+2a1a2cos(θ1−θ2) (13.25)
7 divide: tanθ=(a1 sinθ1+a2 sinθ2)/(a1 cosθ1+a2 cosθ2) (13.26)
8 θ1−θ2=2nπ→a1+a2; (2n+1)π→|a1−a2|
D2 Young path diff & β (K11,K12) 14.5
1 S1=(+d/2,0,−D), S2=(−d/2,0,−D), P=(x_n,y,0)
2 (S2P)²−(S1P)²=2x_n d (D² cancel)
3 S2P−S1P=2x_n d/(S2P+S1P)
4 S1P+S2P≈2D (D≫d,x; 0.005% err for d=0.02,D=50,OP=0.5 cm)
5 ≈x_n d/D (14.19)
6 maximum: x_n d/D=nλ → x_n=nλD/d
7 β=x_{n+1}−x_n=λD/d; dark at (n+½)λD/d, equal spacing
D3 Intensity (K14–K16) 14.6
1 E1=î E01cos(2πS1P/λ−ωt), E2 likewise (same direction as S1P,S2P≫d)
2 E=E1+E2; I=KE²
3 E²=E01²cos²(..)+E02²cos²(..)+E01E02{cos[(2π/λ)(S2P−S1P)]+cos[2ωt−(2π/λ)(S2P+S1P)]} (product-to-sum)
4 time average: ⟨cos²⟩=½, double-frequency term→0 (10¹⁵ s⁻¹)
5 I=I1+I2+2√(I1I2)cosδ, I_i=½KE0i²
6 cosδ=±1→(√I1±√I2)²; V=2√(I1I2)/(I1+I2)
7 I1=I2=I0: I=2I0(1+cosδ)=4I0cos²(δ/2)
8 incoherent: ⟨cosδ⟩=0→I1+I2=2I0 (14.16)
Alt (14.3): y=a cosωt+a cos(ωt+φ)=2a cos(φ/2)cos(ωt+φ/2) (cosA+cosB); I∝4a²cos²(φ/2)
D4 Fringe displacement (K23) 14.10
1 time via plate: (S1P−t)/c+t/v=(1/c)[S1P+(n−1)t] (v=c/n)
2 effective path of beam 1 up by (n−1)t
3 new central fringe O′: S1O′+(n−1)t=S2O′
4 S2O′−S1O′≈(d/D)OO′ (14.19)
5 (n−1)t=(d/D)OO′ → Δ=D(n−1)t/d (14.37), toward plate
D5 Biprism (K20,K21) 14.8, Pr14.3,14.5
1 thin prism deviation (n−1)α for each half (small angle)
2 virtual S1,S2 at a(n−1)α each side of axis (a=slit-prism dist.)
3 d=2a(n−1)α
4 D=a+b, β=λD/d=λ(a+b)/[2a(n−1)α]
5 λ=dβ/D (14.34)
6 lens between prism and eyepiece, screen-slit D>4f: u+v=D, 1/u+1/v=1/f → u²−Du+Df=0, real iff D≥4f
7 two positions interchange u,v → image separations d1=d·v/u, d2=d·u/v
8 d=√(d1d2); D<4f no real image position
D6 Two mirrors (K19) 14.7, Pr14.8
1 S1,S2 images of S: MS1=MS=MS2=b (mirror preserves distance to M)
2 ∠S1MS2=2θ (each mirror turns by θ→image turns 2θ)
3 S1S2=2bθ; S,S1,S2 on circle centre M
4 D=b+c (c=M to screen) ; β=λ(b+c)/(2bθ)
D7 White-light central fringe (K22) 14.9
1 Δ=0 at O for all λ → white
2 Δ=λ_v/2=2×10⁻⁵cm: violet destroyed → reddish
3 Δ=λ_r/2=3.5×10⁻⁵cm: red destroyed
4 large Δ (e.g. 30×10⁻⁵cm): λ_n=Δ/n (max), Δ/(n+½) (min) many λ → washed to white
D8 Lloyd (K24) 14.11
1 S1+image S2 (d=2h) coherent; interference in BC only
2 Δ=S2P−S1P; extra π in reflected ray
3 minima when Δ=nλ, maxima (n+½)λ; centre (Δ=0) dark
4 β=λD/2h; fringes seen only if screen touches mirror end L1′L2′ or mica in direct beam
D9 Stokes (K26) 14.12
1 incident a→ar1 (refl), at1 (trans) (Fig14.22a)
2 reverse both: at1 and ar1 incident (optical reversibility)
3 rays returning along incident path in n1: ar1·r1+at1·t2=a → t1t2=1−r1² (14.38)
4 in n2 nothing emerges: at1r2+ar1t1=0 → r2=−r1 (14.39)
5 Lloyd shows π for denser ⇒ none for rarer
D10 Cosine law (K30) 15.3
1 Δ=n2(BD+DF)−n1BC (15.3)
2 drop BJ ⊥ lower surface, extend to B′ on FD extended: ∠JBD=∠BDN=∠NDF=θ′
3 ∠BDJ=∠B′DJ=π/2−θ′ ⇒ BD=B′D, BJ=JB′=d
4 BD+DF=B′F; Δ=n2B′F−n1BC
5 ∠CFB=θ ⇒ BC=BF sinθ
6 K foot of ⊥ from B on B′F; BF sinθ′=KF; Snell: BC=(n2/n1)KF
7 Δ=n2B′F−n2KF=n2B′K=2n2d cosθ′ (15.9)
8 π at B (film in air): minima 2n2d cosθ′=mλ, maxima (m+½)λ (15.5)
9 transmitted: no net π → 2nd cosθ′=mλ max, (m+½)λ min (complementary)
D11 NRF (K33,K34,K35) 15.4
1 n_a<n_f<n_g: π at both reflections (a_r<0 both)
2 destructive: 2n_f d=λ/2 → d=λ/4n_f (15.15)
3 amplitudes: (2) −[(n_f−n_a)/(n_f+n_a)]a; (5) −t1|r2|t2 a with t1t2=4n_an_f/(n_f+n_a)²≈1
4 equal amplitudes → (n_f−n_a)/(n_f+n_a)=(n_g−n_f)/(n_g+n_f)
5 n_f=√(n_a n_g)
6 R≈[…−…]²≈1.3% vs 4%; energy → transmitted
D12 Wedge (K37) 15.8
1 normal incidence, small φ: 2n·t=(m+½)λ at A (t=AA′)
2 next bright B: 2n·BB′=(m+3/2)λ
3 2n(BB′−AA′)=λ → XB′=λ/2n
4 XB′=A′X tanφ≈A′X φ → β=λ/(2nφ) (15.60)
5 Check: 100 fringes/cm → φ=λ/2β=3×10⁻³ rad (6000 Å)
D13 Newton's rings (K40,K41) 15.10
1 air film, n=1: Δ=2t (+π): dark 2t=mλ
2 r_m²=R²−(R−t)²=t(2R−t)
3 t≪2R: r_m²≈2Rt
4 r_m²=mλR, D_m²=4mλR
5 r²_{m+p}−r²_m=pλR → λ=(D²_{m+p}−D²_m)/(4pR) (cancels contact error)
6 liquid: 2nt=mλ → r_m²=mλR/n; n=D_air²/D_liq²
7 bright r²=(m+½)λR; centre dark; t(r)∝r² so rings crowd outward
8 R from slope of D²-vs-m graph = 4λR
D14 Michelson λ (K43,K44) 15.11
1 virtual M1′ at d from M2 → air film
2 Δ=2d cosθ; dark mλ
3 central θ=0: 2d=mλ
4 shift d0: 2(d−d0)=(m−N)λ
5 subtract: λ=2d0/N (15.73); 1000 fringes, 2.90×10⁻² cm→5800 Å
6 ring angles: cosθ=m/1000 (d=0.3 mm, 6×10⁻⁵cm): θ=0,2.56°,3.62°,4.44°...
D15 Michelson Δλ (K46)
1 set zero path with white light
2 move M1 d: 2d cosθ′=mλ1 and =(m+½)λ2 → fringes vanish: 2d/λ1−2d/λ2=½ (15.74)
3 reappear when diff=1 (15.75): consecutive disappearances Δd: 2Δd(λ2−λ1)/(λ1λ2)=1
4 Δλ=λ1λ2/(2Δd)≈λ²/(2Δd); Ex15.4: Δd=0.289 mm → Δλ≈6 Å
5 continuous Δλ: 2d≥λ²/Δλ no fringes (coherence length)
D16 Compensating plate (K45) 15.11
1 beam (5) crosses G1 3×, beam (6) once (back-silvered)
2 extra path 2(n−1)t in arm 1
3 G2 same t,n in arm 2 → equalises for all λ (n=n(λ))
D17 Circular fringes loci (K43): successive dark rings cosθ_p=(m0−p)λ/2d; θ_p²≈pλ/d → radius ∝√p; d↓ → collapse, wider spacing; d↑ expand (Fig15.36)
D18 Newton two-λ (K42): 2t0/λ2−2t0/λ1=½ → t0=λ1λ2/[4(λ1−λ2)]; t1=2t0 reappear; 2t=½λ1λ2/Δλ≈3×10⁻² cm (m≈500) for Na D
D19 Hyperbola (K13): S2P−S1P=Δ; square, isolate, square → (d²−Δ²)x²−Δ²y²=Δ²[D²+¼(d²−Δ²)]; divide → 14.22; y²≪D²: lines ∥ y-axis
D20 Plane-wave pair (K17): E=2E0cos(kx sinθ)cos(kz cosθ−ωt); I=4I0cos²(kx sinθ); β=λ/(2sinθ); θ=30° → β=λ

## 3. WORKED EXAMPLES & PROBLEMS (given→answer, all recomputed)
Ex14.10 mica n=1.58,d=0.1,D=50,Δ=0.2 cm → t=6.9×10⁻⁴ cm (book prints 6.7)
Ex14.11 central = 11th bright, λ=5893 Å, n=1.58 → t=11λ/0.58=1.12×10⁻³ cm
Ex14.5 θ=π/6 → β=λ=0.0005 mm (λ=5000 Å)
Ex14.6 d=100λ → centre bright, circular fringes any D
Ex15.1 n=1.36: a1=−0.153a, a2=0.847a, a3=0.129a, a4=0.977a, a5=0.149a (opposite sign to a1), a7=0.023a ⇒ reflected fringes good contrast (|a1|≈|a5|), transmitted poor (a4≫a7)
Ex15.2 λ=6.4×10⁻⁵,R=100: 1st/2nd dark r=0.080,0.113 cm; lens raised λ/4 → centre bright, dark r=√(½λR)=0.0566, √(3/2λR)=0.098; raise λ/2 centre dark again; rings collapse; raised 6.4×10⁻³ cm → 200 rings collapse
Ex15.3 Na D1,D2: ninth dark r=0.2302/0.2304, bright 0.2365/0.2367 cm; wash-out at 2t≈½λ1λ2/Δλ≈3×10⁻² cm (m≈500); Na L~1 cm
Ex15.4 Δd=0.289 mm, λ=5890 Å → Δλ=λ²/0.578mm≈6 Å
Pr13.5/13.6: a cos2π(νt−x/λ)+a cos2π((ν+Δν)t−x/(λ−Δλ)) → resultant amplitude 2a|cos(πΔνt+…)|, I∝cos² beats at Δν; x=0,λ/4,λ/2 shifts phase only (v=330, ν=256, Δν=2, a=0.1 cm) [no book answer; derived qualitatively]
Pr14.1 d=0.5 mm,λ=5×10⁻⁵cm,D=50 cm → β=0.05 cm
Pr14.2 (a) region on screen 1.9–3.9 cm above O (reflected rays via B and A) width 2 cm; λ=c/ν=5×10⁻⁵ cm, d=0.2 cm, D=200 cm→β=0.05 cm→40 fringes; (b) (n−1)t=d·1.9/D=1.9×10⁻³ cm → t=38 μm
Pr14.3 (b) β=λ(a+b)/[2a(n−1)α]=21λ/α (b/a=20) → α=0.0124 rad=0.71°
Pr14.4 n=1.5,Δ=0.2,d=0.1,D=50 → t=8×10⁻⁴ cm
Pr14.5, 14.8, 14.10(a): derivations D5, D6, §0
Pr14.6 Na 5890/5896, d=0.5 mm, D=1 m: vanish when Δ=½λ1λ2/Δλ(2k+1)=0.289 mm×(2k+1) → x=ΔD/d=57.9 cm×(2k+1) (m≈491)
Pr14.7 λ=3 cm, D=100: d=0.1 cm (max Δ≪λ/2) no dark fringe; d=1 cm: only central max (Δmax<λ); d=4 cm: sinθ_n=nλ/d: max at 0°, ±48.6°; minima ±22.0°; Eq14.21 invalid (small-angle fails, β=λD/d=3000 cm≫screen)
Pr14.9 Δ=5000 Å: constructive λ=5000 Å only (green); no destructive visible → bright/greenish. Δ=40000 Å: constructive 6667,5714,5000,4444 (4000 edge); destructive 6154,5333,4706,4211 (7273 just beyond red) → many orders, nearly white
Pr15.1 air wedge 0.5°, λ=5000 Å: β=λ/2φ=2.87×10⁻³ cm; in oil 1.7: β=λ/(2nφ)=1.69×10⁻³ cm and edge goes dark→bright (air: π only at air→1.8; oil 1.7 between 1.6,1.8: π at both)
Pr15.2 100 fringes/cm → β=0.01 cm, φ=λ/2β=3×10⁻³ rad=0.17°
Pr15.3 n_f=1.38: d=9×10⁻⁵cm: 2n_f d=(m+½)λ → λ=24840/(m+½) Å (×10⁻⁸ cm units: 2n_f d=2.484×10⁻⁴cm) → 5520 Å (m=4), 4516 Å (m=5) [7097 Å marginal red]; d=45×10⁻⁵: 7097(m=17),6714,6369,6059,5777,5520,5285,5069,4871,4687,4516,4358,4210,4072 Å. Common: 5520, 4516; thin one better: only 2 well-separated dips, thick has ~14 close dips → reflection returns elsewhere (cannot cover band; also wider Δλ tolerance: 3λ/4n etc worse)
Pr15.4 R=100,λ=6×10⁻⁵: r²=(m+½)λR: m=9: 0.2387 cm; m=10: 0.2510 cm. If "9th,10th bright" counted from 1st (m=0): 0.2258, 0.2387 cm [state convention]
Pr15.5 R=50, r9=0.18, r16=0.2235 → (r16²−r9²)=7λR → λ=5015 Å (single-ring r²=mλR gives 7.2×10⁻⁵ wrong: imperfect contact/dust, m unknown)
Pr15.6 4000, 4002 Å, R=400: 2t=½λ1λ2/Δλ=0.04 cm,t=0.02 cm,r²=2Rt=16 → r=4 cm
Pr15.7 lens raised t0=λ1λ2/4Δλ=0.02 cm=0.2 mm
Pr15.8 two equiconvex (R1=50,R2=100): t=r²/2(1/R1+1/R2) → r²=2×10⁻³ m (cm) → r=0.0447√m cm
Pr15.9 N=250,d0=0.08 mm → λ=2d0/N=6400 Å
Pr15.10 4882,4886 Å → Δd=λ1λ2/2Δλ=0.298 mm
Pr15.11 d=5×10⁻³cm,λ=5×10⁻⁵: 2d/λ=200 (centre m=200 dark). Bright (m+½)λ: cosθ′=(m+½)/200: m=199:4.05°, 198:7.02°, 197:9.07°, 196:10.73°. d=4.997×10⁻³: 2d=199.88λ: cosθ′=m/199.88, m=200 impossible→central ring vanishes; m=199:5.38°,198:7.86°,197:9.74°. [Ghatak: d=4.9875×10⁻³ gives 2d=199.5λ exactly]

## 4. PREREQUISITE ATOMS  P## | fact | content | used by
P01 | SHM/wave | x=a cos(ωt+θ), y=a sin(kx−ωt+φ); k=2π/λ, ω=2πν (N XI 13.4,14.2,14.6) | K02
P02 | trig | cosA+cosB=2cos((A+B)/2)cos((A−B)/2) [NOT located in NCERT]; cos(A−B)=cosAcosB+sinAsinB; cos²x=(1+cos2x)/2 (N XI Maths §3.3); 1−cosδ=2sin²(δ/2) | K02,K16
P03 | phase vs path | δ=2πΔ/λ [implicit in N XII 10.5; formula not stated] | K11,K14
P04 | optical path | nd; v=c/n; λ_n=λ/n; extra path (n−1)t | K23,K28
P05 | I∝a² | N XII 10.4 | K05
P06 | Young NCERT | Δ=S1P−S2P=nλ bright (10.9), (n+½)λ dark (10.10), I=4I0cos²(φ/2) (10.11), incoherent 2I0 (10.12), x_n=nλD/d (10.13), (n+½)λD/d (10.14); coherent = const phase diff; Na lamps incoherent (10⁻¹⁰s); coherence length/spatial coherence NOT in NCERT | K12,K16
P07 | Snell | n1 sinθ=n2 sinθ′ | K30
P08 | small angle | sinθ≈tanθ≈θ [not verified in NCERT]; √(1+x)≈1+x/2 | K11,K17
P09 | thin prism | deviation (n−1)A | K20
P10 | circle geometry | chord: r²=t(2R−t) | K40
P11 | plane mirror image, reflection law, mirror turned by θ → ray turns 2θ | K19,K24
P12 | time average | ⟨cos²⟩=½, ⟨cos⟩=0 | K05
P13 | hyperbola | |PF1−PF2|=const; x²/a²−y²/b²=1 (N XI Maths conics) | K13
P14 | lens | 1/u+1/v=1/f (N XII Ch9) | K21
P15 | phasor/complex | Argand addition [Euler NOT in NCERT]; U c.2.1.3 N waves a=a0 sin(Nδ/2)/sin(δ/2) | K04
P16 | Huygens / wavefront | surface of const phase (N XII 10.2) | K08
P17 | refractive-index/medium order | rarer/denser; π on reflection off denser | K25
P18 | EM | c=1/√μ0ε0, E⊥B⊥k; same polarisation needed to interfere | K09

## 5. PYQ MAP (N=Nov year; Q no, marks)
- Superposition/interference basics: N19-Q15(2) principle; N24-Q4(2) explain interference; N25-Q2(2) intensities obey superposition?; N22-Q19(4) superpos of two sinusoids → constructive/destructive cond → K01–K03; N24-Q20(10) derive intensity distribution; N19-Q32(10) coherent sources, resultant intensity, incoherent case → K05–K07,K14–K16; N25-Q3(2) incoherent equal I → 2I (K07)
- Coherence: N24-Q5(2) → K06,K10; N22-Q13(2) sustained interference conditions → K09; N20-Q13(2) division of wavefront/amplitude principle → K08; N22-Q7(1,T/F: screen distance small → False, β∝D) → K12
- Young: N25-Q14(5) β=λD/d=1×10⁻⁴ m=0.1 mm → K12
- Biprism: N20-Q19(4) explain & λ → K20,K21; N19-Q26(4) n=1.5,α=1°,a=10 cm,b=1 m,λ=5000 Å: d=2a(n−1)α=0.1745 cm, D=110 cm → β=0.0315 cm (0.0286 if D=b=100)
- Lloyd: N22-Q26(4) h=2 mm (d=4 mm), D=1.5 m, 589 nm → β=0.221 mm (0.442 mm if d=2 mm intended) → K24
- Phase change: N19-Q5(1) optical path from lower surface ↑ with n (2nt increases) → K28 (K25)
- Thin film/cosine law: N19-Q13(2) normal incidence destruct/constructive → K28,K29; N24-Q13(5) plane parallel film plane wave → K28,K30,K31; N24-Q14(5) derive cosine law → K30 (D10); N24-Q16(5) point source film → K31,K32; N25-Q20(10) maxima/minima parallel film → K28–K30; N22-Q27(4) soap bubble n=1.42,5839 Å, least bright t=λ/4n=1028 Å (m=0) → K28
- Non-reflecting: N19-Q22(4), N24-Q15(5), N22-Q4(1, "reflection") → K33–K35
- Colours of films: N19-Q14(2), N22-Q14(2), N24-Q7(2), N22-Q8(1 T/F: False, interference not dispersion) → K39; N19-Q17(2) no colours in thick plates → K31,K10,K39
- Wedge: N20-Q31(4) 100 fringes/cm,6000 Å → φ=3×10⁻³ rad → K37; N20-Q10(1 T/F "fringes from two perfectly plane surfaces are not equal" → False: wedge of plane surfaces gives equally spaced) → K37
- Newton: N19-Q3(1) centre dark; N20-Q3(1) transmitted centre bright → K40; N19-Q27(4) D10=0.3 cm,6×10⁻⁷ m: R=r²/mλ=37.5 cm, t=mλ/2=3×10⁻⁴ cm → K40; N20-Q26(4) 9th,10th bright (see Pr15.4) → K40; N22-Q28(4) r20=1.1×10⁻² m,670 nm: R=9.03 m, r30=1.347×10⁻² m → K40,K41; N22-Q32(10) theory + λ → K40,K41
- Haidinger: N20-Q20(4) conditions & vs Newton → K32 (outside scoped extraction)
- Michelson: N19-Q21(4) λ → K43,K44; N20-Q32(10) metre, circular/straight/white fringes → K43–K45,K47; N22-Q20(4) Δλ → K46; N25-Q4(2) constructive cond. 2d cosθ=mλ (or (m+½)λ with π) with d=x1−x2 mirror sep., θ ray angle, m order → K43
- NOT tested by any PYQ: K04,K05(except via derivation),K13,K15 (visibility),K17,K18,K19 (two mirrors),K21(only partly),K22,K23 (fringe shift),K26,K27,K29,K34 (only in NRF notes),K36,K38,K42,K45(partly). Likely future: K19, K23, K22, K26, K42, visibility, Ex14.10/11, Pr15.5–15.10.

## 6. STUDENT TRAPS
K02 adding intensities (I≠I1+I2) unless incoherent; δ is phase not path
K03 constructive amplitude a1+a2 not intensity; destructive a1−a2
K12 β is bright-to-bright, not bright-to-dark; need D≫d,x
K14 δ=(2π/λ)Δ; forgetting 2π/λ
K16 average intensity 2I0 not 4I0
K23 use (n−1)t not nt; shift is toward the covered slit
K19 D=b+c not b; S1S2=2bθ not bθ
K20 d=2a(n−1)α (a = slit-to-prism), D=a+b
K21 d=√(d1d2) not average; lens method needs D>4f
K24 Lloyd centre DARK (complementary to Young); minima at Δ=nλ
K25 π only on reflection from denser medium, not both surfaces
K28 2nd cos r uses r (inside), not i
K29/K30 reflected maxima (m+½)λ for film in air; transmitted exchanged; both-π film (NRF) swaps conditions
K33 NRF thickness uses n_f: λ/(4n_f) not λ/4; needs n_f=√(n_a n_g), n_f<n_g
K35 NRF only at one λ (purple tint); energy goes to transmitted beam
K37 β=λ/(2nφ), not λ/φ; edge dark in reflection
K40 centre dark (m=0) reflected, bright transmitted; radius √m so crowd outward; r²=mλR uses ring order m from centre (m=0 centre) – "9th bright" convention ambiguous: bright r²=(m+½)λR
K41 diameters in D²; use ring differences (contact imperfect); liquid: r shrinks by √n
K42/K46 reappearance period (Δd) vs first disappearance (half of it): Δλ=λ²/2Δd
K44 1 fringe = λ/2 mirror movement
K45 compensating plate needed for white light, not monochromatic
K31 thick film/plate: Δ>L → no fringes
K32 Haidinger equal-inclination vs Newton equal-thickness
