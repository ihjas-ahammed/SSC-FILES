# Day 9 source audit

All active educational content was authored directly in the course JSON after
reading local syllabus and textbook material. No content-generation script was
used. The source mount was read without modification.

## Syllabi found

Both PDFs identify Calicut University, FYUGP BSc Physics Honours, 2024, Semester V.
They are not the older CBCSS examination syllabi in the PYQ folders.

- Original: /home/ihjas/mnt/ssc-files/SSC-V2/SEM5/PHY/QUANTUM_MECHANICS_I.pdf.
  Local copy: [Quantum Mechanics I](quantum-mechanics-i/syllabus.pdf).
  Today's scope is Module III, Units 12–17, printed syllabus pp.112–113
  (course extract PDF pp.2–3).
- Original: /home/ihjas/mnt/ssc-files/SSC-V2/SEM5/PHY/PROPERTIES_OF_SOLIDS.pdf.
  Local copy: [Properties of Solids](properties-of-solids/syllabus.pdf).
  Today's scope is Module II, Units 6–11 and Module III, Unit 12, printed syllabus
  pp.192–193 (course extract PDF pp.2–3).

## Required books found

All are in /home/ihjas/mnt/ssc-files/SSC-V2/SEM5/PHY/books/.

- Nouredine Zettili, *Quantum Mechanics: Concepts and Applications*, 2nd ed.
  Original filename: Quantum Mechanics Concepts and Applications (Nouredine Zettili) (z-library.sk, 1lib.sk, z-lib.sk).pdf.
  [Local extract](quantum-mechanics-i/zettili-tools-extract.pdf): original PDF pages
  96–115, printed pages 79–98. It includes page overlaps with adjacent sections;
  the authored deck uses §§2.2, 2.3, 2.4.1–2.4.2, 2.4.4–2.4.6 only.
- R. K. Puri and V. K. Babbar, *Solid State Physics and Electronics*, 3rd ed.
  Original filename: Solid State Physics and Electronics (RK Puri  VK Babbar) (z-library.sk, 1lib.sk, z-lib.sk).pdf.
  [Local extract](properties-of-solids/puri-babbar-solids-extract.pdf): original PDF
  pages 167–220, printed pages 151–204, covering the relevant material in
  §§5.1–5.3, 6.1–6.5 and 7.1–7.3.2.
- Griffiths & Schroeter, *Introduction to Quantum Mechanics*, 3rd ed., is also
  present. It is Book 1 in the quantum syllabus; today's mathematical-tool units
  explicitly cite Book 2 (Zettili), so Zettili is the primary quantum source.

The Puri & Babbar PDF's title includes “and Electronics”; its chapter/section
headings match those cited by the syllabus's “Solid State Physics” Book 1.

## Additional listed references not located

A search of PDF, EPUB and DJVU filenames throughout ssc-files did not locate
these additional syllabus references:

- R. Shankar, *Principles of Quantum Mechanics*.
- Ajoy Ghatak & S. Lokanathan, *Quantum Mechanics: Theory and Applications*.
- B. K. Agarwal, *Lectures on Quantum Mechanics*.
- Landau & Lifshitz, *Quantum Mechanics: Non-Relativistic Theory*.
- S. O. Pillai, *Solid State Physics*, 6th ed.
- M. A. Wahab, *Solid State Physics: Structure and Properties of Materials*.

These are supplementary to the books explicitly assigned to today's units.
No required syllabus or prescribed source for today's topics is missing.

## Timetable coverage

| Timetable item | Authored topic sheets | Primary text |
|---|---|---|
| Hilbert space, dimension, basis, square-integrable functions | Hilbert space, basis and wave functions | Zettili §2.2 |
| Kets, bras and bra-kets | Kets, bras and bra-kets | Zettili §2.3 |
| Operators and adjoints | Operators and the Hermitian adjoint | Zettili §§2.4.1–2.4.2 |
| Commutator algebra | Commutator algebra | Zettili §2.4.4 |
| Uncertainty between operators | Uncertainty between two operators | Zettili §2.4.5 |
| Functions of operators | Functions of operators | Zettili §2.4.6 |
| Drude–Lorentz theory | Drude–Lorentz classical theory | Puri & Babbar §5.1 |
| Sommerfeld, 1D free electrons | Sommerfeld gas in one dimension | Puri & Babbar §5.2.1 |
| Fermi energy, DOS, filling | Fermi energy, DOS and filling (includes total energy) | Puri & Babbar §§5.2.1–5.2.2 |
| Free-electron applications | Applications of the electron gas | Puri & Babbar §5.3 |
| Bands, Bloch, Kronig–Penney, effective mass | Three sheets: Bloch, Kronig–Penney, effective mass | Puri & Babbar §§6.1–6.4 |
| Metal, insulator, semiconductor | Metal, insulator or semiconductor? | Puri & Babbar §6.5 |
| Intrinsic and extrinsic semiconductors | Intrinsic and extrinsic semiconductors | Puri & Babbar §§7.1–7.3 |

15 sheets in 5 sections; 195 authored cards, including 19 requested plain-language
introductions, 12 derivations with 48 decision checkpoints and 46 scored
end-of-topic quizzes and 8 additional matrix examples. A manually authored
123-term glossary defines prerequisites, including state and the basic matrix terms.
The new two-component examples are original illustrations of Zettili's §§2.2–2.4
algebra; Example 2.3 (printed p.87) itself uses ket columns, bra rows and scalar
products before the later formal matrix-representation section. No separate
lesson on change of basis or the matrix eigenvalue problem was added.
The app expands
each derivation into its route, player, full-page and recall views.
