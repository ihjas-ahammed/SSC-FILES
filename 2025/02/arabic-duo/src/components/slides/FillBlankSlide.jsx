import React, { useState, useEffect } from 'react';
import { Volume2 } from 'lucide-react';
import { useTTS } from '../../hooks/useTTS';

const FillBlankSlide = ({ slide, onComplete }) => {
  const { speak } = useTTS();
  const [selectedAns, setSelectedAns] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  useEffect(() => {
    setSelectedAns(null);
    setIsCorrect(null);
  }, [slide]);

  const handleSelect = (option) => {
    if (isCorrect) return; // Prevent changing after correct answer
    
    setSelectedAns(option);
    const correct = option === slide.answer;
    setIsCorrect(correct);

    if (correct) {
      // Play full sentence when correct
      const fullSentence = slide.sentence.replace(/_+/, option);
      speak(fullSentence);
      setTimeout(() => onComplete(), 1500);
    }
  };

  const playAudio = () => {
    // FIX: Remove the blank underscores before passing to text-to-speech
    // so the TTS engine doesn't read out "underscore underscore underscore"
    const textToSpeak = slide.sentence.replace(/_+/g, '').trim();
    speak(textToSpeak);
  };

  const parts = slide.sentence.split(/(_+)/);

  return (
    <div className="slide-content fill-blank-slide">
      <div className="flex-center" style={{ flexDirection: 'row', marginBottom: '20px' }}>
        <button className="tts-button" onClick={playAudio}>
          <Volume2 size={28} />
        </button>
      </div>

      <div className="fill-blank-sentence arabic-large" dir="rtl">
        {parts.map((part, i) => {
          if (part.includes('_')) {
            return (
              <span 
                key={i} 
                className={`blank-space ${isCorrect === true ? 'correct-ans' : isCorrect === false ? 'wrong-ans' : ''}`}
              >
                {selectedAns || ''}
              </span>
            );
          }
          return <span key={i}>{part}</span>;
        })}
      </div>

      <p className="translation-text">{slide.translation}</p>

      <div className="options-row" dir="rtl">
        {slide.options.map((opt, i) => {
          let btnClass = 'opt-btn arabic-text';
          if (selectedAns === opt) {
            btnClass += isCorrect ? ' correct' : ' wrong';
          }
          return (
            <button 
              key={i} 
              className={btnClass}
              onClick={() => handleSelect(opt)}
              disabled={isCorrect === true}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FillBlankSlide;