/* ==========================================================================
   Shelf navigation: piles, opening sheets, one card per swipe / wheel gesture,
   keyboard, focus on the centred card, breadcrumb
   ========================================================================== */
(function () {
  var SM = window.SM;

  SM.initShelf = function () {
    var shelf = SM.$('shelf'), glideId = null, recallAnchor = null;

    function centreOffset(el) {
      var r = el.getBoundingClientRect(), sr = shelf.getBoundingClientRect();
      return shelf.scrollLeft + r.left + r.width / 2 - sr.left - shelf.clientWidth / 2;
    }
    function unfinishedAnchor() {
      if (!SM.definitionMatch() || !recallAnchor || SM.isDone(recallAnchor) ||
          !recallAnchor.sheet.el.classList.contains('is-open')) recallAnchor = null;
      return recallAnchor;
    }
    function scrollBounds() {
      var max = Infinity, boundary = null;
      if (SM.definitionMatch()) SM.SHEETS.forEach(function (sh) {
        if (!sh.el.classList.contains('is-open') || sh.el.closest('.group').classList.contains('is-stacked')) return;
        var locked = sh.cards.find(SM.cardLocked);
        if (locked && centreOffset(locked.el) < max) { boundary = locked.el; max = centreOffset(locked.el); }
      });
      var anchor = unfinishedAnchor();
      return { min: anchor ? Math.min(centreOffset(anchor.el), max) : 0, max: max, boundary: boundary };
    }
    SM.shelfBounds = scrollBounds;
    function keepDefinition(el) {
      if (glideId || !el) return;
      var r = el.getBoundingClientRect(), sr = shelf.getBoundingClientRect();
      if (Math.abs(r.left + r.width / 2 - sr.left - shelf.clientWidth / 2) > 40) return;
      if (unfinishedAnchor() && recallAnchor !== el._c) return;
      if (el && el._c && SM.definitionMatch() && SM.isDefinition(el._c) &&
          !SM.cardLocked(el._c) && !SM.isDone(el._c)) recallAnchor = el._c;
    }
    function mayLeaveDefinition() {
      if (!unfinishedAnchor()) return true;
      SM.toast('', 'Unlock this definition first', 'Confirm your answer or choose “I know this”.');
      return false;
    }

    function glideTo(el, duration) {
      var bounds = scrollBounds(), wanted = centreOffset(el);
      if (wanted < bounds.min - 1 && unfinishedAnchor()) el = recallAnchor.el;
      else if (wanted > bounds.max + 1 && bounds.boundary) el = bounds.boundary;
      duration = duration || 620;
      var start = performance.now();
      var fromX = el.getBoundingClientRect().left - shelf.getBoundingClientRect().left;
      var toX = shelf.clientWidth / 2 - el.getBoundingClientRect().width / 2;
      if (glideId) cancelAnimationFrame(glideId);
      shelf.style.scrollSnapType = 'none';
      function frame(now) {
        var t = Math.min((now - start) / duration, 1), eased = 1 - Math.pow(1 - t, 3);
        var wantX = fromX + (toX - fromX) * eased;
        var nowX = el.getBoundingClientRect().left - shelf.getBoundingClientRect().left;
        shelf.scrollLeft += nowX - wantX;
        if (t < 1) glideId = requestAnimationFrame(frame);
        else {
          glideId = null;
          shelf.style.scrollSnapType = '';
          var finalX = el.getBoundingClientRect().left - shelf.getBoundingClientRect().left;
          shelf.scrollTo({ left: shelf.scrollLeft + (finalX - toX), behavior: 'smooth' });
          noteCurrentReading();
        }
      }
      glideId = requestAnimationFrame(frame);
    }
    SM.glideTo = glideTo;

    SM.stackAll = function () {
      if (!mayLeaveDefinition()) return;
      if (glideId) { cancelAnimationFrame(glideId); glideId = null; }
      shelf.style.scrollSnapType = '';
      SM.sheetEls.forEach(function (s) { s.classList.remove('is-open'); s.querySelector('.cover').setAttribute('aria-expanded', 'false'); });
      SM.groups.forEach(function (g) { g.classList.add('is-stacked'); });
      shelf.scrollTo({ left: 0, behavior: 'smooth' });
    };

    SM.groups.forEach(function (group) {
      group.addEventListener('click', function (e) {
        if (!group.classList.contains('is-stacked')) return;
        e.stopPropagation(); e.preventDefault();
        group.classList.remove('is-stacked');
        setTimeout(function () { glideTo(group.querySelector('.cover'), 500); }, 60);
      }, true);
    });

    function toggleSheet(sheet, open) {
      var willOpen = open === undefined ? !sheet.classList.contains('is-open') : open;
      if (!willOpen && !mayLeaveDefinition()) return;
      sheet.classList.toggle('is-open', willOpen);
      sheet.querySelector('.cover').setAttribute('aria-expanded', String(willOpen));
      if (willOpen) glideTo(sheet.querySelector('.card'));
      else glideTo(sheet.querySelector('.cover'), 310);
    }
    SM.sheetEls.forEach(function (sheet) {
      sheet.querySelector('.cover').addEventListener('click', function () { toggleSheet(sheet); });
    });

    SM.goSection = function (i) {
      if (!mayLeaveDefinition()) return;
      var g = SM.groups[i];
      if (SM.definitionMatch()) SM.sheetEls.forEach(function (s) {
        s.classList.remove('is-open'); s.querySelector('.cover').setAttribute('aria-expanded', 'false');
      });
      g.classList.remove('is-stacked');
      setTimeout(function () { glideTo(g.querySelector('.cover'), 520); }, 60);
    };

    /* ---------- one step at a time ---------- */
    function targets() {
      return Array.prototype.filter.call(shelf.querySelectorAll('.cover, .sheet.is-open .card'), function (el) {
        var g = el.closest('.group');
        return !(g.classList.contains('is-stacked') && el.closest('.sheet') !== g.querySelector('.sheet'));
      });
    }
    function centred() {
      var mid = shelf.getBoundingClientRect().left + shelf.clientWidth / 2, best = null, bd = Infinity;
      targets().forEach(function (el) {
        var r = el.getBoundingClientRect(), d = Math.abs(r.left + r.width / 2 - mid);
        if (d < bd) { bd = d; best = el; }
      });
      return best;
    }
    SM.centred = centred;
    // Opening a previously hidden sheet need not cross an observer threshold.
    // Record the centred reading card after navigation as well as intersections.
    function noteCurrentReading() {
      var el = centred();
      if (!el || !el._c || !el.closest('.sheet').classList.contains('is-open') || el.closest('.group').classList.contains('is-stacked')) return;
      var r = el.getBoundingClientRect(), sr = shelf.getBoundingClientRect();
      if (Math.min(r.right, sr.right) - Math.max(r.left, sr.left) >= r.width * 0.6) {
        keepDefinition(el); SM.markSeen(el._c);
      }
    }
    var readingTimer;
    shelf.addEventListener('scroll', function () {
      clearTimeout(readingTimer);
      readingTimer = setTimeout(function () {
        if (glideId) return;
        var bounds = scrollBounds(), wanted = Math.max(bounds.min, Math.min(bounds.max, shelf.scrollLeft));
        if (Math.abs(shelf.scrollLeft - wanted) > 1) {
          shelf.scrollTo({ left: wanted, behavior: 'smooth' }); return;
        }
        noteCurrentReading();
        var mid = shelf.getBoundingClientRect().left + shelf.clientWidth / 2;
        SM.CARDS.forEach(function (c) {
          if (!c.el.classList.contains('is-flipped')) return;
          var r = c.el.getBoundingClientRect();
          if (Math.abs(r.left + r.width / 2 - mid) > 40) SM.flipDefinition(c, false);
        });
      }, 160);
    });
    SM.step = function (dir) {
      var list = targets(), cur = centred(), i = list.indexOf(cur);
      var next = list[Math.max(0, Math.min(list.length - 1, i + dir))];
      if (!next || next === cur) return;
      var r = next.getBoundingClientRect(), sr = shelf.getBoundingClientRect();
      var bounds = scrollBounds(), wanted = shelf.scrollLeft + (r.left + r.width / 2) - (sr.left + shelf.clientWidth / 2);
      shelf.scrollTo({ left: Math.max(bounds.min, Math.min(bounds.max, wanted)), behavior: 'smooth' });
    };

    // mouse wheel / trackpad: one gesture = one card, however hard it is flicked
    var locked = false, idleT = null, acc = 0;
    shelf.addEventListener('wheel', function (e) {
      if (e.ctrlKey || !SM.$('mc').hidden) return;
      var vertical = Math.abs(e.deltaY) > Math.abs(e.deltaX);
      var sc = e.target.closest('.scroll-y, .omr-content, .eval-content, .mf-ask, textarea, .has-text-answer');
      if (sc && vertical && sc.scrollHeight > sc.clientHeight + 2) return;
      e.preventDefault();
      clearTimeout(idleT);
      idleT = setTimeout(function () { locked = false; acc = 0; }, 310);
      if (locked) return;
      acc += vertical ? e.deltaY : e.deltaX;
      if (Math.abs(acc) < 24) return;
      SM.step(acc > 0 ? 1 : -1);
      acc = 0; locked = true;
    }, { passive: false });

    /* ---------- focus, breadcrumb, "seen" ---------- */
    var crumbEl = SM.$('crumb');
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          var el = en.target;
          el._visible = en.isIntersecting && en.intersectionRatio >= 0.5;
          el.classList.toggle('is-focus', en.isIntersecting && en.intersectionRatio >= 0.8);
          if (!en.isIntersecting || en.intersectionRatio < 0.6) return;
          var isCard = el.classList.contains('card'), sheet = el.closest('.sheet');
          if (isCard && !sheet.classList.contains('is-open')) return;
          var sh = SM.SHEETS.filter(function (x) { return x.el === sheet; })[0];
          var text = sh.sec.short + ' › ' + sh.title;
          if (sheet.parentNode.classList.contains('is-stacked')) text = sh.sec.short + ' · ' + sh.sec.sheets.length + ' topics · tap the pile';
          if (isCard && !SM.cardLocked(el._c)) { keepDefinition(el); SM.markSeen(el._c); text += ' › ' + (sh.cards.indexOf(el._c) + 1) + ' / ' + sh.cards.length; }
          crumbEl.textContent = text;
          SM.setActiveSection(sh.si);
        });
      }, { root: shelf, threshold: [0, 0.5, 0.6, 0.8, 0.95] });
      shelf.querySelectorAll('.card, .cover').forEach(function (el) { io.observe(el); });
    }

    /* ---------- keyboard (desktop) ---------- */
    document.addEventListener('keydown', function (e) {
      if (document.querySelector('dialog[open]')) return;
      if (e.target.closest('summary, .understanding, .term-link, .term-definition, textarea, [contenteditable="true"]')) return;
      if (e.target.tagName === 'INPUT' || e.metaKey || e.ctrlKey || e.altKey) return;
      if (!SM.$('mc').hidden) { if (e.key === 'Escape') SM.closeMC(); return; }
      var k = e.key, cur = centred(), c = cur && cur._c;
      if (k === 'ArrowRight' || k === 'ArrowDown' || k === 'PageDown') { e.preventDefault(); SM.step(1); return; }
      if (k === 'ArrowLeft' || k === 'ArrowUp' || k === 'PageUp') { e.preventDefault(); SM.step(-1); return; }
      if (k === 'f' || k === 'F') { SM.toggleFullscreen(); return; }
      if (k === 'm' || k === 'M') { SM.openMC(); return; }
      if (k === 's' || k === 'S') { SM.stackAll(); return; }
      if (k === 't' || k === 'T') { SM.toggleTheme(); return; }
      if (!cur) return;
      if (cur.classList.contains('cover') && (k === 'Enter' || k === ' ')) {
        e.preventDefault();
        var g = cur.closest('.group');
        if (g.classList.contains('is-stacked')) { g.classList.remove('is-stacked'); setTimeout(function () { glideTo(g.querySelector('.cover'), 500); }, 60); }
        else toggleSheet(cur.closest('.sheet'));
        return;
      }
      if (!c) return;
      if (SM.isDefinition(c) && (k === 'Enter' || k === ' ') && !e.target.closest('button, a')) {
        e.preventDefault(); SM.flipDefinition(c); return;
      }
      var num = /^[1-6]$/.test(k) ? Number(k) - 1 : -1;
      if (c.type === 'derive' && c.player) {
        if (num >= 0 || k === 'Enter') { e.preventDefault(); c.player.pick(num >= 0 ? num : 99); return; }
        if (k === ' ') { e.preventDefault(); c.player.toggle(); return; }
        if (k === '.' || k === 'n') { c.player.next(); return; }
        if (k === ',' || k === 'p') { c.player.prev(); return; }
        if (k === 'r') { c.player.replay(); return; }
      }
      if (SM.keyQuestion && SM.keyQuestion(c, k, num, e)) return;
    });
  };
})();
