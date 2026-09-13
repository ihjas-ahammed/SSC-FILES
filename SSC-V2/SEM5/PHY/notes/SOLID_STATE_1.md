# Solid State Physics: Crystal Structure and Diffraction

---

## 1. Crystal Structure

### 1.1 Classification of Solids
Solids are classified into crystalline and non-crystalline (amorphous) forms based on atomic arrangement:
* **Crystalline Solids:** Atoms or molecules exhibit regular, periodic long-range order. Because ordering releases more energy during phase formation, the crystalline state corresponds to a thermodynamically preferred minimum-energy state.
  * *Single Crystals:* Periodic atomic arrangement persists uninterrupted throughout the entire volume (e.g., diamond, quartz, mica).
  * *Polycrystalline Solids:* Composed of numerous randomly oriented microscopic crystallites (*grains*) separated by *grain boundaries*. Crystallographic continuity is interrupted at the boundaries.
* **Non-Crystalline (Amorphous) Solids:** Lack long-range translational order; atoms possess only short-range order over distances of a few atomic diameters (e.g., glass, polymers). These form when rapid cooling or kinetic constraints prevent atoms from configuring into periodic lattice positions.

---

### 1.2 The Space Lattice and Translation Vectors
A **space lattice** (point lattice) is an infinite, periodic array of geometrical points in three-dimensional space wherein every point possesses surroundings identical to every other point.

#### 1.2.1 Translational Invariance
A lattice point at position $\mathbf{r}'$ is related to a point at $\mathbf{r}$ by a lattice translation operation $\mathbf{T}$:
$$\mathbf{r}' = \mathbf{r} + \mathbf{T}$$
$$\mathbf{T} = n_1\mathbf{a} + n_2\mathbf{b} + n_3\mathbf{c}$$
where $n_1, n_2, n_3$ are arbitrary integers, and $\mathbf{a}, \mathbf{b}, \mathbf{c}$ are the fundamental translation vectors (crystallographic axes / basis vectors).

* **Primitive Translation Vectors:** Translation vectors for which any valid lattice translation $\mathbf{T}$ between equivalent points is defined exclusively with integers $(n_1, n_2, n_3)$.
* **Non-Primitive Translation Vectors:** Coordinate vectors that require fractional (non-integral) coefficients to describe certain lattice points.

---

### 1.3 Unit Cells
A **unit cell** is a fundamental building block formed by the translation vectors that, when repeated periodically in all dimensions by translational operations, reproduces the entire space lattice.

#### 1.3.1 Primitive vs. Non-Primitive Unit Cells
* **Primitive Unit Cell:**
  * Has the minimum possible volume for a given lattice.
  * Contains lattice points only at its vertices.
  * The effective number of lattice points per cell is precisely one ($N = 1$).
  * Volume of a primitive unit cell defined by primitive axes $\mathbf{a}, \mathbf{b}, \mathbf{c}$:
    $$V = |\mathbf{a} \cdot (\mathbf{b} \times \mathbf{c})|$$
* **Non-Primitive Unit Cell:**
  * Possesses lattice points at positions other than the corners (e.g., body centres, face centres).
  * Contains an effective number of lattice points greater than one ($N > 1$).
  * Often selected as the *conventional unit cell* to display the full point symmetry of the lattice.

#### 1.3.2 The Wigner-Seitz Cell
A geometrical, primitive unit cell displaying the full point symmetry of the lattice.
* **Construction:**
  1. Select an arbitrary lattice point as origin.
  2. Draw vectors connecting this point to all neighboring lattice points.
  3. Construct planes (or lines in 2D) perpendicular to these vectors at their exact midpoints.
  4. The smallest enclosed volume around the origin defines the Wigner-Seitz primitive cell.

---

### 1.4 The Basis and Crystal Structure
A crystal structure is formed by associating a structural assembly of atoms, ions, or molecules—termed the **basis**—identically with every lattice point:
$$\text{Space Lattice} + \text{Basis} \longrightarrow \text{Crystal Structure}$$
* **Lattice:** A purely mathematical, periodic array of dimensionless points in space.
* **Basis:** The physical collection of atoms, defined by relative positions and chemical identities, centered upon each lattice point.
  * A *monoatomic* structure possesses a basis consisting of a single atom (e.g., pure Cu).
  * Complex bases may comprise tens to thousands of atoms (e.g., biological macromolecules).

---
##
### 1.5 Symmetry Operations

An operation that maps a crystal onto itself without change in appearance is a symmetry operation. These include translational and point symmetry operations:

