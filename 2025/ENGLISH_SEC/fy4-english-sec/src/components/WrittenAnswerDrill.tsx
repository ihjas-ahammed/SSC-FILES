import React, { useMemo, useState, useEffect, useRef } from 'react';
import { X, ChevronRight, Eye, EyeOff, RefreshCw, FileCheck, Lightbulb, Timer, Save, Volume2, VolumeOff } from 'lucide-react';
import { ExamQuestion } from '../data/exam_data';
import MathRenderer from './MathRenderer';
import ProgressBar from './ProgressBar';
import { speakTts, stopTts } from '../utils/tts';
import SpokenText from './SpokenText';
import TtsLoadBar from './TtsLoadBar';

type SectionKey = 'A' | 'B' | 'C';

const SECTION_META: Record<SectionKey, {
  title: string;
  subtitle: string;
  wordTarget: number;
  wordHigh: number;
  color: string;
  borderColor: string;
  bgColor: string;
  hint: string;
}> = {
  A: {
    title: 'Short Answer Drill',
    subtitle: 'Section A — 2 marks · 3-4 sentences',
    wordTarget: 50,
    wordHigh: 80,
    color: 'text-emerald-300',
    borderColor: 'border-emerald-500/40',
    bgColor: 'bg-emerald-900/20',
    hint: 'Open with a direct one-line answer. Then 2-3 supporting sentences with a specific name, date, or quote from the text.',
  },
  B: {
    title: 'Paragraph Builder',
    subtitle: 'Section B — 6 marks · ~100 words',
    wordTarget: 100,
    wordHigh: 130,
    color: 'text-blue-300',
    borderColor: 'border-blue-500/40',
    bgColor: 'bg-blue-900/20',
    hint: 'Topic sentence → 2-3 textual examples → analysis sentence → closing sentence that links back to the question.',
  },
  C: {
    title: 'Essay Planner',
    subtitle: 'Section C — 10 marks · ~200 words',
    wordTarget: 200,
    wordHigh: 260,
    color: 'text-purple-300',
    borderColor: 'border-purple-500/40',
    bgColor: 'bg-purple-900/20',
    hint: 'Plan: (1) introduction, (2) two body paragraphs with textual evidence, (3) conclusion that answers the prompt.',
  },
};

interface Props {
  section: SectionKey;
  questions: ExamQuestion[];
  onExit: () => void;
}

const wordCount = (s: string) =>
  (s.trim().match(/\b\w+\b/g) || []).length;

