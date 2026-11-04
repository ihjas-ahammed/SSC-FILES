import React, { useState, useMemo } from 'react';
import { Slide } from '../types';
import MathRenderer from './MathRenderer';
import { playGeminiAudio } from '../utils/audio';
import { BookOpen, Quote, Volume2, Loader2, GraduationCap, Sparkles } from 'lucide-react';

interface Props {
  slide: Slide;
  onComplete: () => void;
}

/**
 * Highlights the target word inside the example sentence so the learner sees
 * the word in real use at a glance.
 */
const highlightWord = (sentence: string, word: string) => {
  if (!sentence || !word) return sentence;
  // Match the core stem so plurals/inflections also light up (e.g. "harness", "harnessed").
  const stem = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').slice(0, Math.max(4, word.length - 2));
  const re = new RegExp(`(${stem}[a-z]*)`, 'ig');
  const parts = sentence.split(re);
  return parts.map((p, i) =>
    re.test(p) ? (
      <mark key={i} className="bg-amber-400/20 text-amber-300 px-1 rounded-md font-bold">{p}</mark>
    ) : (
      <React.Fragment key={i}>{p}</React.Fragment>
    )
  );
};

const WordCardView: React.FC<Props> = ({ slide, onComplete }) => {
  const card = slide.wordCard;
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);

  if (!card) return null;

  const handleTTS = async (text: string, type: 'word' | 'example') => {
    if (playingId) return;
    setPlayingId(type);
    try {
      const prompt = "Read this English clearly and naturally, at a learner-friendly pace:";
      await playGeminiAudio(text, prompt);
    } finally {
      setPlayingId(null);
    }
  };

  const highlighted = useMemo(
    () => highlightWord(card.example, card.word),
    [card.example, card.word]
  );

  return (
    <div className="flex flex-col h-full animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex-grow overflow-y-auto no-scrollbar pb-6 px-1 flex flex-col">

        <h2 className="text-xl font-black text-white mb-4 text-center tracking-tight shrink-0 mt-2">
          Glossary
        </h2>

        <div className="w-full space-y-3">

          {/* ─── Main Word + Pronunciation ─────────────────────────── */}
          <div className="relative overflow-hidden rounded-3xl border-2 border-duo-violet/30 bg-gradient-to-br from-purple-900/30 via-slate-900/40 to-blue-900/20 p-6 shadow-xl">
            <div className="absolute -top-12 -right-10 w-40 h-40 bg-duo-violet opacity-15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500 opacity-10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between mb-3 relative">
              <span className="text-[10px] font-black tracking-widest uppercase text-duo-violet/80 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3" /> Word
              </span>
              <button
                onClick={() => handleTTS(card.word, 'word')}
                disabled={playingId !== null}
                aria-label="Hear pronunciation"
                className={`p-2 rounded-full transition-all ${
                  playingId === 'word'
                    ? 'bg-purple-500/25 text-purple-200'
                    : 'bg-white/5 hover:bg-white/15 active:scale-90 text-slate-300'
                }`}
              >
                {playingId === 'word'
                  ? <Loader2 className="w-4 h-4 animate-spin" />
                  : <Volume2 className="w-4 h-4" />}
              </button>
            </div>

            <h3 className="text-center font-black text-white tracking-tight relative leading-none"
                style={{ fontSize: 'clamp(2.25rem, 8vw, 3.25rem)' }}>
              {card.word}
            </h3>

            {/* Tap to reveal meaning */}
            <button
              onClick={() => setRevealed(true)}
              disabled={revealed}
              className={`mt-5 w-full text-center rounded-2xl py-3 px-4 transition-all border ${
                revealed
                  ? 'bg-black/30 border-amber-400/30 cursor-default'
                  : 'bg-white/5 hover:bg-white/10 border-white/10 active:scale-[0.98]'
              }`}
            >
              {revealed ? (
                <p className="text-amber-300 font-bold text-lg leading-snug">
                  <MathRenderer content={card.translation} />
                </p>
              ) : (
                <p className="text-slate-400 text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-2">
                  <GraduationCap className="w-4 h-4" /> Tap to reveal meaning
                </p>
              )}
            </button>
          </div>

          {/* ─── How it's used in the chapter ──────────────────────── */}
          <div className="rounded-2xl bg-black/30 border border-white/5 p-4">
            <div className="flex items-center gap-2 mb-2 text-duo-blue">
              <BookOpen className="w-4 h-4" />
              <h4 className="font-black text-[11px] uppercase tracking-widest">In Context</h4>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              <MathRenderer content={card.context} />
            </p>
          </div>

          {/* ─── Example with word highlighted ─────────────────────── */}
          <div className="rounded-2xl bg-gradient-to-br from-slate-800/40 to-black/30 border border-amber-500/15 p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 text-amber-400">
                <Quote className="w-4 h-4" />
                <h4 className="font-black text-[11px] uppercase tracking-widest">Example</h4>
              </div>
              <button
                onClick={() => handleTTS(card.example, 'example')}
                disabled={playingId !== null}
                aria-label="Listen to example"
                className={`transition-all p-1.5 rounded-full ${
                  playingId === 'example'
                    ? 'text-amber-300 bg-amber-500/15'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {playingId === 'example'
                  ? <Loader2 className="w-4 h-4 animate-spin" />
                  : <Volume2 className="w-4 h-4" />}
              </button>
            </div>
            <p className="text-white text-[15px] leading-relaxed font-serif italic">
              "{highlighted}"
            </p>
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-white/10 shrink-0">
        <button
          onClick={onComplete}
          className="w-full bg-duo-violet border-duo-violet-dark border-b-4 hover:bg-purple-500 text-white font-black py-4 rounded-2xl uppercase tracking-widest transition-all active:border-b-0 active:translate-y-1 shadow-md"
        >
          Got it
        </button>
      </div>
    </div>
  );
};

export default WordCardView;
