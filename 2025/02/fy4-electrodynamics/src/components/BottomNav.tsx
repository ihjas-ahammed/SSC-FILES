import React from 'react';
import { BookOpen, BookCheck, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../styles/bottom-nav.css';

export type Tab = 'learn' | 'questions' | 'notes';

interface Props {
  activeTab: Tab;
}

const BottomNav: React.FC<Props> = ({ activeTab }) => {
  const navigate = useNavigate();

  const handleNav = (path: string) => {
    if (activeTab !== path) {
      navigate(`/${path}`);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="bottom-nav-container lg:hidden">
      <div className="bottom-nav-wrapper">
        <button 
          onClick={() => handleNav('learn')}
          className={`nav-item ${activeTab === 'learn' ? 'active' : ''}`}
        >
          <div className="icon-container">
            <BookOpen size={24} strokeWidth={2.5} />
          </div>
          <span className="label">Learn</span>
        </button>

        <button 
          onClick={() => handleNav('questions')}
          className={`nav-item ${activeTab === 'questions' ? 'active' : ''}`}
        >
          <div className="icon-container">
            <BookCheck size={24} strokeWidth={2.5} />
          </div>
          <span className="label">Questions</span>
        </button>

        <button 
          onClick={() => handleNav('notes')}
          className={`nav-item ${activeTab === 'notes' ? 'active' : ''}`}
        >
          <div className="icon-container">
            <FileText size={24} strokeWidth={2.5} />
          </div>
          <span className="label">Notes</span>
        </button>
      </div>
    </div>
  );
};

export default BottomNav;