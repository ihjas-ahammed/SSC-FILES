import React from 'react';
import { BlockMath } from 'react-katex';

function TheorySlide({ slide }) {
  return (
    <div className="slide-theory">
      <div className="info-panel glass-panel">
        <h3 className="slide-title">{slide.title}</h3>
        <p className="slide-text">{slide.content}</p>
        
        {slide.formula && (
          <div className="formula-display">
            <BlockMath math={slide.formula} />
          </div>
        )}
      </div>
    </div>
  );
}

export default TheorySlide;