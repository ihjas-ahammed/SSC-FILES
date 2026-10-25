/* Definitions are authored in data.json. This only links matching prose at runtime. */
(function () {
  var SM = window.SM;
  SM.initGlossary = function () {
    var entries = SM.data.glossary || [], byId = {}, names = {}, panel = SM.$('termDefinition');
    if (!entries.length || !panel) return;
    entries.forEach(function (entry) {
      byId[entry.id] = entry;
      [entry.term].concat(entry.aliases || []).forEach(function (name) { names[name.toLowerCase()] = entry.id; });
    });
    var alternatives = Object.keys(names).sort(function (a, b) { return b.length - a.length; })
      .map(function (s) { return s.replace(/[\\^$.*+?()[\]{}|]/g, '\\$&'); });
    var pattern = new RegExp('(^|[^\\p{L}\\p{N}_])(' + alternatives.join('|') + ')(?![\\p{L}\\p{N}_])', 'giu');
    var blocked = 'button,a,input,textarea,select,code,script,style,svg,mjx-container,.math,.card-index,.mf-phases,.omr-options,.mf-ask-opts,.order-list,[data-no-glossary]';
    var active = null, history = [];

    function linkText(node, exclude) {
      if (!node.parentElement || node.parentElement.closest(blocked)) return;
      var card = node.parentElement.closest('[data-card]'), content = card && card._c;
      var definedHere = content ? (content.defines || []).concat(content.type === 'intuition' ? [content.term] : []) : [];
      if (content && content.title) {
        var title = content.title.toLowerCase().replace(/^the\s+/, '');
        if (names[title]) definedHere.push(names[title]);
        if (/^what (?:is|are)\b/.test(title)) {
          pattern.lastIndex = 0;
          var headingMatch;
          while ((headingMatch = pattern.exec(title))) definedHere.push(names[headingMatch[2].toLowerCase()]);
        }
      }
      var original = node.nodeValue, changed = false, fragment = document.createDocumentFragment();
      original.split(/(\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\])/g).forEach(function (chunk) {
        if (/^\\[([]/.test(chunk)) { fragment.appendChild(document.createTextNode(chunk)); return; }
        pattern.lastIndex = 0;
        var at = 0, m;
        while ((m = pattern.exec(chunk))) {
          var id = names[m[2].toLowerCase()];
          if (id === exclude || definedHere.indexOf(id) !== -1) continue;
          var start = m.index + m[1].length;
          fragment.appendChild(document.createTextNode(chunk.slice(at, start)));
          var button = document.createElement('a');
          button.href = '#termDefinition'; button.className = 'term-link'; button.dataset.term = id;
          button.textContent = m[2]; button.setAttribute('aria-controls', 'termDefinition');
          button.setAttribute('aria-expanded', 'false'); button.setAttribute('aria-haspopup', 'dialog');
          fragment.appendChild(button); at = start + m[2].length; changed = true;
        }
        fragment.appendChild(document.createTextNode(chunk.slice(at)));
      });
      if (changed) node.replaceWith(fragment);
    }
    function link(root, exclude) {
      if (root.nodeType === Node.TEXT_NODE) { linkText(root, exclude); return; }
      if (root.nodeType !== Node.ELEMENT_NODE || root.closest(blocked)) return;
      var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT), nodes = [], node;
      while ((node = walker.nextNode())) nodes.push(node);
      nodes.forEach(function (n) { linkText(n, exclude); });
    }
    function position() {
      if (!active || panel.hidden) return;
      var r = active.getBoundingClientRect(), w = panel.offsetWidth, h = panel.offsetHeight;
      var left = Math.max(10, Math.min(innerWidth - w - 10, r.left + r.width / 2 - w / 2));
      var top = r.bottom + 9;
      if (top + h > innerHeight - 10) top = Math.max(10, r.top - h - 9);
      panel.style.left = left + 'px'; panel.style.top = top + 'px';
    }
    function fill(id) {
      var entry = byId[id];
      SM.$('termTitle').textContent = entry.term;
      SM.$('termMeaning').textContent = entry.definition;
      var example = SM.$('termExample'); example.hidden = !entry.example;
      example.textContent = entry.example || '';
      SM.$('termBack').hidden = history.length === 0;
      link(SM.$('termMeaning'), id); if (entry.example) link(example, id);
      position();
    }
    function close(restoreFocus) {
      panel.hidden = true;
      if (active) { active.setAttribute('aria-expanded', 'false'); active.removeAttribute('aria-describedby'); }
      var previous = active; active = null; history = [];
      if (restoreFocus && previous && previous.isConnected) {
        previous.focus({ preventScroll: true });
      }
    }
    function open(button) {
      if (panel.contains(button)) {
        history.push(SM.$('termTitle').dataset.id);
        SM.$('termTitle').dataset.id = button.dataset.term; fill(button.dataset.term); return;
      }
      if (active === button) { close(); return; }
      close(); active = button; panel.hidden = false;
      active.setAttribute('aria-expanded', 'true'); active.setAttribute('aria-describedby', 'termMeaning');
      SM.$('termTitle').dataset.id = button.dataset.term; fill(button.dataset.term);
    }
    document.addEventListener('click', function (e) {
      var button = e.target.closest('.term-link');
      if (button) { e.preventDefault(); e.stopPropagation(); open(button); }
      else if (!panel.contains(e.target)) close();
    });
    SM.$('termClose').addEventListener('click', function () { close(true); });
    SM.$('termBack').addEventListener('click', function () {
      var id = history.pop(); if (id) { SM.$('termTitle').dataset.id = id; fill(id); }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !panel.hidden) { e.preventDefault(); e.stopImmediatePropagation(); close(true); }
    }, true);
    SM.$('shelf').addEventListener('scroll', function () { if (active) close(); }, { passive: true });
    window.addEventListener('resize', position);
    link(SM.$('shelf'));
    new MutationObserver(function (records) {
      records.forEach(function (r) {
        if (r.type === 'characterData') link(r.target);
        else r.addedNodes.forEach(function (node) { link(node); });
      });
    }).observe(SM.$('shelf'), { childList: true, characterData: true, subtree: true });
    SM.closeDefinition = close;
  };
})();
