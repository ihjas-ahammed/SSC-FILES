import React, { useEffect } from 'react';
import { Volume2 } from 'lucide-react';
import { useTTS } from '../../hooks/useTTS';
import './ConversationSlide.css';

const ConversationSlide = ({ slide }) => {
  const { speak } = useTTS();

  useEffect(() => {
    // Auto-play the first line of the conversation
    if (slide.dialogue && slide.dialogue.length > 0) {
      const timer = setTimeout(() => speak(slide.dialogue[0].text), 500);
      return () => clearTimeout(timer);
    }
  }, [slide, speak]);

  return (
    <div className="slide-content conversation-slide">
      <h2 className="text-dim">Listen to the Dialogue</h2>
      <div className="dialogue-container">
        {slide.dialogue.map((line, idx) => {
          // Identify orientation based on the speaker to alternate layout
          const isLeft = idx % 2 === 0; 
          
          return (
            <div key={idx} className={`dialogue-bubble ${isLeft ? 'left' : 'right'}`}>
              <div className="speaker-name">{line.speaker}</div>
              <div className="bubble-content" dir="rtl">
                <p className="arabic-text" style={{ fontSize: '1.5rem' }}>{line.text}</p>
                <button 
                  className="tts-button-small" 
                  onClick={() => speak(line.text)}
                  title="Play Audio"
                >
                  <Volume2 size={24} />
                </button>
              </div>
              <p className="translation-text-small" dir="ltr">{line.english}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ConversationSlide;