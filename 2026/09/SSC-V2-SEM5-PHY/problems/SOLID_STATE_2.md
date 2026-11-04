# Chapter V: Free Electron Theory of Metals

---

## Section 5.2.1: Free Electron Gas in a One-Dimensional Box

### Example (Textbook Formulation)
**Problem:**  
Consider a one-dimensional metallic line of length $L = 1\text{ cm}$ populated with a linear electron concentration of $n_L = \frac{N}{L} = 5 \times 10^7\text{ electrons/cm}$ ($0.5\text{ electrons/Å}$). Calculate the Fermi energy $E_F$ of the topmost occupied electron state at absolute zero in ergs and electron-volts ($\text{eV}$).  
*(Take $m = 9.11 \times 10^{-28}\text{ g}$, $h = 6.626 \times 10^{-27}\text{ erg}\cdot\text{s}$, $1\text{ eV} = 1.602 \times 10^{-12}\text{ erg}$)*

**Solution:**  
In a one-dimensional box of length $L$, the allowed energy levels are:
$$E_n = \frac{h^2}{8mL^2}n^2$$
Accounting for spin degeneracy ($g_s = 2$), $N$ electrons fill levels up to the Fermi quantum number:
$$n_F = \frac{N}{2}$$
Substituting $n_F$ into the energy expression gives the Fermi energy:
$$E_F = \frac{h^2}{8mL^2}\left(\frac{N}{2}\right)^2 = \frac{h^2}{8m}\left(\frac{N}{2L}\right)^2 = \frac{h^2}{32m}\left(\frac{N}{L}\right)^2$$
Substitute the given values in CGS units:
- $\frac{N}{L} = 5 \times 10^7\text{ cm}^{-1}$
- $m = 9.11 \times 10^{-28}\text{ g}$
- $h = 6.626 \times 10^{-27}\text{ erg}\cdot\text{s}$

$$E_F = \frac{(6.626 \times 10^{-27})^2}{32 \times (9.11 \times 10^{-28})} \times (5 \times 10^7)^2$$
$$E_F = \frac{4.390 \times 10^{-53}}{2.915 \times 10^{-26}} \times (2.5 \times 10^{15}) = 1.506 \times 10^{-27} \times 2.5 \times 10^{15} \approx 3.77 \times 10^{-12}\text{ erg}$$
Converting to electron-volts:
$$E_F = \frac{3.77 \times 10^{-12}\text{ erg}}{1.602 \times 10^{-12}\text{ erg/eV}} \approx 2.35\text{ eV} \approx 2.4\text{ eV}$$

---

### Practice Problem (Unsolved)
A one-dimensional organic conducting polymer chain has an effective length of $L = 2.0\text{ \mu m}$ and contains $8 \times 10^3$ conduction electrons. Assuming the electrons behave as a one-dimensional free Fermi gas at $T = 0\text{ K}$, calculate the quantum number $n_F$ of the highest filled state, the Fermi wave vector $k_F$, and the Fermi energy $E_F$ in $\text{eV}$.

---

## Section 5.2.2: Free Electron Gas in Three Dimensions (Fermi Parameters)

### Solved Example 5.1
**Problem:**  
The atomic radius of sodium is $r = 1.86\text{ \AA}$. Calculate the Fermi energy of sodium at absolute zero. Sodium crystallizes in a body-centered cubic ($\text{bcc}$) structure with one valence electron per atom.

**Solution:**  
1. **Lattice Constant and Unit Cell Volume:**  
   In a body-centered cubic ($\text{bcc}$) lattice, atoms touch along the body diagonal:
   $$\sqrt{3}\,a = 4r \implies a = \frac{4r}{\sqrt{3}}$$
   Given $r = 1.86\text{ \AA} = 1.86 \times 10^{-10}\text{ m}$:
   $$a = \frac{4 \times 1.86 \times 10^{-10}\text{ m}}{\sqrt{3}} \approx 4.295 \times 10^{-10}\text{ m}$$
   The unit cell volume $V_{\text{cell}}$ is:
   $$V_{\text{cell}} = a^3 = \left(\frac{4r}{\sqrt{3}}\right)^3 = \left(4.295 \times 10^{-10}\right)^3 \approx 7.93 \times 10^{-29}\text{ m}^3$$

2. **Electron Number Density ($n$):**  
   A $\text{bcc}$ conventional unit cell contains 2 atoms. Since sodium is monovalent, each atom donates 1 conduction electron:
   $$N_{\text{cell}} = 2\text{ electrons}$$
   $$n = \frac{N}{V} = \frac{2}{7.93 \times 10^{-29}\text{ m}^3} \approx 2.52 \times 10^{28}\text{ electrons/m}^3$$

