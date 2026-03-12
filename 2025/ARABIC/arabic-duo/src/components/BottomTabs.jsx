import React from 'react';
import { Route, BookText, CheckSquare } from 'lucide-react';
import './BottomTabs.css';

const BottomTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="bottom-tabs-container">
      <button 
        className={`tab-btn ${activeTab === 'path' ? 'active' : ''}`}
        onClick={() => setActiveTab('path')}
      >
        <Route size={24} />
        <span>Path</span>
      </button>
      
      <button 
        className={`tab-btn ${activeTab === 'summary' ? 'active' : ''}`}
        onClick={() => setActiveTab('summary')}
      >
        <BookText size={24} />
        <span>Summary</span>
      </button>
      
      <button 
        className={`tab-btn ${activeTab === 'practice' ? 'active' : ''}`}
        onClick={() => setActiveTab('practice')}
      >
        <CheckSquare size={24} />
        <span>Practice</span>
      </button>
    </div>
  );
};

export default BottomTabs;