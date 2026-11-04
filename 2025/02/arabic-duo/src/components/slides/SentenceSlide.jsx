import React, { useEffect } from 'react';
import { Volume2 } from 'lucide-react';
import { useTTS } from '../../hooks/useTTS';

const SentenceSlide = ({ slide }) => {
  const { speak } = useTTS();

  useEffect(() => {
    // Auto-play when slide opens
    const timer = setTimeout(() => speak(slide.arabic), 500);
    return () => clearTimeout(timer);
  }, [slide.arabic, speak]);

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
};

export default SentenceSlide;