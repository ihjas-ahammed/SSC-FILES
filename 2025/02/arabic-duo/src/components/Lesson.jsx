import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useProgress } from '../context/ProgressContext';
import SlideRenderer from './SlideRenderer';
import './Lesson.css';

const Lesson = ({ lesson, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [canProceed, setCanProceed] = useState(false);
  const { markLessonComplete } = useProgress();

  const slide = lesson.slides[currentIndex];
  const progressPercentage = ((currentIndex) / lesson.slides.length) * 100;

  useEffect(() => {
    // Non-interactive slides allow immediate progression
    const interactiveTypes = ['match', 'fill-blank', 'sentence-builder'];
    if (!interactiveTypes.includes(slide.type)) {
      setCanProceed(true);
    } else {
      setCanProceed(false);
    }
  }, [currentIndex, slide]);

  const handleNext = () => {
    if (currentIndex < lesson.slides.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      if (!lesson.id.startsWith('summary_mem')) {
        markLessonComplete(lesson.id);
      }
      onClose();
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
          <SlideRenderer 
            slide={slide} 
            currentIndex={currentIndex} 
            onComplete={() => setCanProceed(true)} 
          />
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