# Chapter 4: Electric Fields in Matter

---

## 4.1 Polarization

### 4.1.1 Dielectrics
Macroscopic materials are categorized electrostatically into conductors and dielectrics (insulators). In conductors, valence electrons are delocalized and drift freely throughout the material under an applied electric field. In dielectrics, all charges remain bound to individual atoms or molecules; external fields induce microscopic displacements of these bound charges. Electric fields distort the charge distribution of a dielectric through two mechanisms:
1. **Stretching:** Spatial displacement of opposite charges within nonpolar atoms or molecules.
2. **Rotating:** Orientation of existing permanent dipole moments in polar molecules.

---

### 4.1.2 Induced Dipoles
An atom consists of a positive nucleus surrounded by a negative electron cloud. When exposed to an external electric field $\mathbf{E}$, the nucleus is displaced in the direction of the field while the electron cloud shifts oppositely until the external force is balanced by internal Coulomb attraction. The displaced charges create an induced electric dipole moment $\mathbf{p}$ aligned with the applied field. In the weak-field regime, the induced dipole moment is proportional to the local field:
$$\mathbf{p} = \alpha \mathbf{E}$$
where $\alpha$ is the **atomic polarizability**.

---

#### Example 4.1: Polarizability of a Uniformly Charged Spherical Atom
Consider a classical model consisting of a point nucleus of charge $+q$ surrounded by a uniform spherical electron cloud of total charge $-q$ and radius $a$.

Under an applied electric field $\mathbf{E}$, the nucleus is displaced by a vector $\mathbf{d}$ relative to the center of the sphere. The electric field inside a uniformly charged sphere of total charge $-q$ at an internal radius $d$ is:
$$\mathbf{E}_e = -\frac{1}{4\pi\varepsilon_0} \frac{q d}{a^3}\,\hat{\mathbf{d}}$$
At mechanical equilibrium, the restoring force matches the external force, $\mathbf{E} + \mathbf{E}_e = \mathbf{0}$:
$$\mathbf{E} = \frac{1}{4\pi\varepsilon_0} \frac{qd}{a^3}\,\hat{\mathbf{d}}$$
Defining the dipole moment as $\mathbf{p} = q\mathbf{d}$:
$$\mathbf{p} = \left(4\pi\varepsilon_0 a^3\right)\mathbf{E}$$
Thus, the polarizability is:
$$\alpha = 4\pi\varepsilon_0 a^3 = 3\varepsilon_0 v$$
where $v = \frac{4}{3}\pi a^3$ is the volume of the atom.

---

#### Polarizability Tensor of Molecules
Molecules generally possess directional anisotropy. The induced dipole moment depends on the orientation of the field relative to molecular axes:
$$\mathbf{p} = \alpha_\perp \mathbf{E}_\perp + \alpha_\parallel \mathbf{E}_\parallel$$
In arbitrary coordinate frames, the linear relation between $\mathbf{E}$ and $\mathbf{p}$ is expressed via the polarizability tensor $\alpha_{ij}$:
$$\begin{aligned}
p_x &= \alpha_{xx} E_x + \alpha_{xy} E_y + \alpha_{xz} E_z \\
p_y &= \alpha_{yx} E_x + \alpha_{yy} E_y + \alpha_{yz} E_z \\
p_z &= \alpha_{zx} E_x + \alpha_{zy} E_y + \alpha_{zz} E_z
\end{aligned}$$
Along the principal axes of the molecule, all off-diagonal components ($\alpha_{ij}$ for $i \neq j$) vanish, leaving three principal polarizabilities: $\alpha_{xx}, \alpha_{yy}, \alpha_{zz}$.

---

### 4.1.3 Alignment of Polar Molecules
Polar molecules possess intrinsic, permanent dipole moments $\mathbf{p} = q\mathbf{d}$. 

#### Torque in a Uniform Field
In a uniform electric field $\mathbf{E}$, the net force vanishes ($\mathbf{F}_+ + \mathbf{F}_- = q\mathbf{E} - q\mathbf{E} = \mathbf{0}$). The torque about the center is:
$$\mathbf{N} = \left(\frac{\mathbf{d}}{2} \times q\mathbf{E}\right) + \left(-\frac{\mathbf{d}}{2} \times (-q\mathbf{E})\right) = q\mathbf{d} \times \mathbf{E}$$
$$\mathbf{N} = \mathbf{p} \times \mathbf{E}$$
This torque drives the dipole to align parallel to $\mathbf{E}$.

