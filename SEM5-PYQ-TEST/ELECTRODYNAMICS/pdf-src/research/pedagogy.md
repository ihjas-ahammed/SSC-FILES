# Electrodynamics II: teaching and maths brief

**Scope and sources.** Theory Modules I–IV of the Calicut University CU-FYUGP BSc Physics Honours syllabus `PHY4CJ203_ELECTRODYNAMICS_II.pdf`, pp. 97–99 of its printed pagination. Module I: fields in matter (12 h, 16 marks); II: electrodynamics (12 h, 18 marks); III: EM waves (8 h, 18 marks); IV: transient and AC circuits (13 h, 18 marks). The syllabus points to Griffiths, *Introduction to Electrodynamics*, chs. 4, 6, 7, 8, 9 for I–III and Murugeshan, *Electricity and Magnetism*, §§12.1, 12.3, 12.5, 13.1–13.3, 13.5 for IV. Local PDFs exist under `SSC-V2/SEM5/PHY/books/`; check exact notation and example numbers against those PDFs during writing. This is a teaching design and target inventory, not a claim that any target was a PYQ. Module V is practical work and is outside this brief. The 24/14/4 distribution below follows the reusable optics kit's doubled 12/7/2 paper template; verify the actual Electrodynamics II paper pattern separately.

## Reader, sequence and page method

Assume a student remembers Class 10 charge, current, magnetic effect, Ohm's law, and elementary algebra but little calculus. Teach the physical action first, then the diagram, then an incremental calculation, then the formal equation. A page should resolve *one* question: what quantity is being counted, what direction is positive, what changes, and why? Symbols and SI units appear beside their first use. Every derivation step gets a short “why”; every numerical gives a rough size/unit check. Reuse one consistently oriented figure across a derivation, example, and self-check. Put a tiny prerequisite card at the first application of a maths tool, then refer to its code. Do not front-load a long vector-calculus chapter.

Suggested dependency chain: **Class 10:** current is charge flow; magnetic force and induction are effects of moving charge/fields. **Plus One:** vectors, projection, work-energy, circular motion and wave shape. **Plus Two:** dipoles, Gauss law, potential, capacitors, currents, Biot–Savart/Ampère, Faraday/Lenz, AC, EM waves. **This course:** continuous dipoles and bound sources → changing fields and Maxwell → traveling waves and energy flow → circuits as time-dependent applications. Electrodynamics I is a formal prerequisite, but explain its needed results in a short “remind me” box rather than assuming fluency.

Use these bridges when authoring:

| First-use maths | Build from familiar idea | Mini-example and check |
|---|---|---|
| Vector components, dot product | A projection; only the component along a direction contributes to work or flux. Draw angle and normal. | Uniform $\mathbf E=3\hat x+4\hat y$ V/m through a $2\,\mathrm{m^2}$ surface normal to $+x$: $\Phi=\mathbf E\cdot\mathbf A=6\,\mathrm{V,m}$, not 10. |
| Cross product | Perpendicular direction set by right hand; magnitude contains $\sin\theta$. | $\mathbf v=v\hat x$, $\mathbf B=B\hat y$ gives $q\mathbf v\times\mathbf B=qvB\hat z$ for positive $q$; reverse for electron. |
| Field vs source | One source makes a field everywhere; a material contains many microscopic dipoles. | Two nearby opposite charges make a dipole despite net charge zero. Label $\mathbf p$ from negative to positive. |
| Divergence and flux | Flux is signed flow through a closed surface; divergence is the tiny-volume net outflow per volume. | For $\mathbf F=ax\hat x$, a cube of side $L$ has net outward flux $aL^3$, so $\nabla\cdot\mathbf F=a$. Closed-surface flux is not the field magnitude. |
| Curl and line integral | Circulation is the signed sum of tangential field along a loop; curl measures circulation per tiny area. | A field circulating around an axis can have nonzero $\oint\mathbf E\cdot d\mathbf l$ even when the path returns to its starting point. Fix loop direction, then surface normal by right hand. |
| Product/chain derivatives | Rate of change of a composed quantity; the sign encodes direction. | $f(x,t)=A\cos(kx-\omega t)$: $\partial f/\partial x=-kA\sin(kx-\omega t)$, $\partial f/\partial t=+\omega A\sin(kx-\omega t)$. Wave speed $\omega/k$. |
| Exponential ODE | Rate of remaining gap is proportional to that gap. | $dV/dt=-V/RC$ gives $V(t)=V_0e^{-t/RC}$; at $t=RC$, $V=0.368V_0$. For growth, solve for the gap to final value. |
| Sine/phasor and $j$ | One rotating arrow projects to a sine wave. $j^2=-1$ rotates by $90^\circ$; it is a calculation aid for steady sinusoidal AC. | $Z_R=R$, $Z_L=j\omega L$, $Z_C=1/(j\omega C)=-j/(\omega C)$. Draw the phasor before taking magnitude or phase. |
| Energy and power | Energy is stored locally; power is rate of transfer. | Capacitor $U_E=\tfrac12CV^2$ and inductor $U_B=\tfrac12LI^2$. $\mathbf S=\mathbf E\times\mathbf H$ points along EM energy transport; its units are W/m². |

