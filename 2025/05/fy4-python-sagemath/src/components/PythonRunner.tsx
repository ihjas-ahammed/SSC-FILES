import React, { useState, useEffect, useRef } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import { oneDark } from '@codemirror/theme-one-dark';
import { EditorView } from '@codemirror/view';
import { Slide } from '../types';
import { loadGlobalPyodide } from '../utils/pyodideLoader';

interface Props {
  slide: Slide;
  onComplete: () => void;
}

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

const PythonRunner: React.FC<Props> = ({ slide, onComplete }) => {
  const[code, setCode] = useState(slide.code || '');
  const [results, setResults] = useState<Array<{ id: string; output: string; imageSrc: string | null }>>([]);
  const[ready, setReady] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [running, setRunning] = useState(false);
  
  const outputRef = useRef<HTMLDivElement>(null);
  const pyodideRef = useRef<any>(null);

  useEffect(() => {
    let isMounted = true;

    loadGlobalPyodide()
      .then((pyodide) => {
        if (isMounted) {
          pyodideRef.current = pyodide;
          setReady(true);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err?.message || 'Failed to initialize Pyodide');
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  },[]);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [results]);

  const runCode = async () => {
    if (!pyodideRef.current) {
      setError('Python runtime is not ready yet.');
      return;
    }

    setRunning(true);
    setError(null);

    // Using setTimeout to allow React to render the "Running..." state 
    // before the potentially thread-heavy Pyodide execution blocks the UI
    setTimeout(async () => {
      try {
        const pyodide = pyodideRef.current;
        
        // Reset the StringIO buffers for a fresh run
        pyodide.runPython(`
import sys, io
sys.stdout = io.StringIO()
sys.stderr = sys.stdout
        `);

        // Run user code
        await pyodide.runPythonAsync(`\n${code}\n`);
        
        // Extract printed output and any plotted images
        const result = pyodide.runPython('sys.stdout.getvalue()');
        const pngBase64 = pyodide.runPython('_capture_plot()');
        const imageSrc = pngBase64 ? `data:image/png;base64,${pngBase64}` : null;

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
      }
    }, 50);
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
                className="bg-duo-green text-slate-950 font-bold px-4 py-2 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-green-500 transition-colors"
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
                  history: true,
                  drawSelection: true,
                  syntaxHighlighting: true,
                  bracketMatching: true,
                  closeBrackets: true,
                }}
              />
            </div>
          </div>

          <div className="glass-panel p-4 rounded-3xl bg-slate-900/80 border border-slate-700">
            <div className="flex items-center justify-between mb-3">
              <span className="text-slate-300 font-bold">Output</span>
              {loading && <span className="text-slate-400 text-xs animate-pulse">Booting Python Engine...</span>}
            </div>
            {results.length === 0 ? (
              <div className="text-slate-500 italic">Run the cell above to see console output and plots inline. (Note: input() will trigger a browser prompt)</div>
            ) : (
              <div className="space-y-5" ref={outputRef}>
                {results.map(result => (
                  <div key={result.id} className="rounded-3xl border border-slate-700 bg-slate-950/90 p-4">
                    <div className="text-slate-400 text-xs uppercase tracking-[0.2em] mb-3">Output stream</div>
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
              </div>
            )}
          </div>

          {error && (
            <div className="glass-panel p-4 rounded-3xl bg-red-900/90 border border-red-700 text-red-100">
              <strong>Engine Error:</strong> {error}
            </div>
          )}
        </div>
      </div>

      <div className="pt-4 border-t border-white/10 shrink-0">
        <button
          type="button"
          onClick={onComplete}
          className="w-full bg-duo-blue border-duo-blue-dark border-b-4 hover:bg-blue-500 text-white font-black py-4 rounded-2xl uppercase tracking-widest transition-all active:border-b-0 active:translate-y-1 shadow-md"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default PythonRunner;