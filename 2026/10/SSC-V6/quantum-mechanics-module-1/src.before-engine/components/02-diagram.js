/* ==========================================================================
   JSXGraph 1.14.0 declarative diagram renderer + step-by-step build-up + zoom
   Plus lazy-loaded Three.js r128 3D scene for the meridional ray only
   ========================================================================== */
(function () {
  var SM = window.SM = window.SM || {};
  var DEFAULT_BBOX = [0, 180, 260, 0];
  var THREE_URL = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
  var threeLoading = null, ro = null, themeBound = false, jxgSeq = 0;
  var activeThree = [];

  function readTokens() {
    var cs = getComputedStyle(document.documentElement);
    var get = function (k, fb) { return (cs.getPropertyValue(k) || '').trim() || fb; };
    return {
      ink: get('--ink', '#1B2559'),
      ink2: get('--ink-2', '#4A5480'),
      muted: get('--muted', '#8C92B0'),
      lav: get('--lav', '#F1EDFB'),
      lav2: get('--lav-2', '#DED6F6'),
      violet: get('--violet', '#6A55D8'),
      onViolet: get('--on-violet', '#FFFFFF'),
      sage: get('--sage', '#2F9466'),
      card: get('--card', '#FFFFFF'),
      font: get('--font', '"Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, sans-serif')
    };
  }

  function hasDiagram(diag) {
    return !!(diag && typeof diag === 'object' && Array.isArray(diag.steps) && diag.steps.length > 0);
  }

  function hasRole(roleStr, token) {
    if (!roleStr) return false;
    return (' ' + roleStr + ' ').indexOf(' ' + token + ' ') !== -1;
  }

  function jxgReady(cb) {
    if (window.JXG && window.JXG.JSXGraph) { cb(true); return; }
    var tries = 0;
    var timer = setInterval(function () {
      tries++;
      if (window.JXG && window.JXG.JSXGraph) {
        clearInterval(timer);
        cb(true);
      } else if (tries > 250) {
        clearInterval(timer);
        cb(false);
      }
    }, 40);
  }

  function sampleCurvePoints(pts, closed) {
    var xs = [], ys = [];
    if (!pts || pts.length < 2) return [xs, ys];
    function pushPt(x, y) { xs.push(x); ys.push(y); }
    function quad(p0, p1, p2, n) {
      for (var i = 0; i <= n; i++) {
        var t = i / n, u = 1 - t;
        pushPt(u * u * p0[0] + 2 * u * t * p1[0] + t * t * p2[0],
               u * u * p0[1] + 2 * u * t * p1[1] + t * t * p2[1]);
      }
    }
    if (pts.length === 3) {
      quad(pts[0], pts[1], pts[2], 32);
    } else if (pts.length === 4) {
      for (var k = 0; k <= 36; k++) {
        var t = k / 36, u = 1 - t;
        pushPt(u * u * u * pts[0][0] + 3 * u * u * t * pts[1][0] + 3 * u * t * t * pts[2][0] + t * t * t * pts[3][0],
               u * u * u * pts[0][1] + 3 * u * u * t * pts[1][1] + 3 * u * t * t * pts[2][1] + t * t * t * pts[3][1]);
      }
    } else if (pts.length >= 5 && pts.length % 2 === 1) {
      for (var j = 0; j < pts.length - 2; j += 2) {
        quad(pts[j], pts[j + 1], pts[j + 2], 24);
      }
    } else {
      for (var m = 0; m < pts.length; m++) pushPt(pts[m][0], pts[m][1]);
    }
    if (closed && xs.length) pushPt(xs[0], ys[0]);
    return [xs, ys];
  }

  function boundsOfCoords(list, pad) {
    pad = pad || 0;
    var minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    list.forEach(function (p) {
      if (!p || typeof p[0] !== 'number' || typeof p[1] !== 'number') return;
      if (p[0] < minX) minX = p[0];
      if (p[0] > maxX) maxX = p[0];
      if (p[1] < minY) minY = p[1];
      if (p[1] > maxY) maxY = p[1];
    });
    if (minX === Infinity) return { minX: 0, maxX: 260, minY: 0, maxY: 180 };
    return { minX: minX - pad, maxX: maxX + pad, minY: minY - pad, maxY: maxY + pad };
  }

  function resolveCoords(state, ref) {
    if (Array.isArray(ref) && ref.length >= 2) return [Number(ref[0]), Number(ref[1])];
    if (typeof ref === 'string' && state.coordsMap[ref]) return state.coordsMap[ref].slice();
    return [0, 0];
  }

  function makeHiddenPoint(board, xy) {
    return board.create('point', [xy[0], xy[1]], {
      visible: false, fixed: true, withLabel: false, name: '', showInfobox: false
    });
  }

  function roleStyle(role, obj, tok) {
    var strokeColor = tok.violet;
    if (hasRole(role, 'ik')) strokeColor = tok.ink;
    else if (hasRole(role, 'gk')) strokeColor = tok.ink2;
    var strokeOpacity = hasRole(role, 'gk') ? 0.68 : 1;
    var fillColor = 'none', fillOpacity = 0;
    if (hasRole(role, 'f')) { fillColor = tok.violet; fillOpacity = 1; }
    else if (hasRole(role, 's')) { fillColor = tok.lav2; fillOpacity = 0.55; }
    var dash = 0;
    if (obj.dash) dash = 2;
    else if (hasRole(role, 'gk') && obj.dash !== 0) dash = 2;
    var width = obj.width || (hasRole(role, 'gk') ? 1.5 : 2);
    return {
      strokeColor: strokeColor,
      strokeOpacity: strokeOpacity,
      fillColor: fillColor,
      fillOpacity: fillOpacity,
      dash: dash,
      strokeWidth: width
    };
  }

  function createObject(board, state, obj, tok, stepNum, visibleNow, stepName) {
    var role = obj.role || 'lk';
    var st = roleStyle(role, obj, tok);
    var created = [];
    var bds = null;
    var common = {
      fixed: true,
      highlight: false,
      withLabel: false,
      visible: visibleNow
    };

    switch (obj.type) {
      case 'point': {
        var c = resolveCoords(state, obj.coords || [obj.x, obj.y]);
        if (obj.id) state.coordsMap[obj.id] = c;
        if (obj.name && !state.coordsMap[obj.name]) state.coordsMap[obj.name] = c;
        var pt = board.create('point', c, {
          fixed: true,
          highlight: false,
          showInfobox: false,
          visible: visibleNow,
          name: obj.label || '',
          withLabel: !!obj.label,
          size: obj.size || 3.2,
          fillColor: hasRole(role, 's') ? tok.lav2 : tok.violet,
          fillOpacity: 1,
          strokeColor: tok.violet,
          strokeWidth: 1.5,
          label: {
            offset: obj.offset || [6, 8],
            color: tok.ink,
            fontSize: obj.fontSize || 11,
            highlight: false,
            cssStyle: 'font-weight:700;font-family:' + tok.font
          }
        });
        created.push(pt);
        if (obj.id) state.points[obj.id] = pt;
        bds = boundsOfCoords([c], 14);
        break;
      }
      case 'line':
      case 'segment':
      case 'arrow': {
        var p1 = resolveCoords(state, obj.p1 || [obj.x1, obj.y1]);
        var p2 = resolveCoords(state, obj.p2 || [obj.x2, obj.y2]);
        var hp1 = makeHiddenPoint(board, p1);
        var hp2 = makeHiddenPoint(board, p2);
        var lAttrs = {
          fixed: true,
          highlight: false,
          visible: visibleNow,
          withLabel: !!obj.label,
          name: obj.label || '',
          strokeColor: st.strokeColor,
          strokeOpacity: st.strokeOpacity,
          strokeWidth: st.strokeWidth,
          dash: st.dash,
          straightFirst: obj.type === 'line' ? (obj.straightFirst !== false) : false,
          straightLast: obj.type === 'line' ? (obj.straightLast !== false) : false
        };
        if (obj.type === 'arrow') {
          lAttrs.lastArrow = { type: 2, size: 6 };
        }
        var seg = board.create(obj.type === 'arrow' ? 'arrow' : (obj.type === 'line' ? 'line' : 'segment'), [hp1, hp2], lAttrs);
        created.push(seg);
        bds = boundsOfCoords([p1, p2], 10);
        break;
      }
      case 'polygon': {
        var rawPts = (obj.points || []).map(function (p) { return resolveCoords(state, p); });
        if (rawPts.length >= 3) {
          var hPts = rawPts.map(function (p) { return makeHiddenPoint(board, p); });
          var hasBorder = hasRole(role, 'ok') || hasRole(role, 'lk') || hasRole(role, 'ik');
          var poly = board.create('polygon', hPts, {
            fixed: true,
            highlight: false,
            hasInnerPoints: false,
            visible: visibleNow,
            withLines: hasBorder,
            fillColor: st.fillColor === 'none' ? tok.lav2 : st.fillColor,
            fillOpacity: st.fillOpacity || 0.5,
            vertices: { visible: false },
            borders: {
              visible: visibleNow && hasBorder,
              highlight: false,
              strokeColor: st.strokeColor,
              strokeWidth: st.strokeWidth,
              dash: st.dash
            }
          });
          created.push(poly);
          if (poly.borders) {
            poly.borders.forEach(function (b) { created.push(b); });
          }
          bds = boundsOfCoords(rawPts, 8);
        }
        break;
      }
      case 'polyline':
      case 'curve': {
        var cPts = (obj.points || []).map(function (p) { return resolveCoords(state, p); });
        var xy = (obj.type === 'polyline' || obj.smooth === false)
          ? [cPts.map(function (p) { return p[0]; }), cPts.map(function (p) { return p[1]; })]
          : sampleCurvePoints(cPts, !!obj.closed);
        if (obj.closed && obj.type === 'polyline' && xy[0].length) {
          xy[0].push(xy[0][0]); xy[1].push(xy[1][0]);
        }
        var crv = board.create('curve', [xy[0], xy[1]], {
          fixed: true,
          highlight: false,
          visible: visibleNow,
          withLabel: false,
          strokeColor: st.strokeColor,
          strokeOpacity: st.strokeOpacity,
          strokeWidth: st.strokeWidth,
          dash: st.dash,
          fillColor: obj.closed ? st.fillColor : 'none',
          fillOpacity: obj.closed ? st.fillOpacity : 0
        });
        created.push(crv);
        bds = boundsOfCoords(cPts, 8);
        break;
      }
      case 'circle': {
        var ctr = resolveCoords(state, obj.center || [obj.cx, obj.cy]);
        var r = Number(obj.r || 10);
        var hCtr = makeHiddenPoint(board, ctr);
        var cir = board.create('circle', [hCtr, r], {
          fixed: true,
          highlight: false,
          visible: visibleNow,
          withLabel: false,
          strokeColor: (hasRole(role, 'ok') || hasRole(role, 'lk') || hasRole(role, 'ik')) ? st.strokeColor : 'none',
          strokeWidth: st.strokeWidth,
          fillColor: st.fillColor,
          fillOpacity: st.fillOpacity
        });
        created.push(cir);
        bds = boundsOfCoords([[ctr[0] - r, ctr[1] - r], [ctr[0] + r, ctr[1] + r]], 6);
        break;
      }
      case 'ellipse': {
        var ectr = resolveCoords(state, obj.center || [obj.cx, obj.cy]);
        var rx = Number(obj.rx || 20), ry = Number(obj.ry || 12);
        var ex = [], ey = [];
        for (var a = 0; a <= 48; a++) {
          var th = (a / 48) * Math.PI * 2;
          ex.push(ectr[0] + rx * Math.cos(th));
          ey.push(ectr[1] + ry * Math.sin(th));
        }
        var elp = board.create('curve', [ex, ey], {
          fixed: true,
          highlight: false,
          visible: visibleNow,
          withLabel: false,
          strokeColor: st.strokeColor,
          strokeWidth: st.strokeWidth,
          fillColor: st.fillColor,
          fillOpacity: st.fillOpacity
        });
        created.push(elp);
        bds = boundsOfCoords([[ectr[0] - rx, ectr[1] - ry], [ectr[0] + rx, ectr[1] + ry]], 6);
        break;
      }
      case 'arc': {
        var actr = resolveCoords(state, obj.center || [obj.cx, obj.cy]);
        var ar = Number(obj.r || 22);
        var sDeg = Number(obj.start || 0) * Math.PI / 180;
        var eDeg = Number(obj.end || 0) * Math.PI / 180;
        var pStart = [actr[0] + ar * Math.cos(sDeg), actr[1] + ar * Math.sin(sDeg)];
        var pEnd = [actr[0] + ar * Math.cos(eDeg), actr[1] + ar * Math.sin(eDeg)];
        var hc = makeHiddenPoint(board, actr);
        var hs = makeHiddenPoint(board, pStart);
        var he = makeHiddenPoint(board, pEnd);
        var arcEl = board.create('arc', [hc, hs, he], {
          fixed: true,
          highlight: false,
          visible: visibleNow,
          withLabel: false,
          strokeColor: st.strokeColor,
          strokeOpacity: st.strokeOpacity,
          strokeWidth: st.strokeWidth,
          fillColor: 'none',
          fillOpacity: 0
        });
        created.push(arcEl);
        bds = boundsOfCoords([actr, pStart, pEnd], 12);
        break;
      }
      case 'angle': {
        var ap1 = makeHiddenPoint(board, resolveCoords(state, obj.p1));
        var av = makeHiddenPoint(board, resolveCoords(state, obj.vertex));
        var ap2 = makeHiddenPoint(board, resolveCoords(state, obj.p2));
        var angEl = board.create('nonreflexangle', [ap1, av, ap2], {
          fixed: true,
          highlight: false,
          visible: visibleNow,
          radius: obj.r || 22,
          name: obj.label || '',
          withLabel: !!obj.label,
          fillColor: tok.lav2,
          fillOpacity: 0.35,
          strokeColor: st.strokeColor,
          strokeWidth: st.strokeWidth
        });
        created.push(angEl);
        bds = boundsOfCoords([resolveCoords(state, obj.vertex)], (obj.r || 22) + 12);
        break;
      }
      case 'label':
      case 'text': {
        var tc = resolveCoords(state, obj.coords || [obj.x, obj.y]);
        var align = obj.align || 'left';
        if (align === 'center') align = 'middle';
        var txtColor = hasRole(role, 'i') ? tok.onViolet : tok.ink;
        var txtEl = board.create('text', [tc[0], tc[1], String(obj.text || '')], Object.assign({}, common, {
          anchorX: align,
          anchorY: 'middle',
          fontSize: obj.size || 11,
          color: txtColor,
          cssStyle: 'font-weight:700;white-space:nowrap;font-family:' + tok.font
        }));
        created.push(txtEl);
        var halfW = Math.max(12, String(obj.text || '').length * 3.8);
        bds = boundsOfCoords([[tc[0] - halfW, tc[1] - 8], [tc[0] + halfW, tc[1] + 8]], 4);
        break;
      }
    }

    if (created.length) {
      state.items.push({
        name: obj.name || stepName || '',
        labelable: obj.type === 'point' || obj.type === 'line' || obj.type === 'segment' || obj.type === 'arrow',
        step: stepNum,
        els: created,
        bounds: bds || { minX: 0, maxX: 260, minY: 0, maxY: 180 },
        targetStrokeOp: st.strokeOpacity,
        targetFillOp: st.fillOpacity,
        visible: visibleNow
      });
    }
  }

  function fitBBoxToContainer(bbox, cw, ch) {
    var x1 = bbox[0], y1 = bbox[1], x2 = bbox[2], y2 = bbox[3];
    var w = x2 - x1, h = y1 - y2;
    if (!cw || !ch || cw < 10 || ch < 10) return [x1, y1, x2, y2];
    var ar = cw / ch;
    var cx = (x1 + x2) / 2, cy = (y1 + y2) / 2;
    if (w / h < ar) w = h * ar;
    else h = w / ar;
    return [cx - w / 2, cy + h / 2, cx + w / 2, cy - h / 2];
  }

  function computeFocusBBox(state, focusList) {
    var base = state.baseBBox;
    var cw = state.holder ? state.holder.clientWidth : 260;
    var ch = state.holder ? state.holder.clientHeight : 180;
    if (!focusList || !focusList.length) {
      return fitBBoxToContainer(base, cw, ch);
    }
    var set = {};
    focusList.forEach(function (k) { if (k) set[k] = 1; });
    var minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity, hits = 0;
    state.items.forEach(function (it) {
      if (!it.visible || !it.name || !set[it.name]) return;
      hits++;
      if (it.bounds.minX < minX) minX = it.bounds.minX;
      if (it.bounds.maxX > maxX) maxX = it.bounds.maxX;
      if (it.bounds.minY < minY) minY = it.bounds.minY;
      if (it.bounds.maxY > maxY) maxY = it.bounds.maxY;
    });
    if (!hits) return fitBBoxToContainer(base, cw, ch);
    var VW = base[2] - base[0], VH = base[1] - base[3];
    var spanX = Math.max(maxX - minX, 30), spanY = Math.max(maxY - minY, 24);
    var w = Math.min(Math.max(spanX * 1.55, VW * 0.48), VW * 0.84);
    var h = Math.min(Math.max(spanY * 1.55, VH * 0.48), VH * 0.84);
    var cx = (minX + maxX) / 2, cy = (minY + maxY) / 2;
    cx = Math.max(base[0] + w * 0.42, Math.min(base[2] - w * 0.42, cx));
    cy = Math.max(base[3] + h * 0.42, Math.min(base[1] - h * 0.42, cy));
    return fitBBoxToContainer([cx - w / 2, cy + h / 2, cx + w / 2, cy - h / 2], cw, ch);
  }

  function animateBBox(state, targetBBox, instant) {
    if (!state || !state.board) return;
    if (state.zoomRaf) { cancelAnimationFrame(state.zoomRaf); state.zoomRaf = null; }
    var from = (state.currentBBox || targetBBox).slice();
    state.targetBBox = targetBBox.slice();
    var diff = Math.abs(from[0] - targetBBox[0]) + Math.abs(from[1] - targetBBox[1]) +
               Math.abs(from[2] - targetBBox[2]) + Math.abs(from[3] - targetBBox[3]);
    if (instant || diff < 0.8) {
      state.currentBBox = targetBBox.slice();
      state.board.setBoundingBox(state.currentBBox, false);
      return;
    }
    var start = performance.now(), dur = 400;
    function tick(now) {
      var t = Math.min((now - start) / dur, 1);
      var e = 1 - Math.pow(1 - t, 3);
      var cur = [
        from[0] + (targetBBox[0] - from[0]) * e,
        from[1] + (targetBBox[1] - from[1]) * e,
        from[2] + (targetBBox[2] - from[2]) * e,
        from[3] + (targetBBox[3] - from[3]) * e
      ];
      state.currentBBox = cur;
      state.board.setBoundingBox(cur, false);
      if (t < 1) state.zoomRaf = requestAnimationFrame(tick);
      else state.zoomRaf = null;
    }
    state.zoomRaf = requestAnimationFrame(tick);
  }

  function animateFadeIn(items) {
    if (!items.length) return;
    var start = performance.now(), dur = 360;
    function frame(now) {
      var t = Math.min((now - start) / dur, 1);
      var e = 1 - Math.pow(1 - t, 2);
      items.forEach(function (it) {
        it.els.forEach(function (el) {
          var a = {};
          if (it.targetStrokeOp > 0) a.strokeOpacity = it.targetStrokeOp * e;
          if (it.targetFillOp > 0) a.fillOpacity = it.targetFillOp * e;
          el.setAttribute(a);
        });
      });
      if (t < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  function mountBoard(container) {
    var diag = container._diag;
    if (!hasDiagram(diag)) return;
    if (!window.JXG || !window.JXG.JSXGraph) {
      jxgReady(function (ok) { if (ok) mountBoard(container); });
      return;
    }
    var prev = container._jxgState;
    var curStep = prev ? prev.stepIndex : (container._isSetupPlayer ? 0 : 999);
    var curFocus = prev ? prev.focusList : [];
    if (prev && prev.zoomRaf) cancelAnimationFrame(prev.zoomRaf);
    if (prev && prev.board) {
      try { window.JXG.JSXGraph.freeBoard(prev.board); } catch (e) {}
    }

    var holder = container.querySelector('.sm-jxg');
    if (!holder) {
      holder = document.createElement('div');
      holder.className = 'sm-jxg jxgbox';
      holder.id = 'sm-jxg-' + (++jxgSeq);
      holder.setAttribute('aria-hidden', 'true');
      container.innerHTML = '';
      container.appendChild(holder);
    }

    var view = diag.view || {};
    var baseBBox = (Array.isArray(view.bbox) && view.bbox.length === 4) ? view.bbox.slice() : DEFAULT_BBOX.slice();
    var cw = holder.clientWidth || container.clientWidth || 240;
    var ch = holder.clientHeight || container.clientHeight || 140;
    var initBBox = fitBBoxToContainer(baseBBox, cw, ch);

    var board = window.JXG.JSXGraph.initBoard(holder.id, {
      boundingbox: initBBox,
      axis: !!view.axis,
      grid: !!view.grid,
      keepaspectratio: false,
      showCopyright: false,
      showNavigation: false,
      pan: { enabled: false },
      zoom: { enabled: false }
    });

    var state = {
      board: board,
      holder: holder,
      baseBBox: baseBBox,
      currentBBox: initBBox.slice(),
      targetBBox: initBBox.slice(),
      points: {},
      coordsMap: {},
      items: [],
      stepIndex: curStep,
      focusList: curFocus,
      zoomRaf: null
    };
    container._jxgState = state;

    var tok = readTokens();
    board.suspendUpdate();
    (diag.steps || []).forEach(function (st, idx) {
      var sNum = typeof st.step === 'number' ? st.step : idx;
      var vis = !container._isSetupPlayer || sNum <= curStep;
      var objs = st.objects || st.add || [];
      objs.forEach(function (obj) {
        createObject(board, state, obj, tok, sNum, vis, st.name || '');
      });
    });
    board.unsuspendUpdate();

    if (container._isSetupPlayer && curFocus && curFocus.length) {
      animateBBox(state, computeFocusBBox(state, curFocus), true);
    }
  }

  function resizeBoard(container) {
    var st = container._jxgState;
    if (!st || !st.board || !st.holder) return;
    var cw = st.holder.clientWidth || container.clientWidth;
    var ch = st.holder.clientHeight || container.clientHeight;
    if (cw > 10 && ch > 10) {
      st.board.resizeContainer(cw, ch);
      var target = computeFocusBBox(st, st.focusList);
      animateBBox(st, target, true);
    }
  }

  function setStepAndFocus(setupEl, stepIndex, focusList, instant) {
    if (!setupEl) return;
    var st = setupEl._jxgState;
    if (!st || !st.board) {
      setupEl._isSetupPlayer = true;
      mountBoard(setupEl);
      st = setupEl._jxgState;
      if (!st || !st.board) return;
    }
    var sIdx = typeof stepIndex === 'number' && stepIndex >= 0 ? stepIndex : 0;
    var fList = Array.isArray(focusList) ? focusList : [];
    st.stepIndex = sIdx;
    st.focusList = fList;

    var newlyShown = [];
    st.board.suspendUpdate();
    st.items.forEach(function (it) {
      var shouldShow = it.step <= sIdx;
      if (shouldShow && !it.visible) {
        it.visible = true;
        it.els.forEach(function (el) { el.setAttribute({ visible: true }); });
        if (!instant && it.step === sIdx && sIdx > 0) newlyShown.push(it);
      } else if (!shouldShow && it.visible) {
        it.visible = false;
        it.els.forEach(function (el) { el.setAttribute({ visible: false }); });
      }
    });
    st.board.unsuspendUpdate();

    if (newlyShown.length) animateFadeIn(newlyShown);
    // labels: a focused named point or line shows its name; nothing else is hidden by focus
    st.items.forEach(function (it) {
      if (!it.labelable || !it.name) return;
      var on = it.visible && fList.indexOf(it.name) >= 0;
      if (!!it.labelOn === on) return;
      it.labelOn = on;
      it.els.forEach(function (el) { el.setAttribute({ withLabel: on, name: it.name }); });
    });
    animateBBox(st, computeFocusBBox(st, fList), !!instant);
  }

  /* ---------- Three.js 3D scene for the meridional ray only ---------- */
  function loadThreeScript(cb) {
    if (window.THREE) { cb(true); return; }
    if (threeLoading) { threeLoading.push(cb); return; }
    threeLoading = [cb];
    var s = document.createElement('script');
    s.src = THREE_URL;
    s.async = true;
    s.onload = function () {
      var list = threeLoading || [];
      threeLoading = null;
      list.forEach(function (fn) { fn(!!window.THREE); });
    };
    s.onerror = function () {
      var list = threeLoading || [];
      threeLoading = null;
      list.forEach(function (fn) { fn(false); });
    };
    document.head.appendChild(s);
  }

  function makeLabelSprite(THREE, text, colorStr, fontStr) {
    var c = document.createElement('canvas');
    c.width = 256; c.height = 64;
    var ctx = c.getContext('2d');
    ctx.font = '700 24px ' + fontStr;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = colorStr;
    ctx.fillText(text, 128, 32);
    var tex = new THREE.CanvasTexture(c);
    var mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false });
    var sp = new THREE.Sprite(mat);
    sp.scale.set(1.35, 0.34, 1);
    return sp;
  }

  function mountThreeScene(container, spec) {
    if (container._threeMounted || container._threeFailed) return;
    container._threeMounted = true;
    loadThreeScript(function (ok) {
      if (!ok || !window.THREE) {
        container._threeFailed = true;
        container.hidden = true;
        return;
      }
      var THREE = window.THREE;
      var renderer;
      try {
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      } catch (e) {
        container._threeFailed = true;
        container.hidden = true;
        return;
      }
      container.hidden = false;
      container.innerHTML = '';
      renderer.domElement.className = 'sm-canvas';
      container.appendChild(renderer.domElement);
      var scene = new THREE.Scene();
      var camera = new THREE.PerspectiveCamera(34, 260 / 180, 0.1, 50);
      camera.position.set(0, 1.05, 4.7);
      camera.lookAt(0, 0, 0);
      var rootGroup = new THREE.Group();
      rootGroup.rotation.x = 0.24;
      rootGroup.rotation.y = -0.34;
      scene.add(rootGroup);

      function buildObjects() {
        while (rootGroup.children.length) rootGroup.remove(rootGroup.children[0]);
        var tok = readTokens();
        var pw = (spec.plane && spec.plane.width) || 4.4;
        var ph = (spec.plane && spec.plane.height) || 2.1;
        var pGeo = new THREE.PlaneGeometry(pw, ph);
        var pMat = new THREE.MeshBasicMaterial({ color: tok.lav2, transparent: true, opacity: 0.55, side: THREE.DoubleSide, depthWrite: false });
        rootGroup.add(new THREE.Mesh(pGeo, pMat));

        var bPts = [
          new THREE.Vector3(-pw / 2, -ph / 2, 0), new THREE.Vector3(pw / 2, -ph / 2, 0),
          new THREE.Vector3(pw / 2, ph / 2, 0), new THREE.Vector3(-pw / 2, ph / 2, 0),
          new THREE.Vector3(-pw / 2, -ph / 2, 0)
        ];
        rootGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(bPts), new THREE.LineBasicMaterial({ color: tok.violet })));

        var ax = spec.axis || { from: [-2.2, 0, 0], to: [2.2, 0, 0] };
        var axGeo = new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(ax.from[0], ax.from[1], ax.from[2]),
          new THREE.Vector3(ax.to[0], ax.to[1], ax.to[2])
        ]);
        rootGroup.add(new THREE.Line(axGeo, new THREE.LineBasicMaterial({ color: tok.violet })));

        (spec.surfaces || []).forEach(function (sf) {
          var rPts = [];
          for (var a = 0; a <= 32; a++) {
            var th = (a / 32) * Math.PI * 2;
            rPts.push(new THREE.Vector3(sf.x, Math.cos(th) * sf.r, Math.sin(th) * sf.r));
          }
          rootGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(rPts), new THREE.LineBasicMaterial({ color: tok.violet, transparent: true, opacity: 0.4 })));
        });

        if (spec.meridionalRay && spec.meridionalRay.points) {
          var mVecs = spec.meridionalRay.points.map(function (p) { return new THREE.Vector3(p[0], p[1], p[2]); });
          var mCurve = new THREE.CatmullRomCurve3(mVecs, false, 'catmullrom', 0.02);
          var tube = new THREE.TubeGeometry(mCurve, 32, 0.038, 8, false);
          rootGroup.add(new THREE.Mesh(tube, new THREE.MeshBasicMaterial({ color: tok.violet })));
          if (spec.meridionalRay.label) {
            var mLbl = makeLabelSprite(THREE, spec.meridionalRay.label, tok.violet, tok.font);
            mLbl.position.set(0, 0.88, 0);
            rootGroup.add(mLbl);
          }
        }

        if (spec.skewRay && spec.skewRay.points) {
          var sVecs = spec.skewRay.points.map(function (p) { return new THREE.Vector3(p[0], p[1], p[2]); });
          var sGeo = new THREE.BufferGeometry().setFromPoints(sVecs);
          var sLine = new THREE.Line(sGeo, new THREE.LineDashedMaterial({ color: tok.ink2, dashSize: 0.14, gapSize: 0.09 }));
          if (sLine.computeLineDistances) sLine.computeLineDistances();
          rootGroup.add(sLine);
          if (spec.skewRay.label) {
            var sLbl = makeLabelSprite(THREE, spec.skewRay.label, tok.ink2, tok.font);
            sLbl.position.set(0.15, -0.82, 0.35);
            rootGroup.add(sLbl);
          }
        }

        (spec.points || []).forEach(function (pt) {
          var spGeo = new THREE.SphereGeometry(0.068, 14, 14);
          var mesh = new THREE.Mesh(spGeo, new THREE.MeshBasicMaterial({ color: tok.violet }));
          mesh.position.set(pt.pos[0], pt.pos[1], pt.pos[2]);
          rootGroup.add(mesh);
          if (pt.label) {
            var lb = makeLabelSprite(THREE, pt.label, tok.ink, tok.font);
            lb.scale.set(0.65, 0.26, 1);
            lb.position.set(pt.pos[0], pt.pos[1] + (pt.pos[1] > 0.1 ? 0.22 : -0.22), pt.pos[2]);
            rootGroup.add(lb);
          }
        });
      }

      function resizeThree() {
        var cw = container.clientWidth || 236;
        var ch = container.clientHeight || 136;
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
        renderer.setSize(cw, ch, false);
        camera.aspect = cw / Math.max(ch, 1);
        camera.updateProjectionMatrix();
        renderer.render(scene, camera);
      }

      buildObjects();
      resizeThree();

      var dragging = false, lastX = 0, lastY = 0;
      renderer.domElement.addEventListener('pointerdown', function (e) {
        dragging = true; lastX = e.clientX; lastY = e.clientY;
        e.stopPropagation();
      });
      window.addEventListener('pointermove', function (e) {
        if (!dragging) return;
        rootGroup.rotation.y += (e.clientX - lastX) * 0.01;
        rootGroup.rotation.x = Math.max(-0.7, Math.min(0.8, rootGroup.rotation.x + (e.clientY - lastY) * 0.01));
        lastX = e.clientX; lastY = e.clientY;
        renderer.render(scene, camera);
      });
      window.addEventListener('pointerup', function () { dragging = false; });

      activeThree.push({ container: container, rebuild: function () { buildObjects(); resizeThree(); }, resize: resizeThree });
    });
  }

  function checkLazyThree() {
    document.querySelectorAll('[data-three]').forEach(function (el) {
      if (el._threeMounted || el._threeFailed) return;
      var cardEl = el.closest('.card');
      var sheetEl = el.closest('.sheet');
      if (!cardEl || !cardEl._c || !cardEl._c.three) return;
      if (sheetEl && sheetEl.classList.contains('is-open')) {
        mountThreeScene(el, cardEl._c.three);
      }
    });
  }

  function mountAll() {
    if (!ro && 'ResizeObserver' in window) {
      ro = new ResizeObserver(function (entries) {
        entries.forEach(function (en) {
          var el = en.target;
          if (el._diag) resizeBoard(el);
          else if (el.hasAttribute('data-three')) {
            activeThree.forEach(function (item) { if (item.container === el) item.resize(); });
          }
        });
      });
    }
    document.querySelectorAll('[data-diagram], [data-canvas]').forEach(function (el) {
      var cardEl = el.closest('.card');
      var c = cardEl && cardEl._c;
      if (!c) return;
      var key = el.getAttribute('data-diagram') || el.getAttribute('data-canvas');
      var diag = key === 'setup' ? ((c.d && (c.d.setup || c.d.art)) || c.setup) : c.art;
      if (hasDiagram(diag)) {
        el._diag = diag;
        el._isSetupPlayer = el.classList.contains('mf-setup');
        mountBoard(el);
        if (ro) ro.observe(el);
      }
    });
    document.querySelectorAll('[data-three]').forEach(function (el) {
      if (ro) ro.observe(el);
      var sheetEl = el.closest('.sheet');
      if (sheetEl && !sheetEl._threeObserved && 'MutationObserver' in window) {
        sheetEl._threeObserved = true;
        new MutationObserver(checkLazyThree).observe(sheetEl, { attributes: true, attributeFilter: ['class'] });
      }
    });
    checkLazyThree();
    if (!themeBound && 'MutationObserver' in window) {
      themeBound = true;
      new MutationObserver(function () { SM.Diagram.redraw(null, true); }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
      if (window.matchMedia) {
        var mq = window.matchMedia('(prefers-color-scheme: dark)');
        if (mq.addEventListener) mq.addEventListener('change', function () { SM.Diagram.redraw(null, true); });
      }
      window.addEventListener('resize', function () { SM.Diagram.redraw(); });
    }
  }

  SM.Diagram = {
    hasDiagram: hasDiagram,
    mountAll: mountAll,
    redraw: function (root, fullRebuild) {
      var scope = root || document;
      scope.querySelectorAll('[data-diagram], [data-canvas]').forEach(function (el) {
        if (!el._diag) return;
        if (fullRebuild || !el._jxgState) mountBoard(el);
        else resizeBoard(el);
      });
      activeThree.forEach(function (item) {
        if (!root || root.contains(item.container)) item.rebuild();
      });
      checkLazyThree();
    },
    setStepAndFocus: setStepAndFocus,
    setFocus: function (setupEl, focusList) {
      var st = setupEl && setupEl._jxgState;
      setStepAndFocus(setupEl, st ? st.stepIndex : 0, focusList, false);
    }
  };
  SM.Canvas = SM.Diagram;
})();
