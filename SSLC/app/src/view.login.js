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

  function mount(host, onDone) {
    const namePh = (typeof I18N !== 'undefined') ? I18N.t('login_name_ph') : 'e.g. Student Name';
    const rollPh = (typeof I18N !== 'undefined') ? I18N.t('login_roll_ph') : 'e.g. Roll Number';

    const nameIn = el('input', {
      class: 'tin', type: 'text', id: 'login-name', autocomplete: 'name',
      placeholder: namePh, spellcheck: 'false', enterkeyhint: 'next'
    });
    const rollIn = el('input', {
      class: 'tin', type: 'text', id: 'login-roll', autocomplete: 'off',
      placeholder: rollPh, spellcheck: 'false', enterkeyhint: 'go'
    });

    const known = Store.identity();
    nameIn.value = known.name || '';
    rollIn.value = known.roll || '';

    const note = el('p', { class: 'small muted', style: { margin: '10px 0 0' } });
    const go = el('button', {
      class: 'btn primary', type: 'submit',
      text: (typeof I18N !== 'undefined') ? I18N.t('login_submit') : 'Open my study record'
    });

    const keyLine = el('p', { class: 'small mono', style: { margin: '8px 0 0', color: 'var(--ink-3)' } });
    function paintKey() {
      const k = Sync.keyFor(nameIn.value, rollIn.value);
      keyLine.textContent = k ? 'record: ' + k : '';
    }
    nameIn.addEventListener('input', paintKey);
    rollIn.addEventListener('input', paintKey);
    paintKey();

    let busy = false;
    function submit(e) {
      if (e) e.preventDefault();
      if (busy) return;
      const name = nameIn.value.trim(), roll = rollIn.value.trim();
      if (!name || !roll) {
        note.textContent = (typeof I18N !== 'undefined')
          ? I18N.t('login_both_needed')
          : 'Both a name and a roll number are needed — together they are the key.';
        (name ? rollIn : nameIn).focus();
        return;
      }
      busy = true;
      go.disabled = true;
      go.textContent = (typeof I18N !== 'undefined') ? I18N.t('login_opening') : 'Opening…';
      note.textContent = (typeof I18N !== 'undefined') ? I18N.t('login_looking') : 'Looking for an existing record…';

      Store.signIn(name, roll);
      Sync.hello().then(function (r) {
        note.textContent = r.msg || '';
        onDone(r);
      }, function () {
        /* offline is not a reason to lock someone out of their own device */
        note.textContent = '';
        onDone({ ok: false, offline: true });
      });
    }

    const kickerText = (typeof I18N !== 'undefined') ? I18N.t('login_kicker') : 'Class 8 Mathematics · Math Base';
    const titleText = (typeof I18N !== 'undefined') ? I18N.t('login_title') : 'Sign in to your record';
    const ledeText = (typeof I18N !== 'undefined') ? I18N.t('login_lede') : 'Your name and roll number are the key your progress is stored under.';
    const nameLabel = (typeof I18N !== 'undefined') ? I18N.t('login_name') : 'Name';
    const rollLabel = (typeof I18N !== 'undefined') ? I18N.t('login_roll') : 'Roll number';
    const passkeyTitle = (typeof I18N !== 'undefined') ? I18N.t('login_passkey_title') : 'This is a pass key, not a password.';
    const passkeyDesc = (typeof I18N !== 'undefined') ? I18N.t('login_passkey_desc') : 'Anyone who knows your name and roll number can open this record.';

    const form = el('form', { class: 'stack', style: { gap: '14px' }, on: { submit: submit } }, [
      el('div', {}, [
        el('div', { class: 'kicker', text: kickerText }),
        el('h1', { tabindex: '-1', id: 'pagetitle', text: titleText })
      ]),
      el('p', { class: 'lede', text: ledeText }),
      el('div', { class: 'card' }, [
        el('label', { class: 'kicker', for: 'login-name', text: nameLabel }),
        el('div', { style: { margin: '6px 0 14px' } }, [nameIn]),
        el('label', { class: 'kicker', for: 'login-roll', text: rollLabel }),
        el('div', { style: { margin: '6px 0 0' } }, [rollIn]),
        keyLine
      ]),
      el('div', { class: 'btn-row' }, [go]),
      note,
      el('div', { class: 'banner' }, [
        DOM.mi('info'),
        el('span', {}, [
          el('b', { text: passkeyTitle + ' ' }),
          el('span', { text: passkeyDesc })
        ])
      ]),
      Pool.isMock() ? el('p', { class: 'small muted', style: { margin: 0 },
        text: 'Test build: records here are kept in a separate store from the real app, so nothing you do can reach it.' }) : null
    ]);

    nameIn.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') { e.preventDefault(); rollIn.focus(); }
    });

    host.appendChild(el('div', { class: 'wrap view-in' }, [form]));
    (nameIn.value ? rollIn : nameIn).focus();
  }

  return { mount };
})();
