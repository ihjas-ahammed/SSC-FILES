/* ══════════════════════════════════════════════════════════════════════════
   Syllabus views over the shared content pool.
   Class 8 Mathematics & Class 1–7 Foundational Prerequisites (SCERT Kerala).
   Strictly bilingual: pure English (en) and pure Malayalam (ml).
   ══════════════════════════════════════════════════════════════════════════ */
const DATA_KIND = 'live';

const SYLLABI = [
  {
    id: 'm8',
    title_en: 'Class 8 Mathematics',
    title_ml: 'ക്ലാസ് 8 ഗണിതം',
    code: 'SCERT Class 8',
    sem: 'Part 1 & 2',
    book_en: 'Kerala State Syllabus Mathematics VIII',
    book_ml: 'കേരള സംസ്ഥാന പാഠാവലി ഗണിതം VIII',
    blurb_en: 'Class 8 Mathematics core curriculum starting with Chapter 1: Squares.',
    blurb_ml: 'ക്ലാസ് 8 ഗണിത പാഠാവലി — അദ്ധ്യായം 1: വർഗ്ഗങ്ങൾ.',
    modules: [
      {
        id: 'm8.m1',
        n: '1',
        title_en: 'Chapter 1: Squares',
        title_ml: 'അദ്ധ്യായം 1: വർഗ്ഗങ്ങൾ',
        marks: 20,
        secs: ['8.1.1', '8.1.2', '8.1.3', '8.1.4', '8.1.5', '8.1.6']
      },
      {
        id: 'm8.m2',
        n: '2',
        title_en: 'Chapter 2: Equal Triangles',
        title_ml: 'അദ്ധ്യായം 2: തുല്യത്രികോണങ്ങൾ',
        marks: 20,
        secs: ['8.2.1', '8.2.2', '8.2.3', '8.2.4', '8.2.5', '8.2.6']
      },
      {
        id: 'm8.m3',
        n: '3',
        title_en: 'Chapter 3: Square Identities',
        title_ml: 'അദ്ധ്യായം 3: വർഗ്ഗസമവാക്യങ്ങൾ',
        marks: 20,
        secs: ['8.3.1', '8.3.2', '8.3.3', '8.3.4', '8.3.5']
      },
      {
        id: 'm8.m4',
        n: '4',
        title_en: 'Chapter 4: Polygons',
        title_ml: 'അദ്ധ്യായം 4: ബഹുഭുജങ്ങൾ',
        marks: 20,
        secs: ['8.4.1', '8.4.2', '8.4.3', '8.4.4']
      },
      {
        id: 'm8.m5',
        n: '5',
        title_en: 'Chapter 5: Money Maths',
        title_ml: 'അദ്ധ്യായം 5: പണമിടപാടുകളിലെ കണക്ക്',
        marks: 20,
        secs: ['8.5.1', '8.5.2', '8.5.3', '8.5.4']
      },
      {
        id: 'm8.m6',
        n: '6',
        title_en: 'Chapter 6: Construction of Quadrilaterals',
        title_ml: 'അദ്ധ്യായം 6: ചതുർഭുജ നിർമ്മിതി',
        marks: 20,
        secs: ['8.6.1', '8.6.2', '8.6.3', '8.6.4']
      },
      {
        id: 'm8.m7',
        n: '7',
        title_en: 'Chapter 7: Ratio',
        title_ml: 'അദ്ധ്യായം 7: അംശബന്ധം',
        marks: 20,
        secs: ['8.7.1', '8.7.2', '8.7.3', '8.7.4']
      },
      {
        id: 'm8.m8',
        n: '8',
        title_en: 'Chapter 8: Area of Quadrilaterals',
        title_ml: 'അദ്ധ്യായം 8: ചതുർഭുജങ്ങളുടെ പരപ്പളവ്',
        marks: 20,
        secs: ['8.8.1', '8.8.2', '8.8.3', '8.8.4']
      },
      {
        id: 'm8.m9',
        n: '9',
        title_en: 'Chapter 9: Negative Numbers',
        title_ml: 'അദ്ധ്യായം 9: ഋണസംഖ്യകൾ',
        marks: 20,
        secs: ['8.9.1', '8.9.2', '8.9.3', '8.9.4']
      },
      {
        id: 'm8.m10',
        n: '10',
        title_en: 'Chapter 10: Statistics',
        title_ml: 'അദ്ധ്യായം 10: സ്ഥിതിവിവരക്കണക്ക്',
        marks: 20,
        secs: ['8.10.1', '8.10.2', '8.10.3', '8.10.4']
      },
      {
        id: 'm8.m11',
        n: '11',
        title_en: 'Chapter 11: Equations',
        title_ml: 'അദ്ധ്യായം 11: സമവാക്യങ്ങൾ',
        marks: 20,
        secs: ['8.11.1', '8.11.2', '8.11.3', '8.11.4']
      },
      {
        id: 'm8.m12',
        n: '12',
        title_en: 'Chapter 12: Parallel Lines',
        title_ml: 'അദ്ധ്യായം 12: സമാന്തരവരകൾ',
        marks: 20,
        secs: ['8.12.1', '8.12.2', '8.12.3', '8.12.4']
      },
      {
        id: 'm8.m13',
        n: '13',
        title_en: 'Chapter 13: Prisms',
        title_ml: 'അദ്ധ്യായം 13: സ്തംഭങ്ങൾ',
        marks: 20,
        secs: ['8.13.1', '8.13.2', '8.13.3', '8.13.4']
      }
    ]
  },
  {
    id: 'm9',
    title_en: 'Class 9 Mathematics',
    title_ml: 'ക്ലാസ് 9 ഗണിതം',
    code: 'SCERT Class 9',
    sem: 'Part 1 & 2',
    book_en: 'Kerala State Syllabus Mathematics IX',
    book_ml: 'കേരള സംസ്ഥാന പാഠാവലി ഗണിതം IX',
    blurb_en: 'Class 9 Mathematics complete curriculum.',
    blurb_ml: 'ക്ലാസ് 9 ഗണിത പാഠാവലി.',
    pending: false,
    modules: [
      {
        id: 'm9.m1',
        n: '1',
        title_en: 'Chapter 1: Area',
        title_ml: 'അദ്ധ്യായം 1: പരപ്പളവ്',
        marks: 20,
        secs: ['9.1.1', '9.1.2', '9.1.3', '9.1.4']
      },
      {
        id: 'm9.m2',
        n: '2',
        title_en: 'Chapter 2: Decimal Forms',
        title_ml: 'അദ്ധ്യായം 2: ദശാംശരൂപങ്ങൾ',
        marks: 20,
        secs: ['9.2.1', '9.2.2', '9.2.3', '9.2.4']
      },
      {
        id: 'm9.m3',
        n: '3',
        title_en: 'Chapter 3: Pairs of Equations',
        title_ml: 'അദ്ധ്യായം 3: സമവാക്യജോടികൾ',
        marks: 20,
        secs: ['9.3.1', '9.3.2', '9.3.3', '9.3.4']
      },
      {
        id: 'm9.m4',
        n: '4',
        title_en: 'Chapter 4: New Numbers',
        title_ml: 'അദ്ധ്യായം 4: പുതിയ സംഖ്യകൾ',
        marks: 20,
        secs: ['9.4.1', '9.4.2', '9.4.3', '9.4.4']
      },
      {
        id: 'm9.m5',
        n: '5',
        title_en: 'Chapter 5: Circles',
        title_ml: 'അദ്ധ്യായം 5: വൃത്തങ്ങൾ',
        marks: 20,
        secs: ['9.5.1', '9.5.2', '9.5.3', '9.5.4']
      },
      {
        id: 'm9.m6',
        n: '6',
        title_en: 'Chapter 6: Parallel Lines',
        title_ml: 'അദ്ധ്യായം 6: സമാന്തരവരകൾ',
        marks: 20,
        secs: ['9.6.1', '9.6.2', '9.6.3', '9.6.4']
      },
      {
        id: 'm9.m7',
        n: '7',
        title_en: 'Chapter 7: Similar Triangles',
        title_ml: 'അദ്ധ്യായം 7: സദൃശ ത്രികോണങ്ങൾ',
        marks: 20,
        secs: ['9.7.1', '9.7.2', '9.7.3', '9.7.4']
      },
      {
        id: 'm9.m8',
        n: '8',
        title_en: 'Chapter 8: Polynomials',
        title_ml: 'അദ്ധ്യായം 8: ബഹുപദങ്ങൾ',
        marks: 20,
        secs: ['9.8.1', '9.8.2', '9.8.3', '9.8.4']
      },
      {
        id: 'm9.m9',
        n: '9',
        title_en: 'Chapter 9: Circle Measures',
        title_ml: 'അദ്ധ്യായം 9: വൃത്തപ്പരപ്പളവ്',
        marks: 20,
        secs: ['9.9.1', '9.9.2', '9.9.3', '9.9.4']
      },
      {
        id: 'm9.m10',
        n: '10',
        title_en: 'Chapter 10: Real Numbers',
        title_ml: 'അദ്ധ്യായം 10: രേഖീയസംഖ്യകൾ',
        marks: 20,
        secs: ['9.10.1', '9.10.2', '9.10.3', '9.10.4']
      },
      {
        id: 'm9.m11',
        n: '11',
        title_en: 'Chapter 11: Prisms',
        title_ml: 'അദ്ധ്യായം 11: സ്തംഭങ്ങൾ',
        marks: 20,
        secs: ['9.11.1', '9.11.2', '9.11.3', '9.11.4']
      },
      {
        id: 'm9.m12',
        n: '12',
        title_en: 'Chapter 12: Proportion',
        title_ml: 'അദ്ധ്യായം 12: അനുപാതം',
        marks: 20,
        secs: ['9.12.1', '9.12.2', '9.12.3', '9.12.4']
      },
      {
        id: 'm9.m13',
        n: '13',
        title_en: 'Chapter 13: Statistics',
        title_ml: 'അദ്ധ്യായം 13: സ്ഥിതിവിവരക്കണക്ക്',
        marks: 20,
        secs: ['9.13.1', '9.13.2', '9.13.3', '9.13.4']
      }
    ]
  },
  {
    id: 'm10',
    title_en: 'Class 10 Mathematics (SSLC)',
    title_ml: 'ക്ലാസ് 10 ഗണിതം (SSLC)',
    code: 'SCERT Class 10 (SSLC)',
    sem: 'Part 1 & 2',
    book_en: 'Kerala State Syllabus Mathematics X (SSLC)',
    book_ml: 'കേരള സംസ്ഥാന പാഠാവലി ഗണിതം X (SSLC)',
    blurb_en: 'Kerala SSLC Class 10 Mathematics examination curriculum.',
    blurb_ml: 'കേരള എസ്.എസ്.എൽ.സി ക്ലാസ് 10 ഗണിത പാഠാവലി.',
    pending: false,
    modules: [
      {
        id: 'm10.m1',
        n: '1',
        title_en: 'Chapter 1: Arithmetic Sequences',
        title_ml: 'അദ്ധ്യായം 1: സമാന്തരശ്രേണികൾ',
        marks: 20,
        secs: ['10.1.1', '10.1.2', '10.1.3', '10.1.4', '10.1.5', '10.1.6']
      },
      {
        id: 'm10.m2',
        n: '2',
        title_en: 'Chapter 2: Circles',
        title_ml: 'അദ്ധ്യായം 2: വൃത്തങ്ങൾ',
        marks: 20,
        secs: ['10.2.1', '10.2.2', '10.2.3', '10.2.4', '10.2.5']
      },
      {
        id: 'm10.m3',
        n: '3',
        title_en: 'Chapter 3: Mathematics of Chance',
        title_ml: 'അദ്ധ്യായം 3: സാധ്യതകളുടെ ഗണിതം',
        marks: 20,
        secs: ['10.3.1', '10.3.2', '10.3.3', '10.3.4']
      },
      {
        id: 'm10.m4',
        n: '4',
        title_en: 'Chapter 4: Second Degree Equations',
        title_ml: 'അദ്ധ്യായം 4: രണ്ടാംകൃതി സമവാക്യങ്ങൾ',
        marks: 20,
        secs: ['10.4.1', '10.4.2', '10.4.3', '10.4.4']
      },
      {
        id: 'm10.m5',
        n: '5',
        title_en: 'Chapter 5: Trigonometry',
        title_ml: 'അദ്ധ്യായം 5: ത്രികോണമിതി',
        marks: 20,
        secs: ['10.5.1', '10.5.2', '10.5.3', '10.5.4']
      },
      {
        id: 'm10.m6',
        n: '6',
        title_en: 'Chapter 6: Coordinates',
        title_ml: 'അദ്ധ്യായം 6: സൂചകസംഖ്യകൾ',
        marks: 20,
        secs: ['10.6.1', '10.6.2', '10.6.3', '10.6.4']
      },
      {
        id: 'm10.m7',
        n: '7',
        title_en: 'Chapter 7: Tangents',
        title_ml: 'അദ്ധ്യായം 7: തൊടുവരകൾ',
        marks: 20,
        secs: ['10.7.1', '10.7.2', '10.7.3', '10.7.4']
      },
      {
        id: 'm10.m8',
        n: '8',
        title_en: 'Chapter 8: Solids',
        title_ml: 'അദ്ധ്യായം 8: ഘനരൂപങ്ങൾ',
        marks: 20,
        secs: ['10.8.1', '10.8.2', '10.8.3', '10.8.4']
      },
      {
        id: 'm10.m9',
        n: '9',
        title_en: 'Chapter 9: Geometry and Algebra',
        title_ml: 'അദ്ധ്യായം 9: ജ്യാമിതിയും ബീജഗണിതവും',
        marks: 20,
        secs: ['10.9.1', '10.9.2', '10.9.3', '10.9.4']
      },
      {
        id: 'm10.m10',
        n: '10',
        title_en: 'Chapter 10: Polynomials',
        title_ml: 'അദ്ധ്യായം 10: ബഹുപദങ്ങൾ',
        marks: 20,
        secs: ['10.10.1', '10.10.2', '10.10.3', '10.10.4']
      },
      {
        id: 'm10.m11',
        n: '11',
        title_en: 'Chapter 11: Statistics',
        title_ml: 'അദ്ധ്യായം 11: സ്ഥിതിവിവരക്കണക്ക്',
        marks: 20,
        secs: ['10.11.1', '10.11.2', '10.11.3', '10.11.4']
      }
    ]
  },
  {
    id: 'foundation',
    title_en: 'Prerequisites & Foundations (Class 1–7)',
    title_ml: 'അടിസ്ഥാന ഗണിതം (ക്ലാസ് 1–7)',
    code: 'SCERT Foundations',
    sem: 'Class 1 to 7',
    book_en: 'Kerala SCERT Mathematics Class 1 to 7',
    book_ml: 'കേരള എസ്.സി.ഇ.ആർ.ടി ഗണിതം ക്ലാസ് 1 മുതൽ 7 വരെ',
    blurb_en: 'Complete mathematical foundation from basic counting and addition up to algebra and geometry.',
    blurb_ml: 'എണ്ണലും കൂട്ടലും മുതൽ ബീജഗണിതവും ജ്യാമിതിയും വരെയുള്ള സമ്പൂർണ്ണ അടിസ്ഥാന ആശയങ്ങൾ.',
    modules: [
      {
        id: 'f.m1',
        n: 'C1–2',
        title_en: 'Class 1 & 2: Numbers, Addition & Subtraction',
        title_ml: 'ക്ലാസ് 1 & 2: സംഖ്യകൾ, കൂട്ടലും കുറയ്ക്കലും',
        secs: ['p.1.1', 'p.1.2', 'p.1.3', 'p.1.4']
      },
      {
        id: 'f.m2',
        n: 'C3–4',
        title_en: 'Class 3 & 4: Multiplication, Division & Parity',
        title_ml: 'ക്ലാസ് 3 & 4: ഗുണനവും ഹരണവും',
        secs: ['p.2.1', 'p.2.2', 'p.2.3', 'p.2.4', 'p.2.5']
      },
      {
        id: 'f.m3',
        n: 'C5',
        title_en: 'Class 5: Grid Multiplication, Factors, Primes & Area',
        title_ml: 'ക്ലാസ് 5: ഗുണനരീതികളും വിസ്തീർണ്ണവും',
        secs: ['p.3.1', 'p.3.2', 'p.3.3', 'p.3.4']
      },
      {
        id: 'f.m4',
        n: 'C6',
        title_en: 'Class 6: Fractions, Decimals & Integers',
        title_ml: 'ക്ലാസ് 6: ഭിന്നസംഖ്യകൾ, ദശാംശങ്ങൾ, പൂർണ്ണസംഖ്യകൾ',
        secs: ['p.4.1', 'p.4.2', 'p.4.3', 'p.4.4', 'p.4.5']
      },
      {
        id: 'f.m5',
        n: 'C7',
        title_en: 'Class 7: Powers, Algebra & Pythagoras',
        title_ml: 'ക്ലാസ് 7: ആവർത്തനഗുണനം, ബീജഗണിതം, പൈതഗോറസ്',
        secs: ['p.5.1', 'p.5.2', 'p.5.3', 'p.5.4', 'p.5.5']
      }
    ]
  }
];

