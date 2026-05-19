import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserProgress } from './types';
import Dashboard from './pages/Dashboard';
import LessonPage from './pages/LessonPage';
import ModuleSummaryPage from './pages/ModuleSummaryPage';
import ModuleNotesPage from './pages/ModuleNotesPage';
import PracticePage from './pages/PracticePage';
import MainLayout from './components/MainLayout';
import { useAnalytics } from './hooks/useAnalytics';
import SummaryPage from './pages/SummaryPage';
import { MODULES } from './data/modules';
import './App.css';
import './styles/interactive.css';
import './styles/path.css';
import './styles/progress.css';
import './styles/english.css'; 
import './styles/practice.css'; 
import './styles/exam.css';
import './styles/policy.css';
import './styles/microscope.css';

const AnalyticsTracker = () => {
  useAnalytics();
  return null;
};

const App: React.FC = () => {
  const [progress, setProgress] = useState<UserProgress>(() => {
    const saved = localStorage.getItem('duofy_english_vac_progress');
    const DEFAULT_MODULE_ID = 'module-1-scientific-attitude';
    const validIds = new Set(MODULES.map(m => m.id));
    let initialProgress: UserProgress = {
      completedLessons: [],
      xp: 0,
      currentModuleId: DEFAULT_MODULE_ID,
    };

    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        const savedModuleId = parsed.currentModuleId;
        initialProgress = {
          completedLessons: parsed.completedLessons || [],
          xp: parsed.xp || 0,
          currentModuleId:
            savedModuleId && validIds.has(savedModuleId)
              ? savedModuleId
              : DEFAULT_MODULE_ID,
        };
      } catch (e) {
        console.error('Failed to parse progress', e);
      }
    }
    return initialProgress;
  });

  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  useEffect(() => {
    localStorage.setItem('duofy_english_vac_progress', JSON.stringify(progress));
  }, [progress]);

  useEffect(() => {
    setCurrentSectionIndex(0);
  }, [progress.currentModuleId]);

  const handleModuleChange = (moduleId: string) => {
    setProgress(prev => ({ ...prev, currentModuleId: moduleId }));
    setCurrentSectionIndex(0);
  };

  return (
    <div className="app-shell min-h-screen bg-[#0b0f19] text-slate-200 shadow-[0_0_50px_rgba(0,0,0,0.5)] w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto relative overflow-hidden">
      <BrowserRouter>
        <AnalyticsTracker />
        <Routes>
          <Route element={<MainLayout />}>
            <Route
              path="/"
              element={
                <Dashboard
                  progress={progress}
                  setProgress={setProgress}
                  currentSectionIndex={currentSectionIndex}
                  setCurrentSectionIndex={setCurrentSectionIndex}
                />
              }
            />
            <Route path="/practice" element={<PracticePage progress={progress} />} />
            <Route
              path="/summary"
              element={
                <SummaryPage
                  progress={progress}
                  onModuleChange={handleModuleChange}
                />
              }
            />
            <Route
              path="/notes"
              element={
                <ModuleNotesPage
                  progress={progress}
                  onModuleChange={handleModuleChange}
                />
              }
            />
          </Route>

          <Route
            path="/lesson/:moduleId/:unitId/:lessonId"
            element={<LessonPage progress={progress} setProgress={setProgress} />}
          />
          <Route path="/summary/:moduleId" element={<ModuleSummaryPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;