import React, { useState, useMemo } from 'react';
import { Volume2, CheckCircle, ArrowRight, RotateCcw } from 'lucide-react';
import { useTTS } from '../hooks/useTTS';
import './PracticeTab.css';

// Helper to get 3 random wrong options
const getOptions = (correct, allPool) => {
  const pool = allPool.filter(w => w !== correct);
  pool.sort(() => Math.random() - 0.5);
  const options = pool.slice(0, 3);
  options.push(correct);
  return options.sort(() => Math.random() - 0.5);
};

const PracticeTab = ({ activeSection }) => {
  const { speak } = useTTS();
  
  // States for one-by-one quiz flow
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const questions = useMemo(() => {
    let vocabs = [];
    let fillBlanks = [];

    activeSection.units.forEach(unit => {
      if (unit.id.includes('preview') || unit.id.includes('practice')) return;
      unit.lessons.forEach(lesson => {
        vocabs.push(...lesson.slides.filter(s => s.type === 'vocabulary'));
        fillBlanks.push(...lesson.slides.filter(s => s.type === 'fill-blank'));
      });
    });

    const vocabMap = new Map();
    vocabs.forEach(v => vocabMap.set(v.word, v.translation));

    const allArWords = [...new Set(vocabs.map(v => v.word))];
    const allEnWords = [...new Set(vocabs.map(v => v.translation))];
    let qList = [];

    vocabs.forEach((v, i) => {
      // Type 1: Question is Arabic word, Instruction & Options are English
      qList.push({
        id: `v_ar_en_${v.word}_${i}`,
        instruction: "Select the correct meaning for:",
        mainText: v.word,
        mainIsAr: true,
        options: getOptions(v.translation, allEnWords).map(text => ({ 
          text, 
          isAr: false 
        })),
        answer: v.translation
      });

      // Type 2: Question is English word, Instruction & Options are Arabic
      qList.push({
        id: `v_en_ar_${v.word}_${i}`,
        instruction: "Select the Arabic translation for:",
        mainText: v.translation,
        mainIsAr: false,
        options: getOptions(v.word, allArWords).map(text => ({ 
          text, 
          isAr: true,
          en: vocabMap.get(text) || "" // Show English hint in option after selected
        })),
        answer: v.word
      });
    });

    fillBlanks.forEach((fb, i) => {
      let fbOptions = fb.options ? [...fb.options] : getOptions(fb.answer, allArWords);
      qList.push({
        id: `fb_${i}`,
        instruction: "Fill in the missing word:",
        mainText: fb.sentence.replace(/_+/g, '____'),
        mainIsAr: true,
        options: fbOptions.map(text => ({ 
          text, 
          isAr: true,
          en: vocabMap.get(text) || "" 
        })),
        answer: fb.answer
      });
    });

    qList.sort(() => Math.random() - 0.5);
    return qList.slice(0, 30); // Present 30 questions for optimal practice
  }, [activeSection]);

  const handleSelect = (optionText) => {
    if (isAnswered) return;
    setSelectedOption(optionText);
    setIsAnswered(true);

    const currentQ = questions[currentIndex];
    if (optionText === currentQ.answer) {
      setScore(prev => prev + 1);
      
      // Auto Play audio if it was a fill-in-the-blank
      if (currentQ.id.startsWith('fb_')) {
        const fullSentence = currentQ.mainText.replace(/____/g, optionText);
        speak(fullSentence);
      }
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleRetry = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setIsFinished(false);
  };

  if (questions.length === 0) {
    return <div className="text-center p-6 text-dim">No practice data available for this section yet.</div>;
  }

  if (isFinished) {
    return (
      <div className="practice-tab-container route-transition">
        <div className="question-card score-screen">
          <CheckCircle size={64} color="var(--success)" />
          <h2>Practice Complete!</h2>
          <div className="final-score">{score} / {questions.length}</div>
          <p className="text-dim">Great job completing the review for this chapter.</p>
          <button className="btn-primary flex-center mt-4" onClick={handleRetry} style={{ flexDirection: 'row', width: '100%' }}>
            <RotateCcw size={20} />
            <span>Practice Again</span>
          </button>
        </div>
      </div>
    );
  }

  const q = questions[currentIndex];
  const progressPercentage = ((currentIndex) / questions.length) * 100;

  return (
    <div className="practice-tab-container route-transition">
      <div className="practice-header">
        <div className="practice-progress-container">
          <div 
            className="practice-progress-fill" 
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
        <p className="text-dim" style={{ fontSize: '0.9rem' }}>Question {currentIndex + 1} of {questions.length}</p>
      </div>

      <div className="question-card">
        <div className="q-top-row">
          <span className="q-text-en">{q.instruction}</span>
          {q.mainIsAr && (
            <button 
              className="tts-mini-btn" 
              onClick={() => speak(q.mainText.replace(/_+/g, ''))}
              title="Listen"
            >
              <Volume2 size={24} />
            </button>
          )}
        </div>
        
        <div className={`q-text-ar ${q.mainIsAr ? 'arabic-text' : ''}`} dir={q.mainIsAr ? "rtl" : "ltr"}>
          {q.mainText}
        </div>

        <div className="options-grid" dir={q.options[0].isAr ? "rtl" : "ltr"}>
          {q.options.map((opt, i) => {
            const isSelected = selectedOption === opt.text;
            const isCorrectOpt = opt.text === q.answer;
            
            let btnClass = 'omr-option';
            
            if (isAnswered) {
              if (isCorrectOpt) btnClass += ' correct-answer';
              else if (isSelected && !isCorrectOpt) btnClass += ' wrong-answer';
            } else if (isSelected) {
              btnClass += ' selected';
            }

            return (
              <button 
                key={i} 
                className={btnClass}
                onClick={() => handleSelect(opt.text)}
                disabled={isAnswered}
              >
                <div className={`opt-text-main ${opt.isAr ? 'arabic-text' : ''}`}>
                  {opt.text}
                </div>
                {/* Reveal English meaning for Arabic options after answering to help learning */}
                {isAnswered && opt.en && (
                  <div className="opt-text-sub" dir="ltr">{opt.en}</div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="practice-footer">
        <button 
          className="btn-primary" 
          onClick={handleNext}
          disabled={!isAnswered}
          style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}
        >
          <span>{currentIndex === questions.length - 1 ? 'Finish Practice' : 'Next Question'}</span>
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default PracticeTab;