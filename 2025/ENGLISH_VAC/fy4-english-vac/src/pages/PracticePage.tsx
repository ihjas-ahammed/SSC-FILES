import React, { useState } from 'react';
import PracticeQuiz from '../components/PracticeQuiz';
import { MODULE_PRACTICE } from '../data/practice_data';
import { UserProgress } from '../types';
import { PenTool, CheckCircle, RefreshCw, BookOpen } from 'lucide-react';

interface Props {
  progress: UserProgress;
}

const PracticePage: React.FC<Props> = ({ progress }) => {
  const [hasStarted, setHasStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [score, setScore] = useState(0);

  const modulePractice =
    MODULE_PRACTICE.find(m => m.moduleId === progress.currentModuleId) ??
    MODULE_PRACTICE[0];

  const questions = modulePractice.questions;
  const totalQuestions = questions.length;

  const handleFinish = (finalScore: number) => {
    setScore(finalScore);
    setQuizFinished(true);
  };

  const handleRestart = () => {
    setScore(0);
    setHasStarted(false);
    setQuizFinished(false);
  };

  if (quizFinished) {
    const percentage = Math.round((score / totalQuestions) * 100);
    let message = 'Good Effort!';
    if (percentage >= 90) message = 'Outstanding Mastery!';
    else if (percentage >= 70) message = 'Great Job!';

    return (
      <div className="flex-grow overflow-y-auto pb-28 pt-6 px-4 no-scrollbar border-x border-white/5 flex flex-col items-center justify-center h-full animate-in zoom-in-95 duration-500">
        <CheckCircle className={`w-20 h-20 sm:w-24 sm:h-24 mb-6 ${percentage >= 70 ? 'text-green-400' : 'text-amber-400'}`} />
        <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2 text-center">{message}</h1>
        <p className="text-slate-400 font-bold uppercase tracking-widest text-sm mb-2">
          {score} / {totalQuestions} correct
        </p>
        <p className="text-slate-500 font-medium text-xs mb-8 text-center">
          {modulePractice.title}
        </p>

        <div className="w-full max-w-xs space-y-3">
          <button
            onClick={handleRestart}
            className="w-full bg-duo-blue border-duo-blue-dark border-b-4 hover:bg-blue-500 text-white font-black py-4 rounded-2xl uppercase tracking-widest transition-all active:border-b-0 active:translate-y-1 shadow-md flex items-center justify-center gap-2"
          >
            <RefreshCw className="w-5 h-5" /> Retake Quiz
          </button>
        </div>
      </div>
    );
  }

  if (hasStarted) {
    return (
      <PracticeQuiz questions={questions} onFinish={handleFinish} onExit={() => setHasStarted(false)} />
    );
  }

  return (
    <div className="flex-grow overflow-y-auto pb-28 pt-6 px-4 no-scrollbar border-x border-white/5 flex flex-col items-center justify-center h-full relative practice-header-bg">
      <div className="bg-blue-500/20 p-4 rounded-full mb-5 border border-blue-500/30 shadow-[0_0_30px_rgba(28,176,246,0.3)]">
        <PenTool className="w-10 h-10 sm:w-12 sm:h-12 text-duo-blue" />
      </div>

      <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2 text-center">
        Chapter Practice
      </h1>

      {/* Current module label */}
      <div className="flex items-center gap-1.5 mb-3">
        <BookOpen className="w-3.5 h-3.5 text-duo-blue shrink-0" />
        <span className="text-duo-blue text-xs font-black uppercase tracking-widest">
          {modulePractice.title}
        </span>
      </div>

      <p className="text-center text-slate-400 text-sm font-medium mb-8 max-w-xs">
        Test your knowledge with {totalQuestions} MCQ questions covering all chapters in this module.
      </p>

      <div className="w-full max-w-xs">
        <button
          onClick={() => setHasStarted(true)}
          className="w-full bg-duo-green border-duo-green-dark border-b-4 hover:bg-green-500 text-white font-black py-4 rounded-2xl uppercase tracking-widest transition-all active:border-b-0 active:translate-y-1 shadow-md"
        >
          Start Practice
        </button>
      </div>

      <p className="text-slate-600 text-xs mt-6 text-center">
        Switch modules from the Path tab to practice a different chapter.
      </p>
    </div>
  );
};

export default PracticePage;
