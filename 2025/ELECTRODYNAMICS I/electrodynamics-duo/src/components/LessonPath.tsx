import React from 'react';
import { ModuleSection } from '../types';
import * as Icons from 'lucide-react';

interface Props {
  section: ModuleSection;
  completedLessons: string[];
  onStartLesson: (unitId: string, lessonId: string) => void;
  onOpenSectionSelector: () => void;
}

const LessonPath: React.FC<Props> = ({ section, completedLessons, onStartLesson, onOpenSectionSelector }) => {
  return (
    <div className="pb-32 max-w-md mx-auto relative">
      <div 
        onClick={onOpenSectionSelector}
        className={`sticky top-14 z-30 py-3 px-4 bg-${section.color} border-b-4 border-${section.color}-dark shadow-md text-white flex items-center justify-between cursor-pointer hover:brightness-105 transition-all active:scale-[0.98]`}
      >
        <div className="flex items-center gap-2">
           <h2 className="text-xs font-black uppercase tracking-widest leading-none drop-shadow-sm">{section.title}</h2>
        </div>
        <Icons.ChevronDown className="w-4 h-4 opacity-80" />
      </div>

      <div className="pt-8 px-4">
        {section.units.map((unit, unitIndex) => (
          <div key={unit.id} className="mb-20 relative animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: `${unitIndex * 100}ms` }}>
            <div className="mx-4 mb-24 p-5 rounded-3xl bg-white border-2 border-slate-100 shadow-sm text-center">
              <h3 className="font-extrabold text-slate-800 text-sm uppercase tracking-tight mb-1.5">{unit.title}</h3>
              <p className="text-slate-400 font-bold text-[10px] uppercase tracking-wider">{unit.description}</p>
            </div>

            <div className="flex flex-col items-center space-y-44">
              {unit.lessons.map((lesson, lessonIndex) => {
                const isCompleted = completedLessons.includes(lesson.id);
                // Dynamically access Lucide icons
                const LucideIcon = (Icons as any)[lesson.icon] || Icons.BookOpen;
                const offset = lessonIndex % 2 === 0 ? 0 : (lessonIndex % 4 === 1 ? -60 : 60);

                return (
                  <div key={lesson.id} className="relative flex flex-col items-center" style={{ transform: `translateX(${offset}px)` }}>
                    <button
                      onClick={() => onStartLesson(unit.id, lesson.id)}
                      className={`
                        relative group flex flex-col items-center justify-center
                        w-20 h-20 rounded-full border-b-[6px] active:border-b-0 active:translate-y-[6px] transition-all
                        ${isCompleted 
                          ? 'bg-amber-400 border-amber-600' 
                          : `bg-${section.color} border-${section.color}-dark hover:brightness-110`}
                      `}
                    >
                      <LucideIcon className="w-8 h-8 text-white" strokeWidth={3} />
                      
                      {isCompleted && (
                        <div className="absolute -right-1 -top-1 bg-white rounded-full p-1 border-2 border-amber-500 shadow-sm animate-in zoom-in duration-300">
                          <Icons.Check className="w-4 h-4 text-amber-500" strokeWidth={4} />
                        </div>
                      )}
                    </button>
                    
                    <div className="absolute top-full mt-5 w-36 flex flex-col items-center pointer-events-none">
                      <div className="bg-white/95 backdrop-blur-[4px] px-3 py-1.5 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center min-h-[40px]">
                        <p className="text-center text-[10px] font-black uppercase text-slate-600 leading-tight">
                          {lesson.title}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LessonPath;