# MODULE III DIFFRACTION — brief (Ghatak 6e). Eq nos = Ghatak printed. [V]=verified/recomputed by me. [FLAG]=book misprint/doubt.
Scope note: Ghatak §18.3 (Airy), §18.5 (resolution) are NOT in the listed sections but PYQs test them (N19Q7,Q19,Q28; N20Q21; N22Q22) -> K27,K28 included; eq nos from book pages read [V].

## 1. ATOMIC CONCEPTS (K | name | statement | Ghatak | needs)
K01 | Diffraction/geometric shadow | wave through aperture b spreads into geometrical shadow; spreading $\Delta\theta\sim\lambda/b$; narrower slit = more spread; λ→0 no diffraction; λ~5e-5 cm so effect small unless b small | §18.1, (18.18) | P01
K02 | Fresnel vs Fraunhofer | Fresnel: source or screen (or both) at finite distance from aperture (curved wavefronts). Fraunhofer: source & screen at infinity (plane waves), realised with 2 lenses (source in focal plane of L1, screen in focal plane of L2) | §18.1 Fig18.2; §20.1 | P11,P14
K03 | Huygens–Fresnel principle | "each point on a wavefront is a source of secondary disturbance and wavelets from different points mutually interfere" | §20.1 | P11
K04 | Interference vs diffraction | few sources = interference; area source/many sources = diffraction; no physical difference (Feynman) | §18.1 | K03
K05 | Single slit model | slit = n equal point sources spacing Δ, b=(n−1)Δ (18.1); neighbours path diff Δsinθ, phase $\phi=\frac{2\pi}{\lambda}\Delta\sin\theta$ (18.2); normal incidence, lens focal plane | §18.2 | K02,P01
K06 | Sum of n phasors | $E_\theta=a\frac{\sin(n\phi/2)}{\sin(\phi/2)}$ (18.6); series sum (18.4) | (18.3–18.6) | P03,P04,P05
K07 | Continuum limit | n→∞, a→0, na=A finite, $\sin(\phi/2)\to\phi/2$ ⇒ $E_\theta=A\frac{\sin\beta}{\beta}$, $\beta=\frac{\pi b\sin\theta}{\lambda}$; field $E=A\frac{\sin\beta}{\beta}\cos(\omega t-\beta)$ | (18.7–18.9) | K06,P07
K08 | Single-slit intensity | $I=I_0\frac{\sin^2\beta}{\beta^2}$; $I_0$ at θ=0 (sinβ/β→1) | (18.10) | K07,P02
K09 | Minima | β=mπ, m≠0 ⇒ $b\sin\theta=m\lambda$, m=±1,±2.. (18.11–12); half-slit proof: pairs b/2 apart, path diff λ/2 ⇒ cancel ⇒ bsinθ=λ (18.13); quarter-slit ⇒ 2λ (18.14); m_max<b/λ | (18.11–14) | K08
K10 | Secondary maxima | dI/dβ=0 ⇒ $\sin\beta(\beta-\tan\beta)=0$ (18.15); maxima at tanβ=β (18.16), β≈1.43π,2.46π,3.47π (graphical: Fig18.4b); NOT at (m+½)π exactly. Intensities exact [V]: 0.0472 (≈1/21), 0.0165, 0.0083 of I0. Book text says 4.96%, 1.68%, 0.83% [FLAG: first is misprint; exact 4.72%] | (18.15–16), Ex18.1 | K08,P10
K11 | Central max width/spread | zeros at ±λ/b: $-\lambda/b\le\theta\le\lambda/b$ (18.17); total width on screen $2f\lambda/b$ (lens) or $2D\tan\theta_1$; wider for larger λ / smaller b; limit b≫λ geometric; b~λ uniform spreading. Fig18.6: b=0.0088cm,λ=6328Å first min 3.288 cm at 15 ft | (18.17–18) | K09
K12 | Two-slit field | slits width b, centre sep d: $E_1=A\frac{\sin\beta}{\beta}\cos(\omega t-\beta)$, $E_2$ with extra phase $\Phi_1=\frac{2\pi}{\lambda}d\sin\theta$; $\gamma=\Phi_1/2=\frac{\pi d\sin\theta}{\lambda}$ (18.44); $I=4I_0\frac{\sin^2\beta}{\beta^2}\cos^2\gamma$ (18.45): diffraction envelope × Young fringes | §18.6 | K08,P12,P04
K13 | Two-slit zeros, fringe count, missing orders | zeros: bsinθ=mλ (envelope), dsinθ=(n+½)λ (fringes) (18.46); maxima dsinθ=mλ (18.47); missing order when bsinθ=pλ and dsinθ=mλ coincide: $d/b=m/p$; fringes in central max = 2(d/b)−1 (if d/b integer); fringe sep $\Delta\theta\approx\lambda/d$; d→0 single slit; b→0 Young | (18.46–47), Ex18.9 | K12
K14 | N-slit field & intensity | $E=A\frac{\sin\beta}{\beta}\frac{\sin N\gamma}{\sin\gamma}\cos[\omega t-\beta-\frac12(N-1)\Phi_1]$ (18.49); $I=I_0\frac{\sin^2\beta}{\beta^2}\frac{\sin^2N\gamma}{\sin^2\gamma}$ (18.50). N=1→(18.10), N=2→(18.45). Footnote: n=2 point sources give cos²(φ/2) | (18.48–50) | K12,P03,P05
K15 | Principal maxima | γ=mπ ⇔ $d\sin\theta=m\lambda$, m=0,1,2.. (18.51); sinNγ/sinγ→±N (L'Hôpital); $E=NA\frac{\sin\beta}{\beta}$ (18.52), $I=N^2I_0\frac{\sin^2\beta}{\beta^2}$ (18.53); β=πbm/d (18.54); fields from all slits in phase; m≤d/λ so finitely many | (18.51–54) | K14,P16
K16 | Secondary minima & maxima | zeros $N\gamma=p\pi$, p≠0,±N,±2N.. (18.56): $d\sin\theta=\lambda/N,2\lambda/N..(N-1)\lambda/N,(N+1)\lambda/N..$ (18.57). Between adjacent principal maxima: N−1 minima, N−2 secondary maxima (N=5: 4 minima, 3 secondary maxima). Secondary maxima weak (~4–6% principal) | (18.56–57) | K15
K17 | Width of principal max | m-th max at dsinθ_m=mλ (18.60); first zero at dsin(θ_m±Δθ_m)=mλ±λ/N (18.61), expand (18.62) ⇒ $\Delta\theta_m=\frac{\lambda}{Nd\cos\theta_m}$ (18.63); sharper as N↑ (and as Nd=grating width↑) | (18.60–63) | K15,P07
K18 | Missing orders (N slit) | principal max absent if dsinθ=mλ and bsinθ=λ,2λ.. (18.58–59); nearly absent if bsinθ≈integer×λ (Fig18.36: b=0.0044,d=0.0132cm,d/b=3 ⇒ 3rd order absent, peaks 0.275°,0.55°,1.1°) | (18.58–59) | K15,K09
K19 | Grating & grating equation | many equidistant slits; grating element d=1/(lines per length); $d\sin\theta=m\lambda$ (18.64); m=0 at θ=0 for all λ (white central); m_max<d/λ (d=2.5λ→2 orders; 1.5λ→1) ; slit source ⇒ line/bands | §18.8 | K15
K20 | Angular dispersion | $d\cos\theta\,\Delta\theta=m\Delta\lambda$ ⇒ $\frac{\Delta\theta}{\Delta\lambda}=\frac{m}{d\cos\theta}$ (18.65); ∝m, ∝1/d; small θ ⇒ normal spectrum (Δθ/Δλ const per order) | (18.65) | K19,P18
K21 | Overlapping orders | order m of λ2 coincides with m+1 of λ1 when mλ2=(m+1)λ1; visible 400–700 nm: 1st/2nd never overlap (800>700), 2nd/3rd overlap (1200<1400) | Ex18.10, Prob 18.9 | K19
K22 | Grating spectra purity | grating spectra sharper/purer & linear; prism spectrum non-linear, deviation depends on dn/dλ | §18.8 | K20,K25
K23 | Rayleigh criterion (grating) | λ+Δλ principal max falls on first min of λ; dip 0.811 I0 (Fig18.39) | §18.8 | K17
K24 | Resolving power of grating | $R=\frac{\lambda}{\Delta\lambda}=mN$ (18.66,18.69): dsinθ=m(λ+Δλ) (18.67)= mλ+λ/N (18.68); depends on N·m not d; Na D lines (Δλ=6 Å, λ=5.89e-5cm) need N≥~1000 first order | (18.66–69) | K23
K25 | Prism RP (contrast) | $R=t\,dn/d\lambda$ (18.73); Cauchy n=A+B/λ²+C/λ⁴ (18.74); dn/dλ=−[2B/λ³+4C/λ⁵] (18.75); crown glass dn/dλ≈−430 cm⁻¹ at 6e-5 cm; t=2.5cm ⇒ R≈1000 | (18.70–75) | K23
K27 | Circular aperture Fraunhofer (Airy) | concentric rings; $I=I_0\left[\frac{2J_1(v)}{v}\right]^2$, $v=\frac{2\pi}{\lambda}a\sin\theta$ (18.19–20); dark rings v=3.832,7.016,10.174 (18.22); sinθ=3.832λ/2πa=0.61λ/a=1.22λ/D (18.23); ring radius f tanθ (18.24); ~84% energy in central disc; divergence (18.25) printed 0.61λ/D≈λ/D, D=2a [FLAG: true first zero 0.61λ/a=1.22λ/D]; general $\Delta\theta\sim\lambda/$(aperture size) (18.26); Ex18.3: a=0.02cm,f=20,λ=6e-5: θ=1.8e-3, r1=3.6e-2cm, r2=6.7e-2cm [V]; lim 2J1(v)/v=1 | §18.3 (outside list), PDF285-286 | K08
K28 | Resolution limit/Rayleigh (circular) | two Airy patterns: just resolved when separation = first dark ring: $\Delta\theta_{min}=1.22\lambda/D$ (dip 0.735 I0, Fig18.25b); unresolved at 2λ/πD (18.39); larger D better; Ex: D=5cm,λ=6e-5cm ⇒ 1.5e-5 rad, ring radius 4.5e-4 cm (f=30) [V]. Microscope (not in Ghatak pages read): $d_{min}=0.61\lambda/(n\sin\alpha)$; oil n≈1.5 ↑NA ⇒ finer; also λ shorter | §18.5 PDF291-292 | K27
K29 | Half-period zone construction (plane wave) | spheres radii d+nλ/2 about P cut wavefront WW' in circles: $r_n=[(d+n\lambda/2)^2-d^2]^{1/2}=\sqrt{n\lambda d}[1+n\lambda/4d]^{1/2}\approx\sqrt{n\lambda d}$ (20.1); adjacent zones path diff λ/2 ⇒ phase π. d=50cm,λ=5e-5cm: r=0.500,0.707,0.866 mm [V] | §20.2 | P09,P11
K30 | Zone area & amplitude | $A_n=\pi r_n^2-\pi r_{n-1}^2\approx\pi\lambda d$ (20.2), equal to first order (exact: A_n=πλd+πλ²(2n−1)/4 ⇒ A_n−A_{n−1}=πλ²/2 ≈0); $u_n\propto A_n(1+\cos\chi)/(2Q_nP)$ (20.4), obliquity; $u_1>u_2>u_3..$ (20.5); $u(P)=u_1-u_2+u_3-..$ (20.3) | (20.2–5) | K29
K31 | Schuster: resultant = u1/2 | regroup (20.6): $u_1/2+(u_1/2-u_2+u_3/2)+..$; since $u_n>\frac12(u_{n-1}+u_{n+1})$ (20.7) brackets negative ⇒ upper bound (20.8); second grouping (20.9) ⇒ lower bound (20.10); ⇒ $u(P)\approx u_1/2$ (20.12), I=I_1/4 (whole wavefront = half first zone amplitude) | (20.6–12) | K30
K32 | Rectilinear propagation | only central zones matter: net amplitude u1/2 comes from first zone region (radius ~√(λd) ~0.5 mm), outer zones cancel in pairs ⇒ light travels along straight line SP; obstacle ≫√(λd) casts sharp shadow, ≈λ-size apertures diffract | §20.2 (qualitative; argument from K31) | K31
K33 | Circular aperture axial intensity | aperture radius a contains p=a²/(λd) zones (Fresnel number); $I=4I_0\sin^2(p\pi/2)$ (I0=unobstructed) [FLAG: book summary prints I0 sin²; text says u1=2×unobstructed ⇒ 4I0]; max odd p: $d=\frac{a^2}{(2n+1)\lambda}$, min even p: $d=\frac{a^2}{2n\lambda}$; a=√(λd) ⇒ amplitude u1=2×(u1/2), I=4I0; a=√(2λd) ⇒ ≈0 | §20.2.1, Ex20.1 | K31
K34 | Opaque disc, Poisson spot | disc blocks first p zones ⇒ $u(P)=u_{p+1}-u_{p+2}+..\approx u_{p+1}/2$ (20.13) ⇒ always bright centre; Poisson predicted 1817 (as objection), Fresnel/Arago 1818 confirmed wave theory | (20.13), §20.2.2 | K31
K35 | Zone plate | rings r_n=√n K, even zones blackened; axial P1 at K²/λ: all odd zones in phase u1+u3+u5.. (20.14); P3 at K²/3λ: (u1−u2+u3)+(u7−u8+u9)+..(20.15) max; P2 at K²/2λ: (u1−u2)+(u5−u6)+.. min (20.16); foci $K^2/\lambda,K^2/3\lambda,K^2/5\lambda..$ (20.17), dark points between. Ex20.2: r=0.1√n cm, λ=5e-5 ⇒ 200,66.7,40,28.6 cm [V] | §20.3 | K29,K34
K36 | Zone plate as lens | point source S at a, image P at b; first-zone edge L: SL+LP−SP=λ/2 (20.18); expand √(a²+r1²)≈a(1+r1²/2a²) (20.19) ⇒ $\frac1a+\frac1b=\frac1f$, $f=r_1^2/\lambda$ (20.20); f∝1/λ ⇒ strong chromatic aberration (red focuses CLOSER, opposite to glass lens); multiple foci; microwave demo λ~1cm. Zone plate vs lens: diffractive, many foci, f∝1/λ, ~transmits only half area | (20.18–20) | K35,P15
K37 | Fresnel integrals | $C(\tau)=\int_0^\tau\cos\frac{\pi u^2}{2}du$, $S(\tau)=\int_0^\tau\sin\frac{\pi u^2}{2}du$ (20.42–43); odd functions (20.44); C(∞)=S(∞)=½, C(0)=S(0)=0 (20.47); $\int_{-\infty}^{\infty}e^{i\pi u^2/2}du=(1+i)$ (20.46); Table 20.1 | §20.6 | P06,P13
K38 | Straight-edge field | edge on η>0 half-plane blocks... point P(0,y), $r\approx d+\frac{\xi^2+(\eta-y)^2}{2d}$ (20.49); (20.50) integral; $u=\sqrt{2/\lambda d}\xi$, $v=\sqrt{2/\lambda d}(\eta-y)$ (20.51); $v_0=-\sqrt{2/\lambda d}\,y$ (20.53); $u(P)=\frac{1-i}{2}u_0\{[\frac12-C(v_0)]+i[\frac12-S(v_0)]\}$ (20.56) | (20.49–56) | K37,P09
K39 | Straight-edge intensity | $I=\frac{I_0}{2}\{[\frac12-C(v_0)]^2+[\frac12-S(v_0)]^2\}$ (20.58); edge of geometric shadow y=0 (v0=0): $I=I_0/4$ (20.59); y→+∞ (lit): u→u0, I→I0 (20.57); deep shadow: I→0 monotonic decrease; universal curve in $\sqrt{2/\lambda d}\,y$ (Fig20.13) | (20.57–59) | K38
K40 | Cornu spiral | parametric (C(τ),S(τ)), spirals into C(½,½) (τ→+∞) and C'(−½,−½); τ labelled on curve; $[C(\tau_2)-C(\tau_1)]+i[S(\tau_2)-S(\tau_1)]=Ae^{i\theta}$ (20.60): chord length=amplitude, tangent angle=phase; shadow point Q: $I=\frac12(QC)^2I_0$ (20.61) | (20.60–61), Fig20.11 | K37
K41 | Straight-edge fringes | maxima v0≈−1.22 (1.37I0), −2.34 (1.20), −3.08 (1.15); minima −1.87 (0.778), −2.74 (0.843), −3.39 (0.872) [V: max 1.3704 at v=1.217]; $I(P_1)=\frac12(1.66)^2I_0\approx1.37I_0$ (20.62); positions $y=\sqrt{\lambda d/2}\,|v_0|$; fringes inside lit region only, spacing shrinks outward, amplitude decays to I0 | (20.62), Fig20.13 | K39,K40

(K26 not used; 40 ids K01–K41 minus K26.)

## 2. DERIVATION SKELETONS
D1 Single slit (K05–K09)
1. n sources spacing Δ, b=(n−1)Δ — discretise slit (18.1)
2. neighbour path diff Δsinθ ⇒ φ=2πΔsinθ/λ — (18.2)
3. E=a[cosωt+cos(ωt−φ)+…+cos(ωt−(n−1)φ)] — superpose (18.3)
4. sum = sin(nφ/2)/sin(φ/2)·cos[ωt−½(n−1)φ] — GP / phasor (18.4)
5. amplitude E_θ=a sin(nφ/2)/sin(φ/2) (18.6)
6. n→∞,Δ→0,nΔ→b; nφ/2→πbsinθ/λ=β; sin(φ/2)≈φ/2 — continuum
7. E_θ=na sinβ/β=A sinβ/β (18.7); E=A(sinβ/β)cos(ωt−β) (18.9)
8. I=I0 sin²β/β² (18.10)
9. zeros β=mπ ⇒ bsinθ=mλ (18.12)
10. dI/dβ=0 ⇒ sinβ(β−tanβ)=0 ⇒ tanβ=β (18.15–16)
11. roots 1.43π,2.46π; I≈4.7%,1.65%,0.83% I0
(Integral version if asked: E∝∫_{−b/2}^{b/2}e^{ikx sinθ}dx = b sinβ/β — equivalent; Ghatak uses discrete sum.)
D2 Two slit (K12–13): E1,E2 (phase Φ1=2πd sinθ/λ) → add → cosγ·cos(ωt−½β−½Φ1) (sum-to-product) → I=4I0 sin²β/β² cos²γ (18.45) → zeros (18.46) → max (18.47).
D3 N slit (K14–17): E=Σ_{j=0}^{N−1}A(sinβ/β)cos(ωt−β−jΦ1) (18.48) → same cosine sum with φ→Φ1, n→N → A(sinβ/β)(sinNγ/sinγ)cos[..] (18.49) → square (18.50). Principal: γ→mπ, ratio→±N. Zeros Nγ=pπ.
D4 Width of principal max (K17, N24Q17 5m): 1. dsinθ_m=mλ (18.60) 2. first zero beside: Nγ=(Nm±1)π ⇒ dsin(θ_m±Δθ_m)=mλ±λ/N (18.61) 3. sin(θ_m±Δ)=sinθ_m±Δcosθ_m (18.62) 4. Δθ_m=λ/(Nd cosθ_m) (18.63) 5. ∝1/N (sharper with N), full width 2Δθ_m.
D5 Grating RP (K24): 1. m-th max λ: dsinθ=mλ 2. λ+Δλ: dsinθ=m(λ+Δλ) (18.67) 3. Rayleigh: coincides with first min of λ: dsinθ=mλ+λ/N (18.68) 4. mΔλ=λ/N ⇒ R=λ/Δλ=mN (18.69).
D6 Dispersion (K20): differentiate dsinθ=mλ at fixed m: dcosθΔθ=mΔλ ⇒ (18.65).
D7 Zone radius/area (K29–30): 1. sphere radius d+nλ/2 2. r_n²=(d+nλ/2)²−d²=nλd+n²λ²/4 3. d≫λ ⇒ r_n≈√(nλd) (20.1) 4. A_n=π(r_n²−r_{n−1}²)≈πλd (20.2) — area independent of n.
D8 Schuster (K31): 1. u=u1−u2+u3−… 2. write u1/2+(u1/2−u2+u3/2)+(u3/2−u4+u5/2)… (20.6) 3. u_n>½(u_{n−1}+u_{n+1}) ⇒ each bracket<0 ⇒ u<u1/2+u_m/2 (20.8) 4. regroup u1−u2/2−(u2/2−u3+u4/2)−… ⇒ u>… (20.10) 5. u_m→small ⇒ u≈u1/2 (20.12).
D9 Zone plate lens law (K36): 1. SL+LP−SP=λ/2 (20.18) 2. a,b≫r1: SL+LP−SP≈r1²/2(1/a+1/b) (20.19) 3. ⇒1/a+1/b=λ... r1²/(2)·(1/a+1/b)=λ/2 ⇒ 1/a+1/b=λ/r1²=1/f, f=r1²/λ (20.20). Plane wave (a=∞): b=f=K²/λ.
D10 Straight edge (K38–39): 1. r≈d+[ξ²+(η−y)²]/2d (20.49) 2. u(P)≈−(iA/λd)∫dξ∫_0^∞dη exp(ik{…}) (20.50) 3. u=√(2/λd)ξ, v=√(2/λd)(η−y) (20.51) 4. u(P)=−(i/2)u0∫_{−∞}^{∞}e^{iπu²/2}du∫_{v0}^{∞}e^{iπv²/2}dv (20.52) 5. first integral=2[C(∞)+iS(∞)]=1+i (20.54) [FLAG: book prints without i] 6. second=[½−C(v0)]+i[½−S(v0)] (20.55) 7. (−i/2)(1+i)=(1−i)/2 ⇒ (20.56) 8. |(1−i)/2|²=½ ⇒ (20.58) 9. v0=0: C=S=0 ⇒ ½I0(¼+¼)=I0/4 (20.59).
D11 Circular aperture axial (K33): zones in aperture p=a²/λd; u=u1−u2+…±u_p, pairs cancel ⇒ odd p: ≈u1 (I≈4I0), even p ≈0.

## 3. WORKED EXAMPLES & PROBLEMS (given → answer, [V]=I recomputed)
Ex18.1: b=0.2mm, f=20cm, λ=5e-5cm: λ/b=2.5e-3 rad; adjacent minima 1st,2nd sep (5−2.5)e-3×20=0.05 cm; maxima β=1.43π,2.46π ⇒ (2.46−1.43)×2.5e-3×20≈0.05 cm. [V]
Ex18.2: same b, screen 3 m: central width 2×3×2.5e-3=0.015 m [V]
Ex18.3: see K27 (3.6e-2 cm, 6.7e-2 cm)
Ex18.9: b=8.8e-3, d=7.0e-2 cm, λ=6.328e-5 cm: first diff min sinθ=7.19e-3 (0.412°); fringe minima sinθ=(n+½)9.04e-4 ⇒ n+½<7.95 ⇒ n=0..7 each side ⇒ 16 minima [V]; Δθ≈λ/d=9.04e-4 rad; screen 15 ft=457.2 cm ⇒ fringe width 0.413 cm [V]. [FLAG: book prints 0.904e-4 and 0.0413 cm; correct 0.413 cm]
Ex18.10: 15000 lines/inch: d=2.54/15000=1.693e-4 cm. (a) 400nm 2nd: 28.2°; 700nm 2nd: 55.8°(book 55.9°); 400nm 3rd: 45.2° ⇒ 3rd(violet)<2nd(red) overlap; 3rd red sin>1 absent. (b) Na D (Δλ=6 Å) 2nd order: Δθ≈1.0e-3 rad=3.47′; ×10 telescope = 34.7′ [V]
Ex20.1: a=0.5mm, λ=5e-5cm: brightest d=a²/λ=0.0025/5e-5=50 cm; darkest a²/2λ=25 cm [V]
Ex20.2: zone plate r=0.1√n cm, λ=5e-5: foci 200, 66.7, 40, 28.6 cm… [V]
Text (§20.6): λ=6e-5 cm,d=120 cm ⇒ √(λd/2)=0.06 cm; maxima y=0.732,1.404,1.848 mm; minima 1.122,1.644,2.034 mm [V]
Ch18 problems:
18.1 λ=5000Å,b=0.5mm: sinθ=m·1e-3 ⇒ 0.057°,0.115°,0.172°; b=0.1mm: 0.287°,0.573°,0.859° [V] (narrower slit ⇒ wider pattern)
18.2 f=20,b=0.6mm,λ=6000Å: 2nd minima θ=2e-3 ⇒ sep 2×2e-3×20=0.08 cm [V]
18.3 ratio I0/I(1st max)=1/0.0472≈21 [V]
18.7 b=0.05,d=0.1cm,λ=6.328e-5,f=10: fringe zeros θ=(n+½)λ/d: 3.164e-4,9.49e-4 rad ⇒ 0.0316,0.0949 mm (book 0.094); third at 0.158 mm lies beyond first diff min 0.1266 mm (=λ f/b); d/b=2 ⇒ 2nd order missing [V]
18.8 b=d: N=2,γ=β ⇒ I=4I0 sin²β cos²β/β²=I0 sin²2β/β²… = single slit width 2b (4·sin²2β/(2β)²) ✓.
18.9 2×4000=8000>7000 ⇒ no overlap of 1st & 2nd.
18.10 W=5cm,b=1e-4,d=2e-4 cm,λ=5.5e-5: d=2e-4 cm (5000/cm), N=25000; m_max<d/λ=3.6 ⇒ m≤3; d/b=2 ⇒ even orders missing ⇒ visible 0,±1,±3; half-width Δθ=λ/(Nd cosθ): m=1 (θ=15.96°) 1.14e-5 rad; m=3 (55.6°) 1.95e-5 rad [V]
18.11 dispersion m/(d cosθ): m=1 5.2e3 rad/cm=5.2e-5 rad/Å; m=3 2.65e4 rad/cm=2.65e-4 rad/Å; R=mN=25000 (m=1), 75000 (m=3) [V]
18.12 d=1.693e-4: 1st order 400nm 13.66°, 700nm 24.42° ⇒ width 10.8°; 2nd 28.19°–55.77° ⇒ 27.6° [V] (don't use 18.65: θ large, Δλ big)
18.13 (=N20Q27) m=1: sinθ=0.348,cosθ=0.938; Δθ=6e-8/(1.693e-4×0.938)=3.78e-4 rad ⇒ ×10 cm=3.8e-3 cm=0.038 mm; (m=2: 9.9e-4 rad, 0.099 mm) [V]
18.14 1 inch,15000 lines,m=2: R=30000
18.15 W=1cm, N=1000 vs 5000, m=2,λ=5e-5: d=1e-3 (sinθ=.1): half-width 5.0e-5 rad; d=2e-4 (sinθ=.5,cos .866): 5.8e-5 rad [V]
18.16 normal incidence θ=30°,m=1: d=λ/sin30°=1.2e-4 cm; if 30° is minimum-deviation (oblique, §18.9 out of scope) d=λ/(2sin15°)=1.16e-4 cm [FLAG ambiguous]
18.24 slits b and 3b, centres 6b: E=A1sinc(β)+A2sinc(3β)e^{iΦ}, Φ=2π6b sinθ/λ=12β; unequal amplitudes b:3b (open-ended, unlikely)
Ch20 problems:
20.1 λ=6e-5,a=0.01cm: max d=a²/((2n+1)λ)=1.67,0.556,0.333 cm; min d=a²/2nλ=0.833,0.417 cm [V]
20.2 disc same radius: bright Poisson spot on axis, centre of shadow
20.3 (λ=6e-5; a=0.1cm implied) max z=166.7,55.6,33.3 cm; (ii) z=50cm minima a=√(2nλz)=0.0775,0.110,0.134 cm [V]; λ=5e-5 ⇒ foci shift (f∝1/λ: chromatic)
20.4 a=1mm, d=200cm: λ=a²/d=5e-5 cm [V]
20.5 f=50,λ=6e-5: r_n=√(nfλ)=√(0.003n) cm=√(0.3n) mm; λ=5e-5 ⇒ f=60 cm [V]
20.6 blacken odd zones instead: P1 gets u2+u4+.. in phase: still focus, less (≈1−small) intensity because u1 is lost; same foci positions
20.7 λ=5000Å,d=1m: v0=−2000·y(m): y=0.5mm (lit) v0=−1.0: I=1.26 I0; O: 0.25; y=1mm lit: v0=−2: 0.84; y=−1mm (shadow) v0=+2: 0.012 [V]. [FLAG: book answer "1.26, 0.24, 0.01" lists 3 values for 4 points]
20.8 λ=6e-5,d=50: √(λd/2)=0.0387 cm; maxima 0.0473, 0.0906 cm; minima 0.0724, 0.1061 cm [V]
20.9 y=1.22√(λd/2) ⇒ λ=2y²/(1.22²d)=2(0.1)²/(1.4884×300)=4.48e-5 cm=4480 Å [V]
20.10 λ=6e-5,d=100: scale 0.05477 cm; 1st→2nd max (2.34−1.22)×0.05477=0.061 cm; I=0.1 in shadow at v0≈0.47 ⇒ y≈0.026 cm (book "≈0.027 cm" belongs to this 2nd part) [V; FLAG]

## 4. PREREQUISITE ATOMS (P | fact | content | used by)
P01 | wave basics | $y=a\cos(kx-\omega t)$, k=2π/λ, ν=c/λ, λ~5e-5cm=5000Å | all
P02 | I∝amplitude² | I=⟨E²⟩; I0 at central max; intensities ratio=square of amplitude ratio | K08,K12
P03 | phase vs path | $\phi=\frac{2\pi}{\lambda}\Delta$; Δ=mλ constructive, (m+½)λ destructive; phasors (arrows) add head to tail | K05,K12,K14
P04 | trig identities | cosA+cosB=2cos((A+B)/2)cos((A−B)/2); sin2x=2sinx cosx; 1−cos2x=2sin²x | K12
P05 | geometric series | $\sum_{j=0}^{N-1}r^j=\frac{1-r^N}{1-r}$; with r=e^{−iφ} ⇒ sin(Nφ/2)/sin(φ/2) · phase | K06,K14
P06 | complex numbers | e^{iθ}=cosθ+isinθ (Euler; Class 11 has only polar form); |z|²=zz*; (1−i)/2 has modulus²=½; (1+i)=√2e^{iπ/4}; Re/Im parts | K37–K40
P07 | small angle/limits | sinθ≈tanθ≈θ (rad), sinx/x→1, cosθ≈1; 1°=π/180 rad | K07,K11,K17
P08 | integration | ∫cos x dx=sin x; ∫e^{ikx}dx=e^{ikx}/ik | D1 integral form
P09 | binomial approx | (1+x)^{n}≈1+nx, |x|≪1 (n=½): √(1+x)≈1+x/2 (fractional power not in Class 11) | K29,K36,K38
P10 | calculus extrema | dI/dβ=0; sinβ(β−tanβ)=0; graph y=tanβ vs y=β | K10
P11 | Huygens principle & wavefront | every wavefront point = secondary source, new wavefront = envelope; plane/spherical wavefronts | K02,K03,K29
P12 | Young's double slit | I=4I0cos²(δ/2); fringe width λD/d; fringes equally spaced | K12,K13
P13 | Gaussian integral | ∫e^{−αx²}dx=√(π/α) ((20.45)) with α=−iπ/2 ⇒ √2e^{iπ/4} | K37
P14 | lens focal planes | parallel beam→focus on focal plane at f·tanθ; source at focus ⇒ collimated | K02,K11
P15 | lens formula | 1/a+1/b=1/f (magnitudes, real image) | K36
P16 | L'Hôpital | lim sinNγ/sinγ=N cosNγ/cosγ=±N at γ=mπ | K15
P17 | units | 1 inch=2.54 cm; 1 Å=1e-8cm=1e-10m; lines/inch→d=2.54/L cm | grating
P18 | differentiation | d(sinθ)=cosθ dθ | K20

## 5. PYQ MAP (Module III)
- Fresnel vs Fraunhofer: N20-Q4 (1m fill: "Fresnel"), N25-Q5 (2m) → K02
- Single slit full derivation & max/min positions: N19-Q33 (10m), N20-Q33 (10m, + intensity diagram), N22-Q33 (10m), N24-Q21 (10m, with figure) → K05–K11 (D1)
- Two-slit: none directly (see untested)
- N-slit intensity distribution: N25-Q21 (10m) → K14–K16 (D3)
- N-slit PM sharpness T/F: N19-Q6 (as N decreases; FALSE), N22-Q10 (as N increases; TRUE) → K17
- Width of principal maxima derive: N24-Q17 (5m) → K17 (D4)
- Grating basics: N20-Q15 (2m explain grating) → K19; N20-Q7 T/F grating spectra purer than prism (TRUE) → K22; N19-Q9 T/F larger grating element ⇒ larger dispersion (FALSE: dispersion ∝1/d) → K20
- Overlapping spectra: N22-Q15 (2m) → K21
- Grating RP equation: N22-Q5 (1m), N24-Q8 (2m): R=λ/Δλ=mN → K24
- Grating RP numericals: N22-Q29 (4m: 0.15m, 6e5 lines/m ⇒ N=90000, m=1 ⇒ R=90000 [V]); N25-Q15 (5m: 1 inch,15000, m=1,λ=500nm ⇒ R=15000, Δλ=0.0333 nm ⇒ 500.033 nm [V]) → K24
- Grating dispersion numerical: N20-Q27 (4m, Na D, 15000 lpi, f=10cm ⇒ ≈0.038 mm 1st order (0.099 mm 2nd) [V]; = Prob18.13) → K20
- Circular aperture (Fraunhofer): N19-Q7 T/F concentric rings (TRUE, Airy); N20-Q21 (4m), N22-Q22 (4m) → K27
- Loudspeaker directionality: N19-Q12 (2m, BORDERLINE – sound): θ≈λ/D (1.22λ/D) ⇒ larger diameter D (≫λ_sound) for narrower beam → K27/K01 (Δθ~λ/aperture, (18.26))
- Resolving power microscope/oil immersion: N19-Q19 (4m, outside Ghatak pages read) → K28
- Eye resolution numerical: N19-Q28 (4m: θ=1.22×6e-7/2e-3=3.66e-4 rad; ×30 m ⇒ 1.1 cm [V]) → K28
- Half-period zones: N19-Q20 (4m construct+area ⇒ πλd), N24-Q19 (5m with figure), N25-Q6 (2m area diff ≈0 (exact πλ²/2) [V]) → K29,K30
- Rectilinear propagation: N22-Q34 (10m) → K29–K32
- Zone plate: N22-Q21 (4m principle & construction) → K35,K36; N19-Q29 (4m: r_n=0.001√n m, λ=4.5e-7 m ⇒ f1=r1²/λ=2.22 m; foci 2.22,0.741,0.444,0.317 m [V]); N20-Q30 (4m: f=60cm,λ=6000Å ⇒ r1=√(fλ)=0.06 cm=0.6 mm [V]) → K35,K36
Untested by any PYQ: K01,K03,K04,K12,K13 (two-slit; missing orders),K18,K23,K25,K33,K34 (Poisson),K37–K41 (entire straight edge!),K31 derivation (only indirectly via N22Q34), K10 secondary max intensities (only inside long answers), K11 width.

## 6. STUDENT TRAPS
- K09: m=0 is NOT a minimum (central max); bsinθ=mλ gives MINIMA, dsinθ=mλ gives MAXIMA (b slit width, d separation).
- K10: secondary maxima at tanβ=β (1.43π…), not (m+½)π; intensity ratio 1:0.047:0.016:0.008.
- K08: β=πbsinθ/λ, uses b; γ=πdsinθ/λ uses d.
- K11: single-slit width angular ±λ/b — total width 2λ/b (×f); not λ/b.
- K13: missing order needs both conditions at SAME θ: d/b=m/p; central max holds 2(d/b)−1 fringes.
- K15: principal max intensity N²I0 (not NI0); secondary maxima N−2, minima N−1 between adjacent principal maxima.
- K17: sharper as N INCREASES (N19Q6 False vs N22Q10 True); Δθ=λ/(Nd cosθ) depends on Nd (grating width) not N alone.
- K20: dispersion ∝1/d (finer grating = more dispersion): larger grating element ⇒ SMALLER dispersion (N19Q9 FALSE).
- K24: R=mN not mN·d; independent of d; R=λ/Δλ, not Δλ/λ; N=total lines illuminated.
- K19: use d=2.54/lines-per-inch cm; m_max<d/λ (sinθ≤1); convert Å.
- K21: higher orders overlap (mλ2=(m+1)λ1), not 1st–2nd for visible.
- K29/K30: zone radii ∝√n, area equal (≈πλd) — radii NOT equally spaced; "half-period" = path diff λ/2.
- K31: whole-wavefront amplitude = u1/2 (intensity ¼ of first zone) — not u1.
- K33: odd zone count ⇒ bright (≈u1, I=4I0), even ⇒ dark; a=√(λd) first zone.
- K34: shadow centre of opaque disc is BRIGHT.
- K35/K36: f=r1²/λ=K²/λ (largest); other foci K²/3λ,K²/5λ (odd only); f∝1/λ chromatic — opposite sense to glass lens.
- K39: shadow edge = I0/4 (not 0, not I0/2); lit side oscillates around I0 with first max 1.37I0; shadow side smooth decay.
- K38: v0=−√(2/λd) y: y>0 lit (v0<0), y<0 shadow (v0>0) in Ghatak's convention; sign flips with source.
- K27: Airy ring zeros 1.22λ/D (=0.61λ/a), not λ/D; Rayleigh uses 1.22λ/D; do not use sinθ=mλ/D.
- K02: Fresnel=finite distance (curved wavefronts), Fraunhofer=plane/infinity (N20Q4 answer "Fresnel").
