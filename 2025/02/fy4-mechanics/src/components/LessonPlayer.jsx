import React, { useState } from 'react';
import TheorySlide from './slides/TheorySlide';
import MCQSlide from './slides/MCQSlide';
import FillBlankSlide from './slides/FillBlankSlide';
import NumericalSlide from './slides/NumericalSlide';

function LessonPlayer({ lesson, onComplete, onExit }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);

  const slide = lesson.slides[currentSlideIndex];
  const progressPercent = ((currentSlideIndex) / lesson.slides.length) * 100;
  const isInteractive = ['mcq', 'fill', 'numerical'].includes(slide.type);

  const handleCheck = () => {
    let correct = false;
    if (slide.type === 'mcq') {
      correct = userAnswer === slide.answer;
    } else if (slide.type === 'fill') {
      correct = userAnswer.trim().toLowerCase() === slide.answer.toLowerCase();
    } else if (slide.type === 'numerical') {
      correct = parseFloat(userAnswer) === parseFloat(slide.answer);
    }
    setIsCorrect(correct);
    setIsSubmitted(true);
  };

  const handleNext = () => {
    if (currentSlideIndex < lesson.slides.length - 1) {
      setCurrentSlideIndex(prev => prev + 1);
      setUserAnswer(null);
      setIsSubmitted(false);
      setIsCorrect(null);
    } else {
      onComplete();
    }
  };

  const renderSlide = () => {
    switch (slide.type) {
      case 'theory':
      case 'example':
      case 'proof':
        return <TheorySlide slide={slide} />;
      case 'mcq':
        return <MCQSlide slide={slide} userAnswer={userAnswer} setUserAnswer={setUserAnswer} isSubmitted={isSubmitted} />;
      case 'fill':
        return <FillBlankSlide slide={slide} userAnswer={userAnswer} setUserAnswer={setUserAnswer} isSubmitted={isSubmitted} />;
      case 'numerical':
        return <NumericalSlide slide={slide} userAnswer={userAnswer} setUserAnswer={setUserAnswer} isSubmitted={isSubmitted} />;
      default:
        return <div>Unknown slide type: {slide.type}</div>;
    }
  };

  const getCorrectAnswerDisplay = () => {
    if (slide.type === 'mcq') return slide.options[slide.answer];
    return slide.answer;
  };

  let feedbackClass = isSubmitted ? (isCorrect ? 'status-correct' : 'status-incorrect') : '';

  return (
    <div className="lesson-screen">
      {/* Top Header */}
      <div className="lesson-header glass-panel">
        <button className="btn-icon" onClick={onExit}>✕</button>
        <div className="lesson-progress-container">
          <div className="lesson-progress-track">
            <div className="lesson-progress-fill" style={{ width: `${progressPercent}%` }}></div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="lesson-body">
        <div className="slide-wrapper">
          <div className="slide-badge">{slide.type.toUpperCase()}</div>
          {renderSlide()}
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className={`lesson-footer glass-panel ${feedbackClass}`}>
        <div className="footer-inner">
          {isSubmitted ? (
            <div className="feedback-message">
              <h3>{isCorrect ? 'TARGET ACQUIRED' : 'MISSION FAILED'}</h3>
              {!isCorrect && <p>Correct Answer: {getCorrectAnswerDisplay()}</p>}
            </div>
          ) : (
            <div className="feedback-message"></div>
          )}

          <div className="footer-actions">
            {!isInteractive ? (
              <button className="val-btn val-btn-primary" onClick={handleNext}>PROCEED</button>
            ) : !isSubmitted ? (
              <button 
                className="val-btn val-btn-primary" 
                disabled={userAnswer === null || userAnswer === ''} 
                onClick={handleCheck}
              >
                EVALUATE
              </button>
            ) : (
              <button className="val-btn val-btn-primary" onClick={handleNext}>CONTINUE</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LessonPlayer;