1. **Translation:** Movement along vector $\mathbf{T} = n_1\mathbf{a} + n_2\mathbf{b} + n_3\mathbf{c}$.
2. **Rotation:** Rotation by angle $\theta$ about an axis such that $n\theta = 2\pi$, where $n$ is the multiplicity ($n$-fold rotation axis):
   $$\theta = \frac{2\pi}{n}$$
3. **Reflection ($m$):** Inversion through a plane (or line in 2D), dividing the system into mirror-image halves.
4. **Inversion ($\bar{1}$):** A point operation in 3D mapping every point at $\mathbf{r}$ to $-\mathbf{r}$ with respect to a centre of inversion.

#### 1.5.1 Restriction on Rotational Multiplicity in Periodic Lattices
Translational periodicity restricts permissible rotational symmetries exclusively to $n = 1, 2, 3, 4, 6$. Five-fold, seven-fold, or higher-order rotational symmetries cannot exist in periodic space lattices.

**Proof:**
Consider four collinear, identical lattice points $A, B, C, D$ along a lattice row with translation magnitude $T = |\mathbf{T}|$ such that $BC = T$.
* Apply an $n$-fold rotation through angle $\theta = 2\pi/n$ clockwise about $B$, and counter-clockwise about $C$.
* The rotated points $B'$ and $C'$ must also be valid lattice points and lie on a row parallel to $AD$.
* Therefore, the distance $B'C'$ must be an integral multiple $m$ of the fundamental translation period $T$:
  $$B'C' = mT$$
* Geometrically, project the vectors onto the row:
  $$B'C' = T + 2T\cos(\pi - \theta) \quad \text{or} \quad B'C' = T + 2T\cos\theta$$
  Using the standard projection geometry where $B'$ and $C'$ project outward from the interval $BC$:
  $$2T\cos\theta + T = mT$$
  $$\cos\theta = \frac{m - 1}{2}$$
Since $-1 \le \cos\theta \le 1$, the integer $m$ is limited to $m \in \{-1, 0, 1, 2, 3\}$:
* $m = 3 \implies \cos\theta = 1 \implies \theta = 0^\circ \text{ or } 360^\circ \implies n = 1$ (1-fold)
* $m = 2 \implies \cos\theta = 1/2 \implies \theta = 60^\circ \implies n = 6$ (6-fold)
* $m = 1 \implies \cos\theta = 0 \implies \theta = 90^\circ \implies n = 4$ (4-fold)
* $m = 0 \implies \cos\theta = -1/2 \implies \theta = 120^\circ \implies n = 3$ (3-fold)
* $m = -1 \implies \cos\theta = -1 \implies \theta = 180^\circ \implies n = 2$ (2-fold)

---

### 1.6 Point Groups and Space Groups
* **Point Group:** A finite set of non-translational symmetry operations (rotations, reflections, inversions, and improper rotations) that leave at least one point fixed.
  * In two dimensions: 10 distinct point groups ($1, 1m, 2, 2mm, 3, 3m, 4, 4mm, 6, 6mm$).
  * In three dimensions: 32 distinct crystallographic point groups.
* **Space Group:** The complete group of symmetry operations, combining point group operations with translation operations (including screw axes and glide planes).
  * In two dimensions: 17 distinct space groups.
  * In three dimensions: 230 distinct space groups.

---

### 1.7 Crystal Systems and Bravais Lattices
Lattices compatible with crystallographic point groups are categorized into crystal systems and **Bravais lattices**.

#### 1.7.1 Two-Dimensional Lattices
There are 4 crystal systems comprising 5 Bravais lattices in two dimensions:

| Crystal System | Characteristic Point Group | Bravais Lattice | Conventional Unit Cell | Lattice Parameters |
| :--- | :--- | :--- | :--- | :--- |
| **Oblique** | $1, 2$ | Oblique | Parallelogram | $a \ne b, \gamma \ne 90^\circ$ |
| **Rectangular** | $1m, 2mm$ | 1. Rectangular Primitive ($P$)<br>2. Rectangular Centred ($c$) | Rectangle | $a \ne b, \gamma = 90^\circ$ |
| **Square** | $4, 4mm$ | Square | Square | $a = b, \gamma = 90^\circ$ |
| **Hexagonal** | $3, 3m, 6, 6mm$ | Hexagonal | $60^\circ$ Rhombus | $a = b, \gamma = 120^\circ$ |

#### 1.7.2 Three-Dimensional Lattices
There are 7 crystal systems comprising 14 Bravais lattices in three dimensions:

