import React, { useEffect, useState, useMemo } from 'react';
import { Section, Lesson, Unit } from '../types';
import * as Icons from 'lucide-react';
import PathConnector from './PathConnector';
import LessonNode from './LessonNode';
import NextSectionButton from './NextSectionButton';

interface Props {
  section: Section;
  nextSection?: Section;
  completedLessons: string[];
  onStartLesson: (unitId: string, lessonId: string) => void;
  onOpenSectionSelector: () => void;
  onGoNextSection?: () => void;
}

const colorHexMap: Record<string, string> = {
  'duo-blue': '#1cb0f6',
  'duo-green': '#58cc02',
  'duo-red': '#ff4b4b',
  'duo-violet': '#ce82ff',
  'duo-orange': '#ff9600',
  'duo-gray': '#9ca3af',
  'duo-maroon': '#800000',
  'duo-indigo': '#6366f1',
  'duo-pink': '#ec4899',
};

const LessonPath: React.FC<Props> = ({
  section,
  nextSection,
  completedLessons,
  onStartLesson,
  onOpenSectionSelector,
  onGoNextSection,
}) => {
  const [recentlyCompleted, setRecentlyCompleted] = useState<string | null>(null);

  const allLessons = useMemo(
    () => section.units.flatMap(u => u.lessons.map(l => ({ ...l, unitId: u.id }))),
    [section]
  );

  const unlockedLessonIds = useMemo(() => {
    const unlocked = new Set<string>();
    section.units.forEach(unit => {
      unit.lessons.forEach((lesson, idx) => {
        if (idx === 0) {
          unlocked.add(lesson.id);
        } else {
          const prevId = unit.lessons[idx - 1].id;
          if (completedLessons.includes(prevId)) {
            unlocked.add(lesson.id);
          }
        }
      });
    });
    return unlocked;
  }, [section, completedLessons]);

  const isSectionComplete = useMemo(
    () => allLessons.length > 0 && allLessons.every(l => completedLessons.includes(l.id)),
    [allLessons, completedLessons]
  );

  useEffect(() => {
    const rc = localStorage.getItem('recently_completed');
    if (rc) {
      setRecentlyCompleted(rc);
      const idx = allLessons.findIndex(l => l.id === rc);
      if (idx !== -1 && idx < allLessons.length - 1) {
        const nextId = allLessons[idx + 1].id;
        const scrollTimer = setTimeout(() => {
          const el = document.getElementById(`lesson-node-${nextId}`);
          if (el) {
            const y = el.getBoundingClientRect().top + window.scrollY - window.innerHeight / 2 + 100;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }, 800);
        const clearTimer = setTimeout(() => {
          localStorage.removeItem('recently_completed');
          setRecentlyCompleted(null);
        }, 2500);
        return () => {
          clearTimeout(scrollTimer);
          clearTimeout(clearTimer);
        };
      } else {
        localStorage.removeItem('recently_completed');
        setRecentlyCompleted(null);
      }
    }
  }, [section.id, allLessons]);

  const colorHex = colorHexMap[section.color] || '#1cb0f6';

  let currentY = 40;
  const pathPoints: { x: number; y: number; id: string }[] = [];
  const renderElements: {
    type: 'header' | 'lesson';
    unit: Unit;
    y: number;
    x?: number;
    lesson?: Lesson;
  }[] = [];

  let globalLessonIdx = 0;

  section.units.forEach((unit, uIdx) => {
    if (uIdx > 0) {
      currentY += 50;
    }
    renderElements.push({ type: 'header', unit, y: currentY });
    currentY += 120;

    unit.lessons.forEach(lesson => {
      let offset = 0;
      if (globalLessonIdx % 4 === 1) offset = 65;
      if (globalLessonIdx % 4 === 3) offset = -65;

      const x = 200 + offset;
      const y = currentY;

      pathPoints.push({ x, y, id: lesson.id });
      renderElements.push({ type: 'lesson', unit, lesson, x, y });

      currentY += 155;
      globalLessonIdx++;
    });
  });

  const containerHeight = currentY + 40;

  return (
    <div className="pb-32 w-full mx-auto relative">
      <div
        onClick={onOpenSectionSelector}
        className={`sticky top-16 mx-4 mt-4 z-30 py-3 px-5 glass-panel rounded-2xl cursor-pointer hover:bg-white/10 transition-all active:scale-[0.98] flex items-center justify-between border-b-4 border-${section.color}`}
      >
        <div className="flex items-center gap-2">
          <h2 className="text-xs font-black uppercase tracking-widest leading-none drop-shadow-sm text-white">
            {section.title}
          </h2>
        </div>
        <Icons.ChevronDown className="w-4 h-4 text-slate-300" />
      </div>

      <div
        className="mt-8 relative w-full max-w-[400px] mx-auto"
        style={{ height: `${containerHeight}px` }}
      >
        <svg
          viewBox={`0 0 400 ${containerHeight}`}
          preserveAspectRatio="xMidYMid meet"
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ zIndex: 0 }}
        >
          <PathConnector
            points={pathPoints}
            completedLessons={completedLessons}
            recentlyCompleted={recentlyCompleted}
            unlockedLessonIds={unlockedLessonIds}
            colorHex={colorHex}
          />
        </svg>

        {renderElements.map(el => {
          if (el.type === 'header') {
            return (
              <div
                key={`header-${el.unit.id}`}
                className="absolute w-full px-8 pointer-events-none"
                style={{ top: `${el.y}px`, transform: 'translateY(-50%)', zIndex: 10 }}
              >
                <div className="glass-panel p-5 rounded-3xl text-center shadow-2xl bg-black/60 backdrop-blur-md border border-white/10">
                  <h3 className="font-extrabold text-white text-sm uppercase tracking-tight mb-1.5">
                    {el.unit.title}
                  </h3>
                  <p className="text-slate-400 font-bold text-[10px] uppercase tracking-wider">
                    {el.unit.description}
                  </p>
                </div>
              </div>
            );
          }
          if (el.type === 'lesson' && el.lesson && el.x !== undefined) {
            const isCompleted = completedLessons.includes(el.lesson.id);
            const isUnlocked = unlockedLessonIds.has(el.lesson.id);
            const isNewlyCompletedPathTarget = recentlyCompleted
              ? allLessons[allLessons.findIndex(l => l.id === recentlyCompleted) + 1]?.id === el.lesson.id
              : false;

            return (
              <LessonNode
                key={`lesson-${el.lesson.id}`}
                lesson={el.lesson}
                x={el.x}
                y={el.y}
                status={isCompleted ? 'completed' : isUnlocked ? 'current' : 'locked'}
                isNextToStart={isNewlyCompletedPathTarget}
                colorName={section.color}
                onStart={() => onStartLesson(el.unit.id, el.lesson!.id)}
              />
            );
          }
          return null;
        })}
      </div>

      {/* Next Section Button — only shows when the section is fully complete and a next section exists */}
      {isSectionComplete && nextSection && onGoNextSection && (
        <NextSectionButton nextSection={nextSection} onGoNext={onGoNextSection} />
      )}
    </div>
  );
};

export default LessonPath;
