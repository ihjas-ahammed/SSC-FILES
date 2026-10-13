> Research brief: atom codes here predate the final teaching organization. Use `coverage_m*.json` and the printed preparation topic route for final P/M/T/Q codes. Source mapping is finalized in `scope_audit.md`.

# Module IV content brief — transients and AC

**Authority:** syllabus units 15–22; Murugeshan 10e §§12.1, 12.3, 12.5, 13.1–13.3, 13.5 (chapter pages 311–328 and 329–379). Local text confirms §12.5 is *charging and discharging a capacitor through an inductance*, both oscillatory. Syllabus unit 16 explicitly includes LR decay although the directly matching textbook §12.2 is omitted from its reading list. Syllabus unit 20 explicitly includes parallel LC although the directly matching textbook §13.4 is omitted. Teach both as syllabus units and label the extra sections “related reading” rather than falsely locating them in assigned sections. Local text also confirms §13.2 covers pure R/L/C and series RL/RC, §13.3 covers series LCR and the $j$ method, and §13.5 is AC power. PYQ mapping pending.

## Atoms and dependencies

Prerequisites **P1** school Ohm/KVL and $q=CV$; **P2** Faraday/Lenz and $V_L=Ldi/dt$; **P3** SHM and $\sin/\cos$; **P4** energy $q^2/(2C)$ and $Li^2/2$. Maths **M1** exponential first-order ODE and initial value; **M2** simple second-order harmonic ODE; **M3** derivative of sine; **M4** complex $j$, phasor addition and modulus/argument; **M5** average of $\cos^2$ and trigonometric product.

| Code | Atomic concept and essential result | Needs | Source |
|---|---|---|---|
| T1 | Passive-sign $V_R=Ri$, $V_C=q/C$, $V_L=Ldi/dt$ and explicit current arrow | P1,P2 | 12.1,12.3,12.5 |
| T2 | RL step KVL $L\dot i+Ri=\mathcal E$ and growth $i=(\mathcal E/R)(1-e^{-tR/L})$ for $i(0)=0$ | T1,M1 | 12.1 |
| T3 | RL source-free decay $i=i_0e^{-tR/L}$; $\tau_L=L/R$ | T2 | unit 16; related 12.2 |
| T4 | RC charging KVL $R\dot q+q/C=\mathcal E$; $q=C\mathcal E(1-e^{-t/RC})$ | T1,M1 | 12.3 |
| T5 | RC charging current $i=(\mathcal E/R)e^{-t/RC}$ and final values | T4 | 12.3 |
| T6 | RC discharge $q=q_0e^{-t/RC}$, $i=\dot q=-q_0e^{-t/RC}/(RC)$ for same positive charging arrow | T4 | 12.3 |
| T7 | Time constants and 63.2% growth / 36.8% remainder at one $\tau$ | T2,T4 | 12.1,12.3 |
| T8 | Ideal LC step: $L\ddot q+q/C=\mathcal E$; $q(t)=C\mathcal E[1-\cos(\omega_0t)]$ for $q(0)=i(0)=0$ | T1,M2 | 12.5(i) |
| T9 | Ideal LC free oscillation: $L\ddot q+q/C=0$, $q=q_0\cos\omega_0t$, $i=-\omega_0q_0\sin\omega_0t$ with $i=\dot q$ | T8,M2 | 12.5(ii) |
| T10 | $\omega_0=1/\sqrt{LC}$, $T=2\pi\sqrt{LC}$; energy $q^2/(2C)+Li^2/2$ conserved ideal LC | T9,P4 | 12.5 |
| T11 | Rotating-coil flux $N B A\cos\omega t$ and emf $N B A\omega\sin\omega t$ | P2,M3 | 13.1 |
| T12 | Sine-wave amplitude, frequency, RMS: $V_{rms}=V_0/\sqrt2$ | T11,M5 | 13.1 |
| T13 | Pure resistor: $Z_R=R$, $v$ and $i$ in phase | T12 | 13.2 |
| T14 | Pure inductor: $Z_L=j\omega L$, $i$ lags $v$ by $90^\circ$ | T12,M4 | 13.2 |
| T15 | Pure capacitor: $Z_C=1/(j\omega C)=-j/(\omega C)$, $i$ leads $v$ by $90^\circ$ | T12,M4 | 13.2 |
| T16 | $j^2=-1$ as quarter-turn, phasors for steady sinusoids only | T13–T15,M4 | 13.3 |
| T17 | Series RL $Z=R+j\omega L$, $|Z|=\sqrt{R^2+(\omega L)^2}$, lag phase | T16 | 13.2 |
| T18 | Series RC $Z=R-j/(\omega C)$, lead phase | T16 | 13.2 |
| T19 | Parallel ideal LC $Y=j(\omega C-1/(\omega L))$; branch currents cancel at $\omega_0$ | T14,T15 | unit 20; related 13.4 |
| T20 | Series RLC $Z=R+j(\omega L-1/(\omega C))$; resonance $\omega_0$, current max for fixed RMS $V$ | T17,T18 | 13.3 |
| T21 | Instantaneous $p(t)=v(t)i(t)$ and mean $P=V_{rms}I_{rms}\cos\phi$ | T12,T16,M5 | 13.5 |
| T22 | Real/reactive/apparent power and power factor; ideal L/C mean power zero | T21 | 13.5 |

