import React, { createContext, useContext, useState, useEffect } from 'react';

const ProgressContext = createContext();

export const useProgress = () => useContext(ProgressContext);

export const ProgressProvider = ({ children }) => {
  const [completedLessons, setCompletedLessons] = useState(() => {
    const saved = localStorage.getItem('duofy5_progress');
    return saved ? JSON.parse(saved) : [];
  });

  const [activeSectionId, setActiveSectionId] = useState(() => {
    return localStorage.getItem('duofy5_active_sec') || 'sec1-5';
  });

  const [activeTab, setActiveTab] = useState('path');

  useEffect(() => {
    localStorage.setItem('duofy5_progress', JSON.stringify(completedLessons));
  }, [completedLessons]);

  useEffect(() => {
    localStorage.setItem('duofy5_active_sec', activeSectionId);
  }, [activeSectionId]);

  const markLessonComplete = (lessonId) => {
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons([...completedLessons, lessonId]);
    }
  };

  return (
    <ProgressContext.Provider value={{
      completedLessons,
      markLessonComplete,
      activeSectionId,
      setActiveSectionId,
      activeTab,
      setActiveTab
    }}>
      {children}
    </ProgressContext.Provider>
  );
};