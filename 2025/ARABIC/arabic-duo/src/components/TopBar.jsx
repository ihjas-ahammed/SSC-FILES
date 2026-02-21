import React, { useState, useRef, useEffect } from 'react';
import { Trophy, ChevronDown } from 'lucide-react';

const TopBar = ({ sections, activeSection, setActiveSection, completedLessons }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Calculate overall progress across all sections
  const totalLessons = sections.reduce((acc, sec) => 
    acc + sec.units.reduce((uAcc, unit) => uAcc + unit.lessons.length, 0), 0
  );
  const progressPercentage = Math.round((completedLessons.length / totalLessons) * 100) || 0;

  // Handle clicking outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSectionSelect = (section) => {
    setActiveSection(section);
    setIsDropdownOpen(false);
  };

  // Dynamically calculate actual 1-based index instead of relying on regex ID parsing
  const currentSectionNum = sections.findIndex(s => s.id === activeSection.id) + 1;

  return (
    <div className="top-bar-wrapper">
      <div className="app-title-bar">
        <h1>DuoFY4 - Arabic</h1>
      </div>
      
      <div className="top-bar">
        <div className="section-dropdown-container" ref={dropdownRef}>
          <button 
            className="section-selector-btn" 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <div className="section-badge">{currentSectionNum > 0 ? currentSectionNum : 1}</div>
            <span className="section-title-compact">
              {activeSection.title.split(':')[0]}
            </span>
            <ChevronDown 
              size={20} 
              className={`dropdown-chevron ${isDropdownOpen ? 'open' : ''}`} 
            />
          </button>

          {isDropdownOpen && (
            <div className="dropdown-menu active">
              {sections.map((s, index) => (
                <button 
                  key={s.id} 
                  className={`dropdown-item ${activeSection.id === s.id ? 'active' : ''}`}
                  onClick={() => handleSectionSelect(s)}
                >
                  <div className="section-badge small">{index + 1}</div>
                  <span>{s.title}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="progress-pill glass-panel">
          <Trophy size={18} color="#FFD700" fill="#FFD700" />
          <span className="progress-text">{progressPercentage}%</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;