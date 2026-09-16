/* ══════════════════════════════════════════════════════════════════════════
   DOM + routing primitives. No framework: every view returns a real element.
   ══════════════════════════════════════════════════════════════════════════ */

const DOM = (function () {

  /* el('div', {class, text, html, on:{click}, ...attrs}, children) */
  function el(tag, attrs, kids) {
    const node = document.createElement(tag);
    if (attrs) for (const k in attrs) {
      const v = attrs[k];
      if (v == null || v === false) continue;
      if (k === 'class') node.className = v;
      else if (k === 'text') node.textContent = v;
      else if (k === 'html') node.innerHTML = v;            /* authored content only */
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

  const ICONS = {
    today: 'M4 13h6V4H4v9Zm0 7h6v-5H4v5Zm10 0h6V11h-6v9Zm0-16v5h6V4h-6Z',
    study: 'M4 5.5A2.5 2.5 0 0 1 6.5 3H19v15H6.5A2.5 2.5 0 0 0 4 20.5v-15Zm0 15A2.5 2.5 0 0 1 6.5 18H19v3H6.5A2.5 2.5 0 0 0 4 20.5Z',
    recall: 'M7 4h10a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm2 16h10M9 9h6M9 12.5h4',
    omr: 'M5 4h14v16H5zM8.5 8.5h.01M8.5 12h.01M8.5 15.5h.01M12 8.5h4M12 12h4M12 15.5h4',
    write: 'M4 20h4l10-10a2.5 2.5 0 0 0-3.5-3.5L4.5 16.5 4 20Zm9.5-13 3.5 3.5',
    info: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 5.1h.01M12 11.4v5.2',
    chev: 'M9 5l7 7-7 7',
    theme: 'M12 3v18a9 9 0 0 0 0-18Zm0 0a9 9 0 0 0 0 18'
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

  return { el, add, clear, announce, icon, debounce, plural, pct, reduced, stagger, svg };
})();

/* ── hash router ─────────────────────────────────────────────────────────── */
const Router = (function () {
  let handler = null;

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
    window.addEventListener('hashchange', () => handler(current()));
    handler(current());
  }

  const go = hash => { location.hash = hash.charAt(0) === '#' ? hash : '#/' + hash.replace(/^\//, ''); };
  const href = hash => '#/' + String(hash).replace(/^\//, '');
  const reload = () => handler && handler(current());

  return { current, start, go, href, reload };
})();
