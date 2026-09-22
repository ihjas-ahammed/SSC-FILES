/* ══════════════════════════════════════════════════════════════════════════
   Class 9 Mathematics — Chapter 3: Pairs of Equations (സമവാക്യജോടികൾ)
   Objective (OMR) Questions & Written Practice Questions
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   Zero mixing. Authentic SCERT Kerala textbook terminology.
   ══════════════════════════════════════════════════════════════════════════ */

/* ── Level 1: Objective Questions (OMR) ─────────────────────────────────── */
OBJECTIVE.push(
  /* ──────────────────────────────────────────────────────────────────────────
     9.3.1 Formulating Pairs of Equations
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m9.3.1',
    concept: 'm9.3.1.formulating-pairs-of-equations',
    sec: '9.3.1',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'There are 100 beads in a box, black and white. There are 10 more black beads than white. How many black beads are there?',
    prompt_ml: 'ഒരു പെട്ടിയിൽ കറുപ്പും വെളുപ്പുമായി ആകെ 100 മുത്തുകളുണ്ട്. വെളുത്ത മുത്തുകളേക്കാൾ 10 എണ്ണം കൂടുതലാണ് കറുത്ത മുത്തുകൾ. കറുത്ത മുത്തുകൾ എത്രയെണ്ണമുണ്ട്?',
    options_en: [
      { k: 'A', t: '$55$' },
      { k: 'B', t: '$45$' },
      { k: 'C', t: '$60$' },
      { k: 'D', t: '$50$' }
    ],
    options_ml: [
      { k: 'A', t: '$55$' },
      { k: 'B', t: '$45$' },
      { k: 'C', t: '$60$' },
      { k: 'D', t: '$50$' }
    ],
    answer: 'A',
    solution_en: 'Let black be $b$ and white be $w$. $b + w = 100$ and $b - w = 10$. Adding: $2b = 110 \\implies b = 55$.',
    solution_ml: '$b + w = 100$, $b - w = 10$. രണ്ടും കൂട്ടുമ്പോൾ: $2b = 110 \\implies b = 55$.',
    tested_en: 'Solving a classic sum and difference word problem.',
    tested_ml: 'തുകയും വ്യത്യാസവും ഉപയോഗിച്ചുള്ള സമവാക്യ പരിഹാരം.'
  },
  {
    id: 'obj.m9.3.2',
    concept: 'm9.3.1.formulating-pairs-of-equations',
    sec: '9.3.1',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'The price of a table and a chair together is ₹11000. The price of the table and 4 chairs is ₹14000. What is the price of one chair?',
    prompt_ml: 'ഒരു മേശയുടെയും ഒരു കസേരയുടെയും ആകെ വില ₹11000 ആണ്. മേശയുടെയും 4 കസേരകളുടെയും വില ₹14000 ആണ്. ഒരു കസേരയുടെ വില എത്ര?',
    options_en: [
      { k: 'A', t: '₹1000' },
      { k: 'B', t: '₹1500' },
      { k: 'C', t: '₹2000' },
      { k: 'D', t: '₹800' }
    ],
    options_ml: [
      { k: 'A', t: '₹1000' },
      { k: 'B', t: '₹1500' },
      { k: 'C', t: '₹2000' },
      { k: 'D', t: '₹800' }
    ],
    answer: 'A',
    solution_en: 'The 3 extra chairs cost $14000 - 11000 = ₹3000$. Hence 1 chair costs $\\frac{3000}{3} = ₹1000$.',
    solution_ml: '3 അധിക കസേരകളുടെ വില $14000 - 11000 = ₹3000$. അതിനാൽ ഒരു കസേരയുടെ വില $= \\frac{3000}{3} = ₹1000$.',
    tested_en: 'Formulating and solving an item cost system.',
    tested_ml: 'വിലകൾ സംബന്ധിച്ച സമവാക്യം രൂപീകരിച്ച് പരിഹരിക്കൽ.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     9.3.2 Elimination Method
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m9.3.3',
    concept: 'm9.3.2.elimination-method',
    sec: '9.3.2',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'Solve the system of equations by elimination: $3x + 2y = 17$ and $2x - 2y = 8$. What is the value of $x$?',
    prompt_ml: 'നിഷ്കാസന രീതിയിൽ പരിഹരിക്കുക: $3x + 2y = 17$, $2x - 2y = 8$. $x$-ന്റെ വില എത്ര?',
    options_en: [
      { k: 'A', t: '$5$' },
      { k: 'B', t: '$3$' },
      { k: 'C', t: '$4$' },
      { k: 'D', t: '$6$' }
    ],
    options_ml: [
      { k: 'A', t: '$5$' },
      { k: 'B', t: '$3$' },
      { k: 'C', t: '$4$' },
      { k: 'D', t: '$6$' }
    ],
    answer: 'A',
    solution_en: 'Adding the two equations directly eliminates $y$: $(3x + 2y) + (2x - 2y) = 17 + 8 \\implies 5x = 25 \\implies x = 5$.',
    solution_ml: 'രണ്ട് സമവാക്യങ്ങളും തമ്മിൽ കൂട്ടുമ്പോൾ $y$ ഇല്ലാതാകുന്നു: $5x = 25 \\implies x = 5$.',
    tested_en: 'Direct addition elimination.',
    tested_ml: 'കൂട്ടി നിഷ്കാസനം ചെയ്യൽ.'
  },
  {
    id: 'obj.m9.3.4',
    concept: 'm9.3.2.elimination-method',
    sec: '9.3.2',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'In solving $4x + 3y = 25$ and $x + 2y = 10$ by elimination, what number can we multiply the second equation by to eliminate $x$?',
    prompt_ml: '$4x + 3y = 25$, $x + 2y = 10$ എന്നിവയിൽ $x$ ഒഴിവാക്കാൻ രണ്ടാമത്തെ സമവാക്യത്തെ ഏത് സംഖ്യ കൊണ്ട് ഗുണിക്കണം?',
    options_en: [
      { k: 'A', t: '$4$' },
      { k: 'B', t: '$3$' },
      { k: 'C', t: '$2$' },
      { k: 'D', t: '$5$' }
    ],
    options_ml: [
      { k: 'A', t: '$4$' },
      { k: 'B', t: '$3$' },
      { k: 'C', t: '$2$' },
      { k: 'D', t: '$5$' }
    ],
    answer: 'A',
    solution_en: 'Multiplying $x + 2y = 10$ by 4 gives $4x + 8y = 40$, which matches the coefficient 4 of $x$ in the first equation.',
    solution_ml: 'രണ്ടാമത്തെ സമവാക്യത്തെ 4 കൊണ്ട് ഗുണിച്ചാൽ $4x + 8y = 40$ ലഭിക്കുന്നു; ഇത് ആദ്യ സമവാക്യത്തിലെ $4x$-ന് തുല്യമാകും.',
    tested_en: 'Coefficient equalization for elimination.',
    tested_ml: 'ഗുണോത്തരങ്ങൾ തുല്യമാക്കൽ.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     9.3.3 Substitution Method
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m9.3.5',
    concept: 'm9.3.3.substitution-method',
    sec: '9.3.3',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'Solve by substitution: $y = 3x - 1$ and $2x + y = 14$. What is the value of $x$?',
    prompt_ml: 'പ്രതിസ്ഥാപന രീതിയിൽ പരിഹരിക്കുക: $y = 3x - 1$, $2x + y = 14$. $x$-ന്റെ വില എത്ര?',
    options_en: [
      { k: 'A', t: '$3$' },
      { k: 'B', t: '$4$' },
      { k: 'C', t: '$2$' },
      { k: 'D', t: '$5$' }
    ],
    options_ml: [
      { k: 'A', t: '$3$' },
      { k: 'B', t: '$4$' },
      { k: 'C', t: '$2$' },
      { k: 'D', t: '$5$' }
    ],
    answer: 'A',
    solution_en: 'Substitute $y = 3x - 1$ into $2x + y = 14$: $2x + (3x - 1) = 14 \\implies 5x - 1 = 14 \\implies 5x = 15 \\implies x = 3$.',
    solution_ml: '$2x + (3x - 1) = 14 \\implies 5x = 15 \\implies x = 3$.',
    tested_en: 'Solving a linear system using substitution.',
    tested_ml: 'പ്രതിസ്ഥാപന രീതിയിൽ സമവാക്യ പരിഹാരം.'
  },
  {
    id: 'obj.m9.3.6',
    concept: 'm9.3.3.substitution-method',
    sec: '9.3.3',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'From the equation $3x - y = 5$, what is the expression for $y$ in terms of $x$?',
    prompt_ml: '$3x - y = 5$ എന്ന സമവാക്യത്തിൽ നിന്ന് $y$-നെ $x$-ന്റെ രൂപത്തിൽ എഴുതിയാൽ ലഭിക്കുന്നത് ഏതാണ്?',
    options_en: [
      { k: 'A', t: '$y = 3x - 5$' },
      { k: 'B', t: '$y = 5 - 3x$' },
      { k: 'C', t: '$y = 3x + 5$' },
      { k: 'D', t: '$y = \\frac{5}{3x}$' }
    ],
    options_ml: [
      { k: 'A', t: '$y = 3x - 5$' },
      { k: 'B', t: '$y = 5 - 3x$' },
      { k: 'C', t: '$y = 3x + 5$' },
      { k: 'D', t: '$y = \\frac{5}{3x}$' }
    ],
    answer: 'A',
    solution_en: '$3x - y = 5 \\implies 3x - 5 = y \\implies y = 3x - 5$.',
    solution_ml: '$3x - y = 5 \\implies y = 3x - 5$.',
    tested_en: 'Isolating a variable for substitution.',
    tested_ml: 'ഒരു ചരത്തെ വേർതിരിച്ചെടുക്കൽ.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     9.3.4 Applied Word Problems
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m9.3.7',
    concept: 'm9.3.4.applied-word-problems-pairs',
    sec: '9.3.4',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'The perimeter of a rectangle is $36\\text{ cm}$. Its length is $4\\text{ cm}$ more than its breadth. What is its length?',
    prompt_ml: 'ഒരു ചതുരത്തിന്റെ ചുറ്റളവ് $36\\text{ cm}$ ആണ്. നീളം വീതിയേക്കാൾ $4\\text{ cm}$ കൂടുതലാണ്. നീളം എത്ര?',
    options_en: [
      { k: 'A', t: '$11\\text{ cm}$' },
      { k: 'B', t: '$7\\text{ cm}$' },
      { k: 'C', t: '$12\\text{ cm}$' },
      { k: 'D', t: '$10\\text{ cm}$' }
    ],
    options_ml: [
      { k: 'A', t: '$11\\text{ cm}$' },
      { k: 'B', t: '$7\\text{ cm}$' },
      { k: 'C', t: '$12\\text{ cm}$' },
      { k: 'D', t: '$10\\text{ cm}$' }
    ],
    answer: 'A',
    solution_en: '$l + b = \\frac{36}{2} = 18$ and $l - b = 4$. Adding: $2l = 22 \\implies l = 11\\text{ cm}$. (Breadth is $7\\text{ cm}$).',
    solution_ml: '$l + b = 18$, $l - b = 4$. കൂട്ടുമ്പോൾ: $2l = 22 \\implies l = 11\\text{ cm}$.',
    tested_en: 'Rectangle dimensions word problem using linear pair.',
    tested_ml: 'ചതുരത്തിന്റെ അളവുകൾ സമവാക്യജോടി വഴി കണ്ടെത്തൽ.'
  },
  {
    id: 'obj.m9.3.8',
    concept: 'm9.3.4.applied-word-problems-pairs',
    sec: '9.3.4',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'A person has ₹10 notes and ₹20 notes, making 25 notes in total with a combined value of ₹350. How many ₹20 notes are there?',
    prompt_ml: 'ഒരാളുടെ പക്കൽ 10 രൂപയുടെയും 20 രൂപയുടെയുമായി ആകെ 25 നോട്ടുകളുണ്ട്; ആകെ തുക ₹350 ആണ്. ഇതിൽ 20 രൂപയുടെ എത്ര നോട്ടുകളുണ്ട്?',
    options_en: [
      { k: 'A', t: '$10$' },
      { k: 'B', t: '$15$' },
      { k: 'C', t: '$12$' },
      { k: 'D', t: '$8$' }
    ],
    options_ml: [
      { k: 'A', t: '$10$' },
      { k: 'B', t: '$15$' },
      { k: 'C', t: '$12$' },
      { k: 'D', t: '$8$' }
    ],
    answer: 'A',
    solution_en: 'Let $x$ be ₹10 notes and $y$ be ₹20 notes. $x + y = 25$ and $10x + 20y = 350 \\implies x + 2y = 35$. Subtracting: $(x + 2y) - (x + y) = 35 - 25 \\implies y = 10$.',
    solution_ml: '$x + y = 25$, $x + 2y = 35$. കുറയ്ക്കുമ്പോൾ: $y = 35 - 25 = 10$.',
    tested_en: 'Currency denomination problem.',
    tested_ml: 'കറൻസി നോട്ടുകളുടെ എണ്ണം കാണൽ.'
  }
);

/* ── Level 2: Written Exercises ─────────────────────────────────────────── */
WRITTEN.push(
  {
    id: 'w.m9.3.1',
    sec: '9.3.1',
    concept: 'm9.3.1.formulating-pairs-of-equations',
    title_en: 'Formulating and Solving Classroom Notebook and Pen Purchase Problem',
    title_ml: 'നോട്ടുപുസ്തകങ്ങളുടെയും പേനകളുടെയും വില കണ്ടെത്തൽ',
    prompt_en: '<p>Four pens and six notebooks cost ₹120. Three pens and five notebooks cost ₹95. Formulate a pair of linear equations representing this situation, and find the cost of one pen and one notebook.</p>',
    prompt_ml: '<p>4 പേനകൾക്കും 6 നോട്ടുപുസ്തകങ്ങൾക്കും കൂടി ₹120 ആയി. 3 പേനകൾക്കും 5 നോട്ടുപുസ്തകങ്ങൾക്കും കൂടി ₹95 ആയി. ഈ സന്ദർഭത്തെ സൂചിപ്പിക്കുന്ന സമവാക്യജോടി രൂപീകരിക്കുകയും ഒരു പേനയുടെയും ഒരു നോട്ടുപുസ്തകത്തിന്റെയും വില കണ്ടെത്തുകയും ചെയ്യുക.</p>',
    solution_en: `$$\\text{Let the price of 1 pen be } x \\text{ rupees, and 1 notebook be } y \\text{ rupees.}$$

$$\\text{Step 1: Formulate the equations}$$
$$4x + 6y = 120 \\quad \\text{--- (Equation 1)}$$
$$3x + 5y = 95 \\quad \\text{--- (Equation 2)}$$

$$\\text{Step 2: Simplify Equation 1 (divide by 2)}$$
$$2x + 3y = 60 \\quad \\text{--- (Equation 3)}$$

$$\\text{Step 3: Equalize coefficients of } x$$
$$\\text{Multiply (3) by 3: } 6x + 9y = 180 \\quad \\text{--- (Equation 4)}$$
$$\\text{Multiply (2) by 2: } 6x + 10y = 190 \\quad \\text{--- (Equation 5)}$$

$$\\text{Step 4: Subtract (4) from (5)}$$
$$(6x + 10y) - (6x + 9y) = 190 - 180$$
$$y = \\mathbf{₹10} \\quad \\text{(Cost of 1 notebook)}$$

$$\\text{Step 5: Substitute } y = 10 \\text{ into Equation 3}$$
$$2x + 3(10) = 60 \\implies 2x + 30 = 60 \\implies 2x = 30 \\implies x = \\mathbf{₹15} \\quad \\text{(Cost of 1 pen)}$$

$$\\text{Conclusion: A pen costs ₹15 and a notebook costs ₹10.}$$`,
    solution_ml: `$$\\text{ഒരു പേനയുടെ വില } x \\text{ രൂപയും, ഒരു നോട്ടുപുസ്തകത്തിന്റെ വില } y \\text{ രൂപയും എന്നിരിക്കട്ടെ.}$$

$$\\text{ഘട്ടം 1: സമവാക്യങ്ങൾ രൂപീകരിക്കുന്നു}$$
$$4x + 6y = 120 \\quad \\text{--- (സമവാക്യം 1)}$$
$$3x + 5y = 95 \\quad \\text{--- (സമവാക്യം 2)}$$

$$\\text{ഘട്ടം 2: സമവാക്യം 1 ലഘൂകരിക്കുന്നു (2 കൊണ്ട് ഹരിക്കുന്നു)}$$
$$2x + 3y = 60 \\quad \\text{--- (സമവാക്യം 3)}$$

$$\\text{ഘട്ടം 3: } x\\text{-ന്റെ ഗുണോത്തരം തുല്യമാക്കുന്നു}$$
$$\\text{സമവാക്യം (3) } \\times 3: \\quad 6x + 9y = 180 \\quad \\text{--- (സമവാക്യം 4)}$$
$$\\text{സമവാക്യം (2) } \\times 2: \\quad 6x + 10y = 190 \\quad \\text{--- (സമവാക്യം 5)}$$

$$\\text{ഘട്ടം 4: സമവാക്യം (5)-ൽ നിന്ന് (4) കുറയ്ക്കുന്നു}$$
$$y = 190 - 180 = \\mathbf{₹10} \\quad (\\text{നോട്ടുപുസ്തകത്തിന്റെ വില})$$

$$\\text{ഘട്ടം 5: } y = 10 \\text{ സമവാക്യം (3)-ൽ നൽകുന്നു}$$
$$2x + 30 = 60 \\implies 2x = 30 \\implies x = \\mathbf{₹15} \\quad (\\text{പേനയുടെ വില})$$

$$\\text{ഉത്തരം: ഒരു പേനയുടെ വില ₹15, നോട്ടുപുസ്തകത്തിന്റെ വില ₹10.}$$`
  },

  {
    id: 'w.m9.3.2',
    sec: '9.3.2',
    concept: 'm9.3.2.elimination-method',
    title_en: 'Elimination Method for Simultaneous System',
    title_ml: 'നിഷ്കാസന രീതിയിലുള്ള സമവാക്യ പരിഹാരം',
    prompt_en: '<p>Solve the following pair of linear equations by the method of elimination: $$5x + 3y = 35$$ $$2x + 4y = 28$$ Show all intermediate algebraic steps and verify your final solution.</p>',
    prompt_ml: '<p>താഴെ നൽകിയിരിക്കുന്ന സമവാക്യജോടി നിഷ്കാസന രീതി ഉപയോഗിച്ച് നിർദ്ധാരണം ചെയ്യുക: $$5x + 3y = 35$$ $$2x + 4y = 28$$ എല്ലാ ഘട്ടങ്ങളും വിശദമായി എഴുതി ഉത്തരം പരിശോധിക്കുക.</p>',
    solution_en: `$$\\text{Given:}$$
$$5x + 3y = 35 \\quad \\text{--- (Equation 1)}$$
$$2x + 4y = 28 \\implies x + 2y = 14 \\quad \\text{--- (Equation 2)}$$

$$\\text{Step 1: Multiply Equation 2 by 5 to match coefficients of } x$$
$$5(x + 2y) = 5(14) \\implies 5x + 10y = 70 \\quad \\text{--- (Equation 3)}$$

$$\\text{Step 2: Subtract Equation 1 from Equation 3}$$
$$(5x + 10y) - (5x + 3y) = 70 - 35$$
$$7y = 35 \\implies y = \\frac{35}{7} = \\mathbf{5}$$

$$\\text{Step 3: Substitute } y = 5 \\text{ into Equation 2}$$
$$x + 2(5) = 14 \\implies x + 10 = 14 \\implies x = 14 - 10 = \\mathbf{4}$$

$$\\text{Step 4: Verification in Equation 1}$$
$$5(4) + 3(5) = 20 + 15 = 35 \\quad \\text{(Matches)}$$
$$\\text{Solution: } \\mathbf{x = 4, \\, y = 5}.$$`,
    solution_ml: `$$\\text{നൽകിയിരിക്കുന്നത്:}$$
$$5x + 3y = 35 \\quad \\text{--- (സമവാക്യം 1)}$$
$$2x + 4y = 28 \\implies x + 2y = 14 \\quad \\text{--- (സമവാക്യം 2)}$$

$$\\text{ഘട്ടം 1: } x\\text{-ന്റെ ഗുണോത്തരം തുല്യമാക്കാൻ സമവാക്യം 2-നെ 5 കൊണ്ട് ഗുണിക്കുന്നു}$$
$$5x + 10y = 70 \\quad \\text{--- (സമവാക്യം 3)}$$

$$\\text{ഘട്ടം 2: സമവാക്യം 3-ൽ നിന്ന് 1 കുറയ്ക്കുന്നു}$$
$$7y = 35 \\implies y = \\mathbf{5}$$

$$\\text{ഘട്ടം 3: } y = 5 \\text{ സമവാക്യം 2-ൽ നൽകുന്നു}$$
$$x + 2(5) = 14 \\implies x + 10 = 14 \\implies x = \\mathbf{4}$$

$$\\text{ഘട്ടം 4: സമവാക്യം 1-ൽ പരിശോധന}$$
$$5(4) + 3(5) = 20 + 15 = 35$$
$$\\text{ഉത്തരം: } \\mathbf{x = 4, \\, y = 5}.$$`
  },

  {
    id: 'w.m9.3.3',
    sec: '9.3.3',
    concept: 'm9.3.3.substitution-method',
    title_en: 'Substitution Method with Fractional Coefficients',
    title_ml: 'പ്രതിസ്ഥാപന രീതിയിലുള്ള കണക്ക്',
    prompt_en: '<p>Solve the following system using the substitution method: $$x - 3y = 1$$ $$2x + 5y = 24$$ Verify the solution by checking both equations.</p>',
    prompt_ml: '<p>പ്രതിസ്ഥാപന രീതി ഉപയോഗിച്ച് താഴെ പറയുന്ന സമവാക്യജോടി പരിഹരിക്കുക: $$x - 3y = 1$$ $$2x + 5y = 24$$ രണ്ട് സമവാക്യങ്ങളിലും നൽകി ഉത്തരം ശരിയാണെന്ന് ഉറപ്പുവരുത്തുക.</p>',
    solution_en: `$$\\text{Given:}$$
$$x - 3y = 1 \\quad \\text{--- (Equation 1)}$$
$$2x + 5y = 24 \\quad \\text{--- (Equation 2)}$$

$$\\text{Step 1: Express } x \\text{ in terms of } y \\text{ from Equation 1}$$
$$x = 3y + 1$$

$$\\text{Step 2: Substitute this expression into Equation 2}$$
$$2(3y + 1) + 5y = 24$$
$$6y + 2 + 5y = 24$$
$$11y + 2 = 24$$
$$11y = 22 \\implies y = \\frac{22}{11} = \\mathbf{2}$$

$$\\text{Step 3: Evaluate } x$$
$$x = 3(2) + 1 = 6 + 1 = \\mathbf{7}$$

$$\\text{Verification:}$$
$$\\text{Eq 1: } 7 - 3(2) = 7 - 6 = 1 \\quad (\\text{Verified})$$
$$\\text{Eq 2: } 2(7) + 5(2) = 14 + 10 = 24 \\quad (\\text{Verified})$$
$$\\text{Solution: } \\mathbf{x = 7, \\, y = 2}.$$`,
    solution_ml: `$$\\text{നൽകിയിരിക്കുന്നത്:}$$
$$x - 3y = 1 \\quad \\text{--- (സമവാക്യം 1)}$$
$$2x + 5y = 24 \\quad \\text{--- (സമവാക്യം 2)}$$

$$\\text{ഘട്ടം 1: സമവാക്യം 1-ൽ നിന്ന് } x\\text{-നെ } y\\text{-ന്റെ രൂപത്തിൽ എഴുതുന്നു}$$
$$x = 3y + 1$$

$$\\text{ഘട്ടം 2: സമവാക്യം 2-ൽ ഈ വില പ്രതിസ്ഥാപിക്കുന്നു}$$
$$2(3y + 1) + 5y = 24$$
$$6y + 2 + 5y = 24$$
$$11y = 22 \\implies y = \\mathbf{2}$$

$$\\text{ഘട്ടം 3: } x\\text{-ന്റെ വില കാണുന്നു}$$
$$x = 3(2) + 1 = \\mathbf{7}$$

$$\\text{പരിശോധന:}$$
$$7 - 3(2) = 1, \\quad 2(7) + 5(2) = 14 + 10 = 24$$
$$\\text{ഉത്തരം: } \\mathbf{x = 7, \\, y = 2}.$$`
  },

  {
    id: 'w.m9.3.4',
    sec: '9.3.4',
    concept: 'm9.3.4.applied-word-problems-pairs',
    title_en: 'Two-Digit Number Reversal and Age Relations',
    title_ml: 'രണ്ടക്ക സംഖ്യയും അക്കങ്ങൾ തിരിച്ചിടലും',
    prompt_en: '<p>The sum of the digits of a two-digit number is 11. If 27 is added to the number, the digits are reversed. Formulate equations in two variables and determine the original number.</p>',
    prompt_ml: '<p>ഒരു രണ്ടക്ക സംഖ്യയിലെ അക്കങ്ങളുടെ തുക 11 ആണ്. ഈ സംഖ്യയോട് 27 കൂട്ടിയാൽ അക്കങ്ങൾ പരസ്പരം മാറിവരും. രണ്ട് ചരങ്ങളുള്ള സമവാക്യങ്ങൾ രൂപീകരിച്ച് യഥാർത്ഥ സംഖ്യ കണ്ടെത്തുക.</p>',
    solution_en: `$$\\text{Let the tens digit be } x \\text{ and units digit be } y.$$
$$\\text{Original number } = 10x + y$$
$$\\text{Reversed number } = 10y + x$$

$$\\text{Condition 1: Sum of digits is 11}$$
$$x + y = 11 \\quad \\text{--- (Equation 1)}$$

$$\\text{Condition 2: Number } + 27 = \\text{Reversed number}$$
$$(10x + y) + 27 = 10y + x$$
$$27 = 10y - y + x - 10x$$
$$27 = 9y - 9x$$
$$\\text{Divide by 9: } y - x = 3 \\implies -x + y = 3 \\quad \\text{--- (Equation 2)}$$

$$\\text{Step 3: Add Equation 1 and Equation 2}$$
$$(x + y) + (-x + y) = 11 + 3$$
$$2y = 14 \\implies y = \\mathbf{7} \\quad (\\text{Units digit})$$

$$\\text{Step 4: Find } x$$
$$x + 7 = 11 \\implies x = 11 - 7 = \\mathbf{4} \\quad (\\text{Tens digit})$$

$$\\text{Original Number } = 10(4) + 7 = \\mathbf{47}.$$
$$\\text{Check: } 4 + 7 = 11, \\quad 47 + 27 = 74 \\text{ (digits reversed!).}$$`,
    solution_ml: `$$\\text{പത്തിന്റെ സ്ഥാനത്തെ അക്കം } x\\text{-ഉം ഒന്നിന്റെ സ്ഥാനത്തെ അക്കം } y\\text{-ഉം എന്നിരിക്കട്ടെ.}$$
$$\\text{യഥാർത്ഥ സംഖ്യ} = 10x + y$$
$$\\text{അക്കങ്ങൾ തിരിച്ചിട്ട സംഖ്യ} = 10y + x$$

$$\\text{വ്യവസ്ഥ 1: അക്കങ്ങളുടെ തുക 11}$$
$$x + y = 11 \\quad \\text{--- (സമവാക്യം 1)}$$

$$\\text{വ്യവസ്ഥ 2: സംഖ്യയോട് 27 കൂട്ടിയാൽ തിരിച്ചിട്ട സംഖ്യ കിട്ടുന്നു}$$
$$(10x + y) + 27 = 10y + x$$
$$9y - 9x = 27 \\implies y - x = 3 \\quad \\text{--- (സമവാക്യം 2)}$$

$$\\text{ഘട്ടം 3: സമവാക്യം 1-ഉം 2-ഉം തമ്മിൽ കൂട്ടുന്നു}$$
$$2y = 14 \\implies y = \\mathbf{7}$$

$$\\text{ഘട്ടം 4: } x\\text{-ന്റെ വില കണ്ടെത്തുന്നു}$$
$$x + 7 = 11 \\implies x = \\mathbf{4}$$

$$\\text{യഥാർത്ഥ സംഖ്യ} = 10(4) + 7 = \\mathbf{47}.$$
$$\\text{പരിശോധന: } 4 + 7 = 11, \\quad 47 + 27 = 74.$$`
  }
);