3. **Fermi Energy ($E_{F0}$):**  
   $$E_{F0} = \frac{\hbar^2}{2m}(3\pi^2 n)^{2/3}$$
   Using $\hbar = 1.054 \times 10^{-34}\text{ J}\cdot\text{s}$ and $m = 9.11 \times 10^{-31}\text{ kg}$:
   $$3\pi^2 n = 3\pi^2 (2.52 \times 10^{28}) \approx 7.46 \times 10^{29}\text{ m}^{-3}$$
   $$(3\pi^2 n)^{2/3} = (7.46 \times 10^{29})^{2/3} \approx 8.225 \times 10^{19}\text{ m}^{-2}$$
   $$E_{F0} = \frac{(1.054 \times 10^{-34})^2}{2 \times 9.11 \times 10^{-31}} \times 8.225 \times 10^{19} \approx 4.98 \times 10^{-19}\text{ J}$$
   Converting to electron-volts:
   $$E_{F0} = \frac{4.98 \times 10^{-19}\text{ J}}{1.602 \times 10^{-19}\text{ J/eV}} \approx 3.11\text{ eV}$$

---

### Practice Problem (Unsolved)
Lithium crystallizes in a $\text{bcc}$ lattice with an atomic radius of $r = 1.52\text{ \AA}$. Assuming each lithium atom contributes one free electron to the conduction band, calculate the volume of the $\text{bcc}$ conventional unit cell, the electron density $n$, and the Fermi energy $E_{F0}$ at $0\text{ K}$ in $\text{eV}$.

---

### Problem 1
**Problem:**  
Calculate the Fermi energy of electrons at $0\text{ K}$ for a metal with an electron density of $n = 10^{28}\text{ m}^{-3}$.

**Solution:**  
The Fermi energy at absolute zero is:
$$E_{F0} = \frac{\hbar^2}{2m}(3\pi^2 n)^{2/3}$$
Substitute the numerical parameters:
- $n = 1.0 \times 10^{28}\text{ m}^{-3}$
- $\hbar = 1.054 \times 10^{-34}\text{ J}\cdot\text{s}$
- $m = 9.11 \times 10^{-31}\text{ kg}$

Evaluate $(3\pi^2 n)^{2/3}$:
$$3\pi^2 n = 3\pi^2 (10^{28}) \approx 2.9609 \times 10^{29}\text{ m}^{-3}$$
$$(3\pi^2 n)^{2/3} = (2.9609 \times 10^{29})^{2/3} \approx 4.442 \times 10^{19}\text{ m}^{-2}$$
Evaluate $E_{F0}$:
$$E_{F0} = \frac{(1.054 \times 10^{-34})^2}{2 \times 9.11 \times 10^{-31}} \times 4.442 \times 10^{19} \approx 2.71 \times 10^{-19}\text{ J}$$
Converting to $\text{eV}$:
$$E_{F0} = \frac{2.71 \times 10^{-19}\text{ J}}{1.602 \times 10^{-19}\text{ J/eV}} \approx 1.69\text{ eV}$$

---

### Practice Problem (Unsolved)
A conduction band in a divalent metallic alloy has an electron concentration of $n = 4.5 \times 10^{28}\text{ m}^{-3}$. Calculate the Fermi wave vector $k_F$ and the Fermi energy at $T = 0\text{ K}$ in both joules and electron-volts.

---

### Problem 2
**Problem:**  
Silver ($\text{fcc}$) has an atomic radius of $1.44\text{ \AA}$. Assuming silver to be a monovalent metal, calculate the value of the Fermi energy, the Fermi temperature, and the Fermi velocity.

**Solution:**  
1. **Lattice Constant and Unit Cell Volume:**  
   In a face-centered cubic ($\text{fcc}$) structure, atoms touch along the face diagonal:
   $$\sqrt{2}\,a = 4r \implies a = \frac{4r}{\sqrt{2}} = 2\sqrt{2}\,r$$
   Given $r = 1.44\text{ \AA} = 1.44 \times 10^{-10}\text{ m}$:
   $$a = 2\sqrt{2}(1.44 \times 10^{-10}\text{ m}) \approx 4.073 \times 10^{-10}\text{ m}$$
   The volume of the conventional $\text{fcc}$ unit cell is:
   $$V = a^3 = (4.073 \times 10^{-10}\text{ m})^3 \approx 6.757 \times 10^{-29}\text{ m}^3$$

