# Optics Textbook Sync Summary

**Date**: 2026-09-30  
**Course**: B.Sc. Physics Honours, Semester V (CU-FYUGP), *Optics* (`op`)  
**Syllabus**: `SSC-V2/SEM5/PHY/OPTICS.pdf`  
**Primary Reference**: Ajoy Ghatak, *Optics*, 6th Edition (`SSC-V2/SEM5/PHY/books/Optics by Ghatak.pdf`)  
*Note on Book 2*: N. Subrahmanyam, Brij Lal & M.N. Avadhanulu, *A Text Book of Optics* is not available in the repository. As directed, Module IV was mapped to and verified against the corresponding polarisation chapters of Ghatak 6e (Chapters 22 and 24.5).

---

## 1. What Was Corrected and Updated

### Concept `c.4.6.3`: Optical Activity and Specific Rotation
- **File**: `authoring/m4.concepts.py`
- **Section**: `sec 4.6` (Module IV, Unit 22)
- **Status Change**:
  - **Tier Correction**: Promoted from `tier='extra'` to `tier='core'`. (Unit 22 of the CU-FYUGP syllabus and Semester V Practical Exam 10 require Optical Activity and Specific Rotation as mandatory core syllabus topics.)
  - **Kind Upgrade**: Promoted from `kind='definition'` to `kind='theorem'`, incorporating the complete mathematical derivation of Fresnel's theory of optical rotation.
- **Content Alignment with Ghatak 6e §22.8 (pp. 373–374)**:
  - **Mathematical Proof (4 rungs)**:
    1. Incident linear wave decomposed along $x$-axis into counter-rotating circular modes of equal amplitude $E_0$ propagating with wavenumbers $k_R = \omega n_R / c$ and $k_L = \omega n_L / c$ (Ghatak Eqs. 22.56–22.57).
    2. Superposition of $x$-components using sum-to-product trigonometric identity:
       $$E_x = 2E_0\cos\left[\frac{1}{2}(k_L - k_R)z\right]\cos\left[\omega t - \frac{1}{2}(k_R + k_L)z\right]$$
    3. Superposition of $y$-components using difference trigonometric identity:
       $$E_y = 2E_0\sin\left[\frac{1}{2}(k_L - k_R)z\right]\cos\left[\omega t - \frac{1}{2}(k_R + k_L)z\right]$$
    4. Sharing of identical temporal phase $\cos[\omega t - \bar{k} z]$ establishes that the emergent light remains purely linearly polarized, with its plane rotated by:
       $$\theta(z) = \frac{1}{2}(k_L - k_R)z = \frac{\pi z}{\lambda_0}(n_L - n_R)\qquad\text{(Ghatak Eq. 22.58)}$$
  - **Textbook Numerical Values**:
    - Turpentine: optical rotation $\theta = +37^\circ$ for $z = 10\text{ cm}$.
    - Quartz (along optic axis): circular birefringence $n_L - n_R \approx 7 \times 10^{-5}$, giving rotation $\theta \approx 21.0^\circ$ ($21^\circ 7'$) per millimetre ($z = 0.1\text{ cm}$) at $\lambda_0 = 6000\text{ \AA}$ ($0.6\ \mu\text{m}$).
  - **Specific Rotation Definition**: Formulated as $[\alpha]_\lambda^T = \frac{\theta}{l \cdot c}$ with $l$ in decimetres ($1\text{ dm} = 10\text{ cm}$) and $c$ in $\text{g cm}^{-3}$.
- **Teaching Layer (`authoring/steps.py`)**:
  - Added entry `S('c.4.6.3', None, [None, None, None, None], [...])` with 4 plain-language explanations of what each derivation step physically does (spinning wheels decomposition, component superpositions, and resultant tilt).
  - Added entries `NF('c.4.6.3', 0..3, ...)` stating diagram requirements.
  - Added entry `NS('c.4.6.3', ...)` stating simulation reason.

---

## 2. What Was Added (Files & Artifacts)

1. **`sources/section_map.md`**: Complete mapping of all 22 syllabus units across Modules I–IV to exact Ghatak 6e section headings, printed page numbers, and PDF page numbers.
2. **`sources/gap_report.md`**: Detailed unit-by-unit audit comparing textbook content (derivations, worked examples, key formulas, constants) against existing app concepts, noting coverage status and diagram requirements.
3. **`sources/textbook/sec_22.8.txt`**: Extracted raw textbook text of Ghatak 6e §22.8 (PDF pp. 373–378) using `pdftotext -layout` for provenance.
4. **`sources/SYNC_SUMMARY.md`**: This summary file.

---

## 3. Verification Suite Results

All commands executed from `SSC-V4/optics`:

1. **`python3 tools/author.py`**:
   - Compiled all 14 authoring Python files cleanly with 0 syntax warnings.
   - Updated `data/*.js` and `authoring/_concept_index.txt` with consistent schema and escaped JSON.
2. **`node tools/check_tex.js`**:
   - Checked 64 concepts, 110 objective questions, 72 written questions, and 38 past paper items.
   - **0 TeX errors**.
3. **`python3 tools/audit_steps.py`**:
   - 142 proof steps audited: 137 with diagrams, 5 with documented reasons for none.
   - 42 proofs audited: 39 with live simulations, 3 with documented reasons for none.
   - **All plain-language meaning checks passed**.
4. **`node tools/audit_optics.js`**:
   - Headless browser audit: 41 diagram kinds, 138 stage renders inside bounding frames with no NaNs.
   - 22 simulations: 616 scenes drawn, 525 physical law checks verified against independent analytical calculations, 66 Predict tasks evaluated.
   - Registry checks: all 41 diagram kinds used, all 22 simulations hosted by concepts.
   - **Status: Every check passed.**

---

## 4. What Remains / Outstanding Notes

1. **Book 2 (Subrahmanyam, Brij Lal & Avadhanulu)**:
   - Book 2 remains unavailable in the repository. Module IV is fully covered using the authoritative treatment in Ghatak 6e Chapters 22 and 24.5.
2. **Diagrams to Draw**:
   - `c.4.6.3` (steps 1–4): Needs a 4-stage diagram illustrating Fresnel's decomposition of a linear electric field vector into counter-rotating circular vectors (RCP and LCP) at $z=0$, differential phase accumulation over path length $z$ in an active medium with $n_L \neq n_R$, and recombination producing a tilted linear vibration plane.
