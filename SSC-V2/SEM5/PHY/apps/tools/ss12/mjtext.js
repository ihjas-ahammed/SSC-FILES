/* ══════════════ MJT — MathJax for every label, in canvas and in SVG ══════════════
   Rule of the page: any text that carries maths is typeset by MathJax, never drawn as
   plain characters. Labels are written with $…$ around the maths, exactly as in the prose:
       'only a $\sim k_BT$ slice around $E_F$'      'T = 0' → '$T=0$'
   Canvas:  MJT.draw(ctx, str, x, y, {color, size, align, base, font, bold})
            MJT.width(ctx, str, opts)            (same layout, no drawing)
   SVG:     MJT.svgLabel(tex, px)  → a nested <svg> (MathJax output) for SVG figures
   HTML:    use $…$ in the string and typeset the element (mj / MathJax.typesetPromise).
   Before MathJax has loaded, maths is not drawn at all (no plain-text stand-in); when it
   arrives every registered figure is redrawn.                                              */
(function () {
  var cache = new Map(), hooks = [], queued = false, readyFired = false;
  function ready() { return !!(window.__mjReady && window.MathJax && window.MathJax.tex2svg); }
  function invalidate() {
    if (queued) return; queued = true;
    requestAnimationFrame(function () { queued = false; hooks.forEach(function (f) { try { f(); } catch (e) {} }); });
  }
  function whenReady() {
    if (readyFired) return;
    if (ready()) { readyFired = true; invalidate(); return; }
    (window.__mjQueue = window.__mjQueue || []).push(function () { readyFired = true; invalidate(); });
  }
  function texSvg(tex) {
    var out = window.MathJax.tex2svg(tex, { display: false });
    return out.querySelector('svg');
  }
  /* metrics from the viewBox: MathJax uses 1000 units per em, baseline at y = 0 */
  function metrics(svg, px) {
    var vb = (svg.getAttribute('viewBox') || '0 0 0 0').trim().split(/[\s,]+/).map(Number);
    return { w: vb[2] / 1000 * px, h: vb[3] / 1000 * px, asc: -vb[1] / 1000 * px };
  }
  function image(tex, color, px) {
    var key = tex + '\u0001' + color + '\u0001' + px;
    var rec = cache.get(key);
    if (rec) return rec;
    if (!ready()) { whenReady(); return null; }
    var svg;
    try { svg = texSvg(tex).cloneNode(true); } catch (e) { return null; }
    var m = metrics(svg, px), k = Math.min(3, Math.max(2, window.devicePixelRatio || 1));
    svg.setAttribute('width', (m.w * k).toFixed(2));
    svg.setAttribute('height', (m.h * k).toFixed(2));
    svg.removeAttribute('style'); svg.removeAttribute('focusable'); svg.removeAttribute('role');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svg.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
    var src = new XMLSerializer().serializeToString(svg).replace(/currentColor/g, color);
    var img = new Image();
    rec = { img: img, w: m.w, h: m.h, asc: m.asc, ok: false };
    img.onload = function () { rec.ok = true; invalidate(); };
    img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(src);
    cache.set(key, rec);
    return rec;
  }
  /* "text $math$ text" → [{t:'text'}, {m:'math'}, …]; a string with no $ is all prose */
  function parts(str) {
    var s = String(str), out = [], re = /\$([^$]+)\$/g, last = 0, m;
    while ((m = re.exec(s))) {
      if (m.index > last) out.push({ t: s.slice(last, m.index) });
      out.push({ m: m[1] });
      last = re.lastIndex;
    }
    if (last < s.length) out.push({ t: s.slice(last) });
    return out;
  }
  function layout(ctx, str, o) {
    o = o || {};
    var size = o.size || 11, font = o.font || "'Fira Mono',monospace";
    ctx.font = (o.bold ? '600 ' : '') + size + 'px ' + font;
    var mpx = size * (o.mscale || 1.12), color = o.color || '#333';
    var segs = parts(str).map(function (p) {
      if (p.t != null) return { t: p.t, w: ctx.measureText(p.t).width };
      var tex = p.m;                     // maths keeps its own weight and italics, even in a bold label
      var r = image(tex, color, mpx);
      return { r: r, w: r ? r.w : p.m.length * size * 0.55 };
    });
    var w = segs.reduce(function (a, s) { return a + s.w; }, 0);
    return { segs: segs, w: w, size: size };
  }
  function draw(ctx, str, x, y, o) {
    o = o || {};
    ctx.save();
    var L = layout(ctx, str, o), size = L.size;
    var x0 = o.align === 'center' ? x - L.w / 2 : o.align === 'right' ? x - L.w : x;
    var b = o.base || 'alphabetic';
    var by = b === 'middle' ? y + size * 0.36 : b === 'top' ? y + size * 0.82 : b === 'bottom' ? y - size * 0.22 : y;
    ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic'; ctx.fillStyle = o.color || '#333';
    L.segs.forEach(function (s) {
      if (s.t != null) {
        if (o.stroke) { ctx.lineWidth = o.stroke.w || 3; ctx.strokeStyle = o.stroke.c; ctx.lineJoin = 'round'; ctx.strokeText(s.t, x0, by); }
        ctx.fillText(s.t, x0, by);
      } else if (s.r && s.r.ok) {
        if (o.stroke) {                          // a soft halo so labels read over lines
          ctx.save(); ctx.shadowColor = o.stroke.c; ctx.shadowBlur = 3;
          ctx.drawImage(s.r.img, x0, by - s.r.asc, s.r.w, s.r.h); ctx.restore();
        }
        ctx.drawImage(s.r.img, x0, by - s.r.asc, s.r.w, s.r.h);
      }
      x0 += s.w;
    });
    ctx.restore();
    return L.w;
  }
  function width(ctx, str, o) { ctx.save(); var w = layout(ctx, str, o).w; ctx.restore(); return w; }

  /* SVG figures: a nested <svg> holding the MathJax output, sized in px, with its box. */
  function svgLabel(tex, px) {
    if (!ready()) { whenReady(); return null; }
    var svg;
    try { svg = texSvg(tex).cloneNode(true); } catch (e) { return null; }
    var m = metrics(svg, px);
    svg.setAttribute('width', m.w.toFixed(2)); svg.setAttribute('height', m.h.toFixed(2));
    svg.removeAttribute('style');
    return { el: svg, w: m.w, h: m.h, asc: m.asc };
  }
  /* "B′", "α_1", "E_d" — short symbolic labels written without $ are taken as maths;
     anything with $…$ keeps its prose parts as \text{}. */
  function labelTex(s) {
    s = String(s);
    if (s.indexOf('$') < 0) return s.replace(/′/g, "'");
    return parts(s).map(function (p) { return p.t != null ? (p.t ? '\\text{' + p.t.replace(/([{}%#&_])/g, '\\$1') + '}' : '') : p.m; }).join('');
  }

  whenReady();
  window.MJT = { draw: draw, width: width, image: image, svgLabel: svgLabel, labelTex: labelTex, parts: parts,
    ready: ready, onRedraw: function (f) { hooks.push(f); }, invalidate: invalidate };
})();
