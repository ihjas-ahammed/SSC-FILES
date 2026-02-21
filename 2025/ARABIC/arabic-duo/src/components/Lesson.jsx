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
    switch (slide.type) {
      case 'sentence':
        return <SentenceSlide slide={slide} />;
      case 'vocabulary':
        return <VocabularySlide slide={slide} />;
      case 'match':
        return <MatchSlide slide={slide} onComplete={() => setCanProceed(true)} />;
      case 'fill-blank':
        return <FillBlankSlide slide={slide} onComplete={() => setCanProceed(true)} />;
      case 'sentence-builder':
        return <SentenceBuilderSlide slide={slide} onComplete={() => setCanProceed(true)} />;
      default:
        return <div>Unknown slide type</div>;
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