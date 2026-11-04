import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProgress } from '../context/ProgressContext';
import { sections } from '../data/sections';
import Dashboard from '../components/Dashboard';

const DashboardRoute = () => {
  const navigate = useNavigate();
  const { activeSectionId, setActiveSectionId } = useProgress();
  
  // Restore scroll position
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const activeSection = sections.find(s => s.id === activeSectionId) || sections[0];

  return (
    <Dashboard 
      activeSection={activeSection}
      setActiveSection={(sec) => setActiveSectionId(sec.id)}
      onSelectLesson={(lesson) => navigate(`/lesson/${lesson.id}`)}
      onShowSummary={() => navigate(`/summary/${activeSection.id}`)}
    />
  );
};

export default DashboardRoute;