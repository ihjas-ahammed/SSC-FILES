import React from 'react';
import * as Icons from 'lucide-react';
import { Lesson } from '../types';

interface Props {
  lesson: Lesson;
  x: number;
  y: number;
  isCompleted: boolean;
  isNextToStart: boolean;
  colorName: string;
  onStart: () => void;
}

const LessonNode: React.FC<Props> = ({ lesson, x, y, isCompleted, isNextToStart, colorName, onStart }) => {
  const LucideIcon = (Icons as any)[lesson.icon] || Icons.BookOpen;

  return (
    <div 
      id={`lesson-node-${lesson.id}`}
      className="absolute flex flex-col items-center pointer-events-auto"
      style={{ left: `${(x / 400) * 100}%`, top: `${y}px`, transform: 'translate(-50%, -50%)', zIndex: 10 }}
    >
      <button
        onClick={onStart}
        className={`
          relative group flex flex-col items-center justify-center
          w-20 h-20 rounded-full border-b-[6px] active:border-b-0 active:translate-y-[6px] transition-all
          ${isNextToStart ? 'next-node-pop' : ''}
          ${isCompleted 
            ? 'bg-amber-500 border-amber-700 text-white' 
            : `bg-${colorName} border-${colorName}-dark hover:brightness-110 text-white shadow-[0_0_15px_rgba(255,255,255,0.1)]`}
        `}
      >
        <LucideIcon className="w-8 h-8" strokeWidth={3} />
        
        {isCompleted && (
          <div className="absolute -right-1 -top-1 bg-slate-800 rounded-full p-1 border-2 border-amber-500 shadow-sm">
            <Icons.Check className="w-4 h-4 text-amber-500" strokeWidth={4} />
          </div>
        )}
      </button>
      
      <div className="absolute top-full mt-4 w-40 flex flex-col items-center pointer-events-none">
        <div className="glass-panel px-3 py-2 rounded-xl flex items-center justify-center shadow-lg">
          <p className="text-center text-[10px] font-black uppercase text-slate-200 leading-tight">
            {lesson.title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LessonNode;