import React, { useEffect, useState } from 'react';
import { Section, Lesson, Unit } from '../types';
import * as Icons from 'lucide-react';
import PathConnector from './PathConnector';
import LessonNode from './LessonNode';

interface Props {
  section: Section;
  completedLessons: string[];
  onStartLesson: (unitId: string, lessonId: string) => void;
  onOpenSectionSelector: () => void;
}

const colorHexMap: Record<string, string> = {
  'duo-blue': '#1cb0f6',
  'duo-green': '#58cc02',
  'duo-red': '#ff4b4b'
};

const LessonPath: React.FC<Props> = ({ section, completedLessons, onStartLesson, onOpenSectionSelector }) => {
  const [recentlyCompleted, setRecentlyCompleted] = useState<string | null>(null);

  // Effect to handle auto-scrolling to the current lesson on load
  useEffect(() => {
    const allLessonsList = section.units.flatMap(u => u.lessons.map(l => l.id));
    let targetId = allLessonsList.find(id => !completedLessons.includes(id));
    
    // If all are completed, default to the last lesson in the section
    if (!targetId && allLessonsList.length > 0) {
       targetId = allLessonsList[allLessonsList.length - 1];
    }

    if (targetId) {
       const timer = setTimeout(() => {
          const el = document.getElementById(`lesson-node-${targetId}`);
          if (el) {
             el.scrollIntoView({ behavior: 'instant', block: 'center' });
          }
       }, 150); // slight delay to allow rendering and animation setup to settle
       return () => clearTimeout(timer);
    }
  }, [section.id, completedLessons]); // Trigger when section changes or a lesson finishes

  // Effect to handle the recently completed path animation and auto-start
  useEffect(() => {
    const rc = localStorage.getItem('recently_completed');
    if (rc) {
      setRecentlyCompleted(rc);
      
      const allLessonsList = section.units.flatMap(u => u.lessons.map(l => ({ ...l, unitId: u.id })));
      const idx = allLessonsList.findIndex(l => l.id === rc);
      
      if (idx !== -1 && idx < allLessonsList.length - 1) {
         const nextL = allLessonsList[idx + 1];
         // Auto start next lesson precisely after animation completes
         const timer = setTimeout(() => {
            onStartLesson(nextL.unitId, nextL.id);
            localStorage.removeItem('recently_completed');
            setRecentlyCompleted(null);
         }, 2600);
         
         return () => clearTimeout(timer);
      } else {
         localStorage.removeItem('recently_completed');
         setRecentlyCompleted(null);
      }
    }
  }, [section, onStartLesson]);

  const colorHex = colorHexMap[section.color] || '#1cb0f6';
  const allLessons = section.units.flatMap(u => u.lessons.map(l => ({ ...l, unitId: u.id })));

  let nextLessonId: string | null = null;
  if (recentlyCompleted) {
     const idx = allLessons.findIndex(l => l.id === recentlyCompleted);
     if (idx !== -1 && idx < allLessons.length - 1) {
        nextLessonId = allLessons[idx + 1].id;
     }
  }

  let currentY = 0;
  const pathPoints: { x: number, y: number, id: string }[] = [];
  const renderElements: { type: 'header' | 'lesson', unit: Unit, y: number, x?: number, lesson?: Lesson }[] = [];
  
  let globalLessonIdx = 0;

  section.units.forEach((unit) => {
    currentY += 80;
    renderElements.push({ type: 'header', unit, y: currentY });
    currentY += 100;

    unit.lessons.forEach((lesson) => {
      const offset = globalLessonIdx % 2 === 0 ? 0 : (globalLessonIdx % 4 === 1 ? -65 : 65);
      const x = 200 + offset; 
      const y = currentY;
      
      pathPoints.push({ x, y, id: lesson.id });
      renderElements.push({ type: 'lesson', unit, lesson, x, y });

      currentY += 140;
      globalLessonIdx++;
    });
    currentY += 60; 
  });

  const containerHeight = currentY + 40;

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

        {renderElements.map((el, i) => {
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
             const isNextToStart = el.lesson.id === nextLessonId;

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

      </div>
    </div>
  );
};

export default LessonPath;