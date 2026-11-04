import React from 'react';
import { sections } from '../data/sections';
import { useProgress } from '../context/ProgressContext';
import TopBar from './TopBar';
import UnitPath from './UnitPath';
import SummaryTab from './SummaryTab';
import PracticeTab from './PracticeTab';

const Dashboard = ({ activeSection, setActiveSection, onSelectLesson }) => {
  const { completedLessons, activeTab } = useProgress();

  return (
    <div className="dashboard-mobile route-transition">
      <TopBar
        sections={sections}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        completedLessons={completedLessons}
      />

      <div className="tab-content-wrapper" style={{ paddingBottom: 'calc(96px + env(safe-area-inset-bottom))' }}>
        {activeTab === 'path' && (
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
        )}

        {activeTab === 'summary' && (
          <SummaryTab activeSection={activeSection} />
        )}

        {activeTab === 'practice' && (
          <PracticeTab activeSection={activeSection} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
