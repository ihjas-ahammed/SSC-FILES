import React from 'react';
import { Trophy, Clock, Target, Zap } from 'lucide-react';

interface Props {
  xp: number;
  timeSpent: number; // in seconds
  accuracy: number;  // 0 to 100
  onContinue: () => void;
}

const formatTime = (seconds: number) => {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  if (m > 0) return `${m}m ${s}s`;
  return `${s}s`;
};

const getMessage = (accuracy: number) => {
  if (accuracy === 100) return "Perfect Lesson!";
  if (accuracy >= 80) return "Great Job!";
  if (accuracy >= 60) return "Good Effort!";
  return "Lesson Complete!";
};

const LessonCompleteScreen: React.FC<Props> = ({ xp, timeSpent, accuracy, onContinue }) => {
  return (
    <div className="absolute inset-0 bg-[#0b0f19] flex flex-col items-center justify-center text-white z-[99999] animate-in fade-in duration-500">
      
      <div className="flex-grow flex flex-col items-center justify-center w-full px-6 slide-in-from-bottom-8 animate-in duration-700">
         <div className="relative mb-8">
            <div className="absolute inset-0 bg-yellow-500 blur-3xl opacity-20 rounded-full"></div>
            <Trophy className="w-32 h-32 text-yellow-400 drop-shadow-2xl relative z-10 animate-bounce" style={{ animationDuration: '2s' }} />
         </div>

         <h1 className="text-4xl font-extrabold mb-8 text-center tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
           {getMessage(accuracy)}
         </h1>

         <div className="grid grid-cols-2 gap-4 w-full max-w-sm mb-12">
            <div className="glass-panel p-4 rounded-3xl border-b-4 border-yellow-500/50 flex flex-col items-center text-center">
               <Zap className="w-8 h-8 text-yellow-400 mb-2" />
               <span className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">XP Earned</span>
               <span className="text-2xl font-black text-white">+{xp}</span>
            </div>

            <div className="glass-panel p-4 rounded-3xl border-b-4 border-blue-500/50 flex flex-col items-center text-center">
               <Target className="w-8 h-8 text-blue-400 mb-2" />
               <span className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Accuracy</span>
               <span className="text-2xl font-black text-white">{accuracy}%</span>
            </div>

            <div className="glass-panel p-4 rounded-3xl border-b-4 border-emerald-500/50 flex flex-col items-center text-center col-span-2">
               <Clock className="w-8 h-8 text-emerald-400 mb-2" />
               <span className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Time Spent</span>
               <span className="text-2xl font-black text-white">{formatTime(timeSpent)}</span>
            </div>
         </div>
      </div>

      <div className="w-full p-6 bg-gradient-to-t from-[#0b0f19] to-transparent shrink-0">
        <button
          onClick={onContinue}
          className="w-full bg-duo-green border-duo-green-dark border-b-4 hover:bg-green-500 text-white font-black py-4 rounded-2xl uppercase tracking-widest transition-all active:border-b-0 active:translate-y-1 shadow-[0_0_20px_rgba(88,204,2,0.3)] text-lg"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default LessonCompleteScreen;