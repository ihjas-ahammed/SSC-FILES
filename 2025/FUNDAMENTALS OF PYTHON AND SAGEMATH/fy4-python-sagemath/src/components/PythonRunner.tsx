import React, { useState, useEffect, useRef } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import { oneDark } from '@codemirror/theme-one-dark';
import { EditorView } from '@codemirror/view';
import { Slide } from '../types';

interface Props {
  slide: Slide;
  onComplete: () => void;
}

declare global {
  interface Window {
    loadPyodide?: any;
    pyodide?: any;
  }
}

const PYODIDE_URL = 'https://cdn.jsdelivr.net/pyodide/v0.24.0/full/pyodide.js';
const PACKAGE_LIST = ['numpy', 'pandas', 'matplotlib'];

const customTheme = EditorView.theme({
  '&': {
    backgroundColor: 'transparent',
    height: '260px',
  },
  '.cm-scroller': {
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },
  '.cm-content': {
    fontSize: '14px',
    lineHeight: 1.65,
  },
  '.cm-focused': {
    outline: 'none',
  },
});

const loadScript = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) {
      existing.addEventListener('load', () => resolve());
      existing.addEventListener('error', () => reject(new Error('Failed to load pyodide script')));
      return;
    }

    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load pyodide script'));
    document.head.appendChild(script);
  });
};