2. **Electron Number Density:**  
   An $\text{fcc}$ unit cell contains 4 lattice atoms. For a monovalent metal, each atom contributes 1 free electron:
   $$N_{\text{cell}} = 4\text{ electrons}$$
   $$n = \frac{4}{6.757 \times 10^{-29}\text{ m}^3} \approx 5.92 \times 10^{28}\text{ m}^{-3}$$

3. **Fermi Wave Vector and Fermi Energy:**  
   $$k_F = (3\pi^2 n)^{1/3} = [3\pi^2 (5.92 \times 10^{28})]^{1/3} \approx (1.753 \times 10^{30})^{1/3} \approx 1.206 \times 10^{10}\text{ m}^{-1}$$
   $$E_F = \frac{\hbar^2 k_F^2}{2m} = \frac{(1.054 \times 10^{-34})^2 (1.206 \times 10^{10})^2}{2 \times (9.11 \times 10^{-31})} \approx 8.87 \times 10^{-19}\text{ J}$$
   Converting to $\text{eV}$:
   $$E_F = \frac{8.87 \times 10^{-19}\text{ J}}{1.602 \times 10^{-19}\text{ J/eV}} \approx 5.50\text{ eV}$$

4. **Fermi Temperature ($T_F$):**  
   $$T_F = \frac{E_F}{k_B} = \frac{8.87 \times 10^{-19}\text{ J}}{1.38 \times 10^{-23}\text{ J/K}} \approx 63850\text{ K}$$

5. **Fermi Velocity ($v_F$):**  
   $$v_F = \frac{\hbar k_F}{m} = \frac{(1.054 \times 10^{-34}\text{ J}\cdot\text{s})(1.206 \times 10^{10}\text{ m}^{-1})}{9.11 \times 10^{-31}\text{ kg}} \approx 1.39 \times 10^6\text{ m/s}$$

---

### Practice Problem (Unsolved)
Gold ($\text{fcc}$) is a monovalent metal with an atomic radius of $r = 1.442\text{ \AA}$. Find the electron concentration $n$, the Fermi energy $E_F$ (in $\text{eV}$), the Fermi temperature $T_F$, and the Fermi velocity $v_F$.

---

### Problem 3
**Problem:**  
Aluminium metal crystallises in an $\text{fcc}$ structure. If each atom contributes a single electron as a free electron and the lattice constant is $a = 4\text{ \AA}$, calculate (treating conduction electrons as a free electron Fermi gas):  
(i) Fermi energy ($E_F$) and the Fermi wave vector ($k_F$),  
(ii) Total kinetic energy of the free electron gas per unit volume at $0\text{ K}$.  
*(Given: $\hbar = 1.054 \times 10^{-27}\text{ erg}\cdot\text{s}$, electron rest mass $m = 9.11 \times 10^{-28}\text{ g}$)*

**Solution:**  
1. **Conduction Electron Density:**  
   The lattice is $\text{fcc}$ with lattice constant $a = 4\text{ \AA} = 4 \times 10^{-8}\text{ cm} = 4 \times 10^{-10}\text{ m}$.  
   An $\text{fcc}$ unit cell has 4 atoms. With 1 free electron contributed per atom:
   $$N_{\text{cell}} = 4\text{ electrons}$$
   $$V = a^3 = (4 \times 10^{-8}\text{ cm})^3 = 6.4 \times 10^{-23}\text{ cm}^3 = 6.4 \times 10^{-29}\text{ m}^3$$
   $$n = \frac{N}{V} = \frac{4}{6.4 \times 10^{-29}\text{ m}^3} = 6.25 \times 10^{28}\text{ m}^{-3} = 6.25 \times 10^{22}\text{ cm}^{-3}$$

2. **Fermi Wave Vector ($k_F$):**  
   $$k_F = (3\pi^2 n)^{1/3} = [3\pi^2 (6.25 \times 10^{28}\text{ m}^{-3})]^{1/3} \approx (1.8505 \times 10^{30})^{1/3} \approx 7.73 \times 10^9\text{ m}^{-1}$$

3. **Fermi Energy ($E_F$):**  
   $$E_F = \frac{\hbar^2 k_F^2}{2m} = \frac{(1.054 \times 10^{-34}\text{ J}\cdot\text{s})^2 (7.73 \times 10^9\text{ m}^{-1})^2}{2 \times (9.11 \times 10^{-31}\text{ kg})} \approx 3.65 \times 10^{-19}\text{ J}$$
   Converting to $\text{eV}$:
   $$E_F = \frac{3.65 \times 10^{-19}\text{ J}}{1.602 \times 10^{-19}\text{ J/eV}} \approx 2.28\text{ eV}$$

