import React, { useEffect } from 'react';
import { Volume2 } from 'lucide-react';
import { useTTS } from '../../hooks/useTTS';
import './VocabularySlide.css';

const VocabularySlide = ({ slide }) => {
  const { speak } = useTTS();

  useEffect(() => {
    const timer = setTimeout(() => {
      speak(slide.word);
    }, 500);
    return () => clearTimeout(timer);
  }, [slide, speak]);

  return (
    <div className="slide-content">
      <h2 className="text-dim">New Word</h2>
      
      <div className="vocab-card-modern">
        <button className="tts-button large-tts" onClick={() => speak(slide.word)}>
          <Volume2 size={36} />
        </button>
        
        <div className="vocab-ar-modern arabic-text">{slide.word}</div>
        
        <div className="vocab-divider"></div>
        
        {slide.transliteration && (
          <div className="vocab-transliteration">{slide.transliteration}</div>
        )}
        <div className="vocab-en-modern">{slide.translation}</div>
      </div>
      
      {slide.example && (
        <div className="vocab-example">
          <p className="arabic-text">{slide.example.ar}</p>
          <p className="text-dim">{slide.example.en}</p>
        </div>
      )}
    </div>
  );
};

export default VocabularySlide;