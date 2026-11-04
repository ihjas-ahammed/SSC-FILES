/* ==========================================================================
   Canvas2D diagram renderer + lazy Three.js 3D scene for the meridional ray
   ========================================================================== */
(function () {
  var SM = window.SM = window.SM || {};
  var LOGICAL_W = 260, LOGICAL_H = 180;
  var THREE_URL = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
  var threeLoading = null, ro = null, themeBound = false;
  var activeThree = [];

  function readTokens() {
    var cs = getComputedStyle(document.documentElement);
    var get = function (k, fb) { return (cs.getPropertyValue(k) || '').trim() || fb; };
    return {
      ink: get('--ink', '#1B2559'),
      ink2: get('--ink-2', '#4A5480'),
      lav: get('--lav', '#F1EDFB'),
      lav2: get('--lav-2', '#DED6F6'),
      violet: get('--violet', '#6A55D8'),
      onViolet: get('--on-violet', '#FFFFFF'),
      amber: get('--amber', '#F6B72B'),
      hl: get('--hl', '#C98200'),
      card: get('--card', '#FFFFFF'),
      font: get('--font', '"Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, sans-serif')
    };
  }

  function hasRole(roleStr, token) {
    if (!roleStr) return false;
    return (' ' + roleStr + ' ').indexOf(' ' + token + ' ') !== -1;
  }

  function applyFill(ctx, role, tok) {
    if (hasRole(role, 'h')) { ctx.fillStyle = tok.amber; return true; }
    if (hasRole(role, 'f')) { ctx.fillStyle = tok.violet; return true; }
    if (hasRole(role, 's')) { ctx.fillStyle = tok.lav2; return true; }
    return false;
  }

  function applyStroke(ctx, op, tok, focused) {
    var role = op.role || 'lk';
    var w = op.width || (hasRole(role, 'gk') ? 1.6 : 2);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.setLineDash(Array.isArray(op.dash) ? op.dash : []);
    if (focused) {
      ctx.strokeStyle = tok.hl;
      ctx.lineWidth = Math.max(w + 0.6, 2.8);
      ctx.globalAlpha = 1;
      return true;
    }
    if (hasRole(role, 'hk')) { ctx.strokeStyle = tok.amber; ctx.lineWidth = w; ctx.globalAlpha = 1; return true; }
    if (hasRole(role, 'lk') || hasRole(role, 'ok')) { ctx.strokeStyle = tok.violet; ctx.lineWidth = w; ctx.globalAlpha = 1; return true; }
    if (hasRole(role, 'gk')) { ctx.strokeStyle = tok.ink2; ctx.lineWidth = w; ctx.globalAlpha = 0.55; return true; }
    return false;
  }

  function traceCurve(ctx, pts, closed) {
    if (!pts || pts.length < 2) return;
    ctx.beginPath();
    ctx.moveTo(pts[0][0], pts[0][1]);
    if (pts.length === 3) {
      ctx.quadraticCurveTo(pts[1][0], pts[1][1], pts[2][0], pts[2][1]);
    } else if (pts.length === 4) {
      ctx.bezierCurveTo(pts[1][0], pts[1][1], pts[2][0], pts[2][1], pts[3][0], pts[3][1]);
    } else if (pts.length >= 5 && pts.length % 2 === 1) {
      for (var i = 1; i < pts.length - 1; i += 2) {
        ctx.quadraticCurveTo(pts[i][0], pts[i][1], pts[i + 1][0], pts[i + 1][1]);
      }
    } else {
      for (var j = 1; j < pts.length; j++) ctx.lineTo(pts[j][0], pts[j][1]);
    }
    if (closed) ctx.closePath();
  }

  function drawOps(container) {
    var ops = container._ops;
    if (!ops || !ops.length) return;
    var canvas = container.querySelector('canvas.sm-canvas');
    if (!canvas) {
      canvas = document.createElement('canvas');
      canvas.className = 'sm-canvas';
      canvas.setAttribute('aria-hidden', 'true');
      container.innerHTML = '';
      container.appendChild(canvas);
    }
    var rect = canvas.getBoundingClientRect();
    var cw = canvas.clientWidth || rect.width || 236;
    var ch = canvas.clientHeight || rect.height || 136;
    var dpr = Math.max(window.devicePixelRatio || 1, 1);
    var pw = Math.max(1, Math.round(cw * dpr));
    var ph = Math.max(1, Math.round(ch * dpr));
    if (canvas.width !== pw || canvas.height !== ph) {
      canvas.width = pw;
      canvas.height = ph;
    }
    var ctx = canvas.getContext('2d');
    if (!ctx) return;
    var scale = Math.min(cw / LOGICAL_W, ch / LOGICAL_H);
    var ox = (cw - LOGICAL_W * scale) / 2;
    var oy = (ch - LOGICAL_H * scale) / 2;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, cw, ch);
    ctx.setTransform(dpr * scale, 0, 0, dpr * scale, dpr * ox, dpr * oy);

    var tok = readTokens();
    var focusSet = container._focusSet || null;

    ops.forEach(function (op) {
      var name = op.name || op.part || '';
      var focused = !!(focusSet && name && focusSet[name]);
      var role = op.role || '';
      ctx.save();
      switch (op.op) {
        case 'line':
          ctx.beginPath();
          ctx.moveTo(op.x1, op.y1);
          ctx.lineTo(op.x2, op.y2);
          if (applyStroke(ctx, op, tok, focused)) ctx.stroke();
          break;
        case 'arrow':
          ctx.beginPath();
          ctx.moveTo(op.x1, op.y1);
          ctx.lineTo(op.x2, op.y2);
          if (applyStroke(ctx, op, tok, focused)) ctx.stroke();
          var ang = Math.atan2(op.y2 - op.y1, op.x2 - op.x1);
          var head = op.head || 7;
          ctx.setLineDash([]);
          ctx.globalAlpha = 1;
          ctx.fillStyle = focused ? tok.hl : (hasRole(role, 'hk') ? tok.amber : (hasRole(role, 'gk') ? tok.ink2 : tok.violet));
          ctx.beginPath();
          ctx.moveTo(op.x2, op.y2);
          ctx.lineTo(op.x2 - head * Math.cos(ang - 0.42), op.y2 - head * Math.sin(ang - 0.42));
          ctx.lineTo(op.x2 - head * Math.cos(ang + 0.42), op.y2 - head * Math.sin(ang + 0.42));
          ctx.closePath();
          ctx.fill();
          break;
        case 'polyline':
        case 'polygon':
          var pts = op.points || [];
          if (pts.length >= 2) {
            ctx.beginPath();
            ctx.moveTo(pts[0][0], pts[0][1]);
            for (var i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0], pts[i][1]);
            if (op.op === 'polygon') ctx.closePath();
            if (op.op === 'polygon' && applyFill(ctx, role, tok)) ctx.fill();
            if (applyStroke(ctx, op, tok, focused)) ctx.stroke();
          }
          break;
        case 'rect':
          var rx = op.rx || 0, x = op.x, y = op.y, w = op.w, h = op.h;
          ctx.beginPath();
          if (rx > 0 && ctx.roundRect) ctx.roundRect(x, y, w, h, rx);
          else ctx.rect(x, y, w, h);
          if (applyFill(ctx, role, tok)) ctx.fill();
          if (applyStroke(ctx, op, tok, focused)) ctx.stroke();
          break;
        case 'circle':
          ctx.beginPath();
          ctx.arc(op.cx, op.cy, op.r, 0, Math.PI * 2);
          if (applyFill(ctx, role || 'f', tok)) ctx.fill();
          if (focused || hasRole(role, 'ok') || hasRole(role, 'lk') || hasRole(role, 'hk')) {
            if (applyStroke(ctx, op, tok, focused)) ctx.stroke();
          }
          break;
        case 'ellipse':
          ctx.beginPath();
          ctx.ellipse(op.cx, op.cy, op.rx, op.ry, 0, 0, Math.PI * 2);
          if (applyFill(ctx, role, tok)) ctx.fill();
          if (applyStroke(ctx, op, tok, focused)) ctx.stroke();
          break;
        case 'curve':
          traceCurve(ctx, op.points, !!op.closed);
          if (op.closed && applyFill(ctx, role, tok)) ctx.fill();
          if (applyStroke(ctx, op, tok, focused)) ctx.stroke();
          break;
        case 'arc':
          ctx.beginPath();
          ctx.arc(op.cx, op.cy, op.r, (op.start || 0) * Math.PI / 180, (op.end || 0) * Math.PI / 180, !!op.ccw);
          if (applyStroke(ctx, op, tok, focused)) ctx.stroke();
          break;
        case 'text':
          var sz = op.size || 11;
          var weight = focused ? '800' : '700';
          ctx.font = weight + ' ' + sz + 'px ' + tok.font;
          var align = op.align || 'left';
          if (align === 'middle') align = 'center';
          if (align === 'end') align = 'right';
          ctx.textAlign = align;
          ctx.textBaseline = 'alphabetic';
          ctx.fillStyle = focused ? tok.hl : (hasRole(role, 'i') ? tok.onViolet : tok.ink);
          var txt = String(op.text || '');
          ctx.fillText(txt, op.x, op.y);
          if (focused && txt) {
            var tw = ctx.measureText(txt).width;
            var ux = op.x;
            if (align === 'center') ux -= tw / 2;
            else if (align === 'right') ux -= tw;
            ctx.strokeStyle = tok.hl;
            ctx.lineWidth = 1.4;
            ctx.setLineDash([]);
            ctx.beginPath();
            ctx.moveTo(ux, op.y + 2);
            ctx.lineTo(ux + tw, op.y + 2);
            ctx.stroke();
          }
          break;
      }
      ctx.restore();
    });
  }

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
          rootGroup.add(new THREE.Mesh(tube, new THREE.MeshBasicMaterial({ color: tok.amber })));
          if (spec.meridionalRay.label) {
            var mLbl = makeLabelSprite(THREE, spec.meridionalRay.label, tok.hl, tok.font);
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
          var col = pt.role === 'h' ? tok.amber : tok.violet;
          var mesh = new THREE.Mesh(spGeo, new THREE.MeshBasicMaterial({ color: col }));
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
      if (!cardEl || ! cardEl._c || !cardEl._c.three) return;
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
          if (el._ops) drawOps(el);
          else if (el.hasAttribute('data-three')) {
            activeThree.forEach(function (item) { if (item.container === el) item.resize(); });
          }
        });
      });
    }
    document.querySelectorAll('[data-canvas]').forEach(function (el) {
      var cardEl = el.closest('.card');
      var c = cardEl && cardEl._c;
      if (!c) return;
      var key = el.getAttribute('data-canvas');
      var ops = key === 'setup' ? ((c.d && (c.d.setup || c.d.art)) || c.setup) : c.art;
      if (Array.isArray(ops) && ops.length) {
        el._ops = ops;
        drawOps(el);
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
      new MutationObserver(function () { SM.Canvas.redraw(); }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
      if (window.matchMedia) {
        var mq = window.matchMedia('(prefers-color-scheme: dark)');
        if (mq.addEventListener) mq.addEventListener('change', function () { SM.Canvas.redraw(); });
      }
      window.addEventListener('resize', function () { SM.Canvas.redraw(); });
    }
  }

  SM.Canvas = {
    mountAll: mountAll,
    redraw: function (root) {
      var scope = root || document;
      scope.querySelectorAll('[data-canvas]').forEach(function (el) { if (el._ops) drawOps(el); });
      activeThree.forEach(function (item) {
        if (!root || root.contains(item.container)) item.rebuild();
      });
      checkLazyThree();
    },
    setFocus: function (setupEl, focusList) {
      if (!setupEl) return;
      var set = {};
      (focusList || []).forEach(function (k) { if (k) set[k] = 1; });
      setupEl._focusSet = set;
      if (setupEl._ops) drawOps(setupEl);
    }
  };
})();
