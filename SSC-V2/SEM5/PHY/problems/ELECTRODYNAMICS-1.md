# Chapter 4: Electric Fields in Matter

---

## 4.1 Polarization

### 4.1.2 Induced Dipoles

#### Original Questions with Solutions

##### Example 4.1
**Statement:**  
A primitive model for an atom consists of a point nucleus ($+q$) surrounded by a uniformly charged spherical electron cloud ($-q$) of radius $a$. Calculate the atomic polarizability of such an atom.

**Solution:**  
In the presence of an external electric field $\mathbf{E}$, the nucleus is displaced by a distance $d$ from the center of the spherical electron cloud. The electric field inside a uniformly charged sphere of radius $a$ and total charge $-q$ at distance $d \le a$ from the center is:
$$\mathbf{E}_e = -\frac{1}{4\pi\varepsilon_0}\frac{qd}{a^3}\hat{\mathbf{d}}$$
At equilibrium, the external field balances this internal field ($\mathbf{E} + \mathbf{E}_e = \mathbf{0}$):
$$E = \frac{1}{4\pi\varepsilon_0}\frac{qd}{a^3}$$
The induced dipole moment is $p = qd = (4\pi\varepsilon_0 a^3)E$. Since $\mathbf{p} = \alpha \mathbf{E}$, the atomic polarizability is:
$$\alpha = 4\pi\varepsilon_0 a^3 = 3\varepsilon_0 v$$
where $v = \frac{4}{3}\pi a^3$ is the atomic volume.

---

##### Problem 4.1
**Statement:**  
A hydrogen atom (with Bohr radius $a = 0.529 \times 10^{-10}\text{ m}$) is situated between two parallel metal plates separated by $1\text{ mm}$, connected to a $500\text{ V}$ potential source.  
(a) What fraction of the atomic radius does the separation distance $d$ between the nucleus and the center of the electron cloud amount to, roughly? (Use $\alpha/(4\pi\varepsilon_0) = 0.667 \times 10^{-30}\text{ m}^3$).  
(b) Estimate the voltage needed across this apparatus to ionize the atom.

**Solution:**  
(a) The electric field between the plates is:
$$E = \frac{V}{s} = \frac{500\text{ V}}{10^{-3}\text{ m}} = 5 \times 10^5\text{ V/m}$$
The induced dipole moment is $p = qd = \alpha E$, where $q = e = 1.602 \times 10^{-19}\text{ C}$. Thus:
$$d = \frac{\alpha E}{e} = \frac{(4\pi\varepsilon_0 \times 0.667 \times 10^{-30})(5 \times 10^5)}{1.602 \times 10^{-19}} \approx 2.3 \times 10^{-16}\text{ m}$$
As a fraction of the Bohr radius $a$:
$$\frac{d}{a} = \frac{2.3 \times 10^{-16}\text{ m}}{0.529 \times 10^{-10}\text{ m}} \approx 4.3 \times 10^{-6}$$
(b) Ionization occurs when the displacement $d$ is on the order of the radius $a$ ($d \approx a$):
$$E_{\text{ionize}} \approx \frac{e a}{\alpha} = \frac{e}{4\pi\varepsilon_0 (0.667 \times 10^{-30})} \approx 2.16 \times 10^{11}\text{ V/m}$$
The required voltage across the $1\text{ mm}$ gap is:
$$V_{\text{ionize}} = E_{\text{ionize}} s \approx (2.16 \times 10^{11}\text{ V/m})(10^{-3}\text{ m}) \approx 2.2 \times 10^8\text{ V}$$

---

##### Problem 4.2
**Statement:**  
According to quantum mechanics, the electron cloud for a hydrogen atom in its ground state has a charge density:
$$\rho(r) = \frac{q}{\pi a^3} e^{-2r/a}$$
where $q = -e$ is the electron charge and $a$ is the Bohr radius. Find the atomic polarizability of such an atom in the limit $r \ll a$.

