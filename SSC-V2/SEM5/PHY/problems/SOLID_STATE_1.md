# Crystal Structure & X-Ray Diffraction: Problems and Solutions

---

## 1. Unit Cell Characteristics & General Properties

### 1.1 Effective Atom Count & Density Formula

#### Problem 1.1 (Short Question 20)
Show that for any cubic lattice, the lattice parameter $a$ is related to the density $\rho$, the number of atoms per unit cell $n$, and the atomic weight $M$ by:
$$a = \left( \frac{n M}{N_A \rho} \right)^{1/3}$$
where $N_A$ is Avogadro's number.

**Solution:**
1. Let the edge length of a cubic unit cell be $a$. The volume of the unit cell is:
   $$V = a^3$$
2. Let $n$ be the effective number of atoms (or formula units) contained within the unit cell.
3. The mass of one atom is given by:
   $$m = \frac{M}{N_A}$$
   where $M$ is the molar mass and $N_A$ is Avogadro's constant ($6.023 \times 10^{23} \text{ mol}^{-1}$, or using atomic mass unit conversion factor $1 \text{ amu} = 1.6605 \times 10^{-27} \text{ kg}$).
4. The total mass contained within the unit cell is:
   $$\text{Mass} = n \cdot m = \frac{n M}{N_A}$$
5. The theoretical density $\rho$ is the mass per unit volume:
   $$\rho = \frac{\text{Mass}}{V} = \frac{n M}{N_A a^3}$$
6. Rearranging for the lattice parameter $a$:
   $$a^3 = \frac{n M}{N_A \rho} \implies a = \left( \frac{n M}{N_A \rho} \right)^{1/3}$$

---

#### Practice Problem 1.1
An unknown metal crystallizes in a body-centred cubic lattice ($n = 2$) with a density of $7.87 \text{ g/cm}^3$. If the atomic weight of the metal is $55.85 \text{ g/mol}$, compute the lattice parameter $a$ of the unit cell.

---

## 2. Lattice Directions and Planes

### 2.1 Indexing Crystallographic Directions

#### Problem 2.1 (Very Short Questions 10, 11 & Short Question 24)
1. Write the indices of all twelve cube edges in a cubic unit cell.
2. Write the indices of all twelve face diagonals of a cube.
3. Determine how many directions constitute the family of body diagonals $\langle 111 \rangle$ and list them.

**Solution:**
1. **Cube Edges ($\langle 100 \rangle$ family):**
   A cube has 12 edges aligned with the Cartesian axes $\pm x, \pm y, \pm z$. The 6 independent line directions (12 considering orientation sense) are:
   $$[100], [\bar{1}00], [010], [0\bar{1}0], [001], [00\bar{1}]$$
2. **Face Diagonals ($\langle 110 \rangle$ family):**
   Each of the 6 faces has 2 diagonals, yielding 12 directions (or 6 pairs of opposite senses):
   * $xy$-planes: $[110], [\bar{1}\bar{1}0], [1\bar{1}0], [\bar{1}10]$
   * $yz$-planes: $[011], [0\bar{1}\bar{1}], [01\bar{1}], [0\bar{1}1]$
   * $zx$-planes: $[101], [\bar{1}0\bar{1}], [10\bar{1}], [\bar{1}01]$
3. **Body Diagonals ($\langle 111 \rangle$ family):**
   There are 4 principal diagonals connecting opposite corners, yielding 8 directed vectors:
   $$[111], [\bar{1}\bar{1}\bar{1}], [11\bar{1}], [\bar{1}\bar{1}1], [1\bar{1}1], [\bar{1}1\bar{1}], [\bar{1}11], [1\bar{1}\bar{1}]$$
   Hence, the multiplicity of the $\langle 111 \rangle$ family is 8.

---

#### Practice Problem 2.1
List all non-parallel crystallographic directions belonging to the $\langle 112 \rangle$ family that lie entirely within the upper half-space ($w > 0$) of a cubic crystal.

---

### 2.2 Direction of Intersection of Planes

#### Problem 2.2 (Example 1.2)
Draw the $(101)$ and $(111)$ planes in a cubic unit cell and determine the Miller indices of the directions that are common to both planes.

**Solution:**
1. **Intercepts of the planes:**
   * For $(101)$: Intercepts on $x, y, z$ axes are $\frac{1}{1}, \frac{1}{0}, \frac{1}{1} \implies 1, \infty, 1$. This plane passes through $(1,0,0)$ and $(0,0,1)$ and is parallel to the $y$-axis.
   * For $(111)$: Intercepts on $x, y, z$ axes are $1, 1, 1$. This plane intersects the axes at $(1,0,0)$, $(0,1,0)$, and $(0,0,1)$.
