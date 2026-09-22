/* ══════════════════════════════════════════════════════════════════════════
   I18N: Pure English & Pure Malayalam language support with zero mixing.
   Authentic SCERT Kerala Mathematics Textbook Terminology.
   ══════════════════════════════════════════════════════════════════════════ */

const I18N = (function () {
  let curLang = 'en';

  function init() {
    if (typeof Store !== 'undefined' && Store.pref) {
      curLang = Store.pref('lang', 'en');
    }
    apply();
  }

  function lang() {
    return curLang;
  }

  function apply() {
    document.documentElement.setAttribute('lang', curLang);
    if (document.body) {
      document.body.classList.toggle('lang-ml', curLang === 'ml');
    }
  }

  function setLang(l) {
    curLang = l === 'ml' ? 'ml' : 'en';
    if (typeof Store !== 'undefined' && Store.setPref) {
      Store.setPref('lang', curLang);
    }
    apply();
    if (typeof Shell !== 'undefined' && Shell.paint) {
      Shell.paint();
    }
    if (typeof App !== 'undefined' && App.buildNav) {
      App.buildNav();
    }
    if (typeof Router !== 'undefined' && Router.reload) {
      Router.reload();
      if (typeof Tex !== 'undefined' && Tex.typeset) {
        const main = document.getElementById('main');
        if (main) Tex.typeset(main);
      }
    }
    if (typeof DOM !== 'undefined' && DOM.announce) {
      DOM.announce(curLang === 'ml' ? 'ഭാഷ മലയാളത്തിലേക്ക് മാറ്റി' : 'Language switched to English');
    }
  }

  function toggle() {
    setLang(curLang === 'en' ? 'ml' : 'en');
  }

  /* Extract the localized field from a node: strictly separate en and ml. */
  function pick(node, field) {
    if (!node) return '';
    if (typeof node === 'string') return node;
    if (curLang === 'ml') {
      if (field) {
        return node[field + '_ml'] || (node[field] && typeof node[field] === 'object' ? node[field].ml : '') || node[field] || '';
      }
      return node.ml || node.en || '';
    }
    if (field) {
      return node[field + '_en'] || (node[field] && typeof node[field] === 'object' ? node[field].en : '') || node[field] || '';
    }
    return node.en || node.ml || '';
  }

  const STRINGS = {
    app_title: { en: 'Class 8 Mathematics', ml: 'ക്ലാസ് 8 ഗണിതം' },
    app_sub: { en: 'Math Base · SCERT', ml: 'Math Base · SCERT' },
    tab_home: { en: 'Today', ml: 'Today' },
    tab_today: { en: 'Today', ml: 'Today' },
    tab_study: { en: 'Study', ml: 'Study' },
    tab_recall: { en: 'Recall', ml: 'Recall' },
    back: { en: 'Back', ml: 'Back' },
    fullscreen: { en: 'Full screen', ml: 'Full screen' },
    exit_fullscreen: { en: 'Exit full screen', ml: 'Exit full screen' },
    theme: { en: 'Theme', ml: 'Theme' },
    lang_btn: { en: 'മലയാളം', ml: 'English' },
    lang_switch_aria: { en: 'Switch to Malayalam', ml: 'Switch to English' },

    login_kicker: { en: 'Class 8 Mathematics · Math Base', ml: 'Class 8 Mathematics · Math Base' },
    login_title: { en: 'Sign in to your record', ml: 'Sign in to your record' },
    login_lede: {
      en: 'Your name and roll number are the key your progress is stored under. Enter the same two on any device and the record follows you.',
      ml: 'Your name and roll number are the key your progress is stored under. Enter the same two on any device and the record follows you.'
    },
    login_name: { en: 'Name', ml: 'Name' },
    login_name_ph: { en: 'e.g. Student Name', ml: 'e.g. Student Name' },
    login_roll: { en: 'Roll number', ml: 'Roll number' },
    login_roll_ph: { en: 'e.g. Roll Number', ml: 'e.g. Roll Number' },
    login_submit: { en: 'Open my study record', ml: 'Open my study record' },
    login_opening: { en: 'Opening…', ml: 'Opening…' },
    login_looking: { en: 'Looking for an existing record…', ml: 'Looking for an existing record…' },
    login_both_needed: {
      en: 'Both a name and a roll number are needed — together they are the key.',
      ml: 'Both a name and a roll number are needed — together they are the key.'
    },
    login_passkey_title: { en: 'This is a pass key, not a password.', ml: 'This is a pass key, not a password.' },
    login_passkey_desc: {
      en: 'Anyone who knows your name and roll number can open this record. It keeps your work together across devices; it does not protect it.',
      ml: 'Anyone who knows your name and roll number can open this record. It keeps your work together across devices; it does not protect it.'
    },

    today_title: { en: 'Today', ml: 'Today' },
    stat_read: { en: 'Read', ml: 'Read' },
    stat_recall: { en: 'First-try recall', ml: 'First-try recall' },
    stat_correct: { en: 'First-try correct', ml: 'First-try correct' },
    stat_proofs: { en: 'Proofs worked', ml: 'Proofs worked' },
    stat_exercises: { en: 'Exercises done', ml: 'Exercises done' },
    the_loop: { en: 'The loop', ml: 'The loop' },
    the_loop_desc: {
      en: 'Read it, practice recall, answer objective questions, then work the section exercises. Feedback comes after the attempt, never before.',
      ml: 'Read it, practice recall, answer objective questions, then work the section exercises. Feedback comes after the attempt, never before.'
    },
    courses: { en: 'Courses', ml: 'Courses' },
    open_syllabus: { en: 'Open syllabus', ml: 'Open syllabus' },
    course_bar_desc: {
      en: 'A course carries the colour of its weakest note. Nothing here is switched on or off — the level is whatever the work says it is.',
      ml: 'A course carries the colour of its weakest note. Nothing here is switched on or off — the level is whatever the work says it is.'
    },
    colours_meaning: { en: 'What the three colours mean', ml: 'What the three colours mean' },
    lv1_desc: { en: 'you have read it (Level 1)', ml: 'you have read it (Level 1)' },
    lv2_desc: { en: 'every exercise in its section is worked through (Level 2)', ml: 'every exercise in its section is worked through (Level 2)' },
    lv3_desc: { en: 'past exam questions (PYQ) are complete (Level 3)', ml: 'past exam questions (PYQ) are complete (Level 3)' },
    colours_foot: {
      en: 'A module or course takes the colour of the weakest item inside it: all red (read), then amber (exercises), then green (PYQ).',
      ml: 'A module or course takes the colour of the weakest item inside it: all red (read), then amber (exercises), then green (PYQ).'
    },
    sync_title: { en: 'Your record · syncing automatically', ml: 'Your record · syncing automatically' },
    sign_out: { en: 'Sign out', ml: 'Sign out' },

    syllabus: { en: 'Syllabus', ml: 'Syllabus' },
    syllabus_sub: { en: 'Open a module, read what is inside it', ml: 'Open a module, read what is inside it' },
    where_stands: { en: 'Where the syllabus stands', ml: 'Where the syllabus stands' },
    syllabus_foot: {
      en: 'One press on a row advances it: read it (red). Green arrives when every exercise and past question is worked through.',
      ml: 'One press on a row advances it: read it (red). Green arrives when every exercise and past question is worked through.'
    },

    level: { en: 'Level', ml: 'Level' },
    level_word_0: { en: 'not started', ml: 'not started' },
    level_word_1: { en: 'read', ml: 'read' },
    level_word_2: { en: 'exercises done', ml: 'exercises done' },
    level_word_3: { en: 'PYQ complete', ml: 'PYQ complete' },

    definition: { en: 'Definition', ml: 'നിർവ്വചനം' },
    technique: { en: 'Technique', ml: 'രീതി' },
    theorem: { en: 'Theorem', ml: 'സിദ്ധാന്തം' },
    formula: { en: 'Formula', ml: 'സമവാക്യം' },
    property: { en: 'Property', ml: 'സവിശേഷത' },
    concept: { en: 'Concept', ml: 'ആശയം' },
    example: { en: 'Example', ml: 'ഉദാഹരണം' },

    statement: { en: 'Statement', ml: 'പ്രസ്താവന' },
    what_it_says: { en: 'What it really says', ml: 'ആശയം ലളിതമായി' },
    proof_heading: { en: 'Proof & rigorous argument', ml: 'തെളിവും ഗണിത യുക്തിയും' },
    proof_strategy: { en: 'Proof strategy', ml: 'തെളിയിക്കുന്ന രീതി' },
    core_rationale: { en: 'Core Rationale', ml: 'അടിസ്ഥാന തത്വം' },
    key_idea: { en: 'Key Idea', ml: 'പ്രധാന ആശയം' },
    step: { en: 'Step', ml: 'ഘട്ടം' },
    what_means: { en: 'What this really means', ml: 'ഇതിന്റെ ലളിതമായ അർത്ഥം' },
    try_proof_hint: { en: 'Try proof (hint)', ml: 'Try proof (hint)' },
    hide_hint: { en: 'Hide hint', ml: 'Hide hint' },
    show_proof: { en: 'Show step-by-step proof', ml: 'Show step-by-step proof' },
    hide_proof: { en: 'Hide proof', ml: 'Hide proof' },
    mark_complete: { en: 'Mark as complete', ml: 'Mark as complete' },
    complete_undo: { en: 'Completed — undo', ml: 'Completed — undo' },
    claim_note_proof: { en: 'Claim this only if you produced the argument yourself, not if you read it.', ml: 'Claim this only if you produced the argument yourself, not if you read it.' },
    marked_complete: { en: 'Marked complete on this proof.', ml: 'Marked complete on this proof.' },

    route_to_result: { en: 'Route to this result', ml: 'Route to this result' },
    groundwork_read: { en: 'groundwork read', ml: 'groundwork read' },
    not_read_yet: { en: 'not read yet', ml: 'not read yet' },
    you_are_here: { en: 'you are here', ml: 'you are here' },
    used_later: { en: 'Used later by', ml: 'Used later by' },
    common_traps: { en: 'Where marks are lost', ml: 'Where marks are lost' },
    self_checks: { en: 'Self-check', ml: 'Self-check' },
    show_answer: { en: 'Show answer', ml: 'Show answer' },
    hide_answer: { en: 'Hide answer', ml: 'Hide answer' },
    show_options: { en: 'Show options', ml: 'Show options' },
    hide: { en: 'Hide', ml: 'Hide' },

    write_statement_mem: { en: 'Write the statement from memory', ml: 'Write the statement from memory' },
    latex_palette: { en: 'Write and practice the statement', ml: 'Write and practice the statement' },
    your_statement_latex: { en: 'Your statement in words', ml: 'Your statement in words' },
    canonical_statement: { en: 'Canonical statement', ml: 'Canonical statement' },
    compare_canonical: { en: 'Compare with the canonical statement', ml: 'Compare with the canonical statement' },
    write_first_hint: { en: 'Write your version above first. The canonical statement stays hidden until you ask for it.', ml: 'Write your version above first. The canonical statement stays hidden until you ask for it.' },

    exercises_on_this: { en: 'Exercises on this', ml: 'Exercises on this' },
    exercises_desc: { en: 'Every exercise in this section has to be worked through before the section turns green. Work it on paper or in the scratchpad, then mark it complete.', ml: 'Every exercise in this section has to be worked through before the section turns green. Work it on paper or in the scratchpad, then mark it complete.' },
    try_hint: { en: 'Try it (hint)', ml: 'Try it (hint)' },
    approach: { en: 'Approach', ml: 'Approach' },
    trap: { en: 'Trap: ', ml: 'Trap: ' },
    first_step_clue: { en: 'First step clue: ', ml: 'First step clue: ' },
    scratchpad_proof: { en: 'Scratchpad · draft the argument before you look', ml: 'Scratchpad · draft the argument before you look' },
    scratchpad_write: { en: 'Scratchpad · draft your answer before you look', ml: 'Scratchpad · draft your answer before you look' },

    objective_on_this: { en: 'Objective questions on this', ml: 'Objective questions on this' },
    select_all_correct: { en: 'Select all correct options', ml: 'Select all correct options' },
    select_one_option: { en: 'Select one option', ml: 'Select one option' },
    key: { en: 'key', ml: 'key' },
    yours: { en: 'yours', ml: 'yours' },
    lock_answer: { en: 'Lock answer', ml: 'Lock answer' },
    lock_selected: { en: 'Lock selected', ml: 'Lock selected' },
    clear: { en: 'Clear', ml: 'Clear' },
    correct: { en: 'Correct', ml: 'Correct' },
    not_correct: { en: 'Not correct', ml: 'Not correct' },
    partially_correct: { en: 'Partially correct', ml: 'Partially correct' },
    worked_answer: { en: 'Worked answer', ml: 'Worked answer' },
    what_tests: { en: 'What this actually tests', ml: 'What this actually tests' },
    picture_behind: { en: 'The picture behind it', ml: 'The picture behind it' },

    this_note: { en: 'This note', ml: 'This note' },
    mark_read: { en: 'Mark as read', ml: 'Mark as read' },
    read_undo: { en: 'Read — undo', ml: 'Read — undo' },
    complete_note: { en: 'Complete this note', ml: 'Complete this note' },
    complete_open_next: { en: 'Complete · open ', ml: 'Complete · open ' },

    reel: { en: 'Recall', ml: 'Recall' },
    reel_kicker: { en: 'Reel · one swipe, one card', ml: 'Reel · one swipe, one card' },
    reel_lede: {
      en: 'Only what you have already met. Each card asks first; nothing is revealed until you have attempted it. What comes next is a surprise.',
      ml: 'Only what you have already met. Each card asks first; nothing is revealed until you have attempted it. What comes next is a surprise.'
    },
    everything: { en: 'Everything', ml: 'Everything' },
    not_yet_attempted: { en: 'Not yet attempted', ml: 'Not yet attempted' },
    stated_it: { en: 'Stated it', ml: 'Stated it' },
    partly: { en: 'Partly', ml: 'Partly' },
    missed_it: { en: 'Missed it', ml: 'Missed it' },
    next_card: { en: 'Next card', ml: 'Next card' },

    outside_syllabus: { en: 'outside syllabus', ml: 'outside syllabus' },
    proof_owed: { en: 'proof owed', ml: 'proof owed' },
    not_started: { en: 'not started', ml: 'not started' },
    read_lc: { en: 'read', ml: 'read' },
    proofs_lc: { en: 'proofs', ml: 'proofs' },
    exercises_lc: { en: 'exercises', ml: 'exercises' },
    section: { en: 'Section', ml: 'Section' },
    chapter: { en: 'Chapter', ml: 'Chapter' },
    course: { en: 'Course', ml: 'Course' }
  };

  function t(key, fallback) {
    const entry = STRINGS[key];
    if (!entry) return fallback !== undefined ? fallback : key;
    return entry[curLang] || entry.en || (fallback !== undefined ? fallback : key);
  }

  function kind(k) {
    return t(k) || k;
  }

  function levelName(n) {
    return t('level_word_' + (n || 0));
  }

  return { init, lang, setLang, toggle, pick, t, kind, levelName, apply };
})();
