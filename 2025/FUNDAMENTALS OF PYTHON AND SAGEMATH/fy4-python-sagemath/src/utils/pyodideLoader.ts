export const PYODIDE_URL = 'https://cdn.jsdelivr.net/pyodide/v0.24.0/full/pyodide.js';

let pyodidePromise: Promise<any> | null = null;

export const loadGlobalPyodide = (): Promise<any> => {
  if (!pyodidePromise) {
    pyodidePromise = new Promise((resolve, reject) => {
      try {
        // If already loaded via script tag somehow
        if ((window as any).loadPyodide) {
          initPyodide((window as any).loadPyodide).then(resolve).catch(reject);
          return;
        }

        const script = document.createElement('script');
        script.src = PYODIDE_URL;
        script.async = true;
        document.head.appendChild(script);

        script.onload = () => {
          initPyodide((window as any).loadPyodide).then(resolve).catch(reject);
        };

        script.onerror = () => {
          reject(new Error('Failed to load Pyodide script from CDN.'));
        };
      } catch (error) {
        reject(error);
      }
    });
  }
  return pyodidePromise;
};

const initPyodide = async (loadPyodideFn: any) => {
  const pyodide = await loadPyodideFn({
    indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.24.0/full/',
  });

  // Pre-load heavy mathematical packages
  await pyodide.loadPackage(['numpy', 'pandas', 'matplotlib']);

  // Set up the Python environment:
  // 1. Override standard stdout/stderr
  // 2. Setup Matplotlib Agg backend for base64 image extraction
  // 3. Override standard input() to use synchronous JS window.prompt
  await pyodide.runPythonAsync(`
import sys, io, os, base64, warnings
from io import BytesIO
import js
import builtins

# Redirect stdout and stderr
sys.stdout = io.StringIO()
sys.stderr = sys.stdout

# Silence warnings
warnings.filterwarnings('ignore')

# Matplotlib configuration
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt

def _capture_plot():
    if plt.get_fignums():
        buf = BytesIO()
        plt.savefig(buf, format='png', bbox_inches='tight')
        buf.seek(0)
        png_data = base64.b64encode(buf.read()).decode('ascii')
        plt.close('all')
        return png_data
    return ''

# Synchronous input override
def custom_input(prompt_text=""):
    # js.prompt blocks the thread natively and returns string or None
    val = js.prompt(prompt_text)
    return val if val is not None else ""

builtins.input = custom_input
  `);

  return pyodide;
};