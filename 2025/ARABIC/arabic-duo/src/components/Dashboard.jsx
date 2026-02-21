import React, { useState } from 'react';
import { sections } from '../data/sections';
import { useProgress } from '../context/ProgressContext';
import TopBar from './TopBar';
import UnitPath from './UnitPath';

const Dashboard = ({ onSelectLesson }) => {
  const { completedLessons } = useProgress();
  const [activeSection, setActiveSection] = useState(sections[0]);

  return (
    <div className="dashboard-mobile">
      <TopBar 
        sections={sections} 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        completedLessons={completedLessons}
      />
      
      <div className="path-container">
        {activeSection.units.map((unit) => (
          <UnitPath 
            key={unit.id} 
            unit={unit} 
            completedLessons={completedLessons} 
            onSelectLesson={onSelectLesson}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;