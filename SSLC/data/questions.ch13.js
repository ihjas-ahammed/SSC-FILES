/* ══════════════════════════════════════════════════════════════════════════
   Class 8 Mathematics — Chapter 13: Prisms (സ്തംഭങ്ങൾ)
   Objective (OMR) Questions & Written Practice Questions
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   Zero mixing. Authentic SCERT Kerala textbook terminology.
   ══════════════════════════════════════════════════════════════════════════ */

/* ── Level 1: Objective Questions (OMR) ─────────────────────────────────── */
OBJECTIVE.push(
  /* ──────────────────────────────────────────────────────────────────────────
     8.13.1 Prism Concept & Structure
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m8.13.1',
    concept: 'm8.13.1.prism-concept',
    sec: '8.13.1',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'How many edges does a pentagonal prism have in total?',
    prompt_ml: 'ഒരു പഞ്ചഭുജസ്തംഭത്തിന് ആകെ എത്ര അരികുകൾ (വിളുമ്പുകൾ) ഉണ്ടാകും?',
    options_en: [
      { k: 'A', t: '$15$' },
      { k: 'B', t: '$10$' },
      { k: 'C', t: '$12$' },
      { k: 'D', t: '$7$' }
    ],
    options_ml: [
      { k: 'A', t: '$15$' },
      { k: 'B', t: '$10$' },
      { k: 'C', t: '$12$' },
      { k: 'D', t: '$7$' }
    ],
    answer: 'A',
    solution_en: 'For an $n$-gonal prism, number of edges $E = 3n$. Here $n = 5$, so $E = 3 \\times 5 = 15$.',
    solution_ml: 'ഒരു $n$-ഭുജസ്തംഭത്തിലെ അരികുകളുടെ എണ്ണം $E = 3n$ ആണ്. ഇവിടെ $n = 5$, അതിനാൽ $E = 3 \\times 5 = 15$.',
    tested_en: 'Formula for edges of an n-gonal prism.',
    tested_ml: 'സ്തംഭങ്ങളിലെ അരികുകളുടെ എണ്ണം കാണൽ.'
  },
  {
    id: 'obj.m8.13.2',
    concept: 'm8.13.1.prism-concept',
    sec: '8.13.1',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'A solid prism has 12 vertices. What polygon forms each of its bases?',
    prompt_ml: 'ഒരു സ്തംഭത്തിന് 12 ശീർഷങ്ങളുണ്ടെങ്കിൽ അതിന്റെ പാദം ഏത് ബഹുഭുജമാണ്?',
    options_en: [
      { k: 'A', t: 'Hexagon' },
      { k: 'B', t: 'Pentagon' },
      { k: 'C', t: 'Octagon' },
      { k: 'D', t: 'Quadrilateral' }
    ],
    options_ml: [
      { k: 'A', t: 'ഷഡ്ഭുജം' },
      { k: 'B', t: 'പഞ്ചഭുജം' },
      { k: 'C', t: 'അഷ്ടഭുജം' },
      { k: 'D', t: 'ചതുർഭുജം' }
    ],
    answer: 'A',
    solution_en: 'Vertices of an $n$-gonal prism $V = 2n = 12 \\implies n = 6$, which is a hexagon.',
    solution_ml: 'സ്തംഭത്തിലെ ശീർഷങ്ങൾ $V = 2n = 12 \\implies n = 6$, ഇത് ഷഡ്ഭുജമാണ്.',
    tested_en: 'Identifying base polygon from number of vertices.',
    tested_ml: 'ശീർഷങ്ങളുടെ എണ്ണത്തിൽ നിന്ന് പാദബഹുഭുജം കണ്ടെത്തൽ.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     8.13.2 Lateral Surface Area
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m8.13.3',
    concept: 'm8.13.2.lateral-surface-area',
    sec: '8.13.2',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'A triangular prism has base sides $5\\text{ cm}$, $12\\text{ cm}$, and $13\\text{ cm}$. If its height is $10\\text{ cm}$, what is its lateral surface area?',
    prompt_ml: 'ഒരു ത്രികോണസ്തംഭത്തിന്റെ പാദവശങ്ങൾ $5\\text{ cm}, 12\\text{ cm}, 13\\text{ cm}$ എന്നിവയാണ്. ഉയരം $10\\text{ cm}$ ആയാൽ അതിന്റെ പാർശ്വതല പരപ്പളവ് എത്ര?',
    options_en: [
      { k: 'A', t: '$300\\text{ cm}^2$' },
      { k: 'B', t: '$360\\text{ cm}^2$' },
      { k: 'C', t: '$150\\text{ cm}^2$' },
      { k: 'D', t: '$240\\text{ cm}^2$' }
    ],
    options_ml: [
      { k: 'A', t: '$300\\text{ cm}^2$' },
      { k: 'B', t: '$360\\text{ cm}^2$' },
      { k: 'C', t: '$150\\text{ cm}^2$' },
      { k: 'D', t: '$240\\text{ cm}^2$' }
    ],
    answer: 'A',
    solution_en: 'Base perimeter $P = 5 + 12 + 13 = 30\\text{ cm}$. $\\text{LSA} = P \\times h = 30 \\times 10 = 300\\text{ cm}^2$.',
    solution_ml: 'പാദച്ചുറ്റളവ് $P = 5 + 12 + 13 = 30\\text{ cm}$. പാർശ്വതല പരപ്പളവ് $= P \\times h = 30 \\times 10 = 300\\text{ cm}^2$.',
    tested_en: 'Calculating lateral surface area of a triangular prism.',
    tested_ml: 'ത്രികോണസ്തംഭത്തിന്റെ പാർശ്വതല പരപ്പളവ് കാണൽ.'
  },
  {
    id: 'obj.m8.13.4',
    concept: 'm8.13.2.lateral-surface-area',
    sec: '8.13.2',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'The lateral surface area of a square prism of height $8\\text{ cm}$ is $192\\text{ cm}^2$. What is the length of each side of its base square?',
    prompt_ml: '$8\\text{ cm}$ ഉയരമുള്ള ഒരു സമചതുരസ്തംഭത്തിന്റെ പാർശ്വതല പരപ്പളവ് $192\\text{ cm}^2$ ആണ്. പാദ സമചതുരത്തിന്റെ ഒരു വശത്തിന്റെ നീളം എത്ര?',
    options_en: [
      { k: 'A', t: '$6\\text{ cm}$' },
      { k: 'B', t: '$8\\text{ cm}$' },
      { k: 'C', t: '$4\\text{ cm}$' },
      { k: 'D', t: '$5\\text{ cm}$' }
    ],
    options_ml: [
      { k: 'A', t: '$6\\text{ cm}$' },
      { k: 'B', t: '$8\\text{ cm}$' },
      { k: 'C', t: '$4\\text{ cm}$' },
      { k: 'D', t: '$5\\text{ cm}$' }
    ],
    answer: 'A',
    solution_en: 'Base perimeter $P = \\frac{\\text{LSA}}{h} = \\frac{192}{8} = 24\\text{ cm}$. Side of square $= \\frac{24}{4} = 6\\text{ cm}$.',
    solution_ml: 'പാദച്ചുറ്റളവ് $P = \\frac{\\text{LSA}}{h} = \\frac{192}{8} = 24\\text{ cm}$. ഒരു വശം $= \\frac{24}{4} = 6\\text{ cm}$.',
    tested_en: 'Finding base edge from lateral area and height.',
    tested_ml: 'പാർശ്വതല പരപ്പളവിൽ നിന്ന് പാദവശം കാണൽ.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     8.13.3 Total Surface Area
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m8.13.5',
    concept: 'm8.13.3.total-surface-area',
    sec: '8.13.3',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'A right-triangular prism has base legs $3\\text{ cm}$ and $4\\text{ cm}$ (hypotenuse $5\\text{ cm}$) and height $10\\text{ cm}$. What is its total surface area?',
    prompt_ml: 'മട്ടമുണ്ടാക്കുന്ന വശങ്ങൾ $3\\text{ cm}, 4\\text{ cm}$ (കർണ്ണം $5\\text{ cm}$)-ഉം ഉയരം $10\\text{ cm}$-ഉം ആയ ത്രികോണസ്തംഭത്തിന്റെ ഉപരിതല പരപ്പളവ് എത്ര?',
    options_en: [
      { k: 'A', t: '$132\\text{ cm}^2$' },
      { k: 'B', t: '$120\\text{ cm}^2$' },
      { k: 'C', t: '$144\\text{ cm}^2$' },
      { k: 'D', t: '$126\\text{ cm}^2$' }
    ],
    options_ml: [
      { k: 'A', t: '$132\\text{ cm}^2$' },
      { k: 'B', t: '$120\\text{ cm}^2$' },
      { k: 'C', t: '$144\\text{ cm}^2$' },
      { k: 'D', t: '$126\\text{ cm}^2$' }
    ],
    answer: 'A',
    solution_en: 'Base perimeter $P = 3 + 4 + 5 = 12\\text{ cm}$. $\\text{LSA} = 12 \\times 10 = 120\\text{ cm}^2$. Base area $A_b = \\frac{1}{2} \\times 3 \\times 4 = 6\\text{ cm}^2$. $\\text{TSA} = 120 + 2(6) = 132\\text{ cm}^2$.',
    solution_ml: 'പാദച്ചുറ്റളവ് $P = 3 + 4 + 5 = 12\\text{ cm}$. പാർശ്വതല പരപ്പളവ് $= 12 \\times 10 = 120\\text{ cm}^2$. പാദപരപ്പളവ് $A_b = \\frac{1}{2} \\times 3 \\times 4 = 6\\text{ cm}^2$. ഉപരിതല പരപ്പളവ് $= 120 + 2(6) = 132\\text{ cm}^2$.',
    tested_en: 'Total surface area calculation of a right triangular prism.',
    tested_ml: 'മട്ടത്രികോണസ്തംഭത്തിന്റെ ഉപരിതല പരപ്പളവ് കാണൽ.'
  },
  {
    id: 'obj.m8.13.6',
    concept: 'm8.13.3.total-surface-area',
    sec: '8.13.3',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'What is the total surface area of a rectangular block (cuboid) of length $5\\text{ cm}$, breadth $4\\text{ cm}$, and height $3\\text{ cm}$?',
    prompt_ml: 'നീളം $5\\text{ cm}$, വീതി $4\\text{ cm}$, ഉയരം $3\\text{ cm}$ ആയ ഒരു ചതുരക്കട്ടയുടെ ഉപരിതല പരപ്പളവ് എത്ര?',
    options_en: [
      { k: 'A', t: '$94\\text{ cm}^2$' },
      { k: 'B', t: '$60\\text{ cm}^2$' },
      { k: 'C', t: '$108\\text{ cm}^2$' },
      { k: 'D', t: '$84\\text{ cm}^2$' }
    ],
    options_ml: [
      { k: 'A', t: '$94\\text{ cm}^2$' },
      { k: 'B', t: '$60\\text{ cm}^2$' },
      { k: 'C', t: '$108\\text{ cm}^2$' },
      { k: 'D', t: '$84\\text{ cm}^2$' }
    ],
    answer: 'A',
    solution_en: '$\\text{TSA} = 2(lb + bh + lh) = 2(5 \\times 4 + 4 \\times 3 + 5 \\times 3) = 2(20 + 12 + 15) = 2(47) = 94\\text{ cm}^2$.',
    solution_ml: 'ഉപരിതല പരപ്പളവ് $= 2(lb + bh + lh) = 2(20 + 12 + 15) = 2(47) = 94\\text{ cm}^2$.',
    tested_en: 'Cuboid total surface area.',
    tested_ml: 'ചതുരക്കട്ടയുടെ ഉപരിതല പരപ്പളവ്.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     8.13.4 Volume of a Prism
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m8.13.7',
    concept: 'm8.13.4.prism-volume',
    sec: '8.13.4',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'A prism has a base area of $42\\text{ cm}^2$ and height $15\\text{ cm}$. What is its volume?',
    prompt_ml: 'ഒരു സ്തംഭത്തിന്റെ പാദപരപ്പളവ് $42\\text{ cm}^2$-ഉം ഉയരം $15\\text{ cm}$-ഉം ആയാൽ അതിന്റെ വ്യാപ്തം എത്ര?',
    options_en: [
      { k: 'A', t: '$630\\text{ cm}^3$' },
      { k: 'B', t: '$315\\text{ cm}^3$' },
      { k: 'C', t: '$570\\text{ cm}^3$' },
      { k: 'D', t: '$840\\text{ cm}^3$' }
    ],
    options_ml: [
      { k: 'A', t: '$630\\text{ cm}^3$' },
      { k: 'B', t: '$315\\text{ cm}^3$' },
      { k: 'C', t: '$570\\text{ cm}^3$' },
      { k: 'D', t: '$840\\text{ cm}^3$' }
    ],
    answer: 'A',
    solution_en: '$\\text{Volume} = \\text{Base Area} \\times \\text{Height} = 42 \\times 15 = 630\\text{ cm}^3$.',
    solution_ml: 'വ്യാപ്തം $= \\text{പാദപരപ്പളവ്} \\times \\text{ഉയരം} = 42 \\times 15 = 630\\text{ cm}^3$.',
    tested_en: 'Standard prism volume formula.',
    tested_ml: 'സ്തംഭത്തിന്റെ വ്യാപ്ത സൂത്രവാക്യം.'
  },
  {
    id: 'obj.m8.13.8',
    concept: 'm8.13.4.prism-volume',
    sec: '8.13.4',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'A water tank has the shape of a prism with base area $2.5\\text{ m}^2$ and depth $1.2\\text{ m}$. How many litres of water can it hold when completely full?',
    prompt_ml: 'ഒരു സ്തംഭാകൃതിയിലുള്ള ജലസംഭരണിയുടെ പാദപരപ്പളവ് $2.5\\text{ m}^2$-ഉം ആഴം $1.2\\text{ m}$-ഉം ആണ്. ഇതിൽ പരമാവധി എത്ര ലിറ്റർ വെള്ളം കൊള്ളും?',
    options_en: [
      { k: 'A', t: '$3000\\text{ litres}$' },
      { k: 'B', t: '$300\\text{ litres}$' },
      { k: 'C', t: '$30000\\text{ litres}$' },
      { k: 'D', t: '$2500\\text{ litres}$' }
    ],
    options_ml: [
      { k: 'A', t: '$3000\\text{ ലിറ്റർ}$' },
      { k: 'B', t: '$300\\text{ ലിറ്റർ}$' },
      { k: 'C', t: '$30000\\text{ ലിറ്റർ}$' },
      { k: 'D', t: '$2500\\text{ ലിറ്റർ}$' }
    ],
    answer: 'A',
    solution_en: '$\\text{Volume} = 2.5 \\times 1.2 = 3.0\\text{ m}^3$. Since $1\\text{ m}^3 = 1000\\text{ litres}$, Capacity $= 3.0 \\times 1000 = 3000\\text{ litres}$.',
    solution_ml: 'വ്യാപ്തം $= 2.5 \\times 1.2 = 3.0\\text{ m}^3$. $1\\text{ m}^3 = 1000\\text{ ലിറ്റർ}$ ആയതിനാൽ, ധാരണശേഷി $= 3 \\times 1000 = 3000\\text{ ലിറ്റർ}$.',
    tested_en: 'Volume conversion to liquid capacity (litres).',
    tested_ml: 'വ്യാപ്തത്തെ ലിറ്ററിലേക്ക് മാറ്റൽ.'
  }
);

/* ── Level 2: Written Exercises ─────────────────────────────────────────── */
WRITTEN.push(
  {
    id: 'w.m8.13.1',
    sec: '8.13.1',
    concept: 'm8.13.1.prism-concept',
    title_en: 'Analyzing Geometric Elements of Prisms',
    title_ml: 'സ്തംഭങ്ങളുടെ ഘടകങ്ങൾ വിശകലനം ചെയ്യൽ',
    prompt_en: '<p>A prism has an octagonal base (an 8-sided polygon). Find: (a) the number of faces, (b) the number of vertices, and (c) the number of edges. Verify Euler’s formula $F + V - E = 2$ for this prism.</p>',
    prompt_ml: '<p>അഷ്ടഭുജം (8 വശങ്ങളുള്ള ബഹുഭുജം) പാദമായുള്ള ഒരു സ്തംഭത്തിന്റെ: (a) മുഖങ്ങളുടെ എണ്ണം, (b) ശീർഷങ്ങളുടെ എണ്ണം, (c) അരികുകളുടെ എണ്ണം എന്നിവ കണ്ടെത്തുക. ഈ സ്തംഭത്തിൽ യൂളറുടെ സൂത്രവാക്യം $F + V - E = 2$ ശരിയാണെന്ന് പരിശോധിച്ച് ഉറപ്പുവരുത്തുക.</p>',
    solution_en: `$$\\text{For an } n\\text{-gonal prism with base sides } n = 8:$$

$$\\text{(a) Number of Faces } (F):$$
$$F = n + 2 = 8 + 2 = \\mathbf{10} \\quad \\text{(2 octagonal bases } + 8 \\text{ rectangular lateral faces)}$$

$$\\text{(b) Number of Vertices } (V):$$
$$V = 2n = 2 \\times 8 = \\mathbf{16} \\quad \\text{(8 on the bottom base } + 8 \\text{ on the top base)}$$

$$\\text{(c) Number of Edges } (E):$$
$$E = 3n = 3 \\times 8 = \\mathbf{24} \\quad \\text{(8 base edges } + 8 \\text{ top edges } + 8 \\text{ vertical lateral edges)}$$

$$\\text{Verification of Euler's Formula:}$$
$$F + V - E = 10 + 16 - 24 = 26 - 24 = \\mathbf{2}.$$
$$\\text{Euler's formula is verified.}$$`,
    solution_ml: `$$n = 8 \\text{ വശങ്ങളുള്ള അഷ്ടഭുജസ്തംഭത്തിൽ:}$$

$$\\text{(a) മുഖങ്ങളുടെ എണ്ണം } (F):$$
$$F = n + 2 = 8 + 2 = \\mathbf{10} \\quad \\text{(2 അഷ്ടഭുജ പാദങ്ങൾ } + 8 \\text{ ചതുര പാർശ്വമുഖങ്ങൾ)}$$

$$\\text{(b) ശീർഷങ്ങളുടെ എണ്ണം } (V):$$
$$V = 2n = 2 \\times 8 = \\mathbf{16} \\quad \\text{(താഴെ 8 ശീർഷങ്ങൾ } + \\text{ മുകളിൽ 8 ശീർഷങ്ങൾ)}$$

$$\\text{(c) അരികുകളുടെ എണ്ണം } (E):$$
$$E = 3n = 3 \\times 8 = \\mathbf{24} \\quad \\text{(താഴെ 8 } + \\text{ മുകളിൽ 8 } + \\text{ ലംബമായി 8)}$$

$$\\text{യൂളറുടെ സൂത്രവാക്യ പരിശോധന:}$$
$$F + V - E = 10 + 16 - 24 = 26 - 24 = \\mathbf{2}.$$
$$\\text{യൂളറുടെ സമവാക്യം ശരിയാണെന്ന് തെളിഞ്ഞു.}$$`
  },

  {
    id: 'w.m8.13.2',
    sec: '8.13.2',
    concept: 'm8.13.2.lateral-surface-area',
    title_en: 'Finding Lateral Surface Area and Cost of Painting',
    title_ml: 'പാർശ്വതല പരപ്പളവും പെയിന്റിംഗ് ചെലവും കാണൽ',
    prompt_en: '<p>A hall pillar is in the form of a regular hexagonal prism. Each edge of the base hexagon is $0.5\\text{ m}$, and the height of the pillar is $4\\text{ m}$. Find the lateral surface area of the pillar. What is the cost of painting its lateral surface at ₹50 per square metre?</p>',
    prompt_ml: '<p>ഒരു ഹാളിന്റെ തൂണ് ക്രമഷഡ്ഭുജസ്തംഭാകൃതിയിലാണ്. പാദ ഷഡ്ഭുജത്തിന്റെ ഒരു വശം $0.5\\text{ m}$-ഉം തൂണിന്റെ ഉയരം $4\\text{ m}$-ഉം ആണ്. തൂണിന്റെ പാർശ്വതല പരപ്പളവ് എത്ര? ഒരു ചതുരശ്ര മീറ്ററിന് ₹50 നിരക്കിൽ പാർശ്വതലം പെയിന്റ് ചെയ്യാനുള്ള ചെലവ് എത്ര?</p>',
    solution_en: `$$\\text{Given: Regular hexagonal base with edge } a = 0.5\\text{ m}, \\quad \\text{Height } h = 4\\text{ m}.$$

$$\\text{Step 1: Calculate base perimeter } P$$
$$P = 6 \\times a = 6 \\times 0.5 = 3\\text{ m}.$$

$$\\text{Step 2: Calculate Lateral Surface Area (LSA)}$$
$$\\text{LSA} = P \\times h = 3\\text{ m} \\times 4\\text{ m} = \\mathbf{12\\text{ m}^2}.$$

$$\\text{Step 3: Calculate cost of painting}$$
$$\\text{Rate} = ₹50\\text{ per m}^2.$$
$$\\text{Total Cost} = 12 \\times 50 = \\mathbf{₹600}.$$`,
    solution_ml: `$$\\text{നൽകിയിരിക്കുന്നത്: ക്രമഷഡ്ഭുജ പാദവശം } a = 0.5\\text{ m}, \\quad \\text{ഉയരം } h = 4\\text{ m}.$$

$$\\text{ഘട്ടം 1: പാദച്ചുറ്റളവ് } P \\text{ കാണുന്നു:}$$
$$P = 6 \\times 0.5 = 3\\text{ m}.$$

$$\\text{ഘട്ടം 2: പാർശ്വതല പരപ്പളവ് കണക്കാക്കുന്നു:}$$
$$\\text{പാർശ്വതല പരപ്പളവ്} = P \\times h = 3 \\times 4 = \\mathbf{12\\text{ m}^2}.$$

$$\\text{ഘട്ടം 3: പെയിന്റിംഗ് ചെലവ്:}$$
$$\\text{നിരക്ക്} = ₹50\\text{ / ച.മീ}.$$
$$\\text{ആകെ ചെലവ്} = 12 \\times 50 = \\mathbf{₹600}.$$`
  },

  {
    id: 'w.m8.13.3',
    sec: '8.13.3',
    concept: 'm8.13.3.total-surface-area',
    title_en: 'Total Surface Area of an Equilateral Triangular Prism',
    title_ml: 'സമഭുജ ത്രികോണസ്തംഭത്തിന്റെ ഉപരിതല പരപ്പളവ്',
    prompt_en: '<p>The base of a prism is an equilateral triangle of side $6\\text{ cm}$, and its height is $10\\text{ cm}$. Find: (a) the area of one triangular base, (b) the lateral surface area, and (c) the total surface area of the prism. (Take $\\sqrt{3} \\approx 1.73$).</p>',
    prompt_ml: '<p>ഒരു സ്തംഭത്തിന്റെ പാദം വശം $6\\text{ cm}$ ആയ സമഭുജ ത്രികോണമാണ്; അതിന്റെ ഉയരം $10\\text{ cm}$ ആണ്. (a) ഒരു പാദത്രികോണത്തിന്റെ പരപ്പളവ്, (b) പാർശ്വതല പരപ്പളവ്, (c) ആകെ ഉപരിതല പരപ്പളവ് എന്നിവ കണ്ടെത്തുക. ($\\sqrt{3} \\approx 1.73$ എന്ന് എടുക്കുക).</p>',
    solution_en: `$$\\text{Given: Equilateral triangle base side } a = 6\\text{ cm}, \\quad \\text{Height } h = 10\\text{ cm}.$$

$$\\text{(a) Base Area } (A_b):$$
$$A_b = \\frac{\\sqrt{3}}{4} a^2 = \\frac{\\sqrt{3}}{4} \\times 6^2 = \\frac{\\sqrt{3}}{4} \\times 36 = 9\\sqrt{3} \\approx 9 \\times 1.73 = \\mathbf{15.57\\text{ cm}^2}.$$

$$\\text{(b) Lateral Surface Area (LSA):}$$
$$P = 3 \\times 6 = 18\\text{ cm}.$$
$$\\text{LSA} = P \\times h = 18 \\times 10 = \\mathbf{180\\text{ cm}^2}.$$

$$\\text{(c) Total Surface Area (TSA):}$$
$$\\text{TSA} = \\text{LSA} + 2 A_b = 180 + 2(15.57) = 180 + 31.14 = \\mathbf{211.14\\text{ cm}^2}.$$`,
    solution_ml: `$$\\text{നൽകിയിരിക്കുന്നത്: സമഭുജ ത്രികോണ പാദവശം } a = 6\\text{ cm}, \\quad \\text{ഉയരം } h = 10\\text{ cm}.$$

$$\\text{(a) പാദപരപ്പളവ് } (A_b):$$
$$A_b = \\frac{\\sqrt{3}}{4} a^2 = \\frac{\\sqrt{3}}{4} \\times 36 = 9\\sqrt{3} \\approx 9 \\times 1.73 = \\mathbf{15.57\\text{ cm}^2}.$$

$$\\text{(b) പാർശ്വതല പരപ്പളവ്:}$$
$$P = 3 \\times 6 = 18\\text{ cm}.$$
$$\\text{പാർശ്വതല പരപ്പളവ്} = P \\times h = 18 \\times 10 = \\mathbf{180\\text{ cm}^2}.$$

$$\\text{(c) ആകെ ഉപരിതല പരപ്പളവ്:}$$
$$\\text{ഉപരിതല പരപ്പളവ്} = \\text{LSA} + 2 A_b = 180 + 2(15.57) = 180 + 31.14 = \\mathbf{211.14\\text{ cm}^2}.$$`
  },

  {
    id: 'w.m8.13.4',
    sec: '8.13.4',
    concept: 'm8.13.4.prism-volume',
    title_en: 'Volume and Water Capacity of a Trapezoidal Prism Trough',
    title_ml: 'ലംബകസ്തംഭാകൃതിയിലുള്ള തൊട്ടിയുടെ വ്യാപ്തവും ശേഷിയും',
    prompt_en: '<p>A water trough has the shape of a prism with a trapezium as its vertical cross-section. The parallel sides of the trapezium are $80\\text{ cm}$ and $60\\text{ cm}$, and the vertical distance between them is $40\\text{ cm}$. The length (height) of the trough is $1.5\\text{ m}$. Find: (a) the base area of the trough, (b) its volume in cubic centimetres, and (c) its capacity in litres.</p>',
    prompt_ml: '<p>ഒരു വലിയ ജലത്തൊട്ടിയുടെ കുറുകെയുള്ള ഛേദം ലംബകത്തിന്റെ ആകൃതിയിലുള്ള ഒരു സ്തംഭമാണ്. ലംബകത്തിന്റെ സമാന്തരവശങ്ങൾ $80\\text{ cm}, 60\\text{ cm}$-ഉം അവ തമ്മിലുള്ള ലംബദൂരം $40\\text{ cm}$-ഉം ആണ്. തൊട്ടിയുടെ നീളം (സ്തംഭത്തിന്റെ ഉയരം) $1.5\\text{ m}$ ആണ്. (a) ലംബക പാദത്തിന്റെ പരപ്പളവ്, (b) തൊട്ടിയുടെ വ്യാപ്തം (ഘന സെന്റിമീറ്ററിൽ), (c) തൊട്ടിയുടെ കൊള്ളളവ് (ലിറ്ററിൽ) എന്നിവ കണ്ടെത്തുക.</p>',
    solution_en: `$$\\text{Given: Trapezium parallel sides } a = 80\\text{ cm}, \\quad b = 60\\text{ cm}, \\quad \\text{distance } d = 40\\text{ cm}.$$
$$\\text{Length of prism } h = 1.5\\text{ m} = 150\\text{ cm}.$$

$$\\text{(a) Base Area (Area of Trapezium):}$$
$$A_b = \\frac{1}{2}(a + b) \\times d = \\frac{1}{2}(80 + 60) \\times 40 = \\frac{1}{2}(140) \\times 40 = 70 \\times 40 = \\mathbf{2800\\text{ cm}^2}.$$

$$\\text{(b) Volume in } \\text{cm}^3:$$
$$\\text{Volume} = A_b \\times h = 2800\\text{ cm}^2 \\times 150\\text{ cm} = \\mathbf{420{,}000\\text{ cm}^3}.$$

$$\\text{(c) Capacity in Litres:}$$
$$\\text{Since } 1\\text{ litre} = 1000\\text{ cm}^3:$$
$$\\text{Capacity} = \\frac{420{,}000}{1000} = \\mathbf{420\\text{ litres}}.$$`,
    solution_ml: `$$\\text{നൽകിയിരിക്കുന്നത്: ലംബകത്തിന്റെ സമാന്തരവശങ്ങൾ } a = 80\\text{ cm}, \\quad b = 60\\text{ cm}, \\quad \\text{ലംബദൂരം } d = 40\\text{ cm}.$$
$$\\text{തൊട്ടിയുടെ നീളം (ഉയരം) } h = 1.5\\text{ m} = 150\\text{ cm}.$$

$$\\text{(a) പാദപരപ്പളവ് (ലംബകത്തിന്റെ പരപ്പളവ്):}$$
$$A_b = \\frac{1}{2}(a + b) \\times d = \\frac{1}{2}(80 + 60) \\times 40 = 70 \\times 40 = \\mathbf{2800\\text{ cm}^2}.$$

$$\\text{(b) വ്യാപ്തം (ഘന സെന്റിമീറ്ററിൽ):}$$
$$\\text{വ്യാപ്തം} = A_b \\times h = 2800 \\times 150 = \\mathbf{4{,}20{,}000\\text{ cm}^3}.$$

$$\\text{(c) കൊള്ളളവ് (ലിറ്ററിൽ):}$$
$$1\\text{ ലിറ്റർ} = 1000\\text{ cm}^3 \\text{ ആയതിനാൽ:}$$
$$\\text{കൊള്ളളവ്} = \\frac{4{,}20{,}000}{1000} = \\mathbf{420\\text{ ലിറ്റർ}}.$$`
  }
);
