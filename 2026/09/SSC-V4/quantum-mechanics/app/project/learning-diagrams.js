/* Unique, inspected GPT-image diagrams, placed at the exact teaching moment. */
(() => {
  const descriptions = {
    order: ['Order changes the answer', 'A swaps two coordinates. B doubles the first. Starting from (1,0), AB gives (0,2), while BA gives (0,1). Read products from right to left.'],
    projection: ['Subtract the shadow', 'For real teaching vectors ψ = (2,2) and ϕ = (3,0), the projection is (2,0). Subtract it to get χ = (0,2). Its squared length is 4, which cannot be negative.'],
    ladder: ['A lowering matrix in action', 'In the oscillator energy basis, multiply the displayed three-by-three corner by the column for |2⟩. The output is √2 times the column for |1⟩. The full operator is infinite.']
  };
  function figure(key) {
    const [title,caption] = descriptions[key];
    return DOM.el('figure',{class:'fig rendered qm-learning-figure'},[
      DOM.el('div',{class:'kicker',text:title}),
      DOM.el('img',{class:'fig-img',src:DIAGRAM_BASE+'generated/matrix-'+key+'.png',alt:caption,loading:'lazy'}),
      DOM.el('figcaption',{text:caption})
    ]);
  }
  const previous = PROJECT.hooks.noteSim;
  PROJECT.hooks.noteSim = c => {
    const guide = previous?.(c);
    if (c.id === 'c.3.3.1') { const node = DOM.el('div',{}); if (guide) node.append(guide); node.append(figure('order')); return node; }
    return guide;
  };
  const previousRung = PROJECT.hooks.rungFig;
  PROJECT.hooks.rungFig = (r,c,i) => {
    if (c.id === 'c.3.1.3' && i === 0) return figure('projection');
    if (c.id === 'c.4.1.3' && i === 1) return figure('ladder');
    return previousRung?.(r,c,i);
  };
})();
