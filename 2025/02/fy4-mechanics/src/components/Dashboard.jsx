import React from 'react';
import UnitSection from './UnitSection';

function Dashboard({ section, completedLessons, currentActiveLesson, onStartLesson }) {
  return (
    <div className="dashboard">
      <h1 className="section-main-title">{section.title}</h1>
      <div className="unit-list">
        {section.units.map((unit, index) => (
          <UnitSection 
            key={unit.id} 
            unit={unit} 
            unitIndex={index}
            completedLessons={completedLessons} 
            currentActiveLesson={currentActiveLesson}
            onStartLesson={onStartLesson} 
          />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;