import React from 'react';
import { BookOpen, Layers, MessageSquare, ClipboardCheck, Shuffle } from 'lucide-react';
import './PracticeStyles.css';

const PracticeMenu = ({ onSelectMode }) => {
  const modes = [
    {
      id: 'general',
      title: 'Chapter Vocab',
      desc: 'Smart practice based on current chapter slides',
      icon: <BookOpen size={36} className="menu-icon" />
    },
    {
      id: 'vocab_plurals',
      title: 'Singular & Plural',
      desc: 'Master exam plurals (المفرد والجمع)',
      icon: <Layers size={36} className="menu-icon" />
    },
    {
      id: 'grammar',
      title: 'Grammar Exams',
      desc: 'Fill blanks & form sentences',
      icon: <ClipboardCheck size={36} className="menu-icon" />
    },
    {
      id: 'qa_short',
      title: 'Short Q&A',
      desc: 'Flashcards for brief questions',
      icon: <MessageSquare size={36} className="menu-icon" />
    },
    {
      id: 'qa_long',
      title: 'Long Answers',
      desc: 'Paragraph level comprehension',
      icon: <MessageSquare size={36} className="menu-icon" />
    },
    {
      id: 'form_q',
      title: 'Form Questions',
      desc: 'Convert answers to questions',
      icon: <Shuffle size={36} className="menu-icon" />
    }
  ];

  return (
    <div className="practice-system-container route-transition">
      <div className="text-center">
        <h2 style={{ color: 'var(--duo-blue)', fontSize: '1.8rem', fontWeight: 900, marginBottom: '8px' }}>
          Practice
        </h2>
        <p className="text-dim">Master every question format from the model papers.</p>
      </div>

      <div className="practice-menu-grid">
        {modes.map(mode => (
          <div key={mode.id} className="menu-card" onClick={() => onSelectMode(mode.id)}>
            {mode.icon}
            <div className="menu-title">{mode.title}</div>
            <div className="menu-desc">{mode.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PracticeMenu;