## Derivation skeletons, examples and cautions

1. **First-order transients:** Draw source/switch and choose current arrow. KVL RL $\mathcal E=Ri+L\dot i$; solve the *gap* $i_\infty-i$ to make exponential growth intuitive. For decay, remove source, retain closed $R$–$L$ path, KVL $0=Ri+L\dot i$. RC charging $\mathcal E=q/C+R\dot q$; solve gap $q_\infty-q$. For discharge, $0=q/C+R\dot q$. Every graph labels starting value, final value and $\tau$. $R=10\,\mathrm{k\Omega}$, $C=100\,\mu$F, $\mathcal E=5$ V: $\tau=1$ s; $V_C(1\,s)=3.16$ V, $i(1\,s)=0.184$ mA.
2. **LC step versus free:** Murugeshan §12.5(i) has constant source $\mathcal E$ connected to ideal series LC initially at rest. Set $x=q-C\mathcal E$, solve $\ddot x+\omega_0^2x=0$ with $x(0)=-C\mathcal E$, $\dot x(0)=0$, giving $q=C\mathcal E(1-\cos\omega_0t)$ and $i=C\mathcal E\omega_0\sin\omega_0t$. The capacitor reaches $2C\mathcal E$ at half-period in the ideal model, then returns: **there is no final settling without loss**. §12.5(ii) starts with charged capacitor and disconnected source, giving $q=q_0\cos\omega_0t$ and $i=-q_0\omega_0\sin\omega_0t$ under the same $i=\dot q$ convention. Both equations show oscillation; “growth” and “decay” name portions of the cycle, not exponential envelopes. Include idealization note: real R/radiation eventually damps.
3. **Rotating coil to phasor:** Flux $NBA\cos\theta$ with $\theta=\omega t$; differentiate and use Faraday. Show a rotating arrow projected onto fixed axis, then define the phasor convention $v(t)=\Re\{\tilde V e^{j\omega t}\}$. Differentiate multiplies by $j\omega$, integrate divides by $j\omega$. State whether phasor magnitudes are peak or RMS; use RMS for circuit powers and calculations consistently.
4. **Pure and mixed AC:** From $v_R=Ri$, $v_L=L\dot i$, $i_C=C\dot v_C$, get $Z_R$, $Z_L$, $Z_C$; form series impedances by addition, parallel admittances by addition. For ideal parallel LC, $I_L$ lags and $I_C$ leads source voltage; at resonance equal/opposite branch phasors give zero *source* current and ideal infinite input impedance, even though nonzero circulating branch currents can exist. For series RLC with $R=40\,\Omega$, $L=.20$ H, $C=50\,\mu$F: $\omega_0=316$ rad/s, $f_0=50.3$ Hz; at 12 V RMS, $I=0.300$ A, $P=3.60$ W.
5. **Power:** Let $v=V_0\cos\omega t$, $i=I_0\cos(\omega t-\phi)$. Product-to-sum: average of fast $\cos(2\omega t-\phi)$ is zero, leaving $V_0I_0\cos\phi/2=V_{rms}I_{rms}\cos\phi$. Separate “watts” from VA and var; do not claim a pure reactance dissipates average power.

**Traps and editorial boundaries:** Inductor *current* and capacitor *voltage* cannot jump under finite forcing. The sign of RC discharge $i$ depends on the chosen arrow. A battery connected to ideal LC does not produce monotone charging; §12.5 explicitly shows undamped oscillation. Series versus parallel resonance must be taught through $Z$ versus $Y$. $\omega$ is radians/s while $f$ is Hz. Peak and RMS are different by $\sqrt2$. A phasor solves only sinusoidal steady state; it does not replace the switching solution. Cite series LCR/$j$ to §13.3, parallel resonance to syllabus unit 20 (related §13.4), and power to §13.5.