Specific worked conceptual bridges: (1) A dielectric slab has no extra *free* charge when polarized, yet opposite bound surface charges appear because dipoles at the surface do not fully cancel; first sum three aligned dipoles, then introduce $\sigma_b=\mathbf P\cdot\hat n$. (2) A stationary loop in changing $B$ has emf although no wire segment moves; draw induced $\mathbf E$ tangent to the loop and contrast $q\mathbf v\times\mathbf B$ in a moving rod. (3) Charging capacitor: conduction current ends at the plates, changing electric flux exists in the gap, so Ampère–Maxwell gives the same circulation for either spanning surface. (4) For a wave along $+x$ with $\mathbf E\parallel+y$, choose $\mathbf B\parallel+z$ so $\mathbf E\times\mathbf B\parallel+x$; verify both the field ratio and units. (5) In RC discharge, $q$ and $i$ decline exponentially, while ideal LC energy trades between $q^2/(2C)$ and $Li^2/2$ and does *not* decay. (6) For a series RLC circuit, add voltage phasors, not peak magnitudes; at resonance $X_L=X_C$ so source voltage and current are in phase.

## Error watchlist and writing rules

- State whether $\rho_b=-\nabla\cdot\mathbf P$ and $\sigma_b=\mathbf P\cdot\hat n$ use outward normal; keep free/bound charge and free/bound current distinct. $\mathbf D=\epsilon_0\mathbf E+\mathbf P$ and $\mathbf H=\mathbf B/\mu_0-\mathbf M$ are definitions, not independent new physical forces.
- Do not silently transfer the electric-boundary pattern to magnetism: $D_\perp$ jumps by free surface charge, $E_\parallel$ is continuous in electrostatics; $B_\perp$ is continuous, $H_\parallel$ jumps by free surface current. Explain orientations before signs. If fields vary in time, use Maxwell's general integral boundary laws and mention the assumptions behind any simplified static statement.
- In matter, $\epsilon_r=1+\chi_e$ and $\mu_r=1+\chi_m$ only for the stated linear, isotropic constitutive forms; ferromagnets are nonlinear and history-dependent. Do not present a fixed permeability as a universal ferromagnetic law.
- Magnetic bound *surface* current is $\mathbf K_b=\mathbf M\times\hat n$; volume current is $\mathbf J_b=\nabla\times\mathbf M$. A uniform $\mathbf M$ can have zero volume bound current yet nonzero surface bound current.
- Fix a loop orientation and its right-hand surface normal before using $\mathcal E=-d\Phi_B/dt$. Separate the sign of emf from its magnitude. Give flux units Wb, emf V, inductance H.
- Displacement current means the $\epsilon_0\partial\mathbf E/\partial t$ term (or $\partial\mathbf D/\partial t$ in matter), not literal charge crossing vacuum. Use $\nabla\cdot(\nabla\times\mathbf B)=0$ and continuity to expose why the old Ampère law fails.
- A plane wave's polarization is the direction of $\mathbf E$, not its travel direction. $E/B=c$ in vacuum; in a simple linear medium use the medium wave speed $v$. The wave equation must have the second *space* derivative and second *time* derivative with matching dimensions.
- Poynting's theorem is an energy balance: $\partial u/\partial t+\nabla\cdot\mathbf S=-\mathbf J\cdot\mathbf E$. Distinguish instantaneous from cycle-average intensity; $\langle\cos^2\rangle=1/2$. Radiation pressure formulas require an absorption/reflection assumption.
- In transients, draw current and capacitor-voltage reference arrows before writing KVL. $\tau_{RC}=RC$, $\tau_{LR}=L/R$; an ideal LC oscillates with $\omega_0=1/\sqrt{LC}$ and has no exponential decay. “Growth/decay of current in LC” in the syllabus should be interpreted through portions of the oscillation, not as RC/RL exponential behavior.
- Use $\omega=2\pi f$ and radians in reactances. For a capacitor $Z_C=-j/(\omega C)$, current leads voltage. For an inductor $Z_L=j\omega L$, current lags voltage. RMS values belong in $P=V_{\rm rms}I_{\rm rms}\cos\phi$; do not mix peak and RMS values.
- A parallel ideal LC has admittances that cancel at resonance (ideally infinite input impedance); a series ideal LC has canceling reactances (minimum impedance when series R is present). Real losses limit both.