2. **Line of intersection:**
   Both planes intersect the $x$-axis at point $A(1,0,0)$ and the $z$-axis at point $C(0,0,1)$. The line common to both planes is the line segment $AC$.
3. **Indices of the direction:**
   * Vector $\vec{AC} = \mathbf{r}_C - \mathbf{r}_A = (0 - 1)\hat{\mathbf{i}} + (0 - 0)\hat{\mathbf{j}} + (1 - 0)\hat{\mathbf{k}} = -\hat{\mathbf{i}} + 0\hat{\mathbf{j}} + \hat{\mathbf{k}}$.
     This corresponds to the direction $[\bar{1}01]$.
   * In the reverse sense, vector $\vec{CA} = \hat{\mathbf{i}} - \hat{\mathbf{k}}$, corresponding to $[10\bar{1}]$.
4. Alternatively, by the cross-product of plane normals:
   $$\mathbf{u} = \mathbf{n}_1 \times \mathbf{n}_2 = (1\hat{\mathbf{i}} + 0\hat{\mathbf{j}} + 1\hat{\mathbf{k}}) \times (1\hat{\mathbf{i}} + 1\hat{\mathbf{j}} + 1\hat{\mathbf{k}}) = -\hat{\mathbf{i}} + 0\hat{\mathbf{j}} + \hat{\mathbf{k}} \implies [\bar{1}01]$$

**Answer:** $[\bar{1}01]$ and $[10\bar{1}]$

---

#### Practice Problem 2.2
In a cubic unit cell, determine the Miller indices of the direction defined by the intersection of the $(110)$ and $(11\bar{1})$ planes.

---

### 2.3 Directions Lying Within a Given Plane

#### Problem 2.3 (Problem 2)
Draw a $(1\bar{1}0)$ plane in a cubic unit cell. Show all the $\langle 111 \rangle$ directions that lie in this plane and give their Miller indices.

**Solution:**
1. A direction $[uvw]$ lies in a plane $(hkl)$ if and only if it is perpendicular to the plane normal:
   $$h \cdot u + k \cdot v + l \cdot w = 0$$
2. For the plane $(1\bar{1}0)$, $h = 1, k = -1, l = 0$:
   $$1(u) - 1(v) + 0(w) = 0 \implies u = v$$
3. Searching within the $\langle 111 \rangle$ family, the allowed combinations where $u = v$ are:
   * $u = 1, v = 1, w = 1 \implies [111]$
   * $u = -1, v = -1, w = -1 \implies [\bar{1}\bar{1}\bar{1}]$
   * $u = 1, v = 1, w = -1 \implies [11\bar{1}]$
   * $u = -1, v = -1, w = 1 \implies [\bar{1}\bar{1}1]$

**Answer:** $[111], [\bar{1}\bar{1}\bar{1}], [11\bar{1}], \text{ and } [\bar{1}\bar{1}1]$

---

#### Practice Problem 2.3
Determine all directions of the form $\langle 110 \rangle$ that lie entirely within the $(111)$ plane of a cubic crystal.

---

### 2.4 Angles Between Crystallographic Directions

#### Problem 2.4 (Example 1.4 & Problem 8)
1. In a cubic unit cell, calculate the angle between the normals to the planes $(111)$ and $(121)$.
2. Calculate the angles that the $[111]$ direction makes with the $[100]$ and $[110]$ directions.

**Solution:**
In a cubic lattice, the normal to a plane $(hkl)$ is parallel to the direction $[hkl]$. The angle $\theta$ between two directions $[h_1 k_1 l_1]$ and $[h_2 k_2 l_2]$ is given by:
$$\cos\theta = \frac{h_1 h_2 + k_1 k_2 + l_1 l_2}{\sqrt{h_1^2 + k_1^2 + l_1^2}\sqrt{h_2^2 + k_2^2 + l_2^2}}$$

