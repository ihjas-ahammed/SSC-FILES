import React from 'react';
import { Check, Star, BookOpen, Lock } from 'lucide-react';

const UnitPath = ({ unit, completedLessons, onSelectLesson }) => {
  const isPractice = unit.id.includes('practice');

  // Track if we've found the first uncompleted lesson to mark it as "current"
  let foundFirstUncompleted = false;

  // Snake-like path offsets as percentages so they scale with container width
  // (prevents overflow on small phones)
  const pathOffsetsPct = [0, -14, -22, -14, 0, 14, 22, 14];

  return (
    <div className="unit-section">
      <div className={`unit-header ${isPractice ? 'practice-header' : ''}`}>
        <h3 className="unit-title">{unit.title}</h3>
      </div>
      
      <div className="path-lessons">
        {unit.lessons.map((lesson, idx) => {
          const isCompleted = completedLessons.includes(lesson.id);
          
          let status = 'locked';
          if (isCompleted) {
            status = 'completed';
          } else if (!foundFirstUncompleted) {
            status = 'unlocked';
            foundFirstUncompleted = true;
          }

          const offsetPct = pathOffsetsPct[idx % pathOffsetsPct.length];

          return (
            <div
              className="lesson-node-wrap"
              key={lesson.id}
              style={{ transform: `translateX(${offsetPct}%)` }}
            >
              <button 
                className={`lesson-node ${status} ${isPractice ? 'practice' : ''}`}
                onClick={() => status !== 'locked' && onSelectLesson(lesson)}
                disabled={status === 'locked'}
              >
                {status === 'completed' ? (
                  <Check size={28} strokeWidth={3} />
                ) : status === 'locked' ? (
                  <Lock size={24} />
                ) : isPractice ? (
                  <Star size={28} fill="currentColor" />
                ) : (
                  <BookOpen size={24} />
                )}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UnitPath;