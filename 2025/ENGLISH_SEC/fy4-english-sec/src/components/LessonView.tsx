import React, { useState, useRef, useEffect } from 'react';
import { Lesson } from '../types';
import MathRenderer from './MathRenderer';
import QuizView from './QuizView';
import FillInBlankView from './FillInBlankView';
import ExampleView from './ExampleView';
import InteractiveProofView from './InteractiveProofView';
import NumericalView from './NumericalView';
import InteractiveCanvasView from './InteractiveCanvasView';
import CanvasArt from './CanvasArt';
import QuranAyahCard from './QuranAyahCard';
import WordCardView from './WordCardView';
import MatchTheFollowingView from './MatchTheFollowingView';
import ProgressBar from './ProgressBar';
import { X, ChevronLeft, ChevronRight, Type, BookOpen } from 'lucide-react';
import '../styles/quran.css';

interface Props {
  lesson: Lesson;
  onFinishLesson: (stats: { timeSpent: number, accuracy: number }) => void;
  onExit: () => void;
}

type FontSize = 'sm' | 'md' | 'lg';

const FONT_SIZE_MAP: Record<FontSize, string> = {
  sm: 'text-[15px] leading-[1.7]',
  md: 'text-[17px] leading-[1.75]',
  lg: 'text-[19px] leading-[1.8]',
};

const FONT_SIZE_LABEL: Record<FontSize, string> = {
  sm: 'A-',
  md: 'A',
  lg: 'A+',
};

