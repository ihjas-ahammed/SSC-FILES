const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = process.cwd();

// Load sources.js
const sourcesCode = fs.readFileSync(path.join(ROOT, 'app/sources.js'), 'utf8');
const sCtx = {};
vm.createContext(sCtx);
const DATA_SOURCES = vm.runInContext(sourcesCode + '\n; DATA_SOURCES', sCtx);
const liveFiles = DATA_SOURCES.live.map(p => p.replace(/^\.\.\//, ''));

// Create master VM context
const ctx = {
  console,
  CONCEPTS: [],
  OBJECTIVE: [],
  QUESTIONS: [],
  WRITTEN: [],
  PYQ: [],
  FIGS: {},
  SECTITLE: {},
  SYLLABI: [],
  TRACKS: [],
  EXT_SECS: {}
};
vm.createContext(ctx);

for (const relPath of liveFiles) {
  const code = fs.readFileSync(path.join(ROOT, relPath), 'utf8');
  try {
    vm.runInContext(code, ctx);
  } catch (err) {
    console.error(`Error loading ${relPath}:`, err.message);
  }
}

const pool = vm.runInContext('({ CONCEPTS, OBJECTIVE, QUESTIONS, WRITTEN, PYQ, SYLLABI, SECTITLE })', ctx);
const CONCEPTS = pool.CONCEPTS;
const OBJECTIVE = pool.OBJECTIVE;
const WRITTEN = (pool.QUESTIONS || []).concat(
  (pool.WRITTEN && pool.WRITTEN !== pool.QUESTIONS) ? pool.WRITTEN : []
);
const PYQ = pool.PYQ;
const SYLLABI = pool.SYLLABI;
const SECTITLE = pool.SECTITLE;

// Load FIGLIB and FIGMAP
const figLibCode = fs.readFileSync(path.join(ROOT, 'app/src/fig.library.js'), 'utf8');
const figCtx = { console, Fig: {}, DOM: {}, I18N: {}, window: {} };
vm.createContext(figCtx);
const figRes = vm.runInContext(figLibCode + '\n; ({ FIGLIB, FIGMAP })', figCtx);
const FIGLIB = figRes.FIGLIB;
const FIGMAP = figRes.FIGMAP;

console.log('══════════════════════════════════════════════════════════════════════════');
console.log('                 COMPREHENSIVE CURRICULUM AUDIT REPORT                   ');
console.log('══════════════════════════════════════════════════════════════════════════');
console.log(`Pool Stats: ${CONCEPTS.length} Concepts | ${OBJECTIVE.length} Objective | ${WRITTEN.length} Written | ${PYQ.length} PYQ Papers`);

let errors = 0;
let warnings = 0;

// 1. Audit Syllabus and Section Mapping
console.log('\n── 1. SYLLABUS & SECTION MAPPING ──');
const conceptMap = new Map();
for (const c of CONCEPTS) {
  if (conceptMap.has(c.id)) {
    console.error(`[DUPLICATE CONCEPT ID] ${c.id}`);
    errors++;
  }
  conceptMap.set(c.id, c);
}

const conceptsBySec = {};
for (const c of CONCEPTS) {
  (conceptsBySec[c.sec] || (conceptsBySec[c.sec] = [])).push(c);
}
const objBySec = {};
for (const q of OBJECTIVE) {
  (objBySec[q.sec] || (objBySec[q.sec] = [])).push(q);
}
const writtenBySec = {};
for (const q of WRITTEN) {
  (writtenBySec[q.sec] || (writtenBySec[q.sec] = [])).push(q);
}

for (const syl of SYLLABI) {
  console.log(`\nSyllabus [${syl.id}] ${syl.title_en}:`);
  for (const mod of syl.modules) {
    let modConceptCount = 0;
    let modObjCount = 0;
    let modWrittenCount = 0;
    const secs = mod.secs || [];

    for (const sec of secs) {
      if (!SECTITLE[sec]) {
        console.error(`  [MISSING SECTITLE] Sec ${sec} in ${mod.title_en}`);
        errors++;
      }
      const cList = conceptsBySec[sec] || [];
      const oList = objBySec[sec] || [];
      const wList = writtenBySec[sec] || [];
      modConceptCount += cList.length;
      modObjCount += oList.length;
      modWrittenCount += wList.length;

      if (cList.length === 0) {
        console.error(`  [NO CONCEPTS] Sec ${sec} (${SECTITLE[sec]?.en || 'Unknown'})`);
        errors++;
      }
      if (syl.id !== 'foundation') {
        if (oList.length === 0) {
          console.warn(`  [NO OBJECTIVE] Sec ${sec} (${SECTITLE[sec]?.en || 'Unknown'})`);
          warnings++;
        }
        if (wList.length === 0) {
          console.warn(`  [NO WRITTEN] Sec ${sec} (${SECTITLE[sec]?.en || 'Unknown'})`);
          warnings++;
        }
      }
    }
    console.log(`  ${mod.title_en} (${secs.length} secs): ${modConceptCount} concepts, ${modObjCount} obj, ${modWrittenCount} written`);
  }
}

// 2. Audit Concepts Quality & Completeness
console.log('\n── 2. CONCEPTS STRUCTURAL INTEGRITY ──');
for (const c of CONCEPTS) {
  if (!c.title_en || !c.title_ml) {
    console.error(`[CONCEPT MISSING TITLE] ${c.id}`);
    errors++;
  }
  if (!c.statement_en || !c.statement_ml) {
    console.error(`[CONCEPT MISSING STATEMENT] ${c.id}`);
    errors++;
  }
  if (!c.intuition_en || !c.intuition_ml) {
    console.error(`[CONCEPT MISSING INTUITION] ${c.id}`);
    errors++;
  }
  if (!c.cards_en || !c.cards_ml) {
    console.error(`[CONCEPT MISSING CARDS] ${c.id}`);
    errors++;
  } else {
    if (c.cards_en.length !== c.cards_ml.length) {
      console.warn(`[CARDS LENGTH MISMATCH] ${c.id}: en=${c.cards_en.length}, ml=${c.cards_ml.length}`);
      warnings++;
    }
    for (let i = 0; i < c.cards_en.length; i++) {
      const card = c.cards_en[i];
      if (!card.q || !card.a) {
        console.error(`[EMPTY EN CARD] ${c.id} index ${i}`);
        errors++;
      }
    }
    for (let i = 0; i < c.cards_ml.length; i++) {
      const card = c.cards_ml[i];
      if (!card.q || !card.a) {
        console.error(`[EMPTY ML CARD] ${c.id} index ${i}`);
        errors++;
      }
    }
  }

  // Check proof if present
  if (c.proof) {
    const p = c.proof;
    const hasRungs = (p.rungs_en && p.rungs_en.length) || (p.rungs && p.rungs.length);
    if (!hasRungs) {
      console.error(`[EMPTY PROOF RUNGS] ${c.id}`);
      errors++;
    }
  }

  // Check Figure Map
  const figIds = c.figs && c.figs.length ? c.figs : (FIGMAP[c.id] || []);
  if (!figIds || figIds.length === 0) {
    console.warn(`[NO FIGURE ATTACHED] ${c.id}`);
    warnings++;
  } else {
    for (const fid of (Array.isArray(figIds) ? figIds : [figIds])) {
      if (!FIGLIB[fid]) {
        console.error(`[BROKEN FIGURE REFERENCE] ${c.id} -> ${fid}`);
        errors++;
      }
    }
  }
}

// 3. Audit Objective Questions
console.log('\n── 3. OBJECTIVE QUESTIONS INTEGRITY ──');
const objMap = new Map();
for (const q of OBJECTIVE) {
  if (objMap.has(q.id)) {
    console.error(`[DUPLICATE OBJ ID] ${q.id}`);
    errors++;
  }
  objMap.set(q.id, q);

  if (!conceptMap.has(q.concept)) {
    console.error(`[OBJ INVALID CONCEPT REF] ${q.id} references "${q.concept}"`);
    errors++;
  }
  if (!q.prompt_en || !q.prompt_ml) {
    console.error(`[OBJ MISSING PROMPT] ${q.id}`);
    errors++;
  }
  if (!q.options_en || !q.options_ml || q.options_en.length < 2) {
    console.error(`[OBJ INVALID OPTIONS] ${q.id}`);
    errors++;
  }
  if (!q.answer) {
    console.error(`[OBJ MISSING ANSWER] ${q.id}`);
    errors++;
  } else {
    const keys = q.options_en.map(o => o.k);
    if (!keys.includes(q.answer)) {
      console.error(`[OBJ ANSWER KEY NOT IN OPTIONS] ${q.id}: answer "${q.answer}" vs options [${keys.join(',')}]`);
      errors++;
    }
  }
  if (!q.solution_en || !q.solution_ml) {
    console.error(`[OBJ MISSING SOLUTION] ${q.id}`);
    errors++;
  }
}

// 4. Audit Written Questions
console.log('\n── 4. WRITTEN QUESTIONS INTEGRITY ──');
const writtenMap = new Map();
for (const q of WRITTEN) {
  if (writtenMap.has(q.id)) {
    console.error(`[DUPLICATE WRITTEN ID] ${q.id}`);
    errors++;
  }
  writtenMap.set(q.id, q);

  if (!conceptMap.has(q.concept)) {
    console.error(`[WRITTEN INVALID CONCEPT REF] ${q.id} references "${q.concept}"`);
    errors++;
  }
  const prompt_en = q.prompt_en || q.q_en;
  const prompt_ml = q.prompt_ml || q.q_ml;
  if (!prompt_en || !prompt_ml) {
    console.error(`[WRITTEN MISSING PROMPT] ${q.id}`);
    errors++;
  }
  const solution_en = q.solution_en || q.sol_en;
  const solution_ml = q.solution_ml || q.sol_ml;
  if (!solution_en || !solution_ml) {
    console.error(`[WRITTEN MISSING SOLUTION] ${q.id}`);
    errors++;
  }
}

// 5. Audit Malayalam Purity (check for stray parenthesized English in Malayalam fields)
console.log('\n── 5. MALAYALAM PURITY CHECK ──');
const parenEnglishRegex = /\b[A-Za-z]{3,}\b/;

let parenCount = 0;
function checkMlText(objId, field, text) {
  if (typeof text !== 'string') return;
  // Strip math blocks $$...$$ and $...$, HTML tags, and LaTeX commands
  let stripped = text
    .replace(/\$\$[\s\S]*?\$\$/g, '')
    .replace(/\$[\s\S]*?\$/g, '')
    .replace(/\\text\{[^\}]*\}/g, '')
    .replace(/<[^>]+>/g, '')
    // Strip enumeration markers like (i), (ii), (iii), (iv), (v), (vi), (a), (b), (c), (d)
    .replace(/\((?:i|ii|iii|iv|v|vi|vii|viii|ix|x|[a-d])\)/gi, '')
    // Strip standard acronyms like SSLC or OMR
    .replace(/\b(SSLC|OMR)\b/g, '')
    // Strip math variable pairs like (x, y) or (a, b) or (x - y)
    .replace(/\([a-zA-Z0-9_\s,+\-*/^=<>:]+\)/g, '');

  const m = stripped.match(parenEnglishRegex);
  if (m) {
    console.warn(`[ENGLISH IN ML FIELD] ${objId} in ${field}: "${m[0]}" (context: "${stripped.slice(Math.max(0, m.index - 20), m.index + 40).trim()}")`);
    parenCount++;
  }
}

for (const c of CONCEPTS) {
  checkMlText(c.id, 'title_ml', c.title_ml);
  checkMlText(c.id, 'oneLine_ml', c.oneLine_ml);
  checkMlText(c.id, 'statement_ml', c.statement_ml);
  checkMlText(c.id, 'intuition_ml', c.intuition_ml);
  if (c.proof && c.proof.idea_ml) checkMlText(c.id, 'proof.idea_ml', c.proof.idea_ml);
  if (c.proof && c.proof.rungs_ml) {
    c.proof.rungs_ml.forEach((r, idx) => checkMlText(c.id, `proof.rungs_ml[${idx}]`, r.why_ml || r.why || r.detail_ml));
  }
}
for (const q of OBJECTIVE) {
  checkMlText(q.id, 'prompt_ml', q.prompt_ml);
  checkMlText(q.id, 'solution_ml', q.solution_ml);
  checkMlText(q.id, 'tested_ml', q.tested_ml);
}
for (const q of WRITTEN) {
  checkMlText(q.id, 'prompt_ml', q.prompt_ml || q.q_ml);
  checkMlText(q.id, 'solution_ml', q.solution_ml || q.sol_ml);
}
if (parenCount > 0) {
  console.warn(`Total stray parenthetical English detected: ${parenCount}`);
} else {
  console.log('Pure Malayalam verified: 0 stray parenthetical English terms!');
}

console.log('\n══════════════════════════════════════════════════════════════════════════');
console.log(`AUDIT COMPLETE: ${errors} Errors, ${warnings} Warnings, ${parenCount} Malayalam purity notices.`);
console.log('══════════════════════════════════════════════════════════════════════════');

process.exit(errors > 0 ? 1 : 0);