const PythonRunner: React.FC<Props> = ({ slide, onComplete }) => {
  const [code, setCode] = useState(slide.code || '');
  const [results, setResults] = useState<Array<{ id: string; output: string; imageSrc: string | null }>>([]);
  const [ready, setReady] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [running, setRunning] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [tempInput, setTempInput] = useState('');
  const [inputHandled, setInputHandled] = useState(false);
  const [inputPrompts, setInputPrompts] = useState<string[]>([]);
  const [userInputs, setUserInputs] = useState<string[]>([]);
  const [tempInputs, setTempInputs] = useState<string[]>([]);
  const [currentPromptIndex, setCurrentPromptIndex] = useState(0);
  const [isRerun, setIsRerun] = useState(false);
  const [isExecuting, setIsExecuting] = useState(false);
  const outputRef = useRef<HTMLDivElement>(null);
  const pyodideRef = useRef<any>(null);

  useEffect(() => {
    let canceled = false;

    const setupPyodide = async () => {
      try {
        if (!window.loadPyodide) {
          await loadScript(PYODIDE_URL);
        }

        const pyodide = await window.loadPyodide({ indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.24.0/full/' });
        await pyodide.loadPackage(PACKAGE_LIST);
        pyodideRef.current = pyodide;

        pyodide.runPython(`
import sys, io, os, base64, warnings
from io import BytesIO
sys.stdout = io.StringIO()
sys.stderr = sys.stdout
warnings.filterwarnings('ignore')
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt

input_prompts = []
userInputs = []

def input(prompt=""):
    if len(userInputs) > 0:
        return userInputs.pop(0)
    else:
        input_prompts.append(prompt)
        return ""

import builtins
builtins.input = input

def _capture_plot():
    if plt.get_fignums():
        buf = BytesIO()
        plt.savefig(buf, format='png', bbox_inches='tight')
        buf.seek(0)
        png_data = base64.b64encode(buf.read()).decode('ascii')
        plt.close('all')
        return png_data
    return ''
`);

        if (!canceled) {
          setReady(true);
        }
      } catch (e: any) {
        setError(e?.message || 'Failed to initialize Pyodide');
      } finally {
        if (!canceled) {
          setLoading(false);
        }
      }
    };

    setupPyodide();

    return () => {
      canceled = true;
    };
  }, []);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [results]);

  const handleSingleInputSubmit = () => {
    const value = tempInputs[currentPromptIndex];
    if (!value) return;
    setCurrentPromptIndex(prev => prev + 1);
    if (currentPromptIndex + 1 >= inputPrompts.length) {
      setUserInputs(tempInputs);
      setInputHandled(true);
      setIsRerun(true);
      runCode();
    }
  };

  const runCode = async () => {
    if (!pyodideRef.current) {
      setError('Python runtime is not ready yet.');
      return;
    }

    setRunning(true);
    setIsExecuting(true);
    setError(null);
    setInputHandled(false);
    setInputPrompts([]);
    setUserInputs([]);
    setCurrentPromptIndex(0);
    setIsRerun(false);

    try {
      const pyodide = pyodideRef.current;
      pyodide.runPython('input_prompts = []');
      pyodide.globals.set('userInputs', userInputs);
      pyodide.runPython('import sys, io\nsys.stdout = io.StringIO()\nsys.stderr = sys.stdout');

      const userCode = `\n${code}\n`;
      await pyodide.runPythonAsync(userCode);
      const result = pyodide.runPython('sys.stdout.getvalue()');
      const pngBase64 = pyodide.runPython('_capture_plot()');
      const imageSrc = pngBase64 ? `data:image/png;base64,${pngBase64}` : null;

      const prompts = pyodide.runPython('input_prompts').toJs();
      setInputPrompts(prompts);

      setResults([{
        id: `${Date.now()}`,
        output: result || 'Execution completed successfully.',
        imageSrc,
      }]);
    } catch (err: any) {
      setResults([{
        id: `${Date.now()}`,
        output: err?.message || String(err) || 'Execution failed.',
        imageSrc: null,
      }]);
    } finally {
      setRunning(false);
      setIsExecuting(false);
      setIsRerun(false);
    }
  };

  return (
    <div className="flex flex-col h-full animate-in slide-in-from-right-4 duration-300">
      <div className="flex-grow overflow-y-auto no-scrollbar">
        <div className="space-y-6">
          <div className="glass-panel p-6 rounded-3xl">
            {slide.title && <h2 className="text-2xl font-black text-white mb-4">{slide.title}</h2>}
            {slide.content && <p className="text-slate-200 leading-relaxed">{slide.content}</p>}
          </div>

          <div className="glass-panel p-4 rounded-3xl bg-slate-900/80 border border-slate-700">
            <div className="flex items-center justify-between mb-3">
              <span className="text-slate-300 font-bold">Python Editor</span>
              <button
                type="button"
                onClick={runCode}
                disabled={!ready || loading || running}
                className="bg-duo-green text-slate-950 font-bold px-4 py-2 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {running ? 'Running...' : 'Run'}
              </button>
            </div>
            <div className="rounded-3xl border border-slate-700 bg-slate-950/90 overflow-hidden">
              <CodeMirror
                value={code}
                onChange={setCode}
                extensions={[python(), customTheme]}
                theme={oneDark}
                height="260px"
                basicSetup={{
                  lineNumbers: false,
                  foldGutter: false,
                  highlightActiveLineGutter: false,
                  highlightSpecialChars: false,
                  history: true,
                  drawSelection: true,
                  dropCursor: true,
                  allowMultipleSelections: true,
                  indentOnInput: true,
                  syntaxHighlighting: true,
                  bracketMatching: true,
                  closeBrackets: true,
                  autocompletion: false,
                  rectangularSelection: false,
                  crosshairCursor: false,
                  highlightActiveLine: true,
                  highlightSelectionMatches: true,
                  closeBracketsKeymap: true,
                  defaultKeymap: true,
                  searchKeymap: true,
                  historyKeymap: true,
                  foldKeymap: false,
                  completionKeymap: false,
                  lintKeymap: false,
                }}
              />
            </div>
          </div>

          <div className="glass-panel p-4 rounded-3xl bg-slate-900/80 border border-slate-700">
            <div className="flex items-center justify-between mb-3">
              <span className="text-slate-300 font-bold">Output</span>
              {loading && <span className="text-slate-400 text-xs">Loading runtime...</span>}
            </div>
            {results.length === 0 ? (
              <div className="text-slate-500 italic">Run the cell above to see console output and plots inline.</div>
            ) : (
              <div className="space-y-5" ref={outputRef}>
                {results.map(result => (
                  <div key={result.id} className="rounded-3xl border border-slate-700 bg-slate-950/90 p-4">
                    <div className="text-slate-400 text-xs uppercase tracking-[0.2em] mb-3">Output cell</div>
                    <pre className="whitespace-pre-wrap text-slate-100 text-sm leading-6 max-h-[220px] overflow-y-auto hide-scrollbar">{result.output}</pre>
                    {result.imageSrc && (
                      <img
                        src={result.imageSrc}
                        alt="Python plot output"
                        className="mt-4 w-full rounded-3xl border border-slate-700"
                      />
                    )}
                  </div>
                ))}
                {inputPrompts.length > 0 && currentPromptIndex < inputPrompts.length && !isExecuting && (
                  <div className="rounded-3xl border border-slate-700 bg-slate-950/90 p-4">
                    <div className="text-slate-400 text-xs uppercase tracking-[0.2em] mb-3">Input required</div>
                    <div className="mb-3">
                      <label className="block text-slate-300 text-sm mb-1">{inputPrompts[currentPromptIndex] || `Input ${currentPromptIndex + 1}:`}</label>
                      <div className="flex">
                        <input
                          type="text"
                          value={tempInputs[currentPromptIndex] || ''}
                          onChange={(e) => {
                            const newTempInputs = [...tempInputs];
                            newTempInputs[currentPromptIndex] = e.target.value;
                            setTempInputs(newTempInputs);
                          }}
                          onKeyDown={(e) => e.key === 'Enter' && handleSingleInputSubmit()}
                          className="flex-1 px-3 py-2 bg-slate-800 border border-slate-600 rounded-l-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:border-slate-500"
                          placeholder="Type your input here..."
                        />
                        <button
                          onClick={handleSingleInputSubmit}
                          disabled={!tempInputs[currentPromptIndex]}
                          className="px-3 py-2 bg-slate-700 border border-slate-600 rounded-r-lg text-slate-100 hover:bg-slate-600 disabled:opacity-50"
                        >
                          ▶
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {error && (
            <div className="glass-panel p-4 rounded-3xl bg-red-900/90 border border-red-700 text-red-100">
              <strong>Error:</strong> {error}
            </div>
          )}
        </div>
      </div>

      <div className="pt-4 border-t border-white/10 shrink-0">
        <button
          type="button"
          onClick={onComplete}
          className="w-full bg-duo-blue text-white font-black py-4 rounded-2xl uppercase tracking-widest transition-all hover:bg-blue-500 active:scale-[0.98]"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default PythonRunner;
