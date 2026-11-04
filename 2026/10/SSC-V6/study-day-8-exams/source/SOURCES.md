# Day 8 physics exams — source audit

Both requested Day 8 physics papers were found in Downloads:

| Paper | PDF | Matching TeX-preserving source HTML |
|---|---|---|
| Electrodynamics II Model Paper 4 | /home/ihjas/Downloads/ELECTRODYNAMICS-II-MODEL-PAPER-4.pdf | /home/ihjas/Downloads/ai_studio_code (29).html |
| Optics Model Paper 4 | /home/ihjas/Downloads/OPTICS-MODEL-PAPER-4.pdf | /home/ihjas/Downloads/ai_studio_code (30).html |

Verbatim copies are in ../papers/, with descriptive HTML filenames.
Each source has 20 questions, Sections A/B/C with 3/6/10 marks, ceilings 24/36/10,
and a two-hour duration. Section C asks for one answer. The practice meter uses
the best marked C answer when both are practised.

The original Day 8 reference extracts were retained under reference/:

- electrodynamics-ii/murugeshan-ch12-13-ac-resonance.pdf and syllabus.html.
- optics/ghatak-ch18-fraunhofer-single-two-n-slit-grating.pdf.
- optics/ghatak-ch20-fresnel-straight-edge-zone-plate.pdf.
- optics/ghatak-ch22-polarisation-intro.pdf and syllabus.pdf.

These were previously extracted from ssc-files for the Day 8 syllabus course.
This app follows the complete papers, including their explicit resolving-power,
field-vector and parallel-lossy-tank questions, rather than silently dropping
subparts because the timetable gave a shorter topic description.

## Solution conventions

All explanations, solutions, marking guides and quizzes were authored directly;
scripts were used only to extract/read sources, verify, validate, test and build.
The rubric is practice guidance and is not an official examiner's mark scheme.

Electrodynamics uses rms values for quoted AC supply voltages unless peak is
explicitly stated. Complex exponentials use exp(jωt) with an explicit real-part
convention; sinusoidal source questions keep their stated sine. Inductance has
positive and capacitance negative imaginary impedance. Q20's resonance means
zero input susceptance: ω_r² = 1/(LC) − R²/L², Z_r = L/(CR), with R² < L/C.
For finite coil resistance this in-phase frequency is not generally the exact
impedance-maximum frequency; rejector/minimum-current language is qualified as
the familiar low-loss response.

Optics uses slit width b and centre spacing d. Q12's b = d limit confirms the
source means centre spacing, rather than the opaque gap. Single-slit secondary
maxima use tanβ = β; the half-integer rule is labelled approximate.
The first side peak is about 4.72% of the centre (the coarse 3π/2 approximation
gives about 4.5%). The N-slit half-width is maximum to first zero, not half-power.

Q6: plane-wave zone areas are approximately equal in the paraxial approximation.
Keeping the exact boundary-distance correction gives adjacent-area difference
πλ²/2 rather than exactly zero. Q14 explicitly uses the equal-area approximation.
Its half-first-zone amplitude is the usual Fresnel alternating-zone argument.

Q11's “first two” minima/maxima is ambiguous. The solution gives the nearest
opposite-side pair and successive positive-side positions, explicitly:
minima at ±0.500 mm; first two positive secondary maxima about 0.71515 and
1.22951 mm. It also gives the common half-integer approximation separately.
The student should state which pair is being compared.

Q13: second-order separation is about 9.86968e−4 rad (3.393 arcmin). First-order
local focal-plane separation fΔθ is about 0.03780 mm. For a plane normal to the
grating normal using y = f tanθ, the result is 0.04300 mm. The lens/screen
orientation is unstated in the paper, so the solution/rubric records both
conventions without mixing them.

Q15 uses a conventional binary amplitude zone plate, with positive odd-order
foci 200, 66.67, 40.00, 28.57, … cm for the given wavelength.
Q16/Q17 use v₀ = −y√(2/λD), y positive into the illuminated region.
Q10's E and H expressions assume a homogeneous isotropic lossless dielectric;
H is magnetic-field strength and is distinguished from B = μH.

The runtime comes from the updated Day 9 physics app. Its flip/lock design
references are ../doc/tda.html and the adjacent briefing. It is extended here
only in this new folder with explicit low-mark scope and the /70 exam meter.
