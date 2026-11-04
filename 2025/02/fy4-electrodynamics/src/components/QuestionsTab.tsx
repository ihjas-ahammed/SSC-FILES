import React from 'react';
import { EXAM_PAPERS } from '../data/examPapers';
import ExamSectionComponent from './exam/ExamSectionComponent';
import { BookCheck, CalendarDays } from 'lucide-react';
import '../styles/questions.css';

interface Props {
  currentCourseId: string;
}

const QuestionsTab: React.FC<Props> = ({ currentCourseId }) => {
  const paper = EXAM_PAPERS.find(p => p.courseId === currentCourseId) || EXAM_PAPERS[0];

  return (
    <div className="pb-32 px-4 pt-6 animate-in fade-in duration-300">
      <div className="glass-panel p-6 rounded-3xl mb-8 flex flex-col items-center border border-white/5 relative overflow-hidden">
        <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
        <div className="bg-blue-500/20 p-3 rounded-2xl mb-4">
          <BookCheck className="w-8 h-8 text-blue-400" />
        </div>
        <h2 className="text-2xl font-black text-white text-center tracking-tight mb-2">Exam Prep</h2>
        <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-wider bg-black/30 px-3 py-1.5 rounded-lg border border-white/5">
           <CalendarDays className="w-3.5 h-3.5" />
           {paper.title}
        </div>
        <p className="text-slate-400 text-center mt-4 text-sm max-w-[280px] mx-auto leading-relaxed">
          Model question paper for <strong className="text-slate-200">"{paper.moduleName}"</strong> based on university exam formats.
        </p>
      </div>

      <div className="space-y-2">
        {paper.sections.map(section => (
          <ExamSectionComponent key={section.id} section={section} />
        ))}
      </div>
    </div>
  );
};

export default QuestionsTab;