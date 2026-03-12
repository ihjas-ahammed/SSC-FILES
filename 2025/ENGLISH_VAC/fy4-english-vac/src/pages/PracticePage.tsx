import React, { useState } from 'react';
import PracticeQuiz from '../components/PracticeQuiz';
import { PRACTICE_U3 } from '../data/english_modules/practice_u3';
import { PenTool, CheckCircle, RefreshCw } from 'lucide-react';

const PracticePage: React.FC = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [score, setScore] = useState(0);

  const totalQuestions = PRACTICE_U3.length;

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
    let message = "Good Effort!";
    if (percentage >= 90) message = "Outstanding Mastery!";
    else if (percentage >= 70) message = "Great Job!";
    
    return (
      <div className="flex-grow overflow-y-auto pb-28 pt-6 px-4 no-scrollbar border-x border-white/5 flex flex-col items-center justify-center h-full animate-in zoom-in-95 duration-500">
        <CheckCircle className={`w-24 h-24 mb-6 ${percentage >= 70 ? 'text-green-400' : 'text-amber-400'}`} />
        <h1 className="text-3xl font-black text-white tracking-tight mb-2 text-center">{message}</h1>
        <p className="text-slate-400 font-bold uppercase tracking-widest text-sm mb-8">
          You scored {score} out of {totalQuestions}
        </p>
        
        <div className="w-full max-w-xs space-y-4">
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
      <div className=" flex flex-col h-full bg-[#0b0f19] z-50 ">
         <PracticeQuiz questions={PRACTICE_U3} onFinish={handleFinish} onExit={() => setHasStarted(false)} />
      </div>
    );
  }

  return (
    <div className="flex-grow overflow-y-auto pb-28 pt-6 px-4 no-scrollbar border-x border-white/5 flex flex-col items-center justify-center h-full relative practice-header-bg">
      <div className="bg-blue-500/20 p-4 rounded-full mb-6 border border-blue-500/30 shadow-[0_0_30px_rgba(28,176,246,0.3)]">
        <PenTool className="w-12 h-12 text-duo-blue" />
      </div>
      <h1 className="text-3xl font-black text-white tracking-tight mb-3 text-center">Unit Mastery Test</h1>
      <p className="text-center text-slate-400 text-sm font-medium mb-8 max-w-[250px]">
        Test your knowledge with 40 rigorous questions based on the complete text of "Humanities v/s Science".
      </p>
      
      <div className="w-full max-w-xs space-y-4">
        <button 
          onClick={() => setHasStarted(true)}
          className="w-full bg-duo-green border-duo-green-dark border-b-4 hover:bg-green-500 text-white font-black py-4 rounded-2xl uppercase tracking-widest transition-all active:border-b-0 active:translate-y-1 shadow-md"
        >
          Start Practice
        </button>
      </div>
    </div>
  );
};

export default PracticePage;