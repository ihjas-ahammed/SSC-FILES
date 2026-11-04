export const PYODIDE_URL = 'https://cdn.jsdelivr.net/pyodide/v0.24.0/full/pyodide.js';

let pyodidePromise: Promise<any> | null = null;

export const loadGlobalPyodide = (): Promise<any> => {
  if (!pyodidePromise) {
    pyodidePromise = new Promise((resolve, reject) => {
      try {
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

  // Pre-load heavy mathematical packages (added sympy)
  await pyodide.loadPackage(['numpy', 'pandas', 'matplotlib', 'sympy']);

  await pyodide.runPythonAsync(`
import sys, io, os, base64, warnings
from io import BytesIO
import js
import builtins

sys.stdout = io.StringIO()
sys.stderr = sys.stdout

warnings.filterwarnings('ignore')

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

def custom_input(prompt_text=""):
    val = js.prompt(prompt_text)
    return val if val is not None else ""

builtins.input = custom_input
  `);

  return pyodide;
};