import React from 'react';

function AppHeader({ sections, activeSectionId, onSectionChange, progressPercent }) {
  return (
    <header className="top-bar glass-panel">
      <div className="top-bar-left">
        <div className="logo-accent"></div>
        <select 
          className="val-select" 
          value={activeSectionId} 
          onChange={(e) => onSectionChange(e.target.value)}
        >
          {sections.map(sec => (
            <option key={sec.id} value={sec.id}>
              {sec.title.split(':')[0]} {/* e.g., "Section I" */}
            </option>
          ))}
        </select>
      </div>

      <div className="top-bar-right">
        <div className="val-progress-container">
          <span className="val-progress-text">{progressPercent}% COMPLETED</span>
          <div className="val-progress-track">
            <div 
              className="val-progress-fill" 
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;