import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { UserProgress } from './types';
import Dashboard from './pages/Dashboard';
import LessonPage from './pages/LessonPage';
import ChapterSummaryPage from './pages/ChapterSummaryPage';
import './App.css';
import './styles/interactive.css'; 
import './styles/path.css'; 
import './styles/progress.css';
import './styles/bottom-nav.css';

const App: React.FC = () => {
  const [progress, setProgress] = useState<UserProgress>(() => {
    const saved = localStorage.getItem('duofy4_progress'); 
    let initialProgress: UserProgress = {
      completedLessons: [],
      xp: 0,
      currentCourseId: 'module-1'
    };
    
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        initialProgress = {
          completedLessons: parsed.completedLessons || [],
          xp: parsed.xp || 0,
          currentCourseId: parsed.currentCourseId || 'module-1'
        };
      } catch(e) {
        console.error("Failed to parse progress", e);
      }
    }
    return initialProgress;
  });

  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  useEffect(() => {
    localStorage.setItem('duofy4_progress', JSON.stringify(progress));
  }, [progress]);

  useEffect(() => {
    setCurrentSectionIndex(0);
  }, [progress.currentCourseId]);

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-200 shadow-[0_0_50px_rgba(0,0,0,0.5)] max-w-md mx-auto relative overflow-hidden lg:max-w-none lg:mx-0 lg:shadow-none lg:overflow-visible">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/learn" replace />} />
          
          <Route 
             path="/*" 
             element={<Dashboard 
                progress={progress} 
                setProgress={setProgress} 
                currentSectionIndex={currentSectionIndex} 
                setCurrentSectionIndex={setCurrentSectionIndex} 
             />} 
          />
          
          <Route 
             path="/lesson/:courseId/:unitId/:lessonId" 
             element={<LessonPage 
                progress={progress} 
                setProgress={setProgress} 
             />} 
          />
          <Route 
             path="/summary/:courseId" 
             element={<ChapterSummaryPage />} 
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;