/* ══════════════════════════════════════════════════════════════════════════
   Theorem writing.

   The target is named but its statement is withheld: you write first, then
   compare. The canonical statement is behind a gate for the same reason the
   flashcard answer is — reading a statement is not writing one.
   ══════════════════════════════════════════════════════════════════════════ */

const ViewWrite = (function () {

  const el = DOM.el;

  function picker() {
    const targets = Pool.concepts();
    return el('div', { class: 'stack' }, [
      UI.title('Write a statement', 'LaTeX, with the palette beside you'),
      el('p', { class: 'lede small' },
        ['Pick what to write from memory. You type the maths fragment only — the palette offers ' +
         'exactly the commands that statement needs, and the rendering appears under the input.']),
      el('div', { class: 'list' }, targets.map(function (c) {
        const has = !!Store.draft(c.id);
        return el('a', { class: 'item', href: Router.href('write/' + c.id) }, [
          el('span', { class: 'ix' + (has ? ' ok' : ''), text: has ? '✎' : '·' }),
          el('span', { class: 'tt' }, [
            el('b', { text: c.title }),
            el('span', { text: '§' + c.sec + ' · ' + c.kind + (has ? ' · draft saved' : '') })
          ]),
          el('span', { class: 'go', 'aria-hidden': 'true', text: '›' })
        ]);
      }))
    ]);
  }

  function workspace(c) {
    const root = el('div', { class: 'stack' });
    const boxHost = el('div', { class: 'card' });
    const compareHost = el('div', {});

    const wb = WriteBox.mount(boxHost, { concept: c, label: 'Your statement, in LaTeX' });

    function compare() {
      DOM.clear(compareHost);
      compareHost.appendChild(el('div', { class: 'reveal' }, [
        el('div', { class: 'h' }, [el('span', { text: 'Canonical statement' })]),
        el('div', { class: 'b' }, [
          UI.prose(c.statement, 'tight'),
          el('p', { class: 'small muted', style: { margin: '12px 0 0' },
            text: 'Compare the quantifiers and the hypotheses first — that is where written answers lose marks, ' +
              'not in the algebra.' }),
          el('div', { class: 'btn-row', style: { marginTop: '12px' } }, [
            el('a', { class: 'btn', href: Router.href('note/' + c.id), text: 'Open the full note' }),
            el('a', { class: 'btn', href: Router.href('recall?from=' + encodeURIComponent(c.id)),
              text: 'Grade it as recall' })
          ])
        ])
      ]));
      UI.math(compareHost);
      DOM.announce('Canonical statement revealed.');
    }

    const gate = UI.gate({
      hint: 'Write your version above first. The canonical statement stays hidden until you ask for it.',
      actions: [
        { label: 'Compare with the canonical statement', primary: true, onClick: function () {
            if (!wb.hasContent() &&
              !window.confirm('Nothing is written yet. Reveal the statement anyway?')) return;
            compare();
          } }
      ]
    });

    DOM.add(root, [
      UI.crumb([{ text: 'Write', href: 'write' }, { text: '§' + c.sec }]),
      el('div', {}, [
        el('div', { class: 'row', style: { marginBottom: '8px' } }, [UI.kindBadge(c), UI.doneBadge(c.id)]),
        UI.title(c.title, 'Write the statement of')
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