| Crystal System | Axial Lengths | Interaxial Angles | Bravais Lattices | Symbols |
| :--- | :--- | :--- | :--- | :--- |
| **Cubic** | $a = b = c$ | $\alpha = \beta = \gamma = 90^\circ$ | Simple, Body-centred, Face-centred | $P, I, F$ |
| **Tetragonal** | $a = b \ne c$ | $\alpha = \beta = \gamma = 90^\circ$ | Simple, Body-centred | $P, I$ |
| **Orthorhombic** | $a \ne b \ne c$ | $\alpha = \beta = \gamma = 90^\circ$ | Simple, Body-centred, Base-centred, Face-centred | $P, I, C, F$ |
| **Rhombohedral (Trigonal)** | $a = b = c$ | $\alpha = \beta = \gamma \ne 90^\circ < 120^\circ$ | Simple | $R$ (or $P$) |
| **Hexagonal** | $a = b \ne c$ | $\alpha = \beta = 90^\circ, \gamma = 120^\circ$ | Simple | $P$ |
| **Monoclinic** | $a \ne b \ne c$ | $\alpha = \gamma = 90^\circ \ne \beta$ | Simple, Base-centred | $P, C$ |
| **Triclinic** | $a \ne b \ne c$ | $\alpha \ne \beta \ne \gamma \ne 90^\circ$ | Simple | $P$ |

*Note on Lattice Redundancy:* A face-centred tetragonal lattice is mathematically equivalent to a body-centred tetragonal lattice with cell parameters rotated by $45^\circ$ around the $c$-axis and scaled by $a' = a/\sqrt{2}$. Hence, it is not a distinct Bravais lattice.

#### 1.7.3 Effective Number of Lattice Points per Cell
For a conventional unit cell:
$$N = N_i + \frac{N_f}{2} + \frac{N_c}{8}$$
where:
* $N_i$ = number of interior points (shared by 1 cell; weight = 1)
* $N_f$ = number of points on face centres (shared by 2 cells; weight = $1/2$)
* $N_c$ = number of points on corners (shared by 8 cells; weight = $1/8$)

Yields:
* Simple Cubic ($P$): $N = 0 + 0 + 8/8 = 1$
* Body-Centred Cubic ($I$): $N = 1 + 0 + 8/8 = 2$
* Face-Centred Cubic ($F$): $N = 0 + 6/2 + 8/8 = 4$

---
## *
### 1.8 Crystallographic Directions and Planes

#### 1.8.1 Direction Indices $[uvw]$
A direction is defined by the components of a vector connecting the origin to a point in the lattice, normalized to the smallest integers:
$$\mathbf{R} = u\mathbf{a} + v\mathbf{b} + w\mathbf{c}$$
* Direction: Enclosed in square brackets: $[uvw]$.
* Negative indices: Written with an overbar: $[\bar{u}vw]$.
* Family of symmetry-equivalent directions: Enclosed in angle brackets: $\langle uvw \rangle$.

In a cubic lattice, the angle $\theta$ between two directions $[hkl]$ and $[h'k'l']$ is:
$$\cos\theta = \frac{hh' + kk' + ll'}{\sqrt{h^2 + k^2 + l^2}\sqrt{{h'}^2 + {k'}^2 + {l'}^2}}$$

#### 1.8.2 Miller Indices of Crystallographic Planes $(hkl)$
The orientation of a plane is specified using Miller indices $(hkl)$:
1. Determine the intercepts of the plane with the crystal axes in units of lattice constants $a, b, c$: $(pa, qb, rc)$.
2. Compute the reciprocals of these fractional intercepts: $(1/p, 1/q, 1/r)$.
3. Clear fractions by multiplying by the lowest common denominator to obtain the smallest coprimes: $(hkl)$.
4. If a plane is parallel to an axis, its intercept is $\infty$, giving an index of $0$.
5. Intercepts along negative coordinate axes are indicated with overbars: $(\bar{h}kl)$.
* A specific set of parallel planes: Enclosed in parentheses: $(hkl)$.
* A family of symmetry-equivalent planes: Enclosed in braces: $\{hkl\}$.

In cubic symmetry, the direction $[hkl]$ is perpendicular to the plane $(hkl)$.

---

### 1.9 Interplanar Spacing ($d_{hkl}$)
The normal distance between adjacent parallel planes $(hkl)$ passing through lattice points is derived using coordinate geometry.

Given a plane with fractional intercepts $a/h, b/k, c/l$ relative to the origin:
$$\hat{\mathbf{n}} \cdot \mathbf{r} = d$$
where $\hat{\mathbf{n}}$ is the unit normal vector. The direction cosines with respect to the axes are:
$$\cos\alpha = \frac{d}{a/h} = \frac{dh}{a}, \quad \cos\beta = \frac{dk}{b}, \quad \cos\gamma = \frac{dl}{c}$$
In an orthogonal system ($\alpha = \beta = \gamma = 90^\circ$):
$$\cos^2\alpha + \cos^2\beta + \cos^2\gamma = 1$$
$$d^2 \left[ \left(\frac{h}{a}\right)^2 + \left(\frac{k}{b}\right)^2 + \left(\frac{l}{c}\right)^2 \right] = 1$$

