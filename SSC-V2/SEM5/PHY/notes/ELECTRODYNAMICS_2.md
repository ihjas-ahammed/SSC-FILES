## 7. Electrodynamics

---

### 7.1 Electromotive Force

#### 7.1.1 Ohm’s Law
In conducting media, the motion of charges is governed by the applied force per unit charge $\mathbf{f}$. For most materials, the volume current density $\mathbf{J}$ is linearly proportional to $\mathbf{f}$:

$$\mathbf{J} = \sigma \mathbf{f} \tag{7.1}$$

where $\sigma$ is an empirical parameter known as the electrical conductivity of the medium. The reciprocal of conductivity is the resistivity, defined as $\rho = 1/\sigma$. In ideal conductors, $\sigma \to \infty$, whereas for ideal insulators, $\sigma \to 0$.

When the driving agency is electromagnetic, the force per unit charge is given by the Lorentz force law:

$$\mathbf{J} = \sigma(\mathbf{E} + \mathbf{v} \times \mathbf{B}) \tag{7.2}$$

For charge velocities typical of macroscopic conducting circuits, the magnetic term $|\mathbf{v} \times \mathbf{B}|$ is negligible compared to the electric field $\mathbf{E}$, yielding the standard microscopic form of Ohm’s law:

$$\mathbf{J} = \sigma \mathbf{E} \tag{7.3}$$

In static equilibrium, internal charges are stationary ($\mathbf{J} = 0$), requiring the electrostatic field inside a conductor to vanish ($\mathbf{E} = 0$). In the non-static regime where current flows, a nonzero electric field must exist inside real conductors to maintain the current. For an ideal conductor ($\sigma \to \infty$), the required field $\mathbf{E} = \mathbf{J}/\sigma$ remains zero even under non-zero current flow, allowing conducting interconnects to be treated as equipotentials.

Integrating Eq. (7.3) over macroscopic conductor geometries yields the relation between the potential difference $V$ across the terminals and the total current $I$:

$$V = IR \tag{7.4}$$

where $R$ is the electrical resistance, determined entirely by the geometry of the conductor and the conductivity of the material.

Under steady-state current flow, the continuity equation requires $\nabla \cdot \mathbf{J} = 0$. For a medium with spatially uniform conductivity $\sigma$:

$$\nabla \cdot \mathbf{E} = \frac{1}{\sigma}\nabla \cdot \mathbf{J} = 0 \tag{7.5}$$

Consequently, Gauss's law implies that the volume charge density $\rho$ is zero inside a homogeneous conductor carrying steady current; any net charge is confined entirely to the conductor surfaces. It follows that the electric potential within such a conductor satisfies Laplace’s equation:

$$\nabla^2 V = 0$$

Boundary value techniques and uniqueness theorems can therefore be applied to determine the electrostatic potential inside current-carrying conductors.

##### Microscopic Drude Model
A classical interpretation of Eq. (7.3) is provided by the Drude model. Free charge carriers with charge $q$ and mass $m$ experience an acceleration $\mathbf{a} = q\mathbf{E}/m$ between randomizing collisions. The high thermal speed $v_{\text{thermal}}$ of the carriers dominates the microscopic motion, such that the mean time between collisions over a mean free path $\lambda$ is approximately:

$$t = \frac{\lambda}{v_{\text{thermal}}}$$

The acquired directional drift velocity between collisions is:

$$\mathbf{v}_{\text{ave}} = \frac{1}{2}\mathbf{a}t = \frac{q\lambda}{2m v_{\text{thermal}}}\mathbf{E}$$

For carrier density $n$ and $f$ conduction electrons per unit particle, the macroscopic current density is:

$$\mathbf{J} = nfq\mathbf{v}_{\text{ave}} = \left(\frac{nf\lambda q^2}{2m v_{\text{thermal}}}\right)\mathbf{E} \tag{7.6}$$

This confirms the linear relation between $\mathbf{J}$ and $\mathbf{E}$ and shows that conductivity scales with carrier density and decreases as temperature increases.

##### Joule Heating
Energy transferred to the conducting lattice via collisions is dissipated as thermal energy. The power dissipated in a resistor of resistance $R$ carrying current $I$ under potential difference $V$ is:

$$P = VI = I^2 R \tag{7.7}$$

---

