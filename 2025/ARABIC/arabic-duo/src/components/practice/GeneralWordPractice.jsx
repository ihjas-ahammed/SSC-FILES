import React, { useState, useMemo } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle, RotateCcw, Volume2 } from 'lucide-react';
import { useTTS } from '../../hooks/useTTS';

// This retains the original PracticeTab logic but scoped inside the new routing
const getOptions = (correct, allPool) => {
  const pool = allPool.filter(w => w !== correct);
  pool.sort(() => Math.random() - 0.5);
  const options = pool.slice(0, 3);
  options.push(correct);
  return options.sort(() => Math.random() - 0.5);
};

const GeneralWordPractice = ({ activeSection, onBack }) => {
  const { speak } = useTTS();
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
      qList.push({
        id: `v_ar_en_${v.word}_${i}`,
        instruction: "Select the correct meaning for:",
        mainText: v.word,
        mainIsAr: true,
        options: getOptions(v.translation, allEnWords).map(text => ({ text, isAr: false })),
        answer: v.translation
      });

      qList.push({
        id: `v_en_ar_${v.word}_${i}`,
        instruction: "Select the Arabic translation for:",
        mainText: v.translation,
        mainIsAr: false,
        options: getOptions(v.word, allArWords).map(text => ({ text, isAr: true, en: vocabMap.get(text) || "" })),
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
        options: fbOptions.map(text => ({ text, isAr: true, en: vocabMap.get(text) || "" })),
        answer: fb.answer
      });
    });

    qList.sort(() => Math.random() - 0.5);
    return qList.slice(0, 20); // Keep it to 20 for one session
  }, [activeSection]);

  const handleSelect = (optionText) => {
    if (isAnswered) return;
    setSelectedOption(optionText);
    setIsAnswered(true);

    const currentQ = questions[currentIndex];
    if (optionText === currentQ.answer) {
      setScore(prev => prev + 1);
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

  if (questions.length === 0) {
    return (
      <div className="practice-system-container route-transition">
        <div className="practice-top-bar">
          <button className="back-btn" onClick={onBack}><ArrowLeft size={20}/> Back</button>
        </div>
        <div className="text-center p-6 text-dim">No vocabulary data available for this section yet.</div>
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
          <div className="finish-title">Practice Complete!</div>
          <p className="text-dim" style={{fontSize: '1.4rem'}}>Score: {score} / {questions.length}</p>
          <button className="btn-primary mt-4 flex-center" onClick={onBack} style={{flexDirection:'row'}}>
            <RotateCcw size={20} /> Finish
          </button>
        </div>
      </div>
    );
  }

  const q = questions[currentIndex];

  return (
    <div className="practice-system-container route-transition">
      <div className="practice-top-bar">
        <button className="back-btn" onClick={onBack}><ArrowLeft size={20}/> Menu</button>
        <div className="mode-title">Chapter Vocab</div>
        <div className="progress-text-small">{currentIndex + 1} / {questions.length}</div>
      </div>

      <div className="p-card">
        <div className="p-instruction">{q.instruction}</div>
        
        <div className="flex-center" style={{flexDirection: 'row', gap: '16px'}}>
          <div className={`p-question-arabic ${q.mainIsAr ? 'arabic-text' : ''}`} dir={q.mainIsAr ? "rtl" : "ltr"}>
            {q.mainText}
          </div>
          {q.mainIsAr && (
             <button className="part-tts-btn" onClick={() => speak(q.mainText.replace(/_+/g, ''))}>
               <Volume2 size={24} />
             </button>
          )}
        </div>

        <div className="p-options-grid" dir={q.options[0].isAr ? "rtl" : "ltr"}>
          {q.options.map((opt, i) => {
            const isSelected = selectedOption === opt.text;
            const isCorrectOpt = opt.text === q.answer;
            let btnClass = 'p-opt-btn';
            
            if (isAnswered) {
              if (isCorrectOpt) btnClass += ' correct';
              else if (isSelected) btnClass += ' wrong';
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
                <span className={opt.isAr ? 'arabic-text' : ''}>{opt.text}</span>
                {isAnswered && opt.en && <span className="en-hint ltr-zone">{opt.en}</span>}
              </button>
            );
          })}
        </div>
      </div>

      <button className="btn-primary p-next-btn" onClick={handleNext} disabled={!isAnswered}>
        {currentIndex === questions.length - 1 ? 'Finish' : 'Next'}
      </button>
    </div>
  );
};

export default GeneralWordPractice;