import React from 'react';
import { sections } from '../data/sections';
import { useProgress } from '../context/ProgressContext';
import { BookOpen, CheckCircle, Award } from 'lucide-react';

const Dashboard = ({ onSelectLesson }) => {
  const { completedLessons } = useProgress();

  return (
    <div className="dashboard glass-panel">
      <div className="dashboard-header">
        <h1>DuoFY5 - Arabic</h1>
        <p style={{ textAlign: 'center', color: 'var(--text-dim)', marginTop: '8px' }}>
          Learn Arabic step-by-step
        </p>
      </div>

      {sections.map(section => (
        <div key={section.id} className="section-card">
          <h2 className="arabic-text">{section.title}</h2>
          
          {section.units.map((unit, uIdx) => {
            const isPractice = unit.id.includes('practice');
            return (
              <div key={unit.id} className="unit-card" style={isPractice ? {borderColor: 'rgba(189, 52, 254, 0.4)'} : {}}>
                <h3 style={isPractice ? {color: '#BD34FE'} : {}}>{unit.title}</h3>
                <div className="lessons-grid">
                  {unit.lessons.map(lesson => {
                    const isCompleted = completedLessons.includes(lesson.id);
                    return (
                      <button
                        key={lesson.id}
                        className={`lesson-btn ${isCompleted ? 'completed' : ''} ${isPractice ? 'practice-unit' : ''}`}
                        onClick={() => onSelectLesson(lesson)}
                      >
                        {isCompleted ? <CheckCircle size={32} /> : 
                         isPractice ? <Award size={32} /> : <BookOpen size={32} />}
                        <span>{lesson.title}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Dashboard;