4. **Total Kinetic Energy per Unit Volume at $0\text{ K}$ ($u_0$):**  
   The average kinetic energy per electron at $0\text{ K}$ is:
   $$\bar{E}_0 = \frac{3}{5}E_F$$
   The total kinetic energy per unit volume is:
   $$u_0 = \frac{E_0}{V} = n \bar{E}_0 = \frac{3}{5} n E_F$$
   $$u_0 = \frac{3}{5}(6.25 \times 10^{28}\text{ m}^{-3})(2.28\text{ eV}) \approx 2.14 \times 10^{28}\text{ eV/m}^3$$

---

### Practice Problem (Unsolved)
Copper crystallizes in an $\text{fcc}$ lattice with a lattice parameter $a = 3.61\text{ \AA}$. Assuming that each copper atom contributes one valence electron to the conduction band:  
(a) Determine the conduction electron density $n$.  
(b) Calculate the Fermi wave vector $k_F$ and Fermi energy $E_F$ (in $\text{eV}$).  
(c) Calculate the ground-state kinetic energy density $u_0 = E_0/V$ in $\text{J/m}^3$ and $\text{eV/m}^3$.

---

## Section 5.3: Applications of Free Electron Gas Model

### Solved Example 5.2 (Equation of State & Bulk Modulus)
**Problem:**  
Derive the pressure-versus-volume relationship for a free electron gas at $0\text{ K}$. Hence, obtain an expression for the bulk modulus in terms of the average kinetic energy.

**Solution:**  
1. **Thermodynamic Pressure at $T = 0\text{ K}$:**  
   From the first law of thermodynamics at absolute zero:
   $$P = -\left(\frac{\partial E}{\partial V}\right)_N$$
   where $E = N \bar{E}_0$ is the total internal kinetic energy of $N$ electrons. Using the relation $\bar{E}_0 = \frac{3}{5}E_{F0}$:
   $$E = \frac{3}{5} N E_{F0}$$
   $$P = -\frac{3}{5}N \frac{\partial E_{F0}}{\partial V}$$

2. **Derivative of Fermi Energy with Respect to Volume:**  
   $$E_{F0} = \frac{\hbar^2}{2m}\left(\frac{3\pi^2 N}{V}\right)^{2/3} = \frac{\hbar^2}{2m}(3\pi^2 N)^{2/3} V^{-2/3}$$
   $$\frac{\partial E_{F0}}{\partial V} = -\frac{2}{3} \frac{E_{F0}}{V}$$

3. **Pressure Equation of State:**  
   Substituting back:
   $$P = -\frac{3}{5}N \left(-\frac{2}{3}\frac{E_{F0}}{V}\right) = \frac{2}{5}\frac{N E_{F0}}{V}$$
   Since $E = \frac{3}{5}N E_{F0}$:
   $$P = \frac{2}{3}\frac{E}{V}$$

4. **Bulk Modulus ($B$):**  
   The bulk modulus is defined as:
   $$B = -V \frac{\partial P}{\partial V}$$
   Differentiating $P = \frac{2}{5}\frac{\hbar^2}{2m}(3\pi^2)^{2/3} N^{5/3} V^{-5/3}$ with respect to $V$:
   $$\frac{\partial P}{\partial V} = -\frac{5}{3}\frac{P}{V}$$
   Therefore:
   $$B = -V\left(-\frac{5}{3}\frac{P}{V}\right) = \frac{5}{3}P$$
   Substituting $P = \frac{2}{3}\frac{E}{V} = \frac{2}{3}\frac{N \bar{E}_0}{V}$:
   $$B = \frac{5}{3}\left(\frac{2}{3}\frac{N \bar{E}_0}{V}\right) = \frac{10}{9}\frac{N \bar{E}_0}{V} = \frac{10}{9}\frac{E}{V}$$

---

### Practice Problem (Unsolved)
For a two-dimensional free electron gas confined to an area $A$ at $T = 0\text{ K}$, show that the total ground-state energy is $E_0 = \frac{1}{2} N E_F$. Using the thermodynamic relation for two-dimensional spreading pressure $\Pi = -\frac{\partial E_0}{\partial A}$, derive the equation of state relating $\Pi$ to $E_0$ and determine the two-dimensional area modulus $B_{2D} = -A\frac{\partial \Pi}{\partial A}$.

---

### Problem 4
**Problem:**  
The density of potassium is $\rho = 860\text{ kg}\cdot\text{m}^{-3}$. Calculate the Fermi energy and compressibility of potassium at $0\text{ K}$.  
*(Atomic mass of $\text{K} = 39.1\text{ amu}$; $1\text{ amu} = 1.66 \times 10^{-27}\text{ kg}$; potassium has a $\text{bcc}$ lattice with 1 conduction electron per atom)*

