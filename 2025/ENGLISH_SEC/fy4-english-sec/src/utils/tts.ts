export type TtsProvider = 'browser' | 'gemini';

const PROVIDER_KEY = 'tts_provider';
const GEMINI_KEYS_KEY = 'tts_gemini_api_keys';
const GEMINI_KEY_LEGACY = 'tts_gemini_api_key';
const GEMINI_MODELS_KEY = 'tts_gemini_models';

export const PROVIDER_LABELS: Record<TtsProvider, string> = {
  browser: 'System default (free, unlimited)',
  gemini: 'Gemini Flash',
};

export const GEMINI_AVAILABLE_MODELS: { id: string; label: string }[] = [
  { id: 'gemini-2.5-flash-preview-tts', label: 'Gemini 2.5 Flash TTS' },
  { id: 'gemini-2.5-pro-preview-tts', label: 'Gemini 2.5 Pro TTS' },
  { id: 'gemini-3.1-flash-tts-preview', label: 'Gemini 3.1 Flash TTS' },
];

export const GEMINI_VOICE = 'Kore';

const GEMINI_STYLE_PROMPT =
  'Read the following sentence aloud in a calm, clear, neutral teacher voice. Keep the same tone, pace, and pitch every time. Pronounce each word distinctly at a moderate speed so an English-learning student can easily understand. Do not add any commentary, do not change voices, do not add emotion — just read the sentence exactly:';

export const getProvider = (): TtsProvider => {
  const v = localStorage.getItem(PROVIDER_KEY) as string | null;
  if (v === 'gemini') return 'gemini';
  return 'browser';
};

export const setProvider = (p: TtsProvider) => localStorage.setItem(PROVIDER_KEY, p);

export const getGeminiKeys = (): string[] => {
  const raw = localStorage.getItem(GEMINI_KEYS_KEY);
  if (raw === null) {
    const legacy = localStorage.getItem(GEMINI_KEY_LEGACY);
    if (legacy) {
      localStorage.setItem(GEMINI_KEYS_KEY, legacy);
      return [legacy];
    }
    return [];
  }
  return raw.split('\n').map(k => k.trim()).filter(Boolean);
};

export const setGeminiKeys = (keys: string[]) => {
  const cleaned = keys.map(k => k.trim()).filter(Boolean);
  localStorage.setItem(GEMINI_KEYS_KEY, cleaned.join('\n'));
};

export const getSelectedGeminiModels = (): string[] => {
  const raw = localStorage.getItem(GEMINI_MODELS_KEY);
  if (raw) {
    try {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        const valid = parsed.filter(
          (m: any) => typeof m === 'string' && GEMINI_AVAILABLE_MODELS.some(am => am.id === m)
        );
        if (valid.length > 0) return valid;
      }
    } catch {}
  }
  return ['gemini-2.5-flash-preview-tts'];
};

export const setSelectedGeminiModels = (models: string[]) => {
  localStorage.setItem(GEMINI_MODELS_KEY, JSON.stringify(models));
};

// ─── Sentence splitting ──────────────────────────────────────────────