Therefore, for an **orthorhombic** system:
$$d_{hkl} = \frac{1}{\sqrt{\dfrac{h^2}{a^2} + \dfrac{k^2}{b^2} + \dfrac{l^2}{c^2}}}$$

For a **cubic** crystal ($a = b = c$):
$$d_{hkl} = \frac{a}{\sqrt{h^2 + k^2 + l^2}}$$

---

### 1.10 Standard Crystal Structures

#### 1.10.1 Definitions
* **Coordination Number ($CN$):** The number of equidistant nearest-neighbor atoms surrounding any given atom.
* **Atomic Packing Factor (APF / Packing Fraction $f$):**
  $$f = \frac{N_{\text{atoms}} \times V_{\text{atom}}}{V_{\text{unit cell}}}$$
  Assuming hard spherical atoms of radius $r$.

#### 1.10.2 Close-Packed Structures ($f = 0.74, CN = 12$)
1. **Hexagonal Close-Packed (HCP):**
   * Stacking sequence: $ABABAB\dots$
   * Conventional unit cell: Hexagonal prism containing:
     * 12 corner atoms (shared by 6 cells: $12 \times 1/6 = 2$)
     * 2 face-centred atoms (shared by 2 cells: $2 \times 1/2 = 1$)
     * 3 internal atoms (wholly inside: 3)
     * Total effective atoms $N = 6$.
   * Primitive cell volume is $1/3$ of the conventional cell volume, containing $N = 2$ atoms.
   * Space lattice: Simple hexagonal with a 2-atom basis: $(0,0,0)$ and $\left(\frac{2}{3}, \frac{1}{3}, \frac{1}{2}\right)$.
   * Nearest-neighbor distance $a = 2r$.
   * Ideal axial ratio:
     $$\frac{c}{a} = \sqrt{\frac{8}{3}} \approx 1.633$$
   * Packing fraction: $f = \frac{\pi}{3\sqrt{2}} \approx 0.74$.

2. **Face-Centred Cubic (FCC):**
   * Stacking sequence along the body diagonal $[111]$: $ABCABCABC\dots$
   * Conventional unit cell: $N = 8(1/8) + 6(1/2) = 4$ atoms.
   * Close-packed direction: Face diagonals $\langle 110 \rangle$.
   * Interatomic contact condition:
     $$4r = \sqrt{2}a \implies a = 2\sqrt{2}r$$
   * Coordination number: $CN = 12$.
   * Packing fraction:
     $$f = \frac{4 \times \frac{4}{3}\pi r^3}{a^3} = \frac{\frac{16}{3}\pi r^3}{(2\sqrt{2}r)^3} = \frac{\pi}{3\sqrt{2}} \approx 0.74$$

#### 1.10.3 Loose-Packed Structures
1. **Body-Centred Cubic (BCC):**
   * Conventional cell: $N = 8(1/8) + 1 = 2$ atoms.
   * Contact direction: Body diagonals $\langle 111 \rangle$.
     $$4r = \sqrt{3}a \implies a = \frac{4r}{\sqrt{3}}$$
   * Coordination number: $CN = 8$.
   * Packing fraction:
     $$f = \frac{2 \times \frac{4}{3}\pi r^3}{a^3} = \frac{\frac{8}{3}\pi r^3}{\left(\frac{4r}{\sqrt{3}}\right)^3} = \frac{\pi\sqrt{3}}{8} \approx 0.68$$

2. **Simple Cubic (SC):**
   * Conventional cell: $N = 8(1/8) = 1$ atom.
   * Contact direction: Cube edges $\langle 100 \rangle$.
     $$a = 2r$$
   * Coordination number: $CN = 6$.
   * Packing fraction:
     $$f = \frac{1 \times \frac{4}{3}\pi r^3}{(2r)^3} = \frac{\pi}{6} \approx 0.52$$

---

### 1.11 Compound and Interpenetrating Structures

1. **Diamond Cubic (DC) Structure:**
   * Space lattice: Face-centred cubic (FCC).
   * Basis: Two identical carbon atoms at $(0, 0, 0)$ and $\left(\frac{1}{4}, \frac{1}{4}, \frac{1}{4}\right)$.
   * Equivalently described as two interpenetrating FCC sublattices displaced along the body diagonal by $a\frac{\sqrt{3}}{4}$.
   * Atom count per unit cell: $N = 8$ ($4$ from FCC points $+ 4$ in alternate internal tetrahedral voids).
   * Coordination number: $CN = 4$ (tetrahedral coordination).
   * Nearest-neighbor distance:
     $$d_{\text{nn}} = \frac{\sqrt{3}}{4}a$$
   * Packing fraction: $f = \frac{\pi\sqrt{3}}{16} \approx 0.34$.
   * Representative materials: C (diamond), Si, Ge, $\alpha$-Sn.

