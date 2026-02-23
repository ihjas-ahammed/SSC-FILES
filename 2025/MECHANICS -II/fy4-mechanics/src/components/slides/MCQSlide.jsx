import React from 'react';

function MCQSlide({ slide, userAnswer, setUserAnswer, isSubmitted }) {
  return (
    <div className="slide-mcq">
      <h2 className="question-text">{slide.question}</h2>
      
      <div className="options-container">
        {slide.options.map((option, index) => {
          const isSelected = userAnswer === index;
          return (
            <button 
              key={index} 
              className={`option-btn ${isSelected ? 'selected' : ''}`}
              onClick={() => { if(!isSubmitted) setUserAnswer(index); }}
              disabled={isSubmitted}
            >
              <span className="option-index">0{index + 1}</span>
              <span className="option-content">{option}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default MCQSlide;