import React, { useState } from 'react';
import PracticeMenu from './practice/PracticeMenu';
import GeneralWordPractice from './practice/GeneralWordPractice';
import GrammarTest from './practice/GrammarTest';
import QAFlashcards from './practice/QAFlashcards';

const PracticeTab = ({ activeSection }) => {
  const [activeMode, setActiveMode] = useState('menu'); // menu, general, vocab_plurals, grammar, qa_short, qa_long, form_q

  if (activeMode === 'menu') {
    return <PracticeMenu onSelectMode={setActiveMode} />;
  }

  if (activeMode === 'general') {
    return <GeneralWordPractice activeSection={activeSection} onBack={() => setActiveMode('menu')} />;
  }

  if (activeMode === 'vocab_plurals' || activeMode === 'grammar' || activeMode === 'form_q') {
    return <GrammarTest type={activeMode} activeSection={activeSection} onBack={() => setActiveMode('menu')} />;
  }

  if (activeMode === 'qa_short' || activeMode === 'qa_long') {
    return <QAFlashcards type={activeMode} activeSection={activeSection} onBack={() => setActiveMode('menu')} />;
  }

  // Fallback
  return <PracticeMenu onSelectMode={setActiveMode} />;
};

export default PracticeTab;