2. **Zinc Blende ($\text{ZnS}$) Structure:**
   * Isostructural with diamond cubic, but the two interpenetrating FCC sublattices are composed of distinct elements:
     * $\text{Zn}$ atoms occupy FCC sites: $(0,0,0), \left(0, \frac{1}{2}, \frac{1}{2}\right), \left(\frac{1}{2}, 0, \frac{1}{2}\right), \left(\frac{1}{2}, \frac{1}{2}, 0\right)$.
     * $\text{S}$ atoms occupy four alternate tetrahedral positions: displaced by $\left(\frac{1}{4}, \frac{1}{4}, \frac{1}{4}\right)$.
   * Coordination number: $4:4$.
   * Number of formula units per unit cell: 4.

3. **Sodium Chloride ($\text{NaCl}$) Structure:**
   * Space lattice: Face-centred cubic (FCC).
   * Basis: Two ions, $\text{Na}^+$ and $\text{Cl}^-$, displaced relative to one another by $(a/2, 0, 0)$.
   * Alternatively described as two interpenetrating FCC sublattices displaced by $a/2$ along any cube edge.
   * Atomic coordinates:
     * $\text{Na}^+$: $(0,0,0), \left(\frac{1}{2},\frac{1}{2},0\right), \left(\frac{1}{2},0,\frac{1}{2}\right), \left(0,\frac{1}{2},\frac{1}{2}\right)$
     * $\text{Cl}^-$: $\left(\frac{1}{2},\frac{1}{2},\frac{1}{2}\right), \left(0,0,\frac{1}{2}\right), \left(0,\frac{1}{2},0\right), \left(\frac{1}{2},0,0\right)$
   * Effective content: 4 $\text{Na}^+$ and 4 $\text{Cl}^-$ ions (4 formula units per conventional cell).
   * Coordination number: $6:6$ (octahedral coordination).
   * Edge-touching relationship: $a = 2(r_{\text{cation}} + r_{\text{anion}})$.

---
## *
## 2. X-Ray Diffraction and the Reciprocal Lattice

### 2.1 Physics of Diffraction
Electromagnetic radiation diffracts when incident upon a periodic array whose structural periodicity is of the same order of magnitude as the wavelength ($\lambda \approx d \sim 1\text{ \AA}$).
* Electrons act as secondary coherent scatterers.
* In a three-dimensional crystal lattice, scattered wavelets undergo constructive and destructive interference, producing discrete diffraction maxima.

---

### 2.2 Formulation of Diffraction Conditions

#### 2.2.1 Bragg's Formulation
Crystal planes $(hkl)$ separated by interplanar distance $d$ act as specular reflecting surfaces. For constructive interference between waves reflected by consecutive parallel planes at a glancing angle $\theta$:
$$\text{Path Difference} = 2d\sin\theta$$
$$\mathbf{2d\sin\theta = n\lambda}$$
where $n \in \{1, 2, 3, \dots\}$ represents the diffraction order.

Setting $n = 1$ and replacing $d$ with the spacing $d_{h'k'l'} = d_{hkl}/n$ absorbs the order $n$ directly into the plane indices $(h'k'l') = (nh, nk, nl)$.

#### 2.2.2 Von Laue Formulation
Consider two identical scattering centres separated by real-space translation vector $\mathbf{r}$.
* Let $\hat{\mathbf{n}}_1$ and $\hat{\mathbf{n}}_2$ be unit vectors along the incident and scattered directions, with scattering angle $2\theta$.
* The path difference between the two scattered rays is:
  $$\Delta = \mathbf{r} \cdot \hat{\mathbf{n}}_1 - \mathbf{r} \cdot \hat{\mathbf{n}}_2 = \mathbf{r} \cdot (\hat{\mathbf{n}}_1 - \hat{\mathbf{n}}_2) = \mathbf{r} \cdot \mathbf{N}$$
  where $\mathbf{N} = \hat{\mathbf{n}}_1 - \hat{\mathbf{n}}_2$ represents the scattering vector normal, with magnitude:
  $$|\mathbf{N}| = 2\sin\theta$$

