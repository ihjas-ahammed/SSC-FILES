/* ══════════════════════════════════════════════════════════════════════════
   Figure viewer — click a rendered diagram to open it full-screen with
   100–400% zoom, reset, scrolling, and Escape/Close.

   Opt-in: a project sets `PROJECT.figZoom: true`. boot.js then calls
   `Zoom.start()` once the signed-in app is up. It also caps a diagram's
   height on desktop (see `body.fig-zoom` in ui.css), because a preview that
   fills the screen leaves nothing to enlarge. The dialog follows the theme:
   when the page swaps a diagram's light/dark file, the open one swaps too.
   ══════════════════════════════════════════════════════════════════════════ */

const Zoom = (function () {

  let started = false;

  function start() {
    if (started) return;
    started = true;
    const el = DOM.el;
    let source = null, scale = 1, fitWidth = 1, previousOverflow = '';
    const picture = el('img', { alt: '', draggable: 'false' });
    const viewport = el('div', { class: 'fig-viewport', tabindex: '0',
      'aria-label': 'Diagram; scroll to explore when zoomed' }, [picture]);
    const status = el('output', { 'aria-live': 'polite', text: '100%' });
    const button = (text, label, action) => {
      const b = el('button', { type: 'button', text: text, 'aria-label': label });
      b.addEventListener('click', action);
      return b;
    };
    const zoomOut = button('−', 'Zoom out', () => zoom(scale - 0.25));
    const zoomIn = button('+', 'Zoom in', () => zoom(scale + 0.25));
    const dialog = el('dialog', { class: 'fig-viewer', 'aria-label': 'Diagram viewer' }, [
      el('div', { class: 'fig-controls' }, [zoomOut, status, zoomIn,
        button('Reset', 'Reset zoom to fit', () => { zoom(1); viewport.scrollTo(0, 0); }),
        button('Close', 'Close diagram viewer', () => dialog.close())]), viewport
    ]);
    document.body.appendChild(dialog);
    function zoom(next) {
      scale = Math.min(4, Math.max(1, next));
      picture.style.width = (fitWidth * scale) + 'px';
      status.textContent = Math.round(scale * 100) + '%';
      zoomOut.disabled = scale <= 1;
      zoomIn.disabled = scale >= 4;
    }
    function fit() {
      if (!dialog.open || !picture.naturalWidth) return;
      fitWidth = Math.min(picture.naturalWidth, viewport.clientWidth,
        viewport.clientHeight * picture.naturalWidth / picture.naturalHeight);
      zoom(scale);
    }
    picture.addEventListener('load', fit);
    window.addEventListener('resize', fit);
    function open(img) {
      source = img;
      scale = 1;
      picture.alt = img.alt;
      picture.src = img.src;
      previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      dialog.showModal();
      fit();
      viewport.scrollTo(0, 0);
    }
    dialog.addEventListener('close', () => {
      document.body.style.overflow = previousOverflow;
      if (source && source.isConnected) source.focus({ preventScroll: true });
      source = null;
    });
    dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
    function enhance(root) {
      const imgs = root.matches && root.matches('.fig-img') ? [root] :
        root.querySelectorAll ? root.querySelectorAll('.fig-img') : [];
      imgs.forEach(img => {
        img.tabIndex = 0;
        img.setAttribute('role', 'button');
        img.setAttribute('aria-haspopup', 'dialog');
        img.setAttribute('aria-label', 'Enlarge diagram: ' + img.alt);
        img.title = 'Click to enlarge';
      });
    }
    enhance(document.body);
    new MutationObserver(records => records.forEach(record =>
      record.addedNodes.forEach(enhance))).observe(document.body, { childList: true, subtree: true });
    document.addEventListener('click', event => {
      if (event.target.matches('.fig-img')) open(event.target);
    });
    document.addEventListener('keydown', event => {
      if (event.target.matches('.fig-img') && (event.key === 'Enter' || event.key === ' ')) {
        event.preventDefault();
        open(event.target);
      }
    });
    new MutationObserver(() => {
      if (source) picture.src = source.src.replace(/\/(light|dark)\//,
        document.documentElement.dataset.theme === 'dark' ? '/dark/' : '/light/');
    }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  }

  return { start: start };
})();
