import React from 'react';
import SentenceSlideV2 from './slides/SentenceSlideV2';
import VocabularySlide from './slides/VocabularySlide';
import MatchSlide from './slides/MatchSlide';
import FillBlankSlide from './slides/FillBlankSlide';
import SentenceBuilderSlide from './slides/SentenceBuilderSlide';
import ConversationSlide from './slides/ConversationSlide';
import ActivitySlide from './slides/ActivitySlide';
import './SlideRenderer.css';

const SlideRenderer = ({ slide, currentIndex, onComplete }) => {
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
      return <MatchSlide key={currentIndex} slide={slide} onComplete={onComplete} />;
    case 'fill-blank':
      return <FillBlankSlide key={currentIndex} slide={slide} onComplete={onComplete} />;
    case 'sentence-builder':
      return <SentenceBuilderSlide key={currentIndex} slide={slide} onComplete={onComplete} />;
    default:
      return <div key={currentIndex} className="unknown-slide">Unknown slide type: {slide.type}</div>;
  }
};

export default SlideRenderer;