const LessonView: React.FC<Props> = ({ lesson, onFinishLesson, onExit }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [fontSize, setFontSize] = useState<FontSize>(() => {
    const saved = localStorage.getItem('ssc_reader_font_size');
    if (saved === 'sm' || saved === 'md' || saved === 'lg') return saved;
    return 'md';
  });
  const currentSlide = lesson.slides[currentSlideIndex];

  const progress = ((currentSlideIndex) / lesson.slides.length) * 100;

  const startTime = useRef(Date.now());
  const stats = useRef({ total: 0, mistakes: 0 });
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    localStorage.setItem('ssc_reader_font_size', fontSize);
  }, [fontSize]);

  useEffect(() => {
    contentRef.current?.scrollTo({ top: 0, behavior: 'auto' });
  }, [currentSlideIndex]);

  const handleInteraction = (correct: boolean) => {
    stats.current.total += 1;
    if (!correct) {
      stats.current.mistakes += 1;
    }
  };

  const handleContinue = () => {
    if (currentSlideIndex < lesson.slides.length - 1) {
      setCurrentSlideIndex(prev => prev + 1);
    } else {
      const timeSpent = Math.floor((Date.now() - startTime.current) / 1000);
      let accuracy = 100;
      if (stats.current.total > 0) {
        accuracy = Math.round(((stats.current.total - stats.current.mistakes) / stats.current.total) * 100);
      }
      onFinishLesson({ timeSpent, accuracy: Math.max(0, accuracy) });
    }
  };

  const handlePrev = () => {
    if (currentSlideIndex > 0) setCurrentSlideIndex(prev => prev - 1);
  };

  const cycleFontSize = () => {
    setFontSize(prev => (prev === 'sm' ? 'md' : prev === 'md' ? 'lg' : 'sm'));
  };

  const renderContent = () => {
    if (currentSlide.type === 'ayah') {
      return <QuranAyahCard key={currentSlide.id} slide={currentSlide} onComplete={handleContinue} />;
    }

    if (currentSlide.type === 'word_card') {
      return <WordCardView key={currentSlide.id} slide={currentSlide} onComplete={handleContinue} />;
    }

    if (currentSlide.type === 'match_the_following') {
      return <MatchTheFollowingView key={currentSlide.id} slide={currentSlide} onComplete={handleContinue} onInteraction={handleInteraction} />;
    }

    if (currentSlide.type === 'quiz') {
      return <QuizView key={currentSlide.id} slide={currentSlide} onComplete={handleContinue} onInteraction={handleInteraction} />;
    }

    if (currentSlide.type === 'fill_in_blank') {
      return <FillInBlankView key={currentSlide.id} slide={currentSlide} onComplete={handleContinue} onInteraction={handleInteraction} />;
    }

    if (currentSlide.type === 'example_q') {
      return <ExampleView key={currentSlide.id} slide={currentSlide} onComplete={handleContinue} />;
    }

    if (currentSlide.type === 'numerical') {
      return <NumericalView key={currentSlide.id} slide={currentSlide} onComplete={handleContinue} onInteraction={handleInteraction} />;
    }

    if (currentSlide.type === 'proof' || currentSlide.type === 'solution') {
      return <InteractiveProofView key={currentSlide.id} slide={currentSlide} onComplete={handleContinue} onInteraction={handleInteraction} />;
    }

    if (currentSlide.type === 'interactive_canvas') {
      return <InteractiveCanvasView key={currentSlide.id} slide={currentSlide} onComplete={handleContinue} />;
    }

    // Reading slide (theory / example) — redesigned reader UI
    return (
      <div key={currentSlide.id} className="flex flex-col h-full animate-in fade-in slide-in-from-right-4 duration-300">
        <div ref={contentRef} className="flex-grow overflow-y-auto no-scrollbar reader-scroll">
          <article className="reader-article max-w-2xl mx-auto pb-8">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-3">
              <div className="px-2 py-1 rounded-md bg-duo-blue/15 border border-duo-blue/30">
                <span className="text-[9px] font-black uppercase tracking-widest text-duo-blue">
                  Slide {currentSlideIndex + 1} of {lesson.slides.length}
                </span>
              </div>
              <div className="px-2 py-1 rounded-md bg-white/[0.03] border border-white/10">
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">
                  {lesson.title}
                </span>
              </div>
            </div>

            {/* Title */}
            {currentSlide.title && (
              <h1 className="reader-title text-white font-black text-2xl sm:text-[28px] leading-[1.2] mb-5 tracking-tight">
                {currentSlide.title}
              </h1>
            )}

            {/* Body */}
            <div className={`reader-body text-slate-100 ${FONT_SIZE_MAP[fontSize]} font-medium`}>
              <MathRenderer content={currentSlide.content} />
            </div>

            {/* Canvas art */}
            {currentSlide.canvasId && (
              <div className="mt-6">
                <CanvasArt canvasId={currentSlide.canvasId} />
              </div>
            )}

            {/* Image */}
            {currentSlide.image && !currentSlide.canvasId && (
              <div className="mt-6 w-full max-w-[320px] mx-auto">
                <div className="glass-panel rounded-3xl p-3">
                  <img
                    src={currentSlide.image}
                    alt="Lesson Concept"
                    className="rounded-2xl w-full h-auto object-contain bg-white/10"
                  />
                </div>
              </div>
            )}

            {/* End-of-slide divider for next-slide hint */}
            {currentSlideIndex < lesson.slides.length - 1 && (
              <div className="mt-8 flex items-center justify-center gap-2 opacity-50">
                <div className="h-px bg-white/10 flex-grow max-w-[80px]" />
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-500">
                  Continue ↓
                </span>
                <div className="h-px bg-white/10 flex-grow max-w-[80px]" />
              </div>
            )}
          </article>
        </div>

        {/* Slide indicator dots */}
        {lesson.slides.length > 1 && lesson.slides.length <= 24 && (
          <div className="shrink-0 flex justify-center gap-1 py-2 px-2 flex-wrap">
            {lesson.slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlideIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === currentSlideIndex
                    ? 'w-6 bg-duo-blue'
                    : i < currentSlideIndex
                    ? 'w-1.5 bg-duo-blue/40'
                    : 'w-1.5 bg-white/10'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        )}

        {/* Footer nav */}
        <div className="pt-3 pb-1 shrink-0 flex gap-2">
          {currentSlideIndex > 0 && (
            <button
              onClick={handlePrev}
              className="w-14 bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] text-slate-300 font-black py-4 rounded-2xl transition-all active:scale-95 flex items-center justify-center"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}
          <button
            onClick={handleContinue}
            className="flex-grow bg-duo-green border-duo-green-dark border-b-4 hover:bg-green-500 text-white font-black py-4 rounded-2xl uppercase tracking-widest transition-all active:border-b-0 active:translate-y-1 shadow-md flex items-center justify-center gap-2"
          >
            {currentSlideIndex < lesson.slides.length - 1 ? (
              <>Continue <ChevronRight className="w-5 h-5" /></>
            ) : (
              <>Finish <BookOpen className="w-5 h-5" /></>
            )}
          </button>
        </div>
      </div>
    );
  };

  const isReadingSlide = currentSlide.type === 'theory' || currentSlide.type === 'example';

  return (
    <div className="absolute inset-0 bg-[#0b0f19] z-[9999] flex flex-col w-full h-full overflow-hidden shadow-2xl reader-bg">
      <div className="h-14 flex items-center justify-between px-3 sm:px-4 glass-panel border-t-0 border-x-0 rounded-none shrink-0 z-[10005] relative">
        <button
          onClick={(e) => { e.preventDefault(); onExit(); }}
          type="button"
          className="w-10 h-10 flex items-center justify-center cursor-pointer rounded-full hover:bg-white/10 active:scale-90 transition-transform text-slate-400 z-[10010]"
          aria-label="Exit Lesson"
        >
          <X className="w-5 h-5 stroke-[3]" />
        </button>

        <div className="flex-grow mx-3">
          <ProgressBar percentage={progress} />
        </div>

        {isReadingSlide && (
          <button
            onClick={cycleFontSize}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 active:scale-90 transition-transform text-slate-300 z-[10010] gap-0.5"
            aria-label="Change font size"
            title={`Font size: ${fontSize}`}
          >
            <Type className="w-4 h-4" />
            <span className="text-[10px] font-black ml-0.5">{FONT_SIZE_LABEL[fontSize]}</span>
          </button>
        )}
      </div>

      <div className="flex-grow relative overflow-hidden px-4 sm:px-5 py-4 z-[10000]">
        {renderContent()}
      </div>
    </div>
  );
};

export default LessonView;
