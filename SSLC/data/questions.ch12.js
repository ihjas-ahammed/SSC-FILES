/* ══════════════════════════════════════════════════════════════════════════
   Class 8 Mathematics — Chapter 12: Parallel Lines (സമാന്തരവരകൾ)
   Objective (OMR) Questions & Written Practice Questions
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   Zero mixing. Authentic SCERT Kerala textbook terminology.
   ══════════════════════════════════════════════════════════════════════════ */

/* ── Level 1: Objective Questions (OMR) ─────────────────────────────────── */
OBJECTIVE.push(
  /* ──────────────────────────────────────────────────────────────────────────
     8.12.1 Parallel Lines & Transversal Angles
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m8.12.1',
    concept: 'm8.12.1.parallel-lines-transversal',
    sec: '8.12.1',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'Two parallel lines are cut by a transversal. If one interior angle is $75^\\circ$, what is the co-interior angle on the same side of the transversal?',
    prompt_ml: 'രണ്ട് സമാന്തരവരകളെ ഒരു ചേദകരേഖ ഖണ്ഡിക്കുന്നു. ഒരു ആന്തരകോൺ $75^\\circ$ ആയാൽ, ചേദകരേഖയുടെ അതേവശത്തുള്ള മറ്റേ ആന്തരകോൺ എത്ര?',
    options_en: [
      { k: 'A', t: '$105^\\circ$' },
      { k: 'B', t: '$75^\\circ$' },
      { k: 'C', t: '$115^\\circ$' },
      { k: 'D', t: '$95^\\circ$' }
    ],
    options_ml: [
      { k: 'A', t: '$105^\\circ$' },
      { k: 'B', t: '$75^\\circ$' },
      { k: 'C', t: '$115^\\circ$' },
      { k: 'D', t: '$95^\\circ$' }
    ],
    answer: 'A',
    solution_en: 'Co-interior angles on the same side of a transversal are supplementary: $180^\\circ - 75^\\circ = 105^\\circ$.',
    solution_ml: 'സമാന്തരവരകളുടെ ഒരു വശത്തെ ആന്തരകോണുകളുടെ തുക $180^\\circ$ ആണ്: $180^\\circ - 75^\\circ = 105^\\circ$.',
    tested_en: 'Co-interior angle property of parallel lines.',
    tested_ml: 'സമാന്തരവരകളുടെ ആന്തരകോൺ നിയമം.'
  },
  {
    id: 'obj.m8.12.2',
    concept: 'm8.12.1.parallel-lines-transversal',
    sec: '8.12.1',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'In the figure of two parallel lines cut by a transversal, an alternate interior angle to an angle measuring $54^\\circ$ has measure:',
    prompt_ml: 'രണ്ട് സമാന്തരവരകളെ ഒരു ചേദകരേഖ ഖണ്ഡിക്കുമ്പോൾ $54^\\circ$ അളവുള്ള കോണിന്റെ ഏകാന്തരകോണിന്റെ അളവ് എത്രയാണ്?',
    options_en: [
      { k: 'A', t: '$54^\\circ$' },
      { k: 'B', t: '$126^\\circ$' },
      { k: 'C', t: '$36^\\circ$' },
      { k: 'D', t: '$144^\\circ$' }
    ],
    options_ml: [
      { k: 'A', t: '$54^\\circ$' },
      { k: 'B', t: '$126^\\circ$' },
      { k: 'C', t: '$36^\\circ$' },
      { k: 'D', t: '$144^\\circ$' }
    ],
    answer: 'A',
    solution_en: 'Alternate interior angles formed by parallel lines cut by a transversal are equal: both measure $54^\\circ$.',
    solution_ml: 'സമാന്തരവരകളെ ചേദകരേഖ ഖണ്ഡിക്കുമ്പോൾ ഉണ്ടാകുന്ന ഏകാന്തരകോണുകൾ തുല്യമാണ്: രണ്ടിന്റെയും അളവ് $54^\\circ$ ആയിരിക്കും.',
    tested_en: 'Alternate interior angle equality.',
    tested_ml: 'ഏകാന്തരകോണുകളുടെ തുല്യത.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     8.12.2 Equidistant Parallel Lines
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m8.12.3',
    concept: 'm8.12.2.equidistant-parallel-lines',
    sec: '8.12.2',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'Three parallel lines cut off equal intercepts of $4.5\\text{ cm}$ on one transversal line. If they cut another transversal line into segments of lengths $x$ and $6\\text{ cm}$, what is $x$?',
    prompt_ml: 'മൂന്ന് സമാന്തരവരകൾ ഒരു ചേദകരേഖയിൽ $4.5\\text{ cm}$ വീതമുള്ള തുല്യതുണ്ടുകൾ ഉണ്ടാക്കുന്നു. മറ്റൊരു ചേദകരേഖയിൽ അവ ഉണ്ടാക്കുന്ന തുണ്ടുകളുടെ നീളം $x$, $6\\text{ cm}$ എന്നിവയാണെങ്കിൽ $x$-ന്റെ വില എത്ര?',
    options_en: [
      { k: 'A', t: '$6\\text{ cm}$' },
      { k: 'B', t: '$4.5\\text{ cm}$' },
      { k: 'C', t: '$9\\text{ cm}$' },
      { k: 'D', t: '$3\\text{ cm}$' }
    ],
    options_ml: [
      { k: 'A', t: '$6\\text{ cm}$' },
      { k: 'B', t: '$4.5\\text{ cm}$' },
      { k: 'C', t: '$9\\text{ cm}$' },
      { k: 'D', t: '$3\\text{ cm}$' }
    ],
    answer: 'A',
    solution_en: 'By the equidistant parallel lines theorem, if parallel lines make equal intercepts on one transversal, they make equal intercepts on any other transversal. Hence $x = 6\\text{ cm}$.',
    solution_ml: 'സമാന്തരവരകൾ ഒരു വരയിൽ തുല്യഭാഗങ്ങൾ ഉണ്ടാക്കിയാൽ മറ്റേതൊരു വരയിലും തുല്യഭാഗങ്ങൾ ഉണ്ടാക്കും. അതിനാൽ $x = 6\\text{ cm}$.',
    tested_en: 'Equidistant parallel lines theorem.',
    tested_ml: 'തുല്യ അകലത്തിലുള്ള സമാന്തരവരകളുടെ സിദ്ധാന്തം.'
  },
  {
    id: 'obj.m8.12.4',
    concept: 'm8.12.2.equidistant-parallel-lines',
    sec: '8.12.2',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'Four parallel lines are drawn at equal distances apart. If they intercept a line segment of total length $15\\text{ cm}$ between the outermost lines, what is the length of each intercept?',
    prompt_ml: 'തുല്യ അകലത്തിൽ നാല് സമാന്തരവരകൾ വരച്ചിരിക്കുന്നു. പുറമെയുള്ള രണ്ട് വരകൾക്കിടയിൽ ഒരു വരയുടെ നീളം $15\\text{ cm}$ ആയാൽ, ഓരോ തുണ്ടിന്റെയും നീളം എത്രയായിരിക്കും?',
    options_en: [
      { k: 'A', t: '$5\\text{ cm}$' },
      { k: 'B', t: '$3.75\\text{ cm}$' },
      { k: 'C', t: '$3\\text{ cm}$' },
      { k: 'D', t: '$4\\text{ cm}$' }
    ],
    options_ml: [
      { k: 'A', t: '$5\\text{ cm}$' },
      { k: 'B', t: '$3.75\\text{ cm}$' },
      { k: 'C', t: '$3\\text{ cm}$' },
      { k: 'D', t: '$4\\text{ cm}$' }
    ],
    answer: 'A',
    solution_en: 'Four parallel lines create $4 - 1 = 3$ equal intervals. Each interval $= \\frac{15}{3} = 5\\text{ cm}$.',
    solution_ml: 'നാല് സമാന്തരവരകൾക്കിടയിൽ $4 - 1 = 3$ തുല്യഭാഗങ്ങളുണ്ടാകും. ഓരോ ഭാഗത്തിന്റെയും നീളം $= \\frac{15}{3} = 5\\text{ cm}$.',
    tested_en: 'Counting intervals between parallel lines.',
    tested_ml: 'സമാന്തരവരകൾക്കിടയിലെ തുല്യഭാഗങ്ങളുടെ എണ്ണം കണക്കാക്കൽ.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     8.12.3 Dividing Line Segments
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m8.12.5',
    concept: 'm8.12.3.dividing-line-segments',
    sec: '8.12.3',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'A line segment of length $12\\text{ cm}$ is divided into 4 equal parts using parallel lines. What is the length of each part?',
    prompt_ml: '$12\\text{ cm}$ നീളമുള്ള വരയെ സമാന്തരവരകൾ ഉപയോഗിച്ച് 4 തുല്യഭാഗങ്ങളാക്കിയാൽ ഓരോ ഭാഗത്തിന്റെയും നീളം എത്ര?',
    options_en: [
      { k: 'A', t: '$3\\text{ cm}$' },
      { k: 'B', t: '$4\\text{ cm}$' },
      { k: 'C', t: '$2.5\\text{ cm}$' },
      { k: 'D', t: '$3.5\\text{ cm}$' }
    ],
    options_ml: [
      { k: 'A', t: '$3\\text{ cm}$' },
      { k: 'B', t: '$4\\text{ cm}$' },
      { k: 'C', t: '$2.5\\text{ cm}$' },
      { k: 'D', t: '$3.5\\text{ cm}$' }
    ],
    answer: 'A',
    solution_en: 'Each part $= \\frac{12\\text{ cm}}{4} = 3\\text{ cm}$.',
    solution_ml: 'ഓരോ ഭാഗത്തിന്റെയും നീളം $= \\frac{12\\text{ cm}}{4} = 3\\text{ cm}$.',
    tested_en: 'Equal division of line segment.',
    tested_ml: 'വരയെ തുല്യഭാഗങ്ങളാക്കൽ.'
  },
  {
    id: 'obj.m8.12.6',
    concept: 'm8.12.3.dividing-line-segments',
    sec: '8.12.3',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'To divide a line segment in the ratio $3 : 5$ using a ray and parallel lines, how many equal divisions must be marked on the ray?',
    prompt_ml: 'ഒരു വരയെ $3 : 5$ എന്ന അംശബന്ധത്തിൽ സമാന്തരവരകൾ ഉപയോഗിച്ച് ഭാഗിക്കാൻ സഹായരശ്മിയിൽ ആകെ എത്ര തുല്യഭാഗങ്ങൾ അടയാളപ്പെടുത്തണം?',
    options_en: [
      { k: 'A', t: '$8$' },
      { k: 'B', t: '$5$' },
      { k: 'C', t: '$15$' },
      { k: 'D', t: '$2$' }
    ],
    options_ml: [
      { k: 'A', t: '$8$' },
      { k: 'B', t: '$5$' },
      { k: 'C', t: '$15$' },
      { k: 'D', t: '$2$' }
    ],
    answer: 'A',
    solution_en: 'Total parts on the ray $= 3 + 5 = 8$. The parallel line is drawn through the 3rd mark.',
    solution_ml: 'സഹായരശ്മിയിലെ ആകെ ഭാഗങ്ങൾ $= 3 + 5 = 8$. മൂന്നാമത്തെ അടയാളത്തിലൂടെയാണ് സമാന്തരവര വരയ്ക്കുന്നത്.',
    tested_en: 'Geometric ratio division method.',
    tested_ml: 'അംശബന്ധ വിഭജന നിർമ്മിതി.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     8.12.4 Three Parallel Lines Theorem & Triangle Proportionality
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m8.12.7',
    concept: 'm8.12.4.three-parallel-lines-theorem',
    sec: '8.12.4',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'In $\\triangle ABC$, a line $DE$ parallel to $BC$ cuts $AB$ at $D$ and $AC$ at $E$. If $AD = 4\\text{ cm}$, $DB = 6\\text{ cm}$, and $AE = 5\\text{ cm}$, what is $EC$?',
    prompt_ml: '$\\triangle ABC$-ൽ $BC$-ക്ക് സമാന്തരമായ $DE$ എന്ന വര $AB$-യെ $D$-യിലും $AC$-യെ $E$-യിലും ഖണ്ഡിക്കുന്നു. $AD = 4\\text{ cm}$, $DB = 6\\text{ cm}$, $AE = 5\\text{ cm}$ ആയാൽ $EC$ എത്ര?',
    options_en: [
      { k: 'A', t: '$7.5\\text{ cm}$' },
      { k: 'B', t: '$8\\text{ cm}$' },
      { k: 'C', t: '$7\\text{ cm}$' },
      { k: 'D', t: '$6.5\\text{ cm}$' }
    ],
    options_ml: [
      { k: 'A', t: '$7.5\\text{ cm}$' },
      { k: 'B', t: '$8\\text{ cm}$' },
      { k: 'C', t: '$7\\text{ cm}$' },
      { k: 'D', t: '$6.5\\text{ cm}$' }
    ],
    answer: 'A',
    solution_en: 'By Thales theorem: $\\frac{AD}{DB} = \\frac{AE}{EC} \\implies \\frac{4}{6} = \\frac{5}{EC} \\implies EC = \\frac{6 \\times 5}{4} = 7.5\\text{ cm}$.',
    solution_ml: 'ഥേൽസ് സിദ്ധാന്തപ്രകാരം: $\\frac{AD}{DB} = \\frac{AE}{EC} \\implies \\frac{4}{6} = \\frac{5}{EC} \\implies EC = \\frac{6 \\times 5}{4} = 7.5\\text{ cm}$.',
    tested_en: 'Triangle proportionality theorem (Thales theorem).',
    tested_ml: 'ത്രികോണ അനുപാത സിദ്ധാന്തം.'
  },
  {
    id: 'obj.m8.12.8',
    concept: 'm8.12.4.three-parallel-lines-theorem',
    sec: '8.12.4',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'Three parallel lines intercept two lines. On the first line, the intercepts are $2\\text{ cm}$ and $5\\text{ cm}$. If the shorter intercept on the second line is $6\\text{ cm}$, what is the longer intercept?',
    prompt_ml: 'മൂന്ന് സമാന്തരവരകൾ രണ്ട് ചേദകരേഖകളെ ഖണ്ഡിക്കുന്നു. ആദ്യ വരയിലെ തുണ്ടുകൾ $2\\text{ cm}$, $5\\text{ cm}$ എന്നിവയാണ്. രണ്ടാമത്തെ വരയിലെ ചെറിയ തുണ്ടിന്റെ നീളം $6\\text{ cm}$ ആയാൽ വലിയ തുണ്ടിന്റെ നീളം എത്ര?',
    options_en: [
      { k: 'A', t: '$15\\text{ cm}$' },
      { k: 'B', t: '$12\\text{ cm}$' },
      { k: 'C', t: '$10\\text{ cm}$' },
      { k: 'D', t: '$18\\text{ cm}$' }
    ],
    options_ml: [
      { k: 'A', t: '$15\\text{ cm}$' },
      { k: 'B', t: '$12\\text{ cm}$' },
      { k: 'C', t: '$10\\text{ cm}$' },
      { k: 'D', t: '$18\\text{ cm}$' }
    ],
    answer: 'A',
    solution_en: 'By the three parallel lines proportionality theorem: $\\frac{2}{5} = \\frac{6}{y} \\implies y = \\frac{5 \\times 6}{2} = 15\\text{ cm}$.',
    solution_ml: 'മൂന്ന് സമാന്തരവരകളുടെ അനുപാത സിദ്ധാന്തപ്രകാരം: $\\frac{2}{5} = \\frac{6}{y} \\implies y = \\frac{5 \\times 6}{2} = 15\\text{ cm}$.',
    tested_en: 'Proportional intercepts on transversals.',
    tested_ml: 'സമാന്തരവരകളിലെ തുണ്ടുകളുടെ അനുപാതം.'
  }
);

/* ── Level 2: Written Exercises ─────────────────────────────────────────── */
WRITTEN.push(
  {
    id: 'w.m8.12.1',
    sec: '8.12.1',
    concept: 'm8.12.1.parallel-lines-transversal',
    title_en: 'Calculating Transversal Angles in Parallel Lines',
    title_ml: 'സമാന്തരവരകളിലെ കോണുകൾ കണക്കാക്കൽ',
    prompt_en: '<p>Two parallel lines $AB$ and $CD$ are intersected by a transversal $EF$ at points $P$ and $Q$ respectively. If $\\angle APQ = 115^\\circ$, calculate the measures of $\\angle PQD$, $\\angle PQC$, and $\\angle BPQ$, providing the geometric reasons for each.</p>',
    prompt_ml: '<p>$AB, CD$ എന്നീ സമാന്തരവരകളെ $EF$ എന്ന ചേദകരേഖ യഥാക്രമം $P, Q$ എന്നീ ബിന്ദുക്കളിൽ ഖണ്ഡിക്കുന്നു. $\\angle APQ = 115^\\circ$ ആയാൽ $\\angle PQD$, $\\angle PQC$, $\\angle BPQ$ എന്നിവയുടെ അളവുകൾ ജ്യാമിതീയ കാരണങ്ങൾ സഹിതം കണ്ടെത്തുക.</p>',
    solution_en: `$$\\text{Given: } AB \\parallel CD \\text{ and transversal } EF, \\quad \\angle APQ = 115^\\circ.$$

$$\\text{1. Angle } \\angle PQD:$$
$$\\angle PQD \\text{ and } \\angle APQ \\text{ are alternate interior angles.}$$
$$\\angle PQD = \\angle APQ = \\mathbf{115^\\circ}.$$

$$\\text{2. Angle } \\angle PQC:$$
$$\\angle APQ \\text{ and } \\angle PQC \\text{ are co-interior angles on the same side of transversal } EF.$$
$$\\angle APQ + \\angle PQC = 180^\\circ \\implies \\angle PQC = 180^\\circ - 115^\\circ = \\mathbf{65^\\circ}.$$

$$\\text{3. Angle } \\angle BPQ:$$
$$\\angle APQ \\text{ and } \\angle BPQ \\text{ form a linear pair on line } AB.$$
$$\\angle BPQ = 180^\\circ - 115^\\circ = \\mathbf{65^\\circ}.$$`,
    solution_ml: `$$\\text{നൽകിയിരിക്കുന്നത്: } AB \\parallel CD, \\text{ ചേദകരേഖ } EF, \\quad \\angle APQ = 115^\\circ.$$

$$\\text{1. } \\angle PQD \\text{ കോണിന്റെ അളവ്:}$$
$$\\angle PQD, \\angle APQ \\text{ എന്നിവ ഏകാന്തരകോണുകളാണ്. സമാന്തരവരകളിൽ ഏകാന്തരകോണുകൾ തുല്യമാണ്.}$$
$$\\angle PQD = \\angle APQ = \\mathbf{115^\\circ}.$$

$$\\text{2. } \\angle PQC \\text{ കോണിന്റെ അളവ്:}$$
$$\\angle APQ, \\angle PQC \\text{ എന്നിവ ചേദകരേഖയുടെ ഒരേവശത്തുള്ള ആന്തരകോണുകളാണ്.}$$
$$\\angle APQ + \\angle PQC = 180^\\circ \\implies \\angle PQC = 180^\\circ - 115^\\circ = \\mathbf{65^\\circ}.$$

$$\\text{3. } \\angle BPQ \\text{ കോണിന്റെ അളവ്:}$$
$$\\angle APQ, \\angle BPQ \\text{ എന്നിവ രേഖീയജോടിയാണ്.}$$
$$\\angle BPQ = 180^\\circ - 115^\\circ = \\mathbf{65^\\circ}.$$`
  },

  {
    id: 'w.m8.12.2',
    sec: '8.12.2',
    concept: 'm8.12.2.equidistant-parallel-lines',
    title_en: 'Proof and Application of Equidistant Parallel Lines',
    title_ml: 'തുല്യ അകലത്തിലുള്ള സമാന്തരവരകളുടെ പ്രയോഗം',
    prompt_en: '<p>Three parallel lines cut a transversal $T_1$ at points $A, B, C$ such that $AB = BC = 5\\text{ cm}$. Another line $T_2$ intersects the three parallel lines at $D, E, F$. If the total length $DF = 13\\text{ cm}$, find the lengths of $DE$ and $EF$. Explain why this holds true.</p>',
    prompt_ml: '<p>മൂന്ന് സമാന്തരവരകൾ $T_1$ എന്ന വരയെ $A, B, C$ ബിന്ദുക്കളിൽ ഖണ്ഡിക്കുന്നു; $AB = BC = 5\\text{ cm}$ ആണ്. മറ്റൊരു വര $T_2$ ഈ സമാന്തരവരകളെ $D, E, F$ ബിന്ദുക്കളിൽ ഖണ്ഡിക്കുന്നു. ആകെ നീളം $DF = 13\\text{ cm}$ ആയാൽ $DE, EF$ എന്നിവയുടെ നീളങ്ങൾ കണ്ടെത്തുക. കാരണം വ്യക്തമാക്കുക.</p>',
    solution_en: `$$\\text{1. By the Equidistant Parallel Lines Theorem:}$$
$$\\text{Since } AB = BC \\text{ on transversal } T_1, \\text{ the parallel lines must intercept equal segments on transversal } T_2.$$
$$DE = EF.$$

$$\\text{2. Calculate individual segment lengths:}$$
$$DF = DE + EF = 2 \\times DE = 13\\text{ cm}.$$
$$DE = \\frac{13}{2} = \\mathbf{6.5\\text{ cm}}.$$
$$EF = \\mathbf{6.5\\text{ cm}}.$$

$$\\text{Conclusion: Any other line intersecting these parallel lines will also be bisected into two equal pieces of } 6.5\\text{ cm}.$$`,
    solution_ml: `$$\\text{1. തുല്യ അകലത്തിലുള്ള സമാന്തരവരകളുടെ സിദ്ധാന്തപ്രകാരം:}$$
$$T_1 \\text{ എന്ന വരയിൽ } AB = BC \\text{ ആയതിനാൽ, സമാന്തരവരകൾ } T_2 \\text{ എന്ന വരയെയും തുല്യഭാഗങ്ങളായിത്തന്നെ ഭാഗിക്കും.}$$
$$DE = EF.$$

$$\\text{2. ഓരോ തുണ്ടിന്റെയും നീളം കണക്കാക്കുന്നു:}$$
$$DF = DE + EF = 2 \\times DE = 13\\text{ cm}.$$
$$DE = \\frac{13}{2} = \\mathbf{6.5\\text{ cm}}.$$
$$EF = \\mathbf{6.5\\text{ cm}}.$$

$$\\text{തീരുമാനം: ഈ സമാന്തരവരകളെ മുറിച്ചുകടക്കുന്ന രണ്ടാമത്തെ വരയിലെ തുണ്ടുകൾ } DE = EF = 6.5\\text{ cm} \\text{ വീതമായിരിക്കും.}$$`
  },

  {
    id: 'w.m8.12.3',
    sec: '8.12.3',
    concept: 'm8.12.3.dividing-line-segments',
    title_en: 'Dividing a 9 cm Line Segment in the Ratio 2 : 3',
    title_ml: '9 cm നീളമുള്ള വരയെ 2 : 3 എന്ന അംശബന്ധത്തിൽ വിഭജിക്കൽ',
    prompt_en: '<p>A line segment $AB$ of length $9\\text{ cm}$ is to be divided in the ratio $2 : 3$. Describe the geometric construction steps using parallel lines, and calculate the exact lengths of the two resulting segments $AP$ and $PB$.</p>',
    prompt_ml: '<p>$9\\text{ cm}$ നീളമുള്ള $AB$ എന്ന വരയെ $2 : 3$ എന്ന അംശബന്ധത്തിൽ വിഭജിക്കണം. സമാന്തരവരകൾ ഉപയോഗിച്ചുള്ള ജ്യാമിതീയ നിർമ്മിതിയുടെ ഘട്ടങ്ങൾ എഴുതുക. രണ്ട് ഭാഗങ്ങളുടെയും ($AP, PB$) നീളങ്ങൾ കണക്കാക്കുക.</p>',
    solution_en: `$$\\text{1. Construction Steps:}$$
$$\\text{Step a: Draw line segment } AB = 9\\text{ cm}.$$
$$\\text{Step b: Draw a ray } AX \\text{ making an acute angle with } AB.$$
$$\\text{Step c: Mark } 2 + 3 = 5 \\text{ equal segments on ray } AX: A_1, A_2, A_3, A_4, A_5.$$
$$\\text{Step d: Join } A_5 \\text{ to } B.$$
$$\\text{Step e: Through } A_2, \\text{ draw a line parallel to } A_5 B \\text{ meeting } AB \\text{ at } P.$$
$$\\text{By parallel line ratio projection, } AP : PB = 2 : 3.$$

$$\\text{2. Mathematical Calculation:}$$
$$\\text{Total parts} = 2 + 3 = 5.$$
$$AP = \\frac{2}{5} \\times 9\\text{ cm} = \\frac{18}{5} = \\mathbf{3.6\\text{ cm}}.$$
$$PB = \\frac{3}{5} \\times 9\\text{ cm} = \\frac{27}{5} = \\mathbf{5.4\\text{ cm}}.$$
$$\\text{Check: } 3.6 + 5.4 = 9.0\\text{ cm}, \\quad \\frac{3.6}{5.4} = \\frac{2}{3}.$$`,
    solution_ml: `$$\\text{1. നിർമ്മിതിയുടെ ഘട്ടങ്ങൾ:}$$
$$\\text{ഘട്ടം a: } AB = 9\\text{ cm} \\text{ നീളത്തിൽ വരയ്ക്കുക.}$$
$$\\text{ഘട്ടം b: } AB\\text{-യുമായി ന്യൂനകോണുണ്ടാക്കുന്ന } AX \\text{ എന്ന സഹായരശ്മി വരയ്ക്കുക.}$$
$$\\text{ഘട്ടം c: കോമ്പസ് ഉപയോഗിച്ച് } AX\\text{-ൽ } 2 + 3 = 5 \\text{ തുല്യ അടയാളങ്ങൾ } (A_1, A_2, A_3, A_4, A_5) \\text{ രേഖപ്പെടുത്തുക.}$$
$$\\text{ഘട്ടം d: } A_5 \\text{ ബിന്ദുവിനെ } B\\text{-യുമായി യോജിപ്പിക്കുക.}$$
$$\\text{ഘട്ടം e: } A_2\\text{-ലൂടെ } A_5 B\\text{-ക്ക് സമാന്തരമായി വരയ്ക്കുന്ന വര } AB\\text{-യെ } P\\text{-ൽ ഖണ്ഡിക്കുന്നു.}$$
$$\\text{സമാന്തരവരകളുടെ നിയമപ്രകാരം } AP : PB = 2 : 3 \\text{ ആയിരിക്കും.}$$

$$\\text{2. ഗണിതക്രിയ:}$$
$$\\text{ആകെ ഭാഗങ്ങൾ} = 2 + 3 = 5.$$
$$AP = \\frac{2}{5} \\times 9\\text{ cm} = \\frac{18}{5} = \\mathbf{3.6\\text{ cm}}.$$
$$PB = \\frac{3}{5} \\times 9\\text{ cm} = \\frac{27}{5} = \\mathbf{5.4\\text{ cm}}.$$
$$\\text{പരിശോധന: } 3.6 + 5.4 = 9\\text{ cm}, \\quad \\frac{3.6}{5.4} = \\frac{2}{3}.$$`
  },

  {
    id: 'w.m8.12.4',
    sec: '8.12.4',
    concept: 'm8.12.4.three-parallel-lines-theorem',
    title_en: 'Finding Unknown Lengths Using Thales Theorem',
    title_ml: 'ഥേൽസ് സിദ്ധാന്തം ഉപയോഗിച്ച് അജ്ഞാതനീളം കാണൽ',
    prompt_en: '<p>In $\\triangle PQR$, $ST$ is drawn parallel to base $QR$, cutting $PQ$ at $S$ and $PR$ at $T$. It is given that $PS = 3\\text{ cm}$, $SQ = 5\\text{ cm}$, and the total length $PR = 16\\text{ cm}$. Find the lengths of $PT$ and $TR$.</p>',
    prompt_ml: '<p>$\\triangle PQR$-ൽ പാദമായ $QR$-ന് സമാന്തരമായി വരച്ച $ST$ എന്ന വര $PQ$-വിനെ $S$-ലും $PR$-നെ $T$-ലും ഖണ്ഡിക്കുന്നു. $PS = 3\\text{ cm}$, $SQ = 5\\text{ cm}$, ആകെ നീളം $PR = 16\\text{ cm}$ ആയാൽ $PT, TR$ എന്നിവയുടെ നീളങ്ങൾ കണ്ടെത്തുക.</p>',
    solution_en: `$$\\text{Given: } ST \\parallel QR \\text{ in } \\triangle PQR, \\quad PS = 3\\text{ cm}, \\quad SQ = 5\\text{ cm}, \\quad PR = 16\\text{ cm}.$$

$$\\text{By the Triangle Proportionality Theorem (Thales' Theorem):}$$
$$\\frac{PS}{SQ} = \\frac{PT}{TR}$$
$$\\frac{3}{5} = \\frac{PT}{TR}$$

$$\\text{Also, } PT + TR = PR = 16\\text{ cm}.$$
$$\\text{Let } PT = 3k \\text{ and } TR = 5k.$$
$$3k + 5k = 16 \\implies 8k = 16 \\implies k = 2.$$

$$\\text{Lengths:}$$
$$PT = 3 \\times 2 = \\mathbf{6\\text{ cm}}$$
$$TR = 5 \\times 2 = \\mathbf{10\\text{ cm}}$$
$$\\text{Check: } \\frac{PT}{TR} = \\frac{6}{10} = \\frac{3}{5}, \\quad PT + TR = 6 + 10 = 16\\text{ cm}.$$`,
    solution_ml: `$$\\text{നൽകിയിരിക്കുന്നത്: } \\triangle PQR\\text{-ൽ } ST \\parallel QR, \\quad PS = 3\\text{ cm}, \\quad SQ = 5\\text{ cm}, \\quad PR = 16\\text{ cm}.$$

$$\\text{ത്രികോണ അനുപാത സിദ്ധാന്തപ്രകാരം (ഥേൽസ് സിദ്ധാന്തം):}$$
$$\\frac{PS}{SQ} = \\frac{PT}{TR}$$
$$\\frac{3}{5} = \\frac{PT}{TR}$$

$$\\text{കൂടാതെ, } PT + TR = PR = 16\\text{ cm}.$$
$$PT = 3k, \\quad TR = 5k \\text{ എന്നിരിക്കട്ടെ.}$$
$$3k + 5k = 16 \\implies 8k = 16 \\implies k = 2.$$

$$\\text{നീളങ്ങൾ:}$$
$$PT = 3 \\times 2 = \\mathbf{6\\text{ cm}}$$
$$TR = 5 \\times 2 = \\mathbf{10\\text{ cm}}$$
$$\\text{പരിശോധന: } \\frac{PT}{TR} = \\frac{6}{10} = \\frac{3}{5}, \\quad PT + TR = 6 + 10 = 16\\text{ cm}.$$`
  }
);
