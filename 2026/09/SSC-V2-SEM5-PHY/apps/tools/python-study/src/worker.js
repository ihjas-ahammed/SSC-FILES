/* Pyodide worker: loads the runtime on first use, loads packages only when the code imports them.
   Messages in:  {id, code}            Messages out: {id, ok, out, err, ms}  or  {type:'ready'} */
const PYODIDE_VERSION = '0.26.4';
const BASE = `https://cdn.jsdelivr.net/pyodide/v${PYODIDE_VERSION}/full/`;
let py = null, booting = null, dataFiles = {}, seabornReady = false;

async function boot() {
  importScripts(BASE + 'pyodide.js');
  py = await loadPyodide({ indexURL: BASE });
  // the book's examples read examples/<file>, so the files go into that folder
  try { py.FS.mkdir('examples'); } catch (e) { /* already there */ }
  for (const [name, text] of Object.entries(dataFiles)) py.FS.writeFile('examples/' + name, text);
  // Keyboard input is not available in the browser: input() echoes a sample answer chosen from the prompt.
  await py.runPythonAsync(`
import builtins
# Each prompt gets a short list of answers. The last answer is a stop word (@ or q), so a read loop ends.
_SAMPLES = [('radius', ['2']), ('file', ['myfile.txt']), ('name', ['Asha']), ('marks', ['50 60 70']),
            ('text', ['hello', 'world', '@']), ('string', ['hello', 'world', '@']), ('number', ['3']),
            ('minimum', ['3,12']), ('element', ['30']), ('separated', ['1 2 3']), ('age', ['20']), ('quit', ['5', 'q'])]
_USED = {}
def _sample_input(prompt=''):
    p = str(prompt).lower()
    key = next((k for k, _ in _SAMPLES if k in p), None)
    seq = dict(_SAMPLES).get(key, ['5', '@', 'q'])
    n = _USED.get(key, 0)
    _USED[key] = n + 1
    value = seq[n] if n < len(seq) else seq[-1]
    print(prompt + value)
    return value
builtins.input = _sample_input
`);
  await py.runPythonAsync(`
import sys, io, contextlib
_ns = {}
def _fig_png():
    if 'matplotlib.pyplot' not in sys.modules:
        return None
    import matplotlib.pyplot as plt, base64
    if not plt.get_fignums():
        return None
    buf = io.BytesIO()
    plt.savefig(buf, format='png', dpi=90, bbox_inches='tight')
    plt.close('all')
    return base64.b64encode(buf.getvalue()).decode()
def _run(src):
    buf = io.StringIO()
    err = None
    try:
        with contextlib.redirect_stdout(buf), contextlib.redirect_stderr(buf):
            exec(compile(src, '<cell>', 'exec'), _ns)
    except BaseException as e:
        err = f"{type(e).__name__}: {e}"
    return buf.getvalue(), err, _fig_png()
`);
  return py;
}

self.onmessage = async (ev) => {
  const { id, code, warm, files } = ev.data;
  if (files) { dataFiles = files; return; }  // example data files, written to the virtual disk on boot
  if (warm) { if (!booting) booting = boot().then(() => postMessage({ type: 'ready' })); return; }
  const t0 = performance.now();
  try {
    if (!booting) booting = boot();
    await booting;
    await py.loadPackagesFromImports(code);
    // seaborn is pure Python: install it once, the first time a cell imports it
    if (/\bseaborn\b/.test(code) && !seabornReady) {
      await py.loadPackage('micropip');
      await py.runPythonAsync("import micropip\nawait micropip.install('seaborn')");
      seabornReady = true;
    }
    // Draw plots into memory (Agg). The default backend needs the browser DOM, which this worker does not have.
    if (/matplotlib/.test(code)) await py.runPythonAsync("import matplotlib\nmatplotlib.use('agg')");
    const run = py.globals.get('_run');
    const [out, err, img] = run(code).toJs();
    postMessage({ id, ok: !err, out, err, img, ms: Math.round(performance.now() - t0) });
  } catch (e) {
    postMessage({ id, ok: false, out: '', err: String((e && e.message) || e), ms: Math.round(performance.now() - t0) });
  }
};