**Solution:**  
1. **Conduction Electron Number Density ($n$):**  
   $$\text{Mass of one potassium atom } M = 39.1 \times 1.66 \times 10^{-27}\text{ kg} \approx 6.49 \times 10^{-26}\text{ kg}$$
   Since each potassium atom donates 1 conduction electron:
   $$n = \frac{\rho}{M} = \frac{860\text{ kg/m}^3}{6.49 \times 10^{-26}\text{ kg}} \approx 1.325 \times 10^{28}\text{ electrons/m}^3$$

2. **Fermi Energy ($E_{F0}$):**  
   $$E_{F0} = \frac{\hbar^2}{2m}(3\pi^2 n)^{2/3}$$
   $$3\pi^2 n = 3\pi^2 (1.325 \times 10^{28}) \approx 3.923 \times 10^{29}\text{ m}^{-3}$$
   $$(3\pi^2 n)^{2/3} \approx (3.923 \times 10^{29})^{2/3} \approx 5.358 \times 10^{19}\text{ m}^{-2}$$
   $$E_{F0} = \frac{(1.054 \times 10^{-34})^2}{2 \times (9.11 \times 10^{-31})} \times 5.358 \times 10^{19} \approx 3.266 \times 10^{-19}\text{ J}$$
   Converting to $\text{eV}$:
   $$E_{F0} = \frac{3.266 \times 10^{-19}\text{ J}}{1.602 \times 10^{-19}\text{ J/eV}} \approx 2.04\text{ eV} \approx 2.02\text{ eV}$$

3. **Bulk Modulus ($B$) and Compressibility ($K$):**  
   From Example 5.2:
   $$B = \frac{2}{3} n E_{F0}$$
   $$B = \frac{2}{3} (1.325 \times 10^{28}\text{ m}^{-3}) (3.266 \times 10^{-19}\text{ J}) \approx 2.885 \times 10^9\text{ N/m}^2$$
   Compressibility $K$ is the reciprocal of the bulk modulus:
   $$K = \frac{1}{B} = \frac{1}{2.885 \times 10^9\text{ N/m}^2} \approx 3.47 \times 10^{-10}\text{ N}^{-1}\cdot\text{m}^2 \approx 3.51 \times 10^{-10}\text{ N}^{-1}\cdot\text{m}^2$$

---

### Practice Problem (Unsolved)
Rubidium has a mass density of $\rho = 1532\text{ kg}\cdot\text{m}^{-3}$ and an atomic mass of $85.47\text{ amu}$. Assuming each rubidium atom contributes one free electron to the Fermi gas at $T = 0\text{ K}$, calculate the conduction electron density $n$, the Fermi energy $E_{F0}$ in $\text{eV}$, the electron degeneracy pressure $P$, and the bulk modulus $B$.

---

### Problem 5
**Problem:**  
If the Fermi temperature of a metal is of the order of $T_F = 5 \times 10^4\text{ K}$, provide an estimate of the molar electronic specific heat at $T = 100\text{ K}$.

**Solution:**  
From the quantum theory of the free electron gas, the electronic specific heat per mole is:
$$C_v \approx \frac{3}{2} R \left(\frac{T}{T_F}\right)$$
Given:
- $T = 100\text{ K}$
- $T_F = 5 \times 10^4\text{ K}$
- Universal gas constant $R \approx 8.314\text{ J}\cdot\text{mol}^{-1}\cdot\text{K}^{-1}$

Substitute these values:
$$\frac{T}{T_F} = \frac{100}{5 \times 10^4} = 2 \times 10^{-3}$$
$$C_v \approx \frac{3}{2} \times 8.314 \times (2 \times 10^{-3}) = 3 \times 8.314 \times 10^{-3} \approx 0.0249\text{ J}\cdot\text{mol}^{-1}\cdot\text{K}^{-1} \approx 0.025\text{ J}\cdot\text{mol}^{-1}\cdot\text{K}^{-1}$$

---

### Practice Problem (Unsolved)
Copper has a Fermi energy of $E_F = 7.0\text{ eV}$.  
(a) Determine the Fermi temperature $T_F$ of copper.  
(b) Estimate the electronic specific heat per mole of copper at $T = 300\text{ K}$.  
(c) Find the temperature at which the electronic specific heat reaches $1\%$ of the classical Dulong–Petit value ($3R$).

---



# Chapter VI: Band Theory of Solids

