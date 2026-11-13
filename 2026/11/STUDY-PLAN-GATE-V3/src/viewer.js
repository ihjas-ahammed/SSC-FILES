/* Mobile PDF viewer: PDF.js from cdnjs, lazy page rendering, pinch / button zoom,
   page jump, download, offline copy in Cache Storage. Exposes window.PDFV.open(url, title, opts). */
(function () {
  const PDFJS = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/';
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
    cur = { url, title, bytes: null };
    history.pushState({ sheet: 'pdf' }, '');
    msg('<div class="spinner"></div>Opening…');
    try {
      await loadLib();
      const { bytes, cached } = await getBytes(url, (f) => msg('<div class="spinner"></div>Downloading ' + Math.round(f * 100) + '%'));
      if (cur.url !== url) return;
      cur.bytes = bytes;
      doc = await lib.getDocument({ data: bytes.slice() }).promise;
      $('#pv-off').textContent = cached ? 'Saved offline' : 'Saved for offline';
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

  function download() {
    const name = (cur.title || 'file').replace(/[^\w\- .]+/g, '_').slice(0, 80) + '.pdf';
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

  window.PDFV = { open, close, init, isCached, uncache, saveFile };
})();