const WrittenAnswerDrill: React.FC<Props> = ({ section, questions, onExit }) => {
  const meta = SECTION_META[section];
  const [index, setIndex] = useState(0);
  const [draft, setDraft] = useState(() => localStorage.getItem(`wad_draft_${questions[0]?.id}`) ?? '');
  const [revealed, setRevealed] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [savedFlash, setSavedFlash] = useState(false);
  const [speakState, setSpeakState] = useState<{
    key: 'question' | 'answer';
    idx: number;
    ready: number;
    total: number;
  } | null>(null);
  const speaking = speakState?.key ?? null;
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const draftDivRef = useRef<HTMLDivElement>(null);

  const question = questions[index];
  const totalQuestions = questions.length;

  useEffect(() => {
    stopTts();
    setSpeakState(null);
    setDraft(localStorage.getItem(`wad_draft_${question?.id}`) ?? '');
    setRevealed(false);
    setShowHint(false);
    if (draftDivRef.current) draftDivRef.current.style.minHeight = '';
  }, [index]);

  useEffect(() => () => { stopTts(); }, []);

  useEffect(() => {
    const ta = textareaRef.current;
    if (!ta) return;
    if (revealed) {
      ta.style.height = 'auto';
      ta.style.height = `${ta.scrollHeight}px`;
    } else {
      ta.style.height = '';
    }
  }, [draft, revealed]);
  const progress = (index / Math.max(1, totalQuestions)) * 100;
  const wc = useMemo(() => wordCount(draft), [draft]);

  if (!question) {
    return (
      <div className="fixed inset-0 w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto bg-[#0b0f19] z-[9999] flex flex-col items-center justify-center p-6">
        <FileCheck className="w-16 h-16 text-slate-700 mb-4" />
        <p className="text-slate-400 font-bold uppercase tracking-widest text-sm text-center">
          No Section {section} questions in this module yet
        </p>
        <button
          onClick={onExit}
          className="mt-6 px-6 py-3 bg-duo-blue rounded-2xl font-black uppercase tracking-widest text-white"
        >
          Back
        </button>
      </div>
    );
  }

  const goNext = () => {
    if (index + 1 < totalQuestions) {
      setIndex((i: number) => i + 1);
    } else {
      onExit();
    }
  };

  const handleReveal = () => {
    if (draftDivRef.current) {
      draftDivRef.current.style.minHeight = `${draftDivRef.current.offsetHeight}px`;
    }
    setRevealed(true);
  };

  const saveDraft = () => {
    localStorage.setItem(`wad_draft_${question.id}`, draft);
    setSavedFlash(true);
    setTimeout(() => setSavedFlash(false), 1500);
  };

  const clearDraft = () => {
    setDraft('');
    localStorage.removeItem(`wad_draft_${question.id}`);
  };

  const speak = async (text: string, key: 'question' | 'answer') => {
    if (speakState?.key === key) {
      stopTts();
      setSpeakState(null);
      return;
    }
    setSpeakState({ key, idx: -1, ready: 0, total: 0 });
    try {
      await speakTts(text, {
        onSentence: idx => setSpeakState(s => (s && s.key === key ? { ...s, idx } : s)),
        onProgress: (ready, total) =>
          setSpeakState(s => (s && s.key === key ? { ...s, ready, total } : s)),
        onEnd: () => setSpeakState(s => (s && s.key === key ? null : s)),
      });
    } catch {
      setSpeakState(s => (s && s.key === key ? null : s));
    }
  };

  const wcColor =
    wc < meta.wordTarget * 0.5 ? 'text-slate-500'
    : wc <= meta.wordHigh ? 'text-emerald-400'
    : 'text-amber-400';

  return (
    <div className="fixed inset-0 w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto bg-[#0b0f19] z-[9999] flex flex-col overflow-hidden">

      {/* Header */}
      <div className="h-16 flex items-center justify-between px-4 glass-panel border-t-0 border-x-0 rounded-none shrink-0 z-10">
        <button onClick={onExit} className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 active:scale-90 transition-transform text-slate-400">
          <X className="w-6 h-6 stroke-[3]" />
        </button>
        <div className="flex-grow mx-3">
          <ProgressBar percentage={progress} color={section === 'A' ? 'bg-emerald-500' : section === 'B' ? 'bg-blue-500' : 'bg-purple-500'} />
        </div>
        <div className="font-black text-slate-400 text-sm">
          {index + 1}/{totalQuestions}
        </div>
      </div>

      {/* Body */}
      <div className="flex-grow overflow-y-auto no-scrollbar px-4 sm:px-5 pt-5 pb-4 flex flex-col">

        {/* Meta strip */}
        <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
          <span className={`text-[10px] font-black uppercase tracking-widest ${meta.color}`}>
            {meta.subtitle}
          </span>
          <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-md bg-slate-800 text-slate-300">
            {question.wordLimit || `${question.marks} marks`}
          </span>
        </div>

        {/* Question card */}
        <div className={`rounded-2xl border ${meta.borderColor} ${meta.bgColor} p-4 mb-4`}>
          <div className="flex items-center justify-between mb-1.5">
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Question</p>
            <button
              onClick={() => speak(question.question, 'question')}
              className={`w-7 h-7 flex items-center justify-center rounded-full transition-all active:scale-90 ${speaking === 'question' ? 'text-blue-400 bg-blue-500/20' : 'text-slate-500 hover:text-slate-300 hover:bg-white/10'}`}
            >
              {speaking === 'question' ? <VolumeOff className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
            </button>
          </div>
          {speakState?.key === 'question' && speakState.total > 0 && (
            <TtsLoadBar ready={speakState.ready} total={speakState.total} className="mb-2" />
          )}
          <h2 className="text-white font-bold text-lg leading-snug">
            <SpokenText
              content={question.question}
              activeIdx={speakState?.key === 'question' ? speakState.idx : -1}
            />
          </h2>
        </div>

        {/* Hint accordion */}
        <button
          onClick={() => setShowHint(v => !v)}
          className="flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 mb-3 active:scale-[0.99]"
        >
          <span className="text-amber-300 text-xs font-black uppercase tracking-widest flex items-center gap-2">
            <Lightbulb className="w-4 h-4" /> How to structure your answer
          </span>
          {showHint
            ? <EyeOff className="w-4 h-4 text-amber-300/70" />
            : <Eye className="w-4 h-4 text-amber-300/70" />}
        </button>
        {showHint && (
          <p className="text-amber-200/90 text-sm leading-relaxed px-1 mb-3 italic">
            {meta.hint}
          </p>
        )}

        {/* Draft area */}
        <div ref={draftDivRef} className={`rounded-2xl bg-black/30 border border-white/10 p-3 mb-2 flex flex-col min-h-[180px] ${revealed ? '' : 'flex-grow'}`}>
          <div className="flex items-center justify-between mb-2 text-[10px] font-black uppercase tracking-widest">
            <span className="text-slate-400 flex items-center gap-1.5">
              <Timer className="w-3 h-3" /> Your draft
            </span>
            <span className={wcColor}>
              {wc} / {meta.wordTarget} words
            </span>
          </div>
          <textarea
            ref={textareaRef}
            value={draft}
            onChange={e => setDraft(e.target.value)}
            placeholder={`Write your ${meta.wordTarget}-word answer here...`}
            className={`w-full bg-transparent text-white text-[15px] leading-relaxed outline-none resize-none placeholder:text-slate-600 ${revealed ? 'min-h-[160px] overflow-hidden' : 'flex-grow'}`}
          />
        </div>

        {/* Model answer reveal */}
        {revealed ? (
          <div className="rounded-2xl bg-black/40 border border-white/10 p-4 animate-in slide-in-from-bottom-2 duration-300">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <FileCheck className={`w-4 h-4 ${meta.color}`} />
                <h4 className={`text-[11px] font-black uppercase tracking-widest ${meta.color}`}>
                  Model Answer
                </h4>
              </div>
              <button
                onClick={() => speak(question.modelAnswer, 'answer')}
                className={`w-7 h-7 flex items-center justify-center rounded-full transition-all active:scale-90 ${speaking === 'answer' ? 'text-blue-400 bg-blue-500/20' : 'text-slate-500 hover:text-slate-300 hover:bg-white/10'}`}
              >
                {speaking === 'answer' ? <VolumeOff className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
              </button>
            </div>
            {speakState?.key === 'answer' && speakState.total > 0 && (
              <TtsLoadBar ready={speakState.ready} total={speakState.total} className="mb-2" />
            )}
            <div className="text-slate-200 text-[14px] leading-relaxed">
              <SpokenText
                content={question.modelAnswer}
                activeIdx={speakState?.key === 'answer' ? speakState.idx : -1}
              />
            </div>
            {question.examinerTips && (
              <div className="mt-3 pt-3 border-t border-white/10">
                <p className="text-[10px] font-black uppercase tracking-widest text-amber-400 mb-1.5 flex items-center gap-1.5">
                  <Lightbulb className="w-3 h-3" /> Examiner's Tip
                </p>
                <p className="text-slate-300 text-[13px] leading-relaxed italic">
                  {question.examinerTips}
                </p>
              </div>
            )}
          </div>
        ) : null}
      </div>

      {/* Footer actions */}
      <div className="shrink-0 border-t border-white/5 px-4 py-3 bg-black/40 flex gap-2">
        {!revealed ? (
          <>
            <button
              onClick={clearDraft}
              disabled={!draft}
              className="px-4 py-3.5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 text-slate-300 text-xs font-black uppercase tracking-widest disabled:opacity-40 active:scale-95 transition-all flex items-center gap-1.5"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Clear
            </button>
            <button
              onClick={saveDraft}
              disabled={!draft}
              className={`px-4 py-3.5 rounded-2xl border text-xs font-black uppercase tracking-widest disabled:opacity-40 active:scale-95 transition-all flex items-center gap-1.5 ${savedFlash ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300' : 'bg-white/5 border-white/10 hover:bg-white/10 text-slate-300'}`}
            >
              <Save className="w-3.5 h-3.5" /> {savedFlash ? 'Saved!' : 'Save'}
            </button>
            <button
              onClick={handleReveal}
              className="flex-grow py-3.5 rounded-2xl bg-duo-blue border-b-4 border-duo-blue-dark hover:bg-blue-500 text-white text-xs font-black uppercase tracking-widest active:border-b-0 active:translate-y-0.5 transition-all flex items-center justify-center gap-1.5"
            >
              <FileCheck className="w-4 h-4" /> Reveal Model
            </button>
          </>
        ) : (
          <button
            onClick={goNext}
            className="w-full py-3.5 rounded-2xl bg-duo-green border-b-4 border-duo-green-dark hover:bg-green-500 text-white text-xs font-black uppercase tracking-widest active:border-b-0 active:translate-y-0.5 transition-all flex items-center justify-center gap-1.5"
          >
            {index + 1 < totalQuestions ? <>Next Question <ChevronRight className="w-4 h-4" /></> : 'Finish'}
          </button>
        )}
      </div>
    </div>
  );
};

export default WrittenAnswerDrill;