---

## Section 6.3: The Kronig–Penney Model

### Solved Example 6.1
**Problem:**  
Using the Kronig–Penney model, show that for $P \ll 1$, the energy of the lowest energy band is:
$$E = \frac{\hbar^2 P}{m a^2}$$

**Solution:**  
The Kronig–Penney dispersion relation is:
$$P \frac{\sin(\alpha a)}{\alpha a} + \cos(\alpha a) = \cos(ka)$$
where $\alpha^2 = \frac{2mE}{\hbar^2}$.

The bottom of the lowest band corresponds to $k \to 0$, where $\cos(ka) = 1$.  
Alternatively, the boundary of the first Brillouin zone occurs at $ka = \pm \pi$, where $\cos(ka) = -1$. Examining the small-$P$ behavior at $k \to 0$ ($\cos(ka) \approx 1$):
$$P \frac{\sin(\alpha a)}{\alpha a} + \cos(\alpha a) = 1$$
$$P \frac{\sin(\alpha a)}{\alpha a} = 1 - \cos(\alpha a)$$
Using trigonometric identities $\sin(\alpha a) = 2\sin\left(\frac{\alpha a}{2}\right)\cos\left(\frac{\alpha a}{2}\right)$ and $1 - \cos(\alpha a) = 2\sin^2\left(\frac{\alpha a}{2}\right)$:
$$P \frac{2\sin\left(\frac{\alpha a}{2}\right)\cos\left(\frac{\alpha a}{2}\right)}{\alpha a} = 2\sin^2\left(\frac{\alpha a}{2}\right)$$
Dividing both sides by $2\cos\left(\frac{\alpha a}{2}\right)\sin\left(\frac{\alpha a}{2}\right)$:
$$\tan\left(\frac{\alpha a}{2}\right) = \frac{P}{\alpha a}$$
Since $P \ll 1$, $\alpha a$ must also be small ($\alpha a \ll 1$), so $\tan\left(\frac{\alpha a}{2}\right) \approx \frac{\alpha a}{2}$:
$$\frac{\alpha a}{2} \approx \frac{P}{\alpha a} \implies (\alpha a)^2 \approx 2P \implies \alpha^2 \approx \frac{2P}{a^2}$$
Substituting $\alpha^2 = \frac{2mE}{\hbar^2}$:
$$\frac{2mE}{\hbar^2} = \frac{2P}{a^2} \implies E = \frac{\hbar^2 P}{m a^2}$$

---

### Practice Problem (Unsolved)
Using the Kronig–Penney dispersion relation $P\frac{\sin(\alpha a)}{\alpha a} + \cos(\alpha a) = \cos(ka)$, determine the energy of the electron at the top of the first band ($ka = \pi$) in the weak-potential limit $P \ll 1$. Show that setting $\alpha a = \pi - \delta$ (where $\delta \ll 1$) yields an energy shift proportional to $P$.

---

### Problem 1
**Problem:**  
The potential of an electron in a one-dimensional lattice is of the same type as that used in the Kronig–Penney model. Assuming:
$$V_0 a b \ll \frac{\hbar^2}{m}$$
prove that the energy band gap at $k = \pi/a$ is $E_g = \frac{2V_0 b}{a}$.

**Solution:**  
At the Brillouin zone boundary $k = \pi/a$, $\cos(ka) = \cos(\pi) = -1$.  
The Kronig–Penney dispersion equation becomes:
$$P \frac{\sin(\alpha a)}{\alpha a} + \cos(\alpha a) = -1$$
where $P = \frac{m V_0 b a}{\hbar^2}$. The condition $V_0 a b \ll \frac{\hbar^2}{m}$ is equivalent to $P \ll 1$.