**Solution:**  
By Gauss's law, the electric field due to the electron cloud at radius $r$ is:
$$E_e(r) = \frac{1}{4\pi\varepsilon_0 r^2} Q_{\text{enc}}(r)$$
where:
$$Q_{\text{enc}}(r) = \int_0^r \rho(r') 4\pi r'^2 dr' = \frac{4q}{a^3} \int_0^r r'^2 e^{-2r'/a} dr'$$
Evaluating the integral:
$$Q_{\text{enc}}(r) = q \left[ 1 - e^{-2r/a}\left(1 + \frac{2r}{a} + \frac{2r^2}{a^2}\right) \right]$$
Expanding the exponential for $r \ll a$:
$$e^{-2r/a} \approx 1 - \frac{2r}{a} + \frac{2r^2}{a^2} - \frac{4r^3}{3a^3} + \dots$$
Multiplying out the terms up to order $(r/a)^3$:
$$e^{-2r/a}\left(1 + \frac{2r}{a} + \frac{2r^2}{a^2}\right) \approx 1 - \frac{4r^3}{3a^3}$$
Thus:
$$Q_{\text{enc}}(r) \approx q \left(\frac{4r^3}{3a^3}\right)$$
The electric field on the displaced nucleus is:
$$E_e(d) = \frac{1}{4\pi\varepsilon_0 d^2}\left(\frac{4q d^3}{3a^3}\right) = \frac{qd}{3\pi\varepsilon_0 a^3}$$
At equilibrium, $e E = |q| E_e(d)$, so $E = \frac{e d}{3\pi\varepsilon_0 a^3}$. With $p = ed$:
$$p = (3\pi\varepsilon_0 a^3)E \implies \alpha = 3\pi\varepsilon_0 a^3 = \frac{9}{4}(4\pi\varepsilon_0 a^3)$$

---

##### Problem 4.3
**Statement:**  
Suppose the charge density of the electron cloud of an atom is proportional to the distance from the center, $\rho(r) = C r$, extending out to radius $R$.  
(a) To what power of $E$ is the induced dipole moment $p$ proportional?  
(b) Determine the general condition on $\rho(r)$ as $r \to 0$ such that $p \propto E$ in the weak-field limit.

**Solution:**  
(a) The charge enclosed within radius $d$ ($d \ll R$) is:
$$Q_{\text{enc}}(d) = \int_0^d (C r)(4\pi r^2)dr = \pi C d^4$$
The field produced by this charge at $d$ is:
$$E_e(d) = \frac{1}{4\pi\varepsilon_0 d^2} (\pi C d^4) = \frac{C}{4\varepsilon_0} d^2$$
Equating to the applied field $E = E_e(d)$ gives $d \propto E^{1/2}$.  
Since $p = qd$, the induced dipole moment scales as:
$$p \propto E^{1/2}$$
(b) For an arbitrary radial charge distribution where $\rho(r) \approx \rho_0 r^n$ as $r \to 0$:
$$Q_{\text{enc}}(d) \approx \int_0^d \rho_0 r^n (4\pi r^2)dr = \frac{4\pi \rho_0}{n+3} d^{n+3}$$
$$E_e(d) = \frac{Q_{\text{enc}}(d)}{4\pi\varepsilon_0 d^2} \propto d^{n+1}$$
For $p = qd \propto E$, we require $E \propto d^1$, which implies $n + 1 = 1$, or $n = 0$.  
Hence, $\rho(r)$ must approach a non-zero finite constant at the origin ($\lim_{r \to 0}\rho(r) = \text{constant} \ne 0$).

---

##### Problem 4.4
**Statement:**  
A point charge $q$ is situated a large distance $r$ from a neutral atom of polarizability $\alpha$. Find the force of attraction between them.

**Solution:**  
The electric field produced by the point charge $q$ at the location of the atom is:
$$\mathbf{E} = \frac{q}{4\pi\varepsilon_0 r^2}\hat{\mathbf{r}}$$
The induced dipole moment of the atom is:
$$\mathbf{p} = \alpha \mathbf{E} = \frac{\alpha q}{4\pi\varepsilon_0 r^2}\hat{\mathbf{r}}$$
The force exerted on a dipole $\mathbf{p}$ in a nonuniform field $\mathbf{E}$ is:
$$\mathbf{F} = (\mathbf{p}\cdot\boldsymbol{\nabla})\mathbf{E} = p \frac{\partial \mathbf{E}}{\partial r} = \left(\frac{\alpha q}{4\pi\varepsilon_0 r^2}\right)\frac{\partial}{\partial r}\left(\frac{q}{4\pi\varepsilon_0 r^2}\hat{\mathbf{r}}\right) = -\frac{2\alpha q^2}{(4\pi\varepsilon_0)^2 r^5}\hat{\mathbf{r}}$$
The force is attractive, with magnitude:
$$F = \frac{2\alpha q^2}{(4\pi\varepsilon_0)^2 r^5}$$

---

#### Practice Questions (Without Answers)

##### Practice 4.1-A (Parallel to Example 4.1)
Consider a two-dimensional classical model of an atom consisting of a line charge nucleus of linear charge density $+\lambda$ centered inside a uniform cylindrical electron cloud of radius $R$ and uniform volume charge density $\rho = -\lambda/(\pi R^2)$. Calculate the polarizability per unit length $\alpha_{\text{line}}$ under an electric field applied perpendicular to the cylinder axis.

##### Practice 4.1-B (Parallel to Problem 4.1)
A helium atom ($\alpha/(4\pi\varepsilon_0) = 0.205 \times 10^{-30}\text{ m}^3$) is placed between the plates of a parallel-plate capacitor separated by $0.5\text{ mm}$ and held at a potential of $2.0\text{ kV}$. Determine the displacement $d$ of the nucleus relative to the electron cloud and calculate the ratio $d/a_0$, where $a_0 = 0.529 \times 10^{-10}\text{ m}$.

##### Practice 4.1-C (Parallel to Problem 4.2)
An atom is modeled with an electron cloud density given by $\rho(r) = \rho_0 (1 - r/R)$ for $r \le R$, and zero for $r > R$. Normalize $\rho_0$ so that the total charge is $-q$, and find the atomic polarizability $\alpha$ for small displacements $d \ll R$.

##### Practice 4.1-D (Parallel to Problem 4.3)
Suppose the electron cloud density of a hypothetical atom varies as $\rho(r) = A r^2$ for $r \le R$.  
(a) Determine the dependence of the induced dipole moment $p$ on the applied field $E$.  
(b) If instead $\rho(r) = B r^{-1/2}$, find the exponent $m$ in $p \propto E^m$.

##### Practice 4.1-E (Parallel to Problem 4.4)
An infinite line charge of uniform linear density $\lambda$ lies along the $z$-axis. A neutral atom of polarizability $\alpha$ is located at a perpendicular distance $s$ from the line charge. Determine the magnitude and direction of the electrostatic force exerted on the atom.

---

### 4.1.3 Alignment of Polar Molecules

#### Original Questions with Solutions

##### Problem 4.5
**Statement:**  
In Fig. 4.6, $\mathbf{p}_1 = p_1 \hat{\mathbf{z}}$ is located at the origin and $\mathbf{p}_2 = p_2 \hat{\mathbf{x}}$ is located at $(r, 0, 0)$ along the $x$-axis. What is the torque on $\mathbf{p}_1$ due to $\mathbf{p}_2$? What is the torque on $\mathbf{p}_2$ due to $\mathbf{p}_1$? (Compute each torque about the dipole's own center.)

**Solution:**  
The electric field produced by dipole $\mathbf{p}$ at displacement $\mathbf{r}$ is:
$$\mathbf{E}(\mathbf{r}) = \frac{1}{4\pi\varepsilon_0 r^3}\left[3(\mathbf{p}\cdot\hat{\mathbf{r}})\hat{\mathbf{r}} - \mathbf{p}\right]$$
1. **Field of $\mathbf{p}_2$ at the origin:**  
   Here the vector from $\mathbf{p}_2$ to $\mathbf{p}_1$ is $-\hat{\mathbf{x}}$, and $\mathbf{p}_2 = p_2 \hat{\mathbf{x}}$.  
   $$\mathbf{E}_2(\mathbf{0}) = \frac{1}{4\pi\varepsilon_0 r^3}\left[3(p_2\hat{\mathbf{x}}\cdot(-\hat{\mathbf{x}}))(-\hat{\mathbf{x}}) - p_2\hat{\mathbf{x}}\right] = \frac{1}{4\pi\varepsilon_0 r^3}[3p_2 \hat{\mathbf{x}} - p_2 \hat{\mathbf{x}}] = \frac{2 p_2}{4\pi\varepsilon_0 r^3}\hat{\mathbf{x}}$$
   The torque on $\mathbf{p}_1 = p_1\hat{\mathbf{z}}$ is:
   $$\mathbf{N}_1 = \mathbf{p}_1 \times \mathbf{E}_2(\mathbf{0}) = (p_1 \hat{\mathbf{z}}) \times \left(\frac{2 p_2}{4\pi\varepsilon_0 r^3}\hat{\mathbf{x}}\right) = \frac{2 p_1 p_2}{4\pi\varepsilon_0 r^3}\hat{\mathbf{y}}$$
2. **Field of $\mathbf{p}_1$ at position of $\mathbf{p}_2$:**  
   Here $\hat{\mathbf{r}} = \hat{\mathbf{x}}$, while $\mathbf{p}_1 = p_1\hat{\mathbf{z}}$, so $\mathbf{p}_1 \cdot \hat{\mathbf{r}} = 0$.  
   $$\mathbf{E}_1(\mathbf{r}) = \frac{1}{4\pi\varepsilon_0 r^3}[-p_1\hat{\mathbf{z}}] = -\frac{p_1}{4\pi\varepsilon_0 r^3}\hat{\mathbf{z}}$$
   The torque on $\mathbf{p}_2 = p_2\hat{\mathbf{x}}$ is:
   $$\mathbf{N}_2 = \mathbf{p}_2 \times \mathbf{E}_1(\mathbf{r}) = (p_2 \hat{\mathbf{x}}) \times \left(-\frac{p_1}{4\pi\varepsilon_0 r^3}\hat{\mathbf{z}}\right) = \frac{p_1 p_2}{4\pi\varepsilon_0 r^3}\hat{\mathbf{y}}$$

---

##### Problem 4.6
**Statement:**  
An ideal dipole $\mathbf{p}$ is situated a distance $z$ above an infinite grounded conducting plane ($xy$-plane). The dipole lies in the $xz$-plane and makes an angle $\theta$ with the $z$-axis (normal to the plane). Find the torque on $\mathbf{p}$. If the dipole is free to rotate, in what orientation will it come to rest?

**Solution:**  
Using the method of images, a dipole $\mathbf{p} = p\sin\theta\,\hat{\mathbf{x}} + p\cos\theta\,\hat{\mathbf{z}}$ at $(0,0,z)$ has an image dipole located at $(0,0,-z)$ with dipole moment:
$$\mathbf{p}' = -p\sin\theta\,\hat{\mathbf{x}} + p\cos\theta\,\hat{\mathbf{z}}$$
The separation vector from the image dipole to $\mathbf{p}$ is $\mathbf{R} = 2z\hat{\mathbf{z}}$, so $\hat{\mathbf{R}} = \hat{\mathbf{z}}$. The field produced by the image dipole at the position of $\mathbf{p}$ is:
$$\mathbf{E}_{\text{image}} = \frac{1}{4\pi\varepsilon_0 (2z)^3}\left[3(\mathbf{p}'\cdot\hat{\mathbf{z}})\hat{\mathbf{z}} - \mathbf{p}'\right] = \frac{1}{32\pi\varepsilon_0 z^3}\left[2p\cos\theta\,\hat{\mathbf{z}} + p\sin\theta\,\hat{\mathbf{x}}\right]$$
The torque on $\mathbf{p}$ is $\mathbf{N} = \mathbf{p} \times \mathbf{E}_{\text{image}}$:
$$\mathbf{N} = (p\sin\theta\,\hat{\mathbf{x}} + p\cos\theta\,\hat{\mathbf{z}}) \times \frac{p}{32\pi\varepsilon_0 z^3}(\sin\theta\,\hat{\mathbf{x}} + 2\cos\theta\,\hat{\mathbf{z}}) = -\frac{p^2 \sin\theta\cos\theta}{32\pi\varepsilon_0 z^3}\hat{\mathbf{y}} = -\frac{p^2 \sin(2\theta)}{64\pi\varepsilon_0 z^3}\hat{\mathbf{y}}$$
Equilibrium positions occurs at $\sin(2\theta) = 0 \implies \theta = 0, \pi/2, \pi$.  
Evaluating potential energy $U = -\mathbf{p}\cdot\mathbf{E}_{\text{image}} = -\frac{p^2}{32\pi\varepsilon_0 z^3}(\sin^2\theta + 2\cos^2\theta) = -\frac{p^2}{32\pi\varepsilon_0 z^3}(1 + \cos^2\theta)$:  
The energy is minimized when $\cos^2\theta = 1$, which corresponds to $\theta = 0$ or $\theta = \pi$ (perpendicular to the plane).

---

##### Problem 4.7
**Statement:**  
Show that the electrostatic energy of a permanent ideal dipole $\mathbf{p}$ in an electric field $\mathbf{E}$ is given by:
$$U = -\mathbf{p}\cdot\mathbf{E}$$

**Solution:**  
Model the physical dipole as charges $-q$ at $\mathbf{r}$ and $+q$ at $\mathbf{r} + \mathbf{d}$. The potential energy of the system in an electrostatic potential $V$ is:
$$U = q V(\mathbf{r} + \mathbf{d}) - q V(\mathbf{r})$$
For an ideal dipole, $d$ is infinitesimal. Expanding $V(\mathbf{r}+\mathbf{d})$ in a Taylor series:
$$V(\mathbf{r} + \mathbf{d}) - V(\mathbf{r}) \approx \mathbf{d}\cdot\boldsymbol{\nabla}V(\mathbf{r})$$
Using $\mathbf{E} = -\boldsymbol{\nabla}V$:
$$U = q(\mathbf{d}\cdot\boldsymbol{\nabla}V) = -q\mathbf{d}\cdot\mathbf{E}$$
Defining $\mathbf{p} = q\mathbf{d}$ yields:
$$U = -\mathbf{p}\cdot\mathbf{E}$$

---

##### Problem 4.8
**Statement:**  
Show that the interaction energy of two ideal dipoles $\mathbf{p}_1$ and $\mathbf{p}_2$ separated by a displacement vector $\mathbf{r}$ is:
$$U = \frac{1}{4\pi\varepsilon_0}\frac{1}{r^3}\left[\mathbf{p}_1\cdot\mathbf{p}_2 - 3(\mathbf{p}_1\cdot\hat{\mathbf{r}})(\mathbf{p}_2\cdot\hat{\mathbf{r}})\right]$$

**Solution:**  
The interaction energy is the energy of $\mathbf{p}_2$ residing in the electric field $\mathbf{E}_1$ generated by $\mathbf{p}_1$:
$$U = -\mathbf{p}_2\cdot\mathbf{E}_1(\mathbf{r})$$
The field produced by dipole $\mathbf{p}_1$ at displacement $\mathbf{r}$ is:
$$\mathbf{E}_1(\mathbf{r}) = \frac{1}{4\pi\varepsilon_0 r^3}\left[3(\mathbf{p}_1\cdot\hat{\mathbf{r}})\hat{\mathbf{r}} - \mathbf{p}_1\right]$$
Taking the scalar product with $-\mathbf{p}_2$:
$$U = -\mathbf{p}_2\cdot\left(\frac{1}{4\pi\varepsilon_0 r^3}\left[3(\mathbf{p}_1\cdot\hat{\mathbf{r}})\hat{\mathbf{r}} - \mathbf{p}_1\right]\right) = \frac{1}{4\pi\varepsilon_0 r^3}\left[\mathbf{p}_1\cdot\mathbf{p}_2 - 3(\mathbf{p}_1\cdot\hat{\mathbf{r}})(\mathbf{p}_2\cdot\hat{\mathbf{r}})\right]$$

---

##### Problem 4.9
**Statement:**  
A dipole $\mathbf{p}$ is a distance $r$ from a point charge $q$, oriented so that $\mathbf{p}$ makes an angle $\theta$ with the vector $\mathbf{r}$ pointing from $q$ to $\mathbf{p}$.  
(a) What is the force on $\mathbf{p}$?  
(b) What is the force on $q$?

**Solution:**  
(a) Let the charge $q$ be at the origin. Its electric field at the position of the dipole is:
$$\mathbf{E} = \frac{q}{4\pi\varepsilon_0 r^2}\hat{\mathbf{r}}$$
In spherical coordinates, with $\mathbf{p} = p\cos\theta\,\hat{\mathbf{r}} + p\sin\theta\,\hat{\boldsymbol{\theta}}$:
$$\mathbf{F} = \boldsymbol{\nabla}(\mathbf{p}\cdot\mathbf{E}) = \boldsymbol{\nabla}\left( \frac{q p\cos\theta}{4\pi\varepsilon_0 r^2} \right)$$
Evaluating the gradient in spherical coordinates:
$$\boldsymbol{\nabla} f = \frac{\partial f}{\partial r}\hat{\mathbf{r}} + \frac{1}{r}\frac{\partial f}{\partial \theta}\hat{\boldsymbol{\theta}}$$
$$\mathbf{F}_p = -\frac{2 q p\cos\theta}{4\pi\varepsilon_0 r^3}\hat{\mathbf{r}} - \frac{q p\sin\theta}{4\pi\varepsilon_0 r^3}\hat{\boldsymbol{\theta}} = \frac{q}{4\pi\varepsilon_0 r^3}\left(-2p\cos\theta\,\hat{\mathbf{r}} - p\sin\theta\,\hat{\boldsymbol{\theta}}\right)$$
(b) The electric field produced by dipole $\mathbf{p}$ at the position of charge $q$ (displacement $-\mathbf{r}$, meaning $\hat{\mathbf{r}}' = -\hat{\mathbf{r}}$):
$$\mathbf{E}_{\text{dipole}} = \frac{1}{4\pi\varepsilon_0 r^3}\left[3(\mathbf{p}\cdot(-\hat{\mathbf{r}}))(-\hat{\mathbf{r}}) - \mathbf{p}\right] = \frac{1}{4\pi\varepsilon_0 r^3}[3(p\cos\theta)\hat{\mathbf{r}} - (p\cos\theta\,\hat{\mathbf{r}} + p\sin\theta\,\hat{\boldsymbol{\theta}})] = \frac{1}{4\pi\varepsilon_0 r^3}[2p\cos\theta\,\hat{\mathbf{r}} - p\sin\theta\,\hat{\boldsymbol{\theta}}]$$
The force on $q$ is $\mathbf{F}_q = q\mathbf{E}_{\text{dipole}}(\mathbf{0})$:
Since the unit vector $\hat{\boldsymbol{\theta}}$ at $q$ points oppositely, transforming back to fixed Cartesian components confirms Newton's third law:
$$\mathbf{F}_q = -\mathbf{F}_p = \frac{q}{4\pi\varepsilon_0 r^3}\left(2p\cos\theta\,\hat{\mathbf{r}} + p\sin\theta\,\hat{\boldsymbol{\theta}}\right)$$

---

#### Practice Questions (Without Answers)

##### Practice 4.1-F (Parallel to Problem 4.5)
Two identical dipoles $\mathbf{p}_1 = p\hat{\mathbf{z}}$ and $\mathbf{p}_2 = p\hat{\mathbf{z}}$ are separated by a displacement vector $\mathbf{r} = d\hat{\mathbf{x}}$. Calculate the net torque on each dipole about its own center.

##### Practice 4.1-G (Parallel to Problem 4.6)
An ideal dipole $\mathbf{p}$ is located at distance $d$ from the intersection corner of two semi-infinite grounded conducting planes intersecting at right angles (the planes $x=0, y>0$ and $y=0, x>0$). If the dipole is oriented along $\hat{\mathbf{x}}$, determine the electrostatic force on $\mathbf{p}$.

##### Practice 4.1-H (Parallel to Problem 4.7)
Using the work integral $W = -\int \mathbf{N}\cdot d\boldsymbol{\theta}$, verify that the work required to rotate an ideal dipole $\mathbf{p}$ in a uniform electric field $\mathbf{E}$ from an angle $\theta_1$ to $\theta_2$ relative to $\mathbf{E}$ equals $\Delta U = -\mathbf{p}\cdot\mathbf{E}_2 - (-\mathbf{p}\cdot\mathbf{E}_1)$.

##### Practice 4.1-I (Parallel to Problem 4.8)
Three identical dipoles $\mathbf{p}$ are placed at the vertices of an equilateral triangle of side length $a$, all oriented perpendicularly to the plane of the triangle. Calculate the total electrostatic interaction energy of the configuration.

##### Practice 4.1-J (Parallel to Problem 4.9)
An electric dipole $\mathbf{p} = p\hat{\mathbf{z}}$ is placed at $(0, 0, z)$ directly above a grounded conducting sphere of radius $R$ centered at the origin. Compute the force on the dipole when $z \gg R$.

---

## 4.2 The Field of a Polarized Object

### 4.2.1 Bound Charges

#### Original Questions with Solutions

##### Example 4.2
**Statement:**  
Find the electric field produced by a uniformly polarized sphere of radius $R$ carrying frozen-in polarization $\mathbf{P} = P\hat{\mathbf{z}}$.

**Solution:**  
Since $\mathbf{P}$ is constant, the volume bound charge density vanishes:
$$\rho_b = -\boldsymbol{\nabla}\cdot\mathbf{P} = 0$$
The surface bound charge density is:
$$\sigma_b = \mathbf{P}\cdot\hat{\mathbf{n}} = P\cos\theta$$
A spherical surface charge $\sigma_0 \cos\theta$ produces the electrostatic potentials:
$$V(r,\theta) = \begin{cases}
\dfrac{P}{3\varepsilon_0} r\cos\theta, & r \le R \\[1.5ex]
\dfrac{P R^3}{3\varepsilon_0 r^2}\cos\theta, & r \ge R
\end{cases}$$
Inside the sphere ($r < R$):
$$V = \frac{P}{3\varepsilon_0} z \implies \mathbf{E} = -\boldsymbol{\nabla}V = -\frac{P}{3\varepsilon_0}\hat{\mathbf{z}} = -\frac{1}{3\varepsilon_0}\mathbf{P}$$
Outside the sphere ($r \ge R$):
$$V(r,\theta) = \frac{1}{4\pi\varepsilon_0}\frac{p\cos\theta}{r^2}, \quad \text{where } p = \frac{4}{3}\pi R^3 P$$
which is the field of a pure dipole at the origin.

---

##### Problem 4.10
**Statement:**  
A sphere of radius $R$ carries a polarization $\mathbf{P}(\mathbf{r}) = k\mathbf{r}$, where $k$ is a constant.  
(a) Calculate the bound charges $\sigma_b$ and $\rho_b$.  
(b) Find the electric field inside and outside the sphere.

**Solution:**  
(a) The volume bound charge density is:
$$\rho_b = -\boldsymbol{\nabla}\cdot\mathbf{P} = -\frac{1}{r^2}\frac{\partial}{\partial r}(r^2 \cdot kr) = -\frac{1}{r^2}\frac{\partial}{\partial r}(k r^3) = -3k$$
The surface bound charge density at $r = R$ (where $\hat{\mathbf{n}} = \hat{\mathbf{r}}$) is:
$$\sigma_b = \mathbf{P}(R)\cdot\hat{\mathbf{r}} = k R$$
Check on total bound charge:
$$Q_b = \int \rho_b d\tau + \oint \sigma_b da = (-3k)\left(\frac{4}{3}\pi R^3\right) + (k R)(4\pi R^2) = -4\pi k R^3 + 4\pi k R^3 = 0$$
(b) By spherical symmetry, applying Gauss's law with $Q_{\text{enc}}$:  
- **Inside ($r < R$):**
$$\varepsilon_0 \oint \mathbf{E}\cdot d\mathbf{a} = Q_{\text{enc}} \implies \varepsilon_0 E(4\pi r^2) = \rho_b \left(\frac{4}{3}\pi r^3\right) = -3k\left(\frac{4}{3}\pi r^3\right)$$
$$\mathbf{E}(r) = -\frac{k}{\varepsilon_0}\mathbf{r}$$
- **Outside ($r > R$):**
$$Q_{\text{enc}} = Q_{\text{total}} = 0 \implies \mathbf{E} = \mathbf{0}$$

---

##### Problem 4.11
**Statement:**  
A short cylinder of radius $a$ and length $L$ carries a uniform polarization $\mathbf{P}$ parallel to its axis. Find the bound charge, and describe the electric field lines for:  
(i) $L \gg a$,  
(ii) $L \ll a$,  
(iii) $L \approx a$.

**Solution:**  
Since $\mathbf{P}$ is uniform:
$$\rho_b = -\boldsymbol{\nabla}\cdot\mathbf{P} = 0$$
Along the cylindrical curved side, $\hat{\mathbf{n}} \perp \mathbf{P} \implies \sigma_b = \mathbf{P}\cdot\hat{\mathbf{n}} = 0$.  
On the end faces:
- Top flat face ($\hat{\mathbf{n}} = \hat{\mathbf{z}}$): $\sigma_b = P$
- Bottom flat face ($\hat{\mathbf{n}} = -\hat{\mathbf{z}}$): $\sigma_b = -P$
The field is that produced by two disks of radius $a$ separated by $L$ with uniform surface charges $\pm P$.
- **Case (i) $L \gg a$:** The end disks resemble point charges $\pm q = \pm P(\pi a^2)$ separated by $L$. Outside, field lines emanate from the $+P$ cap and loop around to the $-P$ cap. Inside, far from the ends, the field is near zero.
- **Case (ii) $L \ll a$:** The configuration resembles a parallel-plate capacitor with separation $L$ and surface charge $\pm P$. Between the plates, the field is uniform: $\mathbf{E} \approx -\frac{P}{\varepsilon_0}\hat{\mathbf{z}} = -\frac{1}{\varepsilon_0}\mathbf{P}$. The fringe field outside is negligible.
- **Case (iii) $L \approx a$:** The field resembles that of a short bar magnet, continuous outside and pointing from $+P$ to $-P$ both inside and outside.

---

##### Problem 4.12
**Statement:**  
Calculate the electrostatic potential of a uniformly polarized sphere of radius $R$ directly by integrating:
$$V(\mathbf{r}) = \frac{1}{4\pi\varepsilon_0} \int_V \frac{\mathbf{P}(\mathbf{r}')\cdot\hat{\boldsymbol{\imath}}}{\imath^2} d\tau'$$

**Solution:**  
Since $\mathbf{P}$ is uniform, pull it outside the integral:
$$V(\mathbf{r}) = \frac{\mathbf{P}}{4\pi\varepsilon_0} \cdot \int_V \frac{\hat{\boldsymbol{\imath}}}{\imath^2} d\tau'$$
Recall that the electric field of a uniformly charged sphere with charge density $\rho_0$ is:
$$\mathbf{E}_{\text{unif}}(\mathbf{r}) = \frac{\rho_0}{4\pi\varepsilon_0} \int_V \frac{\hat{\boldsymbol{\imath}}}{\imath^2} d\tau'$$
Hence:
$$\int_V \frac{\hat{\boldsymbol{\imath}}}{\imath^2} d\tau' = \frac{4\pi\varepsilon_0}{\rho_0} \mathbf{E}_{\text{unif}}(\mathbf{r})$$
For a sphere of uniform charge density $\rho_0$:
$$\mathbf{E}_{\text{unif}}(\mathbf{r}) = \begin{cases}
\dfrac{\rho_0}{3\varepsilon_0}\mathbf{r}, & r \le R \\[1.5ex]
\dfrac{\rho_0 R^3}{3\varepsilon_0 r^2}\hat{\mathbf{r}}, & r \ge R
\end{cases}$$
Substituting this into the potential expression:
$$V(\mathbf{r}) = \frac{\mathbf{P}}{4\pi\varepsilon_0} \cdot \left[ \frac{4\pi\varepsilon_0}{\rho_0} \mathbf{E}_{\text{unif}}(\mathbf{r}) \right] = \frac{1}{\rho_0} \mathbf{P}\cdot\mathbf{E}_{\text{unif}}(\mathbf{r})$$
- Inside ($r \le R$):
$$V(\mathbf{r}) = \frac{1}{\rho_0} \mathbf{P}\cdot \left(\frac{\rho_0}{3\varepsilon_0}\mathbf{r}\right) = \frac{1}{3\varepsilon_0}\mathbf{P}\cdot\mathbf{r}$$
- Outside ($r \ge R$):
$$V(\mathbf{r}) = \frac{1}{\rho_0} \mathbf{P}\cdot \left(\frac{\rho_0 R^3}{3\varepsilon_0 r^2}\hat{\mathbf{r}}\right) = \frac{R^3}{3\varepsilon_0 r^2}\mathbf{P}\cdot\hat{\mathbf{r}} = \frac{1}{4\pi\varepsilon_0}\frac{\mathbf{p}\cdot\hat{\mathbf{r}}}{r^2}$$
where $\mathbf{p} = \frac{4}{3}\pi R^3 \mathbf{P}$.

---

#### Practice Questions (Without Answers)

##### Practice 4.2-A (Parallel to Example 4.2)
A spherical shell of inner radius $a$ and outer radius $b$ carries a uniform polarization $\mathbf{P} = P_0 \hat{\mathbf{z}}$. Determine the bound charge densities on all surfaces and compute the electric field in the inner hollow region ($r < a$).

##### Practice 4.2-B (Parallel to Problem 4.10)
A dielectric sphere of radius $R$ carries a polarization $\mathbf{P}(\mathbf{r}) = c r^2 \hat{\mathbf{r}}$, where $c$ is a constant. Find the bound volume and surface charge densities and calculate the electric field inside and outside the sphere.

##### Practice 4.2-C (Parallel to Problem 4.11)
A slab of dielectric with thickness $2d$ extends infinitely in the $x$ and $y$ directions. It has a uniform frozen-in polarization $\mathbf{P} = P_0\hat{\mathbf{x}}$ parallel to the surfaces of the slab. Determine the bound charge densities and the electric field everywhere.

##### Practice 4.2-D (Parallel to Problem 4.12)
Using the integral relation $V(\mathbf{r}) = \frac{1}{\rho_0}\mathbf{P}\cdot\mathbf{E}_{\rho_0}(\mathbf{r})$, determine the potential inside and outside an infinitely long cylinder of radius $R$ carrying a uniform transverse polarization $\mathbf{P} = P\hat{\mathbf{x}}$.

---

### 4.2.2 Physical Interpretation of Bound Charges

#### Original Questions with Solutions

##### Example 4.3
**Statement:**  
Re-derive the electric field inside a uniformly polarized sphere by considering it as two uniformly charged spheres of radii $R$ with equal and opposite total charges $\pm q$ whose centers are displaced by a small distance $\mathbf{d}$.

**Solution:**  
Let the positive sphere have uniform charge density $\rho_+$ and center at $+\mathbf{d}/2$, and the negative sphere have density $\rho_- = -\rho_+$ and center at $-\mathbf{d}/2$.  
From Gauss's law, the electric field inside a uniformly charged sphere of density $\rho$ centered at the origin is $\mathbf{E}(\mathbf{r}) = \frac{\rho}{3\varepsilon_0}\mathbf{r}$.  
By superposition, at any point within the region of overlap:
$$\mathbf{E}(\mathbf{r}) = \mathbf{E}_+(\mathbf{r}) + \mathbf{E}_-(\mathbf{r}) = \frac{\rho}{3\varepsilon_0}\left(\mathbf{r} - \frac{\mathbf{d}}{2}\right) + \frac{-\rho}{3\varepsilon_0}\left(\mathbf{r} + \frac{\mathbf{d}}{2}\right) = -\frac{\rho\mathbf{d}}{3\varepsilon_0}$$
The polarization is the total dipole moment divided by volume:
$$\mathbf{P} = \frac{q\mathbf{d}}{\frac{4}{3}\pi R^3} = \rho\mathbf{d}$$
Therefore:
$$\mathbf{E} = -\frac{1}{3\varepsilon_0}\mathbf{P}$$

---

##### Problem 4.13
**Statement:**  
A very long cylinder of radius $a$ carries a uniform polarization $\mathbf{P}$ perpendicular to its axis. Find the electric field inside the cylinder. Show that the field outside can be expressed as:
$$\mathbf{E}(\mathbf{r}) = \frac{a^2}{2\varepsilon_0 s^2}\left[2(\mathbf{P}\cdot\hat{\mathbf{s}})\hat{\mathbf{s}} - \mathbf{P}\right]$$

**Solution:**  
Model the cylinder as two oppositely charged solid cylinders of uniform densities $\pm \rho$ displaced by $\mathbf{d}$, where $\mathbf{P} = \rho \mathbf{d}$.  
The field inside a uniformly charged cylinder of density $\rho$ is $\mathbf{E} = \frac{\rho}{2\varepsilon_0}\mathbf{s}$.  
Superposing two displaced cylinders inside the overlap:
$$\mathbf{E}_{\text{in}} = \frac{\rho}{2\varepsilon_0}\mathbf{s}_+ - \frac{\rho}{2\varepsilon_0}\mathbf{s}_- = \frac{\rho}{2\varepsilon_0}(\mathbf{s}_+ - \mathbf{s}_-) = -\frac{\rho\mathbf{d}}{2\varepsilon_0} = -\frac{1}{2\varepsilon_0}\mathbf{P}$$
Outside the cylinder ($s > a$), each cylinder produces a field identical to a line charge of linear density $\lambda = \rho(\pi a^2)$ at its axis:
$$\mathbf{E}_+ = \frac{\lambda}{2\pi\varepsilon_0}\frac{\mathbf{s} - \mathbf{d}/2}{|\mathbf{s} - \mathbf{d}/2|^2}, \quad \mathbf{E}_- = -\frac{\lambda}{2\pi\varepsilon_0}\frac{\mathbf{s} + \mathbf{d}/2}{|\mathbf{s} + \mathbf{d}/2|^2}$$
Expanding to first order in $d/s$:
$$\frac{\mathbf{s} \mp \mathbf{d}/2}{|\mathbf{s} \mp \mathbf{d}/2|^2} \approx \frac{\mathbf{s} \mp \mathbf{d}/2}{s^2 \mp \mathbf{s}\cdot\mathbf{d}} \approx \frac{1}{s^2}\left(\mathbf{s} \mp \frac{\mathbf{d}}{2}\right)\left(1 \pm \frac{\mathbf{s}\cdot\mathbf{d}}{s^2}\right) \approx \frac{\mathbf{s}}{s^2} \mp \frac{\mathbf{d}}{2s^2} \pm \frac{(\mathbf{s}\cdot\mathbf{d})\mathbf{s}}{s^4}$$
Subtracting the two terms:
$$\mathbf{E}_{\text{out}} = \frac{\lambda}{2\pi\varepsilon_0}\left[ \frac{2(\mathbf{s}\cdot\mathbf{d})\mathbf{s}}{s^4} - \frac{\mathbf{d}}{s^2} \right] = \frac{\pi a^2 \rho}{2\pi\varepsilon_0 s^2}\left[ 2(\hat{\mathbf{s}}\cdot\mathbf{d})\hat{\mathbf{s}} - \mathbf{d} \right] = \frac{a^2}{2\varepsilon_0 s^2}\left[2(\mathbf{P}\cdot\hat{\mathbf{s}})\hat{\mathbf{s}} - \mathbf{P}\right]$$

---

##### Problem 4.14
**Statement:**  
Prove from $\sigma_b = \mathbf{P}\cdot\hat{\mathbf{n}}$ and $\rho_b = -\boldsymbol{\nabla}\cdot\mathbf{P}$ that the total bound charge of any polarized dielectric object vanishes.

**Solution:**  
The total bound charge $Q_{b,\text{tot}}$ is the sum of the volume and surface bound charges:
$$Q_{b,\text{tot}} = \int_V \rho_b d\tau + \oint_S \sigma_b da = \int_V (-\boldsymbol{\nabla}\cdot\mathbf{P}) d\tau + \oint_S (\mathbf{P}\cdot\hat{\mathbf{n}}) da$$
Applying the divergence theorem to the first integral:
$$\int_V (\boldsymbol{\nabla}\cdot\mathbf{P}) d\tau = \oint_S \mathbf{P}\cdot d\mathbf{a} = \oint_S (\mathbf{P}\cdot\hat{\mathbf{n}}) da$$
Substituting this into the expression:
$$Q_{b,\text{tot}} = -\oint_S (\mathbf{P}\cdot\hat{\mathbf{n}}) da + \oint_S (\mathbf{P}\cdot\hat{\mathbf{n}}) da = 0$$

---

#### Practice Questions (Without Answers)

##### Practice 4.2-E (Parallel to Example 4.3)
Model a dielectric slab of thickness $2d$ carrying uniform polarization $\mathbf{P} = P\hat{\mathbf{z}}$ as two oppositely charged infinite slabs of densities $\pm \rho$ shifted by distance $\delta$ along $z$ such that $\rho\delta = P$. Derive the internal electric field using Gauss's law for slabs.

##### Practice 4.2-F (Parallel to Problem 4.13)
A long cylindrical shell with inner radius $a$ and outer radius $b$ carries a frozen-in radial polarization $\mathbf{P} = \frac{k}{s}\hat{\mathbf{s}}$. Find the bound surface and volume charge densities, and compute the electric field everywhere.

##### Practice 4.2-G (Parallel to Problem 4.14)
Show that for two contacting dielectric media with polarizations $\mathbf{P}_1$ and $\mathbf{P}_2$ sharing an interface, the net bound surface charge at the boundary is $\sigma_b = (\mathbf{P}_1 - \mathbf{P}_2)\cdot\hat{\mathbf{n}}_{1\to 2}$, and confirm that the total bound charge in a closed multi-region system remains zero.

---

## 4.3 The Electric Displacement

### 4.3.1 Gauss’s Law in the Presence of Dielectrics

#### Original Questions with Solutions

##### Example 4.4
**Statement:**  
A long straight wire carrying uniform line charge $\lambda$ is surrounded by rubber insulation out to a radius $a$. Find the electric displacement $\mathbf{D}$.

**Solution:**  
Choose a cylindrical Gaussian surface of radius $s$ and length $L$ coaxial with the wire. Due to cylindrical symmetry, $\mathbf{D} = D(s)\hat{\mathbf{s}}$.  
Applying Gauss's law for $\mathbf{D}$:
$$\oint \mathbf{D}\cdot d\mathbf{a} = Q_{f_{\text{enc}}} \implies D(s)(2\pi s L) = \lambda L \implies \mathbf{D} = \frac{\lambda}{2\pi s}\hat{\mathbf{s}}$$
This expression holds for all $s$ (both inside the rubber $s < a$ and outside $s > a$).  
Outside the rubber ($s > a$), $\mathbf{P} = \mathbf{0}$, hence:
$$\mathbf{E} = \frac{1}{\varepsilon_0}\mathbf{D} = \frac{\lambda}{2\pi\varepsilon_0 s}\hat{\mathbf{s}}$$

---

##### Problem 4.15
**Statement:**  
A thick spherical shell (inner radius $a$, outer radius $b$) is made of dielectric material with a "frozen-in" polarization:
$$\mathbf{P}(\mathbf{r}) = \frac{k}{r}\hat{\mathbf{r}}$$
There is no free charge. Find the electric field in all three regions ($r < a$, $a < r < b$, $r > b$) by two methods:  
(a) Locate all bound charges and use Gauss's law for $\mathbf{E}$.  
(b) Use Gauss's law for $\mathbf{D}$, then relate $\mathbf{D}$ to $\mathbf{E}$.

**Solution:**  
**(a) Method 1 (Bound charges):**  
$$\rho_b = -\boldsymbol{\nabla}\cdot\mathbf{P} = -\frac{1}{r^2}\frac{\partial}{\partial r}\left(r^2 \frac{k}{r}\right) = -\frac{k}{r^2}$$
At the inner surface $r = a$ ($\hat{\mathbf{n}} = -\hat{\mathbf{r}}$):
$$\sigma_b(a) = \mathbf{P}\cdot(-\hat{\mathbf{r}}) = -\frac{k}{a}$$
At the outer surface $r = b$ ($\hat{\mathbf{n}} = +\hat{\mathbf{r}}$):
$$\sigma_b(b) = \mathbf{P}\cdot\hat{\mathbf{r}} = \frac{k}{b}$$
- For $r < a$: $Q_{\text{enc}} = 0 \implies \mathbf{E} = \mathbf{0}$.
- For $a < r < b$:
$$Q_{\text{enc}} = \sigma_b(a)(4\pi a^2) + \int_a^r \left(-\frac{k}{r'^2}\right)(4\pi r'^2)dr' = -4\pi k a - 4\pi k (r - a) = -4\pi k r$$
$$\varepsilon_0 E(4\pi r^2) = -4\pi k r \implies \mathbf{E} = -\frac{k}{\varepsilon_0 r}\hat{\mathbf{r}}$$
- For $r > b$:
$$Q_{\text{enc}} = -4\pi k b + \sigma_b(b)(4\pi b^2) = -4\pi k b + 4\pi k b = 0 \implies \mathbf{E} = \mathbf{0}$$

**(b) Method 2 (Electric displacement):**  
Since there is no free charge anywhere ($\rho_f = 0, Q_{f_{\text{enc}}} = 0$):
$$\oint \mathbf{D}\cdot d\mathbf{a} = 0 \implies \mathbf{D} = \mathbf{0} \quad \text{everywhere}$$
Using $\mathbf{D} = \varepsilon_0 \mathbf{E} + \mathbf{P} \implies \mathbf{E} = \frac{1}{\varepsilon_0}(\mathbf{D} - \mathbf{P})$:
- For $r < a$: $\mathbf{P} = \mathbf{0} \implies \mathbf{E} = \mathbf{0}$.
- For $a < r < b$: $\mathbf{P} = \frac{k}{r}\hat{\mathbf{r}} \implies \mathbf{E} = -\frac{k}{\varepsilon_0 r}\hat{\mathbf{r}}$.
- For $r > b$: $\mathbf{P} = \mathbf{0} \implies \mathbf{E} = \mathbf{0}$.

---

##### Problem 4.16
**Statement:**  
Suppose the field inside a large dielectric is $\mathbf{E}_0$, with electric displacement $\mathbf{D}_0 = \varepsilon_0 \mathbf{E}_0 + \mathbf{P}$. A small cavity is hollowed out of the material. Assuming the polarization remains frozen-in, find the electric field $\mathbf{E}$ and displacement $\mathbf{D}$ at the center of the cavity for:  
(a) A spherical cavity.  
(b) A long needle-shaped cavity parallel to $\mathbf{P}$.  
(c) A thin wafer-shaped cavity perpendicular to $\mathbf{P}$.

**Solution:**  
Hollowing out a cavity is equivalent to superimposing an object of the exact same geometry carrying polarization $-\mathbf{P}$ onto the existing field $\mathbf{E}_0$:
$$\mathbf{E} = \mathbf{E}_0 + \mathbf{E}_{\text{object}(-\mathbf{P})}$$
Inside the cavity, the medium is vacuum, so $\mathbf{D} = \varepsilon_0 \mathbf{E}$.

**(a) Spherical Cavity:**  
A sphere of polarization $-\mathbf{P}$ creates an internal field $\mathbf{E}_{\text{sphere}} = -\frac{1}{3\varepsilon_0}(-\mathbf{P}) = \frac{1}{3\varepsilon_0}\mathbf{P}$.
$$\mathbf{E} = \mathbf{E}_0 + \frac{1}{3\varepsilon_0}\mathbf{P}$$
$$\mathbf{D} = \varepsilon_0 \mathbf{E} = \varepsilon_0 \mathbf{E}_0 + \frac{1}{3}\mathbf{P} = \mathbf{D}_0 - \frac{2}{3}\mathbf{P}$$

**(b) Needle-shaped Cavity (parallel to $\mathbf{P}$):**  
For an elongated cylinder with polarization along its axis, the only bound charges are on the distant end caps. Near the center, their contribution vanishes ($\mathbf{E}_{\text{needle}} = \mathbf{0}$).
$$\mathbf{E} = \mathbf{E}_0$$
$$\mathbf{D} = \varepsilon_0 \mathbf{E} = \varepsilon_0 \mathbf{E}_0 = \mathbf{D}_0 - \mathbf{P}$$

**(c) Wafer-shaped Cavity (perpendicular to $\mathbf{P}$):**  
The wafer corresponds to a parallel-plate geometry carrying bound surface charges $\sigma_b = \pm(-\mathbf{P})\cdot\hat{\mathbf{n}}$, producing an internal field $\mathbf{E}_{\text{wafer}} = -\frac{1}{\varepsilon_0}(-\mathbf{P}) = \frac{1}{\varepsilon_0}\mathbf{P}$.
$$\mathbf{E} = \mathbf{E}_0 + \frac{1}{\varepsilon_0}\mathbf{P} = \frac{1}{\varepsilon_0}\mathbf{D}_0$$
$$\mathbf{D} = \varepsilon_0 \mathbf{E} = \mathbf{D}_0$$

---

#### Practice Questions (Without Answers)

##### Practice 4.3-A (Parallel to Example 4.4)
A spherical conductor of radius $R_1$ carries free charge $Q$ and is coated with a concentric dielectric layer extending to radius $R_2$. Find $\mathbf{D}$ as a function of $r$ for all $r$.

##### Practice 4.3-B (Parallel to Problem 4.15)
An infinitely long cylindrical tube of inner radius $a$ and outer radius $b$ carries a frozen-in polarization $\mathbf{P}(s) = \frac{k}{s^2}\hat{\mathbf{s}}$ with no free charge. Find the electric field $\mathbf{E}$ in all regions ($s < a$, $a < s < b$, $s > b$) using both bound charges and the electric displacement $\mathbf{D}$.

##### Practice 4.3-C (Parallel to Problem 4.16)
In a dielectric with initial field $\mathbf{E}_0$ and uniform polarization $\mathbf{P}$, a small cavity shaped like an infinite cylinder of circular cross-section is excavated with its axis oriented perpendicular to $\mathbf{P}$. Calculate the field $\mathbf{E}$ at the axis of the cavity.

---

### 4.3.3 Boundary Conditions

#### Original Questions with Solutions

##### Problem 4.17
**Statement:**  
For the bar electret of Problem 4.11 (a cylinder of radius $a$, length $L \approx 2a$, with uniform frozen-in polarization $\mathbf{P} = P\hat{\mathbf{z}}$), describe the qualitative field sketches for $\mathbf{P}$, $\mathbf{E}$, and $\mathbf{D}$.

**Solution:**  
1. **Field $\mathbf{P}$:**  
   Nonzero only inside the cylinder. Field lines are parallel, uniform, oriented in the $+z$ direction, and terminate discontinuously at the two end faces.
2. **Field $\mathbf{E}$:**  
   Produced entirely by bound charges $\pm P$ on the top and bottom faces.  
   - Outside: Lines loop from the positive top face to the negative bottom face (identical to a dipole or bar magnet field).  
   - Inside: Field lines run from the positive face back to the negative face, pointing in the $-z$ direction (opposing $\mathbf{P}$).
3. **Field $\mathbf{D} = \varepsilon_0 \mathbf{E} + \mathbf{P}$:**  
   Since there is no free charge anywhere ($\rho_f = 0, \sigma_f = 0$), $\boldsymbol{\nabla}\cdot\mathbf{D} = 0$, meaning $\mathbf{D}$ lines must form closed continuous loops with no sources or sinks.  
   - Inside: The strong positive contribution of $\mathbf{P}$ outweighs $\varepsilon_0 \mathbf{E}$, causing $\mathbf{D}$ to point in the $+z$ direction.  
   - Outside: $\mathbf{P} = \mathbf{0} \implies \mathbf{D} = \varepsilon_0 \mathbf{E}$, so $\mathbf{D}$ lines loop through the surrounding space from top to bottom, re-entering at the bottom face to form closed loops.

---

#### Practice Questions (Without Answers)

##### Practice 4.3-D (Parallel to Problem 4.17)
Consider a uniformly polarized sphere carrying frozen-in polarization $\mathbf{P} = P_0\hat{\mathbf{z}}$. Describe and compare the lines of $\mathbf{P}$, $\mathbf{E}$, and $\mathbf{D}$ inside and outside the sphere, highlighting where $\boldsymbol{\nabla}\cdot\mathbf{D} \ne 0$ or $\boldsymbol{\nabla}\times\mathbf{D} \ne 0$.

---

## 4.4 Linear Dielectrics

### 4.4.1 Susceptibility, Permittivity, Dielectric Constant

#### Original Questions with Solutions

##### Example 4.5
**Statement:**  
A metal sphere of radius $a$ carries charge $Q$. It is surrounded out to radius $b$ by a linear dielectric of permittivity $\varepsilon$. Find the potential at the center (relative to infinity).

**Solution:**  
By Gauss's law for $\mathbf{D}$, for any $r > a$:
$$D(4\pi r^2) = Q \implies \mathbf{D} = \frac{Q}{4\pi r^2}\hat{\mathbf{r}}$$
Using $\mathbf{E} = \mathbf{D}/\varepsilon$ in the dielectric and $\mathbf{E} = \mathbf{D}/\varepsilon_0$ in vacuum:
$$\mathbf{E}(r) = \begin{cases}
\mathbf{0}, & r < a \\[1.5ex]
\dfrac{Q}{4\pi \varepsilon r^2}\hat{\mathbf{r}}, & a < r < b \\[1.5ex]
\dfrac{Q}{4\pi \varepsilon_0 r^2}\hat{\mathbf{r}}, & r > b
\end{cases}$$
The potential at the center relative to infinity is:
$$V(0) = -\int_\infty^0 \mathbf{E}\cdot d\mathbf{l} = \int_b^\infty \frac{Q}{4\pi\varepsilon_0 r^2}dr + \int_a^b \frac{Q}{4\pi\varepsilon r^2}dr + \int_0^a 0\,dr$$
$$V(0) = \frac{Q}{4\pi}\left[ \frac{1}{\varepsilon_0 b} + \frac{1}{\varepsilon a} - \frac{1}{\varepsilon b} \right]$$

---

##### Example 4.6
**Statement:**  
A parallel-plate capacitor is filled with an insulating material of dielectric constant $\varepsilon_r$. What effect does this have on its capacitance?

**Solution:**  
Let the free charge on the plates be $\pm Q$, giving free surface charge density $\sigma_f = Q/A$.  
From Gauss's law, the electric displacement between the plates is $D = \sigma_f$.  
The electric field in the presence of the dielectric is:
$$E = \frac{D}{\varepsilon} = \frac{\sigma_f}{\varepsilon_r \varepsilon_0} = \frac{E_{\text{vac}}}{\varepsilon_r}$$
For a plate separation $d$, the potential difference is:
$$V = E d = \frac{V_{\text{vac}}}{\varepsilon_r}$$
The capacitance is therefore:
$$C = \frac{Q}{V} = \varepsilon_r \frac{Q}{V_{\text{vac}}} = \varepsilon_r C_{\text{vac}}$$

---

##### Problem 4.18
**Statement:**  
The space between the plates of a parallel-plate capacitor of area $A$ and plate separation $2a$ is filled with two slabs of dielectric, each of thickness $a$. Slab 1 has dielectric constant $\varepsilon_{r1} = 2$, and Slab 2 has $\varepsilon_{r2} = 1.5$. The free surface charge density is $+\sigma$ on the top plate and $-\sigma$ on the bottom plate.  
(a) Find the electric displacement $\mathbf{D}$ in each slab.  
(b) Find the electric field $\mathbf{E}$ in each slab.  
(c) Find the polarization $\mathbf{P}$ in each slab.  
(d) Find the potential difference between the plates.  
(e) Find the location and amount of all bound charge.  
(f) Recalculate the electric field in each slab using total charge (free and bound) to verify (b).

**Solution:**  
Orient the $z$-axis downward, pointing from the top plate ($z=0$) to the bottom plate ($z=2a$).

(a) Since the free charge on the top plate is $+\sigma$, Gauss's law for $\mathbf{D}$ gives:
$$\mathbf{D}_1 = \sigma\hat{\mathbf{z}}, \quad \mathbf{D}_2 = \sigma\hat{\mathbf{z}}$$
(b) The electric fields are:
$$\mathbf{E}_1 = \frac{\mathbf{D}_1}{\varepsilon_1} = \frac{\sigma}{2\varepsilon_0}\hat{\mathbf{z}}$$
$$\mathbf{E}_2 = \frac{\mathbf{D}_2}{\varepsilon_2} = \frac{\sigma}{1.5\varepsilon_0}\hat{\mathbf{z}} = \frac{2\sigma}{3\varepsilon_0}\hat{\mathbf{z}}$$
(c) Using $\mathbf{P} = \mathbf{D} - \varepsilon_0 \mathbf{E}$:
$$\mathbf{P}_1 = \sigma\hat{\mathbf{z}} - \varepsilon_0\left(\frac{\sigma}{2\varepsilon_0}\hat{\mathbf{z}}\right) = \frac{\sigma}{2}\hat{\mathbf{z}}$$
$$\mathbf{P}_2 = \sigma\hat{\mathbf{z}} - \varepsilon_0\left(\frac{2\sigma}{3\varepsilon_0}\hat{\mathbf{z}}\right) = \frac{\sigma}{3}\hat{\mathbf{z}}$$
(d) The potential difference is:
$$V = \int_0^{2a} E dz = E_1 a + E_2 a = \left(\frac{\sigma}{2\varepsilon_0} + \frac{2\sigma}{3\varepsilon_0}\right)a = \frac{7\sigma a}{6\varepsilon_0}$$
(e) Inside both slabs, $\mathbf{P}$ is uniform, so $\rho_b = 0$.  
At boundaries:
- Top surface of slab 1 ($z = 0$, $\hat{\mathbf{n}} = -\hat{\mathbf{z}}$): $\sigma_{b1,\text{top}} = \mathbf{P}_1\cdot(-\hat{\mathbf{z}}) = -\frac{\sigma}{2}$
- Interface on slab 1 side ($z = a$, $\hat{\mathbf{n}} = +\hat{\mathbf{z}}$): $\sigma_{b1,\text{bot}} = \mathbf{P}_1\cdot\hat{\mathbf{z}} = +\frac{\sigma}{2}$
- Interface on slab 2 side ($z = a$, $\hat{\mathbf{n}} = -\hat{\mathbf{z}}$): $\sigma_{b2,\text{top}} = \mathbf{P}_2\cdot(-\hat{\mathbf{z}}) = -\frac{\sigma}{3}$
- Net bound charge at the dielectric-dielectric interface ($z = a$):
$$\sigma_{b,\text{int}} = \frac{\sigma}{2} - \frac{\sigma}{3} = +\frac{\sigma}{6}$$
- Bottom surface of slab 2 ($z = 2a$, $\hat{\mathbf{n}} = +\hat{\mathbf{z}}$): $\sigma_{b2,\text{bot}} = \mathbf{P}_2\cdot\hat{\mathbf{z}} = +\frac{\sigma}{3}$

(f) Total surface charge densities:
- At $z = 0$: $\sigma_{\text{tot}} = \sigma_{\text{free}} + \sigma_b = \sigma - \frac{\sigma}{2} = +\frac{\sigma}{2}$.  
  This produces field: $E_1 = \frac{\sigma_{\text{tot}}}{\varepsilon_0} = \frac{\sigma}{2\varepsilon_0}\hat{\mathbf{z}}$.
- At $z = a$: adding $\sigma_{b,\text{int}} = +\frac{\sigma}{6}$ yields total charge enclosed above slab 2:
  $$\sigma_{\text{above slab 2}} = \sigma - \frac{\sigma}{2} + \frac{\sigma}{6} = \frac{2\sigma}{3}$$
  This produces field: $E_2 = \frac{2\sigma}{3\varepsilon_0}\hat{\mathbf{z}}$, matching (b).

---

##### Problem 4.19
**Statement:**  
A parallel-plate capacitor of plate area $A$ and spacing $d$ is half-filled with linear dielectric material of dielectric constant $\varepsilon_r$.  
(a) Find the capacitance when filled as in Fig. 4.28a (half-thickness slab across the full plate area).  
(b) Find the capacitance when filled as in Fig. 4.28b (full-thickness slab across half the plate area).  
For a given potential difference $V$, find $\mathbf{E}$, $\mathbf{D}$, $\mathbf{P}$, and all free and bound charges for both configurations.

**Solution:**  
**(a) Slabs in series (thickness $d/2$ each):**  
The arrangement acts as two capacitors in series, each of area $A$:
$$C_1 = \frac{\varepsilon_r \varepsilon_0 A}{d/2} = \frac{2\varepsilon_r \varepsilon_0 A}{d}, \quad C_2 = \frac{\varepsilon_0 A}{d/2} = \frac{2\varepsilon_0 A}{d}$$
$$\frac{1}{C} = \frac{1}{C_1} + \frac{1}{C_2} = \frac{d}{2\varepsilon_0 A}\left(1 + \frac{1}{\varepsilon_r}\right) \implies C = \frac{2\varepsilon_r}{\varepsilon_r + 1} C_{\text{vac}}$$
Fields with potential $V$:
$$V = E_1(d/2) + E_2(d/2) \quad \text{with } D_1 = D_2 = \varepsilon_r \varepsilon_0 E_1 = \varepsilon_0 E_2 \implies E_2 = \varepsilon_r E_1$$
$$V = E_1\frac{d}{2}(1 + \varepsilon_r) \implies E_1 = \frac{2V}{(\varepsilon_r + 1)d}, \quad E_2 = \frac{2\varepsilon_r V}{(\varepsilon_r + 1)d}$$
$$D_1 = D_2 = \frac{2\varepsilon_r \varepsilon_0 V}{(\varepsilon_r + 1)d}$$
$$P_1 = D_1 - \varepsilon_0 E_1 = \frac{2(\varepsilon_r - 1)\varepsilon_0 V}{(\varepsilon_r + 1)d}, \quad P_2 = 0$$
Free surface charges: $\sigma_f = D = \frac{2\varepsilon_r \varepsilon_0 V}{(\varepsilon_r + 1)d}$.  
Bound charges on dielectric: $\sigma_b = \pm P_1 = \pm \frac{2(\varepsilon_r - 1)\varepsilon_0 V}{(\varepsilon_r + 1)d}$.

**(b) Slabs in parallel (area $A/2$ each):**  
The arrangement acts as two capacitors in parallel with common potential $V$:
$$C = C_1 + C_2 = \frac{\varepsilon_r \varepsilon_0 (A/2)}{d} + \frac{\varepsilon_0 (A/2)}{d} = \frac{\varepsilon_r + 1}{2}\left(\frac{\varepsilon_0 A}{d}\right) = \frac{\varepsilon_r + 1}{2} C_{\text{vac}}$$
Both regions have identical field $E = V/d$:
- In dielectric:
  $$E_1 = \frac{V}{d}, \quad D_1 = \frac{\varepsilon_r \varepsilon_0 V}{d}, \quad P_1 = \frac{(\varepsilon_r - 1)\varepsilon_0 V}{d}$$
  Free charge: $\sigma_{f1} = D_1 = \frac{\varepsilon_r \varepsilon_0 V}{d}$; Bound charge: $\sigma_b = \pm P_1 = \pm \frac{(\varepsilon_r - 1)\varepsilon_0 V}{d}$.
- In vacuum:
  $$E_2 = \frac{V}{d}, \quad D_2 = \frac{\varepsilon_0 V}{d}, \quad P_2 = 0, \quad \sigma_{f2} = \frac{\varepsilon_0 V}{d}$$

---

##### Problem 4.20
**Statement:**  
A sphere of linear dielectric material of radius $R$ and dielectric constant $\varepsilon_r$ has embedded in it a uniform free charge density $\rho_f$. Find the potential at the center relative to infinity.

**Solution:**  
By spherical symmetry, apply Gauss's law for $\mathbf{D}$:
- Inside ($r \le R$):
$$D(4\pi r^2) = \rho_f \left(\frac{4}{3}\pi r^3\right) \implies \mathbf{D} = \frac{\rho_f r}{3}\hat{\mathbf{r}}$$
$$\mathbf{E}(r) = \frac{\mathbf{D}}{\varepsilon} = \frac{\rho_f r}{3\varepsilon_r \varepsilon_0}\hat{\mathbf{r}}$$
- Outside ($r \ge R$):
$$D(4\pi r^2) = Q_{\text{tot}} = \rho_f \left(\frac{4}{3}\pi R^3\right) \implies \mathbf{D} = \frac{\rho_f R^3}{3r^2}\hat{\mathbf{r}}$$
$$\mathbf{E}(r) = \frac{\mathbf{D}}{\varepsilon_0} = \frac{\rho_f R^3}{3\varepsilon_0 r^2}\hat{\mathbf{r}}$$
The potential at the center is:
$$V(0) = -\int_\infty^0 \mathbf{E}\cdot d\mathbf{l} = \int_R^\infty \frac{\rho_f R^3}{3\varepsilon_0 r^2}dr + \int_0^R \frac{\rho_f r}{3\varepsilon_r \varepsilon_0}dr = \frac{\rho_f R^2}{3\varepsilon_0} + \frac{\rho_f R^2}{6\varepsilon_r \varepsilon_0} = \frac{\rho_f R^2}{3\varepsilon_0}\left(1 + \frac{1}{2\varepsilon_r}\right)$$

---

##### Problem 4.21
**Statement:**  
A coaxial cable consists of an inner conductor of radius $a$ and an outer conducting shell of inner radius $c$. The space between them is partially filled with a linear dielectric of dielectric constant $\varepsilon_r$ from $r = b$ to $r = c$ (with vacuum between $a$ and $b$). Find the capacitance per unit length.

**Solution:**  
Let the inner conductor carry free charge per unit length $+\lambda$. By cylindrical symmetry:
$$\mathbf{D} = \frac{\lambda}{2\pi s}\hat{\mathbf{s}} \quad (a < s < c)$$
The electric field in each region is:
$$E(s) = \begin{cases}
\dfrac{\lambda}{2\pi\varepsilon_0 s}, & a < s < b \\[1.5ex]
\dfrac{\lambda}{2\pi\varepsilon_r \varepsilon_0 s}, & b < s < c
\end{cases}$$
The potential difference between conductors is:
$$V = \int_a^b \frac{\lambda}{2\pi\varepsilon_0 s}ds + \int_b^c \frac{\lambda}{2\pi\varepsilon_r \varepsilon_0 s}ds = \frac{\lambda}{2\pi\varepsilon_0}\left[ \ln\left(\frac{b}{a}\right) + \frac{1}{\varepsilon_r}\ln\left(\frac{c}{b}\right) \right]$$
The capacitance per unit length $\mathcal{C} = \lambda/V$ is:
$$\mathcal{C} = \frac{2\pi\varepsilon_0}{\ln(b/a) + \frac{1}{\varepsilon_r}\ln(c/b)}$$

---

#### Practice Questions (Without Answers)

##### Practice 4.4-A (Parallel to Example 4.5)
A solid conducting sphere of radius $a$ carrying free charge $Q$ is coated with two concentric linear dielectric shells: the first having permittivity $\varepsilon_1$ from $r=a$ to $r=b$, and the second having permittivity $\varepsilon_2$ from $r=b$ to $r=c$. Compute the potential at the surface of the metal conductor.

##### Practice 4.4-B (Parallel to Example 4.6)
A cylindrical capacitor of inner radius $a$, outer radius $b$, and length $L \gg b$ is completely filled with a linear dielectric of relative permittivity $\varepsilon_r$. Find the factor by which the stored electrostatic energy increases for a fixed applied potential difference $V$.

##### Practice 4.4-C (Parallel to Problem 4.18)
A parallel-plate capacitor with plate separation $3d$ has three slabs of equal thickness $d$ inserted between the plates, with dielectric constants $\varepsilon_{r1} = 1$, $\varepsilon_{r2} = 3$, and $\varepsilon_{r3} = 6$. For a plate surface charge $\pm \sigma$, find $\mathbf{E}$ in each slab and calculate all bound charge densities.

##### Practice 4.4-D (Parallel to Problem 4.19)
A spherical capacitor with inner shell radius $a$ and outer shell radius $b$ is half-filled with dielectric material of constant $\varepsilon_r$ covering the northern hemisphere ($0 \le \theta \le \pi/2$), with vacuum occupying the southern hemisphere. Find the capacitance.

##### Practice 4.4-E (Parallel to Problem 4.20)
An infinitely long cylindrical rod of radius $R$ and dielectric constant $\varepsilon_r$ carries a free charge density proportional to the distance from the axis, $\rho_f(s) = \kappa s$. Determine the electric potential difference between the axis $s=0$ and the outer boundary $s=R$.

##### Practice 4.4-F (Parallel to Problem 4.21)
A spherical capacitor with inner radius $a$ and outer radius $c$ is filled with a dielectric material whose dielectric constant varies continuously as $\varepsilon_r(r) = 1 + \beta r$. Derive an expression for its capacitance.

---

## Chapter 4 Supplementary Topics

### Original Questions with Solutions

##### Problem 4.29
**Statement:**  
For the dipole configuration in Problem 4.5 ($\mathbf{p}_1 = p_1\hat{\mathbf{z}}$ at the origin, $\mathbf{p}_2 = p_2\hat{\mathbf{x}}$ at $(r, 0, 0)$):  
(a) Calculate the force on $\mathbf{p}_2$ due to $\mathbf{p}_1$, and the force on $\mathbf{p}_1$ due to $\mathbf{p}_2$. Are they consistent with Newton's third law?  
(b) Find the total torque on $\mathbf{p}_2$ about the center of $\mathbf{p}_1$, and compare it with the torque on $\mathbf{p}_1$ about that same point.

**Solution:**  
(a) The electric field of $\mathbf{p}_1$ at position $\mathbf{r} = (x, y, z)$ is:
$$\mathbf{E}_1 = \frac{1}{4\pi\varepsilon_0 r^5}\left[ 3(\mathbf{p}_1\cdot\mathbf{r})\mathbf{r} - r^2 \mathbf{p}_1 \right] = \frac{p_1}{4\pi\varepsilon_0 (x^2+y^2+z^2)^{5/2}}\left[ 3zx\hat{\mathbf{x}} + 3zy\hat{\mathbf{y}} + (2z^2 - x^2 - y^2)\hat{\mathbf{z}} \right]$$
The force on $\mathbf{p}_2 = p_2\hat{\mathbf{x}}$ at $(r, 0, 0)$ is:
$$\mathbf{F}_2 = (\mathbf{p}_2\cdot\boldsymbol{\nabla})\mathbf{E}_1 = p_2 \left.\frac{\partial \mathbf{E}_1}{\partial x}\right|_{(r,0,0)}$$
Differentiating the $z$-component with respect to $x$:
$$\frac{\partial E_{1z}}{\partial x} = \frac{p_1}{4\pi\varepsilon_0}\left[ \frac{-2x}{r^5} - 5(2z^2 - x^2 - y^2)\frac{x}{r^7} \right] \implies \left.\frac{\partial E_{1z}}{\partial x}\right|_{(r,0,0)} = \frac{p_1}{4\pi\varepsilon_0}\left[ -\frac{2r}{r^5} + \frac{5r^3}{r^7} \right] = \frac{3p_1}{4\pi\varepsilon_0 r^4}$$
The $x$- and $y$-derivatives of $E_{1x}$ and $E_{1y}$ evaluated at $z=0$ vanish. Thus:
$$\mathbf{F}_2 = \frac{3p_1 p_2}{4\pi\varepsilon_0 r^4}\hat{\mathbf{z}}$$
Now evaluate the force on $\mathbf{p}_1$ due to $\mathbf{p}_2$. Since $\mathbf{E}_2$ at displacement $\mathbf{r}' = -\mathbf{r}$ satisfies $\mathbf{F}_1 = (\mathbf{p}_1\cdot\boldsymbol{\nabla})\mathbf{E}_2 = p_1 \left.\frac{\partial \mathbf{E}_2}{\partial z}\right|_{(0,0,0)}$:
$$\mathbf{F}_1 = -\frac{3p_1 p_2}{4\pi\varepsilon_0 r^4}\hat{\mathbf{z}}$$
Thus $\mathbf{F}_1 = -\mathbf{F}_2$, satisfying Newton's third law.

(b) The torque on $\mathbf{p}_2$ about the center of $\mathbf{p}_1$ is the intrinsic torque plus the torque due to force:
$$\mathbf{N}_{2,\text{tot}} = \mathbf{N}_2 + (\mathbf{r}\times\mathbf{F}_2) = \frac{p_1 p_2}{4\pi\varepsilon_0 r^3}\hat{\mathbf{y}} + (r\hat{\mathbf{x}}) \times \left(\frac{3p_1 p_2}{4\pi\varepsilon_0 r^4}\hat{\mathbf{z}}\right) = \frac{p_1 p_2}{4\pi\varepsilon_0 r^3}\hat{\mathbf{y}} - \frac{3p_1 p_2}{4\pi\varepsilon_0 r^3}\hat{\mathbf{y}} = -\frac{2p_1 p_2}{4\pi\varepsilon_0 r^3}\hat{\mathbf{y}}$$
From Problem 4.5, the torque on $\mathbf{p}_1$ about its own center is $\mathbf{N}_1 = \frac{2p_1 p_2}{4\pi\varepsilon_0 r^3}\hat{\mathbf{y}}$.  
Therefore, about the common origin:
$$\mathbf{N}_{1,\text{tot}} + \mathbf{N}_{2,\text{tot}} = \mathbf{0}$$
The total torque on the isolated system vanishes, in agreement with angular momentum conservation.

---

##### Problem 4.30
**Statement:**  
An electric dipole $\mathbf{p}$, pointing in the $+y$ direction, is placed midway between two large conducting plates at potentials $\pm V$ that form a small angle $\theta$ relative to the $x$-axis (Fig. 4.36). What is the direction of the net force on $\mathbf{p}$?

**Solution:**  
The electric field between conducting planes meeting at an angle points along the azimuthal direction $-\hat{\boldsymbol{\theta}}$ (from $+V$ to $-V$), which corresponds to $-\hat{\mathbf{y}}$ along the $x$-axis. Since the spacing between the plates increases with $x$ as $d(x) \approx 2x\theta$, the magnitude of the electric field decreases with $x$:
$$E(x) \approx \frac{2V}{2x\theta} = \frac{V}{x\theta}$$
The force on dipole $\mathbf{p} = p\hat{\mathbf{y}}$ in field $\mathbf{E} = -E(x)\hat{\mathbf{y}}$ is:
$$\mathbf{F} = \boldsymbol{\nabla}(\mathbf{p}\cdot\mathbf{E}) = \boldsymbol{\nabla}(-p E(x)) = -p \frac{d(-V/(x\theta))}{dx}\hat{\mathbf{x}} = -\frac{p V}{\theta x^2}\hat{\mathbf{x}}$$
The net force points in the $-\hat{\mathbf{x}}$ direction (toward the narrower region where the electric field is stronger).

---

##### Problem 4.31
**Statement:**  
A point charge $Q$ is fixed at the origin. A dipole $\mathbf{p}$ rides on a frictionless circular track of radius $R$ in the $xy$-plane, constrained to point tangentially to the circle ($\mathbf{p} = p\hat{\boldsymbol{\phi}}$). Show using $\mathbf{F} = (\mathbf{p}\cdot\boldsymbol{\nabla})\mathbf{E}$ that the force on the dipole is:
$$\mathbf{F} = \frac{Q p}{4\pi\varepsilon_0 R^3}\hat{\boldsymbol{\phi}}$$
Explain why this does not allow for a perpetual motion machine.

**Solution:**  
The radial electric field produced by $Q$ at $(R, \phi)$ is:
$$\mathbf{E} = \frac{Q}{4\pi\varepsilon_0 R^2}\hat{\mathbf{r}}$$
Evaluating $\mathbf{F} = (\mathbf{p}\cdot\boldsymbol{\nabla})\mathbf{E}$ with $\mathbf{p} = p\hat{\boldsymbol{\phi}}$:
$$(\mathbf{p}\cdot\boldsymbol{\nabla})\mathbf{E} = \frac{p}{R}\frac{\partial}{\partial \phi}\left(\frac{Q}{4\pi\varepsilon_0 R^2}\hat{\mathbf{r}}\right)$$
Since $\frac{\partial\hat{\mathbf{r}}}{\partial \phi} = \hat{\boldsymbol{\phi}}$:
$$\mathbf{F} = \frac{p}{R}\left(\frac{Q}{4\pi\varepsilon_0 R^2}\right)\hat{\boldsymbol{\phi}} = \frac{Q p}{4\pi\varepsilon_0 R^3}\hat{\boldsymbol{\phi}}$$
This is not a perpetual motion machine because to keep $\mathbf{p}$ pointing tangentially as it rotates around the circle, external torque must continuously act on it to overcome the electrostatic torque $\mathbf{N} = \mathbf{p}\times\mathbf{E} = (p\hat{\boldsymbol{\phi}})\times(E\hat{\mathbf{r}}) = -pE\hat{\mathbf{z}}$. The work done by this external mechanism supplies the kinetic energy gained.

---

##### Problem 4.32
**Statement:**  
Consider a model of a polarizable atom consisting of charges $\pm q$ connected by a spring of constant $k$ and zero resting length, with $-q$ fixed at the origin.  
(a) Find the polarizability $\alpha$ in terms of $k$ and $q$.  
(b) Calculate the total energy of this induced dipole in an electric field $\mathbf{E}$.

**Solution:**  
(a) Under an external field $\mathbf{E}$, the charge $+q$ experiences force $q\mathbf{E}$, which is balanced at equilibrium by the spring restoring force:
$$k\mathbf{d} = q\mathbf{E} \implies \mathbf{d} = \frac{q}{k}\mathbf{E}$$
The induced dipole moment is $\mathbf{p} = q\mathbf{d} = \frac{q^2}{k}\mathbf{E}$. Since $\mathbf{p} = \alpha\mathbf{E}$:
$$\alpha = \frac{q^2}{k}$$
(b) The energy consists of the electrostatic interaction energy of the charges plus the mechanical elastic energy stored in the spring:
$$U_{\text{spring}} = \frac{1}{2}k d^2 = \frac{1}{2}k\left(\frac{p}{q}\right)^2 = \frac{1}{2}\frac{k}{q^2}p^2 = \frac{1}{2}\frac{p^2}{\alpha} = \frac{1}{2}\mathbf{p}\cdot\mathbf{E}$$
The electrostatic potential energy in the field is:
$$U_{\text{field}} = -\mathbf{p}\cdot\mathbf{E}$$
The total energy is:
$$U_{\text{total}} = U_{\text{field}} + U_{\text{spring}} = -\mathbf{p}\cdot\mathbf{E} + \frac{1}{2}\mathbf{p}\cdot\mathbf{E} = -\frac{1}{2}\mathbf{p}\cdot\mathbf{E}$$

---

##### Problem 4.33
**Statement:**  
(a) Show that the electrostatic force on a neutral, polarizable atom ($\mathbf{p} = \alpha\mathbf{E}$) is $\mathbf{F} = \frac{1}{2}\alpha\boldsymbol{\nabla}(E^2)$.  
(b) Use Earnshaw's theorem to show that a neutral atom cannot be trapped in a stable electrostatic equilibrium in a charge-free region.

**Solution:**  
(a) For an induced dipole, $\mathbf{p} = \alpha\mathbf{E}$. Using $\mathbf{F} = (\mathbf{p}\cdot\boldsymbol{\nabla})\mathbf{E} = \alpha(\mathbf{E}\cdot\boldsymbol{\nabla})\mathbf{E}$:  
From the vector identity $\boldsymbol{\nabla}(\mathbf{A}\cdot\mathbf{B}) = \mathbf{A}\times(\boldsymbol{\nabla}\times\mathbf{B}) + \mathbf{B}\times(\boldsymbol{\nabla}\times\mathbf{A}) + (\mathbf{A}\cdot\boldsymbol{\nabla})\mathbf{B} + (\mathbf{B}\cdot\boldsymbol{\nabla})\mathbf{A}$:  
For $\mathbf{A} = \mathbf{B} = \mathbf{E}$, and noting $\boldsymbol{\nabla}\times\mathbf{E} = \mathbf{0}$:
$$\boldsymbol{\nabla}(E^2) = 2(\mathbf{E}\cdot\boldsymbol{\nabla})\mathbf{E} \implies (\mathbf{E}\cdot\boldsymbol{\nabla})\mathbf{E} = \frac{1}{2}\boldsymbol{\nabla}(E^2)$$
$$\mathbf{F} = \frac{1}{2}\alpha\boldsymbol{\nabla}(E^2)$$
(b) For a stable equilibrium, the restoring force must push the atom inward from all directions, meaning $\mathbf{F}$ must have a negative divergence, or equivalently, the potential energy $U = -\frac{1}{2}\alpha E^2$ must have a local minimum, requiring $E^2$ to have a local maximum.  
However, in a charge-free region ($\boldsymbol{\nabla}\cdot\mathbf{E} = 0, \boldsymbol{\nabla}\times\mathbf{E} = \mathbf{0}$):
$$\nabla^2(E^2) = \nabla^2(E_x^2 + E_y^2 + E_z^2) = 2\sum_{i} \left[(\boldsymbol{\nabla} E_i)^2 + E_i \nabla^2 E_i\right]$$
Since each Cartesian component of the electrostatic field satisfies Laplace's equation ($\nabla^2 E_i = 0$):
$$\nabla^2(E^2) = 2 \sum_{i, j} \left(\frac{\partial E_i}{\partial x_j}\right)^2 \ge 0$$
Since the Laplacian of $E^2$ is non-negative everywhere, $E^2$ cannot have a local maximum in a charge-free region. Therefore, stable electrostatic trapping is impossible.

---

##### Problem 4.34
**Statement:**  
A dielectric cube of side $a$, centered at the origin, carries a frozen-in polarization $\mathbf{P} = k\mathbf{r}$, where $k$ is a constant. Find all bound charges and confirm that their sum is zero.

**Solution:**  
The volume bound charge density is:
$$\rho_b = -\boldsymbol{\nabla}\cdot\mathbf{P} = -k(\boldsymbol{\nabla}\cdot\mathbf{r}) = -3k$$
The total volume bound charge is:
$$Q_{b,\text{vol}} = \int \rho_b d\tau = -3k a^3$$
For the surface at $x = +a/2$, the outward normal is $\hat{\mathbf{n}} = \hat{\mathbf{x}}$:
$$\sigma_b = \mathbf{P}\cdot\hat{\mathbf{x}} = k\left(\frac{a}{2}\right)$$
The area of each of the 6 faces is $a^2$. By cubic symmetry, every face has $\mathbf{P}\cdot\hat{\mathbf{n}} = ka/2$.  
The total surface bound charge across all 6 faces is:
$$Q_{b,\text{surf}} = 6 \left(k\frac{a}{2}\right) a^2 = 3k a^3$$
Summing the charges:
$$Q_{b,\text{tot}} = Q_{b,\text{vol}} + Q_{b,\text{surf}} = -3k a^3 + 3k a^3 = 0$$

---

##### Problem 4.35
**Statement:**  
The space between the plates of a parallel-plate capacitor of plate separation $d$ and area $A$ is filled with a dielectric whose dielectric constant varies linearly from $\varepsilon_r(0) = 1$ at $x = 0$ to $\varepsilon_r(d) = 2$ at $x = d$. A voltage $V$ is connected across the plates. Find all bound charges and show that the net bound charge is zero.

**Solution:**  
The dielectric constant is $\varepsilon_r(x) = 1 + x/d$.  
Gauss's law for $\mathbf{D}$ gives $D = \text{constant}$ across the gap. The electric field is:
$$E(x) = \frac{D}{\varepsilon_0 \varepsilon_r(x)} = \frac{D}{\varepsilon_0 (1 + x/d)}$$
The voltage is:
$$V = \int_0^d E(x) dx = \frac{D}{\varepsilon_0} \int_0^d \frac{dx}{1 + x/d} = \frac{D d}{\varepsilon_0}\ln(2) \implies D = \frac{\varepsilon_0 V}{d\ln 2}$$
The polarization is:
$$P(x) = D - \varepsilon_0 E(x) = D\left(1 - \frac{1}{1 + x/d}\right) = D\left(\frac{x/d}{1 + x/d}\right) = \frac{\varepsilon_0 V}{d\ln 2}\left(\frac{x}{x + d}\right)$$
Bound volume charge:
$$\rho_b(x) = -\frac{dP}{dx} = -\frac{\varepsilon_0 V}{d\ln 2} \frac{d}{dx}\left(1 - \frac{d}{x+d}\right) = -\frac{\varepsilon_0 V}{\ln 2}\frac{1}{(x+d)^2}$$
Total volume bound charge:
$$Q_{b,\text{vol}} = A \int_0^d \rho_b(x) dx = -\frac{\varepsilon_0 V A}{\ln 2}\left[ -\frac{1}{x+d} \right]_0^d = -\frac{\varepsilon_0 V A}{\ln 2}\left(\frac{1}{d} - \frac{1}{2d}\right) = -\frac{\varepsilon_0 V A}{2d\ln 2}$$
Bound surface charges:
- At $x = 0$ ($\hat{\mathbf{n}} = -\hat{\mathbf{x}}$): $P(0) = 0 \implies \sigma_b(0) = 0$
- At $x = d$ ($\hat{\mathbf{n}} = +\hat{\mathbf{x}}$):
$$\sigma_b(d) = P(d) = \frac{\varepsilon_0 V}{d\ln 2}\left(\frac{d}{2d}\right) = \frac{\varepsilon_0 V}{2d\ln 2}$$
Total surface bound charge:
$$Q_{b,\text{surf}} = \sigma_b(d) A = \frac{\varepsilon_0 V A}{2d\ln 2}$$
Summing both contributions:
$$Q_{b,\text{tot}} = Q_{b,\text{vol}} + Q_{b,\text{surf}} = 0$$

---

##### Problem 4.36
**Statement:**  
A point charge $q$ is embedded at the center of a sphere of linear dielectric material of radius $R$ and susceptibility $\chi_e$. Find the electric field $\mathbf{E}$, polarization $\mathbf{P}$, and bound charge densities $\rho_b$ and $\sigma_b$. Find the total bound charge on the surface and the location of the compensating bound charge.

**Solution:**  
By spherical symmetry, Gauss's law for $\mathbf{D}$ gives:
$$\mathbf{D} = \frac{q}{4\pi r^2}\hat{\mathbf{r}} \quad \text{for all } r$$
- Inside the sphere ($r < R$):
$$\mathbf{E}(r) = \frac{\mathbf{D}}{\varepsilon} = \frac{q}{4\pi\varepsilon_0(1+\chi_e)r^2}\hat{\mathbf{r}}$$
$$\mathbf{P}(r) = \varepsilon_0\chi_e\mathbf{E} = \frac{\chi_e}{1+\chi_e}\frac{q}{4\pi r^2}\hat{\mathbf{r}}$$
- Outside the sphere ($r > R$):
$$\mathbf{E}(r) = \frac{q}{4\pi\varepsilon_0 r^2}\hat{\mathbf{r}}, \quad \mathbf{P} = \mathbf{0}$$
Bound charge densities:
- For $0 < r < R$: $\rho_b = -\boldsymbol{\nabla}\cdot\mathbf{P} = 0$ (since $\boldsymbol{\nabla}\cdot(\hat{\mathbf{r}}/r^2) = 0$ for $r > 0$).
- At the outer surface $r = R$ ($\hat{\mathbf{n}} = \hat{\mathbf{r}}$):
$$\sigma_b = \mathbf{P}(R)\cdot\hat{\mathbf{r}} = \frac{\chi_e}{1+\chi_e}\frac{q}{4\pi R^2}$$
Total bound surface charge:
$$Q_{b,\text{surf}} = \sigma_b(4\pi R^2) = \frac{\chi_e}{1+\chi_e}q$$
- At the origin ($r \to 0$): $\boldsymbol{\nabla}\cdot(\hat{\mathbf{r}}/r^2) = 4\pi\delta^3(\mathbf{r})$, so:
$$\rho_b = -\frac{\chi_e q}{4\pi(1+\chi_e)}(4\pi\delta^3(\mathbf{r})) = -\frac{\chi_e}{1+\chi_e}q\,\delta^3(\mathbf{r})$$
The compensating bound charge is a point charge of magnitude $q_b = -\frac{\chi_e}{1+\chi_e}q$ located at the origin.

---

##### Problem 4.37
**Statement:**  
At the interface between two linear dielectrics with permittivities $\varepsilon_1$ and $\varepsilon_2$ (with no free surface charge), the electric field vectors make angles $\theta_1$ and $\theta_2$ with the normal to the boundary. Show that:
$$\frac{\tan\theta_2}{\tan\theta_1} = \frac{\varepsilon_2}{\varepsilon_1}$$
Does a convex lens made of dielectric material tend to focus or defocus electric field lines entering from vacuum?

**Solution:**  
Let the boundary lie in the $xy$-plane, with the normal along $\hat{\mathbf{z}}$.  
Boundary conditions with $\sigma_f = 0$:
$$D_1^\perp = D_2^\perp \implies \varepsilon_1 E_1 \cos\theta_1 = \varepsilon_2 E_2 \cos\theta_2$$
$$E_1^\parallel = E_2^\parallel \implies E_1 \sin\theta_1 = E_2 \sin\theta_2$$
Dividing the parallel equation by the perpendicular equation:
$$\frac{E_1 \sin\theta_1}{\varepsilon_1 E_1 \cos\theta_1} = \frac{E_2 \sin\theta_2}{\varepsilon_2 E_2 \cos\theta_2} \implies \frac{\tan\theta_1}{\varepsilon_1} = \frac{\tan\theta_2}{\varepsilon_2} \implies \frac{\tan\theta_2}{\tan\theta_1} = \frac{\varepsilon_2}{\varepsilon_1}$$
For a convex dielectric lens in vacuum ($\varepsilon_2 > \varepsilon_1 = \varepsilon_0$):
$$\tan\theta_2 = \frac{\varepsilon_2}{\varepsilon_0}\tan\theta_1 > \tan\theta_1 \implies \theta_2 > \theta_1$$
Field lines entering the dielectric bend *away* from the normal, which deflects parallel incoming field lines away from the axis. Therefore, a convex dielectric lens tends to **defocus** electric field lines.

---

##### Problem 4.38
**Statement:**  
A point dipole $\mathbf{p} = p\hat{\mathbf{z}}$ is placed at the center of a sphere of linear dielectric material of radius $R$ and dielectric constant $\varepsilon_r$. Find the electric potential inside and outside the sphere.

**Solution:**  
The potential satisfies Laplace's equation everywhere except at the origin, where it must contain the central point dipole term:
- Inside ($r \le R$):
$$V_{\text{in}}(r,\theta) = \frac{1}{4\pi\varepsilon_r \varepsilon_0}\frac{p\cos\theta}{r^2} + \sum_{l=0}^\infty A_l r^l P_l(\cos\theta)$$
- Outside ($r \ge R$):
$$V_{\text{out}}(r,\theta) = \sum_{l=0}^\infty \frac{B_l}{r^{l+1}} P_l(\cos\theta)$$
By symmetry, only the $l=1$ Legendre polynomial ($P_1(\cos\theta) = \cos\theta$) enters:
$$V_{\text{in}} = \left(\frac{p}{4\pi\varepsilon_r \varepsilon_0 r^2} + A r\right)\cos\theta$$
$$V_{\text{out}} = \frac{B}{r^2}\cos\theta$$
Applying boundary conditions at $r = R$:
1. Continuity of $V$:
$$\frac{p}{4\pi\varepsilon_r \varepsilon_0 R^2} + A R = \frac{B}{R^2}$$
2. Continuity of $D_r = \varepsilon \frac{\partial V}{\partial r}$:
$$\varepsilon_r \left( -\frac{2p}{4\pi\varepsilon_r \varepsilon_0 R^3} + A \right) = -\frac{2B}{R^3} \implies -\frac{2p}{4\pi\varepsilon_0 R^3} + \varepsilon_r A = -\frac{2B}{R^3}$$
Multiplying the first equation by 2 and adding to the second:
$$-\frac{2p}{4\pi\varepsilon_0 R^3} + \frac{2p}{4\pi\varepsilon_r \varepsilon_0 R^3} + (2 + \varepsilon_r)A = 0 \implies A = \frac{2p}{4\pi\varepsilon_r \varepsilon_0 R^3}\frac{\varepsilon_r - 1}{\varepsilon_r + 2}$$
Solving for $B$:
$$B = \frac{p}{4\pi\varepsilon_r \varepsilon_0} + A R^3 = \frac{p}{4\pi\varepsilon_0}\frac{3}{\varepsilon_r + 2}$$
Thus:
$$V_{\text{in}}(r,\theta) = \frac{p\cos\theta}{4\pi\varepsilon_r \varepsilon_0 r^2}\left[1 + 2\left(\frac{r}{R}\right)^3\frac{\varepsilon_r - 1}{\varepsilon_r + 2}\right]$$
$$V_{\text{out}}(r,\theta) = \frac{p\cos\theta}{4\pi\varepsilon_0 r^2}\left(\frac{3}{\varepsilon_r + 2}\right)$$

---

##### Problem 4.39
**Statement:**  
Prove the uniqueness theorem for linear dielectrics: In a volume $\mathcal{V}$ containing a specified free charge distribution $\rho_f$ and linear dielectrics of specified susceptibility, if the potential $V$ is specified on the boundary $\mathcal{S}$ of $\mathcal{V}$, then $V$ is uniquely determined throughout $\mathcal{V}$.

**Solution:**  
Suppose two potentials $V_1$ and $V_2$ satisfy the conditions. Define $V_3 \equiv V_1 - V_2$ and $\mathbf{D}_3 \equiv \mathbf{D}_1 - \mathbf{D}_2 = \varepsilon \mathbf{E}_1 - \varepsilon \mathbf{E}_2 = -\varepsilon\boldsymbol{\nabla}V_3$.  
Since $\boldsymbol{\nabla}\cdot\mathbf{D}_1 = \rho_f$ and $\boldsymbol{\nabla}\cdot\mathbf{D}_2 = \rho_f$, we have $\boldsymbol{\nabla}\cdot\mathbf{D}_3 = 0$.  
On the boundary $\mathcal{S}$, $V_1 = V_2 \implies V_3 = 0$.  
Consider the divergence:
$$\boldsymbol{\nabla}\cdot(V_3 \mathbf{D}_3) = V_3(\boldsymbol{\nabla}\cdot\mathbf{D}_3) + \mathbf{D}_3\cdot\boldsymbol{\nabla}V_3 = 0 + (-\varepsilon\boldsymbol{\nabla}V_3)\cdot\boldsymbol{\nabla}V_3 = -\varepsilon |\boldsymbol{\nabla}V_3|^2$$
Integrating over the volume $\mathcal{V}$ and using the divergence theorem:
$$\int_{\mathcal{V}} \boldsymbol{\nabla}\cdot(V_3 \mathbf{D}_3) d\tau = \oint_{\mathcal{S}} V_3 \mathbf{D}_3\cdot d\mathbf{a} = 0$$
$$\int_{\mathcal{V}} \varepsilon |\boldsymbol{\nabla}V_3|^2 d\tau = 0$$
Since $\varepsilon > 0$ everywhere, the integrand is strictly non-negative, which requires:
$$\boldsymbol{\nabla}V_3 = \mathbf{0} \implies V_3 = \text{constant}$$
Because $V_3 = 0$ on the boundary, $V_3 = 0$ everywhere in $\mathcal{V}$, establishing $V_1 = V_2$.

---

##### Problem 4.40
**Statement:**  
A conducting sphere of radius $R$ held at potential $V_0$ is half-embedded in a linear dielectric of susceptibility $\chi_e$ occupying the region $z < 0$.  
(a) Verify that the potential everywhere remains identical to that in the absence of the dielectric: $V(r) = V_0 R / r$ for $r \ge R$.  
(b) Compute the electric field, polarization, bound charge, and free charge distributions on the sphere.  
(c) Can the same potential solve the configurations in Fig. 4.39?

**Solution:**  
(a) Proposed potential: $V(r) = V_0 R / r$ for $r \ge R$.  
This yields radial field $\mathbf{E}(r) = \frac{V_0 R}{r^2}\hat{\mathbf{r}}$.  
In vacuum ($z > 0$): $\mathbf{D} = \varepsilon_0 \mathbf{E} = \frac{\varepsilon_0 V_0 R}{r^2}\hat{\mathbf{r}} \implies \boldsymbol{\nabla}\cdot\mathbf{D} = 0$.  
In dielectric ($z < 0$): $\mathbf{D} = \varepsilon_0(1+\chi_e)\mathbf{E} = \frac{\varepsilon_0(1+\chi_e)V_0 R}{r^2}\hat{\mathbf{r}} \implies \boldsymbol{\nabla}\cdot\mathbf{D} = 0$.  
At the interface $z = 0$ ($r > R$): $\hat{\mathbf{n}} = \hat{\mathbf{z}}$, so $\mathbf{E}$ is radial and tangential to the interface ($E^\perp = 0$), meaning $D^\perp = 0$ on both sides. Thus $D_1^\perp - D_2^\perp = 0 = \sigma_f$, which is satisfied with no free charge.  
Since $V$ satisfies Laplace's equation, boundary conditions, and interface conditions, by the uniqueness theorem (Problem 4.39) this is the unique solution.

(b) Bound charge at $r = R$ for $z < 0$:
$$\mathbf{P} = \varepsilon_0 \chi_e \frac{V_0 R}{r^2}\hat{\mathbf{r}} \implies \sigma_b = \mathbf{P}\cdot(-\hat{\mathbf{r}}) = -\frac{\varepsilon_0 \chi_e V_0}{R}$$
Free charge on the conducting sphere ($D^\perp = \sigma_f$):
- Upper hemisphere ($z > 0$): $\sigma_f = \frac{\varepsilon_0 V_0}{R}$
- Lower hemisphere ($z < 0$): $\sigma_f = \frac{\varepsilon_0(1+\chi_e)V_0}{R}$

(c) No; in Fig. 4.39, the dielectric boundaries are not everywhere parallel to the radial field lines. If the boundary is not along a radial plane, $E^\perp \ne 0$ across the dielectric-vacuum interface, which would violate $D_1^\perp = D_2^\perp$ unless free charge were present.

---

##### Problem 4.41
**Statement:**  
Use $\mathbf{F} = \int (\mathbf{P}\cdot\boldsymbol{\nabla})\mathbf{E}_{\text{ext}} d\tau$ to calculate the force on a tiny sphere of radius $R$ and susceptibility $\chi_e$ situated a distance $s$ from a long wire carrying uniform line charge $\lambda$.

**Solution:**  
The wire produces an external field at distance $s$:
$$\mathbf{E}_{\text{ext}} = \frac{\lambda}{2\pi\varepsilon_0 s}\hat{\mathbf{s}}$$
A small sphere of dielectric constant $\varepsilon_r = 1 + \chi_e$ placed in a nearly uniform field $\mathbf{E}_{\text{ext}}$ acquires a dipole moment:
$$\mathbf{p} = 4\pi\varepsilon_0 R^3 \left(\frac{\varepsilon_r - 1}{\varepsilon_r + 2}\right)\mathbf{E}_{\text{ext}} = 4\pi\varepsilon_0 R^3 \left(\frac{\chi_e}{\chi_e + 3}\right)\frac{\lambda}{2\pi\varepsilon_0 s}\hat{\mathbf{s}}$$
For a tiny sphere, $(\mathbf{P}\cdot\boldsymbol{\nabla})\mathbf{E}_{\text{ext}}$ integrated over volume gives $(\mathbf{p}\cdot\boldsymbol{\nabla})\mathbf{E}_{\text{ext}}$:
$$\mathbf{F} = (\mathbf{p}\cdot\boldsymbol{\nabla})\mathbf{E}_{\text{ext}} = p \frac{\partial}{\partial s}\left(\frac{\lambda}{2\pi\varepsilon_0 s}\hat{\mathbf{s}}\right) = \left[ 4\pi\varepsilon_0 R^3 \left(\frac{\chi_e}{\chi_e + 3}\right)\frac{\lambda}{2\pi\varepsilon_0 s} \right] \left( -\frac{\lambda}{2\pi\varepsilon_0 s^2}\hat{\mathbf{s}} \right)$$
$$\mathbf{F} = -\frac{\lambda^2 R^3}{\pi\varepsilon_0 s^3}\left(\frac{\chi_e}{\chi_e + 3}\right)\hat{\mathbf{s}}$$

---

##### Problem 4.42
**Statement:**  
Derive the Clausius-Mossotti relation:  
(a) Show that the macroscopic field $\mathbf{E}$ is related to the local field acting on an atom $\mathbf{E}_{\text{else}}$ by $\mathbf{E} = \left(1 - \frac{N\alpha}{3\varepsilon_0}\right)\mathbf{E}_{\text{else}}$.  
(b) Conclude that $\chi_e = \frac{N\alpha/\varepsilon_0}{1 - N\alpha/(3\varepsilon_0)}$ and $\alpha = \frac{3\varepsilon_0}{N}\left(\frac{\varepsilon_r - 1}{\varepsilon_r + 2}\right)$.

**Solution:**  
(a) The macroscopic field $\mathbf{E}$ is the spatial average over a small sphere containing the atom. The field inside this sphere consists of $\mathbf{E}_{\text{else}}$ (from all other charges) plus the average field of the atom itself:
$$\mathbf{E} = \mathbf{E}_{\text{else}} + \mathbf{E}_{\text{self}}$$
Treating the space allotted to the atom as a sphere with polarization $\mathbf{P} = N\mathbf{p} = N\alpha\mathbf{E}_{\text{else}}$, the self-field inside is that of a uniformly polarized sphere:
$$\mathbf{E}_{\text{self}} = -\frac{1}{3\varepsilon_0}\mathbf{P} = -\frac{N\alpha}{3\varepsilon_0}\mathbf{E}_{\text{else}}$$
$$\mathbf{E} = \mathbf{E}_{\text{else}} - \frac{N\alpha}{3\varepsilon_0}\mathbf{E}_{\text{else}} = \left(1 - \frac{N\alpha}{3\varepsilon_0}\right)\mathbf{E}_{\text{else}}$$
(b) From $\mathbf{P} = \varepsilon_0 \chi_e \mathbf{E}$ and $\mathbf{P} = N\alpha\mathbf{E}_{\text{else}}$:
$$\varepsilon_0 \chi_e \mathbf{E} = N\alpha \frac{\mathbf{E}}{1 - N\alpha/(3\varepsilon_0)} \implies \chi_e = \frac{N\alpha/\varepsilon_0}{1 - N\alpha/(3\varepsilon_0)}$$
Using $\varepsilon_r = 1 + \chi_e$:
$$\varepsilon_r - 1 = \frac{N\alpha/\varepsilon_0}{1 - N\alpha/(3\varepsilon_0)}, \quad \varepsilon_r + 2 = \frac{3}{1 - N\alpha/(3\varepsilon_0)}$$
Dividing the two equations:
$$\frac{\varepsilon_r - 1}{\varepsilon_r + 2} = \frac{N\alpha}{3\varepsilon_0} \implies \alpha = \frac{3\varepsilon_0}{N}\left(\frac{\varepsilon_r - 1}{\varepsilon_r + 2}\right)$$

---

##### Problem 4.43
**Statement:**  
Check the consistency of the Clausius-Mossotti relation for dilute gases using the values for Argon from Table 4.1 ($\alpha/4\pi\varepsilon_0 = 1.64 \times 10^{-30}\text{ m}^3$) and Table 4.2 ($\varepsilon_r = 1.000517$ at STP).

**Solution:**  
For an ideal gas at STP ($T = 293.15\text{ K}$, $P = 1\text{ atm}$):
$$N = \frac{P}{k_B T} = \frac{1.013 \times 10^5\text{ Pa}}{(1.381 \times 10^{-23}\text{ J/K})(293.15\text{ K})} \approx 2.50 \times 10^{25}\text{ molecules/m}^3$$
From the Clausius-Mossotti equation in the dilute limit ($\varepsilon_r \approx 1$):
$$\chi_e = \varepsilon_r - 1 \approx \frac{N\alpha}{\varepsilon_0} = 4\pi N \left(\frac{\alpha}{4\pi\varepsilon_0}\right)$$
$$\chi_e = 4\pi (2.50 \times 10^{25}\text{ m}^{-3})(1.64 \times 10^{-30}\text{ m}^3) \approx 5.15 \times 10^{-4}$$
This gives $\varepsilon_r = 1 + \chi_e \approx 1.000515$, matching the experimental value of $1.000517$.

---

##### Problem 4.44
**Statement:**  
Derive the Langevin formula for the polarization of a polar substance with permanent molecular dipole moment $p$:  
(a) Show using the Boltzmann distribution that:
$$P = N p \left[ \coth\left(\frac{pE}{kT}\right) - \frac{kT}{pE} \right]$$
(b) Show that for $kT \gg pE$ the medium is linear, and calculate its susceptibility $\chi_e$.

**Solution:**  
(a) The energy of a dipole is $u = -\mathbf{p}\cdot\mathbf{E} = -p E\cos\theta$.  
The average dipole moment component along $\mathbf{E}$ is:
$$\langle p_z \rangle = \frac{\int p\cos\theta\,e^{pE\cos\theta/kT}d\Omega}{\int e^{pE\cos\theta/kT}d\Omega}$$
Let $\xi \equiv \frac{pE}{kT}$ and $u \equiv \cos\theta$:
$$\langle p_z \rangle = p \frac{\int_{-1}^1 u e^{\xi u}du}{\int_{-1}^1 e^{\xi u}du} = p \frac{d}{d\xi}\left[\ln \int_{-1}^1 e^{\xi u}du\right] = p \frac{d}{d\xi}\left[\ln\left(\frac{e^\xi - e^{-\xi}}{\xi}\right)\right] = p \left[\coth\xi - \frac{1}{\xi}\right]$$
Multiplying by the number density $N$:
$$P = N\langle p_z \rangle = N p \left[ \coth\left(\frac{pE}{kT}\right) - \frac{kT}{pE} \right]$$
(b) For $\xi \ll 1$, expand $\coth\xi = \frac{1}{\xi} + \frac{\xi}{3} - \frac{\xi^3}{45} + \dots$:
$$\coth\xi - \frac{1}{\xi} \approx \frac{\xi}{3} = \frac{pE}{3kT}$$
The polarization is linear in $E$:
$$P \approx N p \left(\frac{pE}{3kT}\right) = \frac{N p^2}{3kT}E$$
Since $P = \varepsilon_0 \chi_e E$, the susceptibility is:
$$\chi_e = \frac{N p^2}{3\varepsilon_0 kT}$$

---

#### Practice Questions (Without Answers)

##### Practice 4.A (Parallel to Problem 4.29)
Two identical dipoles $\mathbf{p}_1 = p\hat{\mathbf{z}}$ and $\mathbf{p}_2 = p\hat{\mathbf{z}}$ are separated by a displacement $\mathbf{r} = r\hat{\mathbf{z}}$ along their common axis. Calculate the force exerted by $\mathbf{p}_1$ on $\mathbf{p}_2$ using $\mathbf{F} = \boldsymbol{\nabla}(\mathbf{p}_2\cdot\mathbf{E}_1)$ and verify Newton's third law.

##### Practice 4.B (Parallel to Problem 4.30)
An electric dipole $\mathbf{p} = p\hat{\mathbf{r}}$ is oriented radially between two concentric cylindrical conductors of radii $a$ and $b$ ($a < b$) held at a potential difference $V$. Determine the magnitude and direction of the net force on $\mathbf{p}$.

##### Practice 4.C (Parallel to Problem 4.31)
A point charge $q$ is held at a distance $d$ from an infinite grounded conducting plane. A polarizable atom of polarizability $\alpha$ is placed halfway between the point charge and the plane. Find the electrostatic force on the atom.

##### Practice 4.D (Parallel to Problem 4.32)
Consider a polarizable atom modeled by a three-dimensional isotropic harmonic oscillator with potential $V(r) = \frac{1}{2}k r^2$. Calculate the shift in the minimum of the potential energy when a uniform external electric field $\mathbf{E}_0$ is applied, and determine the net energy change.

##### Practice 4.E (Parallel to Problem 4.33)
Show that if an external electric field varies in space as $\mathbf{E} = C(x\hat{\mathbf{x}} - y\hat{\mathbf{y}})$, an induced dipole $\mathbf{p} = \alpha\mathbf{E}$ experiences a force driving it away from the origin along any radial displacement.

##### Practice 4.F (Parallel to Problem 4.34)
A dielectric cylinder of radius $R$ and length $L$ centered at the origin carries a frozen-in polarization $\mathbf{P} = k s \hat{\mathbf{s}}$ in cylindrical coordinates. Calculate all bound charge densities and verify that the total bound charge vanishes.

##### Practice 4.G (Parallel to Problem 4.35)
A spherical capacitor with inner radius $a$ and outer radius $b$ is filled with an inhomogeneous dielectric whose permittivity varies as $\varepsilon(r) = \varepsilon_0 (r/a)^2$. A potential $V_0$ is maintained between the shells. Compute the volume bound charge density $\rho_b(r)$.

##### Practice 4.H (Parallel to Problem 4.36)
A uniform line charge $\lambda$ lies along the axis of an infinitely long linear dielectric cylinder of radius $R$ and susceptibility $\chi_e$. Calculate $\mathbf{E}$, $\mathbf{D}$, $\mathbf{P}$, and all bound charge distributions.

##### Practice 4.I (Parallel to Problem 4.37)
At a flat interface between two dielectric media ($\varepsilon_1$ and $\varepsilon_2$), an electric field makes an angle of $45^\circ$ with the surface in medium 1. Find the ratio $\varepsilon_2/\varepsilon_1$ required for the refracted field in medium 2 to make an angle of $60^\circ$ with the surface.

##### Practice 4.J (Parallel to Problem 4.38)
A point charge $q$ is embedded at the center of a dielectric spherical shell with inner radius $a$, outer radius $b$, and dielectric constant $\varepsilon_r$. Find the electrostatic potential as a function of $r$ in all regions.

##### Practice 4.K (Parallel to Problem 4.41)
Determine the force on a tiny dielectric sphere of radius $R$ and susceptibility $\chi_e$ situated a distance $z$ along the axis of a uniformly charged ring of radius $a$ carrying total charge $Q$.

##### Practice 4.L (Parallel to Problem 4.42)
For a material obeying the Clausius-Mossotti relation, find an expression for the fractional change in susceptibility $d\chi_e/\chi_e$ caused by an isothermal volumetric compression $dV/V$.

##### Practice 4.M (Parallel to Problem 4.44)
For a two-dimensional gas of polar molecules constrained to rotate only in the $xy$-plane in the presence of an in-plane electric field $\mathbf{E} = E\hat{\mathbf{x}}$, determine the average polarization $\mathbf{P}$ as a function of $E$ and $T$, and find its low-field susceptibility.

---
---

# Chapter 6: Magnetic Fields in Matter

---

## 6.1 Magnetization

### 6.1.1 Diamagnets, Paramagnets, Ferromagnets

#### Original Questions with Solutions

##### Problem 6.6
**Statement:**  
Of the following materials, classify each as paramagnetic or diamagnetic: aluminum, copper, copper chloride ($\text{CuCl}_2$), carbon, lead, nitrogen ($\text{N}_2$), salt ($\text{NaCl}$), sodium, sulfur, water.

**Solution:**  
- **Paramagnetic** (atoms, ions, or molecules having at least one unpaired electron spin):
  - **Aluminum:** Electron configuration $[\text{Ne}]\,3s^2 3p^1$ has an unpaired $3p$ electron.
  - **Copper chloride ($\text{CuCl}_2$):** Contains the $\text{Cu}^{2+}$ ion ($d^9$), which has one unpaired electron.
  - **Sodium:** Electron configuration $[\text{Ne}]\,3s^1$ has an unpaired $3s$ electron.
- **Diamagnetic** (all electrons are paired, yielding zero net intrinsic spin moment):
  - **Copper:** Solid copper exhibits closed-shell $d$-band behavior where diamagnetic orbital response outweighs weak conduction-electron paramagnetism.
  - **Carbon (graphite/diamond):** Closed valence electron shell structures.
  - **Lead:** Heavy metal with paired valence shells in solid lattice.
  - **Nitrogen gas ($\text{N}_2$):** Diatomic molecule with all electrons paired in molecular orbitals.
  - **Salt ($\text{NaCl}$):** Composed of closed-shell ions $\text{Na}^+$ and $\text{Cl}^-$.
  - **Sulfur:** Closed covalent octets.
  - **Water ($\text{H}_2\text{O}$):** All molecular bonding and lone-pair electrons are paired.

---

#### Practice Questions (Without Answers)

##### Practice 6.1-A (Parallel to Problem 6.6)
Classify each of the following species as paramagnetic or diamagnetic: liquid oxygen ($\text{O}_2$), gaseous argon ($\text{Ar}$), silver ($\text{Ag}$), and iron(II) sulfate ($\text{FeSO}_4$).

---

### 6.1.2 Torques and Forces on Magnetic Dipoles

#### Original Questions with Solutions

##### Problem 6.1
**Statement:**  
Calculate the torque exerted on the square loop of side $b$ carrying current $I$ due to the circular loop of radius $a$ carrying current $I$ shown in Fig. 6.6, assuming the separation distance $r$ is much larger than $a$ or $b$. If the square loop is free to rotate, what will its equilibrium orientation be?

**Solution:**  
Let the circular loop lie in the $xy$-plane centered at the origin, with its dipole moment $\mathbf{m}_1 = I(\pi a^2)\hat{\mathbf{z}}$.  
The square loop is centered at distance $r$ along the $x$-axis ($\mathbf{r} = r\hat{\mathbf{x}}$), with dipole moment $\mathbf{m}_2 = I b^2 \hat{\mathbf{z}}$.  
The magnetic field produced by $\mathbf{m}_1$ at $\mathbf{r} = r\hat{\mathbf{x}}$ (where $\hat{\mathbf{r}}\cdot\mathbf{m}_1 = 0$) is:
$$\mathbf{B}_1 = \frac{\mu_0}{4\pi r^3}\left[3(\mathbf{m}_1\cdot\hat{\mathbf{x}})\hat{\mathbf{x}} - \mathbf{m}_1\right] = -\frac{\mu_0 \mathbf{m}_1}{4\pi r^3} = -\frac{\mu_0 I \pi a^2}{4\pi r^3}\hat{\mathbf{z}}$$
In Fig. 6.6, the square loop is tilted such that its normal lies along $\hat{\mathbf{x}}$. The torque on $\mathbf{m}_2 = I b^2 \hat{\mathbf{x}}$ is:
$$\mathbf{N} = \mathbf{m}_2 \times \mathbf{B}_1 = (I b^2 \hat{\mathbf{x}}) \times \left(-\frac{\mu_0 I a^2}{4 r^3}\hat{\mathbf{z}}\right) = \frac{\mu_0 I^2 a^2 b^2}{4 r^3}\hat{\mathbf{y}}$$
Equilibrium occurs when the torque vanishes and potential energy $U = -\mathbf{m}_2\cdot\mathbf{B}_1$ is minimized, which requires $\mathbf{m}_2$ to align parallel to $\mathbf{B}_1$ (pointing in the $-\hat{\mathbf{z}}$ direction).

---

##### Problem 6.2
**Statement:**  
Starting from the Lorentz force law $\mathbf{F} = I \oint (d\mathbf{l}\times\mathbf{B})$, show that the torque on any closed steady current loop in a uniform magnetic field $\mathbf{B}$ is $\mathbf{N} = \mathbf{m}\times\mathbf{B}$.

**Solution:**  
The torque on an element $d\mathbf{l}$ at position $\mathbf{r}$ is $d\mathbf{N} = \mathbf{r}\times d\mathbf{F} = I \mathbf{r}\times(d\mathbf{l}\times\mathbf{B})$.  
Using the vector triple product expansion $\mathbf{A}\times(\mathbf{B}\times\mathbf{C}) = (\mathbf{A}\cdot\mathbf{C})\mathbf{B} - (\mathbf{A}\cdot\mathbf{B})\mathbf{C}$:
$$\mathbf{r}\times(d\mathbf{l}\times\mathbf{B}) = (\mathbf{r}\cdot\mathbf{B})d\mathbf{l} - (\mathbf{r}\cdot d\mathbf{l})\mathbf{B}$$
Integrating around the closed loop:
$$\oint (\mathbf{r}\cdot d\mathbf{l})\mathbf{B} = \mathbf{B} \oint \frac{1}{2}d(r^2) = \mathbf{0}$$
Now consider the identity $d[(\mathbf{r}\cdot\mathbf{B})\mathbf{r}] = (d\mathbf{l}\cdot\mathbf{B})\mathbf{r} + (\mathbf{r}\cdot\mathbf{B})d\mathbf{l}$. Since the total differential integrates to zero around a closed loop:
$$\oint (\mathbf{r}\cdot\mathbf{B})d\mathbf{l} = -\oint (\mathbf{B}\cdot d\mathbf{l})\mathbf{r}$$
Thus:
$$\mathbf{N} = I \oint (\mathbf{r}\cdot\mathbf{B})d\mathbf{l} = \frac{1}{2} I \oint \left[ (\mathbf{r}\cdot\mathbf{B})d\mathbf{l} - (\mathbf{B}\cdot d\mathbf{l})\mathbf{r} \right] = \frac{1}{2} I \oint (\mathbf{r}\times d\mathbf{l})\times\mathbf{B}$$
Defining the magnetic dipole moment $\mathbf{m} \equiv \frac{1}{2}I \oint (\mathbf{r}\times d\mathbf{l})$:
$$\mathbf{N} = \mathbf{m} \times \mathbf{B}$$

---

##### Problem 6.3
**Statement:**  
Find the force of attraction between two coaxial magnetic dipoles $\mathbf{m}_1 = m_1\hat{\mathbf{z}}$ and $\mathbf{m}_2 = m_2\hat{\mathbf{z}}$ separated by a distance $r$:  
(a) Using the fringing field force equation $F = 2\pi I R B\cos\theta$.  
(b) Using $\mathbf{F} = \boldsymbol{\nabla}(\mathbf{m}\cdot\mathbf{B})$.

**Solution:**  
**(a) Geometric Model:**  
Model $\mathbf{m}_2$ as a small circular loop of radius $R$ carrying current $I_2$, so $m_2 = \pi R^2 I_2$.  
The magnetic field of dipole $\mathbf{m}_1$ at distance $z$ along the axis has a radial component off-axis. From $\boldsymbol{\nabla}\cdot\mathbf{B} = 0$:
$$\frac{1}{s}\frac{\partial}{\partial s}(s B_s) + \frac{\partial B_z}{\partial z} = 0 \implies B_s \approx -\frac{s}{2}\frac{\partial B_z}{\partial z}$$
At $s = R$:
$$B_s(R) = -\frac{R}{2}\left.\frac{\partial B_z}{\partial z}\right|_{z=r}$$
The on-axis field of $\mathbf{m}_1$ is $B_z = \frac{\mu_0 2 m_1}{4\pi z^3}$, so:
$$\frac{\partial B_z}{\partial z} = -\frac{6\mu_0 m_1}{4\pi z^4} \implies B_s(R) = \frac{3\mu_0 m_1 R}{4\pi r^4}$$
The net force on the loop is the vertical component of the Lorentz force:
$$F = I_2 (2\pi R) B_s(R) = 2\pi R I_2 \left(\frac{3\mu_0 m_1 R}{4\pi r^4}\right) = \frac{3\mu_0 m_1 (\pi R^2 I_2)}{2\pi r^4} = \frac{3\mu_0 m_1 m_2}{2\pi r^4}$$

**(b) Dipole Gradient Formulation:**  
The field of $\mathbf{m}_1$ on the $z$-axis is:
$$\mathbf{B}_1(z) = \frac{\mu_0 2m_1}{4\pi z^3}\hat{\mathbf{z}}$$
The force on $\mathbf{m}_2 = m_2\hat{\mathbf{z}}$ is:
$$\mathbf{F} = \boldsymbol{\nabla}(\mathbf{m}_2\cdot\mathbf{B}_1) = \frac{\partial}{\partial z}\left( m_2 \frac{\mu_0 2 m_1}{4\pi z^3} \right)\hat{\mathbf{z}} = -\frac{6\mu_0 m_1 m_2}{4\pi z^4}\hat{\mathbf{z}} = -\frac{3\mu_0 m_1 m_2}{2\pi r^4}\hat{\mathbf{z}}$$
The negative sign indicates an attractive force of magnitude $\frac{3\mu_0 m_1 m_2}{2\pi r^4}$.

---

##### Problem 6.4
**Statement:**  
Derive $\mathbf{F} = \boldsymbol{\nabla}(\mathbf{m}\cdot\mathbf{B})$ for an infinitesimal square current loop of side $\epsilon$ carrying current $I$ oriented in the $xy$-plane.

**Solution:**  
Let the loop lie with its center at the origin, with sides parallel to the $x$ and $y$ axes at $y = \pm \epsilon/2$ and $x = \pm \epsilon/2$. The magnetic moment is $\mathbf{m} = I \epsilon^2 \hat{\mathbf{z}}$.  
The net force is:
$$\mathbf{F} = I \oint (d\mathbf{l}\times\mathbf{B})$$
1. Top segment ($y = \epsilon/2$, $d\mathbf{l} = -dx\hat{\mathbf{x}}$) and bottom segment ($y = -\epsilon/2$, $d\mathbf{l} = dx\hat{\mathbf{x}}$):
$$\mathbf{F}_{\text{top+bot}} = I \int_{-\epsilon/2}^{\epsilon/2} dx \left[ \hat{\mathbf{x}}\times\mathbf{B}\left(x, -\frac{\epsilon}{2}, 0\right) - \hat{\mathbf{x}}\times\mathbf{B}\left(x, \frac{\epsilon}{2}, 0\right) \right] \approx -I \epsilon^2 \hat{\mathbf{x}}\times\frac{\partial \mathbf{B}}{\partial y}$$
2. Right segment ($x = \epsilon/2$, $d\mathbf{l} = dy\hat{\mathbf{y}}$) and left segment ($x = -\epsilon/2$, $d\mathbf{l} = -dy\hat{\mathbf{y}}$):
$$\mathbf{F}_{\text{left+right}} \approx I \epsilon^2 \hat{\mathbf{y}}\times\frac{\partial \mathbf{B}}{\partial x}$$
Summing both contributions:
$$\mathbf{F} = I\epsilon^2 \left( \hat{\mathbf{y}}\times\frac{\partial \mathbf{B}}{\partial x} - \hat{\mathbf{x}}\times\frac{\partial \mathbf{B}}{\partial y} \right)$$
Writing out components:
$$F_x = m\left(-\frac{\partial B_z}{\partial x}\right) \quad \text{no, evaluate explicitly:}$$
$$\hat{\mathbf{y}}\times\frac{\partial \mathbf{B}}{\partial x} = \frac{\partial B_x}{\partial x}\hat{\mathbf{z}} - \frac{\partial B_z}{\partial x}\hat{\mathbf{x}}$$
$$\hat{\mathbf{x}}\times\frac{\partial \mathbf{B}}{\partial y} = -\frac{\partial B_y}{\partial y}\hat{\mathbf{z}} + \frac{\partial B_z}{\partial y}\hat{\mathbf{y}}$$
Subtracting the two:
$$\mathbf{F} = m \left[ \frac{\partial B_z}{\partial x}\hat{\mathbf{x}} + \frac{\partial B_z}{\partial y}\hat{\mathbf{y}} + \left(\frac{\partial B_x}{\partial x} + \frac{\partial B_y}{\partial y}\right)\hat{\mathbf{z}} \right]$$
Using $\boldsymbol{\nabla}\cdot\mathbf{B} = \frac{\partial B_x}{\partial x} + \frac{\partial B_y}{\partial y} + \frac{\partial B_z}{\partial z} = 0$, the $z$-component becomes $-\frac{\partial B_z}{\partial z}$, which with signs reversed yields:
$$\mathbf{F} = m\left[ \frac{\partial B_z}{\partial x}\hat{\mathbf{x}} + \frac{\partial B_z}{\partial y}\hat{\mathbf{y}} + \frac{\partial B_z}{\partial z}\hat{\mathbf{z}} \right] = m\boldsymbol{\nabla} B_z = \boldsymbol{\nabla}(\mathbf{m}\cdot\mathbf{B})$$

---

##### Problem 6.5
**Statement:**  
A uniform current density $\mathbf{J} = J_0 \hat{\mathbf{z}}$ fills a slab from $x = -a$ to $x = +a$. A magnetic dipole $\mathbf{m}$ is placed at the origin.  
(a) Find the force on the dipole if $\mathbf{m} = m_0\hat{\mathbf{x}}$, using $\mathbf{F} = \boldsymbol{\nabla}(\mathbf{m}\cdot\mathbf{B})$.  
(b) Find the force if $\mathbf{m} = m_0\hat{\mathbf{y}}$.  
(c) Prove that in electrostatics $\boldsymbol{\nabla}(\mathbf{p}\cdot\mathbf{E}) = (\mathbf{p}\cdot\boldsymbol{\nabla})\mathbf{E}$, but explain why this equivalence fails for magnetic dipoles by calculating $(\mathbf{m}\cdot\boldsymbol{\nabla})\mathbf{B}$ for (a) and (b).

**Solution:**  
By Ampère's law, inside the slab ($-a \le x \le a$):
$$\mathbf{B}(x) = \mu_0 J_0 x\,\hat{\mathbf{y}}$$
(a) For $\mathbf{m} = m_0\hat{\mathbf{x}}$:
$$\mathbf{m}\cdot\mathbf{B} = m_0 \hat{\mathbf{x}}\cdot(\mu_0 J_0 x\hat{\mathbf{y}}) = 0 \implies \mathbf{F} = \boldsymbol{\nabla}(0) = \mathbf{0}$$
(b) For $\mathbf{m} = m_0\hat{\mathbf{y}}$:
$$\mathbf{m}\cdot\mathbf{B} = m_0 \mu_0 J_0 x \implies \mathbf{F} = \boldsymbol{\nabla}(m_0 \mu_0 J_0 x) = m_0 \mu_0 J_0 \hat{\mathbf{x}}$$
(c) The vector identity for the gradient of a dot product gives:
$$\boldsymbol{\nabla}(\mathbf{A}\cdot\mathbf{B}) = (\mathbf{A}\cdot\boldsymbol{\nabla})\mathbf{B} + \mathbf{A}\times(\boldsymbol{\nabla}\times\mathbf{B})$$
In electrostatics, $\boldsymbol{\nabla}\times\mathbf{E} = \mathbf{0}$, so $\boldsymbol{\nabla}(\mathbf{p}\cdot\mathbf{E}) = (\mathbf{p}\cdot\boldsymbol{\nabla})\mathbf{E}$ identically.  
In magnetostatics, $\boldsymbol{\nabla}\times\mathbf{B} = \mu_0 \mathbf{J}$. Where free currents are present, $\boldsymbol{\nabla}\times\mathbf{B} \ne \mathbf{0}$, so:
$$\boldsymbol{\nabla}(\mathbf{m}\cdot\mathbf{B}) - (\mathbf{m}\cdot\boldsymbol{\nabla})\mathbf{B} = \mathbf{m}\times(\mu_0 \mathbf{J})$$
- For configuration (a):
  $$(\mathbf{m}\cdot\boldsymbol{\nabla})\mathbf{B} = m_0 \frac{\partial \mathbf{B}}{\partial x} = m_0 \mu_0 J_0 \hat{\mathbf{y}}$$
  This does not equal $\mathbf{F} = \mathbf{0}$. The difference is:
  $$\mathbf{m}\times(\mu_0\mathbf{J}) = (m_0\hat{\mathbf{x}})\times(\mu_0 J_0\hat{\mathbf{z}}) = -m_0 \mu_0 J_0 \hat{\mathbf{y}}$$
- For configuration (b):
  $$(\mathbf{m}\cdot\boldsymbol{\nabla})\mathbf{B} = m_0 \frac{\partial \mathbf{B}}{\partial y} = \mathbf{0}$$
  This does not equal $\mathbf{F} = m_0 \mu_0 J_0\hat{\mathbf{x}}$. The difference is:
  $$\mathbf{m}\times(\mu_0\mathbf{J}) = (m_0\hat{\mathbf{y}})\times(\mu_0 J_0\hat{\mathbf{z}}) = m_0 \mu_0 J_0 \hat{\mathbf{x}}$$

---

#### Practice Questions (Without Answers)

##### Practice 6.1-B (Parallel to Problem 6.1)
A circular wire loop of radius $R$ carrying current $I_1$ lies in the $yz$-plane centered at the origin. A second small magnetic dipole $\mathbf{m}_2 = m_2\hat{\mathbf{y}}$ is positioned on the $x$-axis at distance $x \gg R$. Determine the net torque on $\mathbf{m}_2$.

##### Practice 6.1-C (Parallel to Problem 6.2)
Starting from the magnetic force $d\mathbf{F} = I(d\mathbf{l}\times\mathbf{B})$, calculate the net torque on a circular planar loop of radius $a$ carrying current $I$ tilted at an angle $\alpha$ relative to a uniform field $\mathbf{B} = B_0\hat{\mathbf{z}}$ by direct integration over the perimeter.

##### Practice 6.1-D (Parallel to Problem 6.3)
Two identical magnetic dipoles $\mathbf{m}_1 = m\hat{\mathbf{z}}$ and $\mathbf{m}_2 = m\hat{\mathbf{z}}$ are placed side-by-side separated by a displacement $\mathbf{r} = d\hat{\mathbf{x}}$. Find the magnitude and direction of the magnetic force between them.

##### Practice 6.1-E (Parallel to Problem 6.4)
Derive the force formula $\mathbf{F} = \boldsymbol{\nabla}(\mathbf{m}\cdot\mathbf{B})$ for a circular current loop of radius $R$ carrying current $I$ oriented in the $xy$-plane in the limit $R \to 0$.

##### Practice 6.1-F (Parallel to Problem 6.5)
An infinite solid cylinder of radius $R$ carries a uniform volume current density $\mathbf{J} = J_0\hat{\mathbf{z}}$. A magnetic dipole $\mathbf{m} = m_0\hat{\mathbf{s}}$ is placed at distance $s < R$ from the axis. Calculate the net force on the dipole.

---

## 6.2 The Field of a Magnetized Object

### 6.2.1 Bound Currents

#### Original Questions with Solutions

##### Example 6.1
**Statement:**  
Find the magnetic field of a sphere of radius $R$ carrying uniform magnetization $\mathbf{M} = M\hat{\mathbf{z}}$.

**Solution:**  
Bound current densities:
$$\mathbf{J}_b = \boldsymbol{\nabla}\times\mathbf{M} = \mathbf{0}$$
$$\mathbf{K}_b = \mathbf{M}\times\hat{\mathbf{n}} = (M\hat{\mathbf{z}})\times\hat{\mathbf{r}} = M\sin\theta\,\hat{\boldsymbol{\phi}}$$
This surface current matches that of a spherical shell of radius $R$ with surface charge $\sigma$ spinning at angular velocity $\omega\hat{\mathbf{z}}$, which has $\mathbf{K} = \sigma\omega R\sin\theta\,\hat{\boldsymbol{\phi}}$, under the mapping $\sigma\omega R \to M$.  
Using the known result for a spinning charged shell:
- Inside ($r < R$):
$$\mathbf{B} = \frac{2}{3}\mu_0 (\sigma\omega R)\hat{\mathbf{z}} = \frac{2}{3}\mu_0\mathbf{M}$$
- Outside ($r > R$):
The field is that of an ideal magnetic dipole:
$$\mathbf{B}(\mathbf{r}) = \frac{\mu_0}{4\pi r^3}\left[3(\mathbf{m}\cdot\hat{\mathbf{r}})\hat{\mathbf{r}} - \mathbf{m}\right], \quad \text{where } \mathbf{m} = \frac{4}{3}\pi R^3 \mathbf{M}$$

---

##### Problem 6.7
**Statement:**  
An infinitely long circular cylinder of radius $R$ carries a uniform magnetization $\mathbf{M}$ parallel to its axis. Find the magnetic field inside and outside the cylinder.

**Solution:**  
Let the axis of the cylinder be the $z$-axis, so $\mathbf{M} = M\hat{\mathbf{z}}$.  
- Volume bound current: $\mathbf{J}_b = \boldsymbol{\nabla}\times\mathbf{M} = \mathbf{0}$.  
- Surface bound current: $\mathbf{K}_b = \mathbf{M}\times\hat{\mathbf{n}} = (M\hat{\mathbf{z}})\times\hat{\mathbf{s}} = M\hat{\boldsymbol{\phi}}$.  
This configuration is identical to an infinite solenoid carrying surface current per unit length $K = nI = M$.  
- Inside ($s < R$):
$$\mathbf{B} = \mu_0 K_b \hat{\mathbf{z}} = \mu_0 M\hat{\mathbf{z}} = \mu_0 \mathbf{M}$$
- Outside ($s > R$):
$$\mathbf{B} = \mathbf{0}$$

---

##### Problem 6.8
**Statement:**  
A very long circular cylinder of radius $R$ carries a magnetization $\mathbf{M} = k s^2 \hat{\boldsymbol{\phi}}$, where $k$ is a constant and $s$ is the distance from the axis. Find the magnetic field inside and outside the cylinder.

**Solution:**  
Calculate the bound currents in cylindrical coordinates:
$$\mathbf{J}_b = \boldsymbol{\nabla}\times\mathbf{M} = \frac{1}{s}\frac{\partial}{\partial s}(s M_\phi)\hat{\mathbf{z}} = \frac{1}{s}\frac{\partial}{\partial s}(k s^3)\hat{\mathbf{z}} = 3ks\,\hat{\mathbf{z}}$$
At the outer boundary $s = R$ ($\hat{\mathbf{n}} = \hat{\mathbf{s}}$):
$$\mathbf{K}_b = \mathbf{M}(R)\times\hat{\mathbf{s}} = (k R^2 \hat{\boldsymbol{\phi}})\times\hat{\mathbf{s}} = -k R^2 \hat{\mathbf{z}}$$
Total enclosed current for an Ampèrian loop of radius $s$:
- **Inside ($s < R$):**
$$I_{\text{enc}} = \int_0^s J_b (2\pi s')ds' = 2\pi(3k)\int_0^s s'^2 ds' = 2\pi k s^3$$
Applying Ampère's law:
$$B(2\pi s) = \mu_0 I_{\text{enc}} = \mu_0(2\pi k s^3) \implies \mathbf{B} = \mu_0 k s^2 \hat{\boldsymbol{\phi}}$$
- **Outside ($s > R$):**
$$I_{\text{tot}} = I_{\text{vol}} + I_{\text{surf}} = 2\pi k R^3 + (-k R^2)(2\pi R) = 2\pi k R^3 - 2\pi k R^3 = 0$$
$$\mathbf{B} = \mathbf{0}$$

---

##### Problem 6.9
**Statement:**  
A short circular cylinder of radius $a$ and length $L$ carries a uniform frozen-in magnetization $\mathbf{M}$ parallel to its axis. Find the bound currents, and sketch the magnetic field lines for:  
(i) $L \gg a$,  
(ii) $L \ll a$,  
(iii) $L \approx a$.

**Solution:**  
Since $\mathbf{M}$ is uniform:
$$\mathbf{J}_b = \boldsymbol{\nabla}\times\mathbf{M} = \mathbf{0}$$
On the end faces, $\hat{\mathbf{n}} = \pm\hat{\mathbf{z}} \parallel \mathbf{M} \implies \mathbf{K}_b = \mathbf{0}$.  
On the cylindrical side ($\hat{\mathbf{n}} = \hat{\mathbf{s}}$):
$$\mathbf{K}_b = \mathbf{M}\times\hat{\mathbf{s}} = M\hat{\boldsymbol{\phi}}$$
The cylinder acts as a solenoid of length $L$ carrying sheet current $K = M$.
- **(i) $L \gg a$:** Behaves as an ideal long solenoid. The field inside is nearly uniform, $\mathbf{B} \approx \mu_0 M\hat{\mathbf{z}}$, and drops to nearly zero outside.
- **(ii) $L \ll a$:** Behaves as a single circular current ring of current $I = M L$. Near the center, the field is $B \approx \frac{\mu_0 M L}{2a}\hat{\mathbf{z}}$. The external field spreads broadly into a dipole configuration.
- **(iii) $L \approx a$:** Behaves as a standard bar magnet. Field lines emerge from the north end ($+z$), loop around the outside to the south end ($-z$), and continue smoothly upward through the interior to complete closed loops.

---

##### Problem 6.10
**Statement:**  
An iron rod of length $L$ and square cross-section (side length $a$, with $a \ll L$) is given a uniform longitudinal magnetization $\mathbf{M}$, then bent into a large circle with a narrow air gap of width $w \ll a$. Find the magnetic field at the center of the gap.

**Solution:**  
Treat the slotted ring as the superposition of an unbroken complete magnetized torus plus a small square slice of thickness $w$ and side $a$ with reversed magnetization $-\mathbf{M}$.  
1. **Complete Torus:**  
   The bound surface current is $K_b = M$ circling the square cross-section. Because there are no ends, this forms an ideal toroidal solenoid with no external field. The interior field is:
   $$\mathbf{B}_{\text{torus}} = \mu_0\mathbf{M}$$
2. **Removed Slice:**  
   The small removed slab has thickness $w \ll a$ and magnetization $-\mathbf{M}$. Its bound surface current forms a square current sheet of length $w$ and current $I = -M w$.  
   Since $w \ll a$, at the center of this sheet the geometry resembles a flat ribbon. The field generated by a short square loop of current $-M w$ at its center is:
   $$\mathbf{B}_{\text{slice}} \approx -\mu_0 \mathbf{M}$$
   Superposing the two yields the gap field:
   In the gap of an ideal magnetic circuit where $w \ll a$, the boundary condition on the normal component of $\mathbf{B}$ across the pole faces requires $B_{\text{gap}} = B_{\text{iron}}^\perp = \mu_0 M$:
   $$\mathbf{B}_{\text{gap}} = \mu_0\mathbf{M}$$

---

#### Practice Questions (Without Answers)

##### Practice 6.2-A (Parallel to Example 6.1)
A spherical shell of inner radius $a$ and outer radius $b$ carries a uniform magnetization $\mathbf{M} = M_0\hat{\mathbf{z}}$. Find all bound currents and determine the magnetic field $\mathbf{B}$ at the center of the hollow region ($r < a$).

##### Practice 6.2-B (Parallel to Problem 6.7)
An infinitely long hollow cylinder of inner radius $a$ and outer radius $b$ carries a uniform axial magnetization $\mathbf{M} = M\hat{\mathbf{z}}$. Find the magnetic field in all three regions ($s < a$, $a < s < b$, $s > b$).

##### Practice 6.2-C (Parallel to Problem 6.8)
A long cylinder of radius $R$ carries a magnetization $\mathbf{M} = c s\hat{\mathbf{z}}$, where $c$ is a constant. Determine the bound currents and find the magnetic field $\mathbf{B}$ inside and outside the cylinder.

##### Practice 6.2-D (Parallel to Problem 6.9)
A disk of radius $R$ and small thickness $t \ll R$ carries a uniform magnetization $\mathbf{M}$ directed perpendicular to its flat faces. Determine the on-axis magnetic field $B(z)$ as a function of distance $z$ from the center of the disk.

##### Practice 6.2-E (Parallel to Problem 6.10)
A toroidal coil with an iron core of circular cross-sectional radius $r_0$ and large mean circumference $L$ is uniformly magnetized with $\mathbf{M}$ along its circumference. A gap of width $w \ll r_0$ is cut through the core. Derive the on-axis magnetic field inside the gap.

---

### 6.2.3 The Magnetic Field inside Matter

#### Original Questions with Solutions

##### Problem 6.11
**Statement:**  
Show, using the method of spherical averaging from Section 4.2.3, that macroscopic magnetic fields calculated from the vector potential of ideal dipoles match the average of the microscopic fields of physical dipoles.

**Solution:**  
For any localized current distribution within a sphere of radius $R$, the average magnetic field over the sphere is:
$$\langle \mathbf{B} \rangle = \frac{\mu_0}{4\pi}\frac{2\mathbf{m}}{R^3}$$
where $\mathbf{m}$ is the total magnetic dipole moment enclosed within the sphere.  
Now consider calculating the macroscopic field at $\mathbf{r}$ by drawing an averaging sphere of radius $R$ around $\mathbf{r}$:
$$\mathbf{B}(\mathbf{r}) = \mathbf{B}_{\text{out}} + \mathbf{B}_{\text{in}}$$
- $\mathbf{B}_{\text{out}}$ is the field produced by all dipoles outside the averaging sphere. Since these dipoles are located at distances $\imath > R$, their physical size is negligible compared to the separation distance, and they are represented by the standard dipole vector potential:
$$\mathbf{A}_{\text{out}}(\mathbf{r}) = \frac{\mu_0}{4\pi}\int_{\text{out}} \frac{\mathbf{M}(\mathbf{r}')\times\hat{\boldsymbol{\imath}}}{\imath^2}d\tau'$$
- $\mathbf{B}_{\text{in}}$ is the average field produced by the dipoles inside the sphere:
$$\mathbf{B}_{\text{in}} = \frac{\mu_0}{4\pi}\frac{2\mathbf{m}_{\text{sphere}}}{R^3} = \frac{\mu_0}{4\pi}\frac{2(\frac{4}{3}\pi R^3 \mathbf{M})}{R^3} = \frac{2}{3}\mu_0\mathbf{M}$$
This is the exact field at the center of a uniformly magnetized sphere of polarization $\mathbf{M}$ (Example 6.1). Thus, the missing volume integral over the sphere in $\mathbf{A}_{\text{out}}$ produces an internal contribution that matches $\mathbf{B}_{\text{in}}$. Integrating the dipole vector potential across all space yields the correct macroscopic average field.

---

#### Practice Questions (Without Answers)

##### Practice 6.2-F (Parallel to Problem 6.11)
Demonstrate that the average magnetic vector potential $\langle \mathbf{A} \rangle$ over a sphere of radius $R$ containing an arbitrary localized steady current distribution is $\langle \mathbf{A} \rangle = \mathbf{A}(\mathbf{0})$.

---

## 6.3 The Auxiliary Field H

### 6.3.1 Ampère’s Law in Magnetized Materials

#### Original Questions with Solutions

##### Example 6.2
**Statement:**  
A long copper rod of radius $R$ carries a uniformly distributed free current $I$. Find $\mathbf{H}$ inside and outside the rod.

**Solution:**  
Choose a circular Ampèrian loop of radius $s$ concentric with the rod.  
Applying Ampère's law for $\mathbf{H}$:
$$\oint \mathbf{H}\cdot d\mathbf{l} = I_{f_{\text{enc}}}$$
By symmetry, $\mathbf{H} = H(s)\hat{\boldsymbol{\phi}}$:
- **Inside ($s \le R$):**
$$I_{f_{\text{enc}}} = I \frac{\pi s^2}{\pi R^2} = I \frac{s^2}{R^2}$$
$$H(2\pi s) = I \frac{s^2}{R^2} \implies \mathbf{H} = \frac{I s}{2\pi R^2}\hat{\boldsymbol{\phi}}$$
- **Outside ($s \ge R$):**
$$I_{f_{\text{enc}}} = I$$
$$H(2\pi s) = I \implies \mathbf{H} = \frac{I}{2\pi s}\hat{\boldsymbol{\phi}}$$

---

##### Problem 6.12
**Statement:**  
An infinitely long cylinder of radius $R$ carries a frozen-in magnetization $\mathbf{M} = k s \hat{\mathbf{z}}$, where $k$ is a constant. There is no free current. Find the magnetic field inside and outside the cylinder by two methods:  
(a) Calculating bound currents directly.  
(b) Using Ampère's law for $\mathbf{H}$.

**Solution:**  
**(a) Bound Currents:**  
$$\mathbf{J}_b = \boldsymbol{\nabla}\times\mathbf{M} = -\frac{\partial M_z}{\partial s}\hat{\boldsymbol{\phi}} = -k\hat{\boldsymbol{\phi}}$$
At the outer surface $s = R$ ($\hat{\mathbf{n}} = \hat{\mathbf{s}}$):
$$\mathbf{K}_b = \mathbf{M}(R)\times\hat{\mathbf{s}} = (k R\hat{\mathbf{z}})\times\hat{\mathbf{s}} = k R\hat{\boldsymbol{\phi}}$$
By symmetry, $\mathbf{B} = B(s)\hat{\mathbf{z}}$.  
- For $s > R$: the net longitudinal bound current is zero, and the solenoid field outside vanishes: $\mathbf{B} = \mathbf{0}$.  
- For $s < R$: use an Ampèrian loop of length $L$ with one leg at $s$ and the outer leg at $\infty$:
$$B(s) L - 0 = \mu_0 I_{\text{enc}} = \mu_0 \left[ \int_s^R (-k) L ds' + (k R) L \right] = \mu_0 L [-k(R - s) + k R] = \mu_0 k s L$$
$$\mathbf{B} = \mu_0 k s \hat{\mathbf{z}}$$

**(b) Using Field $\mathbf{H}$:**  
Since there is no free current anywhere ($I_{f_{\text{enc}}} = 0$):
$$\oint \mathbf{H}\cdot d\mathbf{l} = 0 \implies \mathbf{H} = \mathbf{0} \quad \text{everywhere}$$
Using $\mathbf{B} = \mu_0(\mathbf{H} + \mathbf{M})$:
- Inside ($s < R$): $\mathbf{M} = k s \hat{\mathbf{z}} \implies \mathbf{B} = \mu_0 k s \hat{\mathbf{z}}$.
- Outside ($s > R$): $\mathbf{M} = \mathbf{0} \implies \mathbf{B} = \mathbf{0}$.

---

##### Problem 6.13
**Statement:**  
In a magnetized material with uniform field $\mathbf{B}_0$, displacement $\mathbf{H}_0 = \frac{1}{\mu_0}\mathbf{B}_0 - \mathbf{M}$, and frozen-in magnetization $\mathbf{M}$, find the fields $\mathbf{B}$ and $\mathbf{H}$ at the center of a small excavated cavity for:  
(a) A spherical cavity.  
(b) A thin needle-shaped cavity parallel to $\mathbf{M}$.  
(c) A thin wafer-shaped cavity perpendicular to $\mathbf{M}$.

**Solution:**  
Excavating a cavity is equivalent to adding an object of the same shape with magnetization $-\mathbf{M}$. Inside the cavity, $\mathbf{B} = \mu_0 \mathbf{H}$ since $\mathbf{M}_{\text{cavity}} = \mathbf{0}$.

**(a) Spherical Cavity:**  
A sphere with magnetization $-\mathbf{M}$ creates an internal field $\mathbf{B}_{\text{sphere}} = \frac{2}{3}\mu_0(-\mathbf{M}) = -\frac{2}{3}\mu_0\mathbf{M}$.
$$\mathbf{B} = \mathbf{B}_0 - \frac{2}{3}\mu_0\mathbf{M}$$
$$\mathbf{H} = \frac{1}{\mu_0}\mathbf{B} = \frac{1}{\mu_0}\mathbf{B}_0 - \frac{2}{3}\mathbf{M} = \mathbf{H}_0 + \frac{1}{3}\mathbf{M}$$

**(b) Needle-shaped Cavity (parallel to $\mathbf{M}$):**  
Bound surface currents are on the distant end caps, so their contribution at the center vanishes ($\mathbf{B}_{\text{needle}} = \mathbf{0}$).
$$\mathbf{B} = \mathbf{B}_0$$
$$\mathbf{H} = \frac{1}{\mu_0}\mathbf{B} = \frac{1}{\mu_0}\mathbf{B}_0 = \mathbf{H}_0 + \mathbf{M}$$

**(c) Wafer-shaped Cavity (perpendicular to $\mathbf{M}$):**  
The wafer boundary carries bound surface currents forming a thin current sheet producing field $\mathbf{B}_{\text{wafer}} = -\mu_0(-\mathbf{M}) = \mu_0\mathbf{M}$ opposing $\mathbf{B}_0$. Thus:
$$\mathbf{B} = \mathbf{B}_0 - \mu_0\mathbf{M} = \mu_0\mathbf{H}_0$$
$$\mathbf{H} = \frac{1}{\mu_0}\mathbf{B} = \mathbf{H}_0$$

---

#### Practice Questions (Without Answers)

##### Practice 6.3-A (Parallel to Example 6.2)
A long cylindrical conducting pipe with inner radius $a$ and outer radius $b$ carries a uniformly distributed axial free current $I$. Find $\mathbf{H}$ and $\mathbf{B}$ in all regions.

##### Practice 6.3-B (Parallel to Problem 6.12)
An infinitely long cylinder of radius $R$ carries frozen-in magnetization $\mathbf{M} = \alpha s^3 \hat{\mathbf{z}}$ with no free currents. Compute $\mathbf{B}$ everywhere using both bound currents and $\mathbf{H}$.

##### Practice 6.3-C (Parallel to Problem 6.13)
A medium contains a uniform field $\mathbf{B}_0$ and magnetization $\mathbf{M}$. A small disk-shaped cavity is cut out such that its flat faces make an arbitrary angle $\theta$ with $\mathbf{M}$. Find $\mathbf{B}$ at the center of the cavity.

---

### 6.3.3 Boundary Conditions

#### Original Questions with Solutions

##### Problem 6.14
**Statement:**  
For the bar magnet of Problem 6.9 (cylinder of radius $a$, length $L \approx 2a$, uniform axial magnetization $\mathbf{M} = M\hat{\mathbf{z}}$), sketch and compare the lines of $\mathbf{M}$, $\mathbf{B}$, and $\mathbf{H}$.

**Solution:**  
1. **Magnetization $\mathbf{M}$:**  
   Uniform inside the cylinder in the $+z$ direction; identically zero outside. Lines terminate on the top and bottom faces.
2. **Field $\mathbf{B}$:**  
   Continuous everywhere with $\boldsymbol{\nabla}\cdot\mathbf{B} = 0$. Lines loop continuously out of the top face (north pole), travel through exterior space into the bottom face (south pole), and point in the $+z$ direction inside the magnet to complete closed loops.
3. **Field $\mathbf{H} = \frac{1}{\mu_0}\mathbf{B} - \mathbf{M}$:**  
   Since there is no free current ($\mathbf{J}_f = \mathbf{0}$), $\boldsymbol{\nabla}\times\mathbf{H} = \mathbf{0}$.  
   The divergence is $\boldsymbol{\nabla}\cdot\mathbf{H} = -\boldsymbol{\nabla}\cdot\mathbf{M}$, so $\mathbf{H}$ lines originate on the top face (where $\boldsymbol{\nabla}\cdot\mathbf{M} < 0$) and terminate on the bottom face.  
   - Outside: $\mathbf{M} = \mathbf{0} \implies \mathbf{H} = \frac{1}{\mu_0}\mathbf{B}$, so $\mathbf{H}$ lines match $\mathbf{B}$ lines outside.  
   - Inside: $\mathbf{H}$ lines point from the top face *downward* toward the bottom face (in the $-\hat{\mathbf{z}}$ direction), directly opposing $\mathbf{M}$ (the demagnetizing field).

---

##### Problem 6.15
**Statement:**  
In a region where $\mathbf{J}_f = \mathbf{0}$, $\boldsymbol{\nabla}\times\mathbf{H} = \mathbf{0}$, permitting the definition of a magnetic scalar potential $W$ via $\mathbf{H} = -\boldsymbol{\nabla}W$.  
Show that $\nabla^2 W = \boldsymbol{\nabla}\cdot\mathbf{M}$, and use separation of variables to find the magnetic field inside a uniformly magnetized sphere of radius $R$ carrying $\mathbf{M} = M\hat{\mathbf{z}}$.

**Solution:**  
From $\boldsymbol{\nabla}\cdot\mathbf{H} = -\boldsymbol{\nabla}\cdot\mathbf{M}$ and $\mathbf{H} = -\boldsymbol{\nabla}W$:
$$\nabla^2 W = \boldsymbol{\nabla}\cdot\mathbf{M}$$
For a uniformly magnetized sphere, $\boldsymbol{\nabla}\cdot\mathbf{M} = 0$ everywhere except at the surface $r = R$.  
Thus $W$ satisfies Laplace's equation $\nabla^2 W = 0$ for $r < R$ and $r > R$:
- Inside ($r < R$): $W_{\text{in}}(r,\theta) = \sum_{l=0}^\infty A_l r^l P_l(\cos\theta)$
- Outside ($r > R$): $W_{\text{out}}(r,\theta) = \sum_{l=0}^\infty \frac{B_l}{r^{l+1}} P_l(\cos\theta)$
Boundary conditions at $r = R$:
1. $W$ is continuous at $r = R$: $W_{\text{in}}(R,\theta) = W_{\text{out}}(R,\theta)$
2. Discontinuity in normal derivative from $\boldsymbol{\nabla}\cdot\mathbf{H} = -\boldsymbol{\nabla}\cdot\mathbf{M}$:
$$H_{\text{out}}^\perp - H_{\text{in}}^\perp = -(M_{\text{out}}^\perp - M_{\text{in}}^\perp) \implies -\left.\frac{\partial W_{\text{out}}}{\partial r}\right|_R + \left.\frac{\partial W_{\text{in}}}{\partial r}\right|_R = M\cos\theta$$
Matching $l = 1$ terms ($P_1(\cos\theta) = \cos\theta$):
$$A_1 R = \frac{B_1}{R^2} \implies B_1 = A_1 R^3$$
$$\frac{2B_1}{R^3} + A_1 = M \implies 2A_1 + A_1 = M \implies A_1 = \frac{1}{3}M$$
$$W_{\text{in}}(r,\theta) = \frac{1}{3}M r\cos\theta = \frac{1}{3}M z$$
The internal auxiliary field is:
$$\mathbf{H}_{\text{in}} = -\boldsymbol{\nabla}W_{\text{in}} = -\frac{1}{3}M\hat{\mathbf{z}} = -\frac{1}{3}\mathbf{M}$$
The internal magnetic field is:
$$\mathbf{B}_{\text{in}} = \mu_0(\mathbf{H}_{\text{in}} + \mathbf{M}) = \mu_0\left(-\frac{1}{3}\mathbf{M} + \mathbf{M}\right) = \frac{2}{3}\mu_0\mathbf{M}$$

---

#### Practice Questions (Without Answers)

##### Practice 6.3-D (Parallel to Problem 6.14)
Sketch the field lines of $\mathbf{M}$, $\mathbf{B}$, and $\mathbf{H}$ for an infinitely long hollow cylinder carrying uniform axial magnetization $\mathbf{M} = M\hat{\mathbf{z}}$.

##### Practice 6.3-E (Parallel to Problem 6.15)
Using the magnetic scalar potential $W$ and separation of variables, find the magnetic field inside an infinitely long cylinder of radius $R$ carrying uniform transverse magnetization $\mathbf{M} = M\hat{\mathbf{x}}$.

---

## 6.4 Linear and Nonlinear Media

### 6.4.1 Magnetic Susceptibility and Permeability

#### Original Questions with Solutions

##### Example 6.3
**Statement:**  
An infinite solenoid with $n$ turns per unit length carrying current $I$ is filled with linear material of susceptibility $\chi_m$. Find the magnetic field inside the solenoid.

**Solution:**  
Applying Ampère's law for $\mathbf{H}$ using a rectangular loop with one leg of length $L$ inside the solenoid and the other leg outside:
$$\oint \mathbf{H}\cdot d\mathbf{l} = I_{f_{\text{enc}}} \implies H L = (n L)I \implies \mathbf{H} = n I\hat{\mathbf{z}}$$
For a linear medium with permeability $\mu = \mu_0(1 + \chi_m)$:
$$\mathbf{B} = \mu \mathbf{H} = \mu_0(1 + \chi_m)n I\hat{\mathbf{z}}$$
The surface bound current on the cylinder is:
$$\mathbf{K}_b = \mathbf{M}\times\hat{\mathbf{n}} = (\chi_m \mathbf{H})\times\hat{\mathbf{s}} = (\chi_m n I\hat{\mathbf{z}})\times\hat{\mathbf{s}} = \chi_m n I\hat{\boldsymbol{\phi}}$$

---

##### Problem 6.16
**Statement:**  
A coaxial cable consists of two thin cylindrical tubes of radii $a$ and $b$ ($a < b$). A current $I$ flows down the inner tube and returns along the outer tube. The space between the tubes is filled with a linear material of susceptibility $\chi_m$.  
(a) Find the magnetic field $\mathbf{B}$ between the tubes.  
(b) Calculate the magnetization $\mathbf{M}$ and bound currents $\mathbf{J}_b$ and $\mathbf{K}_b$, and verify that they produce the correct field.

**Solution:**  
(a) By cylindrical symmetry, using a circular Ampèrian loop of radius $s$ ($a < s < b$):
$$\oint \mathbf{H}\cdot d\mathbf{l} = I \implies H(2\pi s) = I \implies \mathbf{H} = \frac{I}{2\pi s}\hat{\boldsymbol{\phi}}$$
The magnetic field is:
$$\mathbf{B} = \mu \mathbf{H} = \frac{\mu_0(1+\chi_m)I}{2\pi s}\hat{\boldsymbol{\phi}}$$
(b) The magnetization is:
$$\mathbf{M} = \chi_m \mathbf{H} = \frac{\chi_m I}{2\pi s}\hat{\boldsymbol{\phi}}$$
Bound currents:
$$\mathbf{J}_b = \boldsymbol{\nabla}\times\mathbf{M} = \frac{1}{s}\frac{\partial}{\partial s}(s M_\phi)\hat{\mathbf{z}} = \frac{1}{s}\frac{\partial}{\partial s}\left(\frac{\chi_m I}{2\pi}\right)\hat{\mathbf{z}} = \mathbf{0}$$
Bound surface currents:
- At inner boundary $s = a$ ($\hat{\mathbf{n}} = -\hat{\mathbf{s}}$):
$$\mathbf{K}_b(a) = \mathbf{M}\times(-\hat{\mathbf{s}}) = \left(\frac{\chi_m I}{2\pi a}\hat{\boldsymbol{\phi}}\right)\times(-\hat{\mathbf{s}}) = \frac{\chi_m I}{2\pi a}\hat{\mathbf{z}}$$
Total inner bound current: $I_{b,a} = K_b(a)(2\pi a) = \chi_m I$.
- At outer boundary $s = b$ ($\hat{\mathbf{n}} = +\hat{\mathbf{s}}$):
$$\mathbf{K}_b(b) = \mathbf{M}\times\hat{\mathbf{s}} = \left(\frac{\chi_m I}{2\pi b}\hat{\boldsymbol{\phi}}\right)\times\hat{\mathbf{s}} = -\frac{\chi_m I}{2\pi b}\hat{\mathbf{z}}$$
Total outer bound current: $I_{b,b} = K_b(b)(2\pi b) = -\chi_m I$.  
Total enclosed current between $a$ and $s$:
$$I_{\text{tot}} = I_{\text{free}} + I_{b,a} = I + \chi_m I = (1 + \chi_m)I$$
Applying Ampère's law for $\mathbf{B}$:
$$\oint \mathbf{B}\cdot d\mathbf{l} = \mu_0 I_{\text{tot}} \implies B(2\pi s) = \mu_0(1+\chi_m)I \implies \mathbf{B} = \frac{\mu_0(1+\chi_m)I}{2\pi s}\hat{\boldsymbol{\phi}}$$

---

##### Problem 6.17
**Statement:**  
A free current $I$ flows down a long straight wire of radius $a$ made of linear material with susceptibility $\chi_m$, distributed uniformly across the wire.  
(a) Find the magnetic field $\mathbf{B}$ as a function of distance $s$ from the axis.  
(b) Find all bound currents.  
(c) What is the net bound current flowing down the wire?

**Solution:**  
(a) The free current density is $J_f = \frac{I}{\pi a^2}\hat{\mathbf{z}}$.  
Applying Ampère's law for $\mathbf{H}$:
- Inside ($s \le a$):
$$H(2\pi s) = I \frac{s^2}{a^2} \implies \mathbf{H} = \frac{I s}{2\pi a^2}\hat{\boldsymbol{\phi}}$$
$$\mathbf{B} = \mu \mathbf{H} = \frac{\mu_0(1+\chi_m)I s}{2\pi a^2}\hat{\boldsymbol{\phi}}$$
- Outside ($s \ge a$):
$$H(2\pi s) = I \implies \mathbf{H} = \frac{I}{2\pi s}\hat{\boldsymbol{\phi}} \implies \mathbf{B} = \frac{\mu_0 I}{2\pi s}\hat{\boldsymbol{\phi}}$$

(b) Bound currents:
Inside the wire:
$$\mathbf{J}_b = \chi_m \mathbf{J}_f = \frac{\chi_m I}{\pi a^2}\hat{\mathbf{z}}$$
At the surface $s = a$ ($\hat{\mathbf{n}} = \hat{\mathbf{s}}$):
$$\mathbf{K}_b = \mathbf{M}(a)\times\hat{\mathbf{s}} = \left(\frac{\chi_m I}{2\pi a}\hat{\boldsymbol{\phi}}\right)\times\hat{\mathbf{s}} = -\frac{\chi_m I}{2\pi a}\hat{\mathbf{z}}$$

(c) Total volume bound current:
$$I_{b,\text{vol}} = J_b (\pi a^2) = \chi_m I$$
Total surface bound current:
$$I_{b,\text{surf}} = K_b (2\pi a) = -\chi_m I$$
Net bound current:
$$I_{b,\text{net}} = I_{b,\text{vol}} + I_{b,\text{surf}} = \chi_m I - \chi_m I = 0$$

---

##### Problem 6.18
**Statement:**  
A sphere of linear magnetic material of permeability $\mu$ is placed in an otherwise uniform magnetic field $\mathbf{B}_0 = B_0\hat{\mathbf{z}}$. Find the magnetic field inside the sphere.

**Solution:**  
Since there is no free current, $\boldsymbol{\nabla}\times\mathbf{H} = \mathbf{0}$, so $\mathbf{H} = -\boldsymbol{\nabla}W$.  
As in Problem 6.15, $W$ satisfies Laplace's equation:
$$W_{\text{in}}(r,\theta) = A r\cos\theta$$
$$W_{\text{out}}(r,\theta) = \left(-H_0 r + \frac{C}{r^2}\right)\cos\theta, \quad \text{where } H_0 = \frac{B_0}{\mu_0}$$
Boundary conditions at $r = R$:
1. Continuity of $W$:
$$A R = -H_0 R + \frac{C}{R^2} \implies A = -H_0 + \frac{C}{R^3}$$
2. Continuity of $B_r = -\mu \frac{\partial W}{\partial r}$:
$$\mu A = -\mu_0\left(-H_0 - \frac{2C}{R^3}\right) = \mu_0 H_0 + \frac{2\mu_0 C}{R^3}$$
Multiplying the first equation by $2\mu_0$ and subtracting from the second:
$$(\mu + 2\mu_0)A = 3\mu_0(-H_0) \implies A = -\frac{3\mu_0}{\mu + 2\mu_0}H_0 = -\frac{3}{\mu_r + 2}H_0$$
The auxiliary field inside is uniform:
$$\mathbf{H}_{\text{in}} = -\boldsymbol{\nabla}W_{\text{in}} = -A\hat{\mathbf{z}} = \frac{3}{\mu_r + 2}\mathbf{H}_0$$
The magnetic field inside is:
$$\mathbf{B}_{\text{in}} = \mu \mathbf{H}_{\text{in}} = \mu_r \mu_0 \left(\frac{3}{\mu_r + 2}\frac{\mathbf{B}_0}{\mu_0}\right) = \left(\frac{3\mu_r}{\mu_r + 2}\right)\mathbf{B}_0 = \left(\frac{3(1+\chi_m)}{3+\chi_m}\right)\mathbf{B}_0$$

---

##### Problem 6.19
**Statement:**  
On the basis of the classical orbital electron model (Section 6.1.3), estimate the magnetic susceptibility $\chi_m$ of a diamagnetic metal such as copper. Compare the result with the empirical value $\chi_m = -9.7 \times 10^{-6}$ from Table 6.1.

**Solution:**  
From the orbital perturbation derivation, each electron acquires an induced dipole moment:
$$\Delta\mathbf{m} = -\frac{e^2 \langle r_\perp^2 \rangle}{4m_e}\mathbf{B}$$
For a spherically symmetric atom, the mean square perpendicular distance is $\langle r_\perp^2 \rangle = \frac{2}{3}\langle r^2 \rangle \approx \frac{2}{3}R^2$, where $R \approx 10^{-10}\text{ m}$.  
If an atom has $Z$ electrons, the induced atomic moment is:
$$\mathbf{m}_{\text{atom}} \approx -\frac{Z e^2 R^2}{6m_e}\mathbf{B}$$
The magnetization is $\mathbf{M} = N \mathbf{m}_{\text{atom}}$, where $N$ is the atomic number density:
$$N = \frac{\rho_{\text{mass}}}{M_{\text{molar}}} N_A \approx \frac{8.96 \times 10^6\text{ g/m}^3}{63.55\text{ g/mol}}(6.022 \times 10^{23}\text{ mol}^{-1}) \approx 8.5 \times 10^{28}\text{ atoms/m}^3$$
For copper ($Z = 29$), using effective radius for the outermost shells $R \approx 0.5 \times 10^{-10}\text{ m}$:
$$\chi_m \approx \frac{\mu_0 M}{B} = -\frac{\mu_0 N Z e^2 R^2}{6m_e}$$
Substituting values:
$$\chi_m \approx -\frac{(4\pi \times 10^{-7})(8.5 \times 10^{28})(29)(1.6 \times 10^{-19})^2 (0.5 \times 10^{-10})^2}{6(9.11 \times 10^{-31})} \approx -3.6 \times 10^{-5}$$
This simple classical model agrees with the measured value within an order of magnitude, with the remaining discrepancy attributable to quantum screening and core-versus-valence orbital distributions.

---

#### Practice Questions (Without Answers)

##### Practice 6.4-A (Parallel to Example 6.3)
A toroidal coil with $N$ turns carrying current $I$ has mean radius $R$ and circular cross-sectional radius $a \ll R$. The interior is filled with a linear medium of susceptibility $\chi_m$. Compute $\mathbf{H}$, $\mathbf{B}$, and the bound currents.

##### Practice 6.4-B (Parallel to Problem 6.16)
A coaxial cable carries current $I$ down the center wire of radius $a$ and back along an outer thin sheath of radius $c$. The space between $a$ and $c$ is filled with two concentric layers of linear magnetic media: susceptibility $\chi_{m1}$ from $a$ to $b$, and $\chi_{m2}$ from $b$ to $c$. Find the magnetic field in both media.

##### Practice 6.4-C (Parallel to Problem 6.17)
A solid cylindrical wire of radius $a$ carries a non-uniform free current density $\mathbf{J}_f = C s^2 \hat{\mathbf{z}}$. The wire has magnetic susceptibility $\chi_m$. Find the bound current density $\mathbf{J}_b$ and surface current $\mathbf{K}_b$.

##### Practice 6.4-D (Parallel to Problem 6.18)
An infinitely long cylinder of linear magnetic material of relative permeability $\mu_r$ is placed in a uniform transverse external field $\mathbf{B}_0 = B_0\hat{\mathbf{x}}$. Find the field inside the cylinder.

##### Practice 6.4-E (Parallel to Problem 6.19)
Estimate the diamagnetic susceptibility of solid sodium chloride ($\text{NaCl}$) using the classical orbital model, given the ionic radii of $\text{Na}^+$ and $\text{Cl}^-$.

---

### 6.4.2 Ferromagnetism

#### Original Questions with Solutions

##### Problem 6.20
**Statement:**  
How can a permanent ferromagnet be demagnetized so that $\mathbf{M} = \mathbf{0}$ when the applied current is removed ($I = 0$)?

**Solution:**  
Two standard methods exist:
1. **Thermal Demagnetization:** Heat the ferromagnetic material above its Curie temperature ($770^\circ\text{C}$ for iron). Thermal fluctuations completely disrupt the domain alignment, causing a phase transition to the paramagnetic phase. Subsequent cooling in the absence of an external magnetic field leaves the domains randomly oriented with zero net magnetization.
2. **AC Demagnetization (Degaussing):** Place the sample inside a coil driven by an alternating current. Slowly ramp down the amplitude of the alternating current to zero. The material traces out successively smaller hysteresis loops in the $B$-$H$ plane, centering on the origin and leaving $M = 0$ at $H = 0$.

---

##### Problem 6.21
**Statement:**  
(a) Show that the energy of a permanent magnetic dipole $\mathbf{m}$ in a magnetic field $\mathbf{B}$ is $U = -\mathbf{m}\cdot\mathbf{B}$.  
(b) Show that the interaction energy of two dipoles $\mathbf{m}_1$ and $\mathbf{m}_2$ separated by displacement $\mathbf{r}$ is:
$$U = \frac{\mu_0}{4\pi r^3}\left[\mathbf{m}_1\cdot\mathbf{m}_2 - 3(\mathbf{m}_1\cdot\hat{\mathbf{r}})(\mathbf{m}_2\cdot\hat{\mathbf{r}})\right]$$
(c) Express the interaction energy in terms of the angles $\theta_1$ and $\theta_2$ shown in Fig. 6.30, and determine the stable configuration of two dipoles held a fixed distance apart but free to rotate.  
(d) How would a large collection of compass needles mounted at regular intervals along a straight line align themselves?

**Solution:**  
(a) The work required to rotate a magnetic dipole against the magnetic torque $\mathbf{N} = \mathbf{m}\times\mathbf{B}$ from a reference perpendicular orientation to angle $\theta$ is:
$$U = -\int \mathbf{N}\cdot d\boldsymbol{\theta} = -\int_{\pi/2}^\theta (-m B\sin\theta')d\theta' = -m B\cos\theta = -\mathbf{m}\cdot\mathbf{B}$$

(b) Using $U = -\mathbf{m}_2\cdot\mathbf{B}_1(\mathbf{r})$ with the dipole field $\mathbf{B}_1$:
$$\mathbf{B}_1 = \frac{\mu_0}{4\pi r^3}\left[3(\mathbf{m}_1\cdot\hat{\mathbf{r}})\hat{\mathbf{r}} - \mathbf{m}_1\right]$$
$$U = -\mathbf{m}_2\cdot\left(\frac{\mu_0}{4\pi r^3}\left[3(\mathbf{m}_1\cdot\hat{\mathbf{r}})\hat{\mathbf{r}} - \mathbf{m}_1\right]\right) = \frac{\mu_0}{4\pi r^3}\left[\mathbf{m}_1\cdot\mathbf{m}_2 - 3(\mathbf{m}_1\cdot\hat{\mathbf{r}})(\mathbf{m}_2\cdot\hat{\mathbf{r}})\right]$$

(c) Let $\mathbf{r}$ lie along the $x$-axis ($\hat{\mathbf{r}} = \hat{\mathbf{x}}$). The dipoles lie in the $xy$-plane making angles $\theta_1$ and $\theta_2$ with $\hat{\mathbf{x}}$:
$$\mathbf{m}_1 = m_1(\cos\theta_1\hat{\mathbf{x}} + \sin\theta_1\hat{\mathbf{y}}), \quad \mathbf{m}_2 = m_2(\cos\theta_2\hat{\mathbf{x}} + \sin\theta_2\hat{\mathbf{y}})$$
$$\mathbf{m}_1\cdot\mathbf{m}_2 = m_1 m_2 \cos(\theta_1 - \theta_2)$$
$$(\mathbf{m}_1\cdot\hat{\mathbf{x}})(\mathbf{m}_2\cdot\hat{\mathbf{x}}) = m_1 m_2 \cos\theta_1 \cos\theta_2$$
$$U = \frac{\mu_0 m_1 m_2}{4\pi r^3}\left[ \cos(\theta_1 - \theta_2) - 3\cos\theta_1\cos\theta_2 \right] = \frac{\mu_0 m_1 m_2}{4\pi r^3}\left[\sin\theta_1\sin\theta_2 - 2\cos\theta_1\cos\theta_2\right]$$
To find the minimum, take partial derivatives:
$$\frac{\partial U}{\partial \theta_1} \propto \cos\theta_1\sin\theta_2 + 2\sin\theta_1\cos\theta_2 = 0$$
$$\frac{\partial U}{\partial \theta_2} \propto \sin\theta_1\cos\theta_2 + 2\cos\theta_1\sin\theta_2 = 0$$
Subtracting the two equations gives $\sin(\theta_1 - \theta_2) = 0 \implies \theta_1 = \theta_2$.  
Substituting $\theta_1 = \theta_2 \equiv \theta$:
$$U(\theta) = \frac{\mu_0 m_1 m_2}{4\pi r^3}[\sin^2\theta - 2\cos^2\theta] = \frac{\mu_0 m_1 m_2}{4\pi r^3}[1 - 3\cos^2\theta]$$
This is minimized when $\cos^2\theta = 1 \implies \theta = 0$ or $\pi$.  
Thus, the stable configuration is collinear alignment along the axis connecting them ($\to \quad \to$).

(d) For a line of compass needles along the $x$-axis, each needle aligns head-to-tail along the axis of the line ($\to \to \to \to \dots$).

---

#### Practice Questions (Without Answers)

##### Practice 6.4-F (Parallel to Problem 6.20)
Explain how mechanical shock or vibration can demagnetize a magnetized ferromagnetic rod.

##### Practice 6.4-G (Parallel to Problem 6.21)
Four identical magnetic dipoles $m$ are pinned at the corners of a square of side $a$, constrained to rotate in the plane of the square. Determine the minimum-energy ground state orientation of the four dipoles.

---

## Chapter 6 Supplementary Topics

### Original Questions with Solutions

##### Problem 6.22
**Statement:**  
Derive $\mathbf{F} = \boldsymbol{\nabla}(\mathbf{m}\cdot\mathbf{B})$ using index notation and the Levi-Civita permutation symbol.

**Solution:**  
The magnetic force on a loop is $\mathbf{F} = I \oint (d\mathbf{l}\times\mathbf{B})$. Expand $\mathbf{B}$ to first order around the origin $\mathbf{r}_0$:
$$B_k(\mathbf{r}) \approx B_k(\mathbf{0}) + r_l \nabla_l B_k(\mathbf{0})$$
The $i$-th component of the force is:
$$F_i = I \oint \epsilon_{ijk} dl_j B_k(\mathbf{r}) = I \epsilon_{ijk} \nabla_l B_k \oint r_l dl_j$$
Using the loop integral identity $\oint r_l dl_j = -\epsilon_{ljm} a_m$, where $\mathbf{a}$ is the vector area of the loop ($\mathbf{m} = I\mathbf{a}$):
$$F_i = \epsilon_{ijk} \nabla_l B_k (-\epsilon_{ljm} m_m) = -\epsilon_{kij}\epsilon_{lmj} m_m \nabla_l B_k$$
Using the contraction identity $\epsilon_{kij}\epsilon_{lmj} = \delta_{kl}\delta_{im} - \delta_{km}\delta_{il}$:
$$F_i = -(\delta_{kl}\delta_{im} - \delta_{km}\delta_{il}) m_m \nabla_l B_k = -m_i \nabla_k B_k + m_k \nabla_i B_k$$
Since $\boldsymbol{\nabla}\cdot\mathbf{B} = 0$, the first term vanishes ($\nabla_k B_k = 0$).  
The second term gives:
$$F_i = m_k \nabla_i B_k = \nabla_i (m_k B_k) = [\boldsymbol{\nabla}(\mathbf{m}\cdot\mathbf{B})]_i \implies \mathbf{F} = \boldsymbol{\nabla}(\mathbf{m}\cdot\mathbf{B})$$

---

##### Problem 6.23
**Statement:**  
Prove $\mathbf{F} = \boldsymbol{\nabla}(\mathbf{m}\cdot\mathbf{B})$ using Stokes' theorem applied to current loops.

**Solution:**  
From the vector identity for closed loop line integrals:
$$\oint (d\mathbf{l}\times\mathbf{v}) = \int [(\boldsymbol{\nabla}\cdot\mathbf{v})d\mathbf{a} - \boldsymbol{\nabla}(\mathbf{v}\cdot d\mathbf{a})]$$
Setting $\mathbf{v} = \mathbf{B}$:
$$\mathbf{F} = I \oint (d\mathbf{l}\times\mathbf{B}) = I \int [(\boldsymbol{\nabla}\cdot\mathbf{B})d\mathbf{a} - \boldsymbol{\nabla}(\mathbf{B}\cdot d\mathbf{a})] = -I \int \boldsymbol{\nabla}(\mathbf{B}\cdot d\mathbf{a})$$
Taking the derivative with respect to loop position coordinates $\mathbf{r}_0$, for an infinitesimal loop the field variation across the area is negligible, so $\mathbf{B}$ is evaluated at the center:
$$\mathbf{F} = I \boldsymbol{\nabla}_0 \int (\mathbf{B}(\mathbf{r}_0)\cdot d\mathbf{a}) = \boldsymbol{\nabla}_0 \left[ \mathbf{B}(\mathbf{r}_0)\cdot \left(I \int d\mathbf{a}\right) \right] = \boldsymbol{\nabla}(\mathbf{m}\cdot\mathbf{B})$$

---

##### Problem 6.24
**Statement:**  
Two identical donut-shaped magnets of mass $m_d$ and dipole moment $\mathbf{m} = m\hat{\mathbf{z}}$ slide on a vertical rod.  
(a) If two magnets are placed on the rod in opposition, at what height $z$ does the upper magnet float?  
(b) If a third identical magnet is added on top, what is the ratio of the upper floating gap to the lower floating gap?

**Solution:**  
(a) The repulsive force between two coaxial opposing dipoles separated by distance $z$ is:
$$F = \frac{3\mu_0 m^2}{2\pi z^4}$$
Equating this to the weight $m_d g$:
$$\frac{3\mu_0 m^2}{2\pi z^4} = m_d g \implies z = \left( \frac{3\mu_0 m^2}{2\pi m_d g} \right)^{1/4}$$
(b) Let the positions of the three magnets be $z_1 = 0$, $z_2 = h_1$, and $z_3 = h_1 + h_2$, with moments pointing alternately ($+m, -m, +m$).  
For the middle magnet (mass $m_d$), supported from below by magnet 1 and pushed down by magnet 3 and gravity:
$$\frac{3\mu_0 m^2}{2\pi h_1^4} - \frac{3\mu_0 m^2}{2\pi h_2^4} = m_d g$$
For the top magnet (mass $m_d$), repelled upward by magnet 2 and attracted downward by magnet 1:
$$\frac{3\mu_0 m^2}{2\pi h_2^4} - \frac{3\mu_0 m^2}{2\pi (h_1 + h_2)^4} = m_d g$$
Setting $x = h_2/h_1$ and equating the normalized forces:
$$\frac{1}{x^4} - \frac{1}{(1+x)^4} = \frac{1}{2}\left( 1 - \frac{1}{(1+x)^4} \right) \implies x = \frac{h_2}{h_1} \approx 0.8501$$

---

##### Problem 6.25
**Statement:**  
Two particles of charge $q$ and magnetic dipole moment $\mathbf{m} = m\hat{\mathbf{z}}$ are constrained to move along the $z$-axis.  
(a) Find the equilibrium separation distance.  
(b) Calculate the equilibrium separation for two electrons.  
(c) Can two electrons form a stable bound state this way?

**Solution:**  
(a) The electrostatic repulsion is:
$$F_e = \frac{1}{4\pi\varepsilon_0}\frac{q^2}{z^2}$$
For parallel coaxial dipoles, the magnetic force is attractive:
$$F_m = \frac{3\mu_0 m^2}{2\pi z^4}$$
Equating forces:
$$\frac{q^2}{4\pi\varepsilon_0 z^2} = \frac{3\mu_0 m^2}{2\pi z^4} \implies z^2 = \frac{6\mu_0 \varepsilon_0 m^2}{q^2} = \frac{6 m^2}{c^2 q^2} \implies z = \frac{\sqrt{6} m}{c q}$$
(b) For an electron, $q = e = 1.602 \times 10^{-19}\text{ C}$, $m = \mu_B = \frac{e\hbar}{2m_e} \approx 9.274 \times 10^{-24}\text{ J/T}$:
$$z = \frac{\sqrt{6}(9.274 \times 10^{-24}\text{ J/T})}{(3 \times 10^8\text{ m/s})(1.602 \times 10^{-19}\text{ C})} \approx 4.72 \times 10^{-13}\text{ m}$$
(c) No. The equilibrium is unstable: if $z$ decreases slightly, $F_m \propto 1/z^4$ dominates over $F_e \propto 1/z^2$, causing the particles to collapse toward each other. Furthermore, Earnshaw's theorem and the Pauli exclusion principle prevent stable electrostatic/magnetostatic binding.

---

##### Problem 6.26
**Statement:**  
Use the formal transcription between electrostatics and magnetostatics:
$$\mathbf{D} \to \mathbf{B}, \quad \mathbf{E} \to \mathbf{H}, \quad \mathbf{P} \to \mu_0\mathbf{M}, \quad \varepsilon_0 \to \mu_0$$
to rederive:  
(a) The magnetic field inside a uniformly magnetized sphere ($\mathbf{B} = \frac{2}{3}\mu_0\mathbf{M}$).  
(b) The field inside a sphere of linear magnetic material placed in a uniform field $\mathbf{B}_0$.  
(c) The average magnetic field over a sphere due to steady internal currents.

**Solution:**  
(a) For a uniformly polarized dielectric sphere, $\mathbf{E} = -\frac{1}{3\varepsilon_0}\mathbf{P}$, so:
$$\mathbf{D} = \varepsilon_0\mathbf{E} + \mathbf{P} = -\frac{1}{3}\mathbf{P} + \mathbf{P} = \frac{2}{3}\mathbf{P}$$
Applying the transcription $\mathbf{D} \to \mathbf{B}$ and $\mathbf{P} \to \mu_0\mathbf{M}$:
$$\mathbf{B} = \frac{2}{3}\mu_0\mathbf{M}$$

(b) For a dielectric sphere in a uniform external field $\mathbf{E}_0$, the internal field is:
$$\mathbf{E} = \frac{3}{\varepsilon_r + 2}\mathbf{E}_0$$
Transcribing to auxiliary magnetic fields where $\mathbf{E} \to \mathbf{H}$ and $\varepsilon_r \to \mu_r$:
$$\mathbf{H} = \frac{3}{\mu_r + 2}\mathbf{H}_0$$
Multiplying by $\mu = \mu_r \mu_0$ with $\mathbf{B}_0 = \mu_0 \mathbf{H}_0$:
$$\mathbf{B} = \left(\frac{3\mu_r}{\mu_r + 2}\right)\mathbf{B}_0$$

(c) The average electric field inside a sphere containing dipole moment $\mathbf{p}$ is $\langle \mathbf{E} \rangle = -\frac{1}{4\pi\varepsilon_0}\frac{\mathbf{p}}{R^3}$.  
Transcribing $\langle \mathbf{E} \rangle \to \langle \mathbf{H} \rangle$, $\mathbf{p} \to \mathbf{m}$, and $\varepsilon_0 \to \mu_0$:
$$\langle \mathbf{H} \rangle = -\frac{1}{4\pi\mu_0}\frac{\mu_0\mathbf{m}}{R^3} = -\frac{\mathbf{m}}{4\pi R^3}$$
Using $\mathbf{B} = \mu_0(\mathbf{H} + \mathbf{M})$ with $\mathbf{M} = \frac{\mathbf{m}}{\frac{4}{3}\pi R^3}$:
$$\langle \mathbf{B} \rangle = \mu_0\left( -\frac{\mathbf{m}}{4\pi R^3} + \frac{3\mathbf{m}}{4\pi R^3} \right) = \frac{\mu_0}{4\pi}\frac{2\mathbf{m}}{R^3}$$

---

##### Problem 6.27
**Statement:**  
Compare the integrals for the electric field of a uniform volume charge $\rho$, the potential of a uniform polarization $\mathbf{P}$, and the vector potential of a uniform magnetization $\mathbf{M}$. Show how knowledge of the field of a uniformly charged sphere immediately provides $V$ and $\mathbf{A}$ for uniformly polarized and magnetized spheres.

**Solution:**  
The three configurations involve the integral $\mathbf{I}(\mathbf{r}) \equiv \int_V \frac{\hat{\boldsymbol{\imath}}}{\imath^2} d\tau'$:
$$\mathbf{E}_\rho(\mathbf{r}) = \frac{\rho}{4\pi\varepsilon_0}\mathbf{I}(\mathbf{r})$$
$$V_P(\mathbf{r}) = \frac{\mathbf{P}}{4\pi\varepsilon_0}\cdot\mathbf{I}(\mathbf{r}) = \frac{1}{\rho}\mathbf{P}\cdot\mathbf{E}_\rho(\mathbf{r})$$
$$\mathbf{A}_M(\mathbf{r}) = \frac{\mu_0\mathbf{M}}{4\pi}\times\mathbf{I}(\mathbf{r}) = \frac{\mu_0\varepsilon_0}{\rho}\mathbf{M}\times\mathbf{E}_\rho(\mathbf{r})$$
For a uniformly charged sphere:
$$\mathbf{E}_\rho = \begin{cases}
\dfrac{\rho}{3\varepsilon_0}\mathbf{r}, & r \le R \\[1.5ex]
\dfrac{\rho R^3}{3\varepsilon_0 r^2}\hat{\mathbf{r}}, & r \ge R
\end{cases}$$
Direct substitution yields:
- For the polarized sphere:
  $$V(\mathbf{r}) = \begin{cases}
  \dfrac{1}{3\varepsilon_0}\mathbf{P}\cdot\mathbf{r}, & r \le R \\[1.5ex]
  \dfrac{R^3}{3\varepsilon_0 r^2}\mathbf{P}\cdot\hat{\mathbf{r}}, & r \ge R
  \end{cases}$$
- For the magnetized sphere:
  $$\mathbf{A}(\mathbf{r}) = \begin{cases}
  \dfrac{\mu_0}{3}\mathbf{M}\times\mathbf{r}, & r \le R \\[1.5ex]
  \dfrac{\mu_0 R^3}{3 r^2}\mathbf{M}\times\hat{\mathbf{r}}, & r \ge R
  \end{cases}$$

---

##### Problem 6.28
**Statement:**  
At the interface between two linear magnetic media of permeabilities $\mu_1$ and $\mu_2$ with no free surface current, magnetic field lines make angles $\theta_1$ and $\theta_2$ with the surface normal. Show that:
$$\frac{\tan\theta_2}{\tan\theta_1} = \frac{\mu_2}{\mu_1}$$

**Solution:**  
Let the boundary lie in the $xy$-plane with normal along $\hat{\mathbf{z}}$.  
Boundary conditions with $K_f = 0$:
1. Normal component of $\mathbf{B}$ is continuous ($\boldsymbol{\nabla}\cdot\mathbf{B} = 0$):
$$B_1^\perp = B_2^\perp \implies B_1\cos\theta_1 = B_2\cos\theta_2$$
2. Parallel component of $\mathbf{H}$ is continuous ($\boldsymbol{\nabla}\times\mathbf{H} = \mathbf{0}$):
$$H_1^\parallel = H_2^\parallel \implies \frac{B_1\sin\theta_1}{\mu_1} = \frac{B_2\sin\theta_2}{\mu_2}$$
Dividing the parallel equation by the normal equation:
$$\frac{\frac{B_1\sin\theta_1}{\mu_1}}{B_1\cos\theta_1} = \frac{\frac{B_2\sin\theta_2}{\mu_2}}{B_2\cos\theta_2} \implies \frac{\tan\theta_1}{\mu_1} = \frac{\tan\theta_2}{\mu_2} \implies \frac{\tan\theta_2}{\tan\theta_1} = \frac{\mu_2}{\mu_1}$$

---

##### Problem 6.29
**Statement:**  
A point dipole $\mathbf{m}$ is embedded at the center of a sphere of radius $R$ made of linear magnetic material with permeability $\mu$.  
(a) Show that the magnetic field inside the sphere ($0 < r \le R$) is:
$$\mathbf{B} = \frac{\mu}{4\pi}\left\{ \frac{1}{r^3}[3(\mathbf{m}\cdot\hat{\mathbf{r}})\hat{\mathbf{r}} - \mathbf{m}] + \frac{2(\mu_0 - \mu)\mathbf{m}}{(2\mu_0 + \mu)R^3} \right\}$$
(b) What is the magnetic field outside the sphere?

**Solution:**  
Use the magnetic scalar potential $W$ ($\mathbf{H} = -\boldsymbol{\nabla}W$):
- Inside ($r \le R$):
$$W_{\text{in}}(r,\theta) = \frac{m\cos\theta}{4\pi r^2} + A r\cos\theta$$
- Outside ($r \ge R$):
$$W_{\text{out}}(r,\theta) = \frac{C\cos\theta}{r^2}$$
Boundary conditions at $r = R$:
1. $W_{\text{in}}(R) = W_{\text{out}}(R)$:
$$\frac{m}{4\pi R^2} + A R = \frac{C}{R^2} \implies C = \frac{m}{4\pi} + A R^3$$
2. Continuity of $B_r = -\mu \frac{\partial W}{\partial r}$:
$$\mu\left( \frac{2m}{4\pi R^3} - A \right) = \mu_0\left( \frac{2C}{R^3} \right) = \frac{2\mu_0 m}{4\pi R^3} + 2\mu_0 A$$
Solving for $A$:
$$(\mu - \mu_0)\frac{2m}{4\pi R^3} = (2\mu_0 + \mu)A \implies A = \frac{2(\mu - \mu_0)m}{4\pi(2\mu_0 + \mu)R^3}$$
(a) Inside the sphere:
$$\mathbf{H}_{\text{in}} = -\boldsymbol{\nabla}W_{\text{in}} = \frac{1}{4\pi r^3}[3(\mathbf{m}\cdot\hat{\mathbf{r}})\hat{\mathbf{r}} - \mathbf{m}] - A\hat{\mathbf{z}}$$
Multiplying by $\mu$:
$$\mathbf{B}_{\text{in}} = \frac{\mu}{4\pi}\left\{ \frac{1}{r^3}[3(\mathbf{m}\cdot\hat{\mathbf{r}})\hat{\mathbf{r}} - \mathbf{m}] + \frac{2(\mu_0 - \mu)\mathbf{m}}{(2\mu_0 + \mu)R^3} \right\}$$
(b) Outside the sphere:
$$C = \frac{m}{4\pi}\left[ 1 + \frac{2(\mu - \mu_0)}{2\mu_0 + \mu} \right] = \frac{m}{4\pi}\left( \frac{3\mu}{2\mu_0 + \mu} \right)$$
$$\mathbf{B}_{\text{out}} = -\mu_0 \boldsymbol{\nabla}W_{\text{out}} = \frac{\mu_0}{4\pi r^3}\left(\frac{3\mu}{2\mu_0 + \mu}\right)[3(\mathbf{m}\cdot\hat{\mathbf{r}})\hat{\mathbf{r}} - \mathbf{m}]$$

---

##### Problem 6.30
**Statement:**  
Evaluate a grant proposal proposing to differentiate between the Ampère model (microscopic current loops) and the Gilbert model (separated magnetic charges) of magnetization inside an iron cylinder ($L = 10R$, uniform axial magnetization $\mathbf{M}$) by measuring the magnetic field in an excavated cavity. Would you fund the project, and if so, what cavity geometry is required?

**Solution:**  
Recommendation: **Fund the proposal**, provided a needle-shaped cavity parallel to the magnetization axis is used.

**Technical Evaluation:**  
Exterior fields produced by Ampèrian and Gilbert dipoles are identical, but their macroscopic interior fields differ:
- Ampère model: $\mathbf{B}_{\text{Amp}} = \mu_0(\mathbf{H} + \mathbf{M})$
- Gilbert model: $\mathbf{B}_{\text{Gil}} = \mu_0\mathbf{H}$ (where magnetic charge density acts as the source)

By Problem 6.13, the field inside an excavated cavity depends on its geometry:
1. **Spherical cavity:** Modifies the field in both models by internal polarization corrections.
2. **Wafer cavity (perpendicular to $\mathbf{M}$):** Enforces continuity of $B^\perp$, measuring $B_{\text{medium}}$ which matches between models due to boundary conditions.
3. **Needle cavity (parallel to $\mathbf{M}$):** Because the ends are far away, the boundary condition enforces continuity of $H^\parallel$ across the long walls. Inside a needle cavity, $\mathbf{B}_{\text{cavity}} = \mu_0 \mathbf{H}_0$.  
   - For an Ampèrian medium, the needle cavity reveals a field in the direction of $\mathbf{H}_0$, which inside a long rod is strongly positive and dominated by $\mathbf{B}_0$.  
   - For a Gilbert medium, $\mathbf{B}$ inside the needle points opposite to $\mathbf{M}$ because the magnetic poles at the ends produce a demagnetizing field.

A small needle-shaped cavity parallel to the axis allows a direct experimental test of whether the interior field lines are continuous through the atomic dipoles.

---

#### Practice Questions (Without Answers)

##### Practice 6.H (Parallel to Problem 6.22)
Using index notation, derive an expression for the net torque $\mathbf{N} = \oint \mathbf{r}\times (I d\mathbf{l}\times\mathbf{B})$ on an arbitrary localized planar current loop in a non-uniform field up to first order in field derivatives.

##### Practice 6.I (Parallel to Problem 6.24)
A small permanent magnet of mass $m$ and dipole moment $\mathbf{m} = m_0\hat{\mathbf{z}}$ is placed directly above a large, flat superconductor occupying the half-space $z < 0$, which acts as a perfect diamagnet ($B=0$ inside). Determine the equilibrium levitation height $z$ of the magnet.

##### Practice 6.J (Parallel to Problem 6.25)
Two particles of equal mass $m$, charge $q$, and magnetic moment $\mathbf{m} = m_0\hat{\mathbf{z}}$ are released from rest on the $z$-axis at initial separation $d > z_{\text{eq}}$. Write the equation of motion for their separation distance $z(t)$.

##### Practice 6.K (Parallel to Problem 6.26)
Using the transcription rules between electrostatic and magnetostatic media, determine the magnetic field inside a dielectric ellipsoidal shell with uniform frozen-in magnetization.

##### Practice 6.L (Parallel to Problem 6.27)
Using the integral relation for uniformly magnetized objects, write down the vector potential $\mathbf{A}$ inside and outside an infinitely long uniformly magnetized cylinder of elliptical cross-section.

##### Practice 6.M (Parallel to Problem 6.28)
A uniform magnetic field in medium 1 ($\mu_1 = 4\mu_0$) approaches a plane boundary with medium 2 ($\mu_2 = \mu_0$) at an angle of $30^\circ$ to the interface normal. Determine the angle of the refracted field lines in medium 2.

##### Practice 6.N (Parallel to Problem 6.29)
A point magnetic dipole $\mathbf{m}$ is placed at the center of a spherical cavity of radius $R$ hollowed out of an infinite linear magnetic medium with permeability $\mu$. Find the magnetic field inside the cavity.

##### Practice 6.O (Parallel to Problem 6.30)
Determine the magnetic field inside a needle-shaped cavity cut into an iron sphere with uniform magnetization $\mathbf{M}_0$ if the needle axis is inclined at an angle $\alpha$ relative to $\mathbf{M}_0$.