import React, { useState, useEffect } from 'react';
import { useTTS } from '../../hooks/useTTS';

const MatchSlide = ({ slide, onComplete }) => {
  const { speak } = useTTS();
  const [shuffledAr, setShuffledAr] = useState([]);
  const [shuffledEn, setShuffledEn] = useState([]);
  const [selectedAr, setSelectedAr] = useState(null);
  const [selectedEn, setSelectedEn] = useState(null);
  const [matched, setMatched] = useState([]);

  useEffect(() => {
    setShuffledAr([...slide.pairs].sort(() => Math.random() - 0.5));
    setShuffledEn([...slide.pairs].sort(() => Math.random() - 0.5));
    setMatched([]);
    setSelectedAr(null);
    setSelectedEn(null);
  }, [slide]);

  useEffect(() => {
    if (selectedAr && selectedEn) {
      const pair = slide.pairs.find(p => p.ar === selectedAr);
      if (pair && pair.en === selectedEn) {
        setMatched(prev => [...prev, selectedAr]);
      }
      setTimeout(() => {
        setSelectedAr(null);
        setSelectedEn(null);
      }, 400);
    }
  }, [selectedAr, selectedEn, slide.pairs]);

  useEffect(() => {
    if (matched.length === slide.pairs.length && slide.pairs.length > 0) {
      onComplete();
    }
  }, [matched, slide.pairs.length, onComplete]);

  const handleArClick = (arWord) => {
    speak(arWord);
    setSelectedAr(arWord);
  };

  return (
    <div className="slide-content">
      <h2 className="text-dim">Match the pairs</h2>
      <div className="match-columns">
        <div className="match-col">
          {shuffledAr.map(p => {
            const isMatched = matched.includes(p.ar);
            const isSelected = selectedAr === p.ar;
            return (
              <button
                key={`ar-${p.ar}`}
                className={`match-btn arabic-text ar-text ${isMatched ? 'matched' : ''} ${isSelected ? 'selected' : ''}`}
                onClick={() => !isMatched && handleArClick(p.ar)}
                disabled={isMatched}
              >
                {p.ar}
              </button>
            );
          })}
        </div>
        
        <div className="match-col">
          {shuffledEn.map(p => {
            const parentAr = slide.pairs.find(pair => pair.en === p.en).ar;
            const isMatched = matched.includes(parentAr);
            const isSelected = selectedEn === p.en;
            return (
              <button
                key={`en-${p.en}`}
                className={`match-btn ${isMatched ? 'matched' : ''} ${isSelected ? 'selected' : ''}`}
                onClick={() => !isMatched && setSelectedEn(p.en)}
                disabled={isMatched}
              >
                {p.en}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MatchSlide;