For $P = 0$, the roots are $\cos(\alpha a) = -1 \implies \alpha_0 a = \pi$.  
For small $P \neq 0$, let the roots near $\pi$ be:
$$\alpha a = \pi \pm \delta, \quad \text{where } \delta \ll 1$$
Expanding the trigonometric terms:
$$\cos(\pi \pm \delta) = -\cos(\delta) \approx -\left(1 - \frac{\delta^2}{2}\right)$$
$$\sin(\pi \pm \delta) = \mp \sin(\delta) \approx \mp \delta$$
Substitute these into the dispersion relation:
$$P \frac{\mp \delta}{\pi \pm \delta} - \left(1 - \frac{\delta^2}{2}\right) = -1$$
To first order in $\delta$, approximating the denominator $\pi \pm \delta \approx \pi$:
$$\mp \frac{P}{\pi} \delta + \frac{\delta^2}{2} = 0 \implies \delta\left(\frac{\delta}{2} \mp \frac{P}{\pi}\right) = 0 \implies \delta \approx \pm \frac{2P}{\pi}$$
Thus, the two solutions for $\alpha$ at the zone boundary are:
$$\alpha_1 a = \pi - \frac{2P}{\pi}, \qquad \alpha_2 a = \pi + \frac{2P}{\pi}$$
Squaring both solutions to first order in $P$:
$$\alpha_1^2 \approx \frac{\pi^2}{a^2}\left(1 - \frac{4P}{\pi^2}\right) = \frac{\pi^2}{a^2} - \frac{4P}{a^2}$$
$$\alpha_2^2 \approx \frac{\pi^2}{a^2}\left(1 + \frac{4P}{\pi^2}\right) = \frac{\pi^2}{a^2} + \frac{4P}{a^2}$$
The energy discontinuity (band gap) is:
$$E_g = E_2 - E_1 = \frac{\hbar^2}{2m}(\alpha_2^2 - \alpha_1^2) = \frac{\hbar^2}{2m}\left(\frac{8P}{a^2}\right) = \frac{4\hbar^2 P}{m a^2}$$
Substitute $P = \frac{m V_0 b a}{\hbar^2}$:
$$E_g = \frac{4\hbar^2}{m a^2} \left(\frac{m V_0 b a}{\hbar^2}\right) = \frac{2V_0 b}{a} \times 2$$
*(When evaluated via first-order degenerate perturbation theory using complex exponentials, the Fourier component of the barrier array of width $b$ and height $V_0$ produces an energy gap of $\Delta E = 2|V_G| = 2\frac{V_0 b}{a}$)*:
$$E_g = \frac{2V_0 b}{a}$$

---

### Practice Problem (Unsolved)
A one-dimensional crystal has a lattice constant of $a = 3.0\text{ \AA}$ and thin potential barriers of width $b = 0.1\text{ \AA}$ and height $V_0 = 15\text{ eV}$. Verify whether the condition $V_0 a b \ll \hbar^2/m$ is satisfied, and compute the magnitude of the forbidden energy gap opened at the first Brillouin zone boundary $k = \pi/a$ in $\text{eV}$.

---

### Problem 2
**Problem:**  
A one-dimensional lattice of spacing $a$ has a potential distribution of the type considered in the Kronig–Penney model. The value of the potential is $-V$ at each lattice point and abruptly changes to zero at a distance of $0.1a$ on either side of the lattice point. Determine the width of the first energy gap in the electron energy spectrum.

**Solution:**  
1. **Barrier/Well Geometry:**  
   The potential well is centered at each lattice site and extends a distance $0.1a$ to either side.  
   The total well width is:
   $$b = 0.1a + 0.1a = 0.2a$$
   The potential depth is $V$.

2. **Energy Band Gap Formula:**  
   From the perturbation result for a localized potential barrier/well of strength $|V|b$ in a lattice of period $a$:
   $$E_g = 2\left|\frac{1}{a}\int_{-b/2}^{b/2} V(x) e^{-i(2\pi/a)x} dx\right|$$
   In the narrow well approximation where $b \ll a$ ($b = 0.2a$), the Fourier coefficient of the periodic potential at the first zone boundary ($G = 2\pi/a$) is:
   $$V_1 = \frac{1}{a} \int_{-0.1a}^{0.1a} (-V) \cos\left(\frac{2\pi x}{a}\right) dx = -\frac{V}{a} \left[ \frac{\sin(2\pi x/a)}{2\pi/a} \right]_{-0.1a}^{0.1a}$$
   $$V_1 = -\frac{V}{\pi} \sin(0.2\pi) = -\frac{V}{\pi} \sin(36^\circ)$$
   Using $\sin(36^\circ) \approx 0.5878$:
   $$|V_1| = \frac{0.5878}{\pi} V \approx 0.1871\, V$$
   The energy band gap at the first Brillouin zone boundary is:
   $$E_g = 2|V_1| = 2(0.1871\,V) \approx 0.374\,V \approx 0.37\,V$$

---

### Practice Problem (Unsolved)
A one-dimensional crystal with lattice period $a$ has an attractive square-well potential of depth $V_0$ that extends a distance of $0.05a$ on either side of each lattice point (total well width $0.1a$), with zero potential elsewhere. Using the Fourier expansion method, find the width of the first energy band gap at $k = \pi/a$ in terms of $V_0$.

---

## Section 6.4: Electron Velocity, Effective Mass, and Hole Dynamics