1. **Angle between normals to $(111)$ and $(121)$:**
   $$\cos\theta = \frac{(1)(1) + (1)(2) + (1)(1)}{\sqrt{1^2 + 1^2 + 1^2}\sqrt{1^2 + 2^2 + 1^2}} = \frac{1 + 2 + 1}{\sqrt{3}\sqrt{6}} = \frac{4}{\sqrt{18}} = \frac{4}{3\sqrt{2}} = \frac{2\sqrt{2}}{3} \approx 0.9428$$
   $$\theta = \arccos(0.9428) \approx 19.47^\circ \quad (\text{or } 19^\circ 28')$$

2. **Angle between $[111]$ and $[100]$:**
   $$\cos\theta_1 = \frac{(1)(1) + (1)(0) + (1)(0)}{\sqrt{1^2 + 1^2 + 1^2}\sqrt{1^2 + 0^2 + 0^2}} = \frac{1}{\sqrt{3}\cdot 1} = \frac{1}{\sqrt{3}} \approx 0.5774$$
   $$\theta_1 = \arccos(0.5774) \approx 54.74^\circ \quad (\text{or } 54^\circ 44')$$

3. **Angle between $[111]$ and $[110]$:**
   $$\cos\theta_2 = \frac{(1)(1) + (1)(1) + (1)(0)}{\sqrt{3}\sqrt{1^2 + 1^2 + 0^2}} = \frac{2}{\sqrt{3}\sqrt{2}} = \sqrt{\frac{2}{3}} \approx 0.8165$$
   $$\theta_2 = \arccos(0.8165) \approx 35.26^\circ \quad (\text{or } 35^\circ 15')$$

**Answer:**
1. $19.47^\circ$ ($19^\circ 28'$)
2. $54^\circ 44'$ and $35^\circ 15'$

---

#### Practice Problem 2.4
In a cubic crystal, compute the angle between the directions $[1\bar{1}0]$ and $[10\bar{1}]$, and the angle between the direction $[210]$ and the normal to the plane $(112)$.

---

### 2.5 Determination of Miller Indices from Intercepts

#### Problem 2.5 (Example 1.3, Problems 1 & 4)
Determine the Miller indices $(hkl)$ of planes having the following intercepts on the crystallographic axes:
1. Intercepts of $1\text{ \AA}, 2\text{ \AA}, 0.5\text{ \AA}$ in an orthorhombic crystal with $a:b:c = 3:2:1$.
2. Intercepts of $1\text{ \AA}, 2\text{ \AA}, 3\text{ \AA}$ in an orthorhombic crystal with $a:b:c = 3:2:1$.
3. General lattice axes intercepts:
   * (a) $3a, 3b, 2c$
   * (b) $a, 2b, \infty$
   * (c) $5a, -6b, c$
   * (d) $a, b/2, c$
   * (e) $a, b, -c$
   * (f) $a/2, b, \infty$

**Solution:**
Procedure: Express intercepts as multiples of axial lengths $p, q, r$, take reciprocals $(1/p, 1/q, 1/r)$, and scale to the smallest set of co-prime integers.

1. Intercepts: $x = 1\text{ \AA}, y = 2\text{ \AA}, z = 0.5\text{ \AA}$ with $a = 3, b = 2, c = 1$:
   * Fractional intercepts: $p = 1/3, q = 2/2 = 1, r = 0.5/1 = 1/2$.
   * Reciprocals: $1/p = 3, 1/q = 1, 1/r = 2$.
   * Indices: **$(312)$**

2. Intercepts: $x = 1\text{ \AA}, y = 2\text{ \AA}, z = 3\text{ \AA}$ with $a = 3, b = 2, c = 1$:
   * Fractional intercepts: $p = 1/3, q = 2/2 = 1, r = 3/1 = 3$.
   * Reciprocals: $1/p = 3, 1/q = 1, 1/r = 1/3$.
   * Multiply by 3 to clear fractions: $(9, 3, 1) \implies$ **$(931)$**

3. Intercepts relative to axes:
   * (a) $3a, 3b, 2c \implies p, q, r = 3, 3, 2 \implies \text{Reciprocals: } \frac{1}{3}, \frac{1}{3}, \frac{1}{2} \xrightarrow{\times 6}$ **$(223)$**
   * (b) $a, 2b, \infty \implies p, q, r = 1, 2, \infty \implies \text{Reciprocals: } 1, \frac{1}{2}, 0 \xrightarrow{\times 2}$ **$(210)$**
   * (c) $5a, -6b, c \implies p, q, r = 5, -6, 1 \implies \text{Reciprocals: } \frac{1}{5}, -\frac{1}{6}, 1 \xrightarrow{\times 30}$ **$(6\bar{5}\,30)$**
   * (d) $a, b/2, c \implies p, q, r = 1, 1/2, 1 \implies \text{Reciprocals: } 1, 2, 1 \implies$ **$(121)$**
   * (e) $a, b, -c \implies p, q, r = 1, 1, -1 \implies \text{Reciprocals: } 1, 1, -1 \implies$ **$(11\bar{1})$**
   * (f) $a/2, b, \infty \implies p, q, r = 1/2, 1, \infty \implies \text{Reciprocals: } 2, 1, 0 \implies$ **$(210)$**

---

#### Practice Problem 2.5
Find the Miller indices of a plane that cuts intercepts of $2\text{ \AA}, -3\text{ \AA},$ and $1.5\text{ \AA}$ along the axes of an orthorhombic unit cell whose lattice constants are in the ratio $a:b:c = 4:3:2$.

---
## *
## 3. Interplanar Spacings

### 3.1 Interplanar Distance in Cubic and Non-Cubic Lattices

#### Problem 3.1 (Problems 9 & 10)
1. For a cubic crystal of parameter $a$, compute the distances of the $(111)$ and $(222)$ planes from a parallel plane passing through the origin.
2. In an FCC crystal of lattice constant $a$, compute the spacing between adjacent parallel planes of the types $\{100\}$, $\{110\}$, and $\{111\}$. Verify whether the closest-packed planes are the most widely spaced.

**Solution:**
1. In a cubic crystal, the normal distance of the first plane $(hkl)$ from the origin is:
   $$d_{hkl} = \frac{a}{\sqrt{h^2 + k^2 + l^2}}$$
   * For $(111)$:
     $$d_{111} = \frac{a}{\sqrt{1^2 + 1^2 + 1^2}} = \frac{a}{\sqrt{3}}$$
   * For $(222)$:
     $$d_{222} = \frac{a}{\sqrt{2^2 + 2^2 + 2^2}} = \frac{a}{\sqrt{12}} = \frac{a}{2\sqrt{3}}$$

2. Spacing between adjacent identical planes in an FCC lattice:
   Due to face-centring, planes with mixed odd and even indices cancel by destructive interference, introducing intermediate interleaved planes:
   * For $\{100\}$ planes: Interleaved planes occur at intervals of $a/2$. Thus:
     $$d = d_{200} = \frac{a}{\sqrt{2^2 + 0 + 0}} = \frac{a}{2}$$
   * For $\{110\}$ planes: Centering introduces halfway planes:
     $$d = d_{220} = \frac{a}{\sqrt{2^2 + 2^2 + 0}} = \frac{a}{\sqrt{8}} = \frac{a}{2\sqrt{2}}$$
   * For $\{111\}$ planes: No interleaving occurs because all indices are odd:
     $$d = d_{111} = \frac{a}{\sqrt{1^2 + 1^2 + 1^2}} = \frac{a}{\sqrt{3}}$$
   * **Comparison:**
     $$\frac{a}{\sqrt{3}} \approx 0.577a, \quad \frac{a}{2} = 0.500a, \quad \frac{a}{2\sqrt{2}} \approx 0.354a$$
     $$d_{111} > d_{200} > d_{220}$$
   Because $\{111\}$ has the highest planar atomic density in an FCC structure and also possesses the largest interplanar spacing, the rule that *"the most close-packed planes are the most widely spaced"* is confirmed.

**Answer:**
1. $d_{111} = \frac{a}{\sqrt{3}}, \quad d_{222} = \frac{a}{2\sqrt{3}}$
2. $d_{100}' = \frac{a}{2}, \quad d_{110}' = \frac{a}{2\sqrt{2}}, \quad d_{111}' = \frac{a}{\sqrt{3}}$; Statement holds.

---

#### Practice Problem 3.1
In a tetragonal lattice with $a = b = 3.0\text{ \AA}$ and $c = 4.0\text{ \AA}$, calculate the interplanar spacings for the $(101)$ and $(211)$ planes.

---

## 4. Simple Crystal Structures: Geometry and Packing

### 4.1 Lattice Parameter vs. Atomic Radius

#### Problem 4.1 (Example 1.1 & Problem 5)
For monoatomic Simple Cubic (SC), Body-Centred Cubic (BCC), and Face-Centred Cubic (FCC) lattices:
1. Determine the relationship between the lattice parameter $a$ and the atomic radius $r$.
2. State the coordination number (number of nearest neighbours) and the closest distance of approach.

**Solution:**
1. **Simple Cubic (SC):**
   * Atoms touch along the cube edge:
     $$a = 2r \implies r = \frac{a}{2}$$
   * Coordination number: Each corner atom has 6 nearest neighbours along $\pm x, \pm y, \pm z$ ($CN = 6$).
   * Closest distance of approach: $d_{\text{min}} = 2r = a$.

2. **Body-Centred Cubic (BCC):**
   * Atoms touch along the body diagonal of length $\sqrt{3}a$:
     $$\sqrt{3}a = 4r \implies a = \frac{4r}{\sqrt{3}}$$
   * Coordination number: The body-centre atom touches all 8 corner atoms ($CN = 8$).
   * Closest distance of approach: $d_{\text{min}} = 2r = \frac{\sqrt{3}}{2}a$.

3. **Face-Centred Cubic (FCC):**
   * Atoms touch along the face diagonal of length $\sqrt{2}a$:
     $$\sqrt{2}a = 4r \implies a = \frac{4r}{\sqrt{2}} = 2\sqrt{2}r$$
   * Coordination number: In the close-packed $\{111\}$ planes, each atom is surrounded by 12 nearest neighbours ($CN = 12$).
   * Closest distance of approach: $d_{\text{min}} = 2r = \frac{a}{\sqrt{2}}$.

**Answer:**
* SC: $a = 2r; \quad CN = 6; \quad d_{\text{min}} = a$
* BCC: $a = \frac{4r}{\sqrt{3}}; \quad CN = 8; \quad d_{\text{min}} = \frac{\sqrt{3}}{2}a$
* FCC: $a = 2\sqrt{2}r; \quad CN = 12; \quad d_{\text{min}} = \frac{a}{\sqrt{2}}$

---

#### Practice Problem 4.1
Assuming hard-sphere contact, calculate the nearest-neighbor distance and the atomic radius in a BCC iron crystal with lattice parameter $a = 2.87\text{ \AA}$.

---

### 4.2 Linear and Planar Atomic Densities

#### Problem 4.2 (Problems 6 & 7)
1. Calculate the linear density of atoms along the cube edge $[100]$, the face diagonal $[110]$, and the body diagonal $[111]$ of an FCC unit cell of edge length $a$.
2. Nickel (FCC) has a lattice parameter $a = 3.52\text{ \AA}$. Calculate the planar atomic density (atoms per unit area) on the $(100)$, $(110)$, and $(111)$ planes. Can atoms be packed more closely than in the $(111)$ plane?

**Solution:**
1. **Linear Density ($\rho_L = \frac{\text{Number of equivalent atom diameters centered along vector}}{\text{Length of vector}}$):**
   * Direction $[100]$:
     Length $= a$. Intersects two corners, each contributing $1/2$ atom length inside the unit segment:
     $$\rho_L = \frac{2 \times \frac{1}{2}}{a} = \frac{1}{a}$$
   * Direction $[110]$:
     Length $= \sqrt{2}a$. Intersects two corner atoms ($2 \times 1/2$) and one face-centered atom ($1$ full atom):
     $$\text{Number of atoms} = \frac{1}{2} + 1 + \frac{1}{2} = 2$$
     $$\rho_L = \frac{2}{\sqrt{2}a} = \frac{\sqrt{2}}{a}$$
   * Direction $[111]$:
     Length $= \sqrt{3}a$. Passes through only the two opposite corner atoms without intersecting the face centres:
     $$\text{Number of atoms} = \frac{1}{2} + \frac{1}{2} = 1$$
     $$\rho_L = \frac{1}{\sqrt{3}a}$$

2. **Planar Density ($\rho_P = \frac{\text{Effective number of atoms on plane}}{\text{Area of plane}}$):**
   Given $a = 3.52\text{ \AA} = 3.52 \times 10^{-10}\text{ m}$.
   * **$(100)$ Plane:**
     Area $A = a^2 = (3.52 \times 10^{-10})^2 = 1.239 \times 10^{-19}\text{ m}^2$.
     Atoms contained: 4 corners ($4 \times 1/4 = 1$) + 1 face centre ($1$) $= 2$ atoms.
     $$\rho_P(100) = \frac{2}{1.239 \times 10^{-19}\text{ m}^2} \approx 1.61 \times 10^{19}\text{ atoms/m}^2$$
   * **$(110)$ Plane:**
     Area $A = a \times \sqrt{2}a = \sqrt{2}a^2 = \sqrt{2}(1.239 \times 10^{-19}) = 1.752 \times 10^{-19}\text{ m}^2$.
     Atoms contained: 4 corners ($4 \times 1/4 = 1$) + 2 face-edge intersections ($2 \times 1/2 = 1$) $= 2$ atoms.
     $$\rho_P(110) = \frac{2}{1.752 \times 10^{-19}\text{ m}^2} \approx 1.14 \times 10^{19}\text{ atoms/m}^2$$
   * **$(111)$ Plane:**
     Bounded by face diagonals of length $\sqrt{2}a$, forming an equilateral triangle of area:
     $$A = \frac{\sqrt{3}}{4}(\sqrt{2}a)^2 = \frac{\sqrt{3}}{2}a^2 = \frac{\sqrt{3}}{2}(1.239 \times 10^{-19}) = 1.073 \times 10^{-19}\text{ m}^2$$
     Atoms in this triangle: 3 corners ($3 \times 1/6 = 1/2$) + 3 mid-edge sites ($3 \times 1/2 = 3/2$) $= 2$ atoms.
     $$\rho_P(111) = \frac{2}{1.073 \times 10^{-19}\text{ m}^2} \approx 1.86 \times 10^{19}\text{ atoms/m}^2$$
   * Since $\{111\}$ planes are close-packed planes in FCC, no plane can have a higher packing density.

**Answer:**
1. $[100]: \frac{1}{a}; \quad [110]: \frac{\sqrt{2}}{a}; \quad [111]: \frac{1}{\sqrt{3}a}$
2. $\rho_{(100)} = 1.61 \times 10^{19}\text{ m}^{-2}; \quad \rho_{(110)} = 1.14 \times 10^{19}\text{ m}^{-2}; \quad \rho_{(111)} = 1.86 \times 10^{19}\text{ m}^{-2}$; No.

---

#### Practice Problem 4.2
Calculate the planar atomic density on the $(110)$ plane of a BCC crystal of $\alpha$-iron with lattice parameter $a = 2.87\text{ \AA}$.

---

### 4.3 Density and Lattice Parameter of FCC Copper

#### Problem 4.3 (Problem 11)
Copper has an FCC structure and a density of $8960\text{ kg/m}^3$. Given that the atomic mass of Copper is $63.54\text{ amu}$, calculate the unit cell edge length $a$ and the atomic radius $r$ of the Cu atom.

**Solution:**
1. **Effective number of atoms per FCC cell:** $n = 4$.
2. **Mass per atom:**
   $$m = 63.54 \times 1.6605 \times 10^{-27}\text{ kg} = 1.055 \times 10^{-25}\text{ kg}$$
3. **Mass of the unit cell:**
   $$M_{\text{cell}} = 4 \times 1.055 \times 10^{-25}\text{ kg} = 4.220 \times 10^{-25}\text{ kg}$$
4. **Volume of the unit cell:**
   $$V = a^3 = \frac{M_{\text{cell}}}{\rho} = \frac{4.220 \times 10^{-25}\text{ kg}}{8960\text{ kg/m}^3} \approx 4.710 \times 10^{-29}\text{ m}^3$$
5. **Lattice parameter $a$:**
   $$a = (4.710 \times 10^{-29}\text{ m}^3)^{1/3} = 3.611 \times 10^{-10}\text{ m} = 3.61\text{ \AA}$$
6. **Atomic radius $r$:**
   In an FCC lattice, $4r = \sqrt{2}a$:
   $$r = \frac{\sqrt{2}a}{4} = \frac{\sqrt{2}(3.611\text{ \AA})}{4} \approx 1.277\text{ \AA} \approx 1.28\text{ \AA}$$

**Answer:** $a = 3.61\text{ \AA}, \quad r = 1.28\text{ \AA}$

---

#### Practice Problem 4.3
Gold (FCC) has an atomic weight of $196.97\text{ amu}$ and an atomic radius of $1.442\text{ \AA}$. Calculate the density of gold.

---

### 4.4 Ideal Hexagonal Close-Packed (HCP) Geometry

#### Problem 4.4 (Problem 12 & Short Question 16)
Prove that the $c/a$ ratio for an ideal hexagonal close-packed structure is:
$$\frac{c}{a} = \sqrt{\frac{8}{3}} \approx 1.633$$

**Solution:**
1. Let the basal plane be an equilateral triangle of side $a$ formed by three spheres of radius $r = a/2$.
2. The atom of the subsequent $B$-layer rests in the triangular hollow between these three spheres.
3. The projection of the center of this sphere onto the basal plane coincides with the centroid $G$ of the equilateral triangle:
   * Distance from a vertex to the midpoint of the opposite base:
     $$h_{\text{triangle}} = a \sin 60^\circ = \frac{\sqrt{3}}{2}a$$
   * Distance from vertex to centroid $G$:
     $$d_G = \frac{2}{3} h_{\text{triangle}} = \frac{2}{3}\left(\frac{\sqrt{3}}{2}a\right) = \frac{a}{\sqrt{3}}$$
4. The sphere in the $B$-layer touches the spheres in the $A$-layer, so the sphere-to-sphere distance is $a$. The vertical height between the two layers is $c/2$.
5. Applying the Pythagorean theorem to the right-angled triangle formed by the vertex, centroid, and upper atom center:
   $$a^2 = d_G^2 + \left(\frac{c}{2}\right)^2$$
   $$a^2 = \left(\frac{a}{\sqrt{3}}\right)^2 + \frac{c^2}{4} = \frac{a^2}{3} + \frac{c^2}{4}$$
   $$a^2 - \frac{a^2}{3} = \frac{c^2}{4} \implies \frac{2}{3}a^2 = \frac{c^2}{4}$$
   $$\frac{c^2}{a^2} = \frac{8}{3} \implies \frac{c}{a} = \sqrt{\frac{8}{3}} \approx 1.633$$

---

#### Practice Problem 4.4
Magnesium has an HCP crystal structure with $a = 3.21\text{ \AA}$. Assuming an ideal $c/a$ ratio, calculate the unit cell height $c$ and the unit cell volume.

---

### 4.5 Properties of HCP Zinc

#### Problem 4.5 (Problem 13)
Zinc has an HCP crystal structure with lattice parameters $a = 2.66\text{ \AA}$ and $c = 4.95\text{ \AA}$. Given that the atomic radius is $r = 1.31\text{ \AA}$ and the atomic mass of $\text{Zn}$ is $65.37\text{ amu}$, calculate the packing fraction and the theoretical density of zinc.

**Solution:**
1. **Unit cell volume of HCP:**
   The conventional hexagonal prism has base area $A_{\text{hex}} = 6 \times \left(\frac{\sqrt{3}}{4}a^2\right) = \frac{3\sqrt{3}}{2}a^2$.
   $$V = A_{\text{hex}} \cdot c = \frac{3\sqrt{3}}{2}a^2 c$$
   Substitute $a = 2.66 \times 10^{-10}\text{ m}$ and $c = 4.95 \times 10^{-10}\text{ m}$:
   $$V = \frac{3\sqrt{3}}{2}(2.66 \times 10^{-10})^2 (4.95 \times 10^{-10}) \approx 2.598 \times (7.0756 \times 10^{-20}) \times (4.95 \times 10^{-10}) \approx 9.10 \times 10^{-29}\text{ m}^3$$

2. **Volume occupied by atoms:**
   An HCP unit cell contains $n = 6$ effective atoms:
   $$V_{\text{atoms}} = 6 \times \left( \frac{4}{3}\pi r^3 \right) = 8\pi(1.31 \times 10^{-10})^3 \approx 8\pi(2.248 \times 10^{-30}) \approx 5.65 \times 10^{-29}\text{ m}^3$$

3. **Packing fraction ($f$):**
   $$f = \frac{V_{\text{atoms}}}{V} = \frac{5.65 \times 10^{-29}}{9.10 \times 10^{-29}} \approx 0.6208 \implies 62\%$$

4. **Density ($\rho$):**
   Total mass in cell:
   $$M_{\text{cell}} = 6 \times \frac{65.37 \times 10^{-3}\text{ kg/mol}}{6.023 \times 10^{23}\text{ mol}^{-1}} \approx 6.512 \times 10^{-25}\text{ kg}$$
   $$\rho = \frac{M_{\text{cell}}}{V} = \frac{6.512 \times 10^{-25}\text{ kg}}{9.10 \times 10^{-29}\text{ m}^3} \approx 7156\text{ kg/m}^3$$

**Answer:** Packing fraction $= 62\%$; Density $= 7155\text{ kg/m}^3$

---

#### Practice Problem 4.5
Titanium crystallizes in an HCP structure with $a = 2.95\text{ \AA}$ and $c = 4.68\text{ \AA}$. Given $M_{\text{Ti}} = 47.87\text{ amu}$ and an atomic radius of $1.445\text{ \AA}$, calculate its packing fraction and density.

---

## 5. Diamond Cubic & Compound Structures

### 5.1 Diamond Cubic Geometry

#### Problem 5.1 (Problem 14 & Very Short Question 14)
1. Calculate the number of carbon atoms per unit cell of diamond.
2. Calculate the distance between two basis atoms of the diamond structure if the lattice constant is $a = 5\text{ \AA}$.

**Solution:**
1. **Atoms per unit cell:**
   The diamond cubic unit cell comprises:
   * An FCC host lattice: $8 \times \frac{1}{8} \text{ (corners)} + 6 \times \frac{1}{2} \text{ (faces)} = 4\text{ atoms}$.
   * 4 internal basis atoms located in four of the eight tetrahedral interstitial sites.
   $$\text{Total atoms} = 4 + 4 = 8\text{ atoms per unit cell}$$

2. **Distance between basis atoms:**
   The two basis atoms are situated at $(0,0,0)$ and $\left(\frac{a}{4}, \frac{a}{4}, \frac{a}{4}\right)$. The distance $d$ is:
   $$d = \sqrt{\left(\frac{a}{4}\right)^2 + \left(\frac{a}{4}\right)^2 + \left(\frac{a}{4}\right)^2} = \frac{\sqrt{3}}{4}a$$
   Substitute $a = 5\text{ \AA}$:
   $$d = \frac{\sqrt{3}}{4}(5\text{ \AA}) = \frac{1.73205}{4} \times 5 \approx 2.165\text{ \AA} \approx 2.17\text{ \AA}$$

**Answer:**
1. 8 carbon atoms
2. $2.17\text{ \AA}$

---

#### Practice Problem 5.1
Silicon has the diamond cubic structure with a lattice constant of $a = 5.43\text{ \AA}$. Find the distance between nearest-neighbor silicon atoms and compute the theoretical density of silicon ($M_{\text{Si}} = 28.09\text{ amu}$).

---

### 5.2 Sodium Chloride Structure

#### Problem 5.2 (Example 1.5)
Calculate the packing efficiency and theoretical density of sodium chloride ($\text{NaCl}$) using the following data:
* $r_{\text{Na}^+} = 0.98\text{ \AA}$
* $r_{\text{Cl}^-} = 1.81\text{ \AA}$
* Atomic mass of $\text{Na} = 22.99\text{ amu}$
* Atomic mass of $\text{Cl} = 35.45\text{ amu}$

**Solution:**
1. **Lattice parameter $a$:**
   In the $\text{NaCl}$ rock-salt structure, cations and anions alternate along the cube edges and touch:
   $$a = 2(r_{\text{Na}^+} + r_{\text{Cl}^-}) = 2(0.98\text{ \AA} + 1.81\text{ \AA}) = 2(2.79\text{ \AA}) = 5.58\text{ \AA}$$
   $$a = 5.58 \times 10^{-10}\text{ m}$$

2. **Unit cell volume:**
   $$V = a^3 = (5.58 \times 10^{-10}\text{ m})^3 = 1.737 \times 10^{-28}\text{ m}^3$$

3. **Ionic Volume in unit cell:**
   The unit cell contains 4 $\text{Na}^+$ ions and 4 $\text{Cl}^-$ ions:
   $$V_{\text{ions}} = 4 \times \frac{4}{3}\pi r_{\text{Na}^+}^3 + 4 \times \frac{4}{3}\pi r_{\text{Cl}^-}^3 = \frac{16\pi}{3}\left[ (0.98 \times 10^{-10})^3 + (1.81 \times 10^{-10})^3 \right]$$
   $$(0.98)^3 = 0.9412 \times 10^{-30}\text{ m}^3$$
   $$(1.81)^3 = 5.9297 \times 10^{-30}\text{ m}^3$$
   $$\text{Sum} = 6.871 \times 10^{-30}\text{ m}^3$$
   $$V_{\text{ions}} = \frac{16\pi}{3}(6.871 \times 10^{-30}) \approx 1.151 \times 10^{-28}\text{ m}^3$$

4. **Packing fraction ($f$):**
   $$f = \frac{V_{\text{ions}}}{V} = \frac{1.151 \times 10^{-28}}{1.737 \times 10^{-28}} \approx 0.663 \implies 66.3\%$$

5. **Density ($\rho$):**
   $$M_{\text{cell}} = 4 \times (22.99 + 35.45) \times 1.6605 \times 10^{-27}\text{ kg} = 4 \times 58.44 \times 1.6605 \times 10^{-27}\text{ kg} \approx 3.880 \times 10^{-25}\text{ kg}$$
   $$\rho = \frac{3.880 \times 10^{-25}\text{ kg}}{1.737 \times 10^{-28}\text{ m}^3} \approx 2234\text{ kg/m}^3 \quad (\text{or } 2.23\text{ g/cm}^3)$$

**Answer:** Packing efficiency $= 66.3\%$; Density $= 2234\text{ kg/m}^3$ ($2.23\text{ g/cm}^3$)

---

#### Practice Problem 5.2
Potassium chloride ($\text{KCl}$) has the $\text{NaCl}$ crystal structure. Given $r_{\text{K}^+} = 1.33\text{ \AA}$, $r_{\text{Cl}^-} = 1.81\text{ \AA}$, $M_{\text{K}} = 39.10\text{ amu}$, and $M_{\text{Cl}} = 35.45\text{ amu}$, compute the lattice parameter, packing efficiency, and density of $\text{KCl}$.