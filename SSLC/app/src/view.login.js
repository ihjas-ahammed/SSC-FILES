/* ══════════════════════════════════════════════════════════════════════════
   Sign in.

   The app does not open until there is a name and a roll number, because
   those two are the key the record is stored and merged under. A progress
   record that starts anonymous and is claimed later cannot be merged honestly
   — you would have to guess which device's history was whose.

   Be straight about what this is: it is a PASS KEY, not a password. Anyone who
   knows both halves can open this record. It exists so your work follows you
   between a phone and a laptop without an account to create, and the screen
   says exactly that rather than dressing it up as security.
   ══════════════════════════════════════════════════════════════════════════ */

const Login = (function () {

  const el = DOM.el;
  let lastHost = null;
  let lastOnDone = null;
  let cachedValues = { name: '', roll: '', course: null, showSync: false };

  function remount() {
    if (lastHost && lastOnDone) {
      const focused = document.activeElement;
      const id = focused && focused.id;
      const start = focused && focused.selectionStart;
      const end = focused && focused.selectionEnd;
      DOM.clear(lastHost);
      mount(lastHost, lastOnDone);
      const next = id && document.getElementById(id);
      if (next) {
        next.focus({ preventScroll: true });
        if (next.setSelectionRange && start != null) next.setSelectionRange(start, end);
      }
    }
  }

  function mount(host, onDone) {
    lastHost = host;
    lastOnDone = onDone;
    const isMl = (typeof I18N !== 'undefined') && I18N.lang() === 'ml';

    let selectedCourse = cachedValues.course || (Store.selectedCourse ? Store.selectedCourse() : 'm10');
    let showSyncForm = cachedValues.showSync || false;

    const nameIn = el('input', {
      class: 'tin', type: 'text', id: 'login-name', autocomplete: 'name',
      placeholder: isMl ? 'നിങ്ങളുടെ പേര് (ആവശ്യമെങ്കിൽ)' : 'Your name (optional)',
      spellcheck: 'false', enterkeyhint: 'go'
    });
    nameIn.value = cachedValues.name || Store.displayName() || '';
    nameIn.addEventListener('input', () => { cachedValues.name = nameIn.value; });

    const rollIn = el('input', {
      class: 'tin', type: 'text', id: 'login-roll', autocomplete: 'off',
      placeholder: isMl ? 'റോൾ നമ്പർ' : 'Roll Number',
      spellcheck: 'false', enterkeyhint: 'go'
    });
    rollIn.value = cachedValues.roll || Store.identity().roll || '';
    rollIn.addEventListener('input', () => { cachedValues.roll = rollIn.value; });

    const note = el('p', { class: 'small muted', style: { margin: '8px 0 0' } });

    // Language pills
    const langRow = el('div', { class: 'btn-row', style: { margin: '0 0 16px', gap: '8px' } }, [
      el('button', {
        class: 'btn' + (!isMl ? ' primary' : ''), type: 'button',
        text: 'English',
        on: { click: () => { if (isMl) I18N.setLang('en'); } }
      }),
      el('button', {
        class: 'btn' + (isMl ? ' primary' : ''), type: 'button',
        text: 'മലയാളം',
        on: { click: () => { if (!isMl) I18N.setLang('ml'); } }
      })
    ]);

    // Class selection chips
    const classContainer = el('div', { class: 'btn-row', style: { gap: '8px', margin: '6px 0 16px' } });
    const classes = Pool.courses().filter(c => !c.pending).map(c => ({ id: c.id, label: c.title }));

    function paintClassButtons() {
      DOM.clear(classContainer);
      classes.forEach(c => {
        const active = selectedCourse === c.id;
        const b = el('button', {
          class: 'btn' + (active ? ' primary' : ''), type: 'button',
          style: { flex: '1 1 auto', minHeight: '44px' },
          text: c.label,
          on: { click: () => {
            selectedCourse = c.id;
            cachedValues.course = c.id;
            if (Store.setSelectedCourse) Store.setSelectedCourse(c.id);
            paintClassButtons();
          } }
        });
        classContainer.appendChild(b);
      });
    }
    paintClassButtons();

    // Start learning directly button
    const startBtn = el('button', {
      class: 'btn primary lg', type: 'button',
      style: { width: '100%', minHeight: '48px', fontSize: '1.05rem', margin: '10px 0 4px' },
      text: isMl ? 'പഠനം തുടങ്ങാം' : 'Start learning',
      on: { click: () => {
        if (Store.setSelectedCourse) Store.setSelectedCourse(selectedCourse);
        if (Store.setDisplayName && nameIn.value.trim()) Store.setDisplayName(nameIn.value.trim());
        if (Store.setOnboarded) Store.setOnboarded(true);
        onDone({ ok: true });
      } }
    });

    // Remote sync section
    const syncCard = el('div', { class: 'card', style: { marginTop: '12px', display: showSyncForm ? 'block' : 'none' } });
    const syncKeyLine = el('p', { class: 'small mono', style: { margin: '8px 0 0', color: 'var(--ink-3)' } });
    function paintSyncKey() {
      const k = Sync.keyFor(nameIn.value, rollIn.value);
      syncKeyLine.textContent = k ? 'sync: ' + k : '';
    }
    nameIn.addEventListener('input', paintSyncKey);
    rollIn.addEventListener('input', paintSyncKey);
    paintSyncKey();

    const syncSubmitBtn = el('button', {
      class: 'btn primary', type: 'button',
      style: { minHeight: '44px', width: '100%', marginTop: '8px' },
      text: isMl ? 'സമന്വയിപ്പിച്ച റെക്കോർഡ് തുറക്കുക' : 'Open synced record',
      on: { click: () => {
        const name = nameIn.value.trim(), roll = rollIn.value.trim();
        if (!name || !roll) {
          note.textContent = isMl ? 'പേരും റോൾ നമ്പറും ആവശ്യമാണ്.' : 'Both name and roll number are needed to sync.';
          (name ? rollIn : nameIn).focus();
          return;
        }
        if (!Sync.keyFor(name, roll)) {
          note.textContent = isMl ? 'പേരിലും റോൾ നമ്പറിലും അക്ഷരങ്ങളോ അക്കങ്ങളോ വേണം.' : 'Use letters or numbers in both the name and roll number.';
          return;
        }
        syncSubmitBtn.disabled = true;
        note.textContent = isMl ? 'റെക്കോർഡ് പരിശോധിക്കുന്നു…' : 'Checking record…';
        Store.signIn(name, roll);
        Sync.hello().then(r => {
          note.textContent = r.msg || '';
          onDone(r);
        }, () => {
          onDone({ ok: false, offline: true });
        });
      } }
    });

    DOM.add(syncCard, [
      el('div', { class: 'kicker', text: isMl ? 'മൾട്ടി-ഡിവൈസ് സമന്വയം' : 'Multi-device sync' }),
      el('p', { class: 'small muted', text: isMl
        ? 'പേരും റോൾ നമ്പറും നൽകി മുൻപ് സൂക്ഷിച്ച രേഖ തുറക്കാം.'
        : 'Enter your name and roll number to sync with another phone or laptop.' }),
      el('p', { class: 'small', text: isMl
        ? 'മുകളിൽ നൽകിയ പേരാണ് ഉപയോഗിക്കുന്നത്. പേരും റോൾ നമ്പറും അറിയുന്ന ആർക്കും ഈ രേഖ കാണാനും മാറ്റാനും കഴിയും. ഇത് ഒരു പാസ്‌വേഡ് അല്ല.'
        : 'Uses the name entered above. Anyone who knows that name and roll number can read and change this record. They are not a password.' }),
      el('label', { class: 'kicker', for: 'login-roll', text: isMl ? 'റോൾ നമ്പർ' : 'Roll number' }),
      el('div', { style: { margin: '4px 0 6px' } }, [rollIn]),
      syncKeyLine,
      syncSubmitBtn,
      note
    ]);

    const toggleSyncLink = el('button', {
      class: 'btn link', type: 'button',
      style: { width: '100%', textAlign: 'center', marginTop: '12px', fontSize: '0.9rem' },
      text: showSyncForm
        ? (isMl ? '▲ സമന്വയ ഫോം മറയ്ക്കുക' : '▲ Hide sync sign-in')
        : (isMl ? '▼ മറ്റൊരു ഉപകരണത്തിലെ രേഖ തുറക്കണോ? സമന്വയം' : '▼ Restore synced record from another device'),
      on: { click: () => {
        showSyncForm = !showSyncForm;
        cachedValues.showSync = showSyncForm;
        syncCard.style.display = showSyncForm ? 'block' : 'none';
        toggleSyncLink.textContent = showSyncForm
          ? (isMl ? '▲ സമന്വയ ഫോം മറയ്ക്കുക' : '▲ Hide sync sign-in')
          : (isMl ? '▼ മറ്റൊരു ഉപകരണത്തിലെ രേഖ തുറക്കണോ? സമന്വയം' : '▼ Restore synced record from another device');
      } }
    });

    const wrap = el('div', { class: 'wrap view-in' }, [
      el('div', { class: 'stack', style: { gap: '14px', maxWidth: '440px', margin: '0 auto' } }, [
        el('div', {}, [
          el('div', { class: 'kicker', text: isMl ? 'കേരള എസ്.സി.ഇ.ആർ.ടി ഗണിതം' : 'Kerala SCERT Mathematics' }),
          el('h1', { tabindex: '-1', id: 'pagetitle', text: isMl ? 'പഠനം ആരംഭിക്കാം' : 'Welcome to SSLC Maths' })
        ]),
        el('p', { class: 'lede', text: isMl
          ? 'ലളിതമായി ആശയങ്ങൾ മനസ്സിലാക്കി സ്വന്തമായി ഗണിതം ചെയ്തു പഠിക്കാം.'
          : 'Understand concepts clearly, solve problems with progressive hints, and retain mastery.' }),
        langRow,
        el('div', { class: 'card' }, [
          el('label', { class: 'kicker', text: isMl ? 'ക്ലാസ് തിരഞ്ഞെടുക്കുക' : 'Select your class' }),
          classContainer,
          el('label', { class: 'kicker', for: 'login-name', text: isMl ? 'നിങ്ങളുടെ പേര് (ആവശ്യമെങ്കിൽ)' : 'Your name (optional)' }),
          el('div', { style: { margin: '6px 0 10px' } }, [nameIn]),
          startBtn,
          el('p', { class: 'small muted', style: { margin: '6px 0 0', textAlign: 'center' },
            text: isMl ? 'രേഖകൾ നിങ്ങളുടെ ഫോണിൽ സുരക്ഷിതമായിരിക്കും.' : 'Your progress is saved right here on this device.' })
        ]),
        toggleSyncLink,
        syncCard
      ])
    ]);

    host.appendChild(wrap);
  }

  return { mount, remount };
})();
