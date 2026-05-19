import React, { useMemo, useState } from 'react';
import {
  PenTool, CheckCircle, RefreshCw, BookOpen, Target,
  FileText, Layers, Sparkles, ListChecks, ChevronRight
} from 'lucide-react';
import PracticeQuiz from '../components/PracticeQuiz';
import WrittenAnswerDrill from '../components/WrittenAnswerDrill';
import VocabFlashcards from '../components/VocabFlashcards';
import { MODULE_PRACTICE } from '../data/practice_data';
import { EXAM_MODULES, MODULE_EXAM_MAP, ExamQuestion } from '../data/exam_data';
import { MODULES } from '../data/modules';
import { UserProgress, WordCardData } from '../types';

type Tool = 'menu' | 'mcq' | 'mcq-result' | 'A' | 'B' | 'C' | 'vocab';

interface Props {
  progress: UserProgress;
}

// ─── helpers ─────────────────────────────────────────────────────────────────

function collectVocab(moduleId: string): WordCardData[] {
  const module = MODULES.find(m => m.id === moduleId);
  if (!module) return [];
  const out: WordCardData[] = [];
  for (const section of module.sections) {
    for (const unit of section.units) {
      for (const lesson of unit.lessons) {
        for (const slide of lesson.slides) {
          if (slide.type === 'word_card' && slide.wordCard) {
            out.push(slide.wordCard);
          }
        }
      }
    }
  }
  return out;
}

function collectExam(moduleId: string): ExamQuestion[] {
  const unitIds = MODULE_EXAM_MAP[moduleId] ?? [];
  return EXAM_MODULES
    .filter(u => unitIds.includes(u.unitId))
    .flatMap(u => u.questions);
}

// ─── tool card ───────────────────────────────────────────────────────────────

interface ToolCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  count?: number;
  countLabel?: string;
  accent: string;       // tailwind color e.g. 'emerald'
  onClick: () => void;
  disabled?: boolean;
}

const ToolCard: React.FC<ToolCardProps> = ({
  icon, title, subtitle, count, countLabel, accent, onClick, disabled
}) => {
  const accentMap: Record<string, { ring: string; bg: string; text: string; chip: string }> = {
    blue:    { ring: 'border-blue-500/30',    bg: 'from-blue-900/20 to-slate-900/30',    text: 'text-blue-300',    chip: 'bg-blue-500/15 text-blue-300' },
    emerald: { ring: 'border-emerald-500/30', bg: 'from-emerald-900/20 to-slate-900/30', text: 'text-emerald-300', chip: 'bg-emerald-500/15 text-emerald-300' },
    indigo:  { ring: 'border-indigo-500/30',  bg: 'from-indigo-900/20 to-slate-900/30',  text: 'text-indigo-300',  chip: 'bg-indigo-500/15 text-indigo-300' },
    purple:  { ring: 'border-purple-500/30',  bg: 'from-purple-900/20 to-slate-900/30',  text: 'text-purple-300',  chip: 'bg-purple-500/15 text-purple-300' },
    amber:   { ring: 'border-amber-500/30',   bg: 'from-amber-900/20 to-slate-900/30',   text: 'text-amber-300',   chip: 'bg-amber-500/15 text-amber-300' },
  };
  const a = accentMap[accent] ?? accentMap.blue;
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`group w-full text-left rounded-2xl border ${a.ring} bg-gradient-to-br ${a.bg} p-4 flex items-center gap-3 transition-all active:scale-[0.98] hover:border-white/20 disabled:opacity-40 disabled:cursor-not-allowed`}
    >
      <div className={`shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center bg-black/40 border border-white/5 ${a.text}`}>
        {icon}
      </div>
      <div className="flex-grow min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <h3 className="text-white font-black text-[15px] leading-none">{title}</h3>
          {typeof count === 'number' && (
            <span className={`text-[9px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded ${a.chip}`}>
              {count} {countLabel ?? ''}
            </span>
          )}
        </div>
        <p className="text-slate-400 text-xs mt-1 leading-snug">{subtitle}</p>
      </div>
      <ChevronRight className={`w-5 h-5 ${a.text} opacity-60 group-hover:opacity-100 transition-opacity shrink-0`} />
    </button>
  );
};

// ─── page ────────────────────────────────────────────────────────────────────

