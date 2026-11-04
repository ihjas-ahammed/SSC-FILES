import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PRACTICE_SECTION } from '../data/practice';
import { CheckCircle, Circle, ArrowRight } from 'lucide-react';
import { UserProgress } from '../types';

interface Props {
  progress: UserProgress;
}

const PracticeTab: React.FC<Props> = ({ progress }) => {
  const navigate = useNavigate();
  const lessons = PRACTICE_SECTION.units.flatMap(u => u.lessons);

  return (
    <div className="pb-32 px-4 pt-4">
      <h2 className="text-2xl font-black text-white mb-6 text-center">Practice Assessment</h2>
      <p className="text-slate-400 text-center mb-8 text-sm">FYUGP 2024-28 Electrodynamics I</p>

      <div className="space-y-3">
        {lessons.map((lesson, idx) => {
          const isCompleted = progress.completedLessons.includes(lesson.id);
          return (
            <button
              key={lesson.id}
              onClick={() => navigate(`/lesson/practice-mode/practice-unit/${lesson.id}`)}
              className={`w-full glass-panel p-4 rounded-xl flex items-center transition-all active:scale-[0.98] border-b-4 ${isCompleted ? 'border-green-500/30' : 'border-white/5'}`}
            >
              <div className="mr-4 text-slate-500 font-bold text-lg w-8">
                {idx + 1}
              </div>
              
              <div className="flex-grow text-left">
                <h3 className={`font-bold text-base ${isCompleted ? 'text-green-400' : 'text-slate-200'}`}>
                  {lesson.title}
                </h3>
                <p className="text-xs text-slate-500 line-clamp-1">
                  {lesson.description}
                </p>
              </div>

              <div className="ml-2">
                {isCompleted ? (
                  <CheckCircle className="w-6 h-6 text-green-500" />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                     <ArrowRight className="w-4 h-4 text-slate-400" />
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default PracticeTab;