/* Section titles with pure English and pure Malayalam textbook terms */
const SECTITLE = {
  /* Class 8 Chapter 1 */
  '8.1.1': { en: 'Perfect Squares & Square Numbers', ml: 'പൂർണ്ണവർഗ്ഗങ്ങൾ' },
  '8.1.2': { en: 'Geometric Square & Area Representation', ml: 'വർഗ്ഗത്തിന്റെ ജ്യാമിതീയ രൂപവും വിസ്തീർണ്ണവും' },
  '8.1.3': { en: 'Squaring Two-Digit & Multi-Digit Numbers', ml: 'രണ്ടക്ക സംഖ്യകളുടെ വർഗ്ഗം' },
  '8.1.4': { en: 'Decimal Squares & Place Value Doubling', ml: 'ദശാംശ സംഖ്യകളുടെ വർഗ്ഗം' },
  '8.1.5': { en: 'Special Square Patterns (0.5 & 0.25)', ml: 'പ്രത്യേക വർഗ്ഗ രീതികൾ (0.5 & 0.25)' },
  '8.1.6': { en: 'Square Roots & Inverse Operations', ml: 'വർഗ്ഗമൂലം' },

  /* Class 8 Chapter 2: Equal Triangles */
  '8.2.1': { en: 'Sides and Angles (SSS Congruence)', ml: 'വശങ്ങളും കോണുകളും (SSS തുല്യത)' },
  '8.2.2': { en: 'One Side and Two Angles (ASA Congruence)', ml: 'ഒരു വശവും രണ്ടറ്റത്തെ കോണുകളും (ASA തുല്യത)' },
  '8.2.3': { en: 'Two Sides and Included Angle (SAS Congruence)', ml: 'രണ്ട് വശങ്ങളും അവയ്ക്കിടയിലെ കോണും (SAS തുല്യത)' },
  '8.2.4': { en: 'Isosceles Triangles & Perpendicular Bisectors', ml: 'സമപാർശ്വ ത്രികോണങ്ങളും ലംബസമഭാജിയും' },
  '8.2.5': { en: 'Equilateral Triangles (60° Angles)', ml: 'സമഭുജ ത്രികോണങ്ങൾ (60° കോണുകൾ)' },
  '8.2.6': { en: 'Geometric Applications & Parallelograms', ml: 'ജ്യാമിതീയ പ്രയോഗങ്ങളും സാമാന്തരികങ്ങളും' },

  /* Class 8 Chapter 3: Square Identities */
  '8.3.1': { en: 'Square of a Sum: (x + y)²', ml: 'തുകയുടെ വർഗ്ഗം: (x + y)²' },
  '8.3.2': { en: 'Square of a Difference: (x - y)²', ml: 'വ്യത്യാസത്തിന്റെ വർഗ്ഗം: (x - y)²' },
  '8.3.3': { en: 'Sum and Difference Relations: 4xy', ml: 'തുകയും വ്യത്യാസവും: 4xy' },
  '8.3.4': { en: 'Difference of Two Squares: x² - y²', ml: 'വർഗ്ഗങ്ങളുടെ വ്യത്യാസം: x² - y²' },
  '8.3.5': { en: 'Product of Binomials: (x + a)(x + b)', ml: 'പൊതുഗുണന രൂപം: (x + a)(x + b)' },

  /* Class 8 Chapter 4: Polygons */
  '8.4.1': { en: 'Sum of Angles of a Polygon', ml: 'ബഹുഭുജങ്ങളിലെ കോണുകളുടെ തുക' },
  '8.4.2': { en: 'Outer Angles & Sum of Outer Angles', ml: 'ബാഹ്യകോണുകളും അവയുടെ തുകയും' },
  '8.4.3': { en: 'Regular Polygons', ml: 'സമബഹുഭുജങ്ങൾ' },
  '8.4.4': { en: 'Diagonals of a Polygon', ml: 'ബഹുഭുജങ്ങളിലെ വികർണ്ണങ്ങൾ' },

  /* Class 8 Chapter 5: Money Maths */
  '8.5.1': { en: 'Simple Interest vs Compound Interest', ml: 'ലളിതപലിശയും കൂട്ടുപലിശയും' },
  '8.5.2': { en: 'Compound Interest Formula', ml: 'കൂട്ടുപലിശ സൂത്രവാക്യം' },
  '8.5.3': { en: 'Half-Yearly & Quarterly Compounding', ml: 'അർദ്ധവാർഷിക, ത്രൈമാസിക കൂട്ടുപലിശ' },
  '8.5.4': { en: 'Growth and Depreciation', ml: 'വർദ്ധനവും മൂല്യത്തകർച്ചയും' },

  /* Class 8 Chapter 6: Construction of Quadrilaterals */
  '8.6.1': { en: 'Conditions to Determine a Quadrilateral', ml: 'ചതുർഭുജം നിശ്ചയിക്കുന്നതിനുള്ള വ്യവസ്ഥകൾ' },
  '8.6.2': { en: 'Four Sides and One Diagonal', ml: 'നാല് വശങ്ങളും ഒരു വികർണ്ണവും നൽകിയുള്ള നിർമ്മിതി' },
  '8.6.3': { en: 'Sides and Angles', ml: 'വശങ്ങളും കോണുകളും നൽകിയുള്ള നിർമ്മിതി' },
  '8.6.4': { en: 'Special Quadrilaterals', ml: 'പ്രത്യേക ചതുർഭുജങ്ങളുടെ നിർമ്മിതി' },

  /* Class 8 Chapter 7: Ratio */
  '8.7.1': { en: 'Part Relations & Ratio Concept', ml: 'ഭാഗബന്ധങ്ങളും അംശബന്ധ തത്വവും' },
  '8.7.2': { en: 'Dividing Quantities in a Given Ratio', ml: 'തന്നിരിക്കുന്ന അംശബന്ധത്തിൽ വിഭജിക്കൽ' },
  '8.7.3': { en: 'Ratio Changes & Proportions', ml: 'അംശബന്ധ മാറ്റങ്ങളും അനുപാതവും' },
  '8.7.4': { en: 'Ratio in Geometry & Triangle Areas', ml: 'ജ്യാമിതിയിലെ അംശബന്ധവും ത്രികോണ പരപ്പളവും' },

  /* Class 8 Chapter 8: Area of Quadrilaterals */
  '8.8.1': { en: 'Area of a General Quadrilateral', ml: 'സാധാരണ ചതുർഭുജത്തിന്റെ പരപ്പളവ്' },
  '8.8.2': { en: 'Area of a Rhombus', ml: 'റോംബസിന്റെ പരപ്പളവ്' },
  '8.8.3': { en: 'Area of a Parallelogram', ml: 'സാമാന്തരികത്തിന്റെ പരപ്പളവ്' },
  '8.8.4': { en: 'Area of a Trapezium', ml: 'ലംബകത്തിന്റെ പരപ്പളവ്' },

  /* Class 8 Chapter 9: Negative Numbers */
  '8.9.1': { en: 'Negative Numbers & The Number Line', ml: 'ഋണസംഖ്യകളും സംഖ്യാരേഖയും' },
  '8.9.2': { en: 'Addition of Negative Numbers', ml: 'ന്യൂനസംഖ്യകളുടെ സങ്കലനം (കൂട്ടൽ)' },
  '8.9.3': { en: 'Subtraction of Negative Numbers', ml: 'ന്യൂനസംഖ്യകളുടെ വ്യവകലനം (കുറയ്ക്കൽ)' },
  '8.9.4': { en: 'Multiplication & Division of Negative Numbers', ml: 'ന്യൂനസംഖ്യകളുടെ ഗുണനവും ഹരണവും' },

  /* Class 8 Chapter 10: Statistics */
  '8.10.1': { en: 'Raw Data, Tally Marks & Frequency Table', ml: 'വിവരശേഖരണവും ആവൃത്തിപ്പട്ടികയും' },
  '8.10.2': { en: 'Grouped Frequency Distribution & Class Intervals', ml: 'വിഭാഗങ്ങളാക്കിയ ആവൃത്തിപ്പട്ടിക' },
  '8.10.3': { en: 'Histogram (Frequency Rectangles)', ml: 'ആവൃത്തിച്ചതുരം (ഹിസ്റ്റോഗ്രാം)' },
  '8.10.4': { en: 'Data Interpretation & Modal Class', ml: 'വിവര വിശകലനവും മോഡൽ വിഭാഗവും' },

  /* Class 8 Chapter 11: Equations */
  '8.11.1': { en: 'The Inversion Method', ml: 'വിപരീതക്രിയാരീതി' },
  '8.11.2': { en: 'Linear Equations with Variable on One Side', ml: 'ഒരു വശത്ത് ചരമുള്ള സമവാക്യങ്ങൾ' },
  '8.11.3': { en: 'Equations with Variables on Both Sides', ml: 'ഇരുവശത്തും ചരമുള്ള സമവാക്യങ്ങൾ' },
  '8.11.4': { en: 'Applied Word Problems with Equations', ml: 'നിത്യജീവിത, ജ്യാമിതീയ പ്രശ്നപരിഹാരം' },

  /* Class 8 Chapter 12: Parallel Lines */
  '8.12.1': { en: 'Parallel Lines and Transversal', ml: 'സമാന്തരവരകളും ചേദകരേഖയും' },
  '8.12.2': { en: 'Equidistant Parallel Lines', ml: 'തുല്യ അകലത്തിലുള്ള സമാന്തരവരകൾ' },
  '8.12.3': { en: 'Dividing Line Segments in Equal Parts and Ratios', ml: 'വരയെ തുല്യഭാഗങ്ങളാക്കലും അംശബന്ധത്തിൽ വിഭജിക്കലും' },
  '8.12.4': { en: 'Three Parallel Lines & Proportional Intercepts', ml: 'മൂന്ന് സമാന്തരവരകളും അനുപാത സിദ്ധാന്തവും' },

  /* Class 8 Chapter 13: Prisms */
  '8.13.1': { en: 'Prism Geometry & Classification', ml: 'സ്തംഭങ്ങളുടെ രൂപവും വർഗ്ഗീകരണവും' },
  '8.13.2': { en: 'Lateral Surface Area (Perimeter × Height)', ml: 'പാർശ്വതല പരപ്പളവ് (ചുറ്റളവ് × ഉയരം)' },
  '8.13.3': { en: 'Total Surface Area (LSA + 2 × Base Area)', ml: 'ഉപരിതല പരപ്പളവ് (പാർശ്വതല പരപ്പളവ് + 2 × പാദപരപ്പളവ്)' },
  '8.13.4': { en: 'Volume of Prisms (Base Area × Height)', ml: 'സ്തംഭങ്ങളുടെ വ്യാപ്തം (പാദപരപ്പളവ് × ഉയരം)' },

  /* Class 9 Chapter 1: Area */
  '9.1.1': { en: 'Triangles on the Same Base Between Parallel Lines', ml: 'ഒരേ പാദത്തിലും ഒരേ സമാന്തരവരകൾക്കിടയിലുമുള്ള ത്രികോണങ്ങൾ' },
  '9.1.2': { en: 'Triangles with Same Height & Area-Base Proportionality', ml: 'തുല്യ ഉയരമുള്ള ത്രികോണങ്ങളും പാദങ്ങളുടെ അംശബന്ധവും' },
  '9.1.3': { en: 'Transforming Quadrilaterals to Triangles of Equal Area', ml: 'ചതുർഭുജത്തെ തുല്യപരപ്പളവുള്ള ത്രികോണമാക്കൽ' },
  '9.1.4': { en: 'Trapezium Diagonals & Fair Land Partitioning', ml: 'ലംബകത്തിലെ വികർണ്ണങ്ങളും തുല്യ പരപ്പളവ് വിഭജനവും' },

  /* Class 9 Chapter 2: Decimal Forms */
  '9.2.1': { en: 'Fractions and Decimal Representations', ml: 'ഭിന്നസംഖ്യകളും ദശാംശരൂപങ്ങളും' },
  '9.2.2': { en: 'Terminating and Recurring Decimals', ml: 'അവസാനിക്കുന്നതും ആവർത്തിക്കുന്നതുമായ ദശാംശങ്ങൾ' },
  '9.2.3': { en: 'Converting Repeating Decimals to Fractions', ml: 'ആവർത്തന ദശാംശങ്ങളെ ഭിന്നസംഖ്യകളാക്കൽ' },
  '9.2.4': { en: 'Non-Repeating Decimals & Decimal Approximations', ml: 'ആവർത്തിക്കാത്ത ദശാംശങ്ങളും ഏകദേശവിലകളും' },

  /* Class 9 Chapter 3: Pairs of Equations */
  '9.3.1': { en: 'Formulating Simultaneous Linear Equations', ml: 'രണ്ട് ചരങ്ങളുള്ള സമവാക്യജോടികൾ രൂപീകരിക്കൽ' },
  '9.3.2': { en: 'Method of Elimination', ml: 'ഗുണകങ്ങൾ തുല്യമാക്കി നിർദ്ധാരണം ചെയ്യൽ' },
  '9.3.3': { en: 'Method of Substitution', ml: 'ഒരു ചരത്തിന് പകരം മറ്റൊന്ന് നൽകൽ' },
  '9.3.4': { en: 'Real-World and Geometric Applications of Linear Systems', ml: 'പ്രായോഗിക ജീവിതത്തിലെ സമവാക്യ പ്രയോഗങ്ങൾ' },

  /* Class 9 Chapter 4: New Numbers */
  '9.4.1': { en: 'Diagonal of a Square and Discovery of √2', ml: 'സമചതുരത്തിന്റെ വികർണ്ണവും √2-ന്റെ കണ്ടെത്തലും' },
  '9.4.2': { en: 'Geometric Construction of Roots & Spiral of Theodorus', ml: 'വർഗ്ഗമൂലങ്ങളുടെ ജ്യാമിതീയ നിർമ്മിതിയും തിയോഡോറസ് സർപ്പിളവും' },
  '9.4.3': { en: 'Decimal Approximation and Bounding Intervals', ml: 'വർഗ്ഗമൂലങ്ങളുടെ ദശാംശ ഏകദേശനവും പരിധികളും' },
  '9.4.4': { en: 'Operations on Surds & Algebraic Identities', ml: 'കരണികളുടെ ക്രിയകളും ബീജഗണിത സർവ്വസമവാക്യങ്ങളും' },

  /* Class 9 Chapter 5: Circles */
  '9.5.1': { en: 'Chords and Perpendicular Bisector from the Centre', ml: 'ഞാണും കേന്ദ്രത്തിൽ നിന്നുള്ള ലംബവും' },
  '9.5.2': { en: 'Chords and Central Angles', ml: 'ഞാണുകളും കേന്ദ്രകോണുകളും' },
  '9.5.3': { en: 'Angle in a Semicircle (Thales Theorem)', ml: 'അർദ്ധവൃത്തത്തിലെ കോൺ മട്ടകോണാണ്' },
  '9.5.4': { en: 'Angle Subtended by an Arc (Inscribed Angle Theorem)', ml: 'ചാപം കേന്ദ്രത്തിലും വൃത്തത്തിലും ഉണ്ടാക്കുന്ന കോൺ' },

  /* Class 9 Chapter 6: Parallel Lines */
  '9.6.1': { en: 'Equal Division of Line Segments by Parallel Lines', ml: 'സമാന്തരവരകൾ വരകളെ തുല്യഭാഗങ്ങളാക്കൽ' },
  '9.6.2': { en: 'Three Parallel Lines and Proportional Intercepts', ml: 'മൂന്ന് സമാന്തരവരകളും അനുപാത സിദ്ധാന്തവും' },
  '9.6.3': { en: 'Midpoint Theorem in Triangles & Area Subdivision', ml: 'ത്രികോണങ്ങളിലെ മധ്യബിന്ദു സിദ്ധാന്തവും പരപ്പളവ് വിഭജനവും' },
  '9.6.4': { en: 'Medians and Centroid of a Triangle', ml: 'മധ്യമങ്ങളും മധ്യകേന്ദ്രവും' },

  /* Class 9 Chapter 7: Similar Triangles */
  '9.7.1': { en: 'Concept of Similarity and the AA Similarity Criterion', ml: 'സദൃശതയുടെ ആശയവും AA സദൃശതാ തത്വവും' },
  '9.7.2': { en: 'SAS and SSS Similarity Criteria', ml: 'SAS, SSS സദൃശതാ തത്വങ്ങൾ' },
  '9.7.3': { en: 'Right Triangle Altitude and Geometric Mean Relations', ml: 'മട്ടത്രികോണത്തിലെ ലംബവും ജ്യാമിതീയ ശരാശരി ബന്ധങ്ങളും' },
  '9.7.4': { en: 'Perimeter and Area Ratios of Similar Triangles', ml: 'സദൃശ ത്രികോണങ്ങളിലെ ചുറ്റളവുകളുടെയും പരപ്പളവുകളുടെയും അംശബന്ധം' },

  /* Class 9 Chapter 8: Polynomials */
  '9.8.1': { en: 'Algebraic Expressions and Concept of Polynomials', ml: 'ബീജഗണിത വാക്യങ്ങളും ബഹുപദങ്ങളുടെ ആശയവും' },
  '9.8.2': { en: 'Degree and Classification of Polynomials', ml: 'ബഹുപദങ്ങളുടെ കൃതിയും തരംതിരിവും' },
  '9.8.3': { en: 'Value of a Polynomial and Zeroes of Polynomials', ml: 'ബഹുപദത്തിന്റെ വിലയും ബഹുപദത്തിന്റെ പൂജ്യങ്ങളും' },
  '9.8.4': { en: 'Operations on Polynomials and Geometric Modeling', ml: 'ബഹുപദങ്ങളുടെ ക്രിയകളും ജ്യാമിതീയ പ്രയോഗങ്ങളും' },

  /* Class 9 Chapter 9: Circle Measures */
  '9.9.1': { en: 'Circumference of a Circle and the Discovery of π', ml: 'വൃത്തത്തിന്റെ ചുറ്റളവും പൈയുടെ (π) കണ്ടെത്തലും' },
  '9.9.2': { en: 'Area of a Circle and Sector Dissection', ml: 'വൃത്തത്തിന്റെ പരപ്പളവും സെക്ടർ വിഭജനവും' },
  '9.9.3': { en: 'Length of an Arc of a Circle', ml: 'വൃത്തചാപത്തിന്റെ നീളം' },
  '9.9.4': { en: 'Area of a Sector and Concentric Circular Rings', ml: 'സെക്ടറിന്റെ പരപ്പളവും വൃത്താകാര വളയങ്ങളും' },

  /* Class 9 Chapter 10: Real Numbers */
  '9.10.1': { en: 'Real Numbers and the Number Line', ml: 'രേഖീയസംഖ്യകളും സംഖ്യാരേഖയും' },
  '9.10.2': { en: 'Absolute Value & Distance on the Line', ml: 'കേവലവിലയും അകലവും' },
  '9.10.3': { en: 'Equations with Absolute Values', ml: 'കേവലവില സമവാക്യങ്ങൾ' },
  '9.10.4': { en: 'Midpoint and Intervals on the Real Line', ml: 'മധ്യബിന്ദുവും പരിധികളും' },

  /* Class 9 Chapter 11: Prisms */
  '9.11.1': { en: 'Prisms and Geometric Classification', ml: 'സ്തംഭങ്ങളുടെ സവിശേഷതകളും തരങ്ങളും' },
  '9.11.2': { en: 'Volume of a Prism', ml: 'സ്തംഭത്തിന്റെ വ്യാപ്തം' },
  '9.11.3': { en: 'Surface Area of Prisms', ml: 'സ്തംഭങ്ങളുടെ ഉപരിതല പരപ്പളവ്' },
  '9.11.4': { en: 'Cylinder as a Circular Prism', ml: 'വൃത്തസ്തംഭം / സിലിണ്ടർ' },

  /* Class 9 Chapter 12: Proportion */
  '9.12.1': { en: 'Proportional Changes & Constant of Proportionality', ml: 'അനുപാത മാറ്റങ്ങളും അനുപാത സ്ഥിരസംഖ്യയും' },
  '9.12.2': { en: 'Geometric Proportion in Similar Figures', ml: 'ജ്യാമിതിയിലെ അനുപാതം' },
  '9.12.3': { en: 'Direct Proportion & Linear Equations', ml: 'നേർ അനുപാതവും ബീജഗണിതവും' },
  '9.12.4': { en: 'Inverse Proportion', ml: 'വ്യസ്താനുപാതം' },

  /* Class 9 Chapter 13: Statistics */
  '9.13.1': { en: 'Arithmetic Mean and Balance of Deviations', ml: 'സമാന്തര ശരാശരിയും വ്യതിയാന സന്തുലനവും' },
  '9.13.2': { en: 'Mean of Frequency Distributions', ml: 'ആവൃത്തി പട്ടികയിലെ ശരാശരി' },
  '9.13.3': { en: 'Mean of Grouped Data and Class Marks', ml: 'വർഗ്ഗീകരിച്ച വിവരങ്ങളിലെ ശരാശരി' },
  '9.13.4': { en: 'Assumed Mean Method', ml: 'സങ്കല്പിത ശരാശരി രീതി' },

  /* Class 10 Chapter 1: Arithmetic Sequences */
  '10.1.1': { en: 'Number Patterns & Sequences', ml: 'സംഖ്യാക്രമങ്ങളും ശ്രേണികളും' },
  '10.1.2': { en: 'Arithmetic Sequences & Common Difference', ml: 'സമാന്തരശ്രേണികളും പൊതുവ്യത്യാസവും' },
  '10.1.3': { en: 'Position and Term: Algebraic Form', ml: 'സ്ഥാനവും പദവും — ബീജഗണിതരൂപം' },
  '10.1.4': { en: 'Changes in Position and Terms', ml: 'സ്ഥാനമാറ്റവും പദമാറ്റവും' },
  '10.1.5': { en: 'Term Relations, Symmetric Averages & Middle Terms', ml: 'പദബന്ധങ്ങളും മധ്യപദങ്ങളും' },
  '10.1.6': { en: 'Sum of Terms of an Arithmetic Sequence', ml: 'സമാന്തരശ്രേണികളുടെ തുക' },

  /* Class 10 Chapter 2: Circles */
  '10.2.1': { en: 'Angle in a Semicircle (Thales Theorem)', ml: 'അർദ്ധവൃത്തത്തിലെ കോൺ' },
  '10.2.2': { en: 'Central Angle & Inscribed Angle Theorem', ml: 'കേന്ദ്രകോണും വൃത്തത്തിലെ കോണും' },
  '10.2.3': { en: 'Angles in Same Segment & Alternate Segment', ml: 'ഒരേ വൃത്തഖണ്ഡത്തിലെ കോണുകൾ' },
  '10.2.4': { en: 'Cyclic Quadrilaterals & Supplementary Angles', ml: 'ചക്രിയ ചതുർഭുജങ്ങൾ' },
  '10.2.5': { en: 'Intersecting Chords & Tangent-Secant Theorem', ml: 'ഞാണുകളുടെ ഗുണനഫലവും തൊടുവരയും' },

  /* Class 10 Chapter 3: Mathematics of Chance */
  '10.3.1': { en: 'Probability as a Measure of Chance', ml: 'സാധ്യത ഒരു സംഖ്യയായി' },
  '10.3.2': { en: 'Geometric Probability', ml: 'ജ്യാമിതീയ സാധ്യത' },
  '10.3.3': { en: 'Pairs of Events & Systematic Tabulation', ml: 'ജോഡി പരീക്ഷണങ്ങളിലെ സാധ്യത' },
  '10.3.4': { en: 'Complementary Events & Practical Probability', ml: 'പൂരക സംഭവങ്ങളും പ്രായോഗിക സാധ്യതകളും' },

  /* Class 10 Chapter 4: Second Degree Equations */
  '10.4.1': { en: 'Square Problems & Direct Square Roots', ml: 'വർഗ്ഗ പ്രശ്നങ്ങളും നേരിട്ടുള്ള വർഗ്ഗമൂലവും' },
  '10.4.2': { en: 'Method of Completing the Square', ml: 'വർഗ്ഗം തികയ്ക്കൽ രീതി' },
  '10.4.3': { en: 'Quadratic Formula & Nature of Roots', ml: 'രണ്ടാംകൃതി സൂത്രവാക്യവും മൂലങ്ങളുടെ സ്വഭാവവും' },
  '10.4.4': { en: 'Practical and Geometric Applications', ml: 'പ്രായോഗിക രണ്ടാംകൃതി പ്രശ്നങ്ങൾ' },

  /* Class 10 Chapter 5: Trigonometry */
  '10.5.1': { en: 'Trigonometric Ratios in Right Triangles', ml: 'മട്ടത്രികോണത്തിലെ ത്രികോണമിതി അനുപാതങ്ങൾ' },
  '10.5.2': { en: 'Special Angles & Values (30°, 45°, 60°)', ml: 'പ്രത്യേക കോണുകളിലെ ത്രികോണമിതി വിലകൾ' },
  '10.5.3': { en: 'Area of Triangles & Sine Formula', ml: 'ത്രികോണ പരപ്പളവും സൈൻ സൂത്രവാക്യവും' },
  '10.5.4': { en: 'Heights and Distances: Elevation & Depression', ml: 'ഉയരങ്ങളും ദൂരങ്ങളും — മേൽക്കോണും കീഴ്ക്കോണും' },

  /* Class 10 Chapter 6: Coordinates */
  '10.6.1': { en: 'Coordinate Axes & Point Coordinates', ml: 'നിർദ്ദേശാങ്ക അക്ഷങ്ങളും ബിന്ദുക്കളും' },
  '10.6.2': { en: 'Distance on Parallel Lines', ml: 'സമാന്തരവരകളിലെ അകലം' },
  '10.6.3': { en: 'Distance Formula in the Coordinate Plane', ml: 'ബിന്ദുക്കൾ തമ്മിലുള്ള അകലം കാണാനുള്ള സൂത്രവാക്യം' },
  '10.6.4': { en: 'Geometric Applications of Coordinates', ml: 'സൂചകസംഖ്യകളുടെ ജ്യാമിതീയ പ്രയോഗങ്ങൾ' },

  /* Class 10 Chapter 7: Tangents */
  '10.7.1': { en: 'Tangent Line & Perpendicular Radius', ml: 'തൊടുവരയും ആരവുമായുള്ള ലംബബന്ധം' },
  '10.7.2': { en: 'Tangents from an External Point', ml: 'ബാഹ്യബിന്ദുവിൽ നിന്നുള്ള തൊടുവരകൾ' },
  '10.7.3': { en: 'Incircle and Inradius of a Triangle', ml: 'അന്തർവൃത്തവും അന്തരാരവും' },
  '10.7.4': { en: 'Chord-Tangent Theorem & Intersecting Segments', ml: 'തൊടുവര-ഞാൺ സിദ്ധാന്തവും രേഖാഖണ്ഡ ഗുണനഫലവും' },

  /* Class 10 Chapter 8: Solids */
  '10.8.1': { en: 'Square Pyramid: Dimensions & Relations', ml: 'സമചതുര സ്തൂപിക — അളവുകളും ബന്ധങ്ങളും' },
  '10.8.2': { en: 'Surface Area & Volume of Square Pyramid', ml: 'സമചതുര സ്തൂപികയുടെ പരപ്പളവും വ്യാപ്തവും' },
  '10.8.3': { en: 'Right Circular Cone: Area & Volume', ml: 'വൃത്തസ്തൂപിക (കോൺ) — പരപ്പളവും വ്യാപ്തവും' },
  '10.8.4': { en: 'Sphere and Hemisphere: Area & Volume', ml: 'ഗോളവും അർദ്ധഗോളവും — പരപ്പളവും വ്യാപ്തവും' },

  /* Class 10 Chapter 9: Geometry and Algebra */
  '10.9.1': { en: 'Section Formula & Ratio Division', ml: 'രേഖാഖണ്ഡ വിഭജനവും അനുപാതവും' },
  '10.9.2': { en: 'Midpoint Formula & Triangle Centroid', ml: 'മധ്യബിന്ദുവും മധ്യകേന്ദ്രവും' },
  '10.9.3': { en: 'Slope of a Line', ml: 'വരയുടെ ചരിവ്' },
  '10.9.4': { en: 'Equations of Lines & Circles', ml: 'വരയുടെയും വൃത്തത്തിന്റെയും സമവാക്യങ്ങൾ' },

  /* Class 10 Chapter 10: Polynomials */
  '10.10.1': { en: 'Polynomial Functions & Evaluation', ml: 'ബഹുപദങ്ങളും വില കാണലും' },
  '10.10.2': { en: 'Remainder Theorem & Factor Theorem', ml: 'ശിഷ്ട സിദ്ധാന്തവും ഘടക സിദ്ധാന്തവും' },
  '10.10.3': { en: 'Factoring Quadratic & Higher Polynomials', ml: 'ബഹുപദങ്ങളുടെ ഘടകക്രിയ' },
  '10.10.4': { en: 'Roots, Factors & Equation Solutions', ml: 'മൂലങ്ങളും സമവാക്യ പരിഹാരങ്ങളും' },

  /* Class 10 Chapter 11: Statistics */
  '10.11.1': { en: 'Median of Raw & Ungrouped Data', ml: 'മധ്യമം — ഒറ്റതിരിഞ്ഞ വിവരങ്ങളിൽ' },
  '10.11.2': { en: 'Median of Frequency Distributions', ml: 'ആവൃത്തി പട്ടികയിലെ മധ്യമം' },
  '10.11.3': { en: 'Median of Grouped Continuous Distributions', ml: 'വർഗ്ഗീകരിച്ച വിവരങ്ങളിലെ മധ്യമം' },
  '10.11.4': { en: 'Comparing Mean and Median', ml: 'ശരാശരിയും മധ്യമവും — താരതമ്യം' },

  /* Class 1 & 2 */
  'p.1.1': { en: 'Natural Numbers & Counting', ml: 'എണ്ണൽസംഖ്യകൾ' },
  'p.1.2': { en: 'Addition & Combining Quantities', ml: 'കൂട്ടലും തുകയും' },
  'p.1.3': { en: 'Subtraction as Difference & Inverse', ml: 'കുറയ്ക്കലും വ്യത്യാസവും' },
  'p.1.4': { en: 'Zero & Base-10 Place Value', ml: 'പൂജ്യവും സ്ഥാനവിലയും' },

  /* Class 3 & 4 */
  'p.2.1': { en: 'Multiplication as Repeated Addition', ml: 'ഗുണനം ആവർത്തന സങ്കലനമായി' },
  'p.2.2': { en: 'Commutative & Associative Properties', ml: 'ഗുണനത്തിന്റെ സവിശേഷതകൾ' },
  'p.2.3': { en: 'Distributive Property: a(b+c) = ab + ac', ml: 'വിതരണനിയമം' },
  'p.2.4': { en: 'Division as Equal Sharing & Inverse', ml: 'ഹരണവും ശിഷ്ടവും' },
  'p.2.5': { en: 'Even & Odd Numbers', ml: 'ഇരട്ടസംഖ്യകളും ഒറ്റസംഖ്യകളും' },

  /* Class 5 */
  'p.3.1': { en: 'Factors, Multiples & Divisibility', ml: 'ഘടകങ്ങളും ഗുണിതങ്ങളും' },
  'p.3.2': { en: 'Prime Numbers & Prime Factorisation', ml: 'അഭാജ്യസംഖ്യകളും ഘടകക്രിയയും' },
  'p.3.3': { en: 'Rectangle & Grid Multiplication', ml: 'ചതുരഗുണനം' },
  'p.3.4': { en: 'Area of Rectangle & Square', ml: 'ചതുരത്തിന്റെയും സമചതുരത്തിന്റെയും വിസ്തീർണ്ണം' },

  /* Class 6 */
  'p.4.1': { en: 'Fractions as Parts of a Whole', ml: 'ഭിന്നസംഖ്യകൾ' },
  'p.4.2': { en: 'Fraction Operations & Squaring Fractions', ml: 'ഭിന്നസംഖ്യകളുടെ ക്രിയകളും വർഗ്ഗവും' },
  'p.4.3': { en: 'Decimals & Decimal Place Value', ml: 'ദശാംശരൂപങ്ങൾ' },
  'p.4.4': { en: 'Decimal Operations & Place Value Rules', ml: 'ദശാംശക്രിയകൾ' },
  'p.4.5': { en: 'Integers, Negative Numbers & Signs', ml: 'പൂർണ്ണസംഖ്യകളും ചിഹ്നനിയമങ്ങളും' },

  /* Class 7 */
  'p.5.1': { en: 'Powers & Repeated Multiplication (aⁿ)', ml: 'ആവർത്തനഗുണനവും ഘാതങ്ങളും' },
  'p.5.2': { en: 'Laws of Exponents', ml: 'കൃത്യങ്കനിയമങ്ങൾ' },
  'p.5.3': { en: 'Algebraic Terms & Expressions', ml: 'ബീജഗണിതവാക്യങ്ങൾ' },
  'p.5.4': { en: 'Expanding Brackets & (a+b)²', ml: 'ഗുണനഫലവും (a+b)² സമവാക്യവും' },
  'p.5.5': { en: 'The Pythagorean Theorem (a² + b² = c²)', ml: 'പൈതഗോറസ് സിദ്ധാന്തം' }
};