For constructive interference across a 3D periodic lattice with primitive axes $\mathbf{a}, \mathbf{b}, \mathbf{c}$, the path difference along each axis must be an integral multiple of $\lambda$:
$$\mathbf{a} \cdot \mathbf{N} = h'\lambda = n h \lambda$$
$$\mathbf{b} \cdot \mathbf{N} = k'\lambda = n k \lambda$$
$$\mathbf{c} \cdot \mathbf{N} = l'\lambda = n l \lambda$$
These are **Laue's Equations**, where $h, k, l$ are coprimes (Miller indices of the reflecting plane), and $n$ is the order of reflection.

#### 2.2.3 Equivalence of Bragg and Laue Formulations
Using direction cosines $\cos\alpha, \cos\beta, \cos\gamma$ of $\mathbf{N}$ with axes $\mathbf{a}, \mathbf{b}, \mathbf{c}$:
$$\mathbf{a} \cdot \mathbf{N} = a(2\sin\theta)\cos\alpha = nh\lambda \implies \frac{a}{h}\cos\alpha = \frac{n\lambda}{2\sin\theta}$$
$$\frac{b}{k}\cos\beta = \frac{n\lambda}{2\sin\theta}$$
$$\frac{c}{l}\cos\gamma = \frac{n\lambda}{2\sin\theta}$$
From the geometric relationship for interplanar spacing $d_{hkl}$ (established in Section 1.9):
$$d_{hkl} = \frac{a}{h}\cos\alpha = \frac{b}{k}\cos\beta = \frac{c}{l}\cos\gamma$$
Substituting this into Laue's relations yields:
$$d_{hkl} = \frac{n\lambda}{2\sin\theta} \implies 2d_{hkl}\sin\theta = n\lambda$$
Thus, Bragg's Law and Laue's Equations describe the identical physical phenomenon.

---

### 2.3 The Reciprocal Lattice

#### 2.3.1 Definition and Geometry
A direct space lattice is defined by real-space coordinates $\mathbf{r}$. The **reciprocal lattice** is defined in wavevector/momentum space ($k$-space), where each point represents a family of real-space parallel planes $(hkl)$:
* The direction of the reciprocal vector from the origin to point $(hkl)$ is collinear with the surface normal $\hat{\mathbf{n}}$ of the real-space planes $(hkl)$.
* The magnitude of the reciprocal vector is inversely proportional to the interplanar spacing $d_{hkl}$:
  $$\boldsymbol{\sigma}_{hkl} = \frac{1}{d_{hkl}}\hat{\mathbf{n}} \quad \text{or} \quad \mathbf{G}_{hkl} = \frac{2\pi}{d_{hkl}}\hat{\mathbf{n}}$$

#### 2.3.2 Primitive Reciprocal Translation Vectors
Using the $2\pi$ definition, the primitive vectors of the reciprocal lattice $\mathbf{a}^*, \mathbf{b}^*, \mathbf{c}^*$ are defined in terms of direct lattice primitive vectors $\mathbf{a}, \mathbf{b}, \mathbf{c}$ as:
$$\mathbf{a}^* = 2\pi\frac{\mathbf{b} \times \mathbf{c}}{\mathbf{a} \cdot (\mathbf{b} \times \mathbf{c})}$$
$$\mathbf{b}^* = 2\pi\frac{\mathbf{c} \times \mathbf{a}}{\mathbf{a} \cdot (\mathbf{b} \times \mathbf{c})}$$
$$\mathbf{c}^* = 2\pi\frac{\mathbf{a} \times \mathbf{b}}{\mathbf{a} \cdot (\mathbf{b} \times \mathbf{c})}$$

These vectors satisfy the orthogonality and normalization relations:
$$\mathbf{a}_i^* \cdot \mathbf{a}_j = 2\pi\delta_{ij}$$
$$\mathbf{a}^* \cdot \mathbf{a} = 2\pi, \quad \mathbf{a}^* \cdot \mathbf{b} = 0, \quad \mathbf{a}^* \cdot \mathbf{c} = 0, \quad \text{etc.}$$

The volume of the reciprocal primitive unit cell is:
$$V^* = |\mathbf{a}^* \cdot (\mathbf{b}^* \times \mathbf{c}^*)| = \frac{(2\pi)^3}{V_{\text{direct}}}$$

#### 2.3.3 Reciprocal Lattice Vector $\mathbf{G}$
An arbitrary reciprocal lattice vector is:
$$\mathbf{G} = h\mathbf{a}^* + k\mathbf{b}^* + l\mathbf{c}^*$$
where $h, k, l$ are integers representing the Miller indices of the corresponding real-space planes $(hkl)$.

