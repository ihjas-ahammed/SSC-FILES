import React, { useState } from 'react';
import AppHeader from './components/AppHeader';
import Dashboard from './components/Dashboard';
import LessonPlayer from './components/LessonPlayer';
import { section1 } from './data/section1';
import { section2 } from './data/section2';
import './styles/valorant.css';
import './styles/layout.css';
import './styles/path.css';
import './styles/lesson.css';
import 'katex/dist/katex.min.css';

function App() {
  const [completedLessons, setCompletedLessons] = useState({});
  const [currentLesson, setCurrentLesson] = useState(null);
  const [activeSectionId, setActiveSectionId] = useState(section1.id);

  const sections = [section1, section2];
  const activeSection = sections.find(s => s.id === activeSectionId) || sections[0];

  // Calculate progress purely for the active section (or globally if preferred)
  const totalLessons = activeSection.units.reduce((acc, unit) => acc + unit.lessons.length, 0);
  const completedInSection = activeSection.units.flatMap(u => u.lessons).filter(l => completedLessons[l.id]).length;
  const progressPercent = totalLessons === 0 ? 0 : Math.round((completedInSection / totalLessons) * 100);

  // Find current active lesson in the selected section
  const allSectionLessons = activeSection.units.flatMap(u => u.lessons);
  const currentActiveLesson = allSectionLessons.find(l => !completedLessons[l.id]) || allSectionLessons[allSectionLessons.length - 1];

  const handleLessonComplete = (lessonId) => {
    setCompletedLessons(prev => ({ ...prev, [lessonId]: true }));
    setCurrentLesson(null);
    window.scrollTo(0, 0);
  };

  return (
    <div className="val-app">
      {!currentLesson && (
        <AppHeader 
          sections={sections}
          activeSectionId={activeSectionId}
          onSectionChange={setActiveSectionId}
          progressPercent={progressPercent}
        />
      )}
      
      <main className="main-content">
        {currentLesson ? (
          <LessonPlayer 
            lesson={currentLesson} 
            onComplete={() => handleLessonComplete(currentLesson.id)}
            onExit={() => setCurrentLesson(null)}
          />
        ) : (
          <div className="feed-wrapper">
            <Dashboard 
              section={activeSection} 
              completedLessons={completedLessons}
              currentActiveLesson={currentActiveLesson}
              onStartLesson={setCurrentLesson}
            />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;