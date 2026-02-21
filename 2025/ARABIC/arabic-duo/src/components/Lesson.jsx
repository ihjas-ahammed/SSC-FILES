import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useProgress } from '../context/ProgressContext';
import SentenceSlide from './slides/SentenceSlide';
import VocabularySlide from './slides/VocabularySlide';
import MatchSlide from './slides/MatchSlide';
import FillBlankSlide from './slides/FillBlankSlide';
import SentenceBuilderSlide from './slides/SentenceBuilderSlide';

const Lesson = ({ lesson, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [canProceed, setCanProceed] = useState(false);
  const { markLessonComplete } = useProgress();

  const slide = lesson.slides[currentIndex];
  const progressPercentage = ((currentIndex) / lesson.slides.length) * 100;

  useEffect(() => {
    // Auto-enable next for non-interactive slides
    if (slide.type === 'sentence' || slide.type === 'vocabulary') {
      setCanProceed(true);
    } else {
      setCanProceed(false);
    }
  }, [currentIndex, slide]);

  const handleNext = () => {
    if (currentIndex < lesson.slides.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      markLessonComplete(lesson.id);
      onClose();
    }
  };

  const renderSlide = () => {
    // We pass key={currentIndex} to force React to unmount the old slide and mount a fresh one.
    // This entirely prevents "stale state" bugs when consecutive slides are of the same type.
    switch (slide.type) {
      case 'sentence':
        return <SentenceSlide key={currentIndex} slide={slide} />;
      case 'vocabulary':
        return <VocabularySlide key={currentIndex} slide={slide} />;
      case 'match':
        return <MatchSlide key={currentIndex} slide={slide} onComplete={() => setCanProceed(true)} />;
      case 'fill-blank':
        return <FillBlankSlide key={currentIndex} slide={slide} onComplete={() => setCanProceed(true)} />;
      case 'sentence-builder':
        return <SentenceBuilderSlide key={currentIndex} slide={slide} onComplete={() => setCanProceed(true)} />;
      default:
        return <div key={currentIndex}>Unknown slide type</div>;
    }
  };

  return (
    <div className="lesson-view glass-panel p-6">
      <div className="lesson-header">
        <button className="close-btn" onClick={onClose}>
          <X size={28} />
        </button>
        <div className="progress-bar-bg">
          <div 
            className="progress-bar-fill" 
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      <div className="slide-container">
        {renderSlide()}
      </div>

      <div className="lesson-footer">
        <button 
          className="btn-primary" 
          onClick={handleNext}
          disabled={!canProceed}
        >
          {currentIndex === lesson.slides.length - 1 ? 'Finish Lesson' : 'Continue'}
        </button>
      </div>
    </div>
  );
};

export default Lesson;