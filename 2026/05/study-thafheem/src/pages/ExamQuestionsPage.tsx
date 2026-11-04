import React from 'react';
import { BookOpenCheck } from 'lucide-react';

const ExamQuestionsPage: React.FC = () => {
  return (
    <div className="flex-grow overflow-y-auto pb-28 pt-6 px-4 no-scrollbar border-x border-white/5 flex flex-col items-center justify-center h-full">
      <BookOpenCheck className="w-16 h-16 text-duo-green mb-4 opacity-50" />
      <h1 className="text-2xl font-black text-white tracking-tight mb-2">Knowledge Check</h1>
      <p className="text-center text-slate-400 text-sm font-medium">
        Comprehensive Tafheem reviews and quizzes are coming soon!
      </p>
    </div>
  );
};

export default ExamQuestionsPage;