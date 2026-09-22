/* ══════════════════════════════════════════════════════════════════════════
   Theorem writing.

   The target is named but its statement is withheld: you write first, then
   compare. The canonical statement is behind a gate for the same reason the
   flashcard answer is — reading a statement is not writing one.
   ══════════════════════════════════════════════════════════════════════════ */

const ViewWrite = (function () {

  const el = DOM.el;

  function picker() {
    const isMl = typeof I18N !== 'undefined' && I18N.lang() === 'ml';
    const targets = Pool.concepts();
    return el('div', { class: 'stack' }, [
      UI.title(isMl ? 'പ്രസ്താവന എഴുതുക' : 'Write a statement', isMl ? 'ഗണിത രൂപത്തിൽ എഴുതി നോക്കുക' : 'Write and practice the statement'),
      el('p', { class: 'lede small' },
        [isMl ? 'ഓർമ്മയിൽ നിന്ന് പ്രസ്താവന എഴുതി നോക്കുക.'
              : 'Pick what to write from memory. Type your formulation and compare it with the textbook statement.']),
      el('div', { class: 'list' }, targets.map(function (c) {
        const has = !!Store.draft(c.id);
        const cTitle = typeof I18N !== 'undefined' ? I18N.pick(c, 'title') : c.title;
        const cKind = typeof I18N !== 'undefined' ? I18N.kind(c.kind) : c.kind;
        return el('a', { class: 'item', href: Router.href('write/' + c.id) }, [
          el('span', { class: 'ix' + (has ? ' ok' : '') },
            [DOM.mi(has ? 'edit_note' : 'radio_button_unchecked', 'xs')]),
          el('span', { class: 'tt' }, [
            el('b', { text: cTitle }),
            el('span', { text: '§' + c.sec + ' · ' + cKind + (has ? (isMl ? ' · സേവ് ചെയ്തു' : ' · draft saved') : '') })
          ]),
          el('span', { class: 'go', 'aria-hidden': 'true', text: '›' })
        ]);
      }))
    ]);
  }

  function workspace(c) {
    const isMl = typeof I18N !== 'undefined' && I18N.lang() === 'ml';
    const root = el('div', { class: 'stack' });
    const boxHost = el('div', { class: 'card' });
    const compareHost = el('div', {});

    const wb = WriteBox.mount(boxHost, { concept: c, label: isMl ? 'നിങ്ങൾ ഓർത്തെടുത്ത പ്രസ്താവന' : 'Your statement in words' });

    function compare() {
      DOM.clear(compareHost);
      compareHost.appendChild(el('div', { class: 'reveal' }, [
        el('div', { class: 'h' }, [el('span', { text: isMl ? 'ശരിയായ പ്രസ്താവന' : 'Canonical statement' })]),
        el('div', { class: 'b' }, [
          UI.prose(c.statement, 'tight'),
          el('p', { class: 'small muted', style: { margin: '12px 0 0' },
            text: isMl ? 'നിങ്ങൾ എഴുതിയ പ്രസ്താവനയും ശരിയായ പ്രസ്താവനയും തമ്മിൽ ഒത്തുനോക്കുക.'
                       : 'Compare the quantifiers and the hypotheses first — that is where written answers lose marks, not in the algebra.' }),
          el('div', { class: 'btn-row', style: { marginTop: '12px' } }, [
            el('a', { class: 'btn', href: Router.href('note/' + c.id), text: isMl ? 'പൂർണ്ണ കുറിപ്പ് കാണുക' : 'Open the full note' }),
            el('a', { class: 'btn', href: Router.href('recall?from=' + encodeURIComponent(c.id)),
              text: isMl ? 'ഓർമ്മ പരിശോധിക്കുക' : 'Grade it as recall' })
          ])
        ])
      ]));
      UI.math(compareHost);
      DOM.announce(isMl ? 'ശരിയായ പ്രസ്താവന കാണിച്ചു.' : 'Canonical statement revealed.');
    }

    const gate = UI.gate({
      hint: isMl ? 'ആദ്യം മുകളിൽ എഴുതി ശ്രമിക്കുക. അതിനു ശേഷം ശരിയായ പ്രസ്താവന കാണാം.'
                 : 'Write your version above first. The canonical statement stays hidden until you ask for it.',
      actions: [
        { label: isMl ? 'ശരിയായ പ്രസ്താവനയുമായി ഒത്തുനോക്കുക' : 'Compare with the canonical statement', primary: true, onClick: function () {
            if (!wb.hasContent() &&
              !window.confirm(isMl ? 'ഇതുവരെ ഒന്നും എഴുതിയിട്ടില്ല. പ്രസ്താവന കാണണോ?' : 'Nothing is written yet. Reveal the statement anyway?')) return;
            compare();
          } }
      ]
    });

    const cTitle = typeof I18N !== 'undefined' ? I18N.pick(c, 'title') : c.title;
    DOM.add(root, [
      UI.crumb([{ text: isMl ? 'എഴുതുക' : 'Write', href: 'write' }, { text: '§' + c.sec }]),
      el('div', {}, [
        el('div', { class: 'row', style: { marginBottom: '8px' } }, [UI.kindBadge(c), UI.levelBadge(c.id)]),
        UI.title(cTitle, isMl ? 'ഇതിന്റെ പ്രസ്താവന എഴുതുക: ' : 'Write the statement of')
      ]),
      el('p', { class: 'lede', text: c.oneLine }),
      boxHost,
      gate,
      compareHost
    ]);

    UI.math(root);
    return root;
  }

  function render(args) {
    if (args && args[0]) {
      const c = Pool.concept(args[0]);
      if (c) return workspace(c);
    }
    return picker();
  }

  return { render };
})();