#### 7.1.2 Electromotive Force
In a steady-state closed circuit, continuity demands that current be uniform along the loop ($\nabla \cdot \mathbf{J} = 0$). Deviations from uniformity cause surface charges to accumulate at bends and boundaries, establishing an electrostatic field $\mathbf{E}$ that guides the charge carriers and enforces a uniform current.

The net force per unit charge driving charges around a closed circuit consists of a localized non-electrostatic source force $\mathbf{f}_s$ (such as chemical reactions in batteries, thermal gradients, or mechanical transport) and the conservative electrostatic field $\mathbf{E}$:

$$\mathbf{f} = \mathbf{f}_s + \mathbf{E} \tag{7.8}$$

The electromotive force (emf), denoted by $\mathcal{E}$, is defined as the closed line integral of the total force per unit charge around the circuit:

$$\mathcal{E} \equiv \oint \mathbf{f} \cdot d\mathbf{l} = \oint \mathbf{f}_s \cdot d\mathbf{l} \tag{7.9}$$

Because the line integral of an electrostatic field around any closed loop is zero ($\oint \mathbf{E} \cdot d\mathbf{l} = 0$), the electrostatic field contributes nothing to the net emf; $\mathcal{E}$ is determined solely by the source force $\mathbf{f}_s$.

In an ideal, resistanceless source of emf ($\sigma \to \infty$), the internal net force vanishes ($\mathbf{E} = -\mathbf{f}_s$). The electrostatic potential difference between the terminals $a$ and $b$ equals the emf:

$$V = -\int_a^b \mathbf{E} \cdot d\mathbf{l} = \int_a^b \mathbf{f}_s \cdot d\mathbf{l} = \oint \mathbf{f}_s \cdot d\mathbf{l} = \mathcal{E} \tag{7.10}$$

---

#### 7.1.3 Motional Emf
When a conducting circuit moves with velocity $\mathbf{v}$ through a magnetic field $\mathbf{B}$, the magnetic Lorentz force per unit charge acting on the mobile carriers is $\mathbf{f}_{\text{mag}} = \mathbf{v} \times \mathbf{B}$. The induced motional emf is:

$$\mathcal{E} = \oint (\mathbf{v} \times \mathbf{B}) \cdot d\mathbf{l} \tag{7.11}$$

Because magnetic forces are always perpendicular to the instantaneous velocity of a charge carrier ($\mathbf{F}_{\text{mag}} \cdot \mathbf{w} = 0$), the magnetic field does no net mechanical work on the charges. Instead, the current circulating in the conductor experiences a retarding magnetic drag force. An external mechanical agent moving the loop must perform work against this drag, thereby supplying the energy dissipated as Joule heat.

The motional emf generated in any closed loop moving through a magnetic field satisfies the flux rule:

$$\mathcal{E} = -\frac{d\Phi}{dt} \tag{7.13}$$

where the magnetic flux $\Phi$ through the loop bounded by contour $\mathcal{P}$ is defined as:

$$\Phi \equiv \int_S \mathbf{B} \cdot d\mathbf{a} \tag{7.12}$$

##### Derivation of the Flux Rule for Moving Loops
Consider a closed loop defining a surface $S(t)$ at time $t$. Over a time increment $dt$, each element $d\mathbf{l}$ sweeps out an infinitesimal area element $d\mathbf{a} = (\mathbf{v} \times d\mathbf{l})\,dt$. The total change in magnetic flux through the closed boundary is the flux passing through the swept side ribbon:

$$d\Phi = \int_{\text{ribbon}} \mathbf{B} \cdot d\mathbf{a} = dt \oint \mathbf{B} \cdot (\mathbf{v} \times d\mathbf{l})$$

Applying the vector triple product identity $\mathbf{B} \cdot (\mathbf{v} \times d\mathbf{l}) = -(\mathbf{v} \times \mathbf{B}) \cdot d\mathbf{l}$:

$$\frac{d\Phi}{dt} = -\oint (\mathbf{v} \times \mathbf{B}) \cdot d\mathbf{l} = -\mathcal{E}$$

which proves Eq. (7.13). The sign convention is determined by the right-hand rule relating the orientation of $d\mathbf{a}$ to the loop integration direction $d\mathbf{l}$.

The flux rule applies to loops that translate, rotate, or deform continuously. However, it cannot be applied when current paths are indeterminate, when circuits involve moving sliding contacts across extended solid conductors, or when circuits are altered by switches without physical motion of the conductor through the field. In bulk conductors moving through inhomogeneous magnetic fields, localized circulating currents—known as eddy currents—are induced, exerting a damping force on the moving conductor.