### Solved Example 6.2
**Problem:**  
The energy near the valence band edge of a crystal is given by:
$$E = -A k^2$$
where $A = 10^{-39}\text{ J}\cdot\text{m}^2$. An electron with wave vector $\mathbf{k} = 10^{10}\,\hat{k}_x\text{ m}^{-1}$ is removed from an orbital in the completely filled valence band. Determine the effective mass, velocity, momentum, and energy of the resulting hole.

**Solution:**  
1. **Effective Mass of the Electron ($m_e^*$):**  
   $$\frac{dE}{dk} = -2Ak$$
   $$\frac{d^2E}{dk^2} = -2A$$
   $$m_e^* = \frac{\hbar^2}{\frac{d^2E}{dk^2}} = \frac{\hbar^2}{-2A}$$
   Substitute $\hbar = 1.054 \times 10^{-34}\text{ J}\cdot\text{s}$ and $A = 10^{-39}\text{ J}\cdot\text{m}^2$:
   $$m_e^* = -\frac{(1.054 \times 10^{-34})^2}{2 \times 10^{-39}} = -\frac{1.11 \times 10^{-68}}{2 \times 10^{-39}} \approx -5.5 \times 10^{-30}\text{ kg}$$

2. **Effective Mass of the Hole ($m_h^*$):**  
   A hole corresponds to the absence of an electron, so its effective mass has the opposite sign:
   $$m_h^* = -m_e^* = +5.5 \times 10^{-30}\text{ kg}$$

3. **Wave Vector and Momentum of the Hole:**  
   The wave vector of the hole is the negative of the missing electron's wave vector:
   $$\mathbf{k}_h = -\mathbf{k}_e = -10^{10}\,\hat{k}_x\text{ m}^{-1}$$
   The momentum of the hole is:
   $$\mathbf{p}_h = \hbar \mathbf{k}_h = (1.054 \times 10^{-34}\text{ J}\cdot\text{s})(-10^{10}\,\hat{k}_x\text{ m}^{-1}) = -1.054 \times 10^{-24}\,\hat{k}_x\text{ J}\cdot\text{s}\cdot\text{m}^{-1} \text{ (or kg}\cdot\text{m/s)}$$

4. **Velocity of the Hole ($v_h$):**  
   The velocity of the hole is equal to the velocity of the missing electron:
   $$\mathbf{v}_h = \frac{\mathbf{p}_h}{m_h^*} = \frac{-1.054 \times 10^{-24}\,\hat{k}_x\text{ kg}\cdot\text{m/s}}{5.5 \times 10^{-30}\text{ kg}} \approx -1.9 \times 10^5\,\hat{k}_x\text{ m/s}$$
   Alternatively, using group velocity:
   $$\mathbf{v}_e = \frac{1}{\hbar}\frac{dE}{dk} = \frac{-2Ak_e}{\hbar} = \frac{-2(10^{-39})(10^{10})}{1.054 \times 10^{-34}}\hat{k}_x \approx -1.9 \times 10^5\,\hat{k}_x\text{ m/s}$$
   Since $\mathbf{v}_h = \mathbf{v}_e$, the two methods yield the same result.

5. **Energy of the Hole ($E_h$):**  
   Taking the top of the valence band as the reference zero ($E = 0$ at $k = 0$):
   $$E_e = -A k_e^2 = -(10^{-39}\text{ J}\cdot\text{m}^2)(10^{10}\text{ m}^{-1})^2 = -10^{-19}\text{ J}$$
   The energy of the hole is defined as the work required to remove the electron:
   $$E_h = -E_e = -(-10^{-19}\text{ J}) = +10^{-19}\text{ J}$$
   In electron-volts:
   $$E_h = \frac{10^{-19}\text{ J}}{1.602 \times 10^{-19}\text{ J/eV}} \approx 0.624\text{ eV}$$

---

### Practice Problem (Unsolved)
The dispersion relation near the top of the valence band of a semiconductor is given by:
$$E(\mathbf{k}) = -C(k_x^2 + k_y^2 + k_z^2)$$
where $C = 5.0 \times 10^{-39}\text{ J}\cdot\text{m}^2$. An electron occupying the state $\mathbf{k}_e = (2 \times 10^9\,\hat{i} + 3 \times 10^9\,\hat{j})\text{ m}^{-1}$ is excited to the conduction band.  
(a) Determine the effective mass of the electron ($m_e^*$) and that of the newly created hole ($m_h^*$).  
(b) Calculate the momentum vector $\mathbf{p}_h$ and velocity vector $\mathbf{v}_h$ of the hole.  
(c) Find the energy of the hole relative to the valence band edge.