/* Optional module catalogue. Projects opt in by supplying PROJECT.studyMaps. */
const ViewStudyMap = (function () {
  function render() {
    const el = DOM.el;
    const list = el('ul', { class: 'study-map-list', 'aria-label': 'Study map modules' });
    (PROJECT.studyMaps || []).forEach(function (module) {
      list.appendChild(el('li', {}, [
        el('a', { class: 'study-map-entry', href: module.href }, [
          DOM.mi('hub'),
          el('div', { class: 'study-map-entry-copy' }, [
            el('b', { text: module.title }),
            el('span', { class: 'muted', text: module.description || '' }),
            module.summary ? el('small', { class: 'muted', text: module.summary }) : null
          ]),
          DOM.mi('arrow_forward')
        ])
      ]));
    });
    return el('div', { class: 'stack' }, [
      UI.title('Study Map', PROJECT.name),
      el('p', { class: 'lede', text: 'Choose a module to explore its prerequisites and practise the answer one step at a time.' }),
      list
    ]);
  }
  return { render };
})();
