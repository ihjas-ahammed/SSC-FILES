import React, { useState, useMemo } from 'react';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { examDataBySection } from '../../data/examData';
import './PracticeStyles.css';

const QAFlashcards = ({ type, activeSection, onBack }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const sectionData = examDataBySection[activeSection?.id] || examDataBySection['default'];

  const questions = useMemo(() => {
    const raw = type === 'qa_short' ? (sectionData.shortQA || []) : (sectionData.longQA || []);
    return [...raw].sort(() => Math.random() - 0.5);
  }, [type, sectionData]);

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(i => i + 1);
      setShowAnswer(false);
    } else {
      setIsFinished(true);
    }
  };

  const title = type === 'qa_short' ? "Short Q&A" : "Long Answers";

  if (questions.length === 0) {
    return (
      <div className="practice-system-container route-transition">
        <div className="practice-top-bar">
          <button className="back-btn" onClick={onBack}><ArrowLeft size={20}/> Back</button>
        </div>
        <div className="text-center p-6 text-dim">No Q&A data available for this section yet.</div>
      </div>
    );
  }

  if (isFinished) {
    return (
      <div className="practice-system-container route-transition">
        <div className="practice-top-bar">
          <button className="back-btn" onClick={onBack}><ArrowLeft size={20}/> Back</button>
        </div>
        <div className="p-card finish-screen">
          <CheckCircle size={64} className="finish-icon" />
          <div className="finish-title">Review Complete!</div>
          <p className="text-dim">You've gone through all the questions.</p>
          <button className="btn-primary mt-4" onClick={onBack}>Return to Menu</button>
        </div>
      </div>
    );
  }

  const q = questions[currentIndex];

  return (
    <div className="practice-system-container route-transition">
      <div className="practice-top-bar">
        <button className="back-btn" onClick={onBack}><ArrowLeft size={20}/> Menu</button>
        <div className="mode-title">{title}</div>
        <div className="progress-text-small">{currentIndex + 1} / {questions.length}</div>
      </div>

      <div className="p-card">
        <div className="flashcard-inner">
          <div className="fc-q-box">
            <div className="fc-ar-text">{q.q}</div>
            <div className="fc-en-text">{q.en_q}</div>
          </div>

          {showAnswer ? (
            <div className="fc-a-box">
              <div className="fc-ar-text">{q.a}</div>
              <div className="fc-en-text">{q.en_a}</div>
              
              <div className="fc-keywords" dir="rtl">
                {q.keywords?.map((kw, i) => (
                  <span key={i} className="fc-keyword-chip arabic-text">{kw}</span>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex-center" style={{ minHeight: '150px' }}>
              <p className="text-dim" style={{fontStyle: 'italic'}}>Think of the answer...</p>
            </div>
          )}
        </div>
      </div>

      {!showAnswer ? (
        <button className="btn-primary p-next-btn" onClick={() => setShowAnswer(true)}>
          Reveal Answer
        </button>
      ) : (
        <button className="btn-primary p-next-btn" style={{background: 'var(--duo-blue)', borderBottomColor: 'var(--duo-blue-dark)'}} onClick={handleNext}>
          {currentIndex === questions.length - 1 ? 'Finish' : 'Next Question'}
        </button>
      )}
    </div>
  );
};

export default QAFlashcards;