import React, { useState } from 'react';
import { BookOpenCheck, ChevronRight } from 'lucide-react';
import { EXAM_MODULES, UnitExam } from '../data/exam_data';
import ExamQuestionCard from '../components/ExamQuestionCard';

const ExamQuestionsPage: React.FC = () => {
  const [activeUnitId, setActiveUnitId] = useState<string>(EXAM_MODULES[0].unitId);

  const activeUnit = EXAM_MODULES.find(u => u.unitId === activeUnitId) || EXAM_MODULES[0];

  return (
    <div className="flex-grow flex flex-col bg-[#0b0f19] border-x border-white/5 overflow-hidden h-full relative">
      {/* Header */}
      <div className="shrink-0 pt-8 pb-4 px-5 glass-panel rounded-b-3xl shadow-xl z-20">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2.5 bg-duo-violet/20 rounded-xl border border-duo-violet/30">
            <BookOpenCheck className="w-7 h-7 text-duo-violet" />
          </div>
          <div>
            <h1 className="text-2xl font-black text-white tracking-tight leading-none">Exam Bank</h1>
            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-1">Model Questions & Answers</p>
          </div>
        </div>
      </div>

      {/* Horizontal Unit Selector Tabs */}
      <div className="shrink-0 py-3 px-2 border-b border-white/5 bg-black/20 z-10">
        <div className="flex overflow-x-auto exam-tab-list gap-2 px-2 snap-x">
          {EXAM_MODULES.map((unit) => {
            const isActive = unit.unitId === activeUnitId;
            return (
              <button
                key={unit.unitId}
                onClick={() => setActiveUnitId(unit.unitId)}
                className={`shrink-0 snap-start px-4 py-2.5 rounded-xl text-sm font-bold transition-all border-b-2
                  ${isActive 
                    ? 'bg-duo-violet border-duo-violet-dark text-white shadow-md' 
                    : 'bg-white/5 border-transparent text-slate-400 hover:bg-white/10 hover:text-slate-200'
                  }`}
              >
                {unit.title.split(':')[0]} {/* e.g., "Unit 1" */}
              </button>
            );
          })}
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-grow overflow-y-auto no-scrollbar px-4 pt-6 pb-28 relative">
        <div className="mb-6 animate-in fade-in slide-in-from-right-4 duration-300">
          <h2 className="text-xl font-extrabold text-white mb-1">{activeUnit.title}</h2>
          <p className="text-sm font-medium text-slate-400">{activeUnit.description}</p>
        </div>

        <div className="space-y-2 animate-in fade-in slide-in-from-bottom-8 duration-500 delay-100">
          {activeUnit.questions.map((q, index) => (
            <ExamQuestionCard key={q.id} question={q} index={index} />
          ))}
        </div>

        <div className="mt-8 text-center text-slate-500 text-xs font-bold uppercase tracking-widest pb-6">
          More questions will be added soon
        </div>
      </div>
    </div>
  );
};

export default ExamQuestionsPage;