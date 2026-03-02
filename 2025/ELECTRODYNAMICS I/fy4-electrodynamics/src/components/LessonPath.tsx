import React, { useEffect, useState, useMemo } from 'react';
import { Section, Lesson, Unit } from '../types';
import * as Icons from 'lucide-react';
import PathConnector from './PathConnector';
import LessonNode from './LessonNode';

interface Props {
  section: Section;
  completedLessons: string[];
  onStartLesson: (unitId: string, lessonId: string) => void;
  onOpenSectionSelector: () => void;
  nextContext: { type: 'section' | 'course' | 'none', label: string };
  onNavigateNext: () => void;
}

const colorHexMap: Record<string, string> = {
  'duo-blue': '#1cb0f6',
  'duo-green': '#58cc02',
  'duo-red': '#ff4b4b',
  'duo-violet': '#ce82ff',
  'duo-orange': '#ff9600'
};

const LessonPath: React.FC<Props> = ({ 
  section, 
  completedLessons, 
  onStartLesson, 
  onOpenSectionSelector,
  nextContext,
  onNavigateNext
}) => {
  const [recentlyCompleted, setRecentlyCompleted] = useState<string | null>(null);

  // Flatten lessons
  const allLessons = useMemo(() => section.units.flatMap(u => u.lessons.map(l => ({ ...l, unitId: u.id }))), [section]);

  const currentLessonId = useMemo(() => {
    const firstUncompleted = allLessons.find(l => !completedLessons.includes(l.id));
    return firstUncompleted ? firstUncompleted.id : null;
  }, [allLessons, completedLessons]);

  const isSectionComplete = useMemo(() => {
    return allLessons.every(l => completedLessons.includes(l.id));
  }, [allLessons, completedLessons]);

  useEffect(() => {
    const rc = localStorage.getItem('recently_completed');
    if (rc) {
      setRecentlyCompleted(rc);
      const timer = setTimeout(() => {
        setRecentlyCompleted(null);
        localStorage.removeItem('recently_completed');
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (currentLessonId) {
      setTimeout(() => {
        const el = document.getElementById(`lesson-node-${currentLessonId}`);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 500);
    } else if (isSectionComplete) {
      // Scroll to bottom if complete
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
  }, [section.id, currentLessonId, isSectionComplete]);

  const colorHex = colorHexMap[section.color] || '#1cb0f6';

  let currentY = 40;
  const pathPoints: { x: number, y: number, id: string }[] = [];
  const renderElements: { type: 'header' | 'lesson', unit: Unit, y: number, x?: number, lesson?: Lesson }[] = [];
  
  let globalLessonIdx = 0;

  section.units.forEach((unit, uIdx) => {
    if (uIdx > 0) {
      currentY += 60; 
    }
    renderElements.push({ type: 'header', unit, y: currentY });
    currentY += 100; 

    unit.lessons.forEach((lesson) => {
      let offset = 0;
      if (globalLessonIdx % 4 === 1) offset = 65;
      if (globalLessonIdx % 4 === 2) offset = 0;
      if (globalLessonIdx % 4 === 3) offset = -65;

      const x = 200 + offset; 
      const y = currentY;
      
      pathPoints.push({ x, y, id: lesson.id });
      renderElements.push({ type: 'lesson', unit, lesson, x, y });

      currentY += 140; 
      globalLessonIdx++;
    });
  });

  const containerHeight = currentY + (isSectionComplete && nextContext.type !== 'none' ? 100 : 40);

  return (
    <div className="pb-32 max-w-md mx-auto relative">
      <div 
        onClick={onOpenSectionSelector}
        className={`sticky top-16 mx-4 mt-4 z-30 py-3 px-5 glass-panel rounded-2xl cursor-pointer hover:bg-white/10 transition-all active:scale-[0.98] flex items-center justify-between border-b-4 border-${section.color}`}
      >
        <div className="flex items-center gap-2">
           <h2 className="text-xs font-black uppercase tracking-widest leading-none drop-shadow-sm text-white">{section.title}</h2>
        </div>
        <Icons.ChevronDown className="w-4 h-4 text-slate-300" />
      </div>

      <div className="mt-8 relative w-full max-w-[400px] mx-auto overflow-hidden" style={{ height: `${containerHeight}px` }}>
        
        <svg 
           viewBox={`0 0 400 ${containerHeight}`} 
           preserveAspectRatio="none"
           className="absolute inset-0 w-full h-full pointer-events-none" 
           style={{ zIndex: 0 }}
        >
           <PathConnector 
             points={pathPoints} 
             completedLessons={completedLessons} 
             recentlyCompleted={recentlyCompleted}
             colorHex={colorHex}
           />
        </svg>

        {renderElements.map((el) => {
          if (el.type === 'header') {
            return (
              <div 
                key={`header-${el.unit.id}`}
                className="absolute w-full px-8 pointer-events-none"
                style={{ top: `${el.y}px`, transform: 'translateY(-50%)', zIndex: 10 }}
              >
                <div className="glass-panel p-5 rounded-3xl text-center shadow-2xl bg-black/60 backdrop-blur-md border border-white/10">
                  <h3 className="font-extrabold text-white text-sm uppercase tracking-tight mb-1.5">{el.unit.title}</h3>
                  <p className="text-slate-400 font-bold text-[10px] uppercase tracking-wider">{el.unit.description}</p>
                </div>
              </div>
            );
          }

          if (el.type === 'lesson' && el.lesson && el.x !== undefined) {
             const isCompleted = completedLessons.includes(el.lesson.id);
             const isNextToStart = el.lesson.id === currentLessonId;

             return (
               <LessonNode 
                 key={`lesson-${el.lesson.id}`}
                 lesson={el.lesson}
                 x={el.x}
                 y={el.y}
                 isCompleted={isCompleted}
                 isNextToStart={isNextToStart}
                 colorName={section.color}
                 onStart={() => onStartLesson(el.unit.id, el.lesson!.id)}
               />
             );
          }
          return null;
        })}

        {isSectionComplete && nextContext.type !== 'none' && (
          <div 
            className="absolute w-full flex justify-center z-20 animate-in fade-in slide-in-from-bottom-4 duration-700"
            style={{ top: `${currentY}px` }}
          >
            <button
              onClick={onNavigateNext}
              className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-white shadow-lg transition-all active:scale-95
                ${nextContext.type === 'course' 
                  ? 'bg-amber-500 border-b-4 border-amber-700 hover:bg-amber-400' 
                  : 'bg-duo-blue border-b-4 border-duo-blue-dark hover:bg-blue-400'}`}
            >
              <span>{nextContext.label}</span>
              <Icons.ArrowRight className="w-5 h-5 animate-pulse" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LessonPath;