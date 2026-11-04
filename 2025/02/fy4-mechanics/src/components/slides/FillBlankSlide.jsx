import React from 'react';

function FillBlankSlide({ slide, userAnswer, setUserAnswer, isSubmitted }) {
  const parts = slide.text.split('{blank}');

  return (
    <div className="slide-fill">
      <div className="info-panel glass-panel">
        <p className="fill-text">
          {parts[0]}
          <input 
            type="text" 
            className="val-input inline-input" 
            value={userAnswer || ''}
            onChange={(e) => setUserAnswer(e.target.value)}
            disabled={isSubmitted}
            placeholder="[...]"
            autoComplete="off"
            autoFocus
          />
          {parts[1]}
        </p>
      </div>
    </div>
  );
}

export default FillBlankSlide;