export const stripMarkdown = (s: string): string =>
  s
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/__(.*?)__/g, '$1')
    .replace(/_(.*?)_/g, '$1')
    .replace(/#{1,6}\s+/g, '')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/\$\$?[^$]+\$\$?/g, '')
    .replace(/\n+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

export const splitSentences = (text: string): string[] => {
  const clean = stripMarkdown(text);
  if (!clean) return [];
  const matches = clean.match(/[^.!?…]+[.!?…]+(?:["')\]]+)?|[^.!?…]+$/g);
  return (matches || [clean])
    .map(s => s.trim())
    .filter(s => s.length > 0);
};

// ─── Audio playback state ───────────────────────────────────────────

interface Session {
  cancelled: boolean;
}

let currentSession: Session | null = null;
let currentAudio: HTMLAudioElement | null = null;
let currentObjectUrl: string | null = null;

const releaseAudio = () => {
  if (currentAudio) {
    currentAudio.onended = null;
    currentAudio.onerror = null;
    currentAudio.onpause = null;
    try { currentAudio.pause(); } catch {}
    currentAudio = null;
  }
  if (currentObjectUrl) {
    URL.revokeObjectURL(currentObjectUrl);
    currentObjectUrl = null;
  }
};

export const stopTts = () => {
  if (currentSession) currentSession.cancelled = true;
  releaseAudio();
  window.speechSynthesis?.cancel();
  currentSession = null;
};

const playAudioOnce = (url: string, objectUrl: string | null, session: Session): Promise<void> =>
  new Promise(resolve => {
    let done = false;
    const audio = new Audio(url);
    const finish = () => {
      if (done) return;
      done = true;
      if (currentAudio === audio) releaseAudio();
      resolve();
    };
    currentAudio = audio;
    currentObjectUrl = objectUrl;
    audio.onended = finish;
    audio.onerror = finish;
    audio.onpause = () => { if (session.cancelled) finish(); };
    try {
      const p = audio.play();
      if (p && typeof p.then === 'function') {
        p.then(() => {}, () => finish());
      }
    } catch {
      finish();
    }
  });

// ─── PCM → WAV helpers (for Gemini) ──────────────────────────────────

const parseAudioMime = (mime: string) => {
  let bits = 16;
  let rate = 24000;
  for (const part of mime.split(';').map(p => p.trim())) {
    if (part.toLowerCase().startsWith('rate=')) {
      const n = parseInt(part.split('=')[1], 10);
      if (!isNaN(n)) rate = n;
    } else if (part.startsWith('audio/L')) {
      const n = parseInt(part.substring(7), 10);
      if (!isNaN(n)) bits = n;
    }
  }
  return { bits, rate };
};

const pcmBase64ToWavUrl = (b64: string, mime: string): string => {
  const { bits, rate } = parseAudioMime(mime);
  const bin = atob(b64);
  const dataSize = bin.length;
  const buffer = new ArrayBuffer(44 + dataSize);
  const view = new DataView(buffer);
  const writeStr = (off: number, s: string) => {
    for (let i = 0; i < s.length; i++) view.setUint8(off + i, s.charCodeAt(i));
  };
  const numChannels = 1;
  const bytesPerSample = bits / 8;
  const blockAlign = numChannels * bytesPerSample;
  const byteRate = rate * blockAlign;
  writeStr(0, 'RIFF');
  view.setUint32(4, 36 + dataSize, true);
  writeStr(8, 'WAVE');
  writeStr(12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, numChannels, true);
  view.setUint32(24, rate, true);
  view.setUint32(28, byteRate, true);
  view.setUint16(32, blockAlign, true);
  view.setUint16(34, bits, true);
  writeStr(36, 'data');
  view.setUint32(40, dataSize, true);
  const bytes = new Uint8Array(buffer);
  for (let i = 0; i < dataSize; i++) bytes[44 + i] = bin.charCodeAt(i);
  return URL.createObjectURL(new Blob([buffer], { type: 'audio/wav' }));
};

// ─── Gemini key/model rotation ───────────────────────────────────────

interface RotState {
  keys: string[];
  models: string[];
  pairIdx: number; // round-robin index over (keys × models)
  exhausted: Set<string>;
}

const newRotState = (keys: string[], models: string[]): RotState => ({
  keys,
  models,
  pairIdx: 0,
  exhausted: new Set(),
});

const pairCount = (r: RotState) => r.keys.length * r.models.length;

const pairAt = (r: RotState, idx: number) => {
  const keyI = Math.floor(idx / r.models.length);
  const modelI = idx % r.models.length;
  return { keyIdx: keyI, modelIdx: modelI, key: r.keys[keyI], model: r.models[modelI] };
};

const fetchGeminiSentence = async (text: string, rot: RotState): Promise<{ url: string; objectUrl: string }> => {
  const total = pairCount(rot);
  if (total === 0) throw new Error('No Gemini API keys configured');
  let attempts = 0;
  let lastErr: any = null;
  while (attempts < total) {
    const idx = rot.pairIdx % total;
    rot.pairIdx = (rot.pairIdx + 1) % total;
    attempts++;
    const id = String(idx);
    if (rot.exhausted.has(id)) continue;
    const { key, model } = pairAt(rot, idx);
    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${key}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ role: 'user', parts: [{ text: `${GEMINI_STYLE_PROMPT} ${text}` }] }],
            generationConfig: {
              temperature: 0.1,
              responseModalities: ['AUDIO'],
              speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: GEMINI_VOICE } } },
            },
          }),
        }
      );
      if (res.status === 429 || res.status === 403) {
        rot.exhausted.add(id);
        lastErr = new Error(`Gemini ${res.status} on key ${pairAt(rot, idx).keyIdx + 1}/${rot.keys.length} model ${pairAt(rot, idx).modelIdx + 1}`);
        continue;
      }
      if (!res.ok) {
        lastErr = new Error(`Gemini HTTP ${res.status}`);
        continue;
      }
      const data = await res.json();
      const inline = data?.candidates?.[0]?.content?.parts?.[0]?.inlineData;
      if (!inline?.data) {
        lastErr = new Error('Gemini: empty audio response');
        continue;
      }
      const url = pcmBase64ToWavUrl(inline.data, inline.mimeType || 'audio/pcm;rate=24000');
      return { url, objectUrl: url };
    } catch (e) {
      lastErr = e;
    }
  }
  throw lastErr || new Error('All Gemini keys/models exhausted');
};

