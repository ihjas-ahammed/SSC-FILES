import React, { useState } from 'react';
import { sections } from '../data/sections';
import { useProgress } from '../context/ProgressContext';
import TopBar from './TopBar';
import UnitPath from './UnitPath';
import BottomTabs from './BottomTabs';
import SummaryTab from './SummaryTab';
import PracticeTab from './PracticeTab';

const Dashboard = ({ activeSection, setActiveSection, onSelectLesson }) => {
  const { completedLessons } = useProgress();
  const [activeTab, setActiveTab] = useState('path'); // 'path', 'summary', 'practice'

  return (
    <div className="dashboard-mobile route-transition">
      <TopBar 
        sections={sections} 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        completedLessons={completedLessons}
      />
      
      {/* Content wrapper with extended bottom padding to accommodate fixed nav */}
      <div className="tab-content-wrapper" style={{ paddingBottom: '120px', minHeight: '100dvh' }}>
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

      <BottomTabs activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default Dashboard;