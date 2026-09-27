/* ══════════════════════════════════════════════════════════════════════════
   How to study — the research behind the app, and how each subject is best
   learned.

   Every claim here has a source, and the sources are the ones the learning
   science literature keeps coming back to: the Dunlosky review of ten study
   techniques, the retrieval-practice studies of Roediger and Karpicke, the
   spacing meta-analysis of Cepeda, Rohrer's interleaving experiments, Chi on
   self-explanation, Ericsson on deliberate practice, and the books that made
   them usable — "Make It Stick", "A Mind for Numbers", "How to Solve It",
   "Peak", "Atomic Habits", "Why Don't Students Like School?".

   The page is content, not chrome, so it is written here in both languages
   rather than in the string table. LEARNING_SCIENCE.md at the project root
   has the full bibliography.
   ══════════════════════════════════════════════════════════════════════════ */

const ViewMethod = (function () {

  const el = DOM.el;
  const t = k => I18N.t(k);
  const P = (n) => I18N.pick(n);

  const PRINCIPLES = [
    {
      icon: 'replay',
      title: { en: 'Test yourself instead of re-reading', ml: 'വീണ്ടും വായിക്കുന്നതിന് പകരം സ്വയം പരിശോധിക്കുക' },
      what: {
        en: 'Pulling an answer out of memory strengthens it far more than reading it again. In Roediger and Karpicke\'s 2006 experiments, students who tested themselves remembered about 50% more a week later than students who re-read the same material, even though the re-readers felt more confident.',
        ml: 'ഓർമ്മയിൽ നിന്ന് ഉത്തരം എടുക്കുന്നത് വീണ്ടും വായിക്കുന്നതിനേക്കാൾ വളരെയധികം ഓർമ്മയെ ബലപ്പെടുത്തുന്നു. റോഡിഗറും കാർപിക്കും 2006-ൽ നടത്തിയ പരീക്ഷണങ്ങളിൽ, സ്വയം പരിശോധിച്ച വിദ്യാർത്ഥികൾ ഒരാഴ്ച കഴിഞ്ഞ് ഏകദേശം 50% കൂടുതൽ ഓർത്തു — വീണ്ടും വായിച്ചവർക്ക് കൂടുതൽ ആത്മവിശ്വാസം തോന്നിയിട്ടും.'
      },
      source: 'Roediger & Karpicke 2006; Karpicke & Blunt 2011; Brown, Roediger & McDaniel, "Make It Stick" (2014)',
      app: { en: 'The Recall reel, the self-check under every note, and the rule that nothing is revealed before an attempt.', ml: 'ഓർമ്മ റീൽ, ഓരോ കുറിപ്പിന് താഴെയുള്ള സ്വയം പരിശോധന, ശ്രമിക്കും മുൻപ് ഒന്നും കാണിക്കില്ല എന്ന നിയമം.' }
    },
    {
      icon: 'schedule',
      title: { en: 'Space it out', ml: 'ഇടവേളയിട്ട് ആവർത്തിക്കുക' },
      what: {
        en: 'Memory fades on a curve, and each review just before you would have forgotten pushes the next forgetting further away. Cepeda\'s 2006 review of 254 studies found spaced study beats the same time spent in one sitting in almost every case. Ten minutes a day for a month beats five hours the night before.',
        ml: 'ഓർമ്മ ഒരു വക്രരേഖ പോലെ മങ്ങുന്നു; മറക്കാൻ തുടങ്ങുന്നതിന് തൊട്ടുമുൻപുള്ള ഓരോ ആവർത്തനവും അടുത്ത മറവിയെ കൂടുതൽ ദൂരേക്ക് തള്ളുന്നു. 254 പഠനങ്ങൾ പരിശോധിച്ച സെപെഡയുടെ 2006-ലെ അവലോകനത്തിൽ, ഒറ്റയിരിപ്പിൽ പഠിക്കുന്നതിനേക്കാൾ ഇടവേളയിട്ട പഠനം മിക്കവാറും എല്ലായ്പ്പോഴും മികച്ചതായി. ഒരു മാസം ദിവസേന പത്ത് മിനിറ്റ്, തലേദിവസം അഞ്ച് മണിക്കൂറിനേക്കാൾ നല്ലത്.'
      },
      source: 'Ebbinghaus 1885; Cepeda et al. 2006; Leitner 1972',
      app: { en: 'Each card sits in a Leitner box. Get it right and it comes back later (1 hour, 1 day, 3 days, a week, three weeks); miss it and it comes back soon. Today\'s plan opens with what is due.', ml: 'ഓരോ കാർഡും ഒരു ലൈറ്റ്നർ പെട്ടിയിലാണ്. ശരിയായാൽ പിന്നീട് വരും (1 മണിക്കൂർ, 1 ദിവസം, 3 ദിവസം, ഒരാഴ്ച, മൂന്നാഴ്ച); തെറ്റിയാൽ ഉടൻ വരും. ഇന്നത്തെ പദ്ധതി ആവർത്തിക്കേണ്ടവയോടെ തുടങ്ങുന്നു.' }
    },
    {
      icon: 'shuffle',
      title: { en: 'Mix the chapters', ml: 'അദ്ധ്യായങ്ങൾ കലർത്തുക' },
      what: {
        en: 'Practising one type of problem at a time feels smooth and teaches less. Rohrer and Taylor found that students who mixed problem types scored more than twice as high on a later test as students who did the same problems in blocks, because mixing forces you to decide WHICH method fits, and the exam never tells you.',
        ml: 'ഒരു തരം ചോദ്യം മാത്രം തുടർച്ചയായി ചെയ്യുന്നത് സുഗമമെന്ന് തോന്നും, പക്ഷേ പഠിക്കുന്നത് കുറവ്. റോററും ടെയ്‌ലറും കണ്ടെത്തിയത്: ചോദ്യ തരങ്ങൾ കലർത്തി പഠിച്ചവർ പിന്നീടുള്ള ടെസ്റ്റിൽ ബ്ലോക്കുകളായി ചെയ്തവരേക്കാൾ ഇരട്ടിയിലധികം സ്കോർ നേടി. കലർത്തുമ്പോൾ ഏത് രീതി വേണമെന്ന് നിങ്ങൾ തീരുമാനിക്കണം — പരീക്ഷ ഒരിക്കലും അത് പറഞ്ഞു തരില്ല.'
      },
      source: 'Rohrer & Taylor 2007; Rohrer, Dedrick & Stershic 2015',
      app: { en: 'The reel shuffles due cards across chapters, and the timed drill draws round-robin from every chapter you have read.', ml: 'റീൽ ആവർത്തിക്കേണ്ട കാർഡുകൾ അദ്ധ്യായങ്ങളിലുടനീളം കലർത്തുന്നു; സമയബന്ധിത ടെസ്റ്റ് വായിച്ച എല്ലാ അദ്ധ്യായങ്ങളിൽ നിന്നും മാറിമാറി എടുക്കുന്നു.' }
    },
    {
      icon: 'record_voice_over',
      title: { en: 'Explain it in your own words', ml: 'സ്വന്തം വാക്കുകളിൽ വിശദീകരിക്കുക' },
      what: {
        en: 'Students who explain each step to themselves while studying a worked example learn more than students who read it twice (Chi 1994). Feynman put it as a test: if you cannot explain it simply to someone else, you do not understand it yet. The place you get stuck is exactly the gap.',
        ml: 'ഒരു മാതൃകാ ഉദാഹരണം പഠിക്കുമ്പോൾ ഓരോ ഘട്ടവും സ്വയം വിശദീകരിക്കുന്നവർ രണ്ട് തവണ വായിക്കുന്നവരേക്കാൾ കൂടുതൽ പഠിക്കുന്നു (ചി 1994). ഫെയ്ൻമാൻ ഇത് ഒരു പരിശോധനയാക്കി: മറ്റൊരാൾക്ക് ലളിതമായി വിശദീകരിക്കാൻ കഴിയുന്നില്ലെങ്കിൽ നിങ്ങൾക്ക് ഇനിയും മനസ്സിലായിട്ടില്ല. കുടുങ്ങുന്ന സ്ഥലം തന്നെയാണ് വിടവ്.'
      },
      source: 'Chi et al. 1994; Dunlosky et al. 2013 (elaborative interrogation, self-explanation)',
      app: { en: '"Teach it back" under every note: one plain sentence, one example of your own, one place a classmate would slip.', ml: 'ഓരോ കുറിപ്പിന് താഴെയും "സ്വന്തം വാക്കുകളിൽ പറയുക": ഒരു ലളിത വാക്യം, സ്വന്തം ഒരു ഉദാഹരണം, സഹപാഠി തെറ്റിക്കാവുന്ന ഒരിടം.' }
    },
    {
      icon: 'psychology',
      title: { en: 'Check your feeling of knowing', ml: 'അറിയാമെന്ന തോന്നൽ പരിശോധിക്കുക' },
      what: {
        en: 'Fluency is a trap: a page you have read three times FEELS known, and the feeling is wrong often enough to cost marks. The fix is to predict before you check. Learners who rate their confidence and then see the result become better judges of what they actually know, and study the right things.',
        ml: 'സുഗമത ഒരു കെണിയാണ്: മൂന്ന് തവണ വായിച്ച പേജ് അറിയാമെന്ന് തോന്നും; ആ തോന്നൽ മാർക്ക് നഷ്ടപ്പെടുത്താൻ മാത്രം തവണ തെറ്റാണ്. പരിഹാരം: പരിശോധിക്കും മുൻപ് പ്രവചിക്കുക. ആത്മവിശ്വാസം രേഖപ്പെടുത്തി ഫലം കാണുന്നവർ തങ്ങൾക്ക് ശരിക്കും അറിയാവുന്നത് എന്തെന്ന് നന്നായി വിലയിരുത്താൻ പഠിക്കുന്നു, ശരിയായ കാര്യങ്ങൾ പഠിക്കുന്നു.'
      },
      source: 'Koriat & Bjork 2005; Dunlosky & Rawson 2012; Bjork, "desirable difficulties"',
      app: { en: 'Before a card is revealed you say Sure, Not sure or No idea; the Today page shows how often "sure" was right.', ml: 'കാർഡ് കാണിക്കും മുൻപ് നിങ്ങൾ ഉറപ്പുണ്ട്, ഉറപ്പില്ല, അറിയില്ല എന്ന് പറയുന്നു; "ഉറപ്പുണ്ട്" എത്ര തവണ ശരിയായി എന്ന് ഇന്ന് പേജ് കാണിക്കുന്നു.' }
    },
    {
      icon: 'fitness_center',
      title: { en: 'Practise the weak spot on purpose', ml: 'ദുർബല ഭാഗം മനഃപൂർവം പരിശീലിക്കുക' },
      what: {
        en: 'Ericsson\'s studies of experts found that hours alone do not make anyone better; hours aimed at the specific thing you cannot yet do, with feedback, do. And a mistake is only useful once you know why it happened: the maths teacher\'s "mistake notebook" works because it names the reason, not just the wrong answer.',
        ml: 'എറിക്സൺ വിദഗ്ധരെ പഠിച്ചപ്പോൾ കണ്ടത്: വെറും മണിക്കൂറുകൾ ആരെയും മികച്ചതാക്കുന്നില്ല; ഇതുവരെ ചെയ്യാൻ കഴിയാത്ത കൃത്യമായ കാര്യത്തിലേക്ക്, തിരുത്തലോടെ, ലക്ഷ്യമിട്ട മണിക്കൂറുകളാണ് മികച്ചതാക്കുന്നത്. ഒരു തെറ്റ് അത് എന്തുകൊണ്ട് സംഭവിച്ചു എന്ന് അറിഞ്ഞാലേ ഉപകാരപ്പെടൂ: കണക്ക് അധ്യാപകരുടെ "തെറ്റുകളുടെ പുസ്തകം" പ്രവർത്തിക്കുന്നത് കാരണം പേരിട്ടു പറയുന്നതുകൊണ്ടാണ്, തെറ്റായ ഉത്തരം മാത്രം അല്ല.'
      },
      source: 'Ericsson & Pool, "Peak" (2016); Metcalfe 2017, "Learning from errors"',
      app: { en: 'Weak spots are ranked from your misses. After a miss, one tap says why (careless, formula, method, misread, unknown), and Today shows which reason costs most.', ml: 'തെറ്റുകളിൽ നിന്ന് ദുർബല ഭാഗങ്ങൾ റാങ്ക് ചെയ്യുന്നു. തെറ്റിന് ശേഷം ഒരു ടാപ്പിൽ കാരണം പറയാം (അശ്രദ്ധ, സൂത്രവാക്യം, രീതി, തെറ്റായ വായന, അറിയില്ല); ഏത് കാരണം ഏറ്റവും നഷ്ടം വരുത്തുന്നു എന്ന് ഇന്ന് പേജ് കാണിക്കുന്നു.' }
    },
    {
      icon: 'local_fire_department',
      title: { en: 'Small, daily, and in focused blocks', ml: 'ചെറുതായി, ദിവസേന, ഫോക്കസ് ബ്ലോക്കുകളായി' },
      what: {
        en: 'A habit survives on size, not motivation: a goal you can hit on a school night is the one still running in March. Work in short blocks with the phone face down; attention recovers in the break, and the problem you were stuck on often opens up while you are away from it (Oakley calls this the diffuse mode).',
        ml: 'ശീലം നിലനിൽക്കുന്നത് പ്രചോദനം കൊണ്ടല്ല, വലിപ്പം കൊണ്ടാണ്: സ്കൂൾ ദിവസത്തിലും ചെയ്യാവുന്ന ലക്ഷ്യമാണ് മാർച്ചിലും തുടരുക. ഫോൺ കമിഴ്ത്തി വച്ച് ചെറിയ ബ്ലോക്കുകളായി പഠിക്കുക; ഇടവേളയിൽ ശ്രദ്ധ തിരിച്ചു വരും, കുടുങ്ങിയ പ്രശ്നം പലപ്പോഴും അതിൽ നിന്ന് മാറി നിൽക്കുമ്പോൾ തുറന്നു വരും (ഓക്ക്‌ലി ഇതിനെ ഡിഫ്യൂസ് മോഡ് എന്ന് വിളിക്കുന്നു).'
      },
      source: 'Clear, "Atomic Habits" (2018); Cirillo, the Pomodoro technique; Oakley, "A Mind for Numbers" (2014); Newport, "Deep Work" (2016)',
      app: { en: 'A daily goal in three sizes, a streak that forgives one missed day, and a focus timer on the Today page.', ml: 'മൂന്ന് വലിപ്പത്തിലുള്ള ദിവസേന ലക്ഷ്യം, ഒരു ദിവസം വിട്ടാൽ ക്ഷമിക്കുന്ന തുടർച്ച, ഇന്ന് പേജിലെ ഫോക്കസ് ടൈമർ.' }
    }
  ];

  const DONTS = [
    { en: 'Re-reading the chapter. It feels productive because the words look familiar; Dunlosky\'s review rated it among the least useful techniques.', ml: 'അദ്ധ്യായം വീണ്ടും വായിക്കുക. വാക്കുകൾ പരിചിതമായി തോന്നുന്നതിനാൽ ഫലപ്രദമെന്ന് തോന്നും; ഡൺലോസ്കിയുടെ അവലോകനം ഇതിനെ ഏറ്റവും ഉപയോഗം കുറഞ്ഞവയിൽ ഒന്നായി വിലയിരുത്തി.' },
    { en: 'Highlighting and underlining as the main activity. Marking a sentence is not remembering it.', ml: 'അടിവരയിടലും ഹൈലൈറ്റിംഗും പ്രധാന പ്രവർത്തനമാക്കുക. ഒരു വാക്യം അടയാളപ്പെടുത്തുന്നത് അത് ഓർക്കുന്നതല്ല.' },
    { en: 'Cramming the night before. It works for the morning and is gone by the next unit test; sleep is when memory is consolidated, so a late night costs twice.', ml: 'തലേദിവസം രാത്രി എല്ലാം കുത്തിനിറയ്ക്കുക. അത് പിറ്റേന്ന് രാവിലെ വരെ മാത്രം; ഉറക്കത്തിലാണ് ഓർമ്മ ഉറയ്ക്കുന്നത്, അതിനാൽ വൈകി ഉറങ്ങുന്നത് ഇരട്ടി നഷ്ടം.' },
    { en: 'Doing twenty of the same problem in a row. After the third, you are copying yourself.', ml: 'ഒരേ തരം ഇരുപത് ചോദ്യങ്ങൾ തുടർച്ചയായി ചെയ്യുക. മൂന്നാമത്തേതിന് ശേഷം നിങ്ങൾ സ്വയം പകർത്തുകയാണ്.' },
    { en: 'Reading the solution first "to see how it goes". Once you have seen it, the problem can no longer test you.', ml: '"എങ്ങനെ പോകുന്നു എന്ന് കാണാൻ" ആദ്യം ഉത്തരം വായിക്കുക. ഒരിക്കൽ കണ്ടാൽ ആ ചോദ്യത്തിന് നിങ്ങളെ പരിശോധിക്കാനാവില്ല.' },
    { en: 'Studying with the phone face up. Every notification costs the minutes it takes to get back in.', ml: 'ഫോൺ മലർത്തി വച്ച് പഠിക്കുക. ഓരോ നോട്ടിഫിക്കേഷനും തിരിച്ചു വരാൻ വേണ്ട മിനിറ്റുകൾ നഷ്ടപ്പെടുത്തുന്നു.' }
  ];

  const SUBJECTS = [
    {
      icon: 'functions',
      title: { en: 'Mathematics', ml: 'ഗണിതം' },
      lede: { en: 'Maths is learned by doing problems, not by reading them. Reading a solution and nodding is the most common way to fail a maths exam.', ml: 'ഗണിതം പഠിക്കുന്നത് ചോദ്യങ്ങൾ ചെയ്തുകൊണ്ടാണ്, വായിച്ചുകൊണ്ടല്ല. ഉത്തരം വായിച്ച് തലയാട്ടുന്നതാണ് കണക്ക് പരീക്ഷയിൽ തോൽക്കാനുള്ള ഏറ്റവും സാധാരണ വഴി.' },
      points: [
        { en: 'Work every exercise in four steps: understand, plan, solve, look back (Pólya). The plan step is where marks are won; the look-back step is where careless marks are saved.', ml: 'ഓരോ പരിശീലനവും നാല് ഘട്ടങ്ങളായി ചെയ്യുക: മനസ്സിലാക്കുക, ആസൂത്രണം, ചെയ്യുക, തിരിഞ്ഞു നോക്കുക (പോളിയ). ആസൂത്രണ ഘട്ടത്തിലാണ് മാർക്ക് നേടുന്നത്; തിരിഞ്ഞു നോക്കുന്ന ഘട്ടത്തിലാണ് അശ്രദ്ധ മാർക്ക് രക്ഷിക്കുന്നത്.' },
        { en: 'Study one worked example closely, then close it and do a fresh problem of the same type. Then a different type. Then come back (Sweller, Renkl: worked examples fade into practice).', ml: 'ഒരു മാതൃകാ ഉദാഹരണം സൂക്ഷ്മമായി പഠിക്കുക; പിന്നെ അത് അടച്ച് അതേ തരത്തിലുള്ള പുതിയ ചോദ്യം ചെയ്യുക. പിന്നെ വേറൊരു തരം. പിന്നെ തിരിച്ചു വരിക (സ്വെല്ലർ, റെങ്കൽ: മാതൃകകൾ പരിശീലനത്തിലേക്ക് മാറുന്നു).' },
        { en: 'Keep a mistake log with the reason: careless, formula, method, misread. Re-do every logged problem a week later without looking.', ml: 'കാരണത്തോടെ തെറ്റുകളുടെ പട്ടിക സൂക്ഷിക്കുക: അശ്രദ്ധ, സൂത്രവാക്യം, രീതി, തെറ്റായ വായന. ഓരോ തെറ്റും ഒരാഴ്ച കഴിഞ്ഞ് നോക്കാതെ വീണ്ടും ചെയ്യുക.' },
        { en: 'Formulas are recalled, not read: write them from memory on a blank page, check, repeat tomorrow. In SSLC the formula is the first line of the answer and carries its own mark.', ml: 'സൂത്രവാക്യങ്ങൾ വായിക്കാനുള്ളതല്ല, ഓർത്തെടുക്കാനുള്ളതാണ്: ശൂന്യമായ പേജിൽ ഓർമ്മയിൽ നിന്ന് എഴുതുക, പരിശോധിക്കുക, നാളെ ആവർത്തിക്കുക. എസ്.എസ്.എൽ.സി-യിൽ സൂത്രവാക്യം ഉത്തരത്തിന്റെ ആദ്യ വരിയാണ്; അതിന് സ്വന്തം മാർക്കുണ്ട്.' },
        { en: 'Geometry: draw the figure yourself, every time, with the given marked. Half the geometry marks are for the diagram and the reasons, not the number.', ml: 'ജ്യാമിതി: ഓരോ തവണയും നൽകിയത് അടയാളപ്പെടുത്തി ചിത്രം സ്വയം വരയ്ക്കുക. ജ്യാമിതി മാർക്കിന്റെ പകുതി ചിത്രത്തിനും കാരണങ്ങൾക്കുമാണ്, സംഖ്യയ്ക്കല്ല.' },
        { en: 'Mistakes are how the method gets fixed in memory, not a sign you are bad at maths (Boaler). A wrong answer you understand is worth more than a right one you copied.', ml: 'തെറ്റുകൾ രീതി ഓർമ്മയിൽ ഉറപ്പിക്കുന്ന വഴിയാണ്, കണക്കിൽ മോശമാണെന്നതിന്റെ അടയാളമല്ല (ബോളർ). മനസ്സിലായ തെറ്റായ ഉത്തരം പകർത്തിയ ശരിയായ ഉത്തരത്തേക്കാൾ വിലപ്പെട്ടതാണ്.' }
      ],
      source: 'Pólya, "How to Solve It" (1945); Sweller 1988; Renkl 2014; Boaler, "Mathematical Mindsets" (2016); Oakley, "A Mind for Numbers" (2014)'
    },
    {
      icon: 'bolt',
      title: { en: 'Physics', ml: 'ഭൗതികശാസ്ത്രം' },
      lede: { en: 'Concept first, formula second, numbers last. A formula you cannot say in words will be used in the wrong place.', ml: 'ആദ്യം ആശയം, പിന്നെ സൂത്രവാക്യം, അവസാനം സംഖ്യകൾ. വാക്കുകളിൽ പറയാൻ കഴിയാത്ത സൂത്രവാക്യം തെറ്റായ സ്ഥലത്ത് ഉപയോഗിക്കും.' },
      points: [
        { en: 'For every law, be able to say what each symbol means and what happens to one quantity when another doubles. That sentence is worth more than the formula.', ml: 'ഓരോ നിയമത്തിനും ഓരോ ചിഹ്നത്തിന്റെയും അർത്ഥവും ഒരു അളവ് ഇരട്ടിയായാൽ മറ്റൊന്നിന് എന്ത് സംഭവിക്കുമെന്നും പറയാൻ കഴിയണം. ആ വാക്യം സൂത്രവാക്യത്തേക്കാൾ വിലപ്പെട്ടതാണ്.' },
        { en: 'Draw before you calculate: ray diagrams, circuit diagrams, force arrows. The picture catches the sign error the algebra hides (dual coding: Paivio, Mayer).', ml: 'കണക്കുകൂട്ടും മുൻപ് വരയ്ക്കുക: രശ്മി ചിത്രങ്ങൾ, സർക്യൂട്ട് ചിത്രങ്ങൾ, ബല അമ്പുകൾ. ബീജഗണിതം മറയ്ക്കുന്ന ചിഹ്ന തെറ്റ് ചിത്രം പിടിക്കും (ദ്വിമുഖ കോഡിംഗ്: പൈവിയോ, മേയർ).' },
        { en: 'Write the unit with every number and check that the answer\'s unit is the one asked for. A wrong unit is a method error you can catch in five seconds.', ml: 'ഓരോ സംഖ്യയ്ക്കൊപ്പവും യൂണിറ്റ് എഴുതുക; ഉത്തരത്തിന്റെ യൂണിറ്റ് ചോദിച്ചത് തന്നെയാണോ എന്ന് പരിശോധിക്കുക. തെറ്റായ യൂണിറ്റ് അഞ്ച് സെക്കൻഡിൽ പിടിക്കാവുന്ന രീതി തെറ്റാണ്.' },
        { en: 'Derive each formula once, by hand, from the one before it. You will never again wonder whether it is v = u + at or v = u − at.', ml: 'ഓരോ സൂത്രവാക്യവും ഒരു തവണ കൈകൊണ്ട് മുൻപത്തേതിൽ നിന്ന് വരുത്തിയെടുക്കുക. v = u + at ആണോ v = u − at ആണോ എന്ന് പിന്നെ ഒരിക്കലും സംശയിക്കില്ല.' },
        { en: 'Mix numericals from different chapters in one sitting. The exam does not tell you which chapter a problem belongs to.', ml: 'വ്യത്യസ്ത അദ്ധ്യായങ്ങളിലെ കണക്കുകൾ ഒരേ ഇരിപ്പിൽ കലർത്തി ചെയ്യുക. ചോദ്യം ഏത് അദ്ധ്യായത്തിന്റേതെന്ന് പരീക്ഷ പറയില്ല.' }
      ],
      source: 'Hewitt, "Conceptual Physics"; Mayer, "Multimedia Learning" (2001); Paivio 1971; Sweller 1988'
    },
    {
      icon: 'science',
      title: { en: 'Chemistry', ml: 'രസതന്ത്രം' },
      lede: { en: 'Chemistry has a vocabulary layer (symbols, valencies, names) that must simply be recalled, and a reasoning layer (why reactions go) that must be understood. Use different methods for each.', ml: 'രസതന്ത്രത്തിന് ഓർത്തെടുക്കേണ്ട ഒരു പദാവലി പാളിയും (ചിഹ്നങ്ങൾ, സംയോജകത, പേരുകൾ) മനസ്സിലാക്കേണ്ട ഒരു യുക്തി പാളിയും (പ്രവർത്തനങ്ങൾ എന്തുകൊണ്ട് നടക്കുന്നു) ഉണ്ട്. ഓരോന്നിനും വ്യത്യസ്ത രീതി ഉപയോഗിക്കുക.' },
      points: [
        { en: 'Symbols, valencies and formulae of common compounds go on spaced recall cards. Two minutes a day, not two hours before the exam.', ml: 'ചിഹ്നങ്ങൾ, സംയോജകത, സാധാരണ സംയുക്തങ്ങളുടെ രാസസൂത്രങ്ങൾ ഇടവേളയിട്ട ഓർമ്മ കാർഡുകളിൽ. ദിവസേന രണ്ട് മിനിറ്റ്, പരീക്ഷയ്ക്ക് മുൻപ് രണ്ട് മണിക്കൂറല്ല.' },
        { en: 'Balance equations by doing, not by reading balanced ones. Cover the coefficients and rebuild them.', ml: 'സമവാക്യങ്ങൾ സന്തുലനം ചെയ്യുന്നത് ചെയ്തു പഠിക്കുക, സന്തുലനം ചെയ്തവ വായിച്ചല്ല. ഗുണാങ്കങ്ങൾ മറച്ച് വീണ്ടും ഉണ്ടാക്കുക.' },
        { en: 'Learn each reaction as a story: what goes in, under what condition, what comes out, and what you would SEE. Observation questions are where marks are lost.', ml: 'ഓരോ പ്രവർത്തനവും ഒരു കഥയായി പഠിക്കുക: എന്ത് ചേരുന്നു, ഏത് സാഹചര്യത്തിൽ, എന്ത് പുറത്തുവരുന്നു, നിങ്ങൾ എന്ത് കാണും. നിരീക്ഷണ ചോദ്യങ്ങളിലാണ് മാർക്ക് നഷ്ടപ്പെടുന്നത്.' },
        { en: 'Use the periodic table\'s patterns instead of memorising elements one by one: a group shares behaviour, a period shares a trend.', ml: 'മൂലകങ്ങൾ ഓരോന്നായി കാണാതെ പഠിക്കുന്നതിന് പകരം ആവർത്തനപ്പട്ടികയുടെ ക്രമങ്ങൾ ഉപയോഗിക്കുക: ഒരു ഗ്രൂപ്പിന് ഒരേ സ്വഭാവം, ഒരു പീരിയഡിന് ഒരേ പ്രവണത.' },
        { en: 'Mole and concentration numericals are maths problems: four steps, units on every line.', ml: 'മോൾ, ഗാഢത കണക്കുകൾ ഗണിത ചോദ്യങ്ങളാണ്: നാല് ഘട്ടം, ഓരോ വരിയിലും യൂണിറ്റ്.' }
      ],
      source: 'Dunlosky et al. 2013 (distributed practice for paired associates); Johnstone 1991 on the three levels of chemistry'
    },
    {
      icon: 'biotech',
      title: { en: 'Biology', ml: 'ജീവശാസ്ത്രം' },
      lede: { en: 'Biology is diagrams, processes and names. Draw the diagram from memory, tell the process as a sequence, and put the names on cards.', ml: 'ജീവശാസ്ത്രം ചിത്രങ്ങളും പ്രക്രിയകളും പേരുകളുമാണ്. ചിത്രം ഓർമ്മയിൽ നിന്ന് വരയ്ക്കുക, പ്രക്രിയ ഒരു ക്രമമായി പറയുക, പേരുകൾ കാർഡുകളിലാക്കുക.' },
      points: [
        { en: 'For every labelled diagram in the textbook, draw and label it yourself with the book closed, then compare. Diagram questions are the most predictable marks in the paper.', ml: 'പാഠപുസ്തകത്തിലെ ഓരോ പേരെഴുതിയ ചിത്രവും പുസ്തകം അടച്ച് സ്വയം വരച്ച് പേരെഴുതുക, പിന്നെ താരതമ്യം ചെയ്യുക. ചിത്ര ചോദ്യങ്ങൾ പേപ്പറിലെ ഏറ്റവും പ്രവചിക്കാവുന്ന മാർക്കാണ്.' },
        { en: 'Turn every process (digestion, reflex arc, the nephron) into a numbered sequence you can say aloud in order. Order is what the examiner checks.', ml: 'ഓരോ പ്രക്രിയയും (ദഹനം, റിഫ്ലക്സ് ആർക്ക്, നെഫ്രോൺ) ക്രമത്തിൽ ഉറക്കെ പറയാവുന്ന അക്കമിട്ട ക്രമമാക്കുക. ക്രമമാണ് പരിശോധകൻ നോക്കുന്നത്.' },
        { en: 'Build a concept map per chapter: the big idea in the middle, parts around it, arrows saying how. A map you drew yourself is remembered; one you were given is not (Novak).', ml: 'ഓരോ അദ്ധ്യായത്തിനും ഒരു ആശയ ഭൂപടം ഉണ്ടാക്കുക: നടുവിൽ വലിയ ആശയം, ചുറ്റും ഭാഗങ്ങൾ, എങ്ങനെ എന്ന് പറയുന്ന അമ്പുകൾ. സ്വയം വരച്ച ഭൂപടം ഓർക്കും; തന്നത് ഓർക്കില്ല (നൊവാക്).' },
        { en: 'Terms go on spaced recall cards, in both languages, with the function on the back rather than a definition to memorise.', ml: 'പദങ്ങൾ രണ്ട് ഭാഷയിലും ഇടവേളയിട്ട ഓർമ്മ കാർഡുകളിൽ; പിന്നിൽ കാണാതെ പഠിക്കാനുള്ള നിർവ്വചനത്തിന് പകരം ധർമ്മം.' },
        { en: 'Ask "why" of every fact: why is the alveolus thin, why does the heart have valves. A fact with a reason is stored once; a bare fact must be stored by force.', ml: 'ഓരോ വസ്തുതയോടും "എന്തുകൊണ്ട്" ചോദിക്കുക: അൽവിയോളസ് എന്തുകൊണ്ട് നേർത്തതാണ്, ഹൃദയത്തിന് എന്തുകൊണ്ട് വാൽവുകൾ. കാരണമുള്ള വസ്തുത ഒരു തവണ ഓർമ്മയിൽ ഇരിക്കും; വെറും വസ്തുത ബലമായി അടിച്ചേൽപ്പിക്കണം.' }
      ],
      source: 'Paivio 1971; Mayer 2001; Novak & Cañas 2008; Dunlosky et al. 2013 (elaborative interrogation)'
    },
    {
      icon: 'public',
      title: { en: 'Social Science', ml: 'സാമൂഹ്യശാസ്ത്രം' },
      lede: { en: 'History is a chain of causes, geography is a map, civics and economics are definitions with examples. Study each as the thing it is.', ml: 'ചരിത്രം കാരണങ്ങളുടെ ശൃംഖലയാണ്, ഭൂമിശാസ്ത്രം ഒരു ഭൂപടമാണ്, പൗരശാസ്ത്രവും സാമ്പത്തികശാസ്ത്രവും ഉദാഹരണങ്ങളോടെയുള്ള നിർവ്വചനങ്ങളാണ്. ഓരോന്നും അതെന്താണോ അതായി പഠിക്കുക.' },
      points: [
        { en: 'For history, draw a timeline per chapter and write the cause and effect as arrows between events. The exam asks why, not just when.', ml: 'ചരിത്രത്തിന് ഓരോ അദ്ധ്യായത്തിനും ഒരു കാലരേഖ വരയ്ക്കുക; സംഭവങ്ങൾക്കിടയിൽ കാരണവും ഫലവും അമ്പുകളായി എഴുതുക. പരീക്ഷ ചോദിക്കുന്നത് എന്തുകൊണ്ട് എന്നാണ്, എപ്പോൾ എന്ന് മാത്രമല്ല.' },
        { en: 'For geography, mark the outline map from memory once a week. Map questions are fixed marks that many students leave on the table.', ml: 'ഭൂമിശാസ്ത്രത്തിന് ആഴ്ചയിൽ ഒരിക്കൽ ഓർമ്മയിൽ നിന്ന് ഭൂപടത്തിൽ അടയാളപ്പെടുത്തുക. ഭൂപട ചോദ്യങ്ങൾ പല വിദ്യാർത്ഥികളും വിട്ടുകളയുന്ന ഉറപ്പുള്ള മാർക്കാണ്.' },
        { en: 'Answer in points, each point one idea, and practise writing them under time. A five-mark answer is five reasons, not one paragraph.', ml: 'പോയിന്റുകളായി ഉത്തരം എഴുതുക, ഓരോ പോയിന്റും ഒരു ആശയം; സമയം നോക്കി എഴുതി പരിശീലിക്കുക. അഞ്ച് മാർക്ക് ഉത്തരം അഞ്ച് കാരണങ്ങളാണ്, ഒരു ഖണ്ഡികയല്ല.' },
        { en: 'Put dates, articles and definitions on spaced cards. Put the stories in your own words: memory is built for stories, and a fact inside one sticks (Willingham).', ml: 'തീയതികൾ, അനുച്ഛേദങ്ങൾ, നിർവ്വചനങ്ങൾ ഇടവേളയിട്ട കാർഡുകളിൽ. കഥകൾ സ്വന്തം വാക്കുകളിൽ: ഓർമ്മ കഥകൾക്കായി ഉണ്ടാക്കിയതാണ്, കഥയ്ക്കുള്ളിലെ വസ്തുത നിൽക്കും (വില്ലിംഗ്ഹാം).' }
      ],
      source: 'Willingham, "Why Don\'t Students Like School?" (2009); Dunlosky et al. 2013 (practice testing, distributed practice)'
    },
    {
      icon: 'translate',
      title: { en: 'Languages · Malayalam, English, Hindi', ml: 'ഭാഷകൾ · മലയാളം, ഇംഗ്ലീഷ്, ഹിന്ദി' },
      lede: { en: 'A language is a skill, so it is learned like one: lots of input you mostly understand, and output that someone corrects.', ml: 'ഭാഷ ഒരു നൈപുണ്യമാണ്, അതിനാൽ അങ്ങനെ തന്നെ പഠിക്കണം: മിക്കവാറും മനസ്സിലാകുന്ന ധാരാളം വായന, ആരെങ്കിലും തിരുത്തുന്ന എഴുത്ത്.' },
      points: [
        { en: 'Read a little every day at a level where you understand most of it; look up only the words that block the meaning (Krashen). Reading builds vocabulary faster than lists.', ml: 'മിക്കവാറും മനസ്സിലാകുന്ന നിലയിൽ ദിവസേന കുറച്ച് വായിക്കുക; അർത്ഥം തടയുന്ന വാക്കുകൾ മാത്രം നോക്കുക (ക്രാഷൻ). പട്ടികകളേക്കാൾ വേഗത്തിൽ വായന പദസമ്പത്ത് വളർത്തുന്നു.' },
        { en: 'Know the exam formats cold: letter, notice, speech, character sketch, poem appreciation. Practise each format three times under time, then have it checked.', ml: 'പരീക്ഷാ രൂപങ്ങൾ നന്നായി അറിയുക: കത്ത്, അറിയിപ്പ്, പ്രസംഗം, കഥാപാത്ര നിരൂപണം, കവിതാ ആസ്വാദനം. ഓരോ രൂപവും സമയം നോക്കി മൂന്ന് തവണ പരിശീലിച്ച് പരിശോധിപ്പിക്കുക.' },
        { en: 'After reading a lesson, close the book and tell its story in your own words, aloud. Then check what you left out.', ml: 'ഒരു പാഠം വായിച്ച ശേഷം പുസ്തകം അടച്ച് അതിന്റെ കഥ സ്വന്തം വാക്കുകളിൽ ഉറക്കെ പറയുക. പിന്നെ വിട്ടുപോയത് പരിശോധിക്കുക.' },
        { en: 'New words go on spaced cards with a sentence you wrote, not a dictionary meaning (Nation). A word met in six spaced encounters is yours.', ml: 'പുതിയ വാക്കുകൾ നിഘണ്ടു അർത്ഥത്തിനു പകരം നിങ്ങൾ എഴുതിയ വാക്യത്തോടെ ഇടവേളയിട്ട കാർഡുകളിൽ (നേഷൻ). ആറ് ഇടവേളകളിൽ കണ്ടുമുട്ടിയ വാക്ക് നിങ്ങളുടേതാണ്.' },
        { en: 'Grammar through examples first, rule second: collect three sentences that use the pattern before you read the rule.', ml: 'വ്യാകരണം ആദ്യം ഉദാഹരണങ്ങളിലൂടെ, പിന്നെ നിയമം: നിയമം വായിക്കും മുൻപ് ആ രീതി ഉപയോഗിക്കുന്ന മൂന്ന് വാക്യങ്ങൾ ശേഖരിക്കുക.' }
      ],
      source: 'Krashen, "The Input Hypothesis" (1985); Nation, "Learning Vocabulary in Another Language" (2001); Dunlosky et al. 2013'
    }
  ];

  const EXAM = [
    { en: 'Use the 15-minute cool-off for what it is for: read every question, mark the ones you can do at once, and decide the order. Start with a sure one to settle your hands.', ml: '15 മിനിറ്റ് കൂൾ-ഓഫ് അതിനുള്ളതിന് ഉപയോഗിക്കുക: എല്ലാ ചോദ്യങ്ങളും വായിക്കുക, ഉടൻ ചെയ്യാവുന്നവ അടയാളപ്പെടുത്തുക, ക്രമം തീരുമാനിക്കുക. കൈ ഉറയ്ക്കാൻ ഉറപ്പുള്ള ഒന്നിൽ തുടങ്ങുക.' },
    { en: 'Budget under two minutes per mark: 80 marks in 150 minutes leaves ten minutes to check. A five-mark question that has taken ten minutes should be left and returned to.', ml: 'ഒരു മാർക്കിന് രണ്ട് മിനിറ്റിൽ താഴെ: 150 മിനിറ്റിൽ 80 മാർക്ക് എന്നാൽ പരിശോധിക്കാൻ പത്ത് മിനിറ്റ് ബാക്കി. പത്ത് മിനിറ്റെടുത്ത അഞ്ച് മാർക്ക് ചോദ്യം വിട്ട് പിന്നീട് തിരിച്ചു വരിക.' },
    { en: 'There is no negative marking. Attempt everything; a formula and a first line earn part marks.', ml: 'നെഗറ്റീവ് മാർക്കില്ല. എല്ലാം ശ്രമിക്കുക; ഒരു സൂത്രവാക്യവും ആദ്യ വരിയും ഭാഗിക മാർക്ക് നേടും.' },
    { en: 'Write the steps. Kerala\'s scheme awards marks per step, so a right answer with no working can score less than a wrong answer with the right method.', ml: 'ഘട്ടങ്ങൾ എഴുതുക. കേരളത്തിന്റെ മൂല്യനിർണ്ണയ രീതി ഓരോ ഘട്ടത്തിനും മാർക്ക് നൽകുന്നു; ചെയ്ത വഴി ഇല്ലാത്ത ശരിയായ ഉത്തരത്തിന് ശരിയായ രീതിയുള്ള തെറ്റായ ഉത്തരത്തേക്കാൾ കുറവ് മാർക്ക് കിട്ടാം.' },
    { en: 'The last week is for past papers under the clock, not for new chapters. The last night is for sleep: memory is consolidated while you sleep, and a tired brain misreads questions.', ml: 'അവസാന ആഴ്ച സമയം നോക്കി മുൻവർഷ ചോദ്യപേപ്പറുകൾക്കാണ്, പുതിയ അദ്ധ്യായങ്ങൾക്കല്ല. അവസാന രാത്രി ഉറക്കത്തിനാണ്: ഉറങ്ങുമ്പോഴാണ് ഓർമ്മ ഉറയ്ക്കുന്നത്; ക്ഷീണിച്ച തലച്ചോറ് ചോദ്യങ്ങൾ തെറ്റായി വായിക്കും.' }
  ];

  function principleCard(p, i) {
    return el('div', { class: 'card method-card' }, [
      el('div', { class: 'row', style: { gap: '10px', flexWrap: 'nowrap', alignItems: 'flex-start' } }, [
        el('span', { class: 'method-ix' }, [DOM.mi(p.icon, 'sm')]),
        el('div', { class: 'grow' }, [
          el('h3', { text: (i + 1) + '. ' + P(p.title) }),
          el('p', { class: 'prose tight', style: { margin: '6px 0 0' }, text: P(p.what) })
        ])
      ]),
      el('div', { class: 'method-meta' }, [
        el('div', {}, [el('span', { class: 'kicker', text: t('method_in_app') }), el('p', { class: 'small', style: { margin: '4px 0 0' }, text: P(p.app) })]),
        el('div', {}, [el('span', { class: 'kicker', text: t('method_source') }), el('p', { class: 'small muted', style: { margin: '4px 0 0' }, text: p.source })])
      ])
    ]);
  }

  function subjectCard(s) {
    return NoteBody.expander({
      cls: 'exp-subject',
      mark: el('span', { class: 'ix' }, [DOM.mi(s.icon, 'xs')]),
      title: P(s.title),
      sub: P(s.lede),
      build: function () {
        return [
          el('ul', { class: 'prose tight method-list' }, s.points.map(pt => el('li', { text: P(pt) }))),
          el('p', { class: 'small muted', style: { margin: '10px 0 0' } }, [el('b', { text: t('method_source') + ': ' }), el('span', { text: s.source })])
        ];
      }
    });
  }

  function render() {
    const bp = Study.blueprint();
    return el('div', { class: 'stack' }, [
      UI.crumb([{ text: t('tab_home'), href: 'home' }, { text: t('method_title') }]),
      el('div', {}, [
        el('div', { class: 'kicker', text: t('method_kicker') }),
        el('h1', { tabindex: '-1', id: 'pagetitle', text: t('method_title') })
      ]),
      el('p', { class: 'lede', text: t('method_lede') }),

      el('h2', { text: t('method_principles') }),
      el('div', { class: 'stack', style: { gap: '12px' } }, PRINCIPLES.map(principleCard)),

      el('div', { class: 'card tint' }, [
        el('div', { class: 'kicker', text: t('method_dont') }),
        el('ul', { class: 'prose tight method-list', style: { marginTop: '10px' } }, DONTS.map(d => el('li', { text: P(d) }))),
        el('p', { class: 'small muted', style: { margin: '8px 0 0' }, text: 'Dunlosky, Rawson, Marsh, Nathan & Willingham 2013; Bjork & Bjork 2011; Walker, "Why We Sleep" (2017)' })
      ]),

      el('h2', { text: t('method_subjects') }),
      el('div', { class: 'stack', style: { gap: '10px' } }, SUBJECTS.map(subjectCard)),

      el('div', { class: 'card' }, [
        el('div', { class: 'kicker', text: t('method_exam_day') }),
        el('p', { class: 'small muted', style: { margin: '6px 0 10px' },
          text: t('exam_paper') + ' · ' + bp.sections.map(s => s.count + '×' + s.marks).join(' + ') + ' = ' + bp.marks }),
        el('ul', { class: 'prose tight method-list' }, EXAM.map(x => el('li', { text: P(x) })))
      ]),

      el('div', { class: 'btn-row' }, [
        el('a', { class: 'btn primary', href: Router.href('home'), text: t('tab_home') }),
        el('a', { class: 'btn', href: Router.href('drill'), text: t('drill') })
      ])
    ]);
  }

  return { render, PRINCIPLES, SUBJECTS };
})();
