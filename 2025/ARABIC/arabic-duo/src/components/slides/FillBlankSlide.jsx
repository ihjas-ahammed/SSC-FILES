import React, { useState, useEffect } from 'react';
import { Volume2 } from 'lucide-react';
import { useTTS } from '../../hooks/useTTS';

const FillBlankSlide = ({ slide, onComplete }) => {
  const { speak } = useTTS();
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  useEffect(() => {
    setSelectedOption(null);
    setIsCorrect(null);
  }, [slide]);

  const parts = slide.sentence.split('____');

  const handleSelect = (opt) => {
    if (isCorrect) return; 
    
    speak(opt); // Speak chosen word
    setSelectedOption(opt);
    
    if (opt === slide.answer) {
      setIsCorrect(true);
      // Speak the whole completed sentence
      const fullSentence = parts[0] + opt + parts[1];
      setTimeout(() => speak(fullSentence), 800);
      onComplete();
    } else {
      setIsCorrect(false);
    }
  };

  const playSentenceWithBlank = () => {
    speak(slide.sentence.replace('____', 'فَرَاغ')); // "faragh" means blank
  };

  return (
    <div className="slide-content">
      <h2 className="text-dim">Fill in the blank</h2>
      
      <div className="flex-center" style={{ flexDirection: 'row' }}>
        <div className="arabic-text fill-blank-sentence">
          {parts[0]}
          <span className={`blank-space arabic-text ${isCorrect === true ? 'correct-ans' : isCorrect === false ? 'wrong-ans' : ''}`}>
            {selectedOption || '____'}
          </span>
          {parts[1]}
        </div>
        
        <button 
          className="tts-button" 
          style={{ padding: '12px' }}
          onClick={playSentenceWithBlank}
        >
          <Volume2 size={24} />
        </button>
      </div>

      <p className="translation-text">"{slide.english}"</p>

      <div className="options-row">
        {slide.options.map(opt => (
          <button
            key={opt}
            className={`opt-btn arabic-text ${selectedOption === opt ? (isCorrect ? 'correct' : 'wrong') : ''}`}
            onClick={() => handleSelect(opt)}
            disabled={isCorrect}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FillBlankSlide;