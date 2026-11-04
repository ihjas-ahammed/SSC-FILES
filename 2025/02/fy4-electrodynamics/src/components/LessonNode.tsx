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

const colorStyles: Record<string, { bg: string, border: string, ring: string }> = {
  'duo-blue': { bg: 'bg-duo-blue', border: 'border-duo-blue-dark', ring: 'ring-duo-blue/30' },
  'duo-green': { bg: 'bg-duo-green', border: 'border-duo-green-dark', ring: 'ring-duo-green/30' },
  'duo-red': { bg: 'bg-duo-red', border: 'border-duo-red-dark', ring: 'ring-duo-red/30' },
  'duo-violet': { bg: 'bg-purple-500', border: 'border-purple-700', ring: 'ring-purple-500/30' },
  'duo-orange': { bg: 'bg-orange-500', border: 'border-orange-700', ring: 'ring-orange-500/30' },
};

const LessonNode: React.FC<Props> = ({ lesson, x, y, isCompleted, isNextToStart, colorName, onStart }) => {
  const LucideIcon = (Icons as any)[lesson.icon] || Icons.BookOpen;
  
  // Default to blue if color not found
  const cStyle = colorStyles[colorName] || colorStyles['duo-blue'];

  // Determine status class
  let btnClass = "relative group flex flex-col items-center justify-center w-20 h-20 rounded-full border-b-[6px] transition-all ";
  
  // Locked state logic (simplified: if not completed and not next, it's locked/future)
  // However, LessonPath passes isNextToStart.
  // Actually, we need to know if it's "Current" (unlocked but not done).
  // For this component, we rely on parent logic implicitly. 
  // If isNextToStart is true, it's the current one.
  // If isCompleted is true, it's done.
  // Otherwise, it's future/locked? 
  // Let's assume the parent renders LessonNode only for accessible nodes or we handle locked styling here.
  
  // Actually, simpler logic:
  if (isCompleted) {
    btnClass += "bg-amber-400 border-amber-600 text-white active:border-b-0 active:translate-y-[6px] cursor-pointer hover:brightness-110 ";
  } else if (isNextToStart) {
    // Current active lesson
    btnClass += `${cStyle.bg} ${cStyle.border} ${cStyle.ring} text-white ring-4 active:border-b-0 active:translate-y-[6px] shadow-[0_0_20px_rgba(255,255,255,0.15)] cursor-pointer hover:brightness-110 next-node-pop `;
  } else {
    // Locked/Future
    btnClass += "bg-slate-700 border-slate-800 text-slate-500 cursor-not-allowed opacity-80 ";
  }

  return (
    <div 
      id={`lesson-node-${lesson.id}`}
      className="absolute flex flex-col items-center pointer-events-auto"
      style={{ left: `${(x / 400) * 100}%`, top: `${y}px`, transform: 'translate(-50%, -50%)', zIndex: 10 }}
    >
      <button
        onClick={isCompleted || isNextToStart ? onStart : undefined}
        disabled={!isCompleted && !isNextToStart}
        className={btnClass}
      >
        <LucideIcon className="w-8 h-8" strokeWidth={isCompleted || isNextToStart ? 3 : 2.5} />
        
        {isCompleted && (
          <div className="absolute -right-2 -top-2 bg-yellow-400 rounded-full p-1.5 border-2 border-yellow-600 shadow-sm z-10">
            <Icons.Crown className="w-4 h-4 text-yellow-800 fill-yellow-400" strokeWidth={2} />
          </div>
        )}
      </button>
      
      <div className="absolute top-full mt-4 w-40 flex flex-col items-center pointer-events-none">
        <div className="glass-panel px-3 py-2 rounded-xl flex items-center justify-center shadow-lg bg-black/60">
          <p className="text-center text-[10px] font-black uppercase text-slate-200 leading-tight">
            {lesson.title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LessonNode;