#### Force in a Nonuniform Field
When the field varies spatially, the forces on opposite charges do not cancel:
$$\mathbf{F} = q(\mathbf{E}_+ - \mathbf{E}_-) = q\,\Delta\mathbf{E}$$
Using the first-order directional derivative along the separation vector $\mathbf{d}$ ($\Delta\mathbf{E} \approx (\mathbf{d}\cdot\boldsymbol{\nabla})\mathbf{E}$):
$$\mathbf{F} = (\mathbf{p}\cdot\boldsymbol{\nabla})\mathbf{E}$$
For an electrostatic field ($\boldsymbol{\nabla}\times\mathbf{E} = \mathbf{0}$), this is equivalent to:
$$\mathbf{F} = \boldsymbol{\nabla}(\mathbf{p}\cdot\mathbf{E})$$
The torque on an ideal point dipole about an arbitrary reference point $\mathbf{r}$ is:
$$\mathbf{N} = (\mathbf{p} \times \mathbf{E}) + (\mathbf{r} \times \mathbf{F})$$

---

### 4.1.4 Polarization
Macroscopic dielectric behavior is characterized by the vector field **polarization** $\mathbf{P}$, defined as the dipole moment per unit volume:
$$\mathbf{P} \equiv \frac{d\mathbf{p}}{d\tau}$$

---

## 4.2 The Field of a Polarized Object

