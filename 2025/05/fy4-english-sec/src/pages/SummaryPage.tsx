import React, { useState } from 'react';
import {
  Sparkles, BookOpen, Target, ListChecks, Layers,
  Lightbulb, Zap, Star, ChevronRight, Quote, AlertTriangle
} from 'lucide-react';
import { MODULE_SUMMARIES, ModuleSummary, UnitDigest } from '../data/module_summaries';
import { MODULES } from '../data/modules';
import { UserProgress } from '../types';

interface Props {
  progress: UserProgress;
  onModuleChange?: (moduleId: string) => void;
}

const accentByModule: Record<string, { ring: string; bg: string; text: string; chipBg: string; gradient: string }> = {
  'module-1-scientific-attitude': {
    ring: 'border-blue-500/30',
    bg: 'from-blue-900/30 to-slate-900/30',
    text: 'text-blue-300',
    chipBg: 'bg-blue-500/15 text-blue-300 border-blue-500/30',
    gradient: 'from-blue-500/20 via-blue-500/5 to-transparent',
  },
  'module-2-scientific-language': {
    ring: 'border-emerald-500/30',
    bg: 'from-emerald-900/30 to-slate-900/30',
    text: 'text-emerald-300',
    chipBg: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
    gradient: 'from-emerald-500/20 via-emerald-500/5 to-transparent',
  },
  'module-3-scientific-imagination': {
    ring: 'border-purple-500/30',
    bg: 'from-purple-900/30 to-slate-900/30',
    text: 'text-purple-300',
    chipBg: 'bg-purple-500/15 text-purple-300 border-purple-500/30',
    gradient: 'from-purple-500/20 via-purple-500/5 to-transparent',
  },
  'module-4-scientific-presentations': {
    ring: 'border-amber-500/30',
    bg: 'from-amber-900/30 to-slate-900/30',
    text: 'text-amber-300',
    chipBg: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
    gradient: 'from-amber-500/20 via-amber-500/5 to-transparent',
  },
};

