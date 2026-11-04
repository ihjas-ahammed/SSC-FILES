import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { MODULES } from '../data/modules';
import { UserProgress } from '../types';
import MathRenderer from '../components/MathRenderer';
import InteractiveCanvasArt from '../components/InteractiveCanvasArt';
import InteractiveProofButton from '../components/InteractiveProofButton';
import NextModuleButton from '../components/NextModuleButton';
import { FileText } from 'lucide-react';

interface Props {
  progress: UserProgress;
  onModuleChange?: (moduleId: string) => void;
}

/**
 * A wrapper that renders an InteractiveCanvasArt but hides itself if the
 * canvas id is not registered (the component renders a fallback text node).
 */
const SafeCanvasArt: React.FC<{ canvasId: string; title?: string }> = ({ canvasId, title }) => {
  const [hidden, setHidden] = useState(false);

  const handleRef = useCallback((node: HTMLDivElement | null) => {
    if (!node) return;
    // Use a MutationObserver to detect when the fallback "not found" text appears
    const observer = new MutationObserver(() => {
      if (node.textContent?.includes('not found')) {
        setHidden(true);
        observer.disconnect();
      }
    });
    observer.observe(node, { childList: true, subtree: true });
    // Also do an immediate check
    if (node.textContent?.includes('not found')) {
      setHidden(true);
    }
  }, []);

  if (hidden) return null;

  return (
    <div ref={handleRef} className="glass-panel p-3 rounded-2xl bg-black/40 border border-slate-800">
      {title && (
        <h5 className="font-bold text-xs text-center text-slate-400 uppercase tracking-widest mb-3">
          {title}
        </h5>
      )}
      <InteractiveCanvasArt canvasId={canvasId} />
    </div>
  );
};

const ModuleNotesPage: React.FC<Props> = ({ progress, onModuleChange }) => {
  const navigate = useNavigate();
  const currentModuleIndex = MODULES.findIndex(m => m.id === progress.currentModuleId);
  const currentModule = currentModuleIndex !== -1 ? MODULES[currentModuleIndex] : MODULES[0];
  const nextModule =
    currentModuleIndex !== -1 && currentModuleIndex < MODULES.length - 1
      ? MODULES[currentModuleIndex + 1]
      : undefined;

  const handleNavigateToLesson = (unitId: string, lessonId: string) => {
    // Find the section that contains this unit to build the lesson URL
    for (const section of currentModule.sections) {
      const unit = section.units.find(u => u.id === unitId);
      if (unit) {
        navigate(`/lesson/${currentModule.id}/${unitId}/${lessonId}`);
        return;
      }
    }
  };

  const handleGoNextModule = () => {
    if (nextModule && onModuleChange) {
      onModuleChange(nextModule.id);
    }
  };

  return (
    <div className="flex-grow overflow-y-auto pb-28 lg:pb-8 pt-6 px-4 no-scrollbar border-x border-white/5 relative">
      <div className="flex items-center justify-center mb-8">
        <FileText className="w-8 h-8 text-duo-violet mr-3" />
        <h1 className="text-2xl font-black text-white tracking-tight">Module Notes</h1>
      </div>

      <div className="text-center mb-10">
        <h2 className="text-xl font-bold text-white mb-1">{currentModule.title}</h2>
        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
          {currentModule.description}
        </p>
      </div>

      <div className="space-y-12">
        {currentModule.sections.map(section => (
          <div key={section.id} className="relative">
            <div
              className="sticky top-0 z-10 glass-panel py-3 px-4 rounded-xl border-b-2 mb-6 shadow-md backdrop-blur-xl"
              style={{ borderBottomColor: `var(--tw-colors-${section.color})` }}
            >
              <h2 className={`text-sm font-black uppercase tracking-wider text-${section.color}`}>
                {section.title}
              </h2>
            </div>

            <div className="space-y-8 pl-2">
              {section.units.map(unit => (
                <div key={unit.id} className="border-l-2 border-slate-800 pl-4 relative">
                  <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-slate-800 border-2 border-[#0b0f19]" />
                  <h3 className="text-lg font-bold text-white mb-4">{unit.title}</h3>

                  <div className="space-y-6">
                    {unit.lessons.map(lesson => (
                      <div key={lesson.id} className="space-y-4">
                        <h4 className="text-xs font-black uppercase tracking-widest text-slate-500">
                          {lesson.title}
                        </h4>

                        <div className="space-y-3">
                          {lesson.slides.map(slide => {
                            // Theory slides — always show
                            if (slide.type === 'theory') {
                              return (
                                <div
                                  key={slide.id}
                                  className="glass-panel p-5 rounded-2xl bg-white/5"
                                >
                                  {slide.title && (
                                    <h5 className="font-bold text-slate-300 mb-2">{slide.title}</h5>
                                  )}
                                  <MathRenderer
                                    content={slide.content}
                                    className="text-sm text-slate-300"
                                  />
                                </div>
                              );
                            }

                            // Interactive canvas — auto-hide if art not found
                            if (slide.type === 'interactive_canvas' && slide.interactiveCanvasId) {
                              return (
                                <SafeCanvasArt
                                  key={slide.id}
                                  canvasId={slide.interactiveCanvasId}
                                  title={slide.title}
                                />
                              );
                            }

                            // Proof / Solution slides — render as a clickable button that opens the lesson
                            if (slide.type === 'proof' || slide.type === 'solution') {
                              return (
                                <InteractiveProofButton
                                  key={slide.id}
                                  lessonTitle={lesson.title}
                                  lessonId={lesson.id}
                                  unitId={unit.id}
                                  moduleId={currentModule.id}
                                  onNavigate={handleNavigateToLesson}
                                />
                              );
                            }

                            // Other interactive types (quiz, fill_in_blank, numerical, example_q)
                            // — keep as a subtle non-clickable reference tag (no button, no clutter)
                            return null;
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Next Module Button */}
      {nextModule && onModuleChange && (
        <NextModuleButton nextModule={nextModule} onGoNext={handleGoNextModule} />
      )}
    </div>
  );
};

export default ModuleNotesPage;
