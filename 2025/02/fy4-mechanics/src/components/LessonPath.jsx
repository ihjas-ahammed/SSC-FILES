import React from 'react';

function LessonPath({ lessons, completedLessons, currentActiveLesson, onStartLesson }) {
  return (
    <div className="val-path">
      {lessons.map((lesson, index) => {
        const isCompleted = completedLessons[lesson.id];
        const isCurrent = currentActiveLesson && lesson.id === currentActiveLesson.id && !isCompleted;
        const isLocked = !isCompleted && !isCurrent;

        let statusClass = isCompleted ? 'completed' : isCurrent ? 'current' : 'locked';

        return (
          <div key={lesson.id} className="val-node-wrapper">
            <button 
              className={`val-node ${statusClass}`}
              onClick={() => (isCompleted || isCurrent) && onStartLesson(lesson)}
              disabled={isLocked}
            >
              <div className="node-inner">
                {isCompleted ? '✓' : isCurrent ? '▶' : '🔒'}
              </div>
            </button>
            <div className={`node-label ${statusClass}`}>{lesson.title}</div>
          </div>
        );
      })}
    </div>
  );
}

export default LessonPath;