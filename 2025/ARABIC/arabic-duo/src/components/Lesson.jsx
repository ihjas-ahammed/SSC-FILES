import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useProgress } from '../context/ProgressContext';
import SentenceSlideV2 from './slides/SentenceSlideV2';
import VocabularySlide from './slides/VocabularySlide';
import MatchSlide from './slides/MatchSlide';
import FillBlankSlide from './slides/FillBlankSlide';
import SentenceBuilderSlide from './slides/SentenceBuilderSlide';
import ConversationSlide from './slides/ConversationSlide';
import ActivitySlide from './slides/ActivitySlide';
import './Lesson.css';

const Lesson = ({ lesson, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [canProceed, setCanProceed] = useState(false);
  const { markLessonComplete } = useProgress();

  const slide = lesson.slides[currentIndex];
  const progressPercentage = ((currentIndex) / lesson.slides.length) * 100;

  useEffect(() => {
    // Auto-enable next for non-interactive slides
    if (slide.type === 'sentence' || slide.type === 'vocabulary' || slide.type === 'conversation' || slide.type === 'activity') {
      setCanProceed(true);
    } else {
      setCanProceed(false);
    }
  }, [currentIndex, slide]);

  const handleNext = () => {
    if (currentIndex < lesson.slides.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Mark complete if it's an official path lesson (not a summary memorization block)
      if (!lesson.id.startsWith('summary_mem')) {
        markLessonComplete(lesson.id);
      }
      onClose();
    }
  };

  const renderSlide = () => {
    switch (slide.type) {
      case 'sentence':
        return <SentenceSlideV2 key={currentIndex} slide={slide} />;
      case 'vocabulary':
        return <VocabularySlide key={currentIndex} slide={slide} />;
      case 'conversation':
        return <ConversationSlide key={currentIndex} slide={slide} />;
      case 'activity':
        return <ActivitySlide key={currentIndex} slide={slide} />;
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
    <div className="lesson-overlay route-transition">
      <div className="lesson-view-fixed">
        
        <div className="lesson-header-fixed">
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

        <div className="slide-scroll-area">
          {renderSlide()}
        </div>

        <div className="lesson-footer-fixed">
          <button 
            className="btn-primary" 
            onClick={handleNext}
            disabled={!canProceed}
          >
            {currentIndex === lesson.slides.length - 1 ? 'Finish' : 'Continue'}
          </button>
        </div>

      </div>
    </div>
  );
};

export default Lesson;