---

### 7.2 Electromagnetic Induction

#### 7.2.1 Faraday’s Law
Empirical observation establishes that an electromotive force is induced in a closed circuit whenever the magnetic flux linking that circuit changes over time, regardless of whether the change arises from motion of the conductor or from a time variation in the magnetic field itself.

In the case of a stationary loop in a time-varying magnetic field, the force acting on stationary charges is electric. Thus, a time-dependent magnetic field induces a non-conservative electric field:

$$\mathcal{E} = \oint \mathbf{E} \cdot d\mathbf{l} = -\frac{d\Phi}{dt} \tag{7.23}$$

Expressing the magnetic flux as a surface integral over an open surface $S$ bounded by the loop:

$$\oint \mathbf{E} \cdot d\mathbf{l} = -\int_S \frac{\partial \mathbf{B}}{\partial t} \cdot d\mathbf{a} \tag{7.24}$$

Applying Stokes’ theorem transforms Eq. (7.24) into the differential form of Faraday’s law:

$$\nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t} \tag{7.25}$$

For static magnetic fields, Eq. (7.25) reduces to the electrostatic condition $\nabla \times \mathbf{E} = 0$.

##### The Universal Flux Rule and Lenz’s Law
The relation:

$$\mathcal{E} = -\frac{d\Phi}{dt} \tag{7.26}$$

governs all mechanisms of flux variation (motional emf via the Lorentz force, time-dependent induction via induced electric fields, or combinations of both).

Lenz’s law determines the sign of the induced effects: *an induced current flows in a direction such that the secondary magnetic flux it generates opposes the original change in magnetic flux through the circuit*.

---

#### 7.2.2 The Induced Electric Field
In the absence of static charges ($\rho = 0$), the field equations for an induced electric field are:

$$\nabla \cdot \mathbf{E} = 0, \quad \nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t}$$

These equations are mathematically isomorphic to the field equations of magnetostatics ($\nabla \cdot \mathbf{B} = 0$ and $\nabla \times \mathbf{B} = \mu_0 \mathbf{J}$), where $-\frac{\partial \mathbf{B}}{\partial t}$ plays the mathematical role of $\mu_0 \mathbf{J}$. By direct correspondence with the Biot–Savart law:

