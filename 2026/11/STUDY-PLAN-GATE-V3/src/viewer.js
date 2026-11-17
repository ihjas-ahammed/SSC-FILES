/* Mobile PDF viewer: PDF.js from cdnjs, lazy page rendering, pinch / button zoom,
   page jump, download, offline copy in Cache Storage. Exposes window.PDFV.open(url, title, opts). */
(function () {
  const PDFJS = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/';
  const PDFLIB = 'https://cdnjs.cloudflare.com/ajax/libs/pdf-lib/1.17.1/pdf-lib.min.js';   // writes the cut-out in the browser
  const CACHE = 'gate-v3-pdf';
  let lib = null, doc = null, cur = { url: '', title: '', bytes: null }, zoom = 1, io = null, renderToken = 0;
  const $ = (s) => document.querySelector(s);

  function loadLib() {
    if (lib) return Promise.resolve(lib);
    return new Promise((res, rej) => {
      const s = document.createElement('script');
      s.src = PDFJS + 'pdf.min.js';
      s.onload = () => { lib = window.pdfjsLib; lib.GlobalWorkerOptions.workerSrc = PDFJS + 'pdf.worker.min.js'; res(lib); };
      s.onerror = () => rej(new Error('Could not load the PDF reader (are you offline?)'));
      document.head.appendChild(s);
    });
  }

  async function getBytes(url, onProgress) {
    try {
      const c = await caches.open(CACHE);
      const hit = await c.match(url);
      if (hit) return { bytes: new Uint8Array(await hit.arrayBuffer()), cached: true };
    } catch (e) { /* no cache storage */ }
    const r = await fetch(url);
    if (!r.ok) throw new Error('Download failed (' + r.status + ')');
    const total = +r.headers.get('content-length') || 0;
    let bytes;
    if (r.body && total && onProgress) {
      const rd = r.body.getReader(); const parts = []; let got = 0;
      for (;;) { const { done, value } = await rd.read(); if (done) break; parts.push(value); got += value.length; onProgress(got / total); }
      bytes = new Uint8Array(got); let o = 0; for (const p of parts) { bytes.set(p, o); o += p.length; }
    } else bytes = new Uint8Array(await r.arrayBuffer());
    try { const c = await caches.open(CACHE); await c.put(url, new Response(bytes.slice(), { headers: { 'content-type': 'application/pdf' } })); } catch (e) {}
    return { bytes, cached: false };
  }

  async function isCached(url) { try { return !!(await (await caches.open(CACHE)).match(url)); } catch (e) { return false; } }
  async function uncache(url) { try { await (await caches.open(CACHE)).delete(url); } catch (e) {} }

  function msg(html) { $('#pv-pages').innerHTML = '<div class="pdfmsg">' + html + '</div>'; }

  function lastPageKey(url) { return 'gv3-page:' + url; }

  async function open(url, title, opts) {
    opts = opts || {};
    const sh = $('#pdf-sheet');
    sh.hidden = false; document.body.style.overflow = 'hidden';
    $('#pv-title').textContent = title || 'PDF';
    $('#pv-count').textContent = '';
    cur = { url, title, bytes: null, range: opts.range || null };
    history.pushState({ sheet: 'pdf' }, '');
    msg('<div class="spinner"></div>Opening…');
    try {
      await loadLib();
      const { bytes, cached } = await getBytes(url, (f) => msg('<div class="spinner"></div>Downloading ' + Math.round(f * 100) + '%'));
      if (cur.url !== url) return;
      cur.bytes = bytes;
      doc = await lib.getDocument({ data: bytes.slice() }).promise;
      $('#pv-off').textContent = (cur.range ? 'Unit pages ' + cur.range[0] + '–' + cur.range[1] + ' · ' : '') + (cached ? 'Saved offline' : 'Saved for offline');
      zoom = 1;
      await layout();
      let start = opts.page || 1;
      try { if (!opts.page) start = +localStorage.getItem(lastPageKey(url)) || 1; } catch (e) {}
      if (start > 1) jump(start);
    } catch (e) {
      msg('Could not open this PDF.<br><span class="small">' + (e.message || e) + '</span><br><br><a class="btn" href="' + url + '" target="_blank" rel="noopener">Open in browser</a>');
    }
  }

  async function layout() {
    const box = $('#pv-pages'); box.innerHTML = '';
    const token = ++renderToken;
    const width = Math.min(box.clientWidth || window.innerWidth, 1000) - 12;
    if (io) io.disconnect();
    io = new IntersectionObserver((ents) => ents.forEach((en) => { if (en.isIntersecting) draw(en.target, token); }), { root: $('#pv-body'), rootMargin: '600px 0px' });
    const first = await doc.getPage(1);
    const vp1 = first.getViewport({ scale: 1 });
    for (let i = 1; i <= doc.numPages; i++) {
      const d = document.createElement('div');
      d.className = 'pdfpage'; d.dataset.n = i;
      const w = width * zoom;
      d.style.width = w + 'px'; d.style.height = (w * vp1.height / vp1.width) + 'px';
      d.innerHTML = '<span class="pn">' + i + '</span>';
      box.appendChild(d); io.observe(d);
    }
    $('#pv-count').textContent = '1 / ' + doc.numPages;
  }

  async function draw(el, token) {
    if (el.dataset.done === String(zoom) || token !== renderToken) return;
    el.dataset.done = String(zoom);
    const page = await doc.getPage(+el.dataset.n);
    const cssW = parseFloat(el.style.width);
    const vp0 = page.getViewport({ scale: 1 });
    const scale = cssW / vp0.width;
    const dpr = Math.min(window.devicePixelRatio || 1, 2.5);
    const vp = page.getViewport({ scale: scale * dpr });
    el.style.height = (vp.height / dpr) + 'px';
    const cv = document.createElement('canvas'); cv.width = vp.width; cv.height = vp.height;
    await page.render({ canvasContext: cv.getContext('2d'), viewport: vp }).promise;
    if (token !== renderToken) return;
    const old = el.querySelector('canvas'); if (old) old.remove();
    el.prepend(cv);
  }

  function currentPage() {
    const body = $('#pv-body'); const mid = body.scrollTop + body.clientHeight / 3;
    let n = 1; for (const p of $('#pv-pages').children) { if (p.offsetTop <= mid) n = +p.dataset.n || 1; }
    return n;
  }
  function jump(n) {
    const el = $('#pv-pages').querySelector('[data-n="' + n + '"]');
    if (el) $('#pv-body').scrollTop = el.offsetTop - 6;
  }
  async function setZoom(z) {
    if (!doc) return;
    const n = currentPage();
    zoom = Math.max(0.6, Math.min(3, z));
    $('#pv-zoom').textContent = Math.round(zoom * 100) + '%';
    await layout(); jump(n);
  }

  function close() {
    const sh = $('#pdf-sheet'); if (sh.hidden) return;
    try { if (doc) localStorage.setItem(lastPageKey(cur.url), currentPage()); } catch (e) {}
    sh.hidden = true; document.body.style.overflow = '';
    renderToken++; if (io) io.disconnect(); if (doc) { doc.destroy(); doc = null; }
    $('#pv-pages').innerHTML = '';
  }

  // the unit's pages plus one page either side, so you see where the unit sits in the book
  function loadWriter() {
    if (window.PDFLib) return Promise.resolve(window.PDFLib);
    return new Promise((res, rej) => {
      const s = document.createElement('script');
      s.src = PDFLIB;
      s.onload = () => res(window.PDFLib);
      s.onerror = () => rej(new Error('Could not load the PDF writer (are you offline?)'));
      document.head.appendChild(s);
    });
  }
  async function cutBytes(bytes, range) {
    const L = await loadWriter();
    const src = await L.PDFDocument.load(bytes.slice(), { ignoreEncryption: true });
    const n = src.getPageCount();
    const from = Math.max(1, range[0] - 1), to = Math.min(n, range[1] + 1);
    const out = await L.PDFDocument.create();
    const pages = await out.copyPages(src, Array.from({ length: to - from + 1 }, (_, i) => from - 1 + i));
    pages.forEach((pg) => out.addPage(pg));
    return { bytes: await out.save(), from, to };
  }
  const cutOut = () => cutBytes(cur.bytes, cur.range);

  // ---- day kit: several cut-outs in one stored (uncompressed) zip ----
  let crcT = null;
  function crc32(b) {
    if (!crcT) { crcT = new Uint32Array(256); for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1; crcT[n] = c >>> 0; } }
    let c = 0xFFFFFFFF; for (let i = 0; i < b.length; i++) c = crcT[(c ^ b[i]) & 255] ^ (c >>> 8);
    return (c ^ 0xFFFFFFFF) >>> 0;
  }
  function makeZip(files) {   // files: [{name, bytes}]
    const enc = new TextEncoder(), parts = [], central = []; let off = 0;
    const d = new Date(), time = (d.getHours() << 11) | (d.getMinutes() << 5) | (d.getSeconds() >> 1), date = ((d.getFullYear() - 1980) << 9) | ((d.getMonth() + 1) << 5) | d.getDate();
    for (const f of files) {
      const nm = enc.encode(f.name), crc = crc32(f.bytes), sz = f.bytes.length;
      const lh = new DataView(new ArrayBuffer(30));
      lh.setUint32(0, 0x04034b50, true); lh.setUint16(4, 20, true); lh.setUint16(6, 0x0800, true); lh.setUint16(8, 0, true);
      lh.setUint16(10, time, true); lh.setUint16(12, date, true); lh.setUint32(14, crc, true); lh.setUint32(18, sz, true); lh.setUint32(22, sz, true); lh.setUint16(26, nm.length, true);
      parts.push(new Uint8Array(lh.buffer), nm, f.bytes);
      const ch = new DataView(new ArrayBuffer(46));
      ch.setUint32(0, 0x02014b50, true); ch.setUint16(4, 20, true); ch.setUint16(6, 20, true); ch.setUint16(8, 0x0800, true); ch.setUint16(10, 0, true);
      ch.setUint16(12, time, true); ch.setUint16(14, date, true); ch.setUint32(16, crc, true); ch.setUint32(20, sz, true); ch.setUint32(24, sz, true); ch.setUint16(28, nm.length, true); ch.setUint32(42, off, true);
      central.push(new Uint8Array(ch.buffer), nm);
      off += 30 + nm.length + sz;
    }
    const csz = central.reduce((a, b) => a + b.length, 0);
    const end = new DataView(new ArrayBuffer(22));
    end.setUint32(0, 0x06054b50, true); end.setUint16(8, files.length, true); end.setUint16(10, files.length, true); end.setUint32(12, csz, true); end.setUint32(16, off, true);
    return new Blob([...parts, ...central, new Uint8Array(end.buffer)], { type: 'application/zip' });
  }
  const fname = (t) => (t || 'file').replace(/[^\w\- .]+/g, '_').slice(0, 80);
  // items: [{url, title, range?}]  ->  one zip; each file is what Download gives for that unit (range +/- 1 page)
  async function kit(items, zipName, onStep) {
    const files = [], seen = new Set();
    for (let i = 0; i < items.length; i++) {
      const it = items[i], key = it.url + '|' + (it.range || '');
      if (seen.has(key)) continue; seen.add(key);
      if (onStep) onStep(i + 1, items.length, it.title);
      const { bytes } = await getBytes(it.url);
      let name, out = bytes;
      if (it.range) { const c = await cutBytes(bytes, it.range); out = c.bytes; name = fname(it.title) + ' pp ' + c.from + '-' + c.to + '.pdf'; }
      else name = fname(it.title) + '.pdf';
      files.push({ name: String(files.length + 1).padStart(2, '0') + ' ' + name, bytes: out });
    }
    const u = URL.createObjectURL(makeZip(files));
    const a = document.createElement('a'); a.href = u; a.download = fname(zipName) + '.zip'; document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(u), 8000);
    return files.length;
  }

  async function download() {
    const base = (cur.title || 'file').replace(/[^\w\- .]+/g, '_').slice(0, 80);
    if (cur.range && cur.bytes) {
      try {
        const cut = await cutOut();
        const u = URL.createObjectURL(new Blob([cut.bytes], { type: 'application/pdf' }));
        const a = document.createElement('a'); a.href = u; a.download = base + ' pp ' + cut.from + '-' + cut.to + '.pdf'; document.body.appendChild(a); a.click(); a.remove();
        setTimeout(() => URL.revokeObjectURL(u), 4000);
        return;
      } catch (e) { $('#pv-off').textContent = 'Could not make the cut-out: ' + (e.message || e); return; }
    }
    const name = base + '.pdf';
    if (cur.bytes) {
      const u = URL.createObjectURL(new Blob([cur.bytes], { type: 'application/pdf' }));
      const a = document.createElement('a'); a.href = u; a.download = name; document.body.appendChild(a); a.click(); a.remove();
      setTimeout(() => URL.revokeObjectURL(u), 4000);
    } else window.open(cur.url, '_blank');
  }

  async function saveFile(url, name) {
    try {
      const { bytes } = await getBytes(url);
      const u = URL.createObjectURL(new Blob([bytes], { type: 'application/pdf' }));
      const a = document.createElement('a'); a.href = u; a.download = name; document.body.appendChild(a); a.click(); a.remove();
      setTimeout(() => URL.revokeObjectURL(u), 4000);
      return true;
    } catch (e) { window.open(url, '_blank'); return false; }
  }

  function init() {
    $('#pv-close').onclick = () => history.back();
    $('#pv-in').onclick = () => setZoom(zoom + 0.25);
    $('#pv-out').onclick = () => setZoom(zoom - 0.25);
    $('#pv-dl').onclick = download;
    $('#pv-ext').onclick = () => window.open(cur.url, '_blank');
    $('#pv-count').onclick = () => {
      if (!doc) return;
      const n = parseInt(prompt('Go to page (1–' + doc.numPages + ')', currentPage()), 10);
      if (n >= 1 && n <= doc.numPages) jump(n);
    };
    let ticking = false;
    $('#pv-body').addEventListener('scroll', () => {
      if (ticking || !doc) return; ticking = true;
      requestAnimationFrame(() => { $('#pv-count').textContent = currentPage() + ' / ' + doc.numPages; ticking = false; });
    }, { passive: true });
    // two-finger pinch: preview with CSS scale, re-render on release
    let d0 = 0, z0 = 1;
    const body = $('#pv-body'), pages = $('#pv-pages');
    const dist = (t) => Math.hypot(t[0].clientX - t[1].clientX, t[0].clientY - t[1].clientY);
    body.addEventListener('touchstart', (e) => { if (e.touches.length === 2) { d0 = dist(e.touches); z0 = zoom; } }, { passive: true });
    body.addEventListener('touchmove', (e) => {
      if (e.touches.length === 2 && d0) { e.preventDefault(); const f = dist(e.touches) / d0; pages.style.transformOrigin = '50% 0'; pages.style.transform = 'scale(' + f + ')'; pages.dataset.f = f; }
    }, { passive: false });
    body.addEventListener('touchend', () => {
      if (!d0) return; const f = +pages.dataset.f || 1; d0 = 0; pages.style.transform = ''; pages.dataset.f = '';
      if (Math.abs(f - 1) > 0.05) setZoom(z0 * f);
    });
    body.addEventListener('dblclick', () => setZoom(zoom > 1.2 ? 1 : 2));
  }

  window.PDFV = { open, close, init, isCached, uncache, saveFile, kit };
})();
