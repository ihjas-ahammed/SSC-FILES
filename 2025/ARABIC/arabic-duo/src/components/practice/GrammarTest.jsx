import React, { useState, useMemo } from 'react';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { examDataBySection } from '../../data/examData';
import './PracticeStyles.css';

const GrammarTest = ({ type, activeSection, onBack }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  // Fetch data scoped to the active section, fallback to 'default' if not found
  const sectionData = examDataBySection[activeSection?.id] || examDataBySection['default'];

  // Combine datasets based on requested type
  const questions = useMemo(() => {
    let raw = [];
    if (type === 'vocab_plurals') {
      raw = [...(sectionData.singularPlural || [])].sort(() => Math.random() - 0.5);
      // Map to MCQ format
      return raw.map(item => {
        const isToPlural = item.type === "to_plural";
        const instruction = isToPlural ? "اكتب الجمع (Write the Plural):" : "اكتب المفرد (Write the Singular):";
        
        // Generate distractors from same dataset
        let options = raw.filter(x => x.a !== item.a).sort(() => Math.random() - 0.5).slice(0, 3).map(x => x.a);
        options.push(item.a);
        options.sort(() => Math.random() - 0.5);

        return {
          instruction,
          qAr: item.q,
          qEn: item.en,
          options: options.map(o => ({ ar: o, en: "" })),
          answer: item.a
        };
      });
    } else if (type === 'form_q') {
      raw = [...(sectionData.formQuestions || [])].sort(() => Math.random() - 0.5);
      return raw.map(item => {
        let options = raw.filter(x => x.question !== item.question).sort(() => Math.random() - 0.5).slice(0, 3).map(x => ({ ar: x.question, en: x.en_question }));
        options.push({ ar: item.question, en: item.en_question });
        options.sort(() => Math.random() - 0.5);
        
        return {
          instruction: "كوّن سؤالاً (Form a question):",
          qAr: item.statement,
          qEn: item.en_statement,
          options,
          answer: item.question
        }
      });
    } else {
      // Default to combined grammar/blanks
      raw = [...(sectionData.grammarChoices || []), ...(sectionData.fillBlanks || [])].sort(() => Math.random() - 0.5);
      return raw.map(item => {
        let ops = [];
        if (item.en_options) {
          ops = item.options.map((o, i) => ({ ar: o, en: item.en_options[i] }));
        } else {
          ops = item.options.map(o => ({ ar: o, en: "" }));
        }

        return {
          instruction: "اختر الكلمة المناسبة (Choose the correct word):",
          qAr: item.question,
          qEn: item.en_translation || item.en,
          options: ops,
          answer: item.answer
        };
      });
    }
  }, [type, sectionData]);

  const handleSelect = (opt) => {
    if (isAnswered) return;
    setSelectedOption(opt.ar);
    setIsAnswered(true);
    if (opt.ar === questions[currentIndex].answer) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(i => i + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
    }
  };

  let title = "Grammar Exam";
  if (type === 'vocab_plurals') title = "Singular & Plural";
  if (type === 'form_q') title = "Form Questions";

  if (questions.length === 0) {
    return (
      <div className="practice-system-container route-transition">
        <div className="practice-top-bar">
          <button className="back-btn" onClick={onBack}><ArrowLeft size={20}/> Back</button>
        </div>
        <div className="text-center p-6 text-dim">No data available for this section yet.</div>
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
          <div className="finish-title">Test Complete!</div>
          <p className="text-dim" style={{fontSize: '1.4rem'}}>Score: {score} / {questions.length}</p>
          <button className="btn-primary mt-4 flex-center" onClick={onBack} style={{flexDirection:'row'}}>
             Finish & Return
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
        <div className="mode-title">{title}</div>
        <div className="progress-text-small">{currentIndex + 1} / {questions.length}</div>
      </div>

      <div className="p-card">
        <div className="p-instruction">{q.instruction}</div>
        <div className="p-question-arabic arabic-text" dir="rtl">{q.qAr}</div>
        <div className="p-question-english">{q.qEn}</div>

        <div className="p-options-grid" dir="rtl">
          {q.options.map((opt, i) => {
            const isSelected = selectedOption === opt.ar;
            const isCorrect = opt.ar === q.answer;
            let btnClass = 'p-opt-btn';

            if (isAnswered) {
              if (isCorrect) btnClass += ' correct';
              else if (isSelected) btnClass += ' wrong';
            } else if (isSelected) {
              btnClass += ' selected';
            }

            return (
              <button 
                key={i} 
                className={btnClass}
                onClick={() => handleSelect(opt)}
                disabled={isAnswered}
              >
                <span className="arabic-text">{opt.ar}</span>
                {opt.en && <span className="en-hint" dir="ltr">{opt.en}</span>}
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

export default GrammarTest;