### 4.2.1 Bound Charges
The electrostatic potential of a localized dipole $\mathbf{p}$ at displacement $\boldsymbol{\imath} = \mathbf{r} - \mathbf{r}'$ is:
$$V(\mathbf{r}) = \frac{1}{4\pi\varepsilon_0}\frac{\mathbf{p}\cdot\hat{\boldsymbol{\imath}}}{\imath^2}$$
For a continuous distribution with polarization $\mathbf{P}(\mathbf{r}')$ throughout a volume $V$:
$$V(\mathbf{r}) = \frac{1}{4\pi\varepsilon_0} \int_V \frac{\mathbf{P}(\mathbf{r}')\cdot\hat{\boldsymbol{\imath}}}{\imath^2}\,d\tau'$$
Using the vector identity $\boldsymbol{\nabla}'(1/\imath) = \hat{\boldsymbol{\imath}}/\imath^2$ (where $\boldsymbol{\nabla}'$ differentiates with respect to source coordinates $\mathbf{r}'$):
$$V(\mathbf{r}) = \frac{1}{4\pi\varepsilon_0} \int_V \mathbf{P}(\mathbf{r}')\cdot\boldsymbol{\nabla}'\left(\frac{1}{\imath}\right)\,d\tau'$$
Applying integration by parts via the divergence product rule:
$$\mathbf{P}\cdot\boldsymbol{\nabla}'\left(\frac{1}{\imath}\right) = \boldsymbol{\nabla}'\cdot\left(\frac{\mathbf{P}}{\imath}\right) - \frac{1}{\imath}(\boldsymbol{\nabla}'\cdot\mathbf{P})$$
Invoking the divergence theorem transforms the integral into surface and volume terms:
$$V(\mathbf{r}) = \frac{1}{4\pi\varepsilon_0} \oint_S \frac{\mathbf{P}\cdot\hat{\mathbf{n}}}{\imath}\,da' + \frac{1}{4\pi\varepsilon_0} \int_V \frac{-\boldsymbol{\nabla}'\cdot\mathbf{P}}{\imath}\,d\tau'$$
Defining the **bound surface charge density** $\sigma_b$ and **bound volume charge density** $\rho_b$:
$$\sigma_b \equiv \mathbf{P}\cdot\hat{\mathbf{n}}$$
$$\rho_b \equiv -\boldsymbol{\nabla}\cdot\mathbf{P}$$
The total electrostatic potential becomes identical to that produced by equivalent charge distributions:
$$V(\mathbf{r}) = \frac{1}{4\pi\varepsilon_0} \oint_S \frac{\sigma_b}{\imath}\,da' + \frac{1}{4\pi\varepsilon_0}\int_V \frac{\rho_b}{\imath}\,d\tau'$$

---

#### Example 4.2: Field of a Uniformly Polarized Sphere
A sphere of radius $R$ carries a constant polarization $\mathbf{P} = P\hat{\mathbf{z}}$.
- Since $\mathbf{P}$ is uniform, $\rho_b = -\boldsymbol{\nabla}\cdot\mathbf{P} = 0$.
- The surface bound charge is $\sigma_b = \mathbf{P}\cdot\hat{\mathbf{n}} = P\cos\theta$.

A spherical surface charge density proportional to $\cos\theta$ produces the electrostatic potentials:
$$V(r,\theta) = \begin{cases}
\dfrac{P}{3\varepsilon_0} r\cos\theta, & r \le R \\[1ex]
\dfrac{P R^3}{3\varepsilon_0 r^2} \cos\theta, & r \ge R
\end{cases}$$
Because $r\cos\theta = z$, the electric field inside the sphere is uniform:
$$\mathbf{E} = -\boldsymbol{\nabla}V = -\frac{P}{3\varepsilon_0}\,\hat{\mathbf{z}} = -\frac{1}{3\varepsilon_0}\mathbf{P} \quad (r < R)$$
Outside the sphere ($r \ge R$), the potential equals that of an ideal point dipole at the origin:
$$V(r,\theta) = \frac{1}{4\pi\varepsilon_0} \frac{\mathbf{p}\cdot\hat{\mathbf{r}}}{r^2}, \quad \text{where } \mathbf{p} = \frac{4}{3}\pi R^3 \mathbf{P}$$

---

### 4.2.2 Physical Interpretation of Bound Charges
- **Surface Charge $\sigma_b$:** Within a polarized medium, adjacent opposite dipole ends cancel along chains of oriented dipoles. At the boundary, uncancelled end charges terminate on the surface. For a cylinder of cross-sectional area $A$, the net dipole moment is $P(A d) = q d$, giving $q = P A$. For an oblique boundary cut at angle $\theta$ to $\mathbf{P}$, the surface area is $A_{\text{end}} = A/\cos\theta$, yielding $\sigma_b = q/A_{\text{end}} = P\cos\theta = \mathbf{P}\cdot\hat{\mathbf{n}}$.
- **Volume Charge $\rho_b$:** Nonuniform polarization leads to localized divergence of dipole chains. The net bound charge accumulated in an internal volume equals the negative of the net dipole flux pushed across the surface:
$$\int_V \rho_b\,d\tau = -\oint_S \mathbf{P}\cdot d\mathbf{a} = -\int_V (\boldsymbol{\nabla}\cdot\mathbf{P})\,d\tau \implies \rho_b = -\boldsymbol{\nabla}\cdot\mathbf{P}$$

---

#### Example 4.3: Uniformly Polarized Sphere via Overlapping Spheres
A uniformly polarized sphere of radius $R$ is physically equivalent to two uniformly charged spheres of equal and opposite total charge $\pm q$ whose centers are displaced by a small vector $\mathbf{d}$ parallel to $\mathbf{P}$.

The electric field in the overlap region between two uniformly charged spheres of densities $\pm \rho$ displaced by $\mathbf{d}$ is:
$$\mathbf{E} = -\frac{\rho \mathbf{d}}{3\varepsilon_0}$$
Recognizing that $\mathbf{P} = \frac{q\mathbf{d}}{\frac{4}{3}\pi R^3} = \rho \mathbf{d}$:
$$\mathbf{E} = -\frac{1}{3\varepsilon_0}\mathbf{P}$$
For external points, both spheres act as point charges at their centers, yielding an ideal dipole field with $\mathbf{p} = q\mathbf{d} = \left(\frac{4}{3}\pi R^3\right)\mathbf{P}$.

---

### 4.2.3 Microscopic and Macroscopic Fields
Microscopic fields fluctuate rapidly on atomic scales. The **macroscopic electric field** is defined as the spatial average of the microscopic field over a volume large compared to atomic dimensions yet small compared to macroscopic variations.

For a spherical averaging volume of radius $R$ centered at $\mathbf{r}$:
1. The average field produced inside a sphere by external charges equals the field evaluated at its center ($\mathbf{E}_{\text{out}}$).
2. The average field produced inside a sphere by internal charges with total dipole moment $\mathbf{p}$ is independent of the detailed microscopic distribution:
$$\mathbf{E}_{\text{in}} = -\frac{1}{4\pi\varepsilon_0}\frac{\mathbf{p}}{R^3} = -\frac{1}{3\varepsilon_0}\mathbf{P}$$
Summing the contributions proves that replacing microscopic discrete dipoles by a continuous macroscopic polarization density $\mathbf{P}$ yields the correct averaged field:
$$V(\mathbf{r}) = \frac{1}{4\pi\varepsilon_0} \int_{\text{all space}} \frac{\mathbf{P}(\mathbf{r}')\cdot\hat{\boldsymbol{\imath}}}{\imath^2}\,d\tau'$$

---

## 4.3 The Electric Displacement

### 4.3.1 Gauss’s Law in the Presence of Dielectrics
Total charge density is separated into bound charge ($\rho_b$) and free charge ($\rho_f$):
$$\rho = \rho_b + \rho_f = -\boldsymbol{\nabla}\cdot\mathbf{P} + \rho_f$$
Gauss's law in differential form is:
$$\varepsilon_0 \boldsymbol{\nabla}\cdot\mathbf{E} = \rho_f - \boldsymbol{\nabla}\cdot\mathbf{P} \implies \boldsymbol{\nabla}\cdot(\varepsilon_0\mathbf{E} + \mathbf{P}) = \rho_f$$
The **electric displacement** $\mathbf{D}$ is defined as:
$$\mathbf{D} \equiv \varepsilon_0 \mathbf{E} + \mathbf{P}$$
In terms of $\mathbf{D}$, Gauss's law becomes:
$$\boldsymbol{\nabla}\cdot\mathbf{D} = \rho_f$$
In integral form:
$$\oint_S \mathbf{D}\cdot d\mathbf{a} = Q_{f_{\text{enc}}}$$
where $Q_{f_{\text{enc}}}$ is the total enclosed free charge.

---

#### Example 4.4: Coaxial Line Charge with Insulation
A uniform line charge $\lambda$ is surrounded by rubber insulation out to radius $a$.
Using a cylindrical Gaussian surface of radius $s$ and length $L$:
$$D(2\pi s L) = \lambda L \implies \mathbf{D} = \frac{\lambda}{2\pi s}\,\hat{\mathbf{s}}$$
Outside the insulation ($s > a$), $\mathbf{P} = \mathbf{0}$, hence:
$$\mathbf{E} = \frac{1}{\varepsilon_0}\mathbf{D} = \frac{\lambda}{2\pi\varepsilon_0 s}\,\hat{\mathbf{s}} \quad (s > a)$$

---

### 4.3.2 Curl of the Displacement Field
While the curl of the electrostatic field always vanishes ($\boldsymbol{\nabla}\times\mathbf{E} = \mathbf{0}$), the curl of $\mathbf{D}$ does not generally vanish:
$$\boldsymbol{\nabla}\times\mathbf{D} = \varepsilon_0(\boldsymbol{\nabla}\times\mathbf{E}) + (\boldsymbol{\nabla}\times\mathbf{P}) = \boldsymbol{\nabla}\times\mathbf{P}$$
Because $\boldsymbol{\nabla}\times\mathbf{P}$ can be non-zero, $\mathbf{D}$ cannot generally be determined from $\rho_f$ alone, nor can it be written as the gradient of a scalar potential, except in configurations with high spatial symmetry (spherical, cylindrical, planar).

---

### 4.3.3 Boundary Conditions
From $\boldsymbol{\nabla}\cdot\mathbf{D} = \rho_f$ and $\boldsymbol{\nabla}\times\mathbf{D} = \boldsymbol{\nabla}\times\mathbf{P}$, the boundary conditions across a charged dielectric interface are:
$$D_{\text{above}}^\perp - D_{\text{below}}^\perp = \sigma_f$$
$$\mathbf{D}_{\text{above}}^\parallel - \mathbf{D}_{\text{below}}^\parallel = \mathbf{P}_{\text{above}}^\parallel - \mathbf{P}_{\text{below}}^\parallel$$
In contrast to the standard boundary conditions on the total electric field:
$$E_{\text{above}}^\perp - E_{\text{below}}^\perp = \frac{\sigma}{\varepsilon_0}, \quad \mathbf{E}_{\text{above}}^\parallel - \mathbf{E}_{\text{below}}^\parallel = \mathbf{0}$$

---

### 4.3.4 The Crystal Ambiguity
In periodic ionic lattices (e.g., NaCl), associating ion pairs into discrete dipoles is non-unique; different choices of unit cells yield different surface charge assignments and apparent polarization vectors $\mathbf{P}$. However, the total macroscopic charge density $\rho = \rho_f + \rho_b$ and the measurable macroscopic fields are unique. Measurable physical quantities correspond to changes in polarization ($\Delta\mathbf{P}$) resulting from applied perturbations.

---

## 4.4 Linear Dielectrics

### 4.4.1 Susceptibility, Permittivity, and Dielectric Constant
In linear, isotropic media, the polarization is proportional to the total macroscopic electric field:
$$\mathbf{P} = \varepsilon_0 \chi_e \mathbf{E}$$
where $\chi_e$ is the dimensionless **electric susceptibility**.

The displacement field becomes:
$$\mathbf{D} = \varepsilon_0 \mathbf{E} + \varepsilon_0 \chi_e \mathbf{E} = \varepsilon_0 (1 + \chi_e)\mathbf{E} = \varepsilon \mathbf{E}$$
where:
- $\varepsilon \equiv \varepsilon_0(1 + \chi_e)$ is the **permittivity** of the medium.
- $\varepsilon_r \equiv 1 + \chi_e = \frac{\varepsilon}{\varepsilon_0}$ is the **relative permittivity** (or **dielectric constant**).

In anisotropic crystals, the scalar susceptibility is generalized to the susceptibility tensor:
$$P_i = \varepsilon_0 \sum_j \chi_{e,ij} E_j$$

---

#### Homogeneous Linear Media
When an entire space containing free charges is filled with a uniform, homogeneous linear dielectric:
$$\boldsymbol{\nabla}\cdot\mathbf{D} = \rho_f, \quad \boldsymbol{\nabla}\times\mathbf{D} = \varepsilon(\boldsymbol{\nabla}\times\mathbf{E}) = \mathbf{0}$$
Thus $\mathbf{D} = \varepsilon_0 \mathbf{E}_{\text{vac}}$, which implies:
$$\mathbf{E} = \frac{1}{\varepsilon}\mathbf{D} = \frac{1}{\varepsilon_r}\mathbf{E}_{\text{vac}}$$
The total electric field everywhere in the dielectric is reduced by a factor of $\varepsilon_r$ due to screening by induced bound charges.

---

#### Example 4.5: Metal Sphere Surrounded by a Dielectric Shell
A conducting sphere of radius $a$ carrying free charge $Q$ is enclosed by a linear dielectric shell of permittivity $\varepsilon$ out to radius $b$.

1. By spherical symmetry, Gauss's law for $\mathbf{D}$ yields:
$$\mathbf{D} = \frac{Q}{4\pi r^2}\,\hat{\mathbf{r}} \quad (r > a)$$
2. The electric field is:
$$\mathbf{E} = \begin{cases}
\mathbf{0}, & r < a \\[1ex]
\dfrac{Q}{4\pi \varepsilon r^2}\,\hat{\mathbf{r}}, & a < r < b \\[1ex]
\dfrac{Q}{4\pi \varepsilon_0 r^2}\,\hat{\mathbf{r}}, & r > b
\end{cases}$$
3. The potential at the center relative to infinity:
$$V(0) = -\int_\infty^0 \mathbf{E}\cdot d\mathbf{l} = \frac{Q}{4\pi}\left[ \frac{1}{\varepsilon_0 b} + \frac{1}{\varepsilon a} - \frac{1}{\varepsilon b} \right]$$
4. The bound charges are:
$$\rho_b = -\boldsymbol{\nabla}\cdot\mathbf{P} = 0 \quad (a < r < b)$$
$$\sigma_b(a) = \mathbf{P}(a)\cdot(-\hat{\mathbf{r}}) = -\frac{\varepsilon_0\chi_e Q}{4\pi \varepsilon a^2}, \quad \sigma_b(b) = \mathbf{P}(b)\cdot\hat{\mathbf{r}} = \frac{\varepsilon_0\chi_e Q}{4\pi \varepsilon b^2}$$

---

#### Example 4.6: Capacitance with a Dielectric
For a parallel-plate capacitor completely filled with a linear dielectric of dielectric constant $\varepsilon_r$, the field for a given plate charge is reduced to $E = E_{\text{vac}}/\varepsilon_r$. The potential difference is correspondingly reduced:
$$V = \frac{V_{\text{vac}}}{\varepsilon_r}$$
Consequently, the capacitance $C = Q/V$ increases by the factor $\varepsilon_r$:
$$C = \varepsilon_r C_{\text{vac}}$$

---
---

# Chapter 6: Magnetic Fields in Matter

---

## 6.1 Magnetization

### 6.1.1 Diamagnets, Paramagnets, Ferromagnets
Magnetic phenomena in matter originate microscopically from atomic currents, specifically orbital electron motion and intrinsic electron spin. Materials are classified into three magnetic categories:
1. **Paramagnetism:** Unpaired electron spins align parallel to an applied magnetic field $\mathbf{B}$, producing a weak net enhancement of the field.
2. **Diamagnetism:** Applied magnetic fields perturb orbital electron motions, inducing microscopic magnetic dipoles oriented antiparallel to $\mathbf{B}$.
3. **Ferromagnetism:** Strong quantum mechanical exchange interactions align atomic spins spontaneously in domains, producing permanent magnetization without requiring an external field.

---

### 6.1.2 Torques and Forces on Magnetic Dipoles

#### Torque on a Dipole
A planar current loop of area $A$ and current $I$ possesses a magnetic dipole moment $\mathbf{m} = I\mathbf{A}$. When placed in a uniform magnetic field $\mathbf{B}$, the magnetic forces on opposite segments form a couple, producing a torque:
$$\mathbf{N} = \mathbf{m} \times \mathbf{B}$$
This torque rotates the dipole toward parallel alignment with $\mathbf{B}$.

#### Force on a Dipole
In a uniform magnetic field, the net force on a closed current loop vanishes:
$$\mathbf{F} = I \oint (d\mathbf{l} \times \mathbf{B}) = I \left( \oint d\mathbf{l} \right) \times \mathbf{B} = \mathbf{0}$$
In a nonuniform magnetic field, the net force on an infinitesimal dipole is:
$$\mathbf{F} = \boldsymbol{\nabla}(\mathbf{m} \cdot \mathbf{B})$$
Using vector calculus product identities for constant $\mathbf{m}$ where $\boldsymbol{\nabla}\cdot\mathbf{B} = 0$ and $\boldsymbol{\nabla}\times\mathbf{B} = \mathbf{0}$ in the region:
$$\mathbf{F} = (\mathbf{m}\cdot\boldsymbol{\nabla})\mathbf{B} + \mathbf{m}\times(\boldsymbol{\nabla}\times\mathbf{B}) = (\mathbf{m}\cdot\boldsymbol{\nabla})\mathbf{B}$$

---

### 6.1.3 Effect of a Magnetic Field on Atomic Orbits
Consider an electron of mass $m_e$ and charge $-e$ in a circular classical orbit of radius $R$ and orbital speed $v$. The orbital dipole moment is:
$$\mathbf{m} = -\frac{1}{2} e v R\,\hat{\mathbf{z}}$$
In the absence of a magnetic field, the centripetal acceleration is supplied by the electrostatic Coulomb force:
$$\frac{1}{4\pi\varepsilon_0} \frac{e^2}{R^2} = m_e \frac{v^2}{R}$$
When a uniform magnetic field $\mathbf{B} = B\hat{\mathbf{z}}$ perpendicular to the orbital plane is switched on, an additional Lorentz force $-e(\mathbf{v}\times\mathbf{B})$ acts radially:
$$\frac{1}{4\pi\varepsilon_0}\frac{e^2}{R^2} + e \bar{v} B = m_e \frac{\bar{v}^2}{R}$$
Assuming the orbital radius $R$ remains constant, subtracting the two force equations yields:
$$e \bar{v} B = \frac{m_e}{R}(\bar{v}^2 - v^2) \approx \frac{2 m_e v \Delta v}{R}$$
For small perturbations $\Delta v = \bar{v} - v \ll v$:
$$\Delta v \approx \frac{e R B}{2 m_e}$$
The resulting change in magnetic dipole moment is:
$$\Delta\mathbf{m} = -\frac{1}{2} e (\Delta v) R\,\hat{\mathbf{z}} = -\frac{e^2 R^2}{4 m_e}\mathbf{B}$$
The induced dipole moment $\Delta\mathbf{m}$ is directed antiparallel to $\mathbf{B}$, independent of the direction of electron revolution. This universal negative response constitutes **diamagnetism**.

---

### 6.1.4 Magnetization
Macroscopic magnetic response is quantified by the **magnetization** $\mathbf{M}$, defined as the magnetic dipole moment per unit volume:
$$\mathbf{M} \equiv \frac{d\mathbf{m}}{d\tau}$$

---

## 6.2 The Field of a Magnetized Object

### 6.2.1 Bound Currents
The magnetic vector potential of an ideal dipole $\mathbf{m}$ located at distance $\boldsymbol{\imath} = \mathbf{r} - \mathbf{r}'$ is:
$$\mathbf{A}(\mathbf{r}) = \frac{\mu_0}{4\pi}\frac{\mathbf{m}\times\hat{\boldsymbol{\imath}}}{\imath^2}$$
For a distribution with magnetization density $\mathbf{M}(\mathbf{r}')$:
$$\mathbf{A}(\mathbf{r}) = \frac{\mu_0}{4\pi}\int_V \frac{\mathbf{M}(\mathbf{r}')\times\hat{\boldsymbol{\imath}}}{\imath^2}\,d\tau' = \frac{\mu_0}{4\pi}\int_V \mathbf{M}(\mathbf{r}') \times \boldsymbol{\nabla}'\left(\frac{1}{\imath}\right)\,d\tau'$$
Applying the vector product identity $\boldsymbol{\nabla}\times(f\mathbf{A}) = f(\boldsymbol{\nabla}\times\mathbf{A}) - \mathbf{A}\times(\boldsymbol{\nabla} f)$:
$$\mathbf{M}\times\boldsymbol{\nabla}'\left(\frac{1}{\imath}\right) = \frac{\boldsymbol{\nabla}'\times\mathbf{M}}{\imath} - \boldsymbol{\nabla}'\times\left(\frac{\mathbf{M}}{\imath}\right)$$
Integrating by parts and converting the second volume integral into a closed surface integral:
$$\mathbf{A}(\mathbf{r}) = \frac{\mu_0}{4\pi}\int_V \frac{\boldsymbol{\nabla}'\times\mathbf{M}}{\imath}\,d\tau' + \frac{\mu_0}{4\pi}\oint_S \frac{\mathbf{M}\times\hat{\mathbf{n}}}{\imath}\,da'$$
Defining the **bound volume current density** $\mathbf{J}_b$ and **bound surface current density** $\mathbf{K}_b$:
$$\mathbf{J}_b \equiv \boldsymbol{\nabla}\times\mathbf{M}$$
$$\mathbf{K}_b \equiv \mathbf{M}\times\hat{\mathbf{n}}$$
The vector potential reduces to that of ordinary macroscopic currents:
$$\mathbf{A}(\mathbf{r}) = \frac{\mu_0}{4\pi}\int_V \frac{\mathbf{J}_b}{\imath}\,d\tau' + \frac{\mu_0}{4\pi}\oint_S \frac{\mathbf{K}_b}{\imath}\,da'$$

---

#### Example 6.1: Field of a Uniformly Magnetized Sphere
For a sphere of radius $R$ with uniform magnetization $\mathbf{M} = M\hat{\mathbf{z}}$:
- The volume bound current is $\mathbf{J}_b = \boldsymbol{\nabla}\times\mathbf{M} = \mathbf{0}$.
- The surface bound current is $\mathbf{K}_b = \mathbf{M}\times\hat{\mathbf{n}} = M\sin\theta\,\hat{\boldsymbol{\phi}}$.

This surface current distribution matches that of a spherical shell of radius $R$ and uniform surface charge $\sigma$ rotating at angular velocity $\boldsymbol{\omega} = \omega\hat{\mathbf{z}}$, where $\mathbf{K} = \sigma\boldsymbol{\omega}\times\mathbf{r} = \sigma\omega R\sin\theta\,\hat{\boldsymbol{\phi}}$, under the mapping $\sigma\omega R \to M$.

Using the magnetic field of a spinning spherical shell:
1. Inside the sphere, the magnetic field is uniform:
$$\mathbf{B} = \frac{2}{3}\mu_0\mathbf{M} \quad (r < R)$$
2. Outside the sphere, the field is that of an ideal magnetic dipole:
$$\mathbf{B}(\mathbf{r}) = \frac{\mu_0}{4\pi r^3}\left[3(\mathbf{m}\cdot\hat{\mathbf{r}})\hat{\mathbf{r}} - \mathbf{m}\right], \quad \text{where } \mathbf{m} = \frac{4}{3}\pi R^3 \mathbf{M}$$

---

### 6.2.2 Physical Interpretation of Bound Currents
- **Surface Current $\mathbf{K}_b$:** Microscopic internal current loops within adjacent cells cancel along common boundaries. At the macroscopic boundary, this cancellation terminates, leaving an uncompensated tangential current density $\mathbf{K}_b = \mathbf{M}\times\hat{\mathbf{n}}$.
- **Volume Current $\mathbf{J}_b$:** If the magnetization varies spatially, neighboring microscopic loops carry unequal currents, yielding a net internal differential transport of charge:
$$(J_b)_x = \frac{\partial M_z}{\partial y} - \frac{\partial M_y}{\partial z} \implies \mathbf{J}_b = \boldsymbol{\nabla}\times\mathbf{M}$$
Bound currents satisfy local charge conservation identically: $\boldsymbol{\nabla}\cdot\mathbf{J}_b = \boldsymbol{\nabla}\cdot(\boldsymbol{\nabla}\times\mathbf{M}) = 0$.

---

### 6.2.3 The Macroscopic Magnetic Field inside Matter
Averaging the microscopic field over a volume containing many dipoles shows that replacing discrete atomic current loops with the continuous magnetization $\mathbf{M}$ gives the correct macroscopic magnetic induction $\mathbf{B}$.

---

## 6.3 The Auxiliary Field H

### 6.3.1 Ampère’s Law in Magnetized Materials
The total current density $\mathbf{J}$ consists of free currents $\mathbf{J}_f$ and bound currents $\mathbf{J}_b$:
$$\mathbf{J} = \mathbf{J}_f + \mathbf{J}_b = \mathbf{J}_f + \boldsymbol{\nabla}\times\mathbf{M}$$
Ampère's law in differential form is:
$$\frac{1}{\mu_0}(\boldsymbol{\nabla}\times\mathbf{B}) = \mathbf{J}_f + \boldsymbol{\nabla}\times\mathbf{M} \implies \boldsymbol{\nabla}\times\left(\frac{1}{\mu_0}\mathbf{B} - \mathbf{M}\right) = \mathbf{J}_f$$
The **auxiliary magnetic field** $\mathbf{H}$ is defined as:
$$\mathbf{H} \equiv \frac{1}{\mu_0}\mathbf{B} - \mathbf{M}$$
Ampère's law in terms of $\mathbf{H}$ reads:
$$\boldsymbol{\nabla}\times\mathbf{H} = \mathbf{J}_f$$
In integral form:
$$\oint \mathbf{H}\cdot d\mathbf{l} = I_{f_{\text{enc}}}$$
where $I_{f_{\text{enc}}}$ is the free current enclosed by the Ampèrian loop.

---

#### Example 6.2: Long Copper Wire Carrying Free Current
A cylindrical conductor of radius $R$ carries a uniformly distributed free current $I$.
Using a circular Ampèrian loop of radius $s$ concentric with the wire:
1. For $s \le R$:
$$H(2\pi s) = I \frac{\pi s^2}{\pi R^2} \implies \mathbf{H} = \frac{I s}{2\pi R^2}\,\hat{\boldsymbol{\phi}}$$
2. For $s \ge R$:
$$H(2\pi s) = I \implies \mathbf{H} = \frac{I}{2\pi s}\,\hat{\boldsymbol{\phi}}$$
Outside the wire, $\mathbf{M} = \mathbf{0}$, yielding $\mathbf{B} = \mu_0 \mathbf{H} = \frac{\mu_0 I}{2\pi s}\,\hat{\boldsymbol{\phi}}$.

---

### 6.3.2 Divergence of H
While $\boldsymbol{\nabla}\cdot\mathbf{B} = 0$, the divergence of $\mathbf{H}$ depends on the divergence of magnetization:
$$\boldsymbol{\nabla}\cdot\mathbf{H} = -\boldsymbol{\nabla}\cdot\mathbf{M}$$
Consequently, $\mathbf{H}$ cannot generally be computed solely from $\mathbf{J}_f$ unless the divergence of $\mathbf{M}$ vanishes or the configuration exhibits symmetry (e.g., cylindrical, toroidal, infinite planar).

---

### 6.3.3 Boundary Conditions
The boundary conditions on $\mathbf{H}$ derived from $\boldsymbol{\nabla}\cdot\mathbf{H} = -\boldsymbol{\nabla}\cdot\mathbf{M}$ and $\boldsymbol{\nabla}\times\mathbf{H} = \mathbf{J}_f$ are:
$$H_{\text{above}}^\perp - H_{\text{below}}^\perp = -(M_{\text{above}}^\perp - M_{\text{below}}^\perp)$$
$$\mathbf{H}_{\text{above}}^\parallel - \mathbf{H}_{\text{below}}^\parallel = \mathbf{K}_f \times \hat{\mathbf{n}}$$
The corresponding boundary conditions on $\mathbf{B}$ are:
$$B_{\text{above}}^\perp - B_{\text{below}}^\perp = 0$$
$$\mathbf{B}_{\text{above}}^\parallel - \mathbf{B}_{\text{below}}^\parallel = \mu_0(\mathbf{K} \times \hat{\mathbf{n}})$$

---

## 6.4 Linear and Nonlinear Media

### 6.4.1 Magnetic Susceptibility and Permeability
In linear magnetic media, magnetization is directly proportional to $\mathbf{H}$:
$$\mathbf{M} = \chi_m \mathbf{H}$$
where $\chi_m$ is the dimensionless **magnetic susceptibility**:
- $\chi_m > 0$ for paramagnetic substances.
- $\chi_m < 0$ for diamagnetic substances.

The total magnetic field is:
$$\mathbf{B} = \mu_0(\mathbf{H} + \mathbf{M}) = \mu_0(1 + \chi_m)\mathbf{H} = \mu \mathbf{H}$$
where:
- $\mu \equiv \mu_0(1 + \chi_m)$ is the **permeability** of the material.
- $\mu_r \equiv 1 + \chi_m = \frac{\mu}{\mu_0}$ is the **relative permeability**.

In a homogeneous linear medium containing free current $\mathbf{J}_f$:
$$\mathbf{J}_b = \boldsymbol{\nabla}\times\mathbf{M} = \boldsymbol{\nabla}\times(\chi_m \mathbf{H}) = \chi_m \mathbf{J}_f$$
In regions with no free current ($\mathbf{J}_f = \mathbf{0}$), the volume bound current vanishes ($\mathbf{J}_b = \mathbf{0}$), and all bound current resides on the surfaces.

---

#### Example 6.3: Infinite Solenoid Filled with Linear Medium
An infinite solenoid with $n$ turns per unit length carrying current $I$ is filled with a linear medium of susceptibility $\chi_m$.

Applying Ampère's law for $\mathbf{H}$ gives:
$$\mathbf{H} = nI\,\hat{\mathbf{z}}$$
The resulting magnetic induction is:
$$\mathbf{B} = \mu \mathbf{H} = \mu_0 (1 + \chi_m)nI\,\hat{\mathbf{z}}$$
The surface bound current is:
$$\mathbf{K}_b = \mathbf{M}\times\hat{\mathbf{n}} = \chi_m(\mathbf{H}\times\hat{\mathbf{n}}) = \chi_m nI\,\hat{\boldsymbol{\phi}}$$

---

### 6.4.2 Ferromagnetism
Ferromagnetic media exhibit nonlinear, hysteretic behavior where $\mathbf{M}$ is not a single-valued function of $\mathbf{H}$.

```
                 B ^
                   |             Saturation
                   |              /
         Permanent | c          / b
         Magnet    |          /
                   |        /
                   |      /
      -H_c         |    /
       d           |  /   g
  -----+-----------+-----------+------> H
                   |           /
                   |         /
                   |       /
                 f |     /
                   |   /
                   | / e (Negative Saturation)
```

1. **Domains:** Magnetic dipole moments are aligned parallel within microscopic regions called domains via exchange coupling. In an unmagnetized sample, the domains have randomly oriented net moments, resulting in zero macroscopic magnetization.
2. **Domain Wall Motion:** An applied magnetic field exerts torques that shift domain boundaries, enlarging favorable domains at the expense of others until saturation is reached.
3. **Hysteresis Loop:**
   - Reducing $H$ to zero does not return $M$ to zero; a **remanent magnetization** (retentivity, point $c$) persists, forming a permanent magnet.
   - Reversing the applied field drives the magnetization to zero at a reverse field known as the **coercive force** (coercivity, point $d$).
   - Cycling $H$ between positive and negative saturation traces a closed **hysteresis loop**.
4. **Curie Temperature:** Above a material-specific critical temperature (the Curie temperature $T_C$, e.g., $770^\circ\text{C}$ for iron), thermal fluctuations overcome the exchange interaction, and the material transitions into a paramagnetic phase.