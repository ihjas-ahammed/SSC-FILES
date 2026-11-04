import React, { useState } from 'react';
import { PlayCircle, Volume2 } from 'lucide-react';
import { useTTS } from '../hooks/useTTS';
import { sectionSummaries } from '../data/summaries';
import Lesson from './Lesson';
import './SummaryTab.css';

const SummaryTab = ({ activeSection }) => {
  const { speak } = useTTS();
  const [activeLesson, setActiveLesson] = useState(null);

  // Fetch concise summary from summaries.js based on active section
  const summaryChunks = sectionSummaries[activeSection.id] || [];
  
  const fullParagraph = summaryChunks.length > 0 
    ? summaryChunks.map(c => c.sentence.arabic).join(' ')
    : "No concise summary data available yet.";

  // Auto-generate Sentence Builder Slide (Step 4)
  const generateBuilderSlide = (sentenceSlide) => {
    if (!sentenceSlide.parts || sentenceSlide.parts.length === 0) return null;
    
    return {
      type: 'sentence-builder',
      questionType: 'en-to-ar',
      question: sentenceSlide.english,
      correctOrder: sentenceSlide.parts.map((_, i) => i + 1),
      blocks: sentenceSlide.parts.map((p, i) => ({
        id: i + 1,
        text: p.ar.trim(),
        trans: p.en.trim()
      }))
    };
  };

  const handleStartMemorizeAll = () => {
    if (summaryChunks.length === 0) return;

    const allSlides = [];
    
    // Assemble the slides sequentially for the entire chapter summary
    summaryChunks.forEach(chunk => {
      allSlides.push(chunk.sentence);
      allSlides.push(...chunk.vocabs);
      if (chunk.fillBlank) allSlides.push(chunk.fillBlank);
      
      const builderSlide = generateBuilderSlide(chunk.sentence);
      if (builderSlide) allSlides.push(builderSlide);
    });

    setActiveLesson({
      id: `summary_mem_full_${activeSection.id}`,
      title: "Memorize Chapter Outline",
      slides: allSlides
    });
  };

  return (
    <div className="summary-tab-container route-transition">
      {/* If a lesson is active, render it over the tab */}
      {activeLesson && (
        <Lesson 
          lesson={activeLesson} 
          onClose={() => setActiveLesson(null)} 
        />
      )}

      <div className="summary-paragraph-card">
        <h2>Key Points to Memorize</h2>
        
        {summaryChunks.length > 0 ? (
          <>
            <div className="flex-center" style={{ flexDirection: 'row' }}>
              <button className="tts-button" onClick={() => speak(fullParagraph)}>
                <Volume2 size={24} />
              </button>
            </div>
            
            <p className="full-paragraph-ar arabic-text" dir="rtl">
              {fullParagraph}
            </p>

            <button 
              className="memorize-all-btn"
              onClick={handleStartMemorizeAll}
            >
              <PlayCircle size={28} />
              <span>Start Memorization</span>
            </button>
            
            <p className="text-dim text-center" style={{ fontSize: '0.95rem', lineHeight: '1.4' }}>
              Master the core ideas of this chapter. You will read, learn the vocabulary, fill in the blanks, and rebuild the sentences from scratch.
            </p>
          </>
        ) : (
          <p className="text-dim">Summary content is being prepared for this section.</p>
        )}
      </div>
    </div>
  );
};

export default SummaryTab;