import React, { useState, useEffect } from 'react';
import { Volume2 } from 'lucide-react';
import { useTTS } from '../../hooks/useTTS';
import { useLongPress } from '../../hooks/useLongPress';

const WordBlock = ({ block, onClick, onLongPress, isArabic, isSelected, showTooltip }) => {
  const handlers = useLongPress(
    (e) => onLongPress(block),
    (e, isCancel) => {
      if (!isCancel && onClick) onClick(block);
    },
    { delay: 400 }
  );

  return (
    <div className="word-block-wrapper">
      {showTooltip && (
        <div className="word-tooltip glass-panel">
          {block.trans}
        </div>
      )}
      <button
        {...handlers}
        className={`word-block ${isArabic ? 'arabic-text ar-block' : 'en-block'} ${isSelected ? 'selected-placeholder' : ''}`}
        disabled={isSelected && !onClick} // Disable in pool if selected
        style={{ userSelect: 'none', WebkitTouchCallout: 'none' }}
      >
        {block.text}
      </button>
    </div>
  );
};

const SentenceBuilderSlide = ({ slide, onComplete }) => {
  const { speak } = useTTS();
  const [availableBlocks, setAvailableBlocks] = useState([]);
  const [selectedBlocks, setSelectedBlocks] = useState([]);
  const [activeTooltip, setActiveTooltip] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const isArabicAnswer = slide.questionType !== 'ar-to-en';

  useEffect(() => {
    // Reset state and shuffle blocks on new slide
    const shuffled = [...slide.blocks].sort(() => Math.random() - 0.5);
    setAvailableBlocks(shuffled);
    setSelectedBlocks([]);
    setIsError(false);
    setIsSuccess(false);
    setActiveTooltip(null);
  }, [slide]);

  // Clear tooltip after a few seconds
  useEffect(() => {
    if (activeTooltip) {
      const timer = setTimeout(() => setActiveTooltip(null), 2000);
      return () => clearTimeout(timer);
    }
  }, [activeTooltip]);

  const handleBlockSelect = (block) => {
    if (isSuccess) return;
    
    // Play audio for Arabic words
    if (isArabicAnswer) speak(block.text);

    const newSelected = [...selectedBlocks, block];
    setSelectedBlocks(newSelected);
    setIsError(false);

    // Auto-check if length matches
    if (newSelected.length === slide.blocks.length) {
      checkAnswer(newSelected);
    }
  };

  const handleBlockRemove = (blockToRemove) => {
    if (isSuccess) return;
    setSelectedBlocks(selectedBlocks.filter(b => b.id !== blockToRemove.id));
    setIsError(false);
  };

  const handleLongPress = (block) => {
    // Speak on long press too if Arabic
    if (isArabicAnswer) speak(block.text);
    setActiveTooltip(block.id);
  };

  const checkAnswer = (currentSelected) => {
    const isCorrect = currentSelected.every((b, i) => b.id === slide.correctOrder[i]);
    
    if (isCorrect) {
      setIsSuccess(true);
      // Construct full sentence and play it
      if (isArabicAnswer) {
        const fullSentence = currentSelected.map(b => b.text).join(' ');
        setTimeout(() => speak(fullSentence), 500);
      }
      onComplete();
    } else {
      setIsError(true);
    }
  };

  const playFullQuestion = () => {
    if (slide.questionType === 'en-to-ar' || slide.questionType === 'comprehension') {
      speak(slide.question);
    }
  };

  return (
    <div className="slide-content builder-slide">
      <div className="builder-header">
        <h2 className="text-dim">
          {slide.questionType === 'comprehension' ? 'Answer the Question' : 
           slide.questionType === 'en-to-ar' ? 'Translate to Arabic' : 
           'Translate to English'}
        </h2>
        <div className="flex-center" style={{ flexDirection: 'row', marginBottom: '16px' }}>
          <h3 className={`builder-question ${slide.questionType !== 'en-to-ar' ? 'arabic-text' : ''}`}>
            {slide.question}
          </h3>
          {(slide.questionType === 'comprehension' || slide.questionType === 'ar-to-en') && (
            <button className="tts-button small" onClick={playFullQuestion}>
              <Volume2 size={20} />
            </button>
          )}
        </div>
        <p className="text-dim text-sm">(Long press words for meaning)</p>
      </div>

      <div className={`builder-answer-zone ${isArabicAnswer ? 'rtl-zone' : 'ltr-zone'} ${isError ? 'zone-error' : ''} ${isSuccess ? 'zone-success' : ''}`}>
        {selectedBlocks.map((block) => (
          <WordBlock 
            key={`sel-${block.id}`} 
            block={block} 
            isArabic={isArabicAnswer}
            onClick={() => handleBlockRemove(block)}
            onLongPress={handleLongPress}
            showTooltip={activeTooltip === block.id}
          />
        ))}
      </div>

      <div className={`builder-options-zone ${isArabicAnswer ? 'rtl-zone' : 'ltr-zone'}`}>
        {availableBlocks.map((block) => {
          const isSelected = selectedBlocks.some(b => b.id === block.id);
          return (
            <WordBlock 
              key={`opt-${block.id}`} 
              block={block} 
              isArabic={isArabicAnswer}
              onClick={isSelected ? null : () => handleBlockSelect(block)}
              onLongPress={handleLongPress}
              isSelected={isSelected}
              showTooltip={activeTooltip === block.id && !isSelected}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SentenceBuilderSlide;