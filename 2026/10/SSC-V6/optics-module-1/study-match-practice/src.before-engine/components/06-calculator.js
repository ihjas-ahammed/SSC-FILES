/* A bundled math.js engine runs in a worker, keeping long calculations off the UI. */
(function () {
  var SM = window.SM, $ = SM.$;
  var worker, pending, timeout, target, previousFocus, scalar = null, mode = 'RAD', requestId = 0, revision = 0, calculationRevision;
  function workerMain() {
    var scope = new Map();
    var angleFns = ['sin', 'cos', 'tan', 'sec', 'csc', 'cot'];
    var inverseFns = ['asin', 'acos', 'atan', 'asec', 'acsc', 'acot'];
    self.onmessage = function (e) {
      var msg = e.data;
      try {
        angleFns.forEach(function (name) { scope.set(name, function (x) { return math[name](msg.mode === 'DEG' && typeof x === 'number' ? math.unit(x, 'deg') : x); }); });
        inverseFns.forEach(function (name) { scope.set(name, function (x) { var n = math[name](x); return msg.mode === 'DEG' ? math.multiply(n, 180 / Math.PI) : n; }); });
        scope.set('atan2', function (y, x) { var n = math.atan2(y, x); return msg.mode === 'DEG' ? n * 180 / Math.PI : n; });
        var value = math.evaluate(msg.expression, scope);
        if (typeof value === 'function') throw new Error('Call the function with parentheses, for example sin(pi/2).');
        if (typeof value === 'number' && !Number.isFinite(value)) throw new Error('Result is not finite. Check for division by zero or overflow.');
        scope.set('ans', value);
        self.postMessage({ id: msg.id, result: math.format(value, { precision: 14 }), scalar: typeof value === 'number' && Number.isFinite(value) ? value : null });
      } catch (error) { self.postMessage({ id: msg.id, error: error.message || 'Check your expression.' }); }
    };
  }
  function resetWorker() { if (worker) worker.terminate(); worker = null; }
  function error(message) {
    $('calcError').textContent = message; $('calcError').hidden = false;
    $('calcResult').textContent = 'Calculation unavailable.';
    scalar = null; $('calcUse').disabled = true;
  }
  function settle() { clearTimeout(timeout); pending = false; $('calcEvaluate').disabled = false; }
  function engine() {
    if (worker) return worker;
    var source = $('calculator-engine').textContent + '\n(' + workerMain.toString() + ')();';
    var url = URL.createObjectURL(new Blob([source], { type: 'text/javascript' }));
    worker = new Worker(url); URL.revokeObjectURL(url);
    worker.onmessage = function (e) {
      if (!pending || e.data.id !== requestId) return;
      settle();
      if (calculationRevision !== revision) { $('calcResult').textContent = 'Expression changed. Calculate again.'; return; }
      if (e.data.error) { error(e.data.error); return; }
      $('calcError').hidden = true;
      $('calcResult').textContent = e.data.result;
      scalar = e.data.scalar;
      $('calcUse').disabled = scalar === null || !target || target.disabled;
    };
    worker.onerror = function () { settle(); resetWorker(); error('Could not start the calculator. Close it and try again.'); };
    return worker;
  }
  function evaluate() {
    var expr = $('calcExpression').value.trim().replace(/^=/, '').replace(/[×·]/g, '*').replace(/÷/g, '/').replace(/[−–]/g, '-').replace(/π/g, 'pi').replace(/√\s*\(/g, 'sqrt(');
    if (!expr) { $('calcExpression').focus(); return; }
    if (pending) return;
    scalar = null; $('calcUse').disabled = true; $('calcError').hidden = true;
    if (expr.length > 2000) { error('Keep expressions under 2,000 characters.'); return; }
    try {
      var w = engine(); pending = true; $('calcEvaluate').disabled = true;
      calculationRevision = revision;
      $('calcResult').textContent = 'Calculating…';
      w.postMessage({ id: ++requestId, expression: expr, mode: mode });
      timeout = setTimeout(function () { settle(); resetWorker(); error('Calculation took too long. Try a smaller expression. Calculator memory has been cleared.'); }, 4000);
    } catch (e) { settle(); resetWorker(); error('This browser could not start the calculator: ' + e.message); }
  }
  function open(input, expression) {
    if ($('breakAlert').open) return;
    previousFocus = document.activeElement;
    revision++;
    target = input && !input.disabled ? input : null;
    scalar = null; $('calcUse').disabled = true;
    $('calcError').hidden = true;
    if (expression !== undefined) { $('calcExpression').value = expression.replace(/^=/, ''); $('calcResult').textContent = 'Press Enter to calculate.'; }
    if (!$('calculator').open) $('calculator').showModal();
    $('calcExpression').focus();
  }
  function close() { $('calculator').close(); }
  SM.openCalculator = open;
  SM.initCalculator = function () {
    $('calcBtn').addEventListener('click', function () { open(); });
    $('calcClose').addEventListener('click', close);
    $('calculator').addEventListener('close', function () { if (previousFocus && previousFocus.isConnected && !previousFocus.disabled) previousFocus.focus({ preventScroll: true }); });
    $('calcForm').addEventListener('submit', function (e) { e.preventDefault(); evaluate(); });
    $('calcExpression').addEventListener('input', function () { revision++; scalar = null; $('calcUse').disabled = true; $('calcError').hidden = true; });
    $('calcMode').addEventListener('click', function () {
      mode = mode === 'RAD' ? 'DEG' : 'RAD';
      revision++;
      this.textContent = mode; this.setAttribute('aria-label', 'Switch to ' + (mode === 'RAD' ? 'degrees' : 'radians'));
      $('calcModeLabel').textContent = mode === 'RAD' ? 'radians' : 'degrees';
      scalar = null; $('calcUse').disabled = true; $('calcResult').textContent = 'Angle mode changed. Calculate again.';
    });
    $('calcHelpBtn').addEventListener('click', function () { $('calcHelp').hidden = !$('calcHelp').hidden; this.setAttribute('aria-expanded', String(!$('calcHelp').hidden)); });
    var keys = [['sin(', 'sin'], ['cos(', 'cos'], ['tan(', 'tan'], ['asin(', 'sin⁻¹'], ['sqrt(', '√'], ['log(', 'ln'], ['log10(', 'log₁₀'], ['exp(', 'exp'], ['^', 'xʸ'], ['pi', 'π'], ['i', 'i'], ['ans', 'ans'], ['(', '('], [')', ')'], [',', ','], ['!', 'n!']];
    keys.forEach(function (key) {
      var b = document.createElement('button'); b.type = 'button'; b.className = 'chip'; b.textContent = key[1]; b.setAttribute('aria-label', 'Insert ' + key[0]);
      b.addEventListener('click', function () { var input = $('calcExpression'); input.setRangeText(key[0], input.selectionStart, input.selectionEnd, 'end'); input.dispatchEvent(new Event('input')); input.focus(); });
      $('calcKeys').appendChild(b);
    });
    $('calcUse').addEventListener('click', function () {
      if (scalar === null || !target || target.disabled) return;
      target.value = String(scalar); target.dispatchEvent(new Event('input', { bubbles: true })); close(); target.focus({ preventScroll: true });
    });
    document.querySelectorAll('[data-calculator]').forEach(function (button) { button.addEventListener('click', function (e) { e.stopPropagation(); var input = button.closest('.card').querySelector('[data-numerical]'); open(input, input.value); }); });
    document.querySelectorAll('[data-numerical]').forEach(function (input) {
      input.addEventListener('keydown', function (e) { if (e.key === '=') { e.preventDefault(); open(input, input.value); } });
      input.addEventListener('input', function () { if (input.value.trim().charAt(0) === '=') { var expr = input.value; input.value = ''; open(input, expr); } });
    });
    document.addEventListener('keydown', function (e) {
      if ($('calculator').open || $('breakAlert').open || e.ctrlKey || e.metaKey || e.altKey) return;
      if (e.key === '=' && !e.target.closest('input:not([type="checkbox"]):not([type="radio"]), textarea, [contenteditable="true"]')) { e.preventDefault(); open(); }
    });
  };
})();
