import React from 'react';
import { sections } from '../data/sections';
import { useProgress } from '../context/ProgressContext';
import { Map } from 'lucide-react';
import TopBar from './TopBar';
import UnitPath from './UnitPath';

const Dashboard = ({ activeSection, setActiveSection, onSelectLesson, onShowSummary }) => {
  const { completedLessons } = useProgress();

  return (
    <div className="dashboard-mobile route-transition">
      <TopBar 
        sections={sections} 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        completedLessons={completedLessons}
      />
      
      <div className="summary-btn-container" style={{ padding: '24px 20px 0 20px' }}>
        <button
          className="btn-primary flex-center summary-action-btn"
          onClick={onShowSummary}
        >
          <Map size={24} color="var(--primary)" />
          <span>View Journey Summary</span>
        </button>
      </div>

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