## Assessment-target inventory

Each numbered line below is **one primary target** for one eventual question. Supporting tools may recur, but use a different principal result, definition, construction, or application per line. `S` = short (24), `P` = paragraph/problem (14), `E` = essay/derivation (4). In an actual paper, attach authenticated PYQ tags only after mapping source papers; a PYQ outside these syllabus units can be shown as optional practice rather than forcing it into the core coverage count. The final question should be answerable from its prepare topic and its answer key should cite that topic code.

### Module I — electric and magnetic fields in matter

**Short targets (24)**

1. S01 — Electric dipole moment vector and its SI unit.
2. S02 — Polarization $\mathbf P$ as dipole moment per unit volume.
3. S03 — Physical meaning of alignment versus induced polarization.
4. S04 — Bound volume charge density $\rho_b$ and its sign convention.
5. S05 — Bound surface charge density $\sigma_b$ and outward normal.
6. S06 — Why total bound charge of a finite polarized body is zero.
7. S07 — Electric field of a polarized body as a superposition of dipoles.
8. S08 — Definition of electric displacement $\mathbf D$.
9. S09 — Free-charge Gauss law for $\mathbf D$.
10. S10 — Tangential $\mathbf E$ at an electrostatic boundary.
11. S11 — Normal $\mathbf D$ jump from free surface charge.
12. S12 — Electric susceptibility $\chi_e$ in a linear dielectric.
13. S13 — Permittivity $\epsilon$ and relative dielectric constant $\epsilon_r$.
14. S14 — Magnetization $\mathbf M$ as magnetic dipole moment density.
15. S15 — Bound volume current $\mathbf J_b$.
16. S16 — Bound surface current $\mathbf K_b$.
17. S17 — Physical current-loop interpretation of magnetization (conceptual only).
18. S18 — Definition of auxiliary field $\mathbf H$.
19. S19 — Free-current Ampère law for $\mathbf H$ in magnetostatics.
20. S20 — Field of a magnetized object represented by equivalent bound currents.
21. S21 — SI units and physical distinction between $\mathbf B$ and $\mathbf H$.
22. S22 — Magnetic susceptibility $\chi_m$ for a linear medium.
23. S23 — Permeability $\mu$ and relative permeability $\mu_r$.
24. S24 — Ferromagnetic domains and hysteresis as the reason linear $\chi_m$ fails.

**Paragraph/problem targets (14)**