const UnitCard: React.FC<{ unit: UnitDigest; accent: { text: string; chipBg: string } }> = ({ unit, accent }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-start gap-3 p-4 text-left hover:bg-white/[0.02] transition-colors"
      >
        <div className={`shrink-0 w-9 h-9 rounded-xl flex items-center justify-center font-black ${accent.chipBg} border`}>
          {unit.unitNumber}
        </div>
        <div className="flex-grow min-w-0">
          <h3 className="text-white font-black text-[15px] leading-tight">{unit.unitTitle}</h3>
          {unit.author || unit.form ? (
            <p className="text-slate-400 text-[11px] font-bold uppercase tracking-widest mt-0.5">
              {[unit.author, unit.form].filter(Boolean).join(' · ')}
            </p>
          ) : null}
          <p className="text-slate-300 text-[13px] italic mt-1.5 leading-snug">"{unit.oneLine}"</p>
        </div>
        <ChevronRight className={`w-5 h-5 ${accent.text} opacity-60 transition-transform mt-1 ${open ? 'rotate-90' : ''}`} />
      </button>

      {open && (
        <div className="px-4 pb-4 pt-1 border-t border-white/5 animate-in fade-in slide-in-from-top-1 duration-200">
          <div className="mb-3">
            <h4 className={`text-[10px] font-black uppercase tracking-widest mb-2 flex items-center gap-1.5 ${accent.text}`}>
              <ListChecks className="w-3.5 h-3.5" /> Must-know lines
            </h4>
            <ul className="space-y-1.5">
              {unit.must_know.map((m, i) => (
                <li key={i} className="text-slate-200 text-[13px] leading-snug flex gap-2">
                  <span className={`${accent.text} font-black shrink-0`}>·</span>
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>

          {unit.remember && (
            <div className="rounded-xl bg-black/30 border border-white/10 p-3 mb-2 flex gap-2 items-start">
              <Star className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
              <p className="text-amber-100 text-[12.5px] leading-snug">
                <span className="font-black uppercase tracking-widest text-amber-300 text-[10px] mr-1">Remember:</span>
                {unit.remember}
              </p>
            </div>
          )}

          {unit.exam_traps && (
            <div className="rounded-xl bg-red-950/20 border border-red-500/20 p-3 flex gap-2 items-start">
              <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              <p className="text-red-200 text-[12.5px] leading-snug">
                <span className="font-black uppercase tracking-widest text-red-400 text-[10px] mr-1">Trap:</span>
                {unit.exam_traps}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const SummaryPage: React.FC<Props> = ({ progress, onModuleChange }) => {
  const summary: ModuleSummary | undefined =
    MODULE_SUMMARIES.find(m => m.moduleId === progress.currentModuleId) ?? MODULE_SUMMARIES[0];

  const accent = accentByModule[summary.moduleId] ?? accentByModule['module-1-scientific-attitude'];
  const moduleIndex = MODULES.findIndex(m => m.id === summary.moduleId);

  return (
    <div className="flex-grow overflow-y-auto pb-28 lg:pb-8 pt-5 px-4 sm:px-5 no-scrollbar border-x border-white/5 relative">
      {/* Hero */}
      <div className={`rounded-3xl border ${accent.ring} bg-gradient-to-br ${accent.gradient} p-5 mb-5 relative overflow-hidden`}>
        <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-white/[0.02] blur-3xl pointer-events-none" />
        <div className="flex items-center gap-3 mb-3">
          <div className={`p-2.5 rounded-2xl ${accent.chipBg} border`}>
            <Sparkles className="w-6 h-6" />
          </div>
          <div className="min-w-0">
            <p className={`text-[10px] font-black uppercase tracking-widest ${accent.text}`}>
              Quick-revision Summary
            </p>
            <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-none mt-0.5">
              {summary.title}
            </h1>
          </div>
        </div>
        <p className="text-slate-200 italic text-sm mb-3 flex gap-2 items-start">
          <Quote className={`w-4 h-4 shrink-0 mt-0.5 ${accent.text}`} />
          <span>"{summary.tagline}"</span>
        </p>
        <p className="text-slate-300 text-[13.5px] leading-relaxed">
          {summary.pitch}
        </p>
      </div>

      {/* Module switcher */}
      <div className="flex gap-1.5 mb-5 overflow-x-auto no-scrollbar -mx-1 px-1">
        {MODULES.map((m, i) => {
          const isActive = m.id === summary.moduleId;
          return (
            <button
              key={m.id}
              onClick={() => onModuleChange && onModuleChange(m.id)}
              className={`shrink-0 px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest border transition-all ${
                isActive
                  ? `${accent.chipBg} scale-105`
                  : 'bg-white/[0.03] border-white/10 text-slate-400 hover:bg-white/[0.06]'
              }`}
            >
              Module {['I', 'II', 'III', 'IV'][i] ?? i + 1}
            </button>
          );
        })}
      </div>

      {/* Highlight chips */}
      <div className="grid grid-cols-2 gap-2 mb-6">
        {summary.highlights.map(h => (
          <div key={h.label} className="rounded-xl bg-black/30 border border-white/10 p-3">
            <p className={`text-[9px] font-black uppercase tracking-widest ${accent.text}`}>{h.label}</p>
            <p className="text-white text-[12.5px] font-bold leading-snug mt-1">{h.value}</p>
          </div>
        ))}
      </div>

      {/* Big Ideas */}
      <section className="mb-7">
        <div className="flex items-center gap-2 mb-3">
          <Target className={`w-5 h-5 ${accent.text}`} />
          <h2 className="text-white font-black text-lg">Big Ideas</h2>
        </div>
        <div className="space-y-2.5">
          {summary.bigIdeas.map((b, i) => (
            <div key={i} className={`rounded-2xl border ${accent.ring} bg-gradient-to-br ${accent.bg} p-4`}>
              <div className="flex items-center justify-between mb-1.5 gap-2 flex-wrap">
                <h3 className="text-white font-black text-[14.5px] leading-tight">{b.heading}</h3>
                {b.keyword && (
                  <span className={`shrink-0 text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md border ${accent.chipBg}`}>
                    {b.keyword}
                  </span>
                )}
              </div>
              <p className="text-slate-200 text-[13.5px] leading-relaxed">{b.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Unit Digests */}
      <section className="mb-7">
        <div className="flex items-center gap-2 mb-3">
          <BookOpen className={`w-5 h-5 ${accent.text}`} />
          <h2 className="text-white font-black text-lg">Unit-by-Unit Digest</h2>
        </div>
        <p className="text-slate-500 text-xs mb-3">Tap a unit to expand its must-know lines, fact-to-remember, and the trap to avoid.</p>
        <div className="space-y-2.5">
          {summary.units.map(u => (
            <UnitCard key={u.unitNumber} unit={u} accent={accent} />
          ))}
        </div>
      </section>

      {/* Vocabulary */}
      <section className="mb-7">
        <div className="flex items-center gap-2 mb-3">
          <Layers className={`w-5 h-5 ${accent.text}`} />
          <h2 className="text-white font-black text-lg">Glossary You Will Be Asked</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {summary.vocabulary.map(v => (
            <div key={v.word} className="rounded-xl bg-white/[0.03] border border-white/10 p-3">
              <p className="text-white font-black text-[13px]">{v.word}</p>
              <p className="text-slate-400 text-[12px] leading-snug mt-0.5">{v.meaning}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Exam Tactics */}
      <section className="mb-7">
        <div className="flex items-center gap-2 mb-3">
          <Lightbulb className={`w-5 h-5 ${accent.text}`} />
          <h2 className="text-white font-black text-lg">How to Actually Score</h2>
        </div>
        <ul className="space-y-2">
          {summary.examTactics.map((t, i) => (
            <li key={i} className="rounded-xl bg-black/30 border border-white/10 p-3 text-slate-200 text-[13px] leading-snug flex gap-2">
              <span className={`${accent.text} font-black shrink-0`}>{i + 1}.</span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* One-nighter checklist */}
      <section className="mb-2">
        <div className="flex items-center gap-2 mb-3">
          <Zap className={`w-5 h-5 ${accent.text}`} />
          <h2 className="text-white font-black text-lg">If You Only Have One Hour</h2>
        </div>
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-black/40 to-slate-900/20 p-4 space-y-2">
          {summary.oneNighterChecklist.map((c, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <div className={`w-5 h-5 rounded-full border-2 ${accent.ring} shrink-0`} />
              <span className="text-slate-200 text-[13px]">{c}</span>
            </div>
          ))}
        </div>
      </section>

      <p className="text-slate-600 text-[10px] mt-6 text-center font-bold uppercase tracking-widest">
        Module {['I', 'II', 'III', 'IV'][moduleIndex] ?? moduleIndex + 1} · Quick-Revision Summary
      </p>
    </div>
  );
};

export default SummaryPage;
