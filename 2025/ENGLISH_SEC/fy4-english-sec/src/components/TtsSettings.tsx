import React, { useState } from 'react';
import { X, Volume2, VolumeOff, Check, AlertCircle, Plus, Trash2 } from 'lucide-react';
import {
  TtsProvider,
  PROVIDER_LABELS,
  getProvider,
  setProvider,
  getGeminiKeys,
  setGeminiKeys,
  getSelectedGeminiModels,
  setSelectedGeminiModels,
  speakTts,
  stopTts,
  GEMINI_AVAILABLE_MODELS,
} from '../utils/tts';
import TtsLoadBar from './TtsLoadBar';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const SAMPLE =
  "Hello! This is a sample of how questions and answers will sound. The voice reads naturally, one sentence at a time.";

const PROVIDER_DESC: Record<TtsProvider, string> = {
  browser: "Free, unlimited. Uses your device's built-in voice. Instant, no network. Quality varies by device.",
  gemini: 'Google Gemini neural TTS — highest quality. Requires your own free API key(s). Stack quotas with multiple keys × models.',
};

const TtsSettings: React.FC<Props> = ({ isOpen, onClose }) => {
  const [provider, setProviderState] = useState<TtsProvider>(getProvider());
  const [keys, setKeys] = useState<string[]>(() => {
    const k = getGeminiKeys();
    return k.length ? k : [''];
  });
  const [selectedModels, setSelectedModelsState] = useState<string[]>(getSelectedGeminiModels);
  const [testing, setTesting] = useState(false);
  const [progress, setProgress] = useState({ ready: 0, total: 0 });
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const persistKeys = (next: string[]) => {
    setKeys(next);
    setGeminiKeys(next);
  };

  const handleSelect = (p: TtsProvider) => {
    stopTts();
    setTesting(false);
    setError(null);
    setProgress({ ready: 0, total: 0 });
    setProviderState(p);
    setProvider(p);
  };

  const handleKeyChange = (i: number, v: string) => {
    persistKeys(keys.map((k, idx) => (idx === i ? v : k)));
  };

  const handleAddKey = () => persistKeys([...keys, '']);

  const handleRemoveKey = (i: number) => {
    const next = keys.filter((_, idx) => idx !== i);
    persistKeys(next.length ? next : ['']);
  };

  const toggleModel = (id: string) => {
    const next = selectedModels.includes(id)
      ? selectedModels.filter(m => m !== id)
      : [...selectedModels, id];
    if (next.length === 0) return; // require at least one
    setSelectedModelsState(next);
    setSelectedGeminiModels(next);
  };

  const handleTest = async () => {
    setError(null);
    if (testing) {
      stopTts();
      setTesting(false);
      return;
    }
    if (provider === 'gemini' && !keys.some(k => k.trim())) {
      setError('Please enter at least one Gemini API key.');
      return;
    }
    setTesting(true);
    setProgress({ ready: 0, total: 0 });
    try {
      await speakTts(SAMPLE, {
        onProgress: (ready, total) => setProgress({ ready, total }),
        onEnd: () => setTesting(false),
      });
    } catch (e: any) {
      setTesting(false);
      setError(e?.message || 'Failed to play sample.');
    }
  };

  const handleClose = () => {
    stopTts();
    setTesting(false);
    onClose();
  };

  const totalGeminiPairs = keys.filter(k => k.trim()).length * selectedModels.length;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="w-full max-w-md sm:max-w-lg bg-[#0b0f19] border border-white/10 rounded-t-3xl sm:rounded-3xl max-h-[90vh] flex flex-col">
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/5">
          <div className="flex items-center gap-2.5">
            <Volume2 className="w-5 h-5 text-duo-blue" />
            <h2 className="text-white font-black uppercase tracking-widest text-sm">Voice Settings</h2>
          </div>
          <button
            onClick={handleClose}
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-white/10 active:scale-90 transition-transform text-slate-400"
          >
            <X className="w-5 h-5 stroke-[3]" />
          </button>
        </div>

        <div className="flex-grow overflow-y-auto px-5 py-4 space-y-3">
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">TTS Provider</p>
          {(['browser', 'gemini'] as TtsProvider[]).map(p => {
            const active = provider === p;
            return (
              <button
                key={p}
                onClick={() => handleSelect(p)}
                className={`w-full text-left rounded-2xl p-3.5 border transition-all active:scale-[0.99] ${
                  active
                    ? 'bg-duo-blue/15 border-duo-blue/50'
                    : 'bg-white/[0.02] border-white/10 hover:bg-white/[0.05]'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`font-black text-sm ${active ? 'text-duo-blue' : 'text-white'}`}>
                    {PROVIDER_LABELS[p]}
                  </span>
                  {active && <Check className="w-4 h-4 text-duo-blue" />}
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">{PROVIDER_DESC[p]}</p>
              </button>
            );
          })}

          {provider === 'gemini' && (
            <div className="pt-2 space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 block">
                Models to use (rotates round-robin)
              </label>
              <div className="space-y-1.5">
                {GEMINI_AVAILABLE_MODELS.map(m => {
                  const checked = selectedModels.includes(m.id);
                  return (
                    <button
                      key={m.id}
                      onClick={() => toggleModel(m.id)}
                      className={`w-full flex items-center justify-between rounded-xl border px-3 py-2.5 transition-all active:scale-[0.99] ${
                        checked
                          ? 'bg-duo-blue/10 border-duo-blue/40'
                          : 'bg-white/[0.02] border-white/10 hover:bg-white/[0.05]'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                            checked ? 'bg-duo-blue border-duo-blue' : 'border-white/30'
                          }`}
                        >
                          {checked && <Check className="w-3 h-3 text-white stroke-[3]" />}
                        </div>
                        <span className={`text-sm font-bold ${checked ? 'text-white' : 'text-slate-400'}`}>
                          {m.label}
                        </span>
                      </div>
                      <span className="text-[10px] text-slate-500 font-mono truncate ml-2">{m.id}</span>
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center justify-between pt-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                  Gemini API Keys
                </label>
                <span className="text-[10px] text-slate-500">
                  {totalGeminiPairs} key×model slots
                </span>
              </div>
              {keys.map((k, i) => (
                <div key={i} className="flex gap-2">
                  <input
                    type="password"
                    value={k}
                    onChange={e => handleKeyChange(i, e.target.value)}
                    placeholder={`Key ${i + 1}...`}
                    className="flex-grow bg-black/40 border border-white/10 rounded-xl px-3.5 py-2.5 text-white text-sm outline-none focus:border-duo-blue/50 placeholder:text-slate-600"
                  />
                  <button
                    onClick={() => handleRemoveKey(i)}
                    className="w-10 shrink-0 rounded-xl bg-white/5 border border-white/10 hover:bg-red-500/20 hover:border-red-500/30 text-slate-400 hover:text-red-300 transition-all flex items-center justify-center active:scale-95"
                    aria-label="Remove key"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
              <button
                onClick={handleAddKey}
                className="w-full rounded-xl bg-white/[0.03] border border-dashed border-white/15 hover:bg-white/[0.06] text-slate-300 text-xs font-black uppercase tracking-widest py-2.5 flex items-center justify-center gap-1.5 transition-all active:scale-[0.99]"
              >
                <Plus className="w-3.5 h-3.5" /> Add another key
              </button>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Get free keys at <span className="text-duo-blue">aistudio.google.com/apikey</span>. Each request rotates across keys × {selectedModels.length} selected model{selectedModels.length === 1 ? '' : 's'} to stack quotas. Stored only on this device.
              </p>
            </div>
          )}

          {testing && progress.total > 0 && (
            <div className="pt-2">
              <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1.5">
                <span>Generating voice</span>
                <span>{progress.ready}/{progress.total}</span>
              </div>
              <TtsLoadBar ready={progress.ready} total={progress.total} />
            </div>
          )}

          {error && (
            <div className="flex items-start gap-2 rounded-xl bg-red-500/10 border border-red-500/30 p-3 text-red-300 text-xs">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}
        </div>

        <div className="shrink-0 border-t border-white/5 px-5 py-3 flex gap-2">
          <button
            onClick={handleTest}
            className={`flex-grow py-3.5 rounded-2xl border-b-4 font-black uppercase tracking-widest text-xs text-white active:border-b-0 active:translate-y-0.5 transition-all flex items-center justify-center gap-1.5 ${
              testing
                ? 'bg-red-500 border-red-700 hover:bg-red-400'
                : 'bg-duo-blue border-duo-blue-dark hover:bg-blue-500'
            }`}
          >
            {testing ? <VolumeOff className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            {testing ? 'Stop' : 'Test voice'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TtsSettings;