1. P01 — Find bound surface charge on a uniformly polarized block using face normals.
2. P02 — Compute $\rho_b$ for a specified nonuniform $\mathbf P(x)$ and interpret its sign.
3. P03 — Find potential of a localized polarized object using its dipole-density integral.
4. P04 — Apply a Gaussian surface to find $\mathbf D$ in a free-charge geometry.
5. P05 — Resolve $\mathbf E$ into normal/tangential components across a dielectric interface.
6. P06 — Calculate $\mathbf P$ and $\mathbf D$ from $\chi_e$ and a given $\mathbf E$.
7. P07 — Determine capacitance change from insertion of a linear dielectric slab, with assumptions.
8. P08 — Compute bound surface current for uniform magnetization of a cylinder.
9. P09 — Compute $\mathbf J_b$ for a specified spatially varying $\mathbf M$.
10. P10 — Find $\mathbf H$ in a free-current symmetry geometry using Ampère's law.
11. P11 — Find total magnetic dipole moment $\mathbf m=\int\mathbf M\,d\tau$ for a specified nonuniform magnetization.
12. P12 — Calculate $\mathbf B$, $\mathbf M$ and $\mathbf H$ for given linear $\chi_m$ and free current.
13. P13 — Compare free and bound source contributions to total $\mathbf B$ in one geometry.
14. P14 — Explain a simple hysteresis-loop reading: remanence, coercivity, energy loss.

**Essay targets (4)**

1. E01 — Derive the bound-charge formulas and explain why polarization charge appears at surfaces.
2. E02 — Derive/use $\mathbf D$ Gauss law and dielectric boundary conditions, with the free/bound distinction.
3. E03 — Derive bound-current formulas and interpret the currents physically through microscopic loops.
4. E04 — Develop $\mathbf H$ Ampère law and magnetic material response, then delimit the linear-permeability model.

### Module II — electrodynamics and Maxwell equations

**Short targets (24)**

1. S01 — Microscopic form $\mathbf J=\sigma\mathbf E$ of Ohm's law.
2. S02 — Resistance $R=\ell/(\sigma A)$ for uniform material.
3. S03 — Emf as non-electrostatic work per charge around a circuit.
4. S04 — Difference between emf and terminal potential difference.
5. S05 — Magnetic part of Lorentz force $q\mathbf v\times\mathbf B$.
6. S06 — Motional emf as $\int(\mathbf v\times\mathbf B)\cdot d\mathbf l$.
7. S07 — Magnetic flux definition and its units.
8. S08 — Faraday law with oriented-loop minus sign.
9. S09 — Lenz's-law direction of induced current.
10. S10 — Why an induced electric field can have nonzero closed-loop circulation.
11. S11 — Self-inductance definition by flux linkage.
12. S12 — Mutual inductance definition by flux linkage.
13. S13 — Inductor back emf $-L\,dI/dt$ and sign meaning.
14. S14 — Magnetic energy $\tfrac12LI^2$.
15. S15 — Magnetic energy density in vacuum $B^2/(2\mu_0)$.
16. S16 — Continuity equation for charge.
17. S17 — The contradiction of uncorrected Ampère law for a charging capacitor.
18. S18 — Displacement-current term and its units.
19. S19 — Gauss law for electricity, differential form.
20. S20 — Gauss law for magnetism, differential form.
21. S21 — Faraday law, differential form.
22. S22 — Ampère–Maxwell law, differential form.
23. S23 — Free-source Maxwell equations in matter using $\mathbf D,\mathbf H$.
24. S24 — Charge/current boundary sources in Maxwell's interface conditions.

**Paragraph/problem targets (14)**

1. P01 — Compute current density and total current in an Ohmic wire from $\sigma$, $A$, $\mathbf E$.
2. P02 — Find the emf and terminal voltage of a source with internal resistance.
3. P03 — Derive $B\ell v$ for a moving rod from the magnetic force and explain polarity.
4. P04 — Compute induced emf from a stated time-dependent flux and choose the loop direction.
5. P05 — Determine induced $\mathbf E$ around a circular symmetry loop from changing uniform $B$.
6. P06 — Find self-induced emf from a specified current ramp and inductance.
7. P07 — Evaluate mutual-induced emf in a second coil from a changing first-coil current.
8. P08 — Compute inductor energy change and supplied power during a current ramp.
9. P09 — Estimate magnetic energy density for a given vacuum $B$ and volume.
10. P10 — Use continuity to test a proposed $\rho(\mathbf r,t),\mathbf J(\mathbf r,t)$ pair.
11. P11 — Compare conduction current with displacement current in a charging parallel-plate capacitor.
12. P12 — Apply an integral Maxwell equation to a symmetric changing-field geometry.
13. P13 — Translate one Maxwell equation between differential and integral form and explain the orientation.
14. P14 — Apply Maxwell boundary conditions to specified free surface charge/current, with component diagrams.

