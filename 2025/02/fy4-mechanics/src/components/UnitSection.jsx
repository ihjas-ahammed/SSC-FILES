import React from 'react';
import LessonPath from './LessonPath';

function UnitSection({ unit, unitIndex, completedLessons, currentActiveLesson, onStartLesson }) {
  return (
    <div className="unit-container">
      <div className="unit-header glass-panel">
        <div className="unit-header-content">
          <h2 className="unit-title">UNIT {unitIndex + 1}</h2>
          <p className="unit-desc">{unit.title.split(': ')[1] || unit.title}</p>
        </div>
      </div>
      
      <LessonPath 
        lessons={unit.lessons} 
        completedLessons={completedLessons}
        currentActiveLesson={currentActiveLesson}
        onStartLesson={onStartLesson}
      />
    </div>
  );
}

export default UnitSection;