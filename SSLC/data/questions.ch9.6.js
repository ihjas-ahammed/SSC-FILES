/* ══════════════════════════════════════════════════════════════════════════
   Class 9 Mathematics — Chapter 6: Parallel Lines (സമാന്തരവരകൾ)
   Objective (OMR) Questions & Written Practice Questions
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   Zero mixing. Authentic SCERT Kerala textbook terminology.
   ══════════════════════════════════════════════════════════════════════════ */

/* ── Level 1: Objective Questions (OMR) ─────────────────────────────────── */
OBJECTIVE.push(
  /* ──────────────────────────────────────────────────────────────────────────
     9.6.1 Equal Division of Line Segments by Parallel Lines
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m9.6.1',
    concept: 'm9.6.1.equal-division-of-segments',
    sec: '9.6.1',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'Four equidistant parallel lines intercept three equal segments of length $3\\text{ cm}$ on a vertical line. If another slanted line is cut by these same parallel lines, and its total length between the outermost lines is $15\\text{ cm}$, what is the length of each intercept on the slanted line?',
    prompt_ml: 'തുല്യ അകലത്തിലുള്ള നാല് സമാന്തരവരകൾ ഒരു ലംബവരയിൽ $3\\text{ cm}$ വീതമുള്ള തുല്യഭാഗങ്ങൾ ഉണ്ടാക്കുന്നു. ഈ സമാന്തരവരകൾ ഒരു ചരിഞ്ഞ വരയിൽ ഉണ്ടാക്കുന്ന ആകെ നീളം $15\\text{ cm}$ ആണെങ്കിൽ, അതിലെ ഓരോ ഭാഗത്തിന്റെയും നീളം എത്ര?',
    options_en: [
      { k: 'A', t: '$5\\text{ cm}$' },
      { k: 'B', t: '$3\\text{ cm}$' },
      { k: 'C', t: '$4.5\\text{ cm}$' },
      { k: 'D', t: '$7.5\\text{ cm}$' }
    ],
    options_ml: [
      { k: 'A', t: '$5\\text{ cm}$' },
      { k: 'B', t: '$3\\text{ cm}$' },
      { k: 'C', t: '$4.5\\text{ cm}$' },
      { k: 'D', t: '$7.5\\text{ cm}$' }
    ],
    answer: 'A',
    solution_en: 'Four equidistant parallel lines divide any transversal into $4 - 1 = 3$ equal segments. Each segment on the slanted transversal is $\\frac{15}{3} = 5\\text{ cm}$.',
    solution_ml: 'നാല് സമാന്തരവരകൾ ഏതൊരു ചേദകരേഖയെയും 3 തുല്യഭാഗങ്ങളാക്കുന്നു: $\\frac{15}{3} = 5\\text{ cm}$.',
    tested_en: 'Equal intercepts on transversals across equidistant parallel lines.',
    tested_ml: 'സമാന്തരവരകൾ ചേദകരേഖയെ തുല്യഭാഗങ്ങളാക്കുന്ന തത്വം.'
  },
  {
    id: 'obj.m9.6.2',
    concept: 'm9.6.1.equal-division-of-segments',
    sec: '9.6.1',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'To divide a given line segment of length $11\\text{ cm}$ into $7$ equal parts using ruler and compass, how many equally-spaced points must be marked on the auxiliary ray?',
    prompt_ml: '$11\\text{ cm}$ നീളമുള്ള ഒരു വരയെ സ്കെയിലും കോമ്പസും ഉപയോഗിച്ച് $7$ തുല്യഭാഗങ്ങളാക്കാൻ വരയ്ക്കുന്ന സഹായ കിരണത്തിൽ തുല്യ അകലത്തിൽ എത്ര ബിന്ദുക്കൾ അടയാളപ്പെടുത്തണം?',
    options_en: [
      { k: 'A', t: '$7$' },
      { k: 'B', t: '$6$' },
      { k: 'C', t: '$8$' },
      { k: 'D', t: '$11$' }
    ],
    options_ml: [
      { k: 'A', t: '$7$' },
      { k: 'B', t: '$6$' },
      { k: 'C', t: '$8$' },
      { k: 'D', t: '$11$' }
    ],
    answer: 'A',
    solution_en: 'To divide a segment into $n$ equal parts, exactly $n$ equally spaced points ($A_1, A_2, \\dots, A_n$) are marked along the auxiliary ray. Here $n = 7$.',
    solution_ml: 'വരയെ $n$ തുല്യഭാഗങ്ങളാക്കാൻ കിരണരേഖയിൽ $n$ തുല്യഭാഗങ്ങൾ അടയാളപ്പെടുത്തണം. ഇവിടെ $n = 7$.',
    tested_en: 'Geometric procedure for equal segment division.',
    tested_ml: 'വരയെ തുല്യഭാഗങ്ങളാക്കാനുള്ള നിർമ്മിതി തത്വം.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     9.6.2 Proportional Intercepts Theorem
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m9.6.3',
    concept: 'm9.6.2.proportional-intercepts-theorem',
    sec: '9.6.2',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'Three parallel lines cut two transversals. On the first line, the intercepts are $4\\text{ cm}$ and $6\\text{ cm}$. On the second line, the first intercept is $10\\text{ cm}$. What is the second intercept?',
    prompt_ml: 'മൂന്ന് സമാന്തരവരകൾ രണ്ട് ചേദകരേഖകളെ മുറിക്കുന്നു. ആദ്യ വരയിൽ ഉണ്ടാക്കുന്ന ഭാഗങ്ങൾ $4\\text{ cm}$, $6\\text{ cm}$ എന്നിവയാണ്. രണ്ടാമത്തെ വരയിലെ ആദ്യഭാഗം $10\\text{ cm}$ ആയാൽ രണ്ടാമത്തെ ഭാഗം എത്ര?',
    options_en: [
      { k: 'A', t: '$15\\text{ cm}$' },
      { k: 'B', t: '$12\\text{ cm}$' },
      { k: 'C', t: '$14\\text{ cm}$' },
      { k: 'D', t: '$8\\text{ cm}$' }
    ],
    options_ml: [
      { k: 'A', t: '$15\\text{ cm}$' },
      { k: 'B', t: '$12\\text{ cm}$' },
      { k: 'C', t: '$14\\text{ cm}$' },
      { k: 'D', t: '$8\\text{ cm}$' }
    ],
    answer: 'A',
    solution_en: 'By the Proportional Intercepts Theorem: $\\frac{4}{6} = \\frac{10}{x} \\implies 4x = 60 \\implies x = 15\\text{ cm}$.',
    solution_ml: 'അനുപാത സിദ്ധാന്തപ്രകാരം: $\\frac{4}{6} = \\frac{10}{x} \\implies 4x = 60 \\implies x = 15\\text{ cm}$.',
    tested_en: 'Proportional intercepts theorem computation.',
    tested_ml: 'സമാന്തരവരകളുടെ അനുപാത സിദ്ധാന്തം ഉപയോഗിച്ച് നീളം കാണൽ.'
  },
  {
    id: 'obj.m9.6.4',
    concept: 'm9.6.2.proportional-intercepts-theorem',
    sec: '9.6.2',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'A line segment $AB$ of length $14\\text{ cm}$ is divided internally in the ratio $3 : 4$ at point $P$. What is the length of segment $AP$?',
    prompt_ml: '$14\\text{ cm}$ നീളമുള്ള ഒരു വര $AB$-യെ $P$ എന്ന ബിന്ദു $3 : 4$ എന്ന അംശബന്ധത്തിൽ ഭാഗിക്കുന്നുവെങ്കിൽ $AP$-യുടെ നീളം എത്ര?',
    options_en: [
      { k: 'A', t: '$6\\text{ cm}$' },
      { k: 'B', t: '$8\\text{ cm}$' },
      { k: 'C', t: '$7\\text{ cm}$' },
      { k: 'D', t: '$5\\text{ cm}$' }
    ],
    options_ml: [
      { k: 'A', t: '$6\\text{ cm}$' },
      { k: 'B', t: '$8\\text{ cm}$' },
      { k: 'C', t: '$7\\text{ cm}$' },
      { k: 'D', t: '$5\\text{ cm}$' }
    ],
    answer: 'A',
    solution_en: 'Total parts $= 3 + 4 = 7$. $AP = \\frac{3}{7} \\times 14 = 6\\text{ cm}$.',
    solution_ml: 'ആകെ ഭാഗങ്ങൾ $= 3 + 4 = 7$. $AP = \\frac{3}{7} \\times 14 = 6\\text{ cm}$.',
    tested_en: 'Dividing line segment in given numerical ratio.',
    tested_ml: 'വരയെ തന്നിരിക്കുന്ന അംശബന്ധത്തിൽ ഭാഗിക്കൽ.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     9.6.3 Midpoint Theorem in Triangles
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m9.6.5',
    concept: 'm9.6.3.midpoint-theorem-in-triangles',
    sec: '9.6.3',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'In $\\triangle ABC$, the length of side $BC = 18\\text{ cm}$. Points $D$ and $E$ are the midpoints of $AB$ and $AC$ respectively. What is the length of segment $DE$?',
    prompt_ml: '$\\triangle ABC$-യിൽ വശം $BC = 18\\text{ cm}$ ആണ്. $AB, AC$ എന്നിവയുടെ മധ്യബിന്ദുക്കളാണ് യഥാക്രമം $D, E$. $DE$ എന്ന വരയുടെ നീളം എത്ര?',
    options_en: [
      { k: 'A', t: '$9\\text{ cm}$' },
      { k: 'B', t: '$18\\text{ cm}$' },
      { k: 'C', t: '$6\\text{ cm}$' },
      { k: 'D', t: '$12\\text{ cm}$' }
    ],
    options_ml: [
      { k: 'A', t: '$9\\text{ cm}$' },
      { k: 'B', t: '$18\\text{ cm}$' },
      { k: 'C', t: '$6\\text{ cm}$' },
      { k: 'D', t: '$12\\text{ cm}$' }
    ],
    answer: 'A',
    solution_en: 'By the Midpoint Theorem, $DE = \\frac{1}{2} BC = \\frac{1}{2} \\times 18 = 9\\text{ cm}$.',
    solution_ml: 'മധ്യബിന്ദു സിദ്ധാന്തപ്രകാരം: $DE = \\frac{1}{2} BC = \\frac{1}{2} \\times 18 = 9\\text{ cm}$.',
    tested_en: 'Midpoint theorem side length relation.',
    tested_ml: 'മധ്യബിന്ദു സിദ്ധാന്തപ്രകാരം വശത്തിന്റെ നീളം കാണൽ.'
  },
  {
    id: 'obj.m9.6.6',
    concept: 'm9.6.3.midpoint-theorem-in-triangles',
    sec: '9.6.3',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'If the area of $\\triangle ABC$ is $60\\text{ sq cm}$, what is the area of the triangle formed by joining the midpoints of all three sides of $\\triangle ABC$?',
    prompt_ml: '$\\triangle ABC$-യുടെ പരപ്പളവ് $60\\text{ ച.സെ.മീ}$ ആയാൽ, അതിന്റെ മൂന്ന് വശങ്ങളുടെയും മധ്യബിന്ദുക്കൾ തമ്മിൽ യോജിപ്പിച്ചാൽ കിട്ടുന്ന ത്രികോണത്തിന്റെ പരപ്പളവ് എത്ര?',
    options_en: [
      { k: 'A', t: '$15\\text{ sq cm}$' },
      { k: 'B', t: '$30\\text{ sq cm}$' },
      { k: 'C', t: '$20\\text{ sq cm}$' },
      { k: 'D', t: '$12\\text{ sq cm}$' }
    ],
    options_ml: [
      { k: 'A', t: '$15\\text{ ച.സെ.മീ}$' },
      { k: 'B', t: '$30\\text{ ച.സെ.മീ}$' },
      { k: 'C', t: '$20\\text{ ച.സെ.മീ}$' },
      { k: 'D', t: '$12\\text{ ച.സെ.മീ}$' }
    ],
    answer: 'A',
    solution_en: 'The three midpoints divide the parent triangle into four congruent triangles of equal area: $\\text{Area} = \\frac{60}{4} = 15\\text{ sq cm}$.',
    solution_ml: 'മധ്യത്രികോണത്തിന്റെ പരപ്പളവ് വലിയ ത്രികോണത്തിന്റെ നാലിലൊന്നാണ്: $\\frac{60}{4} = 15\\text{ ച.സെ.മീ}$.',
    tested_en: 'Area of midpoint triangle is one-fourth parent triangle area.',
    tested_ml: 'മധ്യത്രികോണത്തിന്റെ പരപ്പളവ് നാലിലൊന്നാകുന്നു.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     9.6.4 Medians and Centroid
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m9.6.7',
    concept: 'm9.6.4.medians-and-centroid',
    sec: '9.6.4',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'In $\\triangle ABC$, $AD$ is a median and $G$ is the centroid. If the total length of median $AD = 15\\text{ cm}$, what is the length of $AG$?',
    prompt_ml: '$\\triangle ABC$-യിൽ $AD$ ഒരു മധ്യമവും $G$ മധ്യകേന്ദ്രവുമാണ്. മധ്യമം $AD$-യുടെ ആകെ നീളം $15\\text{ cm}$ ആയാൽ $AG$-യുടെ നീളം എത്ര?',
    options_en: [
      { k: 'A', t: '$10\\text{ cm}$' },
      { k: 'B', t: '$5\\text{ cm}$' },
      { k: 'C', t: '$7.5\\text{ cm}$' },
      { k: 'D', t: '$12\\text{ cm}$' }
    ],
    options_ml: [
      { k: 'A', t: '$10\\text{ cm}$' },
      { k: 'B', t: '$5\\text{ cm}$' },
      { k: 'C', t: '$7.5\\text{ cm}$' },
      { k: 'D', t: '$12\\text{ cm}$' }
    ],
    answer: 'A',
    solution_en: 'The centroid divides each median in the ratio $2 : 1$ from vertex to base. $AG = \\frac{2}{3} \\times 15 = 10\\text{ cm}$.',
    solution_ml: 'മധ്യകേന്ദ്രം മധ്യമത്തെ ശീർഷത്തിൽ നിന്ന് $2 : 1$ എന്ന അംശബന്ധത്തിൽ വിഭജിക്കുന്നു: $AG = \\frac{2}{3} \\times 15 = 10\\text{ cm}$.',
    tested_en: 'Centroid 2:1 division ratio calculation.',
    tested_ml: 'മധ്യകേന്ദ്രത്തിന്റെ 2:1 അനുപാത പ്രയോഗം.'
  },
  {
    id: 'obj.m9.6.8',
    concept: 'm9.6.4.medians-and-centroid',
    sec: '9.6.4',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'The area of $\\triangle ABC$ is $42\\text{ sq cm}$. $G$ is its centroid. What is the area of $\\triangle GBC$?',
    prompt_ml: '$\\triangle ABC$-യുടെ പരപ്പളവ് $42\\text{ ച.സെ.മീ}$ ആണ്. $G$ അതിന്റെ മധ്യകേന്ദ്രമാണ്. $\\triangle GBC$-യുടെ പരപ്പളവ് എത്ര?',
    options_en: [
      { k: 'A', t: '$14\\text{ sq cm}$' },
      { k: 'B', t: '$21\\text{ sq cm}$' },
      { k: 'C', t: '$7\\text{ sq cm}$' },
      { k: 'D', t: '$28\\text{ sq cm}$' }
    ],
    options_ml: [
      { k: 'A', t: '$14\\text{ ച.സെ.മീ}$' },
      { k: 'B', t: '$21\\text{ ച.സെ.മീ}$' },
      { k: 'C', t: '$7\\text{ ച.സെ.മീ}$' },
      { k: 'D', t: '$28\\text{ ച.സെ.മീ}$' }
    ],
    answer: 'A',
    solution_en: 'The lines joining the centroid to the three vertices divide the triangle into three triangles of equal area: $\\text{Area}(\\triangle GBC) = \\frac{42}{3} = 14\\text{ sq cm}$.',
    solution_ml: 'മധ്യകേന്ദ്രം ത്രികോണത്തെ തുല്യ പരപ്പളവുള്ള 3 ഭാഗങ്ങളാക്കുന്നു: $\\frac{42}{3} = 14\\text{ ച.സെ.മീ}$.',
    tested_en: 'Area trisection by centroid.',
    tested_ml: 'മധ്യകേന്ദ്രമുണ്ടാക്കുന്ന തുല്യ പരപ്പളവ് വിഭജനം.'
  }
);

/* ── Level 2: Written Exercises ─────────────────────────────────────────── */
WRITTEN.push(
  {
    id: 'w.m9.6.1',
    sec: '9.6.1',
    concept: 'm9.6.1.equal-division-of-segments',
    title_en: 'Geometric Construction: Dividing a Line Segment into 5 Equal Parts',
    title_ml: 'ജ്യാമിതീയ നിർമ്മിതി: ഒരു വരയെ 5 തുല്യഭാഗങ്ങളാക്കൽ',
    prompt_en: '<p>Describe the step-by-step geometric construction to divide a line segment $AB$ of length $9\\text{ cm}$ into $5$ equal parts using only a straightedge and compasses. Provide the geometric justification using the theorem of parallel lines.</p>',
    prompt_ml: '<p>സ്കെയിലും കോമ്പസും മാത്രം ഉപയോഗിച്ച് $9\\text{ cm}$ നീളമുള്ള $AB$ എന്ന വരയെ $5$ തുല്യഭാഗങ്ങളായി വിഭജിക്കുന്നതിനുള്ള നിർമ്മിതിയുടെ ഘട്ടങ്ങൾ വിശദീകരിക്കുക. സമാന്തരവരകളുടെ സിദ്ധാന്തം ഉപയോഗിച്ച് ഇതിന്റെ സാധൂകരണം വ്യക്തമാക്കുക.</p>',
    solution_en: `$$\\text{Step 1: Construction of Ray}$$
$$\\text{Draw the given line segment } AB = 9\\text{ cm}. \\text{ From endpoint } A, \\text{ draw a ray } AX \\text{ making an acute angle with } AB.$$

$$\\text{Step 2: Marking Equal Intervals}$$
$$\\text{With compass set to a convenient fixed radius, mark five equidistant points } A_1, A_2, A_3, A_4, A_5 \\text{ along ray } AX \\text{ such that:}$$
$$AA_1 = A_1 A_2 = A_2 A_3 = A_3 A_4 = A_4 A_5$$

$$\\text{Step 3: Completing Parallel Grid}$$
$$\\text{Join the 5th point } A_5 \\text{ to endpoint } B.$$
$$\\text{Through the points } A_1, A_2, A_3, A_4, \\text{ draw lines strictly parallel to } A_5 B, \\text{ intersecting segment } AB \\text{ at points } P_1, P_2, P_3, P_4.$$

$$\\text{Geometric Justification:}$$
$$\\text{Lines } A_1 P_1 \\parallel A_2 P_2 \\parallel A_3 P_3 \\parallel A_4 P_4 \\parallel A_5 B \\text{ are a system of parallel lines.}$$
$$\\text{By the theorem of parallel lines: since they intercept equal segments on transversal } AX,$$
$$\\text{they must intercept strictly equal segments on transversal } AB:$$
$$AP_1 = P_1 P_2 = P_2 P_3 = P_3 P_4 = P_4 B = \\frac{9\\text{ cm}}{5} = \\mathbf{1.8\\text{ cm}}$$`,
    solution_ml: `$$\\text{ഘട്ടം 1: കിരണരേഖ വരയ്ക്കൽ}$$
$$AB = 9\\text{ cm} \\text{ വരയ്ക്കുക. } A\\text{-ൽ നിന്ന് } AB\\text{-യുമായി ന്യൂനകോണുണ്ടാക്കുന്ന } AX \\text{ എന്ന കിരണരേഖ വരയ്ക്കുക.}$$

$$\\text{ഘട്ടം 2: തുല്യഭാഗങ്ങൾ അടയാളപ്പെടുത്തൽ}$$
$$AX\\text{-ൽ കോമ്പസ് ഉപയോഗിച്ച് തുല്യ അകലത്തിൽ } A_1, A_2, A_3, A_4, A_5 \\text{ എന്നീ 5 ബിന്ദുക്കൾ അടയാളപ്പെടുത്തുക:}$$
$$AA_1 = A_1 A_2 = A_2 A_3 = A_3 A_4 = A_4 A_5$$

$$\\text{ഘട്ടം 3: സമാന്തരവരകൾ വരയ്ക്കൽ}$$
$$A_5\\text{-നെ } B\\text{-യുമായി യോജിപ്പിക്കുക.}$$
$$A_1, A_2, A_3, A_4 \\text{ എന്നിവയിലൂടെ } A_5 B\\text{-ക്ക് സമാന്തരമായി വരകൾ വരയ്ക്കുക.}$$
$$\\text{ഇവ } AB\\text{-യെ } P_1, P_2, P_3, P_4 \\text{ എന്നീ ബിന്ദുക്കളിൽ ഖണ്ഡിക്കുന്നു.}$$

$$\\text{ജ്യാമിതീയ സാധൂകരണം:}$$
$$\\text{സമാന്തരവരകൾ ഒരു വരയിൽ തുല്യഭാഗങ്ങൾ ഉണ്ടാക്കിയാൽ മറ്റേ വരയിലും തുല്യഭാഗങ്ങൾ ഉണ്ടാക്കും എന്ന തത്വപ്രകാരം:}$$
$$AP_1 = P_1 P_2 = P_2 P_3 = P_3 P_4 = P_4 B = \\frac{9}{5} = \\mathbf{1.8\\text{ cm}}$$`
  },

  {
    id: 'w.m9.6.2',
    sec: '9.6.2',
    concept: 'm9.6.2.proportional-intercepts-theorem',
    title_en: 'Proportional Intercepts Calculation on Multiple Transversals',
    title_ml: 'സമാന്തരവരകളിലെ അനുപാത വിഭജന കണക്കുകൂട്ടൽ',
    prompt_en: '<p>Three parallel lines $L_1, L_2, L_3$ intersect two transversals at points $A, B, C$ and $D, E, F$ respectively. Given that $AB = 6\\text{ cm}$, $BC = 9\\text{ cm}$, and the total length of the second transversal segment $DF = 25\\text{ cm}$, calculate the individual lengths of $DE$ and $EF$.</p>',
    prompt_ml: '<p>മൂന്ന് സമാന്തരവരകളായ $L_1, L_2, L_3$ രണ്ട് ചേദകരേഖകളെ യഥാക്രമം $A, B, C$ എന്നിവയിലും $D, E, F$ എന്നിവയിലും മുറിക്കുന്നു. $AB = 6\\text{ cm}$, $BC = 9\\text{ cm}$ ആണ്. രണ്ടാമത്തെ വരയിലെ ആകെ നീളം $DF = 25\\text{ cm}$ ആണെങ്കിൽ $DE, EF$ എന്നിവയുടെ നീളങ്ങൾ പ്രത്യേകം കണ്ടെത്തുക.</p>',
    solution_en: `$$\\text{Step 1: Ratio of Intercepts}$$
$$\\text{By the Proportional Intercepts Theorem:}$$
$$\\frac{DE}{EF} = \\frac{AB}{BC} = \\frac{6}{9} = \\frac{2}{3}$$

$$\\text{Step 2: Total Parts Formulation}$$
$$\\text{Let } DE = 2k \\text{ and } EF = 3k.$$
$$DF = DE + EF = 2k + 3k = 5k$$
$$5k = 25\\text{ cm} \\implies k = \\frac{25}{5} = 5\\text{ cm}$$

$$\\text{Step 3: Calculating Individual Segments}$$
$$DE = 2k = 2 \\times 5 = \\mathbf{10\\text{ cm}}$$
$$EF = 3k = 3 \\times 5 = \\mathbf{15\\text{ cm}}$$

$$\\text{Verification: } 10 + 15 = 25\\text{ cm and } \\frac{10}{15} = \\frac{2}{3} = \\frac{6}{9} \\quad (\\text{Verified})$$`,
    solution_ml: `$$\\text{ഘട്ടം 1: ഭാഗങ്ങളുടെ അംശബന്ധം}$$
$$\\text{അനുപാത സിദ്ധാന്തപ്രകാരം:}$$
$$\\frac{DE}{EF} = \\frac{AB}{BC} = \\frac{6}{9} = \\frac{2}{3}$$

$$\\text{ഘട്ടം 2: ആകെ ഭാഗങ്ങൾ കാണൽ}$$
$$DE = 2k, \\quad EF = 3k \\text{ എന്നിരിക്കട്ടെ.}$$
$$DE + EF = 5k = 25 \\implies k = 5\\text{ cm}$$

$$\\text{ഘട്ടം 3: ഓരോ ഭാഗത്തിന്റെയും നീളം}$$
$$DE = 2 \\times 5 = \\mathbf{10\\text{ cm}}$$
$$EF = 3 \\times 5 = \\mathbf{15\\text{ cm}}$$

$$\\text{പരിശോധന: } 10 + 15 = 25\\text{ cm, } \\frac{10}{15} = \\frac{2}{3}$$`
  },

  {
    id: 'w.m9.6.3',
    sec: '9.6.3',
    concept: 'm9.6.3.midpoint-theorem-in-triangles',
    title_en: 'Proof of Midpoint Theorem and Area Ratio of Midpoint Triangle',
    title_ml: 'മധ്യബിന്ദു സിദ്ധാന്തത്തിന്റെ തെളിവും മധ്യത്രികോണ പരപ്പളവും',
    prompt_en: '<p>Prove that the line segment joining the midpoints of two sides of a triangle is parallel to the third side and equal to half its length. Furthermore, prove that connecting the midpoints of all three sides divides the triangle into four congruent triangles each having one-fourth of the parent area.</p>',
    prompt_ml: '<p>ഒരു ത്രികോണത്തിലെ രണ്ട് വശങ്ങളുടെ മധ്യബിന്ദുക്കൾ യോജിപ്പിക്കുന്ന വര മൂന്നാമത്തെ വശത്തിന് സമാന്തരവും അതിന്റെ നീളത്തിന്റെ പകുതിയുമാണെന്ന് തെളിയിക്കുക. കൂടാതെ മൂന്ന് വശങ്ങളുടെയും മധ്യബിന്ദുക്കൾ യോജിപ്പിച്ചാൽ ത്രികോണം വലിയ ത്രികോണത്തിന്റെ നാലിലൊന്ന് പരപ്പളവുള്ള നാല് സർവ്വസമ ത്രികോണങ്ങളായി മാറുമെന്ന് തെളിയിക്കുക.</p>',
    solution_en: `$$\\text{Part 1: Proof of Midpoint Theorem}$$
$$\\text{In } \\triangle ABC, \\text{ let } D \\text{ and } E \\text{ be midpoints of } AB \\text{ and } AC.$$
$$\\text{Construction: Extend } DE \\text{ to } F \\text{ such that } EF = DE. \\text{ Join } CF.$$

$$\\text{In } \\triangle ADE \\text{ and } \\triangle CFE:$$
$$AE = EC \\quad (E \\text{ is midpoint})$$
$$\\angle AED = \\angle CEF \\quad (\\text{vertically opposite angles})$$
$$DE = EF \\quad (\\text{by construction})$$
$$\\text{By SAS: } \\triangle ADE \\cong \\triangle CFE \\implies CF = AD, \\quad \\angle ADE = \\angle CFE \\implies CF \\parallel AB$$

$$\\text{Since } D \\text{ is midpoint of } AB, \\, AD = DB; \\text{ therefore } CF = DB \\text{ and } CF \\parallel DB.$$
$$\\text{A quadrilateral with one pair of opposite sides equal and parallel is a parallelogram: } DBCF \\text{ is a parallelogram.}$$
$$\\implies DF \\parallel BC \\implies \\mathbf{DE \\parallel BC}$$
$$\\text{Also } DF = BC \\implies 2DE = BC \\implies \\mathbf{DE = \\frac{1}{2} BC}$$

$$\\text{Part 2: Four Congruent Triangles and Area}$$
$$\\text{Let } F \\text{ be the midpoint of } BC. \\text{ Then } DE = \\frac{1}{2}BC = BF = FC, \\, EF = \\frac{1}{2}AB = AD = DB, \\, DF = \\frac{1}{2}AC = AE = EC.$$
$$\\text{By SSS congruence criterion, all four triangles } \\triangle ADE, \\triangle DBF, \\triangle EFC, \\triangle FED \\text{ have identical side lengths:}$$
$$\\triangle ADE \\cong \\triangle DBF \\cong \\triangle EFC \\cong \\triangle FED$$
$$\\text{Therefore: } \\mathbf{\\text{Area}(\\triangle DEF) = \\frac{1}{4} \\text{Area}(\\triangle ABC)}$$`,
    solution_ml: `$$\\text{ഭാഗം 1: മധ്യബിന്ദു സിദ്ധാന്തത്തിന്റെ തെളിവ്}$$
$$\\triangle ABC\\text{-ൽ } D, E \\text{ എന്നിവ യഥാക്രമം } AB, AC\\text{-ന്റെ മധ്യബിന്ദുക്കളാണ്.}$$
$$\\text{നിർമ്മിതി: } DE\\text{-യെ } EF = DE \\text{ ആകത്തക്കവിധം } F \\text{ വരെ നീട്ടി } CF \\text{ വരയ്ക്കുന്നു.}$$
$$\\triangle ADE, \\triangle CFE \\text{ എന്നിവ SAS തത്വപ്രകാരം സർവ്വസമമാണ്.}$$
$$CF = AD, \\quad CF \\parallel AB$$
$$AD = DB \\text{ ആയതിനാൽ } CF = DB, \\quad CF \\parallel DB.$$
$$\\text{ഒരു ജോടി എതിർവശങ്ങൾ തുല്യവും സമാന്തരവുമാകയാൽ } DBCF \\text{ ഒരു സമാന്തരികമാണ്.}$$
$$\\mathbf{DE \\parallel BC} \\quad \\text{കൂടാതെ} \\quad \\mathbf{DE = \\frac{1}{2} BC}$$

$$\\text{ഭാഗം 2: നാല് സർവ്വസമ ത്രികോണങ്ങളും പരപ്പളവും}$$
$$BC\\text{-ന്റെ മധ്യബിന്ദു } F \\text{ ആയാൽ:}$$
$$DE = BF = FC, \\quad EF = AD = DB, \\quad DF = AE = EC$$
$$\\text{SSS തുല്യതാ തത്വപ്രകാരം നാല് ചെറിയ ത്രികോണങ്ങളും സർവ്വസമമാണ്:}$$
$$\\triangle ADE \\cong \\triangle DBF \\cong \\triangle EFC \\cong \\triangle FED$$
$$\\mathbf{\\text{പരപ്പളവ്}(\\triangle DEF) = \\frac{1}{4} \\text{പരപ്പളവ്}(\\triangle ABC)}$$`
  },

  {
    id: 'w.m9.6.4',
    sec: '9.6.4',
    concept: 'm9.6.4.medians-and-centroid',
    title_en: 'Centroid Division Ratio and Equal Area Division by Medians',
    title_ml: 'മധ്യകേന്ദ്രത്തിന്റെ വിഭജനാനുപാതവും തുല്യ പരപ്പളവ് സിദ്ധാന്തവും',
    prompt_en: '<p>Prove that the centroid $G$ of $\\triangle ABC$ divides each median in the ratio $2 : 1$. Furthermore, prove that the three medians divide the triangle into six smaller triangles of strictly equal area.</p>',
    prompt_ml: '<p>$\\triangle ABC$-യുടെ മധ്യകേന്ദ്രം $G$ ഓരോ മധ്യമത്തെയും $2 : 1$ എന്ന അംശബന്ധത്തിൽ വിഭജിക്കുന്നുവെന്ന് തെളിയിക്കുക. മൂന്ന് മധ്യമങ്ങളും ചേർന്ന് ത്രികോണത്തെ തുല്യ പരപ്പളവുള്ള ആറ് ചെറിയ ത്രികോണങ്ങളായി മാറ്റുന്നുവെന്നും തെളിയിക്കുക.</p>',
    solution_en: `$$\\text{Step 1: Centroid Ratio 2 : 1 Proof}$$
$$\\text{Let medians } AD \\text{ and } BE \\text{ intersect at } G.$$
$$\\text{Join midpoints } D \\text{ and } E. \\text{ By the Midpoint Theorem: } DE \\parallel AB \\text{ and } DE = \\frac{1}{2} AB.$$
$$\\text{Let } P \\text{ and } Q \\text{ be the midpoints of } AG \\text{ and } BG.$$
$$\\text{In } \\triangle GAB, \\, PQ \\parallel AB \\text{ and } PQ = \\frac{1}{2} AB.$$
$$\\text{Since } DE = PQ \\text{ and } DE \\parallel PQ, \\, DEQP \\text{ is a parallelogram.}$$
$$\\text{The diagonals of a parallelogram bisect each other: } PG = GD \\text{ and } QG = GE.$$
$$\\text{Since } P \\text{ is the midpoint of } AG, \\, AP = PG = GD.$$
$$\\implies AG = AP + PG = 2 GD \\implies \\mathbf{AG : GD = 2 : 1}$$

$$\\text{Step 2: Six Equal Area Triangles}$$
$$\\text{A median divides a triangle into two triangles of equal area (equal bases, same height).}$$
$$\\text{In } \\triangle GBC, \\, GD \\text{ is a median on side } BC \\implies \\text{Area}(\\triangle GBD) = \\text{Area}(\\triangle GCD) = a.$$
$$\\text{Similarly, in } \\triangle GCA, \\, \\text{Area}(\\triangle GCE) = \\text{Area}(\\triangle GAE) = b.$$
$$\\text{In } \\triangle GAB, \\, \\text{Area}(\\triangle GAF) = \\text{Area}(\\triangle GBF) = c.$$
$$\\text{Since } AD \\text{ is a median of } \\triangle ABC:$$
$$\\text{Area}(\\triangle ABD) = \\text{Area}(\\triangle ACD) \\implies c + c + a = b + b + a \\implies 2c = 2b \\implies b = c$$
$$\\text{Similarly, using median } BE \\implies a = c.$$
$$\\text{Thus } a = b = c, \\text{ proving all six triangles have identical area: } \\mathbf{\\frac{1}{6}\\text{Area}(\\triangle ABC)}.$$`,
    solution_ml: `$$\\text{ഘട്ടം 1: മധ്യകേന്ദ്രത്തിന്റെ 2 : 1 അനുപാത തെളിവ്}$$
$$AD, BE \\text{ എന്നീ മധ്യമങ്ങൾ } G\\text{-ൽ കൂട്ടിമുട്ടുന്നു.}$$
$$D, E \\text{ മധ്യബിന്ദുക്കൾ യോജിപ്പിച്ചാൽ } DE \\parallel AB, \\, DE = \\frac{1}{2}AB.$$
$$AG, BG \\text{ എന്നിവയുടെ മധ്യബിന്ദുക്കൾ } P, Q \\text{ എടുത്താൽ } PQ \\parallel AB, \\, PQ = \\frac{1}{2}AB.$$
$$DEQP \\text{ ഒരു സമാന്തരികമാകുന്നു.}$$
$$\\text{സമാന്തരികത്തിലെ വികർണ്ണങ്ങൾ സമഭാഗം ചെയ്യുന്നതിനാൽ: } AP = PG = GD.$$
$$\\implies AG = 2 GD \\implies \\mathbf{AG : GD = 2 : 1}$$

$$\\text{ഘട്ടം 2: ആറ് തുല്യ പരപ്പളവ് ത്രികോണങ്ങൾ}$$
$$\\text{മധ്യമം ത്രികോണത്തെ തുല്യ പരപ്പളവുള്ള രണ്ട് ഭാഗങ്ങളാക്കുന്നു.}$$
$$\\triangle GBC\\text{-ൽ: } \\text{പരപ്പളവ്}(\\triangle GBD) = \\text{പരപ്പളവ്}(\\triangle GCD) = a$$
$$\\triangle GCA\\text{-ൽ: } \\text{പരപ്പളവ്}(\\triangle GCE) = \\text{പരപ്പളവ്}(\\triangle GAE) = b$$
$$\\triangle GAB\\text{-ൽ: } \\text{പരപ്പളവ്}(\\triangle GAF) = \\text{പരപ്പളവ്}(\\triangle GBF) = c$$
$$AD \\text{ വലിയ ത്രികോണത്തിന്റെ മധ്യമമായതിനാൽ:}$$
$$2c + a = 2b + a \\implies b = c$$
$$\\text{അതുപോലെ } BE \\text{ മധ്യമം ഉപയോഗിക്കുമ്പോൾ } a = c \\text{ ലഭിക്കുന്നു.}$$
$$\\text{അതിനാൽ } a = b = c. \\text{ ആറ് ത്രികോണങ്ങളുടെയും പരപ്പളവുകൾ തുല്യമാണ്: } \\mathbf{\\frac{1}{6}\\text{പരപ്പളവ്}(\\triangle ABC)}.$$`
  }
);