const PracticePage: React.FC<Props> = ({ progress }) => {
  const [tool, setTool] = useState<Tool>('menu');
  const [score, setScore] = useState(0);

  const modulePractice =
    MODULE_PRACTICE.find(m => m.moduleId === progress.currentModuleId) ?? MODULE_PRACTICE[0];

  const mcqQuestions = modulePractice?.questions ?? [];

  const examQuestions = useMemo(
    () => collectExam(progress.currentModuleId),
    [progress.currentModuleId]
  );
  const sectionA = useMemo(() => examQuestions.filter(q => q.section === 'A'), [examQuestions]);
  const sectionB = useMemo(() => examQuestions.filter(q => q.section === 'B'), [examQuestions]);
  const sectionC = useMemo(() => examQuestions.filter(q => q.section === 'C'), [examQuestions]);

  const vocabCards = useMemo(
    () => collectVocab(progress.currentModuleId),
    [progress.currentModuleId]
  );

  // ── Tool views ──
  if (tool === 'mcq') {
    return (
      <PracticeQuiz
        questions={mcqQuestions}
        onFinish={(s) => { setScore(s); setTool('mcq-result'); }}
        onExit={() => setTool('menu')}
      />
    );
  }
  if (tool === 'A') return <WrittenAnswerDrill section="A" questions={sectionA} onExit={() => setTool('menu')} />;
  if (tool === 'B') return <WrittenAnswerDrill section="B" questions={sectionB} onExit={() => setTool('menu')} />;
  if (tool === 'C') return <WrittenAnswerDrill section="C" questions={sectionC} onExit={() => setTool('menu')} />;
  if (tool === 'vocab') return <VocabFlashcards cards={vocabCards} onExit={() => setTool('menu')} />;

  if (tool === 'mcq-result') {
    const total = mcqQuestions.length;
    const pct = total ? Math.round((score / total) * 100) : 0;
    const msg = pct >= 90 ? 'Outstanding Mastery!' : pct >= 70 ? 'Great Job!' : 'Good Effort!';
    return (
      <div className="flex-grow overflow-y-auto pb-28 pt-6 px-4 no-scrollbar border-x border-white/5 flex flex-col items-center justify-center h-full animate-in zoom-in-95 duration-500">
        <CheckCircle className={`w-20 h-20 sm:w-24 sm:h-24 mb-6 ${pct >= 70 ? 'text-green-400' : 'text-amber-400'}`} />
        <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2 text-center">{msg}</h1>
        <p className="text-slate-400 font-bold uppercase tracking-widest text-sm mb-2">
          {score} / {total} correct
        </p>
        <div className="w-full max-w-xs space-y-3 mt-4">
          <button
            onClick={() => { setScore(0); setTool('mcq'); }}
            className="w-full bg-duo-blue border-duo-blue-dark border-b-4 hover:bg-blue-500 text-white font-black py-4 rounded-2xl uppercase tracking-widest transition-all active:border-b-0 active:translate-y-1 shadow-md flex items-center justify-center gap-2"
          >
            <RefreshCw className="w-5 h-5" /> Retake
          </button>
          <button
            onClick={() => setTool('menu')}
            className="w-full bg-white/5 border border-white/10 hover:bg-white/10 text-slate-200 font-black py-4 rounded-2xl uppercase tracking-widest transition-all"
          >
            Back to Practice
          </button>
        </div>
      </div>
    );
  }

  // ── Menu ──
  return (
    <div className="flex-grow overflow-y-auto pb-28 pt-6 px-4 no-scrollbar border-x border-white/5 relative practice-header-bg">

      {/* Hero */}
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2.5 bg-blue-500/15 rounded-xl border border-blue-500/25 shrink-0">
          <PenTool className="w-6 h-6 text-duo-blue" />
        </div>
        <div className="min-w-0">
          <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-none">
            Practice
          </h1>
          <div className="flex items-center gap-1.5 mt-1 min-w-0">
            <BookOpen className="w-3 h-3 text-duo-blue shrink-0" />
            <span className="text-duo-blue text-[10px] font-black uppercase tracking-widest truncate">
              {modulePractice?.title ?? 'Module'}
            </span>
          </div>
        </div>
      </div>

      <p className="text-slate-400 text-sm leading-relaxed mb-5">
        Train every part of the exam: recognise the right answer (MCQ), then
        write Section A, B, and C answers under realistic word limits.
      </p>

      {/* Tool cards */}
      <div className="space-y-2.5">

        <ToolCard
          icon={<Target className="w-5 h-5" />}
          title="Objective MCQ"
          subtitle="Recall the key facts under exam pressure"
          count={mcqQuestions.length}
          countLabel="qs"
          accent="blue"
          onClick={() => setTool('mcq')}
          disabled={mcqQuestions.length === 0}
        />

        <ToolCard
          icon={<ListChecks className="w-5 h-5" />}
          title="Section A · Short Answer"
          subtitle="2-mark drill · 3-4 sentences · with model answers"
          count={sectionA.length}
          countLabel="prompts"
          accent="emerald"
          onClick={() => setTool('A')}
          disabled={sectionA.length === 0}
        />

        <ToolCard
          icon={<FileText className="w-5 h-5" />}
          title="Section B · Paragraph"
          subtitle="6-mark drill · ~100 words · structure prompts included"
          count={sectionB.length}
          countLabel="prompts"
          accent="indigo"
          onClick={() => setTool('B')}
          disabled={sectionB.length === 0}
        />

        <ToolCard
          icon={<Layers className="w-5 h-5" />}
          title="Section C · Essay Planner"
          subtitle="10-mark drill · ~200 words · outline before drafting"
          count={sectionC.length}
          countLabel="prompts"
          accent="purple"
          onClick={() => setTool('C')}
          disabled={sectionC.length === 0}
        />

        <ToolCard
          icon={<Sparkles className="w-5 h-5" />}
          title="Vocab Flashcards"
          subtitle="Flip cards for the unit glossary — recall vs. review"
          count={vocabCards.length}
          countLabel="words"
          accent="amber"
          onClick={() => setTool('vocab')}
          disabled={vocabCards.length === 0}
        />
      </div>

      <p className="text-slate-600 text-xs mt-6 text-center">
        Switch modules from the Path tab to practise a different chapter.
      </p>
    </div>
  );
};

export default PracticePage;
