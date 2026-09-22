/* ══════════════════════════════════════════════════════════════════════════
   `#/note/<id>` — kept, and no longer a page.

   The note is a component now (comp.note.js) that opens inside the syllabus
   tree. But `#/note/<id>` is written into hundreds of places: every
   prerequisite path, every "used later by" chip, and every concept reference
   `DOM.linkifyConcepts` finds in authored prose. Breaking them would mean
   rewriting content to fix navigation, which is backwards.

   So the route survives as a jump: open the path down to that concept and
   hand over to Study, which lands on it. One scroll, one screen, and every
   old link still means what it said.
   ══════════════════════════════════════════════════════════════════════════ */

const ViewNote = (function () {

  const el = DOM.el;

  function render(args) {
    const isMl = typeof I18N !== 'undefined' && I18N.lang() === 'ml';
    const id = args && args[0];
    if (!Pool.concept(id)) {
      return el('div', { class: 'stack' }, [
        UI.title(isMl ? 'കണ്ടെത്താനായില്ല' : 'Not found'),
        UI.empty(isMl ? 'ഈ ആശയം ലഭ്യമായ പാഠ്യപദ്ധതിയിലില്ല.' : 'That concept is not in the loaded pool.',
          el('a', { class: 'btn', href: Router.href('study'), text: isMl ? 'പാഠ്യപദ്ധതിയിലേക്ക് മടങ്ങുക' : 'Back to the syllabus' }))
      ]);
    }
    Tree.revealPath(id);
    return ViewStudy.render([]);
  }

  return { render, afterPaint: () => Tree.scrollToOpen(), keepScroll: true };
})();
