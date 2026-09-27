/* ══════════════════════════════════════════════════════════════════════════
   I18N: pure English and pure Malayalam, zero mixing.

   Every string the interface says is here, twice. The content pool carries
   its own pairs (`title_en` / `title_ml`), and `pick` reads them; this table
   is for the chrome — buttons, captions, verdicts, the plan for the day.

   Terminology follows the SCERT Kerala textbooks: പരിശീലനം for exercises,
   മുൻവർഷ ചോദ്യങ്ങൾ for past papers, ആശയം for a concept. When a word here
   disagrees with the book, the book wins.
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
    /* ── shell ─────────────────────────────────────────────────────────── */
    app_title: { en: 'SSLC Mathematics', ml: 'എസ്.എസ്.എൽ.സി ഗണിതം' },
    app_sub: { en: 'Kerala SCERT · Class 8–10', ml: 'കേരള എസ്.സി.ഇ.ആർ.ടി · ക്ലാസ് 8–10' },
    tab_home: { en: 'Today', ml: 'ഇന്ന്' },
    tab_today: { en: 'Today', ml: 'ഇന്ന്' },
    tab_study: { en: 'Study', ml: 'പഠനം' },
    tab_recall: { en: 'Recall', ml: 'ഓർമ്മ' },
    tab_drill: { en: 'Drill', ml: 'ടെസ്റ്റ്' },
    tab_method: { en: 'How to study', ml: 'പഠനരീതി' },
    back: { en: 'Back', ml: 'പിന്നോട്ട്' },
    fullscreen: { en: 'Full screen', ml: 'പൂർണ്ണ സ്ക്രീൻ' },
    exit_fullscreen: { en: 'Exit full screen', ml: 'പൂർണ്ണ സ്ക്രീൻ ഒഴിവാക്കുക' },
    theme: { en: 'Theme', ml: 'തീം' },
    lang_btn: { en: 'മലയാളം', ml: 'English' },
    lang_switch_aria: { en: 'Switch to Malayalam', ml: 'ഇംഗ്ലീഷിലേക്ക് മാറ്റുക' },
    show: { en: 'Show', ml: 'കാണുക' },
    hide: { en: 'Hide', ml: 'മറയ്ക്കുക' },
    close: { en: 'Close', ml: 'അടയ്ക്കുക' },
    open: { en: 'Open', ml: 'തുറക്കുക' },
    start: { en: 'Start', ml: 'തുടങ്ങുക' },
    next: { en: 'Next', ml: 'അടുത്തത്' },
    done: { en: 'Done', ml: 'പൂർത്തിയായി' },
    skip: { en: 'Skip', ml: 'ഒഴിവാക്കുക' },
    cancel: { en: 'Cancel', ml: 'റദ്ദാക്കുക' },
    of: { en: 'of', ml: '/' },
    minutes: { en: 'min', ml: 'മിനിറ്റ്' },
    days: { en: 'days', ml: 'ദിവസം' },

    /* ── sign-in ───────────────────────────────────────────────────────── */
    login_kicker: { en: 'SSLC Mathematics · Kerala SCERT', ml: 'എസ്.എസ്.എൽ.സി ഗണിതം · കേരള എസ്.സി.ഇ.ആർ.ടി' },
    login_title: { en: 'Sign in to your record', ml: 'നിങ്ങളുടെ പഠനരേഖ തുറക്കുക' },
    login_lede: {
      en: 'Your name and roll number are the key your progress is stored under. Enter the same two on any device and the record follows you.',
      ml: 'നിങ്ങളുടെ പേരും റോൾ നമ്പറുമാണ് പഠനപുരോഗതി സൂക്ഷിക്കുന്ന താക്കോൽ. ഏത് ഉപകരണത്തിലും ഇതേ രണ്ടും നൽകിയാൽ രേഖ നിങ്ങളോടൊപ്പം വരും.'
    },
    login_name: { en: 'Name', ml: 'പേര്' },
    login_name_ph: { en: 'e.g. Student Name', ml: 'ഉദാ: വിദ്യാർത്ഥിയുടെ പേര്' },
    login_roll: { en: 'Roll number', ml: 'റോൾ നമ്പർ' },
    login_roll_ph: { en: 'e.g. Roll Number', ml: 'ഉദാ: റോൾ നമ്പർ' },
    login_submit: { en: 'Open my study record', ml: 'എന്റെ പഠനരേഖ തുറക്കുക' },
    login_opening: { en: 'Opening…', ml: 'തുറക്കുന്നു…' },
    login_looking: { en: 'Looking for an existing record…', ml: 'നിലവിലുള്ള രേഖ തിരയുന്നു…' },
    login_both_needed: {
      en: 'Both a name and a roll number are needed — together they are the key.',
      ml: 'പേരും റോൾ നമ്പറും രണ്ടും വേണം — രണ്ടും ചേർന്നതാണ് താക്കോൽ.'
    },
    login_passkey_title: { en: 'This is a pass key, not a password.', ml: 'ഇത് ഒരു പാസ്‌വേഡല്ല, തിരിച്ചറിയൽ താക്കോൽ മാത്രമാണ്.' },
    login_passkey_desc: {
      en: 'Anyone who knows your name and roll number can open this record. It keeps your work together across devices; it does not protect it.',
      ml: 'നിങ്ങളുടെ പേരും റോൾ നമ്പറും അറിയുന്ന ആർക്കും ഈ രേഖ തുറക്കാം. ഇത് പല ഉപകരണങ്ങളിലെ പഠനം ഒന്നിച്ചു നിർത്തുന്നു; സംരക്ഷിക്കുന്നില്ല.'
    },

    /* ── today ─────────────────────────────────────────────────────────── */
    today_title: { en: 'Today', ml: 'ഇന്ന്' },
    greeting_morning: { en: 'Good morning', ml: 'സുപ്രഭാതം' },
    greeting_day: { en: 'Good afternoon', ml: 'നമസ്കാരം' },
    greeting_evening: { en: 'Good evening', ml: 'ശുഭസായാഹ്നം' },
    plan_title: { en: "Today's plan", ml: 'ഇന്നത്തെ പദ്ധതി' },
    plan_desc: {
      en: 'Built from what is due, what you missed, and what comes next. Do it in this order: recall first, new material last.',
      ml: 'ഇന്ന് ആവർത്തിക്കേണ്ടവ, തെറ്റിയവ, അടുത്തതായി പഠിക്കേണ്ടവ എന്നിവയിൽ നിന്ന് തയ്യാറാക്കിയത്. ഈ ക്രമത്തിൽ ചെയ്യുക: ആദ്യം ഓർമ്മ, അവസാനം പുതിയ പാഠം.'
    },
    plan_review: { en: 'Review what is due', ml: 'ആവർത്തിക്കേണ്ടവ ഓർത്തെടുക്കുക' },
    plan_review_none: { en: 'Nothing is due right now', ml: 'ഇപ്പോൾ ആവർത്തിക്കാൻ ഒന്നുമില്ല' },
    plan_review_detail: { en: 'cards due · spaced retrieval', ml: 'കാർഡുകൾ · ഇടവേളയിട്ട ഓർമ്മ' },
    plan_weak: { en: 'Drill your weak spots', ml: 'ദുർബല ഭാഗങ്ങൾ പരിശീലിക്കുക' },
    plan_weak_detail: { en: 'concepts you keep missing', ml: 'ആവർത്തിച്ച് തെറ്റുന്ന ആശയങ്ങൾ' },
    plan_read: { en: 'Read', ml: 'വായിക്കുക' },
    plan_read_done: { en: 'Every note has been read once', ml: 'എല്ലാ കുറിപ്പുകളും ഒരു തവണ വായിച്ചു' },
    plan_read_detail: { en: 'new today · read, then close the book and state it', ml: 'ഇന്ന് പുതിയത് · വായിച്ച ശേഷം പുസ്തകം അടച്ച് സ്വയം പറയുക' },
    plan_exercise: { en: 'Work the exercise', ml: 'പരിശീലനച്ചോദ്യം ചെയ്യുക' },
    plan_exercise_done: { en: 'Every delivered exercise is worked through', ml: 'ലഭ്യമായ എല്ലാ പരിശീലനച്ചോദ്യങ്ങളും ചെയ്തു' },
    plan_exercise_detail: { en: 'four steps · understand, plan, solve, look back', ml: 'നാല് ഘട്ടം · മനസ്സിലാക്കുക, ആസൂത്രണം, ചെയ്യുക, തിരിഞ്ഞു നോക്കുക' },
    plan_drill: { en: 'Timed drill · mixed chapters', ml: 'സമയബന്ധിത ടെസ്റ്റ് · കലർന്ന അദ്ധ്യായങ്ങൾ' },
    plan_drill_detail: { en: 'questions · exam conditions', ml: 'ചോദ്യങ്ങൾ · പരീക്ഷാ സാഹചര്യം' },
    plan_drill_locked: { en: 'Read a few notes first; the drill draws on what you have met', ml: 'ആദ്യം കുറച്ച് കുറിപ്പുകൾ വായിക്കുക; വായിച്ചവയിൽ നിന്നാണ് ടെസ്റ്റ്' },
    plan_teach: { en: 'Teach it back', ml: 'സ്വന്തം വാക്കുകളിൽ പറയുക' },
    plan_teach_detail: { en: 'explain today\'s note in your own words', ml: 'ഇന്നത്തെ കുറിപ്പ് സ്വന്തം വാക്കുകളിൽ വിശദീകരിക്കുക' },

    goal_title: { en: 'Daily goal', ml: 'ദിവസേനയുള്ള ലക്ഷ്യം' },
    goal_light: { en: 'Light', ml: 'ലഘു' },
    goal_normal: { en: 'Normal', ml: 'സാധാരണ' },
    goal_exam: { en: 'Exam mode', ml: 'പരീക്ഷാ മോഡ്' },
    goal_reviews: { en: 'recall cards', ml: 'ഓർമ്മ കാർഡുകൾ' },
    goal_reads: { en: 'new notes', ml: 'പുതിയ കുറിപ്പുകൾ' },
    goal_exercises: { en: 'exercises', ml: 'പരിശീലനം' },
    goal_questions: { en: 'questions', ml: 'ചോദ്യങ്ങൾ' },
    goal_met: { en: 'Goal met for today', ml: 'ഇന്നത്തെ ലക്ഷ്യം പൂർത്തിയായി' },
    goal_note: {
      en: 'Small and daily beats big and rare. A goal you can hit on a school night is the one that survives March.',
      ml: 'വലിയ ഇടവേളകളേക്കാൾ ചെറിയ ദിവസേനയുള്ള പഠനമാണ് നല്ലത്. സ്കൂൾ ദിവസത്തിലും ചെയ്യാവുന്ന ലക്ഷ്യമാണ് മാർച്ച് വരെ നിലനിൽക്കുക.'
    },
    streak: { en: 'day streak', ml: 'ദിവസ തുടർച്ച' },
    streak_best: { en: 'best', ml: 'ഏറ്റവും മികച്ചത്' },
    streak_none: { en: 'Start a streak today', ml: 'ഇന്ന് തുടർച്ച തുടങ്ങൂ' },
    streak_hint: { en: 'Never miss twice. One card counts.', ml: 'രണ്ട് ദിവസം തുടർച്ചയായി വിടരുത്. ഒരു കാർഡ് മതി.' },

    exam_title: { en: 'SSLC exam', ml: 'എസ്.എസ്.എൽ.സി പരീക്ഷ' },
    exam_days_left: { en: 'days left', ml: 'ദിവസം ബാക്കി' },
    exam_today: { en: 'Exam day', ml: 'പരീക്ഷാ ദിവസം' },
    exam_past: { en: 'Set your next exam date', ml: 'അടുത്ത പരീക്ഷാ തീയതി നൽകുക' },
    exam_set: { en: 'Exam date', ml: 'പരീക്ഷാ തീയതി' },
    exam_paper: { en: 'Maths paper: 80 marks · 2 h 30 min + 15 min cool-off', ml: 'ഗണിതം: 80 മാർക്ക് · 2 മണിക്കൂർ 30 മിനിറ്റ് + 15 മിനിറ്റ് കൂൾ-ഓഫ്' },
    exam_pace: { en: 'Pace: under 2 minutes per mark, then check.', ml: 'വേഗത: ഒരു മാർക്കിന് 2 മിനിറ്റിൽ താഴെ, പിന്നെ പരിശോധന.' },
    exam_per_day: { en: 'notes per day to finish Class 10 once before the exam', ml: 'പരീക്ഷയ്ക്ക് മുൻപ് ക്ലാസ് 10 ഒരു തവണ തീർക്കാൻ ദിവസേന വേണ്ട കുറിപ്പുകൾ' },

    weak_title: { en: 'Weak spots', ml: 'ദുർബല ഭാഗങ്ങൾ' },
    weak_desc: {
      en: 'Concepts you missed most, by first attempts and recent cards. Practise these on purpose; that is what deliberate practice means.',
      ml: 'ആദ്യ ശ്രമങ്ങളിലും അടുത്തിടെയുള്ള കാർഡുകളിലും ഏറ്റവും കൂടുതൽ തെറ്റിയ ആശയങ്ങൾ. ഇവ മനഃപൂർവം പരിശീലിക്കുക.'
    },
    weak_none: { en: 'No weak spots recorded yet. They appear once cards and questions have been attempted.', ml: 'ഇതുവരെ ദുർബല ഭാഗങ്ങൾ രേഖപ്പെടുത്തിയിട്ടില്ല. കാർഡുകളും ചോദ്യങ്ങളും ശ്രമിച്ചാൽ ഇവിടെ വരും.' },
    weak_drill: { en: 'Drill these', ml: 'ഇവ പരിശീലിക്കുക' },
    misses: { en: 'misses', ml: 'തെറ്റുകൾ' },

    mistakes_title: { en: 'Why marks were lost', ml: 'മാർക്ക് നഷ്ടപ്പെട്ടത് എന്തുകൊണ്ട്' },
    mistakes_desc: { en: 'Your own reasons, tagged after each miss. Fix the biggest bar first.', ml: 'ഓരോ തെറ്റിനും ശേഷം നിങ്ങൾ രേഖപ്പെടുത്തിയ കാരണങ്ങൾ. ഏറ്റവും വലിയ ബാർ ആദ്യം ശരിയാക്കുക.' },
    why_careless: { en: 'Careless slip', ml: 'അശ്രദ്ധ' },
    why_formula: { en: 'Forgot the formula', ml: 'സൂത്രവാക്യം മറന്നു' },
    why_method: { en: 'Wrong method', ml: 'തെറ്റായ രീതി' },
    why_misread: { en: 'Misread the question', ml: 'ചോദ്യം തെറ്റായി വായിച്ചു' },
    why_unknown: { en: "Didn't know it", ml: 'അറിയില്ലായിരുന്നു' },
    why_ask: { en: 'Why did this go wrong?', ml: 'ഇത് എന്തുകൊണ്ട് തെറ്റി?' },
    why_saved: { en: 'Noted. It goes into your mistake log.', ml: 'രേഖപ്പെടുത്തി. ഇത് നിങ്ങളുടെ തെറ്റുകളുടെ പട്ടികയിൽ ചേർത്തു.' },
    why_fix_careless: { en: 'Slow down on the last step and re-read the question before you write the answer.', ml: 'അവസാന ഘട്ടത്തിൽ വേഗം കുറയ്ക്കുക; ഉത്തരം എഴുതും മുൻപ് ചോദ്യം ഒരിക്കൽക്കൂടി വായിക്കുക.' },
    why_fix_formula: { en: 'Add the formula to recall. Write it from memory three days running.', ml: 'സൂത്രവാക്യം ഓർമ്മ കാർഡിൽ ചേർക്കുക. മൂന്ന് ദിവസം തുടർച്ചയായി ഓർമ്മയിൽ നിന്ന് എഴുതുക.' },
    why_fix_method: { en: 'Re-read the worked example, then solve a fresh exercise of the same type without looking.', ml: 'മാതൃകാ ഉദാഹരണം വീണ്ടും വായിക്കുക; പിന്നെ അതേ തരത്തിലുള്ള പുതിയ ചോദ്യം നോക്കാതെ ചെയ്യുക.' },
    why_fix_misread: { en: 'Underline what is given and what is asked before you start.', ml: 'തുടങ്ങും മുൻപ് നൽകിയതും ചോദിച്ചതും അടിവരയിടുക.' },
    why_fix_unknown: { en: 'Open the note, read the statement, and do its self-check today.', ml: 'കുറിപ്പ് തുറന്ന് പ്രസ്താവന വായിക്കുക; ഇന്ന് തന്നെ സ്വയം പരിശോധന ചെയ്യുക.' },

    calib_title: { en: 'How well you know what you know', ml: 'അറിയാമെന്ന തോന്നൽ എത്ര ശരിയാണ്' },
    calib_desc: { en: 'You say how sure you are before each answer; the app checks it against what happened.', ml: 'ഓരോ ഉത്തരത്തിനും മുൻപ് നിങ്ങൾ എത്ര ഉറപ്പുണ്ടെന്ന് പറയുന്നു; സംഭവിച്ചതുമായി ആപ്പ് അത് താരതമ്യം ചെയ്യുന്നു.' },
    calib_sure_right: { en: 'sure and right', ml: 'ഉറപ്പുണ്ടായിരുന്നു, ശരിയായി' },
    calib_sure_wrong: { en: 'sure but wrong', ml: 'ഉറപ്പുണ്ടായിരുന്നു, പക്ഷേ തെറ്റി' },
    calib_unsure_right: { en: 'unsure but right', ml: 'ഉറപ്പില്ലായിരുന്നു, പക്ഷേ ശരിയായി' },
    calib_unsure_wrong: { en: 'unsure and wrong', ml: 'ഉറപ്പില്ലായിരുന്നു, തെറ്റി' },
    calib_over: { en: 'You feel surer than your answers are. Trust the test, not the feeling.', ml: 'ഉത്തരങ്ങളേക്കാൾ കൂടുതൽ ഉറപ്പ് നിങ്ങൾക്ക് തോന്നുന്നു. തോന്നലിനെയല്ല, പരിശോധനയെ വിശ്വസിക്കുക.' },
    calib_under: { en: 'You know more than you think. Commit to answers.', ml: 'നിങ്ങൾ കരുതുന്നതിനേക്കാൾ കൂടുതൽ അറിയാം. ഉത്തരങ്ങളിൽ ഉറച്ചു നിൽക്കുക.' },
    calib_good: { en: 'Well calibrated. Your feeling of knowing can be trusted.', ml: 'നല്ല വിലയിരുത്തൽ. അറിയാമെന്ന തോന്നൽ വിശ്വസിക്കാം.' },
    calib_few: { en: 'Rate a few more answers to see the pattern.', ml: 'പാറ്റേൺ കാണാൻ കുറച്ചു കൂടി ഉത്തരങ്ങൾ വിലയിരുത്തുക.' },
    conf_ask: { en: 'How sure are you?', ml: 'എത്ര ഉറപ്പുണ്ട്?' },
    conf_sure: { en: 'Sure', ml: 'ഉറപ്പുണ്ട്' },
    conf_unsure: { en: 'Not sure', ml: 'ഉറപ്പില്ല' },
    conf_none: { en: 'No idea', ml: 'അറിയില്ല' },
    conf_hint: { en: 'Say it before you look. The gap between the two is what you are here to close.', ml: 'നോക്കും മുൻപ് പറയുക. തോന്നലും യാഥാർത്ഥ്യവും തമ്മിലുള്ള അകലം കുറയ്ക്കാനാണ് നിങ്ങൾ ഇവിടെ.' },

    focus_title: { en: 'Focus timer', ml: 'ഫോക്കസ് ടൈമർ' },
    focus_desc: { en: 'One block, one task, phone face down. A short break after; the next block after that.', ml: 'ഒരു ബ്ലോക്ക്, ഒരു ജോലി, ഫോൺ കമിഴ്ത്തി വയ്ക്കുക. ശേഷം ചെറിയ ഇടവേള; പിന്നെ അടുത്ത ബ്ലോക്ക്.' },
    focus_start: { en: 'Start focus', ml: 'ഫോക്കസ് തുടങ്ങുക' },
    focus_break: { en: 'Break', ml: 'ഇടവേള' },
    focus_stop: { en: 'Stop', ml: 'നിർത്തുക' },
    focus_running: { en: 'Focus block running', ml: 'ഫോക്കസ് ബ്ലോക്ക് നടക്കുന്നു' },
    focus_on_break: { en: 'On a break', ml: 'ഇടവേളയിൽ' },
    focus_done: { en: 'Block complete. Take the break.', ml: 'ബ്ലോക്ക് പൂർത്തിയായി. ഇടവേള എടുക്കുക.' },
    focus_today: { en: 'focused today', ml: 'ഇന്ന് ഫോക്കസ് ചെയ്തത്' },
    focus_blocks: { en: 'blocks', ml: 'ബ്ലോക്കുകൾ' },

    stat_read: { en: 'Read', ml: 'വായിച്ചു' },
    stat_recall: { en: 'First-try recall', ml: 'ആദ്യ ശ്രമ ഓർമ്മ' },
    stat_correct: { en: 'First-try correct', ml: 'ആദ്യ ശ്രമം ശരി' },
    stat_exercises: { en: 'Exercises done', ml: 'പരിശീലനം പൂർത്തിയായി' },
    stat_pyq: { en: 'Past papers done', ml: 'മുൻവർഷ ചോദ്യങ്ങൾ' },
    tried: { en: 'tried', ml: 'ശ്രമിച്ചു' },
    locked: { en: 'locked', ml: 'രേഖപ്പെടുത്തി' },

    courses: { en: 'Courses', ml: 'കോഴ്സുകൾ' },
    open_syllabus: { en: 'Open syllabus', ml: 'പാഠ്യപദ്ധതി തുറക്കുക' },
    course_bar_desc: {
      en: 'A course carries the colour of its weakest note. Nothing here is switched on or off — the level is whatever the work says it is.',
      ml: 'ഒരു കോഴ്സിന് അതിലെ ഏറ്റവും ദുർബലമായ കുറിപ്പിന്റെ നിറമാണ്. ഒന്നും സ്വിച്ച് ഓൺ ചെയ്യുന്നില്ല — ചെയ്ത ജോലിയാണ് ലെവൽ തീരുമാനിക്കുന്നത്.'
    },
    colours_meaning: { en: 'What the three colours mean', ml: 'മൂന്ന് നിറങ്ങളുടെ അർത്ഥം' },
    lv1_desc: { en: 'you have read it', ml: 'നിങ്ങൾ വായിച്ചു' },
    lv2_desc: { en: 'every exercise in its section is worked through', ml: 'ആ ഭാഗത്തിലെ എല്ലാ പരിശീലനച്ചോദ്യങ്ങളും ചെയ്തു' },
    lv3_desc: { en: 'the course\'s past papers are worked through', ml: 'കോഴ്സിന്റെ മുൻവർഷ ചോദ്യങ്ങൾ ചെയ്തു' },
    colours_foot: {
      en: 'A chapter or course takes the colour of the weakest item inside it: red once everything is read, amber once every exercise is done, green once the past papers are done too.',
      ml: 'ഒരു അദ്ധ്യായത്തിനോ കോഴ്സിനോ അതിനുള്ളിലെ ഏറ്റവും ദുർബലമായ ഇനത്തിന്റെ നിറമാണ്: എല്ലാം വായിച്ചാൽ ചുവപ്പ്, എല്ലാ പരിശീലനവും ചെയ്താൽ മഞ്ഞ, മുൻവർഷ ചോദ്യങ്ങളും ചെയ്താൽ പച്ച.'
    },
    sync_title: { en: 'Your record · syncing automatically', ml: 'നിങ്ങളുടെ രേഖ · തനിയെ സിങ്ക് ചെയ്യുന്നു' },
    sign_out: { en: 'Sign out', ml: 'പുറത്തുകടക്കുക' },
    method_link: { en: 'How to study each subject', ml: 'ഓരോ വിഷയവും എങ്ങനെ പഠിക്കണം' },
    method_link_sub: { en: 'What the research says, and how this app uses it', ml: 'ഗവേഷണം പറയുന്നത്, ഈ ആപ്പ് അത് എങ്ങനെ ഉപയോഗിക്കുന്നു' },

    /* ── study ─────────────────────────────────────────────────────────── */
    syllabus: { en: 'Syllabus', ml: 'പാഠ്യപദ്ധതി' },
    syllabus_sub: { en: 'Open a chapter, read what is inside it', ml: 'ഒരു അദ്ധ്യായം തുറന്ന് ഉള്ളിലുള്ളത് വായിക്കുക' },
    where_stands: { en: 'Where the syllabus stands', ml: 'പാഠ്യപദ്ധതി എവിടെ നിൽക്കുന്നു' },
    syllabus_foot: {
      en: 'One press on a row marks it read (red). Amber arrives when the section\'s exercises are worked, green when the course\'s past papers are done.',
      ml: 'ഒരു വരിയിൽ ഒരു തവണ അമർത്തിയാൽ വായിച്ചതായി അടയാളപ്പെടുത്തും (ചുവപ്പ്). ഭാഗത്തിലെ പരിശീലനം ചെയ്താൽ മഞ്ഞ, കോഴ്സിന്റെ മുൻവർഷ ചോദ്യങ്ങൾ ചെയ്താൽ പച്ച.'
    },
    levels_reached: { en: 'Levels reached', ml: 'എത്തിയ ലെവലുകൾ' },
    past_papers: { en: 'Past exam papers', ml: 'മുൻവർഷ പരീക്ഷാ ചോദ്യങ്ങൾ' },
    past_papers_lv: { en: 'past papers · level 3', ml: 'മുൻവർഷ ചോദ്യങ്ങൾ · ലെവൽ 3' },
    exercises_worked: { en: 'section exercises worked', ml: 'പരിശീലനച്ചോദ്യങ്ങൾ ചെയ്തു' },
    part: { en: 'Part', ml: 'ഭാഗം' },
    pending: { en: 'pending', ml: 'തയ്യാറായിട്ടില്ല' },
    not_delivered: { en: 'Content has not been delivered yet.', ml: 'പാഠഭാഗങ്ങൾ ഇതുവരെ തയ്യാറായിട്ടില്ല.' },

    level: { en: 'Level', ml: 'ലെവൽ' },
    level_word_0: { en: 'not started', ml: 'തുടങ്ങിയിട്ടില്ല' },
    level_word_1: { en: 'read', ml: 'വായിച്ചു' },
    level_word_2: { en: 'exercises done', ml: 'പരിശീലനം പൂർത്തിയായി' },
    level_word_3: { en: 'past papers done', ml: 'മുൻവർഷ ചോദ്യങ്ങൾ പൂർത്തിയായി' },

    definition: { en: 'Definition', ml: 'നിർവ്വചനം' },
    technique: { en: 'Technique', ml: 'രീതി' },
    theorem: { en: 'Theorem', ml: 'സിദ്ധാന്തം' },
    formula: { en: 'Formula', ml: 'സൂത്രവാക്യം' },
    property: { en: 'Property', ml: 'സവിശേഷത' },
    concept: { en: 'Concept', ml: 'ആശയം' },
    example: { en: 'Example', ml: 'ഉദാഹരണം' },
    rule: { en: 'Rule', ml: 'നിയമം' },
    method: { en: 'Method', ml: 'രീതി' },
    application: { en: 'Application', ml: 'പ്രയോഗം' },
    MCQ: { en: 'MCQ', ml: 'ഒബ്ജക്റ്റീവ്' },
    MSQ: { en: 'MSQ', ml: 'ബഹു-ഉത്തരം' },
    NAT: { en: 'NAT', ml: 'സംഖ്യാ ഉത്തരം' },
    state: { en: 'Statement', ml: 'പ്രസ്താവന' },
    recall: { en: 'Recall', ml: 'ഓർമ്മ' },
    apply: { en: 'Apply', ml: 'പ്രയോഗിക്കുക' },
    trap_kind: { en: 'Trap', ml: 'കെണി' },
    exercise: { en: 'Exercise', ml: 'പരിശീലനം' },

    statement: { en: 'Statement', ml: 'പ്രസ്താവന' },
    what_it_says: { en: 'What it really says', ml: 'ആശയം ലളിതമായി' },
    proof_heading: { en: 'Derivation · why it is true', ml: 'തെളിവ് · എന്തുകൊണ്ട് ശരിയാണ്' },
    proof_sub: { en: 'steps · optional, joins the recall reel once worked', ml: 'ഘട്ടങ്ങൾ · ഐച്ഛികം, ചെയ്താൽ ഓർമ്മ റീലിൽ വരും' },
    proof_strategy: { en: 'Proof strategy', ml: 'തെളിയിക്കുന്ന രീതി' },
    core_rationale: { en: 'Core rationale', ml: 'അടിസ്ഥാന തത്വം' },
    key_idea: { en: 'Key idea', ml: 'പ്രധാന ആശയം' },
    step: { en: 'Step', ml: 'ഘട്ടം' },
    what_means: { en: 'What this really means', ml: 'ഇതിന്റെ ലളിതമായ അർത്ഥം' },
    try_proof_hint: { en: 'Try it first (hint)', ml: 'ആദ്യം സ്വയം ശ്രമിക്കുക (സൂചന)' },
    hide_hint: { en: 'Hide hint', ml: 'സൂചന മറയ്ക്കുക' },
    show_proof: { en: 'Show step-by-step derivation', ml: 'ഘട്ടം ഘട്ടമായുള്ള തെളിവ് കാണുക' },
    hide_proof: { en: 'Hide derivation', ml: 'തെളിവ് മറയ്ക്കുക' },
    mark_complete: { en: 'Mark as complete', ml: 'പൂർത്തിയായതായി അടയാളപ്പെടുത്തുക' },
    complete_undo: { en: 'Completed — undo', ml: 'പൂർത്തിയായി — തിരിച്ചെടുക്കുക' },
    claim_note_proof: { en: 'Claim this only if you produced the argument yourself, not if you read it.', ml: 'സ്വയം ചെയ്തു കണ്ടെത്തിയെങ്കിൽ മാത്രം രേഖപ്പെടുത്തുക; വായിച്ചതിന് അല്ല.' },
    marked_complete: { en: 'Marked complete.', ml: 'പൂർത്തിയായതായി രേഖപ്പെടുത്തി.' },

    route_to_result: { en: 'Route to this result', ml: 'ഈ ആശയത്തിലേക്കുള്ള വഴി' },
    groundwork_read: { en: 'groundwork read', ml: 'അടിസ്ഥാനം വായിച്ചു' },
    not_read_yet: { en: 'not read yet', ml: 'വായിച്ചിട്ടില്ല' },
    you_are_here: { en: 'you are here', ml: 'നിങ്ങൾ ഇവിടെയാണ്' },
    used_later: { en: 'Used later by', ml: 'പിന്നീട് ഉപയോഗിക്കുന്നത്' },
    common_traps: { en: 'Where marks are lost', ml: 'മാർക്ക് നഷ്ടപ്പെടുന്നിടം' },
    self_checks: { en: 'Self-check', ml: 'സ്വയം പരിശോധന' },
    self_check_sub: { en: 'prompts · answer in your head before you reveal', ml: 'ചോദ്യങ്ങൾ · കാണിക്കും മുൻപ് മനസ്സിൽ ഉത്തരം പറയുക' },
    show_answer: { en: 'Show answer', ml: 'ഉത്തരം കാണിക്കുക' },
    hide_answer: { en: 'Hide answer', ml: 'ഉത്തരം മറയ്ക്കുക' },
    show_options: { en: 'Show options', ml: 'ഓപ്ഷനുകൾ കാണിക്കുക' },

    teach_title: { en: 'Teach it back', ml: 'സ്വന്തം വാക്കുകളിൽ പറയുക' },
    teach_sub: { en: 'explain it as if to a friend who missed the class', ml: 'ക്ലാസ് വിട്ടുപോയ ഒരു കൂട്ടുകാരനോട് പറയുന്നതുപോലെ വിശദീകരിക്കുക' },
    teach_p1: { en: 'What is it, in one plain sentence?', ml: 'ഇത് എന്താണ്, ലളിതമായ ഒരു വാക്യത്തിൽ?' },
    teach_p2: { en: 'One example of your own, with numbers.', ml: 'സംഖ്യകളോടെ നിങ്ങളുടെ സ്വന്തം ഒരു ഉദാഹരണം.' },
    teach_p3: { en: 'Where would a classmate go wrong?', ml: 'ഒരു സഹപാഠി എവിടെ തെറ്റിക്കും?' },
    teach_note: { en: 'If you get stuck mid-sentence, that is the gap. Go back to the statement, then try again.', ml: 'വാക്യത്തിനിടയിൽ കുടുങ്ങിയാൽ അതാണ് വിടവ്. പ്രസ്താവനയിലേക്ക് മടങ്ങി വീണ്ടും ശ്രമിക്കുക.' },
    teach_placeholder: { en: 'In my own words…', ml: 'എന്റെ വാക്കുകളിൽ…' },

    write_statement_mem: { en: 'Write the statement from memory', ml: 'ഓർമ്മയിൽ നിന്ന് പ്രസ്താവന എഴുതുക' },
    latex_palette: { en: 'Write and practice the statement', ml: 'പ്രസ്താവന എഴുതി പരിശീലിക്കുക' },
    your_statement_latex: { en: 'Your statement in words', ml: 'നിങ്ങളുടെ വാക്കുകളിൽ പ്രസ്താവന' },
    canonical_statement: { en: 'Textbook statement', ml: 'പാഠപുസ്തക പ്രസ്താവന' },
    compare_canonical: { en: 'Compare with the textbook statement', ml: 'പാഠപുസ്തക പ്രസ്താവനയുമായി താരതമ്യം ചെയ്യുക' },
    write_first_hint: { en: 'Write your version above first. The textbook statement stays hidden until you ask for it.', ml: 'ആദ്യം മുകളിൽ നിങ്ങളുടെ പതിപ്പ് എഴുതുക. ചോദിക്കും വരെ പാഠപുസ്തക പ്രസ്താവന മറഞ്ഞിരിക്കും.' },

    exercises_on_this: { en: 'Exercises on this', ml: 'ഇതിലെ പരിശീലനച്ചോദ്യങ്ങൾ' },
    exercises_sub: { en: 'exercises · completing them is level 2', ml: 'പരിശീലനച്ചോദ്യങ്ങൾ · പൂർത്തിയാക്കിയാൽ ലെവൽ 2' },
    exercises_desc: { en: 'Every exercise in this section has to be worked through before the section turns amber. Work it on paper or in the scratchpad, then mark it complete.', ml: 'ഈ ഭാഗം മഞ്ഞയാകാൻ ഇതിലെ എല്ലാ പരിശീലനച്ചോദ്യങ്ങളും ചെയ്യണം. കടലാസിലോ സ്ക്രാച്ച്പാഡിലോ ചെയ്ത ശേഷം പൂർത്തിയായതായി അടയാളപ്പെടുത്തുക.' },
    sec_exercises_lv: { en: 'exercises · level 2', ml: 'പരിശീലനം · ലെവൽ 2' },
    sec_ready: { en: 'Every exercise in this section is worked through — the section is at level 2.', ml: 'ഈ ഭാഗത്തിലെ എല്ലാ പരിശീലനച്ചോദ്യങ്ങളും പൂർത്തിയായി — ഭാഗം ലെവൽ 2-ൽ.' },
    sec_not_ready: { en: 'The whole section has to be worked through before anything in it turns amber.', ml: 'ഇതിലെ ഏതെങ്കിലും മഞ്ഞയാകാൻ ഭാഗം മുഴുവൻ ചെയ്യണം.' },
    try_hint: { en: 'Work it in four steps', ml: 'നാല് ഘട്ടങ്ങളായി ചെയ്യുക' },
    hide_steps: { en: 'Hide steps', ml: 'ഘട്ടങ്ങൾ മറയ്ക്കുക' },
    approach: { en: 'Approach', ml: 'സമീപനം' },
    trap: { en: 'Trap: ', ml: 'കെണി: ' },
    first_step_clue: { en: 'First step clue: ', ml: 'ആദ്യ ഘട്ട സൂചന: ' },
    scratchpad_proof: { en: 'Scratchpad · draft the argument before you look', ml: 'സ്ക്രാച്ച്പാഡ് · നോക്കും മുൻപ് വാദം എഴുതുക' },
    scratchpad_write: { en: 'Scratchpad · work it here before you look', ml: 'സ്ക്രാച്ച്പാഡ് · നോക്കും മുൻപ് ഇവിടെ ചെയ്യുക' },
    polya_1: { en: 'Understand', ml: 'മനസ്സിലാക്കുക' },
    polya_1_q: { en: 'What is given? What is asked? Say it in your own words. Draw it if it can be drawn.', ml: 'എന്താണ് നൽകിയിരിക്കുന്നത്? എന്താണ് ചോദിക്കുന്നത്? സ്വന്തം വാക്കുകളിൽ പറയുക. വരയ്ക്കാവുന്നതാണെങ്കിൽ വരയ്ക്കുക.' },
    polya_2: { en: 'Plan', ml: 'ആസൂത്രണം' },
    polya_2_q: { en: 'Which result or formula connects the given to the asked? Have you seen a similar problem?', ml: 'നൽകിയതിനെ ചോദിച്ചതുമായി ബന്ധിപ്പിക്കുന്ന ആശയമോ സൂത്രവാക്യമോ ഏത്? സമാനമായ ചോദ്യം മുൻപ് കണ്ടിട്ടുണ്ടോ?' },
    polya_3: { en: 'Solve', ml: 'ചെയ്യുക' },
    polya_3_q: { en: 'Carry the plan out, one line per step. Write the unit with every number.', ml: 'പദ്ധതി ഓരോ ഘട്ടവും ഒരു വരിയായി ചെയ്യുക. ഓരോ സംഖ്യയ്ക്കും യൂണിറ്റ് എഴുതുക.' },
    polya_4: { en: 'Look back', ml: 'തിരിഞ്ഞു നോക്കുക' },
    polya_4_q: { en: 'Is the size of the answer sensible? Does it answer what was asked? Could you do it another way?', ml: 'ഉത്തരത്തിന്റെ വലിപ്പം ന്യായമാണോ? ചോദിച്ചതിന് ഉത്തരമായോ? മറ്റൊരു രീതിയിൽ ചെയ്യാമോ?' },
    polya_note: { en: 'Pólya\'s four steps. Marks in SSLC are given for the steps, so write them.', ml: 'പോളിയയുടെ നാല് ഘട്ടങ്ങൾ. എസ്.എസ്.എൽ.സി-യിൽ ഘട്ടങ്ങൾക്കാണ് മാർക്ക്; അതിനാൽ എഴുതുക.' },

    objective_on_this: { en: 'Objective questions on this', ml: 'ഇതിലെ ഒബ്ജക്റ്റീവ് ചോദ്യങ്ങൾ' },
    select_all_correct: { en: 'Select all correct options', ml: 'ശരിയായ എല്ലാ ഓപ്ഷനുകളും തിരഞ്ഞെടുക്കുക' },
    select_one_option: { en: 'Select one option', ml: 'ഒരു ഓപ്ഷൻ തിരഞ്ഞെടുക്കുക' },
    key: { en: 'key', ml: 'ശരി' },
    yours: { en: 'yours', ml: 'നിങ്ങളുടേത്' },
    lock_answer: { en: 'Lock answer', ml: 'ഉത്തരം ഉറപ്പിക്കുക' },
    lock_selected: { en: 'Lock selected', ml: 'തിരഞ്ഞെടുത്തത് ഉറപ്പിക്കുക' },
    clear: { en: 'Clear', ml: 'മായ്ക്കുക' },
    correct: { en: 'Correct', ml: 'ശരി' },
    not_correct: { en: 'Not correct', ml: 'ശരിയല്ല' },
    partially_correct: { en: 'Partially correct', ml: 'ഭാഗികമായി ശരി' },
    worked_answer: { en: 'Worked answer', ml: 'വിശദമായ ഉത്തരം' },
    what_tests: { en: 'What this actually tests', ml: 'ഇത് യഥാർത്ഥത്തിൽ പരിശോധിക്കുന്നത്' },
    picture_behind: { en: 'The picture behind it', ml: 'ഇതിന് പിന്നിലെ ചിത്രം' },
    the_trap: { en: 'The trap', ml: 'കെണി' },
    first_attempt: { en: 'first attempt', ml: 'ആദ്യ ശ്രമം' },
    not_attempted: { en: 'not attempted', ml: 'ശ്രമിച്ചിട്ടില്ല' },
    marks: { en: 'marks', ml: 'മാർക്ക്' },
    mark: { en: 'mark', ml: 'മാർക്ക്' },
    no_negative: { en: 'no negative marking', ml: 'നെഗറ്റീവ് മാർക്കില്ല' },
    about_min: { en: 'about', ml: 'ഏകദേശം' },

    this_note: { en: 'This note', ml: 'ഈ കുറിപ്പ്' },
    mark_read: { en: 'Mark as read', ml: 'വായിച്ചതായി അടയാളപ്പെടുത്തുക' },
    read_undo: { en: 'Read — undo', ml: 'വായിച്ചു — തിരിച്ചെടുക്കുക' },
    complete_note: { en: 'Complete this note', ml: 'ഈ കുറിപ്പ് പൂർത്തിയാക്കുക' },
    complete_open_next: { en: 'Complete · open ', ml: 'പൂർത്തിയാക്കി തുറക്കുക · ' },
    cascade_title: { en: 'Mark its groundwork as read too?', ml: 'അടിസ്ഥാന ആശയങ്ങളും വായിച്ചതായി അടയാളപ്പെടുത്തണോ?' },
    outside_syllabus: { en: 'outside syllabus', ml: 'പാഠ്യപദ്ധതിക്ക് പുറത്ത്' },
    exercises_owed: { en: 'exercises owed', ml: 'പരിശീലനം ബാക്കി' },
    not_started: { en: 'not started', ml: 'തുടങ്ങിയിട്ടില്ല' },
    read_lc: { en: 'read', ml: 'വായിച്ചു' },
    exercises_lc: { en: 'exercises', ml: 'പരിശീലനം' },
    pyq_lc: { en: 'past papers', ml: 'മുൻവർഷ ചോദ്യങ്ങൾ' },
    section: { en: 'Section', ml: 'ഭാഗം' },
    chapter: { en: 'Chapter', ml: 'അദ്ധ്യായം' },
    course: { en: 'Course', ml: 'കോഴ്സ്' },
    concepts: { en: 'concepts', ml: 'ആശയങ്ങൾ' },
    sections: { en: 'sections', ml: 'ഭാഗങ്ങൾ' },

    /* ── recall ────────────────────────────────────────────────────────── */
    reel: { en: 'Recall', ml: 'ഓർമ്മ' },
    reel_kicker: { en: 'Reel · one swipe, one card', ml: 'റീൽ · ഒരു സ്വൈപ്പ്, ഒരു കാർഡ്' },
    reel_lede: {
      en: 'Only what you have already met. Each card asks first; nothing is revealed until you have attempted it. Cards you miss come back soon, cards you know come back later.',
      ml: 'നിങ്ങൾ ഇതിനകം പഠിച്ചവ മാത്രം. ഓരോ കാർഡും ആദ്യം ചോദിക്കുന്നു; ശ്രമിക്കും വരെ ഒന്നും കാണിക്കില്ല. തെറ്റിയവ ഉടൻ തിരികെ വരും, അറിയാവുന്നവ പിന്നീട്.'
    },
    reel_empty: { en: 'The reel draws on notes you have read, exercises you have worked and questions you have answered — and there are none of those yet.', ml: 'വായിച്ച കുറിപ്പുകൾ, ചെയ്ത പരിശീലനങ്ങൾ, ഉത്തരം നൽകിയ ചോദ്യങ്ങൾ എന്നിവയിൽ നിന്നാണ് റീൽ — ഇതുവരെ ഒന്നും ഇല്ല.' },
    reel_due: { en: 'due now', ml: 'ഇപ്പോൾ ആവർത്തിക്കാൻ' },
    reel_later: { en: 'scheduled later', ml: 'പിന്നീട് വരാനുള്ളവ' },
    reel_mode: { en: 'What to draw', ml: 'എന്ത് എടുക്കണം' },
    everything: { en: 'Everything due', ml: 'ആവർത്തിക്കേണ്ടവയെല്ലാം' },
    not_yet_attempted: { en: 'Not yet attempted', ml: 'ശ്രമിക്കാത്തവ' },
    weak_only: { en: 'Weak spots', ml: 'ദുർബല ഭാഗങ്ങൾ' },
    one_chapter: { en: 'One chapter', ml: 'ഒരു അദ്ധ്യായം' },
    mixed_note: { en: 'Chapters are mixed on purpose. Sorting by chapter feels easier and teaches less; mixing makes you choose the method, which is what the exam asks.', ml: 'അദ്ധ്യായങ്ങൾ മനഃപൂർവം കലർത്തിയിരിക്കുന്നു. അദ്ധ്യായം തിരിച്ചാൽ എളുപ്പമെന്ന് തോന്നും, പക്ഷേ പഠിക്കുന്നത് കുറവ്; കലർത്തുമ്പോൾ രീതി നിങ്ങൾ തിരഞ്ഞെടുക്കണം — പരീക്ഷ ചോദിക്കുന്നത് അതാണ്.' },
    chapter_note: { en: 'One chapter at a time is for the first days after reading it. Switch back to mixed before the week is out.', ml: 'വായിച്ച ആദ്യ ദിവസങ്ങളിൽ ഒരു അദ്ധ്യായം മതി. ആഴ്ച തീരും മുൻപ് കലർന്ന രീതിയിലേക്ക് മാറുക.' },
    stated_it: { en: 'Stated it', ml: 'പറഞ്ഞു' },
    partly: { en: 'Partly', ml: 'ഭാഗികമായി' },
    missed_it: { en: 'Missed it', ml: 'ഓർമ്മവന്നില്ല' },
    next_card: { en: 'Next card', ml: 'അടുത്ത കാർഡ്' },
    open_note: { en: 'Open the note', ml: 'കുറിപ്പ് കാണുക' },
    full_note: { en: 'Full note · ', ml: 'പൂർണ്ണ കുറിപ്പ് · ' },
    canonical: { en: 'Textbook statement', ml: 'പാഠപുസ്തക പ്രസ്താവന' },
    reel_end: { en: 'That is everything due for now. Read something new, or come back tomorrow when the next cards fall due.', ml: 'ഇപ്പോൾ ആവർത്തിക്കേണ്ടവ തീർന്നു. പുതിയത് വായിക്കുക, അല്ലെങ്കിൽ അടുത്ത കാർഡുകൾ വരുന്ന നാളെ തിരിച്ചു വരിക.' },
    reel_end_new: { en: 'Everything in your material has had a first attempt.', ml: 'നിങ്ങളുടെ എല്ലാ പാഠഭാഗങ്ങളും ഒരിക്കലെങ്കിലും ശ്രമിച്ചു കഴിഞ്ഞു.' },
    reel_end_weak: { en: 'No weak-spot cards are due. Good sign.', ml: 'ദുർബല ഭാഗങ്ങളിലെ കാർഡുകൾ ഇപ്പോൾ ആവർത്തിക്കാനില്ല. നല്ല ലക്ഷണം.' },

    /* ── drill ─────────────────────────────────────────────────────────── */
    drill: { en: 'Timed drill', ml: 'സമയബന്ധിത ടെസ്റ്റ്' },
    drill_kicker: { en: 'Exam conditions · mixed chapters', ml: 'പരീക്ഷാ സാഹചര്യം · കലർന്ന അദ്ധ്യായങ്ങൾ' },
    drill_lede: { en: 'A short paper drawn from what you have read, chapters shuffled together, on a clock. The score is not the point; finding out what breaks under time is.', ml: 'വായിച്ചവയിൽ നിന്ന് അദ്ധ്യായങ്ങൾ കലർത്തി, സമയം നോക്കി ഒരു ചെറിയ പേപ്പർ. സ്കോറല്ല കാര്യം; സമയസമ്മർദ്ദത്തിൽ എന്ത് തെറ്റുന്നു എന്ന് കണ്ടെത്തലാണ്.' },
    drill_size: { en: 'Length', ml: 'വലിപ്പം' },
    drill_scope: { en: 'Draw from', ml: 'എടുക്കുന്നത്' },
    drill_scope_read: { en: 'Notes I have read', ml: 'ഞാൻ വായിച്ച കുറിപ്പുകൾ' },
    drill_scope_all: { en: 'Whole syllabus', ml: 'മുഴുവൻ പാഠ്യപദ്ധതി' },
    drill_scope_weak: { en: 'Weak spots', ml: 'ദുർബല ഭാഗങ്ങൾ' },
    drill_course: { en: 'Course', ml: 'കോഴ്സ്' },
    drill_all_courses: { en: 'All classes', ml: 'എല്ലാ ക്ലാസുകളും' },
    drill_start: { en: 'Start the clock', ml: 'സമയം തുടങ്ങുക' },
    drill_none: { en: 'Not enough questions for that choice yet. Read a few more notes or widen the scope.', ml: 'ആ തിരഞ്ഞെടുപ്പിന് മതിയായ ചോദ്യങ്ങളില്ല. കുറച്ചു കൂടി കുറിപ്പുകൾ വായിക്കുക, അല്ലെങ്കിൽ പരിധി വലുതാക്കുക.' },
    drill_question: { en: 'Question', ml: 'ചോദ്യം' },
    drill_time_left: { en: 'left', ml: 'ബാക്കി' },
    drill_time_up: { en: 'Time is up. Lock what you have and see the results.', ml: 'സമയം കഴിഞ്ഞു. ഉള്ളത് ഉറപ്പിച്ച് ഫലം കാണുക.' },
    drill_finish: { en: 'Finish early', ml: 'നേരത്തെ അവസാനിപ്പിക്കുക' },
    drill_results: { en: 'Results', ml: 'ഫലം' },
    drill_score: { en: 'Score', ml: 'സ്കോർ' },
    drill_time: { en: 'Time used', ml: 'ഉപയോഗിച്ച സമയം' },
    drill_per_q: { en: 'per question', ml: 'ഒരു ചോദ്യത്തിന്' },
    drill_by_chapter: { en: 'By chapter', ml: 'അദ്ധ്യായം തിരിച്ച്' },
    drill_review: { en: 'Review these notes next', ml: 'ഈ കുറിപ്പുകൾ അടുത്തതായി പുനഃപരിശോധിക്കുക' },
    drill_again: { en: 'Another drill', ml: 'മറ്റൊരു ടെസ്റ്റ്' },
    drill_unanswered: { en: 'unanswered', ml: 'ഉത്തരം നൽകാത്തവ' },
    drill_first_only: { en: 'Only a question\'s first attempt ever counts in your record; a repeat here is practice.', ml: 'ഒരു ചോദ്യത്തിന്റെ ആദ്യ ശ്രമം മാത്രമേ രേഖയിൽ കണക്കാക്കൂ; ഇവിടെ ആവർത്തിക്കുന്നത് പരിശീലനമാണ്.' },
    questions_lc: { en: 'questions', ml: 'ചോദ്യങ്ങൾ' },

    /* ── method ────────────────────────────────────────────────────────── */
    method_title: { en: 'How to study', ml: 'എങ്ങനെ പഠിക്കണം' },
    method_kicker: { en: 'What the research says', ml: 'ഗവേഷണം പറയുന്നത്' },
    method_lede: { en: 'Everything this app makes you do comes from studies of how people actually remember and solve. Here is the short version, subject by subject.', ml: 'ഈ ആപ്പ് നിങ്ങളെക്കൊണ്ട് ചെയ്യിക്കുന്നതെല്ലാം ആളുകൾ എങ്ങനെ ഓർക്കുന്നു, എങ്ങനെ പ്രശ്നങ്ങൾ ചെയ്യുന്നു എന്ന പഠനങ്ങളിൽ നിന്നാണ്. വിഷയം തിരിച്ചുള്ള ചുരുക്കം ഇതാ.' },
    method_in_app: { en: 'In this app', ml: 'ഈ ആപ്പിൽ' },
    method_source: { en: 'Where it comes from', ml: 'എവിടെ നിന്ന്' },
    method_subjects: { en: 'Subject by subject', ml: 'വിഷയം തിരിച്ച്' },
    method_principles: { en: 'Seven things that work', ml: 'ഫലം നൽകുന്ന ഏഴ് കാര്യങ്ങൾ' },
    method_dont: { en: 'What does not work, though it feels like it does', ml: 'ഫലം നൽകുന്നതായി തോന്നിയാലും നൽകാത്തവ' },
    method_exam_day: { en: 'The exam itself', ml: 'പരീക്ഷാ ദിവസം' }
  };

  function t(key, fallback) {
    const entry = STRINGS[key];
    if (!entry) return fallback !== undefined ? fallback : key;
    return entry[curLang] || entry.en || (fallback !== undefined ? fallback : key);
  }

  function kind(k) {
    if (k === 'trap') return t('trap_kind');
    return t(k, k);
  }

  function levelName(n) {
    return t('level_word_' + (n || 0));
  }

  /* "3 marks" / "3 മാർക്ക്" — Malayalam does not inflect the noun here. */
  function marks(n) {
    if (curLang === 'ml') return n + ' മാർക്ക്';
    return n + ' ' + (n === 1 ? 'mark' : 'marks');
  }

  /* Numbers stay in Latin digits in both languages: the SCERT books do. */
  function count(n, singularKey, pluralKey) {
    return n + ' ' + t(n === 1 ? singularKey : (pluralKey || singularKey));
  }

  return { init, lang, setLang, toggle, pick, t, kind, levelName, marks, count, apply };
})();