$$\mathbf{E}(\mathbf{r}, t) = -\frac{1}{4\pi}\int \frac{\left(\frac{\partial \mathbf{B}(\mathbf{r}', t)}{\partial t}\right) \times \hat{\boldsymbol{\imath}}}{\boldsymbol{r}^2} \, d\tau' = -\frac{1}{4\pi}\frac{\partial}{\partial t}\int \frac{\mathbf{B}(\mathbf{r}', t) \times \hat{\boldsymbol{\imath}}}{\boldsymbol{r}^2} \, d\tau' \tag{7.27}$$

where $\hat{\boldsymbol{\imath}} = (\mathbf{r} - \mathbf{r}')/|\mathbf{r} - \mathbf{r}'|$ and $\boldsymbol{r} = |\mathbf{r} - \mathbf{r}'|$. For systems exhibiting high geometric symmetry, Faraday’s law in integral form:

$$\oint \mathbf{E} \cdot d\mathbf{l} = -\frac{d\Phi}{dt} \tag{7.28}$$

allows direct calculation of the induced electric field using closed paths analogous to Ampèrian loops.

##### The Quasistatic Approximation
When magnetic fields change with time, magnetostatic formulas (such as Ampère’s law and the Biot–Savart law) are applied under the *quasistatic approximation*, which assumes that field propagation delays are negligible. If $\tau$ represents the characteristic timescale over which currents vary and $c$ is the speed of light, the quasistatic approximation is valid only within spatial regions where:

$$s \ll c\tau \tag{7.30}$$

At distances comparable to or greater than $c\tau$, retardation effects and radiation must be taken into account.

---

#### 7.2.3 Inductance
Consider two stationary closed conducting loops, designated Loop 1 and Loop 2. A steady current $I_1$ in Loop 1 produces a magnetic field $\mathbf{B}_1$ governed by the Biot–Savart law. The magnetic flux $\Phi_2$ linking Loop 2 is proportional to $I_1$:

$$\Phi_2 = M_{21} I_1 \tag{7.31}$$

where $M_{21}$ is the mutual inductance between the loops.

Expressing the flux in terms of the magnetic vector potential $\mathbf{A}_1$ ($\mathbf{B}_1 = \nabla \times \mathbf{A}_1$) and applying Stokes’ theorem:

$$\Phi_2 = \int_{S_2} (\nabla \times \mathbf{A}_1) \cdot d\mathbf{a}_2 = \oint_{\mathcal{P}_2} \mathbf{A}_1 \cdot d\mathbf{l}_2$$

Using the vector potential for a line current distribution, $\mathbf{A}_1 = \frac{\mu_0 I_1}{4\pi}\oint_{\mathcal{P}_1} \frac{d\mathbf{l}_1}{\boldsymbol{r}}$, yields the Neumann formula:

$$M_{21} = \frac{\mu_0}{4\pi} \oint_{\mathcal{P}_1}\oint_{\mathcal{P}_2} \frac{d\mathbf{l}_1 \cdot d\mathbf{l}_2}{\boldsymbol{r}} \tag{7.32}$$

Because the integrand is symmetric with respect to interchange of the indices 1 and 2, mutual inductance is strictly reciprocal:

$$M_{12} = M_{21} \equiv M \tag{7.33}$$

When the current in Loop 1 varies with time, the induced emf in Loop 2 is:

$$\mathcal{E}_2 = -M \frac{dI_1}{dt} \tag{7.34}$$

##### Self-Inductance
A time-varying current $I(t)$ in a single isolated loop induces a magnetic field that links the loop itself. The self-flux $\Phi$ is proportional to the current:

$$\Phi = L I \tag{7.35}$$

where $L$ is the self-inductance of the loop, a strictly positive quantity determined purely by circuit geometry. By Faraday's law, changes in the current induce a back emf opposing the change:

$$\mathcal{E} = -L \frac{dI}{dt} \tag{7.36}$$

In a series circuit driven by an external source $\mathcal{E}_0$ with total resistance $R$ and inductance $L$, the governing loop equation is:

$$\mathcal{E}_0 - L\frac{dI}{dt} = IR$$

For the initial condition $I(0) = 0$, the solution is:

$$I(t) = \frac{\mathcal{E}_0}{R} \left(1 - e^{-(R/L)t}\right) \tag{7.38}$$

where the inductive time constant is defined as $\tau \equiv L/R$.

---

#### 7.2.4 Energy in Magnetic Fields
Establishing a current in an inductive circuit requires work against the induced back emf. The rate of work done by an external source per unit time is:

$$\frac{dW}{dt} = -\mathcal{E}I = L I \frac{dI}{dt}$$

Integrating from zero current to a final current $I$, the total stored magnetic energy is:

$$W = \frac{1}{2} L I^2 \tag{7.39}$$

This energy can be recast in terms of field quantities. Since the total flux is related to the vector potential by $LI = \Phi = \oint \mathbf{A} \cdot d\mathbf{l}$:

$$W = \frac{1}{2} I \oint (\mathbf{A} \cdot d\mathbf{l}) = \frac{1}{2}\oint (\mathbf{A} \cdot \mathbf{I})\, dl \tag{7.40}$$

Generalizing to three-dimensional volume current distributions:

$$W = \frac{1}{2} \int_V (\mathbf{A} \cdot \mathbf{J})\, d\tau \tag{7.41}$$

Using Ampère’s law to replace current density ($\mathbf{J} = \frac{1}{\mu_0}\nabla \times \mathbf{B}$):

$$W = \frac{1}{2\mu_0} \int_V \mathbf{A} \cdot (\nabla \times \mathbf{B})\, d\tau \tag{7.42}$$

Applying the vector identity $\nabla \cdot (\mathbf{A} \times \mathbf{B}) = \mathbf{B} \cdot (\nabla \times \mathbf{A}) - \mathbf{A} \cdot (\nabla \times \mathbf{B})$ and recognizing that $\nabla \times \mathbf{A} = \mathbf{B}$:

$$\mathbf{A} \cdot (\nabla \times \mathbf{B}) = B^2 - \nabla \cdot (\mathbf{A} \times \mathbf{B})$$

Integrating over volume $V$ and using the divergence theorem on the second term:

$$W = \frac{1}{2\mu_0} \left[ \int_V B^2 \, d\tau - \oint_S (\mathbf{A} \times \mathbf{B}) \cdot d\mathbf{a} \right] \tag{7.43}$$

Extending the volume of integration over all space, the fields at infinity decay sufficiently rapidly that the bounding surface integral vanishes:

$$W = \frac{1}{2\mu_0} \int_{\text{all space}} B^2 \, d\tau \tag{7.44}$$

Equation (7.44) defines the magnetic energy density stored throughout the field:

$$u_B = \frac{B^2}{2\mu_0}$$

This directly parallels the electrostatic energy relation, where the total energy can be expressed either in terms of source distributions or in terms of the field itself:

$$W_{\text{elec}} = \frac{1}{2}\int_V V\rho \, d\tau = \frac{\epsilon_0}{2}\int_{\text{all space}} E^2 \, d\tau$$

$$W_{\text{mag}} = \frac{1}{2}\int_V (\mathbf{A} \cdot \mathbf{J})\, d\tau = \frac{1}{2\mu_0}\int_{\text{all space}} B^2 \, d\tau$$

---

### 7.3 Maxwell’s Equations

#### 7.3.1 Electrodynamics before Maxwell
Prior to Maxwell's modification, the fundamental laws describing the divergence and curl of electromagnetic fields were:

1. $\nabla \cdot \mathbf{E} = \frac{\rho}{\epsilon_0}$ (Gauss’s law)
2. $\nabla \cdot \mathbf{B} = 0$
3. $\nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t}$ (Faraday’s law)
4. $\nabla \times \mathbf{B} = \mu_0 \mathbf{J}$ (Ampère’s law)

This system contains a mathematical inconsistency. Taking the divergence of both sides of Faraday's law yields:

$$\nabla \cdot (\nabla \times \mathbf{E}) = -\frac{\partial}{\partial t}(\nabla \cdot \mathbf{B}) = 0$$

which is consistent because the divergence of any curl vanishes identically, and $\nabla \cdot \mathbf{B} = 0$. However, taking the divergence of Ampère’s law gives:

$$\nabla \cdot (\nabla \times \mathbf{B}) = \mu_0 (\nabla \cdot \mathbf{J}) \tag{7.45}$$

The left-hand side is identically zero, whereas the right-hand side vanishes only for steady currents. For time-dependent configurations, the charge conservation law requires the continuity condition:

$$\nabla \cdot \mathbf{J} = -\frac{\partial \rho}{\partial t} \neq 0$$

Ampère’s law is therefore incompatible with the conservation of electric charge under non-steady conditions.

---

#### 7.3.2 How Maxwell Fixed Ampère’s Law
Using Gauss’s law, the rate of change of charge density is expressed in terms of the electric field:

$$\frac{\partial \rho}{\partial t} = \frac{\partial}{\partial t}(\epsilon_0 \nabla \cdot \mathbf{E}) = \nabla \cdot \left(\epsilon_0 \frac{\partial \mathbf{E}}{\partial t}\right)$$

Substituting this into the continuity equation gives:

$$\nabla \cdot \mathbf{J} = -\nabla \cdot \left(\epsilon_0 \frac{\partial \mathbf{E}}{\partial t}\right) \implies \nabla \cdot \left( \mathbf{J} + \epsilon_0 \frac{\partial \mathbf{E}}{\partial t} \right) = 0$$

Replacing $\mathbf{J}$ in Ampère’s law with the divergence-free sum $\mathbf{J} + \epsilon_0 \frac{\partial \mathbf{E}}{\partial t}$ eliminates the mathematical inconsistency:

$$\nabla \times \mathbf{B} = \mu_0 \mathbf{J} + \mu_0\epsilon_0 \frac{\partial \mathbf{E}}{\partial t} \tag{7.46}$$

The term:

$$\mathbf{J}_d \equiv \epsilon_0 \frac{\partial \mathbf{E}}{\partial t} \tag{7.47}$$

is defined as the displacement current density. The integral form of the generalized Ampère–Maxwell law is:

$$\oint \mathbf{B} \cdot d\mathbf{l} = \mu_0 I_{\text{enc}} + \mu_0 \epsilon_0 \int_S \left(\frac{\partial \mathbf{E}}{\partial t}\right) \cdot d\mathbf{a} \tag{7.48}$$

This modification removes the ambiguity in choosing the bounding surface $S$ for an Ampèrian loop during capacitor charging: conduction current crossing a planar surface between the plates is replaced by an identical displacement current flux crossing an open balloon-shaped surface spanning the gap.

---

#### 7.3.3 Maxwell’s Equations
Maxwell's equations summarize the classical theory of electrodynamics:

$$\begin{aligned}
\text{(i)} \quad &\nabla \cdot \mathbf{E} = \frac{1}{\epsilon_0}\rho &&\text{(Gauss's law)} \\
\text{(ii)} \quad &\nabla \cdot \mathbf{B} = 0 &&\text{(No magnetic monopoles)} \\
\text{(iii)} \quad &\nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t} &&\text{(Faraday's law)} \\
\text{(iv)} \quad &\nabla \times \mathbf{B} = \mu_0 \mathbf{J} + \mu_0\epsilon_0 \frac{\partial \mathbf{E}}{\partial t} \quad &&\text{(Ampère–Maxwell law)}
\end{aligned} \tag{7.49}$$

These equations are supplemented by the Lorentz force law, which defines how fields act on charges:

$$\mathbf{F} = q(\mathbf{E} + \mathbf{v} \times \mathbf{B}) \tag{7.50}$$

Taking the divergence of Eq. (7.49-iv) automatically yields the charge continuity equation:

$$\nabla \cdot \mathbf{J} = -\frac{\partial \rho}{\partial t} \tag{7.51}$$

Maxwell's equations can be arranged with field terms on the left and primary source densities ($\rho, \mathbf{J}$) on the right:

$$\begin{aligned}
\nabla \cdot \mathbf{E} &= \frac{1}{\epsilon_0}\rho \\
\nabla \cdot \mathbf{B} &= 0 \\
\nabla \times \mathbf{E} + \frac{\partial \mathbf{B}}{\partial t} &= 0 \\
\nabla \times \mathbf{B} - \mu_0\epsilon_0 \frac{\partial \mathbf{E}}{\partial t} &= \mu_0 \mathbf{J}
\end{aligned} \tag{7.52}$$

---

#### 7.3.4 Magnetic Charge
In source-free regions ($\rho = 0$, $\mathbf{J} = 0$), Maxwell’s equations display complete dual symmetry under the transformations $\mathbf{E} \to \mathbf{B}$ and $\mathbf{B} \to -\mu_0\epsilon_0 \mathbf{E}$:

$$\begin{aligned}
\nabla \cdot \mathbf{E} &= 0, \quad &\nabla \times \mathbf{E} &= -\frac{\partial \mathbf{B}}{\partial t} \\
\nabla \cdot \mathbf{B} &= 0, \quad &\nabla \times \mathbf{B} &= \mu_0\epsilon_0 \frac{\partial \mathbf{E}}{\partial t}
\end{aligned}$$

This symmetry is broken by the presence of electric charges and currents alongside the absence of magnetic charges and currents. If magnetic charge density $\rho_m$ and magnetic current density $\mathbf{J}_m$ are introduced, the equations take the symmetric form:

$$\begin{aligned}
\text{(i)} \quad &\nabla \cdot \mathbf{E} = \frac{1}{\epsilon_0}\rho_e \\
\text{(ii)} \quad &\nabla \cdot \mathbf{B} = \mu_0 \rho_m \\
\text{(iii)} \quad &\nabla \times \mathbf{E} = -\mu_0 \mathbf{J}_m - \frac{\partial \mathbf{B}}{\partial t} \\
\text{(iv)} \quad &\nabla \times \mathbf{B} = \mu_0 \mathbf{J}_e + \mu_0\epsilon_0 \frac{\partial \mathbf{E}}{\partial t}
\end{aligned} \tag{7.53}$$

Applying the divergence to (iii) and (iv) yields independent conservation laws for both magnetic and electric charges:

$$\nabla \cdot \mathbf{J}_m = -\frac{\partial \rho_m}{\partial t}, \quad \nabla \cdot \mathbf{J}_e = -\frac{\partial \rho_e}{\partial t} \tag{7.54}$$

Empirical observations indicate that $\rho_m = 0$ and $\mathbf{J}_m = 0$ identically in all known physical systems.

---

#### 7.3.5 Maxwell’s Equations in Matter
While Eq. (7.49) is fundamental, expressing electrodynamics inside polarizable and magnetizable media requires reformulating the source charges and currents in terms of bound and free constituents.