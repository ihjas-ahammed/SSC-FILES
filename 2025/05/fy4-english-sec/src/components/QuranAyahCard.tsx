import React, { useState } from 'react';
import { Slide } from '../types';
import MathRenderer from './MathRenderer';
import { playGeminiAudio } from '../utils/audio';
import { Loader2 } from 'lucide-react';

interface Props {
  slide: Slide;
  onComplete: () => void;
}

const QuranAyahCard: React.FC<Props> = ({ slide, onComplete }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTTS = async () => {
    if (isPlaying) return;
    setIsPlaying(true);
    
    try {
      // 1. Play Arabic first
      if (slide.arabicText) {
        await playGeminiAudio(slide.arabicText, "Read this Arabic text accurately and beautifully with clear pronunciation:");
      }

      // 2. Play English translation second
      const englishText = slide.translation || slide.content;
      if (englishText) {
        await playGeminiAudio(englishText, "Read this English text clearly and naturally:");
      }
    } finally {
      setIsPlaying(false);
    }
  };

  return (
    <div className="flex flex-col h-full animate-in fade-in zoom-in-95 duration-500">
      {/* FIXED OVERFLOW: Changed from items-center justify-center to m-auto inside a flex-col */}
      <div className="flex-grow overflow-y-auto no-scrollbar pb-6 px-1 flex flex-col">
         
         <div className="w-full mb-6 flex justify-between items-center px-2 mt-4 shrink-0">
            <h2 className="text-sm font-black text-duo-green uppercase tracking-widest">
              {slide.title || 'Translation'}
            </h2>
            <button 
              onClick={handleTTS}
              disabled={isPlaying}
              className={`p-2 rounded-full transition-all flex items-center justify-center gap-2 ${isPlaying ? 'bg-green-500/20 text-green-400' : 'bg-white/5 hover:bg-white/10 active:scale-90 text-slate-300'}`}
              aria-label="Play Arabic and Translation"
              title="Play Arabic and Translation"
            >
              {isPlaying ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                   <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                   <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                   <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
                </svg>
              )}
            </button>
         </div>

         {/* This container pushes the card to the center if short, but scrolls naturally if tall */}
         <div className="m-auto w-full">
           <div className="ayah-card-bg p-8 rounded-3xl w-full mb-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-duo-green opacity-10 rounded-full blur-3xl -mr-10 -mt-10"></div>
              
              {slide.arabicText && (
                <div className="arabic-text text-4xl md:text-5xl font-bold text-white mb-8 drop-shadow-md">
                  {slide.arabicText}
                </div>
              )}

              {slide.transliteration && (
                <div className="text-sm font-medium text-slate-400 italic mb-6 text-center">
                  {slide.transliteration}
                </div>
              )}

              <div className="text-lg font-medium text-slate-200 leading-relaxed border-t border-white/10 pt-6">
                <MathRenderer content={slide.translation || slide.content} />
              </div>
           </div>
         </div>

      </div>
      
      <div className="pt-4 border-t border-white/10 shrink-0">
        <button
          onClick={onComplete}
          className="w-full bg-duo-green border-duo-green-dark border-b-4 hover:bg-green-500 text-white font-black py-4 rounded-2xl uppercase tracking-widest transition-all active:border-b-0 active:translate-y-1 shadow-md"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default QuranAyahCard;