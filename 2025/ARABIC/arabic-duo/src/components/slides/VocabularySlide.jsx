import React from 'react';
import { useTTS } from '../../hooks/useTTS';

const VocabularySlide = ({ slide }) => {
  const { speak } = useTTS();

  return (
    <div className="slide-content">
      <h2 className="text-dim">New Words (Click to Listen)</h2>
      <div className="vocab-grid">
        {slide.words.map((word, idx) => (
          <button 
            key={idx} 
            className="vocab-card"
            onClick={() => speak(word.ar)}
          >
            <span className="arabic-text ar">{word.ar}</span>
            <span className="en">{word.en}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default VocabularySlide;