For any direct lattice translation vector $\mathbf{T} = m\mathbf{a} + n\mathbf{b} + p\mathbf{c}$:
$$\mathbf{G} \cdot \mathbf{T} = 2\pi(hm + kn + lp) = 2\pi \times \text{integer}$$
$$e^{i\mathbf{G} \cdot \mathbf{T}} = 1$$

---
## *
### 2.4 Reciprocal Lattices of Common Cubic Systems

#### 2.4.1 Simple Cubic (SC)
* Direct lattice: $\mathbf{a} = a\hat{\mathbf{i}}, \quad \mathbf{b} = a\hat{\mathbf{j}}, \quad \mathbf{c} = a\hat{\mathbf{k}}$
* Volume: $V = a^3$
* Reciprocal primitive vectors:
  $$\mathbf{a}^* = \frac{2\pi}{a}\hat{\mathbf{i}}, \quad \mathbf{b}^* = \frac{2\pi}{a}\hat{\mathbf{j}}, \quad \mathbf{c}^* = \frac{2\pi}{a}\hat{\mathbf{k}}$$
* **Result:** The reciprocal lattice of a simple cubic lattice of parameter $a$ is another **simple cubic lattice** of parameter $\frac{2\pi}{a}$.

#### 2.4.2 Body-Centred Cubic (BCC)
* Direct primitive translation vectors (Section 1.3):
  $$\mathbf{a}' = \frac{a}{2}(\hat{\mathbf{i}} + \hat{\mathbf{j}} - \hat{\mathbf{k}}), \quad \mathbf{b}' = \frac{a}{2}(-\hat{\mathbf{i}} + \hat{\mathbf{j}} + \hat{\mathbf{k}}), \quad \mathbf{c}' = \frac{a}{2}(\hat{\mathbf{i}} - \hat{\mathbf{j}} + \hat{\mathbf{k}})$$
* Volume of primitive cell: $V = \frac{a^3}{2}$
* Reciprocal primitive vectors:
  $$\mathbf{a}^* = 2\pi\frac{\mathbf{b}' \times \mathbf{c}'}{V} = \frac{2\pi}{a}(\hat{\mathbf{i}} + \hat{\mathbf{j}})$$
  $$\mathbf{b}^* = 2\pi\frac{\mathbf{c}' \times \mathbf{a}'}{V} = \frac{2\pi}{a}(\hat{\mathbf{j}} + \hat{\mathbf{k}})$$
  $$\mathbf{c}^* = 2\pi\frac{\mathbf{a}' \times \mathbf{b}'}{V} = \frac{2\pi}{a}(\hat{\mathbf{k}} + \hat{\mathbf{i}})$$
* **Result:** These correspond to the primitive translation vectors of an **FCC lattice** of side length $\frac{4\pi}{a}$. Thus, the reciprocal of a BCC lattice is an **FCC lattice**.

#### 2.4.3 Face-Centred Cubic (FCC)
* Direct primitive translation vectors:
  $$\mathbf{a}' = \frac{a}{2}(\hat{\mathbf{i}} + \hat{\mathbf{j}}), \quad \mathbf{b}' = \frac{a}{2}(\hat{\mathbf{j}} + \hat{\mathbf{k}}), \quad \mathbf{c}' = \frac{a}{2}(\hat{\mathbf{k}} + \hat{\mathbf{i}})$$
* Volume of primitive cell: $V = \frac{a^3}{4}$
* Reciprocal primitive vectors:
  $$\mathbf{a}^* = \frac{2\pi}{a}(\hat{\mathbf{i}} + \hat{\mathbf{j}} - \hat{\mathbf{k}})$$
  $$\mathbf{b}^* = \frac{2\pi}{a}(-\hat{\mathbf{i}} + \hat{\mathbf{j}} + \hat{\mathbf{k}})$$
  $$\mathbf{c}^* = \frac{2\pi}{a}(\hat{\mathbf{i}} - \hat{\mathbf{j}} + \hat{\mathbf{k}})$$
* **Result:** These correspond to the primitive translation vectors of a **BCC lattice** of side length $\frac{4\pi}{a}$. Thus, the reciprocal of an FCC lattice is a **BCC lattice**.

---

### 2.5 Vector Formulation of Bragg's Law and Brillouin Zones

#### 2.5.1 The Vector Condition for Diffraction
Let incident wavevector be $\mathbf{k}$ and scattered wavevector be $\mathbf{k}'$, where $|\mathbf{k}| = |\mathbf{k}'| = 2\pi/\lambda$ for elastic scattering.
* Wavevector change:
  $$\Delta \mathbf{k} = \mathbf{k}' - \mathbf{k}$$
* Diffraction occurs if and only if $\Delta \mathbf{k}$ equals a reciprocal lattice vector $\mathbf{G}$:
  $$\mathbf{k}' = \mathbf{k} + \mathbf{G}$$
