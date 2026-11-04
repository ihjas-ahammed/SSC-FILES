import React from 'react';
import { BlockMath } from 'react-katex';

function NumericalSlide({ slide, userAnswer, setUserAnswer, isSubmitted }) {
  return (
    <div className="slide-numerical">
      <h2 className="mcq-question">{slide.question}</h2>
      {slide.content && <p className="hint-text">{slide.content}</p>}
      
      {slide.formula && (
        <div className="formula-card">
          <BlockMath math={slide.formula} />
        </div>
      )}
      
      <div className="numerical-input-group">
        <input 
          type="number" 
          step="any"
          className="numerical-input-box" 
          value={userAnswer || ''}
          onChange={(e) => setUserAnswer(e.target.value)}
          disabled={isSubmitted}
          placeholder="0.0"
          autoComplete="off"
        />
        {slide.unit && <span className="numerical-unit">{slide.unit}</span>}
      </div>
    </div>
  );
}

export default NumericalSlide;