**Essay targets (4)**

1. E01 — Explain motional versus transformer emf with Lorentz force and Faraday law, including a complete sign convention.
2. E02 — Develop induction, self/mutual inductance and magnetic-field energy from flux linkage.
3. E03 — Show why charge conservation requires Maxwell's correction of Ampère law; use the charging capacitor.
4. E04 — State and interpret all four Maxwell equations in vacuum and matter, integral/differential forms and interface conditions.

### Module III — electromagnetic waves

**Short targets (24)**

1. S01 — Meaning of a one-dimensional traveling-wave form $f(x-vt)$.
2. S02 — Wavelength, period, frequency and wave speed relation.
3. S03 — Wave number $k$ and angular frequency $\omega$.
4. S04 — Phase and phase difference in a sinusoidal wave.
5. S05 — Direction of travel from $kx-\omega t$ versus $kx+\omega t$.
6. S06 — Transverse versus longitudinal motion/oscillation.
7. S07 — Linear polarization as electric-field direction.
8. S08 — Circular/elliptic polarization as two transverse components with phase difference.
9. S09 — Vacuum electric-field wave equation.
10. S10 — Vacuum magnetic-field wave equation.
11. S11 — Vacuum speed $c=1/\sqrt{\mu_0\epsilon_0}$.
12. S12 — Mutual orthogonality of $\mathbf E$, $\mathbf B$ and propagation direction.
13. S13 — Vacuum plane-wave amplitude ratio $E_0/B_0=c$.
14. S14 — Poynting vector direction and W/m² units.
15. S15 — Electric energy density in a wave.
16. S16 — Magnetic energy density in a wave.
17. S17 — Equal electric and magnetic energy densities for a vacuum plane wave.
18. S18 — Local conservation statement in Poynting's theorem.
19. S19 — Cycle-average intensity of a sinusoidal wave.
20. S20 — Electromagnetic momentum density in vacuum.
21. S21 — Radiation pressure on a perfect absorber.
22. S22 — Radiation pressure on a perfect reflector at normal incidence.
23. S23 — Speed in a simple homogeneous linear medium $1/\sqrt{\mu\epsilon}$.
24. S24 — Wave impedance $E/H=\sqrt{\mu/\epsilon}$ in a simple linear medium.

**Paragraph/problem targets (14)**

1. P01 — Read wavelength, frequency, phase and travel direction from an explicit $f(x,t)$.
2. P02 — Differentiate a trial traveling wave to verify the one-dimensional wave equation.
3. P03 — Add two perpendicular components to identify linear versus circular polarization.
4. P04 — Derive the $\mathbf E$ wave equation from source-free vacuum Maxwell equations.
5. P05 — Derive the $\mathbf B$ wave equation from source-free vacuum Maxwell equations.
6. P06 — Complete the missing field vector for a plane wave using direction and Maxwell's curl law.
7. P07 — Compute $B_0$ from $E_0$ (or conversely) and check SI units.
8. P08 — Determine instantaneous $\mathbf S$ for specified perpendicular fields.
9. P09 — Derive the local energy balance by dotting the two curl equations appropriately.
10. P10 — Calculate average intensity from field amplitude and distinguish peak from mean.
11. P11 — Compute momentum delivered to an absorbing surface over a stated time.
12. P12 — Compare reflected and absorbed radiation pressures for the same intensity.
13. P13 — Calculate wavelength and speed in a given linear medium, keeping frequency fixed at an interface.
14. P14 — Compute field ratio and impedance in a nonmagnetic dielectric.

