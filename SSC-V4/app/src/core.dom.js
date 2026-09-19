/* ══════════════════════════════════════════════════════════════════════════
   DOM + routing primitives. No framework: every view returns a real element.
   ══════════════════════════════════════════════════════════════════════════ */

const DOM = (function () {

  const HTML_TAG_NAMES = 'p|b|i|u|strong|em|code|ul|ol|li|br|hr|table|tr|td|th|tbody|thead|h[1-6]|blockquote|pre|small|sub|sup|div|span|a|button|nav|svg|path|circle';
  const VALID_HTML_TAG_RE = new RegExp('</?(?:' + HTML_TAG_NAMES + ')(?=[\\s/>])[^>]*>', 'gi');

  /* Protect mathematical inequalities (e.g. $x<y$, $u-\\varepsilon<s_\\varepsilon$, 1/n < x)
     so the browser HTML parser does not mistake "<" for an opening HTML tag. */
  function sanitizeMathHtml(s) {
    if (typeof s !== 'string' || s.indexOf('<') === -1) return s;
    const tags = [];
    const masked = s.replace(VALID_HTML_TAG_RE, function (match) {
      tags.push(match);
      return '\x00TAG' + (tags.length - 1) + '\x00';
    });
    const safe = masked.replace(/</g, '&lt;');
    return safe.replace(/\x00TAG(\d+)\x00/g, function (_, idx) {
      return tags[parseInt(idx, 10)];
    });
  }

  /* Turn concept IDs like <code>c.2.3.1</code>, $c.3.4.2$, or raw c.2.3.1 references into
     clickable links labeled with their section number and concept name. */
  function linkifyConcepts(s) {
    if (typeof s !== 'string') return s;
    if (s.indexOf('<code>') === -1 && s.indexOf('$c.') === -1 && s.indexOf('c.') === -1 && s.indexOf('s.') === -1) return s;
    const re = /<code>(c\.[0-9]+[a-z0-9.]*|s\.[a-z0-9-]+)<\/code>|\$((?:c\.[0-9]+[a-z0-9.]*|s\.[a-z0-9-]+))\$|(?<=[\s(])(c\.[0-9]+\.[0-9]+[a-z0-9.]*)(?=[\s.,;:)])/g;
    return s.replace(re, function (match, g1, g2, g3) {
      const id = g1 || g2 || g3;
      const c = (typeof Pool !== 'undefined' && Pool.concept) ? Pool.concept(id) : null;
      if (!c) return match;
      const cleanTitle = (c.title || id).split(';')[0].trim();
      const label = c.sec ? ('§' + c.sec + ' ' + cleanTitle) : cleanTitle;
      const secTitle = (c.sec && typeof Pool.sectionTitle === 'function') ? Pool.sectionTitle(c.sec) : null;
      const fullDesc = (secTitle ? ('Section ' + c.sec + ': ' + secTitle + ' — ') : '') + (c.title || id);
      const escTitle = fullDesc.replace(/"/g, '&quot;');
      return '<a class="concept-ref" href="#/note/' + id + '" title="' + escTitle + '">' + label + '</a>';
    });
  }

  /* el('div', {class, text, html, on:{click}, ...attrs}, children) */
  function el(tag, attrs, kids) {
    const node = document.createElement(tag);
    if (attrs) for (const k in attrs) {
      const v = attrs[k];
      if (v == null || v === false) continue;
      if (k === 'class') node.className = v;
      else if (k === 'text') node.textContent = v;
      else if (k === 'html') node.innerHTML = sanitizeMathHtml(linkifyConcepts(v));            /* authored content only */
      else if (k === 'on') for (const ev in v) node.addEventListener(ev, v[ev]);
      else if (k === 'style' && typeof v === 'object') Object.assign(node.style, v);
      else node.setAttribute(k, v === true ? '' : v);
    }
    add(node, kids);
    return node;
  }

  function add(node, kids) {
    if (kids == null || kids === false) return node;
    if (Array.isArray(kids)) { kids.forEach(k => add(node, k)); return node; }
    node.appendChild(kids instanceof Node ? kids : document.createTextNode(String(kids)));
    return node;
  }

  function clear(node) { while (node.firstChild) node.removeChild(node.firstChild); return node; }

  /* polite screen-reader announcements (route changes, verdicts, saves) */
  function announce(msg) {
    const live = document.getElementById('live');
    if (!live) return;
    live.textContent = '';
    window.setTimeout(() => { live.textContent = msg; }, 30);
  }

  /* ── icons ───────────────────────────────────────────────────────────────
     Material Symbols, as a ligature font. Emoji used to stand in for icons
     here (💡, 👁, ⚠, ✓) and they were the wrong tool twice over: every
     platform draws them differently, and they ignore the theme — a yellow
     bulb on a dark card is not a design, it is a default. A ligature glyph
     inherits colour and size from its parent like any other text.

     `mi('bolt')` renders the icon named `bolt`. `mi('bolt', 'fill')` renders
     its filled variant. Names come from fonts.google.com/icons. */
  function mi(name, cls) {
    return el('span', {
      class: 'mi' + (cls ? ' ' + cls : ''), 'aria-hidden': 'true', translate: 'no', text: name
    });
  }

  /* A handful of shapes are still hand-drawn SVG, because they are figures
     rather than icons: the tree chevron animates its own rotation and has to
     line up with a text baseline at three different sizes. */
  const ICONS = {
    chev: 'M9 5l7 7-7 7'
  };
  function icon(name, size, cls) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('aria-hidden', 'true');
    if (cls) svg.setAttribute('class', cls);
    if (size) {
      svg.setAttribute('width', size);
      svg.setAttribute('height', size);
      svg.setAttribute('fill', 'none');
      svg.setAttribute('stroke', 'currentColor');
      svg.setAttribute('stroke-width', '1.7');
      svg.setAttribute('stroke-linecap', 'round');
      svg.setAttribute('stroke-linejoin', 'round');
    }
    const p = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    p.setAttribute('d', ICONS[name] || '');
    svg.appendChild(p);
    return svg;
  }

  function debounce(fn, ms) {
    let t = 0;
    return function () {
      const a = arguments, self = this;
      window.clearTimeout(t);
      t = window.setTimeout(() => fn.apply(self, a), ms);
    };
  }

  const plural = (n, one, many) => n === 1 ? one : (many || one + 's');
  const pct = (a, b) => b ? Math.round(100 * a / b) : 0;

  const reduced = () => !!(window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  /* entrance animation, staggered by position — set --i, the CSS does the rest */
  function stagger(node, cls) {
    if (!node) return node;
    node.classList.add(cls || 'stagger');
    Array.prototype.forEach.call(node.children, function (kid, i) {
      kid.style.setProperty('--i', Math.min(i, 12));
    });
    return node;
  }

  /* SVG element builder — figures are hand-drawn, so this stays tiny */
  const NS = 'http://www.w3.org/2000/svg';
  function svg(tag, attrs, kids) {
    const node = document.createElementNS(NS, tag);
    if (attrs) for (const k in attrs) {
      const v = attrs[k];
      if (v == null || v === false) continue;
      if (k === 'text') node.textContent = v;
      else node.setAttribute(k, v === true ? '' : v);
    }
    if (kids) (Array.isArray(kids) ? kids : [kids]).forEach(function (kid) {
      if (kid) node.appendChild(kid);
    });
    return node;
  }

  return { el, add, clear, announce, icon, mi, debounce, plural, pct, reduced, stagger, svg };
})();

/* ── hash router ─────────────────────────────────────────────────────────── */
const Router = (function () {
  let handler = null;
  /* How many route changes this visit has made. `history.back()` is only worth
     offering while there is somewhere of ours to go back TO — otherwise the
     browser walks out of the app entirely, which is not what a back button
     inside a toolbar is understood to mean. */
  let depth = 0;

  function current() {
    const raw = (location.hash || '').replace(/^#\/?/, '');
    const [p, q] = raw.split('?');
    const parts = p.split('/').filter(Boolean).map(decodeURIComponent);
    const query = {};
    new URLSearchParams(q || '').forEach((v, k) => { query[k] = v; });
    return { name: parts[0] || 'home', args: parts.slice(1), query, raw: p };
  }

  function start(fn) {
    handler = fn;
    window.addEventListener('hashchange', function () {
      depth += 1;
      handler(current());
      listeners.forEach(function (f) { try { f(current()); } catch (e) { /* never break a route */ } });
    });
    handler(current());
  }

  const listeners = [];
  const onRoute = fn => listeners.push(fn);

  /* One step back through OUR history, or home when there is none. */
  function back() {
    if (depth > 0) { depth -= 2; window.history.back(); return true; }
    if (current().name !== 'home') { go('home'); return true; }
    return false;
  }
  const canBack = () => depth > 0 || current().name !== 'home';

  const go = hash => { location.hash = hash.charAt(0) === '#' ? hash : '#/' + hash.replace(/^\//, ''); };
  const href = hash => '#/' + String(hash).replace(/^\//, '');
  const reload = () => handler && handler(current());

  return { current, start, go, href, reload, back, canBack, onRoute };
})();
