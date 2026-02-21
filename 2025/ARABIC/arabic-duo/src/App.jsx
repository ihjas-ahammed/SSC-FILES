import React, { useState } from 'react';
import './App.css';
import { ProgressProvider } from './context/ProgressContext';
import Dashboard from './components/Dashboard';
import Lesson from './components/Lesson';

function App() {
  const [activeLesson, setActiveLesson] = useState(null);

  return (
    <ProgressProvider>
      <div className="app-container">
        {activeLesson ? (
          <Lesson 
            lesson={activeLesson} 
            onClose={() => setActiveLesson(null)} 
          />
        ) : (
          <Dashboard onSelectLesson={setActiveLesson} />
        )}
      </div>
    </ProgressProvider>
  );
}

export default App;