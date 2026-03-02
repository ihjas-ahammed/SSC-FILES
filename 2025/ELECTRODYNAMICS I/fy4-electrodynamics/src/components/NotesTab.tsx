import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Course, Lesson } from '../types';
import MathRenderer from './MathRenderer';
import CanvasArt from './CanvasArt';
import { ArrowRight, BookOpen } from 'lucide-react';
import { getNextCourseId } from '../utils/courseUtils';

interface Props {
  course: Course;
  courses: Course[];
  onChangeCourse: (id: string) => void;
}

const NotesTab: React.FC<Props> = ({ course, courses, onChangeCourse }) => {
  const navigate = useNavigate();

  // Helper to check if a lesson is an "Example" lesson
  const isExampleLesson = (lesson: Lesson) => {
    return lesson.title.startsWith("Ex") || lesson.title.startsWith("Prob") || lesson.slides.some(s => s.type === 'example_q');
  };

  // Logic to prevent duplicate interactive canvases
  const renderedCanvasIds = useMemo(() => new Set<string>(), [course.id]);

  const nextCourseId = getNextCourseId(courses, course.id);
  const nextCourse = courses.find(c => c.id === nextCourseId);

  return (
    <div className="pb-32 px-4 pt-4">
      <h2 className="text-2xl font-black text-white mb-2 text-center">{course.title}</h2>
      <p className="text-slate-400 text-center mb-8 text-xs font-bold uppercase tracking-widest">Digital Notebook</p>

      <div className="space-y-12">
        {course.sections.flatMap(section => 
          section.units.map(unit => {
            // Filter theory slides
            const theorySlides = unit.lessons.flatMap(l => l.slides).filter(s => s.type === 'theory' || s.canvasId || s.interactiveCanvasId);
            
            // Find relevant example lessons in this unit
            const exampleLessons = unit.lessons.filter(l => isExampleLesson(l));

            if (theorySlides.length === 0) return null;

            return (
              <div key={unit.id} className="space-y-6">
                <div className="flex items-center gap-4 mb-4">
                   <div className={`h-1 w-10 rounded-full bg-${unit.color || 'duo-blue'}`} />
                   <h3 className="text-xl font-bold text-slate-200">{unit.title}</h3>
                </div>

                {theorySlides.map((slide, i) => {
                  const canvasId = slide.canvasId || slide.interactiveCanvasId;
                  let showCanvas = false;
                  
                  if (canvasId) {
                    if (!renderedCanvasIds.has(canvasId)) {
                      renderedCanvasIds.add(canvasId);
                      showCanvas = true;
                    }
                  }

                  return (
                    <div key={slide.id} className="glass-panel p-6 rounded-2xl border border-white/5 relative overflow-hidden">
                      <div className={`absolute top-0 left-0 w-1 h-full bg-${unit.color || 'duo-blue'}/50`} />
                      
                      {slide.title && (
                        <h4 className="text-lg font-bold text-blue-400 mb-3 border-b border-white/10 pb-2 pl-2">
                          {slide.title}
                        </h4>
                      )}
                      
                      {slide.content && (
                        <div className="mb-4 pl-2">
                          <MathRenderer content={slide.content} className="text-slate-300 text-sm leading-relaxed" />
                        </div>
                      )}

                      {showCanvas && (
                         <div className="mt-4 bg-black/20 rounded-xl p-2 overflow-hidden">
                            <CanvasArt canvasId={canvasId!} />
                            <p className="text-center text-[10px] text-slate-500 mt-2 uppercase tracking-wide">Interactive Visual</p>
                         </div>
                      )}
                    </div>
                  );
                })}

                {/* Reference to Examples */}
                {exampleLessons.length > 0 && (
                  <div className="pl-4 border-l-2 border-white/10">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Practice Examples</p>
                    <div className="grid grid-cols-1 gap-2">
                      {exampleLessons.map(exLesson => (
                        <button
                          key={exLesson.id}
                          onClick={() => navigate(`/lesson/${course.id}/${unit.id}/${exLesson.id}`)}
                          className="flex items-center justify-between glass-panel p-3 rounded-xl hover:bg-white/10 transition-colors text-left group"
                        >
                          <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">{exLesson.title}</span>
                          <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}

        {/* Navigation to Next Module */}
        {nextCourse && (
          <div className="pt-8 pb-4 flex justify-center">
            <button
              onClick={() => onChangeCourse(nextCourse.id)}
              className="bg-slate-800 border-slate-700 border-b-4 hover:bg-slate-700 text-white font-bold py-4 px-8 rounded-2xl uppercase tracking-widest transition-all active:border-b-0 active:translate-y-1 flex items-center gap-3"
            >
              <BookOpen className="w-5 h-5 text-amber-400" />
              <span>Next: {nextCourse.title}</span>
            </button>
          </div>
        )}

        {course.sections.every(s => s.units.every(u => u.lessons.every(l => l.slides.filter(s => s.type === 'theory').length === 0))) && (
          <div className="text-center text-slate-500 py-10">
            No notes available for this module.
          </div>
        )}
      </div>
    </div>
  );
};

export default NotesTab;