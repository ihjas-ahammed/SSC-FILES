import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './styles/NewFeatures.css';
import { ProgressProvider } from './context/ProgressContext';

import DashboardRoute from './pages/DashboardRoute';
import LessonRoute from './pages/LessonRoute';
import SummaryRoute from './pages/SummaryRoute';

function App() {
  return (
    <ProgressProvider>
      <div className="app-container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<DashboardRoute />} />
            <Route path="/lesson/:lessonId" element={<LessonRoute />} />
            <Route path="/summary/:sectionId" element={<SummaryRoute />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ProgressProvider>
  );
}

export default App;