// ─── Public speak API ───────────────────────────────────────────────

export interface SpeakOpts {
  onSentence?: (idx: number) => void; // -1 means none playing
  onProgress?: (loaded: number, total: number) => void;
  onEnd?: () => void;
}

export const speakTts = async (text: string, opts: SpeakOpts = {}): Promise<void> => {
  stopTts();
  const session: Session = { cancelled: false };
  currentSession = session;

  const sentences = splitSentences(text);
  const total = sentences.length;
  if (total === 0) {
    opts.onEnd?.();
    return;
  }

  const provider = getProvider();
  opts.onSentence?.(-1);
  opts.onProgress?.(0, total);

  // Browser provider: speak each sentence as its own utterance for highlighting
  if (provider === 'browser') {
    opts.onProgress?.(total, total);
    await new Promise<void>(resolve => {
      let i = 0;
      const next = () => {
        if (session.cancelled || i >= total) {
          opts.onSentence?.(-1);
          opts.onEnd?.();
          resolve();
          return;
        }
        opts.onSentence?.(i);
        const utt = new SpeechSynthesisUtterance(sentences[i]);
        utt.onend = () => { i++; next(); };
        utt.onerror = () => { i++; next(); };
        window.speechSynthesis.speak(utt);
      };
      next();
    });
    return;
  }

  // Gemini: pipeline with key/model rotation
  const rot = provider === 'gemini'
    ? newRotState(getGeminiKeys(), getSelectedGeminiModels())
    : null;
  if (provider === 'gemini' && rot) {
    if (rot.keys.length === 0) {
      opts.onEnd?.();
      throw new Error('No Gemini API keys configured. Add at least one in voice settings.');
    }
    if (rot.models.length === 0) {
      opts.onEnd?.();
      throw new Error('No Gemini models selected. Pick at least one in voice settings.');
    }
  }

  let readyCount = 0;
  const fetchPromises: Promise<{ url: string; objectUrl: string | null } | null>[] = [];
  let chain: Promise<any> = Promise.resolve();

  for (let i = 0; i < total; i++) {
    const idx = i;
    const p = chain.then(async () => {
      if (session.cancelled) return null;
      try {
        let result: { url: string; objectUrl: string | null };
        if (provider === 'gemini' && rot) {
          const { url, objectUrl } = await fetchGeminiSentence(sentences[idx], rot);
          result = { url, objectUrl };
        } else {
          return null;
        }
        if (session.cancelled) {
          if (result.objectUrl) URL.revokeObjectURL(result.objectUrl);
          return null;
        }
        readyCount++;
        opts.onProgress?.(readyCount, total);
        return result;
      } catch (e) {
        console.error(`TTS fetch failed for sentence ${idx}:`, e);
        readyCount++;
        opts.onProgress?.(readyCount, total);
        return null;
      }
    });
    fetchPromises.push(p);
    chain = p;
  }

  for (let i = 0; i < total; i++) {
    if (session.cancelled) break;
    const result = await fetchPromises[i];
    if (session.cancelled) {
      if (result?.objectUrl) URL.revokeObjectURL(result.objectUrl);
      break;
    }
    if (!result) continue;
    opts.onSentence?.(i);
    await playAudioOnce(result.url, result.objectUrl, session);
  }

  opts.onSentence?.(-1);
  opts.onEnd?.();
};
