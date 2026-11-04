import React from 'react';
import { BookOpenCheck } from 'lucide-react';
import { EXAM_MODULES, MODULE_EXAM_MAP, UnitExam } from '../data/exam_data';
import { UserProgress } from '../types';
import ExamQuestionCard from '../components/ExamQuestionCard';

interface Props {
  progress: UserProgress;
}

const ExamQuestionsPage: React.FC<Props> = ({ progress }) => {
  const moduleUnitIds = MODULE_EXAM_MAP[progress.currentModuleId] ?? [];

  // All units belonging to the current module, preserving order from EXAM_MODULES
  const moduleUnits: UnitExam[] = EXAM_MODULES.filter(u =>
    moduleUnitIds.includes(u.unitId)
  );

  const allQuestions = moduleUnits.flatMap(u => u.questions);

  const sectionLabels: Record<string, string> = {
    A: 'Section A — Short Answer (2 marks)',
    B: 'Section B — Paragraph Answer (6 marks)',
    C: 'Section C — Essay Answer (10 marks)',
  };

  const sectionDescriptions: Record<string, string> = {
    A: 'Answer in not more than 3 sentences. All questions can be attempted. (Ceiling: 16)',
    B: 'Answer in not more than 100 words. All questions can be attempted. (Ceiling: 24)',
    C: 'Answer any ONE in not more than 200 words. (1×10 = 10)',
  };

  const questionsBySection = (['A', 'B', 'C'] as const).map(s => ({
    section: s,
    questions: allQuestions.filter(q => q.section === s),
  }));

  const hasQuestions = allQuestions.length > 0;

  return (
    <div className="flex-grow flex flex-col bg-[#0b0f19] border-x border-white/5 overflow-hidden h-full relative">
      {/* Header */}
      <div className="shrink-0 pt-6 pb-4 px-4 sm:px-5 glass-panel rounded-b-3xl shadow-xl z-20">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-duo-violet/20 rounded-xl border border-duo-violet/30 shrink-0">
            <BookOpenCheck className="w-6 h-6 sm:w-7 sm:h-7 text-duo-violet" />
          </div>
          <div className="min-w-0">
            <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-none">Questions</h1>
            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-1 truncate">
              Model Questions &amp; Answers
            </p>
          </div>
        </div>

        {/* Current module pill */}
        {moduleUnits.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {moduleUnits.map(u => (
              <span
                key={u.unitId}
                className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-md bg-duo-violet/15 border border-duo-violet/25 text-duo-violet"
              >
                {u.title.split(':')[0]}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="flex-grow overflow-y-auto no-scrollbar px-4 sm:px-5 pt-5 pb-28">
        {!hasQuestions ? (
          <div className="flex flex-col items-center justify-center h-full text-center py-20">
            <BookOpenCheck className="w-16 h-16 text-slate-700 mb-4" />
            <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">
              No questions yet for this module
            </p>
            <p className="text-slate-600 text-xs mt-2">Switch modules from the Path tab to see questions.</p>
          </div>
        ) : (
          <div className="space-y-8">
            {questionsBySection.map(({ section, questions }) => {
              if (questions.length === 0) return null;
              return (
                <section key={section}>
                  <div className="mb-3">
                    <h2 className="text-base sm:text-lg font-black text-white">
                      {sectionLabels[section]}
                    </h2>
                    <p className="text-xs text-slate-400 font-medium mt-0.5 leading-snug">
                      {sectionDescriptions[section]}
                    </p>
                  </div>

                  <div className="space-y-2">
                    {questions.map((q, index) => (
                      <ExamQuestionCard key={q.id} question={q} index={index} />
                    ))}
                  </div>
                </section>
              );
            })}

            <div className="text-center text-slate-600 text-xs font-bold uppercase tracking-widest pb-4">
              More questions will be added soon
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExamQuestionsPage;