Squaring both sides:
$${k'}^2 = (\mathbf{k} + \mathbf{G})^2 = k^2 + 2\mathbf{k} \cdot \mathbf{G} + G^2$$
Since elastic scattering conserves energy (${k'}^2 = k^2$):
$$\mathbf{2\mathbf{k} \cdot \mathbf{G} + G^2 = 0} \quad \text{or} \quad \mathbf{k} \cdot \left(-\frac{1}{2}\mathbf{G}\right) = \left|\frac{1}{2}\mathbf{G}\right|^2$$
This condition specifies that wavevector $\mathbf{k}$ will undergo Bragg reflection if its endpoint lies on a plane that forms the perpendicular bisector of a reciprocal lattice vector $\mathbf{G}$.

---

### 2.6 Brillouin Zones

A **Brillouin zone** is defined as the Wigner-Seitz primitive cell constructed in the reciprocal lattice (using the construction procedure established in Section 1.3.2).
* **First Brillouin Zone:** The locus of all wavevectors $\mathbf{k}$ originating from reciprocal origin that can reach the boundaries formed by the perpendicular bisector planes of the shortest non-zero reciprocal vectors $\mathbf{G}$ without crossing any reflection plane.

#### 2.6.1 Two-Dimensional Square Lattice
* Direct lattice constant: $a$
* Reciprocal vectors: $\mathbf{G} = \frac{2\pi}{a}(h\hat{\mathbf{i}} + k\hat{\mathbf{j}})$
* Diffraction condition:
  $$h k_x + k k_y = -\frac{\pi}{a}(h^2 + k^2)$$
* **First Brillouin Zone Boundaries:**
  Setting $(h = \pm 1, k = 0)$ and $(h = 0, k = \pm 1)$:
  $$k_x = \pm \frac{\pi}{a}, \quad k_y = \pm \frac{\pi}{a}$$
  This encloses a square of side $\frac{2\pi}{a}$ centered at the origin, with area $A^* = \left(\frac{2\pi}{a}\right)^2$.
* **Second Brillouin Zone Boundaries:**
  Setting $(h = \pm 1, k = \pm 1)$:
  $$\pm k_x \pm k_y = \frac{2\pi}{a}$$
  Adding four triangular areas onto the faces of the first zone square.

#### 2.6.2 Three-Dimensional Cubic Brillouin Zones
1. **BCC Direct Lattice (FCC Reciprocal Lattice):**
   * The reciprocal lattice is FCC.
   * The shortest non-zero reciprocal lattice vectors are the 12 vectors of the family:
     $$\mathbf{G} = \frac{2\pi}{a}(\pm\hat{\mathbf{i}} \pm\hat{\mathbf{j}}), \quad \frac{2\pi}{a}(\pm\hat{\mathbf{j}} \pm\hat{\mathbf{k}}), \quad \frac{2\pi}{a}(\pm\hat{\mathbf{k}} \pm\hat{\mathbf{i}})$$
   * Normal bisecting planes to these 12 vectors bound a 12-faced polyhedron:
   * **First Brillouin Zone Geometry:** **Rhombic Dodecahedron**.

2. **FCC Direct Lattice (BCC Reciprocal Lattice):**
   * The reciprocal lattice is BCC.
   * The shortest non-zero reciprocal lattice vectors are the 8 vectors of the family:
     $$\mathbf{G} = \frac{2\pi}{a}(\pm\hat{\mathbf{i}} \pm\hat{\mathbf{j}} \pm\hat{\mathbf{k}})$$
   * The next shortest reciprocal lattice vectors are the 6 vectors of the family:
     $$\mathbf{G} = \frac{2\pi}{a}(\pm 2\hat{\mathbf{i}}), \quad \frac{2\pi}{a}(\pm 2\hat{\mathbf{j}}), \quad \frac{2\pi}{a}(\pm 2\hat{\mathbf{k}})$$
   * The 8 octahedral planes formed by bisectors of $\langle 111 \rangle$ vectors are truncated by the 6 square planes formed by bisectors of $\langle 200 \rangle$ vectors.
   * **First Brillouin Zone Geometry:** **Truncated Octahedron** (which is also the Wigner-Seitz cell of a BCC lattice).

---

### 2.7 Atomic Scattering Factor
While point-lattice derivations assume point-like scattering centres, physical scattering originates from spatial electron distributions within finite atoms:
* Diffracted amplitude depends on the spatial Fourier transform of the electronic charge density $\rho(\mathbf{r})$ of the atom.
* Destructive phase interference between waves scattered from different regions of the same electron cloud reduces the effective scattering power as scattering angle $\theta$ increases.

## *