const EXT_SECS = {};

/* Content pool. Data files push into these. */
const CONCEPTS = [];
const OBJECTIVE = [];
const QUESTIONS = [];
const WRITTEN = QUESTIONS;
const PYQ = [];
const FIGS = {};

/* Exam tracks */
const TRACKS = [
  {
    id: 'school',
    label: 'Kerala SCERT Annual & Term Exams',
    note: 'Class 8 Mathematics according to Kerala SCERT syllabus and evaluation scheme.',
    courses: ['m8', 'foundation'],
    secs: null,
    hot: ['8.1.1', '8.1.2', '8.1.3', '8.1.4', '8.1.5', '8.1.6', '8.2.1', '8.2.2', '8.2.3', '8.2.4', '8.2.5', '8.2.6', '8.3.1', '8.3.2', '8.3.3', '8.3.4', '8.3.5'],
    date: 'March 2027',
    isoDate: '2027-03-15',
    required: true
  },
  {
    id: 'nmms',
    label: 'NMMS & USS Scholarship Exams',
    note: 'National Means-cum-Merit Scholarship and USS competitive exam patterns for Class 8.',
    courses: ['m8', 'foundation'],
    secs: ['8.1.1', '8.1.3', '8.1.4', '8.1.5', '8.1.6', '8.2.1', '8.2.2', '8.2.3', '8.2.4', '8.3.1', '8.3.2', '8.3.4', 'p.5.4', 'p.5.5'],
    hot: ['8.1.3', '8.1.5', '8.1.6', '8.2.1', '8.2.4', '8.3.1', '8.3.4'],
    date: 'November 2026',
    isoDate: '2026-11-20'
  }
];
