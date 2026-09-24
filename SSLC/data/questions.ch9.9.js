/* ══════════════════════════════════════════════════════════════════════════
   Class 9 Mathematics — Chapter 9: Circle Measures (വൃത്തപ്പരപ്പളവ്)
   Objective (OMR) Questions & Written Practice Questions
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   Zero mixing. Authentic SCERT Kerala textbook terminology.
   ══════════════════════════════════════════════════════════════════════════ */

/* ── Level 1: Objective Questions (OMR) ─────────────────────────────────── */
OBJECTIVE.push(
  /* ──────────────────────────────────────────────────────────────────────────
     9.9.1 Circumference of a Circle and the Discovery of π
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m9.9.1',
    concept: 'm9.9.1.circumference-and-pi',
    sec: '9.9.1',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'What is the circumference of a circle whose radius is $14\\text{ cm}$ (take $\pi = \\frac{22}{7}$)?',
    prompt_ml: 'ആരം $14\\text{ cm}$ ആയ ഒരു വൃത്തത്തിന്റെ ചുറ്റളവ് എത്ര ($\\\pi = \\frac{22}{7}$)?',
    options_en: [
      { k: 'A', t: '$88\\text{ cm}$' },
      { k: 'B', t: '$44\\text{ cm}$' },
      { k: 'C', t: '$176\\text{ cm}$' },
      { k: 'D', t: '$616\\text{ cm}$' }
    ],
    options_ml: [
      { k: 'A', t: '$88\\text{ cm}$' },
      { k: 'B', t: '$44\\text{ cm}$' },
      { k: 'C', t: '$176\\text{ cm}$' },
      { k: 'D', t: '$616\\text{ cm}$' }
    ],
    answer: 'A',
    solution_en: '$C = 2\pi r = 2 \\times \\frac{22}{7} \\times 14 = 2 \\times 22 \\times 2 = 88\\text{ cm}$.',
    solution_ml: '$C = 2\pi r = 2 \\times \\frac{22}{7} \\times 14 = 88\\text{ cm}$.',
    tested_en: 'Circumference computation from radius.',
    tested_ml: 'ആരം ഉപയോഗിച്ച് വൃത്തത്തിന്റെ ചുറ്റളവ് കാണൽ.'
  },
  {
    id: 'obj.m9.9.2',
    concept: 'm9.9.1.circumference-and-pi',
    sec: '9.9.1',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'A bicycle wheel has diameter $56\\text{ cm}$. How many complete revolutions must it make to cover a distance of $880\\text{ metres}$ (take $\pi = \\frac{22}{7}$)?',
    prompt_ml: 'ഒരു സൈക്കിൾ ചക്രത്തിന്റെ വ്യാസം $56\\text{ cm}$ ആണ്. $880\\text{ മീറ്റർ}$ ദൂരം സഞ്ചരിക്കാൻ ഈ ചക്രം എത്ര തവണ പൂർണ്ണമായി കറങ്ങണം ($\\\pi = \\frac{22}{7}$)?',
    options_en: [
      { k: 'A', t: '$500$' },
      { k: 'B', t: '$250$' },
      { k: 'C', t: '$1000$' },
      { k: 'D', t: '$400$' }
    ],
    options_ml: [
      { k: 'A', t: '$500$' },
      { k: 'B', t: '$250$' },
      { k: 'C', t: '$1000$' },
      { k: 'D', t: '$400$' }
    ],
    answer: 'A',
    solution_en: 'Circumference in one rotation $= \pi d = \\frac{22}{7} \\times 56 = 176\\text{ cm} = 1.76\\text{ m}$. Total rotations $= \\frac{880}{1.76} = 500$.',
    solution_ml: 'ഒരു കറക്കത്തിൽ സഞ്ചരിക്കുന്ന ദൂരം $= \\frac{22}{7} \\times 56 = 176\\text{ cm} = 1.76\\text{ m}$. കറക്കങ്ങളുടെ എണ്ണം $= \\frac{880}{1.76} = 500$.',
    tested_en: 'Number of rotations using wheel circumference.',
    tested_ml: 'ചക്രത്തിന്റെ ചുറ്റളവ് ഉപയോഗിച്ച് കറക്കങ്ങളുടെ എണ്ണം കാണൽ.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     9.9.2 Area of a Circle and Sector Dissection
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m9.9.3',
    concept: 'm9.9.2.area-of-a-circle',
    sec: '9.9.2',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'What is the area of a circle with diameter $28\\text{ cm}$ (take $\pi = \\frac{22}{7}$)?',
    prompt_ml: 'വ്യാസം $28\\text{ cm}$ ആയ ഒരു വൃത്തത്തിന്റെ പരപ്പളവ് എത്ര ($\\\pi = \\frac{22}{7}$)?',
    options_en: [
      { k: 'A', t: '$616\\text{ sq cm}$' },
      { k: 'B', t: '$2464\\text{ sq cm}$' },
      { k: 'C', t: '$308\\text{ sq cm}$' },
      { k: 'D', t: '$88\\text{ sq cm}$' }
    ],
    options_ml: [
      { k: 'A', t: '$616\\text{ ച.സെ.മീ}$' },
      { k: 'B', t: '$2464\\text{ ച.സെ.മീ}$' },
      { k: 'C', t: '$308\\text{ ച.സെ.മീ}$' },
      { k: 'D', t: '$88\\text{ ച.സെ.മീ}$' }
    ],
    answer: 'A',
    solution_en: 'Radius $r = \\frac{28}{2} = 14\\text{ cm}$. Area $= \pi r^2 = \\frac{22}{7} \\times 14 \\times 14 = 22 \\times 28 = 616\\text{ sq cm}$.',
    solution_ml: 'ആരം $r = 14\\text{ cm}$. പരപ്പളവ് $= \\frac{22}{7} \\times 14 \\times 14 = 616\\text{ ച.സെ.മീ}$.',
    tested_en: 'Circle area computation from diameter.',
    tested_ml: 'വ്യാസത്തിൽ നിന്ന് വൃത്തത്തിന്റെ പരപ്പളവ് കാണൽ.'
  },
  {
    id: 'obj.m9.9.4',
    concept: 'm9.9.2.area-of-a-circle',
    sec: '9.9.2',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'If the circumference of a circle is $44\\text{ cm}$, what is its area (take $\pi = \\frac{22}{7}$)?',
    prompt_ml: 'ഒരു വൃത്തത്തിന്റെ ചുറ്റളവ് $44\\text{ cm}$ ആയാൽ അതിന്റെ പരപ്പളവ് എത്ര ($\\\pi = \\frac{22}{7}$)?',
    options_en: [
      { k: 'A', t: '$154\\text{ sq cm}$' },
      { k: 'B', t: '$308\\text{ sq cm}$' },
      { k: 'C', t: '$88\\text{ sq cm}$' },
      { k: 'D', t: '$44\\text{ sq cm}$' }
    ],
    options_ml: [
      { k: 'A', t: '$154\\text{ ച.സെ.മീ}$' },
      { k: 'B', t: '$308\\text{ ച.സെ.മീ}$' },
      { k: 'C', t: '$88\\text{ ച.സെ.മീ}$' },
      { k: 'D', t: '$44\\text{ ച.സെ.മീ}$' }
    ],
    answer: 'A',
    solution_en: '$2\pi r = 44 \\implies 2 \\times \\frac{22}{7} \\times r = 44 \\implies r = 7\\text{ cm}$. Area $= \pi r^2 = \\frac{22}{7} \\times 49 = 154\\text{ sq cm}$.',
    solution_ml: '$2\pi r = 44 \\implies r = 7\\text{ cm}$. പരപ്പളവ് $= \\frac{22}{7} \\times 49 = 154\\text{ ച.സെ.മീ}$.',
    tested_en: 'Finding area from given circumference.',
    tested_ml: 'ചുറ്റളവിൽ നിന്ന് പരപ്പളവ് കണ്ടെത്തൽ.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     9.9.3 Length of an Arc
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m9.9.5',
    concept: 'm9.9.3.arc-length',
    sec: '9.9.3',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'What is the length of an arc of a circle of radius $21\\text{ cm}$ that subtends a central angle of $60^\\circ$ (take $\pi = \\frac{22}{7}$)?',
    prompt_ml: 'ആരം $21\\text{ cm}$ ആയ വൃത്തത്തിൽ കേന്ദ്രത്തിൽ $60^\\circ$ കോണുണ്ടാക്കുന്ന ചാപത്തിന്റെ നീളം എത്ര ($\\\pi = \\frac{22}{7}$)?',
    options_en: [
      { k: 'A', t: '$22\\text{ cm}$' },
      { k: 'B', t: '$44\\text{ cm}$' },
      { k: 'C', t: '$11\\text{ cm}$' },
      { k: 'D', t: '$33\\text{ cm}$' }
    ],
    options_ml: [
      { k: 'A', t: '$22\\text{ cm}$' },
      { k: 'B', t: '$44\\text{ cm}$' },
      { k: 'C', t: '$11\\text{ cm}$' },
      { k: 'D', t: '$33\\text{ cm}$' }
    ],
    answer: 'A',
    solution_en: '$l = \\frac{\\theta}{360} \\times 2\pi r = \\frac{60}{360} \\times 2 \\times \\frac{22}{7} \\times 21 = \\frac{1}{6} \\times 132 = 22\\text{ cm}$.',
    solution_ml: '$l = \\frac{60}{360} \\times 2 \\times \\frac{22}{7} \\times 21 = \\frac{1}{6} \\times 132 = 22\\text{ cm}$.',
    tested_en: 'Arc length calculation from central angle and radius.',
    tested_ml: 'കേന്ദ്രകോണും ആരവും നൽകിയാൽ ചാപനീളം കാണൽ.'
  },
  {
    id: 'obj.m9.9.6',
    concept: 'm9.9.3.arc-length',
    sec: '9.9.3',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'An arc of a circle of radius $10\\text{ cm}$ has length $5\pi\\text{ cm}$. What is the central angle subtended by this arc?',
    prompt_ml: 'ആരം $10\\text{ cm}$ ആയ ഒരു വൃത്തത്തിലെ ചാപനീളം $5\pi\\text{ cm}$ ആണ്. ഈ ചാപം കേന്ദ്രത്തിലുണ്ടാക്കുന്ന കോൺ എത്ര?',
    options_en: [
      { k: 'A', t: '$90^\\circ$' },
      { k: 'B', t: '$60^\\circ$' },
      { k: 'C', t: '$45^\\circ$' },
      { k: 'D', t: '$120^\\circ$' }
    ],
    options_ml: [
      { k: 'A', t: '$90^\\circ$' },
      { k: 'B', t: '$60^\\circ$' },
      { k: 'C', t: '$45^\\circ$' },
      { k: 'D', t: '$120^\\circ$' }
    ],
    answer: 'A',
    solution_en: '$l = \\frac{\\theta}{360} \\times 2\pi r \\implies 5\pi = \\frac{\\theta}{360} \\times 20\pi \\implies \\frac{\\theta}{360} = \\frac{5}{20} = \\frac{1}{4} \\implies \\theta = 90^\\circ$.',
    solution_ml: '$5\pi = \\frac{\\theta}{360} \\times 20\pi \\implies \\frac{\\theta}{360} = \\frac{1}{4} \\implies \\theta = 90^\\circ$.',
    tested_en: 'Finding central angle from arc length and radius.',
    tested_ml: 'ചാപനീളത്തിൽ നിന്ന് കേന്ദ്രകോൺ കണ്ടെത്തൽ.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     9.9.4 Area of a Sector and Concentric Circular Rings
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m9.9.7',
    concept: 'm9.9.4.sector-area-and-circular-rings',
    sec: '9.9.4',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'A sector of a circle of radius $6\\text{ cm}$ has an arc length of $8\\text{ cm}$. What is the area of this sector?',
    prompt_ml: 'ആരം $6\\text{ cm}$ ആയ ഒരു വൃത്തത്തിലെ സെക്ടറിന്റെ ചാപനീളം $8\\text{ cm}$ ആണ്. ഈ സെക്ടറിന്റെ പരപ്പളവ് എത്ര?',
    options_en: [
      { k: 'A', t: '$24\\text{ sq cm}$' },
      { k: 'B', t: '$48\\text{ sq cm}$' },
      { k: 'C', t: '$12\\text{ sq cm}$' },
      { k: 'D', t: '$36\\text{ sq cm}$' }
    ],
    options_ml: [
      { k: 'A', t: '$24\\text{ ച.സെ.മീ}$' },
      { k: 'B', t: '$48\\text{ ച.സെ.മീ}$' },
      { k: 'C', t: '$12\\text{ ച.സെ.മീ}$' },
      { k: 'D', t: '$36\\text{ ച.സെ.മീ}$' }
    ],
    answer: 'A',
    solution_en: '$\\text{Area} = \\frac{1}{2} l r = \\frac{1}{2} \\times 8 \\times 6 = 24\\text{ sq cm}$.',
    solution_ml: '$\\text{പരപ്പളവ്} = \\frac{1}{2} l r = \\frac{1}{2} \\times 8 \\times 6 = 24\\text{ ച.സെ.മീ}$.',
    tested_en: 'Sector area formula using arc length and radius.',
    tested_ml: 'ചാപനീളവും ആരവും ഉപയോഗിച്ച് സെക്ടർ പരപ്പളവ് കാണൽ.'
  },
  {
    id: 'obj.m9.9.8',
    concept: 'm9.9.4.sector-area-and-circular-rings',
    sec: '9.9.4',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'Two concentric circles have radii $9\\text{ cm}$ and $5\\text{ cm}$. What is the exact area of the circular ring between them (in terms of $\pi$)?',
    prompt_ml: 'ഏകേന്ദീയ വൃത്തങ്ങളുടെ ആരങ്ങൾ $9\\text{ cm}$, $5\\text{ cm}$ ആണ്. അവയ്ക്കിടയിലുള്ള വൃത്താകാര വളയത്തിന്റെ പരപ്പളവ് $\\\pi$-ൽ എത്ര?',
    options_en: [
      { k: 'A', t: '$56\pi\\text{ sq cm}$' },
      { k: 'B', t: '$16\pi\\text{ sq cm}$' },
      { k: 'C', t: '$106\pi\\text{ sq cm}$' },
      { k: 'D', t: '$4\pi\\text{ sq cm}$' }
    ],
    options_ml: [
      { k: 'A', t: '$56\pi\\text{ ച.സെ.മീ}$' },
      { k: 'B', t: '$16\pi\\text{ ച.സെ.മീ}$' },
      { k: 'C', t: '$106\pi\\text{ ച.സെ.മീ}$' },
      { k: 'D', t: '$4\pi\\text{ ച.സെ.മീ}$' }
    ],
    answer: 'A',
    solution_en: '$\\text{Area} = \pi(R^2 - r^2) = \pi(9^2 - 5^2) = \pi(81 - 25) = 56\pi\\text{ sq cm}$.',
    solution_ml: '$\\text{പരപ്പളവ്} = \pi(R^2 - r^2) = \pi(81 - 25) = 56\pi\\text{ ച.സെ.മീ}$.',
    tested_en: 'Area of circular ring / annulus.',
    tested_ml: 'വൃത്താകാര വളയത്തിന്റെ പരപ്പളവ് കാണൽ.'
  }
);

/* ── Level 2: Written Exercises ─────────────────────────────────────────── */
WRITTEN.push(
  {
    id: 'w.m9.9.1',
    sec: '9.9.1',
    type: 'written',
    marks: 4,
    time: 180,
    concept: 'm9.9.1.circumference-and-pi',
    tested_en: 'Circular wheel revolution distance and total rotation calculation',
    tested_ml: 'വൃത്താകാര ചക്രത്തിന്റെ ഭ്രമണ ദൂരവും ആകെ കറക്കങ്ങളുടെ എണ്ണവും',
    title_en: 'Wheel Revolutions and Road Travel Calculation',
    title_ml: 'ചക്രത്തിന്റെ കറക്കവും സഞ്ചരിച്ച ദൂരവും',
    prompt_en: '<p>A bus has wheels of diameter $70\\text{ cm}$. (i) Calculate the distance traveled by the bus in one complete revolution of each wheel. (ii) How many complete revolutions will each wheel make when the bus travels a distance of $11\\text{ km}$? (take $\\pi = \\frac{22}{7}$)</p>',
    prompt_ml: '<p>ഒരു ബസ്സിന്റെ ചക്രങ്ങളുടെ വ്യാസം $70\\text{ cm}$ ആണ്. (i) ഓരോ ചക്രവും ഒരു പ്രാവശ്യം പൂർണ്ണമായി കറങ്ങുമ്പോൾ ബസ് സഞ്ചരിക്കുന്ന ദൂരം എത്ര? (ii) ബസ് $11\\text{ km}$ ദൂരം സഞ്ചരിക്കുമ്പോൾ ഓരോ ചക്രവും എത്ര തവണ പൂർണ്ണമായി കറങ്ങും? ($\\pi = \\frac{22}{7}$)</p>',
    solution_en: `$$\\text{Step 1: Circumference of One Revolution}$$
$$\\text{Diameter } d = 70\\text{ cm}$$
$$\\text{Distance in 1 revolution } = \\text{Circumference } C = \\pi d$$
$$C = \\frac{22}{7} \\times 70 = 22 \\times 10 = \\mathbf{220\\text{ cm}} = \\mathbf{2.2\\text{ metres}}$$

$$\\text{Step 2: Total Revolutions for 11 km}$$
$$\\text{Total distance } D = 11\\text{ km} = 11 \\times 1000\\text{ m} = 11000\\text{ m}$$
$$\\text{Number of revolutions } N = \\frac{\\text{Total Distance}}{\\text{Circumference in 1 rev}}$$
$$N = \\frac{11000}{2.2} = \\frac{110000}{22} = \\mathbf{5000\\text{ revolutions}}$$
$$\\text{Each wheel will make } \\mathbf{5000} \\text{ complete revolutions.}$$`,
    solution_ml: `$$\\text{ഘട്ടം 1: ഒരു കറക്കത്തിൽ സഞ്ചരിക്കുന്ന ദൂരം}$$
$$\\text{വ്യാസം } d = 70\\text{ cm}$$
$$\\text{ഒരു കറക്കത്തിലെ ദൂരം } = \\text{ചുറ്റളവ് } C = \\pi d$$
$$C = \\frac{22}{7} \\times 70 = \\mathbf{220\\text{ cm}} = \\mathbf{2.2\\text{ മീറ്റർ}}$$

$$\\text{ഘട്ടം 2: 11 km സഞ്ചരിക്കാനുള്ള കറക്കങ്ങളുടെ എണ്ണം}$$
$$\\text{ആകെ ദൂരം } = 11\\text{ km} = 11000\\text{ മീറ്റർ}$$
$$\\text{കറക്കങ്ങളുടെ എണ്ണം } N = \\frac{11000}{2.2} = \\mathbf{5000\\text{ കറക്കങ്ങൾ}}$$`
  },

  {
    id: 'w.m9.9.2',
    sec: '9.9.2',
    type: 'written',
    marks: 4,
    time: 180,
    concept: 'm9.9.2.area-of-a-circle',
    tested_en: 'Geometric derivation of circle area formula using sector dissection',
    tested_ml: 'സെക്ടർ വിഭജനം വഴി വൃത്തപ്പരപ്പളവ് സൂത്രവാക്യത്തിന്റെ ജ്യാമിതീയ തെളിവ്',
    title_en: 'Geometric Sector Dissection Proof of Circle Area πr²',
    title_ml: 'സെക്ടർ വിഭജനം വഴി വൃത്തപ്പരപ്പളവ് πr² ആണെന്നതിന്റെ തെളിവ്',
    prompt_en: '<p>Describe the geometric method of dissecting a circle of radius $r$ into numerous equal sectors and rearranging them to deduce that the area of the circle is $\\pi r^2$. Clearly explain how the length and width of the rearranged shape relate to the circle’s dimensions.</p>',
    prompt_ml: '<p>ആരം $r$ ആയ ഒരു വൃത്തത്തെ തുല്യ സെക്ടറുകളായി മുറിച്ച് പുനഃക്രമീകരിച്ച് വൃത്തത്തിന്റെ പരപ്പളവ് $\\pi r^2$ ആണെന്ന് കണ്ടെത്തുന്ന ജ്യാമിതീയ രീതി വിശദീകരിക്കുക. രൂപപ്പെടുന്ന ചതുരത്തിന്റെ നീളവും വീതിയും വൃത്തത്തിന്റെ അളവുകളുമായി എങ്ങനെ ബന്ധപ്പെട്ടിരിക്കുന്നു എന്ന് വ്യക്തമാക്കുക.</p>',
    solution_en: `$$\\text{Step 1: Sector Dissection}$$
$$\\text{Divide a circle of radius } r \\text{ and circumference } 2\\pi r \\text{ into } 2n \\text{ equal, thin sectors.}$$

$$\\text{Step 2: Alternating Head-to-Tail Rearrangement}$$
$$\\text{Arrange the } 2n \\text{ sectors side by side, alternating the orientation (half pointing up, half pointing down).}$$
$$\\text{The resulting figure forms an approximate parallelogram (approaching an exact rectangle as } n \\to \\infty\\text{).}$$

$$\\text{Step 3: Dimensions of the Limiting Rectangle}$$
$$\\text{Base of the rectangle: The curved arcs of the sectors form the top and bottom edges.}$$
$$\\text{Bottom edge length } = \\frac{1}{2} \\times \\text{Circumference} = \\frac{1}{2} (2\\pi r) = \\mathbf{\\pi r}$$
$$\\text{Height of the rectangle: The straight sides of each sector equal the radius } \\mathbf{r}.$$

$$\\text{Step 4: Deduction of Area}$$
$$\\text{Area of the rectangle } = \\text{base} \\times \\text{height} = (\\pi r) \\times r = \\mathbf{\\pi r^2}$$
$$\\text{Since the area of the rearranged rectangle equals the area of the original circle:}$$
$$\\mathbf{\\text{Area of Circle} = \\pi r^2}$$`,
    solution_ml: `$$\\text{ഘട്ടം 1: സെക്ടർ വിഭജനം}$$
$$r \\text{ ആരമുള്ള വൃത്തത്തെ } 2n \\text{ തുല്യ സെക്ടറുകളായി വിഭജിക്കുന്നു.}$$

$$\\text{ഘട്ടം 2: പുനഃക്രമീകരണം}$$
$$\\text{ഈ സെക്ടറുകളെ ഒന്നിടവിട്ട് തലതിരിച്ച് ചേർത്തുവെച്ച് ഒരു ചതുരാകൃതി ഉണ്ടാക്കുന്നു.}$$

$$\\text{ഘട്ടം 3: ചതുരത്തിന്റെ അളവുകൾ}$$
$$\\text{ചതുരത്തിന്റെ നീളം } = \\frac{\\text{ചുറ്റളവ്}}{2} = \\frac{2\\pi r}{2} = \\mathbf{\\pi r}$$
$$\\text{ചതുരത്തിന്റെ വീതി } = \\text{ആരം } \\mathbf{r}$$

$$\\text{ഘട്ടം 4: പരപ്പളവ് കണക്കാക്കൽ}$$
$$\\text{ചതുരത്തിന്റെ പരപ്പളവ്} = \\text{നീളം} \\times \\text{വീതി} = (\\pi r) \\times r = \\mathbf{\\pi r^2}$$
$$\\text{അതിനാൽ വൃത്തത്തിന്റെ പരപ്പളവ് } = \\mathbf{\\pi r^2}$$`
  },

  {
    id: 'w.m9.9.3',
    sec: '9.9.3',
    type: 'written',
    marks: 4,
    time: 180,
    concept: 'm9.9.3.arc-length',
    tested_en: 'Sector arc length, perimeter, and area calculations',
    tested_ml: 'സെക്ടറിന്റെ ചാപനീളം, ചുറ്റളവ്, പരപ്പളവ് എന്നിവ കണക്കാക്കൽ',
    title_en: 'Arc Length and Total Perimeter of a Sector',
    title_ml: 'സെക്ടറിന്റെ ചാപനീളവും ആകെ ചുറ്റളവും',
    prompt_en: '<p>A sector of a circle of radius $14\\text{ cm}$ subtends a central angle of $45^\\circ$. (i) Calculate the length of the arc of this sector. (ii) Calculate the total perimeter of the sector. (iii) Calculate the area of the sector. (take $\\pi = \\frac{22}{7}$)</p>',
    prompt_ml: '<p>ആരം $14\\text{ cm}$ ആയ ഒരു വൃത്തത്തിലെ സെക്ടർ കേന്ദ്രത്തിൽ $45^\\circ$ കോണുണ്ടാക്കുന്നു. (i) ഈ സെക്ടറിന്റെ ചാപത്തിന്റെ നീളം എത്ര? (ii) സെക്ടറിന്റെ ആകെ ചുറ്റളവ് എത്ര? (iii) സെക്ടറിന്റെ പരപ്പളവ് എത്ര? ($\\pi = \\frac{22}{7}$)</p>',
    solution_en: `$$\\text{Step 1: Arc Length } l$$
$$\\theta = 45^\\circ, \\quad r = 14\\text{ cm}$$
$$l = \\frac{\\theta}{360^\\circ} \\times 2\\pi r = \\frac{45}{360} \\times 2 \\times \\frac{22}{7} \\times 14$$
$$l = \\frac{1}{8} \\times 88 = \\mathbf{11\\text{ cm}}$$

$$\\text{Step 2: Total Perimeter of the Sector } P$$
$$\\text{Perimeter includes the arc plus two bounding radii:}$$
$$P = l + 2r = 11 + 2(14) = 11 + 28 = \\mathbf{39\\text{ cm}}$$

$$\\text{Step 3: Area of the Sector } A$$
$$A = \\frac{1}{2} l r = \\frac{1}{2} \\times 11 \\times 14 = 11 \\times 7 = \\mathbf{77\\text{ sq cm}}$$
$$\\text{Alternatively: } A = \\frac{45}{360} \\times \\frac{22}{7} \\times 14^2 = \\frac{1}{8} \\times 616 = 77\\text{ sq cm} \\quad (\\text{Verified})$$`,
    solution_ml: `$$\\text{ഘട്ടം 1: ചാപനീളം } l$$
$$\\theta = 45^\\circ, \\quad r = 14\\text{ cm}$$
$$l = \\frac{45}{360} \\times 2 \\times \\frac{22}{7} \\times 14 = \\frac{1}{8} \\times 88 = \\mathbf{11\\text{ cm}}$$

$$\\text{ഘട്ടം 2: സെക്ടറിന്റെ ചുറ്റളവ് } P$$
$$P = l + 2r = 11 + 2(14) = 11 + 28 = \\mathbf{39\\text{ cm}}$$

$$\\text{ഘട്ടം 3: സെക്ടറിന്റെ പരപ്പളവ് } A$$
$$A = \\frac{1}{2} l r = \\frac{1}{2} \\times 11 \\times 14 = \\mathbf{77\\text{ ച.സെ.മീ}}$$`
  },

  {
    id: 'w.m9.9.4',
    sec: '9.9.4',
    type: 'written',
    marks: 4,
    time: 180,
    concept: 'm9.9.4.sector-area-and-circular-rings',
    tested_en: 'Circular ring (annulus) area and paving cost calculation',
    tested_ml: 'വൃത്തപ്പാതയുടെ (വളയം) പരപ്പളവും നിർമ്മാണച്ചെലവും',
    title_en: 'Circular Running Track Annulus Area and Cost Calculation',
    title_ml: 'വൃത്താകാര ഓട്ടപ്പാതയുടെ പരപ്പളവും നിർമ്മാണച്ചെലവും',
    prompt_en: '<p>A circular grass lawn has a radius of $21\\text{ metres}$. A circular walking track of uniform width $7\\text{ metres}$ is constructed completely around the lawn. (i) Calculate the inner circumference and the outer circumference of the track. (ii) Calculate the total area of the walking track (annulus). (iii) If paving the track costs ₹50 per square metre, calculate the total cost of paving. (take $\\pi = \\frac{22}{7}$)</p>',
    prompt_ml: '<p>ആരം $21\\text{ മീറ്റർ}$ ആയ ഒരു വൃത്താകാര പുൽത്തകിടിയുണ്ട്. ഇതിനു ചുറ്റുമായി $7\\text{ മീറ്റർ}$ വീതിയിൽ വൃത്താകാരത്തിൽ ഒരു നടപ്പാത നിർമ്മിക്കുന്നു. (i) പാതയുടെ ഉൾച്ചുറ്റളവും പുറംചുറ്റളവും കണ്ടെത്തുക. (ii) നടപ്പാതയുടെ ആകെ പരപ്പളവ് കണക്കാക്കുക. (iii) ചതുരശ്ര മീറ്ററിന് ₹50 നിരക്കിൽ നടപ്പാത പാകാനുള്ള ആകെ ചെലവ് എത്ര? ($\\pi = \\frac{22}{7}$)</p>',
    solution_en: `$$\\text{Step 1: Inner and Outer Radii and Circumferences}$$
$$\\text{Inner radius } r = 21\\text{ m}$$
$$\\text{Outer radius } R = 21 + 7 = 28\\text{ m}$$
$$\\text{Inner Circumference } = 2\\pi r = 2 \\times \\frac{22}{7} \\times 21 = 2 \\times 22 \\times 3 = \\mathbf{132\\text{ m}}$$
$$\\text{Outer Circumference } = 2\\pi R = 2 \\times \\frac{22}{7} \\times 28 = 2 \\times 22 \\times 4 = \\mathbf{176\\text{ m}}$$

$$\\text{Step 2: Area of the Track (Annulus)}$$
$$\\text{Area} = \\pi(R^2 - r^2) = \\pi(R + r)(R - r)$$
$$\\text{Area} = \\frac{22}{7} \\times (28 + 21)(28 - 21) = \\frac{22}{7} \\times 49 \\times 7 = 22 \\times 49 = \\mathbf{1078\\text{ sq metres}}$$

$$\\text{Step 3: Total Paving Cost}$$
$$\\text{Rate per sq metre } = ₹50$$
$$\\text{Total Cost} = 1078 \\times 50 = \\mathbf{₹53{,}900}$$`,
    solution_ml: `$$\\text{ഘട്ടം 1: ആരങ്ങളും ചുറ്റളവുകളും}$$
$$\\text{അകം ആരം } r = 21\\text{ m}, \\quad \\text{പുറം ആരം } R = 21 + 7 = 28\\text{ m}$$
$$\\text{ഉൾച്ചുറ്റളവ്} = 2 \\times \\frac{22}{7} \\times 21 = \\mathbf{132\\text{ മീറ്റർ}}$$
$$\\text{പുറംചുറ്റളവ്} = 2 \\times \\frac{22}{7} \\times 28 = \\mathbf{176\\text{ മീറ്റർ}}$$

$$\\text{ഘട്ടം 2: നടപ്പാതയുടെ പരപ്പളവ്}$$
$$\\text{പരപ്പളവ്} = \\pi(R^2 - r^2) = \\frac{22}{7} \\times (28 + 21)(28 - 21) = \\frac{22}{7} \\times 49 \\times 7 = \\mathbf{1078\\text{ ചതുരശ്ര മീറ്റർ}}$$

$$\\text{ഘട്ടം 3: ആകെ ചെലവ്}$$
$$\\text{ആകെ ചെലവ്} = 1078 \\times 50 = \\mathbf{₹53{,}900}$$`
  },

  {
    id: 'w.m9.9.5',
    sec: '9.9.3',
    type: 'written',
    marks: 4,
    time: 180,
    concept: 'm9.9.3.arc-length',
    tested_en: 'Arc length proportionality and central angle relations across circles',
    tested_ml: 'വൃത്തങ്ങളിലെ ചാപനീള തുല്യതയും കേന്ദ്രകോൺ ആനുപാതികതയും',
    title_en: 'Arc Length and Central Angle Comparison in Two Circles',
    title_ml: 'രണ്ട് വൃത്തങ്ങളിലെ ചാപനീളവും കേന്ദ്രകോണും തമ്മിലുള്ള താരതമ്യം',
    prompt_en: '<p>Arcs of the same length subtend angles of $60^\\circ$ and $75^\\circ$ at the centres of two circles.<br>(a) Find the ratio of the radii of the two circles.<br>(b) If the radius of the first circle is $15\\text{ cm}$, find the radius of the second circle.<br>(c) Calculate the common arc length in terms of $\\pi$.</p>',
    prompt_ml: '<p>തുല്യ നീളമുള്ള രണ്ട് ചാപങ്ങൾ രണ്ട് വൃത്തങ്ങളുടെ കേന്ദ്രങ്ങളിൽ യഥാക്രമം $60^\\circ$, $75^\\circ$ വീതം കോണുകളുണ്ടാക്കുന്നു.<br>(a) രണ്ട് വൃത്തങ്ങളുടെയും ആരങ്ങൾ തമ്മിലുള്ള അംശബന്ധം കണ്ടെത്തുക.<br>(b) ആദ്യത്തെ വൃത്തത്തിന്റെ ആരം $15\\text{ cm}$ ആണെങ്കിൽ രണ്ടാമത്തെ വൃത്തത്തിന്റെ ആരം കണ്ടെത്തുക.<br>(c) പൊതുവായ ചാപനീളം $\\pi$ ഉൾപ്പെടുത്തി കണക്കാക്കുക.</p>',
    solution_en: `$$\\text{(a) Let the radii be } r_1, r_2 \\text{ and arc length be } l.$$
$$l = \\frac{\\theta_1}{360^\\circ} \\times 2\\pi r_1 = \\frac{\\theta_2}{360^\\circ} \\times 2\\pi r_2$$
$$\\theta_1 r_1 = \\theta_2 r_2 \\implies 60 r_1 = 75 r_2 \\implies \\frac{r_1}{r_2} = \\frac{75}{60} = \\mathbf{\\frac{5}{4}} \\quad (5 : 4).$$

$$\\text{(b) When } r_1 = 15\\text{ cm:}$$
$$\\frac{15}{r_2} = \\frac{5}{4} \\implies r_2 = \\frac{15 \\times 4}{5} = \\mathbf{12\\text{ cm}}.$$

$$\\text{(c) Arc length } l:$$
$$l = \\frac{60}{360} \\times 2\\pi(15) = \\frac{1}{6} \\times 30\\pi = \\mathbf{5\\pi\\text{ cm}}.$$`,
    solution_ml: `$$\\text{(a) ആരങ്ങൾ } r_1, r_2 \\text{ എന്നും ചാപനീളം } l \\text{ എന്നും കരുതുക:}$$
$$\\frac{60}{360} \\times 2\\pi r_1 = \\frac{75}{360} \\times 2\\pi r_2 \\implies 60 r_1 = 75 r_2$$
$$\\frac{r_1}{r_2} = \\frac{75}{60} = \\mathbf{\\frac{5}{4}} \\quad (5 : 4).$$

$$\\text{(b) } r_1 = 15\\text{ cm} \\text{ ആയാൽ:}$$
$$\\frac{15}{r_2} = \\frac{5}{4} \\implies r_2 = \\frac{15 \\times 4}{5} = \\mathbf{12\\text{ cm}}.$$

$$\\text{(c) ചാപനീളം } l:$$
$$l = \\frac{60}{360} \\times 2\\pi(15) = \\mathbf{5\\pi\\text{ cm}}.$$`
  },

  {
    id: 'w.m9.9.6',
    sec: '9.9.4',
    type: 'written',
    marks: 4,
    time: 180,
    concept: 'm9.9.4.sector-area-and-circular-rings',
    tested_en: 'Area of region between inscribed circle and circumscribed square',
    tested_ml: 'സമചതുരവും അന്തർവൃത്തവും തമ്മിലുള്ള പ്രദേശത്തിന്റെ പരപ്പളവ്',
    title_en: 'Area of Shaded Region between Inscribed Circle and Square',
    title_ml: 'സമചതുരവും അന്തർവൃത്തവും തമ്മിലുള്ള തണലിട്ട ഭാഗത്തിന്റെ പരപ്പളവ്',
    prompt_en: '<p>A circle of radius $7\\text{ cm}$ is inscribed inside a square such that it touches all four sides.<br>(a) Find the length of each side of the square and its area.<br>(b) Calculate the area of the inscribed circle (take $\\pi = \\frac{22}{7}$).<br>(c) Calculate the area of the region enclosed between the square and the circle.</p>',
    prompt_ml: '<p>ആരം $7\\text{ cm}$ ആയ ഒരു വൃത്തം നാല് വശങ്ങളെയും സ്പർശിച്ചുകൊണ്ട് ഒരു സമചതുരത്തിനുള്ളിൽ അന്തർവ്യാഖ്യാനം ചെയ്തിരിക്കുന്നു.<br>(a) സമചതുരത്തിന്റെ ഒരു വശത്തിന്റെ നീളവും പരപ്പളവും കണ്ടെത്തുക.<br>(b) വൃത്തത്തിന്റെ പരപ്പളവ് കണക്കാക്കുക ($\\pi = \\frac{22}{7}$).<br>(c) സമചതുരത്തിനും വൃത്തത്തിനും ഇടയിലുള്ള ഭാഗത്തിന്റെ പരപ്പളവ് കണക്കാക്കുക.</p>',
    solution_en: `$$\\text{(a) Side of the square } a = \\text{diameter of inscribed circle} = 2r = 2(7) = \\mathbf{14\\text{ cm}}.$$
$$\\text{Area of square } = a^2 = 14^2 = \\mathbf{196\\text{ sq cm}}.$$

$$\\text{(b) Area of the inscribed circle:}$$
$$\\text{Area} = \\pi r^2 = \\frac{22}{7} \\times 7^2 = 22 \\times 7 = \\mathbf{154\\text{ sq cm}}.$$

$$\\text{(c) Area between square and circle:}$$
$$\\text{Enclosed Area} = \\text{Area of Square} - \\text{Area of Circle} = 196 - 154 = \\mathbf{42\\text{ sq cm}}.$$`,
    solution_ml: `$$\\text{(a) സമചതുരത്തിന്റെ ഒരു വശം } a = \\text{വൃത്തത്തിന്റെ വ്യാസം} = 2r = 2 \\times 7 = \\mathbf{14\\text{ cm}}.$$
$$\\text{സമചതുരത്തിന്റെ പരപ്പളവ് } = a^2 = 14^2 = \\mathbf{196\\text{ ച.സെ.മീ}}.$$

$$\\text{(b) വൃത്തപ്പരപ്പളവ്:}$$
$$\\pi r^2 = \\frac{22}{7} \\times 7^2 = \\mathbf{154\\text{ ച.സെ.മീ}}.$$

$$\\text{(c) ഇടയിലുള്ള പ്രദേശത്തിന്റെ പരപ്പളവ്:}$$
$$\\text{പരപ്പളവ്} = 196 - 154 = \\mathbf{42\\text{ ച.സെ.മീ}}.$$`
  }
);
