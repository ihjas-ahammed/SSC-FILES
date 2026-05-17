import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import './styles/NewFeatures.css';
import { ProgressProvider, useProgress } from './context/ProgressContext';
import BottomTabs from './components/BottomTabs';

import DashboardRoute from './pages/DashboardRoute';
import LessonRoute from './pages/LessonRoute';
import SummaryRoute from './pages/SummaryRoute';

const AppInner = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { activeTab, setActiveTab } = useProgress();

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (location.pathname !== '/') {
      navigate('/');
    }
  };

  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<DashboardRoute />} />
        <Route path="/lesson/:lessonId" element={<LessonRoute />} />
        <Route path="/summary/:sectionId" element={<SummaryRoute />} />
      </Routes>
      <BottomTabs activeTab={activeTab} setActiveTab={handleTabChange} />
    </div>
  );
};

function App() {
  return (
    <ProgressProvider>
      <BrowserRouter>
        <AppInner />
      </BrowserRouter>
    </ProgressProvider>
  );
}

export default App;
