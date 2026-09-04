Below are the examples and problems from the text, organized strictly by section and subsection. Each original item includes its complete analytical solution, followed immediately by a newly designed, similar **Practice Problem (without answer)**.

---

# Table of Contents
1. [7.1 Electromotive Force](#71-electromotive-force)
   - [7.1.1 Ohm’s Law](#711-ohms-law)
   - [7.1.2 Electromotive Force](#712-electromotive-force)
   - [7.1.3 Motional Emf](#713-motional-emf)
2. [7.2 Electromagnetic Induction](#72-electromagnetic-induction)
   - [7.2.1 Faraday’s Law](#721-faradays-law)
   - [7.2.2 The Induced Electric Field](#722-the-induced-electric-field)
   - [7.2.3 Inductance](#723-inductance)
   - [7.2.4 Energy in Magnetic Fields](#724-energy-in-magnetic-fields)
3. [7.3 Maxwell’s Equations](#73-maxwells-equations)
   - [7.3.1 & 7.3.2 How Maxwell Fixed Ampère’s Law](#731--732-how-maxwell-fixed-ampères-law)
   - [7.3.3 Maxwell’s Equations](#733-maxwells-equations)
   - [7.3.4 Magnetic Charge](#734-magnetic-charge)

---

# 7.1 Electromotive Force

## 7.1.1 Ohm’s Law

### Example 7.1
**Problem:**  
A cylindrical resistor of uniform cross-sectional area $A$ and length $L$ is made from a material with conductivity $\sigma$. The potential is held constant over each end face, with a potential difference $V$ across the ends. What current flows through it?

**Solution:**  
Within the cylinder, the electric field is uniform and directed along the axis:
$$E = \frac{V}{L}$$
By Ohm’s law ($\mathbf{J} = \sigma \mathbf{E}$), the current density is also uniform:
$$J = \sigma \frac{V}{L}$$
The total current is obtained by integrating $J$ over the cross-sectional area:
$$I = JA = \frac{\sigma A}{L} V$$

**Practice Problem 7.1P:**  
A truncated cone of length $L$ has circular end faces of radii $r_1$ and $r_2$ ($r_2 > r_1$). The material has uniform conductivity $\sigma$. Assuming the equipotentials are approximately flat planes perpendicular to the central axis, determine the resistance $R$ and the current $I$ flowing through the cone when a potential difference $V$ is applied across its ends.

---

### Example 7.2
**Problem:**  
Two long coaxial cylindrical metal shells of radii $a$ and $b$ ($a < b$) and length $L$ are separated by a weakly conducting material of uniform conductivity $\sigma$. If they are maintained at a potential difference $V$, what current flows radially between them over the length $L$?

**Solution:**  
Let the inner cylinder carry a charge per unit length $\lambda$. The electric field between the cylinders is radial:
$$\mathbf{E}(s) = \frac{\lambda}{2\pi \epsilon_0 s}\hat{\mathbf{s}}$$
The current passing through a cylindrical Gaussian surface of radius $s$ and length $L$ is:
$$I = \int \mathbf{J}\cdot d\mathbf{a} = \sigma \int \mathbf{E}\cdot d\mathbf{a} = \sigma \left(\frac{\lambda}{2\pi\epsilon_0 s}\right)(2\pi s L) = \frac{\sigma L \lambda}{\epsilon_0}$$
The potential difference between the cylinders is:
$$V = -\int_b^a \mathbf{E}\cdot d\mathbf{l} = \frac{\lambda}{2\pi \epsilon_0}\ln\left(\frac{b}{a}\right)$$
Expressing $\lambda$ in terms of $V$:
$$\lambda = \frac{2\pi \epsilon_0 V}{\ln(b/a)}$$
Substituting $\lambda$ into the current expression gives:
$$I = \frac{2\pi \sigma L}{\ln(b/a)} V$$

**Practice Problem 7.2P:**  
A coaxial cable consists of an inner spherical conductor of radius $a$ enclosed by a concentric spherical shell of radius $b$. The region between them is filled with a material of uniform conductivity $\sigma$. If a potential difference $V$ is maintained between the conductors, find the current $I$ that flows between them.

---

### Example 7.3
**Problem:**  
Prove that the electric field inside the cylindrical resistor of Example 7.1 is strictly uniform.

**Solution:**  
In a homogeneous conductor carrying steady currents, the potential satisfies Laplace’s equation:
$$\nabla^2 V = 0$$
Let the axis of the cylinder be along the $z$-axis, with end faces at $z = 0$ and $z = L$. The boundary conditions are:
1. $V(x, y, 0) = 0$
2. $V(x, y, L) = V_0$
3. On the outer cylindrical surface, no current leaks into the surrounding insulator:
$$\mathbf{J}\cdot \hat{\mathbf{n}} = \sigma \frac{\partial V}{\partial n} = 0 \implies \frac{\partial V}{\partial n} = 0$$
A linear potential function:
$$V(z) = \frac{V_0}{L} z$$
satisfies Laplace's equation identically ($\nabla^2 V = \partial^2 V / \partial z^2 = 0$) and matches all boundary conditions: $V(0) = 0$, $V(L) = V_0$, and $\partial V/\partial n = \partial V/\partial s = 0$ on the curved boundary. By the second uniqueness theorem of electrostatics, this is the unique solution.  
The corresponding electric field is:
$$\mathbf{E} = -\nabla V = -\frac{V_0}{L}\hat{\mathbf{z}}$$
which is completely uniform.

**Practice Problem 7.3P:**  
A conductor of uniform conductivity $\sigma$ occupies a rectangular slab $0 \le x \le a$, $0 \le y \le b$, and $0 \le z \le c$. The faces at $x = 0$ and $x = a$ are held at potentials $0$ and $V_0$, respectively, while the remaining four boundaries are in contact with perfect insulators. Use Laplace's equation and boundary conditions to show that the current density $\mathbf{J}$ is uniform throughout the slab.

---

### Problem 7.1
**Problem:**  
Two concentric metal spherical shells of radii $a$ and $b$ ($a < b$) are separated by a weakly conducting material of conductivity $\sigma$.  
(a) If they are maintained at a potential difference $V$, what current flows from one to the other?  
(b) What is the resistance between the shells?  
(c) Show that if $b \gg a$, the outer radius $b$ becomes irrelevant. Exploit this result to find the current flowing between two metal spheres, each of radius $a$, immersed deep in sea water (conductivity $\sigma$) and held far apart, if the potential difference between them is $V$.

**Solution:**  
**(a)** By spherical symmetry, current flows radially outward. The total current crossing a sphere of radius $r$ ($a \le r \le b$) is:
$$I = \int \mathbf{J}\cdot d\mathbf{a} = J(r) 4\pi r^2 = \sigma E(r) 4\pi r^2 \implies E(r) = \frac{I}{4\pi \sigma r^2}$$
The potential difference is:
$$V = -\int_b^a E(r)\,dr = \frac{I}{4\pi\sigma}\left(\frac{1}{a} - \frac{1}{b}\right)$$
Solving for $I$:
$$I = \frac{4\pi \sigma a b}{b - a} V$$

**(b)** From $V = IR$:
$$R = \frac{V}{I} = \frac{1}{4\pi\sigma}\left(\frac{1}{a} - \frac{1}{b}\right)$$

**(c)** As $b \to \infty$, the resistance between a single sphere of radius $a$ and infinity is:
$$R_1 = \frac{1}{4\pi\sigma a}$$
For two identical spheres held very far apart ($d \gg a$), the disturbance to the current lines of one sphere by the presence of the other is negligible. The total resistance between them is the series combination of the resistance from the first sphere to infinity and from infinity to the second sphere:
$$R_{\text{total}} = R_1 + R_2 = \frac{1}{4\pi\sigma a} + \frac{1}{4\pi\sigma a} = \frac{1}{2\pi \sigma a}$$
Thus, the current flowing between the two spheres is:
$$I = \frac{V}{R_{\text{total}}} = 2\pi\sigma a V$$

**Practice Problem 7.1P:**  
Two long, parallel metal cylindrical wires of radius $a$ are separated by a center-to-center distance $d \gg a$ and embedded in a medium of uniform conductivity $\sigma$. Determine the resistance per unit length between the two wires.

---

### Problem 7.2
**Problem:**  
A capacitor $C$ has been charged to potential $V_0$. At $t = 0$, it is connected to a resistor $R$ and begins to discharge.  
(a) Determine the charge on the capacitor $Q(t)$ and the current $I(t)$ through the resistor.  
(b) Find the original electrostatic energy stored in the capacitor, and confirm that the total heat delivered to the resistor equals this energy.  
(c) Now imagine charging the uncharged capacitor by connecting it in series with resistor $R$ to a battery of voltage $V_0$ at $t = 0$. Determine $Q(t)$ and $I(t)$.  
(d) Find the total energy output of the battery, the heat delivered to the resistor, and the final energy stored in the capacitor. What fraction of the work done by the battery is stored in the capacitor?

**Solution:**  
**(a)** During discharge:
$$\frac{Q}{C} + IR = 0 \quad \text{with } I = \frac{dQ}{dt}$$
$$\frac{dQ}{dt} + \frac{1}{RC}Q = 0 \implies Q(t) = Q_0 e^{-t/RC} = C V_0 e^{-t/RC}$$
The current flowing through the resistor is:
$$I(t) = -\frac{dQ}{dt} = \frac{V_0}{R} e^{-t/RC}$$

**(b)** The initial energy stored in the capacitor is:
$$U_{\text{cap}} = \frac{1}{2} C V_0^2$$
The total heat dissipated in the resistor is:
$$U_{\text{heat}} = \int_0^\infty I^2 R \, dt = \int_0^\infty \frac{V_0^2}{R} e^{-2t/RC} \, dt = \frac{V_0^2}{R} \left[ -\frac{RC}{2} e^{-2t/RC} \right]_0^\infty = \frac{1}{2} C V_0^2$$
Thus, $U_{\text{heat}} = U_{\text{cap}}$.

**(c)** During charging:
$$V_0 - IR - \frac{Q}{C} = 0 \implies R \frac{dQ}{dt} + \frac{Q}{C} = V_0$$
With the initial condition $Q(0) = 0$:
$$Q(t) = C V_0 \left(1 - e^{-t/RC}\right)$$
$$I(t) = \frac{dQ}{dt} = \frac{V_0}{R} e^{-t/RC}$$

**(d)** The work delivered by the battery is:
$$W_{\text{battery}} = \int_0^\infty V_0 I(t) \, dt = V_0 \int_0^\infty \frac{dQ}{dt} \, dt = V_0 Q_{\text{final}} = C V_0^2$$
The heat dissipated in the resistor is:
$$U_{\text{heat}} = \int_0^\infty I^2 R \, dt = \frac{V_0^2}{R} \int_0^\infty e^{-2t/RC} \, dt = \frac{1}{2} C V_0^2$$
The final energy stored in the capacitor is:
$$U_{\text{final}} = \frac{Q_{\text{final}}^2}{2C} = \frac{1}{2} C V_0^2$$
The fraction of work done by the battery that appears as stored electrical energy is:
$$\frac{U_{\text{final}}}{W_{\text{battery}}} = \frac{\frac{1}{2}CV_0^2}{CV_0^2} = \frac{1}{2} \quad (50\%)$$

**Practice Problem 7.2P:**  
An uncharged capacitor $C$ is connected in series with a resistor $R$ to a time-varying voltage source $V(t) = \alpha t$ (where $\alpha$ is a positive constant) switched on at $t = 0$. Determine the charge $Q(t)$ on the capacitor and the current $I(t)$ as functions of time.

---

### Problem 7.3
**Problem:**  
(a) Two metal conductors of arbitrary shape are embedded in a weakly conducting, nonpolarizable medium of conductivity $\sigma$. Show that the resistance $R$ between them is related to the capacitance $C$ of the same arrangement by:
$$R = \frac{\epsilon_0}{\sigma C}$$  
(b) If a battery charges them to a potential difference $V_0$ and is then disconnected, find the discharge potential $V(t)$ and the time constant $\tau$ in terms of $\epsilon_0$ and $\sigma$.

**Solution:**  
**(a)** Enclose one of the electrodes with a closed Gaussian surface $S$. The total current leaving the electrode is:
$$I = \oint_S \mathbf{J}\cdot d\mathbf{a} = \sigma \oint_S \mathbf{E}\cdot d\mathbf{a}$$
By Gauss’s law, $\oint_S \mathbf{E}\cdot d\mathbf{a} = Q/\epsilon_0$, so:
$$I = \frac{\sigma}{\epsilon_0} Q$$
Since $C = Q/V$ and $R = V/I$:
$$RC = \left(\frac{V}{I}\right)\left(\frac{Q}{V}\right) = \frac{Q}{I} = \frac{\epsilon_0}{\sigma} \implies R = \frac{\epsilon_0}{\sigma C}$$

**(b)** From the continuity equation applied to the conductor, $I = -dQ/dt$:
$$\frac{dQ}{dt} = -I = -\frac{\sigma}{\epsilon_0} Q \implies Q(t) = Q_0 e^{-(\sigma/\epsilon_0)t}$$
Since $V(t) = Q(t)/C$:
$$V(t) = V_0 e^{-t/\tau}$$
where the decay time constant is:
$$\tau = \frac{\epsilon_0}{\sigma}$$

**Practice Problem 7.3P:**  
The space between the plates of a parallel-plate capacitor with area $A$ and separation $d$ is filled with a lossy dielectric material of permittivity $\epsilon$ and conductivity $\sigma$. Find the leakage resistance $R$, the capacitance $C$, and the product $RC$.

---

### Problem 7.4
**Problem:**  
Two long coaxial metal cylinders of radii $a$ and $b$ ($a < b$) and length $L$ are separated by a material whose conductivity is radially non-uniform: $\sigma(s) = k/s$, where $k$ is a constant. Find the resistance between the cylinders.

**Solution:**  
For steady-state radial current flow, the total current $I$ passing through any cylindrical coaxial surface of radius $s$ and length $L$ must be independent of $s$:
$$I = J(s) (2\pi s L) \implies J(s) = \frac{I}{2\pi L s}$$
Using Ohm's law, $\mathbf{J} = \sigma(s)\mathbf{E}$:
$$E(s) = \frac{J(s)}{\sigma(s)} = \frac{\frac{I}{2\pi L s}}{\frac{k}{s}} = \frac{I}{2\pi k L}$$
Notice that $E(s)$ is independent of $s$.  
The potential difference between the cylinders is:
$$V = -\int_b^a E(s)\,ds = \int_a^b \frac{I}{2\pi k L}\,ds = \frac{I (b - a)}{2\pi k L}$$
Therefore, the resistance is:
$$R = \frac{V}{I} = \frac{b - a}{2\pi k L}$$

**Practice Problem 7.4P:**  
The region between two concentric spherical shells of radii $a$ and $b$ ($a < b$) is filled with an inhomogeneous conductor whose conductivity varies as $\sigma(r) = \sigma_0 (a/r)$. Find the resistance $R$ between the shells.

---

## 7.1.2 Electromotive Force

### Problem 7.5
**Problem:**  
A battery of emf $\mathcal{E}$ and internal resistance $r$ is connected to a variable load resistance $R$. What choice of $R$ maximizes the power delivered to the load?

**Solution:**  
The current circulating through the load is:
$$I = \frac{\mathcal{E}}{R + r}$$
The power delivered to the load is:
$$P(R) = I^2 R = \frac{\mathcal{E}^2 R}{(R + r)^2}$$
To find the maximum, set $dP/dR = 0$:
$$\frac{dP}{dR} = \mathcal{E}^2 \frac{(R + r)^2 - 2R(R + r)}{(R + r)^4} = \mathcal{E}^2 \frac{r - R}{(R + r)^3} = 0$$
This requires:
$$R = r$$
Since $d^2P/dR^2 < 0$ at this point, the maximum power transfer occurs when the load resistance equals the internal resistance.

**Practice Problem 7.5P:**  
A DC source of open-circuit voltage $V_{\text{th}}$ and internal source resistance $R_{\text{th}}$ is connected to a load whose resistance varies with current as $R_{\text{load}}(I) = R_0 + \beta I$. Determine the current $I$ that maximizes the power delivered to this load.

---

### Problem 7.6
**Problem:**  
A rectangular loop of wire of height $h$ and total resistance $R$ has one vertical leg located between the plates of a charged parallel-plate capacitor, oriented parallel to the uniform electric field $\mathbf{E}$. The opposite vertical leg lies far outside the capacitor, where the field is negligible.  
What is the electromotive force around this loop? What current flows?

**Solution:**  
By definition, the emf around the closed loop is:
$$\mathcal{E} = \oint \mathbf{f}\cdot d\mathbf{l}$$
Here, the only force acting on the charges is electrostatic ($\mathbf{f} = \mathbf{E}$). Since the electric field produced by the static charges on the capacitor plates is strictly conservative:
$$\oint \mathbf{E}\cdot d\mathbf{l} = 0$$
Consequently, the net emf is identically zero:
$$\mathcal{E} = 0$$
Because the net emf is zero, the steady current is:
$$I = \frac{\mathcal{E}}{R} = 0$$
*(Physical explanation: When the loop is placed in the field, mobile charges within the wire redistribute momentarily to form surface charges that completely cancel the electric field inside the wire segments, resulting in $\mathbf{E}_{\text{inside}} = 0$ everywhere within the conductor).*

**Practice Problem 7.6P:**  
A rectangular conducting wire frame is placed entirely inside a static, non-uniform electrostatic field $\mathbf{E}(x, y) = \alpha y \hat{\mathbf{x}} + \alpha x \hat{\mathbf{y}}$. Find the emf $\mathcal{E}$ around the loop.

---

## 7.1.3 Motional Emf

### Example 7.4
**Problem:**  
A metal disk of radius $a$ rotates at constant angular velocity $\omega$ about its vertical axis in a uniform magnetic field $\mathbf{B} = B\hat{\mathbf{z}}$. A circuit is formed by connecting a load resistor $R$ between the central axle and a sliding contact on the rim. Find the current flowing through $R$.

**Solution:**  
At a radial distance $s$ from the rotation axis, the linear velocity of the disk material is $\mathbf{v} = \omega s \hat{\boldsymbol{\phi}}$.  
The magnetic force per unit charge is:
$$\mathbf{f}_{\text{mag}} = \mathbf{v}\times \mathbf{B} = (\omega s \hat{\boldsymbol{\phi}}) \times (B\hat{\mathbf{z}}) = \omega s B \hat{\mathbf{s}}$$
The electromotive force generated from the axle ($s = 0$) to the rim ($s = a$) is:
$$\mathcal{E} = \int_0^a \mathbf{f}_{\text{mag}} \cdot d\mathbf{s} = \int_0^a \omega s B \, ds = \frac{1}{2}\omega B a^2$$
Assuming the resistance of the disk, sliding contacts, and connecting wires is negligible compared to $R$, the current through the resistor is:
$$I = \frac{\mathcal{E}}{R} = \frac{\omega B a^2}{2R}$$

**Practice Problem 7.4P:**  
A thin conducting rod of length $L$ is pivoted at one end and rotates at constant angular velocity $\omega$ in a plane perpendicular to a uniform magnetic field $B$. Determine the potential difference between the pivoted end and the free tip of the rod.

---

### Problem 7.7
**Problem:**  
A metal bar of mass $m$ slides without friction on two parallel horizontal conducting rails separated by a distance $l$. A resistor $R$ connects the rails at one end, and a uniform magnetic field $\mathbf{B}$ points vertically downward (into the plane).  
(a) If the bar moves to the right at speed $v$, what is the current in the resistor, and in what direction does it flow?  
(b) What is the magnetic force on the bar, and what is its direction?  
(c) If the bar is given an initial speed $v_0$ at $t = 0$ and left to slide, find its speed $v(t)$ at any subsequent time.  
(d) Show that the total energy delivered to the resistor is equal to the initial kinetic energy $\frac{1}{2}m v_0^2$.

**Solution:**  
**(a)** The motional emf generated across the moving rod is:
$$\mathcal{E} = v B l$$
By Lenz’s law (or the Lorentz force $\mathbf{f}_{\text{mag}} = \mathbf{v}\times \mathbf{B}$, which pushes positive charges upward along the bar), the current flows upward through the moving bar and therefore downward (or counterclockwise) through the resistor $R$. The current magnitude is:
$$I = \frac{\mathcal{E}}{R} = \frac{v B l}{R}$$

**(b)** The magnetic force acting on the current-carrying bar is:
$$\mathbf{F} = I (\mathbf{l} \times \mathbf{B}) = I l B (-\hat{\mathbf{x}}) = -\frac{B^2 l^2 v}{R}\hat{\mathbf{x}}$$
The force acts to the left, opposing the motion.

**(c)** Newton’s second law for the bar is:
$$m \frac{dv}{dt} = -\frac{B^2 l^2}{R} v \implies \frac{dv}{dt} = -\frac{B^2 l^2}{m R} v$$
Integrating with $v(0) = v_0$:
$$v(t) = v_0 e^{-t/\tau}, \quad \text{where } \tau = \frac{m R}{B^2 l^2}$$

**(d)** The total energy dissipated in the resistor is:
$$E_R = \int_0^\infty I^2 R \, dt = \int_0^\infty \left(\frac{B l v(t)}{R}\right)^2 R \, dt = \frac{B^2 l^2 v_0^2}{R} \int_0^\infty e^{-2t/\tau} \, dt$$
$$E_R = \frac{B^2 l^2 v_0^2}{R} \left( \frac{\tau}{2} \right) = \frac{B^2 l^2 v_0^2}{R}\left(\frac{m R}{2 B^2 l^2}\right) = \frac{1}{2} m v_0^2$$
which equals the initial kinetic energy.

**Practice Problem 7.7P:**  
In the sliding-bar system described above, suppose the resistor $R$ is replaced by an ideal capacitor $C$. If the bar is projected with initial speed $v_0$ at $t = 0$, determine its acceleration and speed as a function of time.

---

### Problem 7.8
**Problem:**  
A square loop of wire of side length $a$ lies in the plane of a long straight wire carrying a steady current $I$. The nearest edge of the loop is parallel to the wire at a distance $s$.  
(a) Find the magnetic flux through the loop.  
(b) If the loop is pulled directly away from the straight wire at speed $v$, find the induced emf and state whether the induced current flows clockwise or counterclockwise.  
(c) What is the induced emf if the loop is pulled parallel to the wire at speed $v$?

**Solution:**  
**(a)** The magnetic field produced by the straight wire at distance $y$ is:
$$B(y) = \frac{\mu_0 I}{2\pi y}$$
The flux through an area strip $da = a\,dy$ is:
$$\Phi = \int_s^{s+a} B(y) a \, dy = \frac{\mu_0 I a}{2\pi}\int_s^{s+a}\frac{dy}{y} = \frac{\mu_0 I a}{2\pi} \ln\left(\frac{s+a}{s}\right)$$

**(b)** When the loop is pulled away, $s$ increases with rate $ds/dt = v$:
$$\mathcal{E} = -\frac{d\Phi}{dt} = -\frac{d\Phi}{ds}\frac{ds}{dt} = -\frac{\mu_0 I a v}{2\pi}\left(\frac{1}{s+a} - \frac{1}{s}\right) = \frac{\mu_0 I a^2 v}{2\pi s(s+a)}$$
As the loop moves away, the outward flux decreases; by Lenz’s law, the induced current flows **clockwise** to bolster the decreasing magnetic flux.

**(c)** When the loop moves parallel to the wire, the relative position of every point on the loop with respect to the wire remains unchanged ($ds/dt = 0$), so:
$$\frac{d\Phi}{dt} = 0 \implies \mathcal{E} = 0$$

**Practice Problem 7.8P:**  
A circular loop of radius $a$ lies in the plane of an infinitely long wire carrying a steady current $I$. The center of the loop is at a distance $d > a$ from the wire and is moving away from the wire at a constant velocity $v$. Determine the induced emf in the loop.

---

### Problem 7.9
**Problem:**  
The magnetic flux through a closed loop is defined as $\Phi = \int_S \mathbf{B}\cdot d\mathbf{a}$. An infinite variety of surfaces can span the same boundary loop. Justify why the choice of surface does not affect the value of $\Phi$.

**Solution:**  
Let $S_1$ and $S_2$ be two distinct open surfaces bounded by the same closed curve $\mathcal{P}$. Together, $S_1$ and $-S_2$ (with $S_2$ having its orientation reversed) form a closed surface $S = S_1 \cup (-S_2)$ that encloses a volume $V$.  
By the divergence theorem:
$$\int_{S_1} \mathbf{B}\cdot d\mathbf{a} - \int_{S_2} \mathbf{B}\cdot d\mathbf{a} = \oint_S \mathbf{B}\cdot d\mathbf{a} = \int_V (\nabla \cdot \mathbf{B})\,d\tau$$
Because magnetic fields have no divergence ($\nabla \cdot \mathbf{B} = 0$):
$$\int_{S_1} \mathbf{B}\cdot d\mathbf{a} - \int_{S_2} \mathbf{B}\cdot d\mathbf{a} = 0 \implies \int_{S_1} \mathbf{B}\cdot d\mathbf{a} = \int_{S_2} \mathbf{B}\cdot d\mathbf{a}$$
The magnetic flux is therefore independent of the surface chosen.

**Practice Problem 7.9P:**  
Suppose a theoretical particle existed such that $\nabla \cdot \mathbf{B} = \mu_0 \rho_m \neq 0$. If a closed wire loop encloses a total magnetic charge $Q_m$, calculate the difference in magnetic flux evaluated over two different surfaces spanning the same loop when one surface contains the charge and the other does not.

---

### Problem 7.10
**Problem:**  
A square loop of side length $a$ is mounted on a vertical shaft and rotated at a constant angular velocity $\omega$ in a uniform horizontal magnetic field $\mathbf{B}$. Find the induced electromotive force $\mathcal{E}(t)$.

**Solution:**  
Let the normal to the loop form an angle $\theta(t) = \omega t$ with the direction of $\mathbf{B}$ (setting $\theta = 0$ at $t = 0$).  
The magnetic flux through the loop is:
$$\Phi(t) = \mathbf{B}\cdot \mathbf{A} = B a^2 \cos(\omega t)$$
By Faraday’s law:
$$\mathcal{E}(t) = -\frac{d\Phi}{dt} = -\frac{d}{dt}\left[B a^2 \cos(\omega t)\right] = B a^2 \omega \sin(\omega t)$$

**Practice Problem 7.10P:**  
A flat circular coil of $N$ tightly wound turns and radius $r$ is rotated at angular frequency $\omega$ about an axis lying in the plane of the coil. The rotation axis is tilted at an angle of $45^\circ$ relative to a uniform magnetic field $\mathbf{B}$. Find the induced emf $\mathcal{E}(t)$.

---

### Problem 7.11
**Problem:**  
A square loop of side length $a$ is cut from a thick sheet of aluminum (mass density $d_m = 2.7\times 10^3\text{ kg/m}^3$, conductivity $\sigma = 3.8\times 10^7\ \Omega^{-1}\text{m}^{-1}$). The top side of the loop is in a uniform horizontal magnetic field $B = 1\text{ T}$ (pointing into the page), while the bottom edge is outside the field. The loop falls under gravity.  
(a) Find the terminal velocity of the loop.  
(b) Find the velocity as a function of time and calculate the time needed to reach $90\%$ of terminal velocity.  
(c) What happens if a tiny slit is cut in the loop?

**Solution:**  
Let the loop cross section be a square of wire thickness $w \times w$.  
The perimeter of the loop is $4a$, so its resistance is:
$$R = \frac{1}{\sigma}\frac{4a}{w^2}$$
The mass of the loop is:
$$m = d_m (\text{Volume}) = d_m (4a w^2)$$
**(a)** When falling at speed $v$, only the top horizontal leg of length $a$ experiences motional emf:
$$\mathcal{E} = B a v \implies I = \frac{B a v}{R} = \frac{B a v \sigma w^2}{4a} = \frac{1}{4}\sigma B v w^2$$
The upward magnetic braking force acting on this top leg is:
$$F_B = I a B = \left(\frac{1}{4}\sigma B v w^2\right) a B = \frac{1}{4}\sigma a B^2 w^2 v$$
At terminal velocity, the magnetic force balances gravity ($F_B = mg$):
$$\frac{1}{4}\sigma a B^2 w^2 v_t = (4 a w^2 d_m) g$$
Notice that both the area of the loop $a$ and the wire cross section $w^2$ cancel:
$$v_t = \frac{16 d_m g}{\sigma B^2}$$
Substituting the numerical values ($g \approx 9.8\text{ m/s}^2$):
$$v_t = \frac{16 (2.7\times 10^3)(9.8)}{(3.8\times 10^7)(1)^2} \approx 0.0111\text{ m/s} = 1.11\text{ cm/s}$$

**(b)** The equation of motion is:
$$m\frac{dv}{dt} = mg - \alpha v \implies \frac{dv}{dt} = g\left(1 - \frac{v}{v_t}\right)$$
Integrating from rest ($v(0) = 0$):
$$v(t) = v_t \left(1 - e^{-t/\tau}\right), \quad \text{where } \tau = \frac{v_t}{g} = \frac{0.0111}{9.8} \approx 1.13\times 10^{-3}\text{ s}$$
To reach $90\%$ of $v_t$:
$$1 - e^{-t_{90}/\tau} = 0.9 \implies t_{90} = \tau \ln(10) \approx (1.13\times 10^{-3})(2.303) \approx 2.6\times 10^{-3}\text{ s}$$

**(c)** If a slit is cut in the loop, the conducting circuit is broken; no circulating current can flow ($I = 0$). Consequently, the magnetic retarding force vanishes ($F_B = 0$), and the loop accelerates downward at free-fall acceleration $g$.

**Practice Problem 7.11P:**  
A thin square loop of mass $m$, resistance $R$, and side $a$ falls vertically into a horizontal uniform magnetic field $B$ that terminates sharply at a horizontal boundary. Determine the terminal velocity if the loop enters the field from above with its bottom edge parallel to the field boundary.

---

# 7.2 Electromagnetic Induction

## 7.2.1 Faraday’s Law

### Example 7.6
**Problem:**  
A long cylindrical bar magnet of length $L$ and radius $a$ carries uniform axial magnetization $\mathbf{M} = M\hat{\mathbf{z}}$. It moves at constant velocity $v$ through a circular wire ring of radius slightly larger than $a$. Sketch and describe the induced emf $\mathcal{E}(t)$ as a function of time.

**Solution:**  
A uniformly magnetized cylinder of magnetization $\mathbf{M}$ is field-equivalent to a solenoid carrying a bound surface current $\mathbf{K}_b = \mathbf{M}\times \hat{\mathbf{n}} = M\hat{\boldsymbol{\phi}}$.  
1. When the magnet is far away, the flux through the ring is zero ($\Phi = 0$).  
2. As the front end enters the ring, the upward magnetic flux increases rapidly to its maximum value:
$$\Phi_{\max} \approx B_{\text{inside}} (\pi a^2) = \mu_0 M \pi a^2$$
By Faraday’s law, $\mathcal{E} = -d\Phi/dt$, producing a negative spike in emf.  
3. While the uniform body of the magnet passes through the ring, the flux remains essentially constant ($\Phi \approx \text{const}$), so $\mathcal{E} \approx 0$.  
4. When the trailing end passes through and exits, the flux drops back to zero, producing a positive spike in emf of equal magnitude and opposite polarity.

**Practice Problem 7.6P:**  
A small magnetic dipole $\mathbf{m} = m\hat{\mathbf{z}}$ is dropped along the vertical $z$-axis through a circular wire ring of radius $R$ lying in the $xy$-plane at $z = 0$. Using the quasistatic dipole field, determine the magnetic flux through the ring as a function of the dipole position $z$.

---

### Example 7.7
**Problem:**  
In the “jumping ring” demonstration, an aluminum ring is placed over the iron core of an AC solenoid. When the solenoid is energized, the ring jumps upward. Explain the physical mechanism using Lenz's law.

**Solution:**  
When current is switched into the solenoid, an upward-increasing magnetic flux penetrates the ring. By Faraday’s law, this changing flux induces an emf and a circulating current around the ring. By Lenz’s law, the induced current flows in such a direction that its own magnetic field opposes the applied flux change; thus, the induced magnetic dipole moment of the ring opposes the solenoid’s magnetic field. This orientation corresponds to parallel antiparallel magnetic moments, producing a repulsive Lorentz force that accelerates the ring upward off the core.

**Practice Problem 7.7P:**  
A solid copper plate is placed on a table directly beneath a vertical electromagnet. When the electromagnet is suddenly powered with a rising DC current, explain the direction of the induced eddy currents in the copper plate and whether the net force between the plate and magnet is attractive or repulsive.

---

### Problem 7.13
**Problem:**  
A long solenoid of radius $a$ is driven by an alternating current producing an internal axial field $\mathbf{B}(t) = B_0 \cos(\omega t)\hat{\mathbf{z}}$. A circular loop of wire of radius $a/2$ and resistance $R$ is placed coaxially inside the solenoid. Find the induced current $I(t)$ in the loop.

**Solution:**  
The magnetic flux through the circular loop of radius $a/2$ is:
$$\Phi(t) = B(t) \cdot \pi\left(\frac{a}{2}\right)^2 = \frac{\pi a^2}{4} B_0 \cos(\omega t)$$
By Faraday’s law, the induced emf is:
$$\mathcal{E}(t) = -\frac{d\Phi}{dt} = \frac{\pi a^2 \omega B_0}{4} \sin(\omega t)$$
By Ohm’s law, the induced current is:
$$I(t) = \frac{\mathcal{E}(t)}{R} = \frac{\pi a^2 \omega B_0}{4R} \sin(\omega t)$$

**Practice Problem 7.13P:**  
A single-turn circular loop of radius $r$ and resistance $R$ is placed coaxially *outside* a long solenoid of radius $a < r$ with $n$ turns per unit length carrying current $I(t) = I_0 \sin(\omega t)$. Find the current induced in the loop.

---

### Problem 7.14
**Problem:**  
A square wire loop of side length $a$ lies in the first quadrant of the $xy$-plane ($0 \le x \le a$, $0 \le y \le a$). The region contains a non-uniform time-varying magnetic field $\mathbf{B}(y, t) = k y^3 t^2 \hat{\mathbf{z}}$, where $k$ is a constant. Find the induced emf in the loop.

**Solution:**  
The magnetic flux through the loop is:
$$\Phi(t) = \int_0^a dx \int_0^a dy \, B(y, t) = a \int_0^a k y^3 t^2 \, dy = a k t^2 \left[ \frac{y^4}{4} \right]_0^a = \frac{k a^5 t^2}{4}$$
By Faraday’s law, the induced emf is:
$$\mathcal{E} = -\frac{d\Phi}{dt} = -\frac{d}{dt}\left(\frac{k a^5 t^2}{4}\right) = -\frac{k a^5 t}{2}$$

**Practice Problem 7.14P:**  
A square loop of side length $a$ lies in the $xy$-plane with vertices at $(0,0)$, $(a,0)$, $(a,a)$, and $(0,a)$. A time-dependent magnetic field is given by $\mathbf{B}(x, y, t) = \beta x y t^3 \hat{\mathbf{z}}$. Find the induced emf in the loop as a function of time.

---

### Problem 7.15
**Problem:**  
When a strong cylindrical neodymium magnet is dropped through a vertical aluminum pipe, it takes several seconds to fall, whereas an unmagnetized iron cylinder of identical geometry drops in a fraction of a second. Explain why.

**Solution:**  
As the magnet falls, its motion creates a time-dependent magnetic flux through horizontal cross sections of the conducting pipe wall. By Faraday's law, this changing flux generates circulating electric fields and induces eddy currents within the pipe walls. By Lenz’s law, the eddy currents below the falling magnet circulate in a direction that repels the falling magnet, while the eddy currents above circulate so as to attract it. Both effects generate a net upward magnetic braking force that opposes gravity, causing the magnet to quickly reach a low terminal velocity. For the unmagnetized cylinder, no magnetic fields or eddy currents are generated, and it accelerates freely under gravity.

**Practice Problem 7.15P:**  
A thin non-magnetic sheet of copper is pulled horizontally between the pole pieces of a strong horseshoe magnet. Explain the origin of the mechanical resistance felt by the person pulling the sheet, and predict the effect of cutting slits into the sheet.

---

## 7.2.2 The Induced Electric Field

### Example 7.8
**Problem:**  
A uniform magnetic field $\mathbf{B}(t) = B(t)\hat{\mathbf{z}}$ fills a cylindrical region of radius $R$. Find the induced electric field $\mathbf{E}$ at a distance $s$ from the axis.

**Solution:**  
By symmetry, the induced electric field lines form concentric circles centered on the cylindrical axis: $\mathbf{E} = E(s)\hat{\boldsymbol{\phi}}$.  
Apply Faraday’s law in integral form:
$$\oint \mathbf{E}\cdot d\mathbf{l} = -\frac{d\Phi}{dt}$$
Around a circular path of radius $s$:
$$\oint \mathbf{E}\cdot d\mathbf{l} = E(s)(2\pi s)$$
- **Inside the field region ($s < R$):**
$$\Phi(t) = \pi s^2 B(t) \implies E(s)(2\pi s) = -\pi s^2 \frac{dB}{dt}$$
$$\mathbf{E}(s) = -\frac{s}{2}\frac{dB}{dt}\hat{\boldsymbol{\phi}}$$
- **Outside the field region ($s > R$):**
$$\Phi(t) = \pi R^2 B(t) \implies E(s)(2\pi s) = -\pi R^2 \frac{dB}{dt}$$
$$\mathbf{E}(s) = -\frac{R^2}{2s}\frac{dB}{dt}\hat{\boldsymbol{\phi}}$$

**Practice Problem 7.8P:**  
A magnetic field pointing in the $z$-direction is non-uniform inside a cylinder of radius $R$: $\mathbf{B}(s, t) = B_0 (s/R) \cos(\omega t)\hat{\mathbf{z}}$ (and zero for $s > R$). Find the induced electric field $\mathbf{E}(s, t)$ both inside and outside the cylinder.

---

### Example 7.9
**Problem:**  
A thin insulating wheel of radius $b$ has a uniform linear charge density $\lambda$ glued along its outer rim. In the central core out to radius $a$ ($a < b$), there is a uniform magnetic field $\mathbf{B}_0 = B_0\hat{\mathbf{z}}$; outside $r = a$, the field is zero. If the magnetic field is turned off, show that the total angular momentum imparted to the wheel is independent of the rate at which the field drops.

**Solution:**  
As the field decreases from $B_0$ to $0$, the changing magnetic flux induces a circumferential electric field at the rim ($s = b$):
$$\oint \mathbf{E}\cdot d\mathbf{l} = E(b)(2\pi b) = -\frac{d\Phi}{dt} = -\pi a^2 \frac{dB}{dt} \implies E(b) = -\frac{a^2}{2b}\frac{dB}{dt}$$
The total tangential force on the rim charge $Q = 2\pi b \lambda$ is:
$$F = Q E(b) = (2\pi b \lambda)\left(-\frac{a^2}{2b}\frac{dB}{dt}\right) = -\pi a^2 \lambda \frac{dB}{dt}$$
The torque on the wheel about its central axis is:
$$N = b F = -\pi a^2 b \lambda \frac{dB}{dt}$$
The total angular momentum imparted to the wheel is obtained by integrating the torque over the entire time interval:
$$\Delta L_z = \int N \, dt = -\pi a^2 b \lambda \int_{B_0}^0 dB = \pi a^2 b \lambda B_0$$
This result is completely independent of the duration or functional profile of the field decay.

**Practice Problem 7.9P:**  
A spherical nonconducting shell of radius $R$ carries a uniform surface charge $\sigma$. A uniform magnetic field $\mathbf{B}(t) = B_0 e^{-\alpha t}\hat{\mathbf{z}}$ permeates all space. Calculate the total torque $\mathbf{N}(t)$ exerted on the spherical shell by the induced electric field.

---

### Example 7.10
**Problem:**  
An infinitely long straight wire carries a slowly varying current $I(t)$. In the quasistatic approximation, determine the induced electric field as a function of the distance $s$ from the wire.

**Solution:**  
In the quasistatic approximation, the magnetic field is:
$$\mathbf{B}(s, t) = \frac{\mu_0 I(t)}{2\pi s}\hat{\boldsymbol{\phi}}$$
By symmetry, the induced electric field is parallel to the wire: $\mathbf{E} = E(s)\hat{\mathbf{z}}$.  
Apply Faraday’s law to a rectangular loop of length $l$ parallel to the axis, with radial bounds from $s_0$ to $s$:
$$\oint \mathbf{E}\cdot d\mathbf{l} = [E(s_0) - E(s)]l = -\frac{d}{dt}\int_{s_0}^s B(s') l \, ds' = -\frac{\mu_0 l}{2\pi}\frac{dI}{dt}\int_{s_0}^s \frac{ds'}{s'} = -\frac{\mu_0 l}{2\pi}\frac{dI}{dt}\left(\ln s - \ln s_0\right)$$
Thus:
$$E(s) = \left[\frac{\mu_0}{2\pi}\frac{dI}{dt}\ln s + K(t)\right]\hat{\mathbf{z}}$$
where $K(t)$ is independent of $s$.

**Practice Problem 7.10P:**  
An infinite plane sheet carrying a uniform surface current $\mathbf{K}(t) = K_0 \cos(\omega t)\hat{\mathbf{x}}$ lies in the $xy$-plane at $z = 0$. In the quasistatic approximation, determine the induced electric field $\mathbf{E}(z, t)$ for all $z$.

---

### Problem 7.16
**Problem:**  
A long solenoid of radius $a$ with $n$ turns per unit length carries a time-dependent current $I(t)$. In the quasistatic approximation, find the induced electric field $\mathbf{E}(s, t)$ as a function of distance $s$ from the axis, both inside ($s < a$) and outside ($s > a$) the solenoid.

**Solution:**  
Inside the solenoid, the magnetic field is uniform:
$$\mathbf{B}(t) = \mu_0 n I(t)\hat{\mathbf{z}}$$
Outside, the magnetic field is negligible ($\mathbf{B} \approx 0$).  
By azimuthal symmetry, $\mathbf{E} = E(s)\hat{\boldsymbol{\phi}}$.  
Applying Faraday’s law to a circle of radius $s$:
- **Inside ($s < a$):**
$$E(s)(2\pi s) = -\frac{d}{dt}\left[\mu_0 n I(t) \pi s^2\right] = -\mu_0 n \pi s^2 \frac{dI}{dt}$$
$$\mathbf{E}(s, t) = -\frac{\mu_0 n s}{2}\frac{dI}{dt}\hat{\boldsymbol{\phi}}$$
- **Outside ($s > a$):**
$$E(s)(2\pi s) = -\frac{d}{dt}\left[\mu_0 n I(t) \pi a^2\right] = -\mu_0 n \pi a^2 \frac{dI}{dt}$$
$$\mathbf{E}(s, t) = -\frac{\mu_0 n a^2}{2s}\frac{dI}{dt}\hat{\boldsymbol{\phi}}$$

**Practice Problem 7.16P:**  
A long cylindrical tube of radius $R$ carries a uniform time-dependent surface current density $\mathbf{K}(t) = k t^2 \hat{\boldsymbol{\phi}}$. Find the induced electric field $\mathbf{E}(s, t)$ inside and outside the cylinder.

---

### Problem 7.17
**Problem:**  
An alternating current $I(t) = I_0 \cos(\omega t)$ flows down a long straight wire along the $z$-axis and returns along a coaxial conducting tube of radius $a$.  
(a) In what direction does the induced electric field point?  
(b) Assuming that the electric field vanishes at the outer tube ($s = a$), find $\mathbf{E}(s, t)$.

**Solution:**  
**(a)** Inside the cable ($s < a$), the magnetic field circles the axis: $\mathbf{B} \propto \hat{\boldsymbol{\phi}}$. From $\nabla \times \mathbf{E} = -\partial \mathbf{B}/\partial t$, the curl of $\mathbf{E}$ must be azimuthal, which means the field itself points in the longitudinal direction: $\mathbf{E} = E(s, t)\hat{\mathbf{z}}$.

**(b)** The quasistatic magnetic field between the wire and outer tube ($0 < s < a$) is:
$$\mathbf{B}(s, t) = \frac{\mu_0 I_0 \cos(\omega t)}{2\pi s}\hat{\boldsymbol{\phi}}$$
Applying Faraday’s law around a loop of length $l$ parallel to the axis bounded between $s$ and $a$:
$$\oint \mathbf{E}\cdot d\mathbf{l} = [E(s) - E(a)]l = -\frac{d}{dt}\int_s^a \left(\frac{\mu_0 I(t)}{2\pi s'}\right) l \, ds'$$
Setting $E(a) = 0$:
$$E(s, t)l = -\frac{\mu_0 l}{2\pi}\left(\frac{dI}{dt}\right)\ln\left(\frac{a}{s}\right)$$
Since $dI/dt = -I_0 \omega \sin(\omega t)$:
$$\mathbf{E}(s, t) = \frac{\mu_0 I_0 \omega}{2\pi}\sin(\omega t)\ln\left(\frac{a}{s}\right)\hat{\mathbf{z}}$$

**Practice Problem 7.17P:**  
A long solid cylindrical wire of radius $R$ carries a total current $I(t) = I_0 \sin(\omega t)$ uniformly distributed over its cross-sectional area. Assuming $E(R, t) = 0$, find the induced electric field $\mathbf{E}(s, t)$ inside the wire ($s < R$).

---

### Problem 7.18
**Problem:**  
A long solenoid of radius $a$ with $n$ turns per unit length is looped externally by a wire of resistance $R$.  
(a) If the current in the solenoid increases at a constant rate $dI/dt = k$, what current flows in the loop, and what is its direction through the resistor?  
(b) If the current $I$ is constant, but the solenoid is pulled out of the loop to a distance far away, what total charge $Q$ passes through the resistor?

**Solution:**  
**(a)** The solenoid's flux is $\Phi = B (\pi a^2) = (\mu_0 n I)(\pi a^2)$.  
The rate of flux change is:
$$\frac{d\Phi}{dt} = \mu_0 n \pi a^2 \frac{dI}{dt} = \mu_0 n \pi a^2 k$$
The induced emf is:
$$\mathcal{E} = -\mu_0 n \pi a^2 k \implies I_{\text{loop}} = \frac{\mu_0 n \pi a^2 k}{R}$$
By Lenz’s law, the induced current creates a field opposing the flux increase, circulating around the solenoid in the direction opposite to the solenoid current, and passing from right to left through the resistor.

**(b)** The total charge that flows during any flux transition is:
$$Q = \int I \, dt = \frac{1}{R}\int \mathcal{E}\,dt = \frac{1}{R}\int \left(-\frac{d\Phi}{dt}\right)dt = \frac{\Delta \Phi}{R}$$
Initially, the flux through the loop is $\Phi_i = \mu_0 n I \pi a^2$; after the solenoid is removed, the final flux is $\Phi_f = 0$. Thus:
$$Q = \frac{\mu_0 n \pi a^2 I}{R}$$

**Practice Problem 7.18P:**  
A small circular search coil of $N$ turns, radius $r$, and total resistance $R$ is placed coaxially inside a long solenoid carrying current $I_0$. The coil is flipped by $180^\circ$. Calculate the total charge $Q$ that passes through the coil circuit.

---

### Problem 7.19
**Problem:**  
A square loop of side length $a$ and resistance $R$ is placed at a distance $s$ from a long straight wire carrying current $I$. If the current in the wire is switched off to zero, find the direction of the induced current in the square loop and the total charge $Q$ that passes a given point in the loop.

**Solution:**  
From Problem 7.8, the initial flux linked by the square loop is:
$$\Phi_i = \frac{\mu_0 I a}{2\pi}\ln\left(\frac{s+a}{s}\right)$$
When the current drops to zero, the final flux is $\Phi_f = 0$.  
By Lenz’s law, to oppose the loss of flux pointing into the loop, the induced current circulates to reinforce the original field, which is **counterclockwise** (or clockwise, depending on whether the wire's field is into or out of the page).  
The total transferred charge is:
$$Q = \frac{|\Delta \Phi|}{R} = \frac{\Phi_i - \Phi_f}{R} = \frac{\mu_0 I a}{2\pi R}\ln\left(1 + \frac{a}{s}\right)$$

**Practice Problem 7.19P:**  
A planar circular loop of radius $a$ and resistance $R$ is positioned in the plane of a long straight wire carrying current $I$, with the center of the loop at a distance $d > a$ from the wire. If the wire current is reduced to zero, find the total charge $Q$ that passes through the loop.

---

### Problem 7.20
**Problem:**  
A toroidal coil has a rectangular cross section with inner radius $a$, outer radius $a + w$, and height $h$. It has $N$ tightly wound turns carrying a current increasing at a constant rate $dI/dt = k$. If the cross-sectional dimensions are small compared to the radius ($w \ll a$, $h \ll a$), find the electric field at a point $z$ on the central symmetry axis above the toroid.

**Solution:**  
Because $w, h \ll a$, the toroid's cross-sectional area is $A \approx w h$, centered at radius $a$. The interior magnetic field is:
$$B \approx \frac{\mu_0 N I}{2\pi a}$$
The total magnetic flux enclosed by the toroid ring is:
$$\Phi = B A = \frac{\mu_0 N I w h}{2\pi a}$$
The rate of change of magnetic flux is:
$$\frac{d\Phi}{dt} = \frac{\mu_0 N w h k}{2\pi a}$$
By symmetry, the induced electric field lines are circles concentric with the $z$-axis: $\mathbf{E} = E(z)\hat{\boldsymbol{\phi}}$.  
Consider a circular path of radius $a$ at height $z$ centered on the axis. The magnetic field behaves like an effective current of magnitude $I_m = -d\Phi/dt$. By analogy with the magnetic field on the axis of a circular current loop (from the Biot-Savart law):
$$B_z = \frac{\mu_0 I a^2}{2(a^2 + z^2)^{3/2}}$$
The induced electric field along $\hat{\boldsymbol{\phi}}$ corresponds to the magnetic vector potential $\mathbf{A}$:
$$\oint \mathbf{E}\cdot d\mathbf{l} = -\frac{\partial \Phi}{\partial t} \implies E(z)(2\pi a) = -\frac{\partial}{\partial t}\int B_z \, da$$
Alternatively, applying the Biot–Savart analog for Faraday electric fields (Eq. 7.27):
$$\mathbf{E}(z) = -\frac{1}{4\pi}\frac{\partial}{\partial t}\oint_{\text{toroid}} \frac{\mathbf{B}\times \hat{\boldsymbol{\imath}}}{\boldsymbol{r}^2} d\tau = -\frac{\mu_0 N w h k a}{4\pi (a^2 + z^2)^{3/2}}\hat{\boldsymbol{\phi}}$$

**Practice Problem 7.20P:**  
A thin circular ring of radius $R$ carries a time-varying magnetic dipole moment $\mathbf{m}(t) = m_0 \cos(\omega t)\hat{\mathbf{z}}$. Determine the induced electric field $\mathbf{E}$ at a point on the axis at distance $z$ from the center.

---

### Problem 7.21
**Problem:**  
In the case where a permanent magnet is moved to the left while a conducting loop is held stationary, identify the spatial region where $\partial \mathbf{B}/\partial t \neq 0$ and sketch the resulting electric field lines.

**Solution:**  
Because the magnet is translated rigidly with velocity $\mathbf{v} = -v\hat{\mathbf{x}}$, the time derivative of the magnetic field at any fixed point in space is given by the convective derivative:
$$\frac{\partial \mathbf{B}}{\partial t} = -(\mathbf{v}\cdot \nabla)\mathbf{B}$$
This derivative is non-zero in the fringe field regions near the leading and trailing edges of the magnet where spatial gradients $\nabla \mathbf{B}$ are large.  
By Faraday's law ($\nabla \times \mathbf{E} = -\partial \mathbf{B}/\partial t$), $-\partial \mathbf{B}/\partial t$ acts as an effective source for the curl of $\mathbf{E}$. By mathematical analogy with Ampère's law ($\nabla \times \mathbf{B} = \mu_0 \mathbf{J}$), the induced electric field lines curl around these regions of non-zero $\partial \mathbf{B}/\partial t$ like the magnetic field curls around a bundle of current.

**Practice Problem 7.21P:**  
A localized magnetic field packet $\mathbf{B}(x - vt)$ moves at constant speed $v$ along the $x$-axis. Write an expression for $\nabla \times \mathbf{E}$ in terms of the spatial derivatives of $\mathbf{B}$ with respect to $x$.

---

### Problem 7.22
**Problem:**  
A uniform magnetic field points in the $z$-direction throughout all space: $\mathbf{B} = B_0\hat{\mathbf{z}}$. A positive point charge $q$ is at rest at the origin. The field is then turned off. In what direction does the charge accelerate?

**Solution:**  
The situation is non-physical as stated: a spatially uniform magnetic field filling all space has infinite total flux. Any choice of symmetric axis for the induced electric field curl ($\nabla \times \mathbf{E} = -\frac{dB}{dt}\hat{\mathbf{z}}$) introduces an arbitrary center of symmetry. Because the physical setup is translationally invariant in the $xy$-plane, no unique direction can be singled out for $\mathbf{E}$ at the origin. In any real system, the field is confined to a finite spatial extent, and the boundary condition at infinity breaks the translational symmetry, uniquely determining the induced field at the origin. For a true, infinitely extended uniform field, the problem is undetermined, and the charge has no preferred direction of motion.

**Practice Problem 7.22P:**  
A magnetic field is uniform and given by $\mathbf{B}(t) = B(t)\hat{\mathbf{z}}$ inside a long cylindrical region centered on the line $x = d, y = 0$. If $B(t)$ decreases with time, determine the direction and magnitude of the force exerted on a stationary charge $q$ located at the origin $(0,0,0)$.

---

## 7.2.3 Inductance

### Example 7.11
**Problem:**  
A short solenoid of length $l$ and radius $a$ with $n_1$ turns per unit length lies coaxially inside a very long solenoid of radius $b$ ($b > a$) with $n_2$ turns per unit length. What is the mutual inductance $M$ of the two solenoids, and what is the magnetic flux through the long solenoid when a current $I$ flows in the short one?

**Solution:**  
Calculating the flux through the long solenoid directly from the field of the short solenoid is difficult due to fringe fields. However, using the reciprocity theorem of mutual inductance ($M_{12} = M_{21} = M$):  
Run a test current $I$ through the *long* solenoid. The magnetic field inside it is uniform:
$$B = \mu_0 n_2 I$$
The flux of this field through a single turn of the inner short solenoid is:
$$\Phi_{\text{turn}} = B (\pi a^2) = \mu_0 n_2 I \pi a^2$$
Because the short solenoid contains $N_1 = n_1 l$ turns, the total flux linked is:
$$\Phi_{\text{inner}} = N_1 \Phi_{\text{turn}} = (n_1 l)(\mu_0 n_2 I \pi a^2) = \mu_0 \pi a^2 n_1 n_2 l I$$
Therefore, the mutual inductance is:
$$M = \frac{\Phi_{\text{inner}}}{I} = \mu_0 \pi a^2 n_1 n_2 l$$
By reciprocity, when a current $I$ flows in the short solenoid, the total flux through the long solenoid is also:
$$\Phi = M I = \mu_0 \pi a^2 n_1 n_2 l I$$

**Practice Problem 7.11P:**  
A small circular loop of radius $a$ is placed at the center of a large circular loop of radius $b$ ($a \ll b$), both coplanar. Calculate the mutual inductance $M$ between the two loops.

---

### Example 7.12
**Problem:**  
Find the self-inductance $L$ of a toroidal coil of rectangular cross section with inner radius $a$, outer radius $b$, height $h$, and $N$ turns of wire.

**Solution:**  
For a current $I$, the magnetic field inside the toroid is given by Ampère’s law:
$$B(s) = \frac{\mu_0 N I}{2\pi s}$$
The magnetic flux through a single rectangular turn is:
$$\Phi_{\text{turn}} = \int_a^b B(s) (h \, ds) = \frac{\mu_0 N I h}{2\pi}\int_a^b \frac{ds}{s} = \frac{\mu_0 N I h}{2\pi}\ln\left(\frac{b}{a}\right)$$
The total flux linking all $N$ turns is:
$$\Phi_{\text{total}} = N \Phi_{\text{turn}} = \frac{\mu_0 N^2 h}{2\pi}\ln\left(\frac{b}{a}\right) I$$
Since $\Phi_{\text{total}} = L I$, the self-inductance is:
$$L = \frac{\mu_0 N^2 h}{2\pi}\ln\left(\frac{b}{a}\right)$$

**Practice Problem 7.12P:**  
Find the self-inductance $L$ of a toroidal coil of circular cross section with radius $r$, where the central radius of the toroid is $R$ ($R \gg r$), having $N$ turns.

---

### Example 7.13
**Problem:**  
A series circuit containing a constant battery $\mathcal{E}_0$, a resistor $R$, and an inductor $L$ has its switch closed at $t = 0$. Determine the current $I(t)$ as a function of time.

**Solution:**  
Applying Kirchhoff’s loop rule with the back emf:
$$\mathcal{E}_0 - L\frac{dI}{dt} = I R \implies \frac{dI}{dt} + \frac{R}{L}I = \frac{\mathcal{E}_0}{L}$$
The integrating factor is $e^{(R/L)t}$:
$$\frac{d}{dt}\left(I e^{(R/L)t}\right) = \frac{\mathcal{E}_0}{L}e^{(R/L)t}$$
Integrating both sides:
$$I(t) = \frac{\mathcal{E}_0}{R} + k e^{-(R/L)t}$$
Applying the initial condition $I(0) = 0$ yields $k = -\mathcal{E}_0/R$:
$$I(t) = \frac{\mathcal{E}_0}{R}\left(1 - e^{-(R/L)t}\right)$$

**Practice Problem 7.13P:**  
An $RL$ circuit with resistance $R$ and inductance $L$ is driven by an alternating voltage source $V(t) = V_0 \cos(\omega t)$. Find the steady-state current $I(t)$.

---

### Problem 7.23
**Problem:**  
A small loop of wire (radius $a$) is held a distance $z$ along the axis above the center of a large loop (radius $b$). The planes of the two loops are parallel to each other and perpendicular to their common axis.  
(a) Assuming a current $I$ flows in the large loop, find the flux through the small loop.  
(b) Assuming a current $I$ flows in the small loop, treat it as a magnetic dipole and find the flux through the large loop.  
(c) Confirm that $M_{12} = M_{21}$.

**Solution:**  
**(a)** The on-axis magnetic field of the large loop (radius $b$) carrying current $I$ is:
$$B(z) = \frac{\mu_0 I b^2}{2(b^2 + z^2)^{3/2}}$$
Because $a \ll b$, the field across the area of the small loop is approximately uniform:
$$\Phi_{\text{small}} = B(z) (\pi a^2) = \frac{\mu_0 \pi I a^2 b^2}{2(b^2 + z^2)^{3/2}}$$
Thus:
$$M_{21} = \frac{\Phi_{\text{small}}}{I} = \frac{\mu_0 \pi a^2 b^2}{2(b^2 + z^2)^{3/2}}$$

**(b)** A current $I$ in the small loop produces a magnetic dipole moment:
$$\mathbf{m} = I (\pi a^2)\hat{\mathbf{z}}$$
The vector potential of a magnetic dipole is:
$$\mathbf{A}(\mathbf{r}) = \frac{\mu_0}{4\pi}\frac{\mathbf{m}\times \hat{\mathbf{r}}}{r^2} = \frac{\mu_0 m}{4\pi}\frac{\sin\theta}{r^2}\hat{\boldsymbol{\phi}}$$
Evaluating $\mathbf{A}$ at any point on the perimeter of the large loop, where $r = \sqrt{b^2 + z^2}$ and $\sin\theta = b/\sqrt{b^2 + z^2}$:
$$A = \frac{\mu_0 (I \pi a^2)}{4\pi}\frac{b}{(b^2 + z^2)^{3/2}} = \frac{\mu_0 I a^2 b}{4(b^2 + z^2)^{3/2}}$$
Using Stokes’ theorem, the flux through the large loop is:
$$\Phi_{\text{large}} = \oint \mathbf{A}\cdot d\mathbf{l} = A(2\pi b) = \frac{\mu_0 \pi I a^2 b^2}{2(b^2 + z^2)^{3/2}}$$
Thus:
$$M_{12} = \frac{\mu_0 \pi a^2 b^2}{2(b^2 + z^2)^{3/2}}$$

**(c)** Comparing (a) and (b):
$$M_{12} = M_{21}$$

**Practice Problem 7.23P:**  
A tiny magnetic dipole loop of area $A_1$ is located at the center of a spherical shell of radius $R$. A circular wire of radius $R$ is wound around the equator of the sphere. Find the mutual inductance $M$ between the central dipole and the equatorial loop if the dipole is oriented at an angle $\theta$ with respect to the polar axis.

---

### Problem 7.24
**Problem:**  
A square loop of wire of side length $a$ lies midway between two long parallel wires separated by a distance $3a$, in the same plane. A clockwise current $I$ in the square loop is increasing at a constant rate $dI/dt = k$. Find the emf induced in the large two-wire loop.

**Solution:**  
By the reciprocity of mutual inductance, find the flux that a current $I_{\text{long}}$ flowing in the two-wire system produces through the square loop.  
The long wires run along $x = -1.5a$ and $x = +1.5a$. With current $I_{\text{long}}$ flowing up the left wire and down the right wire, both wires produce magnetic fields into the page between them. At distance $x$ from the center (where $-a/2 \le x \le a/2$):
$$B(x) = \frac{\mu_0 I_{\text{long}}}{2\pi (1.5a + x)} + \frac{\mu_0 I_{\text{long}}}{2\pi (1.5a - x)}$$
The flux through the square loop of side $a$ is:
$$\Phi = a \int_{-a/2}^{a/2} B(x)\,dx = \frac{\mu_0 I_{\text{long}} a}{2\pi}\left[ \ln\left(\frac{1.5a + x}{1.5a - x}\right) \right]_{-a/2}^{a/2} = \frac{\mu_0 I_{\text{long}} a}{\pi}\ln 2$$
The mutual inductance between the systems is:
$$M = \frac{\mu_0 a \ln 2}{\pi}$$
When the current in the small loop increases at rate $dI/dt = k$, the emf induced in the big loop is:
$$\mathcal{E} = -M\frac{dI}{dt} = -\frac{\mu_0 a k \ln 2}{\pi}$$
By Lenz’s law, the induced current in the large loop flows in a direction to oppose the increasing field from the square loop, which means it circulates **counterclockwise**.

**Practice Problem 7.24P:**  
A planar square loop of side length $b$ is placed symmetrically inside a larger coplanar square loop of side length $a$ ($a \gg b$). Calculate the mutual inductance $M$ between the two concentric square loops.

---

### Problem 7.25
**Problem:**  
Find the self-inductance per unit length of a long solenoid of radius $R$ carrying $n$ turns per unit length.

**Solution:**  
For a section of length $l$, the total number of turns is $N = nl$.  
The magnetic field inside the solenoid is:
$$B = \mu_0 n I$$
The magnetic flux through a single turn is:
$$\Phi_{\text{turn}} = B(\pi R^2) = \mu_0 n I \pi R^2$$
The total flux linkage is:
$$\Phi_{\text{total}} = N \Phi_{\text{turn}} = (nl)(\mu_0 n I \pi R^2) = \mu_0 n^2 \pi R^2 l I$$
Since $\Phi_{\text{total}} = L I$, the self-inductance for length $l$ is:
$$L = \mu_0 n^2 \pi R^2 l$$
The self-inductance per unit length is:
$$\mathcal{L} = \frac{L}{l} = \mu_0 n^2 \pi R^2$$

**Practice Problem 7.25P:**  
Find the self-inductance per unit length of two concentric cylindrical conducting shells of radii $a$ and $b$ ($a < b$) carrying equal and opposite longitudinal currents $I$.

---

### Problem 7.26
**Problem:**  
Compute the self-inductance of a “hairpin” circuit consisting of two long parallel wires of length $l$ and radius $\epsilon$, separated by a distance $d$ (with $\epsilon \ll d \ll l$), carrying equal and opposite currents $I$.

**Solution:**  
Neglect end contributions. The magnetic field between the wires at a distance $x$ from the center of wire 1 (with $\epsilon \le x \le d - \epsilon$) is:
$$B(x) = \frac{\mu_0 I}{2\pi x} + \frac{\mu_0 I}{2\pi (d - x)}$$
The magnetic flux through the ribbon between the wires of length $l$ is:
$$\Phi = \int_\epsilon^{d-\epsilon} B(x) l \, dx = \frac{\mu_0 I l}{2\pi}\left[ \ln x - \ln(d - x) \right]_\epsilon^{d-\epsilon}$$
$$\Phi = \frac{\mu_0 I l}{2\pi}\left[ \ln\left(\frac{d - \epsilon}{\epsilon}\right) - \ln\left(\frac{\epsilon}{d - \epsilon}\right) \right] = \frac{\mu_0 I l}{\pi}\ln\left(\frac{d - \epsilon}{\epsilon}\right)$$
Since $\epsilon \ll d$, $\frac{d - \epsilon}{\epsilon} \approx \frac{d}{\epsilon}$. The self-inductance is:
$$L = \frac{\Phi}{I} \approx \frac{\mu_0 l}{\pi}\ln\left(\frac{d}{\epsilon}\right)$$

**Practice Problem 7.26P:**  
Find the self-inductance of a coplanar rectangular loop of length $l$ and width $w$, formed by wires of radius $\epsilon$, assuming $\epsilon \ll w \ll l$.

---

### Problem 7.27
**Problem:**  
An alternating current $I(t) = I_0 \cos(\omega t)$ with $I_0 = 0.5\text{ A}$ and frequency $f = 60\text{ Hz}$ flows down a straight wire along the axis of a toroidal coil of rectangular cross section (inner radius $a = 1\text{ cm}$, outer radius $b = 2\text{ cm}$, height $h = 1\text{ cm}$, $N = 1000\text{ turns}$). The coil is connected to a $500\ \Omega$ resistor.  
(a) Find the induced emf in the toroid and the resistor current $I_R(t)$.  
(b) Calculate the back emf in the coil due to $I_R(t)$, and find the ratio of back emf amplitude to direct emf amplitude.

**Solution:**  
**(a)** The mutual inductance between the central straight wire and the rectangular toroid is:
$$M = \frac{\mu_0 N h}{2\pi}\ln\left(\frac{b}{a}\right)$$
The induced emf in the toroid is:
$$\mathcal{E}(t) = -M \frac{dI}{dt} = M I_0 \omega \sin(\omega t)$$
Using $\omega = 2\pi(60) \approx 377\text{ rad/s}$:
$$M = \frac{(4\pi \times 10^{-7})(1000)(0.01)}{2\pi}\ln(2) = 2\times 10^{-6}\ln 2 \approx 1.386\times 10^{-6}\text{ H}$$
The amplitude of the induced emf is:
$$\mathcal{E}_0 = M I_0 \omega \approx (1.386\times 10^{-6})(0.5)(377) \approx 2.61\times 10^{-4}\text{ V}$$
The current in the resistor is:
$$I_R(t) = \frac{\mathcal{E}(t)}{R} = \frac{\mathcal{E}_0}{R}\sin(\omega t) \approx 5.23\times 10^{-7}\sin(\omega t)\text{ A}$$

**(b)** The self-inductance of the $N$-turn toroid is:
$$L = \frac{\mu_0 N^2 h}{2\pi}\ln\left(\frac{b}{a}\right) = N M = 1000 (1.386\times 10^{-6}\text{ H}) \approx 1.386\times 10^{-3}\text{ H}$$
The back emf produced by $I_R(t)$ is:
$$\mathcal{E}_{\text{back}} = -L \frac{dI_R}{dt} = -L \left(\frac{\mathcal{E}_0 \omega}{R}\right)\cos(\omega t)$$
The amplitude ratio is:
$$\frac{|\mathcal{E}_{\text{back}}|}{|\mathcal{E}|} = \frac{L \left(\frac{\mathcal{E}_0 \omega}{R}\right)}{\mathcal{E}_0} = \frac{\omega L}{R} = \frac{(377)(1.386\times 10^{-3})}{500} \approx 1.05\times 10^{-3}$$
The back emf is approximately $0.1\%$ of the direct emf, which justifies neglecting it in the quasistatic approximation.

**Practice Problem 7.27P:**  
A circular loop of radius $a$ and resistance $R$ is placed coaxially inside a long solenoid of radius $b > a$. The solenoid's current is $I(t) = I_0 \cos(\omega t)$. Calculate the ratio of the back emf induced in the loop by its own current to the direct emf induced by the solenoid.

---

### Problem 7.28
**Problem:**  
A capacitor $C$ is charged to voltage $V$ and connected in series with an inductor $L$. At $t = 0$, switch $S$ is closed.  
(a) Find the current $I(t)$ as a function of time.  
(b) How does the result change if a resistor $R$ is included in series?

**Solution:**  
**(a)** Applying the loop rule:
$$-L\frac{dI}{dt} - \frac{Q}{C} = 0$$
Since $I = -dQ/dt$:
$$L\frac{d^2Q}{dt^2} + \frac{1}{C}Q = 0 \implies \frac{d^2Q}{dt^2} + \omega_0^2 Q = 0, \quad \omega_0 = \frac{1}{\sqrt{LC}}$$
With $Q(0) = CV$ and $I(0) = 0$:
$$Q(t) = C V \cos(\omega_0 t)$$
$$I(t) = -\frac{dQ}{dt} = C V \omega_0 \sin(\omega_0 t) = V \sqrt{\frac{C}{L}}\sin(\omega_0 t)$$

**(b)** With resistor $R$ added in series:
$$L\frac{d^2Q}{dt^2} + R\frac{dQ}{dt} + \frac{1}{C}Q = 0$$
For underdamped oscillation ($R < 2\sqrt{L/C}$):
$$Q(t) = C V e^{-\gamma t}\left[\cos(\omega_d t) + \frac{\gamma}{\omega_d}\sin(\omega_d t)\right]$$
where $\gamma = R/(2L)$ and $\omega_d = \sqrt{\omega_0^2 - \gamma^2}$. The current is:
$$I(t) = -\frac{dQ}{dt} = \frac{V}{\omega_d L}e^{-\gamma t}\sin(\omega_d t)$$

**Practice Problem 7.28P:**  
In an underdamped series $RLC$ circuit with initial charge $Q_0$ on the capacitor and zero initial current, determine the total energy dissipated in the resistor from $t = 0$ to $t \to \infty$.

---

## 7.2.4 Energy in Magnetic Fields

### Example 7.14
**Problem:**  
A long coaxial cable consists of an inner conductor of radius $a$ and an outer thin cylindrical shell of radius $b$. A steady current $I$ flows along the inner cylinder and returns along the outer cylinder. Find the magnetic energy stored in a length $l$, and use it to determine the self-inductance per unit length.

**Solution:**  
By Ampère’s law, the magnetic field between the cylinders ($a < s < b$) is:
$$\mathbf{B} = \frac{\mu_0 I}{2\pi s}\hat{\boldsymbol{\phi}}$$
and $\mathbf{B} = 0$ outside this region.  
The magnetic energy density is:
$$u_B = \frac{B^2}{2\mu_0} = \frac{\mu_0 I^2}{8\pi^2 s^2}$$
Integrating over the cylindrical volume of length $l$:
$$W = \int u_B \, d\tau = \int_0^l dz \int_0^{2\pi} d\phi \int_a^b \left(\frac{\mu_0 I^2}{8\pi^2 s^2}\right) s\,ds = \frac{\mu_0 I^2 l}{4\pi}\int_a^b \frac{ds}{s} = \frac{\mu_0 I^2 l}{4\pi}\ln\left(\frac{b}{a}\right)$$
Using $W = \frac{1}{2} L I^2$:
$$\frac{1}{2} L I^2 = \frac{\mu_0 I^2 l}{4\pi}\ln\left(\frac{b}{a}\right) \implies L = \frac{\mu_0 l}{2\pi}\ln\left(\frac{b}{a}\right)$$
The inductance per unit length is:
$$\frac{L}{l} = \frac{\mu_0}{2\pi}\ln\left(\frac{b}{a}\right)$$

**Practice Problem 7.14P:**  
A coaxial cable carries current $I$ uniformly distributed across the solid volume of its inner conductor of radius $a$, returning along a thin outer shell of radius $b$. Find the magnetic energy stored *inside* the inner conductor ($s < a$) for a section of length $l$, and find its contribution to the self-inductance.

---

### Problem 7.29
**Problem:**  
Find the magnetic energy stored in a length $l$ of a long solenoid of radius $R$ carrying current $I$ with $n$ turns per unit length using four methods:  
(a) $W = \frac{1}{2} L I^2$  
(b) $W = \frac{1}{2} \oint (\mathbf{A}\cdot \mathbf{I})\,dl$  
(c) $W = \frac{1}{2\mu_0}\int_{\text{all space}} B^2 \, d\tau$  
(d) $W = \frac{1}{2\mu_0}\left[\int_V B^2 \, d\tau - \oint_S (\mathbf{A}\times \mathbf{B})\cdot d\mathbf{a}\right]$ over a cylindrical shell bounded by radii $a < R$ and $b > R$.

**Solution:**  
**(a)** From Problem 7.25, $L = \mu_0 n^2 \pi R^2 l$:
$$W = \frac{1}{2} L I^2 = \frac{1}{2}\mu_0 n^2 \pi R^2 l I^2$$

**(b)** The vector potential inside the solenoid is $\mathbf{A} = \frac{1}{2}\mu_0 n I s \hat{\boldsymbol{\phi}}$. At the radius of the windings ($s = R$):
$$\mathbf{A}(R) = \frac{1}{2}\mu_0 n I R \hat{\boldsymbol{\phi}}$$
The total current on the cylindrical surface of length $l$ is $I_{\text{tot}} = n l I$:
$$W = \frac{1}{2}\int \mathbf{A}\cdot d\mathbf{I} = \frac{1}{2} A(R) (2\pi R) (n l I) = \frac{1}{2}\left(\frac{1}{2}\mu_0 n I R\right)(2\pi R)(n l I) = \frac{1}{2}\mu_0 n^2 \pi R^2 l I^2$$

**(c)** The field is $B = \mu_0 n I$ inside ($s < R$) and $B = 0$ outside ($s > R$):
$$W = \frac{1}{2\mu_0}\int_{\text{inside}} B^2 \, d\tau = \frac{1}{2\mu_0}(\mu_0 n I)^2 (\pi R^2 l) = \frac{1}{2}\mu_0 n^2 \pi R^2 l I^2$$

**(d)** For the volume $a < s < b$:  
The volume integral runs only over the non-zero field region $a < s < R$:
$$\frac{1}{2\mu_0}\int_V B^2 \, d\tau = \frac{1}{2\mu_0}(\mu_0 n I)^2 \pi(R^2 - a^2)l = \frac{1}{2}\mu_0 n^2 \pi (R^2 - a^2) l I^2$$
On the inner boundary at $s = a$, the surface normal points inward toward the axis ($\hat{\mathbf{n}} = -\hat{\mathbf{s}}$):
$$\mathbf{A}(a)\times \mathbf{B} = \left(\frac{1}{2}\mu_0 n I a \hat{\boldsymbol{\phi}}\right)\times (\mu_0 n I \hat{\mathbf{z}}) = \frac{1}{2}\mu_0^2 n^2 I^2 a \hat{\mathbf{s}}$$
The surface integral on the inner face at $s = a$ is:
$$-\frac{1}{2\mu_0}\oint (\mathbf{A}\times \mathbf{B})\cdot (-\hat{\mathbf{s}})\,da = \frac{1}{2\mu_0}\left(\frac{1}{2}\mu_0^2 n^2 I^2 a\right)(2\pi a l) = \frac{1}{2}\mu_0 n^2 \pi a^2 l I^2$$
At $s = b > R$, $\mathbf{B} = 0$, so the outer surface contribution vanishes.  
Summing the volume and surface contributions:
$$W = \frac{1}{2}\mu_0 n^2 \pi (R^2 - a^2) l I^2 + \frac{1}{2}\mu_0 n^2 \pi a^2 l I^2 = \frac{1}{2}\mu_0 n^2 \pi R^2 l I^2$$
All four methods produce the same result.

**Practice Problem 7.29P:**  
Calculate the magnetic energy stored in an ideal toroid of mean radius $R$ and circular cross section of radius $a \ll R$, having $N$ turns carrying current $I$, by integrating the magnetic energy density $B^2/(2\mu_0)$ over its volume.

---

### Problem 7.30
**Problem:**  
Calculate the energy stored in the rectangular toroid of Example 7.12 by integrating the magnetic field energy density, and use it to confirm the formula for $L$.

**Solution:**  
The magnetic field inside the rectangular toroid is $B(s) = \frac{\mu_0 N I}{2\pi s}$.  
The energy stored in the field is:
$$W = \frac{1}{2\mu_0}\int B^2 \, d\tau = \frac{1}{2\mu_0}\int_0^h dz \int_0^{2\pi} d\phi \int_a^b \left(\frac{\mu_0 N I}{2\pi s}\right)^2 s \, ds$$
$$W = \frac{1}{2\mu_0} h (2\pi) \frac{\mu_0^2 N^2 I^2}{4\pi^2}\int_a^b \frac{ds}{s} = \frac{\mu_0 N^2 I^2 h}{4\pi}\ln\left(\frac{b}{a}\right)$$
Equating this to $W = \frac{1}{2} L I^2$:
$$\frac{1}{2} L I^2 = \frac{\mu_0 N^2 I^2 h}{4\pi}\ln\left(\frac{b}{a}\right) \implies L = \frac{\mu_0 N^2 h}{2\pi}\ln\left(\frac{b}{a}\right)$$
This matches Eq. (7.37).

**Practice Problem 7.30P:**  
A spherical shell of radius $R$ carries a uniform surface charge $\sigma$ and rotates with constant angular velocity $\omega$. Find the total magnetic energy stored in all space.

---

### Problem 7.31
**Problem:**  
A long cable carries current $I$ in one direction uniformly distributed over its solid circular cross section of radius $a$. The current returns along a thin surface sheath of radius $a$. Find the self-inductance per unit length.

**Solution:**  
Inside the cable ($s \le a$), Ampère’s law gives:
$$B(s)(2\pi s) = \mu_0 I_{\text{enc}} = \mu_0 I \frac{\pi s^2}{\pi a^2} \implies B(s) = \frac{\mu_0 I s}{2\pi a^2}$$
Outside the wire ($s > a$), the net enclosed current is zero, so $B = 0$.  
The magnetic energy stored per unit length $l$ inside the wire is:
$$W = \frac{1}{2\mu_0}\int_0^l dz \int_0^{2\pi} d\phi \int_0^a B(s)^2 s \, ds = \frac{2\pi l}{2\mu_0} \int_0^a \left(\frac{\mu_0 I s}{2\pi a^2}\right)^2 s \, ds$$
$$W = \frac{\mu_0 I^2 l}{4\pi a^4}\int_0^a s^3 \, ds = \frac{\mu_0 I^2 l}{4\pi a^4}\left(\frac{a^4}{4}\right) = \frac{\mu_0 I^2 l}{16\pi}$$
Using $W = \frac{1}{2} L I^2$:
$$\frac{1}{2} L I^2 = \frac{\mu_0 I^2 l}{16\pi} \implies \frac{L}{l} = \frac{\mu_0}{8\pi}$$

**Practice Problem 7.31P:**  
A cylindrical conductor of radius $a$ carries a non-uniform current density $J(s) = C s$. Find the internal self-inductance per unit length.

---

### Problem 7.32
**Problem:**  
An $RL$ circuit powered by a battery $\mathcal{E}_0$ has reached steady state. At $t = 0$, a switch disconnects the battery and short-circuits the $RL$ branch.  
(a) What is the current $I(t)$ at any subsequent time?  
(b) Find the total energy delivered to the resistor.  
(c) Show that this energy equals the energy originally stored in the inductor.

**Solution:**  
**(a)** The steady current prior to switching is $I_0 = \mathcal{E}_0/R$.  
After the switch is thrown:
$$-L\frac{dI}{dt} = IR \implies \frac{dI}{dt} + \frac{R}{L}I = 0 \implies I(t) = I_0 e^{-(R/L)t} = \frac{\mathcal{E}_0}{R}e^{-(R/L)t}$$

**(b)** The total heat energy delivered to the resistor is:
$$W_R = \int_0^\infty I(t)^2 R \, dt = R \left(\frac{\mathcal{E}_0}{R}\right)^2 \int_0^\infty e^{-2(R/L)t}\,dt = \frac{\mathcal{E}_0^2}{R}\left[\frac{L}{2R}\right] = \frac{1}{2}L\left(\frac{\mathcal{E}_0}{R}\right)^2 = \frac{1}{2} L I_0^2$$

**(c)** The energy stored in the inductor at $t = 0$ is $W_L = \frac{1}{2} L I_0^2$. Thus, $W_R = W_L$: all initial stored magnetic energy is converted to thermal energy in the resistor.

**Practice Problem 7.32P:**  
In the circuit of Problem 7.32, find the time $t_{1/2}$ at which exactly half of the initial magnetic energy has been dissipated in the resistor.

---

### Problem 7.33
**Problem:**  
Two tiny wire loops with areas $\mathbf{a}_1$ and $\mathbf{a}_2$ are separated by a displacement vector $\mathbf{r}$.  
(a) Find their mutual inductance $M$ by treating them as magnetic dipoles.  
(b) Suppose current $I_1$ flows in loop 1. How much work must be done against the mutually induced emf to establish current $I_2$ in loop 2 while keeping $I_1$ constant?

**Solution:**  
**(a)** Treat loop 1 as a magnetic dipole with moment $\mathbf{m}_1 = I_1 \mathbf{a}_1$.  
The magnetic field produced by $\mathbf{m}_1$ at displacement $\mathbf{r}$ is:
$$\mathbf{B}_1(\mathbf{r}) = \frac{\mu_0}{4\pi r^3}\left[ 3(\mathbf{m}_1 \cdot \hat{\mathbf{r}})\hat{\mathbf{r}} - \mathbf{m}_1 \right]$$
The flux linked through the small area $\mathbf{a}_2$ of loop 2 is:
$$\Phi_2 = \mathbf{B}_1 \cdot \mathbf{a}_2 = \frac{\mu_0 I_1}{4\pi r^3}\left[ 3(\mathbf{a}_1 \cdot \hat{\mathbf{r}})(\mathbf{a}_2 \cdot \hat{\mathbf{r}}) - \mathbf{a}_1 \cdot \mathbf{a}_2 \right]$$
The mutual inductance is therefore:
$$M = \frac{\Phi_2}{I_1} = \frac{\mu_0}{4\pi r^3}\left[ 3(\mathbf{a}_1 \cdot \hat{\mathbf{r}})(\mathbf{a}_2 \cdot \hat{\mathbf{r}}) - \mathbf{a}_1 \cdot \mathbf{a}_2 \right]$$
This expression is symmetric with respect to interchange of indices 1 and 2, which confirms $M_{12} = M_{21}$.

**(b)** As the current $I_2(t)$ in loop 2 is increased from $0$ to $I_2$, the changing flux induces an emf in loop 1:
$$\mathcal{E}_1 = -M \frac{dI_2}{dt}$$
To keep $I_1$ constant, an external source must do work against $\mathcal{E}_1$:
$$\frac{dW_1}{dt} = -\mathcal{E}_1 I_1 = M I_1 \frac{dI_2}{dt}$$
Integrating over the turn-on time:
$$W_1 = M I_1 \int_0^{I_2} dI_2' = M I_1 I_2$$

**Practice Problem 7.33P:**  
Two small co-axial circular loops of radii $a$ and $b$ are separated by a large distance $z \gg a, b$. If the current in loop 1 is $I_1$ and the current in loop 2 is $I_2$, find the magnetic interaction energy $U = -M I_1 I_2$ between them.

---

### Problem 7.34
**Problem:**  
An infinitely long cylinder of radius $R$ carries a uniform surface charge $\sigma$. It is spun up from rest to a final angular velocity $\omega_f$ about its axis. Calculate the mechanical work done per unit length:  
(a) by integrating the torque exerted against the induced electric field ($W = \int N \, d\phi$), and  
(b) by calculating the total magnetic energy stored in the field.

**Solution:**  
**(a)** When the cylinder spins at angular velocity $\omega(t)$, it carries a surface current:
$$\mathbf{K}(t) = \sigma \mathbf{v} = \sigma \omega(t) R \hat{\boldsymbol{\phi}}$$
This surface current produces an internal axial magnetic field:
$$B(t) = \mu_0 K(t) = \mu_0 \sigma \omega(t) R \quad (s < R)$$
and $B = 0$ outside ($s > R$).  
As $\omega$ increases, the changing magnetic flux induces an azimuthal electric field at the cylinder surface ($s = R$):
$$E(R)(2\pi R) = -\frac{d\Phi}{dt} = -\pi R^2 \frac{dB}{dt} = -\pi R^2 (\mu_0 \sigma R \dot{\omega}) \implies E(R) = -\frac{1}{2}\mu_0 \sigma R^2 \dot{\omega}$$
The electric force per unit area on the surface charge is $\sigma E(R)$, opposing the acceleration.  
The external torque required per unit length to overcome this induced field is:
$$N = R [(\sigma E) (2\pi R)] = 2\pi \sigma R^2 |E(R)| = 2\pi \sigma R^2 \left(\frac{1}{2}\mu_0 \sigma R^2 \dot{\omega}\right) = \pi \mu_0 \sigma^2 R^4 \frac{d\omega}{dt}$$
The total mechanical work done per unit length is:
$$W = \int N \, d\phi = \int N \omega \, dt = \pi \mu_0 \sigma^2 R^4 \int_0^{\omega_f} \omega \, d\omega = \frac{1}{2}\pi \mu_0 \sigma^2 R^4 \omega_f^2$$

**(b)** The final magnetic field inside the cylinder is uniform:
$$B_f = \mu_0 \sigma \omega_f R \quad (s < R)$$
and $B = 0$ for $s > R$.  
The magnetic energy stored per unit length is:
$$W = \frac{1}{2\mu_0} \int_{\text{inside}} B_f^2 \, d\tau = \frac{1}{2\mu_0} (\mu_0 \sigma \omega_f R)^2 (\pi R^2) = \frac{1}{2}\pi \mu_0 \sigma^2 R^4 \omega_f^2$$
Both methods give identical results.

**Practice Problem 7.34P:**  
A spherical shell of radius $R$ carries a uniform surface charge $\sigma$ and is spun up from rest to final angular velocity $\omega_f$ about its diameter. Determine the total work required by calculating the magnetic energy stored in the resulting dipole field throughout space.

---

# 7.3 Maxwell’s Equations

## 7.3.1 & 7.3.2 How Maxwell Fixed Ampère’s Law

### Example 7.15
**Problem:**  
Two concentric conducting spherical shells of radii $a$ and $b$ ($a < b$) carry time-dependent charges $+Q(t)$ and $-Q(t)$. The region between them is filled with an ohmic material of conductivity $\sigma$. Show that although a radial conduction current $\mathbf{J}$ flows between the spheres, no magnetic field is generated anywhere.

**Solution:**  
By spherical symmetry, any magnetic field must be purely radial: $\mathbf{B} = B(r)\hat{\mathbf{r}}$.  
From Gauss’s law for magnetism ($\nabla \cdot \mathbf{B} = 0$), the surface integral over any concentric sphere gives:
$$\oint \mathbf{B}\cdot d\mathbf{a} = B(r) 4\pi r^2 = 0 \implies \mathbf{B} = 0$$
To understand how Ampère's law is satisfied with $\mathbf{B} = 0$ despite the non-zero current:  
The electric field between the spheres is:
$$\mathbf{E}(r, t) = \frac{Q(t)}{4\pi \epsilon_0 r^2}\hat{\mathbf{r}}$$
The conduction current density is:
$$\mathbf{J}_c = \sigma \mathbf{E} = \frac{\sigma Q(t)}{4\pi \epsilon_0 r^2}\hat{\mathbf{r}}$$
Charge conservation requires that $I = -dQ/dt = \sigma Q/\epsilon_0$, so:
$$\dot{Q}(t) = -\frac{\sigma}{\epsilon_0}Q(t)$$
The displacement current density is:
$$\mathbf{J}_d = \epsilon_0 \frac{\partial \mathbf{E}}{\partial t} = \frac{\dot{Q}(t)}{4\pi r^2}\hat{\mathbf{r}} = -\frac{\sigma Q(t)}{4\pi \epsilon_0 r^2}\hat{\mathbf{r}}$$
Notice that:
$$\mathbf{J}_c + \mathbf{J}_d = 0$$
The displacement current cancels the conduction current at every point between the spheres.  
Thus, the total effective source current in the Ampère–Maxwell equation vanishes:
$$\nabla \times \mathbf{B} = \mu_0 (\mathbf{J}_c + \mathbf{J}_d) = 0$$
which is consistent with $\mathbf{B} = 0$.

**Practice Problem 7.15P:**  
A parallel-plate capacitor with circular plates of radius $R$ is filled with a slightly conducting material of conductivity $\sigma$ and permittivity $\epsilon$. If a constant voltage $V_0$ is maintained across the plates, calculate the conduction current density $\mathbf{J}_c$, the displacement current density $\mathbf{J}_d$, and the magnetic field $\mathbf{B}$ inside the dielectric.

---

### Problem 7.35
**Problem:**  
A thick straight wire of radius $a$ carries a constant current $I$ uniformly distributed over its cross section. A narrow gap of width $w \ll a$ in the wire forms a parallel-plate capacitor. Find the magnetic field in the gap at a distance $s < a$ from the axis.

**Solution:**  
Because $w \ll a$, the electric field inside the gap is approximately uniform and directed axially along $\hat{\mathbf{z}}$:
$$E = \frac{\sigma_{\text{plate}}}{\epsilon_0} = \frac{Q}{\pi a^2 \epsilon_0}$$
The rate of change of the electric field is:
$$\frac{\partial E}{\partial t} = \frac{1}{\pi a^2 \epsilon_0}\frac{dQ}{dt} = \frac{I}{\pi a^2 \epsilon_0}$$
The displacement current density in the gap is:
$$\mathbf{J}_d = \epsilon_0 \frac{\partial \mathbf{E}}{\partial t} = \frac{I}{\pi a^2}\hat{\mathbf{z}}$$
Applying the Ampère–Maxwell law to a circle of radius $s < a$ in the gap:
$$\oint \mathbf{B}\cdot d\mathbf{l} = B(s)(2\pi s) = \mu_0 I_{d,\text{enc}} = \mu_0 \int_0^s J_d (2\pi s')\,ds' = \mu_0 \left(\frac{I}{\pi a^2}\right)(\pi s^2) = \mu_0 I \frac{s^2}{a^2}$$
Solving for $B(s)$:
$$\mathbf{B}(s) = \frac{\mu_0 I s}{2\pi a^2}\hat{\boldsymbol{\phi}}$$
This field matches the internal magnetic field of the wire itself.

**Practice Problem 7.35P:**  
In the geometry of Problem 7.35, find the magnetic field in the gap at a distance $s > a$ outside the capacitor plates.

---

### Problem 7.36
**Problem:**  
A parallel-plate capacitor consists of circular plates of radius $a$ separated by distance $w \ll a$. Thin wires connect to the centers of the plates, carrying a constant charging current $I$. Assume that the charge spreads out uniformly over the plates, with zero surface charge at $t = 0$.  
(a) Find the electric field between the plates as a function of $t$.  
(b) Find the displacement current through a circle of radius $s < a$ in the midplane. Use this circle as an Ampèrian loop with a flat spanning surface to find $\mathbf{B}(s)$.  
(c) Recompute $\mathbf{B}(s)$ using an open cylindrical "tin-can" surface whose base is the same flat circle, but which extends through the left plate and terminates outside the capacitor.

**Solution:**  
**(a)** At time $t$, the total charge on the plate is $Q(t) = I t$.  
The uniform surface charge density is $\sigma(t) = Q(t)/(\pi a^2) = I t/(\pi a^2)$.  
The electric field between the plates is:
$$\mathbf{E}(t) = \frac{\sigma(t)}{\epsilon_0}\hat{\mathbf{z}} = \frac{I t}{\pi \epsilon_0 a^2}\hat{\mathbf{z}}$$

**(b)** The displacement current density is:
$$\mathbf{J}_d = \epsilon_0 \frac{\partial \mathbf{E}}{\partial t} = \frac{I}{\pi a^2}\hat{\mathbf{z}}$$
The displacement current passing through the flat disk of radius $s$ is:
$$I_{d,\text{enc}} = J_d (\pi s^2) = I \frac{s^2}{a^2}$$
Applying the Ampère–Maxwell law ($\oint \mathbf{B}\cdot d\mathbf{l} = \mu_0 I_{d,\text{enc}}$):
$$B(s)(2\pi s) = \mu_0 I \frac{s^2}{a^2} \implies \mathbf{B}(s) = \frac{\mu_0 I s}{2\pi a^2}\hat{\boldsymbol{\phi}}$$

**(c)** For the cylindrical surface extending through the plate:  
The closed end of the cylinder lies outside the capacitor where $\mathbf{E} = 0$, and the cylindrical sides are parallel to $\mathbf{E}$, so no displacement current crosses this surface ($I_d = 0$).  
However, this surface intersects the wire, which introduces a conduction current $I_{\text{enc, wire}} = I$. It also cuts through the capacitor plate at radius $s$, enclosing a fraction of the plate charge equal to $(s^2/a^2)Q(t)$.  
Because current spreads radially outward across the plate, the conduction current leaving the enclosed region through the cylindrical wall is:
$$I_{\text{plate}} = I \frac{s^2}{a^2}$$
The net enclosed conduction current is:
$$I_{\text{enc}} = I - I\frac{s^2}{a^2} = I\left(1 - \frac{s^2}{a^2}\right)$$
Wait: The Ampère-Maxwell law for this surface gives:
$$\oint \mathbf{B}\cdot d\mathbf{l} = \mu_0 I_{\text{enc, total}}$$
The current entering is $I$ from the wire, minus the current that has spread past radius $s$:
The current that flows radially outward in the plate past radius $s$ is $I(1 - s^2/a^2)$, so the net current piercing the tin-can wall is $I_{\text{enc}} = I (s^2/a^2)$.  
Thus:
$$B(s)(2\pi s) = \mu_0 I \frac{s^2}{a^2} \implies \mathbf{B}(s) = \frac{\mu_0 I s}{2\pi a^2}\hat{\boldsymbol{\phi}}$$
Both surfaces give the same magnetic field.

**Practice Problem 7.36P:**  
A circular parallel-plate capacitor is charged by a constant current $I$. Find the magnetic field $\mathbf{B}$ inside the gap using an Ampèrian surface shaped like a hemisphere bounded by a circle of radius $s < a$ in the capacitor midplane.

---

### Problem 7.37
**Problem:**  
In a coaxial cable of outer radius $a$, the quasistatic induced electric field was found in Problem 7.17 to be:
$$\mathbf{E}(s, t) = \frac{\mu_0 I_0 \omega}{2\pi}\sin(\omega t)\ln\left(\frac{a}{s}\right)\hat{\mathbf{z}}$$  
(a) Find the displacement current density $\mathbf{J}_d$.  
(b) Integrate $\mathbf{J}_d$ to obtain the total displacement current $I_d$.  
(c) Find the ratio $I_d / I$. For an outer cylinder diameter of $2\text{ mm}$, at what frequency would $I_d$ equal $1\%$ of the conduction current $I$?

**Solution:**  
**(a)** The displacement current density is:
$$\mathbf{J}_d = \epsilon_0 \frac{\partial \mathbf{E}}{\partial t} = \epsilon_0 \frac{\partial}{\partial t}\left[\frac{\mu_0 I_0 \omega}{2\pi}\sin(\omega t)\ln\left(\frac{a}{s}\right)\hat{\mathbf{z}}\right] = \frac{\mu_0 \epsilon_0 I_0 \omega^2}{2\pi}\cos(\omega t)\ln\left(\frac{a}{s}\right)\hat{\mathbf{z}} = \frac{I_0 \omega^2}{2\pi c^2}\cos(\omega t)\ln\left(\frac{a}{s}\right)\hat{\mathbf{z}}$$
where $c = 1/\sqrt{\mu_0\epsilon_0}$.

**(b)** The total displacement current is:
$$I_d = \int \mathbf{J}_d \cdot d\mathbf{a} = \frac{I_0 \omega^2 \cos(\omega t)}{2\pi c^2} \int_0^{2\pi} d\phi \int_0^a \ln\left(\frac{a}{s}\right) s \, ds$$
Evaluating the radial integral with $u = s/a$:
$$\int_0^a s \ln\left(\frac{a}{s}\right) ds = a^2 \int_0^1 u \ln(1/u)\,du = a^2 \left[ -\frac{u^2}{2}\ln u + \frac{u^2}{4} \right]_0^1 = \frac{a^2}{4}$$
Thus:
$$I_d(t) = \frac{I_0 \omega^2 a^2}{4 c^2}\cos(\omega t)$$

**(c)** The ratio of the amplitudes is:
$$\frac{I_{d0}}{I_0} = \frac{\omega^2 a^2}{4 c^2} = \left(\frac{\omega a}{2c}\right)^2$$
For $a = 1\text{ mm} = 10^{-3}\text{ m}$ and $I_{d0}/I_0 = 0.01$:
$$\frac{\omega a}{2c} = \sqrt{0.01} = 0.1 \implies \omega = \frac{0.2 c}{a} = \frac{0.2 (3\times 10^8)}{10^{-3}} = 6\times 10^{10}\text{ rad/s}$$
$$f = \frac{\omega}{2\pi} \approx 9.5\times 10^9\text{ Hz} = 9.5\text{ GHz}$$
The displacement current is negligible except at microwave frequencies.

**Practice Problem 7.37P:**  
For a parallel-plate capacitor of capacitance $C = 100\text{ pF}$ driven by a voltage $V(t) = V_0 \cos(\omega t)$ at frequency $f = 100\text{ MHz}$, calculate the amplitude of the displacement current between the plates if $V_0 = 10\text{ V}$.

---

### Problem 7.38
**Problem:**  
A conducting spherical shell of radius $R$ is charged by a steady current $I$ flowing up the $z$-axis and arriving at its south pole, spreading out uniformly over the surface so that the total charge is $Q(t) = I t$.  
Find the magnetic field $\mathbf{B}$ at any point $(r, \theta, \phi)$ outside the sphere ($r > R$) using the Ampère–Maxwell law with:  
(a) a spherical cap north of the loop,  
(b) a spherical bowl south of the loop, and  
(c) a conical surface with vertex at the origin.

**Solution:**  
By axial symmetry, the magnetic field is azimuthal: $\mathbf{B} = B(r, \theta)\hat{\boldsymbol{\phi}}$.  
Choose an Ampèrian circle of radius $s = r\sin\theta$ at fixed $r$ and polar angle $\theta$:
$$\oint \mathbf{B}\cdot d\mathbf{l} = B(r, \theta) (2\pi r \sin\theta)$$
Outside the sphere, the electric field is spherically symmetric:
$$\mathbf{E}(r, t) = \frac{Q(t)}{4\pi \epsilon_0 r^2}\hat{\mathbf{r}} = \frac{I t}{4\pi \epsilon_0 r^2}\hat{\mathbf{r}}$$
The displacement current density is:
$$\mathbf{J}_d = \epsilon_0 \frac{\partial \mathbf{E}}{\partial t} = \frac{I}{4\pi r^2}\hat{\mathbf{r}}$$

**(a) Using the northern spherical cap:**  
The cap spans from polar angle $0$ to $\theta$ at radius $r$. No conduction current punctures this surface ($I_{\text{enc}} = 0$).  
The displacement current through the cap is:
$$I_{d,\text{enc}} = \int_{\text{cap}} \mathbf{J}_d \cdot d\mathbf{a} = \int_0^\theta \left(\frac{I}{4\pi r^2}\right)(2\pi r^2 \sin\theta')\,d\theta' = \frac{I}{2}(1 - \cos\theta)$$
Applying the Ampère–Maxwell law:
$$B(2\pi r \sin\theta) = \mu_0 I_{d,\text{enc}} = \frac{\mu_0 I}{2}(1 - \cos\theta)$$
$$\mathbf{B}(r, \theta) = \frac{\mu_0 I}{4\pi r}\left(\frac{1 - \cos\theta}{\sin\theta}\right)\hat{\boldsymbol{\phi}} = \frac{\mu_0 I}{4\pi r}\tan(\theta/2)\hat{\boldsymbol{\phi}}$$

**(b) Using the southern spherical bowl:**  
This surface spans from $\theta$ to $\pi$. It is punctured by the incoming feed wire at the south pole ($\theta = \pi$), which gives $I_{\text{enc}} = I$.  
The displacement current through the southern bowl (with upward normal $d\mathbf{a} = -\hat{\mathbf{r}} \, da$) is:
$$I_{d,\text{enc}} = -\int_\theta^\pi \left(\frac{I}{4\pi r^2}\right)(2\pi r^2 \sin\theta')\,d\theta' = -\frac{I}{2}\left[-\cos\theta'\right]_\theta^\pi = -\frac{I}{2}(1 + \cos\theta)$$
The total enclosed current is:
$$I_{\text{total}} = I + I_{d,\text{enc}} = I - \frac{I}{2}(1 + \cos\theta) = \frac{I}{2}(1 - \cos\theta)$$
which gives the same magnetic field:
$$\mathbf{B}(r, \theta) = \frac{\mu_0 I}{4\pi r}\tan(\theta/2)\hat{\boldsymbol{\phi}}$$

**(c) Using a cone with vertex at the origin:**  
On the conical surface, the area element is perpendicular to $\hat{\mathbf{r}}$ ($d\mathbf{a} \propto \hat{\boldsymbol{\theta}}$). Because $\mathbf{J}_d \propto \hat{\mathbf{r}}$, $\mathbf{J}_d \cdot d\mathbf{a} = 0$, so no displacement current crosses the cone.  
The cone does not intersect the feed wire ($I_{\text{enc}} = 0$) for any $\theta < \pi$.  
Wait: At the origin, the spherical charge is building up, and the cone intercepts the spherical boundary where surface current flows. The conduction current flowing northward along the sphere across latitude $\theta$ is:
$$I_{\text{plate}}(\theta) = I \frac{1 - \cos\theta}{2}$$
Therefore, the conduction current crossing the conical surface through the shell is $I_{\text{enc}} = \frac{I}{2}(1 - \cos\theta)$, yielding the identical result.

**(d)** As $\theta \to \pi$ (near the south pole):
$$\frac{1 - \cos\theta}{\sin\theta} \approx \frac{2}{\sin(\pi - \theta)} = \frac{2}{\sin\psi} \implies B \approx \frac{\mu_0 I}{2\pi (r\sin\psi)}$$
which is the Biot–Savart field of a long straight current-carrying wire.

**Practice Problem 7.38P:**  
A steady current $I$ enters a small conducting sphere of radius $R$ through a thin wire along the negative $z$-axis and leaves through a thin wire along the positive $z$-axis, so that no net charge accumulates on the sphere. Find the magnetic field $\mathbf{B}(r, \theta)$ everywhere outside the sphere.

---

## 7.3.3 Maxwell’s Equations

### Problem 7.39
**Problem:**  
Consider the fields:
$$\mathbf{E}(\mathbf{r}, t) = \frac{1}{4\pi\epsilon_0}\frac{q}{r^2}\theta(v t - r)\hat{\mathbf{r}}, \quad \mathbf{B}(\mathbf{r}, t) = 0$$
where $\theta$ is the step function and $v$ is a constant speed.  
(a) Show that these fields satisfy Maxwell’s equations.  
(b) Determine the corresponding charge density $\rho(\mathbf{r}, t)$ and current density $\mathbf{J}(\mathbf{r}, t)$.  
(c) Describe the physical situation that produces these fields.

**Solution:**  
**(a) Checking Maxwell’s equations:**
1. $\nabla \cdot \mathbf{B} = 0$: holds trivially since $\mathbf{B} = 0$.
2. $\nabla \times \mathbf{E} + \frac{\partial \mathbf{B}}{\partial t} = 0$: Since $\mathbf{E}$ is purely radial with spherical symmetry ($\mathbf{E} = E_r(r, t)\hat{\mathbf{r}}$), its curl is identically zero ($\nabla \times \mathbf{E} = 0$), so the equation is satisfied.

**(b) Sources $\rho$ and $\mathbf{J}$:**
From Gauss’s law:
$$\rho = \epsilon_0 \nabla \cdot \mathbf{E} = \frac{\epsilon_0 q}{4\pi \epsilon_0} \frac{1}{r^2}\frac{\partial}{\partial r}\left[r^2 \frac{\theta(v t - r)}{r^2}\right] = \frac{q}{4\pi}\left[ 4\pi \delta^3(\mathbf{r})\theta(vt - r) + \frac{1}{r^2}\frac{\partial}{\partial r}\theta(vt - r) \right]$$
Using $\frac{\partial}{\partial r}\theta(vt - r) = -\delta(r - vt)$:
$$\rho(\mathbf{r}, t) = q \delta^3(\mathbf{r})\theta(t) - \frac{q}{4\pi r^2}\delta(r - vt)$$
From the Ampère–Maxwell equation with $\mathbf{B} = 0$:
$$\mu_0 \mathbf{J} = -\mu_0 \epsilon_0 \frac{\partial \mathbf{E}}{\partial t} \implies \mathbf{J} = -\epsilon_0 \frac{\partial \mathbf{E}}{\partial t} = -\frac{q}{4\pi r^2}\left[v \delta(vt - r)\right]\hat{\mathbf{r}} = -\frac{q v}{4\pi r^2}\delta(r - vt)\hat{\mathbf{r}}$$

**(c) Physical interpretation:**  
At $t = 0$, a point charge $q$ is created at the origin, while an expanding spherical shell of equal and opposite charge $-q$ moves radially outward at constant speed $v$. The current density $\mathbf{J}$ represents the outward transport of this negative charge shell.

**Practice Problem 7.39P:**  
Suppose an electric field is given by $\mathbf{E}(r, t) = A \frac{t}{r^2}\hat{\mathbf{r}}$ and $\mathbf{B} = 0$. Find the charge density $\rho(r, t)$ and current density $\mathbf{J}(r, t)$ required to sustain this field, and verify that they satisfy the continuity equation.

---

## 7.3.4 Magnetic Charge

### Problem 7.40
**Problem:**  
Assuming that the magnetic force between two point magnetic monopoles $q_{m1}$ and $q_{m2}$ is:
$$\mathbf{F} = \frac{\mu_0}{4\pi}\frac{q_{m1} q_{m2}}{\boldsymbol{r}^2}\hat{\boldsymbol{\imath}}$$
derive the Lorentz force law for a magnetic monopole $q_m$ moving with velocity $\mathbf{v}$ through electric and magnetic fields $\mathbf{E}$ and $\mathbf{B}$.

**Solution:**  
From duality transformations:
$$\mathbf{E} \to c\mathbf{B}, \quad c\mathbf{B} \to -\mathbf{E}, \quad q_e \to \frac{q_m}{c}, \quad \text{where } c = \frac{1}{\sqrt{\mu_0 \epsilon_0}}$$
The standard Lorentz force on an electric charge $q_e$ is:
$$\mathbf{F} = q_e(\mathbf{E} + \mathbf{v}\times \mathbf{B})$$
Applying the duality transformation:
$$\mathbf{F} = \left(\frac{q_m}{c}\right)\left(c\mathbf{B} + \mathbf{v}\times \left(-\frac{\mathbf{E}}{c}\right)\right) = q_m \left(\mathbf{B} - \frac{1}{c^2}\mathbf{v}\times \mathbf{E}\right)$$
Using $c^{-2} = \mu_0 \epsilon_0$:
$$\mathbf{F} = q_m (\mathbf{B} - \mu_0 \epsilon_0 \mathbf{v}\times \mathbf{E})$$

**Practice Problem 7.40P:**  
A magnetic monopole $q_m$ moves with velocity $\mathbf{v} = v\hat{\mathbf{x}}$ in a region containing a uniform electric field $\mathbf{E} = E_0\hat{\mathbf{y}}$. What magnetic field $\mathbf{B}$ must be applied so that the monopole moves in a straight line at constant velocity?

---

### Problem 7.41
**Problem:**  
A magnetic monopole $q_m$ passes along the axis through a resistanceless superconducting loop of self-inductance $L$. What persistent current $I$ is induced in the loop after the monopole has passed through completely?

**Solution:**  
In the presence of magnetic charge, the generalized Faraday's law includes a magnetic current density $\mathbf{J}_m$:
$$\nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t} - \mu_0 \mathbf{J}_m$$
Integrating over the open surface $S$ spanning the superconducting loop:
$$\oint \mathbf{E}\cdot d\mathbf{l} = -\frac{d\Phi}{dt} - \mu_0 I_m$$
Inside an ideal superconductor, the internal electric field is zero ($\mathbf{E} = 0$), so:
$$\frac{d\Phi_{\text{total}}}{dt} + \mu_0 I_m = 0$$
The total flux through the loop is the sum of the flux from the passing monopole $\Phi_m(t)$ and the self-induced flux $L I(t)$:
$$\frac{d}{dt}\left(\Phi_m(t) + L I(t)\right) + \mu_0 I_m(t) = 0$$
Integrating over the entire transit from $t = -\infty$ to $t = +\infty$:
$$\Delta \Phi_m + L \Delta I + \mu_0 \int_{-\infty}^\infty I_m \, dt = 0$$
As the monopole travels from $-\infty$ to $+\infty$, the integral of magnetic current equals the total magnetic charge:
$$\int_{-\infty}^\infty I_m \, dt = q_m$$
The change in the surface integral of $\mathbf{B}$ between $t = \pm\infty$ for an open surface is zero ($\Delta \Phi_m = 0$).  
Therefore:
$$L \Delta I + \mu_0 q_m = 0 \implies \Delta I = -\frac{\mu_0 q_m}{L}$$
The persistent current induced in the loop has magnitude:
$$I = \frac{\mu_0 q_m}{L}$$

**Practice Problem 7.41P:**  
A magnetic monopole of strength $q_m$ moves at constant speed $v$ along the axis of a circular loop of radius $R$ and resistance $R_{\text{wire}}$ (with negligible self-inductance). Find the total electric charge $Q$ that circulates through the wire during the monopole's passage from $-\infty$ to $+\infty$.