**Essay targets (4)**

1. E01 — Build one-dimensional and sinusoidal wave descriptions, including polarization states and phase.
2. E02 — Derive vacuum EM wave equations from Maxwell and construct a monochromatic plane-wave solution.
3. E03 — Derive Poynting's theorem and interpret energy density, flux, intensity and momentum transport.
4. E04 — Analyze EM-wave propagation in a simple linear medium, deriving speed and field ratio with constitutive assumptions.

### Module IV — transient circuits and alternating currents

**Short targets (24)**

1. S01 — Capacitor law $q=CV$ and sign/reference convention.
2. S02 — Inductor voltage law $V_L=L\,di/dt$ under passive sign convention.
3. S03 — RC time constant $RC$ and its unit.
4. S04 — RL time constant $L/R$ and its unit.
5. S05 — Initial capacitor voltage continuity.
6. S06 — Initial inductor current continuity.
7. S07 — Final DC behaviour of ideal capacitor in series circuit.
8. S08 — Final DC behaviour of ideal inductor in series circuit.
9. S09 — RC charging current shape.
10. S10 — RC discharge current direction and shape.
11. S11 — RL switch-on current shape.
12. S12 — RL switch-off current shape.
13. S13 — Ideal LC natural angular frequency.
14. S14 — Energy exchange between capacitor and inductor in ideal LC.
15. S15 — Sinusoidal emf generated by a rotating coil and its amplitude.
16. S16 — RMS versus peak sinusoidal voltage/current.
17. S17 — Resistive AC: voltage/current phase relation.
18. S18 — Inductive reactance and current phase relation.
19. S19 — Capacitive reactance and current phase relation.
20. S20 — $j$ operator as a quarter-cycle phasor rotation.
21. S21 — Series RL impedance magnitude and phase.
22. S22 — Series RC impedance magnitude and phase.
23. S23 — Parallel LC resonance as susceptance cancellation.
24. S24 — AC power factor $\cos\phi$ and its physical meaning.

**Paragraph/problem targets (14)**

1. P01 — Solve RC charging voltage from KVL and an initial condition.
2. P02 — Calculate RC discharge current and time to a stated fraction.
3. P03 — Solve RL current growth from KVL and an initial condition.
4. P04 — Find RL decay current and dissipated stored energy.
5. P05 — Solve lossless LC charge/current oscillation from initial charge and zero current.
6. P06 — Calculate generator peak emf from $N$, $B$, area and rotation rate.
7. P07 — Convert peak, RMS and mean-square sinusoidal values correctly.
8. P08 — Find current and voltage phase in a pure R, L or C circuit from one given waveform.
9. P09 — Perform one impedance calculation with $j$ and show the phasor diagram.
10. P10 — Find current, power factor and element voltages in series RL.
11. P11 — Find current, phase and element voltages in series RC.
12. P12 — Find branch and source currents in parallel ideal LC, including resonance condition.
13. P13 — Find series RLC resonant frequency, impedance and current from given $R,L,C$.
14. P14 — Calculate average/real, reactive and apparent power from RMS values and phase.

**Essay targets (4)**

1. E01 — Derive and compare RC/RL growth and decay, initial/final behaviour and time constants.
2. E02 — Develop ideal LC oscillations through the second-order ODE and energy conservation.
3. E03 — Derive rotating-coil emf, explain phasors/$j$, and obtain pure R/L/C AC behaviour.
4. E04 — Analyze RL, RC, parallel LC and series RLC responses, resonance and average AC power using impedance.

## Coverage gate for the writer

Before rendering, map every syllabus unit 1–22 to at least one prepare topic and one assessment target; check 42 *distinct primary* targets per module (24 S + 14 P + 4 E). Link each question to a prepare code and each answer to the same code. The essay may synthesize short/problem concepts, but its *primary ask* should be a derivation or argument absent from the other lines. Recompute every numerical, check units and directions, and inspect every mobile page as a Class 10 learner. Resolve the actual Electrodynamics II PYQ years/pattern from source papers before labeling anything as PYQ or asserting complete PYQ coverage.
