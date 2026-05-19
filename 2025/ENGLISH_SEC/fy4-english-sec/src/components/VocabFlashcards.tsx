import React, { useMemo, useState } from 'react';
import { X, RotateCcw, Check, ChevronRight, Volume2, Loader2, Sparkles } from 'lucide-react';
import { WordCardData } from '../types';
import { playGeminiAudio } from '../utils/audio';
import ProgressBar from './ProgressBar';

interface Props {
  cards: WordCardData[];
  onExit: () => void;
}

const shuffle = <T,>(arr: T[]): T[] => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const VocabFlashcards: React.FC<Props> = ({ cards, onExit }) => {
  const [deck, setDeck] = useState<WordCardData[]>(() => shuffle(cards));
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [known, setKnown] = useState(0);
  const [playing, setPlaying] = useState(false);

  const total = deck.length;
  const current = deck[index];
  const progress = total === 0 ? 0 : (index / total) * 100;

  const handleAudio = async () => {
    if (!current || playing) return;
    setPlaying(true);
    try {
      await playGeminiAudio(current.word, 'Pronounce this English word clearly:');
    } finally {
      setPlaying(false);
    }
  };

  const reset = () => {
    setDeck(shuffle(cards));
    setIndex(0);
    setFlipped(false);
    setKnown(0);
  };

  const next = (gotIt: boolean) => {
    if (gotIt) setKnown(k => k + 1);
    if (index + 1 < total) {
      setIndex(i => i + 1);
      setFlipped(false);
    } else {
      // finished — show summary
      setIndex(total);
    }
  };

  const finished = index >= total;

  if (total === 0) {
    return (
      <div className="fixed inset-0 w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto bg-[#0b0f19] z-[9999] flex flex-col items-center justify-center p-6">
        <Sparkles className="w-16 h-16 text-slate-700 mb-4" />
        <p className="text-slate-400 font-bold uppercase tracking-widest text-sm text-center">
          No glossary words in this module yet
        </p>
        <button onClick={onExit} className="mt-6 px-6 py-3 bg-duo-violet rounded-2xl font-black uppercase tracking-widest text-white">
          Back
        </button>
      </div>
    );
  }

  if (finished) {
    const pct = Math.round((known / total) * 100);
    return (
      <div className="fixed inset-0 w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto bg-[#0b0f19] z-[9999] flex flex-col items-center justify-center p-6">
        <Check className={`w-20 h-20 mb-4 ${pct >= 70 ? 'text-emerald-400' : 'text-amber-400'}`} />
        <h1 className="text-3xl font-black text-white mb-2">{pct >= 70 ? 'Sharp Recall!' : 'Keep Practicing'}</h1>
        <p className="text-slate-400 font-bold uppercase tracking-widest text-sm mb-8">
          Knew {known} of {total} words
        </p>
        <div className="flex gap-3 w-full max-w-xs">
          <button onClick={reset} className="flex-grow py-3.5 rounded-2xl bg-duo-violet border-b-4 border-duo-violet-dark text-white text-xs font-black uppercase tracking-widest active:translate-y-0.5 transition-all flex items-center justify-center gap-1.5">
            <RotateCcw className="w-4 h-4" /> Reshuffle
          </button>
          <button onClick={onExit} className="px-5 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-slate-200 text-xs font-black uppercase tracking-widest">
            Exit
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto bg-[#0b0f19] z-[9999] flex flex-col overflow-hidden">

      {/* Header */}
      <div className="h-16 flex items-center justify-between px-4 glass-panel border-t-0 border-x-0 rounded-none shrink-0 z-10">
        <button onClick={onExit} className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 active:scale-90 text-slate-400">
          <X className="w-6 h-6 stroke-[3]" />
        </button>
        <div className="flex-grow mx-3">
          <ProgressBar percentage={progress} color="bg-duo-violet" />
        </div>
        <div className="font-black text-slate-400 text-sm">
          {index + 1}/{total}
        </div>
      </div>

      {/* Card */}
      <div className="flex-grow flex flex-col px-4 sm:px-5 pt-6 pb-4 overflow-y-auto no-scrollbar">

        <p className="text-[10px] font-black uppercase tracking-widest text-duo-violet/80 text-center mb-1 flex items-center justify-center gap-1.5">
          <Sparkles className="w-3 h-3" /> Vocab Flashcards · Tap to flip
        </p>
        <p className="text-slate-500 text-xs text-center mb-5">
          Known: {known} / {index}
        </p>

        <button
          onClick={() => setFlipped(f => !f)}
          className="relative w-full flex-grow min-h-[260px] rounded-3xl border-2 border-duo-violet/30 bg-gradient-to-br from-purple-900/30 via-slate-900/40 to-blue-900/20 p-6 shadow-xl active:scale-[0.99] transition-all text-left overflow-hidden"
        >
          <div className="absolute -top-12 -right-10 w-40 h-40 bg-duo-violet opacity-15 rounded-full blur-3xl pointer-events-none" />

          {!flipped ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <span className="text-[10px] font-black tracking-widest uppercase text-duo-violet/70 mb-3">Word</span>
              <h2 className="text-white font-black tracking-tight" style={{ fontSize: 'clamp(2.5rem, 9vw, 3.75rem)' }}>
                {current.word}
              </h2>
              <button
                onClick={(e) => { e.stopPropagation(); handleAudio(); }}
                disabled={playing}
                className={`mt-5 p-3 rounded-full transition-all ${playing ? 'bg-purple-500/25 text-purple-200' : 'bg-white/5 hover:bg-white/15 text-slate-200'}`}
              >
                {playing ? <Loader2 className="w-5 h-5 animate-spin" /> : <Volume2 className="w-5 h-5" />}
              </button>
              <p className="mt-6 text-slate-500 text-xs font-bold uppercase tracking-widest">
                Tap to flip
              </p>
            </div>
          ) : (
            <div className="h-full flex flex-col">
              <span className="text-[10px] font-black tracking-widest uppercase text-amber-400/80 mb-2">Meaning</span>
              <p className="text-amber-300 text-2xl font-black leading-snug mb-4">
                {current.translation}
              </p>
              <p className="text-[10px] font-black tracking-widest uppercase text-slate-400 mb-1">Example</p>
              <p className="text-slate-200 text-[14px] italic leading-relaxed font-serif">
                "{current.example}"
              </p>
            </div>
          )}
        </button>

        {/* Action row — only visible after flip */}
        {flipped ? (
          <div className="grid grid-cols-2 gap-2 mt-4 animate-in slide-in-from-bottom-2 duration-200">
            <button
              onClick={() => next(false)}
              className="py-3.5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 text-slate-200 text-xs font-black uppercase tracking-widest active:scale-95"
            >
              Review again
            </button>
            <button
              onClick={() => next(true)}
              className="py-3.5 rounded-2xl bg-duo-green border-b-4 border-duo-green-dark hover:bg-green-500 text-white text-xs font-black uppercase tracking-widest active:translate-y-0.5 flex items-center justify-center gap-1.5"
            >
              <Check className="w-4 h-4" /> I knew it
            </button>
          </div>
        ) : (
          <button
            onClick={() => setFlipped(true)}
            className="mt-4 w-full py-3.5 rounded-2xl bg-duo-violet border-b-4 border-duo-violet-dark hover:bg-purple-500 text-white text-xs font-black uppercase tracking-widest active:translate-y-0.5 flex items-center justify-center gap-1.5"
          >
            Show meaning <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};

export default VocabFlashcards;
