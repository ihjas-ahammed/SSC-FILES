import React, { useEffect } from 'react';
import { Volume2, PlayCircle } from 'lucide-react';
import { useTTS } from '../../hooks/useTTS';
import './SentenceSlideV2.css';

const SentenceSlideV2 = ({ slide }) => {
  const { speak } = useTTS();

  useEffect(() => {
    // Auto-play full sentence when slide opens
    const timer = setTimeout(() => speak(slide.arabic), 500);
    return () => clearTimeout(timer);
  }, [slide.arabic, speak]);

  // Fallback for sections/slides that haven't been chunked yet
  if (!slide.parts || slide.parts.length === 0) {
    return (
      <div className="slide-content">
        <h2 className="text-dim">Read & Listen</h2>
        <div className="flex-center">
          <div className="arabic-text arabic-large">
            {slide.arabic}
          </div>
          <button 
            className="tts-button" 
            onClick={() => speak(slide.arabic)}
            title="Play Audio"
          >
            <Volume2 size={32} />
          </button>
        </div>
        <p className="translation-text">
          "{slide.english}"
        </p>
      </div>
    );
  }

  return (
    <div className="slide-content sentence-v2-slide">
      <div className="v2-header">
        <h2 className="text-dim">Read & Listen</h2>
        <button 
          className="tts-main-btn" 
          onClick={() => speak(slide.arabic)}
          title="Play Full Sentence"
        >
          <PlayCircle size={24} />
          <span>Play Full Sentence</span>
        </button>
      </div>

      <div className="sentence-parts-container">
        {slide.parts.map((part, index) => (
          <div key={index} className="sentence-part-card" dir="rtl">
            <div className="part-text-container">
              <div className="part-ar arabic-text">{part.ar}</div>
              <div className="part-en" dir="ltr">{part.en}</div>
            </div>
            <button 
              className="part-tts-btn" 
              onClick={() => speak(part.ar)}
              title="Play Part"
            >
              <Volume2 size={24} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SentenceSlideV2;